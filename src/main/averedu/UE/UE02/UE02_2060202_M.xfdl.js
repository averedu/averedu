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
            this.set_titletext("장학신청관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"22\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIKJEON_HAKGI_SEONGJEOK\" type=\"STRING\" size=\"3\"/><Column id=\"JIKJEON_HAKGI_CHIDEUK_HAKJEOM\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJEON_HAKGI_JEOMSU_AVG\" type=\"STRING\" size=\"5\"/><Column id=\"JANYEO_IPHAK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"JANYEO_DEUNGROK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SINCHEONG_SEUNGIN_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"SEUNGIN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_SABEON\" type=\"STRING\" size=\"20\"/><Column id=\"BANRYEO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANRYEO_SABEON\" type=\"STRING\" size=\"20\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSUJA_SABEON\" type=\"STRING\" size=\"20\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSincheong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSincheong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSuhye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_iljeongInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"4\"/><Column id=\"ILJEONG_NM\" type=\"STRING\" size=\"10\"/><Column id=\"FR_DT\" type=\"STRING\" size=\"10\"/><Column id=\"FR_TM\" type=\"STRING\" size=\"10\"/><Column id=\"TO_DT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TO_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CURR_ILJEONG_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHUGA_NAEYONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YONGDO_COLUMN4\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAKBEON_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaeng", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_suhyeInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SIJAK_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSuhyeGbcd", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_studentInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SIJAK_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStudent", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANYEO_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANYEO_DEUNGROK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_seunginInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FLAG\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_banryeoInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"BANRYEO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","53","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("장학신청 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","113","52","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1",null,null,"28","0","112",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("25");
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
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","248",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","498",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0",null,"135","22",null,"143",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("장학신청 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","652",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","615","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("↑\r\n45\r\n↓");
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
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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

            obj = new Spin("spnSearchYYYY","90","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","200","0","56","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","201","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","281","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","291","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","80","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01","401","-3","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_00","430","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00","510","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCd","520","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","640","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchJanghak","650","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","672","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","682","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00","802","-3","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01","834","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02_00","914","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","924","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02","1044","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchHakbeon","1054","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_02","1076","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1086","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","1231","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("신청결과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1311","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSincheongSeunginGbcd","1321","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchSincheong");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00_00","1206","-3","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_02","1",null,null,"28","0","84",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","0",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01","298",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","598",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00","1",null,null,"28","0","56",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_00","0",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("직전학기성적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01","1",null,null,"28","0","28",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01","0",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01","898",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("수혜구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_00","898",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_01","1198",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00","298",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("직전학기취득학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjeonHakgiChideukHakjeom","421",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00","598",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("직전학기백분율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjeonHakgiJeomsuAvg","721",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_00_00","898",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("잔여입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanyeoIphakAmt","1021",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_01_00","1198",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("잔여등록금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanyeoDeungrokAmt","1321",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01_00_00","298",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("신청사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSincheongSayu","421",null,"473","22",null,"31",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_00_00_00","898",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("신청결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","122",null,"123","22",null,"115",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","371",null,"123","22",null,"115",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakCd","621",null,"120","22",null,"115",null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnJanghak","746",null,"22","22",null,"115",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm","773",null,"120","22",null,"115",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSuhye","1021",null,"173","22",null,"115",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSuhye");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","1321",null,"120","22",null,"115",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","1446",null,"22","22",null,"115",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaksaengNm","1473",null,"120","22",null,"115",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","122",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","421",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","721",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","1021",null,"173","22",null,"87",null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjeonHakgiSeongjeok","122",null,"173","22",null,"59",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSincheongGyelgwa","1021",null,"173","22",null,"31",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSincheong");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSincheongDt","122",null,"173","22",null,"31",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","185",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"130\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"55\"/><Column size=\"85\"/><Column size=\"65\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" expr=\"expr:comp._allCheck\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"NO\"/><Cell col=\"2\" text=\"학년도\"/><Cell col=\"3\" text=\"학기\"/><Cell col=\"4\" text=\"학과\"/><Cell col=\"5\" text=\"전공\"/><Cell col=\"6\" text=\"학년\"/><Cell col=\"7\" text=\"학번\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"생년월일\"/><Cell col=\"10\" text=\"장학명\"/><Cell col=\"11\" text=\"신청일자\"/><Cell col=\"12\" text=\"신청결과\"/><Cell col=\"13\" text=\"직전성적\"/><Cell col=\"14\" text=\"직전취득학점\"/><Cell col=\"15\" text=\"직전백분율\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:JANGHAK_YYYY\"/><Cell col=\"3\" text=\"bind:HAKGI\" combodataset=\"dsHakgi\" combocodecol=\"CODE\" displaytype=\"combotext\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" textAlign=\"left\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:JEONGONG_CD\" combodataset=\"dsJeongong\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" displaytype=\"expr:JEONGONG_CD!=&quot;&quot;?&apos;combotext&apos;:&apos;none&apos;\"/><Cell col=\"6\" text=\"bind:HAKNYEON\"/><Cell col=\"7\" text=\"bind:HAKBEON\"/><Cell col=\"8\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"9\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SINCHEONG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" text=\"bind:SINCHEONG_SEUNGIN_GBCD\" displaytype=\"combotext\" combodataset=\"dsSincheong\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"13\" text=\"bind:JIKJEON_HAKGI_SEONGJEOK\"/><Cell col=\"14\" text=\"bind:JIKJEON_HAKGI_CHIDEUK_HAKJEOM\"/><Cell col=\"15\" text=\"bind:JIKJEON_HAKGI_JEOMSU_AVG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeoChwiso","1565",null,"75","25",null,"148",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("반려취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeo","1505",null,"55","25",null,"148",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeunginChwiso","1425",null,"75","25",null,"148",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("승인취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeungin","1365",null,"55","25",null,"148",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("승인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJeopsu","1305",null,"55","25",null,"148",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("접수");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint","1215",null,"85","25",null,"148",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("신청서출력");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00","1",null,null,"28","0","0",null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staJeopsuDt","0",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staSeunginBanryeoDt","298",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("승인/반려일자");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBanryeoSayu","721",null,"473","22",null,"3",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staBanryeoSayu","598",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","122",null,"173","22",null,"3",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeunginDt","421",null,"173","22",null,"3",null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBanryeoDt","421",null,"173","22",null,"3",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staWarning",null,"50","600","20","0",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("req");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("장학신청관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item15","divSearch.form.spnSearchYYYY","value","ds_input","JANGHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.edtSearchJanghakCd","value","ds_input","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.cboSearchSincheongSeunginGbcd","value","ds_input","SINCHEONG_SEUNGIN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","spnYYYY","value","dsMaster","JANGHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJanghakCd","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtJanghakNm","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboSuhye","value","dsMaster","SUHYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtHaksaengNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboJeongong","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboSincheongGyelgwa","value","dsMaster","SINCHEONG_SEUNGIN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtJikjeonHakgiSeongjeok","value","dsMaster","JIKJEON_HAKGI_SEONGJEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtJikjeonHakgiChideukHakjeom","value","dsMaster","JIKJEON_HAKGI_CHIDEUK_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtJikjeonHakgiJeomsuAvg","value","dsMaster","JIKJEON_HAKGI_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtJanyeoIphakAmt","value","dsMaster","JANYEO_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtJanyeoDeungrokAmt","value","dsMaster","JANYEO_DEUNGROK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","calSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtSincheongSayu","value","dsMaster","SINCHEONG_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtBanryeoSayu","value","dsMaster","BANRYEO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","calJeopsuDt","value","dsMaster","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","calSeunginDt","value","dsMaster","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","calBanryeoDt","value","dsMaster","BANRYEO_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsIljeong");
            this._addPreloadList("data","","dsSuhyeGbcd");
            this._addPreloadList("data","","dsStudent");
        };
        
        // User Script
        this.registerScript("UE02_2060202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE02_2060202_M.xfdl(장학신청관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/02
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
        this.lvchkColidDs   = "JANGHAK_YYYY$HAKGI$JANGHAK_CD$HAKBEON$SUHYE_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학년도$학기$장학코드$학번/성명$수혜구분";
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
            var strDs    = "dsHakgi|dsSearchSincheong|dsSincheong|dsSuhye|dsJuya|dsHaknyeon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|02013|02013|02008|00003|00060";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "N";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.cboHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "N";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_JeongongComboLoad(this.cboJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.fn_PostformInit = function()
        {
        	this.dsHakgi.filter("REF_1 == '10'");
        	this.fn_SetButtonEnabel(false);
        	this.fn_Iljeong();
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "JANGHAK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "SuhyeRet":
                            this.fn_PostSuhyeRet();
                        break;
        			case "StudentRet":
                            this.fn_PostStudentRet();
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
        			case "Iljeong":
                            this.fn_PostIljeong();
                        break;
        			case "Banryeo":
                            this.fn_PostBanryeo();
                        break;
        			case "BanryeoChwiso":
                            this.fn_PostBanryeoChwiso();
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
        		case "haksaeng" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "HAKBEON", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "HAKSAENG_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "janghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JANGHAK_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "gridHaksaeng" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", sRtn[10]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_CD", sRtn[12]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKNYEON", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKJEOK_STCD", sRtn[14]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JUYA_GBCD", sRtn[22]);
        					this.dsMaster.set_enableevent(true);

        					// 학번 셋팅 후 직전학기 취득학점, 평점, 잔여입학금, 잔여등록금 셋팅
        					this.fn_StudentRet(sRtn[0]);
        				}
        			break;
        		case "gridJanghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);

        					// 수혜구분 셋팅
        					this.fn_SuhyeRet(sRtn[0]);
        				}
        			break;
        		default:
                    break;
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
        	this.fn_SetButtonEnabel(false);

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "JANGHAK_YYYY")))
            {
                this.alert("학년도는 필수입력입니다.");
                return false;
            }
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "HAKGI")))
            {
                this.alert("학기는 필수입력입니다.");
                return false;
            }

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
            var strUrl      = "/prj/UE/UE02/Retrieve_2060202_M.do";
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
                06. 수혜구분 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSuhyeRet = function(janghakCd)
        {
            // 조회조건 셋팅
        	this.ds_suhyeInput.setColumn(0, "JANGHAK_YYYY", this.ds_input.getColumn(0, "JANGHAK_YYYY"));
        	this.ds_suhyeInput.setColumn(0, "SIJAK_HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        	this.ds_suhyeInput.setColumn(0, "JANGHAK_CD", janghakCd);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SuhyeRet = function(janghakCd)
        {
            if(!this.fn_PreSuhyeRet(janghakCd))
            {
                return false;
            }
            var strSvc      = "SuhyeRet";
            var strUrl      = "/prj/UE/UE02/suhyeRetrieve_2060202_M.do";
            var strInDs     = "ds_suhyeInput=ds_suhyeInput";
            var strOutDs    = "dsSuhyeGbcd=dsSuhyeGbcd";
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
        this.fn_PostSuhyeRet = function()
        {
            var suhyeGbcd = this.dsSuhyeGbcd.getColumn(0, 'SUHYE_GBCD');
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "SUHYE_GBCD", suhyeGbcd);
        };

        /**********************************************************************
                07. 학생정보 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreStudentRet = function(hakbeon)
        {
            // 조회조건 셋팅
        	this.ds_suhyeInput.setColumn(0, "JANGHAK_YYYY", this.ds_input.getColumn(0, "JANGHAK_YYYY"));
        	this.ds_suhyeInput.setColumn(0, "SIJAK_HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        	this.ds_suhyeInput.setColumn(0, "JANGHAK_CD", janghakCd);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_StudentRet = function(hakbeon)
        {
            if(!this.fn_PreStudentRet(hakbeon))
            {
                return false;
            }
            var strSvc      = "StudentRet";
            var strUrl      = "/prj/UE/UE02/studentRetrieve_2060202_M.do";
            var strInDs     = "ds_studentInput=ds_studentInput";
            var strOutDs    = "dsStudent=dsStudent";
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
        this.fn_PostStudentRet = function()
        {
            var chwideukHakjeom = this.dsStudent.getColumn(0, 'CHWIDEUK_HAKJEOM');
        	var pyeongjeomAvg = this.dsStudent.getColumn(0, 'PYEONGJEOM_AVG');
        	var janyeoIphakAmt = this.dsStudent.getColumn(0, 'JANYEO_IPHAK_AMT');
        	var janyeoDeungrokAmt = this.dsStudent.getColumn(0, 'JANYEO_DEUNGROK_AMT');
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JIKJEON_HAKGI_SEONGJEOK', pyeongjeomAvg);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JIKJEON_HAKGI_CHIDEUK_HAKJEOM', chwideukHakjeom);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JANYEO_IPHAK_AMT', janyeoIphakAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JANYEO_DEUNGROK_AMT', janyeoDeungrokAmt);
        };

        /**********************************************************************
                08. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "JANGHAK_YYYY", this.divSearch.form.spnSearchYYYY.value); // 학년도
        	this.dsMaster.setColumn(nRow, "HAKGI", this.divSearch.form.cboSearchHakgi.value); // 학기
        	this.dsMaster.setColumn(nRow, "SINCHEONG_SEUNGIN_GBCD", "01"); // 신청승인구분 01(신청)
        	this.dsMaster.setColumn(nRow, "SINCHEONG_DT", this.fn_Today());

        	this.fn_VisibleBanryeo();
        };

        /**********************************************************************
                09. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);
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
            var strUrl      = "/prj/UE/UE02/Delete_2060202_M.do";
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
                10. 저장 함수 선언
        ***********************************************************************/
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
            var strUrl      = "/prj/UE/UE02/Save_2060202_M.do";
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
                11. 접수
        ***********************************************************************/
        this.btnJeopsu_onclick = function(obj,e)
        {
        	// 01: 신청, 02:접수, 03:승인, 04:반려
        	var cnt = 0;
        	var noChkCnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++)
        	{
        	    var chk = this.dsMaster.getColumn(i, "CHK");
        		var sincheongSeunginGbcd = this.dsMaster.getColumn(i, "SINCHEONG_SEUNGIN_GBCD");

        		if(chk == '1')
        		{
        			noChkCnt++;
        			if(sincheongSeunginGbcd != '01')
        			{
        			     cnt++;
        			}
        		}
        	}

        	if(noChkCnt == 0)
        	{
        	    this.alert('선택된 장학신청 목록이 없습니다.');
        		return false;
        	}
        	if(cnt > 0)
        	{
        	    this.alert('신청결과가 "신청"인 장학신청 목록만 선택해주세요.');
        		return false;
        	}
        	if(!this.confirm("접수시 수정중인 정보가 저장되지 않습니다.\n진행하시겠습니까?"))
        	{
        	    return false;
        	}

            var jeopsuData = new Dataset;
        	    jeopsuData.copyData(this.dsMaster);
        	    jeopsuData.filter("CHK == '1' && SINCHEONG_SEUNGIN_GBCD == '01'");
        	var oArg = {jeopsuData:jeopsuData};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("jeopsu","UE02::UE02_2060202_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                12. 승인
        ***********************************************************************/
        this.btnSeungin_onclick = function(obj,e)
        {
        	// 01: 신청, 02:접수, 03:승인, 04:반려
        	var cnt = 0;
        	var noChkCnt = 0;
        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++)
        	{
        	    var chk = this.dsMaster.getColumn(i, "CHK");
        		var sincheongSeunginGbcd = this.dsMaster.getColumn(i, "SINCHEONG_SEUNGIN_GBCD");

        		if(chk == '1')
        		{
        		    noChkCnt++;
        			if(!(sincheongSeunginGbcd == '01' || sincheongSeunginGbcd == '02'))
        			{
        			    cnt++;
        			}
        		}
        	}

        	if(noChkCnt == 0)
        	{
        	    this.alert('선택된 장학신청 목록이 없습니다.');
        		return false;
        	}
        	if(cnt > 0)
        	{
        	    this.alert('신청결과가 "신청" 혹은 "승인"인 장학신청 목록만 선택해주세요.');
        		return false;
        	}
        	if(!this.confirm("승인시 수정중인 정보가 저장되지 않습니다.\n진행하시겠습니까?"))
        	{
        	    return false;
        	}

            var seunginData = new Dataset;
        	    seunginData.copyData(this.dsMaster);
        	    seunginData.filter("CHK == '1' && (SINCHEONG_SEUNGIN_GBCD == '01'||SINCHEONG_SEUNGIN_GBCD == '02')");
        	var oArg = {seunginData:seunginData};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("seungin","UE02::UE02_2060202_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                13. 승인취소
        ***********************************************************************/
        this.btnSeunginChwiso_onclick = function(obj,e)
        {
        	this.fn_SeunginChwiso();
        };

        this.fn_PreSeunginChwiso = function()
        {
            // 신청결과 01: 신청, 02: 승인, 03: 반려
        	var cnt = 0;
        	var noChkCnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++)
        	{
        	    var chk = this.dsMaster.getColumn(i, "CHK");
        		var sincheongSeunginGbcd = this.dsMaster.getColumn(i, "SINCHEONG_SEUNGIN_GBCD");

        		if(chk == '1')
        		{
        		    noChkCnt++;
        		    if(sincheongSeunginGbcd != '03')
        			{
        			    cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0)
        	{
        	    this.alert('선택된 장학신청 목록이 없습니다.');
        		return false;
        	}
        	if(cnt > 0)
        	{
        	    this.alert('신청결과가 "승인"인 장학신청 목록만 선택해주세요.');
        		return false;
        	}
        	var result = this.gfn_confirm("승인취소시 수정중인 정보가 저장되지 않습니다.\n진행하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_seunginInput.setColumn(0, "FLAG", "2");

        	return true;
        };

        this.fn_SeunginChwiso = function()
        {
        	if(!this.fn_PreSeunginChwiso())
            {
                return false;
            }
        	var strSvc      = "Seungin";
            var strUrl      = "/prj/UE/UE02/Save_2060202_P02.do";
            var strInDs     = "ds_seunginInput=ds_seunginInput:a ";
                strInDs    += "dsMaster=dsMaster";
            var strOutDs    = "";
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

        /**********************************************************************
                14. 반려
        ***********************************************************************/
        this.btnBanryeo_onclick = function(obj,e)
        {
        	this.fn_Banryeo();
        };

        this.fn_PreBanryeo = function()
        {
        	if(this.gfn_isNull(this.calBanryeoDt.value))
            {
                this.alert("반려일자는 필수입력입니다.");
                return false;
            }
        	if(this.gfn_isNull(this.edtBanryeoSayu.value))
            {
                this.alert("반려사유는 필수입력입니다.");
                return false;
            }

        	var result = this.gfn_confirm("반려 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_banryeoInput.setColumn(0, "JANGHAK_YYYY", this.spnYYYY.value);
        	this.ds_banryeoInput.setColumn(0, "HAKGI", this.cboHakgi.value);
        	this.ds_banryeoInput.setColumn(0, "JANGHAK_CD", this.edtJanghakCd.value);
        	this.ds_banryeoInput.setColumn(0, "HAKBEON", this.edtHakbeon.value);
        	this.ds_banryeoInput.setColumn(0, "BANRYEO_DT", this.calBanryeoDt.value);
        	this.ds_banryeoInput.setColumn(0, "BANRYEO_SAYU", this.edtBanryeoSayu.value);

        	return true;
        };

        this.fn_Banryeo = function()
        {
        	if(!this.fn_PreBanryeo())
            {
                return false;
            }
        	var strSvc      = "Banryeo";
            var strUrl      = "/prj/UE/UE02/Banryeo_2060202_M.do";
            var strInDs     = "ds_banryeoInput=ds_banryeoInput";
            var strOutDs    = "";
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

        this.fn_PostBanryeo = function()
        {
        	this.alert("반려 되었습니다.");
        };

        /**********************************************************************
                15. 반려취소
        ***********************************************************************/
        this.btnBanryeoChwiso_onclick = function(obj,e)
        {
        	this.fn_BanryeoChwiso();
        };

        this.fn_PreBanryeoChwiso = function()
        {
        	var result = this.gfn_confirm("반려취소 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_banryeoInput.setColumn(0, "JANGHAK_YYYY", this.spnYYYY.value);
        	this.ds_banryeoInput.setColumn(0, "HAKGI", this.cboHakgi.value);
        	this.ds_banryeoInput.setColumn(0, "JANGHAK_CD", this.edtJanghakCd.value);
        	this.ds_banryeoInput.setColumn(0, "HAKBEON", this.edtHakbeon.value);

        	return true;
        };

        this.fn_BanryeoChwiso = function()
        {
        	if(!this.fn_PreBanryeoChwiso())
            {
                return false;
            }
        	var strSvc      = "BanryeoChwiso";
            var strUrl      = "/prj/UE/UE02/BanryeoChwiso_2060202_M.do";
            var strInDs     = "ds_banryeoInput=ds_banryeoInput";
            var strOutDs    = "";
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

        this.fn_PostBanryeoChwiso = function()
        {
        	this.alert("반려취소 되었습니다.");
        };

        /**********************************************************************
                16. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                17. 각종 함수
        ***********************************************************************/
        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        // 신청결과구분에 따른 뷰변경
        this.fn_VisibleBanryeo = function()
        {
           // 01: 신청, 02:접수, 03:승인, 04:반려
            var sincheongSeunginGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "SINCHEONG_SEUNGIN_GBCD"); // 신청결과 구분

        	// 신청
        	if(sincheongSeunginGbcd == '01')
        	{
        	    this.cboSuhye.set_readonly(false); 				// cbo_수혜구분
        	    this.staJeopsuDt.set_visible(true); 			// sta_접수일자
        		this.calJeopsuDt.set_visible(true); 			// cal_접수일자
        		this.calJeopsuDt.set_readonly(true); 			// cal_접수일자
        	    this.calBanryeoDt.set_cssclass('point');		// cal_반려일자
        		this.staSeunginBanryeoDt.set_visible(true); 	// sta_승인/반려일자
        		this.staSeunginBanryeoDt.set_text("반려일자"); // sta_승인/반려일자
        		this.calSeunginDt.set_visible(false); 			// cal_승인일자
        		this.calBanryeoDt.set_visible(true); 			// cal_반려일자
        		this.edtBanryeoSayu.set_cssclass('point');		// sta_반려사유
        		this.staBanryeoSayu.set_visible(true); 			// sta_반려사유
        		this.edtBanryeoSayu.set_visible(true); 			// edt_반려사유
        		this.btnBanryeo.set_enable(true); 				// btn_반려
        		this.btnBanryeoChwiso.set_enable(false); 		// btn_반려취소
        		this.btnPrint.set_enable(true); 				// btn_신청서출력

        		// 신규 신청
        	    if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        		{
        		    this.cboSuhye.set_readonly(false); 				// cbo_수혜구분
        		    this.staJeopsuDt.set_visible(true); 			// sta_접수일자
        			this.calJeopsuDt.set_visible(true); 			// cal_접수일자
        			this.calJeopsuDt.set_readonly(true); 			// cal_접수일자
        			this.calBanryeoDt.set_cssclass('');				// cal_반려일자
        			this.staSeunginBanryeoDt.set_visible(false); 	// sta_승인/반려일자
        			this.calSeunginDt.set_visible(false); 			// cal_승인일자
        			this.calBanryeoDt.set_visible(false); 			// cal_반려일자
        			this.edtBanryeoSayu.set_cssclass('');			// edt_반려사유
        			this.staBanryeoSayu.set_visible(false); 		// sta_반려사유
        			this.edtBanryeoSayu.set_visible(false); 		// edt_반려사유
        			this.btnBanryeo.set_enable(false); 				// btn_반려
        			this.btnBanryeoChwiso.set_enable(false); 		// btn_반려취소
        			this.btnPrint.set_enable(false); 				// btn_신청서출력
        		}
        	}
        	// 접수
        	else if(sincheongSeunginGbcd == '02')
        	{
        	    this.cboSuhye.set_readonly(true); 				// cbo_수혜구분
        	    this.staJeopsuDt.set_visible(true); 			// sta_접수일자
        		this.calJeopsuDt.set_visible(true); 			// cal_접수일자
        		this.calJeopsuDt.set_readonly(false); 			// cal_접수일자
        	    this.staSeunginBanryeoDt.set_visible(true); 	// sta_승인/반려일자
        		this.calBanryeoDt.set_cssclass('point');		// sta_승인/반려일자
        		this.staSeunginBanryeoDt.set_text("반려일자"); // sta_승인/반려일자
        		this.calSeunginDt.set_visible(false); 			// cal_승인일자
        		this.calBanryeoDt.set_visible(true); 			// cal_반려일자
        		this.edtBanryeoSayu.set_cssclass('point');		// sta_반려사유
        		this.staBanryeoSayu.set_visible(true); 			// sta_반려사유
        		this.edtBanryeoSayu.set_visible(true); 			// edt_반려사유
        		this.btnBanryeo.set_enable(true); 				// btn_반려
        		this.btnBanryeoChwiso.set_enable(false); 		// btn_반려취소
        		this.btnPrint.set_enable(true); 				// btn_신청서출력
        	}
        	// 승인
            else if(sincheongSeunginGbcd == '03')
        	{
        	    this.cboSuhye.set_readonly(true); 				// cbo_수혜구분
            	this.staJeopsuDt.set_visible(true); 			// sta_접수일자
        		this.calJeopsuDt.set_visible(true); 			// cal_접수일자
        		this.calJeopsuDt.set_readonly(false); 			// cal_접수일자
        		this.calBanryeoDt.set_cssclass('');				// sta_승인/반려일자
        	    this.staSeunginBanryeoDt.set_visible(true); 	// sta_승인/반려일자
        		this.staSeunginBanryeoDt.set_text("승인일자"); // sta_승인일자 변경
        		this.calSeunginDt.set_visible(true); 			// cal_승인일자
        		this.calBanryeoDt.set_visible(false); 			// cal_반려일자
        		this.edtBanryeoSayu.set_cssclass('');			// sta_반려사유
        		this.staBanryeoSayu.set_visible(false); 		// sta_반려사유
        		this.edtBanryeoSayu.set_visible(false); 		// edt_반려사유
        		this.btnBanryeo.set_enable(false); 				// btn_반려
        		this.btnBanryeoChwiso.set_enable(false); 		// btn_반려취소
        		this.btnPrint.set_enable(true); 				// btn_신청서출력
        	}
        	// 반려
        	else if(sincheongSeunginGbcd == '04')
        	{
        	    this.cboSuhye.set_readonly(true); 				// cbo_수혜구분
        	    this.staJeopsuDt.set_visible(true); 			// sta_접수일자
        		this.calJeopsuDt.set_visible(true); 			// cal_접수일자
        		this.calBanryeoDt.set_cssclass('');				// sta_승인/반려일자
        	    this.staSeunginBanryeoDt.set_visible(true); 	// sta_승인/반려일자
        		this.staSeunginBanryeoDt.set_text("반려일자"); // sta_승인/반려일자
        		this.calSeunginDt.set_visible(false); 			// cal_승인일자
        		this.calBanryeoDt.set_visible(true); 			// cal_반려일자
        		this.edtBanryeoSayu.set_cssclass('');			// sta_반려사유
        		this.staBanryeoSayu.set_visible(true); 			// sta_반려사유
        		this.edtBanryeoSayu.set_visible(true); 			// edt_반려사유
        		this.btnBanryeo.set_enable(false); 				// btn_반려
        		this.btnBanryeoChwiso.set_enable(true);			// btn_반려취소
        		this.btnPrint.set_enable(false); 				// btn_신청서출력
        	}
        };

        // 버튼 enable
        this.fn_SetButtonEnabel = function(flag)
        {
            this.btnBanryeo.set_enable(flag); // 반려
        	this.btnBanryeoChwiso.set_enable(flag); // 반려취소
        	this.btnPrint.set_enable(flag); // 신청서

        	this.btnJanghak.set_enable(flag);
        	this.edtJanghakNm.set_enable(flag);
        	this.btnHakbeon.set_enable(flag);
        	this.edtHaksaengNm.set_enable(flag);
        };

        // 공통일정기간 조회
        this.fn_Iljeong = function()
        {
        	this.ds_iljeongInput.setColumn(0, "DEPT_CD", "500000");
        	this.ds_iljeongInput.setColumn(0, "ILJEONG_CD", "011");

            var strSvc      = "Iljeong";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_Iljeong.do";
            var strInDs     = "ds_iljeongInput=ds_iljeongInput";
            var strOutDs    = "dsIljeong=dsIljeong";
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

        // 장학일정 chk
        this.fn_PostIljeong = function()
        {
        	if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        	{
        		var frDt = this.dsIljeong.getColumn(0, "FR_DT");
        		var frTm = this.dsIljeong.getColumn(0, "FR_TM");
        		var toDt = this.dsIljeong.getColumn(0, "TO_DT");
        		var toTm = this.dsIljeong.getColumn(0, "TO_TM");
        		var iljeongNm = this.dsIljeong.getColumn(0, "ILJEONG_NM");
        	    var iljeongFrdt = frDt.substr(0, 4) + '-' + frDt.substr(4, 2) + '-' + frDt.substr(6, 2); // 장학일정 시작일자
        		var iljeongTodt = toDt.substr(0, 4) + '-' + toDt.substr(4, 2) + '-' + toDt.substr(6, 2); // 장학일정 종료일자
        		iljeongFrdt += frTm != ''? ' '.concat(frTm.substr(0, 2), ':', frTm.substr(2, 2)):'';
        		iljeongTodt += toTm != ''? ' '.concat(toTm.substr(0, 2), ':', toTm.substr(2, 2)):'';

        		this.staWarning.set_text("[공통일정] 현재 " + iljeongNm + "이 아닙니다. (" + iljeongNm + " : " + iljeongFrdt +  " ~ " + iljeongTodt + ")");
        		return false;
        	}
        };

        // PK 요소 readonly 처리
        this.fn_EnableInput = function()
        {
        	// 추가상태
            if(this.dsMaster.getRowType(this.dsMaster.rowposition) == '2')
        	{
        		this.spnYYYY.set_readonly(false); // spn_학년도
        		this.cboHakgi.set_readonly(false); // edt_학기
        	}
        	else
        	{
        	    this.spnYYYY.set_readonly(true); // spn_학년도
        		this.cboHakgi.set_readonly(true); // edt_학기
        	}
        };

        /**********************************************************************
                18. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.divSearch_btnSearchHakbeon_onclick = function(obj,e)
        {
        	var hakbeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallHaksaengPopup(obj.name, hakbeonNm)
        };
        this.btnHakbeon_onclick = function(obj,e)
        {
        	var hakbeonNm = this.edtHaksaengNm.value;
        	this.fn_setCallHaksaengPopup(obj.name, hakbeonNm)
        };

        // 장학 팝업
        this.divSearch_btnSearchJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.divSearch.form.edtSearchJanghakNm.value;
        	this.fn_setCallJanghakPopup(obj.name, janghakCdNm)
        };
        this.btnJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.edtJanghakNm.value;
        	this.fn_setCallJanghakPopup(obj.name, janghakCdNm)
        };

        this.fn_setCallHaksaengPopup = function(strObjName, strSearchValue)
        {
        	this.dsHaksaeng.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchHaksaeng";
        		var strUrl      = "/prj/com/Retrieve_P04.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsHaksaeng=dsMaster";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);

        	}

        	if(this.dsHaksaeng.rowcount == 1)
        	{
        		if (strObjName == "ds_input" || strObjName == "btnSearchHakbeon") {
        			this.ds_input.setColumn(0, "HAKBEON", this.dsHaksaeng.getColumn(0,"HAKBEON"));
        			this.ds_input.setColumn(0, "HAKSAENG_NM", this.dsHaksaeng.getColumn(0,"HAKSAENG_NM"));
        		} else {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", this.dsHaksaeng.getColumn(0,"HAKBEON"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", this.dsHaksaeng.getColumn(0,"HAKSAENG_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_input" || strObjName == "btnSearchHakbeon")
        			this.gfn_openPopup("haksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup("gridHaksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallJanghakPopup = function(strObjName, strSearchValue)
        {
        	this.dsJanghakNm.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "JANGHAK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchJanghak";
        		var strUrl      = "/prj/com/Retrieve_P11.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsJanghakNm=dsMaster";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        						   , strUrl
        						   , strInDs
        						   , strOutDs
        						   , strArg
        						   , strCallBack
        						   , strASync);

        	}

        	if(this.dsJanghakNm.rowcount == 1)
        	{
        		if (strObjName == "ds_input" || strObjName == "btnSearchJanghak") {
        			this.ds_input.setColumn(0, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        			this.ds_input.setColumn(0, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        		} else {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        		}
        	}
        	else
        	{
        		var oArg = {janghakCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_input" || strObjName == "btnSearchJanghak")
        			this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup("gridJanghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                19. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_SetButtonEnabel(true);
        	this.fn_VisibleBanryeo();
        	this.fn_EnableInput();
        	if(this.dsMaster.getColumn(e.newrow, "SINCHEONG_SEUNGIN_GBCD") == '01' // 신청
        	    || this.dsMaster.getColumn(e.newrow, "SINCHEONG_SEUNGIN_GBCD") == '02'){ // 접수
        	    // 반려일자 오늘로 셋팅
        		this.dsMaster.set_updatecontrol(false);
        	    this.dsMaster.setColumn(e.newrow, "BANRYEO_DT", this.fn_Today());
        		this.dsMaster.set_updatecontrol(true);
        	}
        };

        // 신청서 출력
        this.btnPrint_onclick = function(obj,e)
        {
        	var JANGHAK_YYYY    = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JANGHAK_YYYY');
        	var HAKGI 			= this.dsMaster.getColumn(this.dsMaster.rowposition, 'HAKGI');
        	var JANGHAK_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'JANGHAK_CD');
        	var HAKBEON 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'HAKBEON');

        	var param = { JANGHAK_YYYY     	: JANGHAK_YYYY
        				, HAKGI 			: HAKGI
        				, JANGHAK_CD 		: JANGHAK_CD
        				, HAKBEON 			: HAKBEON
        				};

        	this.gfn_commonUtils_report('UE02/UE02_2060202_M.crf',  param);
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HAKSAENG_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHaksaengPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	if (e.columnid == "JANGHAK_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "JANGHAK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallJanghakPopup(e.columnid, e.newvalue);
        			}
        	   }
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
                20. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JANGHAK_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchSincheongSeunginGbcd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_SEUNGIN_GBCD",obj.value);
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
            this.Static01_01_00_00.addEventHandler("onclick",this.Static01_01_00_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.btnSearchJanghak.addEventHandler("onclick",this.divSearch_btnSearchJanghak_onclick,this);
            this.divSearch.form.btnSearchHakbeon.addEventHandler("onclick",this.divSearch_btnSearchHakbeon_onclick,this);
            this.divSearch.form.cboSearchSincheongSeunginGbcd.addEventHandler("onkeydown",this.divSearch_cboSearchSincheongSeunginGbcd_onkeydown,this);
            this.spnYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.cboHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.btnJanghak.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.cboSuhye.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.btnHakbeon.addEventHandler("onclick",this.btnHakbeon_onclick,this);
            this.cboHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.cboJuya.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.cboSincheongGyelgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnBanryeoChwiso.addEventHandler("onclick",this.btnBanryeoChwiso_onclick,this);
            this.btnBanryeo.addEventHandler("onclick",this.btnBanryeo_onclick,this);
            this.btnSeunginChwiso.addEventHandler("onclick",this.btnSeunginChwiso_onclick,this);
            this.btnSeungin.addEventHandler("onclick",this.btnSeungin_onclick,this);
            this.btnJeopsu.addEventHandler("onclick",this.btnJeopsu_onclick,this);
            this.btnPrint.addEventHandler("onclick",this.btnPrint_onclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsIljeong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_suhyeInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsSuhyeGbcd.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_studentInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsStudent.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_seunginInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_banryeoInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE02_2060202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
