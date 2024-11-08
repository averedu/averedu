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

<%@page import="java.io.InputStream"%>
<%@page import="org.apache.commons.codec.binary.Base64"%>
<%@page import="org.apache.commons.io.IOUtils"%>

<%@ page import="com.nexacro17.xapi.data.ColumnHeader"%>
<%@ page import="com.nexacro17.xapi.data.DataSet"%>
<%@ page import="com.nexacro17.xapi.data.DataTypes"%>
<%@ page import="com.nexacro17.xapi.data.PlatformData"%>
<%@ page import="com.nexacro17.xapi.data.VariableList"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformResponse"%>
<%@ page import="com.nexacro17.xapi.tx.PlatformException"%>
<%@ page import="com.nexacro17.xapi.tx.HttpPlatformRequest"%>

<%
	PlatformData resData = new PlatformData();
	VariableList resVarList = resData.getVariableList();
	
	String name = "";
	
	if (ServletFileUpload.isMultipartContent(request)){
	    ServletFileUpload uploadHandler = new ServletFileUpload(new DiskFileItemFactory());
	    //UTF-8 인코딩 설정
	    uploadHandler.setHeaderEncoding("UTF-8");
	    List<FileItem> items = uploadHandler.parseRequest(request);
	    
	    DataSet ds = new DataSet("ds_file");
		ds.addColumn(new ColumnHeader("BASE64", DataTypes.STRING));
		
	    //각 필드태그들을 FOR문을 이용하여 비교를 합니다.
	    for (FileItem item : items) {
	    	int row = ds.newRow();
	    	
	    	//FILE 태그가 1개이상일 경우
			if(item.getSize() > 0) {
			    String ext = item.getName().substring(item.getName().lastIndexOf(".")+1);
			    ///////////////// 서버에 파일쓰기 ///////////////// 
			    InputStream is = item.getInputStream();
			    byte b[] = IOUtils.toByteArray(is);
			    
			    String base64DataString = Base64.encodeBase64String(b);
			    base64DataString = "data:image/" + ext + ";base64," + base64DataString;
			    
			    if(is != null)  is.close();
			    
				ds.set(row, "BASE64", base64DataString);
			}else {
				ds.set(row, "BASE64", "error");
			}
	    }
	
	    if("error".equals(ds.getBoolean(0, "BASE64"))) {
	    	resVarList.add("ErrorCode", -1);
			resVarList.add("ErrorMsg", "Invalid Request");
	    } else {
	    	resData.addDataSet(ds);
			resVarList.add("ErrorCode", 0);
			resVarList.add("ErrorMsg", "SUCC");	
	    }
	}
	
	HttpPlatformResponse res = new HttpPlatformResponse(response);
	res.setData(resData);
	res.sendData();	
%>
