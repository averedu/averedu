/*------------------------------------------------------------------------------  							
 * NAME : SYS008CommonComponentDAO.java                                                                    	
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
                                                                                                             
@Repository("SYS008CommonComponentDAO")                                                          	
public class SYS008CommonComponentDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 컴포넌트다국어 리스트 조회(retrieveCommonComponentList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonComponentList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS008CommonComponentDAO.retrieveCommonComponentList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 컴포넌트다국어 리스트 키값을 조회(retrieveCommonComponentListPKey)                                      
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonComponentListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS008CommonComponentDAO.retrieveCommonComponentListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 컴포넌트다국어 리스트 저장(insertCommonComponentList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommonComponentList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS008CommonComponentDAO.insertCommonComponentList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 컴포넌트다국어 리스트 수정(updateCommonComponentList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommonComponentList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS008CommonComponentDAO.updateCommonComponentList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 컴포넌트다국어 리스트 삭제(deleteCommonComponentList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommonComponentList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS008CommonComponentDAO.deleteCommonComponentList", map);                       
    }                                                                                                        
}                                                                                                            
