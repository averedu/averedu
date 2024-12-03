<%@ page contentType="text/html;charset=utf-8" %>
<%@ page language="java"%>
<%@ page import="com.nexacro17.xapi.data.*" %>
<%@ page import="com.nexacro17.xapi.tx.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.io.FileInputStream" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.io.IOException" %>
<%@ page import="com.averedu.common.util.XSSUtil"%>

<% 
	PlatformData platformData = new PlatformData();
	HttpPlatformRequest platformRequest = new HttpPlatformRequest(request);
	
	platformRequest.receiveData();
	PlatformData pData = platformRequest.getData(); 
	
	//String contextRealPath = request.getSession().getServletContext().getRealPath("/");
	String osName = System.getProperty("os.name");
	
	String path = request.getParameter("path");
	
	if (osName.indexOf("Window") > -1) path.toString().replace('/', '\\');
	
	
	String savePath = path;
	String returnString = "";
	
	boolean succ = true;
	
	try {
		File f = new File(XSSUtil.cleanPathMani(savePath));
		
		if(f.exists()) {
			if (f.delete()) {
				returnString += "'" + savePath + "' Delete Success";
			} else {
				succ = false;
				returnString += "'" + savePath + "' Delete failed";
			}
		} else {
			succ = true;
			returnString += "'" + savePath + "' File not available";
			
			//업어도 진행되도록 수정
			//succ = false;
			//returnString += "'" + savePath + "' File not available";
		}
	} 
	
	catch(Exception e) {
		succ = false;
		returnString += "'" + savePath + "' " + e;
   	}

	
	VariableList varList = platformData.getVariableList();
	
	if(succ) {
		varList.add("ErrorCode", "0");
		varList.add("ErrorMsg", "SUCC");
	} else {
		varList.add("ErrorCode", "-1");
		varList.add("ErrorMsg", returnString);
	}
	
	HttpPlatformResponse pRes = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_XML, "UTF-8"); 
	pRes.setData(platformData);
	pRes.sendData();
%>
