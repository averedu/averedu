/*------------------------------------------------------------------------------  							
 * NAME : SYS005CommCodeDAO.java                                                                    	
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
package com.averedu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS005CommCodeDAO")                                                          	
public class SYS005CommCodeDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 기초표준코드1 리스트 조회(retrieveCommCodeMasterList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005CommCodeDAO.retrieveCommCodeMasterList", map);          
    }                                                                                                        
    /**                                                                                                      
     * 기초표준코드2 리스트 조회(retrieveCommCodeDetailList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeDetailList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS005CommCodeDAO.retrieveCommCodeDetailList", map);          
    }                                                                                                             
   
    /**                                                                                                      
     * 기초표준코드1 리스트 키값을 조회(retrieveCommCodeMasterListPKey)                                      
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeMasterListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS005CommCodeDAO.retrieveCommCodeMasterListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 기초표준코드1 리스트 중복 체크조회(retrieveCommCodeMasterListKey)                                    
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeMasterListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS005CommCodeDAO.retrieveCommCodeMasterListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초표준코드1 리스트 저장(insertCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS005CommCodeDAO.insertCommCodeMasterList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초표준코드1 리스트 수정(updateCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS005CommCodeDAO.updateCommCodeMasterList", map);                       
    }                                                                                                        
    
    /**                                                                                                      	
     * 기초표준코드2 리스트 저장(insertCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommCodeDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS005CommCodeDAO.insertCommCodeDetailList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
     * 기초표준코드2 리스트 수정(updateCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommCodeDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS005CommCodeDAO.updateCommCodeDetailList", map);                       
    }     
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 삭제(deleteCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS005CommCodeDAO.deleteCommCodeMasterList", map);                       
    }      
    
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 삭제 및 모든 관련된 모든 디테일 삭제(deleteCommCodeAllList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeAllList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS005CommCodeDAO.deleteCommCodeAllList", map);                       
    }  
    
    
    /**                                                                                                      	
     * 기초표준코드2 리스트 삭제(deleteCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS005CommCodeDAO.deleteCommCodeDetailList", map);                       
    } 
}                                                                                                            
