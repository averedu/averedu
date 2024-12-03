/*------------------------------------------------------------------------------  								
 * NAME : COM_P09_Service.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 목포과학대 차세대 프로젝트                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2021/09/08  jiback                                                               
 *------------------------------------------------------------------------------*/                               
package com.averedu.prj.com.service;                                                                       	        
                                                                                                                 
import java.util.Map;                                                                                            
                                                                                                                 
import com.averedu.common.vo.SessionVO;																        
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface COM_P09_Service {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 자격증리스트 조회(retrieve_P09)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieve_P09(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
       
                                                                                                                 
}                                                                                                                
