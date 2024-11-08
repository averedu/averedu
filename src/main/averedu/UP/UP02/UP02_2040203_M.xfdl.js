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
            this.set_titletext("교원자격증발급관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"PYOSIGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_JAGYEOK_NO\" type=\"STRING\" size=\"56\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BALGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BALGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBalgeub", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdBalgeub", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyojikHakgwa", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputChk", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"CHOICHO_BALGEUP_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("졸업년도학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","110","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","0","39","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","110","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","230","39","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","320","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","440","39","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","530","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","650","38","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","770","38","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","440","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
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

            obj = new Static("Static01_02_00_00_00","100","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","0","62","1640","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","230","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","310","35","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","520","35","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","318","11","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","214","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","650","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00_00","760","35","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_01","890","39","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("신청구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00_00","890","35","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00_01","995","35","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSincheong","1005","39","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsBalgeub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","71","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("staRowCnt","160","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교원자격증 발급 목록");
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
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"48\"/><Column size=\"85\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"110\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"출력\"/><Cell col=\"3\" text=\"졸업년도학기\"/><Cell col=\"4\" text=\"학과/전공\"/><Cell col=\"5\" text=\"자격종별\"/><Cell col=\"6\" text=\"표시과목\"/><Cell col=\"7\" text=\"학번\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"학년\"/><Cell col=\"10\" text=\"생년월일\"/><Cell col=\"11\" text=\"자격번호\"/><Cell col=\"12\" text=\"취득일자\"/><Cell col=\"13\" text=\"발급일자\"/><Cell col=\"14\" text=\"발급구분\"/><Cell col=\"15\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; || (dataset.getRowType(currow)) == &apos;4&apos; || BALGEUP_GBCD == &apos;1&apos; ? &apos;none&apos; : &apos;buttoncontrol&apos;\" text=\"출력\"/><Cell col=\"3\" text=\"bind:YYYY_HAKGI\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JAGYEOKJONGBYEOL_NM\"/><Cell col=\"6\" text=\"bind:PYOSIGWAMOK_NM\"/><Cell col=\"7\" text=\"bind:HAKBEON\"/><Cell col=\"8\" text=\"bind:HAKSAENG_NM\" edittype=\"expr:dataset.getRowType(currow) == 2 ? &apos;text&apos; : &apos;none&apos;\" expandshow=\"expr:dataset.getRowType(currow) == 2 ? &apos;show&apos; : &apos;hide&apos;\" expandsize=\"20\"/><Cell col=\"9\" text=\"bind:HAKNYEON\"/><Cell col=\"10\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:GYOJIK_JAGYEOK_NO\"/><Cell col=\"12\" text=\"bind:CHWIDEUK_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"calendarcontrol\" edittype=\"date\" text=\"bind:BALGEUP_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" text=\"bind:BALGEUP_GBCD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGrdBalgeub\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"15\" edittype=\"text\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.chk_searchAll","value","ds_input","ALL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchName","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchSincheong","value","ds_input","CHWIDEUK_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UP02_2040203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040203_M.xfdl(교원자격증발급관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/24
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 교원자격증발급관리
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "HAKBEON$BALGEUP_DT$BALGEUP_GBCD"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$발급일자$발급구분";

        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
            var strDs   = "dsHakgi|dsBalgeub|dsGrdBalgeub";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd	= "00022|00113|00113";              // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "T|T|S"; 							// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 								// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "00009";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

        	// 콤보
        	this.fn_GyeyeolCombo();
        	this.fn_HakgwaCombo();
        	this.fn_JeongongCombo();
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.divSearch.form.spnSearchYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.divSearch.form.cboSearchHakgi.set_value(this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        this.fn_PostformInit = function() {
        	this.dsHakgi.setColumn(0, "REF_2", "전체");
        	this.dsHakgi.filter("REF_2 != null");
        	this.divSearch.form.cboSearchHakgi.set_index(0);
        }

        this.fn_PostGyeyeolInt = function() {
        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);
        };

        this.fn_PostHakgwaInit = function() {
        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        };

        this.fn_PostJeongongInit = function() {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);

            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
        				this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
                    case "Ret":
        				this.fn_PostRet();
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
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			// 검색조건 계열
        			case "GyeyeolCombo":
        			        this.fn_PostGyeyeolInt();
        			    break;
        			// 검색조건 학과
        			case "HakgwaCombo":
        				this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "JeongongCombo":
        				this.fn_PostJeongongInit();
        			    break;
        			case "ChkCnt":
        				this.fn_PostChkCnt();
        				break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "gyojikhakgwahaksaeng":
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				var rowPosition = this.dsMaster.rowposition;
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(rowPosition, "JOLEOP_YYYY", 		sRtn[0]);
        				this.dsMaster.setColumn(rowPosition, "JOLEOP_HAKGI", 		sRtn[1]);
        				this.dsMaster.setColumn(rowPosition, "YYYY_HAKGI", 			sRtn[2]);
        				this.dsMaster.setColumn(rowPosition, "HAKBEON", 			sRtn[3]);
        				this.dsMaster.setColumn(rowPosition, "HAKSAENG_NM", 		sRtn[4]);
        				this.dsMaster.setColumn(rowPosition, "HAKNYEON", 			sRtn[5]);
        				this.dsMaster.setColumn(rowPosition, "BIRTHDAY", 			sRtn[6]);
        				this.dsMaster.setColumn(rowPosition, "HAKGWA_CD", 			sRtn[8]);
        				this.dsMaster.setColumn(rowPosition, "HAKGWA_NM", 			sRtn[9]);
        				this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_CD",	sRtn[10]);
        				this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_NM", sRtn[11]);
        				this.dsMaster.setColumn(rowPosition, "PYOSIGWAMOK_CD", 		sRtn[12]);
        				this.dsMaster.setColumn(rowPosition, "PYOSIGWAMOK_NM", 		sRtn[13]);
        				this.dsMaster.setColumn(rowPosition, "CHWIDEUK_DT", 		sRtn[16]);
        				this.dsMaster.setColumn(rowPosition, "GYOJIK_JAGYEOK_NO", 	sRtn[18]);
        				this.dsMaster.setColumn(rowPosition, "BIGO", 				sRtn[21]);
        				this.dsMaster.set_enableevent(true);
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
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 	// 조회
        			this.fn_Ret();
                    break;
                case "new" :	// 신규
        			this.fn_New();
                    break;
                case "del" : 	// 삭제
        			this.fn_Del();
                    break;
                case "save" : 	// 저장
        			this.fn_Save();
                    break;
                case "tmp1" : 	// 일괄발급
        			 this.fn_Balgeub();
                    break;
                case "tmp2" : 	// 팁
        			 this.fn_Tip();
                    break;
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function() {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if(!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040203_MList.do";
        	var strInDs 	= this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll" : "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function() {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function() {
            if(!this.fn_PreNew()) {
                return false;
            }

            var nRow = this.dsMaster.addRow();
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function() {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if(result == 0) {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i = this.dsMaster.rowcount - 1; i > -1; i--) {
                if(this.dsMaster.getColumn(i, "CHK") == "1" || this.dsMaster.getRowType(i) == 2) {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function() {
            if(!this.fn_PreDel()) {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UP/UP02/Delete_2040203_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if(this.dsMaster.rowcount > 0) {
                for(var i = 0; i < this.dsMaster.rowcount; i++) {
                    if(this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
            if (result[0] != "success") {
                this.gfn_alert(result[0], "저장정보", "", "question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm("저장 하시겠습니까?", "저장", "", "question");
             if(result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if(!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP02/Save_2040203_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         * 기능 : 교직사정 호출
         */
        this.fn_callGyojiksajeongPopup = function()
        {
        	var joleopYyyy 	= this.ds_input.getColumn(0, "JOLEOP_YYYY");
        	var joleopHakgi = this.ds_input.getColumn(0, "JOLEOP_HAKGI");

        	var oArg 			= {joleopYyyy: joleopYyyy, joleopHakgi: joleopHakgi};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("Gyojiksajeong", "UP02::UP02_2040202_P01.xfdl", oArg, sPopupCallBack, oOption);
        }

        this.fn_callJagyeogPopup = function() {
        	var joleopYyyy 	= this.ds_input.getColumn(0, "JOLEOP_YYYY");
        	var joleopHakgi = this.ds_input.getColumn(0, "JOLEOP_HAKGI");

        	var oArg 			= {joleopYyyy: joleopYyyy, joleopHakgi: joleopHakgi};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("Jagyeog", "UP02::UP02_2040202_P03.xfdl", oArg, sPopupCallBack, oOption);
        }

        /**
         *      기능 : 학과검색팝업 호출
         */
        this.fn_setCallHaksaengPopup = function(strSearchValue) {
        	this.dsGyojikHakgwa.clearData();
        	this.ds_input1.setColumn(0, "HAKBEON_NM", strSearchValue);

        	if (!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "Haksaeng";
        		var strUrl      = "/prj/com/Retrieve_P15.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsGyojikHakgwa=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if (this.dsGyojikHakgwa.rowcount == 1) {
        		var rowPosition = this.dsMaster.rowposition;
        		this.dsMaster.setColumn(rowPosition, "JOLEOP_YYYY", 		this.dsGyojikHakgwa.getColumn(0, "JOLEOP_YYYY"));
        		this.dsMaster.setColumn(rowPosition, "JOLEOP_HAKGI", 		this.dsGyojikHakgwa.getColumn(0, "JOLEOP_HAKGI"));
        		this.dsMaster.setColumn(rowPosition, "YYYY_HAKGI", 			this.dsGyojikHakgwa.getColumn(0, "YYYY_HAKGI"));
        		this.dsMaster.setColumn(rowPosition, "HAKBEON", 			this.dsGyojikHakgwa.getColumn(0, "HAKBEON"));
        		this.dsMaster.setColumn(rowPosition, "HAKSAENG_NM", 		this.dsGyojikHakgwa.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(rowPosition, "HAKNYEON", 			this.dsGyojikHakgwa.getColumn(0, "HAKNYEON"));
        		this.dsMaster.setColumn(rowPosition, "BIRTHDAY", 			this.dsGyojikHakgwa.getColumn(0, "BIRTHDAY"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_CD", 			this.dsGyojikHakgwa.getColumn(0, "HAKGWA_CD"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_NM", 			this.dsGyojikHakgwa.getColumn(0, "HAKGWA_NM"));
        		this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_CD",	this.dsGyojikHakgwa.getColumn(0, "JAGYEOKJONGBYEOL_CD"));
        		this.dsMaster.setColumn(rowPosition, "JAGYEOKJONGBYEOL_NM", this.dsGyojikHakgwa.getColumn(0, "JAGYEOKJONGBYEOL_NM"));
        		this.dsMaster.setColumn(rowPosition, "PYOSIGWAMOK_CD", 		this.dsGyojikHakgwa.getColumn(0, "PYOSIGWAMOK_CD"));
        		this.dsMaster.setColumn(rowPosition, "PYOSIGWAMOK_NM", 		this.dsGyojikHakgwa.getColumn(0, "PYOSIGWAMOK_NM"));
        		this.dsMaster.setColumn(rowPosition, "CHWIDEUK_DT", 		this.dsGyojikHakgwa.getColumn(0, "CHWIDEUK_DT"));
        		this.dsMaster.setColumn(rowPosition, "GYOJIK_JAGYEOK_NO", 	this.dsGyojikHakgwa.getColumn(0, "GYOJIK_JAGYEOK_NO"));
        		this.dsMaster.setColumn(rowPosition, "BIGO", 				this.dsGyojikHakgwa.getColumn(0, "BIGO"));
        	} else {
        		var oArg 			= {hakbeonNm: strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("gyojikhakgwahaksaeng", "com::COMM_P15.xfdl", oArg, sPopupCallBack, oOption);
        	}
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
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
        };

        this.ds_input_onvaluechanged = function(obj, e) {
        	if (this.divSearch.form.chk_searchAll.value == "1") {
        		this.ds_inputAll.copyData(this.ds_input);
        		this.ds_inputAll.setColumn(0, "JOLEOP_YYYY", 	"");
        		this.ds_inputAll.setColumn(0, "JOLEOP_HAKGI", 	"");
        	}
        };

        this.divSearch_chk_searchAll_onchanged = function(obj, e) {
        	var enableBool = (e.postvalue == "1" ? false : true);
        	this.divSearch.form.spnSearchYYYY.set_enable(enableBool);
        	this.divSearch.form.cboSearchHakgi.set_enable(enableBool);
        };

        /**
         * 기능 : 교직계열콤보 조회
         */
        this.fn_GyeyeolCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "GyeyeolCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_gyeyeolCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsGyeyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직학과콤보 조회
         */
        this.fn_HakgwaCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "HakgwaCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_hakgwaCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsHakgwa=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 교직전공콤보 조회
         */
        this.fn_JeongongCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"A");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"1");

            var strSvc      = "JeongongCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jeongongCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsJeongong=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsHakgwa.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, e);
        };

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsJeongong.filter("UP_DEPT_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        this.grdMaster_onexpandup = function(obj, e) {
        	if (e.cell == 8) {
        		var name = this.dsMaster.getColumn(e.row, "HAKBEON_NM");
        		this.fn_setCallHaksaengPopup(name);
        	}
        };

        this.dsMaster_cancolumnchange = function(obj, e) {
        	if (e.columnid == "BALGEUP_GBCD") {
        		if (this.gfn_isNull(obj.getColumn(e.row, "HAKBEON"))) {
        			alert("발급할 학생 정보를 먼저 입력하세요.");
        			this.grdMaster.setCellPos(8);
        			return;
        		}

        		this.fn_choichoYnCheck(obj, e);
        	}
        };

        // 최초발급 데이터 유무 체크
        this.fn_choichoYnCheck = function() {
        	this.ds_inputChk.setColumn(0, "HAKBEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));
            var strSvc      = "ChkCnt";
            var strUrl      = "/prj/UP/UP02/Count_2040203_MList.do";
        	var strInDs 	= "ds_input=ds_inputChk";
            var strOutDs    = "dsCount=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_PostChkCnt = function(obj, e) {
        	var cnt = this.dsCount.getColumn(0, "CHOICHO_BALGEUP_CNT");
        	if (cnt == 0 && obj.getRowType(obj.rowposition) == "2" && e.newvalue != "" && e.newvalue != "1") {
        		// 신규 입력시 최초발급 내역 없을 경우 최초 발급 먼저 하도록 alert
        		this.alert("해당 학생은 '최초발급' 내역이 없습니다. '최초발급'을 선택하세요.");
        		// 그리드 콤보 빈칸으로 보여서 그리드포커스를 줌(임시처리함, 다른 방법이 있으면 처리 좀...)
        		this.grdMaster.setCellPos(13);
        		this.grdMaster.setCellPos(14);
        		return false;
        	}

        	if (cnt == 1 && e.oldvalue == '1' && (obj.getRowType(obj.rowposition) == '1' || obj.getRowType(obj.rowposition) == '4')) {
        		// 최초발급 데이터 수정시 발급 구분 수정 못하도록 alert
        		this.alert("'최초발급' 내역은 수정할 수 없습니다.");
        		// 그리드 콤보 빈칸으로 보여서 그리드포커스를 줌
        		this.grdMaster.setCellPos(13);
        		this.grdMaster.setCellPos(14);
        		return false;
        	} else if (cnt == 1 && e.newvalue == '1' && obj.getRowType(obj.rowposition) == '2') {
        		// 신규 입력시 해당학생의 최초발급 내역이 있을 경우 입력 제한 alert
        		this.alert("해당 학생은 '최초발급' 내역이 존재합니다. 다른 발급구분을 선택하세요.");
        		// 그리드 콤보 빈칸으로 보여서 그리드포커스를 줌
        		this.grdMaster.setCellPos(13);
        		this.grdMaster.setCellPos(14);
        		return false;
        	}
        }

        this.grdMaster_oncellclick = function(obj, e) {
        	if (e.cell == 2) {
        		if (obj.getCellValue(obj.currentrow, 14) == "1") return; // 발급구분이 '최초발급'일 경우 아무것도 하지 않음

        		var rowType = this.dsMaster.getRowType(this.dsMaster.rowposition);
        		if (rowType == 2 || rowType == 4) {
        			this.alert(" 신규 또는 수정 중인 행입니다. \n저장 후 출력하세요.");
        			return;
        		}

        		this.fn_print(obj.getCellValue(obj.currentrow, 7));
        	}
        };

        // 그리드의 출력
        this.fn_print = function(hakbeon) {
        	this.alert("준비중입니다.");
        }

        // 일괄발급
        this.fn_Balgeub = function() {
        	var joleopYyyy 		= this.dsBaseYyyyHakgi.getColumn(0, "YYYY");
        	var joleopHakgi 	= this.dsBaseYyyyHakgi.getColumn(0, "HAKGI");
        	var oArg 			= {joleopYyyy:joleopYyyy, joleopHakgi:joleopHakgi};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("Balgeub", "UP02::UP02_2040203_P01.xfdl", oArg, sPopupCallBack, oOption);
        }

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchSincheong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.ds_input.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputJagyeokjongbyeol.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP02_2040203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
