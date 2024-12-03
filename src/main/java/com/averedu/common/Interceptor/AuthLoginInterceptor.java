package com.averedu.common.Interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import com.averedu.common.util.SessionUtil;
import com.averedu.common.vo.SessionVO;
import com.nexacro.uiadapter17.spring.core.NexacroException;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class AuthLoginInterceptor extends HandlerInterceptorAdapter{
	  
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	// preHandle() : 컨트롤러보다 먼저 수행되는 메서드
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
    	// session 객체를 가져옴
        HttpSession session = request.getSession();
        // login처리를 담당하는 사용자 정보를 담고 있는 객체를 가져옴
        SessionVO sessionVO = SessionUtil.getSessionVO(session);

        logger.debug("Controller [" + request.getRequestURI() + "]");
        
        if ( sessionVO == null ){
        	
        	NexacroException ne = new NexacroException();
            ne.setErrorCode(-9998);  
            throw ne;
                                                                  		
        }
          
        return true;
    }
  
    // 컨트롤러가 수행되고 화면이 보여지기 직전에 수행되는 메서드
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        // TODO Auto-generated method stub
        super.postHandle(request, response, handler, modelAndView);
    }     
}