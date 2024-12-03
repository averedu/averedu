package com.averedu.common.exception;

public class CommSessionExpiredException extends CommException {

    /**
	 * 
	 */
    private final long serialVersionUID = -6895203781254655182L;

    /*
     * public CommException(String message) { super(message); } 
     */

    String errCode = "";
    
    public CommSessionExpiredException(String errMessage) {
        super(errMessage);
        this.errCode = "-9998";
    }

    public CommSessionExpiredException(String errCode, String errMessage) {
        super(errMessage);
        this.errCode = errCode;
    }
    
    public String getErrCode() {
        return errCode;
    }

}
