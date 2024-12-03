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

import java.util.Map;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;


public interface CsyscdSvc {                                                                        
    
    /**                                                                                                          
     * 공통코드 리스트 조회(retrieveCommCodeMasterList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveCommCodeMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception; 
    
    /**
     * 세부코드 리스트 조회(retrieveCommCodeDetailList)                                                                                                    
  	 * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception 
     */
    public void retrieveCommCodeDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹 코드 리스트 조회(retrieveGrpCodeList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveGrpCodeList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                          
     * 그룹 상세 코드 리스트 조회(retrieveGrpCodeList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveGrpDetailCodeList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 공통코드 리스트 저장/수정(saveCommCodeMasterList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommCodeMasterList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception; 
    
    /**                                                                                                          
     * 공통상세코드 리스트 저장/수정(saveGrpCodeList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveGrpCodeList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹코드 리스트 저장/수정(saveGrpCodeDeatilList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveGrpCodeDeatilList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹상세코드 리스트 저장/수정(saveCommCodeDetailList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveCommCodeDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                          
     * 공통코드 리스트 삭제(deleteCommCodeMasterList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommCodeMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 세부코드 리스트 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteCommCodeDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹코드 리스트 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteGrpCodeList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;
    
    /**                                                                                                          
     * 그룹 상세 코드 삭제(deleteCommCodeDetailList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteGrpCodeDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;
    
    
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
	public void deptCdConnAttrInfoList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
	
	/**
	 * 부서코드연계속성정보 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdConnAttrValList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;
    
    
    /**                                                                                                      	
     * 부서코드연계속성정보 삭제(deptCdConnAttrInfoDel)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptCdConnAttrInfoDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;         
    
	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdConnAttrInfoSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;

	
	
           
   
}
