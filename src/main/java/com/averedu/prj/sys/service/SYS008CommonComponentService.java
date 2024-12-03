/*------------------------------------------------------------------------------  								
 * NAME : SYS008CommonComponentService.java                                                                    		
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
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface SYS008CommonComponentService {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 컴포넌트다국어리스트 조회(retrieveCommonComponentList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveCommonComponentList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 컴포넌트다국어리스트 저장/수정(saveCommonComponentList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommonComponentList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 컴포넌트다국어리스트 삭제(deleteCommonComponentList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommonComponentList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
