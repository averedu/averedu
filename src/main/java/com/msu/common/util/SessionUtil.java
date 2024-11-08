package com.msu.common.util;

import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.ModelAndView;

import com.msu.common.vo.SessionVO;

import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;

/**
 * <PRE>
 * 세션을 관리하는 유틸이다. SessionVO를 HttpSession에 get/set 한다.
 * </PRE>
 * @date     : 2021.07.13
 * @author   : jiback
 * @hostory : 
 */
public class SessionUtil {
    
    private static final String SESSION_VO = "sessionVO";
    
    public static SessionVO getSessionVO(HttpSession session) {
    	return (SessionVO)session.getAttribute(SESSION_VO);
    }
    
    public static void setSessionVO(HttpSession session, SessionVO sessionVO) {
        session.setAttribute(SESSION_VO, sessionVO);
    }
    
    public static ModelAndView commCatchException(ModelAndView mav, SessionVO sessionVO,Exception e) {
    	
    	if (sessionVO == null) {
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-99");                                            
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString()); 
		} else {
			mav.addObject(NexacroPlatformConstant.ERROR_CODE, "-1");                                            
			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString());  
		}
    	return mav;
    }
}
