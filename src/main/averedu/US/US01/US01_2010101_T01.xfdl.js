(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("학적기본");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"300\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"PWD\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"200\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBalsong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwangye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","10","35","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","162","38","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","380","35","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","532","38","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","62","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","62","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","162","65","622","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","89","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","89","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("우편발송구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","116","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","116","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","162","119","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","143","777","53",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","143","150","53",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("주소 및 보호자 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","162","146","622","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","162","172","622","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","230","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","10","230","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("보호자성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaNm","162","233","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","380","230","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("가족관계");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","257","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","10","257","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","284","777","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","10","284","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaPostNo","162","287","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","10","311","777","53",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","10","311","150","53",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaAddr1","162","314","622","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaAddr2","162","340","622","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","380","257","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaTelNo","532","260","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBohojaHpNo","162","260","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","196","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset1","453","119","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchJuso1","380","119","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBalsong","162","92","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsBalsong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchJuso2","380","287","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset2","536","287","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy","453","287","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("학생과동일");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGajokGwangye","532","233","252","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsGwangye");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학적기본");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHpNo","value","dsMaster","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtTelNo","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtEmail","value","dsMaster","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtPostNo","value","dsMaster","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtAddr1","value","dsMaster","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtAddr2","value","dsMaster","ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtBohojaNm","value","dsMaster","BOHOJA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtBohojaPostNo","value","dsMaster","BOHOJA_POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtBohojaAddr1","value","dsMaster","BOHOJA_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtBohojaAddr2","value","dsMaster","BOHOJA_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBohojaTelNo","value","dsMaster","BOHOJA_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtBohojaHpNo","value","dsMaster","BOHOJA_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboBalsong","value","dsMaster","BALSONGJUSO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboGajokGwangye","value","dsMaster","BOHOJA_GWANGYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("US01_2010101_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T01.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/02
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsBalsong|dsGwangye";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00064|00010";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	this.btnSearchJuso1.set_enable(true);
        	this.btnSearchJuso2.set_enable(true);
        	this.btnReset1.set_enable(true);
        	this.btnReset2.set_enable(true);
        	this.btnCopy.set_enable(true);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        // 학생 주소검색
        this.btnSearchJuso1_onclick = function(obj,e)
        {
        	this.gfn_searchPost(this, searchPost1);
        };

        // 보호자 주소검색
        this.btnSearchJuso2_onclick = function(obj,e)
        {
        	this.gfn_searchPost(this, searchPost2);
        };

        // 학생 주소검색
        function searchPost1(postData)
        {
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'Y');
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'N');
        	}

        	this.parent.edtAddr1.set_value(addr);				// 도로명/지번 주소
        	this.parent.edtPostNo.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        // 보호자 주소검색
        function searchPost2(postData)
        {
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'Y');
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        		this.parent.dsMaster.setColumn(this.parent.dsMaster.rowposition, "JUSO_GBCD", 'N');
        	}

        	this.parent.edtBohojaAddr1.set_value(addr);					// 도로명/지번 주소
        	this.parent.edtBohojaPostNo.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        // 주소검색 창 닫기
        this.postWebbrowser_close = function (obj,e) {
        	if (e.userdata != 'close') {
        		obj.user_callback(e.userdata);
        	} else {
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        // 학생 주소 초기화
        this.btnReset1_onclick = function(obj,e)
        {
        	this.edtPostNo.set_value(null);
        	this.edtAddr1.set_value(null);
        	this.edtAddr2.set_value(null);
        };

        // 보호자 주소 초기화
        this.btnReset2_onclick = function(obj,e)
        {
        	this.edtBohojaPostNo.set_value(null);
        	this.edtBohojaAddr1.set_value(null);
        	this.edtBohojaAddr2.set_value(null);
        };

        // 학생 주소 복사
        this.btnCopy_onclick = function(obj,e)
        {
        	this.edtBohojaPostNo.set_value(this.edtPostNo.value);
        	this.edtBohojaAddr1.set_value(this.edtAddr1.value);
        	this.edtBohojaAddr2.set_value(this.edtAddr2.value);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.stc_13_00_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.btnReset1.addEventHandler("onclick",this.btnReset1_onclick,this);
            this.btnSearchJuso1.addEventHandler("onclick",this.btnSearchJuso1_onclick,this);
            this.btnSearchJuso2.addEventHandler("onclick",this.btnSearchJuso2_onclick,this);
            this.btnReset2.addEventHandler("onclick",this.btnReset2_onclick,this);
            this.btnCopy.addEventHandler("onclick",this.btnCopy_onclick,this);
        };
        this.loadIncludeScript("US01_2010101_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
