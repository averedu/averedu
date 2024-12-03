/*
 * Copyright (c) 2017 BGF Retail All rights reserved.
 *
 * This software is the confidential and proprietary information of BGF Retail.
 * You shall not disclose such Confidential Information and shall use it
 * only in accordance with the terms of the license agreement you entered into
 * with BGF Retail
 */
package com.averedu.common.util;

import java.io.InputStream;

import org.apache.log4j.Logger;

import com.jcraft.jsch.Channel;
import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
 
/**
 * 공통유틸
 * 
 * @created on 1.0, 2021.07.13
 * @created jiback
 * @modified
 * @modified
 * @caused
 */
public class Telnet { 

	private static Logger logger    = Logger.getLogger(Telnet.class);
	
	/**
	 *  Telnet 접속 후 실행 해서 날짜 , 시간 변경 
	 * 
	 * @param strHostIp   IP 주소 
	 * @param intPort     PORT 주소
	 * @param strUser     사용자
	 * @param strPasswd   패스워드 
	 * @param strYmd      일자 ( YYYY/MM/DD )
	 * @param strDate     시분초(HH:MM:SS)
	 * @return
	 * @throws Exception 
	 */
	public static void shellCallJschDate(String strHostIp, int intPort, String strUser, String strPasswd, String strYmd, String strDate ) throws Exception {
		
		 Session session = null;
	     Channel channel = null;
		
		try {
		
			// 1. JSch 객체를 생성한다.
			JSch jsch = new JSch();
            session = jsch.getSession(strUser, strHostIp, intPort);
            
            // 타임아웃 지정 
            session.setTimeout(3000);
            // 3. 패스워드를 설정한다.
            session.setPassword(strPasswd);
         
            // 4. 세션과 관련된 정보를 설정한다.
            java.util.Properties config = new java.util.Properties();
            // 4-1. 호스트 정보를 검사하지 않는다.
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
            
            // 5. 접속한다.
            session.connect();
            
            boolean rtn = session.isConnected();
            
            if(!rtn) {
            	throw new Exception("Connect 오류 ");
            }
            
            // 6. 채널을 연다.
            channel = session.openChannel("exec");
         
            // 8. 채널을 SSH용 채널 객체로 캐스팅한다
            ChannelExec channelExec = (ChannelExec) channel;
            
            String strCommand = "date -s " + "'" + strYmd + " " + strDate + " '";
            
            channelExec.setCommand(strCommand);
            
            InputStream err = channelExec.getErrStream();
            
            channelExec.connect();
            
            byte[] buf = new byte[1024];
            int length;
            
            while ((length=err.read(buf))!=-1){
                logger.info(new String(buf,0,length));
            }
            
            logger.info("end");
		} catch (Exception e) {
			logger.info(e);
			throw new Exception(e);
		}finally {
            if (channel != null) {
                channel.disconnect();
            }
            if (session != null) {
                session.disconnect();
            }
        }
		
	}
	
	
	/**
	 *  Telnet 접속후 Shell 실행 
	 * 
	 * @param strHostIp   IP 주소 
	 * @param intPort     PORT 주소
	 * @param strUser     사용자
	 * @param strPasswd   패스워드 
	 * @param strExeNm    실행경로 
	 * @throws Exception 
	 */
	public static void shellCallJschExeNm(String strHostName, int intPort, String strUser, String strPasswd, String strExecNm, boolean strAsync) throws Exception {
		
		
		 Session session = null;
	     Channel channel = null;
		
		try {
		
			// 1. JSch 객체를 생성한다.
			JSch jsch = new JSch();
			
            session = jsch.getSession(strUser, strHostName, intPort);
         
            // 2. 패스워드를 설정한다.
            session.setPassword(strPasswd);
            
            // 3.타임아웃 지정 
            session.setTimeout(3000);
         
            // 4. 세션과 관련된 정보를 설정한다.
            java.util.Properties config = new java.util.Properties();
            // 4-1. 호스트 정보를 검사하지 않는다.
            config.put("StrictHostKeyChecking", "no");
            session.setConfig(config);
         
            // 5. 접속한다.
            session.connect();
         
            // 6. 채널을 연다.
            channel = session.openChannel("exec");
         
            // 8. 채널을 SSH용 채널 객체로 캐스팅한다
            ChannelExec channelExec = (ChannelExec) channel;
            
//            String strCommand = "sh " + strExecNm ;
            String strCommand = "bash -l -c 'sh " + strExecNm  + "'";
            if(strAsync) {
            	//strCommand += " &";
            }
            
            logger.info("실행문: " + strCommand);
            System.out.println("실행문: " + strCommand);
            channelExec.setCommand(strCommand);
            
            InputStream err = channelExec.getErrStream();
            
            channelExec.connect();
      
            // 실행결과 
            byte[] buf = new byte[1024];
            int length;
            
            while ((length=err.read(buf))!=-1){
            	System.out.println(new String(buf,0,length));
                logger.info(new String(buf,0,length));
            }
            
		} catch (Exception e) {
			System.out.println("오류: " + e);
			logger.info(e);
			throw new Exception(e);
		}finally {
			logger.info("end");
            if (channel != null) {
                channel.disconnect();
            }
            if (session != null) {
                session.disconnect();
            }
        }
		
	}
	
	
}
