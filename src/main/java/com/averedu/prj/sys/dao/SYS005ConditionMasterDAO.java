/*------------------------------------------------------------------------------  												
 * NAME : SYS005ConditionMasterDAO.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 프로젝트 명을 기입                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2022/11/17                                                                             
 *------------------------------------------------------------------------------*/

package com.averedu.prj.sys.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("SYS005ConditionMasterDAO")
public class SYS005ConditionMasterDAO extends EgovAbstractMapper {
	
	@Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }
	
	/**                                                                                                      
     * 신청제어항목관리 리스트 조회(retrieveConditionMasterList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveConditionMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterDAO.retrieveConditionMasterList", map);          
    }
	
    /**                                                                                                      	
     * 신청제어항목관리 리스트 저장(insertConditionMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertConditionMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS005ConditionMasterDAO.insertConditionMasterList", map);                       
    }
    
    /**                                                                                                      	
     * 신청제어항목관리 리스트 수정(updateConditionMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateConditionMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS005ConditionMasterDAO.updateConditionMasterList", map);                       
    }
    
    /**                                                                                                      	
     * 신청제어항목관리 리스트 삭제(deleteConditionMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteConditionMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS005ConditionMasterDAO.deleteConditionMasterList", map);                       
    }
    
}
