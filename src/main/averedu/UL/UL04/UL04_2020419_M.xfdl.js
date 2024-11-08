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
            this.set_titletext("시간표입력(학과용)");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"ISU_HAKNYEON_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_SISU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/><Col id=\"ISU_HAKNYEON_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HWAKJEONG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"10\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"1055\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MON\" type=\"STRING\" size=\"65532\"/><Column id=\"TUES\" type=\"STRING\" size=\"65532\"/><Column id=\"WED\" type=\"STRING\" size=\"65532\"/><Column id=\"THURS\" type=\"STRING\" size=\"65532\"/><Column id=\"FRI\" type=\"STRING\" size=\"65532\"/><Column id=\"SAT\" type=\"STRING\" size=\"65532\"/><Column id=\"MON_CK\" type=\"STRING\" size=\"1\"/><Column id=\"TUES_CK\" type=\"STRING\" size=\"1\"/><Column id=\"WED_CK\" type=\"STRING\" size=\"1\"/><Column id=\"THURS_CK\" type=\"STRING\" size=\"1\"/><Column id=\"FRI_CK\" type=\"STRING\" size=\"1\"/><Column id=\"SAT_CK\" type=\"STRING\" size=\"1\"/><Column id=\"MON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"TUES_CD\" type=\"STRING\" size=\"10\"/><Column id=\"WED_CD\" type=\"STRING\" size=\"10\"/><Column id=\"THURS_CD\" type=\"STRING\" size=\"10\"/><Column id=\"FRI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SAT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MON_JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TUES_JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"WED_JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"THURS_JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"FRI_JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SAT_JUYA_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_YN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"YOIL_GYOSI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunbanCombo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","63","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("개설강좌 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","111","62","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","450","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","571","44","10",null,null,"37",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","406",null,"8","1068",null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj.set_taborder("13");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","88","572","290",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"주야\"/><Cell col=\"6\" text=\"분반\"/><Cell col=\"7\" text=\"대표교수\"/><Cell col=\"8\" text=\"통합시간\"/><Cell col=\"9\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\"/><Cell col=\"2\" text=\"bind:ISU_HAKNYEON_CD\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"4\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JUYA_GBNM\"/><Cell col=\"6\" text=\"bind:BUNBAN\"/><Cell col=\"7\" text=\"bind:DAMDANGGYOSU_NM\"/><Cell col=\"8\" text=\"bind:TONGHAP_SISU\"/><Cell col=\"9\" text=\"bind:DEUNGROK_SISU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdTree","0","414","571",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsTree");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:HOSIL_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LV\" treestartlevel=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTree","0","389","105","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("강의실 선택");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSiganpyo","581","87",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSiganpyo");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"시간\" textAlign=\"center\"/><Cell col=\"1\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"월요일\" textAlign=\"center\"/></Cell><Cell col=\"3\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"화요일\" textAlign=\"center\"/></Cell><Cell col=\"5\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"수요일\" textAlign=\"center\"/></Cell><Cell col=\"7\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"목요일\" textAlign=\"center\"/></Cell><Cell col=\"9\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"금요일\" textAlign=\"center\"/></Cell><Cell col=\"11\" colspan=\"2\"><Cell/><Cell col=\"1\" text=\"토요일\" textAlign=\"center\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:CD_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:MON_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:MON\"/><Cell col=\"3\" text=\"bind:TUES_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:TUES\"/><Cell col=\"5\" text=\"bind:WED_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\" text=\"bind:WED\"/><Cell col=\"7\" text=\"bind:THURS_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:THURS\"/><Cell col=\"9\" text=\"bind:FRI_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:FRI\"/><Cell col=\"11\" text=\"bind:SAT_CK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"12\" text=\"bind:SAT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","581","63","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("시간표");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","1555","55","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시간표 삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","658","64","500","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("※ 시간표 등록 및 삭제는 실시간으로 서버에 반영되어 저장합니다. 유의해 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-37","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","76","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","158","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","248","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","66","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","238","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","328","-1","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","156","4","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","498","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","589","9","160","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","750","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","840","9","160","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_cssclass("point");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","1002","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1091","9","160","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","408","2","10","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","328","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","498","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","579","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","749","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","830","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","1000","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","1081","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","418","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd","1465","55","85","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시간표 등록");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00",null,"59","27","20","307",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("분반");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","1334","58","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("BUNBAN");
            obj.set_datacolumn("BUNBAN");
            obj.set_innerdataset("dsBunbanCombo");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("시간표입력(학과용)");
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

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchHaknyeon","value","ds_input","ISU_HAKNYEON_CD");
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
            this._addPreloadList("data","","dsIljeong");
            this._addPreloadList("data","","dsBunbanCombo");
        };
        
        // User Script
        this.registerScript("UL04_2020419_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL04_2020419_M.xfdl(시간표입력(학과용))
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
            var strDs    = "dsHakgi|dsHaknyeon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00060";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "DRet":
                            this.fn_PostDRet();
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
        this.fn_TreeRet = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/UL/UL04/treeRetrieve_2020419_M.do";
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
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "ISU_HAKNYEON_CD")))
            {
                this.alert("학년은 필수입력입니다.");
                return false;
            }
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "GYEYEOL")))
            {
                this.alert("계열은 필수입력입니다.");
                return false;
            }
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA")))
            {
                this.alert("학과는 필수입력입니다.");
                return false;
            }

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
            var strUrl      = "/prj/UL/UL04/Retrieve_2020419_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsBunbanCombo=dsBunbanCombo";
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
        	this.cboSearchBunban.set_index(0);
        	this.fn_DRet(this.cboSearchBunban.value);
        };

        /**********************************************************************
                07. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function(bunban)
        {
            // 조회조건 셋팅
        	this.ds_dInput.setColumn(0, "YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        	this.ds_dInput.setColumn(0, "ISU_HAKNYEON_CD", this.ds_input.getColumn(0, "ISU_HAKNYEON_CD"));
        	this.ds_dInput.setColumn(0, "GYEYEOL", this.ds_input.getColumn(0, "GYEYEOL"));
        	this.ds_dInput.setColumn(0, "HAKGWA", this.ds_input.getColumn(0, "HAKGWA"));
        	this.ds_dInput.setColumn(0, "JEONGONG", this.ds_input.getColumn(0, "JEONGONG"));
        	this.ds_dInput.setColumn(0, "BUNBAN", bunban);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function(bunban)
        {
            if(!this.fn_PreDRet(bunban))
            {
                return false;
            }
            var strSvc      = "DRet";
            var strUrl      = "/prj/UL/UL04/detailRetrieve_2020419_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsMaster=dsMaster ";
        	    strOutDs   += "dsSiganpyo=dsSiganpyo";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
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
            var strUrl      = "/prj/UL/UL04/Delete_2020419_M.do";
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
        	this.fn_DRet(this.cboSearchBunban.value);
        };

        /**********************************************************************
                09. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
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

        	if(this.gfn_isNull(this.dsMaster.getColumn(this.dsMaster.rowposition,"DAMDANGGYOSU_CD")))
        	{
        		alert("해당 교과목의 담당교수 정보가 존재하지 않습니다.");
        		return false;
        	}

            if(!this.fn_SiganpyoCheck("SAV"))
        	{
        		return false;
        	}

        	var result = this.gfn_confirm("등록하시겠습니까?", "저장","", "question" );
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
            var strUrl      = "/prj/UL/UL04/Save_2020419_M.do";
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
        	this.fn_DRet(this.cboSearchBunban.value);
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
        // 공통일정기간 조회
        this.fn_Iljeong = function()
        {
        	this.ds_iljeongInput.setColumn(0, "DEPT_CD", objApp.gds_userInfoDb.getColumn(0, "DEPT"));
        	this.ds_iljeongInput.setColumn(0, "ILJEONG_CD", "019");

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

        this.fn_SiganpyoCheck = function(type)
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

        	this.dsSave.clearData();

         	for(var i = 0; i < this.dsSiganpyo.rowcount; i++)
        	{
        		var yoilGb	= 2;
        		var chkGb	= 9;
        		var gyogwamokCd = 15;
        		var juyaGbcd = 21;

         		for(var j = 3; j <= this.grdSiganpyo.getCellCount("body"); j+=2)
        		{
         			var chkYn = this.dsSiganpyo.getColumn(i, chkGb);
        			var isValue = this.gfn_isEmpty(this.dsSiganpyo.getColumn(i, yoilGb+1));
        			var delGyogwamokCd = this.gfn_isEmpty(this.dsSiganpyo.getColumn(i, gyogwamokCd));
        			var delJuyaGbcd = this.gfn_isEmpty(this.dsSiganpyo.getColumn(i, juyaGbcd));

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
        				this.dsSave.setColumn(this.dsSave.rowposition, "HAKGWA_CD",			HAKGWA_CD);
        				this.dsSave.setColumn(this.dsSave.rowposition, "JUYA_GBCD",			delJuyaGbcd != "" ? delJuyaGbcd : JUYA_GBCD);
        				this.dsSave.setColumn(this.dsSave.rowposition, "ISU_HAKNYEON_CD",	ISU_HAKNYEON_CD);
        				this.dsSave.setColumn(this.dsSave.rowposition, "GYOGWAMOK_CD",		delGyogwamokCd != "" ? delGyogwamokCd : GYOGWAMOK_CD);
        				this.dsSave.setColumn(this.dsSave.rowposition, "BUNBAN",			BUNBAN);
        				this.dsSave.setColumn(this.dsSave.rowposition, "DAMDANGGYOSU_CD",	DAMDANGGYOSU_CD);
        				this.dsSave.setColumn(this.dsSave.rowposition, "YOIL_GBCD",			yoilGb);
        				this.dsSave.setColumn(this.dsSave.rowposition, "GYOSI",				this.dsSiganpyo.getColumn(i, "CD"));
        				this.dsSave.setColumn(this.dsSave.rowposition, "YOIL_GYOSI",		yoilGb + this.dsSiganpyo.getColumn(i, "CD"));
        				this.dsSave.setColumn(this.dsSave.rowposition, "HOSIL_CD", 			HOSIL_CD);
        			}
        			yoilGb++;
        			chkGb++;
        			gyogwamokCd++;
        			juyaGbcd++;
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

        		var TONGHAP_SISU 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "TONGHAP_SISU");
        		var DEUNGROK_SISU 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_SISU") + this.dsSave.rowcount;

        		if(parseInt(TONGHAP_SISU) < parseInt(DEUNGROK_SISU))
        		{
        			this.alert("등록시간이 통합시간보다 클 수 없습니다.");
        			return false;
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
                12. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
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

        // 분반변경시 조회
        this.cboSearchBunban_onitemchanged = function(obj,e)
        {
        	this.fn_DRet(e.postvalue);
        };

        // 시간표 등록
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        // 시간표 삭제
        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        /**********************************************************************
                13. 검색창 엔터키 조회
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
        		this.ds_input.setColumn(0,"GYEYEOL",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG",obj.value);
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.cboSearchBunban.addEventHandler("onitemchanged",this.cboSearchBunban_onitemchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.dsTree.addEventHandler("onrowposchanged",this.dsTree_onrowposchanged,this);
            this.dsIljeong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsBunbanCombo.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL04_2020419_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
