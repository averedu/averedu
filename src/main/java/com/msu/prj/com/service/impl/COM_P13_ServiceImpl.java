/*------------------------------------------------------------------------------  											
 * NAME : COM_P13_ServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 목포과학대 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2022/08/19  정진호                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.msu.prj.com.service.impl;                                                                                        
                                                                                                                             
import java.util.List;                                                                                                       
import java.util.Map;                                                                                                        
                                                                                                                             
import javax.annotation.Resource;                                                                                            
                                                                                                                             
import org.apache.commons.logging.Log;                                                                                       
import org.apache.commons.logging.LogFactory;                                                                                
import org.springframework.stereotype.Service;                                                                               
                                                                                                                             
import com.nexacro17.xapi.data.DataSet;                                                                                      
                                                                                                                             
import com.msu.common.exception.CommException;                                                                         
import com.msu.common.vo.SessionVO;                                                                                   	
import com.msu.prj.com.dao.COM_P13_DAO;                                                                             
import com.msu.prj.com.service.COM_P13_Service;                                                                        
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("COM_P13_Service")                                                                               
public class COM_P13_ServiceImpl extends EgovAbstractServiceImpl implements COM_P13_Service {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** COM_P13_DAO */                                                                                             
    @Resource(name="COM_P13_DAO")                                                                      
    private COM_P13_DAO com_P13_DAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 교직과목리스트 조회 (retrieve_P13)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieve_P13( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        String strMenuId = inVar.get("GBV_MENUID").toString();                                         
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        map.put("INSERT_PG", strMenuId);                           							        
        List<Map> records = com_P13_DAO.retrieve_P13(map);                                           
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
}                                                                                                                            
