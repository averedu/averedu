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
            this.set_titletext("교직사정 학생 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"PYOSIGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_JAGYEOK_NO\" type=\"STRING\" size=\"40\"/><Column id=\"GYOJIK_JAGYEOK_NM\" type=\"STRING\" size=\"56\"/><Column id=\"JOLEOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_inputCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBalgeub", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBalgeubYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIlgwalbalgeub", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10",null,"71","10",null,null,null,null,null,this);
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

            obj = new Static("stc_01_00_01_00","320","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","410","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","530","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","620","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","740","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","830","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","0","39","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","110","39","160","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","740","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
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

            obj = new Static("Static01_02_00_00_00_00_00_00_00","530","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","610","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","320","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","400","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","820","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","273","40","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","214","9","106","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","60","25","27",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnClose","570",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","84","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("교원자격 취득자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","160","88","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","81","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","108",null,"8","0",null,null,null,null,null,this);
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

            obj = new Button("btn_balgeup",null,"88","45","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("발급");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBalgeubDt",null,"88","110","20","58",null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00",null,"88","80","20","171",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("발급일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_jeogyong",null,"88","45","20","234",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBalgeubGb",null,"88","110","20","282",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsBalgeub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00",null,"88","80","20","395",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("발급구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","116",null,null,"10","45",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"245\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"발급구분\"/><Cell col=\"3\" text=\"발급여부\"/><Cell col=\"4\" text=\"졸업년도학기\"/><Cell col=\"5\" text=\"학과/전공\"/><Cell col=\"6\" text=\"자격종별\"/><Cell col=\"7\" text=\"표시과목\"/><Cell col=\"8\" text=\"자격번호\"/><Cell col=\"9\" text=\"학번\"/><Cell col=\"10\" text=\"성명\"/><Cell col=\"11\" text=\"생년월일\"/><Cell col=\"12\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:BALGEUP_GBCD\" combodataset=\"dsBalgeub\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:BALGEUP_YN\" displaytype=\"combotext\" combodataset=\"dsBalgeubYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:YYYY_HAKGI\"/><Cell col=\"5\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:JAGYEOKJONGBYEOL_NM\"/><Cell col=\"7\" text=\"bind:PYOSIGWAMOK_NM\"/><Cell col=\"8\" text=\"bind:GYOJIK_JAGYEOK_NO\"/><Cell col=\"9\" text=\"bind:HAKBEON\" expandsize=\"20\"/><Cell col=\"10\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"11\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"12\" text=\"bind:JEONGJEONG_NAEYONG\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchName","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UP02_2040203_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040203_P01.xfdl
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/25
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "BALGEUP_DT"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "발급일자";

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

        	if (!this.gfn_isNull(this.getOwnerFrame().joleopYyyy)) {
        		this.divSearch.form.spnSearchYYYY.set_value(this.getOwnerFrame().joleopYyyy);
        	}

        	if (!this.gfn_isNull(this.getOwnerFrame().joleopHakgi)) {
        		this.divSearch.form.cboSearchHakgi.set_value(this.getOwnerFrame().joleopHakgi);
        	}
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
            var strDs   = "dsHakgi|dsBalgeub|dsBalgeubYn";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd	= "00022|00113|00042"; 				// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "X|S|N"; 							// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 								// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 콤보 - 계열, 학과, 전공
        	this.fn_GyeyeolCombo();
        	this.fn_HakgwaCombo();
        	this.fn_JeongongCombo();
        };

        this.fn_PostformInit = function() {
        	this.dsHakgi.filter("REF_2 != null"); // 전기, 후기
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
                    default:
                        break;
                }
            }
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
            var strUrl      = "/prj/UP/UP02/Retrieve_2040203_P01List.do";
        	var strInDs 	= this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll" : "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP02/Save_2040203_P01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsIlgwalbalgeub:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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

        this.ds_input_onvaluechanged = function(obj, e) {
        	if (this.divSearch.form.chk_searchAll.value == "1") {
        		this.ds_inputAll.copyData(this.ds_input);
        		this.ds_inputAll.setColumn(0, "JOLEOP_YYYY", "");
        		this.ds_inputAll.setColumn(0, "JOLEOP_HAKGI", "");
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
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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

        /**
          * 조회버튼 클릭
         **/
        this.btnSearch_onclick = function(obj, e) {
        	this.fn_Ret();
        };

        /**
          * 적용버튼 클릭
         **/
        this.btn_jeogyong_onclick = function(obj, e) {
        	var cnt = this.dsMaster.getCaseCount("CHK=='1'");
        	if (cnt < 1) {
        		alert("발급구분을 적용할 학생을 선택하세요.");
        		return;
        	}

        	var balgeupGbcd = this.cboBalgeubGb.value;
        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getColumn(i, "CHK") == "1") {
        			this.dsMaster.setColumn(i, "BALGEUP_GBCD", balgeupGbcd);
        		}
        	}
        };

        /**
          * 발급버튼 클릭
         **/
        this.btn_balgeup_onclick = function(obj, e) {
        	var cnt 			= this.dsMaster.getCaseCount("CHK=='1'");
        	var errHakbeon 		= [];
        	var alreadyHakbeon	= [];
        	var txt 			= "    발급일자: " + this.calBalgeubDt.text
        						+ "\n(으)로 선택된 학생들의 교원자격증을 일괄발급하시겠습니까?";

        	this.dsIlgwalbalgeub.clearData();

        	if (cnt > 0) {
        		for (var i = 0; i < this.dsMaster.rowcount; i++) {
        			if (this.dsMaster.getColumn(i, "CHK") == "1") {
        				if (this.dsMaster.getColumn(i, "BALGEUP_GBCD") == "") {
        					var hakbeon     = this.dsMaster.getColumn(i, 'HAKBEON');
        					var haksaeng_nm = this.dsMaster.getColumn(i, 'HAKSAENG_NM');
        					errHakbeon.push("   " + (i + 1) + "번째 행의 학번: " + hakbeon + ", 성명: " + haksaeng_nm + "\n");
        				}

        				if (this.dsMaster.getColumn(i, "BALGEUP_YN") == "1" && this.dsMaster.getColumn(i, "BALGEUP_GBCD") == "1") {
        					var hakbeon     = this.dsMaster.getColumn(i, 'HAKBEON');
        					var haksaeng_nm	= this.dsMaster.getColumn(i, 'HAKSAENG_NM');
        					alreadyHakbeon.push("   " + (i + 1) + "번째 행의 학번: " + hakbeon + ", 성명: " + haksaeng_nm + "\n");
        				}

        				nRow = this.dsIlgwalbalgeub.insertRow();
        				this.dsIlgwalbalgeub.setColumn(nRow, "JOLEOP_YYYY", 	this.dsMaster.getColumn(i, "JOLEOP_YYYY"));
        				this.dsIlgwalbalgeub.setColumn(nRow, "JOLEOP_HAKGI",	this.dsMaster.getColumn(i, "JOLEOP_HAKGI"));
        				this.dsIlgwalbalgeub.setColumn(nRow, "HAKBEON", 		this.dsMaster.getColumn(i, "HAKBEON"));
        				this.dsIlgwalbalgeub.setColumn(nRow, "BALGEUP_GBCD", 	this.dsMaster.getColumn(i, "BALGEUP_GBCD"));
        				this.dsIlgwalbalgeub.setColumn(nRow, "BALGEUP_DT", 		this.calBalgeubDt.value);
        			}
        		}

        		if (errHakbeon.length > 0) {
        			this.alert(errHakbeon.join("") + "학생(들)의 발급구분을 선택하세요.");
        			return;
        		}

        		if (alreadyHakbeon.length > 0) {
        			this.alert(
        				alreadyHakbeon.join("")
        				+ " 학생(들)은 이미 교원자격증을 발급받았습니다.\n"
        				+ "'최초발급'이 불가합니다. 발급구분을 수정하거나 선택을 해제하세요."
        			);
        			return;
        		}

        		var result = this.gfn_confirm(txt, "발급", "", "question");
        		if(result == 0) {
        			return false;
        		}

        		this.fn_Save();
        	} else {
        		this.alert("선택된 행이 없습니다");
        	}
        };

        /**
          * 닫기버튼 클릭
         **/
        this.btnClose_onclick = function(obj, e) {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn_balgeup.addEventHandler("onclick",this.btn_balgeup_onclick,this);
            this.btn_jeogyong.addEventHandler("onclick",this.btn_jeogyong_onclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.ds_input.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP02_2040203_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
