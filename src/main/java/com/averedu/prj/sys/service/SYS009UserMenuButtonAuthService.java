/*------------------------------------------------------------------------------  								
 * NAME : SYS009UserMenuButtonAuthService.java                                                                    		
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
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;
import com.averedu.common.vo.SessionVO;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS009UserMenuButtonAuthService {                                                                        
	                                                                                                                
	 /**                                                                                                          
     * 기초사용자리스트 조회(retrieveUserInfoList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveUserInfoList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
    
    /**                                                                                                          
     * 기초권한메뉴리스트 조회(retrieveUserAuthMenuList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveUserAuthMenuList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
    
    /**                                                                                                          
     * 사용자메뉴별버튼권한리스트 조회(retrieveUserMenuButtonAuthList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveUserMenuButtonAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 사용자메뉴별버튼권한리스트 저장/수정(saveUserMenuButtonAuthList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveUserMenuButtonAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 사용자메뉴별버튼권한리스트 삭제(deleteUserMenuButtonAuthList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteUserMenuButtonAuthList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
