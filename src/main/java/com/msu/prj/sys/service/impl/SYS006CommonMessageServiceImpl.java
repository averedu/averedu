/*------------------------------------------------------------------------------  											
 * NAME : SYS006CommonMessageServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 프로젝트 명을 기입                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2019/05/09  jiback                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.msu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.msu.common.exception.CommException;
import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.dao.SYS006CommonMessageDAO;
import com.msu.prj.sys.service.SYS006CommonMessageService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS006CommonMessageService")                                                                               
public class SYS006CommonMessageServiceImpl extends EgovAbstractServiceImpl implements SYS006CommonMessageService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS006CommonMessageDAO */                                                                                             
    @Resource(name="SYS006CommonMessageDAO")                                                                      
    private SYS006CommonMessageDAO sys006CommonMessageDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 메세지리스트 조회(retrieveCommonMessageList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveCommonMessageList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys006CommonMessageDAO.retrieveCommonMessageList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 메세지리스트 저장/수정(saveCommonMessageList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveCommonMessageList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
		                                                                                                    					
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                //pk레코드조회                                                                                          	
                List <Map> recordKeyValue = sys006CommonMessageDAO.retrieveCommonMessageListPKey(outMap);                           
                                                                                                                             
                Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
                outMap.put("MSG_CODE", mapKeyValue.get("MSG_CODE").toString());   
				                                                                                                        		
                if (checkExistPK(outMap)) {                                                                                  
                    throw new CommException("1", "카드사코드가 중복 되였습니다.", ""); 
                }                                                                                                        	
		                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys006CommonMessageDAO.insertCommonMessageList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys006CommonMessageDAO.updateCommonMessageList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys006CommonMessageDAO.retrieveCommonMessageList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 메세지리스트 삭제(deleteCommonMessageList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteCommonMessageList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
                sys006CommonMessageDAO.deleteCommonMessageList(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    /**                                                                                                         				
     * 메세지 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = sys006CommonMessageDAO.retrieveCommonMessageListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }                                                                                                            			
}                                                                                                                            
