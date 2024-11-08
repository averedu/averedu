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
            this.set_titletext("동일과목매핑");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGroup", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FR_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"FR_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GROUP_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"22\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TONGHAP_SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NCS_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NCS_NEUNGRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SISU_HALF_GWAMOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIKGWAMOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GANGUIPYEONGGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GANGUIPYEONGGA_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHOICHO_GAESEOL_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYEJI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUGWAN_HAKGWA_CD_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUGWAN_JEONGONG_CD_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GU_SYS_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOYANG_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dinput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDongGwamok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NO\" type=\"BIGDECIMAL\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"6\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FR_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"FR_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"TO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"TO_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDongGwamokIryeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FR_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"FR_HAKGI\" type=\"STRING\" size=\"1\"/><Column id=\"TO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"TO_HAKGI\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_SAYU\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch2","470","85",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","6","31",null,"9","20",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","-4","0","432","9",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1132","0","27","42",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","1067","0","5","42",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","9","9","85","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("5");
            obj.set_text("과목코드/명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Edit("edtSearchgwamokNm","106","9","150","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("6");
            obj.set_maxlength("66");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","267","8",null,"24","768",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_01",null,"-5","10","45","1052",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_01_00",null,"-5","10","45","892",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Button("btnRet2",null,"9","60","22","91",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"9","60","22","26",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Div("div","10","8",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00","3","9","80","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("등록부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","83","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","383","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","396","9","60","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","458","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","758","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("calInsrtDt","850","9","150","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","764","9","75","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","840","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtSayu","1068","9","150","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_maxlength("1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00","1000","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","1009","9","50","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1059","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","93","9","130","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.div.addChild(obj.name, obj);

            obj = new Button("btnSearchDept","232","9","22","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtDeptNm","263","9","120","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtInsrtCd","468","9","130","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.div.addChild(obj.name, obj);

            obj = new Button("btnSearchInsrt","607","9","22","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtInsrtNm","638","9","120","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","223","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","253","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_01_00",null,"-5","10","45","1012",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_01_00_00",null,"-5","10","45","978",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Grid("grddsGroup","10","135","450",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsGroup");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\"/><Cell col=\"1\" text=\"그룹명\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP_NO\"/><Cell col=\"1\" text=\"bind:GROUP_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","740","50","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_01","11","0","1620","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","0","10",null,null,"1",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGwamok","470","137",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGwamok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"과목코드\"/><Cell col=\"2\" text=\"계열학과\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"통합\"/><Cell col=\"5\" text=\"이론\"/><Cell col=\"6\" text=\"실습\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"2\" text=\"bind:JUGWAN_HAKGWA_CD_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TONGHAP_SISU\"/><Cell col=\"5\" text=\"bind:IRON_SISU\"/><Cell col=\"6\" text=\"bind:SILSEUP_SISU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00",null,"69","10","695","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00",null,"51","11","739","1169",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01","10","127","1620","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch1","10","85","450","42",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","432","9",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","83","0","10","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","1",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","458","0","10","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","758","0","27","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","840","0","10","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00","1000","0","27","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1059","0","10","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00","3","9","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("9");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Edit("edtSearchGroupNm","93","9","150","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("10");
            obj.set_maxlength("33");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Button("btnRet","362","9","60","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","422","0","27","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("12");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","253","8",null,"24","86",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("13");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","243","0","10","42",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("동일과목매핑");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch1.form.edtSearchGroupNm","value","ds_input","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch2.form.edtSearchgwamokNm","value","ds_dinput","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsGroup");
            this._addPreloadList("data","","dsGwamok");
            this._addPreloadList("data","","dsDongGwamok");
            this._addPreloadList("data","","dsDongGwamokIryeok");
        };
        
        // User Script
        this.registerScript("UL02_2020202_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL02_2020202_M.xfdl(안내 문구 관리 관리(조회))
        * 작 성         일 명: 홍길동
        * 작 성         일 자: 2021/10/06
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
        this.lvchkColidDs   = "FR_HAKGI$GROUP_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "시작학기$그룹명";
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
        	//부서
        	this.div.form.edtDeptCd.set_value(objApp.gds_userInfoDb.getColumn(0,"DEPT"));
        	this.div.form.edtDeptNm.set_value(objApp.gds_userInfoDb.getColumn(0,"DEPT_NM"));

        	//등록자
        	this.div.form.edtInsrtCd.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        	this.div.form.edtInsrtNm.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_NM"));
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grddsGroup);
        	this.gfn_clearSortAll(this.grdGwamok);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Ret":						//그룹명 조회
                            this.fn_PostRet();
                        break;
        		    case "Ret2":					//과목코드/명 조회
                            this.fn_PostRet2();
                        break;
                    case "Save2":
                            this.fn_PostSave2();
                        break;
        			case "DongilGwamokSIryeoksave2":
                            this.fn_PostDongilGwamokSIryeokSave2();
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
        		case "GyogwamokDept" :						//등록 부서
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.div.form.edtDeptCd.set_enableevent(false);
        					this.div.form.edtDeptCd.set_value(sRtn[0]);
        		            this.div.form.edtDeptNm.set_value(sRtn[1]);
        					this.div.form.edtDeptCd.set_enableevent(true);
        				}
        			break;
        		case "InsertAdmin" :						//등록자
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.div.form.edtInsrtCd.set_enableevent(false);
        					this.div.form.edtInsrtCd.set_value(sRtn[0]);
        		            this.div.form.edtInsrtNm.set_value(sRtn[1]);
        					this.div.form.edtInsrtCd.set_enableevent(true);
        				}
        			break;

        		default:
                    break;
        	}
        };
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnRet_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL02/GroupNmRetrieve_2020202_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGroup=dsGroup";
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
            this.gfn_getRowCount(this.divSearch1.form.staRowCnt1, this.dsGroup);
        };
        /**********************************************************************
                06. 조회 함수 선언(과목코드/명 함수)
        ***********************************************************************/
        this.btnRet2_onclick = function(obj,e)
        {
        	this.fn_Ret2();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret2 = function()
        {
            var strSvc      = "Ret2";
            var strUrl      = "/prj/UL/UL02/GyogwamokRetrieve_2020202_M.do";
            var strInDs     = "ds_dinput=ds_dinput";
            var strOutDs    = "dsGwamok=dsGwamok";
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
        this.fn_PostRet2 = function()
        {
            this.gfn_getRowCount(this.divSearch2.form.staRowCnt2,this.dsGwamok);
        };
        /**********************************************************************
                07. 저장 함수 선언 (과목코드/명 함수)
        ***********************************************************************/
        this.btnSave2_onclick = function(obj,e)
        {
        	//동일과목그룹 현재 포지션
        	var rowPos = this.dsGroup.rowposition;

        	if(rowPos == -1)
        	{
        		this.alert("동일과목 그룹을 선택해주세요");
        		return false;
        	}

        	var fr_yyyy  = this.dsGroup.getColumn(rowPos,'FR_YYYY');
        	var fr_hakgi = this.dsGroup.getColumn(rowPos,'FR_HAKGI');
        	var group_no = this.dsGroup.getColumn(rowPos,'GROUP_NO');
        	var group_nm = this.dsGroup.getColumn(rowPos,'GROUP_NM');

        	var edtDeptCd  = this.div.form.edtDeptCd.value;
        	var edtInsrtCd = this.div.form.edtInsrtCd.value;
        	var calInsrtDt = this.div.form.calInsrtDt.value;
        	var edtSayu    = this.div.form.edtSayu.value;

        	if(this.gfn_isNull(edtDeptCd))
        	{
        		this.alert("신청부서를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(edtInsrtCd))
        	{
        		 this.alert("신청아이디 입력해주세요.");
        		 return false;
        	}
        	if(this.gfn_isNull(calInsrtDt))
        	{
        		 this.alert("신청날짜 입력해주세요.");
        		 return false;
        	}
        	if(this.gfn_isNull(edtSayu))
        	{
        		 this.alert("신청사유 입력해주세요.");
        		 return false;
        	}

        	//과목 선택을 안할 경우
        	if(this.dsGwamok.rowcount < 1 || this.dsGwamok.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("과목을 선택해주세요","삭제정보","","warning");
        		return false;
        	}

        	//체크된 상태 가져오기
        	for(var i=0; i<this.dsGwamok.rowcount; i++)
        	{
        		if(this.dsGwamok.getColumn(i,"CHK") == "1")
        		{
        			var addRow = this.dsDongGwamok.addRow();
        			this.dsDongGwamok.setColumn(addRow,'GROUP_NO',group_no);
        			this.dsDongGwamok.setColumn(addRow,'GYOGWAMOK_CD', this.dsGwamok.getColumn(this.dsGwamok.rowposition, 'GYOGWAMOK_CD'));
        			this.dsDongGwamok.setColumn(addRow,'GROUP_NM',group_nm);
        			this.dsDongGwamok.setColumn(addRow,'FR_YYYY',fr_yyyy);
        			this.dsDongGwamok.setColumn(addRow,'FR_HAKGI',fr_hakgi);
        			this.dsDongGwamok.setColumn(addRow,'TO_YYYY','9999');
        			this.dsDongGwamok.setColumn(addRow,'USE_YN','1');

        		}
        	};

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_Save2();
        };
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save2 = function()
        {
            var strSvc      = "Save2";
            var strUrl      = "/prj/UL/UL02/GwamokSave_2020202_M.do";
            var strInDs     = "dsDongGwamok=dsDongGwamok:u";
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
        this.fn_PostSave2 = function()
        {
        	this.DongilGwamokPreSave2();
            this.gfn_getRowCount(this.staRowCnt2,this.dsGwamok);
        };

        //과목 그리드 저장 후 콜백 (동일과목 데이터셋)
        this.DongilGwamokPreSave2 = function()
        {
        	//그룹 그리드
        	var rowPos  = this.dsGroup.rowposition;

        	var group_no  = this.dsGroup.getColumn(rowPos,'GROUP_NO');
        	var group_nm  = this.dsGroup.getColumn(rowPos,'GROUP_NM');
        	var fr_yyyy  = this.dsGroup.getColumn(rowPos,'FR_YYYY');
        	var fr_hakgi = this.dsGroup.getColumn(rowPos,'FR_HAKGI');

        	var sincheong_dept_cd = this.div.form.edtDeptCd.value;
        	var sincheongja_id    = this.div.form.edtInsrtCd.value;
        	var sincheongja_dt    = this.div.form.calInsrtDt.value;
        	var sincheongja_sayu  = this.div.form.edtSayu.value;

        	this.dsDongGwamokIryeok.clearData();

        	for(var i=0; i<this.dsGwamok.rowcount; i++)
        	{
        		if(this.dsGwamok.getColumn(i,"CHK") == "1")
        		{
        			var addRow = this.dsDongGwamokIryeok.addRow();
        			this.dsDongGwamokIryeok.setColumn(addRow,'GROUP_NO',group_no);
        			this.dsDongGwamokIryeok.setColumn(addRow,'GYOGWAMOK_CD', this.dsGwamok.getColumn(this.dsGwamok.rowposition, 'GYOGWAMOK_CD'));
        			this.dsDongGwamokIryeok.setColumn(addRow,'GROUP_NM',group_nm);
        			this.dsDongGwamokIryeok.setColumn(addRow,'FR_YYYY',fr_yyyy);
        			this.dsDongGwamokIryeok.setColumn(addRow,'FR_HAKGI',fr_hakgi);
        			this.dsDongGwamokIryeok.setColumn(addRow,'TO_YYYY','9999');
        			this.dsDongGwamokIryeok.setColumn(addRow,'USE_YN','1');
        			this.dsDongGwamokIryeok.setColumn(addRow,'SINCHEONG_DEPT_CD',sincheong_dept_cd);
        			this.dsDongGwamokIryeok.setColumn(addRow,'SINCHEONGJA_ID',sincheongja_id);
        			this.dsDongGwamokIryeok.setColumn(addRow,'SINCHEONG_DT',sincheongja_dt);
        			this.dsDongGwamokIryeok.setColumn(addRow,'SINCHEONG_SAYU',sincheongja_sayu);
        		}
        	};
        	this.DongilGwamokIryeokSave2();
        };

        /**
         * 기능 : 저장 실행
         */
        this.DongilGwamokIryeokSave2 = function()
        {
        	var strSvc      = "DongilGwamokSIryeoksave2";
            var strUrl      = "/prj/UL/UL02/DongilGwamokIryeokSave_2020202_M.do";
            var strInDs     = "dsDongGwamokIryeok=dsDongGwamokIryeok:u";
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
        this.fn_PostDongilGwamokSIryeokSave2 = function()
        {
        	if(this.dsGwamok.getColumn(i,"CHK") == "1")
        	{
        		 this.dsGwamok.deleteAll();
        	}
        	this.fn_Ret2();
        }

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그룹명 그리드 그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**
         *      과목명 그리드 그리드멀티 소트정열
         */
        this.grdGwamok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 등록부서 값이 바뀔 때 팝업
        this.divSearch_edtSearchDeptNm_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.div.form.edtDeptCd.set_value("");
        	} else {
        		if (e.prevalue != e.postvalue)
        		{
        			this.fn_setCallDeptPopup(e.postvalue);
        		}
        	};
        };

        // 등록자 값이 바뀔 때 팝업
        this.divSearch_edtSearchInsrtNm_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.div.form.edtInsrtCd.set_value("");
        	} else {
        		if (e.prevalue != e.postvalue)
        		{
        			this.fn_setCallSabeonPopup(e.postvalue);
        		}
        	};
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsGroup)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.dsGwamok)) {
        		value = true;
        	}

        	return value;
        };
        /**********************************************************************
                09. 팝업
        ***********************************************************************/
        //등록 부서 팝업
        this.divSearch_btnSearchDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div.form.edtDeptNm.value;

        	this.fn_setCallDeptPopup(deptCdNm);
        };

        // 등록 부서
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
        		this.div.form.edtDeptCd.set_value(this.dsDept.getColumn(0,"DEPT_CD"));
        		this.div.form.edtDeptNm.set_value(this.dsDept.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "GyogwamokDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        //등록자 팝업
        this.divSearch_btnSearchInsrt_onclick = function(obj,e)
        {
        	var edtInsrtNm = this.div.form.edtInsrtNm.value;

        	this.fn_setCallSabeonPopup(edtInsrtNm);
        };

        // 등록자
        this.fn_setCallSabeonPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsDept=dsDept";
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
        	if(this.dsDept.rowcount == 1)
        	{
        		this.div.form.edtInsrtCd.set_value(this.dsDept.getColumn(0,"SABEON"));
        		this.div.form.edtInsrtNm.set_value(this.dsDept.getColumn(0,"SEONGMYEONG"));
        	}
        	else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "InsertAdmin","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };
        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        //그룹명 엔터 검색
        this.divSearch1_edtSearchGroupNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GROUP_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch2.form.edtSearchgwamokNm.addEventHandler("onkeydown",this.divSearch2_edtSearchgwamokNm_onkeydown,this);
            this.divSearch2.form.btnRet2.addEventHandler("onclick",this.btnRet2_onclick,this);
            this.divSearch2.form.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.div.form.btnSearchDept.addEventHandler("onclick",this.divSearch_btnSearchDept_onclick,this);
            this.div.form.edtDeptNm.addEventHandler("onchanged",this.divSearch_edtSearchDeptNm_onchanged,this);
            this.div.form.btnSearchInsrt.addEventHandler("onclick",this.divSearch_btnSearchInsrt_onclick,this);
            this.div.form.edtInsrtNm.addEventHandler("onchanged",this.divSearch_edtSearchInsrtNm_onchanged,this);
            this.grddsGroup.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdGwamok.addEventHandler("onheaddblclick",this.grdGwamok_onheaddblclick,this);
            this.divSearch1.form.edtSearchGroupNm.addEventHandler("onkeydown",this.divSearch1_edtSearchGroupNm_onkeydown,this);
            this.divSearch1.form.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.dsGroup.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL02_2020202_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
