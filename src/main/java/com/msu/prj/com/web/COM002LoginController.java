/*------------------------------------------------------------------------------  								  						
 * NAME : COM002LoginController.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   화면 로그인을 처리하는 프로세스	                                                                                     						
 *------------------------------------------------------------------------------*/           
package com.msu.prj.com.web;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.msu.common.exception.CommExceptionUtil;
import com.msu.common.util.EgovWebUtil;
import com.msu.common.util.SessionUtil;
import com.msu.common.vo.SessionVO;
import com.msu.prj.com.service.COM002LoginService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class COM002LoginController {

	Log logger = LogFactory.getLog(this.getClass());
	
    /** COM002LoginService */
    @Resource(name = "COM002LoginService")
    private COM002LoginService  com002LoginService ;
    
    /**                                                                                                                     	
	 *화면시작시 로그인함(actionRetrieveLoginList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/com/RetrieveLoginList.do")
	public ModelAndView actionRetrieveLoginList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			 
			Map<String, Object> map = (Map<String,Object>)inVar;
			Map<String, Object> objUserInfoList = com002LoginService.retrieveLoginList(map);   
			
			if(objUserInfoList!=null) {
				
				List<Map> userinfoDb = new ArrayList<Map>();
				userinfoDb.add(objUserInfoList);
				
				DataSetMap dsOut = new DataSetMap();                                                                                    
				dsOut.setRowMaps(userinfoDb);                                                                                              
				outDataset.put("gds_userInfoDb", dsOut);               		 							// 사용자정보를 넣는다
				
				objUserInfoList.put("LANGUAGE",map.get("LANGUAGE").toString());
				
				List<Map> menuList = com002LoginService.retrieveLoginMenuData(objUserInfoList);   		// 메뉴리스트조회
				
				DataSetMap dsOut1 = new DataSetMap();                                                                                    
				dsOut1.setRowMaps(menuList);                                                                                              
				outDataset.put("gds_Menu", dsOut1);               		
			
				List<Map> MyMenuList = com002LoginService.retrieveBookmarkRegisterList(objUserInfoList); // 마이 메뉴(즐겨찾기 메뉴 조회)
				
				DataSetMap dsOut6 = new DataSetMap();                                                                                    
				dsOut6.setRowMaps(MyMenuList);                                                                                              
				outDataset.put("gds_MyMenu", dsOut6);               		
							
				List<Map> dateList = com002LoginService.retrieveLoginSystemDate();       				// 날짜정보가지고 오기
				
				DataSetMap dsOut2 = new DataSetMap();                                                                                    
				dsOut2.setRowMaps(dateList);                                                                                                 
				outDataset.put("gds_SystemDate", dsOut2);  
				
				
				List<Map> messageList = com002LoginService.retrieveLoginMessageData(map);   			// DB메세지관리를 할시사용            
				
				DataSetMap dsOut3 = new DataSetMap();       				                                                                 
				dsOut3.setRowMaps(messageList);                                                                                              
				outDataset.put("gds_Message", dsOut3); 
				
				
				List<Map> componentList = com002LoginService.retrieveLoginComponentData(map);   		// DB컴포넌트를 관리할시사용            
				
				DataSetMap dsOut4 = new DataSetMap();       				                                                                 
				dsOut4.setRowMaps(componentList);                                                                                              
				outDataset.put("gds_Component", dsOut4);
				
				List<Map> userAuthList = com002LoginService.retrieveLoginUserAuth(objUserInfoList);       	// 로긴온 사용자권한
				
				DataSetMap dsOut5 = new DataSetMap();                                                                                    
				dsOut5.setRowMaps(userAuthList);                                                                                                 
				outDataset.put("gds_UserAuth", dsOut5);  
								
				SessionVO sessionVO = new SessionVO();
				
				sessionVO.setUserId(objUserInfoList.get("USER_ID") == null ? "" : objUserInfoList.get("USER_ID").toString()); 						/** 사용자ID 	**/
	            sessionVO.setUserNm(objUserInfoList.get("USER_NM") == null ? "" : objUserInfoList.get("USER_NM").toString());						/** 사용자이름 	**/
	            sessionVO.setUserPw(objUserInfoList.get("USER_PW") == null ? "" : objUserInfoList.get("USER_NM").toString()); 						/** 패스워드 	**/
	            sessionVO.setDept(objUserInfoList.get("DEPT") == null ? "" : objUserInfoList.get("DEPT").toString());								/** 부서 		**/
	            sessionVO.setTelNo(objUserInfoList.get("TEL_NO") == null ? "" : objUserInfoList.get("TEL_NO").toString());							/** 전화번호   	**/
	            sessionVO.setHpNo(objUserInfoList.get("HP_NO") == null ? "" : objUserInfoList.get("HP_NO").toString());								/** 핸드폰번호 	**/
	            sessionVO.setEmail(objUserInfoList.get("EMAIL") == null ? "" : objUserInfoList.get("EMAIL").toString());							/** 이메일 	**/
	            sessionVO.setIpAddress(objUserInfoList.get("IP_ADDRESS") == null ? "" : EgovWebUtil.getUserIpAddress());							/** IP주소 	**/
	            sessionVO.setUserGbcd(objUserInfoList.get("USER_GBCD") == null ? "" : objUserInfoList.get("USER_GBCD").toString());					/** 사용자구분코드 **/
	            sessionVO.setJikjongGbcd(objUserInfoList.get("JIKJONG_GBCD") == null ? "" : objUserInfoList.get("JIKJONG_GBCD").toString());		/** 직종구분코드 **/
	            sessionVO.setJikgeupGbcd(objUserInfoList.get("JIKGEUP_GBCD") == null ? "" : objUserInfoList.get("JIKGEUP_GBCD").toString());		/** 직급구분코드 **/
	        	            
	            SessionUtil.setSessionVO(session, sessionVO);
			  
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   xpDto.getOutDataSetMap());
		  		
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");
		  
			}else
			{
				mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-1");                                             
				mav.addObject(NexacroPlatformConstant.ERROR_MSG, "아이디 혹은 비밀번호가 일치하지 않습니다.");   
			}
			
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		 
		
		return mav;     
	}
    
	
	/**                                                                                                                     	
	 * 화면시작시 로그인한 후 Left메뉴를 조회(actionRetrieveLoginLeftMenuList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   

	@RequestMapping(value = "/prj/com/RetrieveLoginLeftMenuList.do")
	public ModelAndView actionRetrieveLoginLeftMenuList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			com002LoginService.retrieveLoginLeftMenuList(inVar, inDataset, outVar, outDataset, sessionVO);
			  
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   xpDto.getOutDataSetMap());
		  		
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");
			
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		 
		return mav;     
	}

	/**                                                                                                                     	
	 * 화면에 즐겨찾기 저장(actionSaveBookmarkRegister)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   

	@RequestMapping(value = "/prj/com/SaveBookmarkRegister.do")
	public ModelAndView actionSaveBookmarkRegister(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			com002LoginService.saveBookmarkRegister(inVar, inDataset, outVar, outDataset, sessionVO);
			
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   xpDto.getOutDataSetMap());
		  		
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");
			
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		return mav;     
	}
	
	/**                                                                                                                     	
	 * 화면에 즐겨찾기 삭제(actionDeleteBookmark)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   

	@RequestMapping(value = "/prj/com/DeleteBookmark.do")
	public ModelAndView actionDeleteBookmark(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			com002LoginService.deleteBookmark(inVar, inDataset, outVar, outDataset, sessionVO);
			
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   xpDto.getOutDataSetMap());
		  		
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");
			
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		return mav;     
	}
}
