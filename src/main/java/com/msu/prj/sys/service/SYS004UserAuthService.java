/*------------------------------------------------------------------------------  								
 * NAME : SYS004UserAuthService.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 프로젝트 명을 기입                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2019/05/03  jiback                                                               
 *------------------------------------------------------------------------------*/                               
package com.msu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS004UserAuthService {                                                                        
	                                                                                                                
	/**                                                                                                             
	 * 교육생권한코드리스트 조회(retrieveAuthMasterList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveAuthMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	
	
	/**                                                                                                             
	 * 교육생권한코드리스트 조회(retrieveUserAuthList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveUserAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
	
	/**                                                                                                             
	 * 교육생권한코드리스트 조회(retrieveUserList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveUserList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	/**                                                                                                             
	 * 교육생권한코드리스트 저장/수정(saveUserAuthList)                                                  
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void saveUserAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                  
	/**                                                                                                          
	* 사용자관할부서리스트 조회(retrieveUserAuthCtrlDeptList)                                                 
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void retrieveUserAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	 
	/**                                                                                                          
	* 사용자관할부서리스트 저장/수정(saveUserAuthCtrlDeptList)                                               
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void saveUserAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	 
	/**                                                                                                          
	* 사용자관할부서리스트 삭제(deleteUserAuthCtrlDeptList)                                                   
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void deleteUserAuthCtrlDeptList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
		      
                                                                                                                 
}                                                                                                                
