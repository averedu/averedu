/*------------------------------------------------------------------------------  							
 * NAME : SYS010UserGroupAuthDAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                       
 * Copyright 2020 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2021/01/25  bsoh                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS010UserGroupAuthDAO")                                                          	
public class SYS010UserGroupAuthDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 조회(retrieveUserGroupAuthList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserGroupAuthList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS010UserGroupAuthDAO.retrieveUserGroupAuthList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 키값을 조회(retrieveUserGroupAuthListPKey)                                        
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserGroupAuthListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS010UserGroupAuthDAO.retrieveUserGroupAuthListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 중복 체크조회(retrieveUserGroupAuthListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserGroupAuthListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS010UserGroupAuthDAO.retrieveUserGroupAuthListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 저장(insertUserGroupAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void insertUserGroupAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS010UserGroupAuthDAO.insertUserGroupAuthList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 수정(updateUserGroupAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void updateUserGroupAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS010UserGroupAuthDAO.updateUserGroupAuthList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 권한별사용자그룹 리스트 삭제(deleteUserGroupAuthList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void deleteUserGroupAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS010UserGroupAuthDAO.deleteUserGroupAuthList", map);                       
    }        
    
    /**                                                                                                      
     * test                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
                                                                                                          	
    public void updateProcedureSample(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS010UserGroupAuthDAO.updateProcedureSample", map);                       
    }    
    */
    
    
	/**                                                                                                      
	* 사용자그룹별관할부서 리스트 조회(retrieveUserGroupAuthCtrlDeptList)                                            
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/
	public List<Map> retrieveUserGroupAuthCtrlDeptList(Map<String, Object> map) throws Exception {                   
	                
		return selectList("SYS010UserGroupAuthDAO.retrieveUserGroupAuthCtrlDeptList", map);          
	}
	
	    
	/**                                                                                                      
	* 사용자그룹별관할부서 리스트 중복 체크조회(retrieveUserGroupAuthCtrlDeptListKey)                                       
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveUserGroupAuthCtrlDeptListKey(Map<String, Object> map) throws Exception {                      
	          
		return selectList("SYS010UserGroupAuthDAO.retrieveUserGroupAuthCtrlDeptListKey", map);                	
	}                                                                                                        
	          
	/**                                                                                                      
	* 사용자그룹별관할부서 리스트 저장(insertUserGroupAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void insertUserGroupAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		insert("SYS010UserGroupAuthDAO.insertUserGroupAuthCtrlDeptList", map);                       
	}                                                                                                        
	          
	/**                                                                                                      
	* 사용자그룹별관할부서 리스트 수정(updateUserGroupAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void updateUserGroupAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		update("SYS010UserGroupAuthDAO.updateUserGroupAuthCtrlDeptList", map);                       
	}                                                                                                        
	          
	/**                                                                                                      
	* 사용자그룹별관할부서 리스트 삭제(deleteUserGroupAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void deleteUserGroupAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		delete("SYS010UserGroupAuthDAO.deleteUserGroupAuthCtrlDeptList", map);                       
	}   	
}                                                                                                            
