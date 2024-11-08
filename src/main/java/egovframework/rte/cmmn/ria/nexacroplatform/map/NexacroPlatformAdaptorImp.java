package egovframework.rte.cmmn.ria.nexacroplatform.map;

import javax.servlet.http.HttpServletRequest;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.rte.cmmn.ria.support.XpfAdaptor;
/**
 * 
 * @author yimoc@tobesoft.com
 *
 */
public class NexacroPlatformAdaptorImp extends XpfAdaptor {

	@Override
	public Object converte4In(HttpPlatformRequest httpPlatformRequest,
			HttpServletRequest request) {
		
		NexacroPlatformMapDTO dto = new NexacroPlatformMapDTO();
		PlatformData pfd = httpPlatformRequest.getData();
		
		dto.setVariableMap(pfd.getVariableList());
		dto.setTranInfoMap(pfd.getDataSetList());
		dto.setInDataSetMap(pfd.getDataSetList());
						
		return dto;
	}

	@Override
	public Class getModelName() {
		return (new NexacroPlatformMapDTO().getClass());
	}

}
