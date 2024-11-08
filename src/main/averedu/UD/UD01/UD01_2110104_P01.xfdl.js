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
            this.set_titletext("단체활동내역제출");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"DANCHE_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheoriSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikcheak", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUBJA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GEONUI_SAHANG\" type=\"STRING\" size=\"4000\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HABGYE\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"CHEORI_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CEOMBU_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"CEOMBU_FILE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-14","9","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Spin("SpinSearchYYYY","80","9","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00","264","9","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDancheNm","354","9","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","557","9","95","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("결과보고차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyeolgwaBogoCnt","663","9","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnClose","1544","8","60","25",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","70","0","10","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","610","9",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","0","610","9",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","249","1","56","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","344","0","10","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","523","0","56","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","653","0","10","40",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","15","72","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("결과보고서");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_00_01","16","97",null,"28","9",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_00_01","16","97","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("활동기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21_00_01","901","97","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwaldongSijakDt","170","100","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwaldongJongryoDt","549","100","348","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","523","100","16","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_00_00_01_00","16","125",null,"28","9",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_00_00_01_00","16","125","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("신청가능학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon1","231","128","209","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","189","128","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("1학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon2","511","128","209","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","469","128","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("2학년");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","755","128","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("3학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon3","797","128","209","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_00","1045","128","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("4학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon4","1087","128","209","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00_01","1330","128","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("합계");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHabgye","1372","128","209","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_02","16","153",null,"215","9",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_02","16","153","150","215",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("활동내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldongNaeyong","170","182",null,"181","14",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile","170","157","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("활동내역 파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_02_00","16","368",null,"177","9",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_02_00","16","368","150","177",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("건의사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGeonuiSahang","169","372",null,"169","14",null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19_02","16","545",null,"28","9",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_02","16","545","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("처리상태구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05_02_00_00","16","573",null,"218","9",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06_02_00_00","16","573","150","218",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBanryeoSayu","170","578",null,"208","14",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSincheongDt","1056","100","570","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","1570","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJechulCwiso","1490","64","75","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("제출취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJechul","1375","64","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("결과보고서제출");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwaldongNaeyoek","1285","64","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("활동내역서");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCheoriSangtae","170","548","169","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enableevent("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20_02_00","905","545","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","1060","548","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDept","1213","548","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","1243","548","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCeombuFileNm","298","157",null,"22","14",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","737","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","16","89","1610","8",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체활동내역제출");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","calHwaldongSijakDt","value","dsMaster","HWALDONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calHwaldongJongryoDt","value","dsMaster","HWALDONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtHaknyeon1","value","dsMaster","HOEWON_CNT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtHaknyeon2","value","dsMaster","HOEWON_CNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtHaknyeon3","value","dsMaster","HOEWON_CNT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtHaknyeon4","value","dsMaster","HOEWON_CNT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtHwaldongNaeyong","value","dsMaster","HWALDONG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtGeonuiSahang","value","dsMaster","GEONUI_SAHANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtBanryeoSayu","value","dsMaster","BANRYEO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtHabgye","value","dsMaster","HABGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtCheoriSangtae","value","dsMaster","CHEORI_SANGTAE_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtDeptNm","value","dsMaster","GWANLI_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtDeptCd","value","dsMaster","GWANLI_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_00.form.SpinSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.edtSearchDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_00.form.edtSearchGyeolgwaBogoCnt","value","ds_input","GYEOLGWA_BOGO_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtCeombuFileNm","value","dsMaster","CEOMBU_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110104_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110104_P01.xfdl(단체활동내역제출)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/02
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
        this.lvchkColidDs   = "DANCHE_CD$YYYY$SINCHEONG_DT$HWALDONG_SIJAK_DT$HWALDONG_JONGRYO_DT$HWALDONG_NAEYONG$GWANLI_DEPT_CD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "단체코드$학년도$신청일자$활동기간$활동기간$활동내용$관리부서";

        this.strKeyValue 	= "";  // 저장 후 row 유지
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


        	this.ds_input.setColumn(0, "YYYY",                this.getOwnerFrame().yyyy);
        	this.ds_input.setColumn(0, "DANCHE_CD",           this.getOwnerFrame().dancheCd);
        	this.ds_input.setColumn(0, "DANCHE_NM",           this.getOwnerFrame().dancheNm);
        	this.ds_input.setColumn(0, "GYEOLGWA_BOGO_CNT",   this.getOwnerFrame().gyeolgwabogo);
        	this.ds_input.setColumn(0, "SINCHEONG_DT",        this.gfn_getSvrDate());
        	this.ds_input.setColumn(0, "CHEORI_SANGTAE_GBCD", this.getOwnerFrame().cheoriSangtaeGbcd);  //처리상태
        	this.ds_input.setColumn(0, "GWANLI_DEPT_CD",      this.getOwnerFrame().gwanliDeptCd);
        	this.ds_input.setColumn(0, "GWANLI_DEPT_NM",      this.getOwnerFrame().gwanliDeptNm);

            //처리상태값이 제출//접수(1,2)인 경우 비활성화 처리
        	if(this.getOwnerFrame().cheoriSangtaeGbcd == "1" || this.getOwnerFrame().cheoriSangtaeGbcd == "2"){
        	   this.fn_enable("false", this.getOwnerFrame().cheoriSangtaeGbcd);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
         각 기능 활성화/비활성화 처리
        ***********************************************************************/
        this.fn_enable = function(val, val02)
        {
            if(val == "false"){
        			this.calHwaldongSijakDt.set_enable(val);
        			this.calHwaldongJongryoDt.set_enable(val);
        			this.calSincheongDt.set_enable(val);
        			this.edtHaknyeon1.set_enable(val);
        			this.edtHaknyeon2.set_enable(val);
        			this.edtHaknyeon3.set_enable(val);
        			this.edtHaknyeon4.set_enable(val);
        			this.edtHwaldongNaeyong.set_enable(val);
        			this.edtGeonuiSahang.set_enable(val);
        			this.edtDeptCd.set_enable(val);

        			this.btnDept.set_enable(val);
        			//this.btnHwaldongNaeyoek.set_enable(val);  활동내역서
        			this.btnJechul.set_enable(val);
        			this.btnJechulCwiso.set_enable(val);
        			this.btnSave.set_enable(val);

        			if(val02 == "1"){  //제출이면
        			   this.btnJechulCwiso.set_enable(true);
        			}else{
        			   this.btnJechulCwiso.set_enable(false);
        			}

        	}

            if(val == "true"){
        			this.calHwaldongSijakDt.set_enable(val);
        			this.calHwaldongJongryoDt.set_enable(val);
        			this.calSincheongDt.set_enable(val);
        			this.edtHaknyeon1.set_enable(val);
        			this.edtHaknyeon2.set_enable(val);
        			this.edtHaknyeon3.set_enable(val);
        			this.edtHaknyeon4.set_enable(val);
        			this.edtHwaldongNaeyong.set_enable(val);
        			this.edtGeonuiSahang.set_enable(val);
        			this.edtDeptCd.set_enable(val);

        			this.btnDept.set_enable(val);
        			//this.btnHwaldongNaeyoek.set_enable(val);  활동내역서
        			this.btnJechul.set_enable(val);
        			this.btnJechulCwiso.set_enable(val);
        			this.btnSave.set_enable(val);

        			if(val02 == "1"){  //제출이면
        			   this.btnJechulCwiso.set_enable(false);
        			}else{
        			   this.btnJechulCwiso.set_enable(true);
        			}
        	}
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsCheoriSangtae|dsJikcheak";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80306|80303";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "SaveJechul":
                            this.fn_PostSaveJechul();
                        break;
                    case "SaveJechulCwiso":
                            this.fn_PostSaveJechulCwiso();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "dept" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GWANLI_DEPT_CD",   sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GWANLI_DEPT_NM",   sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        	    // 첨부파일
        		case "ceombuFileNoFileUpload":
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					// 첨부파일번호가 바뀌면 저장한다.
        					if (this.dsMaster.getColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NO") != sRtn[1])
        					{
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NO", sRtn[1]);
        						this.dsMaster.setColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NM", sRtn[2]);

        						// 첨부파일번호 업데이트
        						this.ds_input1.clearData(); this.ds_input1.addRow();
        						this.ds_input1.setColumn(0, "DANCHE_CD",         this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "YYYY",              this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        						this.ds_input1.setColumn(0, "GYEOLGWA_BOGO_CNT", this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT"));
        						this.ds_input1.setColumn(0, "CEOMBU_FILE_NO",    this.dsMaster.getColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NO"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110104_P01.do";
        						var strInDs     = "ds_input1=ds_input1:a";
        						var strOutDs    = "";
        						var strArg      = "";

        						var GBV_MENUID    = objApp.gv_cutPrgId;
        						if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        						{
        						  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        						}

        						var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        						var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        						this.gfn_Transaction(strSvc
        										   , strUrl
        										   , strInDs
        										   , strOutDs
        										   , strArg
        										   , strCallBack
        										   , strASync);
        					}
        				} // "S"
        			}
        			break;
        		default:
                    break;
        	}
         };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UD/UD01/Retrieve_2110104_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
        	// 조회결과가 없을 경우 Row를 하나 추가하고 단체코드, 단체명, 학년도, 결과보고차수, 신청일자, 관리부서를 설정
        	if(this.dsMaster.rowcount == 0)
        	{
        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.setColumn(nRow, "DANCHE_CD", this.ds_input.getColumn(0, "DANCHE_CD"));
        		this.dsMaster.setColumn(nRow, "DANCHE_NM", this.ds_input.getColumn(0, "DANCHE_NM"));
        		this.dsMaster.setColumn(nRow, "YYYY", this.ds_input.getColumn(0, "YYYY"));
        		this.dsMaster.setColumn(nRow, "GYEOLGWA_BOGO_CNT", this.ds_input.getColumn(0, "GYEOLGWA_BOGO_CNT"));
        		this.dsMaster.setColumn(nRow, "SINCHEONG_DT", this.ds_input.getColumn(0, "SINCHEONG_DT"));
        		this.dsMaster.setColumn(nRow, "GWANLI_DEPT_CD", this.ds_input.getColumn(0, "GWANLI_DEPT_CD"));
        		this.dsMaster.setColumn(nRow, "GWANLI_DEPT_NM", this.ds_input.getColumn(0, "GWANLI_DEPT_NM"));
        	}
        };

        /**********************************************************************
        	    06. 결과보고서 제출 함수 선언
        ***********************************************************************/
        this.btnJechul_onclick = function(obj,e)
        {
        	this.fn_Jechul();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Jechul = function()
        {
        	var CheckRow = this.dsMaster.rowposition;

        	// 수정사항이 있을 경우
        	if(this.dsMaster.getRowType(CheckRow) == Dataset.ROWTYPE_UPDATE)
            {
                this.gfn_alert("수정한 항목을 저장해 주세요.","제출정보","","warning");
                return false;
            }

        	// 신규 데이터의 경우 저장 후 결과보고서 제출 가능
        	if(this.dsMaster.getRowType(CheckRow) == Dataset.ROWTYPE_INSERT)
            {
                this.gfn_alert("결과보고서 신규 저장 후 결과보고서 제출 가능합니다.","결과보고서정보","","warning");
                return false;
            }

        	// 처리상태가 제출인 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "1")
        	{
        		this.gfn_alert("이미 제출한 항목입니다.","제출정보","","warning");
                return false;
        	}

        	// 처리상태가 접수인 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "2")
        	{
        		this.gfn_alert("이미 접수한 항목은 제출할 수 없습니다.","제출정보","","warning");
                return false;
        	}

        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == null || this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "0")
        	{
        		var result = this.gfn_confirm( "제출 하시겠습니까?", "제출정보","","question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.dsMaster.setColumn(CheckRow, "CHEORI_SANGTAE_GBCD", "1");
        	}

            var strSvc      = "SaveJechul";
            var strUrl      = "/prj/UD/UD01/Save_2110104_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
         *   기능 : 제출 저장시 후처리
         */
        this.fn_PostSaveJechul = function()
        {
        	this.fn_PostSave();

        	// 제출 후  비활성화
        	this.fn_enable("false", "1");
        }
        /**********************************************************************
        	    07. 결과보고서 제출취소 함수 선언
        ***********************************************************************/
        this.btnJechulCwiso_onclick = function(obj,e)
        {
        	this.fn_JechulCwiso();
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_JechulCwiso = function()
        {
        	var CheckRow = this.dsMaster.rowposition;

        	// 수정사항이 있을 경우
        	if(this.dsMaster.getRowType(CheckRow) == Dataset.ROWTYPE_UPDATE)
            {
                this.gfn_alert("수정한 항목을 저장해 주세요.","제출정보","","warning");
                return false;
            }

        	// 신규 데이터의 경우 저장 후 결과보고서 제출취소 가능
        	if(this.dsMaster.getRowType(CheckRow) == Dataset.ROWTYPE_INSERT)
            {
                this.gfn_alert("결과보고서 신규 저장 후 결과보고서 제출취소 가능합니다.","결과보고서정보","","warning");
                return false;
            }

        	// 처리상태가 제출취소인 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "0")
        	{
        		this.gfn_alert("이미 제출취소한 항목입니다.","제출정보","","warning");
                return false;
        	}

        	// 처리상태가 접수인 경우
        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "2")
        	{
        		this.gfn_alert("이미 접수한 항목은 제출취소 할 수 없습니다.","제출정보","","warning");
                return false;
        	}

        	if(this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == null || this.dsMaster.getColumn(CheckRow, "CHEORI_SANGTAE_GBCD") == "1")
        	{
        		var result = this.gfn_confirm( "제출취소 하시겠습니까?", "제출정보","","question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.dsMaster.setColumn(CheckRow, "CHEORI_SANGTAE_GBCD", "0");
        	}

            var strSvc      = "SaveJechulCwiso";
            var strUrl      = "/prj/UD/UD01/Save_2110104_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
         *   기능 : 제출 취소 시 후처리
         */
        this.fn_PostSaveJechulCwiso = function()
        {
        	this.fn_PostSave();

        	// 제출취소 후 활성화
        	this.fn_enable("true", "0");
        }

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HWALDONG_SIJAK_DT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "HWALDONG_JONGRYO_DT"))
        	{
        		this.gfn_alert("활동 종료일자는 활동 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

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

        	 // 처리상태가 없을 경우 미제출로 설정
        	 if(this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEORI_SANGTAE_GBCD") == null)
        	 {
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "CHEORI_SANGTAE_GBCD", '0');
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
            var strUrl      = "/prj/UD/UD01/Save_2110104_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        	if (!this.gfn_isNull(this.strKeyValue)) {
        		var nRow = this.dsMaster.findRow("GYEOLGWA_BOGO_CNT", this.strKeyValue);
        		this.dsMaster.set_rowposition(nRow);
        		this.ds_input.setColumn(0, "GYEOLGWA_BOGO_CNT", this.strKeyValue);
        		this.strKeyValue = "";
        	}

            //this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // 팝업 종료
        this.btnClose_onclick = function(obj,e)
        {
        	if (this.gfn_isUpdate(this.dsMaster))
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == false)
        		{
        			return false;
        		}
        	}

        	var strGyeolgwaBogoCnt = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT");
        	this.close("CLOSE," + strGyeolgwaBogoCnt);
        };

        /**********************************************************************
                10. 팝업
        ***********************************************************************/
        // 관리부서 팝업
        this.btnDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtDeptNm.value;

        	this.fn_setCallDeptPopup(deptCdNm);
        };

        // 활동내역서 팝업
        this.btnHwaldongNaeyoek_onclick = function(obj,e)
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
            {
                this.gfn_alert("결과보고서 신규 저장 후 활동내역서 입력가능합니다.","결과보고서정보","","warning");
                return false;
            }

        	// 수정사항이 있을 경우
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_UPDATE)
            {
                this.gfn_alert("수정한 항목을 저장해 주세요.","결과보고서정보","","warning");
                return false;
            }

        	var dancheCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD");
        	var dancheNm = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_NM");
        	var yyyy = this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY");
        	var gyeolgwabogo = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT");
        	var cheoriSangtae = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEORI_SANGTAE_GBCD");
        	var oArg = {dancheCd:dancheCd, dancheNm:dancheNm, yyyy:yyyy, gyeolgwabogo:gyeolgwabogo, cheoriSangtae:cheoriSangtae};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "HwaldongNaeyoekSeo","UD01::UD01_2110104_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                11. 파일첨부
        ***********************************************************************/
        this.btnFile_onclick = function(obj,e)
        {
        	this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "CEOMBU_FILE_NO"));
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "GWANLI_DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GWANLI_DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.newvalue);
        			}
        	   }
        	}
        };


        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsDept";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsDept.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GWANLI_DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GWANLI_DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "dept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.edtBanryeoSayu_onchanged = function(obj,e)
        {

        };

        /**********************************************************************
                12. 첨부파일
        ***********************************************************************/
        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (this.dsMaster.rowcount > 0) {
        		var nRow = this.dsMaster.rowposition;

        		if (this.dsMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        			this.gfn_alert("저장 후 첨부파일 사용 가능합니다.","저장정보","","information");
        		} else {

        			var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        			this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", strAttFileNo);

        			var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        			var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        			var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        			var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        			var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        			var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        			var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        			var lv_sValue05 		= "univ_UD";				// 부모에서 넘어가는 파라미터(도메인네임)
        			var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        			var sPopId          = "ceombuFileNoFileUpload";
        			var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        			var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        								  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        								  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        								  , pv_sVal01:lv_sValue01      	// 파라미터1
        								  , pv_sVal02:lv_sValue02       // 파라미터2
        								  , pv_sVal03:lv_sValue03       // 파라미터3
        								  , pv_sVal04:lv_sValue04       // 파라미터4
        								  , pv_sVal05:lv_sValue05       // 파라미터5
        								  , pv_sVal06:lv_sValue06};     // 파라미터6
        			var sPopupCallBack 	= "fn_popupCallback";
        			var oOption 		= {};

        			this.dsDummy.clearData();
        			this.gfn_openPopup( sPopId
        							  , sUrl
        							  , oArg
        							  , sPopupCallBack
        							  , oOption);

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div_00.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnFile.addEventHandler("onclick",this.btnFile_onclick,this);
            this.edtBanryeoSayu.addEventHandler("onchanged",this.edtBanryeoSayu_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnJechulCwiso.addEventHandler("onclick",this.btnJechulCwiso_onclick,this);
            this.btnJechul.addEventHandler("onclick",this.btnJechul_onclick,this);
            this.btnHwaldongNaeyoek.addEventHandler("onclick",this.btnHwaldongNaeyoek_onclick,this);
            this.btnDept.addEventHandler("onclick",this.btnDept_onclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UD01_2110104_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
