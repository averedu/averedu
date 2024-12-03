/**
 *  Class Name : EgovFtpTool.java
 *  Description : FTP Client - Server간 파일 송수신 기능을 제공하는 Business class
 *  Modification Information
 * 
 *     수정일         수정자                   수정내용
 *   -------    --------    ---------------------------
 *   2021.07.13    jiback          최초 생성
 *
 *  @author jiback
 *  @since 2021.07.13
 *  @version 1.0
 *  @see 
 * 
 *  Copyright (C) 2021 by avereduSystem  All right reserved.
 */

package com.averedu.common.upload;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.Vector;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelSftp;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EgovSftpTool {
	
	private static Logger logger = LoggerFactory.getLogger(EgovSftpTool.class);
	
	static Session session         = null;
	static Channel channel         = null;
	static ChannelSftp sftpChannel = null;
	
	public static void connect() throws JSchException {
        
		String host = "30.111.100.102";        
        String username = "brmanager";
        String password = "brmanager12!@";
        int   port = 22;
		
        logger.debug("connecting..."+host);

        JSch jsch = new JSch(); // 1. JSch 객체를 생성한다.
        session = jsch.getSession(username, host, port);  // 2. 세션 객체를 생성한다(사용자 이름, 접속할 호스트, 포트를 인자로 전달한다.)
        session.setConfig("StrictHostKeyChecking", "no"); // 3. 세션과 관련된 정보를 설정한다.
        session.setPassword(password);                    // 4. 패스워드를 설정한다.
        session.connect();                                // 5. 접속한다.

        channel = session.openChannel("sftp");            // 6. sftp 채널을 연다.
        channel.connect();                                // 7. 채널에 연결한다.
        sftpChannel = (ChannelSftp) channel;              // 8. 채널을 FTP용 채널 객체로 캐스팅한다.
    }
	
	public static void disconnect() {
        if(session.isConnected()){
        	logger.debug("disconnecting...");
            sftpChannel.disconnect();
            channel.disconnect();
            session.disconnect();
        }
    }
	
	public static void upload(String fileName, String remoteDir) throws Exception {
        FileInputStream fis = null;
        // 앞서 만든 접속 메서드를 사용해 접속한다.
        connect();
        try {
            // Change to output directory
            sftpChannel.cd(remoteDir);

            // Upload file
            File file = new File(fileName);
            // 입력 파일을 가져온다.
            fis = new FileInputStream(file);
            // 파일을 업로드한다.
            sftpChannel.put(fis, file.getName());
            
            sftpChannel.cd(remoteDir);
            
            //디렉토리 안의 목록 조회
            Vector<ChannelSftp.LsEntry> flist = sftpChannel.ls(remoteDir);
            for(ChannelSftp.LsEntry entry : flist){
            	if(!entry.getFilename().equals(".") && !entry.getFilename().equals("..") && entry.getFilename().indexOf(".") != 0){
            		if (file.getName().equals(entry.getFilename())) {
            			logger.debug("파일명:["+entry.getFilename()+"] Upload Complete !!" );
            		}
            	}
            }

            fis.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
        disconnect();
    }
	
	
	public static void download(String fileName, String savePath) throws Exception{
        byte[] buffer = new byte[1024];
        BufferedInputStream bis;
        connect();
        try {
            // Change to output directory
            String cdDir = fileName.substring(0, fileName.lastIndexOf("/") + 1);
            sftpChannel.cd(cdDir);
            
            logger.debug("cdDir ===> " + cdDir);

            File file = new File(fileName);
            
            logger.debug("file.getName() ===> " + file.getName());
            
            bis = new BufferedInputStream(sftpChannel.get(file.getName()));

            File newFile = new File(savePath);
            
            // Download file
            OutputStream os = new FileOutputStream(newFile);
            BufferedOutputStream bos = new BufferedOutputStream(os);
            int readCount;
            while ((readCount = bis.read(buffer)) > 0) {
                bos.write(buffer, 0, readCount);
            }
            bis.close();
            bos.close();
            
            if (newFile.exists()) {
            	logger.debug("File downloaded successfully");
            } else {
            	logger.debug("File downloaded Fail!!");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        disconnect();
    }
	
}