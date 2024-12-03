/*------------------------------------------------------------------------------  							
 * NAME : COM_P15_DAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 목포과학대 차세대 프로젝트                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2022/08/25  정진호                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.com.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("COM_P15_DAO")                                                          	
public class COM_P15_DAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 조회(retrieve_P15List)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieve_P15List(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("COM_P15_DAO.retrieve_P15List", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 키값을 조회(retrieve_P15ListPKey)                                        
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieve_P15ListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("COM_P15_DAO.retrieve_P15ListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 중복 체크조회(retrieve_P15ListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieve_P15ListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("COM_P15_DAO.retrieve_P15ListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 저장(insert_P15List)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void insert_P15List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("COM_P15_DAO.insert_P15List", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 수정(update_P15List)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void update_P15List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("COM_P15_DAO.update_P15List", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 교직사정학생 리스트 삭제(delete_P15List)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void delete_P15List(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("COM_P15_DAO.delete_P15List", map);                       
    }                                                                                                        
}                                                                                                            
