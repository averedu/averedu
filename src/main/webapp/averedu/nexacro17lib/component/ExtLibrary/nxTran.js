var pForm = nexacro.Form.prototype;
/*
 ==========================================================================================
 Transaction 화면과 SERVER 연동하는 각종함수를 처리하는 공통모듈 
 ===========================================================================================
 ● gfn_Transaction   		: gfn_Transaction 클라이언트와 서버를 소켓통신을 처리하는 부분
 ● gfn_TransactionCallback : Transaction 통신후 CallBack처리 다시 화면으로 콜백함수를 호출프로세스
 ● gfn_CmmnMultiComboLoad  : SAVER 공통코드를 가지고오는 함수 모든 동통코드는 서버에서 처리함
*/

/***************************************************************************************************
 * Function Name: gfn_Transaction
 * Description  : 공통 Transaction
 * Arguments    : strSvcID (transaction을 구분하기 위한 ID)
 * 			      strSvcAct (transaction을 요청할 주소)
 * 			      strInDataset (transaction을 요청할 때 입력값으로 보낼 Dataset 의 ID)
 * 			      strOutDataset (transaction을 처리 결과를 받을 Dataset의 ID)
 * 			      strArguments (transaction을 위한 인자값)
 * 			      strCallbackFunc (transaction의 결과를 돌려줄 Function의 이름)
 * 			      bProgress (Progress 사용여부 확인) (true : 사용, false : 사용안함)
 * 			      bAsync (비동기 여부를 지정) (true : 비동기, false : 동기)
 * Return       : N/A
 ****************************************************************************************************/ 
pForm.gfn_Transaction = function(strSvcID, strSvcUrl, strInDataset, strOutDataset, strArguments, strCallbackFunc, bAsync)
{
	//application.set_usewaitcursor(true); //초기화
	// 트랜잭션 동기/비동기 여부
	var oDs = this.gfn_getDataset("dsTransInfo");
	
	if(!this.gfn_isNull(oDs))
	{
		var objDestroy = this.removeChild("dsTransInfo");
		objDestroy.destroy();
	}
	var  ds = new Dataset;
	ds.addColumn("strSvcID",		"string", 256);
	ds.addColumn("strURL",			"string", 256);
	ds.addColumn("strInDatasets",	"string", 256);
	ds.addColumn("strOutDatasets",	"string", 256);
	this.addChild("dsTransInfo",ds);  
	   
	this.dsTransInfo.clearData();
	
	var dsInputName 	= this.gfn_getSplitDsName(strInDataset, 0);
	var dsOutputName 	= this.gfn_getSplitDsName(strOutDataset,1);
	
	for (var i = 0; i < dsInputName.length ; i++ )
	{
		var row = this.dsTransInfo.addRow();
		if (i == 0)
		{										//svc id 와 url은 하나이다.
			this.dsTransInfo.setColumn(row,0, strSvcID);
			this.dsTransInfo.setColumn(row,1, strSvcUrl);
		}
		this.dsTransInfo.setColumn(row,2, dsInputName[i]);
	}
	
	for (var i = 0; i < dsOutputName.length ; i++ )
	{
		this.dsTransInfo.setColumn(row,3, dsOutputName[i]);
	}

	
	var sTopForm = this.getOwnerFrame().form;
	
	if(this.gfn_isNull(bAsync)) 
	{
		bAsync = true; 
	}
	//어싱크시 생략시 기본값이 콜백함수 실행...
	if(this.gfn_isNull(strCallbackFunc))
	{
	    strCallbackFunc = (bAsync==true) ? "fn_callBack" : "";
	
	}else
	{
		strCallbackFunc = (bAsync==true) ? strCallbackFunc : ""; ;
	}
	
	var bBinary = nexacro.getApplication().gv_binary; //바이너리 여부
	
	//xecure binary 처리
	var g_binaryType;
    
	if(bBinary==true) 
	{
		g_binaryType = 1;//binary 통신시
	
	}else
	{
		g_binaryType = 0;//xml 통신시 
	}
	
	var bCompress 	= nexacro.getApplication().gv_Compress; //압축 여부
	var objDate 	= new Date();	
	var nStartTime 	= objDate.getTime(); //Milliseconds
	// 서비스 ID Merge
	var strMergeSvcID = strSvcID + "|" + strCallbackFunc + "|" + nStartTime;
	
	//trace("strMergeSvcID =="+strMergeSvcID);
	strSvcUrl = "svcurl::" + strSvcUrl;
    // 서비스 ID Merge
	//trace(strSvcUrl);
	//setWaitCursor(true,true);
    this.transaction( strMergeSvcID
					, strSvcUrl
					,"__DS_TRANS_INFO__=dsTransInfo " + strInDataset 
					, strOutDataset
					, strArguments
					, "gfn_TransactionCallback"
					, bAsync
					, g_binaryType
					, eval(bCompress)
					);
				
};
/***************************************************************************************************
 * Function Name: gfn_getSplitDsName
 * Description  : dataset 
 * Arguments    : objString dataset input/output 매핑정보
 * 			      type (1:strInDatasets 2:strOutDatasets)
 * Return       : N/A
 ****************************************************************************************************/ 
pForm.gfn_getSplitDsName = function(objString, type)
{
	var strDsMapping;			//mapping string
	var objArr;					//dataset name array
	var objReturn = new Array();
	
	strDsMapping = objString.split(" ");
	for (var i = 0; i < strDsMapping.length; i++ )
	{
		objArr = strDsMapping[i].split("=");    // objArr = a,cd
		if (type == 0)
		{
			objReturn[i] = objArr[0];
		}else
		{
			objReturn[i] = objArr[1];
		}
	}
	return objReturn;
};
/***************************************************************************************************
 * Function Name: gfn_TransactionCallback
 * Description  : 공통 Transaction Callback
 * Arguments    : strSvcId (transaction을 구분하기 위한 ID)
 * 			      nErrorCode (에러코드)
 * 			      strErrorMsg (에러메세지)
 * Return       : N/A
 ****************************************************************************************************/ 
pForm.gfn_TransactionCallback = function(strSvcId, nErrorCode, sErrorMsg)
{
	
	
	
	var objApp          = nexacro.getApplication();
	var lv_oForm 		= this.getOwnerFrame().form;
    //setWaitCursor(false,true);
    var strArrSvcID 	= strSvcId.split("|");
    var serviceID		= strArrSvcID[0];
	var callbackFunc	= strArrSvcID[1];
	var nStartTime		= strArrSvcID[2];

	//trace("==================>" +nErrorCode);
	//Transaction End Time
	var objDate 	= new Date();	
	var nEndTime 	= objDate.getTime(); //Milliseconds	
	var nElapseSec 	= (nEndTime - nStartTime) / 1000;
	
	var sLog = "\n";
	/*
	sLog += "[End Transaction]\n";	
	sLog += "  - Service ID => ["+strSvcId[0]+"]\n";
	sLog += "  - 처리시간 => ["+nElapseSec+" seconds]\n\n";	
	trace(sLog);
	trace("nErrorCode="+nErrorCode);
	trace("sErrorMsg="+sErrorMsg);
	*/

	if(nErrorCode == -9998)
	{
		this.gfn_alert("로그인세션정보가 만료되었습니다.재로그인을 진행합니다.","로그인정보","","information");
		var iFramesCnt = objApp.gv_appWorkFrameSet.frames.length;
		for(var i=iFramesCnt-1; i>=0; i--) 
		{
			strWinKey = objApp.gv_appWorkFrameSet.frames[i].name;
			if(objApp.gv_appWorkFrameSet.frames[i].name == "mainForm")
			{
				objApp.gv_appMainForm.set_formurl("");
				//continue;
			} else {
				this.gfn_TabOnClose(strWinKey);
			}
		}
		objApp.gds_OpenMenu.clearData();
		objApp.gds_userInfoDb.clearData();
		objApp.gds_Menu.clearData();
		objApp.gds_SystemDate.clearData();
		objApp.gds_Message.clearData();
		objApp.gds_Component.clearData();
		objApp.gv_appTopFrame.form.dsTopMenu.clearData();
		objApp.gv_appLeftFrame.form.dsMenu.clearData();
		objApp.gv_appLeftFrame.form.chkSelect = "";
		
		// 로그인폼으로 이동
		this.gfn_setFrameChange("login");
	}
	
	//-----------------------
	// 트랜잭션 후 공통처리
	//-----------------------	
	//서비스에서 내려주는 오류
	//정상일 경우
	/*
	if (nErrorCode < 0) 
	{	
	//if(gv_sessionOut == true) return;
	//XPlatform에서 오류를 Catch 했을 경우						
		var lv_oArgument = {pv_Message:sErrorMsg,};
		
		var lv_sOption = "left=-1,top=-1,width=400,height=300,modeless=false";
		gfn_layoutPopup("Common::Comm_ErrMsg.xfdl",sSvcId+nStartTime,lv_oArgument,lv_sOption);        
	
	}else 
	{		
	
		if(gds_tranMsg.rowcount > 0)
		{
			if(gds_tranMsg.rowcount == 1 && gds_tranMsg.getColumn(0,"messageType") == "I")
			{
			    trace("messageString ==>"+gds_tranMsg.getColumn(0,"messageString"));
				gfn_showMessage(gds_tranMsg.getColumn(0,"messageString"),"04","","","");
				gfn_setMsgArea(gds_tranMsg.getColumn(0,"messageString"))
			}
			else
			{
				var lv_oDs = gds_tranMsg;
				var lv_oArgument = {pv_oDs:lv_oDs};
				
				var lv_nHeight = (gds_tranMsg.rowcount * 45)+70;
				var lv_sOption = "left=-1,top=-1,width=400,height="+lv_nHeight+",modeless=false";
				gfn_layoutPopup("Common::Comm_Msg.xfdl",sSvcId+nStartTime,lv_oArgument,lv_sOption);
				
			}
		}
	}
	*/
	// 화면의 callBack 함수 실행
	if(!this.gfn_isNull(strArrSvcID[1]))
	{
		this.lookupFunc(strArrSvcID[1]).call(strArrSvcID[0], nErrorCode, sErrorMsg);
	}
	
};

/******************************************************************************************************************
 * Function Name: gfn_CmmnMultiComboLoad
 * Description  : 공통코드(CMMN010)의 데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
                  "|"(파이프라인)으로 구분하여 복수개 데이터 조회가 가능하다.
 * Arguments    : - strDS(데이터셋 문자열), strLgcd(중분류코드), strHipoFlag(콤보 유형 플래그),
                   strOptn(WHERE 부가 조건절), strSid(서비스 ID)
                  - strHipoFlag(데이터 상단에 나오는 항목 T:전체, S:선택, N:공백, X:해당사항없음)
                  - strSid(코드 조회 실행 후 CALLBACK 함수 지정.)
 * Return       : N/A
 *******************************************************************************************************************/ 
pForm.gfn_CmmnMultiComboLoad = function(strDS, strLgcd, strHipoFlag, strOptn, strSid)
{
    if(this.gfn_isNull(strDS))
    {
		alert("선언한 데이타 셋이 없습니다.");
		return false;
    }
    
   	var oDsArray = new Array();
	    oDsArray = strDS.split("|");
	var intDsCnt = oDsArray.length;
	if(intDsCnt == 1)
	{	
		if(this.gfn_trim(oDsArray[0]).length == 0)
		{
			alert("공통 코드설정한 데이타셋이 없습니다...");
			return false;
		}
	}
	
    var strDataSet = "";
    
    for(var idx = 0; idx < intDsCnt; idx++)
    {
        if (idx == 0)
        {
            strDataSet = oDsArray[idx] + "=" + oDsArray[idx];
        }else
        {
            strDataSet += " " + oDsArray[idx] + "=" + oDsArray[idx];
        }
    }
	//dsDataSet		="dsOpen|dsClose|dsGrdOpen|dsGrdClose"	 							받아올 데이타셋
	//commLgCode 	="ROP01|ROP01|ROP01|ROP01"				 							공통코드
	//commHipoFg	="T|T|X|X";   						     							콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
	//commOptn      =" AND COMM_IT02 = '" + vip + "'| AND COMM_IT02 = '" + vip + "'||"  조건문을 던저 줄시
	var strSvc 		= strSid;                                       
	//gv_was:JAVA 자바 그외는 NET:단텟
	var strUrl      = "/prj/com/RetrieveCommInitList.do";
	var strInDs  	= "";                                         
	var strOutDs 	= strDataSet;    
	var strArg 	    = "dsDataSet="  	+ nexacro.wrapQuote(strDS);
		strArg 	   += " commLgCode=" 	+ nexacro.wrapQuote(strLgcd);	
		strArg     += " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);			
		strArg 	   += " commOptn=" 		+ nexacro.wrapQuote(strOptn);  
		strArg 	   += " language=" 		+ nexacro.wrapQuote(nexacro.getApplication().gv_Language);    
	
	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로 
	this.gfn_Transaction(strSvc
				   , strUrl
				   , strInDs
				   , strOutDs
				   , strArg
				   , strCallBack
				   , strASync);
};


/**
 * @class  		: skfn_CmmnSingleComboLoad(strDS, strLgcd, strHipoFlag, strSid)  <br>
 * @description : 공통코드(CMMN010)의 데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
				  "|"(파이프라인)으로 구분하여 복수개 데이터 조회가 가능하다.
 * @param1 {String} strDS   									ex) "dsOpen|dsClose|dsGrdOpen"	 			받아올 데이타셋
 * @param2 {String} strLgcd										ex) "MSPO400MT|MSPO410MT|MSPO420MT"			테이블명
 * @param3 {String} strHipoFlag									ex) "T|T|T";  								콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
 * @param5 {String} strSid	- Null인경우 대치값				es) "fn_callback"                           fn_callBack(svcId)
 * @return {obj}    strDS선언한 오브젝트를 받아옮						
 * @param6 {String} strAuthChk									ex) "0|0|0";  								0:권한체크무시, null:권한체크, 1:권한체크
 */ 
pForm.gfn_CmmnSingleComboLoad = function(strDS, strLgcd, strHipoFlag,strSid, strCallback, strAuthChk)
{
	
	if(this.gfn_isNull(strDS)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var oDsArray = new Array();
	    oDsArray = strDS.split("|");
	var intDsCnt = oDsArray.length;
	
	if(intDsCnt == 1) 
	{
		if (oDsArray[0].trim().length == 0) 
		{
			alert("공통 코드설정한 데이타셋이 없습니다...");
			return false;
		}
	}
	if(this.gfn_isNull(strAuthChk))
	{
	
		for(var i=0; i< intDsCnt; i++) 
		{
			if(i==0) 
			{
				strAuthChk = "1";
			} else 
			{
				strAuthChk += "|" +"1";
			}
			
		}
	}

	var strDataSet = "";
	for (var idx = 0; idx < intDsCnt; idx++) 
	{
		if (idx == 0) 
		{
			strDataSet = oDsArray[idx] + "=" + oDsArray[idx];
		
		}else 
		{
			strDataSet += " " + oDsArray[idx] + "=" + oDsArray[idx];
		}
	}
	var strSvc 		= strSid;    
	var strUrl      = "/prj/com/RetrieveCommInitTableList.do";
	var strInDs  	= "";                                         
	var strOutDs 	= strDataSet;    
	var strArg 	    = "dsDataSet="  	+ nexacro.wrapQuote(strDS);
		strArg 	   += " commLgCode=" 	+ nexacro.wrapQuote(strLgcd);	
		strArg     += " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);	
		strArg 	   += " commAuthChk=" 	+ nexacro.wrapQuote(strAuthChk);  
	
	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로 
	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallback
					   , strASync);

};
pForm = null;