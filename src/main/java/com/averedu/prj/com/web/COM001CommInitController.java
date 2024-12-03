/*------------------------------------------------------------------------------  								  						
 * NAME : SYS001ProgramMasterController.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   공통코드조회(초기화시 모든 설정한 모든 공통코드를 가기고 옮)	                                                                                     						
 *------------------------------------------------------------------------------*/           
package com.averedu.prj.com.web;

import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.averedu.common.exception.CommExceptionUtil;
import com.averedu.common.util.SessionUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.service.COM001CommInitService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class COM001CommInitController {

	Log logger = LogFactory.getLog(this.getClass());
	
    /** COM001CommInitService */
    @Resource(name = "COM001CommInitService")
    private COM001CommInitService  com001CommInitService ;
    
    /**                                                                                                                     	
	 * 초기에 코드에 설정한 모든 공통코드 조회(actionRetrieveCommInitList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/com/RetrieveCommInitList.do")
	public ModelAndView actionRetrieveCommInitList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
						
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			 
			com001CommInitService.retrieveCommInitList(inVar, inDataset, outVar, outDataset, sessionVO);
			  
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
	 * 초기에 코드에 설정한 모든 테이블 공통코드 조회 (actionRetrieveCommInitTableList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/com/RetrieveCommInitTableList.do")
	public ModelAndView actionRetrieveCommInitTableList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
						
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			 
			com001CommInitService.retrieveCommInitTableList(inVar, inDataset, outVar, outDataset, sessionVO);
			  
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
