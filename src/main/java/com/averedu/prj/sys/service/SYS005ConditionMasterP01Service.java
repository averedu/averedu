package com.averedu.prj.sys.service;

import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

public interface SYS005ConditionMasterP01Service {
	
	/**                                                                                                          
     * 신청제어항목관리팝업 제어항목 리스트 조회(retrieveConditionMasterP01List)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveConditionMasterP01List(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	/**                                                                                                          
     * 신청제어항목관리팝업 제어항목 리스트 조회(retrieveConditionMasterP01)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveConditionMasterP01(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 신청제어항목관리팝업 제어항목 저장/수정(saveConditionMasterP01List)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveConditionMasterP01List(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 신청제어항목관리팝업 제어항목 삭제(deleteConditionMasterP01List)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteConditionMasterP01List(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;
}
