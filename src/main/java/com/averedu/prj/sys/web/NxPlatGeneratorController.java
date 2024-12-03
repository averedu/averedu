/*------------------------------------------------------------------------------  								  						
 * NAME : NxPlatGeneratorController.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2019/04/18  jiback 						   소스생성기	                                                                                     						
 *------------------------------------------------------------------------------*/           
package com.averedu.prj.sys.web;

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
import com.averedu.prj.sys.service.NxPlatGeneratorService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class NxPlatGeneratorController {

	Log logger = LogFactory.getLog(this.getClass());
	
    /** NxPlatGeneratorService */
    @Resource(name = "NxPlatGeneratorService")
    private NxPlatGeneratorService nxPlatGeneratorService;
    
    /**                                                                                                                     	
	 * 테이블 유저를 조회(actionRetrieveNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/RetrieveNxPlatGeneratorUser.do")
	public ModelAndView actionRetrieveNxPlatGeneratorUser(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			nxPlatGeneratorService.retrieveNxPlatGeneratorUser(inVar, inDataset, outVar, outDataset, sessionVO);
			  
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
	 * 모든 테이블을 조회(actionRetrieveNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/RetrieveNxPlatGeneratorM.do")
	public ModelAndView actionRetrieveNxPlatGeneratorM(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
	 	
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
	    
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			nxPlatGeneratorService.retrieveNxPlatGeneratorM(inVar, inDataset, outVar, outDataset, sessionVO);
			  
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
	 * 각각 테이블 항목을 조회(actionRetrieveNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/RetrieveNxPlatGeneratorD.do")
	public ModelAndView actionRetrieveNxPlatGeneratorD(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
	
			nxPlatGeneratorService.retrieveNxPlatGeneratorD(inVar, inDataset, outVar, outDataset, sessionVO);
			
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
