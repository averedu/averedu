package com.msu.common.upload;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro17.xapi.tx.PlatformException;

public class UploadFolderInfo extends javax.servlet.http.HttpServlet implements
		javax.servlet.Servlet {

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	} 

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		List savedFiles = getFiles(request);
		try {
			sendResult(request, response, savedFiles);
		} catch (PlatformException platformEx) {

		}

	}// doPost

	public List getFiles(HttpServletRequest request) {

		List savedFiles = new ArrayList();

		String contextRealPath = request.getSession().getServletContext().getRealPath("/");
		String savePath = contextRealPath + "upfolder";
		File file = new File(savePath);

		String[] files = file.list();
		if (files != null && files.length > 0) {
			for (int i = 0; i < files.length; i++) {
				FileInfo fileInfo = new FileInfo(); 
				fileInfo.setFileName(files[i]);
				savedFiles.add(fileInfo);
			}
		}

		return savedFiles;
	}

	private void sendResult(HttpServletRequest request,
			HttpServletResponse response, List savedFiles)
			throws ServletException, IOException, PlatformException {

		
		request.setAttribute("savedFiles", savedFiles);
		RequestDispatcher rd = getServletContext().getRequestDispatcher("/filelist.jsp");
		rd.forward(request, response);
		
	}
}
