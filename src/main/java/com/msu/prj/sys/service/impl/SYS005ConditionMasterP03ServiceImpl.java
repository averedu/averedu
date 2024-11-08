package com.msu.prj.sys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.dao.SYS005ConditionMasterP03DAO;
import com.msu.prj.sys.service.SYS005ConditionMasterP03Service;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS005ConditionMasterP03Service")
public class SYS005ConditionMasterP03ServiceImpl extends EgovAbstractServiceImpl implements SYS005ConditionMasterP03Service {
	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS005ConditionMasterP03DAO */
	@Resource(name = "SYS005ConditionMasterP03DAO")
	private SYS005ConditionMasterP03DAO sys005ConditionMasterP03DAO;

	/**
	 * 신청제어항목관리팝업 제어항목 리스트 조회(retrieveConditionMasterP01List)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterP03List(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005ConditionMasterP03DAO.retrieveConditionMasterP03List(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
	
	/**
	 * 검증(retrieveConditionMasterP01)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterP03(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005ConditionMasterP03DAO.retrieveConditionMasterP03(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
}
