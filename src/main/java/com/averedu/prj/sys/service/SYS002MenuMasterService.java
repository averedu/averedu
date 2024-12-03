/*------------------------------------------------------------------------------  								
 * NAME : SYS002MenuMasterService.java                                                                    		
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
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS002MenuMasterService {                                                                        
	                                                                                                                
	/**                                                                                                             
	 * 기초메뉴정보리스트 조회(retrieveMenuMasterList)                                                    
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void retrieveMenuMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
	/**                                                                                                             
	 * 기초메뉴정보리스트 저장/수정(saveMenuMasterList)                                                  
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                             
	public void saveMenuMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
	/**                                                                                                             
	 * 기초메뉴정보리스트 삭제(deleteMenuMasterList)                                                      
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */                                                                                                            	
	public void deleteMenuMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
