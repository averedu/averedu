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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import javax.sound.midi.MidiDevice.Info;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.averedu.common.util.DataUtil;
import com.averedu.common.util.EgovWebUtil;
import com.averedu.common.vo.Csys300VO;
import com.averedu.common.vo.Csys310VO;
import com.averedu.common.vo.Csys311VO;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.dao.CsyscdDAO;
import com.averedu.prj.com.service.CsyscdSvc;
import com.averedu.prj.sys.vo.MenuVO;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("CsyscdSvc")
public class CsyscdSvcImpl extends EgovAbstractServiceImpl implements CsyscdSvc {
	protected Log log = LogFactory.getLog(this.getClass());

	/** csyscdDAO */
	@Resource(name = "CsyscdDAO")
	private CsyscdDAO csyscdDAO;

	/**
	 * 공통코드리스트 조회(retrieveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveCommCodeMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = csyscdDAO.retrieveCommCodeMasterList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
	
	/**
	 * 세부코드 리스트 조회(retrieveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveCommCodeDetailList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = csyscdDAO.retrieveCommCodeDetailList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsDetail", dsOut);

		return;
	}
	
	/**
	 * 그룹 코드 리스트 조회(retrieveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveGrpCodeList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrpInput");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = csyscdDAO.retrieveGrpCodeList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsGrp", dsOut);

		return;
	}
	
	/**
	 * 그룹 상세 코드  리스트 조회(retrieveGrpDetailCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveGrpDetailCodeList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrpDetaInput");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = csyscdDAO.retrieveGrpDetailCodeList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsGrpDetail", dsOut);

		return;
	}

	/**
	 * 공통코드 저장/수정(saveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveCommCodeMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		// 조회조건
		int rowType;
		String recordKeyValue = "";

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster"); // 마스터
		if (dsMap1.size() > 0) {

			for (int i = 0; i < dsMap1.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {

					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					
					

					csyscdDAO.insertCommCodeMasterList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());

					recordKeyValue = DataUtil.nvl(outMap.get("CMMN_CD")).toString();
					csyscdDAO.updateCommCodeMasterList(outMap);

				}
			}
		}

		// 서버에서 시퀀스 제조회시
		List<Map> records = csyscdDAO.retrieveCommCodeMasterList(inMap);
		outVar.put("strKeyValue", recordKeyValue);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
	
	/**
	 * 상세코드 저장/수정(saveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveCommCodeDetailList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		// 조회조건
		int rowType;
		String recordKeyValue = "";

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsDetail"); // 마스터
		if (dsMap1.size() > 0) {

			for (int i = 0; i < dsMap1.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {

					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("CMMN_CD", inMap.get("CMMN_CD"));
					

					csyscdDAO.insertCommCodeDetailList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());

					recordKeyValue = DataUtil.nvl(outMap.get("CMMN_CD")).toString();
					csyscdDAO.updateCommCodeDetailList(outMap);

				}
			}
		}
		// 서버에서 시퀀스 제조회시
		List<Map> records = csyscdDAO.retrieveCommCodeDetailList(inMap);
		outVar.put("strKeyValue", recordKeyValue);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsDetail", dsOut);

		return;
	}
	
	/**
	 * 그룹코드 저장/수정(saveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveGrpCodeList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		// 조회조건
		int rowType;
		String recordKeyValue = "";

		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrpInput");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsGrp"); // 마스터
		if (dsMap1.size() > 0) {

			for (int i = 0; i < dsMap1.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {

					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("CMMN_CD", inMap.get("CMMN_CD"));
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					

					csyscdDAO.insertGrpCodeList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());

					recordKeyValue = DataUtil.nvl(outMap.get("CMMN_CD")).toString();
					csyscdDAO.updateGrpCodeList(outMap);

				}
			}
		}
		// 서버에서 시퀀스 제조회시
		List<Map> records = csyscdDAO.retrieveGrpCodeList(inMap);
		outVar.put("strKeyValue", recordKeyValue);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsGrp", dsOut);

		return;
	}
	
	
	/**
	 * 그룹상세코드 저장/수정(saveGrpCodeDeatilList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void saveGrpCodeDeatilList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		// 조회조건
		int rowType;
		String recordKeyValue = "";

		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrpDetaInput");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsGrpDetail"); // 마스터
		if (dsMap1.size() > 0) {

			for (int i = 0; i < dsMap1.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {

					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("FRST_INPUT_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());
					outMap.put("CMMN_CD", inMap.get("CMMN_CD"));
					

					csyscdDAO.insertGrpCodeDeatilList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					outMap.put("LAST_MODF_IP", EgovWebUtil.getUserIpAddress());

					recordKeyValue = DataUtil.nvl(outMap.get("CMMN_CD")).toString();
					csyscdDAO.updateGrpCodeDeatilList(outMap);

				}
			}
		}
		// 서버에서 시퀀스 제조회시
		List<Map> records = csyscdDAO.retrieveCommCodeDetailList(inMap);
		outVar.put("strKeyValue", recordKeyValue);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsGrpDetail", dsOut);

		return;
	}
	
	
	/**
	 * 공통코드리스트 삭제(deleteCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteCommCodeMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");

		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deleteCommCodeMasterList(map);
				csyscdDAO.deleteCommCodeAllList(map);
			}
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
	public void deleteCommCodeDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsDetail");
		
		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deleteCommCodeDetailList2(map);
			}
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
	public void deleteGrpCodeList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrp");
		
		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deleteGrpCodeList(map);
			}
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
	public void deleteGrpCodeDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsGrpDetail");
		
		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
			if (rowType == DataSet.ROW_TYPE_DELETED) {
				csyscdDAO.deleteGrpCodeDetailList(map);
			}
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
	public Map<String, Object> deptCdMngList(Csys300VO csys300VO, SessionVO sessionVO) throws Exception {
		
		try {
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("deptList", csyscdDAO.deptList(csys300VO));
			map.put("deptHistList", csyscdDAO.deptHistList(csys300VO));
			return map;
		}catch(Exception e){
			log.info("deptCdMngList.error : " + e.getMessage());
		}
		return null;
		
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
	public boolean deptCdConnAttrInfoSave(List<Csys310VO> csys310VoList, SessionVO sessionVO) throws Exception {
		
		try{
			for(int i = 0; i < csys310VoList.size(); i++){
				if("N".equals(csys310VoList.get(i).getStatus())){
					String deptCdKeyCode = deptCdConnAttrValKeyCode();
					csys310VoList.get(i).setBfDeptCd(deptCdKeyCode);
					// csys310VoList.get(i).setFrstInputId(sessionVO.getUserId().toString());
					csys310VoList.get(i).setFrstInputIp(EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrInfoIns(csys310VoList.get(i));
				}else if("U".equals(csys310VoList.get(i).getStatus())){
					// csys310VoList.get(i).setLastModfId(sessionVO.getUserId().toString());
					csys310VoList.get(i).setLastModfIp(EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrInfoUpd(csys310VoList.get(i));
				}
			}
			return true;
		}catch(Exception e){
			log.info("deptCdConnAttrInfoSave.error : " + e.getMessage());
			return false;
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
	public boolean deptCdConnAttrInfoDel(List<Csys310VO> csys310VO, SessionVO sessionVO){
		
		try {
			for(int i = 0; i < csys310VO.size(); i++){
				csyscdDAO.deptCdConnAttrInfoDel(csys310VO.get(i).getBfDeptCd());
				csyscdDAO.deptCdConnAttrValDel(csys310VO.get(i).getBfDeptCd());
			}
			
		}catch(Exception e){
			log.info("error : " + e.getMessage());
			return false;
		}
		return true;
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
	public boolean deptCdConnAttrValSave(List<Csys311VO> csys311VOList, SessionVO session) {
		try {
			for(int i = 0; i < csys311VOList.size(); i++){
				if("N".equals(csys311VOList.get(i).getStatus())){
					// csys311VOList.get(i).setFrstInputId(sessionVO.getUserId().toString());
					csys311VOList.get(i).setFrstInputIp(EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrValIns(csys311VOList.get(i));
				}else if("U".equals(csys311VOList.get(i).getStatus())){
					// csys311VOList.get(i).setFrstInputId(sessionVO.getUserId().toString());
					csys311VOList.get(i).setFrstInputIp(EgovWebUtil.getUserIpAddress());
					csyscdDAO.deptCdConnAttrValUpd(csys311VOList.get(i));
				}
			}
		}catch(Exception e){
			log.info("deptCdConnAttrValSave.error : " + e.getMessage());
			return false;
		}
		
		return true;
	}
	
	
	 /**
		 * 부서코드연계속성값 삭제 (deptCdConnAttrValDel)
		 * 
		 * @param input
		 * @return
		 * @throws Exception
		 */
	@Override
	public boolean deptCdConnAttrValDel(List<Csys311VO> csys311VOList){
		try {
			for(int i = 0; i < csys311VOList.size(); i++){
				csyscdDAO.deptCdConnAttrValDel(csys311VOList.get(i).getAfDeptCd());
			}
		}catch(Exception e){
			log.info("deptCdConnAttrValDel.error : " + e.getMessage());
			return false;
		}
		return true;
	}

		
		
	
}
