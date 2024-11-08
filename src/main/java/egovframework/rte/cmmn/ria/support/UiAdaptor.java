package egovframework.rte.cmmn.ria.support;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;

/**
 * NexacroPlatform UiAdaptor interface
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

public interface UiAdaptor {

	public Object convert(HttpServletRequest request) throws Exception;

	public Class getModelName();
}
