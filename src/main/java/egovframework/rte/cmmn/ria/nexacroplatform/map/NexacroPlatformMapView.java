package egovframework.rte.cmmn.ria.nexacroplatform.map;

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
 * Map 형태의 DTO 들을 XPlatform Data에 맞게 변경하는 View
 * 
 * @author yimoc@tobesoft.com
 * 
 */
public class NexacroPlatformMapView extends AbstractView {

	@Override
	protected void renderMergedOutputModel(Map<String, Object> model,HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		//logger.debug("NexacroPlatformMapView.renderMergedOutPutModel() start%%%");
		PlatformData platformData = new PlatformData();
		VariableList outVariableList = new VariableList();
		DataSetList outDatasetList = new DataSetList();

		setResult(model, outVariableList);
		setOutVariableMap(model, outVariableList);
		setOutDataSetMap(model, outDatasetList);
		
		platformData.setVariableList(outVariableList);
		platformData.setDataSetList(outDatasetList);

		//logger.info(platformData.saveXml());

		HttpPlatformResponse hPlatformRsp = new HttpPlatformResponse(response);
		hPlatformRsp.setCharset(PlatformType.DEFAULT_CHAR_SET);
		hPlatformRsp.setData(platformData);
		hPlatformRsp.sendData();
	}

	/**
	 * 결과 값을 셋팅한다.
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
	 * Map<String, List<Map>>
	 */
	public void setOutDataSetMap(Map<String, Object> model, DataSetList dataSetList) {
		// 여러개의 Datast으로 이루어져있다.
		Map <String, DataSetMap> map = (Map <String, DataSetMap>) model.get(NexacroPlatformConstant.OUT_DATASET_ATT_NAME);
		if (map == null)
			return;
		Set keySet = map.keySet();
		Iterator<String> iter = keySet.iterator();
		while (iter.hasNext()) {
			// 하나의 DataSet으로 이루어진 정보(List)를 꺼낸다.
			String dsName = iter.next();
			//DataSetMap dsMap = new DataSetMap();
			DataSetMap dsMap= map.get(dsName);
			DataSet ds = new DataSet(dsName);
			setDataSet(dsMap, ds);
			dataSetList.add(ds);
		}

	}

	/**
	 * List 형태의 Map 정보를 이용하여 하나의 Dataset의 데이터를 세팅한다.
	 * 
	 * @param datasetInfo
	 * @param ds
	 */
	private void setDataSet(DataSetMap datasetInfo, DataSet ds) {
		int rowIndex = 0;
		for (int i = 0; i < datasetInfo.size(); i++) {
			rowIndex = ds.newRow();
			Set keySet = datasetInfo.getKeySet(i);
			Iterator<String> iter2 = keySet.iterator();
			while (iter2.hasNext()) {
				String key = iter2.next();
				Object value = datasetInfo.getMapValue(i, key);
				if (ds.getColumn(key) == null) {
					ds.setChangeStructureWithData(true);
					ds.addColumn(key, ConvertDataType.getPlatformDataType(value));
				}
				ds.set(rowIndex, key, value);
			}
		}
	}


}
