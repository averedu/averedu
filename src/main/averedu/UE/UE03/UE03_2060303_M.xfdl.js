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
            this.set_titletext("국가장학지급자관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YN_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SANGPUM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_DAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"15\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"SODEUKBUNWI\" type=\"STRING\" size=\"30\"/><Column id=\"SUNAPWONJANG_DEUNGROK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GYONAEOEJANGHAK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_1\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_2\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_3\" type=\"STRING\" size=\"13\"/><Column id=\"JANGHAKAMT_JANGHAK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_JAEDANNAE_DAECHULSANGHWAN\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_JAEDANOE_DAECHULSANGHWAN\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_DAEHAKJIGEUP\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_HAPGYE\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_JANGHAKAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_JANGHAKAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_DAECHULAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_DAECHULAMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUHYE_HOETSU\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOKMIDAL_HOETSU\" type=\"STRING\" size=\"1\"/><Column id=\"EUNHAENG_MYEONG\" type=\"STRING\" size=\"30\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"YEAMTJU_MYEONG\" type=\"STRING\" size=\"50\"/><Column id=\"SUCHWIGYEJWA_JEONGSANG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEONHWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHASU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHASU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaeng", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsJanghakNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YN_CHK\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SANGPUM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_DAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"15\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"SODEUKBUNWI\" type=\"STRING\" size=\"30\"/><Column id=\"SUNAPWONJANG_DEUNGROK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GYONAEOEJANGHAK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_1\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_2\" type=\"STRING\" size=\"13\"/><Column id=\"SUNAPWONJANG_GUKGAJANGHAKAMT_3\" type=\"STRING\" size=\"13\"/><Column id=\"JANGHAKAMT_JANGHAK_AMT\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_JAEDANNAE_DAECHULSANGHWAN\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_JAEDANOE_DAECHULSANGHWAN\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_DAEHAKJIGEUP\" type=\"STRING\" size=\"13\"/><Column id=\"JIGEUPAMT_HAPGYE\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_JANGHAKAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_JANGHAKAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_DAECHULAMT\" type=\"STRING\" size=\"13\"/><Column id=\"HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_DAECHULAMT\" type=\"STRING\" size=\"13\"/><Column id=\"SUHYE_HOETSU\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOKMIDAL_HOETSU\" type=\"STRING\" size=\"1\"/><Column id=\"EUNHAENG_MYEONG\" type=\"STRING\" size=\"30\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"YEAMTJU_MYEONG\" type=\"STRING\" size=\"50\"/><Column id=\"SUCHWIGYEJWA_JEONGSANG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEONHWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHASU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","-3","52",null,"22","1458",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("국가장학지급자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","157","51",null,"24","1360",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1110","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","69",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
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

            obj = new Static("Static01_02_00_00_00_01_01","68","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","-33","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","78","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","158","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","239","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","579","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","1204","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","1241","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00","1334","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","1464","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01_00","1470","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("처리차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00_00","1570","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","159","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","249","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_00","591","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00","671","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCd","681","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","801","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchJanghak","811","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","833","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","843","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_01","963","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","982","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","1084","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00_01","1074","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","376","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("학생구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00_02","469","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaksaeng","479","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaksaeng");
            obj.set_enable("true");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01","359","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchChasu","1580","9","20","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchResNo","1344","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00",null,"53","333","20","1080",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("장학코드가 등록되지 않은 장학명은 빨간색으로 표시됩니다. ");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"48\" band=\"right\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"지급일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"장학명\"/><Cell col=\"3\" rowspan=\"2\" text=\"학과\"/><Cell col=\"4\" rowspan=\"2\" text=\"학년\"/><Cell col=\"5\" rowspan=\"2\" textAlign=\"center\" text=\"주야&#13;&#10;구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"학번\"/><Cell col=\"7\" rowspan=\"2\" text=\"성명\"/><Cell col=\"8\" rowspan=\"2\" text=\"주민등록번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"소득분위\"/><Cell col=\"10\" colspan=\"5\" text=\"수납원장\"/><Cell col=\"15\" rowspan=\"2\" text=\"장학금\"/><Cell col=\"16\" colspan=\"4\" text=\"지급금액\"/><Cell col=\"20\" colspan=\"4\" text=\"현재학기이중지원\"/><Cell col=\"24\" rowspan=\"2\" text=\"수혜&#13;&#10;횟수\"/><Cell col=\"25\" rowspan=\"2\" text=\"성적미달&#13;&#10;횟수\"/><Cell col=\"26\" rowspan=\"2\" text=\"은행명\"/><Cell col=\"27\" rowspan=\"2\" text=\"계좌번호\"/><Cell col=\"28\" rowspan=\"2\" text=\"예금주명\"/><Cell col=\"29\" rowspan=\"2\" text=\"수취계좌&#13;&#10;정상여부\"/><Cell col=\"30\" rowspan=\"2\" text=\"전화번호\"/><Cell col=\"31\" rowspan=\"2\" text=\"처리일자\"/><Cell col=\"32\" rowspan=\"2\" textAlign=\"center\" text=\"지급&#13;&#10;상태\"/><Cell row=\"1\" col=\"10\" text=\"등록금\"/><Cell row=\"1\" col=\"11\" text=\"교내외장학금\"/><Cell row=\"1\" col=\"12\" text=\"국가장학금1\"/><Cell row=\"1\" col=\"13\" text=\"국가장학금2\"/><Cell row=\"1\" col=\"14\" text=\"국가장학금3\"/><Cell row=\"1\" col=\"16\" text=\"재단내대출상환\"/><Cell row=\"1\" col=\"17\" text=\"재단외대출상환\"/><Cell row=\"1\" col=\"18\" text=\"대학지급\"/><Cell row=\"1\" col=\"19\" text=\"합계\"/><Cell row=\"1\" col=\"20\" text=\"재단내장학금\"/><Cell row=\"1\" col=\"21\" text=\"재단외장학금\"/><Cell row=\"1\" col=\"22\" text=\"재단내대출금\"/><Cell row=\"1\" col=\"23\" text=\"재단외대출금\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JIGEUP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:SANGPUM_NM\" textAlign=\"left\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:HAKGWA_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:HAKNYEON\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:JUYA_GBNM\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:HAKBEON\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:SEONGMYEONG\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:RES_NO\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"######-#######\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:SODEUKBUNWI\" textAlign=\"left\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:SUNAPWONJANG_DEUNGROK_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"11\" textAlign=\"right\" text=\"bind:SUNAPWONJANG_GYONAEOEJANGHAK_AMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"12\" textAlign=\"right\" text=\"bind:SUNAPWONJANG_GUKGAJANGHAKAMT_1\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"13\" textAlign=\"right\" text=\"bind:SUNAPWONJANG_GUKGAJANGHAKAMT_2\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"14\" textAlign=\"right\" text=\"bind:SUNAPWONJANG_GUKGAJANGHAKAMT_3\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"15\" textAlign=\"right\" text=\"bind:JANGHAKAMT_JANGHAK_AMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"16\" textAlign=\"right\" text=\"bind:JIGEUPAMT_JAEDANNAE_DAECHULSANGHWAN\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"17\" textAlign=\"right\" text=\"bind:JIGEUPAMT_JAEDANOE_DAECHULSANGHWAN\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"18\" textAlign=\"right\" text=\"bind:JIGEUPAMT_DAEHAKJIGEUP\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"19\" textAlign=\"right\" text=\"bind:JIGEUPAMT_DAEHAKJIGEUP\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"20\" textAlign=\"right\" text=\"bind:HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_JANGHAKAMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"21\" textAlign=\"right\" text=\"bind:HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_JANGHAKAMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"22\" textAlign=\"right\" text=\"bind:HYEONJAEHAKGIIJUNGJIWON_JAEDANNAE_DAECHULAMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"23\" textAlign=\"right\" text=\"bind:HYEONJAEHAKGIIJUNGJIWON_JAEDANOE_DAECHULAMT\" displaytype=\"number\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:SUHYE_HOETSU\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:SEONGJEOKMIDAL_HOETSU\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"26\" textAlign=\"left\" text=\"bind:EUNHAENG_MYEONG\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"27\" textAlign=\"left\" text=\"bind:GYEJWA_NO\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:YEAMTJU_MYEONG\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"29\" text=\"bind:SUCHWIGYEJWA_JEONGSANG_YN\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"30\" text=\"bind:JEONHWA_NO\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"31\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:CHEORI_DT\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"32\" text=\"bind:JIGEUP_SANGTAE_GBNM\" cssclass=\"expr:JANGHAK_YN_CHK == &apos;1&apos;?&apos;font_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","1649","45","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("국가장학지급자관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchJanghakCd","value","ds_input","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchHaksaeng","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchChasu","value","ds_input","CHASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtSearchResNo","value","ds_input","RES_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboHakgwa","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSave");
        };
        
        // User Script
        this.registerScript("UE03_2060303_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE03_2060303_M.xfdl(국가장학지급자관리)
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
            var strDs    = "dsHakgi|dsHaksaeng";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|02007";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        };

        this.fn_PostformInit = function()
        {
        	this.dsHakgi.filter("REF_1 == '10'");
        	this.dsHaksaeng.filter("REF_1 == '10'");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI",  this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
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
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "tmp1" :        // 국가장학지급자업로드
                         this.fn_Upload();
                    break;
                case "tmp2" :        // 장학선발확정
                         this.fn_Save();
                    break;
                case "tmp3" :        // 팁
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "HAKSAENG_GBCD")))
        	{
        		this.gfn_alert("학생구분을 입력해주세요.","입력정보","","warning");
        		return false;
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
            var strUrl      = "/prj/UE/UE03/Retrieve_2060303_M.do";
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
                06. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
        	var chasu = this.ds_input.getColumn(0, "CHASU");

            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if (this.gfn_isNull(chasu))
        	{
        		this.gfn_alert("처리차수를 입력해주세요.","입력정보","","warning");
        		return false;
        	}

            var result = this.gfn_confirm(chasu + "차수의 국가장학신청자를 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }
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
            var strUrl      = "/prj/UE/UE03/Delete_2060303_M.do";
            var strInDs     = "ds_input=ds_input";
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
                07. 저장 함수 선언
        ***********************************************************************/
        /*
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	var YnChk = 0; // 장학존재여부cnt
        	var cnt = 0; // 지급확정 처리 가능한 인원 cnt

        	if(this.dsMaster.rowcount == '0') {
        		this.alert('장학선발확정 가능한 학생이 존재하지 않습니다.');
        		return false;
        	}

        	// 장학코드 존재 유무 확인
        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var janghakYnChk = this.dsMaster.getColumn(i, 'JANGHAK_YN_CHK');
        		if(janghakYnChk == '1') { // 매핑할수있는 장학 존재 X
        			YnChk++;
        			break;
        		}
        	}
        	if(YnChk > 0) {
        		this.alert('장학코드에 등록되어 있지 않는 장학명이 존재합니다.');
        		return false;
        	}

        	// 지급확정 처리 가능한 인원 cnt
        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, 'JIGEUP_SANGTAE_GBCD'); // 지급상태
        		if(this.gfn_isNull(jigeupSangtaeGbcd)) {
        			cnt++;
        		}
        	}
        	if(cnt == 0) {
        		this.alert('장학선발확정 가능한 학생이 존재하지 않습니다.');
        		return false;
        	}

        	var rowNum = 0; // cheori index
            for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
            	var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, 'JIGEUP_SANGTAE_GBCD');
        		if(this.gfn_isNull(jigeupSangtaeGbcd)) {
        		    rowNum = this.dsSave.addRow();
        		    this.dsSave.copyRow(rowNum, this.dsMaster, i);
        		}
            }

            var haksaengGbcd = this.divSearch.form.cboSearchHaksaeng.value; // 학생구분에 따라 다르게 처리
        	var oArg = {dsSave:this.dsSave, haksaengGbcd:haksaengGbcd};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("hwakjeong","UE03::UE03_2060303_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                08. 국가장학신청자업로드
        ***********************************************************************/
        this.fn_Upload = function()
        {
        	this.alert("엑셀업로드 준비중입니다.");
        };

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 팝업
        ***********************************************************************/
        // 장학 팝업
        this.divSearch_btnSearchJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.divSearch.form.edtSearchJanghakNm.value;
        	this.fn_setCallJanghakPopup("JANGHAK_CD_NM", janghakCdNm)
        };

        this.fn_setCallJanghakPopup = function(strColumnName, strSearchValue)
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
        		this.ds_input.setColumn(0, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        		this.ds_input.setColumn(0, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        	} else
        	{
        		var oArg = {janghakCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
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

        /**********************************************************************
                12. 검색창 엔터키 조회
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
        this.divSearch_cboSearchHaksaeng_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAKSAENG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_edtSearchHakbeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"HAKBEON",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_edtSearchResNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"RES_NO",obj.value);
        		this.fn_Ret();
        	}
        };
        this.divSearch_edtSearchChasu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0,"CHASU",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stc_09_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.btnSearchJanghak.addEventHandler("onclick",this.divSearch_btnSearchJanghak_onclick,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeon_onkeydown,this);
            this.divSearch.form.cboSearchHaksaeng.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.divSearch.form.edtSearchChasu.addEventHandler("onkeydown",this.divSearch_edtSearchChasu_onkeydown,this);
            this.divSearch.form.edtSearchResNo.addEventHandler("onkeydown",this.divSearch_edtSearchResNo_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.cboHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsSave.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UE03_2060303_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
