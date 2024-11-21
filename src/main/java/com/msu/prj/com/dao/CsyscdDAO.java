/*------------------------------------------------------------------------------  							
 * NAME : CsyscdDAO.java                                                                    	
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 프로젝트 명을 기입                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2019/05/08  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.msu.prj.com.dao;                                                                   	            
                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("CsyscdDAO")                                                          	
public class CsyscdDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 기초표준코드1 리스트 조회(retrieveCommCodeMasterList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("CsyscdDAO.retrieveCommCodeMasterList", map);          
    }          
    
    /**                                                                                                      
     * 세부코드 리스트 조회(retrieveCommCodeDetailList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeDetailList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("CsyscdDAO.retrieveCommCodeDetailList", map);          
    }                         
    
    
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 저장(insertCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("CsyscdDAO.insertCommCodeMasterList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초표준코드1 리스트 수정(updateCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("CsyscdDAO.updateCommCodeMasterList", map);                       
    }                                                                                                           
}                                                                                                            
