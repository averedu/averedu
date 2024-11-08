(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TabMenu");
            this.set_titletext("TAB메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(1780,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_MDI_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Home","0","0","35","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MDI_Home");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreMdi",null,"7","22","22","207",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("btn_MDI_Tabprev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NexMdi",null,"7","22","22","180",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_cssclass("btn_MDI_Tabnext");
            this.addChild(obj.name, obj);

            obj = new Button("btn_max",null,"7","22","22","148",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("maximize");
            obj.set_cssclass("btn_MDI_Max");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cas",null,"7","22","22","121",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("cascade");
            obj.set_cssclass("btn_MDI_Cascade");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Horizon",null,"7","22","22","94",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("horizontal");
            obj.set_cssclass("btn_MDI_ArrV");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Vertical",null,"7","22","22","67",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("vertical");
            obj.set_cssclass("btn_MDI_ArrH");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"7","22","22","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("closeAll");
            obj.set_cssclass("btn_MDI_AllX");
            this.addChild(obj.name, obj);

            obj = new Div("div_Tab","45","0",null,"35","249",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","55","115","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Button00Button00");
            obj.set_cssclass("btn_MDI_Tabbtn");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","176","115","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Button01Button01");
            obj.set_cssclass("btn_MDI_Tabbtn_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","151","119","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_Tabextra");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","272","119","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_MDI_Tabextra");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_newOpen",null,"7","22","22","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.getSetter("userdata").set("closeAll");
            obj.set_cssclass("btn_MDI_Cascade");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TabFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면  ID명) : TabFrame.xfdl(TAB메뉴)
        * 작 성		   일 명 : jiback
        * 작 성	       일 자 : 2018/08/25
        * 변 경        일 자 :
        * 변 경        자 명 :
        * 변경 및 수정 로 그 : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.nFirstGap 			= 1;
        this.nBtnGap 			= 0;
        this.nTop 				= 5;
        this.nRight             = 50;
        this.nBottom 			= 35;
        this.nExtraButtonLeft 	= 20;
        this.nExtraButtonTop 	= 5;
        this.nExtraButtonWidth 	= 20;
        this.nExtraButtonHeight = 30;
        this.nBtnCount 			= 0;
        this.nBtnStart 			= 1;
        this.nBtnEnd 			= 6;

        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.TabMenu_onload = function(obj,e)
        {
        	 this.set_scrolltype("none");
        	 this.div_Tab.set_formscrollbarsize(0);
        	 this.fn_setTabFrameBtnVisT();
        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.TabMenu_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 엑셀업로드
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        this.fn_setTabFrameBtnVisT = function()
        {
        	this.btn_PreMdi.set_visible(true);
        	this.btn_NexMdi.set_visible(true);
        };

        this.fn_setTabFrameBtnVisF = function()
        {
        	this.btn_PreMdi.set_visible(false);
        	this.btn_NexMdi.set_visible(false);
        };
        /*
         * LEFT그리드를 클릭시 TAB선택한 버튼 만들고 닫기버튼을 활성화 시킨다.
         */
        this.fn_setNaviAdd = function(naviCD, naviNM)
        {
        	var nGap 			= this.fn_getLeftStart(naviCD); 							// 버튼의 Left시작 픽셀

        	//페이지 버튼 생성
        	var objBtn = new Button();														// TAB 버튼을 생성
        	objBtn.init(naviCD,0, 0, 0, 0,null,null);										// TAB 버튼 초기값
            ///////////////////////////////////////////////////
            this.div_Tab.form.addChild(objBtn.name, objBtn);								// DIV위에 TAB버튼을 생성
        	objBtn.set_text(naviNM);														// TAB버튼을 이름을 셋팅
        	objBtn.set_tooltiptext(naviNM);             									// 툴팁은 화면이름츨 출력한다.
        	objBtn.set_cssclass("btn_MDI_Tabbtn");											// CSS TAB버튼을 스타일가이드

        	objBtn.setEventHandler("onclick", this.Button_onclick, this);					// 이벤튼 핸들러를 셋팅한다.(Button_onclick)
        	objBtn.set_textAlign("center");
        	objBtn.set_padding("0px 10px 0px 0px");
        	objBtn.set_cursor("pointer");
        	objBtn.show();																	// 버튼을 활성화

        	objBtn.setOffsetLeft(nGap);														// TAB LEFT 만들때 위치 동적
        	objBtn.setOffsetTop(this.nTop);													// TAB TOP  만들때 위치 현재 0동일 셋팅
        	objBtn.setOffsetRight(nGap + this.fn_getTextSizeCal(naviNM)[0] + this.nRight);	// TAB RIGHT 만들때 위치 동적
        	objBtn.setOffsetBottom(this.nBottom);											// TAB BOTTOM 만들때 위치 현재 23도일 셋팅.
        	objBtn.set_visible(true);
        	///////////////////////////////////////////////////
        	//페이지 닫기 버튼 생성
        	var objExtraBtn = new Button();
        	objExtraBtn.init(naviCD + "__EX", objBtn.getOffsetRight()-this.nExtraButtonLeft, this.nExtraButtonTop, this.nExtraButtonWidth, this.nExtraButtonHeight,null,null);
        	this.div_Tab.form.addChild(objExtraBtn.name, objExtraBtn);
        	objExtraBtn.set_cssclass("btn_MDI_Tabextra");

        	objExtraBtn.set_cursor("pointer");
        	objExtraBtn.setEventHandler("onclick", this.ExtraButton_onclick, this);
        	objExtraBtn.set_visible(true);
        	objExtraBtn.show();
        	this.nBtnCount++;
        	//생성된 페이지의 갯수에 따라 네비게이션을 한칸 이동할지 현재로 유지할지 결정
        	if(this.nBtnCount > this.nBtnEnd)
        	{
        		this.nBtnStart = this.nBtnCount - this.nBtnEnd;
        		this.fn_BtnMove("NEXT");

        	}else
        	{
        		this.fn_BtnMove("MOVE");
        	}
        												// 버튼 COUNT
        	this.div_Tab.form.resetScroll();
        	objBtn.setFocus();

        };
        this.fn_getLeftStart = function(tabID)
        {
        	var iCurrRow = objApp.gds_OpenMenu.findRow("WINID",tabID);
        	if (iCurrRow == 0)
        	{
        		objApp.gv_appMainForm.set_visible(false);
        		return this.nFirstGap;
        	}
        	var prevTab = this.fn_getFindTabObj(objApp.gds_OpenMenu.getColumn(iCurrRow - 1, "WINID"));

        	return prevTab.getOffsetRight() + this.nBtnGap;
        };

        this.fn_getFindTabObj = function (strId)
        {
        	return this.div_Tab.form.components[strId];
        };


        //선택된페이지의 Button을 Select상태로 만들고
        //해당하는페이지가 현재페이지 네비게이션에 보이지
        //않을경우 네비게이션에 보이는 Button의 위치를 변경해
        //선택된페이지가 네비게이션에 보이도록 한다.
        this.fn_activeTabpage = function(naviCD)
        {
        	var i;
        	var sWINID;
        	var nRow;
        	var nBtnMoveCount;

        	for(i = 0; i < objApp.gds_OpenMenu.rowcount; i++)
        	{
        		sWINID = objApp.gds_OpenMenu.getColumn(i, "WINID");
        		if(this.gfn_isNull(this.div_Tab.form.components[sWINID])==true)
        		{
        			continue;
        		}
        		this.div_Tab.form.components[sWINID].set_cssclass("btn_MDI_Tabbtn");
        		if(this.gfn_isNull(this.div_Tab.form.components[sWINID+"__EX"])==true)
        		{
        			continue;
        		}
        		this.div_Tab.form.components[sWINID+"__EX"].set_cssclass("btn_MDI_Tabextra");
        	}

        	if(this.gfn_isNull(this.div_Tab.form.components[naviCD])==false)
        	{
         		this.div_Tab.form.components[naviCD].set_cssclass("btn_MDI_Tabbtn_S");
        		this.div_Tab.form.resetScroll();
        		this.div_Tab.form.components[naviCD].setFocus();
        	}

        	nRow = objApp.gds_OpenMenu.findRow("WINID", naviCD)
        	objApp.gds_OpenMenu.set_rowposition(nRow);
        	//MDI메뉴에서 선택된 메뉴코드를 이용해서 leftFrame의 메뉴INDEX를 표시
        	objApp.gv_appLeftFrame.form.fn_setSelectedMenuIndex(naviCD.substr(0,8));
        	this.gfn_ActiveFrame(naviCD);
        };



        //페이지가 닫아졌을때 해당페이지의 네비게이션 버튼과 닫기버튼을 삭제한다.
        this.fn_deleteTabpage = function(naviCD)
        {
        	var i;
        	var sWINID;
        	var nGap = 0;
        	if(this.gfn_isNull(this.div_Tab.form.components[naviCD])==false)
        	{
        		nGap = this.div_Tab.form.all[naviCD].getOffsetWidth();
        		this.div_Tab.form.all[naviCD+"__EX"].set_visible(false);
        	}

            var nRow = objApp.gds_OpenMenu.findRow("WINID", naviCD);
            if(nRow > -1)
            {
        		for(i=nRow; i < objApp.gds_OpenMenu.rowcount;i++)
        		{
        			sWINID = objApp.gds_OpenMenu.getColumn(i, "WINID");
        			this.div_Tab.form.all[sWINID].move(this.div_Tab.form.components[sWINID].left-(nGap +1), this.nTop);
        			this.div_Tab.form.all[sWINID+"__EX"].move(this.div_Tab.form.all[sWINID].getOffsetRight()-20, this.nExtraButtonTop);
        			this.div_Tab.form.removeChild(naviCD);
        			this.div_Tab.form.removeChild(naviCD+"__EX");
        		}
         	}
        };

        this.fn_movePage = function(naviCD)
        {
        	var i;
        	var nRow = objApp.gds_OpenMenu.findRow("WINID", naviCD)
        	var nBtnMoveCount;
        	if(nRow < this.nBtnStart - 1)
        	{
        		nBtnMoveCount = (this.nBtnStart-1) - nRow;
        		for(i=0;i<nBtnMoveCount;i++)
        		{
        			this.fn_BtnMove("PREV");
        		}

        	}else if(nRow > this.nBtnStart+this.nBtnEnd-2)
        	{
        		nBtnMoveCount = nRow - (this.nBtnStart+this.nBtnEnd-2);
        		for(i=0;i<nBtnMoveCount;i++)
        		{
        			this.fn_BtnMove("NEXT");
        		}
        	}
        };

        //선택된 Type에 따라 버튼의 위치를 이동시킨다.
        this.fn_BtnMove = function(Type)
        {
        	if(Type=="PREV")
        	{
        		if(this.nBtnStart != 1)
        		{
        			this.nBtnStart--;
        		}
        	}else if(Type=="NEXT")
        	{
        		if(this.nBtnStart != objApp.gds_OpenMenu.rowcount-this.nBtnEnd + 1 && objApp.gds_OpenMenu.rowcount > this.nBtnEnd)
        		{
        			this.nBtnStart++;
        		}
        	}else if(Type=="MOVE")
        	{
        		this.nBtnStart=this.nBtnStart;
        	}

        	if(this.nBtnStart==1)
        	{
        		this.btn_PreMdi.set_enable(false);
        	}
        	if(this.nBtnStart == objApp.gds_OpenMenu.rowcount - this.nBtnEnd + 1 || objApp.gds_OpenMenu.rowcount <= this.nBtnEnd)
        	{
        		this.btn_NexMdi.set_enable(false);
        	}
        };

        this.fn_getTextSizeCal = function(strText)
        {
        	var objStatic  = new nexacro.Static();
        	objStatic.init( "objStatic", 0, 0, 0, 0);
        	this.addChild("objStatic", objStatic);
        	objStatic.set_text(strText);
        	objStatic.set_fittocontents("both");
        	objStatic.set_visible(false);
        	objStatic.show();

        	var width = 0, height = 0;

        	width = objStatic.getOffsetWidth();
        	height = objStatic.getPixelHeight();

        	this.removeChild("objStatic");
        	objStatic.destroy();

        	return [width, height];
        };

        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        this.btn_Home_onclick = function(obj,e)
        {
        	this.gfn_ArrangeWin("closeAll",obj.name);
        };

        this.btn_Arrange_onclick = function(obj,e)
        {
        	 this.gfn_ArrangeWin(obj.userdata,obj.name);
        };

        //버튼클릭시 해당페이지로 focus를 이동하여 해당페이지를 Active상태로 만든다.
        this.Button_onclick = function(obj,e)
        {
        	this.fn_activeTabpage(obj.name);
        };

        this.div_Tab_onhscroll = function(obj,e)
        {
        	if(e.pos==0 && this.div_Tab.form.hscrollbar.max > 0)
        	{
        		this.btn_NexMdi.set_enable(true);
        	}

        	if(e.pos==this.div_Tab.form.hscrollbar.max && this.div_Tab.form.hscrollbar.max > 0)
        	{
        		this.btn_PreMdi.set_enable(true);
        	}
        };

        this.div_Tab_onsize = function(obj,e)
        {
        	this.nBtnEnd = Math.round(obj.getOffsetWidth()/130);
        	this.fn_BtnMove("MOVE");
        };

        //네비게이션 이전버튼 클릭시
        this.btn_PreMdi_onclick = function(obj,e)
        {
        	this.div_Tab.form.hscrollbar.set_pos(this.div_Tab.form.hscrollbar.pos - this.div_Tab.form.hscrollbar.page);
        };

        //네비게이션 다음버튼 클릭시
        this.btn_NexMdi_onclick = function(obj,e)
        {
        	this.div_Tab.form.hscrollbar.set_pos(this.div_Tab.form.hscrollbar.pos + this.div_Tab.form.hscrollbar.page);
        };

        //닫기버튼 클릭시 해당하는 페이지를 닫는다.
        this.ExtraButton_onclick = function(obj,e)
        {
        	 this.gfn_TabOnClose(obj.name.replace("__EX", ""));
             if(objApp.gds_OpenMenu.rowcount > 0)
             {
        		this.fn_activeTabpage(objApp.gds_OpenMenu.getColumn(objApp.gds_OpenMenu.rowposition,"WINID"));
        	 }
        };


        this.btn_newOpen_onclick = function(obj,e)
        {
        	var sMenuId 			= objApp.gds_OpenMenu.getColumn(objApp.gds_OpenMenu.rowposition,"MENU_ID");

        	if(this.gfn_isNull(sMenuId))
        	{
        		return false;
        	}

        	var nRow  				= objApp.gds_Menu.findRow("MENU_ID", sMenuId);
        	var sMenuNm 			= objApp.gds_Menu.getColumn(nRow, "MENU_NM");
        	var sFormId 			= objApp.gds_Menu.getColumn(nRow, "FORM_ID");
        	var sFormPath			= objApp.gds_Menu.getColumn(nRow, "FORM_PATH");
        	var sUrl        		= sFormPath+"::"+sFormId;
        	var sMenuNmPath 		= objApp.gds_Menu.getColumn(nRow, "DEPT_NAME");
        	var sTempNewParam 		= "";
        	var sMenuTitle2          = "";
        	if(sFormId.indexOf("xfdl?") > 0)
        	{
        		var sTempPgmId 		= sFormId;
        			sFormId 		= sTempPgmId.substr(0,sTempPgmId.indexOf("xfdl?") + 4);
        		    sTempNewParam 	= sTempPgmId.substr(sTempPgmId.indexOf("xfdl?")  + 5);
        	}
        	var pNewOpen    		= true;
        	var pWinKey 			= objApp.gds_OpenMenu.getColumn(objApp.gds_OpenMenu.rowposition,"WINID");
        	var pMenuId 			= objApp.gds_Menu.getColumn(nRow,"MENU_ID");
        	var pProgramId  		= sFormId;
        	var pUrl 				= sUrl;
        	var pMenuTitle  		= sMenuNm;
        	var pMenuNmPath 		= sMenuNmPath;
        	var pArgs       		= sTempNewParam;

        	var oArg 				= { prmNewOpen:pNewOpen
        							  , prmWinKey:pWinKey
        							  , prmMenuId:pMenuId
        							  , prmProgramId:pProgramId
        							  , prmUrl:pUrl
        							  , prmMenuTitle:pMenuTitle
        							  , prmMenuTitle2:sMenuTitle2
        							  , prmMenuNmPath:pMenuNmPath
        							  , prmArgs:pArgs
        							};
        	var oOption 			= {showtitlebar:"true",popuptype:"modeless",top:140,left:240};

        	var sPopupCallBack 		= "fn_popupCallback";
        	this.gfn_openPopup( "newOpen_"+sMenuId
        	                  , "Frame::WorkFrame.xfdl"
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TabMenu_onload,this);
            this.addEventHandler("onclose",this.TabMenu_onclose,this);
            this.btn_Home.addEventHandler("onclick",this.btn_Home_onclick,this);
            this.btn_PreMdi.addEventHandler("onclick",this.btn_PreMdi_onclick,this);
            this.btn_NexMdi.addEventHandler("onclick",this.btn_NexMdi_onclick,this);
            this.btn_max.addEventHandler("onclick",this.btn_Arrange_onclick,this);
            this.btn_cas.addEventHandler("onclick",this.btn_Arrange_onclick,this);
            this.btn_Horizon.addEventHandler("onclick",this.btn_Arrange_onclick,this);
            this.btn_Vertical.addEventHandler("onclick",this.btn_Arrange_onclick,this);
            this.btn_closeAll.addEventHandler("onclick",this.btn_Arrange_onclick,this);
            this.div_Tab.addEventHandler("onsize",this.div_Tab_onsize,this);
            this.div_Tab.addEventHandler("onhscroll",this.div_Tab_onhscroll,this);
            this.btn_newOpen.addEventHandler("onclick",this.btn_newOpen_onclick,this);
        };
        this.loadIncludeScript("TabFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
