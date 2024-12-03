/*------------------------------------------------------------------------------  								
 * NAME : SYS003AuthMenuMasterService.java                                                                    		
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
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS003AuthMenuMasterService {                                                                        
	                                                                                                                
	/**                                                                                                             
	 * 기초권한테이블리스트 조회(retrieveAuthMenuMasterList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveAuthMenuMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	
	
	/**                                                                                                             
	 * 기초권한메뉴리스트 조회(retrieveAuthMenuDetailList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveAuthMenuDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
                                                                                                                 
	/**                                                                                                             
	 * 기초권한테이블리스트 저장/수정(saveAuthMenuMasterList)                                                  
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void saveAuthMenuMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
	/**                                                                                                             
	 * 기초권한테이블리스트 저장/수정(saveAuthMenuDetailList)                                                  
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void saveAuthMenuDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	
	/**                                                                                                             
	 * 기초권한테이블리스트 삭제(deleteAuthMenuMasterList)                                                      
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                            	
	public void deleteAuthMenuMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
      
    /**                                                                                                          
     * 부서트리(조직도)리스트 조회(retrieveAuthDeptTreeList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveAuthDeptTreeList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    
	/**                                                                                                          
	* 권한별관활부서리스트 조회(retrieveAuthCtrlDeptList)                                                 
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void retrieveAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
    /**                                                                                                          
     * 권한별관활부서리스트 저장/수정(saveAuthCtrlDeptList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveAuthCtrlDeptList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 권한별관활부서리스트 삭제(deleteAuthCtrlDeptList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteAuthCtrlDeptList(Map<String, DataSetMap> inDataset, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception; 	
    
}                                                                                                                
