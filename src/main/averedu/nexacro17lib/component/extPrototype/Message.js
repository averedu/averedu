/**
*  컨설팅 표준화 작업
*  @FileName 	Message.js 
*  @Creator 	soojeong
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	soojeong 	           최초 생성 
*  2017.10.17     	soojeong  	           주석 정비
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example
 * this.gfnAlert(this, "A", "확인하세요");	
 */
pForm.gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
{
    var objApp = nexacro.getApplication();
	if(objApp.gdsMessage.findRow("MSGE_CD", sMsgId) < 0) return false;

	// 다국어 처리
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	var sColumn  = "KORN_MSGE";
	if (sNowLang != "KO") {
		//sColumn = sColumn + sNowLang;
		sColumn = "ENGL_MSGE";	// 영문메시지
	}
	
	var sMsg = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, sColumn);

	if( this.gfnIsNull(sMsg) ) sMsg = "확인";
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfnConvertMessage(sMsg, arrArg);
	
	var sMsgType = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "MSGE_FLAG_CD");	
	if( this.gfnIsNull(sPopId) ) sPopId = sMsgId;
	
	var sMsgUrl ="";
	switch(sMsgType) {
		case "A":
			sMsgUrl = "cmm::cmmAlert.xfdl";
			break;
		case "C":
			sMsgUrl = "cmm::cmmConfirm.xfdl";
			if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
			break;
	}
	
	var oArg = {paramContents:sMsg};
	var oOption = {titlebar:"false"};	

	// messagePopup
	if (nexacro.getEnvironmentVariable("evMessagePopup") == "true") {
		if (sMsgType == "A") {
			if(system.navigatorname == "nexacro") {
				oOption = {titlebar:"false", popuptype:"modalsync"};	
			} else {
				oOption = {titlebar:"false", popuptype:"modal"};	
			}
		}
		this.gfnOpenPopup(sPopId,sMsgUrl,oArg,sCallback,oOption);
	}
	// alert-cofirm
	else {
		if (sMsgType == "A") {
			alert(sMsg);
		}
		else {
			confirm(sMsg);
		}
	}
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnConvertMessage = function(msg, values) 
{
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};

/**
 * @class 메세지 치환 후 완성된 메시지 리턴
 * @param {String} sMsgId - 메세지ID	
 * @param {Array}  arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnGetMessage = function(sMsgId, arrArg) 
{
    var objApp = nexacro.getApplication();
	if(objApp.gdsMessage.findRow("MSGE_CD", sMsgId) < 0) return false;

	// 다국어 처리
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	var sColumn  = "KORN_MSGE";
	if (sNowLang != "KO") {
		sColumn = "ENGL_MSGE";	// 영문메시지
		//sColumn = sColumn + sNowLang;
	}
	
	var sMsg = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, sColumn);

	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfnConvertMessage(sMsg, arrArg);
	
	return sMsg;
};