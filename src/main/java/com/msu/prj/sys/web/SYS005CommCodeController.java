/*------------------------------------------------------------------------------  												
 * NAME : SYS005CommCodeController.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 프로젝트 명을 기입                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2019/05/08  jiback                                                                             
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
import com.msu.prj.sys.service.SYS005CommCodeService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   
                                                                                                                       		
@Controller                                                                                                            		
public class SYS005CommCodeController {                                                                                   		
                                                                                                                       		
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
                                                                                                                       		
    /** SYS005CommCodeService */                                                                                          	
    @Resource(name = "SYS005CommCodeService")                                                                     
    private SYS005CommCodeService sys005CommCodeService;                                                                     
                                                                                                                       		
    /**                                                                                                                		
	 * 기초표준코드1리스트 조회 (actionRetrieveCommCodeMasterList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveCommCodeMasterList.do")      
	public ModelAndView actionRetrieveCommCodeMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys005CommCodeService.retrieveCommCodeMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
		 * 기초표준코드2리스트 조회 (actionRetrieveCommCodeDetialList)                                                             
		 * @param input                                                                                                 			
		 * @return                                                                                                      			
		 * @throws Exception                                                                                           				
		 */                                                                                                             			
		@RequestMapping(value = "/prj/sys/RetrieveCommCodeDetailList.do")      
		public ModelAndView actionRetrieveCommCodeDetialList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
			ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
			try                                                                                                     				
		    {                                                                                                           			
				SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
		                                                                                                                			
		        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
				Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
				Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
				Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
				Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
		                                                                                                                			
				sys005CommCodeService.retrieveCommCodeDetailList(inVar, inDataset, outVar, outDataset, sessionVO);                  
				                                                                                             					    
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
	 * 기초표준코드1,2리스트 저장/수정(actionSaveCommCodeMasterList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveCommCodeMasterList.do")          
	public ModelAndView actionSaveCommCodeMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005CommCodeService.saveCommCodeMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	 * 기초표준코드1리스트 삭제(actionDeleteCommCodeMasterList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteCommCodeMasterList.do")        
	public ModelAndView actionDeleteCommCodeMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005CommCodeService.deleteCommCodeMasterList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	 * 기초표준코드2리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteCommCodeDetailList.do")        
	public ModelAndView actionDeleteCommCodeDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005CommCodeService.deleteCommCodeDetailList(inDataset, sessionVO);                 				                
			                                                                                                					
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
