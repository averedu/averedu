/*------------------------------------------------------------------------------  							
 * NAME : SYS007CommonUserDAO.java                                                                    	
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
package com.msu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS007CommonUserDAO")                                                          	
public class SYS007CommonUserDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 기초사용자 리스트 조회(retrieveCommonUserList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonUserList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS007CommonUserDAO.retrieveCommonUserList", map);          
    }                                                                                                        
                                                                                                             
                                                                                                         
                                                                                                             
    /**                                                                                                      
     * 기초사용자 리스트 중복 체크조회(retrieveCommonUserListKey)                                    
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommonUserListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS007CommonUserDAO.retrieveCommonUserListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초사용자 리스트 저장(insertCommonUserList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommonUserList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS007CommonUserDAO.insertCommonUserList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초사용자 리스트 수정(updateCommonUserList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommonUserList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS007CommonUserDAO.updateCommonUserList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
 	 * 사용자 즐겨찾기 메뉴삭제(deleteUserFavoriteMenuList)                                                 
 	 * @param input                                                                                         	
 	 * @return                                                                                              	
 	 * @throws Exception                                                                                   		
 	 */                                                                                                     	
 	 public void deleteUserFavoriteMenuList(Map<String, Object> map) throws Exception {                          
 	                                                                                                            
 	   	delete("SYS007CommonUserDAO.deleteUserFavoriteMenuList", map);                       
 	 }    
    
    /**                                                                                                      
     * 사용자 권한코드 리스트 삭제(deleteCommUserAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void deleteCommUserAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS007CommonUserDAO.deleteCommUserAuthList", map);                       
    }
    
    /**                                                                                                      	
   	 * 사용자메뉴별별 버튼권한 삭제(deleteUserMenuButtonAuthList)                                                 
   	 * @param input                                                                                         	
   	 * @return                                                                                              	
   	 * @throws Exception                                                                                   		
   	 */                                                                                                     	
     public void deleteUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                            
    	delete("SYS007CommonUserDAO.deleteUserMenuButtonAuthList", map);                       
     }
     
     /**                                                                                                      	
      * 기초사용자 리스트 삭제(deleteCommonUserList)                                                 
      * @param input                                                                                         	
      * @return                                                                                              	
      * @throws Exception                                                                                   		
      */                                                                                                     	
     public void deleteCommonUserList(Map<String, Object> map) throws Exception {                          
                                                                                                              
      	delete("SYS007CommonUserDAO.deleteCommonUserList", map);                       
     }
     
     
}                                                                                                            
