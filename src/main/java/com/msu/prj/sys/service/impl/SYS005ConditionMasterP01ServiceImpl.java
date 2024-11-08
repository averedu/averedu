package com.msu.prj.sys.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.dao.SYS005ConditionMasterP01DAO;
import com.msu.prj.sys.service.SYS005ConditionMasterP01Service;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("SYS005ConditionMasterP01Service")
public class SYS005ConditionMasterP01ServiceImpl extends EgovAbstractServiceImpl implements SYS005ConditionMasterP01Service {
	protected Log log = LogFactory.getLog(this.getClass());

	/** SYS005ConditionMasterDAO */
	@Resource(name = "SYS005ConditionMasterP01DAO")
	private SYS005ConditionMasterP01DAO sys005ConditionMasterP01DAO;

	/**
	 * 신청제어항목관리팝업 제어항목 리스트 조회(retrieveConditionMasterP01List)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterP01List(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005ConditionMasterP01DAO.retrieveConditionMasterP01List(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}

	/**
	 * 신청제어항목관리팝업 제어항목 리스트 조회(retrieveConditionMasterP01)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void retrieveConditionMasterP01(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
		Map<String, Object> map = (Map<String, Object>) dsMap.get(0);
		List<Map> records = sys005ConditionMasterP01DAO.retrieveConditionMasterP01(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMaster", dsOut);

		return;
	}
	
	/**                                                                                                             			
     * 신청제어항목관리팝업 제어항목 저장/수정(saveConditionMasterP01List)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveConditionMasterP01List( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;
        String strMenuId = inVar.get("GBV_MENUID").toString();
        String sincheongCode = "";
		                                                                                                    					
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
		                                                                                                    					
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");
        
        // 신청제어 키값 조회 >> 기존 키값이 있는 경우 기존 키값으로 지정하고, 신규인 경우 키값 조회
        if ( dsMap1.get(0).get("SINCHEONG_CODE") == null ) {
        	List<Map> getKey = sys005ConditionMasterP01DAO.retrieveConditionMasterP01Key(inMap);
        	sincheongCode = getKey.get(0).get("SINCHEONG_CODE").toString();
        }
        else {
        	sincheongCode = dsMap1.get(0).get("SINCHEONG_CODE").toString();
        }
                
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
            	
            	outMap.put("SINCHEONG_CODE", sincheongCode);
                outMap.put("INSERT_ID", sessionVO.getUserId().toString());                           	
                outMap.put("INSERT_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("INSERT_PG", strMenuId);                           							
                outMap.put("UPDATE_ID", sessionVO.getUserId().toString());                           	
                outMap.put("UPDATE_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("UPDATE_PG", strMenuId);                           							
		                                                                                                                     	
                //신규저장                                                                                              	
                sys005ConditionMasterP01DAO.insertConditionMasterP01List(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               	
		                                                                                                                     	
                outMap.put("UPDATE_ID", sessionVO.getUserId().toString());                           	
                outMap.put("UPDATE_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("UPDATE_PG", strMenuId);                           							
		                                                                                                    					
                //수정                                                                                                  		
                sys005ConditionMasterP01DAO.updateConditionMasterP01List(outMap);                                               		
            }                                                                                                               	
        }
                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys005ConditionMasterP01DAO.retrieveConditionMasterP01(inMap);                                     	
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }
    
    /**
	 * 신청제어항목관리팝업 제어항목 삭제(deleteConditionMasterP01List)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteConditionMasterP01List(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {

		int rowType;
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");

		for (int i = 0; i < dsMap.size(); i++) {

			Map<String, Object> map = (Map<String, Object>) dsMap.get(i);
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();

			if (rowType == DataSet.ROW_TYPE_DELETED) {
				sys005ConditionMasterP01DAO.deleteConditionMasterP01List(map);
			}
		}
		return;
	}
	
}
