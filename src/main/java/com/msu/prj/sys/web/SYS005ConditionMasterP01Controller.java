package com.msu.prj.sys.web;

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
import com.msu.common.util.SessionUtil;
import com.msu.common.vo.SessionVO;
import com.msu.prj.sys.service.SYS005ConditionMasterP01Service;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class SYS005ConditionMasterP01Controller {

	Log logger = LogFactory.getLog(this.getClass());                                                                  			
		
    /** SYS005ConditionMasterService */                                                                                          	
    @Resource(name = "SYS005ConditionMasterP01Service")                                                                     
    private SYS005ConditionMasterP01Service sys005ConditionMasterP01Service;

    /**                                                                                                                		
	 * 신청제어항목관리팝업 제어항목 리스트 조회 (actionRetrieveConditionMasterList)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveConditionMasterP01List.do")      
	public ModelAndView retrieveConditionMasterP01List(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys005ConditionMasterP01Service.retrieveConditionMasterP01List(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 신청제어항목관리팝업 제어항목 리스트 조회 (retrieveConditionMasterP01)                                                             
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/RetrieveConditionMasterP01.do")      
	public ModelAndView retrieveConditionMasterP01(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                                			
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                                			
			sys005ConditionMasterP01Service.retrieveConditionMasterP01(inVar, inDataset, outVar, outDataset, sessionVO);                  
			                                                                                             					    
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
	 * 신청제어항목관리팝업 제어항목 저장/수정(actionSaveCommCodeMasterP01List)                                                      
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */
	@RequestMapping(value = "/prj/sys/SaveConditionMasterP01List.do")          
	public ModelAndView actionSaveConditionMasterP01List(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005ConditionMasterP01Service.saveConditionMasterP01List(inVar, inDataset, outVar, outDataset, sessionVO);                 	    
			                                                                                                					
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
	 * 신청제어항목관리팝업 제어항목 삭제(actionDeleteConditionMasterList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/sys/DeleteConditionMasterP01List.do")        
	public ModelAndView actionDeleteConditionMasterP01List(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			sys005ConditionMasterP01Service.deleteConditionMasterP01List(inDataset, sessionVO);                 				                
			                                                                                                					
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
