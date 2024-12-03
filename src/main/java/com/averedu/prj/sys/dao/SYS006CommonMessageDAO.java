/*------------------------------------------------------------------------------  							
 * NAME : SYS006CommonMessageDAO.java                                                                    	
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 프로젝트 명을 기입                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2019/05/09  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS006CommonMessageDAO")                                                          	
public class SYS006CommonMessageDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 메세지 리스트 조회(retrieveCommonMessageList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonMessageList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS006CommonMessageDAO.retrieveCommonMessageList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 메세지 리스트 키값을 조회(retrieveCommonMessageListPKey)                                      
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonMessageListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS006CommonMessageDAO.retrieveCommonMessageListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 메세지 리스트 중복 체크조회(retrieveCommonMessageListKey)                                    
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonMessageListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS006CommonMessageDAO.retrieveCommonMessageListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 메세지 리스트 저장(insertCommonMessageList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommonMessageList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS006CommonMessageDAO.insertCommonMessageList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 메세지 리스트 수정(updateCommonMessageList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommonMessageList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS006CommonMessageDAO.updateCommonMessageList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 메세지 리스트 삭제(deleteCommonMessageList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommonMessageList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS006CommonMessageDAO.deleteCommonMessageList", map);                       
    }                                                                                                        
}                                                                                                            
