/**
*  컨설팅 표준화 작업
*  @FileName 	Mobile.js 
*  @Creator 	hj
*  @CreateDate 	2017.11.17
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.11.17     	hj		 	           최초 생성 
*******************************************************************************
Frame.js
Message.js 
Popup.js

● gfnFormOnLoadM			: form onload 시스템 공통 함수
● gfnOpenPopupM      		: 팝업호출 
● pForm.gfnAlertM			: 메세지팝업
● pForm.gfnConvertMessageM	: 메세지 치환
*/

var pForm = nexacro.Form.prototype;

/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoadM(this);
*/
pForm.gfnFormOnLoadM = function(objForm)
{
   var arrComp = objForm.components;
   var nLength = arrComp.length;
   
   for( var i=0; i<nLength; i++)
   {
		if( arrComp[i] instanceof nexacro.Div)
		{
			this.gfnFormOnLoadM(arrComp[i].form); //재귀함수
		}
		else if( arrComp[i] instanceof nexacro.Tab )
		{
			var nPages = arrComp[i].tabpages.length;
			
			for( var j=0; j<nPages;j++)
			{			
				this.gfnFormOnLoadM(arrComp[i].tabpages[j].form); //재귀함수
			}
		}
		else
		{
			if( arrComp[i] instanceof nexacro.Grid )
			{
				this.gfnSetGrid(arrComp[i]);
			}
		}
   }
   
	//ondevicebuttonup  이벤트 팝업에 일괄 적용
	if (objForm.parent.name != "divWork" && !this.gfnIsNull(objForm.opener))
	{
		this.addEventHandler("ondevicebuttonup", this._gfnPopupDeviceBtnUp, this);
	}
	
  	// 다국어 처리
	this.gfnInitLang(objForm);
	
	// 화면 컨트롤 제어
	this._gfnSetFormCtrl(this);	
};

pForm._gfnPopupDeviceBtnUp = function()
{
	this.close();
}

/**
* value의 Function 여부 반환
* @param {*} value 확인할 value.
* @return {boolean} Function 여부.
*/
pForm.gfnIsFunction = function(value)
{
	return this._toString.call(value) === '[object Function]';
};

pForm._toString = (Object.prototype.toString);

/**
* value의 Function 유무 반환
* @param {*} value 확인할 value.
* @return {boolean} Function 유무.
*/ 
pForm.gfnExistFunction = function(sValue)
{	
	if (this[sValue] == undefined) 
	{
		return false;
	} 
	else 
	{
		if (typeof(this[sValue]) == "function")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

/**
 * @class 팝업오픈
 * @param {String} sPopupId	- 팝업ID
 * @param {String} sUrl	 - 팝업URL
 * @param {String} [oArg] - 전달값
 * @param {String} [sPopupCallback] - 팝업콜백
 * @param {Object} [oOption] - 팝업옵션 <br>
 *	oOption.top : 상단 좌표 <br>
 *	oOption.left : 좌측 좌표 <br>
 *	oOption.width : 넓이 <br>
 *	oOption.height : 높이 <br>
 *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWinddow) <br>
 *	oOption.layered : 투명 윈도우 <br>
 *	oOption.opacity : 투명도 <br>
 *	oOption.autosize : autosize <br>
 * @return N/A
 * @example
 * this.gfnOpenPopupM(this);
 */
pForm.gfnOpenPopupM = function ( sPopupId, sUrl, oArg, sPopupCallback, sOption)
{
	if (this.gfnIsNull(oArg))     oArg = {};

	//----------------------------------------------------------------
	// 팝업 Default 설정 값
	//----------------------------------------------------------------
	var popupType = "modal";		
	var nLeft   = -1;
	var nTop    = -1;
	var nWidth  = -1;
	var nHeight = -1;
	
	var bBorder     = true;
	var bShowTitle  = false;
	var bShowStatus = false;	
	var bAutoSize   = false;
	var bResizable  = false;
	var sModalSize = "";	// "", full, center //가로 세로 onsize 발생시 사이즈 및 위치 변경을 위해 추가함.
	
	var sTitleText  = "";
	
	for(var key in sOption)
	{	
		switch (key) 
		{
			case "top":				
				nTop = parseInt(sOption[key]);
				break;
			case "left":
				nLeft = parseInt(sOption[key]);
				break;
			case "width":
				nWidth = parseInt(sOption[key]);
				break;
			case "height":
				nHeight = parseInt(sOption[key]);
				break;
			case "title":
			    if( sOption[key] == "true" ) bShowTitle = true;
				break;					
			case "border":
			    if( sOption[key] == "false" ) bBorder = false;
				break;					
			case "titletext":
				sTitleText = sOption[key];
				break;			
			case "popupType":
				popupType = sOption[key];
				break;
			case "layered":
				break;
			case "autosize":
				bAutoSize = sOption[key];
				break;
			case "popupEvent":			// 팝업 이벤트 호출
				break;
		}			
	}	

	popupType = popupType.toLowerCase();

	//----------------------------------------------------------------
	// 팝업의 콜백후처리를 하기위한 설정처리 모든 팝업이 콜백함수를 사용할수있도록 처리 
	//----------------------------------------------------------------
	oArg["_CURRENT_POPUP_WINDOWID_"] = sPopupId;
	oArg["_CURRENT_POPUP_TYPE_"]     = popupType;	
	
	if (nLeft == -1 && nTop == -1) 	
	{
		if (nWidth == -1 && nHeight == -1) 	//l,t,w,h 모두 기입하지 않으면 full
		{
			sModalSize = "full";
		}
		else 
		{
			sModalSize = "center";
		}
	}
	
	if (nLeft == -1)
	{
		nLeft = 0;
		if (nWidth > 0) 
		{
			nLeft =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
		} 
	}
	
	if (nTop == -1)
	{
		nTop = 0;
		if (nHeight > 0) 
		{
			nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) ;
		}
	}
	
	if (nWidth == -1 || nWidth > nexacro.getApplication().mainframe.width)
	{	
		nWidth = nexacro.getApplication().mainframe.width;
	}
	
	if (nHeight == -1 || nHeight > nexacro.getApplication().mainframe.height)
	{
		nHeight = nexacro.getApplication().mainframe.height;
	}
	
	//trace("==gfn_openPopup:  sModalSize: " +sModalSize);
	//trace("==gfn_openPopup:  nLeft : " + nLeft + " nTop : " + nTop + " nWidth : " + nWidth + " nHeight : " + nHeight);
		
    if (popupType == "modeless") 
    {
		var sOpenStyle = "showtitlebar=true ";

		if(!this.gfnIsNull(sOption))
		{
			for(var key in sOption)
			{
				sOpenStyle += key +"="+ sOption[key] + " ";
			}
		}

		nexacro.open(sPopupId, sUrl, this.getOwnerFrame(), oArg, sOpenStyle.trim(), 0, 0, nWidth, nHeight);			
		return;
    }
    
	if(bShowTitle == true) nHeight += 50;	
	
	var newChild = new ChildFrame(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
	
	newChild._modaltype = sModalSize;
	//trace("_modaltype: "+newChild._modaltype);

// 	var borderVal = "2 solid #7c868dff";
// 	if(!bBorder) borderVal = "0 none #7c868dff";

	newChild.set_showtitlebar(bShowTitle);
	newChild.set_autosize(bAutoSize);
	newChild.set_resizable(bResizable);
	newChild.set_titletext(sTitleText);
	newChild.set_showstatusbar(false);
	//newChild.set_openalign(sOpenAlign);
	newChild.set_dragmovetype("none");
			
	// border 설정
	//newChild.set_border(borderVal);
	newChild.set_background("white");
	newChild.set_titlebarheight(50);

	newChild.showModal(sPopupId, this.getOwnerFrame(), oArg, this, function(svcid, variant) {
		if(!this.gfnIsNull(sPopupCallback))	
		{
			var p_variant = this.gfnIsNull(this._variant) ? variant : this._variant;
			this._variant = "";
			
			if(typeof sPopupCallback == "function" )
			{
				sPopupCallback.call(this, sPopupId, p_variant);
			}
			else if(typeof sPopupCallback == "string")
			{
				if(!this.gfnIsFunction(this[sPopupCallback]))return;
				this[sPopupCallback].call(this, sPopupId, p_variant);
			}
		}
	});
};

/**
 * @class	팝업 닫기 close()는 string만 리턴 되므로 공통함수로 처리함
 * @param	{object} variant : 부모 창으로 리턴되는 object
 * @return	N/A
 */
pForm.gfnClose = function(variant)
{
	if(this.opener && typeof variant !="string")
	{
		variant = this.gfnIsNull(variant) ? "" : variant;
		this.opener._variant = variant;
		this.close();
	}
	else
	{
		this.close(variant);
	}
};

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @param {String} [sPopId] - 팝업ID(하나의 callback함수에서 중복된 메시지 처리를 할 경우 PopId구분을 위해 unique한 ID 반드시 사용)
 * @param {String} [sCallback] - 팝업콜백 (confirm성 메시지를 사용시 반드시 필요)
 * @return N/A
 * @example
 * this.gfnAlertM(this, "A", "확인하세요");	
 */
pForm.gfnAlertM = function ( sMsgId, arrArg, sPopId, sCallback)
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
	sMsg =  pForm.gfnConvertMessageM(sMsg, arrArg);
	
	var sMsgType = objApp.gdsMessage.lookup("MSGE_CD", sMsgId, "MSGE_FLAG_CD");	
	if( this.gfnIsNull(sPopId) ) sPopId = sMsgId;
	
	var sMsgUrl ="";
	switch(sMsgType) {
		case "A":
			sMsgUrl = "cmmM::cmmAlert.xfdl";
			break;
		case "C":
			sMsgUrl = "cmmM::cmmConfirm.xfdl";
			if(this.gfnIsNull(sCallback)) trace("callback함수를 지정하지 않았습니다");
			break;
	}
	
	var oArg = {paramContents:sMsg};
	var oOption = {title:"false", width:600,height:454};	
	
	// messagePopup
	if (nexacro.getEnvironmentVariable("evMessagePopup") == "true") {
		this.gfnOpenPopupM(sPopId,sMsgUrl,oArg,sCallback,oOption);
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
pForm.gfnConvertMessageM = function(msg, values) {
    return msg.replace(/\{(\d+)\}/g, function() {
        return values[arguments[1]];
    });
};

/**
 * @class 파라미터 setter
 * @param {String} id
 * @param {String} val
  * @return {String}
 */
pForm.gfn_setParam = function(id, val)
{	
	if (nexacroApp.gds_arguments.findRow("arg_id", id) < 0) 
	{
		var nRow = nexacroApp.gdsArguments.addRow();
		nexacroApp.gdsArguments.setColumn(nRow, "arg_id", id);
		nexacroApp.gdsArguments.setColumn(nRow, "arg_value", val);
    }
	else
	{
		var nRow = nexacroApp.gdsArguments.findRow("arg_id", id, -1);
		nexacroApp.gdsArguments.setColumn(nRow, "arg_value", val);
    }
}

/**
 * @class 파라미터 getter
 * @param {String} id
 * @return {String}
 */
pForm.gfn_getParam = function(id)
{
    return nexacroApp.gds_arguments.lookup("arg_id", id, "arg_value");
}
