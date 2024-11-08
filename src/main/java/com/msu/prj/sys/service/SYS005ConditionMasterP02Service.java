package com.msu.prj.sys.service;

import java.util.Map;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface SYS005ConditionMasterP02Service {

	/**                                                                                                          
     * 공통코드목록 조회(retrieveConditionMasterP02List)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveConditionMasterP02List(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
}
