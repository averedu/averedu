/*------------------------------------------------------------------------------  											
 * NAME : SYS009UserMenuButtonAuthServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 보람상조 차세대 프로젝트                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2020/06/29  jiback                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.msu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.msu.common.exception.CommException;
import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.dao.SYS009UserMenuButtonAuthDAO;
import com.msu.prj.sys.service.SYS009UserMenuButtonAuthService;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS009UserMenuButtonAuthService")                                                                               
public class SYS009UserMenuButtonAuthServiceImpl extends EgovAbstractServiceImpl implements SYS009UserMenuButtonAuthService {                  
    protected Logger logger = LoggerFactory.getLogger(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS009UserMenuButtonAuthDAO */                                                                                             
    @Resource(name="SYS009UserMenuButtonAuthDAO")                                                                      
    private SYS009UserMenuButtonAuthDAO sys009UserMenuButtonAuthDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 기초사용자리스트 조회(retrieveUserInfoList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserInfoList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys009UserMenuButtonAuthDAO.retrieveUserInfoList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }        
    
    /**                                                                                                             			
     * 기초권한메뉴리스트 조회(retrieveUserAuthMenuList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserAuthMenuList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_inputD");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys009UserMenuButtonAuthDAO.retrieveUserAuthMenuList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }    
    
    /**                                                                                                             			
     * 사용자메뉴별버튼권한리스트 조회(retrieveUserMenuButtonAuthList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserMenuButtonAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_inputD01");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMainList", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 사용자메뉴별버튼권한리스트 저장/수정(saveUserMenuButtonAuthList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveUserMenuButtonAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
		                                                                                                    					
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_inputD01");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMainList");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                                                                                                         	
                //pk레코드조회                                                                                          	
                List <Map> recordKeyValue = sys009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthListPKey(outMap);                           
                                                                                                                             
                Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
                outMap.put("BTTN_SEQ",Integer.parseInt(mapKeyValue.get("KEY_CODE").toString()));   
				                                                                                                        		
                if (checkExistPK(outMap)) {                                                                                  
                    throw new CommException("-1", "카드사코드가 중복 되였습니다.", ""); 
                }                                                                                                        	
  	                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys009UserMenuButtonAuthDAO.insertUserMenuButtonAuthList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys009UserMenuButtonAuthDAO.updateUserMenuButtonAuthList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMainList", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 사용자메뉴별버튼권한리스트 삭제(deleteUserMenuButtonAuthList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteUserMenuButtonAuthList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMainList");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
                sys009UserMenuButtonAuthDAO.deleteUserMenuButtonAuthList(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    /**                                                                                                         				
     * 사용자메뉴별버튼권한 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = sys009UserMenuButtonAuthDAO.retrieveUserMenuButtonAuthListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }                                                                                                            			
}                                                                                                                            
