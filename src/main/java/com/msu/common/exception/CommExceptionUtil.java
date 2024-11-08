package com.msu.common.exception;

import java.lang.reflect.UndeclaredThrowableException;
import java.sql.SQLException;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.NestedServletException;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;

public class CommExceptionUtil {

	/**
	 * 
	 * @param exception
	 * @param outputDsm
	 */
    static public void setError(Exception exception, ModelAndView mav) {

    	if (exception instanceof CommException) {
    		String errCode = ((CommException) exception).getErrCode();
    		String errMsg  = ((CommException) exception).getMessage();
    		if(errCode == null)
    		{
    			errCode= "-1";
    		}
    		
    		if(errMsg == null)
    		{
    			errMsg= exception.getMessage(); 
    		}
    		
        	mav.addObject(NexacroPlatformConstant.ERROR_CODE, errCode);                                            
			mav.addObject(NexacroPlatformConstant.ERROR_MSG,  errMsg); 
            
        }  else if ((exception instanceof SQLException) &&
                (exception.getMessage().indexOf("ORA-") >= 0)) {
         String msg = exception.getMessage(); 
         mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-9997");    
         mav.addObject(NexacroPlatformConstant.ERROR_MSG,  msg); 
        } else {
            Throwable throwable = exception.getCause();
            String msg = exception.getMessage(); 
            
            if ((exception instanceof CommException)     ||
                (exception instanceof NestedServletException)      ||
                (exception instanceof UndeclaredThrowableException)) {
            	
                setError((Exception) throwable, mav);
                
            } else {
                mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-9999");
                mav.addObject(NexacroPlatformConstant.ERROR_MSG,  msg); 
                
            }
        }

    }
    
    static public void setError1(ModelAndView mav, SessionVO sessionVO) {

        if (sessionVO == null) { 
        	mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-9998");
        } 

    }
}
