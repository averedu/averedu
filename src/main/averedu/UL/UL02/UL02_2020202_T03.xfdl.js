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
            this.set_titletext("동일과목그룹관리");
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
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FR_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"FR_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"TO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"TO_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDongGwamok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GROUP_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GROUP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"FR_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"FR_HAKGI\" type=\"STRING\" size=\"1\"/><Column id=\"TO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"TO_HAKGI\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SINCHEONG_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_SAYU\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_1_00_00_00",null,"279","287","28","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00",null,"253","287","28","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00",null,"226","287","28","10",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1",null,"199","287","28","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","45",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","5","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Edit("edtSearchGroupNm","100","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","250","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","264","9","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","334","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","503","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchGyogwamok","482","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","473","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokNm","513","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokCd","343","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","8","174",null,"22","1529",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그룹목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","173",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","199","1303",null,null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"그룹코드\"/><Cell col=\"2\" text=\"그룹명\"/><Cell col=\"3\" text=\"과목코드\"/><Cell col=\"4\" text=\"과목명\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;newrow&apos;:(dataset.getRowType(currow) == &apos;4&apos; ? &apos;modrow&apos;:&apos;&apos;)\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:GROUP_NO\"/><Cell col=\"2\" text=\"bind:GROUP_NM\"/><Cell col=\"3\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"4\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","191",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_01","610","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","10","20","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","11","37","1620","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","1","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"163","30","627","297",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2",null,"199","100","28","197",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("시작년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnFrYYYY",null,"202","180","22","14",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00",null,"226","100","28","197",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("시작학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboFrHakgi",null,"229","180","22","14",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00",null,"253","100","28","197",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("종료년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00",null,"279","100","28","197",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("종료학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnToYYYY",null,"256","180","22","14",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboToHakgi",null,"282","180","22","14",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","60","25","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet",null,"12","60","25","75",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("div","10","122",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("25");
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

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.div.form);
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

            obj = new Static("Static01_02_00_00_00","90","0","10","42",null,null,null,null,null,null,this.div.form);
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

            obj = new Edit("edtDeptNm","270","9","120","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","260","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Button("btnSearchDept","239","9","22","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","230","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","100","9","130","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","390","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","410","9","68","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","480","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtInsrtCd","490","9","130","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","620","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Button("btnSearchInsrt","629","9","22","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","650","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtInsrtNm","660","9","120","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","780","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","789","9","70","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","860","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Calendar("calInsrtDt","870","9","150","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01_00","1020","0","27","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","1029","9","50","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1079","0","10","42",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtSayu","1088","9","150","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_maxlength("1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_00","631","164","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","1340","174",null,"22","197",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("과목상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","631","87","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
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
            obj.set_description("동일과목그룹관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","spnFrYYYY","value","dsMaster","FR_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboFrHakgi","value","dsMaster","FR_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","spnToYYYY","value","dsMaster","TO_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboToHakgi","value","dsMaster","TO_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchGroupNm","value","ds_input","GROUP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchGyogwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchGyogwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDongGwamok");
        };
        
        // User Script
        this.registerScript("UL02_2020202_T03.xfdl", function() {
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
            var strDs    = "dsHakgi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                      // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                          // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                           // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

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
                    case "Save":
                            this.fn_PostSave();
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
        		case "gyogwamokSearch" :						//과목
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(0, "GYOGWAMOK_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "GYOGWAMOK_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
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
        	/**
        	* 기능 : 조회 전 실행
        	*/
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL02/SameGyogwamokRetrieve_2020202_M.do";
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
                06. 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

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
        		 this.alert("신청자 아이디를 입력해주세요.");
        		 return false;
        	}
        	if(this.gfn_isNull(calInsrtDt))
        	{
        		 this.alert("신청날짜를 입력해주세요.");
        		 return false;
        	}
        	if(this.gfn_isNull(edtSayu))
        	{
        		 this.alert("신청사유를 입력해주세요.");
        		 return false;
        	}

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++)
        	{
              if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        	  {
                 var addRow =  this.dsDongGwamok.addRow();
                 this.dsDongGwamok.setColumn(addRow,'GROUP_NO',this.dsMaster.getColumn(i,'GROUP_NO'));
                 this.dsDongGwamok.setColumn(addRow,'GYOGWAMOK_CD',this.dsMaster.getColumn(i,'GYOGWAMOK_CD'));
                 this.dsDongGwamok.setColumn(addRow,'GROUP_NM',this.dsMaster.getColumn(i,'GROUP_NM'));
                 this.dsDongGwamok.setColumn(addRow,'FR_YYYY',this.dsMaster.getColumn(i,'FR_YYYY'));
                 this.dsDongGwamok.setColumn(addRow,'FR_HAKGI',this.dsMaster.getColumn(i,'FR_HAKGI'));
                 this.dsDongGwamok.setColumn(addRow,'TO_YYYY',this.dsMaster.getColumn(i,'TO_YYYY'));
                 this.dsDongGwamok.setColumn(addRow,'TO_HAKGI',this.dsMaster.getColumn(i,'TO_HAKGI'));
                 this.dsDongGwamok.setColumn(addRow,'SINCHEONG_DEPT_CD',edtDeptCd);
                 this.dsDongGwamok.setColumn(addRow,'SINCHEONGJA_ID',edtInsrtCd);
                 this.dsDongGwamok.setColumn(addRow,'SINCHEONG_DT',calInsrtDt);
                 this.dsDongGwamok.setColumn(addRow,'SINCHEONG_SAYU',edtSayu);
              }
           }

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_Save();

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL02/SameGyogwamokSave_2020202_M.do:u";
            var strInDs     = "dsMaster=dsMaster:a";
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
        	this.SameDongilGwamokIryeokSave2();
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        //동일 과목 관리 이력 저장
        this.SameDongilGwamokIryeokSave2 = function()
        {
        	var strSvc      = "Save2";
            var strUrl      = "/prj/UL/UL02/SameDongilGyogwamokIryeokSave_2020202_M.do";
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
        }

        this.fn_PostDongilGwamokSIryeokSave2 = function()
        {
        	this.fn_Ret();
        }
        /**********************************************************************
                7. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 과목명이 바뀔 때 팝업
        this.divSearch_edtSearchGyogwamokNm_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(obj.value)){
        		this.divSearch.form.edtSearchGyogwamokCd.set_value("");
        	}else {
        		if (e.prevalue != e.postvalue)
        		{
        			this.fn_setCallGyogwamokPopup(e.postvalue);
        		}
        	};
        };

        //등록부서가 바뀔 때 팝업
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

        //등록자가 바뀔 때
        this.divSearch_edtInsrtNm_onchanged = function(obj,e)
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
            return this.gfn_isUpdate(this.dsMaster);
        };
        /**********************************************************************
                8. 팝업
        ***********************************************************************/
        //과목명 팝업
        this.div_btnSearchGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokCdNm = this.divSearch.form.edtSearchGyogwamokNm.value;
        	this.fn_setCallGyogwamokPopup(gyogwamokCdNm);
        };

        // 과목명
        this.fn_setCallGyogwamokPopup = function(strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchGyogwamok";
        		var strUrl 		= "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.divSearch.form.edtSearchGyogwamokCd.set_value(this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.divSearch.form.edtSearchGyogwamokNm.set_value(this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	}
        	else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gyogwamokSearch","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        // 등록부서
        this.divSearch_btnSearchDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.div.form.edtDeptNm.value;
        	this.fn_setCallDeptPopup(deptCdNm);
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
        		this.div.form.edtDeptCd.set_value(this.dsDept.getColumn(0,"DEPT_CD"));
        		this.div.form.edtDeptNm.set_value(this.dsDept.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("GyogwamokDept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        //등록자
        this.divSearch_btnSearchInsrt_onclick = function(obj,e)
        {
        	var edtInsrtNm  = this.div.form.edtInsrtNm.value;
        	this.fn_setCallSabeonPopup(edtInsrtNm);
        };

        this.fn_setCallSabeonPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

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
        		this.gfn_openPopup("InsertAdmin","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }
        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        // 그룹명 엔터
        this.divSearch_edtSearchGroupNm_onkeydown = function(obj,e)
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
            this.divSearch.form.edtSearchGroupNm.addEventHandler("onkeydown",this.divSearch_edtSearchGroupNm_onkeydown,this);
            this.divSearch.form.btnSearchGyogwamok.addEventHandler("onclick",this.div_btnSearchGyogwamok_onclick,this);
            this.divSearch.form.edtSearchGyogwamokNm.addEventHandler("onchanged",this.divSearch_edtSearchGyogwamokNm_onchanged,this);
            this.divSearch.form.edtSearchGyogwamokNm.addEventHandler("onkeydown",this.div_edtSearchGyogwamokNm_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.stc_2.addEventHandler("onclick",this.stc_2_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.div.form.edtDeptNm.addEventHandler("onchanged",this.divSearch_edtSearchDeptNm_onchanged,this);
            this.div.form.edtDeptNm.addEventHandler("onkeydown",this.divSearch_edtSearchDeptNm_onkeydown,this);
            this.div.form.btnSearchDept.addEventHandler("onclick",this.divSearch_btnSearchDept_onclick,this);
            this.div.form.btnSearchInsrt.addEventHandler("onclick",this.divSearch_btnSearchInsrt_onclick,this);
            this.div.form.edtInsrtNm.addEventHandler("onchanged",this.divSearch_edtInsrtNm_onchanged,this);
            this.div.form.edtInsrtNm.addEventHandler("onkeydown",this.divSearch_edtInsrtNm_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UL02_2020202_T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
