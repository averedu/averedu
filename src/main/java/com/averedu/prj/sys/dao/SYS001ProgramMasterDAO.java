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
 * 2019/04/18  jiback 						   소스생성기	                                                                                     						
 *------------------------------------------------------------------------------*/
package com.averedu.prj.sys.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("SYS001ProgramMasterDAO")
public class SYS001ProgramMasterDAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")
	public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
		super.setSqlSessionFactory(sqlSession);
	}

	/**
	 * 테이블 유저를 조회(retrieveProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws LException
	 */

	public List<Map> retrieveProgramMasterList(Map<String, Object> map) throws Exception {
		return selectList("SYS001ProgramMasterDAO.retrieveProgramMasterList",map);
	}

	/**
	 * 템플릿 마스터 키값을 조회(retrieveProgramMasterListPKey)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map> retrieveProgramMasterListPKey(Map<String,Object> map) throws Exception {

		return selectList("SYS001ProgramMasterDAO.retrieveProgramMasterListPKey", map);
	}

	/**
	 * 템플릿 마스터 중복 체크조회(retrieveProgramMasterListKey)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map> retrieveProgramMasterListKey(Map<String, Object> map) throws Exception {

		return selectList("SYS001ProgramMasterDAO.retrieveProgramMasterListKey", map);
	}

	/**
	 * 템플릿 마스터 저장(insertProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void insertProgramMasterList(Map<String, Object> map) throws Exception {

		insert("SYS001ProgramMasterDAO.insertProgramMasterList", map);
	}

	/**
	 * 템플릿 마스터 수정(updateProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void updateProgramMasterList(Map<String, Object> map) throws Exception {

		update("SYS001ProgramMasterDAO.updateProgramMasterList", map);
	}

	/**
	 * 템플릿 마스터 삭제(deleteProgramMasterList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteProgramMasterList(Map<String, Object> map) throws Exception {

		delete("SYS001ProgramMasterDAO.deleteProgramMasterList", map);
	}
}
