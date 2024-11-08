package com.msu.common.util;
 
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.Socket;

import org.apache.log4j.Logger;
 
public class SocketUtil{
	
	private static Logger log    = Logger.getLogger(SocketUtil.class);
	
	public static String ClientRun(String strHostIp, int intPort, String data) {

        String receiveData = "";
        String msg ="";
        try{
        	Socket socket = new Socket(strHostIp, intPort);
        	
        	socket.setSoTimeout(5000);
        	log.debug("난s".getBytes().length);
        	OutputStream msgClientToServer 	= socket.getOutputStream();
        	OutputStreamWriter msgWriter 	= new OutputStreamWriter(msgClientToServer);
        	BufferedWriter msgServerSend 	= new BufferedWriter(msgWriter);            // 서버로 전송을 위한 OutputStream
        	
           	msgServerSend.write(data);													// 서버로부터 Data를 보냄
        	msgServerSend.flush();
            
        	InputStream msgServerToClient 	= socket.getInputStream();
        	InputStreamReader msgReader 	= new InputStreamReader(msgServerToClient);
        	BufferedReader msgClientReceive = new BufferedReader(msgReader);        	 
            
        	char[] readLen = new char[5];										
        	
        	msgClientReceive.read(readLen);												// 서버로부터 Data 받음 5byte length(길이를 가지고온다.)
        	int realLen = Integer.getInteger(new String(readLen));
        	realLen += 5;
        	
        	char[] readData = new char[realLen];										// 전체받은 데이타 - 5byte 빠진
        	msgClientReceive.read(readData);											 
        	
        	msg = new String(readData);													// 길이 5byte를 뺀 서버에 전문을 가기고 온다.
        	        	
        	log.debug("1.서버로부터 받은 데이터 : " + receiveData);
           
        	msgServerSend.close();
            msgWriter.close();
            msgClientToServer.close();
            msgClientReceive.close();
            msgReader.close();
            msgServerToClient.close();
            
        }catch(Exception e){
            
        	e.printStackTrace();
        }
        return msg;
	}
    
}
