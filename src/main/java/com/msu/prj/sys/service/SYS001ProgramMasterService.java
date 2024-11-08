/*------------------------------------------------------------------------------  								  						
 * NAME : SYS001ProgramMasterController.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2019/04/23  jiback 						   프로그램관리	                                                                                     						
 *------------------------------------------------------------------------------*/  
package com.msu.prj.sys.service;

import java.util.Map;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface SYS001ProgramMasterService {
	
	/**                                                                                                                     	
	 * 프로그램 조회/화면을 조회(actionRetrieveProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */    
	public void retrieveProgramMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	/**                                                                                                                     	
	 * 프로그램 저장/수정(actionSaveProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */    
	public void saveProgramMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	/**                                                                                                                     	
	 * 프로그램을 삭제(actionDeleteProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */     
	public void deleteProgramMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
}
