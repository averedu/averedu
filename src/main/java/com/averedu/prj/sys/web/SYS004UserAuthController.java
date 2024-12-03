/*------------------------------------------------------------------------------  												
 * NAME : SYS004UserAuthController.java                                                                    						
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
import com.averedu.prj.sys.service.SYS004UserAuthService;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   
                                                                                                                       		
@Controller                                                                                                            		
public class SYS004UserAuthController {                                                                                   		
                                                                                                                       		
	Log logger = LogFactory.getLog(this.getClass());                                                                  			
                                                                                                                       		
    /** SYS004UserAuthService */                                                                                          	
    @Resource(name = "SYS004UserAuthService")                                                                     
    private SYS004UserAuthService sys004UserAuthService;                                                                     
                                                                                                                       		
    
    /**                                                                                                                		
   	 * 교육생권한코드리스트 조회 (actionRetrieveAuthMasterList)                                                             
   	 * @param input                                                                                                 			
   	 * @return                                                                                                      			
   	 * @throws Exception                                                                                           				
   	 */                                                                                                             			
   	@RequestMapping(value = "/prj/sys/RetrieveAuthMasterList.do")      
   	public ModelAndView actionRetrieveAuthMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
   		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
   		try                                                                                                     				
   	    {                                                                                                           			
   			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
   	                                                                                                                			
   	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
   			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
   			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
   			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
   			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
   	                                                                                                                			
   			sys004UserAuthService.retrieveAuthMasterList(inVar, inDataset, outVar, outDataset, sessionVO);                  
   			                                                                                             					    
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
	 * 교육생권한코드리스트 조회 (actionRetrieveUserAuthList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveUserAuthList.do")      
	public ModelAndView actionRetrieveUserAuthList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys004UserAuthService.retrieveUserAuthList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				
			                                                                                                					
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");                                       
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");                                  
		                                                                                                        				
		} catch ( Exception e ) {                                                                                                       				
			e.printStackTrace();     
			CommExceptionUtil.setError(e, mav); 
		}    
		                                                                                                    					
		return mav;                                                                                             				
	}  
	
	/**                                                                                                                		
	 * 교육생권한코드리스트 조회 (actionRetrieveUserList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveUserList.do")      
	public ModelAndView actionRetrieveUserList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys004UserAuthService.retrieveUserList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 교육생권한코드리스트 저장/수정(actionSaveUserAuthList)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveUserAuthList.do")          
	public ModelAndView actionSaveUserAuthList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys004UserAuthService.saveUserAuthList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	* 사용자관할부서리스트 조회 (actionRetrieveUserAuthCtrlDeptList)                                                             
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           				
	*/                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveUserAuthCtrlDeptList.do")      
	public ModelAndView actionRetrieveUserAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
		{                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					

			DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
			                			
			sys004UserAuthService.retrieveUserAuthCtrlDeptList(inVar, inDataset, outVar, outDataset, sessionVO);                  
			     					    
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
	* 사용자관할부서리스트 저장/수정(actionSaveUserAuthCtrlDeptList)                                                      
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           				
	*/                                                                                                             			
	@RequestMapping(value = "/prj/sys/SaveUserAuthCtrlDeptList.do")          
	public ModelAndView actionSaveUserAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
		{                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
			               				
			DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
			               				
			sys004UserAuthService.saveUserAuthCtrlDeptList(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			        					
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
	* 사용자관할부서리스트 삭제(actionDeleteUserAuthCtrlDeptList)                                                            
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           				
	*/                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteUserAuthCtrlDeptList.do")        
	public ModelAndView actionDeleteUserAuthCtrlDeptList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
		{                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
			               				
			DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
			               				
			sys004UserAuthService.deleteUserAuthCtrlDeptList(inDataset, sessionVO);                 				                
			        					
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
