/*------------------------------------------------------------------------------  												
 * NAME : SYS006CommonMessageController.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 프로젝트 명을 기입                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2019/05/09  jiback                                                                             
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
import com.msu.prj.sys.service.SYS006CommonMessageService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   
                                                                                                                       		
@Controller                                                                                                            		
public class SYS006CommonMessageController {                                                                                   		
                                                                                                                       		
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
                                                                                                                       		
    /** SYS006CommonMessageService */                                                                                          	
    @Resource(name = "SYS006CommonMessageService")                                                                     
    private SYS006CommonMessageService sys006CommonMessageService;                                                                     
                                                                                                                       		
    /**                                                                                                                		
	 * 메세지리스트 조회 (actionRetrieveCommonMessageList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveCommonMessageList.do")      
	public ModelAndView actionRetrieveCommonMessageList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys006CommonMessageService.retrieveCommonMessageList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 메세지리스트 저장/수정(actionSaveCommonMessageList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveCommonMessageList.do")          
	public ModelAndView actionSaveCommonMessageList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys006CommonMessageService.saveCommonMessageList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	 * 메세지리스트 삭제(actionDeleteCommonMessageList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteCommonMessageList.do")        
	public ModelAndView actionDeleteCommonMessageList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys006CommonMessageService.deleteCommonMessageList(inDataset, sessionVO);                 				                
			                                                                                                					
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
