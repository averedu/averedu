/*------------------------------------------------------------------------------  											
 * NAME : SYS004UserAuthServiceImpl.java                                                                    					
 * DESC :                                                                                                        			
 * VER  : V1.0                                                                                                   			
 * PROJ : 프로젝트 명을 기입                                                                           			
 * Copyright 2021 avereduSystem All rights reserved                                                                			
 *------------------------------------------------------------------------------                                 			
 *                               MODIFICATION LOG                                                                			
 *------------------------------------------------------------------------------                                 			
 *    DATE     AUTHOR                      DESCRIPTION                        												
 * ----------  ------  ---------------------------------------------------------                                 			
 * 2019/05/03  jiback                                                               			
 *------------------------------------------------------------------------------*/                               			
package com.averedu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.averedu.common.exception.CommException;
import com.averedu.common.util.DataUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS004UserAuthDAO;
import com.averedu.prj.sys.service.SYS004UserAuthService;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS004UserAuthService")                                                                               
public class SYS004UserAuthServiceImpl extends EgovAbstractServiceImpl implements SYS004UserAuthService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS004UserAuthDAO */                                                                                             
    @Resource(name="SYS004UserAuthDAO")                                                                      
    private SYS004UserAuthDAO sys004UserAuthDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 교육생권한코드리스트 조회(retrieveAuthMasterList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveAuthMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys004UserAuthDAO.retrieveAuthMasterList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }      
    
    /**                                                                                                             			
     * 교육생권한코드리스트 조회(retrieveUserAuthList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys004UserAuthDAO.retrieveUserAuthList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail1", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }          
    
    
    /**                                                                                                             			
     * 교육생권한코드리스트 조회(retrieveUserList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveUserList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
        List<Map> records = sys004UserAuthDAO.retrieveUserList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail2", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }
    
    
                                                                                                                             
    /**                                                                                                             			
     * 교육생권한코드리스트 저장/수정(saveUserAuthList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveUserAuthList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
		               
        //관할부서 데이터셋 저장 
        DataSetMap dsMapDept = (DataSetMap) inDataset.get("dsDeptDetail");                                   
        for (int i = 0; i < dsMapDept.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMapDept.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    

         		outMap.put("REG_ID", String.valueOf(sessionVO.getUserId()));                           
                outMap.put("MOD_ID", String.valueOf(sessionVO.getUserId()));
                sys004UserAuthDAO.insertUserAuthCtrlDeptList(outMap);

            }else if ( rowType == DataSet.ROW_TYPE_UPDATED ) {

                outMap.put("MOD_ID", String.valueOf(sessionVO.getUserId()));
                sys004UserAuthDAO.updateUserAuthCtrlDeptList(outMap);            	

            }else if ( rowType == DataSet.ROW_TYPE_DELETED ) {

        		sys004UserAuthDAO.deleteUserAuthCtrlDeptList(outMap);        		
             }
        }
        
        //사용자 데이터셋 저장                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsDetail1");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                                                                                                                             	
            	List<Map> recordRowCnt = sys004UserAuthDAO.retrieveUserAuthListKey(outMap);                          		
             	Map<String, Object> rowTablCnt = (Map<String, Object>)recordRowCnt.get(0);      
				
             	int rCnt =  DataUtil.parseInteger(rowTablCnt.get("TABLE_CNT"));
             	
             	if(rCnt == 0) {
             		outMap.put("REG_ID", String.valueOf(sessionVO.getUserId()));                           
                    outMap.put("MOD_ID", String.valueOf(sessionVO.getUserId()));                           
                    sys004UserAuthDAO.insertUserAuthList(outMap);
             	}                                              	       	
            }else if ( rowType == DataSet.ROW_TYPE_DELETED ) {
        		//관할부서
        		sys004UserAuthDAO.deleteUserAuthCtrlDeptList(outMap);

        		//사용자            	
            	sys004UserAuthDAO.deleteUserAuthList(outMap); 
            	
                String uCnt =  sys004UserAuthDAO.retrieveUserCntList(outMap); 
            	if(uCnt.equals("0"))
                {
                	sys004UserAuthDAO.deleteUserMenuButtonAuthList(outMap); 
                }
                
             }
        }
        
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);
        
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys004UserAuthDAO.retrieveUserAuthList(inMap);                                     
                                                                                                                                
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail1", dsOut); 
        
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records1 = sys004UserAuthDAO.retrieveUserList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut1 = new DataSetMap();                                                                                 
        dsOut1.setRowMaps(records1);                                                                                           
        outDataset.put("dsDetail2", dsOut1);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
        
	/**                                                                                                             			
	* 사용자관할부서리스트 조회(retrieveUserAuthCtrlDeptList)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void retrieveUserAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
	Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
		                
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> map = (Map<String, Object>)dsMap.get(0);    
		
		List<Map> records = sys004UserAuthDAO.retrieveUserAuthCtrlDeptList(map);                                            
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                
		return;                                                                                                              
	}                                                                                                                        
	             
	/**                                                                                                             			
	* 사용자관할부서리스트 저장/수정(saveUserAuthCtrlDeptList)                                                        	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void saveUserAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
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
				
                if (checkUserAuthCtrlDepExistPK(outMap))                                                                                   
                    continue;  				
			      	
				outMap.put("REG_ID", sessionVO.getUserId().toString());                           
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
				             	
				//신규저장                                                                                              	
				sys004UserAuthDAO.insertUserAuthCtrlDeptList(outMap);                                               		
				             	
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
				             	
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
				//수정                                                                                                  	
				sys004UserAuthDAO.updateUserAuthCtrlDeptList(outMap);                                               		
			             	
			}                                                                                                               	
		}                                                                                                                    
		//서버에서 시퀀스 재 조회시                                       													
		List <Map> records = sys004UserAuthDAO.retrieveUserAuthCtrlDeptList(inMap);                                     
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                
		return;                                                                                                              
	}                                                                                                                        
	             
	/**                                                                                                         				
	* 사용자관할부서리스트 삭제(deleteUserAuthCtrlDeptList)                                                         	 	
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	public void deleteUserAuthCtrlDeptList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
					
		int rowType;                                                                                     					
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsDeptDetail");                    					
						
		for (int i = 0; i < dsMap.size(); i++) {                                                            					
						
			Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
					            
			if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
				sys004UserAuthDAO.deleteUserAuthCtrlDeptList(map);                              							
			}                                                                                           						
		}                                                                                                   					
		return;                                                                                             					
	}      
	
	/**                                                                                                         				
	* 사용자관할부서 중복 체크(checkUserAuthCtrlDepExistPK)                                                         	 				
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	private Boolean checkUserAuthCtrlDepExistPK(Map<String, Object> outMap) throws Exception {                                              
		List<Map> records = sys004UserAuthDAO.retrieveUserAuthCtrlDeptListKey(outMap);                                            
		Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);
		
		if(outMap1.get("CNT").toString().equals("0")) {                            
			return false;                                                                                                    
		}                                                                                                        			
		return true;                                                                                                         
	} 	
}                                                                                                                            
