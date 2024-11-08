(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("로그인");
            this.set_background("#005d90");
            this.getSetter("classname").set("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCountryLanguage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"naem\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">ko</Col><Col id=\"naem\">KOREA</Col></Row><Row><Col id=\"code\">en</Col><Col id=\"naem\">ENGLISH</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","0","0","450","550",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","163",null,null,"0","40",null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static00","0","84",null,"133","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_Login_Title");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edUserId","51","234",null,"40","51",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_cssclass("edt_Login_Id");
            obj.set_autoselect("true");
            obj.set_value("admin");
            obj.set_text("admin");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edPassword","51","284",null,"40","51",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_Login_Pw");
            obj.set_password("true");
            obj.set_autoselect("true");
            obj.set_value("1234");
            obj.set_text("1234");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btLogin","111","432","218","47",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login");
            obj.set_visible("true");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btLogin00","225","380","104","26",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("회원가입");
            obj.set_cssclass("btn_Login_Pw");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btLogin01","111","380","104","26",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_Login_Pw");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("chkIdsave","53","338","18","17",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("7");
            obj.set_text("CheckBox00");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static03","73","336","67","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("8");
            obj.set_text("아이디저장");
            this.div_login.addChild(obj.name, obj);
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
        this.registerScript("Login.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명) : Login.xfdl(로그인처리)
        * 작 성         일 명 : jiback
        * 작 성         일 자 : 2018/08/25
        * 변 경         일 자 :
        * 변 경         자 명 :
        * 변경 및 수정 로 그 : 일자별로 변경자 및 변경사항을 간략히 기술
        ************************************************************************/
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.nFormHorizental = 0;
        this.nFormVertical 	 = 0;
        this.nFormWidth 	 = 0;
        this.nFormHeight 	 = 0;
        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */

        this.Login_onload = function(obj,e)
        {
        	//사용자 초기화 함수

        	this.fn_setManyLanguages();								 	 //폼에 다국어 처리
            this.setFormOnSize(e.cx, e.cy);      						 //폼을 중앙 정렬

        	// alert(objApp.gv_runMode);                                 // 개발모드구분자 (local,dev,prd)

        	var sUserId = nexacro.getPrivateProfile( "MSU_USERID");
        	if(!this.gfn_isNull(sUserId)) {
        		this.div_login.form.edUserId.set_value(sUserId);
        		this.div_login.form.chkIdsave.set_value("1");
        	}
        	this.div_login.form.edUserId.setFocus();
        };
        /**
         * 기능 : 폼 언로드(닫기전 셋팅)  Setting
         */
        this.Login_onclose = function(obj,e)
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

        	if(nErrorCode != 0)                    // 0이 아니면 error코드 간주함
        	{
        		this.alert(sErrorMsg);             // 메세지처리
        		return false;

        	}else
        	{
        		switch(sSvcId)
        		{
        			case "LOGIN":					// 서비스 아이디가 같으면
        				this.postLogin();           // 로그인 후처리
        				break;

        			default:
        				break;
        		}
        	}
        };

        /**********************************************************************
        	06. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : Login시 전처리(공백을 체크함)
         */
        this.fn_preLogin = function(pUserId,pPassword)
        {

        	if(this.gfn_isNull(pUserId))
        	{
        		this.alert("ID를 입력해주세요.");
        		this.div_login.form.edUserId.setFocus();
        		return false;
        	}

        	if(this.gfn_isNull(pPassword))
        	{
        		this.alert("비밀번호를 입력해주세요.");
        		this.div_login.form.edPassword.setFocus();
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : Login Transaction처리 이벤트
         */

        this.fn_loginSearch = function(pUserId,pPassword)
        {

        	if(!this.fn_preLogin(pUserId,pPassword))
        	{
        		return false;
        	}

        	var strSvc 		= "LOGIN";
        	var strUrl      = "/prj/com/RetrieveLoginList.do";
        	var strInDs  	= "";
        	var strOutDs 	= "gds_userInfoDb=gds_userInfoDb ";    		//사용자 정보
         		strOutDs   += "gds_Menu=gds_Menu ";    			   		//전체메뉴
         		strOutDs   += "gds_MyMenu=gds_MyMenu ";    			   	//즐겨찾기 메뉴
        		strOutDs   += "gds_UserAuth=gds_UserAuth ";    			//사용자 권한
        		strOutDs   += "gds_SystemDate=gds_SystemDate ";     	//시스템 날짜
        		strOutDs   += "gds_Message=gds_Message ";     			//공통메세지관리
        		strOutDs   += "gds_Component=gds_Component";     		//공통컨포넌트관리
        	var strArg 	    = "USERID="		+ nexacro.wrapQuote(pUserId);
        		strArg 	   += " PASSWORD=" 	+ nexacro.wrapQuote(pPassword);
        		strArg 	   += " LANGUAGE=" 	+ nexacro.wrapQuote(objApp.gv_Language);
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			    //샏략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_Transaction(strSvc
        					   , strUrl
        					   , strInDs
        					   , strOutDs
        					   , strArg
        					   , strCallBack
        					   , strASync);
        };

        /**
         * 기능 : Login Transaction처리후 현제 아이디와 패스워드를 체크함
         */
        this.postLogin = function()
        {
            //trace(objApp.gds_userInfoDb.saveXML());
        	//trace(objApp.gds_Menu.saveXML());
        	//trace(objApp.gds_UserAuth.saveXML());
        	//trace(objApp.gds_SystemDate.saveXML());
        	//trace(objApp.gds_Message.saveXML());
            //trace(objApp.gds_Component.saveXML());

        	var lv_nFindRow = objApp.gds_userInfoDb.findRow("USER_ID",(this.gfn_trim(this.div_login.form.edUserId.value)).toLowerCase());

        	if(lv_nFindRow < 0)
        	{
        		this.alert("ID를 확인해주세요.");
        		this.div_login.form.edUserId.set_value("");
        		this.div_login.form.edUserId.setFocus();
        		this.fn_setLoginAllDsClear();
        		return false;
        	}

        	var userPw = objApp.gds_userInfoDb.getColumn(lv_nFindRow,"USER_PW");
        	var scUserPw = objApp.gds_userInfoDb.getColumn(lv_nFindRow,"SC_USER_PW");

        	if(userPw != scUserPw || scUserPw == null || scUserPw == "")
        	{
        	   this.alert("비밀번호를 확인해주세요.");
        	   this.div_login.form.edPassword.set_value("");
        	   this.div_login.form.edPassword.setFocus();
        	   this.fn_setLoginAllDsClear();
        	   return false;
        	}objApp.gv_Flag = true;

        	objApp.gv_appMainForm.set_formurl("Frame::MainFrame.xfdl");

        	objApp.gv_appTopFrame.form.TopFrame_onload(objApp.gv_appTopFrame.form);

        	// Topfrmae 메뉴 검색용 dataset
        	objApp.gv_appTopFrame.form.fn_globalMenuCopy();

        	//user 정보를 임시 데이타셋에 저장하거나 그외처를 한다
        	this.fn_setUserInfo(objApp.gds_userInfoDb,lv_nFindRow);
        	//Login시 현섹션 정보를 담아두었다가 Transaction처리할때 마다 서버에 섹션정보를 비교할 전역변수
         	//objApp.gv_sessionid=objApp.JSESSIONID;
        	//로긴온 화면이 뜰때 메뉴를 들어가지못하게 처리했음.

        	//작업시 로긴온 화면에서 작업화면으로 전환함.(로긴온 성공시처리)
            this.gfn_setFrameChange("work");


        };
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
        /**
         * 기능 : 로그인시 다국어 초기화 셋팅
         */
        this.fn_setManyLanguages = function()
        {
        	objApp.gv_Language = "ko";    // 로그인시 폼을 한국어(ko)/영어(en)중 다국어를 셋팅
        	//this.fn_setLoginLanguage();
        }
        /**
         * 기능 : 콤보에 체인지 할때 언어를 셋팅한다.
         */
        this.fn_setLoginLanguage = function()
        {
        	if(objApp.gv_Language  == "ko")                   // 한국어일시
        	{
        		this.div_login.form.stLanguage.set_text("언어");
        		this.div_login.form.stUserId.set_text("사용자 ID");
        		this.div_login.form.stPassword.set_text("비밀번호");
        		this.div_login.form.btLogin.set_text("로그인");

        	}else if(this.div_login.form.cbCountryLng.value == "en")			 // 영어일시
        	{
        		this.div_login.form.stLanguage.set_text("LANGUAGE");
        		this.div_login.form.stUserId.set_text("USER ID");
        		this.div_login.form.stPassword.set_text("PASSWORD");
        		this.div_login.form.btLogin.set_text("LOGIN");

        	}
        }
        /**
         * 기능 : 로그인 한후에 전역번수에 데이타셋팅
         */
        this.fn_setUserInfo = function(dsObj,nRow)
        {
           objApp.gv_userId = dsObj.getColumn(nRow,"USER_ID");
           /*
            gds_session.setColumn(0,"usrNo",		dsObj.getColumn(nRow,"LOIN_USID"));
            gds_session.setColumn(0,"loinUsid",		dsObj.getColumn(nRow,"LOIN_USID"));
            gds_session.setColumn(0,"usrNm",		dsObj.getColumn(nRow,"USR_NM"));
            gds_session.setColumn(0,"usrEnm",		dsObj.getColumn(nRow,"USR_ENM"));
            gds_session.setColumn(0,"orgCd",		dsObj.getColumn(nRow,"ORG_NO"));
            gds_session.setColumn(0,"ctrCd",		dsObj.getColumn(nRow,"CTR_CD"));
            gds_session.setColumn(0,"plcCd",		dsObj.getColumn(nRow,"PLC_CD"));
            gds_session.setColumn(0,"areaCd",		dsObj.getColumn(nRow,"DIV_CAT_CD"));
            gds_session.setColumn(0,"agtCd",		dsObj.getColumn(nRow,"SUPR_ORG_NO"));
            gds_session.setColumn(0,"agtEngAbnm",	dsObj.getColumn(nRow,"ORG_ENG_ABNM"));
            gds_session.setColumn(0,"CTR_CUR_CD",	dsObj.getColumn(nRow,"SUPR_ORG_NO"));
            gds_session.setColumn(0,"tmf",			dsObj.getColumn(nRow,"TMF"));
            */

        	// ID 저장기능
        	if (this.div_login.form.chkIdsave.value == 1) {
        		nexacro.setPrivateProfile("MSU_USERID", objApp.gv_userId);
        	} else {
        		nexacro.setPrivateProfile("MSU_USERID", "");
        	}
        }

        /**
         * 기능 : 화면 리사이즈시 화면을 중앙에 셋팅
         */
        this.setFormOnSize = function(nWidth, nHeight)
        {
          	var nLeft	= (objApp.mainframe.width / 2) - Math.round((this.div_login.form.getOffsetWidth()) / 2);
          	var nTop    = (objApp.mainframe.height / 2)- Math.round((this.div_login.form.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.div_login.setOffsetLeft(0);

        	}else
        	{
        		this.div_login.setOffsetLeft(nLeft);
        	}

        	if(nTop <= 0)
        	{
        		this.div_login.setOffsetTop(0);

        	}else
        	{
        		this.div_login.setOffsetTop(nTop);
        	}

        };

        /**
         * 기능 : Login실패시 모든 데이타셋을 초기화한다
         */
        this.fn_setLoginAllDsClear = function()
        {
        	objApp.gds_userInfoDb.clearData();
        	objApp.gds_Menu.clearData();
        	objApp.gds_SystemDate.clearData();
        	objApp.gds_Message.clearData();
        	objApp.gds_Component.clearData();
        };

        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /**
         * 기능 : LOGIN 버튼을 클릭시 이벤트 처리함
         */
        this.div_login_btLogin_onclick = function(obj,e)
        {
        	//테스트 처리(현제 어리시는 아래 this.fn_adCheckUser(아이디,패스워드)함수를 호출한다
        	//this.fn_callBack("LOGIN",0,"");

        	var sUserId = (this.gfn_trim(this.div_login.form.edUserId.value)).toLowerCase();
        	var sUserPw = (this.gfn_trim(this.div_login.form.edPassword.value)).toLowerCase();

        	this.fn_loginSearch(sUserId,sUserPw);
        };

        /**
         * 기능 : 리사이시 폼을 중앙정렬
         */
        this.Login_onsize = function(obj,e)
        {
        	this.setFormOnSize(e.cx, e.cy);
        };

        /**
         * ID, PW 초기화 (ID저장기능초기화)
         */
        this.fn_initclearId = function() {
        	var sUserId = nexacro.getPrivateProfile( "MSU_USERID");
        	this.div_login.form.edUserId.set_value(sUserId);
        };
        /*
         * 아이디 ENTER 이동 패스워드
         */
        this.div_login_edUserId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_login.form.edPassword.setFocus();
        	}
        };
        /*
         * 패스워드 ENTER 자동조회
         */
        this.div_login_edPassword_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_login.form.btLogin.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.Login_onclose,this);
            this.addEventHandler("onload",this.Login_onload,this);
            this.addEventHandler("onsize",this.Login_onsize,this);
            this.addEventHandler("onactivate",this.Login_onactivate,this);
            this.div_login.form.Static00.addEventHandler("onclick",this.div_login_Static00_onclick,this);
            this.div_login.form.edUserId.addEventHandler("onkeyup",this.div_login_edUserId_onkeyup,this);
            this.div_login.form.edPassword.addEventHandler("onkeyup",this.div_login_edPassword_onkeyup,this);
            this.div_login.form.btLogin.addEventHandler("onclick",this.div_login_btLogin_onclick,this);
            this.div_login.form.btLogin00.addEventHandler("onclick",this.div_login_btLogin_onclick,this);
            this.div_login.form.btLogin01.addEventHandler("onclick",this.div_login_btLogin_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
