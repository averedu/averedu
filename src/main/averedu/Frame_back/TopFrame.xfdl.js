(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TopFrame");
            this.set_titletext("TOP메뉴");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,70);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"REG_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRT_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOWN_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_PATH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPdivMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"UP_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_DC\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_LVL\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"MENU_DIV\" type=\"STRING\" size=\"32\"/><Column id=\"LINK_YN\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"REG_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRT_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"DOWN_YN\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"IS_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"IS_RET\" type=\"STRING\" size=\"256\"/><Column id=\"IS_SAVE\" type=\"STRING\" size=\"256\"/><Column id=\"IS_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_EXCEL\" type=\"STRING\" size=\"256\"/><Column id=\"IS_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"IS_CONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP1\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP2\" type=\"STRING\" size=\"256\"/><Column id=\"IS_TMP3\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP1_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP2_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TMP3_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_FG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChangeComp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODENM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">TEST11</Col><Col id=\"CODENM\">TEST1</Col></Row><Row><Col id=\"CODE\">TEST21</Col><Col id=\"CODENM\">TEST2</Col></Row><Row><Col id=\"CODE\">TEST31</Col><Col id=\"CODENM\">TEST3</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_sessionTime",null,"158","141","24","231",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("30:00");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 10px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,"3","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_TopLine");
            this.addChild(obj.name, obj);

            obj = new Menu("nuTopMenu","225","30",null,"39","345",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTopMenu");
            obj.set_idcolumn("MENU_ID");
            obj.set_captioncolumn("MENU_NM");
            obj.set_levelcolumn("MENU_LVL");
            obj.set_enablecolumn("enable");
            obj.set_userdatacolumn("USER_DATA");
            this.addChild(obj.name, obj);

            obj = new Div("divUserInfo",null,"6","436","23","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("position").set("fixed");
            obj.set_text("Div00");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnUserLogoutNm",null,"0","70","22","0",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("9");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_Logout");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("Static08",null,"0","20","20","btnUserLogoutNm:0",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("6");
            obj.set_text("|");
            obj.set_cssclass("sta_TF_Hline");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("staUserLoginNm","212","0","51","20",null,null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("6");
            obj.set_usedecorate("true");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("staUserLoginTit",null,"0","90","22","Static08:-2",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("7");
            obj.set_text("COP00021");
            obj.set_cssclass("sta_TF_Info");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("Static03",null,"10","1","10","52",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_TF_WelcomeLine");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("Static07",null,"0","20","20","staUserLoginTit:40",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("5");
            obj.set_text("|");
            obj.set_cssclass("sta_TF_Hline");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("staUserLoginDt",null,"0","138","22","Static07:0",null,null,null,null,null,this.divUserInfo.form);
            obj.set_taborder("8");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_TF_Info");
            this.divUserInfo.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("#005d90");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","260","5",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#00b1f1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","220","5",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#a99767");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","150","5",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#8b1d04");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","70",null,"1","2",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#8d8e91");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMenuSearch",null,"38","210","24","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_displaynulltext("메뉴를 검색하세요.");
            obj.set_cssclass("edi_TF_Search");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuSearch",null,"38","27","24","16",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("uWord").set("frame.searchMenu.button");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivMenuSearch","1694","62","210","180",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMenuSearch","0","0","210","180",null,null,null,null,null,null,this.pdivMenuSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_TF_Search");
            obj.set_autofittype("col");
            obj.set_binddataset("dsPdivMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"211\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdivMenuSearch.addChild(obj.name, obj);

            obj = new Button("btn_addSession",null,"158","141","24","231",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("로그인연장");
            obj.set_textAlign("right");
            obj.set_padding("0px 10px 0px 0px");
            obj.set_background("transparent");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLogo","0","5","226","65",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_image("url(\'Img::aver_logo.png\')");
            obj.set_border("0px none");
            obj.set_enableevent("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","nuTopMenu","","menu","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TopFrame.xfdl", function() {
        /**********************************************************************
        * FormID(화면  ID명)  : TopFrame.xfdl(1레벨 메뉴)
        * 작 성         일 명 : jiback
        * 작 성         일 자 : 2015/08/25
        * 변 경         일 자 :
        * 변 경         자 명 :
        * 변경 및 수정 로 그  : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        //메뉴이동시 열린페이지 닫을때 취소여부 체크
        this.isChecked    = true;
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.TopFrame_onload = function(obj,e)
        {
        	//로그인정보 셋팅
            //trace(objApp.gds_userInfoDb.saveXML());
            if(objApp.gds_SystemDate.rowcount > 0)  																// 서버에 로그인 날짜를 db에서 가지왔을때 처리
            {
        		this.divUserInfo.form.staUserLoginDt.set_text(objApp.gds_SystemDate.getColumn(0,"KOR_YYYYMMDD")); 	// 시스템날짜
        		this.divUserInfo.form.staUserLoginNm.set_text(objApp.gds_userInfoDb.getColumn(0,"USER_NM"));		// 로그인사용자
            }else																									// 서버에 로그인날짜를 못가지고 왔을때
            {
        		this.divUserInfo.form.staUserLoginDt.set_text("");													// 공백으로 치환
        		this.divUserInfo.form.staUserLoginNm.set_text("");                                                	// 공백으로 치환
            }

            if(objApp.gds_Component.rowcount > 0)                                                               	// 다국어 처리시 컴포넌트 다국어 코드값을 가지고 왔을때 처리
            {
        		var indexDataRow 	= objApp.gds_Component.findRow( "COP_CODE", "COP00021" );						// 로그인했습니다.
        		var indexLogOutRow 	= objApp.gds_Component.findRow( "COP_CODE", "COP00022" );                   	// 로그아웃 다국어처리 코드
        		var strDataTitle 	= objApp.gds_Component.getColumn(indexDataRow	,"COP_NAME");               	// 로그인시 ko/en영문으로 조회
        		var strLogOut		= objApp.gds_Component.getColumn(indexLogOutRow	,"COP_NAME");               	// 로그인시 ko/en영문으로 조회

        		this.divUserInfo.form.staUserLoginTit.set_text(strDataTitle);										// 로그인 타이틀
        		this.divUserInfo.form.btnUserLogoutNm.set_text(strLogOut);											// 로그아웃 버튼 셋팅
        	}
        	this.fn_setTopSetting();   																				// 1레벨 메뉴 셋팅
        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.TopFrame_onclose = function(obj,e)
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
        /*
         * 1레벨 메인메뉴하고 2레벨 LEFT메뉴의 동시성때문에 시간으로 두고 1레벨을 불러서 처리후 2레벨(LEFT MENU)메뉴를 호출한다.
         */
        this.fn_setTopSetting = function()
        {
        	this.setTimer(1,500);   //1레벨 메뉴호출 0.5초 대기
        	this.setTimer(2,500);   //2레벨 메뉴호출 0.5초 대기
        };
        /*
         * 1레벨 메인메뉴를 화면상에보여준다.
         */
        this.fn_getTopMenuOpen = function()
        {
        	objApp.gds_Menu.filter("MENU_LVL==0 && LINK_YN==1");							// (1레벨메뉴)Top메뉴리스트 필터(DB구조에 따라 변경할수 있음
        	this.dsTopMenu.copyData(objApp.gds_Menu,true);									// (1레벨메뉴를 카피) gds_Menu 전체리스트를 카피 한다...
        	objApp.gds_Menu.filter("");														// 전체메뉴를 언필드 한다.
        	this.killTimer(1);																// 호출이 끝나면 아이디1을 타임어를 죽인다.
        };
        /*
         * 2레벨 LEFT MENU 오른쪽레이블을 호출하면서 불러온다.(첫번째에 메뉴에 있는 오늘쪽메뉴를 불러옴)
         */
        //application로딩시 트리메뉴 리스트 출력
        this.fn_callLeftMenuOpen = function()
        {
        	if(!this.gfn_isNull(objApp.gv_appLeftFrame.form))                               // 오른뽁폼에 로딩 했은지 확인
        	{
        		if(objApp.gds_Menu.rowcount > 0 && objApp.gv_Flag==true)              		 // 전체메뉴를 조회했는지 확인
        		{
        			var strMenuCd = objApp.gds_Menu.getColumn(0,"MENU_ID");                  // 첫번째 메뉴코드
        			var strMenuNm = objApp.gds_Menu.getColumn(0,"MENU_NM");                  // 첫번째 메뉴이름
        			objApp.gv_appLeftFrame.form.fn_setChangeLeftMenu(strMenuCd, strMenuNm);  // 첫번째 아래 메뉴리스트
        			objApp.gv_appLeftFrame.form.fn_setLoadInitMenu();						 // 로그인시 메인쪽에 바로 화면을 띠우고 싶을때사용.
        		}
        		this.killTimer(2);
        	}
        };

        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /*
         * 메뉴를 순서적으로 처리하기 위해 타이머를 사용한다...
         */
        this.TopFrame_ontimer = function(obj,e)
        {
        	if(e.timerid == 1)
        	{
        		this.fn_getTopMenuOpen();

        	}else if(e.timerid == 2)
        	{
        		this.fn_callLeftMenuOpen();
        	}
        };
        /*
         * 메뉴를 클릭시 지금 선택한 1레벨 메뉴코드를 찾아 하부레벨 코드를 가지고 온다.
         */
        this.nuTopMenu_onmenuclick = function(obj,e)
        {
        	//alert(e.id);
        	//objApp.gv_leftFrame.form.fn_setMenu(e.id);
        	var nRow = this.dsTopMenu.findRow("MENU_ID",e.id);
        	if(nRow > -1)
        	{
        		var sLeftShowFlag = objApp.gv_appHideShowFrame.form.btnHideShow.toggle;
        		if(sLeftShowFlag == "SHOW")   //LEFT프레임이 접혀있을 때만 펼처라
        		{
        			objApp.gv_appHideShowFrame.form.fn_setClickToggle();
        		}
        		var menuText = this.dsTopMenu.getColumn(nRow,"MENU_NM");
        		objApp.gv_appLeftFrame.form.fn_setChangeLeftMenu(e.id, menuText);
        	}
        };

        /*
         * 로그아웃버튼을 클릭시 모든것을 초기화처리함.
         */
        this.divUserInfo_btnLogout_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm( "MSG00021", "로그아웃","","question" ); // 로그아웃 하시겠습니까?
            if(result == 0)
            {
        		return false;
            }

        	var strSvc 		= "logout";
        	var strUrl 		= "/prj/com/logout.do";
        	var strInDs  	= "";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    // 공백일시 기본 fn_callBack
        	var strASync    = true;			    // 생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);
        };

        /**
         * 기능 : 로그아웃 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	switch(sSvcId)
        	{
        		case "logout":
        			this.fn_logout();
        			break;
        		default:
        			break;
        	}

        };

        /**
         * 기능 : 로그아웃 프레임정리
         */
        this.fn_logout = function()
        {
        	var iFramesCnt = objApp.gv_appWorkFrameSet.frames.length;
        	for(var i=iFramesCnt-1; i>=0; i--)
        	{
        		strWinKey = objApp.gv_appWorkFrameSet.frames[i].name;

        		if(objApp.gv_appWorkFrameSet.frames[i].name == "mainForm")
        		{

        			objApp.gv_appMainForm.set_formurl("");
        			//continue;
        		}else
        		{
        			this.gfn_TabOnClose(strWinKey);
        		}
        	}
        	objApp.gds_OpenMenu.clearData();
        	objApp.gds_userInfoDb.clearData();
        	objApp.gds_Menu.clearData();
        	objApp.gds_SystemDate.clearData();
        	objApp.gds_Message.clearData();
        	objApp.gds_Component.clearData();
        	this.dsTopMenu.clearData();
        	objApp.gv_appLeftFrame.form.dsMenu.clearData();
        	objApp.gv_appLeftFrame.form.chkSelect = "";
        	objApp.gv_appLoginFrame.form.fn_initclearId(); // id, pw 초기화
        	this.gfn_setFrameChange("login");
        }

        /**
         * @description 글로벌 데이터셋 메뉴 카피(로그인시 복사)
        */
        this.fn_globalMenuCopy = function ()
        {
        	this.dsPdivMenu.copyData(objApp.gds_Menu);
        };
        /*
         * 메뉴검색을 입력 후 키보드 엔터(Enter) 첬을때 팝업조회
         */
        this.edtMenuSearch_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		var sNm = this.gfn_trim(obj.value);
        		this.fn_searchMenu(sNm);
        	}
        };
        /*
         * 메뉴검색을 입력 후 옆에 검색버튼을 클릭시 팝업조회
         */
        this.btnMenuSearch_onclick = function(obj,e)
        {
        	var sNm = this.gfn_trim(this.edtMenuSearch.text);
        	this.fn_searchMenu(sNm);
        };
        /*
         * 메뉴을 like 검색을 처리한다.
         */
        this.fn_searchMenu = function (sNm)
        {
        	this.dsPdivMenu.set_enableevent(false);
        	this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(false);

        	this.dsPdivMenu.filter("");
        	if(this.gfn_isNull(sNm))
        	{
        		return false;
        	}
        	sNm = this.gfn_trim(sNm);

        	this.dsPdivMenu.filter("(PROG_FG == '1') && MENU_NM.toLowerCase().indexOf('"+sNm+"') > -1");

        	this.dsPdivMenu.set_enableevent(true);
        	this.pdivMenuSearch.form.grdMenuSearch.set_enableredraw(true);

        	this.pdivMenuSearch.trackPopupByComponent(this.edtMenuSearch, 0, this.edtMenuSearch.getOffsetHeight());

        	this.pdivMenuSearch.form.grdMenuSearch.setFocus();
        	this.dsPdivMenu.set_rowposition(0);
        	this.pdivMenuSearch.form.grdMenuSearch.selectCell(0,0,true);
        };
        /*
         * 메뉴을 클릭시 화면에 작업프레임에 오픈함.
         */
        this.pdivMenuSearch_grdMenuSearch_oncellclick = function(obj,e)
        {
        	if( e.row > -1)
        	{
        	    this.gfn_newOpenMenu(this.dsPdivMenu.getColumn(e.row, "MENU_ID"), this.dsPdivMenu);
        		this.pdivMenuSearch.closePopup();
        		this.edtMenuSearch.set_value("");
        	}
        };
        /*
         * 메뉴을 클릭시 화면에 작업프레임에 오픈함.
         */
        this.pdivMenuSearch_grdMenuSearch_onkeydown = function(obj,e)
        {

        	if( e.keycode == 13 )
        	{
        		if(obj.currentrow> -1 )
        		{
        			this.gfn_newOpenMenu(this.dsPdivMenu.getColumn( obj.currentrow, "MENU_ID"), this.dsPdivMenu);
        			this.pdivMenuSearch.closePopup();
        			this.edtMenuSearch.set_value("");
        		}
        	}
        };

        // 대학이미지 클릭시 모든 탭 삭제
        this.imgLogo_onclick = function(obj,e)
        {
        	this.gfn_ArrangeWin("closeAll",obj.name);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TopFrame_onload,this);
            this.addEventHandler("onclose",this.TopFrame_onclose,this);
            this.addEventHandler("ontimer",this.TopFrame_ontimer,this);
            this.sta_sessionTime.addEventHandler("onclick",this.Common_onclick,this);
            this.nuTopMenu.addEventHandler("onmenuclick",this.nuTopMenu_onmenuclick,this);
            this.divUserInfo.form.btnUserLogoutNm.addEventHandler("onclick",this.divUserInfo_btnLogout_onclick,this);
            this.edtMenuSearch.addEventHandler("onkeydown",this.edtMenuSearch_onkeydown,this);
            this.btnMenuSearch.addEventHandler("onclick",this.btnMenuSearch_onclick,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("oncellclick",this.pdivMenuSearch_grdMenuSearch_oncellclick,this);
            this.pdivMenuSearch.form.grdMenuSearch.addEventHandler("onkeydown",this.pdivMenuSearch_grdMenuSearch_onkeydown,this);
            this.btn_addSession.addEventHandler("onclick",this.btn_addSession_onclick,this);
            this.imgLogo.addEventHandler("onclick",this.imgLogo_onclick,this);
        };
        this.loadIncludeScript("TopFrame.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
