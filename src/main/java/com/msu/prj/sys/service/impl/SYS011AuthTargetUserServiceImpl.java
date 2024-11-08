/*------------------------------------------------------------------------------  											
 * NAME : SYS011AuthTargetUserServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2021/01/25  bsoh                                                               			
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
import com.msu.prj.sys.dao.SYS011AuthTargetUserDAO;                                                                             
import com.msu.prj.sys.service.SYS011AuthTargetUserService;                                                                        
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS011AuthTargetUserService")                                                                               
public class SYS011AuthTargetUserServiceImpl extends EgovAbstractServiceImpl implements SYS011AuthTargetUserService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS011AuthTargetUserDAO */                                                                                             
    @Resource(name="SYS011AuthTargetUserDAO")                                                                      
    private SYS011AuthTargetUserDAO sys011AuthTargetUserDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 권한부여대상자리스트 조회(retrieveAuthTargetUserList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveAuthTargetUserList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys011AuthTargetUserDAO.retrieveAuthTargetUserList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 권한부여대상자리스트 저장/수정(saveAuthTargetUserList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveAuthTargetUserList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
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
                List <Map> recordKeyValue = sys011AuthTargetUserDAO.retrieveAuthTargetUserListPKey(outMap);                           
                                                                                                                             
                Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
                outMap.put("AUTH_TRGET_ID", mapKeyValue.get("KEY_CODE").toString());   
				                                                                                                        		
                if (checkExistPK(outMap)) {                                                                                  
                    throw new CommException("1", "코드가 중복 되였습니다.", ""); 
                }                                                                                                        	
                                                                                                         	
		                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys011AuthTargetUserDAO.insertAuthTargetUserList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys011AuthTargetUserDAO.updateAuthTargetUserList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 재 조회시                                       													
        List <Map> records = sys011AuthTargetUserDAO.retrieveAuthTargetUserList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 권한부여대상자리스트 삭제(deleteAuthTargetUserList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteAuthTargetUserList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
                sys011AuthTargetUserDAO.deleteAuthTargetUserList(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    /**                                                                                                         				
     * 권한부여대상자 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = sys011AuthTargetUserDAO.retrieveAuthTargetUserListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }                                                                                                            			
}                                                                                                                            
