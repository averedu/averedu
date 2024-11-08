/*------------------------------------------------------------------------------  								  						
 * NAME : NxPlatGeneratorDAO.java                                                                    						
 * DESC :                                                                                                          						
 * VER  : V1.0                                                                                                     						
 * PROJ : 소스생성기 패키지 프로젝트                                                                       						    
 * Copyright 2021 avereduSystem All rights reserved                                                                       						
 *------------------------------------------------------------------------------                                   						
 *                               MODIFICATION LOG                                                                  						
 *------------------------------------------------------------------------------                                   						
 *    DATE     AUTHOR                      DESCRIPTION                        									  						
 * ----------  ------  ---------------------------------------------------------                                   						
 * 2021/07/13  jiback 						   소스생성기	                                                                                     						
 *------------------------------------------------------------------------------*/   
package com.msu.prj.com.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("COM001CommInitDAO")
public class COM001CommInitDAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")
	public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
		super.setSqlSessionFactory(sqlSession);
	}
	/******************************* 공통코드 관리 시작 **************************************/
	/**                                                                                                                     	
	 * 공통코드 설정에 따라 조회-전체(retrieveCommInitListT)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	public List<Map> retrieveCommInitListT(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveCommInitListT",map);
	}
	
	/**                                                                                                                     	
	 *  공통코드 설정에 따라 조회-선택(retrieveCommInitListS)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveCommInitListS(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveCommInitListS",map);
	}
	
	/**                                                                                                                     	
	 *  공통코드 설정에 따라 조회-공백(retrieveCommInitListN)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveCommInitListN(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveCommInitListN",map);
	}
	
	/**                                                                                                                     	
	 *  공통코드 설정에 따라 조회-없음(retrieveCommInitListX)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveCommInitListX(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveCommInitListX",map);
	}
	/******************************* 공통코드 관리 종료 **************************************/	
	/******************************* 인사_계열사 시작(사용가능한것만:샘풀) *************************************/
	/**                                                                                                                     	
	 * 인사_계열사 조회-전체(retrieveThrAffltsListT)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	public List<Map> retrieveThrAffltsListT(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsListT",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-선택(retrieveThrAffltsListS)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsListS(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsListS",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-공백(retrieveThrAffltsListN)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsListN(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsListN",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-없음(retrieveThrAffltsListX)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsListX(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsListX",map);
	}
	/******************************* 인사_계열사 종료 (사용가능한것만:샘풀)*************************************/
	
	/******************************* 인사_계열사 시작(전체계열사:샘풀) *************************************/
	/**                                                                                                                     	
	 * 인사_계열사 조회-전체(retrieveThrAffltsAllListT)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	public List<Map> retrieveThrAffltsAllListT(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsAllListT",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-선택(retrieveThrAffltsAllListS)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsAllListS(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsAllListS",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-공백(retrieveThrAffltsAllListN)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsAllListN(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsAllListN",map);
	}
	
	/**                                                                                                                     	
	 * 인사_계열사 조회-없음(retrieveThrAffltsAllListX)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveThrAffltsAllListX(Map<String,Object> map) throws Exception {
		return selectList("COM001CommInitDAO.retrieveThrAffltsAllListX",map);
	}
	/******************************* 인사_계열사 종료 (전체계열사:샘풀)*************************************/
}
