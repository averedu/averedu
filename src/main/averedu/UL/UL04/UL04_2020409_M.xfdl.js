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
            this.set_titletext("휴(결)보강신청");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SABEON_NM\"/><Col id=\"GYOGWAMOK_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDay", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_SAYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHEGYOSU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTree", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LV\" type=\"STRING\" size=\"256\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSiganpyo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUES\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THURS\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/><Column id=\"MON_CK\" type=\"STRING\" size=\"256\"/><Column id=\"TUES_CK\" type=\"STRING\" size=\"256\"/><Column id=\"WED_CK\" type=\"STRING\" size=\"256\"/><Column id=\"THURS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_CK\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_CK\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TUES_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WED_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"THURS_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_AUTH_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJucha", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSayu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juchaInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dayInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_siganpyoInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_YN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"HYUGANG_SAYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOGANG_JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"BOGANG_YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOGANG_GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"BOGANG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BOGANG_HOSIL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","63","125","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("휴강 과목 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","118","62","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","881","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","80",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","382","71","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","266","358","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","1","368","185","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("휴강일자 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","112","367","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","385",null,"8","1258",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00",null,"330","382","28","1258",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00",null,"330","100","28","1540",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("휴강주차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHyugangJucha",null,"333","113","22","1425",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJucha");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"89","1247","28","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00",null,"89","100","28","1147",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("휴(결)강 사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHygangSayuGbcd",null,"92","175","22","970",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSayu");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00",null,"117","1247","68","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00_00",null,"117","100","68","1147",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHyugangSayu",null,"120","1142","62","3",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("18");
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

            obj = new Static("stc_01_00","-33","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","80","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","190","4","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","192","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","282","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","421","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","392","-1","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","511","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","631","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","641","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","663","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","673","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","820","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","793","5","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","902","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","912","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","1032","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamok","1042","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","1064","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1074","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","272","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","70","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","501","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","1151","185","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","390","222",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","392","229","318",null,null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsTree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:HOSIL_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LV\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00","392","205","185","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("강의실 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01_00","710","191","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00_00","719","205","185","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("보강 주차 및 교시 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBogangJucha",null,"200","175","22","569",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJucha");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","88",null,"242","1258",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"과목명\"/><Cell col=\"2\" text=\"분반\"/><Cell col=\"3\" text=\"학과/전공\"/><Cell col=\"4\" text=\"대표교수\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:BUNBAN\"/><Cell col=\"3\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"expr:DAMDANGGYOSU_NM + &apos;(&apos; + DAMDANGGYOSU_CD + &apos;)&apos;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDay","0","393",null,null,"1258","0",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_binddataset("dsDay");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"수업구분\"/><Cell col=\"1\" text=\"강의일자\"/><Cell col=\"2\" text=\"요일\"/><Cell col=\"3\" text=\"교시\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" text=\"bind:SUEOPTM_GBCD\" combodataset=\"DS_SUEOP_GBCD\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"1\" text=\"bind:SUEOP_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:YOIL_GBCD\" combodataset=\"DS_YOIL_GBCD\" combocodecol=\"CD\" combodatacol=\"LABEL\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:GYOSI\" combocodecol=\"CD\" combodatacol=\"LABEL\" combodataset=\"DS_GYOSI\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSiganpyo","719","229",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_binddataset("dsSiganpyo");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"시간\" textAlign=\"center\"/><Cell col=\"1\" text=\"월요일\" textAlign=\"center\"/><Cell col=\"2\" text=\"화요일\" textAlign=\"center\"/><Cell col=\"3\" text=\"수요일\" textAlign=\"center\"/><Cell col=\"4\" text=\"목요일\" textAlign=\"center\"/><Cell col=\"5\" text=\"금요일\" textAlign=\"center\"/><Cell col=\"6\" text=\"토요일\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MON\"/><Cell col=\"2\" text=\"bind:TUES\"/><Cell col=\"3\" text=\"bind:WED\"/><Cell col=\"4\" text=\"bind:THURS\"/><Cell col=\"5\" text=\"bind:FRI\"/><Cell col=\"6\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"55","135","25","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("시간표중복 학생 확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("휴(결)보강신청");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","cboHygangSayuGbcd","value","dsDay","HYUGANG_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtHyugangSayu","value","dsDay","HYUGANG_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboBogangJucha","value","dsMaster","GANGUIPYEONGGA_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboBogangJucha","readonly","dsBindable","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchNm","value","ds_input","DAMDANGGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchSabeon","value","ds_input","DAMDANGGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchGwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchGwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDay");
            this._addPreloadList("data","","dsTree");
            this._addPreloadList("data","","dsSiganpyo");
        };
        
        // User Script
        this.registerScript("UL04_2020409_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL04_2020409_M.xfdl(휴(결)보강신청)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/22
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
            var strDs    = "dsSearchHakgi|dsSayu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00531";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}

        	this.fn_TreeRet();
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "JuchaRet":
                            this.fn_PostJuchaRet();
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
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DAMDANGGYOSU_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "gwamok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "GYOGWAMOK_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "GYOGWAMOK_NM", sRtn[1]);
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
                05. 강의실 조회 함수 선언
        ***********************************************************************/
        this.fn_TreeRet = function()
        {
            var strSvc      = "TreeRet";
            var strUrl      = "/prj/UL/UL04/treeRetrieve_2020409_M.do";
            var strInDs     = "";
            var strOutDs    = "dsTree=dsTree";
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
                06. 휴강 과목 조회 함수 선언
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
            var strUrl      = "/prj/UL/UL04/Retrieve_2020409_M.do";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster);
        };

        /**********************************************************************
                07. 휴강주차 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreJuchaRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;

        	this.dsDay.clearData();
        	this.dsSiganpyo.clearData();

        	this.ds_juchaInput.setColumn(0, "YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.ds_juchaInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_juchaInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(row, "HAKGWA_CD"));

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JuchaRet = function()
        {
            if(!this.fn_PreJuchaRet())
            {
                return false;
            }
            var strSvc      = "JuchaRet";
            var strUrl      = "/prj/UL/UL04/juchaRetrieve_2020409_M.do";
            var strInDs     = "ds_juchaInput=ds_juchaInput";
            var strOutDs    = "dsJucha=dsJucha";
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
        this.fn_PostJuchaRet = function()
        {
            this.cboHyugangJucha.set_value('');
        	this.cboBogangJucha.set_value('');
        };

        /**********************************************************************
                08. 휴강일자 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDayRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;

        	this.ds_dayInput.setColumn(0, "YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.ds_dayInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_dayInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(row, "HAKGWA_CD"));
        	this.ds_dayInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(row, "JUYA_GBCD"));
        	this.ds_dayInput.setColumn(0, "ISU_HAKNYEON_CD", this.dsMaster.getColumn(row, "ISU_HAKNYEON_CD"));
        	this.ds_dayInput.setColumn(0, "GYOGWAMOK_CD", this.dsMaster.getColumn(row, "GYOGWAMOK_CD"));
        	this.ds_dayInput.setColumn(0, "BUNBAN", this.dsMaster.getColumn(row, "BUNBAN"));
        	this.ds_dayInput.setColumn(0, "DAMDANGGYOSU_CD", this.dsMaster.getColumn(row, "DAMDANGGYOSU_CD"));
        	this.ds_dayInput.setColumn(0, "JUCHA", this.cboHyugangJucha.value);

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DayRet = function()
        {
            if(!this.fn_PreDayRet())
            {
                return false;
            }
            var strSvc      = "DayRet";
            var strUrl      = "/prj/UL/UL04/dayRetrieve_2020409_M.do";
            var strInDs     = "ds_dayInput=ds_dayInput";
            var strOutDs    = "dsDay=dsDay";
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
                09. 강의실 시간표 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSiganpyoRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;

        	this.ds_siganpyoInput.setColumn(0, "YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.ds_siganpyoInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_siganpyoInput.setColumn(0, "HOSIL_CD", this.dsTree.getColumn(this.dsTree.rowposition, "HOSIL_CD"));
        	this.ds_siganpyoInput.setColumn(0, "JUCHA", this.cboBogangJucha.value);
        	this.ds_siganpyoInput.setColumn(0, "DAMDANGGYOSU_CD", this.ds_input.getColumn(0, "DAMDANGGYOSU_CD"));

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SiganpyoRet = function()
        {
            if(!this.fn_PreSiganpyoRet())
            {
                return false;
            }
            var strSvc      = "SiganpyoRet";
            var strUrl      = "/prj/UL/UL04/siganpyoRetrieve_2020409_M.do";
            var strInDs     = "ds_siganpyoInput=ds_siganpyoInput";
            var strOutDs    = "dsSiganpyo=dsSiganpyo";
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
                10. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
        	if(!this.fn_SiganpyoCheck("DEL"))
        	{
        		return false;
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
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
            var strUrl      = "/prj/UL/UL04/Delete_2020409_M.do";
            var strInDs     = "dsSave=dsSave:u";
            var strOutDs    = "";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
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
            this.alert("정상적으로 삭제되었습니다.");
        	this.cboHyugangJucha_onitemchanged();
        	this.fn_SiganpyoRet();
        };

        /**********************************************************************
                11. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(!this.fn_SiganpyoCheck("SAV"))
        	{
        		return false;
        	}

        	var result = this.gfn_confirm( "등록 하시겠습니까?", "저장","", "question" );
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
            var strUrl      = "/prj/UL/UL04/Save_2020409_M.do";
            var strInDs     = "dsSave=dsSave:u";
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
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.alert("정상적으로 등록되었습니다.");
        	this.cboHyugangJucha_onitemchanged();
        	this.fn_SiganpyoRet();
        };

        /**********************************************************************
                12. 각종함수
        ***********************************************************************/
        // 시간표 확인
        this.fn_SiganpyoCheck = function (type)
        {
        	var YYYY 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "YYYY"));
        	var HAKGI 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "HAKGI"));
        	var HAKGWA_CD 		= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "HAKGWA_CD"));
        	var JUYA_GBCD 		= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "JUYA_GBCD"));
        	var ISU_HAKNYEON_CD = this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "ISU_HAKNYEON_CD"));
        	var GYOGWAMOK_CD 	= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "GYOGWAMOK_CD"));
        	var BUNBAN 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "BUNBAN"));
        	var DAMDANGGYOSU_CD = this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "DAMDANGGYOSU_CD"));
        	var YOIL_GBCD 		= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "YOIL_GBCD"));
        	var GYOSI 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "GYOSI"));
        	var SUEOPTM_GBCD	= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "SUEOPTM_GBCD"));
        	var HOSIL_LV		= this.gfn_isEmpty(this.dsTree.getColumn(this.dsTree.rowposition, "LV"));
        	var HOSIL_CD		= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "HOSIL_CD"));
        	var JUCHA			= this.gfn_isEmpty(this.cboHyugangJucha.value);
        	var SUEOP_DT		= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "SUEOP_DT"));

        	var HYUGANG_SAYU		= this.gfn_isEmpty(this.edtHyugangSayu.value);
        	var HYUGANG_SAYU_GBCD	= this.gfn_isEmpty(this.cboHygangSayuGbcd.value);

        	var BOGANG_HOSIL_CD	= this.gfn_isEmpty(this.dsTree.getColumn(this.dsTree.rowposition, "HOSIL_CD"));
        	var BOGANG_JUCHA	= this.gfn_isEmpty(this.cboBogangJucha.value);

        	this.dsSave.clearData();

        	var isEmpty 	= this.gfn_isEmpty(this.dsSiganpyo.getColumn(this.dsSiganpyo.rowposition, this.grdSiganpyo.getCellPos()+3));
        	var isAuthYn	= this.gfn_isEmpty(this.dsSiganpyo.getColumn(this.dsSiganpyo.rowposition, this.grdSiganpyo.getCellPos()+15));
        	var isSiganpyo	= this.gfn_isEmpty(this.grdSiganpyo.getCellPos());

        	if(isSiganpyo == "0") {
        		this.alert("요일, 교시를 선택해야합니다.");
        		return false;
        	}
        	if(this.dsDay.rowposition == -1){
        		this.alert("강의를 선택해야합니다.");
        		return false;
        	}
        	if(HOSIL_CD == '' || HOSIL_LV != '3'){
        		this.alert("강의실을 선택해야합니다.");
        		return false;
        	}

        	if(type == "SAV"){
        		if(HYUGANG_SAYU_GBCD == "") {
        			this.alert("휴(결)강 사유를 선택해야합니다.");
        			return false;
        		}
        		if(isEmpty != "") {
        			this.alert("시간표가 존재합니다.");
        			return false;
        		}
        		if(SUEOPTM_GBCD != '01'){
        			this.alert("휴(보)강 신청은 정규수업만 가능합니다.");
        			return false;
        		}

        		this.dsSave.addRow();
        		this.dsSave.setColumn(this.dsSave.rowposition, "YYYY",				YYYY);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HAKGI",				HAKGI);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HAKGWA_CD",			HAKGWA_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "JUYA_GBCD",			JUYA_GBCD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "ISU_HAKNYEON_CD",	ISU_HAKNYEON_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "GYOGWAMOK_CD",		GYOGWAMOK_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "BUNBAN",			BUNBAN);
        		this.dsSave.setColumn(this.dsSave.rowposition, "DAMDANGGYOSU_CD",	DAMDANGGYOSU_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "YOIL_GBCD",			YOIL_GBCD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "GYOSI",				GYOSI);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HOSIL_CD", 			HOSIL_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "JUCHA", 			JUCHA);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HYUGANG_DT",		SUEOP_DT);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HYUGANG_SAYU",		HYUGANG_SAYU);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HYUGANG_SAYU_GBCD",	HYUGANG_SAYU_GBCD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "BOGANG_JUCHA",		BOGANG_JUCHA);
        		this.dsSave.setColumn(this.dsSave.rowposition, "BOGANG_YOIL_GBCD",	this.grdSiganpyo.getCellPos()+1);
        		this.dsSave.setColumn(this.dsSave.rowposition, "BOGANG_GYOSI",		this.dsSiganpyo.getColumn(this.dsSiganpyo.rowposition, "CD"));
        		this.dsSave.setColumn(this.dsSave.rowposition, "BOGANG_DT",			'');
        		this.dsSave.setColumn(this.dsSave.rowposition, "BOGANG_HOSIL_CD",	BOGANG_HOSIL_CD);
        	}

        	// 시간표중복 버튼 팝업
        	if(type == "POP"){
        	}

        	// 보강 삭제
        	if(type == "DEL"){
        		if(isAuthYn == "N") {
        			this.alert("담당교수가 속한 시간표만 삭제할 수 있습니다.");
        			return false;
        		}
        		if(SUEOPTM_GBCD == '01'){
        			this.alert("정규수업은 삭제가 불가능합니다.");
        			return false;
        		}

        		this.dsSave.addRow();
        		this.dsSave.setColumn(this.dsSave.rowposition, "YYYY",				YYYY);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HAKGI",				HAKGI);
        		this.dsSave.setColumn(this.dsSave.rowposition, "HAKGWA_CD",			HAKGWA_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "JUYA_GBCD",			JUYA_GBCD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "ISU_HAKNYEON_CD",	ISU_HAKNYEON_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "GYOGWAMOK_CD",		GYOGWAMOK_CD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "BUNBAN",			BUNBAN);
        		this.dsSave.setColumn(this.dsSave.rowposition, "JUCHA", 			JUCHA);
        		this.dsSave.setColumn(this.dsSave.rowposition, "YOIL_GBCD",			YOIL_GBCD);
        		this.dsSave.setColumn(this.dsSave.rowposition, "GYOSI",				GYOSI);
        	}

        	return true;
        };

        /**********************************************************************
                13. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 팝업
        ***********************************************************************/
        // 사원 팝업
        this.divSearch_btnSearchSawon_onclick = function(obj,e)
        {
        	var sabeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallSawonPopup("SAWON_NM", sabeonNm)
        };

        // 교과목 팝업
        this.divSearch_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divSearch.form.edtSearchGwamokNm.value;
        	this.fn_setCallGwamokPopup("GAMOK_NM", gwamokCdNm)
        };

        this.fn_setCallSawonPopup = function(strColumnName, strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsSawon=dsMaster";
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

        	if(this.dsSawon.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_CD", this.dsSawon.getColumn(0,"SABEON"));
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_NM", this.dsSawon.getColumn(0,"SEONGMYEONG"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("sawon","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallGwamokPopup = function(strColumnName, strSearchValue)
        {
        	this.dsGwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchGwamok";
        		var strUrl      = "/prj/com/Retrieve_P03.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsGamok=dsMaster";
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

        	if(this.dsGwamok.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD", this.dsGwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM", this.dsGwamok.getColumn(0,"GYOGWAMOK_NM"));
        	} else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gwamok","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                15. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 휴강과목 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_JuchaRet();
        };

        // 휴강주차 변경시
        this.cboHyugangJucha_onitemchanged = function(obj,e)
        {
        	this.fn_DayRet();
        };

        // 휴강일자 변경시
        this.dsDay_onrowposchanged = function(obj,e)
        {
        	// 등록된 수업의 강의실 찾기
        	this.cboBogangJucha.set_value(this.dsDay.getColumn(this.dsDay.rowposition, "JUCHA"));
        	var getRowTemp = this.dsTree.findRow("HOSIL_CD", this.dsDay.getColumn(this.dsDay.rowposition, "HOSIL_CD"));
        	var rowList = new Array();
        	rowList[0] = getRowTemp;

        	var oldHosil = this.gfn_isEmpty(this.dsDay.getColumn(e.oldrow, "HOSIL_CD"));
        	var newHosil = this.gfn_isEmpty(this.dsDay.getColumn(e.newrow, "HOSIL_CD"));

        	if(oldHosil != ""){
        		if(oldHosil == newHosil){
        			this.dsTree_onrowposchanged();
        		}
        	}

        	this.dsTree.set_rowposition(getRowTemp);

        	for(var i=1 ; i < 3 ; i++){
        		nParentRow = this.grdTree.getTreeParentRow(getRowTemp);
        		rowList[i] = nParentRow;
        		getRowTemp = nParentRow;
        	}

        	for(var j=2 ; j >= 0 ; j--){
        		var treeRow = this.grdTree.getTreeRow(rowList[j]);
        		var bSucc 	= this.grdTree.setTreeStatus(treeRow,true);
        	}

        	var row = parseInt(this.dsDay.getColumn(this.dsDay.rowposition, 'GYOSI'),10)-1;
        	var cellIdx = ((parseInt(this.dsDay.getColumn(this.dsDay.rowposition, 'YOIL_GBCD'),10)-1));
        	this.grdSiganpyo.setCellPos(cellIdx);
        	this.dsSiganpyo.set_rowposition(row);
        };

        // 강의실 로우 변경시
        this.dsTree_onrowposchanged = function(obj,e)
        {
        	var lv 		= this.dsTree.getColumn(this.dsTree.rowposition, "LV");
        	var jucha 	= this.gfn_isEmpty(this.cboBogangJucha.value);
        	if(jucha != ""){
        		if(lv == "3"){
        			this.fn_SiganpyoRet();
        		}
        	}
        };

        // 보강주차 변경시
        this.cboBogangJucha_onitemchanged = function(obj,e)
        {
        	this.dsTree_onrowposchanged();
        };

        // 시간표 더블클릭시
        this.grdSiganpyo_oncelldblclick = function(obj,e)
        {
        	this.fn_Save();
        };

        // 시간표중복 학생 확인
        this.btnConfirm_onclick = function(obj,e)
        {
        	// 시간표 중복학생 팝업.
        	if(!this.fn_SiganpyoCheck("POP"))
        	{
        		return false;
        	}

        	var YYYY 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "YYYY"));
        	var HAKGI 			= this.gfn_isEmpty(this.dsDay.getColumn(this.dsDay.rowposition, "HAKGI"));
        	var JUCHA			= this.gfn_isEmpty(this.cboBogangJucha.value);
        	var YOIL_GBCD 		= this.gfn_isEmpty(this.grdSiganpyo.getCellPos()+1);
        	var GYOSI 			= this.gfn_isEmpty(this.dsSiganpyo.getColumn(this.dsSiganpyo.rowposition, "CD"));

        	var oArg = { YYYY:YYYY
        				, HAKGI : HAKGI
        				, JUCHA : JUCHA
        				, YOIL_GBCD : YOIL_GBCD
        				, GYOSI : GYOSI };
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("ganguisil","UL04::UL04_2020409_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DAMDANGGYOSU_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAMDANGGYOSU_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "GYOGWAMOK_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOGWAMOK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(e.columnid, e.newvalue);
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
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.cboHyugangJucha.addEventHandler("onitemchanged",this.cboHyugangJucha_onitemchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.btnSearchSawon.addEventHandler("onclick",this.divSearch_btnSearchSawon_onclick,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.divSearch.form.btnSearchGwamok.addEventHandler("onclick",this.divSearch_btnSearchGwamok_onclick,this);
            this.divSearch.form.edtSearchGwamokNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.cboBogangJucha.addEventHandler("onitemchanged",this.cboBogangJucha_onitemchanged,this);
            this.grdSiganpyo.addEventHandler("oncelldblclick",this.grdSiganpyo_oncelldblclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDay.addEventHandler("onrowposchanged",this.dsDay_onrowposchanged,this);
            this.dsTree.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
        };
        this.loadIncludeScript("UL04_2020409_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
