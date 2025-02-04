/*------------------------------------------------------------------------------  								
 * NAME : CsyscdSvc.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 프로젝트 명을 기입                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2019/05/08  jiback                                                               
 *------------------------------------------------------------------------------*/
package com.averedu.prj.com.service;

import java.util.List;
import java.util.Map;

import com.averedu.common.vo.Csys310VO;
import com.averedu.common.vo.Csys311VO;
import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;


public interface CsysApicdSvc {                                                                        
    
    /**                                                                                                          
     * 공통코드 리스트 조회(retrieveCommCodeMasterList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public List<Map<String, Object>> retrieveCommCodeMasterList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception; 
    
    /**
     * 세부코드 리스트 조회(retrieveCommCodeDetailList)                                                                                                    
  	 * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception 
     */
    public List<Map<String, Object>> retrieveCommCodeDetailList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹 코드 리스트 조회(retrieveGrpCodeList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public List<Map<String, Object>> retrieveGrpCodeList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                          
     * 그룹 상세 코드 리스트 조회(retrieveGrpCodeList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public List<Map<String, Object>> retrieveGrpDetailCodeList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 공통코드 리스트 저장/수정(saveCommCodeMasterList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommCodeMasterList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception; 
    
    /**                                                                                                          
     * 공통상세코드 리스트 저장/수정(saveGrpCodeList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveGrpCodeList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹코드 리스트 저장/수정(saveGrpCodeDetailList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveGrpCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹상세코드 리스트 저장/수정(saveCommCodeDetailList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                          
     * 공통코드 리스트 삭제(deleteCommCodeMasterList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommCodeMasterList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 세부코드 리스트 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹코드 리스트 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteGrpCodeList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹 상세 코드 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteGrpCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                               
	 * 부서코드관리 리스트 조회 (deptCdMngList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdMngList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	/**
	 * 부서코드관리 저장/수정 (deptCdMngSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdMngSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	/**
	 * 부서코드관리 삭제 (deptCdMngDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdMngDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	/**
	 * 부서이력목록 저장/수정 (deptHistSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptHistSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	/**
	 * 부서이력목록 삭제 (deptHistDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptHistDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	
	/**
	 * 부서코드연계속성정보 리스트 조회(deptCdConnAttrInfoList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Csys310VO> deptCdConnAttrInfoList(Csys310VO csys310vo, SessionVO sessionVO);
	
	/**
	 * 부서코드연계속성정보 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Csys311VO> deptCdConnAttrValList(String bfDeptCd, SessionVO sessionVO);
    
    
    /**                                                                                                      	
     * 부서코드연계속성정보 삭제(deptCdConnAttrInfoDel)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptCdConnAttrInfoDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;         
    
	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrInfoSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdConnAttrInfoSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	/**
	 * 부서코드연계속성값 저장/수정(deptCdConnAttrValSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdConnAttrValSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	
}
