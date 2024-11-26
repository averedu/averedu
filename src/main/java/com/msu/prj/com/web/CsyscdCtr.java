/*------------------------------------------------------------------------------  												
 * NAME : CsyscdCtr.java                                                                    						
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

import com.msu.common.exception.CommExceptionUtil;
import com.msu.common.util.SessionUtil;
import com.msu.common.vo.SessionVO;
import com.msu.prj.com.service.CsyscdSvc;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class CsyscdCtr {

	Log logger = LogFactory.getLog(this.getClass());

	/** CsyscdSvc */
	@Resource(name = "CsyscdSvc")
	private CsyscdSvc csyscdSvc;

	/**
	 * 공통코드 리스트 조회 (actionRetrieveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/RetrieveCommCodeMasterList.do")
	public ModelAndView actionRetrieveCommCodeMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.retrieveCommCodeMasterList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}
	
	/**
	 * 세부코드 리스트 조회 (actionRetrieveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/RetrieveCommCodeDetailList.do")
	public ModelAndView actionRetrieveCommCodeDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.retrieveCommCodeDetailList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 공통코드 리스트 저장/수정(actionSaveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/SaveCommCodeMasterList.do")
	public ModelAndView actionSaveCommCodeMasterList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.saveCommCodeMasterList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}
	
	
	/**
	 * 상세코드리스트 저장/수정(actionSaveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/SaveCommCodeDetailList.do")
	public ModelAndView actionSaveCommCodeDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.saveCommCodeDetailList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}
	
	/**                                                                                                                		
	 * 공통코드 리스트 삭제(actionDeleteCommCodeMasterList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/com/DeleteCommCodeMasterList.do")        
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
	                                                                                                               				
			csyscdSvc.deleteCommCodeMasterList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	 * 세부코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/com/DeleteCommCodeDetailList.do")        
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
	                                                                                                               				
			csyscdSvc.deleteCommCodeDetailList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	 * 부서코드관리 리스트 조회 (deptCdMngList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/deptCdMngList.do")
	public ModelAndView deptCdMngList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.deptCdMngList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 부서코드관리 저장/수정 (deptCdMngSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/deptCdMngSave.do")
	public ModelAndView deptCdMngSave(NexacroPlatformMapDTO nxDto, Model model, HttpSession session) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.deptCdMngSave(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 부서코드관리 삭제(deptCdMngDel)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	@RequestMapping(value = "/prj/com/deptCdMngDel.do")
	public ModelAndView deptCdMngDel(NexacroPlatformMapDTO xpDto, Model model, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroplatformMapView");

		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			/*
			 * System.out.println(
			 * "/=========================start(duBug:print)====================/"
			 * ); DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
			 * System.out.println("====================>inVar" + inVar);
			 * System.out.println("====================>inDataset.size()" +
			 * dsMap.size()); System.out.println(
			 * "/=========================end===================================/"
			 * );
			 */

			csyscdSvc.deptCdMngDel(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}
	
	
	
	/**
	 * 부서이력목록 저장/수정 (deptHistSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/deptHistSave.do")
	public ModelAndView deptHistSave(NexacroPlatformMapDTO nxDto, Model model, HttpSession session) throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.deptHistSave(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 부서이력목록 삭제(deptHistDel)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	@RequestMapping(value = "/prj/com/deptHistDel.do")
	public ModelAndView deptHistDel(NexacroPlatformMapDTO xpDto, Model model, HttpSession session) throws Exception {

		ModelAndView mav = new ModelAndView("nexacroplatformMapView");

		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			/*
			 * System.out.println(
			 * "/=========================start(duBug:print)====================/"
			 * ); DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
			 * System.out.println("====================>inVar" + inVar);
			 * System.out.println("====================>inDataset.size()" +
			 * dsMap.size()); System.out.println(
			 * "/=========================end===================================/"
			 * );
			 */

			csyscdSvc.deptHistDel(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}
	
	

	/**
	 * 부서코드연계속성정보 리스트 조회(deptCdConnAttrList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/deptCdConnAttrList.do")
	public ModelAndView deptCdConnAttrList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.deptCdConnAttrList(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/deptCdConnAttrSave.do")
	public ModelAndView deptCdConnAttrSave(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.deptCdConnAttrSave(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, outDataset);

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

	/**
	 * 부서코드관리 삭제(deptCdConnAttrDel)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	@RequestMapping(value = "/prj/com/deptCdConnAttrDel.do")
	public ModelAndView deptCdConnAttrDel(NexacroPlatformMapDTO xpDto, Model model, HttpSession session)
			throws Exception {

		ModelAndView mav = new ModelAndView("nexacroplatformMapView");

		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = xpDto.getTranInfoMap();
			Map<String, Object> inVar = xpDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = xpDto.getInDataSetMap();
			Map<String, Object> outVar = xpDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = xpDto.getOutDataSetMap();

			/*
			 * System.out.println(
			 * "/=========================start(duBug:print)====================/"
			 * ); DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");
			 * System.out.println("====================>inVar" + inVar);
			 * System.out.println("====================>inDataset.size()" +
			 * dsMap.size()); System.out.println(
			 * "/=========================end===================================/"
			 * );
			 */

			csyscdSvc.deptCdConnAttrDel(inVar, inDataset, outVar, outDataset, sessionVO);

			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, xpDto.getOutVariableMap());
			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME, xpDto.getOutDataSetMap());

			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "0");
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, "SUCCESS");

		} catch (Exception e) {
			e.printStackTrace();
			CommExceptionUtil.setError(e, mav);
		}

		return mav;
	}

}
