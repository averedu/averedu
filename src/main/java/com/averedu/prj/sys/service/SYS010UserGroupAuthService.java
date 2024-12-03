/*------------------------------------------------------------------------------  								
 * NAME : SYS010UserGroupAuthService.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2021/01/25  bsoh                                                               
 *------------------------------------------------------------------------------*/                               
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;                                                                                            
                                                                                                                 
import com.averedu.common.vo.SessionVO;																        
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS010UserGroupAuthService {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 권한별사용자그룹리스트 조회(retrieveUserGroupAuthList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveUserGroupAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 권한별사용자그룹리스트 저장/수정(saveUserGroupAuthList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveUserGroupAuthList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 권한별사용자그룹리스트 삭제(deleteUserGroupAuthList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteUserGroupAuthList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
            
	/**                                                                                                          
	* 사용자그룹별관할부서리스트 조회(retrieveUserGroupAuthCtrlDeptList)                                                 
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void retrieveUserGroupAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	       
	/**                                                                                                          
	* 사용자그룹별관할부서리스트 저장/수정(saveUserGroupAuthCtrlDeptList)                                               
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void saveUserGroupAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	       
	/**                                                                                                          
	* 사용자그룹별관할부서리스트 삭제(deleteUserGroupAuthCtrlDeptList)                                                   
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void deleteUserGroupAuthCtrlDeptList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;         
}                                                                                                                
