package com.averedu.common.util;

import java.util.Random;

public class StringUtil {
    //private static Logger logger = Logger.getLogger(StringUtil.class);

    public static String makeStringByArray(String[] strArr, String divStr) {
        String result = "";
    	
        if(strArr == null || strArr.length < 1){
        	result = "";
        }else{
        	int length = strArr.length;
        	StringBuffer strBff = new StringBuffer();
        	for(int i = 0 ; i < length; i++){
        		if(i != 0){
        			strBff.append(divStr);
        		}
        		strBff.append(strArr[i]);
        	}
        	result = strBff.toString();
        }
        
    	return result;
    }
    
    /***
     * 난수로 생성한 문자열을 만든다.
     * @param strLength 난수를 만들 문자열의 길이
     * @return
     */
    public static String getRandomNumber(int strLength) {
        StringBuffer resultStr = new StringBuffer();
        Random random = new Random();
        for(int i = 0; i < strLength ; i++){
        	int result = random.nextInt(10);
        	resultStr.append(Integer.toString(result)); 
        }
    	return resultStr.toString();
    }
    
	/**
     * byte단위 문자 자르기
     * @param strLength 난수를 만들 문자열의 길이
     * @return
     */
   public static String getByteString(String s, int startIdx, int bytes) {
		return new String(s.getBytes(), startIdx, bytes);
	}
   
   public static String getStackTrace(Throwable e, String message)
   {
       StringBuffer sb = new StringBuffer();
       StackTraceElement element[] = e.getStackTrace();
       sb.append((new StringBuilder(String.valueOf(e.toString()))).append(":").append(message).toString()).append("\n");
       for(int i = 0; i < element.length; i++)
           sb.append("\tat ").append(element[i]).append("\n");

       return sb.toString();
   }
}
