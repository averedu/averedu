/*------------------------------------------------------------------------------  												
 * NAME : SYS005ConditionMasterServiceImpl.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 프로젝트 명을 기입                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2022/11/17                                                                             
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
import com.averedu.prj.sys.dao.SYS005ConditionMasterDAO;
import com.averedu.prj.sys.service.SYS005ConditionMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS005ConditionMasterService")
public class SYS005ConditionMasterServiceImpl extends EgovAbstractServiceImpl implements SYS005ConditionMasterService {
	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS005ConditionMasterDAO */
	@Resource(name = "SYS005ConditionMasterDAO")
	private SYS005ConditionMasterDAO sys005ConditionMasterDAO;

	/**
	 * 신청제어항목관리 리스트 조회(retrieveConditionMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005ConditionMasterDAO.retrieveConditionMasterList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
	
	/**                                                                                                             			
     * 신청제어항목관리 리스트 저장/수정(saveConditionMasterList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveConditionMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
        String strMenuId = inVar.get("GBV_MENUID").toString();                                         
		                                                                                                    					
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
		                                                                                                    					
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");                                   	
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
		                                                                                                                     	
                outMap.put("INSERT_ID", sessionVO.getUserId().toString());                           	
                outMap.put("INSERT_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("INSERT_PG", strMenuId);                           							
                outMap.put("UPDATE_ID", sessionVO.getUserId().toString());                           	
                outMap.put("UPDATE_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("UPDATE_PG", strMenuId);                           							
		                                                                                                                     	
                //신규저장                                                                                              	
                sys005ConditionMasterDAO.insertConditionMasterList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               	
		                                                                                                                     	
                outMap.put("UPDATE_ID", sessionVO.getUserId().toString());                           	
                outMap.put("UPDATE_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("UPDATE_PG", strMenuId);                           							
		                                                                                                    					
                //수정                                                                                                  		
                sys005ConditionMasterDAO.updateConditionMasterList(outMap);                                               		
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys005ConditionMasterDAO.retrieveConditionMasterList(inMap);                                     	
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }
    
    /**
	 * 신청제어항목관리 리스트 삭제(deleteConditionMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteConditionMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");

		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_DELETED) {
				sys005ConditionMasterDAO.deleteConditionMasterList(map);
			}
		}
		return;
	}
	
}
