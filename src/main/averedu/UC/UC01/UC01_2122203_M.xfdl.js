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
            this.set_titletext("중간강의평가조회");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_KIND_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"SUBJECT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeolHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAWON_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaesun", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"OBJ_ANSWER\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"10\"/><Column id=\"QUESTION_NUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"THEORY_PRACTICE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"OBJ_SUBJ_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"QUESTION_EVAL_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"QUESTION\" type=\"STRING\" size=\"200\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SCORE_SUM\" type=\"INT\" size=\"256\"/><Column id=\"ATTENDANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInwon", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_ATTENDANCE\" type=\"INT\" size=\"256\"/><Column id=\"ATTENDANCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77",null,null,"1271","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"146\"/><Column size=\"63\"/><Column size=\"56\"/><Column size=\"180\"/><Column size=\"121\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"주야구분\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"교수명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:COMP_GRADE_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROF_CD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","791","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","923","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","510","9","160","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamokMaster","891","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","666","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","417","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","3","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","100","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","204","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","296","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","-1","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","286","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","386","-1","56","33",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","670","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","782","1","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","200","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","881","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","913","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","1123","-1","56","40",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","1154","10","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","1241","5","10","27",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonCd","1251","9","90","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_01","1341","3","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSawon","1351","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1373","3","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonNm","1383","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","500","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("강의리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","97","51",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","37",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdInwon",null,"77","1242","62","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsInwon");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"299\"/><Column size=\"299\"/><Column size=\"299\"/><Column size=\"299\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"수강신청 인원\"/><Cell col=\"1\" text=\"참여 인원\"/><Cell col=\"2\" text=\"미참여 인원\"/><Cell col=\"3\" text=\"참여율(%)\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:TOTAL_ATTENDANCE\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:ATTENDANCE\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" editmaxlength=\"256\" text=\"expr:TOTAL_ATTENDANCE - ATTENDANCE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"expr:Math.round((ATTENDANCE / TOTAL_ATTENDANCE) * 100)\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1620","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_01","369","139","30","490",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","730","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n\r35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","850","138","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMunhang",null,"172","1242","396","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"89\"/><Column size=\"1028\"/><Column size=\"118\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"문항\"/><Cell col=\"2\" text=\"합계\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:QUESTION_NUM\" editmaxlength=\"22\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:QUESTION\" editmaxlength=\"200\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"expr:SCORE_SUM / ATTENDANCE\" editmaxlength=\"256\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총 합계\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;SCORE_SUM / ATTENDANCE&quot;)\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGaesun",null,"602","1242",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsGaesun");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"1176\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"이 강의에서 개선되었으면 하거나, 불만족하는 사항은 무엇입니까?\" textAlign=\"left\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:OBJ_ANSWER\" editmaxlength=\"4000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","850","568","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"52","155","22","1087",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("참여 인원");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00",null,"148","155","22","1087",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("문항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","390","165","980","8",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","390","594","980","8",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00_00",null,"577","155","22","1087",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("개선사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2",null,"147","123","24","1060",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt3",null,"576","123","24","1030",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("중간강의평가조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divM.form.edtSearchGwamokCd","value","ds_input","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divM.form.edtSearchGwamokNm","value","ds_input","SUBJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divM.form.cboSearchGyeYeolHakGwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divM.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divM.form.cboSearchHakgi","value","ds_input","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","grdInwon","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","grdMunhang","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","grdGaesun","enable","dsBindableGrid","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divM.form.edtSearchSawonCd","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divM.form.edtSearchSawonNm","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsGaesun");
        };
        
        // User Script
        this.registerScript("UC01_2122203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122203_M.xfdl(중간강의평가조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/18
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
        	this.fn_UserGbcdInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                         			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   											// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      															// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);


        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strComb     = "T";
        	svcId       = "gyeyeolHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	this.gfn_GyeyeolHakgwaComboLoad(this.divM.form.cboSearchGyeYeolHakGwa, strComb, svcId, strUseYn, strJojikGbcd, objApp.gv_cutPrgId);
        };

        this.fn_UserGbcdInit = function()
        {
        	// 교원일 경우
        	if(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD") == '10')
        	{
        		this.divM.form.edtSearchSawonCd.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        		this.divM.form.edtSearchSawonNm.set_value(objApp.gds_userInfoDb.getColumn(0,"USER_NM"));
        		this.divM.form.edtSearchSawonCd.set_enable(false);
        		this.divM.form.edtSearchSawonNm.set_enable(false);
        		this.divM.form.btnSearchSawon.set_enable(false);
        	}
        }

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"SEMESTER", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostGyeyeolHakgwaInit = function()
        {
        	this.divM.form.cboSearchGyeYeolHakGwa.set_index(0);
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			case "gyeyeolHakgwaInit":
        					this.fn_PostGyeyeolHakgwaInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
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
        		case "gwamokM" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.setColumn(0, "SUBJECT_CD", sRtn[5]);
        					this.ds_input.setColumn(0, "SUBJECT_NM", sRtn[6]);
        				}
        			break;
        		case "sawon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.setColumn(0, "PROF_CD", sRtn[0]);
        					this.ds_input.setColumn(0, "PROF_NM", sRtn[1]);
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122203_M.do";
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
        	this.dsInwon.clearData();
        	this.dsDetail.clearData();
        	this.dsGaesun.clearData();
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        this.grdMaster_oncellclick = function(obj,e)
        {
            // 조회조건 셋팅
        	this.ds_dInput.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        	this.ds_dInput.setColumn(0,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER"));
        	this.ds_dInput.setColumn(0,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD"));
        	this.ds_dInput.setColumn(0,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"PROF_CD"));

        	// 디테일 조회
        	this.fn_DRet();
        };

        /**********************************************************************
        	05-1. 디테일 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
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
            var strUrl      = "/prj/UC/UC01/detailRetrieve_2122203_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs	= "dsInwon=dsInwon ";
        		strOutDs   += "dsDetail=dsDetail ";
        		strOutDs   += "dsGaesun=dsGaesun ";
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
        this.fn_PostDRet = function()
        {
        	for(var i=0; i<this.dsDetail.rowcount; i++)
        	{
        		this.dsDetail.setColumn(i, "ATTENDANCE", this.dsInwon.getColumn(0, "ATTENDANCE"));
        	}
        	this.dsInwon.set_rowposition(-1);
        	this.dsDetail.set_rowposition(-1);
        	this.dsGaesun.set_rowposition(-1);
            this.gfn_getRowCount(this.stRowCnt2,this.dsDetail);
        	this.gfn_getRowCount(this.stRowCnt3,this.dsGaesun);
        };

        /**********************************************************************
                6. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdMunhang_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 엔터키 누르면 조회
        this.divM_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEMESTER",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.divM_cboSearchGyeYeolHakGwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEPT_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 팝업 명 삭제 시 코드 초기화
        // ds_input
        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "SUBJECT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "SUBJECT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallGwamokPopup(e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "PROF_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "PROF_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSawonPopup(e.newvalue);
        			}
        	   }
        	}
        };
        /**********************************************************************
                7. 팝업
        ***********************************************************************/

        // 마스터 교과목 팝업
        this.divM_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divM.form.edtSearchGwamokCd.value;
        	this.fn_setCallGwamokPopup(gwamokCdNm);
        };

        // 사원 팝업
        this.divM_btnSearchSawon_onclick = function(obj,e)
        {
        	var sawonCdNm = this.divM.form.edtSearchSawonNm.value;
        	this.fn_setCallSawonPopup(sawonCdNm);
        };

        this.fn_setCallGwamokPopup = function(strSearchValue)
        {
        	var yyyy = this.divM.form.spnSearchYYYY.value;
        	var semester = this.divM.form.cboSearchHakgi.value;
        	var sabeon = this.divM.form.edtSearchSawonCd.value;
        	this.dsGwamok.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SUBJECT_CD_NM", strSearchValue);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "YYYY", yyyy);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SEMESTER", semester);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON", sabeon);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchGwamok";
        		var strUrl      = "/prj/UC/UC01/Retrieve_2122101_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsGwamok=dsMaster";
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
        		this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_CD", this.dsGwamok.getColumn(0,"SUBJECT_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "SUBJECT_NM", this.dsGwamok.getColumn(0,"SUBJECT_NM"));
        	}
        	else
        	{
        		var oArg = {yyyy:yyyy, semester:semester, sabeon:sabeon, gwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gwamokM","UC01::UC01_2122101_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallSawonPopup = function(strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SAWON_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/UC/UC01/Retrieve_2122101_P03.do";
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
        		this.ds_input.setColumn(this.ds_input.rowposition, "PROF_CD", this.dsSawon.getColumn(0,"USER_ID"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "PROF_NM", this.dsSawon.getColumn(0,"USER_NM"));
        	} else
        	{
        		var oArg = {sawonCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "sawon","UC01::UC01_2122101_P03.xfdl",oArg,sPopupCallBack,oOption);
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
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onlbuttondown",this.divM_cboSearchGyeYeolHakGwa_onlbuttondown,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onitemchanged",this.divM_cboSearchGyeYeolHakGwa_onitemchanged,this);
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.btnSearchGwamokMaster.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.btnSearchSawon.addEventHandler("onclick",this.divM_btnSearchSawon_onclick,this);
            this.grdInwon.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.grdMunhang.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.grdMunhang.addEventHandler("onheaddblclick",this.grdMunhang_onheaddblclick,this);
            this.grdGaesun.addEventHandler("oncellclick",this.grdDetail_oncellclick,this);
            this.grdGaesun.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UC01_2122203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
