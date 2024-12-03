/*------------------------------------------------------------------------------  							
 * NAME : COM001SystemDateDAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 보람상조 차세대 프로젝트                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2020/06/24  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.com.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("COM001SystemDateDAO")                                                          	
public class COM001SystemDateDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 날짜데이타 조회 조회(retrieveSystemDateList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveSystemDateList() throws Exception {                   
                                                                                                             
     	return selectList("COM001SystemDateDAO.retrieveSystemDateList", null);          
    }  
    
    
	/**                                                                                                      
	* 사용자메뉴별버튼권한 리스트 조회(retrieveCommUserBttnAuthList)                                            
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveCommUserBttnAuthList(Map<String, Object> map) throws Exception {                   
	       
		return selectList("COM001SystemDateDAO.retrieveCommUserBttnAuthList", map);          
	}   
                                                                                                        
}                                                                                                            
