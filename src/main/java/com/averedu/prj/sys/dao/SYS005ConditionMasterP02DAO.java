package com.averedu.prj.sys.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("SYS005ConditionMasterP02DAO")
public class SYS005ConditionMasterP02DAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }
    
    /**                                                                                                      	
     * 공통코드쿼리 조회(retrieveConditionMasterP02)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP02(Map<String, Object> map) throws Exception {                                                                                         
     	return selectList("SYS005ConditionMasterP02DAO.retrieveConditionMasterP02", map);          
    }
    
    /**                                                                                                      	
     * 공통코드목록 조회(retrieveConditionMasterP02List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP02List(Map<String, Object> map) throws Exception {             
     	return selectList("SYS005ConditionMasterP02DAO.retrieveConditionMasterP02List", map);          
    }
}
