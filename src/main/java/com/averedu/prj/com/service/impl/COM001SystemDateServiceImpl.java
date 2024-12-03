/*------------------------------------------------------------------------------  											
 * NAME : COM001SystemDateServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 보람상조 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2020/06/24  jiback                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.averedu.prj.com.service.impl;                                                                                        
                                                                                                                             
import java.util.List;                                                                                                       
import java.util.Map;                                                                                                        
                                                                                                                             
import javax.annotation.Resource;                                                                                            
                                                                                                                             
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;                                                                              
import org.springframework.stereotype.Service;                                                                               
                                                                                                                             
import com.nexacro17.xapi.data.DataSet;                                                                                      
                                                                                                                             
import com.averedu.common.exception.CommException;                                                                         
import com.averedu.common.vo.SessionVO;                                                                                   	
import com.averedu.prj.com.dao.COM001SystemDateDAO;                                                                             
import com.averedu.prj.com.service.COM001SystemDateService;                                                                        
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("COM001SystemDateService")                                                                               
public class COM001SystemDateServiceImpl extends EgovAbstractServiceImpl implements COM001SystemDateService {                  
    
	protected Logger logger = LoggerFactory.getLogger(this.getClass()); 	                                                                
                                                                                                                             
    /** COM001SystemDateDAO */                                                                                             
    @Resource(name="COM001SystemDateDAO")                                                                      
    private COM001SystemDateDAO com001SystemDateDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 날짜데이타 조회(retrieveSystemDateList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveSystemDateList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                          
        List<Map> records = com001SystemDateDAO.retrieveSystemDateList();                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("gds_SystemDate", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }  
    
    /**                                                                                                             			
     * 사용자메뉴별버튼권한리스트 조회(retrieveCommUserBttnAuthList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveCommUserBttnAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = com001SystemDateDAO.retrieveCommUserBttnAuthList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsPageAuth", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }           
                                                                                                           			
}                                                                                                                            
