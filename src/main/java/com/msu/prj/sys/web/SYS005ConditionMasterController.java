/*------------------------------------------------------------------------------  												
 * NAME : SYS005ConditionMasterController.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 프로젝트 명을 기입                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2022/11/17                                                                             
 *------------------------------------------------------------------------------*/

package com.msu.prj.sys.web;

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
import com.msu.common.util.SessionUtil;
import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.service.SYS005ConditionMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class SYS005ConditionMasterController {
	
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
		
    /** SYS005ConditionMasterService */                                                                                          	
    @Resource(name = "SYS005ConditionMasterService")                                                                     
    private SYS005ConditionMasterService sys005ConditionMasterService;
    
    /**                                                                                                                		
	 * 신청제어항목관리 리스트 조회 (actionRetrieveConditionMasterList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveConditionMasterList.do")      
	public ModelAndView actionRetrieveConditionMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys005ConditionMasterService.retrieveConditionMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");                                       
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");                                  
		                                                                                                        				
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		                                                                                                   					
		return mav;                                                                                             				
	}
	
	/**                                                                                                                		
	 * 신청제어항목관리 리스트 저장/수정(actionSaveCommCodeMasterList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */
	@RequestMapping(value = "/prj/sys/SaveConditionMasterList.do")          
	public ModelAndView actionSaveConditionMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005ConditionMasterService.saveConditionMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");                                       
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");                                  
		                                                                                                        				
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		                                                                                                   					
		return mav;                                                                                             				
	}
	
	/**                                                                                                                		
	 * 신청제어항목관리 리스트 삭제(actionDeleteConditionMasterList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteConditionMasterList.do")        
	public ModelAndView actionDeleteConditionMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005ConditionMasterService.deleteConditionMasterList(inDataset, sessionVO);                 				                
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");                                       
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");                                  
		                                                                                                        				
		}  catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		                                                                                                  					
		return mav;                                                                                             				
	}
}
