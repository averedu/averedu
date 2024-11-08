/**
*  청호 업무 화면에서 사용하는 공통 Lib
*  @FileName 	ChJobCommon.js 
*  @Creator 	LCJ
*  @CreateDate 	2018.05.11
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.05.11     	     LCJ 	               최초 생성 
*  2018.05.14            LJH				   gfnErrorMsgM 추가
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class Error Message를 출력한다. <br>
* @param {String} errorMsg - 화면에 출력 할 사용자 에러 메시지 
*                           -20000 : 보내온 메시지 출력한다
*                           -20001 : 코드로 매핑 되며 인자별 구분자는 '#'
* @return N/A
* @example 
* this.gfnError("ORA-20000: Error Message");
* this.gfnError("ORA-20001: msg.update.success");
*/
pForm.gfnErrorMsgM = function(errorMsg){

	var defaults = {
		"system" : 'msg.err.tran',
		'20000' : 'msg.err.tran'
	}
	
	var error = pForm._gfnExtractUserErrorMsgM(errorMsg);
	
	if(!error){ // 사용자 제외 에러 참조
		this.gfnAlertM(defaults['system'], [errorMsg]);
	} else { // 사용자 에러
		var errorObject = pForm._gfnSplitErrorMsgM(error[0], error[1]);
		
		var code    = errorObject.code
		var message = errorObject.message;

		switch(errorObject.code){
			case '20000' : // 20000 Message Alert
				this.gfnAlertM(defaults['20000'], [message]);
			break;
			
			case '20001' : // 20001 Message Code, Message Values
				var msgArray = message.split('#');
				
				var errorCode = msgArray[0];
				var errorArgs = msgArray.slice(1, msgArray.length);
				
				this.gfnAlertM(errorCode, errorArgs);
			break;
			
			default : 
				this.gfnAlertM('msg.err.tran',[message]);
			break;
		}
	}
}

/**
* @class Error Message에서 사용자 에러를 추출한다. <br>
* @param {String} errMsg - 화면에서 받은 에러 메시지
* @return {Object} ret - 사용자 에러 추출 
* @example 
* this._gfnExtractUserErrorMsg("ORA-20000: Error Message");
* this._gfnExtractUserErrorMsg("ORA-20001: msg.update.success");
*/
pForm._gfnExtractUserErrorMsgM = function(errMsg){

	var ret;
    var exp = /ORA-2\d+: (.+)/;
    
    ret = errMsg.match(exp);

    if(ret){
		if(ret[1].match(exp)){
			ret = arguments.callee(ret[1]);  
		}
    };
    return ret;
}

/**
* @class 통합 된 Error Message를 분할 한다. <br>
* @param {String} error - 분할 할 에러 메시지
* @return {Object} ret - 분할 된 에러 객체 code : 에러 코드, message : 에러 메시지
* @example 
* this._gfnSplitErrorMsg("ORA-20000: Error Message");
* this._gfnSplitErrorMsg("ORA-20001: msg.update.success");
*/
pForm._gfnSplitErrorMsgM = function(error, message) {

	var ret;
	
	var errorObj     = error.split(': ');
	var errorCode    = errorObj[0].split('-')[1]; // ORA-20000일 경우 20000만 추출
	var errorMsg     = message;
	
	ret = {
		code : errorCode
		,message : errorMsg
	};
	
	return ret;
}

