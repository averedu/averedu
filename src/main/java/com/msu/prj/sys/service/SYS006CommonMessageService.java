/*------------------------------------------------------------------------------  								
 * NAME : SYS006CommonMessageService.java                                                                    		
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
                                                                                                                 
public interface SYS006CommonMessageService {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 메세지리스트 조회(retrieveCommonMessageList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveCommonMessageList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 메세지리스트 저장/수정(saveCommonMessageList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommonMessageList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 메세지리스트 삭제(deleteCommonMessageList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommonMessageList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
