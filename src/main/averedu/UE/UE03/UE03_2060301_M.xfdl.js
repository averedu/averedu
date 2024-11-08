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
            this.set_titletext("국가장학파일생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaesang", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">신입생</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">재학생</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">편입생</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">복학생</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"CODE_NM\">재입학</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"CODE_NM\">유급생</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FILTER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSinip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPyeonip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGuwolIphak", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj._setContents("<ColumnInfo><Column id=\"GYOYUKCHEONG_CD\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("학사정보");
            obj.set_url("UE03::UE03_2060301_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("수납원장");
            obj.set_url("UE03::UE03_2060301_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("신입생 일괄등록");
            obj.set_url("UE03::UE03_2060301_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage4",this.Tab);
            obj.set_text("신입생 최종등록자 일괄등록");
            obj.set_url("UE03::UE03_2060301_T04.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDeungrokMagam","662","9","96","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("등록마감일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","754","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staMojip","437","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","522","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMojip");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00_00","512","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00","627","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","6","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("학년도학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","87","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","97","9","71","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","188","9","51","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("ADDR");
            obj.set_enable("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_autoselect("true");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00_00","239","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchDeungrokMagam","764","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staIphak","900","9","76","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","968","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchIphak","978","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00_01","864","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staHapgyeok","1114","9","76","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("합격일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1182","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchHagyeok","1192","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00_01_00","1078","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","243","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("대상");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00_00_00","318","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDaesang","328","9","81","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsDaesang");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00_00_00","409","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_02_00_00_00_00_01_00_00","1292","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBokhak","1328","9","76","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("복학일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1396","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchBokhakFr","1406","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63","175","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("-");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63_00","1513","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchBokhakTo","1529","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("국가장학파일생성");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item63","Tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchDaesang","value","ds_input","DAESANG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calSearchDeungrokMagam","value","ds_input","DEUNGROK_MAGAM_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calSearchIphak","value","ds_input","IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.calSearchHagyeok","value","ds_input","HAPGYEOK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.calSearchBokhakFr","value","ds_input","BOKHAK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.calSearchBokhakTo","value","ds_input","BOKHAK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UE03::UE03_2060301_T01.xfdl");
            this._addPreloadList("fdl","UE03::UE03_2060301_T02.xfdl");
            this._addPreloadList("fdl","UE03::UE03_2060301_T03.xfdl");
            this._addPreloadList("fdl","UE03::UE03_2060301_T04.xfdl");
        };
        
        // User Script
        this.registerScript("UE03_2060301_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE03_2060301_M.xfdl(국가장학파일생성)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/08
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
            var strDs    = "dsHakgi|dsSinip|dsPyeonip|dsGuwolIphak";                 // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00005|01024|01028";                            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);
        };

        this.fn_PostformInit = function()
        {
        	this.dsHakgi.filter("REF_1 == '10'");
        	this.divSearch.form.cboSearchDaesang.set_index(0);
        	this.fn_SetMojipGbcd();
        	this.fn_HakgwaRet();
        	this.divSearch.form.calSearchDeungrokMagam.set_value(this.fn_Today());
        	this.divSearch.form.calSearchIphak.set_value(this.fn_Today());
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
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
                    case "Init":
                            this.fn_PostformInit();
                        break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "tmp2" :        // 팁
                         this.fn_Tip();
                    break;
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 학과 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakgwaRet = function()
        {
            var strSvc      = "HakgwaRet";
            var strUrl      = "/prj/UE/UE03/HakgwaRetrieve_2060301_M.do";
            var strInDs     = "";
            var strOutDs    = "dsHakgwa=dsHakgwa";
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

        /**********************************************************************
                06. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	var tabIndex = this.Tab.tabindex;
        	var daesangCd = this.divSearch.form.cboSearchDaesang.value;
        	var searchFlag = daesangCd == '1'?'1' : daesangCd == '3'?'3' : '2'; // 조회값 구분 - 1: 신입생, 3: 편입생, 2: 그외

        	if(tabIndex == '2' || tabIndex == '3') { // 신입생일괄등록, 신입생최종등록자일괄등록 tab
        	    if (this.gfn_isNull(this.ds_input.getColumn(0, "DAESANG_CD"))) {
        		    this.alert('대상을 선택해주세요.');
        			return false;
        		}
        	    else if(daesangCd != '1') { // 신입생 대상 X
        	        this.alert((tabIndex == '2'?'신입생 일괄등록':'신입생 최종등록자 일괄등록')+'은 검색 대상이 신입생일 경우에만 조회 가능합니다.');
        			return false;
        		}
        	}

        	if (this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")))
        	{
        		this.gfn_alert("학년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "HAKGI")))
        	{
        		this.gfn_alert("학기를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "DAESANG_CD")))
        	{
        		this.gfn_alert("대상을 입력해주세요.","입력정보","","warning");
        		return false;
        	}

        	// 대상구분, 탭Index에 따른 필수입력 조회조건
            if(tabIndex == '0' || tabIndex == '1') { // 학사정보
        	    if(searchFlag == '1' || searchFlag == '3') { // 신입생, 편입생
        		    if(this.gfn_isNull(this.ds_input.getColumn(0, "MOJIP_GBCD"))) {
        			    this.alert('모집구분을 선택해주세요.');
        				return false;
        			}
        		}
        		if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_MAGAM_DT"))) {
        		    this.alert('등록마감일자를 입력해주세요.');
        			return false;
        		}
        	    if(tabIndex == '0' && (searchFlag == '1' || searchFlag == '3')) { // 신입생, 편입생
        		    if(this.gfn_isNull(this.ds_input.getColumn(0, "IPHAK_DT"))) {
        			    this.alert('입학일자를 입력해주세요.');
        				return false;
        			}
        		}
        	}
            else if(tabIndex == '2') { // 신입생 일괄등록
        	    if(this.gfn_isNull(this.ds_input.getColumn(0, "MOJIP_GBCD"))) {
        		    this.alert('모집구분을 선택해주세요.');
        			return false;
        		}
        	}
        	else if(tabIndex == '3') { // 신입생 최종등록자 일괄등록
        	    if(this.gfn_isNull(this.ds_input.getColumn(0, "IPHAK_DT"))) {
        		    this.alert('입학일자를 입력해주세요.');
        			return false;
        		}
        	}

        	this.ds_input.setColumn(0, "SEARCH_FLAG", searchFlag);

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        	if(!this.fn_PreRet())
            {
                return false;
            }
        	// 학사정보
          	if(this.Tab.tabindex==0){
          		this.Tab.TabPage1.form.fn_Ret(this.ds_input, this.dsHakgwa);
          	}
        	// 수납원장
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret(this.ds_input, this.dsHakgwa);
        	}
        	// 신입생 일괄등록
        	if(this.Tab.tabindex==2){
        		this.Tab.TabPage3.form.fn_Ret(this.ds_input, this.dsHakgwa);
        	}
        	// 신입생 최종등록자 일괄등록
        	if(this.Tab.tabindex==3){
        		this.Tab.TabPage4.form.fn_Ret(this.ds_input, this.dsHakgwa);
        	}
        };

        /**********************************************************************
                07. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
        	// 학사정보
          	if(this.Tab.tabindex==0){
        		this.Tab.TabPage1.form.fn_Excel();
          	}
        	// 수납원장
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Excel();
        	}
        	// 신입생 일괄등록
        	if(this.Tab.tabindex==2){
        		this.Tab.TabPage3.form.fn_Excel();
        	}
        	// 신입생 최종등록자 일괄등록
        	if(this.Tab.tabindex==3){
        		this.Tab.TabPage4.form.fn_Excel();
        	}
        };

        /**********************************************************************
                08. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                09. 각종함수
        ***********************************************************************/
        // 수시, 정시, 편입, 9월 입학 union
        this.fn_SetMojipGbcd = function ( )
        {
            var addRow = -1;
        	for(var i = 0 ; i < this.dsSinip.rowcount ; i++) {
        	    addRow = this.dsMojip.addRow();
        		this.dsMojip.copyRow(addRow, this.dsSinip, i);
        		this.dsMojip.setColumn(addRow, 'FILTER', '1');
        	}
        	for(var i = 0 ; i < this.dsPyeonip.rowcount ; i++) {
        	    addRow = this.dsMojip.addRow();
        		this.dsMojip.copyRow(addRow, this.dsPyeonip, i);
        		this.dsMojip.setColumn(addRow, 'FILTER', '3');
        	}
        	for(var i = 0 ; i < this.dsGuwolIphak.rowcount ; i++) {
        	    addRow = this.dsMojip.addRow();
        		this.dsMojip.copyRow(addRow, this.dsGuwolIphak, i);
        		this.dsMojip.setColumn(addRow, 'FILTER', '1');
        	}
        };

        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        // 검색조건 필수 입력값 변경
        this.fn_SearchEssential = function ()
        {
        	var tabIndex = this.Tab.tabindex;
        	var yyyy = this.divSearch.form.spnSearchYYYY.value;
        	var hakgi = this.divSearch.form.cboSearchHakgi.value;
        	var daesangCd = this.divSearch.form.cboSearchDaesang.value;
        	var mojipGbcd = this.divSearch.form.cboSearchMojip.value;
        	var deungrokMagamDt = this.divSearch.form.calSearchDeungrokMagam.value;
        	var iphakDt = this.divSearch.form.calSearchIphak.value;
        	var searchFlag = daesangCd == '1'?'1' : daesangCd == '3'?'3' : daesangCd == ''?'' : '2'; // 조회값 구분 - 1: 신입생, 3: 편입생, 2: 그외

        	this.ds_input.setColumn(0, "MOJIP_GBCD", "");

            if(searchFlag == '1') { // 대상 : 신입생
        	    this.dsMojip.set_filterstr('FILTER != "3"'); // 수시, 정시, 9월입학 filter
        		this.divSearch.form.cboSearchMojip.set_readonly(false);
        	    if(tabIndex == '3') { // 최종등록자 일괃등록(4)
        		    this.divSearch.form.cboSearchMojip.set_cssclass(''); 			// 모집구분 stt
        			this.divSearch.form.calSearchDeungrokMagam.set_cssclass(''); 	// 등록마감일자 stt
        			this.divSearch.form.calSearchIphak.set_cssclass('point'); 		// 입학일자 stt
        		}
        		else { // 학사정보(1), 수납원장(2), 신입생일괄등록(3)
        		    this.divSearch.form.cboSearchMojip.set_cssclass('point'); 		// 모집구분 stt

        			// 등록마감일자, 입학일자 처리
        			if(tabIndex == '0') { // 학사정보(1)
        			    this.divSearch.form.calSearchDeungrokMagam.set_cssclass('point'); 	// 등록마감일자 stt
        				this.divSearch.form.calSearchIphak.set_cssclass('point'); 			// 입학일자 stt
        			}
        			else if(tabIndex == '1') { // 수납원장(2)
        			    this.divSearch.form.calSearchDeungrokMagam.set_cssclass('point'); 	// 등록마감일자 stt
        				this.divSearch.form.calSearchIphak.set_cssclass(''); 				// 입학일자 stt
        			}
        			else if(tabIndex == '2') { // 신입생일괄등록(3)
        			    this.divSearch.form.calSearchDeungrokMagam.set_cssclass(''); 		// 등록마감일자 stt
        				this.divSearch.form.calSearchIphak.set_cssclass(''); 				// 입학일자 stt
        			}
        		}
        	}
        	else if(searchFlag == '3') { // 대상 : 편입생
        	    this.divSearch.form.cboSearchMojip.set_readonly(false);
        		this.divSearch.form.cboSearchMojip.set_index(0);
        	    this.dsMojip.set_filterstr('FILTER != "1"'); 							// 편입 filter
        	    this.divSearch.form.cboSearchMojip.set_cssclass('point'); 				// 모집구분 stt
        		this.divSearch.form.calSearchDeungrokMagam.set_cssclass('point'); 		// 등록마감일자 stt
        		if(tabIndex == '0') { // 학사정보(1)
        		    this.divSearch.form.calSearchIphak.set_cssclass('point'); 			// 입학일자 stt
        		}
        		else if(tabIndex == '1') { // 수납원장(2)
        		    this.divSearch.form.calSearchIphak.set_cssclass('');				// 입학일자 stt
        		}
        	}
        	else if(searchFlag == '2') { // 대상 : 재학생(재학생, 복학생, 재입학, 휴학생)
        	    this.divSearch.form.cboSearchMojip.set_readonly(true);
        		this.divSearch.form.cboSearchMojip.set_cssclass(''); 					// 모집구분 stt
        		this.divSearch.form.calSearchDeungrokMagam.set_cssclass('point'); 		// 등록마감일자 stt
        		this.divSearch.form.calSearchIphak.set_cssclass(''); 					// 입학일자 stt
        	}
        	else if(searchFlag == '') { // 대상구분 선택 X
        	    this.divSearch.form.cboSearchMojip.set_readonly(true);
        		this.divSearch.form.cboSearchMojip.set_cssclass(''); 					// 모집구분 stt
        		this.divSearch.form.calSearchDeungrokMagam.set_cssclass(''); 			// 등록마감일자 stt
        		this.divSearch.form.calSearchIphak.set_cssclass(''); 					// 입학일자 stt
        	}
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        // 대상 : 신입생, 편입생 > 모집구분 활성화 및 모집구분 필터
        this.divSearch_cboSearchDaesang_onitemchanged = function(obj,e)
        {
        	// 검색조건 표시변경
        	this.divSearch.form.calSearchHagyeok.set_enable(false);
        	this.divSearch.form.calSearchBokhakFr.set_enable(false);
        	this.divSearch.form.calSearchBokhakTo.set_enable(false);
        	if (e.postvalue == '1' || e.postvalue == '3') {
        		this.divSearch.form.calSearchHagyeok.set_enable(true);
        	} else if (e.postvalue == '4') {
        		this.divSearch.form.calSearchBokhakFr.set_enable(true);
        		this.divSearch.form.calSearchBokhakTo.set_enable(true);
        	}

        	// 검색조건 필수 입력값 변경
            this.fn_SearchEssential();
        };

        // Tab 선택 변경시 검색조건 필수 입력값 변경, cbo 대상구분 filter
        this.Tab_onchanged = function(obj,e)
        {
        	var tabIndex = this.Tab.tabindex;
            // 신입생 일괄등록(3), 신입생 최종합격자 일괄등록(4)
        	if(tabIndex == '2' || tabIndex == '3') {
        	    this.dsDaesang.set_filterstr('CODE == "1"');
        		this.divSearch.form.cboSearchDaesang.set_value('1');
        	}
        	else if(tabIndex == '0' || tabIndex == '1') {
        	    this.dsDaesang.set_filterstr('');
        		this.divSearch.form.cboSearchDaesang.set_value('');
        	}

        	// 검색조건 필수 입력값 변경
        	this.fn_SearchEssential();
        };

        /**********************************************************************
                11. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchDaesang_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"DAESANG_CD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_calSearchDeungrokMagam_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"DEUNGROK_MAGAM_DT",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_calSearchIphak_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"IPHAK_DT",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_calSearchHagyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"BOKHAK_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_calSearchBokhakFr_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"BOKHAK_TODT",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_calSearchBokhakTo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAPGYEOK_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.stc_01_00_01.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.calSearchDeungrokMagam.addEventHandler("onkeydown",this.divSearch_calSearchDeungrokMagam_onkeydown,this);
            this.divSearch.form.calSearchIphak.addEventHandler("onkeydown",this.divSearch_calSearchIphak_onkeydown,this);
            this.divSearch.form.calSearchHagyeok.addEventHandler("onkeydown",this.divSearch_calSearchHagyeok_onkeydown,this);
            this.divSearch.form.cboSearchDaesang.addEventHandler("onitemchanged",this.divSearch_cboSearchDaesang_onitemchanged,this);
            this.divSearch.form.cboSearchDaesang.addEventHandler("onkeydown",this.divSearch_cboSearchDaesang_onkeydown,this);
            this.divSearch.form.calSearchBokhakFr.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.divSearch.form.calSearchBokhakTo.addEventHandler("onkeydown",this.divSearch_calSearchBokhakTo_onkeydown,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE03_2060301_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
