var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 == 폼과 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ★ gfn_setFrameChange     : 프레임 화면을 변경한다. 
 ★ gfn_newOpenMenu        : 작업프레임에 메뉴에 폼을 보여주는 함수
 ★ gfn_ActiveFrame        : 프레임이 열려있는지를 확인하는 함수.
 ★ gfn_setOpenDsMenuAdd   : 메뉴에 클릭시 메뉴에 정보를 글로벌 gds_OpenMenu셋팅하는 함수
 ★ gfn_ArrangeWin         : MDI 폼을 활성화하거나 전체닫기 정렬으로 폼을 배열하는 함수
 ★ gfn_TabOnClose         : TAB에 화면별로 닫기 버튼을 클릭시 처리하는 함수.
 ★ gfn_FrameOnClose       : 작업프레임 닫기전에 처리하는 프로세스함수
 ★ gfn_delGblDSMenu       : 개별화면을 닫을시 글로발 변수초기화를 한다.
*/
/**********************************************************************************
 * Function Name: gfn_setFrameChange(sView)
 * Description  : 프레임 화면을 변경한다. 
 * Arguments    : sView: 로그인:login, 메인:main, 업무:work
 * Return       : N/A
 **********************************************************************************/
pForm.gfn_setFrameChange = function(sView)
{
	var strSeparatesize = objApp.gv_appVFrameSet.separatesize;
	var arrSeparatesize = strSeparatesize.split(",");
	switch(sView)
	{
	    case "login" : strSeparatesize = "0,0,*,0"; 	break;
	    case "work" : strSeparatesize =  "70,*,0,20"; 	break;
	}
	objApp.gv_appVFrameSet.set_separatesize(strSeparatesize);
	objApp.gv_viewType = sView;

};

/**********************************************************************************
 * Function Name: gfn_newOpenMenu(menuid,objDs)
 * Description  : 메뉴 아이디를 기준으로 신규 윈도우 화면을 생성하고 open 시킴
 * Arguments    : menuid  : 선택한 메뉴아이디 
				  OPEN DB : 왼쪽메뉴 DATASET	
 * Return       : N/A
 **********************************************************************************/
pForm.gfn_newOpenMenu = function(menuid,objDs) 
{
	var nRow = objDs.findRow("MENU_ID", menuid);											// 열화면 아이디를 검색한다.
	if(this.gfn_isNull(menuid) == true) 												// 메뉴아이디가 없을시 리턴시킨다. 
	{
		this.alert("Menu가 존재하지 않습니다.");
		return false;
	}

	if(this.gfn_isNull(objDs.getColumn(nRow, "FORM_PATH")))                   			// PREPIX가 경로가 없을시 리턴시킨다.
	{
		return false;
	}

	var winKey = objApp.gds_OpenMenu.lookup("MENU_ID", menuid, "WINID"); 			// 이미 OPEN한 화면아이디를 검색한다.

	if(!this.gfn_isNull(winKey))											 			// 이미 OPEN화면이면 처리
	{
		if(this.gfn_ActiveFrame(winKey))							 			        // 이미 활성화된 하면이면					 
		{
			objApp.gv_appTabFrame.form.fn_movePage(winKey);
			objApp.gv_appTabFrame.form.fn_activeTabpage(winKey);
			
			if(!this.gfn_isNull(objApp.gv_OpenArg))								  // 이미열려인자값을 전달하기위해사용 FORM => FORM
			{
				objApp.gv_appWorkFrameSet.all[winKey].form.div_Work.form.fn_OnLoadPage(); // 폼에서 = > 폼으로 갈시 함수호출
			}
			return false;
		}
	}
	
	if(parseInt(objApp.gds_OpenMenu.rowcount) > 14)									//14개이상일시 메세지 처리하는 부분
	{
		this.alert("메뉴는  15개이상 오픈할 수 없습니다.");
		return false;
	}
	
	if(this.gfn_isNull(objDs.getColumn(nRow, "MENU_ID"))) 									// 선택한 화면에 메뉴 아이디가 없을시					
	{
		return false; 
	}

	winKey = menuid + "_" + objApp.gds_OpenMenu.getRowCount() +  "_" + parseInt(Math.random() * 100);   //폼의 ChildFrame에 컬렉션으로 동적생성아이디
	
	this.gfn_setOpenDsMenuAdd(winKey, nRow, objDs);											// 오픈된 메뉴를 글로발데이타셋에 셋팅(gds_OpenMenu)								
	
	var sMenuCd 			= objDs.getColumn(nRow, "MENU_ID");								// 클릭메뉴를 작업프레임에 넘길 인자값
	var sMenuNm 			= objDs.getColumn(nRow, "MENU_NM");
	var sMenuNmPath 		= objDs.getColumn(nRow, "MENU_NM_PATH");
	var sFormId 			= objDs.getColumn(nRow, "FORM_ID");
	var sFormPath			= objDs.getColumn(nRow, "FORM_PATH");
	var sPrefixaAndFormId   = sFormPath+"::"+sFormId;
	var sTempNewParam 		= "";
	
	if(sFormId.indexOf("xfdl?") > 0)
	{
		var sTempPgmId 					= sFormId;		
			sFormId 				    = sTempPgmId.substr(0,sTempPgmId.indexOf("xfdl?") + 4);
		    sTempNewParam 				= sTempPgmId.substr(sTempPgmId.indexOf("xfdl?") + 5);
	}
	/*** 동적인 작업프레임웍을 생성한다. 시작***/
	var objNewWin = new ChildFrame;																		
	objNewWin.init(winKey, 0, 0,  objApp.gv_appWorkFrameSet.getOffsetWidth() - 0, objApp.gv_appWorkFrameSet.getOffsetHeight() - 0);
	objApp.gv_appWorkFrameSet.addChild(winKey, objNewWin);
	
	objNewWin.arguments = [];	
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_showcascadetitletext(false);
	
	objNewWin.arguments["winKey"]   	= winKey;
	objNewWin.arguments["menuId"]   	= sMenuCd;
	objNewWin.arguments["formId"]   	= sPrefixaAndFormId;
	objNewWin.arguments["programId"]   	= sFormId;
	objNewWin.arguments["menuTitle"] 	= sMenuNm;
	objNewWin.arguments["menuTitle2"] 	= "";
	objNewWin.arguments["menuNmPath"] 	= sMenuNmPath;
	objNewWin.arguments["helpUrl"] 		= "";
	objNewWin.arguments["pInfoflag"] 	= "";
	objNewWin.arguments["menuMultiYn"] 	= "";
	objNewWin.arguments["args"]   		= sTempNewParam;
	objNewWin.set_formurl("Frame::WorkFrame.xfdl");
	
    //20120611 좌측메뉴 클릭시
	objApp.gv_appTabFrame.form.fn_setNaviAdd(winKey, sMenuNm);
	objApp.gv_appTabFrame.form.fn_activeTabpage(winKey);
	
	objApp.gv_activeWinId = winKey;
	
	objNewWin.show();	
	/*** 동적인 작업프레임웍을 생성한다. 종료***/
	
};

/**********************************************************************************
 * Function Name: gfn_ActiveFrame(winKey)
 * Description  : 윈도우 키를 기준으로 열려있는 화면일 경우 focus, maximize 처리
 * Arguments    : winKey: 윈도우 생성 키(화면FORM ID)
 * Return       : {Boolean} true/false 
 **********************************************************************************/ 
pForm.gfn_ActiveFrame = function(winKey) 
{
	var newMainFrams = objApp.gv_appWorkFrameSet.frames;
	if(newMainFrams[winKey]) 
	{
		newMainFrams[winKey].setFocus();    // 이미 열려있는 동적폼이라면 true
		return true;
	}
	return false;                           // 이미 열려있지 않는 폼이라면false
};

/**********************************************************************************
 * Function Name: gfn_setOpenDsMenuAdd(strID, nRow, objDs) 
 * Description  : 신규 생성된 윈도우 화면을 DsOpenwininfo 에 등록
 * Arguments    : strID: 윈도우 생성키
                  nRow: 메뉴데이터셋에서의 row position
				  objDs: DATASET
 * Return       : N/A없음
 **********************************************************************************/  
pForm.gfn_setOpenDsMenuAdd = function(strID, nRow, objDs) 
{
	objApp.gds_Menu.filter("");
	var curRow = objApp.gds_OpenMenu.addRow();
	objApp.gds_OpenMenu.setColumn(curRow, "WINID", strID);
	objApp.gds_OpenMenu.setColumn(curRow, "MENU_ID", objDs.getColumn(nRow, "MENU_ID"));
	
 	if(strID.indexOf("HOME01") != -1 )
 	{
 		objApp.gds_OpenMenu.setColumn(curRow, "MENU_NM", "HOME");
 	
 	}else
 	{
		objApp.gds_OpenMenu.setColumn(curRow, "MENU_NM", objDs.getColumn(nRow, "MENU_NM"));		
	}	
};

/**********************************************************************************
 * Function Name: gfn_ArrangeWin(strType, strBtnNm)
 * Description  : 열려있는 윈도우 화면을 정렬
 * Arguments    : strType  : 정렬타입
                  strBtnNm : 사용자정의함수 이거나 버튼이름으로 
 * Return       : N/A없음
 **********************************************************************************/ 
pForm.gfn_ArrangeWin = function(strType,strBtnNm) 
{
	var strWinKey;
	var strMenuNm;
	var i;
	// workFrame영역에 open된 childFrame 갯수
	var iFramesCnt = objApp.gv_appWorkFrameSet.frames.length;
	
	if(objApp.gds_OpenMenu.getRowCount() < 1) 
	{
		return false;
	}
	
	if(strType == "maximize")
	{
		var curWinId = objApp.gv_appWorkFrameSet.getActiveFrame().name;
		for (var i=0; i<iFramesCnt; i++) 
		{
			objApp.gv_appWorkFrameSet.frames[i].set_openstatus("maximize");		
			objApp.gv_appWorkFrameSet.frames[i].set_showtitlebar(false);		
			objApp.gv_appWorkFrameSet.frames[i].set_border("0px solid #006666");
		}  
		objApp.gv_appTabFrame.form.fn_activeTabpage(curWinId);
						
	}else if(strType == "closeAll")
	{	
		
		for(var i=iFramesCnt-1; i>=0; i--) 
		{
			strWinKey = objApp.gv_appWorkFrameSet.frames[i].name;
			if(objApp.gv_appWorkFrameSet.frames[i].name == "mainForm")
			{
				continue;
			}
			this.gfn_TabOnClose(strWinKey);
		}
		
	}else if(strType == "cascade" || strType == "horizontal" || strType == "vertical") 
	{	
		for (var i=0; i<iFramesCnt; i++)
		{	
			objApp.gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			objApp.gv_appWorkFrameSet.frames[i].set_border("1px solid #7f7f7b");
			objApp.gv_appWorkFrameSet.frames[i].set_borderRadius("3px 3px");
			objApp.gv_appWorkFrameSet.frames[i].set_openstatus("normal");		
			objApp.gv_appWorkFrameSet.frames[i].titlebar.closebutton.set_enable(false);
		}
		objApp.gv_appWorkFrameSet.arrange(strType);
	
	}else if (strType == "hidden") 
	{	
		for (var i=0; i<iFramesCnt; i++) 
		{
			objApp.gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			objApp.gv_appWorkFrameSet.frames[i].set_border("1px solid #7f7f7b");
			objApp.gv_appWorkFrameSet.frames[i].set_borderRadius("3px 3px");
			objApp.gv_appWorkFrameSet.frames[i].set_openstatus("minimize");		
		}			
		objApp.gv_appWorkFrameSet.arrange(strType);

	}else
	{
		for (var i=0; i<iFramesCnt; i++)
		{	
			objApp.gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			objApp.gv_appWorkFrameSet.frames[i].set_border("1px solid #7f7f7b");
			objApp.gv_appWorkFrameSet.frames[i].set_borderRadius("3px 3px");
			objApp.gv_appWorkFrameSet.frames[i].set_openstatus("normal");		
			objApp.gv_appWorkFrameSet.frames[i].titlebar.closebutton.set_enable(false);
		}
		objApp.gv_appWorkFrameSet.arrange(strType);
	}
};

/**********************************************************************************
 * Function Name: gfn_TabOnClose(winKey)
 * Description  : 윈도우 타이틀 탭 닫힘 처리를 함수호출
 * Arguments    : winKey  : 닫을 탭의 키값
 * Return       : N/A없음
 **********************************************************************************/  
pForm.gfn_TabOnClose = function(winKey)
{
	try{
		var varRet = objApp.gv_appWorkFrameSet.frames[winKey].form.div_Work.form.fn_beforeclose();
		if(varRet)
		{
			var rtn = this.gfn_confirm("변경된 데이터가 있습니다. 그래도 닫으시겠습니까?","확인","","question");
			if(rtn)
			{
				objApp.gv_appWorkFrameSet.frames[winKey].form.fn_setClose();
			}
			return false;
		}
	}catch(e) {
		trace("errorCode : " + e.name + " / errorMessage : " + e.message);
	}
	
	objApp.gv_appWorkFrameSet.frames[winKey].form.fn_setClose();
};

/**********************************************************************************
 * Function Name: gfn_FrameOnClose(winKey)
 * Description  : 윈도우를 닫기전에 처리하는 함수(탭 삭제 및 오픈한 데이터셋 삭제함수 호출)
 * Arguments    : winKey  : 닫을 탭의 키값
 * Return       : N/A없음
 **********************************************************************************/ 
pForm.gfn_FrameOnClose = function(winKey)
{
	objApp.gv_appTabFrame.form.fn_deleteTabpage(winKey);
	this.gfn_delGblDSMenu(winKey);	
};

/**********************************************************************************
 * Function Name: gfn_delGblDSMenu(winKey)
 * Description  : 윈도우 삭제시 오픈 글로벌 데이터셋 삭제후 대시보드를 오픈한다.
 * Arguments    : winKey  : 닫을 탭의 키값
 * Return       : N/A없음
 **********************************************************************************/  
pForm.gfn_delGblDSMenu = function(strID) 
{
	var iRow = objApp.gds_OpenMenu.findRow("WINID", strID);
	objApp.gds_OpenMenu.deleteRow(iRow);

	if(objApp.gds_OpenMenu.rowcount==0)
	{
		objApp.gv_appMainForm.set_visible(true);
		objApp.gv_appMainForm.set_openstatus("maximize");		
		objApp.gv_appMainForm.set_showtitlebar(false);
	}
};
/*************************** 다국어 처리에 필요한 함수들 시작*************************************************/
/*
 ===============================================================================
 == 다국어와 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ★ gfn_setTile				: Form에 속한 모든 컴포넌트의 title을 공통영역에 정의한 copCode(Components) 바탕으로 변경시키는 함수
 ★ gfn_getComponent		: 컴포넌트 코드에 따른 실제 컴포넌트의 값을 반환
 ★ gfn_setTitleChild		: gfnSetTile 함수에서 Div 객체의 하위 컴포넌트에 접근
 ★ gfn_setGridHeadText		: Grid의 header를 공통 정의된 메세지 기반으로 처리하는 함수
 ★ gfn_setTitleTab			: gfnSetTitle 함수에서 Tab 객체의 하위 컴포넌트에 접근
 ★ gfn_alert				: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
 ★ gfn_getMessage			: 메세지 코드에 따른 실제 메세지값을 반환
 ★ gfn_confirm				: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
 ★ gfn_msg					: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
 ★ gfn_openPopup 			: 팝업오픈 함수
*/
/**********************************************************************************
 * Function Name: gfn_setTitle()
 * Description  : Form에 속한 모든 컴포넌트의 title을 공통 영역에 
                  정의한 copCode(components) 바탕으로 변경시키는 함수
 * Arguments    : N/A 없음
 * Return       : N/A 없음
 **********************************************************************************/   
pForm.gfn_setTitle = function()
{
	var components = this.components;
	for (var i = 0; i < components.length; i++) 
	{
		if(components[i] instanceof CheckBox || components[i] instanceof Calendar || 
		   components[i] instanceof GroupBox || components[i] instanceof Static || components[i] instanceof Button) 
		{
			var name = components[i].text;
			components[i].set_text(this.gfn_getComponent(name));
		
		}else if(components[i] instanceof Div) 
		{
			this.gfn_setTitleChild(components[i]);
		
		}else if(components[i] instanceof Grid) 
		{
			this.gfn_setGridHeadText(components[i]);
		
		}else if(components[i] instanceof Tab) 
		{
			this.gfn_setTitleTab(components[i]);
		}
	}
};

/**********************************************************************************
 * Function Name: gfn_getComponent()
 * Description  : 컴포넌트 코드에 따른 실제 컴포넌트의 값을 반환
 * Arguments    : 등록된 컴포넌트 코드값
 * Return       : 등록된 컴포넌트 해당하는 실제 컴포넌트값	
                  등록된 컴포넌트 값일 없을 경우는 CODE를 그대로 반환
 **********************************************************************************/  
pForm.gfn_getComponent = function(code)
{
	code = this.gfn_trim(code);
	var value = '';

	for (var i = 0; i < nexacro.getApplication().gds_Component.rowcount; i++) 
	{
		var copCol = nexacro.getApplication().gds_Component.getColumn(i, "COP_CODE");
		
		if(copCol == code) 
		{
			value = nexacro.getApplication().gds_Component.getColumn(i, "COP_NAME");
			break;
		}
	}
	
	if (value == '') 
	{
		// trace("["+code+"] 해당 메시지 코드가 등록되지 않았습니다.");
		return code;
	}
	return value;
};

/**********************************************************************************
 * Function Name: gfn_setTitleChild(obj)
 * Description  : gfnSetTitle 함수에서 Div 객체의 하위 컴포넌트에 접근
 * Arguments    : OBJECT(Div) 
 * Return       : N/A
 **********************************************************************************/   
pForm.gfn_setTitleChild = function (obj)
{
	var components = obj.form.components;
	
	for(var i = 0; i < components.length; i++) 
	{
		if (components[i] instanceof CheckBox || components[i] instanceof GroupBox || 
			components[i] instanceof Static ||components[i] instanceof Button) 
		{
			var name = components[i].text;
			components[i].set_text(this.gfn_getComponent(name));
		
		}else if (components[i] instanceof Div) 
		{
			this.gfn_setTitleChild(components[i]);
		
		}else if (components[i] instanceof Grid) 
		{
			this.gfn_setGridHeadText(components[i]);
		
		}else if (components[i] instanceof Tab) 
		{
			this.gfn_setTitleTab(components[i]);
		}
	}
};

/**********************************************************************************
 * Function Name: gfn_setGridHeadText(obj)
 * Description  : Grid의 header를 공통 정의된 메세지 기반으로 처리하는	함수	
 * Arguments    : OBJECT(GRID) 
 * Return       : N/A
 **********************************************************************************/  
pForm.gfn_setGridHeadText = function (obj)
{
	var bindDs = obj.binddataset;
	//if (bindDs.rowcount == 0) return false;

	for (var i = 0; i < obj.getCellCount("head"); i++) 
	{
		if (obj.getCellText(-1, i) == "undefined" || obj.getCellText(-1, i) == "_CHK") 
		{
			continue;
		}
		var strHeadText = obj.getCellText(-1, i);
		var strTemp = this.gfn_getComponent(strHeadText);
		obj.setCellProperty("head", i, "text", strTemp);
	}
};

/**********************************************************************************
 * Function Name: gfn_setTitleTab(obj)
 * Description  : gfnSetTitle 함수에서 Tab 객체의 하위 컴포넌트에 접근	
 * Arguments    : OBJECT(TAB) 
 * Return       : N/A
 **********************************************************************************/   
pForm.gfn_setTitleTab = function (obj)
{
	var pages = obj.tabpages;
	for (var i = 0; i < pages.length; i++) 
	{
		var name = pages[i].text;
		pages[i].set_text(this.gfn_getComponent(name));
		this.gfn_setTitleChild(pages[i]);
	}
};

/********************************************************************************
 * Function Name: gfn_alert
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
 *				  생성해서 해당 값을 보여주는 함수
 * Arguments	: strMsgId(MessageId)
 *				  strMsgType(메세지 종류 : ERR, WARN, INFO)//런타이모듈에서만 가능함
 *				  msgArr[](메세지값으로 치환될 Parameter Array)
 * Return 		: 팝업에 해당 메세지값을 표현
 ********************************************************************************/
pForm.gfn_alert = function (strMsgId,strMsgTitle,msgArr,strMsgType)
{
	if (this.gfn_isNull(strMsgType)) 
	{
		strMsgType = "information";
	}
	var msgParam;
	
	if(!this.gfn_isNull(msgArr))
	{
		msgParam = msgArr.split(",");
	}
	var strMsgParam1 = "";
	var strMsgParam2 = "";
	var strMsgParam3 = "";
	var strMsgParam4 = "";
	var strMsgParam5 = "";
	var strMsgParam6 = "";
	
	if(this.gfn_isNull(msgParam) != true)
	{
	
		for(var i = 0; i < msgParam.length; i++)
		{
			if(i==0) 
			{
				strMsgParam1 = this.gfn_getComponent(msgParam[0]);
				
			}else if(i==1)
			{
				strMsgParam2 = this.gfn_getComponent(msgParam[1]);
			}else if(i==2)
			{
				strMsgParam3 = this.gfn_getComponent(msgParam[2]);
			}else if(i==3)
			{
				strMsgParam4 = this.gfn_getComponent(msgParam[3]);
			}else if(i==4)
			{
				strMsgParam5 = this.gfn_getComponent(msgParam[4]);
			}else if(i==5)
			{
				strMsgParam6 = this.gfn_getComponent(msgParam[5]);
			}
		}
	}
	var strMsg = this.gfn_getMessage(strMsgId, strMsgParam1,strMsgParam2,strMsgParam3,strMsgParam4,strMsgParam5,strMsgParam6);
	return this.alert(strMsg, strMsgTitle, strMsgType);
};

/********************************************************************************
 * Function Name	: gfn_getMessage												*
 * Desc				: 메세지 코드에 따른 실제 메세지값을 반환				*
 * Parameter		: code(MessageId)											*
 *					  strMsgParam[](메세지값으로 치환될 Parameter Array)		*
 * Return 			: 등록된 MessageId에 해당하는 실제 메세지값				*
 *					  등록된 MessageId가 없을 경우 code를 그대로 반환		*
 ********************************************************************************/
pForm.gfn_getMessage = function (code, strMsgParam1, strMsgParam2, strMsgParam3, strMsgParam4, strMsgParam5, strMsgParam6)
{
	code = code.trim();
	var value = '';
	for (var i = 0; i <= nexacro.getApplication().gds_Message.rowcount; i++) 
	{
		var msgCol = nexacro.getApplication().gds_Message.getColumn(i, "MSG_CODE");
		
		if(msgCol == code) 
		{
			value = nexacro.getApplication().gds_Message.getColumn(i, "MSG_NAME");
			break;
		}
	}

	if (this.gfn_isNull(value)) 
	{
		// trace("["+code+"] 해당 메시지 코드가 등록되지 않았습니다.");
		value = code;
		if (!this.gfn_isNull(strMsgParam1)) 
		{
			value = value.split("{#1}").join(strMsgParam1);
		}
		if (!this.gfn_isNull(strMsgParam2)) 
		{
			value = value.split("{#2}").join(strMsgParam2);
		}
		if (!this.gfn_isNull(strMsgParam3)) 
		{
			value = value.split("{#3}").join(strMsgParam3);
		}
		if (!this.gfn_isNull(strMsgParam4)) 
		{
			value = value.split("{#4}").join(strMsgParam4);
		}
		if (!this.gfn_isNull(strMsgParam5)) 
		{
			value = value.split("{#5}").join(strMsgParam5);
		}
		if (!this.gfn_isNull(strMsgParam6)) 
		{
			value = value.split("{#6}").join(strMsgParam6);
		}
	}else
	{
		
		if (!this.gfn_isNull(strMsgParam1)) 
		{
			value = value.split("{#1}").join(strMsgParam1);
		}
		if (!this.gfn_isNull(strMsgParam2)) 
		{
			value = value.split("{#2}").join(strMsgParam2);
		}
		if (!this.gfn_isNull(strMsgParam3)) 
		{
			value = value.split("{#3}").join(strMsgParam3);
		}
		if (!this.gfn_isNull(strMsgParam4)) 
		{
			value = value.split("{#4}").join(strMsgParam4);
		}
		if (!this.gfn_isNull(strMsgParam5)) 
		{
			value = value.split("{#5}").join(strMsgParam5);
		}
		if (!this.gfn_isNull(strMsgParam6)) 
		{
			value = value.split("{#6}").join(strMsgParam6);
		}
	}
	
	return value;
};

/********************************************************************************
 * Function Name: gfn_confirm
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
 *				  생성해서 해당 값을 보여주는 함수
 * Arguments	: strMsgId(MessageId)
 *				  strMsgType(메세지 종류 : ERR, WARN, INFO)//런타이모듈에서만 가능함
 *				  msgArr[](메세지값으로 치환될 Parameter Array)
 * Return 		: 팝업에 해당 메세지값을 표현
 ********************************************************************************/
pForm.gfn_confirm = function (strMsgId,strMsgTitle,msgArr,strMsgType)
{
	if(this.gfn_isNull(strMsgType)) 
	{
		strMsgType = "information";
	}
	var msgParam;
	
	if(!this.gfn_isNull(msgArr))
	{
		msgParam = msgArr.split(",");
	}
	var strMsgParam1 = "";
	var strMsgParam2 = "";
	var strMsgParam3 = "";
	var strMsgParam4 = "";
	var strMsgParam5 = "";
	var strMsgParam6 = "";
	
	if(this.gfn_isNull(msgParam) != true)
	{
		for(var i = 0; i < msgParam.length; i++)
		{
			if(i==0) 
			{
				strMsgParam1 = this.gfn_getComponent(msgParam[0]);
			
			}else if(i==1)
			{
				strMsgParam2 = this.gfn_getComponent(msgParam[1]);
			
			}else if(i==2)
			{
				strMsgParam3 = this.gfn_getComponent(msgParam[2]);
			
			}else if(i==3)
			{
				strMsgParam4 = this.gfn_getComponent(msgParam[3]);
			
			}else if(i==4)
			{
				strMsgParam5 = this.gfn_getComponent(msgParam[4]);
			
			}else if(i==5)
			{
				strMsgParam6 = this.gfn_getComponent(msgParam[5]);
			}
			
		}
	}
	
	var strMsg = this.gfn_getMessage(strMsgId, strMsgParam1,strMsgParam2,strMsgParam3,strMsgParam4,strMsgParam5,strMsgParam6);
	
	return this.confirm(strMsg, strMsgTitle, strMsgType);;
	
};

/********************************************************************************
 * Function Name: alert/confirm
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
 *				  생성해서 해당 값을 보여주는 함수
 * Arguments	: strMsgId(MessageId)
 *				  strMsgType(메세지 종류 : ERR, WARN, INFO)//런타이모듈에서만 가능함
 *				  msgArr[](메세지값으로 치환될 Parameter Array)
 * Return 		: 팝업에 해당 메세지값을 표현
 ********************************************************************************/
pForm.gfn_msg = function ( strMsgId, msgArr, sCallback, sPopId)
{
	var msgParam;
	var sTitle  = objApp.gds_Message.lookup("MSG_CODE", strMsgId, "MSG_TYPE_NM");	//타이틀
	if(this.gfn_isNull(sTitle))
	{
		sTitle = "Information";
	}
	
	if(!this.gfn_isNull(msgArr))
	{
		msgParam = msgArr.split(",");
	}
	var strMsgParam1 = "";
	var strMsgParam2 = "";
	var strMsgParam3 = "";
	var strMsgParam4 = "";
	var strMsgParam5 = "";
	var strMsgParam6 = "";
	
	if(this.gfn_isNull(msgParam) != true)
	{
		for(var i = 0; i < msgParam.length; i++)
		{
			if(i==0) 
			{
				strMsgParam1 = this.gfn_getComponent(msgParam[0]);
			
			}else if(i==1)
			{
				strMsgParam2 = this.gfn_getComponent(msgParam[1]);
			
			}else if(i==2)
			{
				strMsgParam3 = this.gfn_getComponent(msgParam[2]);
			
			}else if(i==3)
			{
				strMsgParam4 = this.gfn_getComponent(msgParam[3]);
			
			}else if(i==4)
			{
				strMsgParam5 = this.gfn_getComponent(msgParam[4]);
			
			}else if(i==5)
			{
				strMsgParam6 = this.gfn_getComponent(msgParam[5]);
			}
			
		}
	}

	var strMsg = this.gfn_getMessage(strMsgId, strMsgParam1,strMsgParam2,strMsgParam3,strMsgParam4,strMsgParam5,strMsgParam6);

	// 줄바꿈 문자 \n를 줄바꿈으로 치환
	while(strMsg.indexOf("\\n") > -1)
	{
		strMsg = this.gfn_replaceAll(strMsg,"\\n", String.fromCharCode(10));
	}
	
	var sType  = objApp.gds_Message.lookup("MSG_CODE", strMsgId, "MSG_BTN_NM");	   //버튼 타입
	if(this.gfn_isNull(sType)) 
	{
		sType = "OK";
	}
	
	if(this.gfn_isNull(this.gfn_trim(sPopId))) 
	{
		sPopId = strMsgId;
	}
	
	var arrArg = new Array();
	arrArg[0] = sTitle;
	arrArg[1] = strMsg;
	arrArg[2] = sType;

	var sOption  	= {width:"600", height:"300"};
	var sPopUrl  	= "com::COMM000005P.xfdl";
	
	this.gfn_openPopup(sPopId, sPopUrl, {arrParam:arrArg},sCallback, sOption );
};

/********************************************************************************
 * Function Name: gfn_openPopup
 * Description	: 팝업오픈 함수
 * Arguments	: {String} sPopupId			- 팝업ID
 *				  {String} sUrl	 			- 팝업URL
 *				  {String} [oArg] 			- 전달값
 *                {String} [sPopupCallback] - 팝업콜백 
 *                {Object} [oOption] 		- 팝업옵션 
 *	                       oOption.top       : 상단 좌표 <br>
 *	                       oOption.left      : 좌측 좌표 <br>
 *	                       oOption.width     : 넓이 <br>
 *	                       oOption.height    : 높이 <br>
 *	                       oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWinddow) <br>
 *	                       oOption.layered   : 투명 윈도우 <br>
 *	                       oOption.opacity   : 투명도 <br>
 *	                       oOption.autosize : autosize <br>
 * Return 		: N/A(없음)
 * example      : this.gfn_openPopup(this);
 ********************************************************************************/
pForm.gfn_openPopup = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
    var objApp        = nexacro.getApplication();
	var nLeft         = -1;
	var nTop          = -1;
	var nWidth        = -1;
	var nHeight       = -1;
	var bShowTitle    = false;	
	var bShowStatus   = false;	
	var sPopupType    = "modal";
	var bLayered      = false;
	var nOpacity      = 100;
	var bAutoSize     = false;
	var bResizable    = false;
	var sTitleText    = "";
	var sOverlaycolor = false;
	//var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
	
	for (var key in oOption) 
	{
       if (oOption.hasOwnProperty(key)) 
	   {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "overlaycolor":
					sOverlaycolor = oOption[key];
					break;
				case "showtitlebar":
					bShowTitle = oOption[key];
					break;
				case "title":					
					sTitleText = oOption[key];	
					break;			
			}	
        }
    }

	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1) 
	{		
		sOpenalign 	= "center middle";
        nLeft   	= (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    	= (objApp.mainframe.height / 2) - Math.round(nHeight / 2);		
	
	}else
	{
		nLeft   	=  this.getOffsetLeft() + nLeft;
		nTop    	=  this.getOffsetTop()  + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}
	
	var objParentFrame = this.getOwnerFrame();

    if(sPopupType == "modeless")
    {
		var sOpenStyle= "showtitlebar=" + bShowTitle  + " showstatusbar=false resizable=true autosize=true titletext="+sTitleText;
		nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
		    
	}else if(sPopupType == "modalsync")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfn_isNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		system.showModalSync(newChild, objParentFrame, oArg);	
	
	}else if(sPopupType == "modalwindow")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);       //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);          //resizable 안됨
		if(!this.gfn_isNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
        return rtn;
//      var objCF = new ChildFrame();
// 
// 		objCF .init("CF_modal", 0, 0, 500, 500);
// 		objCF .set_formurl("cmm::cmmPopup.xfdl");
// 		var ret = system.showModalWindow(objCF , "CF_modal", this.getOwnerFrame(), {a:'aaa', b:'bbb'}, this);

	}else
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);      //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);         //resizable 안됨
		if(!this.gfn_isNull(sTitleText)) 
		{
			newChild.set_titletext(sTitleText);
		}
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		newChild.showModal(objParentFrame, oArg, this, this[sPopupCallback]);
		
		//부모창 투명처리(먹제거)
		if(sOverlaycolor != false)
		{
			newChild.set_overlaycolor("transparent");
			//newChild.titlebar.closebutton.set_visible(false);
		}
    }
};
pForm = null;
/*************************** 다국어 처리에 필요한 함수들 종료*************************************************/
