/*------------------------------------------------------------------------------  											
 * NAME : SYS012AttFileServiceImpl.java                                                                    					
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
package com.averedu.prj.sys.service.impl;                                                                                        
                                                                                                                             
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.annotation.Resource;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Service;

import com.averedu.common.exception.CommException;
import com.averedu.common.util.EgovWebUtil;
import com.averedu.common.vo.SessionVO;
import com.averedu.prj.sys.dao.SYS012AttFileDAO;
import com.averedu.prj.sys.service.SYS012AttFileService;
import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;
import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import egovframework.rte.fdl.property.EgovPropertyService;                                                                   
                                                                                                                             
@Service("SYS012AttFileService")                                                                               
public class SYS012AttFileServiceImpl extends EgovAbstractServiceImpl implements SYS012AttFileService {                  
    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                
    
	private static final long SIZE_LIMIT = 100000 * 1024 * 1024L; // 업로드 사이즈 제한. 10000M
	private static final int TEMP_SIZE_LIMIT = 100 * 1024; // 업로드시 사용할 임시 메모리 제한. 100K
	private DiskFileItemFactory factory; 
	private ServletFileUpload upload; // 팩토리로 부터 서블릿 파일업로드 객체 얻기
	private EgovWebUtil egovWebUtil;;

    
    /** SYS012AttFileDAO */                                                                                             
    @Resource(name="SYS012AttFileDAO")                                                                      
    private SYS012AttFileDAO sys012AttFileDAO;       
        
	@Resource(name="propertiesService")
	private EgovPropertyService propertyService;;
	
	                                                                                                                         
    /**                                                                                                             			
     * 첨부파일마스터리스트 조회(retrieveAttFileList)                                                         	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void retrieveAttFileList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                                                                                                                            
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);
        
        List<Map> records = sys012AttFileDAO.retrieveAttFileList(map);                                            
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                             			
     * 첨부파일마스터리스트 저장/수정(saveAttFileList)                                                        	
     * @param input                                                                                                 			
     * @return                                                                                                      			
     * @throws Exception                                                                                           			
     */                                                                                                             			
    public void saveAttFileList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
        //조회조건                                      																	
        int rowType;                                                                                     					
		                                                                                                    					
        DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
        //저장데이타셋                                       																
        DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");                                   
        for (int i = 0; i < dsMap1.size(); i++) {																			
            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			                                                                                                                	
            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
                /*                                                                                         	
                //pk레코드조회                                                                                          	
                List <Map> recordKeyValue = sys012AttFileDAO.retrieveAttFileListPKey(outMap);                           
                                                                                                                             
                Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
                outMap.put("PK_ID", mapKeyValue.get("KEY_CODE").toString());   
				                                                                                                        		
                if (checkExistPK(outMap)) {                                                                                  
                    throw new CommException("1", "코드가 중복 되였습니다.", ""); 
                }                                                                                                        	
                */                                                                                         	
		                                                                                                                     	
                outMap.put("REG_ID", sessionVO.getUserId().toString());                           
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
		                                                                                                                     	
                //신규저장                                                                                              	
                sys012AttFileDAO.insertAttFileList(outMap);                                               		
		                                                                                                                     	
            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
		                                                                                                                     	
                outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
                //수정                                                                                                  	
                sys012AttFileDAO.updateAttFileList(outMap);                                               		
		                                                                                                                     	
            }                                                                                                               	
        }                                                                                                                    
        //서버에서 시퀀스 재 조회시                                       													
        List <Map> records = sys012AttFileDAO.retrieveAttFileList(inMap);                                     
		                                                                                                                        
        DataSetMap dsOut = new DataSetMap();                                                                                 
        dsOut.setRowMaps(records);                                                                                           
        outDataset.put("dsMaster", dsOut);                                                             
		                                                                                                                        
        return;                                                                                                              
    }                                                                                                                        
                                                                                                                             
    /**                                                                                                         				
     * 첨부파일마스터리스트 삭제(deleteAttFileList)                                                         	 	
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    public void deleteAttFileList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
			                                                                                            						
        int rowType;         

        DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");                    					
		                                                                                                    					
        for (int i = 0; i < dsMap.size(); i++) {                                                            					
			                                                                                            						
            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);
            
            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
            																				 						            
            if ( rowType == DataSet.ROW_TYPE_DELETED ) {
            	// Detail 파일삭제
                List<Map> records = sys012AttFileDAO.retrieveAttFileDetailList(map);
                
    			for (Map<String, Object> mapDt : records )
    			{
    				String filePath = mapDt.get("ATTFL_PATH_NM").toString() + mapDt.get("ATTFL_PHYSC_NM").toString();  
    				
    				deleteFilePhy(filePath);
    			}
                
                // Detail
            	sys012AttFileDAO.delete02AttFileDetailList(map);  
                // Master    	
                sys012AttFileDAO.deleteAttFileList(map);                              							
            }                                                                                           						
        }                                                                                                   					
        return;                                                                                             					
    }
    
	    
	/**                                                                                                         				
	* 첨부파일번호 삭제(deleteAttFileNo)                                                         	 	
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	public void deleteAttFileNo(String attFileNo, SessionVO sessionVO) throws Exception {           
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("ATTFL_NO", attFileNo);
		
		List<Map> records = sys012AttFileDAO.retrieveAttFileDetailList(map);
			
		for (Map<String, Object> mapDt : records )
		{
			String filePath = mapDt.get("ATTFL_PATH_NM").toString() + mapDt.get("ATTFL_PHYSC_NM").toString();  

			deleteFilePhy(filePath);
		}

		// Detail
		sys012AttFileDAO.delete02AttFileDetailList(map);  
		// Master    	
		sys012AttFileDAO.deleteAttFileList(map);                              							

		return;                                                                                             					
	}            
	                                                                                                            				
    /**                                                                                                         				
     * 첨부파일마스터 중복 체크(checkExistPK)                                                         	 				
     * @param input                                                                                             				
     * @return                                                                                                  				
     * @throws Exception                                                                                        				
     */                                                                                                         				
    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              
        List<Map> records = sys012AttFileDAO.retrieveAttFileListKey(outMap);                                            
        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
        if(outMap1.get("CNT").toString().equals("0")) {                            
            return false;                                                                                                    
        }                                                                                                        			
        return true;                                                                                                         
    }
    
	    
	/**                                                                                                             			
	* 첨부파일상세리스트 조회(retrieveAttFileDetailList)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void retrieveAttFileDetailList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
	                 
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         
		List<Map> records = sys012AttFileDAO.retrieveAttFileDetailList(map);                                            
		                 
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsMaster", dsOut);                                                             
		                 
		return;                                                                                                              
	}              

	/**                                                                                                             			
	* 첨부파일상세리스트 조회(attFileDefaultUpload)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/	
	public DataSet attFileDefaultUpload(HttpServletRequest request, SessionVO sessionVO) throws IOException, Exception {

		String ATTFL_NO   = request.getParameter("ATTFL_NO")   == null ? getUUID() : request.getParameter("ATTFL_NO").toString();		
		if ("".equals(ATTFL_NO)) ATTFL_NO = getUUID();
		
		String domainName = request.getParameter("domainName") == null ? null : request.getParameter("domainName").toString();
		
		String contextRealPath = propertyService.getString("fileBasePath");
		int    maxFileCnt      = propertyService.getString("maxFileCnt") == null ? 3000 : Integer.parseInt(propertyService.getString("maxFileCnt"));		
				
		String newName = "";
		List<Map<String, Object>> attFileDetailMapList = new ArrayList<Map<String, Object>>();
		
		try { 
			
			if(domainName != null) {
				
				String recentDirectory = getFileDirectory(contextRealPath, domainName, maxFileCnt); // 폴더 당 3000개 넘으면 다음 폴더 생성				
				String savePath = contextRealPath + File.separator + domainName + File.separator + recentDirectory;				
				
				factory = new DiskFileItemFactory();
				upload = new ServletFileUpload(factory); 			 // 업로드 객체를 얻는다.
				upload.setSizeMax(SIZE_LIMIT); 						 // 최대 업로드 사이즈를 지정한다.
				upload.setHeaderEncoding("UTF-8"); 					 // 파일명을 인코딩해준다.				
				
				List items = upload.parseRequest(request); 			 // 아이템을  얻는다.				
				Iterator iter = items.iterator();					 // iterator로 변경한다.
								
				while (iter.hasNext()) {
					
					Map<String, Object> attFileDetailMap = new HashMap<String, Object>(); 
					
					attFileDetailMap.put("ATTFL_NO", ATTFL_NO);
					
					FileItem item = (FileItem) iter.next(); 	// 아이템 얻기
					
					if (item.isFormField()) { 					// 파일형식이면 false 파라미터면 true
						
						String fieldName = item.getFieldName(); // 필드명을 얻는다. 
						String value = item.getString("UTF-8");
						log.debug("* fieldName="+fieldName+", value="+value);

					} else { // 파일형식이면
						
						log.debug("item.getSize() ===> " + item.getSize());
						attFileDetailMap.put("ATTFL_BYTE_SIZE", new BigDecimal(item.getSize()));
						
						if (item.getSize() > 0) {
							
							String name = item.getName(); 					 // 파일명 얻기
							log.debug("=============> " + name);

							String fileName = name.substring(name.lastIndexOf(File.separator) + 1);		//파일명을 얻는다.
							String fileExt  = name.substring(name.lastIndexOf(".") + 1);
							log.debug("fileName =============> " + fileName+"");
							attFileDetailMap.put("ATTFL_LOGIC_NM", fileName);
							attFileDetailMap.put("ATTFL_EXTSN_NM", fileExt);
							
							// 물리적파일명
							String uniqueFileName = fileName + "."+ getDateWithMillisecond(); // 서버에 저장될 Unique한 파일명을 생성한다.
							
							log.debug("Unique Uploaded FileName !!! ====> " + uniqueFileName);
							attFileDetailMap.put("ATTFL_PHYSC_NM", uniqueFileName);
							
							long fileSize = item.getSize(); 				 // 파일 사이즈를 얻는다.
							
							String returnStr = "";
							
							// 서버파일정보 (경로+파일명)
							newName = (savePath + File.separator + uniqueFileName)
							.replace("/", File.separator)
							.replace("\\", File.separator)
							.replace(File.separator+File.separator, File.separator);

							// 서버파일 저장경로 (경로)
							String serverFilePath = (savePath + File.separator)
									.replace("/", File.separator)
									.replace("\\", File.separator)
									.replace(File.separator+File.separator, File.separator);
							
							log.debug("Unique Uploaded Server Path !!! ====> " + serverFilePath);
							
							attFileDetailMap.put("ATTFL_PATH_NM", serverFilePath);
							
							File file = new File(newName); // 기본경로+파일명으로 생성한다.
							if(!file.isFile())
							{
								returnStr += createDir(file, "1");			// 저장 디렉토리가 존재하지 않으면 생성해 준다.
							}
							
							// 중복파일 처리 
							if(file.exists())
							{
								int idx = 1;
								
								String f_name = file.toString().substring(0, file.toString().lastIndexOf("."));
								f_name = f_name.toString().substring(0, file.toString().lastIndexOf("."));
								
								String f_ext = file.toString().substring(file.toString().lastIndexOf("."));
								f_ext = f_name.toString().substring(file.toString().lastIndexOf(".")) + f_ext;
								
								log.debug(f_name);
								log.debug(f_ext);
								
								while(file.exists())
								{
									newName = f_name + "_" + String.valueOf(idx) + f_ext;
									
									attFileDetailMap.put("ATTFL_PHYSC_NM", newName.replace(serverFilePath, ""));
									
									file = new File(newName);
									idx++;
								}
							}
							log.debug("-------------------------------------------------------------------------");
							log.debug(newName);
							log.debug("-------------------------------------------------------------------------");
							
							
							item.write(file); // 파일 저장.		
							
							attFileDetailMap.put("REG_ID",sessionVO.getUserId().toString());
							attFileDetailMap.put("MOD_ID",sessionVO.getUserId().toString());
							
							attFileDetailMapList.add(attFileDetailMap);
							
							
							// clear
							newName = "";
						}
					} 

				}//while				
			}


		} catch (Exception e) {
			log.debug("에러발생1:" + e.getMessage());
			
			// 파일삭제
			if ( newName.length() > 0 ) 
				deleteFilePhy(newName);
			
			throw new CommException("1", "에러발생2:" + e.getMessage(), "");
		}			
		//
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("ATTFL_NO", ATTFL_NO);
				
		// DB Insert
		try {
			List <Map> recordKeyValue = sys012AttFileDAO.retrieveAttFileListKey(map);
			
			if (!checkExistPK(map)) {
				map.put("NLOGN_SVC_TRGET_YN", "0");
				
				if ( map.size() > 0 ) {
					map.put("USE_YN", "1");
				} else {
					map.put("USE_YN", "0");
				}
				map.put("REG_ID", sessionVO.getUserId().toString());
				map.put("MOD_ID", sessionVO.getUserId().toString());				
				
				sys012AttFileDAO.insertAttFileList(map);
			}
			
			for (Map<String, Object> mapDt : attFileDetailMapList )
			{
                //pk레코드조회                                                                                          	
                //List <Map> recordDtKeyValue = sys012AttFileDAO.retrieveAttFileDetailListPKey(mapDt);                           
                                                                                                                             
                //Map<String, Object> mapKeyValue = (Map<String, Object>)recordDtKeyValue.get(0);                               
                //mapDt.put("ATTFL_SN", mapKeyValue.get("KEY_CODE").toString());
				mapDt.put("REG_ID", sessionVO.getUserId().toString());
				mapDt.put("MOD_ID", sessionVO.getUserId().toString());
				mapDt.put("SESSION_IP", sessionVO.getIpAddress().toString());
				mapDt.put("ATTFL_NO", ATTFL_NO);
				
                sys012AttFileDAO.insertAttFileDetailList(mapDt);
			}
			
		} catch (Exception ex) {
			//log.debug("에러발생2:" + ex.getMessage());
			throw new CommException("1", "에러발생2:" + ex.getMessage(), "");
		} 
		
		// 첨부여부 반영		
		//sys012AttFileDAO.update02AttFileList(map);
		
		
		// DataSet 결과 반환 
		DataSet ds = new DataSet("dsMaster");
		
		ds.addColumn(new ColumnHeader("CHK",                DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_NO",           DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_SN",           DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_LOGIC_NM",     DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_PATH_NM",      DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_PHYSC_NM",     DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_EXTSN_NM",     DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("ATTFL_BYTE_SIZE",    DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("FILE_SIZE",          DataTypes.LONG));	    // 
		ds.addColumn(new ColumnHeader("INDCT_ORD",          DataTypes.LONG));	    // 
		ds.addColumn(new ColumnHeader("REG_ID",             DataTypes.STRING));  	// 
		ds.addColumn(new ColumnHeader("REG_DT",             DataTypes.DATE_TIME));	// 
		ds.addColumn(new ColumnHeader("MOD_ID",             DataTypes.STRING));  	// 
		ds.addColumn(new ColumnHeader("MOD_DT",             DataTypes.DATE_TIME));	// 
		ds.addColumn(new ColumnHeader("ATTFL_DC",           DataTypes.STRING));	    // 
		ds.addColumn(new ColumnHeader("NLOGN_SVC_TRGET_YN", DataTypes.STRING));  	// 
		
		try {		
			List<Map> records = sys012AttFileDAO.retrieveAttFileDetailList(map);
			
			for (Map r : records )
			{
				int row = ds.newRow();
				
				ds.set(row, "CHK",                r.get("CHK"));						// CHK
				ds.set(row, "ATTFL_NO",           r.get("ATTFL_NO"));					// 
				ds.set(row, "ATTFL_SN",           r.get("ATTFL_SN"));					//
				ds.set(row, "ATTFL_LOGIC_NM",     r.get("ATTFL_LOGIC_NM"));				//
				ds.set(row, "ATTFL_PATH_NM",      r.get("ATTFL_PATH_NM"));				//
				ds.set(row, "ATTFL_PHYSC_NM",     r.get("ATTFL_PHYSC_NM"));				//
				ds.set(row, "ATTFL_EXTSN_NM",     r.get("ATTFL_EXTSN_NM"));				//
				ds.set(row, "ATTFL_BYTE_SIZE",    r.get("ATTFL_BYTE_SIZE"));			//
				ds.set(row, "FILE_SIZE",          r.get("FILE_SIZE"));					//
				ds.set(row, "INDCT_ORD",          r.get("INDCT_ORD"));					//
				ds.set(row, "REG_ID",             r.get("REG_ID"));						//
				ds.set(row, "REG_DT",             r.get("REG_DT"));						//
				ds.set(row, "MOD_ID",             r.get("MOD_ID"));						//
				ds.set(row, "MOD_DT",             r.get("MOD_DT"));						//
				ds.set(row, "ATTFL_DC",           r.get("ATTFL_DC"));					//
				ds.set(row, "NLOGN_SVC_TRGET_YN", r.get("NLOGN_SVC_TRGET_YN"));			//
			}
						
  			
		} catch (Exception e) {
			//log.debug("에러발생3:" + e.getMessage());			
			throw new CommException("1", "에러발생3:" + e.getMessage(), ""); 
		}	
		
		return ds;					
	}
	
	/**
	 * 파일을 업로드 할 대상 디렉토리 경로를 얻어낸다.
	 *
	 * @Author : 
	 * @Title : 파일 디렉토리
	 * @Description : 파일을 업로드 할 대상 디렉토리 경로를 얻어낸다.
	 * @return 디렉토리 경로
	 */
	public String getFileDirectory(String basePath, String domainName, int maxFileCnt) throws Exception {
		String recentDirectory = getDirPathStr(basePath, domainName);
		
		String dirPathStr = basePath + File.separator + domainName ;
		
		if (!isUseableDirectory(dirPathStr + File.separator + recentDirectory, maxFileCnt)) {
			do {
				int dirIndex = Integer.parseInt(recentDirectory.replaceAll("\\D", ""));
				dirIndex++;
				recentDirectory = Integer.toString(dirIndex);
				while (recentDirectory.length() < 8) {
					recentDirectory = "0" + recentDirectory;
				}
			} while (!isUseableDirectory(dirPathStr + File.separator + recentDirectory, maxFileCnt));
		}		
		
		return recentDirectory;
	}
	
	/**
	 * 사용할 디렉토리 경로를 반환한다.
	 *
	 * @return
	 * @throws CommException 
	 */
	private String getDirPathStr(String basePath, String domainName) throws Exception {
		String recentDirectory = "";
		
		String savePath = basePath + File.separator + domainName;		
				
		File path = new File(savePath);
		
		if (!path.exists()) {
			try {
				Files.createDirectories(Paths.get(savePath));
			} catch (IOException e) {
				throw new CommException("1", "업로드 폴더 생성에 실패 하였습니다.", ""); 
			}			
			recentDirectory = "00000001";
		} else {
			File[] files = path.listFiles();
			
			if (files.length == 0) {
				recentDirectory = "00000001";
			} else {				
				// 마지막 폴더 
				String fnm = files[files.length - 1].toString();

				recentDirectory = fnm.substring(fnm.lastIndexOf(File.separator) + 1);
			}
		}		

		return recentDirectory;
	}

	/**
	 * @param fileDirectory
	 * @param maxFileCnt
	 */
	private boolean isUseableDirectory(String fileDirectory, int maxFileCnt) throws Exception {
		boolean flag = false;
		File path = new File(fileDirectory);
		if (!path.exists()) {
			try {
				Files.createDirectories(Paths.get(fileDirectory));
			} catch (IOException e) {
				throw new CommException("1", "업로드 폴더 생성에 실패 하였습니다.", ""); 
			}
			flag = true;
		} else {
			File[] files = path.listFiles();
			if (files != null && files.length < maxFileCnt) {
				flag = true;
			}
		}
		return flag;
	}	
	
	/**
	 * 물리 파일을 삭제 한다.
	 *
	 * @param filePathMap
	 */
	public void deleteFilePhy(String filePath) {
		try {
			Files.deleteIfExists(Paths.get(filePath));
		} catch (IOException e) {
			log.debug("파일 삭제중 문제가 발생하였습니다 : " + filePath);
		}
	}	
	
    /*
     * Unique한 파일명을 생성한다.
     */
    private static String getDateWithMillisecond()
    {
      Date date = new Date();
      SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
      return sdf.format(date);
    }
    
	private String getUUID() {
		return UUID.randomUUID().toString().replace("-", "");
	}	
	

    /*
     * 서버에 파일폴더를 생성한다.
     */
    private static String createDir(File dir, String isFile) throws Exception
	{
		String returnStr = "";
		File parentDir = new File(dir.getParent());
		
		if(!parentDir.exists())
		{
			returnStr += createDir(parentDir, "2");
		}

		if(!"1".equals(isFile))
		{
			if(dir.mkdir())
			{
				returnStr += "폴더 생성 성공: " + dir.getPath() + "\r\n";
			}
			else{
				returnStr += "폴더 생성 실패: " + dir.getPath() + "\r\n";
			}
		}
		return returnStr;
	}// createDir	
    
    

	/**                                                                                                             			
	* 첨부파일상세리스트 조회(attFileDownload)                                                         	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/	
	public void attFileDownload(HttpServletRequest request, HttpServletResponse response, SessionVO sessionVO) throws IOException, Exception {

		String ATTFL_NO = request.getParameter("ATTFL_NO").toString();	
		String ATTFL_SN = request.getParameter("ATTFL_SN") == null ? "1" : request.getParameter("ATTFL_SN").toString();
		
		Map<String, Object> map = new HashMap<String, Object>();
		
		map.put("ATTFL_NO", ATTFL_NO);
		map.put("ATTFL_SN", ATTFL_SN);
		
		List <Map> records = sys012AttFileDAO.retrieveAttFileDetailList(map);
		
		if (records.size() == 0) {
			throw new CommException("1", "파일 정보를 찾을 수 없습니다.", "");			
		} else {
			Map<String, Object> resultOne = records.get(0);
			
			// 세션체크
			if ("0".equals(resultOne.get("NLOGN_SVC_TRGET_YN"))) {
				
				if (sessionVO == null) {
					PlatformData resData = new PlatformData();
					VariableList resVarList = resData.getVariableList();
					
					resVarList.add("ErrorCode", "-1");
					resVarList.add("ErrorMsg", "다시 로그인해 주세요.");
					
					HttpPlatformResponse res = new HttpPlatformResponse(response);
					res.setData(resData);
					res.sendData();
					return;
				}
			}
			
			try {
				String ATTFL_LOGIC_NM = resultOne.get("ATTFL_LOGIC_NM").toString();
				String ATTFL_PATH_NM  = resultOne.get("ATTFL_PATH_NM").toString();
				String ATTFL_PHYSC_NM = resultOne.get("ATTFL_PHYSC_NM").toString();
				
				request.setCharacterEncoding("UTF-8");
				
				String savePath = ATTFL_PATH_NM + ATTFL_PHYSC_NM;
				  
				log.debug("파일업로드 경로 [savePath] ======> " + savePath);
							
				// 자바 I/O 를 이용하여 다운로드해 준다.
				byte[] buffer = new byte[1024];
				ServletOutputStream out = null;
				BufferedInputStream in = null;
				
				File file = null;
				
				try {
					
					log.debug("파일명 ======> " + ATTFL_LOGIC_NM);						
					
					file = new File(savePath);
					if(file.exists()) {
						out = response.getOutputStream();
						response.setContentType("utf-8");
						response.setContentType("application/octet-stream");;
						response.setHeader("Accept-Ranges", "bytes");
						response.setHeader("Content-Disposition", "attachment;filename=\"" + URLEncoder.encode(ATTFL_LOGIC_NM,"UTF-8").replaceAll("\\+", "%20") + "\"");
						long len = file.length();
						response.setContentLength((int)len);
						in = new BufferedInputStream(new FileInputStream(file));
						int n = 0;
						while ((n = in.read(buffer, 0, 1024)) != -1) {
							out.write(buffer, 0, n);
						}// while
												
						// 다운로드 이력 저장
						Map<String, Object> mapActonHist = new HashMap<String, Object>();
						
						mapActonHist.put("CLASS_NM",   this.getClass().getName().toString()); /*클래스명*/
						mapActonHist.put("FUNC_NM",    "attFileDownload");        /*함수명*/												
						mapActonHist.put("INPUT_CN",   map.toString()  );         /*조회정보*/ 
						mapActonHist.put("DATASET_CN", records.toString());       /*데이터셋정보*/ 
						mapActonHist.put("REMARK",     "첨부파일다운로드");              /*비고*/

						if (sessionVO != null) {
							Map<String, Object> sessionMap = (Map<String, Object>) BeanUtils.describe(sessionVO);						
							mapActonHist.put("SESSION_CN", sessionMap.toString());         /*세션정보*/							
							mapActonHist.put("REG_ID", sessionVO.getUserId().toString());  /*등록아이디*/  							
						}
						mapActonHist.put("REG_IPADR", egovWebUtil.getUserIpAddress());     /*등록IP주소*/
						
						sys012AttFileDAO.insertActionHistoryList(mapActonHist);
					
					} else {
						log.debug("해당파일이 없습니다.");
					}
				} catch (Exception e) {
					
				} finally {
					if (in != null)
						try {
							in.close();
						} catch (Exception e) {}
					if (out != null)
						try {
							out.close();
						} catch (Exception e) {}
				}// finally

			} catch (IOException e) {
				throw new CommException("1", "파일 처리중 문제가 발생하였습니다.", "");
			}
			
		}		
	}
	              
	/**                                                                                                             			
	* 첨부파일상세리스트 저장/수정(saveAttFileDetailList)                                                        	
	* @param input                                                                                                 			
	* @return                                                                                                      			
	* @throws Exception                                                                                           			
	*/                                                                                                             			
	public void saveAttFileDetailList( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         
			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          
		//조회조건                                      																	
		int rowType;                                                                                     					
							
		DataSetMap dsMap = (DataSetMap) inDataset.get("ds_input");                                     
		Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       
		//저장데이타셋                                       																
		DataSetMap dsMap1 = (DataSetMap) inDataset.get("dsMaster");                                   
		for (int i = 0; i < dsMap1.size(); i++) {																			
			Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 
			rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           
			             	
			if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    
				/*                                                                                         	
				//pk레코드조회                                                                                          	
				List <Map> recordKeyValue = sys012AttFileDAO.retrieveAttFileDetailListPKey(outMap);                           
				              
				Map<String, Object> mapKeyValue = (Map<String, Object>)recordKeyValue.get(0);                               
				outMap.put("PK_ID", mapKeyValue.get("KEY_CODE").toString());   
				         		
				if (checkExistPK(outMap)) {                                                                                  
				throw new CommException("1", "코드가 중복 되였습니다.", ""); 
				}                                                                                                        	
				*/                                                                                         	
				              	
				outMap.put("REG_ID", sessionVO.getUserId().toString());                           
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                           
				              	
				//신규저장                                                                                              	
				sys012AttFileDAO.insertAttFileDetailList(outMap);                                               		
				              	
			} else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               
				              	
				outMap.put("MOD_ID", sessionVO.getUserId().toString());                                
				//수정                                                                                                  	
				sys012AttFileDAO.updateAttFileDetailList(outMap);                                               		
				              	
			}                                                                                                               	
	}                                                                                                                    
	//서버에서 시퀀스 재 조회시                                       													
	List <Map> records = sys012AttFileDAO.retrieveAttFileDetailList(inMap);                                     
		                 
		DataSetMap dsOut = new DataSetMap();                                                                                 
		dsOut.setRowMaps(records);                                                                                           
		outDataset.put("dsMaster", dsOut);                                                             
		                 
		return;                                                                                                              
	}                                                                                                                        
	              
	/**                                                                                                         				
	* 첨부파일상세리스트 삭제(deleteAttFileDetailList)                                                         	 	
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	public void deleteAttFileDetailList(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           
							
		int rowType;                                                                                     					
		DataSetMap dsMap = (DataSetMap) inDataset.get("dsMaster");
							
		for (int i = 0; i < dsMap.size(); i++) {                                                            					
							
			Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				
			rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			
					            
			if ( rowType == DataSet.ROW_TYPE_DELETED ) {        
				// 파일삭제
//				String filePath = map.get("ATTFL_PATH_NM").toString() + map.get("ATTFL_PHYSC_NM").toString();  				
//				deleteFilePhy(filePath);
				
				// DB삭제
				sys012AttFileDAO.deleteAttFileDetailList(map);				
			}
		}
				
		return;
	}                                                                                                           				
	 				
	/**                                                                                                         				
	* 첨부파일상세 중복 체크(checkExistPK)                                                         	 				
	* @param input                                                                                             				
	* @return                                                                                                  				
	* @throws Exception                                                                                        				
	*/                                                                                                         				
	private Boolean checkExistDetailPK(Map<String, Object> outMap) throws Exception {                                              
		List<Map> records = sys012AttFileDAO.retrieveAttFileDetailListKey(outMap);                                            
		Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   
		if(outMap1.get("CNT").toString().equals("0")) {                            
			return false;                                                                                                    
		}                                                                                                        			
		return true;                                                                                                         
	}         
}                                                                                                                            
