var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
  글로발 APP에 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_formOnload    		: 폼이 로드시 관련된함수 처리
 ● gfn_CompontOnkeydown    : 키 다운(Debug) 이벤트를 단축키를 사용시(ctrl + Q)
 ● gfn_popupCallback    	: Debug(Debug)디버거 Popup callback 영역  
 ● gfn_searchAddress    	: 주소검색 팝업을 오픈하여 주소검색 후 주소값을 넘겨준다.
 ● gfn_setBottomLog    	: 아래(BoTTom)상태값을 찍을시 사용하는 함수.
 ● gfn_componentKeyControl : 각종 Component(컴포넌트에 이벤트를 제어 시 사용함.= 재귀호출을 한다.)
 ● gfn_CompontOnkeyup      : Edit,MaskEdit keyup 할때 공통의 바로 조회 이벤트를 적용하는 함수(조회조건에) 
 ● gfn_componentGridControl: 모든 grid 각종 Component(컴포넌트에 이벤트를 제어 시 사용함.= 재귀호출을 한다.)
 ● gfn_rMateChartXmlEncoder: 문자열을 환경에 Xml 인코딩
 ● gfn_getSvrDate          : 포맷에 맞는 날짜를 실시간으로 가지고 오는 함수
 */
/**********************************************************************************
 * Function Name: gfn_formOnload
 * Description  : 폼이 로드시 관련된 함수 처리
 * Arguments    : obj -> this(현재사용하는 폼)
				  e   -> e(현재사용하는 폼에 이벤트핸들러)	
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_formOnload = function(obj, e)
{
   	this.addEventHandler("onkeydown",this.gfn_CompontOnkeydown,obj);		// 폼(form) 디버거(debug팝업실행)를 단축키로 셋팅 (ctrlkey + Q)
	this.gfn_componentGridControl(this);                    				// 그리드에 공통으로 사용할 기본속성을 셋팅 (해들를 누를시 툴메뉴 처리) 
	
   /*
   if(this.gfn_isNull(this.opener))          								// 팝업은 제외
    {
        if(this.parent.name == "div_Work")
        {
            var strTitle = "";
            if(!this.gfn_isNull(this.parent.parent.pv_menuTitle))
            {
                strTitle = this.parent.parent.pv_menuTitle;
            }
      
            if(!this.gfn_isNull(this.staTitleNm)) 							// 타이틀바가 있는지 없는지를 체크
            {
                this.staTitleNm.set_text(strTitle); 						// 타이틀바셋팅
            
			}else
            {
				var objStatic = new Static()
				ojbStatic.init("staTitleNm",5,5,450,22,null,null);
				this.addChild("staTitleNm",objStatic);

				objStatic.show();
				this.staTitleNm.set_text(strTitle);
				this.staTitleNm.set_cssclass("sta_WF_Title01");
			}
		}
	}
	*/
	/*
	if(this.isValidObject(this.divSearch))                  				// 객체가 있을시 처리(객체유무체크)
	{
		this.gfn_componentKeyControl(this.divSearch.form);    				// 조회에 엔터처리시 조회처리(ENTER)처리 
	}
  	*/

	//각 컴포넌트 타이틀 다국어처리시 사용
	//this.gfn_setTitle();
	// 화면의 callBack 함수 실행
	//try{
		// 폼로드시 동일하게 호출하는 함수를 사용할때(유저요구사항이 필요시사용.) 	
		// this.lookupFunc("fn_formInit").call(obj, e);
	//} catch(e){
	//}
};

/*******************************************************************************
 * Function Name  : this.gfn_CompontOnkeydown(obj,e)
 * Description    : 키 다운(Debug) 이벤트를 단축키를 사용시(ctrl + Q)
 * Arguments      : obj(this) = > Form
                    e         = > Event
 * Return(String) : N/A
 *******************************************************************************/ 
pForm.gfn_CompontOnkeydown = function(obj,e)
{
	if(e.ctrlkey)
	{
		if(e.keycode == 81)
		{
			var oArg 	= {};
			var oOption = {};	
			var sPopupCallBack = "gfn_popupCallback";
			this.gfn_openPopup( "COMM000014P"
			                   ,"com::COMM000014P.xfdl"
							   ,oArg
							   ,sPopupCallBack
							   ,oOption);	
		}
	}
};

/*******************************************************************************
 * Function Name  : this.gfn_popupCallback(strId,strVal)
 * Description    : 팝업 콜백 함수
 * Arguments      : String = > strId (팝업 서비스아이디)
                    Array  = > strVal(팝업 파라미터)
 * Return(String) : N/A
 *******************************************************************************/ 
pForm.gfn_popupCallback = function(strId, strVal)
{

	switch(strId)
	{
		case "COMM000014P" :	
				trace(" strId : " + strId + " strVal : " + strVal);	
			break;
		default	:				
			break;
	}
};

/*******************************************************************************
 * Function Name  : this.gfn_searchAddress(callbackFunc)
 * Description    : 주소검색 팝업을 오픈하여 주소검색 후 주소값을 넘겨준다.
 * Arguments      : callbackFunc : 콜백 함수 선언
                  , dsOpt 		 : 주소검색 시 옵션으로 사용할 데이터셋(현재는 사용하지 않지만 나중에)
 * Return(String) : null (리턴값은 콜백에서 처리 함) 
 *******************************************************************************/  
pForm.gfn_searchAddress = function (callbackFunc) 
{
	var oArg            = {};
	var oOption 		= {};
	this.gfn_openPopup( "openAddr"
	                  , "com::COMM000010P.xfdl"
					  , oArg
					  , callbackFunc
					  , oOption);
}; 

/*******************************************************************************
 * Function Name  : this.gfn_setBottomLog(sLog)
 * Description    : 아래상태값을 찍을시 사용하는 함수.
 * Arguments      : sLog - 상태파에 내용을 찍을시 사용
 * Return(String) : N/A
 *******************************************************************************/ 
pForm.gfn_setBottomLog = function(sLog)
{
	objApp.gv_appBottomFrame.form.staCopyRight.set_text(sLog);
};

/*******************************************************************************
 * Function Name  : this.gfn_componentKeyControl(comObj)
 * Description    : 각종 Component(컴포넌트에 이벤트를 제어 시 사용함.=재귀호출을 한다.)
 * Arguments      : comObj - objs(전체 컴포넌트)
 * Return(objs)   : this.gfn_componentKeyControl(comObj) 
 *******************************************************************************/ 
pForm.gfn_componentKeyControl = function(comObj)
{
	try{
		var arrComp = comObj.components;
		var nLength = arrComp.length;
		for(var i=0; i < nLength; i++)
		{
			var sCompo = arrComp[i];
			if(sCompo instanceof nexacro.Edit || sCompo instanceof naxacro.MaskEdit)
			{
				if(this.gfn_isNull(sCompo.onkeyup))
				{
					sCompo.addEventHandler("onkeyup",this.gfn_CompontOnkeyup,this);
				}
			}
      
			if(sCompo instanceof nexacro.Div || sCompo instanceof nexacro.PopupDiv)
			{
				this.gfn_componentKeyControl(sCompo.form);
			}else if(sCompo instanceof nexacro.Tab)
			{
				var nPages = sCompo.tabpages.length;
				for(var j=0; j<nPages; j++)
				{
					this.gfn_componentKeyControl(sCompo.tabpages[j].form) //재귀함수
				}
			}
		}
    
	}catch(e) {
		trace("errorCode : " + e.name + " / errorMessage : " + e.message);
	}
};

/*******************************************************************************
 * Function Name  : this.gfn_CompontOnkeyup(obj,e)
 * Description    : Edit,MaskEdit keyup 할때 공통의 바로 조회 이벤트를 적용하는 함수(조회조건에) 
 * Arguments      : obj - compont(자기자신 컴포넌트)
                  , e   - keyup event(키업 이벤트) 
 * Return(objs)   : N/A
 *******************************************************************************/ 
pForm.gfn_CompontOnkeyup = function(obj,e)
{
	//this.divSearch.form.btnSearch.click();
	/*
	if(!this.gfn_isNull(String(this["fn_Search"]))) //함수유무체크
	{
		this.fn_Search();
	}
	*/
};

/*******************************************************************************
 * Function Name  : this.gfn_componentGridControl(comObj)
 * Description    : 각종 Component(컴포넌트에 이벤트를 제어 시 사용함.=재귀호출을 한다.)
 * Arguments      : comObj - objs(전체 컴포넌트)
 * Return(objs)   : this.gfn_componentGridControl(comObj) 
 *******************************************************************************/  
pForm.gfn_componentGridControl = function(comObj)
{
	try{
		var arrComp = comObj.components;
		var nLength = arrComp.length;
		for(var i=0; i < nLength; i++)
		{
			var sCompo = arrComp[i];
			if(sCompo instanceof nexacro.Grid)
			{
				this.gfn_setGrid(sCompo);                                // = > nxGrid있는 공통함수로 이동함.
			}
      
			if(sCompo instanceof nexacro.Div || sCompo instanceof nexacro.PopupDiv)
			{
				this.gfn_componentGridControl(sCompo.form);             //재귀함수
      
			}else if(sCompo instanceof nexacro.Tab)
			{
				
				var nPages = sCompo.tabpages.length;
				for(var j=0; j<nPages; j++)
				{
					
					this.gfn_componentGridControl(sCompo.tabpages[j].form) //재귀함수
				}
			}
		}
	} catch(e) {
		
		trace("errorCode : " + e.name + " / errorMessage : " + e.message);
	}
};

/*******************************************************************************
 * Function Name  : this.rMateChartEncode(str)
 * Description    : 문자열을 환경에 Xml 인코딩
 * Arguments      : str 문자열
 * Return(String) : xml 인코딩 
 *******************************************************************************/  
pForm.gfn_rMateChartXmlEncoder = function(str) 
{
	var ret = "";
	if (str != null && str.length > 0)
	{
		ret = str.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;");
	}
	return ret;
};

/*******************************************************************************
 * Function Name  : this.gfn_getSvrDate(strFormat)
 * Description    : 포맷에 맞는 날짜를 실시간으로 가지고오는 함수
 * Arguments      : String => strFormat
                  , "YYYY"              2020                       
				  ,	"YYYYMMDD"          20200624                 
				  ,	"KOR_YYYYMMDD"      2020.06.24 수요일                 
				  ,	"YYYYMM"            202006                    
				  ,	"MMDD"              0624                    
				  ,	"MM"                06                       
				  ,	"DD"                24                       
				  ,	"MONTH_FIRST_DAY"   20200601      
				  , "MONTH_LAST_DAY"    20200630      
				  ,	"DAY_OF_WEEK"       4
				  ,	"DAY_OF_KOR_WEEK"   수요일
				  ,	"NOW_DATE_TIME"     20200624181243     
                  , obj    => dataset Obj
 * Return(String) : String => ret 날짜에 맞는 포멧을 가지고 리턴함.
 *******************************************************************************/

pForm.gfn_getSvrDate = function(strFormat,objDs) 
{
	var ret     = "";
	var sFromat = "YYYYMMDD";
	
	if(this.gfn_isNull(objDs)) 
	{
		objDs = objApp.gds_SystemDate; 
	}
	var strSvc      = "sysDate";
    var strUrl      = "/prj/com/RetrieveSystemDateList.do";
    var strInDs     = "";
	var strOutDs    = objDs.name + "=gds_SystemDate";
    var strArg      = "";
    var strCallBack = "fn_callBack";    					// 공백일시 기본 fn_callBack
    var strASync    = false;             					// 생략이나 공백일시에는 ASync=true,싱크시는 false로
    this.gfn_Transaction(strSvc
                       , strUrl
                       , strInDs
                       , strOutDs
                       , strArg
                       , strCallBack
                       , strASync);
	
	if(this.gfn_isNull(strFormat))
	{
		
		strFormat = sFromat;
	}else
	{
		if(strFormat != "YYYY" && strFormat != "YYYYMMDD" && strFormat != "KOR_YYYYMMDD" && strFormat != "YYYYMM" &&  strFormat != "MMDD" &&
		   strFormat != "MM" && strFormat != "DD" && strFormat != "MONTH_FIRST_DAY"  && strFormat != "MONTH_LAST_DAY" && strFormat != "DAY_OF_WEEK" &&
		   strFormat != "DAY_OF_KOR_WEEK" && strFormat != "NOW_DATE_TIME")
		{
			strFormat = sFromat;
		}
	}
	
	if(this.gfn_isNull(objDs)) 
	{
		ret = objApp.gds_SystemDate.getColumn(0,strFormat);
	
	}else
	{
		ret = objDs.getColumn(0,strFormat);
	}
	
	return ret;
};

/*******************************************************************************
 * Function Name  : this.gfn_searchPost(fromObj, callback)
 * Description    : 주소검색 팝업을 오픈하여 주소검색 후 주소값을 넘겨준다.
 * Arguments      : fromObj, callback : 콜백 함수 선언
 * Return(String) : null (리턴값은 콜백에서 처리 함) 
 *******************************************************************************/  
pForm.gfn_searchPost = function (formObj, callback) 
{
	if (formObj.Post != undefined) {
		alert('우편번호 팝업을 닫고 실행해 주십시요.');
		return;
	}
	
	var objWebBrowser = new WebBrowser();  
	objWebBrowser.init("Post", 0, 0, 0, 0);
	objWebBrowser.user_callback = callback;
	objWebBrowser.addEventHandler('onusernotify', this.postWebbrowser_close, this);
	objWebBrowser.set_url(location.protocol + '//' + location.host + '/html/extern/postcode.v2.html');
	
	formObj.addChild("Post", objWebBrowser); 
	objWebBrowser.show();
};

pForm = null;