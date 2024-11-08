package egovframework.rte.cmmn.ria.nexacroplatform.vo;

import javax.servlet.http.HttpServletRequest;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.tx.HttpPlatformRequest;

import egovframework.rte.cmmn.ria.support.XpfAdaptor;

public class NexacroPlatformAdaptorVOImp extends XpfAdaptor {

	@Override
	public Object converte4In(HttpPlatformRequest HttpPlatformRequest,
			HttpServletRequest request) {
		
		NexacroPlatformObjectDTO dto = new NexacroPlatformObjectDTO();
		PlatformData pfd = HttpPlatformRequest.getData();
		
		dto.setVariableMap(pfd.getVariableList());
		dto.setTranInfoMap(pfd.getDataSetList());
		dto.setInDataSetMap(pfd.getDataSetList());
						
		return dto;
	}

	@Override
	public Class getModelName() {
		return (new NexacroPlatformObjectDTO().getClass());
	}

}
