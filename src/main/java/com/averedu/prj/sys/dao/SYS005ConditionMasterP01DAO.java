package com.averedu.prj.sys.dao;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;

@Repository("SYS005ConditionMasterP01DAO")
public class SYS005ConditionMasterP01DAO extends EgovAbstractMapper {

	@Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }
    
    /**                                                                                                      	
     * 신청제어항목관리팝업 제어항목 조회(retrieveConditionMasterP01List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP01List(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterP01DAO.retrieveConditionMasterP01List", map);          
    }
    
    /**                                                                                                      	
     * 키값 조회(retrieveConditionMasterP01Key)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP01Key(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterP01DAO.retrieveConditionMasterP01Key", map);          
    }

    /**                                                                                                      	
     * 신청제어항목관리팝업 제어항목 조회(retrieveConditionMasterP01)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public List<Map> retrieveConditionMasterP01(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005ConditionMasterP01DAO.retrieveConditionMasterP01", map);          
    }
	
    /**                                                                                                      	
     * 신청제어항목관리팝업 제어항목 저장(insertConditionMasterP01List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertConditionMasterP01List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS005ConditionMasterP01DAO.insertConditionMasterP01List", map);                       
    }
    
    /**                                                                                                      	
     * 신청제어항목관리팝업 제어항목 수정(updateConditionMasterP01List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateConditionMasterP01List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS005ConditionMasterP01DAO.updateConditionMasterP01List", map);                       
    }
    
    /**                                                                                                      	
     * 신청제어항목관리팝업 제어항목 삭제(deleteConditionMasterP01List)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteConditionMasterP01List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS005ConditionMasterP01DAO.deleteConditionMasterP01List", map);                       
    }
}
