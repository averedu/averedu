<%
/*
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
%>
 
<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>

<%@ page import="org.apache.commons.fileupload.servlet.ServletFileUpload"%>
<%@ page import="org.apache.commons.fileupload.FileItemFactory"%>
<%@ page import="org.apache.commons.fileupload.FileUploadException"%>
<%@ page import="org.apache.commons.fileupload.FileItem"%>
<%@ page import="org.apache.commons.fileupload.disk.DiskFileItemFactory"%>
<%@ page import="org.apache.commons.io.FilenameUtils"%>
<%@ page import="org.apache.commons.fileupload.FileUploadBase.SizeLimitExceededException"%>
<%@ page import="org.apache.commons.fileupload.FileUploadBase.FileSizeLimitExceededException"%>

<%@ page import="javax.servlet.http.HttpServlet"%>
<%@ page import="javax.servlet.http.HttpServletRequest"%>
<%@ page import="javax.servlet.http.HttpServletResponse"%>
<%@ page import="javax.servlet.ServletException"%>
<%@ page import="java.io.IOException"%>
<%@ page import="java.io.File"%>
<%@ page import="java.util.List"%>
<%@ page import="java.util.Iterator"%>
<%@ page import="java.util.Date"%>
<%@ page import="java.util.TimeZone"%>
<%@ page import="java.text.DateFormat"%>
<%@ page import="java.text.SimpleDateFormat"%>

<%@ page import="com.nexacro17.xapi.data.ColumnHeader"%>
<%@ page import="com.nexacro17.xapi.data.DataSet"%>
<%@ page import="com.nexacro17.xapi.data.DataTypes"%>
<%@ page import="com.nexacro17.xapi.data.PlatformData"%>
<%@ page import="com.nexacro17.xapi.data.VariableList"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformResponse"%>
<%@ page import="com.nexacro17.xapi.tx.PlatformException"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformRequest"%>

<%@ page import="com.msu.common.util.XSSUtil"%>

<%
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	//Check that we have a file upload request
	boolean isMultipart = ServletFileUpload.isMultipartContent(request);
	
	DataSet ds = new DataSet("ds_file");
	ds.addColumn(new ColumnHeader("FILE_NM", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("FILE_SAVE_NM", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("FILE_PATH", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("FILE_EXTEND_ID", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("FILE_SIZE", DataTypes.INT));
	ds.addColumn(new ColumnHeader("WORK_CD", DataTypes.STRING));
	ds.addColumn(new ColumnHeader("THUMB_YN", DataTypes.STRING));
	
	if(isMultipart) {
		Date date = new Date();
        TimeZone gmtTime = TimeZone.getTimeZone("GMT");
        DateFormat gmtFormat = new SimpleDateFormat("yyyyMMdd");
        gmtFormat.setTimeZone(gmtTime);
        
		//String contextRealPath = request.getSession().getServletContext().getRealPath("/");
		String realPath;
		String osName = System.getProperty("os.name");
		
		String path = request.getParameter("path");
		String dateFldrYn = request.getParameter("dateFldrYn");	//년/월/일 폴더를 사용 할 지 선택한다.
		String thumnailYn = request.getParameter("thumnailYn");	//년/월/일 폴더를 사용 할 지 선택한다.
		String path2 = gmtFormat.format(date);
		if(dateFldrYn == null || "".equals(dateFldrYn) || "1".equals(dateFldrYn)){
			path = path + "/" + path2.substring(0,4) + "/" + path2.substring(4,6) + "/" + path2.substring(6,8);
		}
		
		if (osName.indexOf("Window") > -1) {
			System.out.println("업로드 > Window");
			realPath = "C:/bkrpos_upload/";              //업로드 된 파일의 저장 폴더를 설정
			realPath.toString().replace('/', '\\');      	
			path.toString().replace('/', '\\');
    	} else {
    		System.out.println("업로드 > linux");
    		realPath = "/Data/bkrpos_upload/";               								//업로드 된 파일의 저장 폴더를 설정
    	}
		
		String savePath = realPath + path;
		String maxSize = request.getParameter("maxSize");
		String maxTotalSize = request.getParameter("maxTotalSize");
		String sysDivCode = request.getParameter("sysDivCode");
		
		if(maxSize == null) maxSize = "-1";
		
		if(maxTotalSize == null) maxTotalSize = "-1";
		
		Long lMaxSize = Long.parseLong(maxSize);		
		Long lMaxTotalSize = Long.parseLong(maxTotalSize);
		
		// Create a factory for disk-based file items
		DiskFileItemFactory factory = new DiskFileItemFactory();
		
		// Sets the size threshold beyond which files are written directly to disk
		factory.setSizeThreshold(4096);
		
		// Create a new file upload handler
		ServletFileUpload upload = new ServletFileUpload(factory);
	
		// Specifies the character encoding to be used when reading the headers of individual part
		upload.setHeaderEncoding("utf-8");
		
		// Set overall request size constraint
		upload.setSizeMax(lMaxTotalSize);
		
		// Sets the maximum allowed size of a single uploaded file
		upload.setFileSizeMax(lMaxSize); 
		
		try {
			File filePath = new File(savePath); 
			
			if(!filePath.exists()) filePath.mkdirs();
	
			// Sets the directory used to temporarily store files that are larger than the configured size threshold
			factory.setRepository(new File(System.getProperty("java.io.tmpdir")));
	
			// Parse the request
			List items = upload.parseRequest(request);
			Iterator iter = items.iterator();
			
			// Parse the request
			while(iter.hasNext())  {
				FileItem item = (FileItem) iter.next();
				
				if(item.isFormField()) {
					String name = item.getFieldName();
					String encoding = upload.getHeaderEncoding();
                    String value = item.getString(encoding);

	    			//input dataset 확인
	    			if(name == "inputDatasets") {
	    				//TODO
	    				//문자열(xml or ssv)을 Dataset으로 변환 후 업무로직에 사용할 것.
	    				continue;
	    			}
    			
    				if(value == null || value.equals("")) {
						continue;
					} else {
						File f = new File(savePath + File.separator, XSSUtil.cleanPathMani(value));
						
						if(f.exists()) {
							f.delete();
						}
					}
				} else {	// Process a file upload
					// filename on the client
					String fieldName = item.getFieldName();
					String fileName = item.getName();
					long fileSize = item.getSize();
					
					if(fileName == null || fileName.equals("")) {
						continue;
					} else {
						fileName = FilenameUtils.getName(fileName);
						
                        //============================= save file name =============================    
                        int seq = 0;
                        String rename       = FilenameUtils.getBaseName(fileName) + "_" + gmtFormat.format(date);
                        String ext          = FilenameUtils.getExtension(fileName);
                        String saveFileName = rename + "_" + seq + "." + ext;
                        //==========================================================================					
				        
						File uploadedFile = new File(filePath + File.separator, saveFileName);

                        while(!uploadedFile.createNewFile()) {
                            seq++;
                            saveFileName = rename + "_" + seq + "." + ext;
                            uploadedFile = new File(uploadedFile.getParent(), saveFileName);
                        }
						
						item.write(uploadedFile);
						item.delete();
						
						int row = ds.newRow();
						ds.set(row, "FILE_NM", fileName);
						ds.set(row, "FILE_SAVE_NM", saveFileName);
						ds.set(row, "FILE_SIZE", fileSize);
						ds.set(row, "FILE_PATH", savePath);
						ds.set(row, "FILE_EXTEND_ID", ext);
						ds.set(row, "WORK_CD", sysDivCode);
						ds.set(row, "THUMB_YN", thumnailYn);
						System.out.println("Asdfasdfasdf:"+thumnailYn);
					}
				}
			}
			
			
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");
		} catch (FileSizeLimitExceededException e) {
			resVarList.add("ErrorCode", 1);
			resVarList.add("ErrorMsg", "COM000069");
		} catch (SizeLimitExceededException e) {
			resVarList.add("ErrorCode", 1);
			resVarList.add("ErrorMsg", "COM000069");
		} catch (FileUploadException e) {
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		} catch (Exception e) {
			resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", e);
			e.printStackTrace();
		}
	} else {
		resVarList.add("ErrorCode", -1);
		resVarList.add("ErrorMsg", "Invalid Request");
	}
	
	resData.addDataSet(ds);
	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();
%>
