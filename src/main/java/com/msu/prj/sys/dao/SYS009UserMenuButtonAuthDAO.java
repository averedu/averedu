/*------------------------------------------------------------------------------  							
 * NAME : SYS009UserMenuButtonAuthDAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 보람상조 차세대 프로젝트                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2020/06/29  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.msu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS009UserMenuButtonAuthDAO")                                                          	
public class SYS009UserMenuButtonAuthDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 기초사용자 리스트 조회(retrieveUserInfoList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserInfoList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS009UserMenuButtonAuthDAO.retrieveUserInfoList", map);          
    }                                                                                                        
    
    
    /**                                                                                                      
     * 기초권한메뉴 리스트 조회(retrieveUserAuthMenuList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserAuthMenuList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS009UserMenuButtonAuthDAO.retrieveUserAuthMenuList", map);          
    }                                                                                                        
        
    
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 조회(retrieveUserMenuButtonAuthList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 키값을 조회(retrieveUserMenuButtonAuthListPKey)                                        
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserMenuButtonAuthListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 중복 체크조회(retrieveUserMenuButtonAuthListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserMenuButtonAuthListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 저장(insertUserMenuButtonAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void insertUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS009UserMenuButtonAuthDAO.insertUserMenuButtonAuthList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 수정(updateUserMenuButtonAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void updateUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS009UserMenuButtonAuthDAO.updateUserMenuButtonAuthList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 사용자메뉴별버튼권한 리스트 삭제(deleteUserMenuButtonAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void deleteUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS009UserMenuButtonAuthDAO.deleteUserMenuButtonAuthList", map);                       
    }                                                                                                        
}                                                                                                            
