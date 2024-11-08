/*------------------------------------------------------------------------------  								
 * NAME : COM_P15_Service.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 목포과학대 차세대 프로젝트                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2022/08/25  정진호                                                               
 *------------------------------------------------------------------------------*/                               
package com.msu.prj.com.service;                                                                       	        
                                                                                                                 
import java.util.Map;                                                                                            
                                                                                                                 
import com.msu.common.vo.SessionVO;																        
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                
                                                                                                                 
public interface COM_P15_Service {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 교직사정학생리스트 조회(retrieve_P15List)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieve_P15List(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 교직사정학생리스트 저장/수정(save_P15List)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void save_P15List(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 교직사정학생리스트 삭제(delete_P15List)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void delete_P15List(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
                                                                                                                 
}                                                                                                                
