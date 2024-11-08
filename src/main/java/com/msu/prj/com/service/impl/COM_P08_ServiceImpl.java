/*------------------------------------------------------------------------------  											
 * NAME : COM_P08_ServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 목포과학대 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2020/12/04  jiback                                                               			
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
import com.msu.prj.com.dao.COM_P08_DAO;                                                                             
import com.msu.prj.com.service.COM_P08_Service;                                                                        
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("COM_P08_Service")                                                                               
public class COM_P08_ServiceImpl extends EgovAbstractServiceImpl implements COM_P08_Service {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** COM_P08_DAO */                                                                                             
    @Resource(name="COM_P08_DAO")                                                                      
    private COM_P08_DAO com_P08_DAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 호실정보리스트 조회(retrieve_P08_)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieve_P08( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = com_P08_DAO.retrieve_P08(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                                                                                                                            			
}                                                                                                                            
