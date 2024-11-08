package egovframework.rte.cmmn.ria.nexacroplatform.vo;

import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.view.AbstractView;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;

import egovframework.rte.cmmn.ria.nexacroplatform.ConvertDataType;
import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;

/**
 * Object 형태의 DTO 들을 XPlatform Data에 맞게 변경하는 View
 * 
 * @author yimoc@tobesoft.com
 * 
 */
public class NexacroPlatformObjectView extends AbstractView {

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		PlatformData platformData = new PlatformData();
		VariableList outVariableList = new VariableList();
		DataSetList outDatasetList = new DataSetList();

		setResult(model, outVariableList);
		setOutVariableMap(model, outVariableList);
		setOutDataSetMap(model, outDatasetList);

		platformData.setVariableList(outVariableList);
		platformData.setDataSetList(outDatasetList);

		HttpPlatformResponse hPlatformRsp = new HttpPlatformResponse(response);
		hPlatformRsp.setCharset(PlatformType.DEFAULT_CHAR_SET);
		hPlatformRsp.setData(platformData);
		hPlatformRsp.sendData();
	}

	/**
	 * 결과 값을 세팅한다.
	 * 
	 * @param model
	 * @param variabeList
	 */
	private void setResult(Map<String, Object> model, VariableList variabeList) {
		variabeList.add(NexacroPlatformConstant.ERROR_CODE,
				(String) model.get(NexacroPlatformConstant.ERROR_CODE));
		variabeList.add(NexacroPlatformConstant.ERROR_MSG,
				(String) model.get(NexacroPlatformConstant.ERROR_MSG));
	}
	
	/**
	 * 
	 * @param model
	 * @param variabeList
	 */
	public void setOutVariableMap(Map<String, Object> model, VariableList variabeList) {
		Map<String, Object> map = (Map<String, Object>) model .get(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME);

		if (map == null)
			return;
		Set<String> keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			String key = iter.next();
			Object value = map.get(key);
			Variable var = makeVariable(key, value);
			variabeList.add(var);
		}
	}

	protected Variable makeVariable(String name, Object value) {
		Variable var = new Variable(name);
		int dataType = ConvertDataType.getPlatformDataType(value);
		var.setType(dataType);
		var.set(value);
		return var;
	}

	/*
	 * 
	 */
	public void setOutDataSetMap(Map<String, Object> model, DataSetList dataSetList) {
		// 여러개의 Datast으로 이루어져있다.
		Map <String, DataSetObject> map = (Map <String, DataSetObject>) model.get(NexacroPlatformConstant.OUT_DATASET_ATT_NAME);
		DataSetObject transInfo = (DataSetObject) map.get(NexacroPlatformConstant.TRAN_INFO_DATASET_NAME);
		
		if (map == null || transInfo == null ){
			return;
		}
		for (int i = 0; i < transInfo.size(); i++) {
			NexacroPlatformTransactionVO mappingVO = (NexacroPlatformTransactionVO) transInfo.get(i);
			String datasetName = mappingVO.getStrOutDataset();				
			String voName = mappingVO.getStrOutVOClass();
			
			DataSetObject obj = map.get(datasetName);				//Dataset이름으로 Object 가져오기
			DataSet ds = new DataSet(datasetName);
			obj.convertDatSetObject2DataSet( ds, voName);
			dataSetList.add(ds);
		}				
	}
	

	
	
}
