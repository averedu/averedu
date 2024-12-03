/*------------------------------------------------------------------------------  								
 * NAME : COM_P06_Service.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 목포과학대 차세대 프로젝트                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2020/11/19  jiback                                                               
 *------------------------------------------------------------------------------*/                               
package com.averedu.prj.com.service;                                                                       	        
                                                                                                                 
import java.util.Map;                                                                                            
                                                                                                                 
import com.averedu.common.vo.SessionVO;																        
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface COM_P06_Service {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 설문문항내역리스트 조회(retrieve_P06_)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieve_P06(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;                                                                                                                
}                                                                                                                
