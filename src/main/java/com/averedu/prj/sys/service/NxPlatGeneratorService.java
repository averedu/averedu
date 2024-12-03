/*------------------------------------------------------------------------------  								  						
 * NAME : NxPlatGeneratorService.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                     						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2019/04/18  jiback 						   소스생성기	                                                                                     						
 *------------------------------------------------------------------------------*/ 
package com.averedu.prj.sys.service;

import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface NxPlatGeneratorService {
	
	/**                                                                                                                     	
	 * 테이블 유저를 조회(retrieveNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	public void retrieveNxPlatGeneratorUser(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	/**                                                                                                                     	
	 * 모든 테이블을 조회(retrieveNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	public void retrieveNxPlatGeneratorM(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	/**                                                                                                                     	
	 * 각각 테이블 항목을 조회(retrieveNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	public void retrieveNxPlatGeneratorD(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
}
