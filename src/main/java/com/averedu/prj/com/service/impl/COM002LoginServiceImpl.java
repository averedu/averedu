/*------------------------------------------------------------------------------  								  						
 * NAME : COM002LoginServiceImpl.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                      						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  -----------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   화면 로그인을 처리하는 프로세스		                                                                                     						
 *------------------------------------------------------------------------------*/
package com.averedu.prj.com.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.averedu.common.util.DataUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.dao.COM002LoginDAO;
import com.averedu.prj.com.service.COM002LoginService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("COM002LoginService")
public class COM002LoginServiceImpl extends EgovAbstractServiceImpl implements COM002LoginService {

	/** COM002LoginDAO */
	@Resource(name = "COM002LoginDAO")
	private COM002LoginDAO com002LoginDAO;

	/**                                                                                                             
	 * 사용자 로긴온(USER) 정보(retrieveLoginList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */    
	public Map<String,Object> retrieveLoginList(Map<String, Object> map) throws Exception {

		Map<String,Object> records = com002LoginDAO.retrieveLoginList(map); 
		return records;
	}
	
	/**                                                                                                             
	 * 사용자 메뉴정보 조회(retrieveLoginMenuData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */  
	public List<Map> retrieveLoginMenuData(Map<String, Object> map) throws Exception {

		List<Map> records = com002LoginDAO.retrieveLoginMenuData(map); 
		return records;
	}
	
	/**                                                                                                             
	 * 즐겨찾기 메뉴 조회(retrieveBookmarkRegisterList)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */  
	public List<Map> retrieveBookmarkRegisterList(Map<String, Object> map) throws Exception {

		List<Map> records = com002LoginDAO.retrieveBookmarkRegisterList(map); 
		return records;
	}
	
	
	/**                                                                                                             
	 * 시스템에 날짜(retrieveLoginSystemDate)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */  
	public List<Map> retrieveLoginSystemDate() throws Exception {

		List<Map> records = com002LoginDAO.retrieveLoginSystemDate(); 
		return records;
	}
	
	/**                                                                                                             
	 * DB로 메시지를 관리시(retrieveLoginMessageData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */ 
	public List<Map> retrieveLoginMessageData(Map<String, Object> map) throws Exception {

		List<Map> records = com002LoginDAO.retrieveLoginMessageData(map); 
		return records;
	}
	
	/**                                                                                                             
	 * DB로 컴퍼넌트를 관리시(retrieveLoginComponentData)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */   
	public List<Map> retrieveLoginComponentData(Map<String, Object> map) throws Exception {

		List<Map> records = com002LoginDAO.retrieveLoginComponentData(map); 
		return records;
	}
	
	/**                                                                                                             
	 * 로긴온 사용자권한(retrieveLoginUserAuth)                                                         
	 * @param input                                                                                                 
	 * @return                                                                                                      
	 * @throws Exception                                                                                           	
	 */   
	public List<Map> retrieveLoginUserAuth(Map<String, Object> map) throws Exception {

		List<Map> records = com002LoginDAO.retrieveLoginUserAuth(map); 
		return records;
	}
	
	/**                                                                                                                     	
	 * 화면시작시 로그인한 후 Left메뉴를 조회(retrieveLoginLeftMenuList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */ 
	
	public void retrieveLoginLeftMenuList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {
		
		Map<String, Object> map = (Map<String,Object>)inVar;
		map.put("USER_ID", DataUtil.nvl(sessionVO.getUserId()).toString());  //session 담아둔 사용자 아이디르 셋팅    		
		
		List<Map> records = com002LoginDAO.retrieveLoginLeftMenuList(map);

		DataSetMap dsOut = new DataSetMap();
		dsOut.setRowMaps(records);
		outDataset.put("dsMenu", dsOut); 

		return;
		
	}
	
    /**                                                                                                             			
     * 화면에 즐겨찾기 저장(saveBookmarkRegister)                                                          	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveBookmarkRegister( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
     
        DataSetMap dsMap = (DataSetMap) inDataset.get("gds_userInfoDb");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("gds_MyMenu");     
        
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                //pk레코드조회                                                                                          	
                
            	outMap.put("USER_ID", 	inMap.get("USER_ID").toString());
                outMap.put("REG_ID", 	sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", 	sessionVO.getUserId().toString());                           
                //신규저장                                                                                              	
                com002LoginDAO.insertBookmarkRegister(outMap);                                               		
            } 
        }                                                                                                                    
        //서버에서 시퀀스 제조회시                                       													
        List <Map> records = com002LoginDAO.retrieveBookmarkRegisterList(inMap);                                     
        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("gds_MyMenu", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
    
    /**                                                                                                             			
     * 화면에 즐겨찾기 삭제(deleteBookmark)                                                          	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void deleteBookmark( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("gds_MyMenu");     
        
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
            if ( rowType == DataSet.ROW_TYPE_DELETED) {                                                                    
                //신규저장                                                                                              	
                com002LoginDAO.deleteBookmark(outMap);                                               		
            } 
        }                                                                                                                    
                                                                    
		                                                                                                                        
        return;                                                                                                              
    }  
	
}