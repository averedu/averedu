package egovframework.rte.cmmn.ria.support;

import javax.servlet.http.HttpServletRequest;

import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebArgumentResolver;
import org.springframework.web.context.request.NativeWebRequest;

/**
 * X-Platform ArgumentResolver 클래스
 * @author jiback
 * @since 2021.07.13
 * @version 1.0
 * @see
 *
 * <pre>
 * << 개정이력(Modification Information) >>
 *   
 *   수정일      수정자           수정내용
 *  -------    --------    ---------------------------
 *   2010.01.01  jiback          최초 생성
 *
 * </pre>
 */

public class CustomRiaArgumentResolver implements WebArgumentResolver {

	private UiAdaptor uiA;

	public void setUiAdaptor(UiAdaptor uiA) {
		this.uiA = uiA;
	}

	/**
	 * Controller의 Parameter를 읽어와 분기한다.
	 */
	public Object resolveArgument(MethodParameter methodParameter, NativeWebRequest webRequest) throws Exception {
		Class<?> type = methodParameter.getParameterType();
		Object uiObject = null;
		
		if (uiA == null)
			return UNRESOLVED;
		
		
		/*
		 * Controller 에서 처리해야 할 Argument 에 따른  Adapter 구분 방법을 확인해야 함.
		 */
		if (type.equals(uiA.getModelName())) {
			
			HttpServletRequest request = (HttpServletRequest) webRequest.getNativeRequest();
			uiObject = (Object) uiA.convert(request);
			
			return uiObject;
		}
		
		return UNRESOLVED;
	}

}
