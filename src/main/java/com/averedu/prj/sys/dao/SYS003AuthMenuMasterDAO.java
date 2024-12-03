/*------------------------------------------------------------------------------  							
 * NAME : SYS003AuthMenuMasterDAO.java                                                                    	
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
                                                                                                             
@Repository("SYS003AuthMenuMasterDAO")                                                          	
public class SYS003AuthMenuMasterDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                        
	 * 기초권한테이블 리스트 조회(retrieveAuthMenuMasterList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveAuthMenuMasterList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS003AuthMenuMasterDAO.retrieveAuthMenuMasterList", map);          
    }                                                                                                        
    
    /**                                                                                                        
	 * 기초권한메뉴 리스트 조회(retrieveAuthMenuDetailList)                                              
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public List<Map> retrieveAuthMenuDetailList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS003AuthMenuMasterDAO.retrieveAuthMenuDetailList", map);          
    } 

    /**                                                                                                      	
	 * 기초권한테이블 리스트 저장(insertAuthMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void insertAuthMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS003AuthMenuMasterDAO.insertAuthMenuMasterList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 기초권한테이블 리스트 수정(updateAuthMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void updateAuthMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS003AuthMenuMasterDAO.updateAuthMenuMasterList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                        
	 * 기초권한테이블 리스트 중복 체크조회(retrieveAuthMenuDetailListKey)                                       
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public Map<String, Object> retrieveAuthMenuDetailListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectOne("SYS003AuthMenuMasterDAO.retrieveAuthMenuDetailListKey", map);                	
    }                                                                                                        
    
    
    /**                                                                                                      	
	 * 기초권한메뉴 리스트 저장(insertAuthMenuDetailList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void insertAuthMenuDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS003AuthMenuMasterDAO.insertAuthMenuDetailList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      	
	 * 기초권한메뉴 리스트 수정(updateAuthMenuDetailList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void updateAuthMenuDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS003AuthMenuMasterDAO.updateAuthMenuDetailList", map);                       
    }       
    
                                                                                                             
    /**                                                                                                      	
	 * 기초권한테이블 리스트 삭제(deleteAuthMenuMasterList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteAuthMenuMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS003AuthMenuMasterDAO.deleteAuthMenuMasterList", map);                       
    }
    
    /**
	 * 사용자메뉴별 리스트 조회(retrieveUserAuthMenuList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map> retrieveUserAuthMenuList(Map<String, Object> map) throws Exception {

		return selectList("SYS003AuthMenuMasterDAO.retrieveUserAuthMenuList", map);
	}
	
	/**
	 * 사용자메뉴별 버튼삭제 체크 조회(SYS003AuthMenuMasterDAO)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public String retrieveUserCntList(Map<String, Object> map) throws Exception {

		return selectOne("SYS003AuthMenuMasterDAO.retrieveUserCntList", map);
	}
    
	/**
	 * 사용자메뉴별 버튼 리스트 삭제(deleteUserMenuButtonAuthList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteUserMenuButtonAuthList(Map<String, Object> map) throws Exception {

		delete("SYS003AuthMenuMasterDAO.deleteUserMenuButtonAuthList", map);
	}
	
    /**                                                                                                      	
	 * 기초권한메뉴 리스트 삭제(deleteAuthMenuDetailList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteAuthMenuDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS003AuthMenuMasterDAO.deleteAuthMenuDetailList", map);                       
    }    
    
    /**                                                                                                      	
	 * 기초권한전체메뉴 리스트 삭제(deleteAuthMenuAllList)                                                 
	 * @param input                                                                                         	
	 * @return                                                                                              	
	 * @throws Exception                                                                                   		
	 */                                                                                                     	
    public void deleteAuthMenuAllList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS003AuthMenuMasterDAO.deleteAuthMenuAllList", map);                       
    }    
    
    /**
	 * 사용자권한 매핑 리스트 삭제(deleteUserAuthAllList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public void deleteUserAuthAllList(Map<String, Object> map) throws Exception {

		delete("SYS003AuthMenuMasterDAO.deleteUserAuthAllList", map);
	}
	
	/**
	 * 사용자그룹별 메뉴 전체 리스트 조회(retrieveUserAuthMenuAllList)
	 * 
	 * @param input
	 * @return
	 * @throws Exception
	 */
	public List<Map> retrieveUserAuthMenuAllList(Map<String, Object> map) throws Exception {

		return selectList("SYS003AuthMenuMasterDAO.retrieveUserAuthMenuAllList", map);
	}
	
    /**                                                                                                      
     * 부서트리(조직도)리스트 조회(retrieveAuthDeptTreeList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAuthDeptTreeList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS003AuthMenuMasterDAO.retrieveAuthDeptTreeList", map);          
    }
    
	/**                                                                                                      
	* 권한별관활부서 리스트 조회(retrieveAuthCtrlDeptList)                                            
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveAuthCtrlDeptList(Map<String, Object> map) throws Exception {                   
	          
		return selectList("SYS003AuthMenuMasterDAO.retrieveAuthCtrlDeptList", map);          
	}

	/**                                                                                                      
	* 권한별관활부서 리스트 저장(insertAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void insertAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		insert("SYS003AuthMenuMasterDAO.insertAuthCtrlDeptList", map);                       
	}                                                                                                        
	          
	/**                                                                                                      
	* 권한별관활부서 리스트 수정(updateAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void updateAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		update("SYS003AuthMenuMasterDAO.updateAuthCtrlDeptList", map);                       
	}                                                                                                        
	          
	/**                                                                                                      
	* 권한별관활부서 리스트 삭제(deleteAuthCtrlDeptList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void deleteAuthCtrlDeptList(Map<String, Object> map) throws Exception {                          
	          
		delete("SYS003AuthMenuMasterDAO.deleteAuthCtrlDeptList", map);                       
	}                                	
}                                                                                                            
