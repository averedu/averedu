/*------------------------------------------------------------------------------  								  						
 * NAME : COM002LoginService.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						    화면 로그인을 처리하는 프로세스		                                                                                     						
 *------------------------------------------------------------------------------*/  
package com.msu.prj.com.service;

import java.util.List;
import java.util.Map;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface COM002LoginService  {
	
	/**                                                                                                             
	 * 사용자 로긴온(USER) 정보(retrieveLoginList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */   
	public Map<String,Object> retrieveLoginList(Map<String, Object> map) throws Exception;
	
	/**                                                                                                             
	 * 사용자 메뉴정보 조회(retrieveLoginMenuData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */    
	public List<Map> retrieveLoginMenuData(Map<String, Object> map)throws Exception;
	
	
	/**                                                                                                             
	 * 즐겨찾기 메뉴 조회(retrieveBookmarkRegisterList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */    
	public List<Map> retrieveBookmarkRegisterList(Map<String, Object> map)throws Exception;
	
	
	/**                                                                                                             
	 * 시스템에 날짜(retrieveLoginSystemDate)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public List<Map> retrieveLoginSystemDate() throws Exception;
	
	/**                                                                                                             
	 * DB로 메시지를 관리시(retrieveLoginMessageData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public List<Map> retrieveLoginMessageData(Map<String, Object> map) throws Exception; 
		
	/**                                                                                                             
	 * DB로 컴퍼넌트를 관리시(retrieveLoginComponentData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */
	public List<Map> retrieveLoginComponentData(Map<String, Object> map) throws Exception; 
	
	/**                                                                                                             
	 * 로긴온 사용자권한(retrieveLoginUserAuth)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */
	public List<Map> retrieveLoginUserAuth(Map<String, Object> map) throws Exception;  
	
	
	/**                                                                                                                     	
	 * 화면시작시 로그인한 후 Left메뉴를 조회(retrieveLoginLeftMenuList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   

	public void retrieveLoginLeftMenuList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	
	/**                                                                                                          
     * 화면에 즐겨찾기 저장(saveBookmarkRegister)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveBookmarkRegister(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception; 
    
    /**                                                                                                          
     * 화면에 즐겨찾기 삭제(deleteBookmark)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteBookmark(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  

}
