/*------------------------------------------------------------------------------  								  						
 * NAME : NxPlatGeneratorServiceImpl.java                                                                    						
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

import org.springframework.stereotype.Service;

import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.NxPlatGeneratorDAO;
import com.averedu.prj.sys.service.NxPlatGeneratorService;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("NxPlatGeneratorService")
public class NxPlatGeneratorServiceImpl extends EgovAbstractServiceImpl implements NxPlatGeneratorService {

	/** NxPlatGeneratorDAO */
	@Resource(name = "NxPlatGeneratorDAO")
	private NxPlatGeneratorDAO nxGeneratorDAO;

	/**                                                                                                                     	
	 * 테이블 유저를 조회(retrieveNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	public void retrieveNxPlatGeneratorUser(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		List<Map> records = nxGeneratorDAO.retrieveNxPlatGeneratorUser();

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsOwer", dsOut); 

		return;
	}

	/**                                                                                                                     	
	 * 모든 테이블을 조회(retrieveNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	public void retrieveNxPlatGeneratorM(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
	
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map) dsMap.get(0);

		List<Map> records = nxGeneratorDAO.retrieveNxPlatGeneratorM(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("DS_Master", dsOut); 

		return;
	}

	/**                                                                                                                     	
	 * 각각 테이블 항목을 조회(retrieveNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	public void retrieveNxPlatGeneratorD(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		Map<String, Object> map = (Map)inVar;

		List<Map> records = nxGeneratorDAO.retrieveNxPlatGeneratorD(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("DS_Detail", dsOut); 

		return;
	}

}