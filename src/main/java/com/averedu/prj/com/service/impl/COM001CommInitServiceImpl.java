/*------------------------------------------------------------------------------  								  						
 * NAME : retrieveCommInitListX.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                      						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  -----------------------------------------------------------                                   						
 * 2021/07/13  jiback 						  초기에 코드에 설정한 모든 공통코드 조회                                                                                   						
 *------------------------------------------------------------------------------*/
package com.averedu.prj.com.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.Vector;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.averedu.common.vo.SessionVO;
import com.averedu.prj.com.dao.COM001CommInitDAO;
import com.averedu.prj.com.service.COM001CommInitService;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("COM001CommInitService")
public class COM001CommInitServiceImpl extends EgovAbstractServiceImpl implements COM001CommInitService {

	/** COM001CommInitDAO */
	@Resource(name = "COM001CommInitDAO")
	private COM001CommInitDAO com001CommInitDAO;

	/**
	 * 공통코드 설정에 따란 전체 조회(retrieveCommInitList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	public void retrieveCommInitList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		String dataSet = inVar.get("dsDataSet").toString(); // 전체데이타셋"dsUseYn|dsGUseYn|dsPrefix|dsGPrefix"
		String commLgcd = inVar.get("commLgCode").toString(); // 공통코드 "000002|000002|000008|000008"
		String commHipoFg = inVar.get("commHipoFg").toString(); // 콤보 초기 셋팅 (T:전체, S:선택, N:공백, X:해당사항없음)
		String commOptn = inVar.get("commOptn").toString(); // 추가옵션을 처리시 사용(현제 사용 않함)
		String language = inVar.get("language").toString(); // 다국어시 언어를 셋팅시 사용(현제 사용 않함)

		StringTokenizer tokDataSet = new StringTokenizer(dataSet, "|");
		StringTokenizer tokCommLgcd = new StringTokenizer(commLgcd, "|");
		StringTokenizer tokCommHipoFg = new StringTokenizer(commHipoFg, "|");
		// StringTokenizer tokCommOptn = new StringTokenizer(commOptn, "|");

		int iDataSet = tokDataSet.countTokens(); // DataSet
		Vector vtDataSet = new Vector();
		for (int idx = 0; idx < iDataSet; idx++) {
			vtDataSet.addElement(tokDataSet.nextToken());
		}

		int iCommLgcd = tokCommLgcd.countTokens(); // 공통코드
		Vector vtCommLgcd = new Vector();
		for (int idx = 0; idx < iCommLgcd; idx++) {
			vtCommLgcd.addElement(tokCommLgcd.nextToken());
		}

		int iCommHipoFg = tokCommHipoFg.countTokens(); // 콤보 초기 셋팅
		Vector vtCommHipoFg = new Vector();
		for (int idx = 0; idx < iCommHipoFg; idx++) {
			vtCommHipoFg.addElement(tokCommHipoFg.nextToken());
		}

		/*
		 * int iCommOptn = tokCommOptn.countTokens(); // 공통 조회(우선 업체코드) Vector
		 * vtCommOptn = new Vector(); for ( int idx = 0; idx < iCommOptn; idx++
		 * ) { vtCommOptn.addElement(tokCommOptn.nextToken()); }
		 */

		if (iCommLgcd > 0) {
			HashMap<String, Object> map = new HashMap<String, Object>();
			for (int i = 0; i < vtCommLgcd.size(); i++) {
				map.put("CLASS_ID", vtCommLgcd.get(i).toString()); // 실제공통코드 조회조건.
				map.put("CO_CD", 	commOptn); // 추가 옵션
				map.put("LANGUAGE", language); // 언어

				List<Map> records = new ArrayList<Map>();

				if (vtCommHipoFg.get(i).toString().trim().equals("T")) {
					records = com001CommInitDAO.retrieveCommInitListT(map);

				} else if (vtCommHipoFg.get(i).toString().trim().equals("S")) {
					records = com001CommInitDAO.retrieveCommInitListS(map);

				} else if (vtCommHipoFg.get(i).toString().trim().equals("N")) {
					records = com001CommInitDAO.retrieveCommInitListN(map);

				} else {
					records = com001CommInitDAO.retrieveCommInitListX(map);
				}

				String getDataSet = vtDataSet.get(i).toString();
				DataSetMap dsOut = new DataSetMap();
				dsOut.setRowMaps(records);
				outDataset.put(getDataSet, dsOut);
			}
		}

		return;
	}

	/**
	 * 초기에 코드에 설정한 모든 테이블 공통코드 조회(retrieveCommInitTableList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */
	public void retrieveCommInitTableList(Map<String, Object> inVar, Map<String, DataSetMap> inDataset,
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {

		String dataSet 		= inVar.get("dsDataSet").toString();
		String commLgcd 	= inVar.get("commLgCode").toString();
		String commHipoFg 	= inVar.get("commHipoFg").toString();
		String commAuthChk 	= inVar.get("commAuthChk").toString();
		StringTokenizer tokDataSet 		= new StringTokenizer(dataSet, "|");
		StringTokenizer tokCommLgcd 	= new StringTokenizer(commLgcd, "|");
		StringTokenizer tokCommHipoFg 	= new StringTokenizer(commHipoFg, "|");
		StringTokenizer tokcommAuthChk 	= new StringTokenizer(commAuthChk, "|");

		int iDataSet = tokDataSet.countTokens(); // DataSet

		Vector vtDataSet = new Vector();
		for (int idx = 0; idx < iDataSet; idx++) {
			vtDataSet.addElement(tokDataSet.nextToken());
		}

		int iCommLgcd = tokCommLgcd.countTokens(); // 공통코드
		Vector vtCommLgcd = new Vector();
		for (int idx = 0; idx < iCommLgcd; idx++) {
			vtCommLgcd.addElement(tokCommLgcd.nextToken());
		}

		int iCommHipoFg = tokCommHipoFg.countTokens(); // 공통 옵션
		Vector vtCommHipoFg = new Vector();
		for (int idx = 0; idx < iCommHipoFg; idx++) {
			vtCommHipoFg.addElement(tokCommHipoFg.nextToken());
		}

		int iCommAuthChk = tokcommAuthChk.countTokens(); // 공통 옵션
		Vector vtCommAuthChk = new Vector();
		for (int idx = 0; idx < iCommAuthChk; idx++) {
			vtCommAuthChk.addElement(tokcommAuthChk.nextToken());
		}

		if (iCommLgcd > 0) {
			for (int i = 0; i < vtCommLgcd.size(); i++) {
				HashMap<String, Object> map = new HashMap<String, Object>();
				
				List<Map> records = new ArrayList<Map>();

				if (vtCommHipoFg.get(i).toString().trim().equals("T")) {
					/************************************인사_계열사 조회 시작(사용가능한것만 및 전체/전체:샘풀)*************************************/   
					if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS")) {
						// 인사_계열사(전체)
					    records = com001CommInitDAO.retrieveThrAffltsListT(map);
					}else if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS_ALL")) {
						// 인사_계열사 사용 유무상관 없음(전체)
					    records = com001CommInitDAO.retrieveThrAffltsAllListT(map);
					}
					/************************************인사_계열사 조회 종료(사용가능한것만 및 전체 /전체:샘풀)*************************************/
				} else if (vtCommHipoFg.get(i).toString().trim().equals("S")) {
					/************************************인사_계열사 조회 시작(사용가능한것만 및 전체/선택:샘풀)*************************************/   
					if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS")) {
						// 인사_계열사(선택)
					    records = com001CommInitDAO.retrieveThrAffltsListS(map);
					}else if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS_ALL")) {
						// 인사_계열사 사용 유무상관 없음(선택)
					    records = com001CommInitDAO.retrieveThrAffltsAllListS(map);
					}
					/************************************인사_계열사 조회 종료(사용가능한것만 및 전체 /선택:샘풀)*************************************/
				} else if (vtCommHipoFg.get(i).toString().trim().equals("N")) {
					/************************************인사_계열사 조회 시작(사용가능한것만 및 전체 /공백:샘풀)*************************************/   
					if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS")) {
						// 인사_계열사(공백)
					    records = com001CommInitDAO.retrieveThrAffltsListN(map);
					}else if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS_ALL")) {
						// 인사_계열사 사용 유무상관 없음(공백)
					    records = com001CommInitDAO.retrieveThrAffltsAllListN(map);
					}
					/************************************인사_계열사 조회 종료(사용가능한것만 및 전체/공백:샘풀)*************************************/
				} else {
					/************************************인사_계열사 조회 시작(사용가능한것만 및 전체/없음:샘풀)*************************************/   
					if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS")) {
						// 인사_계열사(없음)
					    records = com001CommInitDAO.retrieveThrAffltsListX(map);
					}else if(vtCommLgcd.get(i).toString().trim().equals("XBT_THR_AFFLTS_ALL")) {
						// 인사_계열사 사용 유무상관 없음(없음)
					    records = com001CommInitDAO.retrieveThrAffltsAllListX(map);
					}
					/************************************인사_계열사 조회 종료(사용가능한것만 및 전체/없음:샘풀)*************************************/
				}
				String getDataSet = vtDataSet.get(i).toString();
				DataSetMap dsOut = new DataSetMap();
				dsOut.setRowMaps(records);
				outDataset.put(getDataSet, dsOut);
			}
		}

		return;
	}

}