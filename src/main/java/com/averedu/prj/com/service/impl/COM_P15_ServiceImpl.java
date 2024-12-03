/*------------------------------------------------------------------------------  											
 * NAME : COM_P15_ServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 목포과학대 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2022/08/25  정진호                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.averedu.prj.com.service.impl;                                                                                        
                                                                                                                             
import java.util.List;                                                                                                       
import java.util.Map;                                                                                                        
                                                                                                                             
import javax.annotation.Resource;                                                                                            
                                                                                                                             
import org.apache.commons.logging.Log;                                                                                       
import org.apache.commons.logging.LogFactory;                                                                                
import org.springframework.stereotype.Service;                                                                               
                                                                                                                             
import com.nexacro17.xapi.data.DataSet;                                                                                      
                                                                                                                             
import com.averedu.common.exception.CommException;                                                                         
import com.averedu.common.vo.SessionVO;                                                                                   	
import com.averedu.prj.com.dao.COM_P15_DAO;                                                                             
import com.averedu.prj.com.service.COM_P15_Service;                                                                        
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("COM_P15_Service")                                                                               
public class COM_P15_ServiceImpl extends EgovAbstractServiceImpl implements COM_P15_Service {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** COM_P15_DAO */                                                                                             
    @Resource(name="COM_P15_DAO")                                                                      
    private COM_P15_DAO com_P15_DAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 교직사정학생리스트 조회(retrieve_P15List)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieve_P15List( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        String strMenuId = inVar.get("GBV_MENUID").toString();                                         
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        map.put("INSERT_PG", strMenuId);                           							        
        List<Map> records = com_P15_DAO.retrieve_P15List(map);                                           
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 교직사정학생리스트 저장/수정(save_P15List)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void save_P15List( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
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
                com_P15_DAO.insert_P15List(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               	
		                                                                                                                     	
                outMap.put("UPDATE_ID", sessionVO.getUserId().toString());                           	
                outMap.put("UPDATE_IP", sessionVO.getIpAddress().toString());                          
                outMap.put("UPDATE_PG", strMenuId);                           							
		                                                                                                    					
                //수정                                                                                                  		
                com_P15_DAO.update_P15List(outMap);                                               		
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = com_P15_DAO.retrieve_P15List(inMap);                                     	
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 교직사정학생리스트 삭제(delete_P15List)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void delete_P15List(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
                com_P15_DAO.delete_P15List(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    /**                                                                                                         				
     * 교직사정학생 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = com_P15_DAO.retrieve_P15ListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }                                                                                                            			
}                                                                                                                            
