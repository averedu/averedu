package com.averedu.prj.sys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS005ConditionMasterP02DAO;
import com.averedu.prj.sys.service.SYS005ConditionMasterP02Service;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS005ConditionMasterP02Service")
public class SYS005ConditionMasterP02ServiceImpl extends EgovAbstractServiceImpl implements SYS005ConditionMasterP02Service {
	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS005ConditionMasterDAO */
	@Resource(name = "SYS005ConditionMasterP02DAO")
	private SYS005ConditionMasterP02DAO sys005ConditionMasterP02DAO;
	

	/**
	 * 공통코드 데이터 조회(retrieveConditionMasterP02List)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterP02List(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		
		List<Map> re = sys005ConditionMasterP02DAO.retrieveConditionMasterP02(map);
		
		DataSetMap ds = new DataSetMap();
		ds.setRowMaps(re);
		Map<String, Object> map1 = (Map<String, Object>) ds.get(0);
		
		List<Map> records = sys005ConditionMasterP02DAO.retrieveConditionMasterP02List(map1);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

}
