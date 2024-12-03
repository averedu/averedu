/*------------------------------------------------------------------------------  											
 * NAME : SYS010UserGroupAuthServiceImpl.java                                                                    					
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
package com.averedu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.averedu.common.exception.CommException;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS010UserGroupAuthDAO;
import com.averedu.prj.sys.service.SYS010UserGroupAuthService;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS010UserGroupAuthService")                                                                               
public class SYS010UserGroupAuthServiceImpl extends EgovAbstractServiceImpl implements SYS010UserGroupAuthService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS010UserGroupAuthDAO */                                                                                             
    @Resource(name="SYS010UserGroupAuthDAO")                                                                      
    private SYS010UserGroupAuthDAO sys010UserGroupAuthDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 권한별사용자그룹리스트 조회(retrieveUserGroupAuthList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserGroupAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthList(map);
        /*
        // test
        System.out.println("======================");
        map.put("IN_AA", "무궁화꽃이피었습니다.");
        sys010UserGroupAuthDAO.updateProcedureSample(map);
        
        System.out.println(map.toString());
        
        List<Map> records2 = (List<Map>) map.get("OT_CUR");
        
        System.out.println(records2.toString());
        
        DataSetMap dsOut2 = new DataSetMap();
        dsOut2.setRowMaps(records2);
        System.out.println(dsOut2.toString());
        
        outDataset.put("dsCursor", dsOut2);
        System.out.println("======================");
		// /test
        */
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);
        outDataset.put("dsDetail", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 권한별사용자그룹리스트 저장/수정(saveUserGroupAuthList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveUserGroupAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;
        
        //관할부서 저장데이타셋                                       																
        DataSetMap dsMapDept = (DataSetMap) inDataset.get("dsDeptDetail");                                   
        for (int i = 0; i < dsMapDept.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMapDept.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                   
				if (checkCtrlDeptExistPK(outMap))                                                                                   
					continue;                                                                                                       	
		                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys010UserGroupAuthDAO.insertUserGroupAuthCtrlDeptList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys010UserGroupAuthDAO.updateUserGroupAuthCtrlDeptList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }               
		        
        //사용자그룹 저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsDetail");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                                                                                                         	
                //pk레코드조회                                                                                          	
                List <Map> recordKeyValue = sys010UserGroupAuthDAO.retrieveUserGroupAuthListPKey(outMap);                           
                                                                                                                             
                Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
                outMap.put("USER_GROUP_SEQ", mapKeyValue.get("KEY_CODE").toString());   

                if (checkExistPK(outMap)) {                                                                                  
                    throw new CommException("1", "코드가 중복 되였습니다.", ""); 
                }                                                                                                        	
                                                                                                         	
		                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys010UserGroupAuthDAO.insertUserGroupAuthList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys010UserGroupAuthDAO.updateUserGroupAuthList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }         
        
        
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);  
        
        //서버에서 시퀀스 재 조회시                                       													
        List <Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 권한별사용자그룹리스트 삭제(deleteUserGroupAuthList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteUserGroupAuthList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;                                                                                     					
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsDetail");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {
            	//관할부서
            	sys010UserGroupAuthDAO.deleteUserGroupAuthCtrlDeptList(map);
            	//사용자그룹
                sys010UserGroupAuthDAO.deleteUserGroupAuthList(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    /**                                                                                                         				
     * 권한별사용자그룹 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }
        
	/**                                                                                                             			
	* 사용자그룹별관할부서리스트 조회(retrieveUserGroupAuthCtrlDeptList)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void retrieveUserGroupAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
		Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
		                
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
		List<Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthCtrlDeptList(map);                                            
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                
		return;                                                                                                              
	}                                                                                                                        
	             
	/**                                                                                                             			
	* 사용자그룹별관할부서리스트 저장/수정(saveUserGroupAuthCtrlDeptList)                                                        	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void saveUserGroupAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
		Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
		//조회조건                                      																	
		int rowType;                                                                                     					
						
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
		//저장데이타셋                                       																
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsDeptDetail");                                   
		for (int i = 0; i < dsMap1.size(); i++) {																			
			Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
			rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			            	
			if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    

				if (checkCtrlDeptExistPK(outMap))                                                                                   
					continue; 
				             	
				outMap.put("REG_ID", sessionVO.getUserId().toString());                           
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
				             	
				//신규저장                                                                                              	
				sys010UserGroupAuthDAO.insertUserGroupAuthCtrlDeptList(outMap);                                               		
				             	
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
				             	
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
				//수정                                                                                                  	
				sys010UserGroupAuthDAO.updateUserGroupAuthCtrlDeptList(outMap);                                               		
				             	
			}                                                                                                               	
		}                                                                                                                    
		//서버에서 시퀀스 재 조회시                                       													
		List <Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthCtrlDeptList(inMap);                                     
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                
		return;                                                                                                              
	}                                                                                                                        
	             
	/**                                                                                                         				
	* 사용자그룹별관할부서리스트 삭제(deleteUserGroupAuthCtrlDeptList)                                                         	 	
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	public void deleteUserGroupAuthCtrlDeptList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
					
		int rowType;                                                                                     					
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsDeptDetail");                    					
						
		for (int i = 0; i < dsMap.size(); i++) {                                                            					
							
			Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
					            
			if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
				sys010UserGroupAuthDAO.deleteUserGroupAuthCtrlDeptList(map);                              							
			}                                                                                           						
		}                                                                                                   					
		return;                                                                                             					
	}                                                                                                           				
					
	/**                                                                                                         				
	* 사용자그룹별관할부서 중복 체크(checkExistPK)                                                         	 				
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	private Boolean checkCtrlDeptExistPK(Map<String, Object> outMap) throws Exception {                                              
		List<Map> records = sys010UserGroupAuthDAO.retrieveUserGroupAuthCtrlDeptListKey(outMap);                                            
		Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
		if(outMap1.get("CNT").toString().equals("0")) {                            
			return false;                                                                                                    
		}                                                                                                        			
		return true;                                                                                                         
	}                   
}                                                                                                                            
