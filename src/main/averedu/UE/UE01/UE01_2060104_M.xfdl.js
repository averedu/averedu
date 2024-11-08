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
            this.set_titletext("장학기관관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_GIGWAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_GIGWAN_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_GIGWAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SAEOPJA_NO\" type=\"STRING\" size=\"15\"/><Column id=\"DAEPYOJA\" type=\"STRING\" size=\"10\"/><Column id=\"DAMDANG_BUSEO\" type=\"STRING\" size=\"50\"/><Column id=\"DAMDANGJA\" type=\"STRING\" size=\"10\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"15\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"YUCHIJA\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JAGYEOK\" type=\"STRING\" size=\"50\"/><Column id=\"GUBI_SEORYU\" type=\"STRING\" size=\"10\"/><Column id=\"JIGEUP_JOGEON\" type=\"STRING\" size=\"50\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","53","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("장학기관 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","113","52","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1",null,null,"28","0","192",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0",null,"120","28",null,"192",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("장학기관코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","70",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","298",null,"120","28",null,"192",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("장학기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakGigwanNm","421",null,"173","22",null,"195",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","598",null,"120","28",null,"192",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("대표자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0",null,"135","22",null,"223",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("장학기관 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","572",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","544","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","-13","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("장학기관명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","88","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakGigwanNm","98","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_02","1",null,null,"28","0","164",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","0",null,"120","28",null,"164",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01","298",null,"120","28",null,"164",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("담당부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangBuseo","421",null,"173","22",null,"167",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","598",null,"120","28",null,"164",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","1",null,null,"52","0","112",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","0",null,"120","52",null,"112",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00","1",null,null,"28","0","84",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_00","0",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmal","122",null,null,"22","4","87",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01","1",null,null,"28","0","56",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01","0",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("구비서류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00","1",null,null,"28","0","28",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01_00","0",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("유치자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01_00","298",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("신청자격");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_00","598",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("지급조건");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00_00","1",null,null,"28","0","0",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01_00_00","0",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoja","721",null,"173","22",null,"195",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01","898",null,"120","28",null,"192",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSaeopjaNo","1021",null,"173","22",null,"195",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_00","898",null,"120","28",null,"164",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("FAX번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo","1021",null,"173","22",null,"167",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPost","122",null,"173","22",null,"139",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso","122",null,"472","22",null,"115",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSangseJuso","597",null,null,"22","4","115",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGubiSeoryu","122",null,null,"22","4","59",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","122",null,null,"22","4","3",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakGigwanCd","122",null,"173","22",null,"195",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangja","122",null,"173","22",null,"167",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","721",null,"173","22",null,"167",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYuchija","122",null,"173","22",null,"31",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSincheongJagyeok","421",null,"173","22",null,"31",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupJogeon","721",null,"173","22",null,"31",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso","298",null,"75","22",null,"139",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("주소찾기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","256",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"장학기관코드\"/><Cell col=\"2\" text=\"장학기관명\"/><Cell col=\"3\" text=\"사업자번호\"/><Cell col=\"4\" text=\"담당부서\"/><Cell col=\"5\" text=\"담당자\"/><Cell col=\"6\" text=\"전화번호\"/><Cell col=\"7\" text=\"FAX번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_GIGWAN_CD\"/><Cell col=\"2\" text=\"bind:JANGHAK_GIGWAN_NM\"/><Cell col=\"3\" text=\"bind:SAEOPJA_NO\"/><Cell col=\"4\" text=\"bind:DAMDANG_BUSEO\"/><Cell col=\"5\" text=\"bind:DAMDANGJA\"/><Cell col=\"6\" text=\"bind:TEL_NO\"/><Cell col=\"7\" text=\"bind:FAX_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("장학기관관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edtJanghakGigwanNm","value","dsMaster","JANGHAK_GIGWAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.edtSearchJanghakGigwanNm","value","ds_input","JANGHAK_GIGWAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtDamdangBuseo","value","dsMaster","DAMDANG_BUSEO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtEmal","value","dsMaster","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtDaepyoja","value","dsMaster","DAEPYOJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSaeopjaNo","value","dsMaster","SAEOPJA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtFaxNo","value","dsMaster","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtPost","value","dsMaster","POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJuso","value","dsMaster","JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtSangseJuso","value","dsMaster","SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtGubiSeoryu","value","dsMaster","GUBI_SEORYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJanghakGigwanCd","value","dsMaster","JANGHAK_GIGWAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtDamdangja","value","dsMaster","DAMDANGJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtTelNo","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtYuchija","value","dsMaster","YUCHIJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtSincheongJagyeok","value","dsMaster","SINCHEONG_JAGYEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtJigeupJogeon","value","dsMaster","JIGEUP_JOGEON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UE01_2060104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE01_2060104_M.xfdl(장학기관관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/01
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
        this.lvchkColidDs   = "JANGHAK_GIGWAN_CD$JANGHAK_GIGWAN_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "장학기관코드$장학기관명";
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
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
            var strSvc      = "Ret";
            var strUrl      = "/prj/UE/UE01/Retrieve_2060104_M.do";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }
            var strSvc      = "Del";
            var strUrl      = "/prj/UE/UE01/Delete_2060104_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/UE/UE01/Save_2060104_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 각종함수
        ***********************************************************************/
        // 주소검색
        function searchPost(postData)
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

        	this.parent.edtJuso.set_value(addr);				// 도로명/지번 주소
        	this.parent.edtPost.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        // 주소검색 창 닫기
        this.postWebbrowser_close = function (obj,e)
        {
        	if (e.userdata != 'close') {
        		obj.user_callback(e.userdata);
        	} else {
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        	    this.edtJanghakGigwanCd.set_readonly(false);
        	}
        	else
        	{
        	    this.edtJanghakGigwanCd.set_readonly(true);
        	}
        };

        // 주소검색 버튼 클릭
        this.btnJuso_onclick = function(obj,e)
        {
        	this.gfn_searchPost(this, searchPost);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                12. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_edtSearchJanghakGigwanNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JANGHAK_GIGWAN_NM",obj.value);
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
            this.divSearch.form.edtSearchJanghakGigwanNm.addEventHandler("onkeydown",this.divSearch_edtSearchJanghakGigwanNm_onkeydown,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UE01_2060104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
