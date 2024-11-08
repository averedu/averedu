package com.msu.common.exception;

import org.apache.log4j.Logger;

public class CommException extends Exception {
	
	final private Logger log = Logger.getLogger(this.getClass());
	
    /**
	 * 
	 */
    private final long serialVersionUID = 7141069409444514472L;

    /*
     * public CommException(String message) { super(message); }
     */

    String errCode = "";
    /***
     * 에러 코드만 넘기는 입셉션
     * @param errMessage
     */
    public CommException(String errMessage) {
        super(errMessage);
        this.errCode = "9999";
    }

    /**
     * 
     * @param errCode
     * @param errMessage
     */
    public CommException(String errCode, String errMessage) {
    	super(errMessage);
        this.errCode = "-9995";
        
        log.info("errCode >> "+errCode);
    }    

    /**
     * 단어 코드용 입셉션 
     * @param nexaCode	넥사크로 에러코드 (무조건 음수로 표시)
     * @param msgCode	메시지 코드
     * @param convertStr	단어코드 조합('^'로 구분)
     */
    public CommException(String nexaCode, String msgCode, String convertStr ) {
        //super(msgCode + "|" + convertStr);
    	super(msgCode);
        this.errCode = nexaCode;
    }
    
    public String getErrCode() {
        return errCode;
    }

}
