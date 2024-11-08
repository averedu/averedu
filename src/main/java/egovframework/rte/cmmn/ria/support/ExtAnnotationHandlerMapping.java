package egovframework.rte.cmmn.ria.support;

import java.util.ArrayList;

import org.springframework.util.StringUtils;
import org.springframework.web.servlet.mvc.annotation.DefaultAnnotationHandlerMapping;

/**
 * nexacroPlatform HandlerMapping 클래스
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
                                                 
public class ExtAnnotationHandlerMapping extends DefaultAnnotationHandlerMapping {

	private ArrayList<String> _urls;
	private String rule;


	public void setUrls(ArrayList<String> urls) {
		this._urls = urls;
	}


	public void setRule(String rule) {
		this.rule = rule;
	}

	@Override
	protected String[] determineUrlsForHandler(String s) {

		String[] mappingUrls = super.determineUrlsForHandler(s);
		return applyTheFilter(mappingUrls);
	}

	protected String[] applyTheFilter(String[] mappingUrls) {
		
		if (mappingUrls == null)
			return mappingUrls;
		ArrayList<String> retUrls = new ArrayList<String>();

		for (String url : mappingUrls) {
			if ("select".equalsIgnoreCase(this.rule)) {
				if (_urls.contains(url))
					retUrls.add(url);
			} else if ("ignore".equalsIgnoreCase(this.rule)) {
				if (!_urls.contains(url))
					retUrls.add(url);
			}
		}

		String[] tList = StringUtils.toStringArray(retUrls);

		return tList;

	}

}
