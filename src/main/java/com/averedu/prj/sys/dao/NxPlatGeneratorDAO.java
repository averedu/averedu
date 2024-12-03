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

@Repository("NxPlatGeneratorDAO")
public class NxPlatGeneratorDAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")
	public void setSqlSessionFactory(SqlSessionFactory sqlSession) {
		super.setSqlSessionFactory(sqlSession);
	}
	
	/**                                                                                                                     	
	 * 테이블 유저를 조회(retrieveNxPlatGeneratorUser)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  
	
	public List<Map> retrieveNxPlatGeneratorUser() throws Exception {
		return selectList("NxPlatGeneratorDAO.retrieveNxPlatGeneratorUser","");
	}

	/**                                                                                                                     	
	 * 모든 테이블을 조회(retrieveNxPlatGeneratorM)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  

	public List<Map> retrieveNxPlatGeneratorM(Map map) throws Exception {
		return selectList("NxPlatGeneratorDAO.retrieveNxPlatGeneratorM", map);
	}

	/**                                                                                                                     	
	 * 모든 테이블을 조회(retrieveNxPlatGeneratorD)                                                                                                    
	 * @param input                                                                                                         	
	 * @return                                                                                                              	
	 * @throws LException                                                                                                   	
	 */  

	public List<Map> retrieveNxPlatGeneratorD(Map map) throws Exception {
		return selectList("NxPlatGeneratorDAO.retrieveNxPlatGeneratorD", map);
	}
}
