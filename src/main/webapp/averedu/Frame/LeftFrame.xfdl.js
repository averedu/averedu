(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            this.set_titletext("LEFT메뉴");
            this.set_scrolltype("none");
            this.set_scrollbartype("none");
            this.getSetter("classname").set("LeftFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(225,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MY_MENU_FG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMenu","0","35",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMenu");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseexpandkey("false");
            obj.set_treeuseimage("true");
            obj.set_treeinitstatus("expand,all");
            obj.set_scrollbarsize("12");
            obj.set_scrollbartrackbarsize("20");
            obj.set_treeusebutton("no");
            obj.set_treeuseline("false");
            obj.set_cssclass("grd_LF_Menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"26\"/></Columns><Rows><Row size=\"26\"/></Rows><Band id=\"body\"><Cell edittype=\"tree\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" treestartlevel=\"2\" displaytype=\"treeitemcontrol\" cssclass=\"Lf_Menu\"/><Cell col=\"1\" displaytype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : &apos;imagecontrol&apos;\" edittype=\"expr:PROG_FG == &apos;0&apos; ? &apos;none&apos; : &apos;button&apos;\" expandshow=\"expr:PROG_FG == &apos;0&apos; ? &apos;hide&apos; : &apos;show&apos;\" expandsize=\"24\" expandimage=\"expr:PROG_FG == &apos;0&apos; ? &apos;&apos; : MY_MENU_FG == &apos;0&apos; ? &apos;theme://images/btn_WF_Bookmark.png&apos; : &apos;theme://images/btn_WF_Bookmark_S.png&apos; \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","0","0","113","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴");
            obj.set_cssclass("btn_LF_Menu_S");
            this.addChild(obj.name, obj);

            obj = new Button("btnMyMenu","113","0","112","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("즐겨찾기");
            obj.set_cssclass("btn_LF_Menu");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMyMenu","230","35","225","955",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gds_MyMenu");
            obj.set_cssclass("grd_LF_Menu");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("true");
            obj.set_treeuseexpandkey("false");
            obj.set_treeusebutton("no");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"202\"/><Column size=\"24\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" cssclass=\"Lf_Menu\"/><Cell col=\"1\" displaytype=\"imagecontrol\" edittype=\"button\" expandshow=\"show\" expandimage=\"URL(&quot;theme://images/btn_WF_Bookmark_S.png&quot;)\" expandsize=\"24\"/></Band></Format></Formats>");
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
        this.registerScript("LeftFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면  ID명) : LeftFrame.xfdl(2레벨 LEFT MENU)
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
        this.fLoad		= 0;
        this.chkSelect	= "";
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.LeftFrame_onload = function(obj, e)
        {
        	this.grdMyMenu.set_top(35);
        	this.grdMyMenu.set_left(0);
        	this.grdMyMenu.set_visible(false);

        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.LeftFrame_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg,"에러정보","","error");
        		return false;
        	}else
        	{
        		/*sSvcId (Transaction Id)*/
        		switch(sSvcId)
        		{
        			case "Save":
        					this.postSave();
        				break;
        			case "Delete":
        					this.postDelete();
        				break;
        			default:
        				break;
        		}
        	}
        };
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
        /*
         * 로그인후에 자동으로 처음 화면을 활성화처리하는 로직(TOP MENU에서 호출함)
         */
        this.fn_setLoadInitMenu = function()
        {
        	//특정메뉴코드를 로딩시 열고 싶을때 사용
        	//메뉴코드가
        	this.gfn_newOpenMenu('03020100', objApp.gds_Menu);
        	//this.gfn_newOpenMenu(this.dsMenu.getColumn(0, "MENU_ID"), this.dsMenu);
        };
        /*
         * 상위메뉴클릭시 LEFT MENU를 처리하는로직(TOP MENU에서 호출함)
         */
        this.fn_setChangeLeftMenu = function(Level1Code, MenuNm)
        {

        	if(this.chkSelect != Level1Code) //이미 선택한 메뉴코드와 클릭한 메뉴코드 서로다르면 처리
        	{

        		/*넥사크로에서 필터링을 이용한 기법이다*/
        		/*
        		var strFilter = "MENU_ID.toString().substr(0,2)=='"+Level1Code.toString().substr(0,2)+"'&&(MENU_LVL=='2'||MENU_LVL=='3'||MENU_LVL=='4')";
        		objApp.gds_Menu.filter(strFilter);
        		this.dsMenu.copyData(objApp.gds_Menu, true);
        		this.dsMenu.set_keystring("S:MENU_ID");
        		*/
        		/*DB기준으로 하고 싶을때는 넘어온 메뉴코드를 기준으로 SELECT해주면 됨*/
        		this.dsMenu.set_enableevent(false);

        		this.fn_setMenuClick();
        		this.dsMenu.clearData();
        		var strSvc 		= "";
        		var	strUrl 		= "/prj/com/RetrieveLoginLeftMenuList.do";
        		var strInDs  	= "";
        		var strOutDs 	= "dsMenu=dsMenu";    //사용자 정보
        	   	var	strArg 	    = "MENU_ID="	+ nexacro.wrapQuote(Level1Code);
        			strArg 	   += " LANGUAGE=" 	+ nexacro.wrapQuote(objApp.gv_Language);
               	var strCallBack = "fn_callBack";   // 공백일시 기본 fn_callBack
        		var strASync    = false;		   // 샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);
        		this.dsMenu.set_enableevent(true);
        		//trace(this.dsMenu.saveXML());
        	}
        	this.chkSelect = Level1Code;

        };
        /*
         *	활성화된 폼에대하여 메뉴에 선택행으로 이동함(TAB메뉴에서 호출)
         */
        this.fn_setSelectedMenuIndex = function(sMenuCd)
        {
        	// Active Form에 해당하는 메뉴 RowPosition설정
        	this.dsMenu.set_rowposition(this.dsMenu.findRowExpr("MENU_ID=='"+sMenuCd+"'"));
        };
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /*
         * 트리메뉴를 클릭이벤트 처리함(화면오픈)
         */
        this.grdMenu_oncellclick = function(obj,e)
        {
        	if(e.cell == this.grdMenu.getBindCellIndex("body","MENU_NM"))
        	{
        		if(e.clickitem == "treeitembutton")
        		{
        			return false;
        		}
        		var objDs = this[obj.binddataset];
        		var nSx = 30;
        		var nEx = 45;
        		var nRow = e.row;
        		var nLvl = objDs.getColumn(nRow, "MENU_LVL");

        		var childRow = obj.getTreeChildRow(objDs.rowposition, 0, true);
        		if (childRow  >= 0)
        		{
        			 var gridRow = obj.getTreeRow(objDs.rowposition);

        			 if(obj.isTreeCollapsedRow(childRow, true))
        			 {
        				 obj.setTreeStatus(gridRow, true);

        			 }else
        			 {
        				 obj.setTreeStatus(gridRow, false);
        			 }
        		}
        		this.gfn_newOpenMenu(objDs.getColumn(e.row, "MENU_ID"), objDs);
        	}
        };
        /*
         * 메뉴 버튼을 클릭시 이벤트를 아래 메뉴를 출력
         */
        this.btnMenu_onclick = function(obj,e)
        {
        	this.fn_setMenuClick();
        };

        this.fn_setMenuClick = function()
        {
        	this.grdMenu.set_enableevent(false);
        	this.grdMenu.bringToFront();
        	this.grdMyMenu.sendToBack();

        	this.grdMyMenu.set_visible(false);
        	this.grdMenu.set_visible(true);

        	this.btnMenu.set_cssclass("btn_LF_Menu_S");
        	this.btnMyMenu.set_cssclass("btn_LF_Menu");
        	this.grdMenu.set_enableevent(true);
        };
        /*
         * 즐겨찾기 버튼을 클릭시 이벤트를 아래 즐겨찾기메뉴를 출력
         */
        this.btnMyMenu_onclick = function(obj,e)
        {
        	this.grdMyMenu.bringToFront();
        	this.grdMenu.sendToBack();

        	this.grdMenu.set_visible(false);
        	this.grdMyMenu.set_visible(true);

        	this.btnMenu.set_cssclass("btn_LF_Menu");
        	this.btnMyMenu.set_cssclass("btn_LF_Menu_S");
        };

        this.grdMyMenu_oncellclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		var objDs = objApp.gds_MyMenu;
        		this.gfn_newOpenMenu(objDs.getColumn(e.row, "MENU_ID"), objDs);

        	}
        };
        /*
         * 즐겨찾기 등록
         */
        this.grdMenu_onexpandup = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var menuId   = this.dsMenu.getColumn(this.dsMenu.rowposition,"MENU_ID");
        	    var myMenuFg = this.dsMenu.getColumn(this.dsMenu.rowposition,"MY_MENU_FG");

        		if( myMenuFg == "1")
        		{
        			this.gfn_alert("MSG00003","즐겨찾기등록","","information");     // 이미 즐겨찾기에 등록된 메뉴입니다.
        		}else
        		{
        			this.fn_setBookmarkRegister(menuId);
        		}
        	}
        };
        /*
         * 즐겨찾기 삭제
         */
        this.grdMyMenu_onexpandup = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var menuId  =  objApp.gds_MyMenu.getColumn(objApp.gds_MyMenu.rowposition,"MENU_ID");
        		this.fn_setDeleteBookmark(menuId);
        	}
        };
        /**
         * 기능 : 즐겨찾기 등록 전 실행
         */
        this.preSave = function(menuId)
        {
        	var result = this.gfn_confirm( " 즐겨찾기에 등록 하시겠습니까?", "저장","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	var findIndex 	= objApp.gds_Menu.findRow("MENU_ID", menuId);
        	var nRow        = objApp.gds_MyMenu.addRow();
        	objApp.gds_MyMenu.copyRow(nRow,objApp.gds_Menu,findIndex);
        	objApp.gds_Menu.setColumn(findIndex,"MY_MENU_FG","1");

        	var winKey = objApp.gds_OpenMenu.lookup("MENU_ID", menuId, "WINID"); 			// 이미 OPEN한 화면아이디를 검색한다.
        	if(!this.gfn_isNull(winKey))
        	{
        		objApp.gv_appWorkFrameSet.all[winKey].form.div_Title.form.fn_setMyMenuBtn();
        	}
        	return true;
        };
        /*
         * 즐겨찾기 등록 처리
         */
        this.fn_setBookmarkRegister = function (menuId)
        {
        	if(!this.preSave(menuId))
        	{
        		return false;
        	}

        	var strSvc 		= "Save";
        	var	strUrl 		= "/prj/com/SaveBookmarkRegister.do";
        	var strInDs  	= "gds_userInfoDb=gds_userInfoDb:a ";
        	    strInDs    += "gds_MyMenu=gds_MyMenu:u";
        	var strOutDs 	= "gds_MyMenu=gds_MyMenu";    // 사용자 정보
        	var	strArg 	    = "";
        	var strCallBack = "fn_callBack";   			  // 공백일시 기본 fn_callBack
        	var strASync    = true;		   				  // 샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        };
        /**
         *	기능 : 저장시 후처리
         */
        this.postSave = function()
        {
        	this.dsMenu.setColumn(this.dsMenu.rowposition,"MY_MENU_FG","1");
        	this.gfn_alert("즐겨찾기 등록 했습니다.","즐겨찾기등록","","information");
        };


        /**
         * 기능 : 즐겨찾기 삭제 전 실행
         */
        this.preDelete = function(menuId)
        {
        	var result = this.gfn_confirm( " 즐겨찾기에서 삭제 하시겠습니까?", "삭제","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	var nRow = objApp.gds_MyMenu.findRow("MENU_ID", menuId);
        	objApp.gds_MyMenu.deleteRow(nRow);

        	var xRow = this.dsMenu.findRow("MENU_ID", menuId);
        	if(xRow > -1)
        	{
        		this.dsMenu.setColumn(xRow,"MY_MENU_FG","0");
        	}
        	var mRow = objApp.gds_Menu.findRow("MENU_ID", menuId);
        	if(mRow > -1)
        	{
        		objApp.gds_Menu.setColumn(mRow,"MY_MENU_FG","0");
        	}else
        	{
        		this.gfn_alert("이미 메뉴에 없는 메뉴입니다.","즐겨찾기삭제","","information");
        	}

        	var winKey = objApp.gds_OpenMenu.lookup("MENU_ID", menuId, "WINID"); 			// 이미 OPEN한 화면아이디를 검색한다.
        	if(!this.gfn_isNull(winKey))
        	{
        		objApp.gv_appWorkFrameSet.all[winKey].form.div_Title.form.fn_setMyMenuBtn();
        	}
        	return true;
        };


        /*
         * 즐겨찾기 삭제 처리
         */
        this.fn_setDeleteBookmark = function (menuId)
        {
        	if(!this.preDelete(menuId))
        	{
        		return false;
        	}

        	var strSvc 		= "Delete";
        	var	strUrl 		= "/prj/com/DeleteBookmark.do";
        	var strInDs  	= "gds_userInfoDb=gds_userInfoDb:a ";
        	    strInDs    += "gds_MyMenu=gds_MyMenu:u";
        	var strOutDs 	= "";
        	var	strArg 	    = "";
        	var strCallBack = "fn_callBack";   			  // 공백일시 기본 fn_callBack
        	var strASync    = true;		   				  // 샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        };

        /**
         *	기능 : 즐겨찾기 삭제후 처리 후처리
         */
        this.postDelete = function()
        {

        	this.gfn_alert("즐겨찾기에서 삭제  했습니다.","즐겨찾기삭제","","information");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.LeftFrame_onload,this);
            this.addEventHandler("onclose",this.LeftFrame_onclose,this);
            this.grdMenu.addEventHandler("oncellclick",this.grdMenu_oncellclick,this);
            this.grdMenu.addEventHandler("onexpandup",this.grdMenu_onexpandup,this);
            this.btnMenu.addEventHandler("onclick",this.btnMenu_onclick,this);
            this.btnMyMenu.addEventHandler("onclick",this.btnMyMenu_onclick,this);
            this.grdMyMenu.addEventHandler("oncellclick",this.grdMyMenu_oncellclick,this);
            this.grdMyMenu.addEventHandler("onexpandup",this.grdMyMenu_onexpandup,this);
        };
        this.loadIncludeScript("LeftFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
