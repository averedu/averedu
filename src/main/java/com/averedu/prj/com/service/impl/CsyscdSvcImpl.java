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

import com.averedu.common.util.DataUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.dao.CsyscdDAO;
import com.averedu.prj.com.service.CsyscdSvc;
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

					csyscdDAO.insertCommCodeMasterList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
					outMap.put("CMMN_CD", inMap.get("CMMN_CD"));
					

					csyscdDAO.insertCommCodeDetailList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
					

					csyscdDAO.insertGrpCodeList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
					outMap.put("CMMN_CD", inMap.get("CMMN_CD"));
					

					csyscdDAO.insertGrpCodeDeatilList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
							csyscdDAO.deptListIns(outMap);

						} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

							outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
				
					outMap.put("FRST_INPUT_ID", sessionVO.getUserId().toString());
					csyscdDAO.deptHistListIns(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());

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
	public void deptCdConnAttrInfoList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		
		List<Map> recordsMaster = csyscdDAO.deptCdConnAttrInfoList(map);
		DataSetMap dsOutMaster = new DataSetMap();
		dsOutMaster.setRowMaps(recordsMaster);
		
		outDataset.put("dsMaster", dsOutMaster);
		return;

	}
	
	/**
	 * 부서코드연계속성정보 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deptCdConnAttrValList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		
		List<Map> recordsMaster = csyscdDAO.deptCdConnAttrValList(map);
		DataSetMap dsOutMaster = new DataSetMap();
		dsOutMaster.setRowMaps(recordsMaster);
		
		outDataset.put("dsDetail", dsOutMaster);
		return;
		
	}
	
	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrSave)
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
					
					// outMap.put("", sessionVO.getUserId().toString());
					// 부서코드 연계속성 정보(DEPT_CD 시퀀스)
					String deptCdKeyCode = deptCdConnAttrValKeyCode();
					outMap.put("DEPT_CD", deptCdKeyCode);
					csyscdDAO.deptCdConnAttrInfoIns(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					// outMap.put("LAST_MODF_ID", sessionVO.getUserId().toString());
					csyscdDAO.deptCdConnAttrInfoUpd(outMap);

				}
			}  
		}

	}

	/**
	 * 부서코드연계속성정보 삭제 (deptCdConnAttrDel)
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

	



	
}
