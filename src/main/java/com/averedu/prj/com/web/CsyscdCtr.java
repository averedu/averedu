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
package com.averedu.prj.com.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springmodules.validation.bean.conf.loader.annotation.handler.RegExp;

import com.averedu.common.exception.CommExceptionUtil;
import com.averedu.common.util.SessionUtil;
import com.averedu.common.vo.Csys300VO;
import com.averedu.common.vo.Csys310VO;
import com.averedu.common.vo.Csys311VO;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.service.CsyscdSvc;
import com.averedu.prj.sys.vo.MenuVO;

import antlr.collections.List;
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
	 * 그룹 코드 리스트 조회 (actionRetrieveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/RetrieveGrpCodeList.do")
	public ModelAndView actionRetrieveGrpCodeList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.retrieveGrpCodeList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	 * 그룹 상세 코드 리스트 조회 (actionRetrieveGrpDetailCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/RetrieveGrpDetailCodeList.do")
	public ModelAndView actionRetrieveGrpDetailCodeList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.retrieveGrpDetailCodeList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	 * 그룹 리스트 저장/수정(actionSaveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/SaveGrpCodeList.do")
	public ModelAndView actionSaveGrpCodeList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.saveGrpCodeList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	 * 그룹 상세 코드리스트 저장/수정(actionSaveGrpCodeDeatilList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/prj/com/SaveGrpCodeDeatilList.do")
	public ModelAndView actionSaveGrpCodeDeatilList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)
			throws Exception {
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");
		try {
			SessionVO sessionVO = SessionUtil.getSessionVO(session);

			DataSetMap tranInfo = nxDto.getTranInfoMap();
			Map<String, Object> inVar = nxDto.getInVariableMap();
			Map<String, DataSetMap> inDataset = nxDto.getInDataSetMap();
			Map<String, Object> outVar = nxDto.getOutVariableMap();
			Map<String, DataSetMap> outDataset = nxDto.getOutDataSetMap();

			csyscdSvc.saveGrpCodeDeatilList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	 * 그룹코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/com/DeleteGrpCodeList.do")        
	public ModelAndView actionDeleteGrpCodeList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			csyscdSvc.deleteGrpCodeList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	 * 그룹세부코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/prj/com/DeleteGrpCodeDetailList.do")        
	public ModelAndView actionDeleteGrpCodeDetailList(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  
		ModelAndView mav = new ModelAndView("nexacroplatformMapView");                                    
		try                                                                                                     				
	    {                                                                                                           			
			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					
	                                                                                                               				
	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				
			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			
			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					
			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			
			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					
	                                                                                                               				
			csyscdSvc.deleteGrpCodeDetailList(inDataset, sessionVO);                 				                
			                                                                                                					
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
	@RequestMapping(value = "/restApi/prj/com/deptCdMngList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<Map<String, Object>> deptCdMngList(@RequestBody Csys300VO csys300vo, HttpSession session) throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		Map<String, Object> map = csyscdSvc.deptCdMngList(csys300vo, sessionVO);
		return new ResponseEntity<Map<String,Object>>(map, HttpStatus.OK);
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
	 * 부서코드연계속성정보 리스트 조회(deptCdConnAttrInfoList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrInfoList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<java.util.List<Csys310VO>> deptCdConnAttrInfoList(@RequestBody Csys310VO csys310VO, HttpSession session){
		
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		java.util.List<Csys310VO> deptCdConnAttrInfoList = csyscdSvc.deptCdConnAttrInfoList(csys310VO, sessionVO);
		return new ResponseEntity<java.util.List<Csys310VO>>(deptCdConnAttrInfoList, HttpStatus.OK);
		
	}
	
	
	

	/**
	 * 부서코드연계속성정보 저장/수정(deptCdConnAttrInfoSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrInfoSave.do", method=RequestMethod.PUT)
	@ResponseBody
	public boolean deptCdConnAttrInfoSave(@RequestBody java.util.List<Csys310VO> csys310VoList , HttpSession session) throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		boolean saveType = csyscdSvc.deptCdConnAttrInfoSave(csys310VoList, sessionVO);
		return saveType;
	}
	

	/**
	 * 부서코드연계속성정보 삭제(deptCdConnAttrInfoDel)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrInfoDel.do", method=RequestMethod.DELETE)
	@ResponseBody
	public boolean deptCdConnAttrInfoDel(@RequestBody java.util.List<Csys310VO> csys310VO, HttpSession session){
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		boolean deptCdConnAttrInfoDelType = csyscdSvc.deptCdConnAttrInfoDel(csys310VO, sessionVO);
		return deptCdConnAttrInfoDelType;
	}
	
	/**
	 * 부서코드연계속성값 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrValList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<java.util.List<Csys311VO>> deptCdConnAttrValList(@RequestBody String bfDeptCd, HttpSession session){
		logger.info("bf1 : " + bfDeptCd);
		String bfDeptCd2 = bfDeptCd.replace("=", "");
		logger.info("bf2 : " + bfDeptCd);
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		java.util.List<Csys311VO> deptCdConnAttrValList =  csyscdSvc.deptCdConnAttrValList(bfDeptCd2, sessionVO);
		return new ResponseEntity<java.util.List<Csys311VO>>(deptCdConnAttrValList, HttpStatus.OK);
	}
	
	/**
	 * 부서코드연계속성값 저장/수정(deptCdConnAttrValSave)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrValSave.do", method=RequestMethod.PUT)
	@ResponseBody
	public boolean deptCdConnAttrValSave(@RequestBody java.util.List<Csys311VO>  csys311VOList, HttpSession session) {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		boolean saveType = csyscdSvc.deptCdConnAttrValSave(csys311VOList, sessionVO);
		return saveType;
		
	}
	
	/**
	 * 부서코드연계속성값 삭제(deptCdConnAttrValDel)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/prj/com/deptCdConnAttrValDel.do", method=RequestMethod.DELETE)
	@ResponseBody
	public boolean deptCdConnAttrValDel(@RequestBody java.util.List<Csys311VO> csys311VOList){
		boolean delType = csyscdSvc.deptCdConnAttrValDel(csys311VOList);
		return delType;
	}
	
	
	
}
