package com.msu.common;

import java.sql.Statement;
import java.util.Properties;

import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.apache.ibatis.session.ResultHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
          @Signature(type = StatementHandler.class, method = "update", args = {Statement.class})
         ,@Signature(type = StatementHandler.class, method = "query",  args = {Statement.class, ResultHandler.class}) 
     }
)
public class UpdateInterceptor implements Interceptor
{
    private Logger log = LoggerFactory.getLogger(getClass());
    
    @Override
    public Object intercept(Invocation invocation) throws Throwable
    {
    	NexacroPlatformConstant.SQL_LOG = null;

        StatementHandler handler = (StatementHandler) invocation.getTarget();        
        String sql = handler.getBoundSql().getSql();
        
        String param = handler.getParameterHandler().getParameterObject() != null ? handler.getParameterHandler().getParameterObject().toString() : "";

        NexacroPlatformConstant.SQL_LOG = sql;
        NexacroPlatformConstant.SQL_ID = "";
        NexacroPlatformConstant.PARAM = param.toString();
        
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
