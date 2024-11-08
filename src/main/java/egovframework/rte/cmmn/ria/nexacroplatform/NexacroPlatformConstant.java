package egovframework.rte.cmmn.ria.nexacroplatform;

/**
 * 
 * @author yimoc@tobesoft.com
 *
 */
public class NexacroPlatformConstant {

	public static String ERROR_CODE = "ErrorCode";							//NexacroPlatform 응답 코드 ( >= 0 성공 , < 0 오류) 
	public static String ERROR_MSG 	= "ErrorMsg";							//NexacroPlatform 오류 메시지
	
	
	public final static String OUT_VARIABLES_ATT_NAME 	= "outVariables";		//out variable의 object 이름
	public final static String OUT_DATASET_ATT_NAME 	= "outDataSets";		//out DataSet의 object 이름
	
	
	public final static String TRAN_INFO_DATASET_NAME 	= "__DS_TRANS_INFO__";//NexacroPlatform과 transaction시 기본 정보를 담은 Dataset 이름
	public final static String DATASET_ROW_TYPE 		= "ROW_TYPE";				//row type을 저장하기 위한 Key value
	
	public static String PARAM = "PARAM";									//parment를 저장하기 위한 Key value
	public static String SQL_LOG = "SQL";									//qiery를 저장하기 위한 Key value
	public static String SQL_ID = "ID";										//qiery를 저장하기 위한 Key value
	

}
