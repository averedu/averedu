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

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.averedu.common.exception.CommExceptionUtil;
import com.averedu.common.util.SessionUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.service.CsysApicdSvc;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;

@Controller
public class CodeApiCtr {

	Log logger = LogFactory.getLog(this.getClass());

	/** csysApicdSvc */
	@Resource(name = "CsysApicdSvc")
	private CsysApicdSvc csysApicdSvc;

	/**
	 * 공통코드 리스트 조회 (actionRetrieveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/RetrieveCommCodeMasterList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<Map<String, Object>>> actionRetrieveCommCodeMasterList(@RequestBody Map<String, Object> mymap ,HttpSession session)
			throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		return new ResponseEntity<List<Map<String, Object>>>(csysApicdSvc.retrieveCommCodeMasterList(mymap,sessionVO), HttpStatus.OK);
	}
	
	
	/**
	 * 세부코드 리스트 조회 (actionRetrieveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/RetrieveCommCodeDetailList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<Map<String, Object>>> actionRetrieveCommCodeDetailList(@RequestBody Map<String, Object> mymap,HttpSession session) throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		
		return new ResponseEntity<List<Map<String, Object>>>(csysApicdSvc.retrieveCommCodeDetailList(mymap,sessionVO), HttpStatus.OK);
	}
	
	/**
	 * 그룹 코드 리스트 조회 (actionRetrieveGrpCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/RetrieveGrpCodeList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<Map<String, Object>>> actionRetrieveGrpCodeList(@RequestBody Map<String, Object> mymap, HttpSession session)
			throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);

		return new ResponseEntity<List<Map<String, Object>>>(csysApicdSvc.retrieveGrpCodeList(mymap,sessionVO), HttpStatus.OK);
	}
	
	/**
	 * 그룹 상세 코드 리스트 조회 (actionRetrieveGrpDetailCodeList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/RetrieveGrpDetailCodeList.do", method=RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<List<Map<String, Object>>> actionRetrieveGrpDetailCodeList(@RequestBody Map<String, Object> mymap, Model model, HttpSession session)
			throws Exception {
		SessionVO sessionVO = SessionUtil.getSessionVO(session);

		return new ResponseEntity<List<Map<String, Object>>>(csysApicdSvc.retrieveGrpDetailCodeList(mymap,sessionVO), HttpStatus.OK);
	}

	/**
	 * 공통코드 리스트 저장/수정(actionSaveCommCodeMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/SaveCommCodeMasterList.do")
	public ResponseEntity<String> actionSaveCommCodeMasterList(@RequestBody Map<String, Object> mymap, Model model, HttpSession session)
			throws Exception {
		
		SessionVO sessionVO = SessionUtil.getSessionVO(session);
		
		csysApicdSvc.saveCommCodeMasterList(mymap, sessionVO);
		
		return new ResponseEntity<String>("", HttpStatus.OK);
	}
	
	
	/**
	 * 상세코드리스트 저장/수정(actionSaveCommCodeDetailList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/restApi/com/SaveCommCodeDetailList.do")
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

			csysApicdSvc.saveCommCodeDetailList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	@RequestMapping(value = "/restApi/com/SaveGrpCodeList.do")
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

			csysApicdSvc.saveGrpCodeList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	@RequestMapping(value = "/restApi/com/SaveGrpCodeDeatilList.do")
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

			csysApicdSvc.saveGrpCodeDeatilList(inVar, inDataset, outVar, outDataset, sessionVO);

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
	@RequestMapping(value = "/restApi/com/DeleteCommCodeMasterList.do", method=RequestMethod.DELETE) 
	@ResponseBody
	public ResponseEntity<String> actionDeleteCommCodeMasterList(@RequestBody List<Map<String, Object>> list ,HttpSession session)throws Exception {  
		SessionVO sessionVO = SessionUtil.getSessionVO(session);             
		
		csysApicdSvc.deleteCommCodeMasterList(list, sessionVO);
		
		
		return new ResponseEntity<String>("삭제완료 되었습니다.", HttpStatus.OK);
	}   
	
	/**                                                                                                                		
	 * 세부코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/restApi/com/DeleteCommCodeDetailList.do")        
	public ResponseEntity<String> actionDeleteCommCodeDetailList(@RequestBody List<Map<String, Object>> list , HttpSession session)throws Exception {  
		SessionVO sessionVO = SessionUtil.getSessionVO(session);             
		
		csysApicdSvc.deleteCommCodeDetailList(list, sessionVO);
		
		
		return new ResponseEntity<String>("삭제완료 되었습니다.", HttpStatus.OK);
		                                                                                                    					                                                                                         				
	}
	
	/**                                                                                                                		
	 * 그룹코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/restApi/com/DeleteGrpCodeList.do")        
	public ResponseEntity<String> actionDeleteGrpCodeList(@RequestBody List<Map<String, Object>> mymap, HttpSession session)throws Exception {  	                                                                                                 					
		SessionVO sessionVO = SessionUtil.getSessionVO(session);             
		
		csysApicdSvc.deleteGrpCodeList(mymap, sessionVO);
		
		
		return new ResponseEntity<String>("삭제완료 되었습니다.", HttpStatus.OK);                                                                             				
	}
	
	/**                                                                                                                		
	 * 그룹세부코드 리스트 삭제(actionDeleteCommCodeDetailList)                                                            
	 * @param input                                                                                                 			
	 * @return                                                                                                      			
	 * @throws Exception                                                                                           				
	 */                                                                                                             			
	@RequestMapping(value = "/restApi/com/DeleteGrpCodeDetailList.do")        
	public ResponseEntity<String> actionDeleteGrpCodeDetailList(@RequestBody List<Map<String, Object>> mymap, HttpSession session)throws Exception {  		                                                                                                    					
		SessionVO sessionVO = SessionUtil.getSessionVO(session);             
		
		csysApicdSvc.deleteGrpCodeDetailList(mymap, sessionVO);
		
		
		return new ResponseEntity<String>("삭제완료 되었습니다.", HttpStatus.OK);                                                                                                  				
	}

}
