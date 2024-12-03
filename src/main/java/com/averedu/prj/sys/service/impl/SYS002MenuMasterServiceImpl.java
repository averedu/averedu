/*------------------------------------------------------------------------------  											
 * NAME : SYS002MenuMasterServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 프로젝트 명을 기입                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2019/05/02  jiback                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.averedu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS002MenuMasterDAO;
import com.averedu.prj.sys.service.SYS002MenuMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS002MenuMasterService")                                                                               
public class SYS002MenuMasterServiceImpl extends EgovAbstractServiceImpl implements SYS002MenuMasterService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS002MenuMasterDAO */                                                                                             
    @Resource(name="SYS002MenuMasterDAO")                                                                      
    private SYS002MenuMasterDAO sys002MenuMasterDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 기초메뉴정보리스트 조회(retrieveMenuMasterList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveMenuMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys002MenuMasterDAO.retrieveMenuMasterList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 기초메뉴정보리스트 저장/수정(saveMenuMasterList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveMenuMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
		String recordKeyValue = "";
        
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            
        	Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            recordKeyValue = outMap.get("MENU_ID").toString();
        	rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                //pk레코드조회                                                                                          	
                                                                                                                             	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys002MenuMasterDAO.insertMenuMasterList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys002MenuMasterDAO.updateMenuMasterList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys002MenuMasterDAO.retrieveMenuMasterList(inMap);                                     
		
        outVar.put("strKeyValue", recordKeyValue);
        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 기초메뉴정보리스트 삭제(deleteMenuMasterList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteMenuMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
            	sys002MenuMasterDAO.deleteUserFavoriteMenuList(map);
            	sys002MenuMasterDAO.deleteUserMenuButtonAuthList(map);     
                sys002MenuMasterDAO.deleteAuthMasterList(map); 
                sys002MenuMasterDAO.deleteMenuMasterList(map);
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                        			
}                                                                                                                            
