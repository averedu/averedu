/*------------------------------------------------------------------------------  							
 * NAME : SYS004UserAuthDAO.java                                                                    	
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 프로젝트 명을 기입                                                                       
 * Copyright 2021 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2019/05/03  jiback                                                           
 *------------------------------------------------------------------------------*/                           
package com.averedu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS004UserAuthDAO")                                                          	
public class SYS004UserAuthDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                        
	 * 교육생권한코드 리스트 조회(retrieveAuthMasterList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveAuthMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS004UserAuthDAO.retrieveAuthMasterList", map);          
    }   
    
    /**                                                                                                        
	 * 교육생권한코드 리스트 조회(retrieveUserAuthList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveUserAuthList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS004UserAuthDAO.retrieveUserAuthList", map);          
    }  
    
    /**                                                                                                        
	 * 교육생권한코드 리스트 조회(retrieveUserList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveUserList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS004UserAuthDAO.retrieveUserList", map);          
    }
    
    
                                                                                                             
    /**                                                                                                        
	 * 교육생권한코드 리스트 중복 체크조회(retrieveUserAuthListKey)                                       
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveUserAuthListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS004UserAuthDAO.retrieveUserAuthListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 교육생권한코드 리스트 저장(insertUserAuthList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void insertUserAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS004UserAuthDAO.insertUserAuthList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 교육생권한코드 리스트 삭제(deleteUserAuthList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteUserAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS004UserAuthDAO.deleteUserAuthList", map);                       
    }
    
    /**                                                                                                        
   	 * 사용자메뉴별 버튼삭제 체크 조회(retrieveUserCntList)                                       
   	 * @param input                                                                                         	
   	 * @return                                                                                              	
   	 * @throws Exception                                                                                   		
   	 */                                                                                                     	
    public String retrieveUserCntList(Map<String, Object> map) throws Exception {                      
                                                                                                            
    	return selectOne("SYS004UserAuthDAO.retrieveUserCntList", map);                	
    }   
    
    
    /**                                                                                                      	
	 * 사용자메뉴별 버튼 리스트 삭제(deleteUserMenuButtonAuthList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteUserMenuButtonAuthList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS004UserAuthDAO.deleteUserMenuButtonAuthList", map);                       
    }
    
    
	/**                                                                                                      
	* 사용자관할부서 리스트 조회(retrieveUserAuthCtrlDeptList)                                            
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveUserAuthCtrlDeptList(Map<String, Object> map) throws Exception {                   
	    
		return selectList("SYS004UserAuthDAO.retrieveUserAuthCtrlDeptList", map);          
	}
	
    /**                                                                                                      
     * 사용자관할부서 리스트 중복 체크조회(retrieveUserAuthCtrlDeptListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveUserAuthCtrlDeptListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS004UserAuthDAO.retrieveUserAuthCtrlDeptListKey", map);                	
    }  	
        
	/**                                                                                                      
	* 사용자관할부서 리스트 저장(insertUserAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void insertUserAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	                
		insert("SYS004UserAuthDAO.insertUserAuthCtrlDeptList", map);                       
	}                                                                                                        
	                
	/**                                                                                                      
	* 사용자관할부서 리스트 수정(updateUserAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void updateUserAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	                
		update("SYS004UserAuthDAO.updateUserAuthCtrlDeptList", map);                       
	}                                                                                                        
	                
	/**                                                                                                      
	* 사용자관할부서 리스트 삭제(deleteUserAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void deleteUserAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	                
		delete("SYS004UserAuthDAO.deleteUserAuthCtrlDeptList", map);                       
	}        
    
}                                                                                                            
