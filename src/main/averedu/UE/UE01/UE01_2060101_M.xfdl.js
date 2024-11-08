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
            this.set_titletext("장학코드관리");
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
            obj._setContents("<ColumnInfo><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GYONAEOE_GBCD\"/><Col id=\"JANGHAK_NM\"/><Col id=\"YEONSOK_JANGHAK_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_YAKEO_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JANGHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GUKGA_JANGHAK_MAECHING_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_MAPPING_JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOJISEO_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_BANYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JUNGBOK_SUHYE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKYONG_DAESANG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSAENG_SINCHEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JECHUL_SEORYU\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGigwan", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"10\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SAEOPJA_NO\" type=\"STRING\" size=\"15\"/><Column id=\"DAEPYOJA\" type=\"STRING\" size=\"10\"/><Column id=\"DAMDANG_BUSEO\" type=\"STRING\" size=\"50\"/><Column id=\"DAMDANGJA\" type=\"STRING\" size=\"10\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"15\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"YUCHIJA\" type=\"STRING\" size=\"50\"/><Column id=\"SINCHEONG_JAGYEOK\" type=\"STRING\" size=\"50\"/><Column id=\"GUBI_SEORYU\" type=\"STRING\" size=\"10\"/><Column id=\"JIGEUP_JOGEON\" type=\"STRING\" size=\"50\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMapping", this);
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_YAKEO_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JANGHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GUKGA_JANGHAK_MAECHING_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_MAPPING_JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOJISEO_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_BANYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JUNGBOK_SUHYE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKYONG_DAESANG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSAENG_SINCHEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JECHUL_SEORYU\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHoegye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGigan", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaesang", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","53","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("장학코드 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","113","52","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1",null,null,"28","0","188",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0",null,"120","28",null,"188",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
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
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","298",null,"120","28",null,"188",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("장학코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakCd","421",null,"173","22",null,"191",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","598",null,"120","28",null,"188",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0",null,"135","22",null,"219",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("장학코드 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","576",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","548","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
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
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","239","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","483","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchUseYn","573","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchYn");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","228","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","459","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","88","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","319","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00","563","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","329","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyonaeoe","98","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchGyonaeoe");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGyonaeoe","122",null,"173","22",null,"191",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyonaeoe");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm","721",null,null,"22","4","191",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02","1",null,null,"28","0","160",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","0",null,"120","28",null,"160",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("장학기관");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01","298",null,"120","28",null,"160",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("장학약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakYakeo","421",null,"173","22",null,"163",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","598",null,"120","28",null,"160",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("장학영어명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJanghakGigwan","122",null,"173","22",null,"163",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGigwan");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakEngNm","721",null,null,"22","4","163",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","1",null,null,"48","0","112",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","0",null,"120","48",null,"112",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("지원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00","298",null,"120","48",null,"112",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("학생신청가능");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00","598",null,"120","48",null,"112",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("제출서류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJiwon","122",null,"173","42",null,"115",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJiwon");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00","1",null,null,"28","0","84",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_00","0",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("장학등급");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_00","298",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("장학계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00","598",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("국가장학매칭코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJanghakDeunggeup","122",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGrd");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGukgaJanghakMatching","721",null,null,"22","4","87",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01","1",null,null,"28","0","56",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01","0",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("연속장학여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01","298",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("지급기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01","598",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("연속맵핑장학코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00","1",null,null,"28","0","28",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01_00","0",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("고지서포함여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01_00","298",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_00","598",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("적용대상");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00_00","1",null,null,"28","0","0",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01_00_00","0",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("중복수혜여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01_00_00","298",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("회계반영");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_00_00","598",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("회계구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtJechulSeoryu","721",null,null,"42","4","115",null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHaksaengSincheongYn","421",null,"120","22",null,"125",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJanghakGyeyeol","421",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYeonsokMappingJanghak","721",null,null,"22","4","59",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_datacolumn("JANGHAK_NM");
            obj.set_codecolumn("JANGHAK_CD");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsMapping");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkYeonsokJanghakYn","122",null,"120","22",null,"59",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkGojiseoPohamYn","122",null,"120","22",null,"31",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJungbokSuhyeYn","122",null,"120","22",null,"3",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHoegyeHanyeong","421",null,"120","22",null,"3",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","421",null,"120","22",null,"31",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHoegyeGbcd","721",null,null,"22","4","3",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHoegye");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","252",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"교내/외\"/><Cell col=\"2\" text=\"장학코드\"/><Cell col=\"3\" text=\"장학명\"/><Cell col=\"4\" text=\"약어명\"/><Cell col=\"5\" text=\"등급\"/><Cell col=\"6\" suppressalign=\"middle\" text=\"연속장학\"/><Cell col=\"7\" text=\"중복수혜\"/><Cell col=\"8\" text=\"학생신청\"/><Cell col=\"9\" text=\"고지서포함\"/><Cell col=\"10\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:GYONAEOE_GBCD\" combodataset=\"dsGridGyonaeoe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"expr: GYONAEOE_GBCD != &quot;&quot; ? &quot;combotext&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:JANGHAK_CD\"/><Cell col=\"3\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JANGHAK_YAKEO_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JANGHAK_DEUNGGEUP_GBCD\" combodataset=\"dsGridGrd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"expr:JANGHAK_DEUNGGEUP_GBCD != &quot;&quot; ? &quot;combotext&quot; : &quot;none&quot;\"/><Cell col=\"6\" expr=\"expr:YEONSOK_JANGHAK_YN==1?&apos;Y&apos;:&apos;&apos;\" text=\"bind:YEONSOK_JANGHAK_YN\"/><Cell col=\"7\" expr=\"expr:JUNGBOK_SUHYE_YN==1?&apos;Y&apos;:&apos;&apos;\" text=\"bind:JUNGBOK_SUHYE_YN\"/><Cell col=\"8\" expr=\"expr:HAKSAENG_SINCHEONG_YN==1?&apos;Y&apos;:&apos;&apos;\" text=\"bind:HAKSAENG_SINCHEONG_YN\"/><Cell col=\"9\" expr=\"expr:GOJISEO_POHAM_YN==1?&apos;Y&apos;:&apos;&apos;\" text=\"bind:GOJISEO_POHAM_YN\"/><Cell col=\"10\" expr=\"expr:USE_YN==1?&apos;Y&apos;:&apos;&apos;\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJigeupGigan","421",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGigan");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("divCheckBoxCrt","721",null,null,"22","4","31",null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("장학코드관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edtJanghakCd","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.cboSearchUseYn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtJanghakNm","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtJanghakYakeo","value","dsMaster","JANGHAK_YAKEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJanghakEngNm","value","dsMaster","JANGHAK_YAKEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchGyonaeoe","value","ds_input","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboGyonaeoe","value","dsMaster","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboJanghakGigwan","value","dsMaster","JANGHAK_GIGWAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboJiwon","value","dsMaster","JIWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboJanghakDeunggeup","value","dsMaster","JANGHAK_DEUNGGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","chkYeonsokJanghakYn","value","dsMaster","YEONSOK_JANGHAK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chkGojiseoPohamYn","value","dsMaster","GOJISEO_POHAM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","chkJungbokSuhyeYn","value","dsMaster","JUNGBOK_SUHYE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","chkHaksaengSincheongYn","value","dsMaster","HAKSAENG_SINCHEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboJanghakGyeyeol","value","dsMaster","JANGHAK_GYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboJigeupGigan","value","dsMaster","JIGEUP_GIGAN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","chkUseYn","value","dsMaster","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","chkHoegyeHanyeong","value","dsMaster","HOEGYE_BANYEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","txtJechulSeoryu","value","dsMaster","JECHUL_SEORYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtGukgaJanghakMatching","value","dsMaster","GUKGA_JANGHAK_MAECHING_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboYeonsokMappingJanghak","value","dsMaster","YEONSOK_MAPPING_JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboHoegyeGbcd","value","dsMaster","HOEGYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UE01_2060101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE01_2060101_M.xfdl(장학코드관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/28
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
        this.lvchkColidDs   = "GYONAEOE_GBCD$JANGHAK_CD$JANGHAK_NM$JANGHAK_GIGWAN_CD$JANGHAK_YAKEO_NM$JIWON_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "교내외구분$장학코드$장학명$장학기관$장학약어명$지원구분";
        var colSize 	= 3;    // CheckBox 열의 갯수생성
        var colWidth  	= 100;  // CheckBox 사이즈 설정
        var colHeight   = 22;   // CheckBox 높이 설정
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
            var strDs    = "dsSearchGyonaeoe|dsGridGyonaeoe|dsGyonaeoe|dsSearchYn|dsGridGrd|dsGrd|dsJiwon|dsGyeyeol|dsGigan|dsHoegye|dsDaesang";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "02001|02001|02001|000002|02003|02003|02002|02004|02005|02006|02007";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|S|T|X|S|S|S|S|S|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 공통코드 조회
        	this.fn_CommRet();
        };

        this.fn_PostformInit = function()
        {
        	// 체크박스 생성
        	this.fn_checkbox();
        }

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
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "CommRet":
                            this.fn_PostCommRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
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
                05. 조회 함수 선언(공통코드)
        ***********************************************************************/
        this.fn_CommRet = function()
        {
            var strSvc      = "CommRet";
            var strUrl      = "/prj/UE/UE01/CommRetrieve_2060101_M.do";
            var strInDs     = "";
            var strOutDs    = "dsGigwan=dsGigwan ";
        	    strOutDs   += "dsMapping=dsMapping";
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

        this.fn_PostCommRet = function()
        {
        	this.dsGigwan.set_updatecontrol(false);
            this.dsGigwan.insertRow(0);
        	this.dsGigwan.setColumn(0, "CODE", null);
        	this.dsGigwan.setColumn(0, "CODE_NM", "선택");
        	this.dsGigwan.setRowType(0, Dataset.ROWTYPE_NORMAL);
        	this.dsGigwan.set_updatecontrol(true);

        	this.dsMapping.set_updatecontrol(false);
            this.dsMapping.insertRow(0);
        	this.dsMapping.setColumn(0, "JANGHAK_CD", null);
        	this.dsMapping.setColumn(0, "JANGHAK_NM", "선택");
        	this.dsMapping.setRowType(0, Dataset.ROWTYPE_NORMAL);
        	this.dsMapping.set_updatecontrol(true);
        };

        /**********************************************************************
                06. 조회 함수 선언(마스터 함수)
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
            var strUrl      = "/prj/UE/UE01/Retrieve_2060101_M.do";
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
                07. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, 'YEONSOK_JANGHAK_YN', '0'); // 연속장학여부
        	this.dsMaster.setColumn(nRow, 'GOJISEO_POHAM_YN', '1');   // 고지서 포함 여부
        	this.dsMaster.setColumn(nRow, 'HOEGYE_BANYEONG_YN', '1'); // 회계반영여부
        	this.dsMaster.setColumn(nRow, 'HOEGYE_GBCD', '4');        // 회계구분
        	this.dsMaster.setColumn(nRow, 'JUNGBOK_SUHYE_YN', '1');   // 중복수혜여부
        	this.dsMaster.setColumn(nRow, 'USE_YN', '1');             // 사용여부
        	this.dsMaster.setColumn(nRow, 'HAKSAENG_SINCHEONG_YN', '0'); // 학생신청가능여부

        	this.edtJanghakCd.set_readonly(false);
        };

        /**********************************************************************
                08. 삭제 함수 선언
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
            var strUrl      = "/prj/UE/UE01/Delete_2060101_M.do";
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
                09. 저장 함수 선언
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
            var strUrl      = "/prj/UE/UE01/Save_2060101_M.do";
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
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                11. 각종함수
        ***********************************************************************/
        // 연속장학여부에 따른 처리
        this.fn_VisibleJigeupGigan = function()
        {
        	var yeonsokJanghakYn = this.dsMaster.getColumn(this.dsMaster.rowposition, "YEONSOK_JANGHAK_YN"); 		// 연속장학여부
        	var jeokyongDaesangGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD"); 	// 적용대상구분
        	var idx = jeokyongDaesangGbcd.indexOf('01', 0); // 없으면 -1

        	// Y
        	if(yeonsokJanghakYn == "1")
        	{
        	    this.cboJigeupGigan.set_readonly(false);  			// cbo_지급기간
        		this.cboYeonsokMappingJanghak.set_readonly(true); 	// cbo_연속맵핑장학코드
        		this.cboYeonsokMappingJanghak.set_index(0);			// cbo_연속맵핑장학코드 초기화
        	}
        	// N
        	else if(yeonsokJanghakYn == "0")
        	{
        	    this.cboJigeupGigan.set_readonly(true);  	// cbo_지급기간
        		this.cboJigeupGigan.set_index(0);			// cbo_지급기간 값 초기화

        		// 신입생 포함
        		if(idx != '-1')
        		{
        		    this.cboYeonsokMappingJanghak.set_readonly(false); // cbo_연속맵핑장학코드
        		}
        		// 신입생 미포함
        		else if(idx == '-1')
        		{
        		    this.cboYeonsokMappingJanghak.set_readonly(true); 	// cbo_연속맵핑장학코드
        			this.cboYeonsokMappingJanghak.set_index(0);			// cbo_연속맵핑장학코드 초기화
        		}
        	}
        };

        // 적용대상 체크박스 생성
        this.fn_checkbox = function()
        {
        	var chkId = "";
        	var leftSz = 0;
        	var topSz  = 0;

        	this.fn_setObjCheckBoxDestroy(this.divCheckBoxCrt.form);

        	for (var i = 0; i < this.dsDaesang.getRowCount(); i++)
        	{
        		var code 		= this.dsDaesang.getColumn(i, "CODE");
        		var codeNm 		= this.dsDaesang.getColumn(i, "CODE_NM");
        		chkId = "CheckBox"+ code;
        		this.fn_CreateCheckBox(chkId,codeNm,leftSz,topSz);
        		var chkObj = this.divCheckBoxCrt.form.components[chkId];
        		var colNum      = (i+1) % colSize;
        		if(colNum == 0)
        		{
        			leftSz = 0;
        			topSz  = chkObj.getOffsetBottom();
        		}else
        		{
        			leftSz = chkObj.getOffsetRight();
        		}
        	}
        	this.divCheckBoxCrt.form.resetScroll();
        }

        // checkBox 초기화(모든 체크박스를 삭제)
        this.fn_setObjCheckBoxDestroy = function(objForm)
        {
        	var arrComp  = objForm.components;
        	var nLength = arrComp.length-1;
        	for(var i=nLength; i>=0; i--)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.CheckBox)
        		{
        			var objCp = objForm.removeChild(objComp.name);
        			objCp.destroy();
        			objCp = null;
        		}
        	}
        };

        // checkBox 동적인 생성
        this.fn_CreateCheckBox = function (chkId,chkNm,leftSz,topSz)
        {
        	var objCheckBox = new CheckBox();
        	objCheckBox.init(chkId, leftSz,topSz,colWidth,colHeight);
        	this.divCheckBoxCrt.addChild(chkId, objCheckBox);
        	objCheckBox.addEventHandler("onclick", this.fn_isCheckboxClick, this);
        	objCheckBox.set_text(chkNm);
        	objCheckBox.show();
        };

        // 체크박스를 클릭했을때
        this.fn_isCheckboxClick = function()
        {
        	var arrComp = this.divCheckBoxCrt.form.components;

        	if(arrComp[0].value == true) {
        		if(arrComp[1].value == true) {
        			if(arrComp[2].value == true) {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "01;02;03");
        			} else {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "01;02");
        			}
        		} else {
        			if(arrComp[2].value == true) {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "01;03");
        			} else {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "01");
        			}
        		}
        	} else {
        		if(arrComp[1].value == true) {
        			if(arrComp[2].value == true) {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "02;03");
        			} else {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "02");
        			}
        		} else {
        			if(arrComp[2].value == true) {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", "03");
        			} else {
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD", null);
        			}
        		}
        	}
        }

        /**********************************************************************
                12. 기타 Control Event
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
        	// 연속장학여부, 적용대상변경 시
        	this.fn_VisibleJigeupGigan();

        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        	    this.edtJanghakCd.set_readonly(false);
        	}
        	else
        	{
        	    this.edtJanghakCd.set_readonly(true);
        	}

        	// 적용대상 체크박스
        	var jeokyongDaesangGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD"); 	// 적용대상구분
        	var idx01 = jeokyongDaesangGbcd.indexOf('01', 0); // 없으면 -1
        	var idx02 = jeokyongDaesangGbcd.indexOf('02', 0); // 없으면 -1
        	var idx03 = jeokyongDaesangGbcd.indexOf('03', 0); // 없으면 -1

        	this.divCheckBoxCrt.form.components[0].set_value("0");
        	this.divCheckBoxCrt.form.components[1].set_value("0");
        	this.divCheckBoxCrt.form.components[2].set_value("0");

        	if(idx01 != "-1") {
        		this.divCheckBoxCrt.form.components[0].set_value("1");
        	}

        	if(idx02 != "-1") {
        		this.divCheckBoxCrt.form.components[1].set_value("1");
        	}

        	if(idx03 != "-1") {
        		this.divCheckBoxCrt.form.components[2].set_value("1");
        	}
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	// 연속장학여부, 적용대상변경 시
        	if(e.columnid == "YEONSOK_JANGHAK_YN" || e.columnid == "JEOKYONG_DAESANG_GBCD") {
        	    this.fn_VisibleJigeupGigan();
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                13. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_cboSearchGyonaeoe_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GYONAEOE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchJanghakNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JANGHAK_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchUseYn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"USE_YN",obj.value);
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
            this.divSearch.form.cboSearchUseYn.addEventHandler("onkeydown",this.divSearch_cboSearchUseYn_onkeydown,this);
            this.divSearch.form.edtSearchJanghakNm.addEventHandler("onkeydown",this.divSearch_edtSearchJanghakNm_onkeydown,this);
            this.divSearch.form.cboSearchGyonaeoe.addEventHandler("onkeydown",this.divSearch_cboSearchGyonaeoe_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE01_2060101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
