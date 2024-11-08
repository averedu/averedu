package com.msu.common.util;

import org.jasypt.encryption.pbe.StandardPBEStringEncryptor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class EncryptTool {

	private static final Logger logger = LoggerFactory.getLogger(EncryptTool.class);
	
	public static void main(String[] args) {
		
		// TODO Auto-generated method stub
		StandardPBEStringEncryptor encryptor = new StandardPBEStringEncryptor();
		encryptor.setAlgorithm("PBEWithMD5AndDES");
		encryptor.setPassword("msu");
		
		// saltGenerator를 지정하지 않으면 RandomSaltGenerator를 default로 사용한다.
        // sandom salt를 사용하는 경우는 암호화된 결과 값이 매번 바뀐다.
        // StringFixedSaltGenerator를 사용해 고정된 salt값을 지정하면 암호화된 결과 값이 고정돼서 반환된다.
		// encryptor.setSaltGenerator(new StringFixedSaltGenerator("someFixedSalt"));

		
		// DB 연결암호화 pbeEnc.setPassword("msu"); 패스워드별로 관리해야할듯!!!!!
		
		String driverClass = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String url = "jdbc:sqlserver://30.111.100.100:1433;DatabaseName=dev_app";
		String userName = "brmanager1";
		String password = "brmanager12!@";
		
		logger.debug("기존  driverClass :: " + driverClass + " | 변경 driverClass :: " + encryptor.encrypt(driverClass));
		logger.debug("기존  URL :: " + url + " | 변경 URL :: " + encryptor.encrypt(url));
		logger.debug("기존  username :: " + userName + " | 변경 username :: " + encryptor.encrypt(userName));
		logger.debug("기존  password :: " + password + " | 변경 password :: " + encryptor.encrypt(password));
		
		// 암복호화
		//String str = "testString"; 
		//String encStr = encryptor.encrypt(str); 
		//String decStr = encryptor.decrypt("FPvCC3HurME/5hqNSJl8lNU13SKAdtVgd7aYg+/64c+rwhFB/HPV7qtoYLaSld3+5+PPPLlPd5Q="); 
		//logger.debug(str);
		//logger.debug(encStr);
		//logger.debug(decStr);
		
		String driverClassOrder = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
		String urlOrder = "jdbc:sqlserver://10.111.10.198:1888;DatabaseName=COMMDB";
		String userNameOrder = "br1";
		String passwordOrder = "br1";
		
		logger.debug("기존  driverClass :: " + driverClass + " | 변경 driverClass :: " + encryptor.encrypt(driverClassOrder));
		logger.debug("기존  URL :: " + url + " | 변경 URL :: " + encryptor.encrypt(urlOrder));
		logger.debug("기존  username :: " + userName + " | 변경 username :: " + encryptor.encrypt(userNameOrder));
		logger.debug("기존  password :: " + password + " | 변경 password :: " + encryptor.encrypt(passwordOrder));
				
		// 암복호화
		//String str1 = "testString"; 
		//String encStr1 = encryptor.encrypt(str); 
		//String decStr1 = encryptor.decrypt("FPvCC3HurME/5hqNSJl8lNU13SKAdtVgd7aYg+/64c+rwhFB/HPV7qtoYLaSld3+5+PPPLlPd5Q="); 
		//logger.debug(str1);
		//logger.debug(encStr1);
		//logger.debug(decStr1);

	}

}
