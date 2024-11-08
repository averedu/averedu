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
            this.set_titletext("공통일정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ILJEONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ILJEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHUGA_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_COLUMN1\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_COLUMN2\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_COLUMN3\" type=\"STRING\" size=\"256\"/><Column id=\"YONGDO_COLUMN4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEopmu", this);
            obj._setContents("<ColumnInfo><Column id=\"EOPMU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EOPMU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"EOPMU_GBCD\">14010102</Col><Col id=\"EOPMU_NM\">학적</Col></Row><Row><Col id=\"EOPMU_GBCD\">14020102</Col><Col id=\"EOPMU_NM\">수업</Col></Row><Row><Col id=\"EOPMU_GBCD\">14030102</Col><Col id=\"EOPMU_NM\">등록</Col></Row><Row><Col id=\"EOPMU_GBCD\">14040102</Col><Col id=\"EOPMU_NM\">장학</Col></Row><Row><Col id=\"EOPMU_GBCD\">14050101</Col><Col id=\"EOPMU_NM\">성적</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06_00","0",null,"1640","28",null,"54",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52","270","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("일정리스트(하단 상세업무/일정 선택)");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","144",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"51\"/><Column size=\"51\"/><Column size=\"147\"/><Column size=\"210\"/><Column size=\"132\"/><Column size=\"153\"/><Column size=\"63\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"학과\"/><Cell col=\"4\" text=\"일정\"/><Cell col=\"5\" text=\"시작일시\"/><Cell col=\"6\" text=\"종료일시\"/><Cell col=\"7\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:YYYY\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"4\" maskeditformat=\"####\" maskedittrimtype=\"both\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_NM\" editmaxlength=\"10\" combodataset=\"dsHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:ILJEONG_NM\"/><Cell col=\"5\" text=\"bind:FR_DTTM\"/><Cell col=\"6\" text=\"bind:TO_DTTM\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","267","51","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","7","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchEopmu","89","9","169","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsEopmu");
            obj.set_codecolumn("EOPMU_GBCD");
            obj.set_datacolumn("EOPMU_NM");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","79","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","296","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","374","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","510","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("기준학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","475","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","577","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","587","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","258","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","364","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1640","28",null,"81",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","274",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","550",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","1140",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwacd","702",null,"200","22",null,"84",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_maxlength("3");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","0",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","152",null,"395","22",null,"57",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","427",null,"120","22",null,"84",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIljeong","1468",null,"168","22",null,"84",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsIljeong");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","656","100","35",null,null,null,null,null,null,this);
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

            obj = new Spin("spnYYYY","152",null,"120","22",null,"84",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","1315",null,"150","28",null,"81",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakgwa","908",null,"22","22",null,"84",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwaNm","937",null,"200","22",null,"84",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","1295",null,"16","22",null,"84",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","550",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("시작일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrdt","702",null,"123","22",null,"57",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00","827",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("시작시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtFrtm","980",null,"117","22",null,"57",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_format("##시##분");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_01","1100",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("종료일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTodt","1252",null,"123","22",null,"57",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00","1377",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("종료시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtTotm","1530",null,"107","22",null,"57",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_type("string");
            obj.set_format("##시##분");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","0",null,"1640","28",null,"27",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("추가내용1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd1","152",null,"673","22",null,"30",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd2","979",null,"658","22",null,"30",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00","827",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("추가내용2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","0",null,"1640","28",null,"0",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_01","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("추가내용3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd3","152",null,"673","22",null,"3",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd4","979",null,"658","22",null,"3",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00_00","827",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("추가내용4");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("공통일정관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","calSearchSincheongSijakDt00_01","value","dsMaster","GOJISEO_PRINT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calSearchSincheongJongryoDt00_01","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchEopmu","value","ds_input","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtHakgwacd","value","dsMaster","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtBigo","value","dsMaster","CHUGA_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboHakgi","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboIljeong","value","dsMaster","ILJEONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","spnYYYY","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","btnHakgwa","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtHakgwaNm","value","dsMaster","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chkUseYn","value","dsMaster","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","calFrdt","value","dsMaster","FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","mdtFrtm","value","dsMaster","FR_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","calTodt","value","dsMaster","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","mdtTotm","value","dsMaster","TO_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtAdd1","value","dsMaster","YONGDO_COLUMN1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtAdd2","value","dsMaster","YONGDO_COLUMN2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtAdd3","value","dsMaster","YONGDO_COLUMN3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtAdd4","value","dsMaster","YONGDO_COLUMN4");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SC06_0010603_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SC06_0010603_M.xfdl(일정 관리(조회))
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/08/24
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
        this.lvchkColidDs   = "DEPT_CD$YYYY$HAKGI$ILJEONG_CD$FR_DT$FR_TM$TO_DT$TO_TM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학과$년도$학기$일정$시작일시$시작시간$종료일시$종료시간";
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
            var strDs    = "dsSearchHakgi|dsHakgi|dsIljeong";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00022|00024";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        this.fn_PostInit = function()
        {
        	// 년도 설정
        	this.ds_input.setColumn(0, "YYYY", objApp.gds_SystemDate.getColumn(0,"YYYY"));

        	// 화면별 업무구분코드 지정
        	var rowpo = this.dsEopmu.findRow("EOPMU_GBCD", objApp.gds_OpenMenu.getColumn(objApp.gds_OpenMenu.rowposition,"MENU_ID"));
        	if(rowpo != -1)
        	{
        		this.divSearch.form.cboSearchEopmu.set_index(rowpo);
        	}
        	else
        	{
        		this.divSearch.form.cboSearchEopmu.set_enable(true);
        		this.divSearch.form.cboSearchEopmu.set_index(0);
        	}
        }

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
                            this.fn_PostInit();
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
        		case "hakgwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_NM", sRtn[1]);
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
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "new" :         // 신규
                        this.fn_New();
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
            var strUrl      = "/prj/SC/SC06/Retrieve_0010603_M.do";
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
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();

        	this.dsMaster.set_enableevent(false);
        	this.dsMaster.setColumn(nRow, "YYYY", objApp.gds_SystemDate.getColumn(0,"YYYY"));
        	this.dsMaster.set_enableevent(true);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/SC/SC06/Delete_0010603_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	// 일시 및 시간 유효성검사
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getRowType(i) != Dataset.ROWTYPE_NORMAL)
        		{
        			if(this.dsMaster.getColumn(i, "FR_DT") > this.dsMaster.getColumn(i, "TO_DT"))
        			{
        				this.gfn_alert("종료일자는 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        				return false;
        			}
        			else if(this.dsMaster.getColumn(i, "FR_DT") == this.dsMaster.getColumn(i, "TO_DT"))
        			{
        				if(this.dsMaster.getColumn(i, "FR_TM") > this.dsMaster.getColumn(i, "TO_TM"))
        				{
        					this.gfn_alert("종료시간은 시작시간보다 이전 시간이 될 수 없습니다.","저장정보","","question");
        					return false;
        				}
        			}
        		}
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
            var strUrl      = "/prj/SC/SC06/Save_0010603_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
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
        	this.alert("저장되었습니다.");
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };

        // 그리드 로우 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var vEnable = false;
        	if (obj.getRowType(obj.rowposition) == 2)
        	{
        		vEnable = true;
        	}
        	this.spnYYYY.set_enable(vEnable);
        	this.cboHakgi.set_enable(vEnable);
        	this.cboIljeong.set_enable(vEnable);
        	this.btnJugwanDeptCd.set_enable(vEnable);
        	this.edtHakgwaNm.set_enable(vEnable);
        };

        // 시작일시 변경시
        this.calFrdt_onchanged = function(obj,e)
        {
        	this.fn_FrDttm();
        };

        // 시작시간 변경시
        this.mdtFrtm_onchanged = function(obj,e)
        {
        	this.fn_FrDttm();
        };

        // 종료일시 변경시
        this.calTodt_onchanged = function(obj,e)
        {
        	this.fn_ToDttm();
        };

        // 종료시간 변경시
        this.mdtTotm_onchanged = function(obj,e)
        {
        	this.fn_ToDttm();
        };

        // 학과 팝업
        this.btnHakgwa_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtHakgwaNm.value;
        	this.fn_setCallDeptPopup(deptCdNm);
        };

        // 학과명 변경시
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.newvalue);
        			}
        	   }
        	}
        };

        /**********************************************************************
                11. 공통함수
        ***********************************************************************/
        // 시작일시와 시작시간을 합치는 함수
        this.fn_FrDttm = function()
        {
        	var dt = this.calFrdt.value;
        	var tm = this.mdtFrtm.value;

        	if (dt != undefined)
        	{
        		dt = dt.substring(0, 4) + '-' + dt.substring(4, 6) + '-' + dt.substring(6, 8);
        	}
        	else
        	{
        		dt = '';
        	}

        	if (tm != undefined)
        	{
        		tm = tm.substring(0, 2) + ':' + tm.substring(2, 4);
        	}
        	else
        	{
        		tm = '';
        	}

        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'FR_DTTM', dt + ' ' + tm);
        };

        // 종료일시와 종료시간을 합치는 함수
        this.fn_ToDttm = function()
        {
        	var dt = this.calTodt.value;
        	var tm = this.mdtTotm.value;

        	if (dt != undefined)
        	{
        		dt = dt.substring(0, 4) + '-' + dt.substring(4, 6) + '-' + dt.substring(6, 8);
        	}
        	else
        	{
        		dt = '';
        	}

        	if (tm != undefined)
        	{
        		tm = tm.substring(0, 2) + ':' + tm.substring(2, 4);
        	}
        	else
        	{
        		tm = '';
        	}

        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'TO_DTTM', dt + ' ' + tm);
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(0, "DEPT_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsMaster";
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
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'20', useYn:'1', deptLv:'3'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hakgwa","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                13. 엔터키 이벤트
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
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchEopmu.addEventHandler("onitemchanged",this.divSearch_cboSearchEopmu_onitemchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_PyeonIpMojip,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.btnHakgwa.addEventHandler("onclick",this.btnHakgwa_onclick,this);
            this.calFrdt.addEventHandler("onchanged",this.calFrdt_onchanged,this);
            this.mdtFrtm.addEventHandler("onchanged",this.mdtFrtm_onchanged,this);
            this.calTodt.addEventHandler("onchanged",this.calTodt_onchanged,this);
            this.mdtTotm.addEventHandler("onchanged",this.mdtTotm_onchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("SC06_0010603_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
