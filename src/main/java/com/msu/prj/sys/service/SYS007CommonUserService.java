/*------------------------------------------------------------------------------  								
 * NAME : SYS007CommonUserService.java                                                                    		
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
package com.msu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS007CommonUserService {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 기초사용자리스트 조회(retrieveCommonUserList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveCommonUserList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 기초사용자리스트 저장/수정(saveCommonUserList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommonUserList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 기초사용자리스트 삭제(deleteCommonUserList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommonUserList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
