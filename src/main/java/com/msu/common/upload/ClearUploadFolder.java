package com.msu.common.upload;
 
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClearUploadFolder extends javax.servlet.http.HttpServlet implements
		javax.servlet.Servlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		//doGet(request, response);
	}
 
    @RequestMapping(value = "/ClearUploadFolder.do")
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		int code = response.SC_NOT_FOUND;
		String contextRealPath = request.getSession().getServletContext().getRealPath("/");
		
		String file_path = request.getParameter("file_path");
		System.out.println(file_path);
		String[] file_path2 = file_path.split(",");
		
		for(int idx=0; idx < file_path2.length; idx++)
		{ 
			if(file_path2[idx] != null
					&& !"".equals(file_path2[idx])
					&& file_path2[idx].indexOf("file_data")>=0
					&& file_path2[idx].indexOf("../")==-1
					&& file_path2[idx].indexOf("..\\")==-1)
			{
				String savePath = contextRealPath + file_path2[idx];
				
				savePath = savePath.replace("/", File.separator)
				.replace("\\", File.separator)
				.replace(File.separator + File.separator, File.separator);
				
				System.out.println(savePath);
				
				File file = new File(savePath);
				
				
				if(file.exists())
				{
					file.delete();
					code = response.SC_OK;
				}
			}
			else{
	//			System.out.println("허용하지 않는 접근");
			}
		}
		
		code = response.SC_OK;
		
		PrintWriter out = response.getWriter();
		out.print("<?xml version='1.0' encoding='UTF-8'?><result><code><![CDATA["+code+"]]></code></result>");
	}
}
