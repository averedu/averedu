package egovframework.rte.cmmn.ria.upload;

import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro17.xapi.data.ColumnHeader;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformRequest;
import com.nexacro17.xapi.tx.HttpPlatformResponse;

/**
 * 화일을 저장하고 화일 정보를 데이터셋으로 리턴한다.
 * 업로드 파라미터명 : upfile
 * 데이터셋명 : Dataset00
 * 컬럼1 : fileName //화일명
 * 컬럼2 : fileSize //화일사이즈
 * 컬럼3 : fileType //화일타입
 * @author jiback
 *
 */

@Controller
public class UploadServlet extends javax.servlet.http.HttpServlet implements javax.servlet.Servlet {

	private static final long SIZE_LIMIT = 100000 * 1024 * 1024L; // 업로드 사이즈 제한. 10000M
	private static final int TEMP_SIZE_LIMIT = 100 * 1024; // 업로드시 사용할 임시 메모리 제한. 100K
	private DiskFileItemFactory factory; 
	private ServletFileUpload upload; // 팩토리로 부터 서블릿 파일업로드 객체 얻기	
	
	Logger logger = Logger.getRootLogger();
	
    @RequestMapping(value = "/UploadServlet.do")	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
//		logger.info("업로드 프로세스");
		System.out.println("* ---------------------- 업로드 시작 ---------------------- * ");
		
		try { 

			if(request.getParameter("savePath") != null
					&& !"".equals(request.getParameter("savePath"))
					&& request.getParameter("savePath").indexOf("file_data")>=0
					&& request.getParameter("savePath").indexOf("../")==-1
					&& request.getParameter("savePath").indexOf("..\\")==-1)
			{
				/** Initialize **/
				String contextRealPath = request.getSession().getServletContext().getRealPath("/");
				String serverPath = request.getParameter("savePath");
				String savePath = contextRealPath + File.separator + serverPath;
//			System.out.println("업로드 경로: " + savePath);
				
				String sName = request.getParameter("serverName");
				String serverName = "";
				if(sName != null)
				{
					serverName = new String(sName.getBytes("iso8859-1"), "UTF-8");
//				System.out.println("업로드 명: " + serverName);
				}
				serverName += request.getParameter("ext");
				
				
				factory = new DiskFileItemFactory();
//			System.out.println("* Factory 취득");
				
				// 바로 디스크에 저장되는것이 아니라 메모리에 먼저 저장을 해둔다.
				//factory.setSizeThreshold(TEMP_SIZE_LIMIT); 			 // 임시 업로드할 사이즈를 제한한다.
				//factory.setRepository(new File(savePath + "/temp")); // 임시디렉토리를 지정한다.
				upload = new ServletFileUpload(factory); 			 // 업로드 객체를 얻는다.
				upload.setSizeMax(SIZE_LIMIT); 						 // 최대 업로드 사이즈를 지정한다.
				upload.setHeaderEncoding("UTF-8"); 					 // 파일명을 인코딩해준다.
				
				List items = upload.parseRequest(request); 			 // 아이템을  얻는다.
//			System.out.println("* 아이템을 가져온다");
				
				Iterator iter = items.iterator();					 // iterator로 변경한다.
				
				List savedFiles = new ArrayList();
				
				HttpPlatformRequest req = new HttpPlatformRequest(request);
				req.receiveData();
				PlatformData resData = new PlatformData();
				VariableList resVarList = resData.getVariableList();
				
//			System.out.println("* 아이템에서 파일 추출 및 저장 시작");	
				
				String fileNameAll = "";
				
				try {
					
					while (iter.hasNext()) {
						FileItem item = (FileItem) iter.next(); 	// 아이템 얻기
						if (item.isFormField()) { 					// 파일형식이면 false 파라미터면 true
							
							String fieldName = item.getFieldName(); // 필드명을 얻는다. 
							String value = item.getString("UTF-8");
//						System.out.println("* fieldName="+fieldName+", value="+value);
							
						} else { // 파일형식이면
							
							if (item.getSize() > 0) {
								
								FileInfo fileInfo = new FileInfo();
								
								String name = item.getName(); 					 // 파일명 얻기
								String fileName = name.substring(name
										.lastIndexOf(File.separator) + 1);			     //파일명을 얻는다.
								if(serverName != null)
								{
									fileName = serverName;		 			// 사용자 지정 파일 명
								}
								
								long fileSize = item.getSize(); 				 // 파일 사이즈를 얻는다.
								
								String returnStr = "";
								
								String newName = (savePath + File.separator + fileName)
								.replace("/", File.separator)
								.replace("\\", File.separator)
								.replace(File.separator+File.separator, File.separator)
								+ ".uploadedFile";
								
								File file = new File(newName); // 기본경로+파일명으로 생성한다.
								if(!file.isFile())
								{
									returnStr += createDir(file, "1");			// 저장 디렉토리가 존재하지 않으면 생성해 준다.
								}
								
								if(file.exists())
								{
									int idx = 1;
									String f_name = file.toString().substring(0, file.toString().lastIndexOf("."));
									f_name = f_name.toString().substring(0, file.toString().lastIndexOf("."));
									String f_ext = file.toString().substring(file.toString().lastIndexOf("."));
									f_ext = f_name.toString().substring(file.toString().lastIndexOf(".")) + f_ext;
									
									System.out.println(f_name);
									System.out.println(f_ext);
									
									while(file.exists())
									{
										newName = f_name + "_" + String.valueOf(idx) + f_ext;
										
										file = new File(newName);
										idx++;
									}
								}
								System.out.println("-------------------------------------------------------------------------");
								System.out.println(newName);
								System.out.println("-------------------------------------------------------------------------");
								
								
								item.write(file); // 파일 저장.
								
						        /** WEB 서버 아이피 구하기 **/
						        String h_name = request.getServerName(); 
						        InetAddress inetaddr = InetAddress.getByName(h_name); 
						        String SERVER_IP = inetaddr.getHostAddress();// String 타입의 IP 주소를 얻음(dotted decimal)

								
								if(!"".equals(fileNameAll))
								{
									fileNameAll += ",";
								}
								
								String savePath2 = (newName);
								
								fileNameAll += savePath2.substring(savePath2.indexOf(File.separator+"file_data")).replace("\\", "/").replace("//","/");
																								
								fileInfo.setFileName(fileName);
								fileInfo.setFileSize(fileSize);
								savedFiles.add(fileInfo);
								/* 2014년 02월 27일 로컬 서버에서는 반영 안되도록 주석 처리 함.
							    if(SERVER_IP.equals("203.232.186.93"))
						        {
						        	String ftp_ip = "203.232.186.92";
						        	int ftp_port = 21;
						        	String ftp_id = "was1";
						        	String ftp_pw = "KMu@2014!";
						        	int ftp_mode = FTP.BINARY_FILE_TYPE;
						        	FileInputStream data = new FileInputStream(file);
						        	String remote = fileNameAll;
						        	
						        	EgovFtpTool.sendFile(ftp_ip, ftp_port, ftp_id, ftp_pw, ftp_mode, data, remote);
						        	
						        }
						        else if(SERVER_IP.equals("203.232.186.92"))
						        {
						        	String ftp_ip = "203.232.186.93";
						        	int ftp_port = 21;
						        	String ftp_id = "was2";
						        	String ftp_pw = "KMu@2014!";
						        	int ftp_mode = FTP.BINARY_FILE_TYPE;
						        	FileInputStream data = new FileInputStream(file);
						        	String remote = fileNameAll;
						        	
						        	EgovFtpTool.sendFile(ftp_ip, ftp_port, ftp_id, ftp_pw, ftp_mode, data, remote);
						        }*/
							}
						}
					}//while
					
					//응답메세지 작성
					DataSet ds = new DataSet("Dataset00");
					ds.addColumn(new ColumnHeader("fileName", DataTypes.STRING));
					ds.addColumn(new ColumnHeader("fileSize", DataTypes.LONG));
					ds.addColumn(new ColumnHeader("fileType", DataTypes.STRING));
					
					FileInfo fileInfo = null;
					
					Iterator fileIter = savedFiles.iterator();
					while (fileIter.hasNext()) {
						
						fileInfo = (FileInfo) fileIter.next();
						int row = ds.newRow();
						
//					System.out.println("getFileName: " + fileInfo.getFileName());
						ds.set(row, "fileName", fileInfo.getFileName());
						ds.set(row, "fileSize", fileInfo.getFileSize());
						ds.set(row, "fileType", fileInfo.getFileType());
						
					}
					resData.addDataSet(ds);
					
					if(null != request.getParameter("index"))
					{
						fileNameAll = request.getParameter("index") + "@^^@" + fileNameAll;
					}
					resVarList.add("ErrorCode", 200);
					resVarList.add("ErrorMsg", fileNameAll);
				System.out.println("반환해줄 파일PATH:" + fileNameAll);
					
//				System.out.println("* 아이템에서 파일 추출 및 저장 끝");
					
				} catch (Exception e) {
					resVarList.add("ErrorCode", 500);
					resVarList.add("ErrorMsg", e);
					logger.debug("에러=" + e);
					System.out.println(e);
				}
				
				HttpPlatformResponse res = new HttpPlatformResponse(response);
				res.setData(resData);
				res.sendData();
				
			}

		} catch (Exception e) {
			logger.debug("에러발생:" + e);
			System.out.println(e);
		}
		
		//HttpObject는 데이터셋을 전달하지 못하니 데이터셋을 전달하려면, FileUpload를 사용해서 구현할 것
		
	}// doPost

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
	
}// end
