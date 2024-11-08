package com.msu.common;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.StringTokenizer;

import org.apache.ibatis.cache.CacheKey;
import org.apache.ibatis.executor.Executor;
import org.apache.ibatis.executor.statement.RoutingStatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.ParameterMapping;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;
import org.apache.ibatis.session.RowBounds;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;

/**  
 * @Class Name : QueryInterceptor.java
 * @Description : QueryInterceptor java Class
 * @Modification Information  
 * 
 * @author jiback
 * @since 2021.07.13
 * @version 1.0
 * @see
 * 
 *  Copyright (C) by avereduSystem All right reserved.
 */

@Intercepts
(
    {
        @Signature(type = Executor.class, method = "update", args = {MappedStatement.class, Object.class})
       ,@Signature(type = Executor.class, method = "query",  args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class, CacheKey.class, BoundSql.class})
       ,@Signature(type = Executor.class, method = "query",  args = {MappedStatement.class, Object.class, RowBounds.class, ResultHandler.class})
    }
)
public class QueryInterceptor implements Interceptor
{
    private Logger log = LogManager.getLogger(getClass());
    
    @Override
    public Object intercept(Invocation invocation) throws Throwable
    {
    	NexacroPlatformConstant.SQL_LOG = null;
    	
        Object[]        args     = invocation.getArgs();
        MappedStatement ms       = (MappedStatement)args[0];
        Object          param    = (Object)args[1];
        BoundSql        boundSql = ms.getBoundSql(param);
        
        String sql = boundSql.getSql();
        
        if(param == null){
            sql = sql.replaceFirst("\\?", "''");
        }else{
            if(param instanceof Integer || param instanceof Long || param instanceof Float || param instanceof Double){
        	sql = sql.replaceFirst("\\?", param.toString());
            }else if(param instanceof String){
        	sql = sql.replaceFirst("\\?", "'" + param + "'");
            }else if(param instanceof Map){
        	
        	List<ParameterMapping> paramMapping = boundSql.getParameterMappings();	
        	
        	for(ParameterMapping mapping : paramMapping){
        	    String propValue = mapping.getProperty();
        	    Object value = ((Map) param).get(propValue);

        	    if ( ((Map) param).containsKey(propValue)) {

            	    if(value instanceof String){
            		sql = sql.replaceFirst("\\?", "'" + value + "'");
            	    }else{        	    	
            		sql = sql.replaceFirst("\\?", value.toString());
            	    }
        	    } else {
        	    	sql = sql.replaceFirst("\\?", "'" + "" + "'");
        	    }
        	}
            } else {
        	
        	List<ParameterMapping> paramMapping = boundSql.getParameterMappings();
        	
        	Class<? extends Object> paramClass = param.getClass();

        	for(ParameterMapping mapping : paramMapping){
        	    String propValue = mapping.getProperty();
        	    Field field = paramClass.getDeclaredField(propValue);
        	    field.setAccessible(true);					// 멤버변수의 접근자가 private일 경우 reflection을 이용하여 값을 해당 멤버변수의 값을 가져오기 위해 별도로 셋팅
        	    Class<?> javaType = mapping.getJavaType();			// 해당 파라미터로 넘겨받은 사용자 정의 클래스 객체의 멤버변수의 타입
        	    
        	    if(String.class == javaType){				// SQL의 ? 대신에 실제 값을 넣는다. 이때 String 일 경우는 '를 붙여야 하기땜에 별도 처리
        		sql = sql.replaceFirst("\\?", "'" + field.get(param) + "'");
        	    }else{
        		sql = sql.replaceFirst("\\?", field.get(param).toString());
        	    }
        	    
        	}
            }
            
        }
                
        if ( sql.indexOf("LOG_CNT") < 0) {
        	System.out.println("");
        	System.out.println("===============================================================================================SQL LOG START===============================================================================================");
        	System.out.println("");
        	System.out.println("* PARAM ==> [" + param.toString() + " ]");
        	System.out.println("");
       	  	if ( !ms.getId().toString().equals("")) {
       	  		System.out.println("* QUERY ID ==> [ " + ms.getId() + " ]");
       	  	} else {
       	  		System.out.println("* QUERY ID ==> [ " + NexacroPlatformConstant.SQL_ID + " ]");
       	  	}        	
        	System.out.println("");
        	System.out.println(sql);
        	System.out.println("");
        	System.out.println("===============================================================================================SQL LOG END===============================================================================================");
        	System.out.println("");
        	System.out.println("");
        	System.out.println("");
        	System.out.println("");
        }
        
        sql = "";
        return invocation.proceed();
    }

    @Override
    public Object plugin(Object target)
    {
        return Plugin.wrap(target, this);
    }


    @Override
    public void setProperties(Properties properties)
    {
    }
}