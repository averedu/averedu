/*------------------------------------------------------------------------------  											
 * NAME : CsyscdSvcImpl.java                                                                    					
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
package com.averedu.prj.com.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;
import org.w3c.dom.ls.LSInput;

import com.averedu.common.util.DataUtil;
import com.averedu.common.util.EgovWebUtil;
import com.averedu.common.vo.Csys310VO;
import com.averedu.common.vo.Csys311VO;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.dao.CsyscdApiDAO;
import com.averedu.prj.com.service.CsysApicdSvc;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("CsysApicdSvc")
public class CsyscdApiSvcImpl extends EgovAbstractServiceImpl implements CsysApicdSvc {
	protected Log log = LogFactory.getLog(this.getClass());

	/** csyscdDAO */
	@Resource(name = "CsyscdApiDAO")
	private CsyscdApiDAO csyscdDAO;

	/**
	 * 공통코드리스트 조회(retrieveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> retrieveCommCodeMasterList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception {


		List<Map<String, Object>> records = csyscdDAO.retrieveCommCodeMasterList(myMap);

		return records;
	}
	
	/**
	 * 세부코드 리스트 조회(retrieveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> retrieveCommCodeDetailList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception {

		List<Map<String, Object>> records = csyscdDAO.retrieveCommCodeDetailList(myMap);


		return records;
	}
	
	/**
	 * 그룹 코드 리스트 조회(retrieveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> retrieveGrpCodeList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception {

		List<Map<String, Object>> records = csyscdDAO.retrieveGrpCodeList(myMap);


		return records;
	}
	
	/**
	 * 그룹 상세 코드  리스트 조회(retrieveGrpDetailCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map<String, Object>> retrieveGrpDetailCodeList(Map<String, Object> myMap, SessionVO sessionVO) throws Exception {

		List<Map<String, Object>> records = csyscdDAO.retrieveGrpDetailCodeList(myMap);

		return records;
	}

	/**
	 * 공통코드 저장/수정(saveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveCommCodeMasterList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {

		if (list.size() > 0) {

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> myMap = (Map<String, Object>) list.get(i);

				if (myMap.get("status")!=null && myMap.get("status").equals("N")) {
//					myMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("FRST_INPUT_ID", "");
					myMap.put("LAST_MODF_ID", "");
					myMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					if(myMap.get("USE_YN").equals("Y")){
						myMap.put("USE_YN", "1");
					}else{
						myMap.put("USE_YN", "0");
					}
					csyscdDAO.insertCommCodeMasterList(myMap);
				} else if(myMap.get("status")==null||myMap.get("status").equals("U")){
//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("LAST_MODF_ID", "");
					if(myMap.get("USE_YN").equals("Y")){
						myMap.put("USE_YN", "1");
					}else{
						myMap.put("USE_YN", "0");
					}
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.updateCommCodeMasterList(myMap);
				}
			}
		}

		return;
	}
	
	/**
	 * 상세코드 저장/수정(saveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveCommCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {

		if (list.size() > 0) {

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> myMap = (Map<String, Object>) list.get(i);

				if (myMap.get("status")!=null && myMap.get("status").equals("N")) {
					myMap.put("FRST_INPUT_ID", "");
					myMap.put("LAST_MODF_ID", "");
					myMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					if(myMap.get("USE_YN").equals("Y")){
						myMap.put("USE_YN", "1");
					}else{
						myMap.put("USE_YN", "0");
					}

					csyscdDAO.insertCommCodeDetailList(myMap);

				} else if (myMap.get("status")==null||myMap.get("status").equals("U")) {
					myMap.put("LAST_MODF_ID", "");
					if(myMap.get("USE_YN").equals("Y")){
						myMap.put("USE_YN", "1");
					}else{
						myMap.put("USE_YN", "0");
					}
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.updateCommCodeDetailList(myMap);

				}
			}
		}

		return;
	}
	
	/**
	 * 그룹코드 저장/수정(saveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveGrpCodeList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		if (list.size() > 0) {

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> myMap = (Map<String, Object>) list.get(i);

				if (myMap.get("status")!=null && myMap.get("status").equals("N")) {

//					myMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("FRST_INPUT_ID", "");
					myMap.put("LAST_MODF_ID", "");
					myMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());

					csyscdDAO.insertGrpCodeList(myMap);

				} else if (myMap.get("status")==null||myMap.get("status").equals("U")) {

//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("LAST_MODF_ID", "");
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.updateGrpCodeList(myMap);

				}
			}
		}
		return;
	}
	
	
	/**
	 * 그룹상세코드 저장/수정(saveGrpCodeDeatilList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveGrpCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		if (list.size() > 0) {

			for (int i = 0; i < list.size(); i++) {
				Map<String, Object> myMap = (Map<String, Object>) list.get(i);
				if (myMap.get("status")!=null && myMap.get("status").equals("N")) {

//					myMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("FRST_INPUT_ID", "");
					myMap.put("LAST_MODF_ID", "");
					myMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					

					csyscdDAO.insertGrpCodeDetailList(myMap);

				} else if (myMap.get("status")==null||myMap.get("status").equals("U")) {

//					myMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					myMap.put("LAST_MODF_ID", "");

					myMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.updateGrpCodeDetailList(myMap);

				}
			}
		}


		return;
	}
	
	
	/**
	 * 공통코드리스트 삭제(deleteCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteCommCodeMasterList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		for(Map<String, Object> map : list){
			csyscdDAO.deleteCommCodeMasterList(map);
			csyscdDAO.deleteCommCodeAllList(map);
		}
		return;
	}
	
	/**
	 * 상세코드 삭제(deleteCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteCommCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		
		for(int i=0;i<list.size();i++){
			csyscdDAO.deleteCommCodeDetailList2(list.get(i));
		}
		
		csyscdDAO.deleteEmptyCodeDetailList();
		return;
	}
	
	/**
	 * 그룹코드 삭제(deleteGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteGrpCodeList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		for(Map<String, Object> map : list){
			csyscdDAO.deleteGrpCodeList(map);
		}
		
		return;
	}
	
	/**
	 * 그룹상세코드 삭제(deleteGrpCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteGrpCodeDetailList(List<Map<String, Object>> list, SessionVO sessionVO) throws Exception {
		for(Map<String, Object> map : list){
			csyscdDAO.deleteGrpCodeDetailList(map);
		}
		
		return;
	}

	/**
	 * 부서코드관리 리스트 조회 (deptCdMngList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdMngList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		
		List<Map> recordsMaster = csyscdDAO.deptList(map);
		DataSetMap dsOutMaster = new DataSetMap();
		dsOutMaster.setRowMaps(recordsMaster);
		
		
		List<Map> recordsSub = csyscdDAO.deptHistList(map);
		DataSetMap dsOutSub = new DataSetMap();
		dsOutSub.setRowMaps(recordsSub);
		
		outDataset.put("dsMaster", dsOutMaster);
		outDataset.put("dsSub", dsOutSub);
		return;
		
	}

	/**
	 * 부서코드관리 저장/수정 (deptCdMngSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdMngSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
				// 조회조건
				int rowType;
				String recordKeyValue = "";

				DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
				Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
				// 저장데이타셋
				DataSetMap dsMapMaster = (DataSetMap) inDataset.get("dsMaster");

				if (dsMapMaster.size() > 0) {

					for (int i = 0; i < dsMapMaster.size(); i++) {
						Map<String, Object> outMap = (Map<String, Object>) dsMapMaster.get(i);
						rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

						if (rowType == DataSet.ROW_TYPE_INSERTED) {
							outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
							outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
							csyscdDAO.deptListIns(outMap);
								
						} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
							outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
							outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
							recordKeyValue = DataUtil.nvl(outMap.get("CLASS_ID")).toString();
							csyscdDAO.deptListUpd(outMap);

						}
					}
				}
	}

	/**
	 * 부서코드관리 삭제 (deptCdMngDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdMngDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");
		
		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deptListDel(map);
			}
		}
		return;
	}
	
	
	/**
	 * 부서이력목록 저장 (deptHistSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptHistSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		// 조회조건
		int rowType;
		String recordKeyValue = "";

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMapSub = (DataSetMap) inDataset.get("dsSub");

		if (dsMapSub.size() > 0) {

			for (int i = 0; i < dsMapSub.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMapSub.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					csyscdDAO.deptHistListIns(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					recordKeyValue = DataUtil.nvl(outMap.get("CLASS_ID")).toString();
					csyscdDAO.deptHistListUpd(outMap);

				}
			}
		}
		
	}

	/**
	 * 부서이력목록 삭제 (deptHistDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptHistDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset, Map<String, Object> outVar,
			Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
			int rowType;
			DataSetMap dsMap = (DataSetMap) inDataset.get("dsSub");
		
		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deptHistListDel(map);
			}
		}
		return;
		
	}

	/**
	 * 부서코드연계속성정보 리스트 조회(deptCdConnAttrInfoList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public List<Csys310VO> deptCdConnAttrInfoList(Csys310VO csys310VO, SessionVO sessionVO){
		try{
			List<Csys310VO> deptCdConnAttrInfoList = csyscdDAO.deptCdConnAttrInfoList(csys310VO);
			return deptCdConnAttrInfoList;
		}catch(Exception e){
			log.info("error : " + e.getMessage());
		}
		
		return null;
	
	}
	
	/**
	 * 부서코드연계속성정보 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Csys311VO> deptCdConnAttrValList(String bfDeptCd, SessionVO sessionVO){
		try {
			List<Csys311VO> deptCdConnAttrValList = csyscdDAO.deptCdConnAttrValList(bfDeptCd);
			return deptCdConnAttrValList;
		}catch(Exception e){
			log.info("error : " + e.getMessage());
		}
		
		return null;
	}
	
	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrInfoSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdConnAttrInfoSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		
		int rowType;

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		
		DataSetMap dsMaster = (DataSetMap) inDataset.get("dsMaster");

		if (dsMaster.size() > 0) {

			for (int i = 0; i < dsMaster.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMaster.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					
					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					// 부서코드 연계속성 정보(DEPT_CD 시퀀스)
					String deptCdKeyCode = deptCdConnAttrValKeyCode();
					outMap.put("BF_DEPT_CD", deptCdKeyCode);
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrInfoIns(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrInfoUpd(outMap);

				}
			}  
		}

	}

	/**
	 * 부서코드연계속성정보 삭제 (deptCdConnAttrInfoDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdConnAttrInfoDel(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		
		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");

		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deptCdConnAttrInfoDel(map);
				csyscdDAO.deptCdConnAttrValDel(map);
			}
		}
		return;
	}
	
	
	 /**
   	 * 부서코드연계속성정보  부서코드 시퀀스(deptCdConnAttrValKeyCode)
   	 * 
   	 * @param input
   	 * @return 
   	 * @return
   	 * @throws Exception
   	 */
    private String deptCdConnAttrValKeyCode(){
    	return csyscdDAO.deptCdConnAttrInfoKeyCode();
    }

    
    /**
	 * 부서코드연계속성값 저장/수정 (deptCdConnAttrValSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@Override
	public void deptCdConnAttrValSave(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		int rowType;

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		
		DataSetMap dsDetail = (DataSetMap) inDataset.get("dsDetail");

		if (dsDetail.size() > 0) {

			for (int i = 0; i < dsDetail.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsDetail.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				/*
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					
					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					// 부서코드 연계속성 정보(DEPT_CD 시퀀스)
					String deptCdKeyCode = deptCdConnAttrValKeyCode();
					outMap.put("BF_DEPT_CD", deptCdKeyCode);
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrInfoIns(outMap);

				}
				*/
				if (rowType == DataSet.ROW_TYPE_UPDATED) {
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrValUpd(outMap);

				}
				
			}  
		}
		
	}

	
}
