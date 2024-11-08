/*------------------------------------------------------------------------------  											
 * NAME : SYS003AuthMenuMasterServiceImpl.java                                                                    					
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
package com.msu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.msu.common.exception.CommException;
import com.msu.common.util.DataUtil;
import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.dao.SYS003AuthMenuMasterDAO;
import com.msu.prj.sys.service.SYS003AuthMenuMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   
                                                                                                                             
@Service("SYS003AuthMenuMasterService")                                                                               
public class SYS003AuthMenuMasterServiceImpl extends EgovAbstractServiceImpl implements SYS003AuthMenuMasterService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
                                                                                                                             
    /** SYS003AuthMenuMasterDAO */                                                                                             
    @Resource(name="SYS003AuthMenuMasterDAO")                                                                      
    private SYS003AuthMenuMasterDAO sys003AuthMenuMasterDAO;                                                                     
                                                                                                                             
    /**                                                                                                             			
     * 기초권한테이블리스트 조회(retrieveAuthMenuMasterList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveAuthMenuMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);
        
        //Menu
        List<Map> recordsMenu = sys003AuthMenuMasterDAO.retrieveAuthMenuMasterList(map);                                            
		                                                                                                                        
        DataSetMap dsOutMenu = new DataSetMap();                                                                                 
        dsOutMenu.setRowMaps(recordsMenu);                                                                                           
        outDataset.put("dsMaster", dsOutMenu);
        
        //Dept
        List<Map> recordsDept = sys003AuthMenuMasterDAO.retrieveAuthDeptTreeList(map);                                            
        
        DataSetMap dsOutDept = new DataSetMap();                                                                                 
        dsOutDept.setRowMaps(recordsDept);
        outDataset.put("dsDeptList", dsOutDept);        
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
    
    /**                                                                                                             			
     * 기초권한메뉴리스트 조회(retrieveAuthMenuDetailList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveAuthMenuDetailList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);
        
        //Menu
        List<Map> recordsMenu = sys003AuthMenuMasterDAO.retrieveAuthMenuDetailList(map);                                            
		                                                                                                                        
        DataSetMap dsOutMenu = new DataSetMap();                                                                                 
        dsOutMenu.setRowMaps(recordsMenu);                                                                                           
        outDataset.put("dsDetail", dsOutMenu);
        
        //Dept
        List<Map> recordsDept = sys003AuthMenuMasterDAO.retrieveAuthCtrlDeptList(map);                                            
        
        DataSetMap dsOutDept = new DataSetMap();                                                                                 
        dsOutDept.setRowMaps(recordsDept);                                                                                           
        outDataset.put("dsDeptDetail", dsOutDept);        
		                                                                                                                        
        return;                                                                                                              
    }       
    
    
    
    /**                                                                                                             			
     * 기초권한테이블리스트 저장/수정(saveAuthMenuMasterList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveAuthMenuMasterList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
        String recordKeyValue = "";
        
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster"); 
        DataSetMap dsMap2 = (DataSetMap) inDataset.get("dsDetail"); 
       
        if(dsMap1.size() > 0) {
        	
	        for (int i = 0; i < dsMap1.size(); i++) {																			
	            
	        	Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
	            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
				                                                                                                                	
	            recordKeyValue = outMap.get("AUTH_CD").toString();
	            
	            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
	                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
	                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
	                //신규저장                                                                                              	
	                sys003AuthMenuMasterDAO.insertAuthMenuMasterList(outMap);                                               		
	            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
			                                                                                                                     	
	                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
	                //수정                                                                                                  	
	                sys003AuthMenuMasterDAO.updateAuthMenuMasterList(outMap);                                               		
	            }
	            for(int k=0; k < dsMap2.size(); k++){
	            	Map<String, Object> outMap2 = (Map<String, Object>)dsMap2.get(k);
	            	rowType = ((Integer) outMap2.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue(); 
	            	
	            	String strChk = outMap2.get("CHK").toString();
	            	outMap2.put("CO_CD", 	DataUtil.nvl(inMap.get("CO_CD")));
	            	outMap2.put("AUTH_CD", 	DataUtil.nvl(outMap.get("AUTH_CD")));
	            	
	            	if(rowType == DataSet.ROW_TYPE_UPDATED ){
	            		if(strChk.equals("1")){
	            			Map<String,Object> rCntcheck = sys003AuthMenuMasterDAO.retrieveAuthMenuDetailListKey(outMap2);
	    					int rCnt =  DataUtil.parseInteger(rCntcheck.get("CNT"));
	    					if(rCnt > 0) {
	            				outMap2.put("MOD_ID", sessionVO.getUserId().toString());    								
	            				sys003AuthMenuMasterDAO.updateAuthMenuDetailList(outMap2);    
	            			}else {
	            				outMap2.put("REG_ID", sessionVO.getUserId().toString());    								
								outMap2.put("MOD_ID", sessionVO.getUserId().toString());  
								
								sys003AuthMenuMasterDAO.insertAuthMenuDetailList(outMap2); 
	            			}
	            			
	            		}else if(strChk.equals("0")){
	            			sys003AuthMenuMasterDAO.deleteAuthMenuDetailList(outMap2); 
	            		}
	            	}
	            }
	        }
        } else {
        	
        	
        	
        	for (int i = 0; i < dsMap2.size(); i++) {
        		Map<String, Object> outMap2 = (Map<String, Object>)dsMap2.get(i);
            	rowType = ((Integer) outMap2.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue(); 
            	
            	recordKeyValue = outMap2.get("AUTH_CD").toString();
            	String strChk = outMap2.get("CHK").toString();
            	outMap2.put("CO_CD", 	DataUtil.nvl(inMap.get("CO_CD")));
            	
            	
            	
            	if(rowType == DataSet.ROW_TYPE_UPDATED ){
            		if(strChk.equals("1")){
            			Map<String,Object> rCntcheck = sys003AuthMenuMasterDAO.retrieveAuthMenuDetailListKey(outMap2);
    					int rCnt =  DataUtil.parseInteger(rCntcheck.get("CNT"));
    					if(rCnt > 0) {
            				outMap2.put("MOD_ID", sessionVO.getUserId().toString());    								
            				sys003AuthMenuMasterDAO.updateAuthMenuDetailList(outMap2);    
            			}else {
            				outMap2.put("REG_ID", sessionVO.getUserId().toString());    								
							outMap2.put("MOD_ID", sessionVO.getUserId().toString());  
							
							sys003AuthMenuMasterDAO.insertAuthMenuDetailList(outMap2); 
            			}
            			
            		}else if(strChk.equals("0")){
            			sys003AuthMenuMasterDAO.deleteAuthMenuDetailList(outMap2); 
            		}
            	}
        	}
        }
                
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys003AuthMenuMasterDAO.retrieveAuthMenuMasterList(inMap);                                     
        log.info("==============================================>" + recordKeyValue);
        outVar.put("strKeyValue", recordKeyValue); 
        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
    
    /**                                                                                                             			
	 * 권한 디테일 저장/수정(saveAuthMenuDetailList)                                                        					
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */
    public void saveAuthMenuDetailList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {   
		//조회조건                                      																		
		int rowType;      
		Map<String, Object> map           = null;
		                                                                                                    					
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input1");                                     
		Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
		//저장데이타셋                                       																
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsDetail");                                       
		for (int i = 0; i < dsMap1.size(); i++) 
		{																				
			Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);
        	rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue(); 
        	
        	String strChk = outMap.get("CHK").toString();
        	outMap.put("CO_CD", 	DataUtil.nvl(inMap.get("CO_CD")));
        	
			if (rowType == DataSet.ROW_TYPE_UPDATED){                                                                 	
				                                                                                                        		
				if(strChk.equals("1"))
				{
					Map<String,Object> rCntcheck = sys003AuthMenuMasterDAO.retrieveAuthMenuDetailListKey(outMap);
					int rCnt =  DataUtil.parseInteger(rCntcheck.get("CNT"));
					if(rCnt > 0) {
						outMap.put("MOD_ID", sessionVO.getUserId().toString());    								
						sys003AuthMenuMasterDAO.updateAuthMenuDetailList(outMap);    
					}else {	
						outMap.put("REG_ID", sessionVO.getUserId().toString());
						outMap.put("MOD_ID", sessionVO.getUserId().toString());  
						sys003AuthMenuMasterDAO.insertAuthMenuDetailList(outMap);  
						
					}
						
				}else if(strChk.equals("0"))
				{
					List<Map> userAuthList = sys003AuthMenuMasterDAO.retrieveUserAuthMenuList(outMap);  
					
					if(userAuthList.size() > 0 ){
						
						for(int idx=0; idx < userAuthList.size(); idx++)
	                    {
							map = userAuthList.get(idx);
							
							String uCnt =  sys003AuthMenuMasterDAO.retrieveUserCntList(map);
							if(uCnt.equals("1"))
				            {
								sys003AuthMenuMasterDAO.deleteUserMenuButtonAuthList(map); 
				            }
	                    }
					}
					sys003AuthMenuMasterDAO.deleteAuthMenuDetailList(outMap); 
					
				}
			}                                                                                                               	
		}                                                                                                                    	
		
		//서버에서 시퀀스 제조회시                                       													
        List <Map> records = sys003AuthMenuMasterDAO.retrieveAuthMenuDetailList(inMap);                                     
      
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsDetail", dsOut);    
                                                                                                                                
		return;                                                                                                                 
	} 
    /**                                                                                                         				
     * 기초권한테이블리스트 삭제(deleteAuthMenuMasterList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteAuthMenuMasterList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;
        Map<String, Object> map1           = null;
        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {    
            	
            	List<Map> userAuthAllList = sys003AuthMenuMasterDAO.retrieveUserAuthMenuAllList(map);   
            	
                if(userAuthAllList.size() > 0 ){
					
					for(int idx=0; idx < userAuthAllList.size(); idx++)
                    {
						map1 = userAuthAllList.get(idx);
						String uCnt =  sys003AuthMenuMasterDAO.retrieveUserCntList(map1);
						if(uCnt.equals("1"))
			            {
							sys003AuthMenuMasterDAO.deleteUserMenuButtonAuthList(map1); 
			            }
                    }
				}
            	sys003AuthMenuMasterDAO.deleteAuthMenuAllList(map);
            	sys003AuthMenuMasterDAO.deleteUserAuthAllList(map);
                sys003AuthMenuMasterDAO.deleteAuthMenuMasterList(map);  
               
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }                                                                                                           				
	                                                                                                            				
    
	/**                                                                                                             			
	* 부서트리(조직도)리스트 조회(retrieveAuthDeptTreeList)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void retrieveAuthDeptTreeList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                      
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
		List<Map> records = sys003AuthMenuMasterDAO.retrieveAuthDeptTreeList(map);                                            
		                      
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsMaster", dsOut);                                                             
		                      
		return;                                                                                                              
	}                                                                                                                        

    
	/**                                                                                                             			
	* 권한별관활부서리스트 조회(retrieveAuthCtrlDeptList)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void retrieveAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                  
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
		List<Map> records = sys003AuthMenuMasterDAO.retrieveAuthCtrlDeptList(map);                                            
		                  
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                  
		return;                                                                                                              
	}    
	    
	/**                                                                                                             			
	* 권한별관활부서리스트 저장/수정(saveAuthCtrlDeptList)                                                        	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void saveAuthCtrlDeptList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
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
          	
				outMap.put("REG_ID", sessionVO.getUserId().toString());                           
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
				             	
				//신규저장                                                                                              	
				sys003AuthMenuMasterDAO.insertAuthCtrlDeptList(outMap);                                               		
				             	
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
				             	
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
				//수정                                                                                                  	
				sys003AuthMenuMasterDAO.updateAuthCtrlDeptList(outMap);                                               		
				             	
			}                                                                                                               	
		}       
		
		//서버에서 시퀀스 재 조회시                                       													
		List <Map> records = sys003AuthMenuMasterDAO.retrieveAuthCtrlDeptList(inMap);                                     
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut);                                                             
		                
		return;                                                                                                              
	}                                                                                                                        
	             
	/**                                                                                                         				
	* 권한별관활부서리스트 삭제(deleteAuthCtrlDeptList)                                                         	 	
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	public void deleteAuthCtrlDeptList(Map<String, DataSetMap> inDataset, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {           
					
		int rowType;                                                                                     					
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsDeptDetail");                    					
						
		for (int i = 0; i < dsMap.size(); i++) {                                                            					
						
			Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			

			if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							
				sys003AuthMenuMasterDAO.deleteAuthCtrlDeptList(map);                              							
			}                                                                                           						
		}
		
		//서버에서 시퀀스 재 조회시
		DataSetMap dsMapInput = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> inMap = (Map<String, Object>)dsMapInput.get(0);
		
		List <Map> records = sys003AuthMenuMasterDAO.retrieveAuthCtrlDeptList(inMap);                                     
		                
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsDeptDetail", dsOut); 		
		
		return;                                                                                             					
	}         	

}                                                                                                                            
