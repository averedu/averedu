/*------------------------------------------------------------------------------  							
 * NAME : COM_01_DAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 목포과학대 차세대 프로젝트                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2020/11/19  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.msu.prj.com.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("COM_P01_DAO")                                                          	
public class COM_P01_DAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 부서 리스트 조회(retrieve_01_)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieve_P01(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("COM_P01_DAO.retrieve_P01", map);          
    }                                                                                                                                                                                                            
}                                                                                                            
