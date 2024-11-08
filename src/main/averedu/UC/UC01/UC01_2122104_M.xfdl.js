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
            this.set_titletext("CQI보고서작성");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_GOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_CONT\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_INFO\" type=\"STRING\" size=\"2000\"/><Column id=\"LECTSCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LECTTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/></ColumnInfo>");
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


            obj = new Dataset("dsNCS", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"100\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"SEMESTER\"/><Col id=\"DEPT_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeolHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMokpyo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_EDUGOAL_CD\" type=\"STRING\" size=\"4\"/><Column id=\"DEPT_EDUGOAL_NM\" type=\"STRING\" size=\"400\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAIN_EDUGOAL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MAIN_EDUGOAL_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CORR_DIVCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsBaejeom", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EVALITEM_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALITEM_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EVALITEM_DIVCD_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"POINT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"EVALSUMM\" type=\"STRING\" size=\"500\"/><Column id=\"EVALTIME_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"EVALTIME_DIVCD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakup", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_POINT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikmu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ABOVE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ABOVE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"LESS_RATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCQIResult", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"30\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"3\"/><Column id=\"EVAL_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"EVAL_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"MNG_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"MNG_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"PO_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"PO_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"LECT_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"MIDEVAL_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"MIDEVAL_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_EDU_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"IMPRO_EDU_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_ANAL_RESULT\" type=\"STRING\" size=\"4000\"/><Column id=\"DEEP_EDU_IMPRO_PLAN\" type=\"STRING\" size=\"4000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguiResult", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DORN_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LCTR_CLAS\" type=\"STRING\" size=\"256\"/><Column id=\"LCTR_GUBN_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"LCTR_GUBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LCTR_GUBN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"QESN_GUBN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"QESN_GUBN_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"QESN_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"QESN_GUBN_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"QESN_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"QESN_TEXT\" type=\"STRING\" size=\"2000\"/><Column id=\"AVG_QESN_SCOR\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","105",null,null,"1285","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"77\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"178\"/><Column size=\"106\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"학과\"/><Cell col=\"1\" text=\"주야구분\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"분반\"/><Cell col=\"4\" text=\"과목명\"/><Cell col=\"5\" text=\"교수명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAYNIGHT_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:COMP_GRADE_CD_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:LECTCLASS\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUBJECT_CD_NM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROF_CD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divM","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokCd","1054","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamokNm","1296","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeYeolHakGwa","673","9","256","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeolHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchGwamok","1264","9","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01","928","9","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("9");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","577","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("10");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00","4","9","80","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("11");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","99","9","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("0");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","335","9","60","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("12");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","411","9","130","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonNm","341","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.divM.addChild(obj.name, obj);

            obj = new Button("btnSearchSabeon","309","36","22","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.divM.addChild(obj.name, obj);

            obj = new Edit("edtSearchSawonCd","99","36","200","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-24","36","110","22",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("13");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("14");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("16");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("17");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","89","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","299","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","331","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","402","0","10","37",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","541","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","663","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","929","-1","56","70",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1044","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1254","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","1286","0","10","67",null,null,null,null,null,null,this.divM.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divM.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","80",null,"22","1487",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교과목리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","120","79",null,"24","1397",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tab",null,"104","1255",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("GibonJeongbo",this.tab);
            obj.set_text("교과목 기본정보 및 학과목표");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","36",null,"28","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","36","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("16");
            obj.set_text("과목/명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","11","90",null,"223","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","90","91","223",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("18");
            obj.set_text("교과목표\r\n(학습목표)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboJuya","958","38","82","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new TextArea("txtMokpyo","104","94",null,"214","16",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("13");
            obj.set_maxlength("1333");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","11","163","22",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("19");
            obj.set_text("교과목 기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("20");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","10","28","1210","8",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGwamokCd","104","38","100","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGwamokNm","207","38","150","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","359","36","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("24");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtBunban","452","38","70","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","524","36","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("25");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtHakjeom","617","38","70","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","689","36","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("26");
            obj.set_text("시수(통합)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtSisu","782","38","80","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00","865","36","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("27");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00","1042","36","92","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("28");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboIsu","1136","38",null,"23","17",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsIsu");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63",null,"28","10",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","10","63","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("30");
            obj.set_text("계열/학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01","359","63","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("31");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_01","524","63","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("32");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_01","689","63","91","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("33");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00_00","1042","63","92","28",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("34");
            obj.set_text("활용구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboNCS","1136","65",null,"23","17",null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsNCS");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","452","66","70","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","617","66","70","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGyosuCd","782","65","100","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGyosuNm","885","65","155","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Grid("grdMokpyo","10","350",null,null,"10","10",null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("14");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMokpyo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"173\"/><Column size=\"870\"/><Column size=\"139\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"구분\"/><Cell col=\"1\" text=\"세부목표\"/><Cell col=\"2\" text=\"연관성\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:MAIN_EDUGOAL_YN_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DEPT_EDUGOAL_NM\" editmaxlength=\"400\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:CORR_DIVCD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","324","163","22",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("35");
            obj.set_text("학과목표");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("stRowCnt","102","323","166","24",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("36");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","10","341","1210","8",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("38");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","481","313","100","35",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("39");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","104","65","253","23",null,null,null,null,null,null,this.tab.GibonJeongbo.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.tab.GibonJeongbo.addChild(obj.name, obj);

            obj = new Tabpage("PyeongGa",this.tab);
            obj.set_text("평가개요");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdBaejeom","10","35",null,null,"10","10",null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsBaejeom");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"188\"/><Column size=\"128\"/><Column size=\"797\"/><Column size=\"123\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"구분\"/><Cell col=\"1\" text=\"배점\"/><Cell col=\"2\" text=\"평가개요\"/><Cell col=\"3\" text=\"시기\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALITEM_DIVCD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:POINT\" editmaxlength=\"22\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:EVALSUMM\" editmaxlength=\"500\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:EVALTIME_DIVCD_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","10","163","22",null,null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("1");
            obj.set_text("평가배점 기준");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("stRowCnt","132","9","166","24",null,null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","436",null,"210","10",null,"0",null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","10","27","1210","8",null,null,null,null,null,null,this.tab.PyeongGa.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.PyeongGa.addChild(obj.name, obj);

            obj = new Tabpage("SeongChwi",this.tab);
            obj.set_text("학업, 직무능력 성취도");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","112","22",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("14");
            obj.set_text("학업 성취도");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("16");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","10","447","0",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","10","28","1210","8",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","36",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("19");
            obj.set_text("수강생 평가 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","26","63",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","10","63","108","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("21");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","26","90",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","10","90","108","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("23");
            obj.set_text("빈도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo1","119","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo2","244","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo3","369","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo4","494","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo5","619","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo6","744","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo7","869","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo8","994","91","125","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtBindo9","1119","91",null,"26","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","26","117",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","10","117","108","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("25");
            obj.set_text("평균학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtHakjeom","119","118",null,"26","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","119","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("26");
            obj.set_text("A+");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","244","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("27");
            obj.set_text("A0");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00","369","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("28");
            obj.set_text("B+");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00","494","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("29");
            obj.set_text("B0");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00","619","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("30");
            obj.set_text("C+");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00_00","744","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("31");
            obj.set_text("C0");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00_00_00","869","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("32");
            obj.set_text("D+");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00_00_00_00","994","63","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("33");
            obj.set_text("D0");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00_00_00_00_00","1119","63",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("34");
            obj.set_text("F");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","154","177","22",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("35");
            obj.set_text("직무능력 성취도");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","10","171","1210","8",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","179",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("37");
            obj.set_text("수강생 평가 비율");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01","26","206",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02","10","206","108","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("39");
            obj.set_text("70점 미만");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_01","26","233",null,"28","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","10","233","108","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("41");
            obj.set_text("70점 이상");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01","119","206","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("42");
            obj.set_text("인원");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","481","143","100","35",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("43");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00","119","233","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("44");
            obj.set_text("인원");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtUnderInwon","244","207","437","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_01","681","206","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("45");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtUnderBiyul","806","207",null,"26","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtOverInwon","244","234","437","26",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_01_00","681","233","125","28",null,null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("46");
            obj.set_text("비율");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Edit("edtOverBiyul","806","234",null,"26","10",null,null,null,null,null,this.tab.SeongChwi.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.SeongChwi.addChild(obj.name, obj);

            obj = new Tabpage("GyeolGwa",this.tab);
            obj.set_text("결과관리");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00_01","120","671",null,"64","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","21","10","451",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"21","20","447","0",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","11","185","22",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("15");
            obj.set_text("결과분석 및 개선방안");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","10","28","1210","8",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","120","36",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","11","36","109","115",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("18");
            obj.set_text("중간강의평가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","119","36","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("19");
            obj.set_text("분석결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00","120","93",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","119","93","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("21");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_01","120","150",null,"525","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01","11","150","109","585",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("23");
            obj.set_text("교과목\r\n강의평가\r\n분석결과 및\r\n개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Grid("grdGyeolgwa","123","153",null,"520","23",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGanguiResult");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"91\"/><Column size=\"143\"/><Column size=\"757\"/><Column size=\"64\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"구분\"/><Cell col=\"1\" colspan=\"3\" text=\"결과\"/><Cell row=\"1\" col=\"1\" text=\"문항명\"/><Cell row=\"1\" col=\"2\" text=\"문항내용\"/><Cell row=\"1\" col=\"3\" text=\"금년\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:LCTR_GUBN_NM\" editmaxlength=\"2000\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:QESN_GUBN_NM\" editmaxlength=\"2000\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:QESN_TEXT\" editmaxlength=\"2000\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:AVG_QESN_SCOR\" editmaxlength=\"2000\"/></Band></Format></Formats>");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02","11","734","109","115",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("24");
            obj.set_text("수업운영\r\n(교수학습법,\r\n장비 등)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02_00","11","848","109","115",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("25");
            obj.set_text("학습성과\r\n(성적평가방법,\r\n평가결과)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","481","0","100","35",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("26");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","494","964","100","35",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("27");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","10","991","1210","8",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","8","974","222","22",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("29");
            obj.set_text("비정규 교육과정 적용 및 평가");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02_01","11","998","109","115",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("30");
            obj.set_text("직무능력\r\n성취도가 낮은\r\n수강생\r\n(향상교육\r\n프로그램)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02_00_00","11","1112","109","115",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("31");
            obj.set_text("직무능력\r\n성취도가 높은\r\n수강생\r\n(심화교육\r\n프로그램)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00_00","494","1228","100","35",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("32");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","10","1255","1210","18",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("33");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","8","1238","222","22",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("34");
            obj.set_text("강의개선계획");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_02_01_00","120","1262",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_02_01_00","11","1262","109","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("36");
            obj.set_text("강의개선계획");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJunganBunseok","218","37",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJunganGaesun","218","95",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("1");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","119","676","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("37");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtGyogwamokGaesun","218","678",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("3");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_02","120","734",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01","119","734","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("39");
            obj.set_text("분석결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00","120","791",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_01","119","791","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("41");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtSueopBunseok","218","735",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("4");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtSueopGaesun","218","793",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("5");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_02_00","120","848",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00","119","848","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("43");
            obj.set_text("분석결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00_00","120","905",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_01_00","119","905","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("45");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtHakseubBunseok","218","849",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("6");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtHakseubGaesun","218","907",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("7");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_02_00_00","120","998",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00_00","119","998","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("47");
            obj.set_text("분석결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00_00_00","120","1055",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_01_00_00","119","1055","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("49");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuUnderBunseok","218","999",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("8");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuUnderGaesun","218","1057",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("9");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_02_00_01","120","1112",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_01_00_01","119","1112","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("51");
            obj.set_text("분석결과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00_00_01","120","1169",null,"58","20",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_01_00_01","119","1169","98","58",null,null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("53");
            obj.set_text("개선방안");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuOverBunseok","218","1113",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("10");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtJikmuOverGaesun","218","1171",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("11");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new TextArea("txtGangUiGaesun","123","1264",null,"54","22",null,null,null,null,null,this.tab.GyeolGwa.form);
            obj.set_taborder("12");
            obj.set_maxlength("1333");
            this.tab.GyeolGwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","97","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","1010","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n\r35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","355","163","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("30");
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
            obj.set_description("CQI보고서작성");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divM.form.edtSearchGwamokCd","value","ds_input","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divM.form.edtSearchGwamokNm","value","ds_input","SUBJECT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab.SeongChwi.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab.SeongChwi.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab.SeongChwi.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab.SeongChwi.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab.SeongChwi.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab.SeongChwi.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab.SeongChwi.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab.SeongChwi.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab.SeongChwi.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","tab.SeongChwi.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","tab.SeongChwi.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","tab.SeongChwi.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","tab.SeongChwi.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","tab.SeongChwi.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","tab.SeongChwi.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","tab.SeongChwi.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","tab.SeongChwi.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","tab.SeongChwi.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","tab.SeongChwi.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","tab.SeongChwi.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","tab.SeongChwi.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","tab.SeongChwi.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab.GyeolGwa.form.chk1Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab.GyeolGwa.form.chk1Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab.GyeolGwa.form.chk1Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab.GyeolGwa.form.chk1Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab.GyeolGwa.form.chk1Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab.GyeolGwa.form.chk1Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab.GyeolGwa.form.chk1Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab.GyeolGwa.form.chk1Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab.GyeolGwa.form.chk2Haknyeon00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab.GyeolGwa.form.chk2Haknyeon00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab.GyeolGwa.form.chk2Haknyeon00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab.GyeolGwa.form.chk2Haknyeon01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab.GyeolGwa.form.chk2Haknyeon00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab.GyeolGwa.form.chk2Haknyeon00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab.GyeolGwa.form.chk2Haknyeon00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_00_01","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_00_00_00","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab.GyeolGwa.form.chk2Haknyeon02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab.GyeolGwa.form.chk2Haknyeon00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab.GyeolGwa.form.chk2Haknyeon00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","tab.GyeolGwa.form.chk2Haknyeon00_00_00_00_02","value","dsMaster","SINCHEONG_GANEUNG_HAKNYEON_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","tab.GyeolGwa.form.edtSearchBigyogwaProgramNm00","value","ds_input","BIGYOGWA_PROGRAM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","tab.GyeolGwa.form.edtSearchBigyogwaProgramNm01","value","ds_input","BIGYOGWA_PROGRAM_NM");
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

            obj = new BindItem("item4","divM.form.edtSearchSawonNm","value","ds_input","PROF_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divM.form.edtSearchSawonCd","value","ds_input","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","tab.GibonJeongbo.form.cboJuya","value","dsMaster","DAYNIGHT_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.GibonJeongbo.form.txtMokpyo","value","dsMaster","EDU_GOAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab.GibonJeongbo.form.edtGwamokCd","value","dsMaster","SUBJECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab.GibonJeongbo.form.edtGwamokNm","value","dsMaster","SUBJECT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab.GibonJeongbo.form.edtBunban","value","dsMaster","LECTCLASS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab.GibonJeongbo.form.edtHakjeom","value","dsMaster","LECTSCORE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab.GibonJeongbo.form.edtSisu","value","dsMaster","LECTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab.GibonJeongbo.form.cboIsu","value","dsMaster","COMP_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.GibonJeongbo.form.cboNCS","value","dsMaster","NCS_USE_DIVCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab.GibonJeongbo.form.cboHaknyeon","value","dsMaster","COMP_GRADE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab.GibonJeongbo.form.cboHakgi","value","dsMaster","SEMESTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab.GibonJeongbo.form.edtGyosuCd","value","dsMaster","PROF_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.GibonJeongbo.form.edtGyosuNm","value","dsMaster","PROF_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab.GyeolGwa.form.txtJunganBunseok","value","dsCQIResult","MIDEVAL_ANAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab.GyeolGwa.form.txtJunganGaesun","value","dsCQIResult","MIDEVAL_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab.GyeolGwa.form.txtGyogwamokGaesun","value","dsCQIResult","EVAL_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab.GyeolGwa.form.txtSueopBunseok","value","dsCQIResult","MNG_ANAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab.GyeolGwa.form.txtSueopGaesun","value","dsCQIResult","MNG_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab.GyeolGwa.form.txtHakseubBunseok","value","dsCQIResult","PO_ANAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab.GyeolGwa.form.txtHakseubGaesun","value","dsCQIResult","PO_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab.GyeolGwa.form.txtJikmuUnderBunseok","value","dsCQIResult","IMPRO_EDU_ANAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab.GyeolGwa.form.txtJikmuUnderGaesun","value","dsCQIResult","IMPRO_EDU_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab.GyeolGwa.form.txtJikmuOverBunseok","value","dsCQIResult","DEEP_EDU_ANAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab.GyeolGwa.form.txtJikmuOverGaesun","value","dsCQIResult","DEEP_EDU_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","tab.GyeolGwa.form.txtGangUiGaesun","value","dsCQIResult","LECT_IMPRO_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab.GibonJeongbo.form.edtHakgwa","value","dsMaster","DEPT_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","tab.SeongChwi.form.edtUnderInwon","value","dsJikmu","LESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","tab.SeongChwi.form.edtOverInwon","value","dsJikmu","ABOVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","tab.SeongChwi.form.edtUnderBiyul","value","dsJikmu","LESS_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","tab.SeongChwi.form.edtOverBiyul","value","dsJikmu","ABOVE_RATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsMokpyo");
            this._addPreloadList("data","","dsBaejeom");
            this._addPreloadList("data","","dsHakup");
            this._addPreloadList("data","","dsJikmu");
            this._addPreloadList("data","","dsCQIResult");
            this._addPreloadList("data","","dsGanguiResult");
        };
        
        // User Script
        this.registerScript("UC01_2122104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122104_M.xfdl(CQI보고서작성)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/02/01
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

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi|dsNCS|dsNCS_D|dsLMS|dsLMS_D|dsHaknyeon|dsJuya|dsIsu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00506|00506|00542|00542|00060|00003|00025";                         			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|X|T|X|X|X|X";                                   											// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	strComb     = "TT";
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
        			case "MokpyoRet":
                            this.fn_PostMokpyoRet();
                        break;
        			case "BaejeomRet":
                            this.fn_PostBaejeomRet();
                        break;
        			case "SeongchwiRet":
                            this.fn_PostSeongchwiRet();
                        break;
        			case "ResultRet":
                            this.fn_PostResultRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
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
        		case "gwamok" :
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
        		case "save" :       // 저장
                        this.fn_Save();
                    break;
        		case "tmp1" :        // 평가계획서 출력
                        this.fn_Print();
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122104_M.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
            // 조회조건 셋팅
        	this.ds_dInput.setColumn(0,"YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"YYYY"));
        	this.ds_dInput.setColumn(0,"SEMESTER",this.dsMaster.getColumn(this.dsMaster.rowposition,"SEMESTER"));
        	this.ds_dInput.setColumn(0,"DEPT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DEPT_CD"));
        	this.ds_dInput.setColumn(0,"MAJOR_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"MAJOR_CD"));
        	this.ds_dInput.setColumn(0,"DAYNIGHT_DIVCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"DAYNIGHT_DIVCD"));
        	this.ds_dInput.setColumn(0,"COMP_GRADE_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"COMP_GRADE_CD"));
        	this.ds_dInput.setColumn(0,"SUBJECT_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"SUBJECT_CD"));
        	this.ds_dInput.setColumn(0,"LECTCLASS",this.dsMaster.getColumn(this.dsMaster.rowposition,"LECTCLASS"));
        	this.ds_dInput.setColumn(0,"PROF_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"PROF_CD"));

        	// 상세내용 조회
        	this.fn_MokpyoRet();
        	this.fn_BaejeomRet();
        	this.fn_SeongchwiRet();
        	this.fn_ResultRet();
        };
        /**********************************************************************
        	05-1. 학과목표 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_MokpyoRet = function()
        {
            var strSvc      = "MokpyoRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122104_T01.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsMokpyo=dsMokpyo";
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
        this.fn_PostMokpyoRet = function()
        {
        	this.dsMokpyo.set_rowposition(-1);
        	this.gfn_getRowCount(this.tab.GibonJeongbo.form.stRowCnt,this.dsMokpyo);
        	return false;
        };

        /**********************************************************************
        	05-2. 평가배점 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_BaejeomRet = function()
        {
            var strSvc      = "BaejeomRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122104_T02.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsBaejeom=dsBaejeom";
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
        this.fn_PostBaejeomRet = function()
        {
        	this.dsBaejeom.set_rowposition(-1);
        	this.gfn_getRowCount(this.tab.PyeongGa.form.stRowCnt,this.dsBaejeom);
        	return false;
        };

        /**********************************************************************
        	05-3. 성취도 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SeongchwiRet = function()
        {
            var strSvc      = "SeongchwiRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122104_T03.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsHakup=dsHakup ";
        	    strOutDs   += "dsJikmu=dsJikmu";
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
        this.fn_PostSeongchwiRet = function()
        {
        	this.tab.SeongChwi.form.edtBindo1.set_value(this.dsHakup.getColumn(0, "CNT"));
        	this.tab.SeongChwi.form.edtBindo2.set_value(this.dsHakup.getColumn(1, "CNT"));
        	this.tab.SeongChwi.form.edtBindo3.set_value(this.dsHakup.getColumn(2, "CNT"));
        	this.tab.SeongChwi.form.edtBindo4.set_value(this.dsHakup.getColumn(3, "CNT"));
        	this.tab.SeongChwi.form.edtBindo5.set_value(this.dsHakup.getColumn(4, "CNT"));
        	this.tab.SeongChwi.form.edtBindo6.set_value(this.dsHakup.getColumn(5, "CNT"));
        	this.tab.SeongChwi.form.edtBindo7.set_value(this.dsHakup.getColumn(6, "CNT"));
        	this.tab.SeongChwi.form.edtBindo8.set_value(this.dsHakup.getColumn(7, "CNT"));
        	this.tab.SeongChwi.form.edtBindo9.set_value(this.dsHakup.getColumn(8, "CNT"));
        	this.tab.SeongChwi.form.edtHakjeom.set_value(this.dsHakup.getColumn(0, "AVG_POINT"));

        	return false;
        };

        /**********************************************************************
        	05-4. 결과관리 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ResultRet = function()
        {
            var strSvc      = "ResultRet";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122104_T04.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsCQIResult=dsCQIResult ";
        	    strOutDs   += "dsGanguiResult=dsGanguiResult";
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
        this.fn_PostResultRet = function()
        {
        	if(this.dsCQIResult.rowcount == 0)
        	{
        		this.dsCQIResult.addRow();
        		this.dsCQIResult.setColumn(0, "YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        		this.dsCQIResult.setColumn(0, "SEMESTER", this.dsMaster.getColumn(this.dsMaster.rowposition, "SEMESTER"));
        		this.dsCQIResult.setColumn(0, "DEPT_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD"));
        		this.dsCQIResult.setColumn(0, "MAJOR_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MAJOR_CD"));
        		this.dsCQIResult.setColumn(0, "DAYNIGHT_DIVCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DAYNIGHT_DIVCD"));
        		this.dsCQIResult.setColumn(0, "COMP_GRADE_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "COMP_GRADE_CD"));
        		this.dsCQIResult.setColumn(0, "SUBJECT_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUBJECT_CD"));
        		this.dsCQIResult.setColumn(0, "PROF_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "PROF_CD"));
        		this.dsCQIResult.setColumn(0, "LECTCLASS", this.dsMaster.getColumn(this.dsMaster.rowposition, "LECTCLASS"));

        		// 로우타입을 NORMAL로 변경
        		this.dsCQIResult.set_enableevent(false);
        		this.dsCQIResult.set_updatecontrol(false);
        		this.dsCQIResult.setRowType(0, Dataset.ROWTYPE_NORMAL);
        		this.dsCQIResult.set_updatecontrol(true);
        		this.dsCQIResult.set_enableevent(true);
        	}

        	this.dsGanguiResult.set_rowposition(-1);

        	return false;
        };

        /**********************************************************************
                06. 저장 함수 선언
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
            if(this.dsCQIResult.rowcount > 0)
            {
                for(var i=0;i<this.dsCQIResult.rowcount; i++)
                {
                    if(this.dsCQIResult.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsCQIResult.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsCQIResult))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
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
            var strUrl      = "/prj/UC/UC01/Save_2122104_T04.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
                strInDs    += "dsCQIResult=dsCQIResult:u";
            var strOutDs    = "dsCQIResult=dsCQIResult";
            var strArg      = "";
        	var GBV_MENUID  = objApp.gv_cutPrgId;
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
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.tab_GibonJeongbo_grdMokpyo_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_PyeongGa_grdBaejeom_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.tab_GyeolGwa_grdGyeolgwa_onheaddblclick = function(obj,e)
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

        // CQI보고서 출력
        this.fn_Print = function()
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("강의를 선택해주세요.","저장정보","","question");
        		return false;
        	}
        	var YYYY     		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'YYYY');
        	var SEMESTER 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SEMESTER');
        	var DEPT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DEPT_CD');
        	var MAJOR_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'MAJOR_CD');
        	var DAYNIGHT_DIVCD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'DAYNIGHT_DIVCD');
        	var COMP_GRADE_CD 	= this.dsMaster.getColumn(this.dsMaster.rowposition, 'COMP_GRADE_CD');
        	var SUBJECT_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUBJECT_CD');
        	var LECTCLASS 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'LECTCLASS');
        	var PROF_CD 		= this.dsMaster.getColumn(this.dsMaster.rowposition, 'PROF_CD');

        	var param = { YYYY     			: YYYY
        				, SEMESTER 			: SEMESTER
        				, DEPT_CD 			: DEPT_CD
        				, MAJOR_CD 			: MAJOR_CD
        				, DAYNIGHT_DIVCD 	: DAYNIGHT_DIVCD
        				, COMP_GRADE_CD 	: COMP_GRADE_CD
        				, SUBJECT_CD 		: SUBJECT_CD
        				, LECTCLASS			: LECTCLASS
        				, PROF_CD			: PROF_CD
        				};

        	this.gfn_commonUtils_report('UC01/UC01_2122104_M_01.crf',  param);
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsCQIResult);
        };

        /**********************************************************************
                08. 팝업
        ***********************************************************************/
        // 교과목 팝업
        this.divM_btnSearchGwamok_onclick = function(obj,e)
        {
        	var gwamokCdNm = this.divM.form.edtSearchGwamokCd.value;
        	this.fn_setCallGwamokPopup(gwamokCdNm);
        };

        // 사원 팝업
        this.divM_btnSearchSabeon_onclick = function(obj,e)
        {
        	var sawonCdNm = this.divM.form.edtSearchSawonNm.value;
        	this.fn_setCallSawonPopup(sawonCdNm);
        };

        this.fn_setCallGwamokPopup = function(strSearchValue)
        {
        	var yyyy = this.divM.form.spnSearchYYYY.value;
        	var semester = this.divM.form.cboSearchHakgi.value;
        	var sabeon = this.divM.form.edtSearchSawonCd.value;
        	var hakgwaCdNm = this.divM.form.cboSearchGyeYeolHakGwa.value;

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
        		this.gfn_openPopup( "gwamok","UC01::UC01_2122101_P02.xfdl",oArg,sPopupCallBack,oOption);
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
            this.divM.form.cboSearchGyeYeolHakGwa.addEventHandler("onkeydown",this.divM_cboSearchGyeYeolHakGwa_onkeydown,this);
            this.divM.form.btnSearchGwamok.addEventHandler("onclick",this.divM_btnSearchGwamok_onclick,this);
            this.divM.form.spnSearchYYYY.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.divM.form.cboSearchHakgi.addEventHandler("onkeydown",this.divM_cboSearchHakgi_onkeydown,this);
            this.divM.form.btnSearchSabeon.addEventHandler("onclick",this.divM_btnSearchSabeon_onclick,this);
            this.tab.addEventHandler("onchanged",this.tab_00_onchanged,this);
            this.tab.GibonJeongbo.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.GibonJeongbo.form.txtMokpyo.addEventHandler("onchanged",this.tab_GibonJeongbo_txtMokpyo_onchanged,this);
            this.tab.GibonJeongbo.form.grdMokpyo.addEventHandler("onheaddblclick",this.tab_GibonJeongbo_grdMokpyo_onheaddblclick,this);
            this.tab.PyeongGa.form.grdBaejeom.addEventHandler("onheaddblclick",this.tab_PyeongGa_grdBaejeom_onheaddblclick,this);
            this.tab.GyeolGwa.form.grdGyeolgwa.addEventHandler("onheaddblclick",this.tab_GyeolGwa_grdGyeolgwa_onheaddblclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UC01_2122104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
