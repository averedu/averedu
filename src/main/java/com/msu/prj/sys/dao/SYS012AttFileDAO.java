/*------------------------------------------------------------------------------  							
 * NAME : SYS012AttFileDAO.java                                                                    	    
 * DESC :                                                                                                    
 * VER  : V1.0                                                                                               
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                       
 * Copyright 2020 avereduSystem All rights reserved                                                            
 *------------------------------------------------------------------------------                             
 *                               MODIFICATION LOG                                                            
 *------------------------------------------------------------------------------                             
 *    DATE     AUTHOR                      DESCRIPTION                        								
 * ----------  ------  ---------------------------------------------------------                             
 * 2021/01/31  bsoh                                                           
 *------------------------------------------------------------------------------*/                           
package com.msu.prj.sys.dao;                                                                   	            
                                                                                                             
import java.util.List;                                                                                       
import java.util.Map;                                                                                        
                                                                                                             
import javax.annotation.Resource;                                                                            
                                                                                                             
import org.apache.ibatis.session.SqlSessionFactory;                                                          
import org.springframework.stereotype.Repository;                                                            
                                                                                                             
import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("SYS012AttFileDAO")                                                          	
public class SYS012AttFileDAO extends EgovAbstractMapper {                                              
                                                                                                             
    @Resource(name = "sqlSession")                                                     
    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         
        super.setSqlSessionFactory(sqlSession);                                                              
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 조회(retrieveAttFileList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAttFileList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("SYS012AttFileDAO.retrieveAttFileList", map);          
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 키값을 조회(retrieveAttFileListPKey)                                        
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAttFileListPKey(Map<String, Object> map) throws Exception {                     
                                                                                                             
     	return selectList("SYS012AttFileDAO.retrieveAttFileListPKey", map);                
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 중복 체크조회(retrieveAttFileListKey)                                       
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveAttFileListKey(Map<String, Object> map) throws Exception {                      
                                                                                                             
     	return selectList("SYS012AttFileDAO.retrieveAttFileListKey", map);                	
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 저장(insertAttFileList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void insertAttFileList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("SYS012AttFileDAO.insertAttFileList", map);                       
    }                                                                                                        
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 수정(updateAttFileList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void updateAttFileList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS012AttFileDAO.updateAttFileList", map);                       
    }
    
    /**                                                                                                      
     * 첨부파일마스터 리스트 수정(update02AttFileList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void update02AttFileList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("SYS012AttFileDAO.update02AttFileList", map);                       
    }    
                                                                                                             
    /**                                                                                                      
     * 첨부파일마스터 리스트 삭제(deleteAttFileList)                                               
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public void deleteAttFileList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("SYS012AttFileDAO.deleteAttFileList", map);                       
    }
    
    
	/**                                                                                                      
	* 첨부파일상세 리스트 조회(retrieveAttFileDetailList)                                            
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveAttFileDetailList(Map<String, Object> map) throws Exception {                   
	         
		return selectList("SYS012AttFileDAO.retrieveAttFileDetailList", map);          
	}                                                                                                        
	         
	/**                                                                                                      
	* 첨부파일상세 리스트 키값을 조회(retrieveAttFileDetailListPKey)                                        
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveAttFileDetailListPKey(Map<String, Object> map) throws Exception {                     
	         
		return selectList("SYS012AttFileDAO.retrieveAttFileDetailListPKey", map);                
	}                                                                                                        
	         
	/**                                                                                                      
	* 첨부파일상세 리스트 중복 체크조회(retrieveAttFileDetailListKey)                                       
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public List<Map> retrieveAttFileDetailListKey(Map<String, Object> map) throws Exception {                      
	         
		return selectList("SYS012AttFileDAO.retrieveAttFileDetailListKey", map);                	
	}                                                                                                        
	         
	/**                                                                                                      
	* 첨부파일상세 리스트 저장(insertAttFileDetailList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void insertAttFileDetailList(Map<String, Object> map) throws Exception {                          
	         
		insert("SYS012AttFileDAO.insertAttFileDetailList", map);                       
	}                                                                                                        
	         
	/**                                                                                                      
	* 첨부파일상세 리스트 수정(updateAttFileDetailList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void updateAttFileDetailList(Map<String, Object> map) throws Exception {                          
	         
		update("SYS012AttFileDAO.updateAttFileDetailList", map);                       
	}                                                                                                        
	         
	/**                                                                                                      
	* 첨부파일상세 리스트 삭제(deleteAttFileDetailList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void deleteAttFileDetailList(Map<String, Object> map) throws Exception {                          
	         
		delete("SYS012AttFileDAO.deleteAttFileDetailList", map);                       
	}
	
	/**                                                                                                      
	* 첨부파일상세 리스트 삭제(delete02AttFileDetailList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void delete02AttFileDetailList(Map<String, Object> map) throws Exception {                          
	         
		delete("SYS012AttFileDAO.delete02AttFileDetailList", map);                       
	}	

	/**                                                                                                      
	* 동작이력 리스트 저장(insertActionHistoryList)                                               
	* @param input                                                                                         	
	* @return                                                                                              	
	* @throws Exception                                                                                   	
	*/                                                                                                     	
	public void insertActionHistoryList(Map<String, Object> map) throws Exception {                          
	         
		insert("SYS012AttFileDAO.insertActionHistoryList", map);                       
	}   	
	
}                                                                                                            
