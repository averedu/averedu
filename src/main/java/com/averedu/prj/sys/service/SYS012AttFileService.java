/*------------------------------------------------------------------------------  								
 * NAME : SYS012AttFileService.java                                                                    		
 * DESC :                                                                                                        
 * VER  : V1.0                                                                                                   
 * PROJ : 목포과학대학교 차세대 프로젝트                                                                           
 * Copyright 2021 avereduSystem All rights reserved                                                                
 *------------------------------------------------------------------------------                                 
 *                               MODIFICATION LOG                                                                
 *------------------------------------------------------------------------------                                 
 *    DATE     AUTHOR                      DESCRIPTION                        									
 * ----------  ------  ---------------------------------------------------------                                 
 * 2021/01/31  bsoh                                                               
 *------------------------------------------------------------------------------*/                               
package com.averedu.prj.sys.service;                                                                       	        
                                                                                                                 
import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.averedu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;

import com.nexacro17.xapi.data.DataSet;
                                                                                                                 
public interface SYS012AttFileService {                                                                        
	                                                                                                                
    /**                                                                                                          
     * 첨부파일마스터리스트 조회(retrieveAttFileList)                                                 
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void retrieveAttFileList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 첨부파일마스터리스트 저장/수정(saveAttFileList)                                               
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void saveAttFileList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
                                                                                                                 
    /**                                                                                                          
     * 첨부파일마스터리스트 삭제(deleteAttFileList)                                                   
     * @param input                                                                                              
     * @return                                                                                                   
     * @throws Exception                                                                                         
     */                                                                                                          
    public void deleteAttFileList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
    
    /**                                                                                                          
     * 첨부파일번호 삭제(deleteAttFileList)
     * @param input
     * @return
     * @throws Exception
     */                                                                                     
    public void deleteAttFileNo(String attFileNo, SessionVO sessionVO) throws Exception;      
	    
	/**                                                                                                          
	* 첨부파일상세리스트 조회(retrieveAttFileDetailList)                                                 
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void retrieveAttFileDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	       
	
	/**                                                                                                          
	* 첨부파일을 업로드한다. (fileUpload)                                                 
	* @param request                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/ 
	public DataSet attFileDefaultUpload(HttpServletRequest request, SessionVO sessionVO) throws IOException, Exception;
	
	/**                                                                                                          
	* 첨부파일을 다운로드한다. (fileUpload)                                                 
	* @param request                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/ 
	public void attFileDownload(HttpServletRequest request, HttpServletResponse response, SessionVO sessionVO) throws IOException, Exception;	
	
	
	/**                                                                                                          
	* 첨부파일상세리스트 저장/수정(saveAttFileDetailList)                                               
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void saveAttFileDetailList(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  
	       
	/**                                                                                                          
	* 첨부파일상세리스트 삭제(deleteAttFileDetailList)                                                   
	* @param input                                                                                              
	* @return                                                                                                   
	* @throws Exception                                                                                         
	*/                                                                                                          
	public void deleteAttFileDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          
    
}                                                                                                                
