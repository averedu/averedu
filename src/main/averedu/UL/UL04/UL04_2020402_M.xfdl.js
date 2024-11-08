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
            this.set_titletext("주차별시간표입력");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"ISU_HAKNYEON_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SIL_SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NCS_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NCS_NEUNGRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SISU_HALF_GWAMOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIKGWAMOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GANGUIPYEONGGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GANGUIPYEONGGA_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"GANGJWA_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"PO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHAEOPGWAMOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GAESEOL_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SOSOK_BUNBAN\" type=\"STRING\" size=\"30\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"PYEGANG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAPBUNBAN_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"HAPBUNBAN_GIJUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAPBUNBAN_BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"SUGANGSINCHEONG_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONTAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TAEKIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOJIKJA_JEOE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CAPSTONE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOYANG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANGSINCHEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"HAKGWA_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HUGANG_JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"HUGANG_YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HUGANG_GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHEGYOSU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUES\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THURS\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/><Column id=\"MON_CK\" type=\"STRING\" size=\"256\"/><Column id=\"TUES_CK\" type=\"STRING\" size=\"256\"/><Column id=\"WED_CK\" type=\"STRING\" size=\"256\"/><Column id=\"THURS_CK\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_CK\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_CK\" type=\"STRING\" size=\"256\"/><Column id=\"MON_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TUES_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"WED_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"THURS_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_AUTH_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TUES_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WED_CD\" type=\"STRING\" size=\"256\"/><Column id=\"THURS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDamdangGyosu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOPTM_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"HOSIL_CD\"/></Row></Rows>");
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


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_YN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"JUCHA_YOIL_GYOSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"DAMDANGGYOSU_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOSIL_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUCHA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJucha", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntSiganpyo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cntSiganpyoInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"HAKGWA_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYoil", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyosi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cboJuchaFr","285",null,"80","21",null,"0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJucha");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuchaTo","385",null,"80","21",null,"0",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJucha");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","371",null,"10","22",null,"0",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00","256",null,"27","22",null,"0",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("주차");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","90","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("등록정보선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","108","89","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","450","69","100","45",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00","0","107",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","249","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","339","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","329","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","449","-1","56","66",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","861","32","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","200","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","689","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","780","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","981","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","1071","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","1273","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1362","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","569","0","10","73",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","489","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","90","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_02","239","36","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("개설분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_02","-23","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","489","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeon","579","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","709","36","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","741","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","699","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","731","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","689","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","770","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","980","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","1061","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","1271","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","1352","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","888","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","970","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGaeseolBunban","339","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","980","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","1100","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamok","1110","36","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","1132","30","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1142","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","579","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHaknyeon");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","571","71","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0","389","235","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("등록 강의실 내역 및 강의실 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","406",null,"8","1068",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","360","378","100","35",null,null,null,null,null,null,this);
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

            obj = new Button("btnNew","476",null,"95","25",null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("시간표 등록▶");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","115","572","263",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"주야\"/><Cell col=\"6\" text=\"분반\"/><Cell col=\"7\" text=\"대표교수\"/><Cell col=\"8\" text=\"통합시간\"/><Cell col=\"9\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\"/><Cell col=\"2\" text=\"bind:ISU_HAKNYEON_CD\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"4\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JUYA_GBNM\"/><Cell col=\"6\" text=\"bind:BUNBAN\"/><Cell col=\"7\" text=\"bind:DAMDANGGYOSU_NM\"/><Cell col=\"8\" text=\"bind:TONGHAP_SISU\"/><Cell col=\"9\" text=\"bind:DEUNGROK_SISU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","414","241",null,null,"0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"삭제\"/><Cell col=\"2\" text=\"담당교수\"/><Cell col=\"3\" text=\"요일\"/><Cell col=\"4\" text=\"교시\"/><Cell col=\"5\" text=\"강의실\"/><Cell col=\"6\" text=\"휴강주차\"/><Cell col=\"7\" text=\"휴강요일\"/><Cell col=\"8\" text=\"휴강교시\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"X\"/><Cell col=\"2\" edittype=\"combo\" displaytype=\"combocontrol\" text=\"bind:DAMDANGGYOSU_CD\" combodataset=\"dsDamdangGyosu\" combocodecol=\"SABEON\" combodatacol=\"GYOSU_NM\"/><Cell col=\"3\" text=\"bind:YOIL_GBNM\"/><Cell col=\"4\" text=\"bind:GYOSI_NM\"/><Cell col=\"5\" text=\"bind:HOSIL_NM\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"6\" displaytype=\"combotext\" text=\"bind:HUGANG_JUCHA\" combodataset=\"dsJucha\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" displaytype=\"combotext\" text=\"bind:HUGANG_YOIL_GBCD\" combodataset=\"dsYoil\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:HUGANG_GYOSI\" combodataset=\"dsGyosi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01_00","241",null,"10","389",null,"27",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","251","414","320",null,null,"45",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsTree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:HOSIL_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LV\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTree","251","389","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("강의실 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSiganpyo","581","114",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsSiganpyo");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"시간\" textAlign=\"center\"/><Cell col=\"1\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"월요일\" textAlign=\"center\"/></Cell><Cell col=\"3\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"화요일\" textAlign=\"center\"/></Cell><Cell col=\"5\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"수요일\" textAlign=\"center\"/></Cell><Cell col=\"7\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"목요일\" textAlign=\"center\"/></Cell><Cell col=\"9\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"금요일\" textAlign=\"center\"/></Cell><Cell col=\"11\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"토요일\" textAlign=\"center\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:CD_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MON_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:MON\"/><Cell col=\"3\" text=\"bind:TUES_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:TUES\"/><Cell col=\"5\" text=\"bind:WED_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\" text=\"bind:WED\"/><Cell col=\"7\" text=\"bind:THURS_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:THURS\"/><Cell col=\"9\" text=\"bind:FRI_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:FRI\"/><Cell col=\"11\" text=\"bind:SAT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"12\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","581","90","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("시간표");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","1585","82","55","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet","1525","82","55","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00",null,"91","27","20","248",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("주차");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchJucha","1393","85","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJucha");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","658","91","500","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("※ 시간표 등록 및 삭제는 실시간으로 서버에 반영되어 저장합니다. 유의해 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","365","755","30","45",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("↑\r\n45\r\n↓");
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
            obj.set_description("주차별시간표입력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divSearch.form.edtSearchSabeon","value","ds_input","DAMDANGGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divSearch.form.edtSearchNm","value","ds_input","DAMDANGGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divSearch.form.edtSearchGaeseolBunban","value","ds_input","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchGwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchGwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsTree");
            this._addPreloadList("data","","dsSiganpyo");
            this._addPreloadList("data","","dsDamdangGyosu");
            this._addPreloadList("data","","dsIljeong");
        };
        
        // User Script
        this.registerScript("UL04_2020402_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL04_2020402_M.xfdl(주차별시간표입력)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/21
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
            var strDs    = "dsSearchHakgi|dsSearchHaknyeon|dsSearchJuya|dsJucha|dsYoil|dsGyosi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00060|00003|00530|00029|00030";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	this.fn_Iljeong();
        };

        this.fn_PostformInit = function()
        {
        	this.fn_TreeRet();
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostGyeyeolInit = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
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
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInit();
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "DDel":
                            this.fn_PostDDel();
                        break;
        			case "Chg":
                            this.fn_PostChg();
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
        		case "ganguisil" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster_onrowposchanged();
        					this.dsTree_onrowposchanged();
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
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(트리 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_TreeRet = function()
        {
            var strSvc      = "TreeRet";
            var strUrl      = "/prj/UL/UL04/treeRetrieve_2020402_M.do";
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
                06. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")))
            {
                this.alert("학년도는 필수입력입니다.");
                return false;
            }

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "HAKGI")))
            {
                this.alert("학기는 필수입력입니다.");
                return false;
            }

        	this.dsDetail.clearData();
        	this.dsSiganpyo.clearData();

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
            var strUrl      = "/prj/UL/UL04/Retrieve_2020402_M.do";
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
                07. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;

        	this.ds_dInput.setColumn(0, "YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(row, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(row, "JUYA_GBCD"));
        	this.ds_dInput.setColumn(0, "ISU_HAKNYEON_CD", this.dsMaster.getColumn(row, "ISU_HAKNYEON_CD"));
        	this.ds_dInput.setColumn(0, "GYOGWAMOK_CD", this.dsMaster.getColumn(row, "GYOGWAMOK_CD"));
        	this.ds_dInput.setColumn(0, "BUNBAN", this.dsMaster.getColumn(row, "BUNBAN"));
        	this.ds_dInput.setColumn(0, "DAMDANGGYOSU_CD", this.dsMaster.getColumn(row, "DAMDANGGYOSU_CD"));

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            if(!this.fn_PreDRet())
            {
                return false;
            }
            var strSvc      = "DRet";
            var strUrl      = "/prj/UL/UL04/detailRetrieve_2020402_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail ";
        	    strOutDs    += "dsDamdangGyosu=dsDamdangGyosu";
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
                08. 조회 함수 선언(시간표 함수)
        ***********************************************************************/
        this.btnRet_onclick = function(obj,e)
        {
        	this.fn_SiganpyoRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSiganpyoRet = function()
        {
            // 조회조건 셋팅
        	this.ds_siganpyoInput.setColumn(0, "YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        	this.ds_siganpyoInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGI"));
        	this.ds_siganpyoInput.setColumn(0, "HOSIL_CD", this.dsTree.getColumn(this.dsTree.rowposition, "HOSIL_CD"));
        	this.ds_siganpyoInput.setColumn(0, "JUCHA", this.gfn_isEmpty(this.cboSearchJucha.value));
        	this.ds_siganpyoInput.setColumn(0, "DAMDANGGYOSU_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DAMDANGGYOSU_CD"));
        	this.ds_siganpyoInput.setColumn(0, "SUEOPTM_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUEOPTM_GBCD"));

        	if(this.gfn_isNull(this.ds_siganpyoInput.getColumn(0, "JUCHA")))
            {
                this.alert("주차를 선택해야합니다.");
                return false;
            }

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
            var strUrl      = "/prj/UL/UL04/siganpyoRetrieve_2020402_M.do";
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
                09. 시간표 등록 함수 선언
        ***********************************************************************/
        this.btnNew_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        /**
         * 기능 : 등록 전 실행
         */
        this.fn_PreNew = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

        	if(this.gfn_isNull(this.dsMaster.getColumn(this.dsMaster.rowposition, "DAMDANGGYOSU_CD")))
            {
                this.alert("해당 교과목의 담당교수 정보가 존재하지 않습니다.");
                return false;
            }

        	if(!this.fn_SiganpyoCheck("SAV"))
        	{
        		return false;
        	}

        	var result = this.gfn_confirm("등록하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            return true;
        };

        /**
         * 기능 : 마스터 등록
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var strSvc      = "New";
            var strUrl      = "/prj/UL/UL04/Save_2020402_M.do";
            var strInDs     = "dsSave=dsSave:u";
            var strOutDs    = "";
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

        this.fn_PostNew = function()
        {
            this.alert("정상적으로 등록되었습니다.");
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "DEUNGROK_SISU", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_SISU") + this.dsSave.rowcount);
        	this.dsMaster_onrowposchanged();
        	this.dsTree_onrowposchanged();
        };

        /**********************************************************************
                10. 삭제 함수 선언(다건)
        ***********************************************************************/
        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        this.fn_PreDel = function()
        {
        	// 관리자가 아니면 공통일정기간 체크
        	if (!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0, "USER_GBCD")))
        	{
        		if(this.dsIljeong.getColumn(0, "CURR_ILJEONG_YN") == "N")
        		{
        			this.alert("현재 " + this.dsIljeong.getColumn(0, "ILJEONG_NM") + "이 아닙니다.");
        			return false;
        		}
        	}

        	if(!this.fn_SiganpyoCheck("DEL"))
        	{
        		return false;
        	}

            var result = this.gfn_confirm("삭제하시겠습니까?", "삭제정보","","question" );
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
            var strUrl      = "/prj/UL/UL04/Delete_2020402_M.do";
            var strInDs     = "dsSave=dsSave:u";
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
            this.alert("정상적으로 삭제되었습니다.");
        	this.fn_Ret();
        };

        /**********************************************************************
                11. 삭제 함수 선언(단건)
        ***********************************************************************/
        this.fn_PreDDel = function()
        {
            var result = this.gfn_confirm("삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsDetail.deleteRow(this.dsDetail.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DDel = function()
        {
            if(!this.fn_PreDDel())
            {
                return false;
            }
            var strSvc      = "DDel";
            var strUrl      = "/prj/UL/UL04/detailDelete_2020402_M.do";
            var strInDs     = "dsDetail=dsDetail:u";
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

        this.fn_PostDDel = function()
        {
        	this.alert("정상적으로 삭제되었습니다.");
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "DEUNGROK_SISU", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_SISU") - 1);
        	this.dsMaster_onrowposchanged();
        	this.dsTree_onrowposchanged();
        };

        /**********************************************************************
                12. 담당교수변경 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 등록
         */
        this.fn_Chg = function()
        {
            var strSvc      = "Chg";
            var strUrl      = "/prj/UL/UL04/Chg_2020402_M.do";
            var strInDs     = "dsDetail=dsDetail:u";
            var strOutDs    = "";
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

        this.fn_PostChg = function()
        {
        	this.alert("정상적으로 변경되었습니다.");
        	this.dsTree_onrowposchanged();
        };

        /**********************************************************************
                13. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 각종함수
        ***********************************************************************/
        // 공통일정기간 조회
        this.fn_Iljeong = function()
        {
        	this.ds_iljeongInput.setColumn(0, "DEPT_CD", objApp.gds_userInfoDb.getColumn(0, "DEPT"));
        	this.ds_iljeongInput.setColumn(0, "ILJEONG_CD", "020");

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

        // 시간표 체크
        this.fn_SiganpyoCheck = function (type)
        {
        	var YYYY 			= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        	var HAKGI 			= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGI"));
        	var HAKGWA_CD 		= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	var JUYA_GBCD 		= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	var ISU_HAKNYEON_CD = this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "ISU_HAKNYEON_CD"));
        	var GYOGWAMOK_CD 	= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD"));
        	var BUNBAN 			= this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "BUNBAN"));
        	var DAMDANGGYOSU_CD = this.gfn_isEmpty(this.dsMaster.getColumn(this.dsMaster.rowposition, "DAMDANGGYOSU_CD"));
        	var HOSIL_LV		= this.gfn_isEmpty(this.dsTree.getColumn(this.dsTree.rowposition, "LV"));
        	var HOSIL_CD		= this.gfn_isEmpty(this.dsTree.getColumn(this.dsTree.rowposition, "HOSIL_CD"));

        	if(type == "SAV")
        	{
        		var JUCHA_START = this.cboJuchaFr.value;
        		var JUCHA_END 	= this.cboJuchaTo.value;
        		var JUCHA_CNT	= parseInt(JUCHA_END) - parseInt(JUCHA_START);
        		if(JUCHA_CNT < 0)
        		{
        			this.alert("등록할 주차의 시작주차가 종료주차보다 클 수 없습니다.");
        			return false;
        		}
        	}

        	if(type == "DEL"){
        		var JUCHA_START = this.cboSearchJucha.value;
        		var JUCHA_END 	= this.cboSearchJucha.value;
        	}

        	this.dsSave.clearData();

        	for(var k = JUCHA_START; k <= JUCHA_END; k++)
        	{
        		for(var i = 0; i < this.dsSiganpyo.rowcount; i++)
        		{
        			var yoilGb	= 2;
        			var chkGb	= 10;
        			var authGb	= 16;
        			var gyogwamokCd	= 22;

        			for(var j = 3; j <= this.grdSiganpyo.getCellCount("body"); j+=2)
        			{
        				var chkYn = this.dsSiganpyo.getColumn(i, chkGb);
        				var authYn = this.dsSiganpyo.getColumn(i, authGb);
        				var isValue = this.gfn_isEmpty(this.dsSiganpyo.getColumn(i, yoilGb+2));
        				var delGyogwamokCd = this.gfn_isEmpty(this.dsSiganpyo.getColumn(i, gyogwamokCd));	// ex) 501110,1,1,1112001,C --> 학과,주야,이수학년,교과목코드,분반delGyogwamokCd.split(',')[0]

        				if(type == "SAV" && isValue != "" && chkYn == "1")
        				{
        					this.alert("시간표가 존재하는 시간이 있습니다.");
        					return false;
        				}
        				else if(type == "DEL" && isValue == "" && chkYn == "1")
        				{
        					this.alert("삭제할 시간표가 존재하지 않는 시간이 있습니다.");
        					return false;
        				}
        				else if(chkYn == "1")
        				{
        					this.dsSave.addRow();
        					this.dsSave.setColumn(this.dsSave.rowposition, "YYYY",				YYYY);
        					this.dsSave.setColumn(this.dsSave.rowposition, "HAKGI",				HAKGI);
        					this.dsSave.setColumn(this.dsSave.rowposition, "HAKGWA_CD",			delGyogwamokCd != "" ? delGyogwamokCd.split(',')[0] : HAKGWA_CD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "JUYA_GBCD",			delGyogwamokCd != "" ? delGyogwamokCd.split(',')[1] : JUYA_GBCD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "ISU_HAKNYEON_CD",	delGyogwamokCd != "" ? delGyogwamokCd.split(',')[2] : ISU_HAKNYEON_CD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "GYOGWAMOK_CD",		delGyogwamokCd != "" ? delGyogwamokCd.split(',')[3] : GYOGWAMOK_CD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "BUNBAN",			delGyogwamokCd != "" ? delGyogwamokCd.split(',')[4] : BUNBAN);
        					this.dsSave.setColumn(this.dsSave.rowposition, "DAMDANGGYOSU_CD",	DAMDANGGYOSU_CD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "YOIL_GBCD",			yoilGb);
        					this.dsSave.setColumn(this.dsSave.rowposition, "GYOSI",				this.dsSiganpyo.getColumn(i, "CD"));
        					this.dsSave.setColumn(this.dsSave.rowposition, "HOSIL_CD", 			HOSIL_CD);
        					this.dsSave.setColumn(this.dsSave.rowposition, "JUCHA", 			k);
        					this.dsSave.setColumn(this.dsSave.rowposition, "JUCHA_YOIL_GYOSI",	k.toString() + yoilGb.toString() + this.dsSiganpyo.getColumn(i, "CD"));

        					if(authYn == "N")
        					{
        						this.alert("담당교수가 속한 시간표만 삭제할 수 있습니다.");
        						return false;
        					}
        				}
        				yoilGb++;
        				chkGb++;
        				authGb++;
        				gyogwamokCd++;
        			}
        		}
        	}

        	if(type == "SAV")
        	{
        		if(this.dsMaster.rowposition == -1)
        		{
        			this.alert("과목을 선택해야합니다.");
        			return false;
        		}
        		if(HOSIL_CD == '' || HOSIL_LV != '3')
        		{
        			this.alert("강의실을 선택해야합니다.");
        			return false;
        		}
        		if(this.dsSave.rowcount < 1)
        		{
        			this.alert("요일과 교시를 선택해야합니다.");
        			return false;
        		}

        		this.ds_cntSiganpyoInput.setColumn(0, "YYYY", YYYY);
        		this.ds_cntSiganpyoInput.setColumn(0, "HAKGI", HAKGI);
        		this.ds_cntSiganpyoInput.setColumn(0, "HAKGWA_CD", HAKGWA_CD);
        		this.ds_cntSiganpyoInput.setColumn(0, "JUYA_GBCD", JUYA_GBCD);
        		this.ds_cntSiganpyoInput.setColumn(0, "ISU_HAKNYEON_CD", ISU_HAKNYEON_CD);
        		this.ds_cntSiganpyoInput.setColumn(0, "GYOGWAMOK_CD", GYOGWAMOK_CD);
        		this.ds_cntSiganpyoInput.setColumn(0, "BUNBAN", BUNBAN);

        		var strSvc      = "CntSiganpyoRet";
        		var strUrl      = "/prj/UL/UL04/cntSiganpyoRetrieve_2020402_M.do";
        		var strInDs     = "ds_cntSiganpyoInput=ds_cntSiganpyoInput";
        		var strOutDs    = "dsCntSiganpyo=dsCntSiganpyo";
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

        		var TONGHAP_SISU = this.dsMaster.getColumn(this.dsMaster.rowposition, "TONGHAP_SISU");

        		for(var juchaRow = JUCHA_START-1; juchaRow <= JUCHA_END-1; juchaRow++)
        		{
        			var DEUNGROK_SISU = this.dsCntSiganpyo.getColumn(juchaRow, "CNT");
        			DEUNGROK_SISU += this.dsCntSiganpyo.rowcount / (JUCHA_CNT+1);
        			if(parseInt(TONGHAP_SISU) < parseInt(DEUNGROK_SISU))
        			{
        				this.alert("등록시간이 통합시간보다 클 수 없습니다.");
        				return false;
        			}
        		}
        	}

        	if(type == "DEL")
        	{
        		if(this.dsSave.rowcount < 1)
        		{
        			this.alert("요일과 교시를 선택해야합니다.");
        			return false;
        		}
        	}

        	return true;
        };

        /**********************************************************************
                15. 팝업
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
                16. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 학과 필터 적용
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "T";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 마스터 로우 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        // 트리 로우 변경시
        this.dsTree_onrowposchanged = function(obj,e)
        {
        	var lv = this.dsTree.getColumn(this.dsTree.rowposition, "LV");
        	var jucha = this.gfn_isEmpty(this.cboSearchJucha.value);

        	if(jucha != "")
        	{
        		if(lv == "3")
        		{
        			this.fn_SiganpyoRet();
        		}
        	}
        };

        this.grdDetail_onmouseenter = function(obj,e)
        {
        	this.grdDetail.set_width("571");
        	this.grdTree.set_visible(false);
        	this.staTree.set_visible(false);
        };

        this.grdDetail_onmouseleave = function(obj,e)
        {
        	this.grdDetail.set_width("241");
        	this.grdTree.set_visible(true);
        	this.staTree.set_visible(true);
        };

        // 시간표 삭제
        this.grdDetail_oncellclick = function(obj,e)
        {
        	if(e.col == '1')
        	{
        		this.fn_DDel();
        	}
        };

        // 등록된 수업의 강의실 찾기
        this.grdDetail_oncelldblclick = function(obj,e)
        {
        	this.cboSearchJucha.set_value(this.dsDetail.getColumn(this.dsDetail.rowposition, "JUCHA"));
        	this.cboJuchaFr.set_value(this.dsDetail.getColumn(this.dsDetail.rowposition, "JUCHA"));
        	this.cboJuchaTo.set_value(this.dsDetail.getColumn(this.dsDetail.rowposition, "JUCHA"));

        	var getRowTemp = this.dsTree.findRow("HOSIL_CD", this.dsDetail.getColumn(this.dsDetail.rowposition, "HOSIL_CD"));
        	var rowList = new Array();
        	rowList[0] = getRowTemp;
        	this.dsTree.set_rowposition(getRowTemp);

        	for(var i=1 ; i < 3 ; i++)
        	{
        		nParentRow = this.grdTree.getTreeParentRow(getRowTemp);
        		rowList[i] = nParentRow;
        		getRowTemp = nParentRow;
        	}

        	for(var j=2 ; j >= 0 ; j--)
        	{
        		var treeRow = this.grdTree.getTreeRow(rowList[j]);
        		var bSucc = this.grdTree.setTreeStatus(treeRow,true);
        	}

        	this.fn_SiganpyoRet();

        	var row = parseInt(this.dsDetail.getColumn(this.dsDetail.rowposition, 'GYOSI'),10)-1;
        	var cellIdx = ((parseInt(this.dsDetail.getColumn(this.dsDetail.rowposition, 'YOIL_GBCD'),10)-1)*2);
        	this.grdSiganpyo.setCellPos(cellIdx);
        	this.dsSiganpyo.set_rowposition(row);
        };

        // 담당교수변경
        this.dsDetail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid=="DAMDANGGYOSU_CD")
        	{
        		if(this.confirm("담당교수를 변경하시겠습니까?")){

        			this.dsDetail.set_updatecontrol(false);
        			this.dsDetail.set_enableevent(false);

        			this.dsDetail.setColumn(e.row, "DAMDANGGYOSU_CD", e.newvalue);
        			this.dsDetail.setRowType(e.row, Dataset.ROWTYPE_UPDATE);

        			this.dsDetail.set_updatecontrol(true);
        			this.dsDetail.set_enableevent(true);

        			this.fn_Chg();
        		}
        		else
        		{
        			// 원래대로
        			this.dsDetail.setColumn(e.row, e.col, e.oldvalue);
        		}
        	}
        };

        // 시간표 조회
        this.cboSearchJucha_onitemchanged = function(obj,e)
        {
        	var jucha = this.gfn_isEmpty(obj.value);
        	if(jucha != "")
        	{
        		this.fn_SiganpyoRet();
        		this.cboJuchaFr.set_value(obj.value);
        		this.cboJuchaTo.set_value(obj.value);
        	}
        };

        // 강의실 선택 팝업
        this.grdDetail_onexpanddown = function(obj,e)
        {
        	var YYYY 			= this.dsDetail.getColumn(this.dsDetail.rowposition, "YYYY");
        	var HAKGI 			= this.dsDetail.getColumn(this.dsDetail.rowposition, "HAKGI");
        	var HAKGWA_CD		= this.dsDetail.getColumn(this.dsDetail.rowposition, "HAKGWA_CD");
        	var JUYA_GBCD 		= this.dsDetail.getColumn(this.dsDetail.rowposition, "JUYA_GBCD");
        	var ISU_HAKNYEON_CD = this.dsDetail.getColumn(this.dsDetail.rowposition, "ISU_HAKNYEON_CD");
        	var GYOGWAMOK_CD 	= this.dsDetail.getColumn(this.dsDetail.rowposition, "GYOGWAMOK_CD");
        	var BUNBAN 			= this.dsDetail.getColumn(this.dsDetail.rowposition, "BUNBAN");
        	var JUCHA 			= this.dsDetail.getColumn(this.dsDetail.rowposition, "JUCHA");
        	var YOIL_GBCD 		= this.dsDetail.getColumn(this.dsDetail.rowposition, "YOIL_GBCD");
        	var GYOSI 			= this.dsDetail.getColumn(this.dsDetail.rowposition, "GYOSI");
        	var SUEOPTM_GBCD	= this.dsDetail.getColumn(this.dsDetail.rowposition, "SUEOPTM_GBCD");
        	var BEFORE_HOSIL	= this.dsDetail.getColumn(this.dsDetail.rowposition, "HOSIL_CD");

        	var oArg = { YYYY:YYYY
        				, HAKGI : HAKGI
        				, HAKGWA_CD : HAKGWA_CD
        				, JUYA_GBCD : JUYA_GBCD
        				, ISU_HAKNYEON_CD : ISU_HAKNYEON_CD
        				, GYOGWAMOK_CD : GYOGWAMOK_CD
        				, BUNBAN : BUNBAN
        				, JUCHA : JUCHA
        				, YOIL_GBCD : YOIL_GBCD
        				, GYOSI : GYOSI
        				, SUEOPTM_GBCD : SUEOPTM_GBCD
        				, BEFORE_HOSIL : BEFORE_HOSIL };
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("ganguisil","UL04::UL04_2020402_P01.xfdl",oArg,sPopupCallBack,oOption);
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

        /**********************************************************************
                17. 검색창 엔터키 조회
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

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"ISU_HAKNYEON_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DAEHAK_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGaeseolBunban_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BUNBAN",obj.value);
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
            this.cboJuchaFr.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.cboJuchaTo.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.btnSearchSawon.addEventHandler("onclick",this.divSearch_btnSearchSawon_onclick,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.divSearch.form.edtSearchGaeseolBunban.addEventHandler("onkeydown",this.divSearch_edtSearchGaeseolBunban_onkeydown,this);
            this.divSearch.form.btnSearchGwamok.addEventHandler("onclick",this.divSearch_btnSearchGwamok_onclick,this);
            this.divSearch.form.edtSearchGwamokNm.addEventHandler("onchanged",this.div_01_edtSearchJugwanDeptNm_onchanged,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.grdDetail.addEventHandler("onmouseenter",this.grdDetail_onmouseenter,this);
            this.grdDetail.addEventHandler("onmouseleave",this.grdDetail_onmouseleave,this);
            this.grdDetail.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.grdDetail.addEventHandler("oncelldblclick",this.grdDetail_oncelldblclick,this);
            this.grdDetail.addEventHandler("onexpanddown",this.grdDetail_onexpanddown,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.cboSearchJucha.addEventHandler("onitemchanged",this.cboSearchJucha_onitemchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsTree.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
            this.dsIljeong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL04_2020402_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
