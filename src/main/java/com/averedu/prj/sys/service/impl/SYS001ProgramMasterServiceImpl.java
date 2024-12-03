/*------------------------------------------------------------------------------  								  						
 * NAME : SYS001ProgramMasterServiceImpl.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                      						    
 * Copyright 2015 Ready Korea All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  -----------------------------------------------------------                                   						
 * 2019/04/18  jiback 						   소스생성기	                                                                                     						
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
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS001ProgramMasterDAO;
import com.averedu.prj.sys.service.SYS001ProgramMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS001ProgramMasterService")
public class SYS001ProgramMasterServiceImpl extends EgovAbstractServiceImpl implements SYS001ProgramMasterService {

	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS001ProgramMasterDAO */
	@Resource(name = "SYS001ProgramMasterDAO")
	private SYS001ProgramMasterDAO sys001ProgramMasterDAO;

	/**
	 * 프로그램 조회/화면을 조회(actionRetrieveProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	public void retrieveProgramMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
            
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
        
		List<Map> records = sys001ProgramMasterDAO.retrieveProgramMasterList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

	/**
	 * 프로그램 저장/수정(actionSaveProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */

	public void saveProgramMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		int rowType;

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> inMap = (Map<String, Object>) dsMap.get(0);
		// 저장데이타셋
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");
		for (int i = 0; i < dsMap1.size(); i++) {

			Map<String, Object> outMap = (Map<String, Object>) dsMap1.get(i);
			rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_INSERTED) {
				// pk레코드조회
				List<Map> recordKeyValue = sys001ProgramMasterDAO.retrieveProgramMasterListPKey(outMap);
				Map<String, Object> mapKeyValue = (Map<String, Object>) recordKeyValue.get(0);
				outMap.put("PROG_ID", mapKeyValue.get("KEY_CODE").toString());

				if (checkExistPK(outMap)) {
					throw new CommException("-1", "프로그램ID가 중복 되였습니다.", "");
				}

				outMap.put("REG_ID", sessionVO.getUserId().toString());
				outMap.put("MOD_ID", sessionVO.getUserId().toString());
				outMap.put("IP_ADDRESS", sessionVO.getIpAddress().toString());
				outMap.put("MENU_ID", "P000002");
				// 신규저장
				sys001ProgramMasterDAO.insertProgramMasterList(outMap);

			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {

				outMap.put("MOD_ID", sessionVO.getUserId().toString());
				outMap.put("IP_ADDRESS", sessionVO.getIpAddress().toString());
				outMap.put("MENU_ID", "P000002");
				// 수정
				sys001ProgramMasterDAO.updateProgramMasterList(outMap);
			}
		}
		// 데이타 제조회
		List<Map> records = sys001ProgramMasterDAO.retrieveProgramMasterList(inMap);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

	/**
	 * 프로그램 삭제(deleteProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	public void deleteProgramMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		int rowType;

		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");

		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_DELETED) {
				sys001ProgramMasterDAO.deleteProgramMasterList(map);
			}
		}
		return;
	}

	/**
	 * 프로그램 중복 체크(checkExistPK)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */

	private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {
		List<Map> records = sys001ProgramMasterDAO.retrieveProgramMasterListKey(outMap);
		Map<String, Object> outMap1 = (Map<String, Object>) records.get(0);
		if (outMap1.get("CNT").toString().equals("0")) {
			return false;
		}
		return true;
	}

}