/*------------------------------------------------------------------------------  												
 * NAME : SYS003AuthMenuMasterController.java                                                                    						
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
import com.msu.prj.sys.service.SYS003AuthMenuMasterService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   
                                                                                                                       		
@Controller                                                                                                            		
public class SYS003AuthMenuMasterController {                                                                                   		
                                                                                                                       		
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
                                                                                                                       		
    /** SYS003AuthMenuMasterService */                                                                                          	
    @Resource(name = "SYS003AuthMenuMasterService")                                                                     
    private SYS003AuthMenuMasterService sys003AuthMenuMasterService;                                                                     
                                                                                                                       		
    /**                                                                                                                		
	 * 기초권한테이블리스트 조회 (actionRetrieveAuthMenuMasterList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveAuthMenuMasterList.do")      
	public ModelAndView actionRetrieveAuthMenuMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys003AuthMenuMasterService.retrieveAuthMenuMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 기초권한메뉴리스트 조회 (retrieveAuthMenuDetailList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveAuthMenuDetailList.do")      
	public ModelAndView actionRetrieveAuthMenuDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys003AuthMenuMasterService.retrieveAuthMenuDetailList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 기초권한테이블리스트 저장/수정(actionSaveAuthMenuMasterList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveAuthMenuMasterList.do")          
	public ModelAndView actionSaveAuthMenuMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys003AuthMenuMasterService.saveAuthMenuMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	 * 기초권한메뉴리스트 저장/수정(actionSaveAuthMenuDetailList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveAuthMenuDetailList.do")          
	public ModelAndView actionSaveAuthMenuDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys003AuthMenuMasterService.saveAuthMenuDetailList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	 * 기초권한테이블리스트 삭제(actionDeleteAuthMenuMasterList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteAuthMenuMasterList.do")        
	public ModelAndView actionDeleteAuthMenuMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys003AuthMenuMasterService.deleteAuthMenuMasterList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	 * 부서트리(조직도)리스트 조회 (actionRetrieveAuthDeptTreeList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveAuthDeptTreeList.do")      
	public ModelAndView actionRetrieveAuthDeptTreeList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys003AuthMenuMasterService.retrieveAuthDeptTreeList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
				
	/**                                                                                                                		
	* 권한별관활부서리스트 조회 (actionRetrieveAuthCtrlDeptList)                                                             
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           				
	*/                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveAuthCtrlDeptList.do")      
	public ModelAndView actionRetrieveAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
		{                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
					
			DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
					
			sys003AuthMenuMasterService.retrieveAuthCtrlDeptList(inVar, inDataset, outVar, outDataset, sessionVO);                  
					    
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

    /**                                                                                                                		
	 * 권한별관활부서리스트 저장/수정(actionSaveAuthCtrlDeptList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveAuthCtrlDeptList.do")          
	public ModelAndView actionSaveAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys003AuthMenuMasterService.saveAuthCtrlDeptList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
    /**                                                                                                                		
	 * 권한별관활부서리스트 삭제(actionDeleteAuthCtrlDeptList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteAuthCtrlDeptList.do")        
	public ModelAndView actionDeleteAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys003AuthMenuMasterService.deleteAuthCtrlDeptList(inDataset, outDataset, sessionVO);                 				                
			                                                                                                					
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
