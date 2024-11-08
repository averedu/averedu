/**
*  컨설팅 표준화 작업
*  @FileName 	Frame.js 
*  @Creator 	soojeong
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	soojeong 	           최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnFormOnLoad(this);
*/
pForm.gfnFormOnLoad = function(objForm)
{
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for( var i=0; i<nLength; i++)
	{
		if( arrComp[i] instanceof nexacro.Div)
		{
			this.gfnFormOnLoad(arrComp[i].form); //재귀함수
		}
		else if( arrComp[i] instanceof nexacro.Tab )
		{
			var nPages = arrComp[i].tabpages.length;
			
			for( var j=0; j<nPages;j++)
			{			
				this.gfnFormOnLoad(arrComp[i].tabpages[j].form); //재귀함수
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
   
	// 다국어 처리
	this.gfnInitLang(objForm);
	
	// 화면 loading 시간 측정
	if (objForm.parent.name == "divWork")
	{
		var objApp     = nexacro.getApplication();
		var sStartDate = objApp.sStartDate;
		var nStartTime = objApp.nStartTime;
		
		var objDate  = new Date();
		var sEndDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();						
		var nElapseTime = (objDate.getTime() - nStartTime)/1000;
		//trace("gfnFormOnLoad : "+ sStartDate + " - " + nStartTime + " / " + sEndDate + " - " + nElapseTime);		
		
		objForm.parent.parent.staLodingTime.set_text("해당 화면의 loading 시간은 " +  + nElapseTime + " Sec 입니다.");
	}
	
	// 팝업 일때 처리
	if (objForm.opener)
	{		
		// 키다운 이베트 추가
		objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
	}

	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		if (this.gfnIsNull(objForm.opener) && objForm.name != "form")
		{
			// 키다운 이베트 추가
			objForm.addEventHandler("onkeydown", this.gfnOnkeydown, this);
		}
	}
	
	// 화면 컨트롤 제어
	//this._gfnSetFormCtrl(this);
};

/**
 * @description 각 화면에서 단축키 지정
*/
pForm.gfnOnkeydown = function(obj, e)
{
	//trace("e.ctrlkey : " + e.ctrlkey + " / e.keycode : " + e.keycode);
	
	// 디버그 창 : Ctrl + Q
	if (e.ctrlkey && e.keycode == 81)
	{
		// 운영환경에서는 실행 방지
		if (nexacro.getEnvironmentVariable("evRunMode") == "2") return;
		
		var oArg = {};
		var oOption = {popuptype:"modeless", title:"디버그"};
		var sPopupCallBack = "fnPopupCallback";
		this.gfnOpenPopup("debugging","cmm::cmmDebug.xfdl",oArg,sPopupCallBack,oOption);	
	}
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCall = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu;		//열린 dataset	
	var ds   = oObj.ds;							//넘어온 dataset
	var nRow = oObj.nRow;						//선택된 현재 row
	var aArgs = this.gfnIsNull(oObj.oArgs) ? "" : oObj.oArgs ;   //넘어온 arguments
	var sMenuId;
	
	if (!this.gfnIsNull( oObj.sMenuId)){
		sMenuId = oObj.sMenuId;
	}else{
		sMenuId = ds.getColumn(nRow, objApp.gvMenuColumns.menuId);
	}	
	
	var winid = gdsOpen.lookup(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.winId);

	if (!this.gfnIsNull(winid))
	{
		if (objApp.gvMdiFrame.form.isActiveFrame(winid, aArgs) == true)
		{
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 8)	
	if( objApp.gvMax <= gdsOpen.getRowCount() ){
		          
		alert(objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	//메뉴 오픈 일자 체크	
	var sCurDay = this.gfnGetDate();
	var sCurTime = this.gfnGetDate("time");
	sCurTime = sCurTime.substr(8, 4);
	var nFindRow = objApp.gdsMenu.findRow(objApp.gvMenuColumns.menuId, sMenuId)
	var sFrDay = objApp.gdsMenu.getColumn(nFindRow, "MENU_FRDT");
	var sToDay = objApp.gdsMenu.getColumn(nFindRow, "MENU_TODT");
	var sFrTm = objApp.gdsMenu.getColumn(nFindRow, "MENU_FRTM");
	var sToTm = objApp.gdsMenu.getColumn(nFindRow, "MENU_TOTM");
//	trace("sCurDay ==> " + sCurDay + " sFrDay ==> " + sFrDay + " sToDay ==> " + sToDay);
//	trace("sCurTime ==> " + sCurTime + " sFrTm ==> " + sFrTm + " sToTm ==> " + sToTm);
	
	if(!this.gfnIsNull(sFrDay) && !this.gfnIsNull(sToDay)) {
		// 날짜 체크
		if( sCurDay < sFrDay || sCurDay > sToDay){
			alert("클릭하신 메뉴는 현재 사용할 수 없습니다.\n메뉴 사용기간은 [" + sFrDay + " " + sFrTm + " ~ " + sToDay + " " + sToTm + "] 입니다.");
			return false;
		}
		
		// Time 체크
		if( sCurTime < sFrTm || sCurTime > sToTm){
			alert("클릭하신 메뉴는 현재 사용할 수 없습니다.\n메뉴 사용기간은 [" + sFrDay + " " + sFrTm + " ~ " + sToDay + " " + sToTm + "] 입니다.");
			return false;
		}
	}
	
	this.gfnNewMdi(sMenuId, nRow, aArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfnNewMdi = function(sMenuId,  nRow, aArgs)
{	
	var objApp   = nexacro.getApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	var gdsMenu  = objApp.gdsMenu;
	var winid    = "win" + sMenuId + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);		
	var sPageUrl = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
	var sGroupId = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);

	// 화면 loading 시간 측정
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	objApp.nStartTime = nStartTime;
	objApp.sStartDate = sStartDate;
	
	// 다국어 처리
	var sColumn  = objApp.gvMenuColumns.menuNm;
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	if (sNowLang != "KO") {
		sColumn = sColumn + "_" + sNowLang;
	}
	
	var sMenuNm  = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, sColumn);
	
	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
	this.gfnSetOpenMenuDs(winid, sMenuId, sMenuNm, sPageUrl, sGroupId);	// 열린메뉴 화면 삽입

	var objNewWin = new ChildFrame;
	objNewWin.init(winid, 0, 0, objApp.gvWorkFrame.getOffsetWidth() - 0, objApp.gvWorkFrame.getOffsetHeight() - 0);
	objApp.gvWorkFrame.addChild(winid, objNewWin);

//	objNewWin.set_tooltiptext(winid);
	objNewWin.arguments = [];
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_titletext(sMenuNm);
	objNewWin.set_showcascadetitletext(false);
	objNewWin.arguments["winKey"] = winid;
	objNewWin.arguments["menuId"] = sMenuId;
	objNewWin.arguments["menuNm"] = sMenuNm;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["aArgs"] = aArgs;
	objNewWin.set_formurl("frame::frameWork.xfdl");
	objNewWin.show();

	objApp.gvMdiFrame.form.fnAddTab(winid, sMenuNm, sMenuId);   //mdi tab button add	
	objApp.gvMdiFrame.form.isActiveFrame(winid);
	
	// 신규화면 오픈 시 개인정보화면 접근 로그를 남기도록 처리
	// 설정에 따라 로그 남기는 것을 판단.
	this.gfnSavePersLogInfo(sMenuId);
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu ;  //열린 dataset
	var nRow = gdsOpen.addRow();
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.winId, winid);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.menuId, menuid);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.title, strTitle);	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.groupId, sGroupId);
	gdsOpen.setColumn(nRow, "PRGM_FULL_PATH", spageUrl);
};

/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, aArgs
 * @return String
 */
pForm.gfnGetArgument = function(sName)
{
	return this.getOwnerFrame().arguments[sName];
};

/**
 * @class 해당화면 데이터셋에 추가 <br>
 * @param {String} 	sName : winKey, menuId, menuNm, pageUrl, aArgs
 * @return String
 */
pForm.gfnGetServerUrl = function()
{
	var urlPath = "";
    if (system.navigatorname == "nexacro") 
	{
	    var objEnv = nexacro.getEnvironment();
		urlPath = objEnv.services["svcUrl"].url;
	}else{
		urlPath = window.location.protocol + "//" + window.location.host;
		urlPath+="/cnMy/";
	}
	trace("urlPath : " + urlPath);
	return urlPath;
};

/**
 * @class 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드 <br>
 * @param  none
 * @return Object
 */
pForm.gfnGetApplication = function()
{
	// nexacro 14/17 구분하여 Application object를 사용한다.
	var objApp = (sysver == "nexacro17" ? nexacro.getApplication() : application);
	
	return objApp;
}