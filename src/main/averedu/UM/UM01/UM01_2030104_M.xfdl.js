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
            this.set_titletext("성적등급분포관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANG_INWON\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_1\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_2\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_3\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_4\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_5\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_6\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_7\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_8\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_9\" type=\"STRING\" size=\"256\"/><Column id=\"A_UP\" type=\"STRING\" size=\"256\"/><Column id=\"C_DOWN\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNPO_ERROR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAGAM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsGyogwamok", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDamdang", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","210","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","300","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","420","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","520","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","640","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","730","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","850","9","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","985","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","1110","9","145","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchIsu","1265","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsIsu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","0","39","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDamdangCd","90","39","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDamdang","242","40","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDamdangNm","266","40","154","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","420","39","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGyogwamokCd","520","39","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnGyogwamok","672","40","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtGyogwamokNm","696","40","154","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","846","39","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("성적확정여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMagam","985","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","1105","39","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("등급분포오류여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchError","1265","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","850","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","62","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","210","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","290","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","640","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","720","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","420","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","510","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1105","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00","1255","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","975","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","71","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","230","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","230","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("과목, 교수별 성적 등급분포 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","106",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" text=\"학과/전공\"/><Cell col=\"2\" text=\"주야&#13;&#10;구분\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"과목코드\"/><Cell col=\"5\" text=\"과목명\"/><Cell col=\"6\" text=\"분반\"/><Cell col=\"7\" text=\"이수&#13;&#10;구분\"/><Cell col=\"8\" text=\"과목&#13;&#10;구분\"/><Cell col=\"9\" text=\"성적&#13;&#10;부여\"/><Cell col=\"10\" text=\"평가&#13;&#10;구분\"/><Cell col=\"11\" text=\"교수코드\"/><Cell col=\"12\" text=\"담당교수명\"/><Cell col=\"13\" text=\"수강&#13;&#10;인원\"/><Cell col=\"14\" text=\"A+\"/><Cell col=\"15\" text=\"A0\"/><Cell col=\"16\" text=\"B+\"/><Cell col=\"17\" text=\"B0\"/><Cell col=\"18\" text=\"C+\"/><Cell col=\"19\" text=\"C0\"/><Cell col=\"20\" text=\"D+\"/><Cell col=\"21\" text=\"D0\"/><Cell col=\"22\" text=\"F\"/><Cell col=\"23\" text=\"A이상비율&#13;&#10;%\"/><Cell col=\"24\" text=\"C이하비율&#13;&#10;%\"/><Cell col=\"25\" text=\"성적&#13;&#10;확정\"/><Cell col=\"26\" text=\"분포&#13;&#10;오류\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" textAlign=\"left\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:DAYNIGHT_DIVCD\" displaytype=\"combotext\" combodataset=\"dsGridJuya\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:COMP_GRADE_CD_NM\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:SUBJECT_CD\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:LECTCLASS\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:ISU_GBNM\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:GWAMOK_GBCD\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:SEONGJEOK_BUYEO_GBCD\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"10\" text=\"bind:PYEONGGA_GBCD\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"11\" text=\"bind:PROF_CD\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"12\" text=\"bind:SEONGMYEONG\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"13\" text=\"bind:SUGANG_INWON\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"14\" text=\"bind:GRADE_1\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"15\" text=\"bind:GRADE_2\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:GRADE_3\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"17\" text=\"bind:GRADE_4\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"18\" text=\"bind:GRADE_5\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"19\" text=\"bind:GRADE_6\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"20\" text=\"bind:GRADE_7\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"21\" text=\"bind:GRADE_8\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"22\" text=\"bind:GRADE_9\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"23\" text=\"bind:A_UP\" textAlign=\"right\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"24\" text=\"bind:C_DOWN\" textAlign=\"right\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"25\" text=\"bind:MAGAM_YN\" displaytype=\"combotext\" combodataset=\"dsGridYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/><Cell col=\"26\" text=\"bind:BUNPO_ERROR_YN\" displaytype=\"combotext\" combodataset=\"dsGridYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" cssclass=\"expr:BUNPO_ERROR_YN == &quot;1&quot; ? &quot;font_red&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchIsu","value","ds_input","ISU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtDamdangCd","value","ds_input","DAMDANGGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtDamdangNm","value","ds_input","DAMDANGGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtGyogwamokCd","value","ds_input","GYOGWAMOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtGyogwamokNm","value","ds_input","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboSearchMagam","value","ds_input","MAGAM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboSearchError","value","ds_input","ERROR_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UM01_2030104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UM01_2030104_M.xfdl(성적 우수자 인원 관리(조회))
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/07/18
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
            var strDs    = "dsHakgi|dsIsu|dsYn|dsGridJuya|dsGridYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00025|00051|00003|00051";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            var strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "UM";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0,"HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostGyeyeolInt = function()
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
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
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
        			// 검색조건 계열
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInt();
        			    break;
        			// 검색조건 학과
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
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
        		case "damdang" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(0, "DAMDANGGYOSU_CD", sRtn[0]);
        		            this.ds_input.setColumn(0, "DAMDANGGYOSU_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "gyogwamok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(0, "GYOGWAMOK_CD", sRtn[0]);
        		            this.ds_input.setColumn(0, "GYOGWAMOK_NM", sRtn[1]);
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
        	var nCnt = 0;

        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")))  nCnt++;

            if (nCnt == 0) {
        	    this.gfn_alert("학년도를 입력해 주세요.","조회정보","","information");
        		return false;
        	}

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
            var strUrl      = "/prj/UM/UM01/Retrieve_2030104_MList.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdList, "시트이름","파일이름");

        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
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

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
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

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        this.divSearch_btnDamdang_onclick = function(obj,e)
        {
        	var damdangNm = this.divSearch.form.edtDamdangNm.value;
        	this.fn_setCallDamdangPopup(damdangNm);
        };

        /**
         * 담당교수 검색 팝업
         */
        this.fn_setCallDamdangPopup = function(strSearchValue)
        {
        	this.dsDamdang.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDamdang=dsMaster";
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

        	if(this.dsDamdang.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_CD", this.dsDamdang.getColumn(0,"SABEON"));
        		this.ds_input.setColumn(0, "DAMDANGGYOSU_NM", this.dsDamdang.getColumn(0,"SEONGMYEONG"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("damdang","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.divSearch_btnGyogwamok_onclick = function(obj,e)
        {
        	var gyogwamokNm = this.divSearch.form.edtGyogwamokNm.value;
        	this.fn_setCallGyogwamokPopup(gyogwamokNm);
        };

        /**
         * 교과목 검색 팝업
         */
        this.fn_setCallGyogwamokPopup = function(strSearchValue)
        {
        	this.dsGyogwamok.clearData();

        	this.ds_input1.setColumn(0, "GYOGWAMOK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P03.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyogwamok=dsMaster";
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

        	if(this.dsGyogwamok.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "GYOGWAMOK_CD", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_CD"));
        		this.ds_input.setColumn(0, "GYOGWAMOK_NM", this.dsGyogwamok.getColumn(0,"GYOGWAMOK_NM"));
        	} else
        	{
        		var oArg = {gyogwamokCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("gyogwamok","com::COMM_P03.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        // 엔터 입력
        this.divSearch_onkeydown = function(obj,e)
        {
        	if (obj.name == "spnSearchYYYY")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"YYYY",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchHakgi")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"HAKGI",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchGyeyeol")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_DAEHAK_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchHakgwa")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_HAKGWA_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchJeongong")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"JUGWAN_JEONGONG_CD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchIsu")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"ISU_GBCD",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchMagam")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"MAGAM_YN",obj.value);
        			this.fn_Ret();
        		}
        	}

        	if (obj.name == "cboSearchError")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"ERROR_YN",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "DAMDANGGYOSU_NM") {
        		if (this.gfn_isNull(e.newvalue)) {
        			obj.setColumn(0, "DAMDANGGYOSU_CD", "");
        		} else {
        			if (e.oldvalue != e.newvalue) {
        				this.fn_setCallDamdangPopup(e.newvalue);
        			}
        		}
        	}

            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "GYOGWAMOK_NM") {
        		if (this.gfn_isNull(e.newvalue)) {
        			obj.setColumn(0, "GYOGWAMOK_CD", "");
        		} else {
        			if (e.oldvalue != e.newvalue) {
        				this.fn_setCallGyogwamokPopup(e.newvalue);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchIsu.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.btnDamdang.addEventHandler("onclick",this.divSearch_btnDamdang_onclick,this);
            this.divSearch.form.btnGyogwamok.addEventHandler("onclick",this.divSearch_btnGyogwamok_onclick,this);
            this.divSearch.form.cboSearchMagam.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchError.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UM01_2030104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
