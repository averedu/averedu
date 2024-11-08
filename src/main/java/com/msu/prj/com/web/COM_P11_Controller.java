/*------------------------------------------------------------------------------  												
 * NAME : COM_P11_Controller.java                                                                    						
 * DESC :                                                                                                          			
 * VER  : V1.0                                                                                                     			
 * PROJ : 목포과학대 차세대 프로젝트                                                                           				
 * Copyright 2021 avereduSystem All rights reserved                                                                      		
 *------------------------------------------------------------------------------                                   			
 *                               MODIFICATION LOG                                                                  			
 *------------------------------------------------------------------------------                                   			
 *    DATE     AUTHOR                      DESCRIPTION                        													
 * ----------  ------  ---------------------------------------------------------                                   			
 * 2021/09/08  jiback                                                                             
 *------------------------------------------------------------------------------*/                                     		
package com.msu.prj.com.web;                                                                             			            
                                                                                                                       		
import java.util.Map;                                                                                                  		
                                                                                                                       		
import javax.annotation.Resource;                                                                                      		
import javax.servlet.http.HttpSession;                                                                                     	
                                                                                                                       		
import org.apache.commons.logging.Log;                                                                             		    
import org.apache.commons.logging.LogFactory;                                                                                  
import org.springframework.stereotype.Controller;                                                                      		
import org.springframework.ui.Model;                                                                                   		
import org.springframework.web.bind.annotation.RequestMapping;                                                         		
import org.springframework.web.servlet.ModelAndView;                                                                   		
                                                                                                                       		
import com.msu.common.util.SessionUtil;                                                                    	            
import com.msu.common.vo.SessionVO;                                                                            		    
import com.msu.prj.com.service.COM_P11_Service;                                                                         
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                     
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                 				
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   
                                                                                                                       		
@Controller                                                                                                            		
public class COM_P11_Controller {                                                                                   		
                                                                                                                       		
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
                                                                                                                       		
    /** COM_P11Service */                                                                                          	
    @Resource(name = "COM_P11_Service")                                                                     
    private COM_P11_Service com_P11_Service;                                                                     
                                                                                                                       		
    /**                                                                                                                		
	 * 장학 조회 (actionRetrieve_P11)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/com/Retrieve_P11.do")      
	public ModelAndView actionRetrieve_P11(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			com_P11_Service.retrieve_P11(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");                                       
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");                                  
		                                                                                                        				
		} catch ( Exception e )                                                                                 				
		{                                                                                                       				
			e.printStackTrace();                                                                            					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-1");                                      
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString());                                       				
		}                                                                                                      					
		return mav;                                                                                             				
	}                                                                                                               			
                                                                                                          			
}                                                                                                                      		
