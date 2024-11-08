/*------------------------------------------------------------------------------  							
 * NAME : SYS011AuthTargetUserDAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                       
 * Copyright 2020 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2021/01/25  bsoh                                                           
 *------------------------------------------------------------------------------*/                           
package com.msu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS011AuthTargetUserDAO")                                                          	
public class SYS011AuthTargetUserDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 조회(retrieveAuthTargetUserList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAuthTargetUserList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS011AuthTargetUserDAO.retrieveAuthTargetUserList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 키값을 조회(retrieveAuthTargetUserListPKey)                                        
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAuthTargetUserListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS011AuthTargetUserDAO.retrieveAuthTargetUserListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 중복 체크조회(retrieveAuthTargetUserListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAuthTargetUserListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS011AuthTargetUserDAO.retrieveAuthTargetUserListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 저장(insertAuthTargetUserList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void insertAuthTargetUserList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS011AuthTargetUserDAO.insertAuthTargetUserList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 수정(updateAuthTargetUserList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void updateAuthTargetUserList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS011AuthTargetUserDAO.updateAuthTargetUserList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한부여대상자 리스트 삭제(deleteAuthTargetUserList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void deleteAuthTargetUserList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS011AuthTargetUserDAO.deleteAuthTargetUserList", map);                       
    }                                                                                                        
}                                                                                                            
