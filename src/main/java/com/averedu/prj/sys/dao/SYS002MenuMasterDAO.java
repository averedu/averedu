/*------------------------------------------------------------------------------  							
 * NAME : SYS002MenuMasterDAO.java                                                                    	
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 프로젝트 명을 기입                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2019/05/02  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS002MenuMasterDAO")                                                          	
public class SYS002MenuMasterDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                        
	 * 기초메뉴정보 리스트 조회(retrieveMenuMasterList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveMenuMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS002MenuMasterDAO.retrieveMenuMasterList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 기초메뉴정보 리스트 저장(insertMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void insertMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS002MenuMasterDAO.insertMenuMasterList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 기초메뉴정보 리스트 수정(updateMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void updateMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS002MenuMasterDAO.updateMenuMasterList", map);                       
    }                                                                                                        
    
    
	/**                                                                                                      	
	 * 사용자 즐겨찾기 메뉴삭제(deleteUserFavoriteMenuList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
	 public void deleteUserFavoriteMenuList(Map<String, Object> map) throws Exception {                          
	                                                                                                            
	   	delete("SYS002MenuMasterDAO.deleteUserFavoriteMenuList", map);                       
	 }    
	/**                                                                                                      	
   	 * 사용자메뉴별별 버튼권한 삭제(deleteUserMenuButtonAuthList)                                                 
   	 * @param input                                                                                         	
   	 * @return                                                                                              	
   	 * @throws Exception                                                                                   		
   	 */                                                                                                     	
	 public void deleteUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
	                                                                                                            
	   	delete("SYS002MenuMasterDAO.deleteUserMenuButtonAuthList", map);                       
	 }
	 
	/**                                                                                                      	
	 * 메뉴리스 권한  삭제(deleteAuthMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
     public void deleteAuthMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS002MenuMasterDAO.deleteAuthMasterList", map);                       
     }
	 /**                                                                                                      	
	 * 기초메뉴정보 리스트 삭제(deleteMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS002MenuMasterDAO.deleteMenuMasterList", map);                       
    } 
       
}                                                                                                            
