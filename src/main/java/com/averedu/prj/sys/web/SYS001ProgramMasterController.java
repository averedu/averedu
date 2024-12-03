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
 * 2019/04/23  jiback 						   프로그램관리	                                                                                     						
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
import com.averedu.prj.sys.service.SYS001ProgramMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class SYS001ProgramMasterController {

	Log logger = LogFactory.getLog(this.getClass());
	
    /** SYS001ProgramMasterService */
    @Resource(name = "SYS001ProgramMasterService")
    private SYS001ProgramMasterService sys001ProgramMasterService;
    
    /**                                                                                                                     	
	 * 프로그램 조회/화면을 조회(actionRetrieveProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/RetrieveProgramMasterList.do")
	public ModelAndView actionRetrieveProgramMasterList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
						
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			/*
			System.out.println("/=========================start(duBug:print)====================/");      
			DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                    
			System.out.println("====================>inVar" + inVar);                                     
			System.out.println("====================>inDataset.size()" + dsMap.size());                   
			System.out.println("/=========================end===================================/");      
			*/     
			sys001ProgramMasterService.retrieveProgramMasterList(inVar, inDataset, outVar, outDataset, sessionVO);
			  
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
	 * 프로그램 저장/수정(actionSaveProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/SaveProgramMasterList.do")
	public ModelAndView actionSaveProgramMasterList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
	 	
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
	    
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			sys001ProgramMasterService.saveProgramMasterList(inVar, inDataset, outVar, outDataset, sessionVO);
			
			/*                                                                                              					
			System.out.println("/=========================start(duBug:print)====================/");      
			DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                    
			System.out.println("====================>inVar" + inVar);                                     
			System.out.println("====================>inDataset.size()" + dsMap.size());                   
			System.out.println("/=========================end===================================/");      
			*/    
			
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
	 * 프로그램을 삭제(actionDeleteProgramMasterList)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */   
	@RequestMapping(value = "/prj/sys/DeleteProgramMasterList.do")
	public ModelAndView actionDeleteProgramMasterList(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)throws Exception {
		
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");  
		
		try
	    {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);
			
			DataSetMap tranInfo 				= xpDto.getTranInfoMap();
			Map <String, Object> inVar 			= xpDto.getInVariableMap();
			Map <String, DataSetMap> inDataset 	= xpDto.getInDataSetMap();
			Map <String, Object> outVar 		= xpDto.getOutVariableMap();
			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();
			
			/*                                                                                              					
			System.out.println("/=========================start(duBug:print)====================/");      
			DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                    
			System.out.println("====================>inVar" + inVar);                                     
			System.out.println("====================>inDataset.size()" + dsMap.size());                   
			System.out.println("/=========================end===================================/");      
			*/   
			
			sys001ProgramMasterService.deleteProgramMasterList(inVar, inDataset, outVar, outDataset, sessionVO);
			
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
