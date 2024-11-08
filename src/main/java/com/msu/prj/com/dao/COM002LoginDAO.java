/*------------------------------------------------------------------------------  								  						
 * NAME : COM002LoginDAO.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   화면 로그인을 처리하는 프로세스		                                                                                     						
 *------------------------------------------------------------------------------*/   
package com.msu.prj.com.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("COM002LoginDAO")
public class COM002LoginDAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")
	public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
		super.setSqlSessionFactory(sqlSession);
	}
	
	/**                                                                                                             
	 * 사용자 로긴온(USER) 정보(retrieveLoginList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */  
	public Map<String,Object> retrieveLoginList(Map<String, Object> map) throws Exception {
		return selectOne("COM002LoginDAO.retrieveLoginList", map);
	}
	
	/**                                                                                                             
	 * 사용자 메뉴정보 조회(retrieveLoginMenuData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */ 
	public List<Map> retrieveLoginMenuData(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginMenuData", map);
	}
	
	/**                                                                                                             
	 * 즐겨찾기 메뉴 조회(retrieveBookmarkRegisterList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */ 
	public List<Map> retrieveBookmarkRegisterList(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveBookmarkRegisterList", map);
	}
	
	
	/**                                                                                                             
	 * 시스템에 날짜(retrieveLoginSystemDate)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */
	public List<Map> retrieveLoginSystemDate() throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginSystemDate","");
	}
	
	/**                                                                                                             
	 * DB로 메시지를 관리시(retrieveLoginMessageData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */   
	public List<Map> retrieveLoginMessageData(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginMessageData", map);
	}
	
	/**                                                                                                             
	 * DB로 컴퍼넌트를 관리시(retrieveLoginComponentData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */  
	public List<Map> retrieveLoginComponentData(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginComponentData", map);
	}
	
	/**                                                                                                             
	 * 로긴온 사용자권한(retrieveLoginUserAuth)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */ 
	public List<Map> retrieveLoginUserAuth(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginUserAuth", map);
	}
	
	
	/**                                                                                                             
	 * 화면시작시 로그인한 후 Left메뉴를 조회(retrieveLoginLeftMenuList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */ 
	
	public List<Map> retrieveLoginLeftMenuList(Map<String, Object> map) throws Exception {
		return selectList("COM002LoginDAO.retrieveLoginLeftMenuList", map);
	}
	
	
	/**                                                                                                      	
     * 화면에 즐겨찾기 저장(insertBookmarkRegister)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertBookmarkRegister(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("COM002LoginDAO.insertBookmarkRegister", map);                       
    }  
    
    
    /**                                                                                                      	
     * 화면에 즐겨찾기 삭제(deleteBookmark)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteBookmark(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("COM002LoginDAO.deleteBookmark", map);                       
    }      
}
