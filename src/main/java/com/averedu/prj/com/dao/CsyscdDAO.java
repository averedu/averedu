/*------------------------------------------------------------------------------  							
 * NAME : CsyscdDAO.java                                                                    	
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
package com.averedu.prj.com.dao;                                                                   	            
                                                                                                             
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.stereotype.Repository;

import com.averedu.common.vo.Csys310VO;
import com.averedu.common.vo.Csys311VO;
import com.averedu.common.vo.MenuVO;

import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  
                                                                                                             
@Repository("CsyscdDAO")                                                          	
public class CsyscdDAO extends EgovAbstractMapper {                                              
    
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
                                                                                                             
     	return selectList("CsyscdDAO.retrieveCommCodeMasterList", map);          
    } 
    
    
    /**                                                                                                      
     * 세부코드 리스트 조회(retrieveCommCodeDetailList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveCommCodeDetailList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("CsyscdDAO.retrieveCommCodeDetailList", map);          
    }   
    
    /**                                                                                                      
     * 그룹 코드 리스트 조회(retrieveGrpCodeList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveGrpCodeList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("CsyscdDAO.retrieveGrpCodeList",map);          
    }
    
    /**                                                                                                      
     * 그룹 상세 코드 리스트 조회(retrieveGrpDetailCodeList)                                            
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   	
     */                                                                                                     	
    public List<Map> retrieveGrpDetailCodeList(Map<String, Object> map) throws Exception {                   
                                                                                                             
     	return selectList("CsyscdDAO.retrieveGrpDetailCodeList",map);          
    } 
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 저장(insertCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	insert("CsyscdDAO.insertCommCodeMasterList", map);                       
    }                                                                                                        
                
    
    /**                                                                                                      	
     * 상세코드 리스트 저장(insertCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertCommCodeDetailList(Map<String, Object> map) throws Exception {                          
     if(selectList("CsyscdDAO.countDetailList", map).size()<1){
    	 insert("CsyscdDAO.insertCommCodeDetailList", map); 
     } 	 
     	insert("CsyscdDAO.insertCommCodeDetailList2", map);
    }
    
    /**                                                                                                      	
     * 그룹코드 리스트 저장(insertCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertGrpCodeList(Map<String, Object> map) throws Exception {                           	 
     	
    	insert("CsyscdDAO.insertGrpCodeList", map);
    }
    
    /**                                                                                                      	
     * 그룹상세코드 리스트 저장(insertCommCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void insertGrpCodeDeatilList(Map<String, Object> map) throws Exception {                          
    
     	insert("CsyscdDAO.insertGrpCodeDeatilList", map);
    }
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 수정(updateCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("CsyscdDAO.updateCommCodeMasterList", map);                       
    } 
    
    /**                                                                                                      	
     * 상세코드 리스트 수정(updateCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateCommCodeDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("CsyscdDAO.updateCommCodeDetailList", map);             
     	update("CsyscdDAO.updateCommCodeDetailList2", map);
    }
    
    /**                                                                                                      	
     * 그룹 코드 리스트 수정(updateGrpCodeList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateGrpCodeList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("CsyscdDAO.updateGrpCodeList", map);             
    }
    
    /**                                                                                                      	
     * 그룹 상세 코드 리스트 수정(updateGrpCodeDeatilList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void updateGrpCodeDeatilList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	update("CsyscdDAO.updateGrpCodeDeatilList", map);             
    }
    
    /**                                                                                                      	
     * 상세코드 삭제(deleteCommCodeMasterList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeMasterList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("CsyscdDAO.deleteCommCodeMasterList", map);                       
    }      
    
    /**                                                                                                      	
     * 비어있는 상세코드 삭제(deleteEmptyCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteEmptyCodeDetailList() throws Exception {                          
                                                                                                             
     	delete("CsyscdDAO.deleteEmptyCodeDetailList");    
    }
    
    /**                                                                                                      	
     * 상세언어코드 삭제(deleteCommCodeDetailList2)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeDetailList2(Map<String, Object> map) throws Exception {                          
     	delete("CsyscdDAO.deleteCommCodeDetailList2", map);    
    }
    
    
    /**                                                                                                      	
     * 기초표준코드1 리스트 삭제 및 모든 관련된 모든 디테일 삭제(deleteCommCodeAllList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteCommCodeAllList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("CsyscdDAO.deleteCommCodeAllList", map);  
     	delete("CsyscdDAO.deleteCommCodeAllList2", map);  
    }  
    
    /**                                                                                                      	
     * 그룹코드 리스트 삭제(deleteGrpCodeList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteGrpCodeList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("CsyscdDAO.deleteGrpCodeList", map);  
    }
    
    /**                                                                                                      	
     * 그룹 상세 코드 삭제(deleteGrpCodeDetailList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                                                                                                     	
    public void deleteGrpCodeDetailList(Map<String, Object> map) throws Exception {                          
                                                                                                             
     	delete("CsyscdDAO.deleteGrpCodeDetailList", map);  
    }  
    
    /**                                                                                                      	
     * 부서코드관리 부서목록(deptList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                   
    // 
    public List<Map> deptList(Map<String, Object> map) throws Exception {                   
     	return selectList("CsyscdDAO.deptList", map);          
    }     
    
    /**                                                                                                      	
     * 부서코드관리 부서이력등록(deptListIns)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                   
    // 
    public void deptListIns(Map<String, Object> map){
    	insert("CsyscdDAO.deptListIns", map);
    }
    
    /**                                                                                                      	
     * 부서코드관리 부서이력수정(deptListUpd)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                   
    // 
    public void deptListUpd(Map<String, Object> map){
    	insert("CsyscdDAO.deptListUpd", map);
    }
    
    /**                                                                                                      	
     * 부서코드관리 부서이력삭제(deptListDel)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                   
    // 
    public void deptListDel(Map<String, Object> map) {
    	delete("CsyscdDAO.deptListDel", map);
    }
    
    /**                                                                                                      	
     * 부서이력목록 부서이력목록(deptHistList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */                   
    public List<Map> deptHistList(Map<String, Object> map) throws Exception {                   
     	return selectList("CsyscdDAO.deptHistList", map);          
    }
    
    /**                                                                                                      	
     * 부서이력목록 부서이력등록(deptHistList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptHistListIns(Map<String, Object> map){                   
     	insert("CsyscdDAO.deptHistListIns", map);          
    }
    
    /**                                                                                                      	
     * 부서이력목록 부서이력수정(deptHistList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptHistListUpd(Map<String, Object> map){                   
     	update("CsyscdDAO.deptHistListUpd", map);          
    }
    
    /**                                                                                                      	
     * 부서이력목록 부서이력삭제(deptHistList)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptHistListDel(Map<String, Object> map){                   
     	delete("CsyscdDAO.deptHistListDel", map);          
    }
    
    /**
	 * 부서코드연계속성정보 리스트 조회(deptCdConnAttrInfoList)
	 * 
	 * @param input
	 * @return 
	 * @return
	 * @throws Exception
	 */
    public List<Csys310VO> deptCdConnAttrInfoList(Csys310VO csys310VO){
    	return selectList("CsyscdDAO.deptCdConnAttrInfoList", csys310VO);
    }
    
    /**
	 * 부서코드연계속성값 리스트 조회(디테일)(deptCdConnAttrValList)
	 * 
	 * @param input
	 * @return 
	 * @return
	 * @throws Exception
	 */
    public List<Csys311VO> deptCdConnAttrValList(String bfDeptCd){
    	return selectList("CsyscdDAO.deptCdConnAttrValList", bfDeptCd);
    }
    
    /**
   	 * 부서코드연계속성정보  부서코드 시퀀스(deptCdConnAttrInfoKeyCode)
   	 * 
   	 * @param input
   	 * @return 
   	 * @return
   	 * @throws Exception
   	 */
    public String deptCdConnAttrInfoKeyCode(){
    	return selectOne("CsyscdDAO.deptCdConnAttrInfoKeyCode");
    }
    
    /**                                                                                                      	
     * 부서코드연계속성정보 등록(deptCdConnAttrInfoIns)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptCdConnAttrInfoIns(Map<String, Object> map){                   
     	insert("CsyscdDAO.deptCdConnAttrInfoIns", map);          
    }
    
    /**                                                                                                      	
     * 부서코드연계속성정보 수정(deptCdConnAttrValUpd)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptCdConnAttrInfoUpd(Map<String, Object> map){                   
     	update("CsyscdDAO.deptCdConnAttrInfoUpd", map);          
    }
    
    /**                                                                                                      	
     * 부서코드연계속성정보 삭제(deptCdConnAttrInfoDel)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */  
    public void deptCdConnAttrInfoDel(Map<String, Object> map){                   
     	delete("CsyscdDAO.deptCdConnAttrInfoDel", map);          
    }
    
    /**                                                                                                      	
     * 부서코드연계속성값 삭제(deptCdConnAttrValDel)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */    
    public void deptCdConnAttrValDel(Map<String, Object> map){                   
     	delete("CsyscdDAO.deptCdConnAttrValDel", map);          
    }     
    
    /**                                                                                                      	
     * 부서코드연계속성값 수정(deptCdConnAttrValUpd)                                                 
     * @param input                                                                                         	
     * @return                                                                                              	
     * @throws Exception                                                                                   		
     */    
    public void deptCdConnAttrValUpd(Map<String, Object> map){                   
     	update("CsyscdDAO.deptCdConnAttrValUpd", map);          
    }     
 
   
}                                                                                                             
