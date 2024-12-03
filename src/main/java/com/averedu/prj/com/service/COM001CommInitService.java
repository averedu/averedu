/*------------------------------------------------------------------------------  								  						
 * NAME : COM001CommInitService .java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   공통코드조회(초기화시 모든 설정한 모든 공통코드를 가기고 옮)		                                                                                     						
 *------------------------------------------------------------------------------*/  
package com.averedu.prj.com.service;

import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface COM001CommInitService  {
	
	/**                                                                                                                     	
	 * 초기에 코드에 설정한 모든 공통코드 조회(retrieveCommInitList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */    
	public void retrieveCommInitList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	/**                                                                                                                     	
	 * 초기에 코드에 설정한 모든 테이블 공통코드 조회(retrieveCommInitTableList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */    
	public void retrieveCommInitTableList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
}
