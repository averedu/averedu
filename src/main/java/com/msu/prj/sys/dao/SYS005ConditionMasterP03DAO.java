package com.msu.prj.sys.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("SYS005ConditionMasterP03DAO")
public class SYS005ConditionMasterP03DAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }
    
    /**                                                                                                      	
     * 제어항목관리팝업 제어항목 조회(retrieveConditionMasterP03List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP03List(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterP03DAO.retrieveConditionMasterP03List", map);          
    }
    
    /**                                                                                                      	
     * 검증(retrieveConditionMasterP03)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP03(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterP03DAO.retrieveConditionMasterP03", map);          
    }
}
