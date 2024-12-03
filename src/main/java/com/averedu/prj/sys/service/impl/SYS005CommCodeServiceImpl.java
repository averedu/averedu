/*------------------------------------------------------------------------------  											
 * NAME : SYS005CommCodeServiceImpl.java                                                                    					
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
package com.averedu.prj.sys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.averedu.common.exception.CommException;
import com.averedu.common.util.DataUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS005CommCodeDAO;
import com.averedu.prj.sys.service.SYS005CommCodeService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS005CommCodeService")
public class SYS005CommCodeServiceImpl extends EgovAbstractServiceImpl implements SYS005CommCodeService {
	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS005CommCodeDAO */
	@Resource(name = "SYS005CommCodeDAO")
	private SYS005CommCodeDAO sys005CommCodeDAO;

	/**
	 * 기초표준코드1리스트 조회(retrieveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveCommCodeMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005CommCodeDAO.retrieveCommCodeMasterList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

	/**
	 * 기초표준코드2리스트 조회(retrieveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveCommCodeDetailList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005CommCodeDAO.retrieveCommCodeDetailList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsDetail", dsOut);

		return;
	}

	/**
	 * 기초표준코드1,2리스트 저장/수정(saveCommCodeMasterList)
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
		DataSetMap dsMap2 = (DataSetMap) inDataset.get("dsDetail"); // 디테일

		if (dsMap1.size() > 0) {

			for (int i = 0; i < dsMap1.size(); i++) {
				Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
				rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					// pk레코드조회
				 /* List<Map> recordKeyList = sys005CommCodeDAO.retrieveCommCodeMasterListPKey(outMap);
					Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyList.get(0);
					recordKeyValue = DataUtil.nvl(mapKeyValue.get("CLASS_ID")).toString();
						
					outMap.put("CLASS_ID", recordKeyValue);

					if (checkExistPK(outMap)) {
						throw new CommException("1", "공통코드가 중복 되었습니다.", "");
					}*/
					
					outMap.put("REG_ID", sessionVO.getUserId().toString());
					outMap.put("MOD_ID", sessionVO.getUserId().toString());

					sys005CommCodeDAO.insertCommCodeMasterList(outMap);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap.put("MOD_ID", sessionVO.getUserId().toString());

					recordKeyValue = DataUtil.nvl(outMap.get("CLASS_ID")).toString();
					sys005CommCodeDAO.updateCommCodeMasterList(outMap);

				}

				for (int k = 0; k < dsMap2.size(); k++) {
					Map<String, Object> outMap2 = (Map<String, Object>) dsMap2.get(k);
					rowType = ((Integer) outMap2.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
					outMap2.put("CLASS_ID", recordKeyValue);

					if (rowType == DataSet.ROW_TYPE_INSERTED) {
						outMap2.put("REG_ID", sessionVO.getUserId().toString());
						outMap2.put("MOD_ID", sessionVO.getUserId().toString());

						sys005CommCodeDAO.insertCommCodeDetailList(outMap2);

					} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

						outMap2.put("MOD_ID", sessionVO.getUserId().toString());

						sys005CommCodeDAO.updateCommCodeDetailList(outMap2);
					}
				}
			}
		} else {
			for (int k = 0; k < dsMap2.size(); k++) {
				Map<String, Object> outMap2 = (Map<String, Object>) dsMap2.get(k);
				rowType = ((Integer) outMap2.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();
				if (rowType == DataSet.ROW_TYPE_INSERTED) {
					outMap2.put("REG_ID", sessionVO.getUserId().toString());
					outMap2.put("MOD_ID", sessionVO.getUserId().toString());

					sys005CommCodeDAO.insertCommCodeDetailList(outMap2);

				} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

					outMap2.put("MOD_ID", sessionVO.getUserId().toString());

					sys005CommCodeDAO.updateCommCodeDetailList(outMap2);
				}
				recordKeyValue = DataUtil.nvl(outMap2.get("CLASS_ID")).toString();
			}
		}

		// 서버에서 시퀀스 제조회시
		List<Map> records = sys005CommCodeDAO.retrieveCommCodeMasterList(inMap);
		outVar.put("strKeyValue", recordKeyValue);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

	/**
	 * 기초표준코드1리스트 삭제(deleteCommCodeMasterList)
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
				sys005CommCodeDAO.deleteCommCodeMasterList(map);
				sys005CommCodeDAO.deleteCommCodeAllList(map);
			}
		}
		return;
	}

	/**
	 * 기초표준코드2리스트 삭제(deleteCommCodeDetailList)
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
				sys005CommCodeDAO.deleteCommCodeDetailList(map);
			}
		}
		return;
	}

	/**
	 * 기초표준코드1 중복 체크(checkExistPK)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {
		List<Map> records = sys005CommCodeDAO.retrieveCommCodeMasterListKey(outMap);
		Map<String, Object> outMap1 = (Map<String, Object>) records.get(0);
		if (outMap1.get("CNT").toString().equals("0")) {
			return false;
		}
		return true;
	}
}
