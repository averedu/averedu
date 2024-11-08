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
            this.set_titletext("사정리스트");
            this.set_color("blue");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_JEONGONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchl", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsil", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNamyeo", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"CODE_NM\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"CODE_NM\">여자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"CODE_NM\">남자</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"CODE_NM\">여자</Col></Row></Rows>");
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


            obj = new Dataset("dsIpsiDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_LV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputIpsiDept", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("재학생");
            obj.set_url("BH02::BH02_4080201_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("신입생");
            obj.set_url("BH02::BH02_4080201_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("편입생");
            obj.set_url("BH02::BH02_4080201_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Div("divSearch1","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","480","36","180","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00","390","36","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("6");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","660","36","110","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("7");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","780","36","230","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_01","660","9","110","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("8");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01","1010","36","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("9");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1100","36","235","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","0","36","50","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("11");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Spin("spnSearchSchlYear","60","9","120","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static00_00","887","9","16","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Calendar("calSearchFrdt","780","9","104","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Calendar("calSearchTodt","906","9","104","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","180","9","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("13");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_01","180","36","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("14");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","270","36","120","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","60","36","120","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("16");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","270","9","120","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","390","9","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("18");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","480","9","120","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","1010","9","80","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("20");
            obj.set_text("인실");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchRoomGb","1100","9","70","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsInsil");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","1170","9","85","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("22");
            obj.set_text("남/여");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchStntSexc","1265","9","70","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNamyeo");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1",null,"9","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","20","32","1570","5",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","59",null,"9","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"74","80","25","3",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("합격취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"74","55","25","86",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("합격");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","180","0","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","260","0","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","390","0","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","470","0","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","660","0","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","770","0","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1010","0","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1090","0","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00_00","1170","0","56","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1255","0","10","32",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch2","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","480","36","180","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsIpsiDept");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_00","390","36","80","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("4");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_01","660","9","110","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("5");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","0","36","50","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("7");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Spin("spnSearchSchlYear","60","9","120","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static00_00","887","9","16","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Calendar("calSearchFrdt","780","9","104","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Calendar("calSearchTodt","906","9","104","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","180","9","80","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("9");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_01","180","36","80","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("10");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","270","36","120","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","60","36","120","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("12");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","270","9","120","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","390","9","80","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("14");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","480","9","120","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","1010","9","80","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("16");
            obj.set_text("인실");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Combo("cboSearchRoomGb","1100","9","70","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsInsil");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","1170","9","85","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("18");
            obj.set_text("남/여");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Combo("cboSearchStntSexc","1265","9","70","22",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNamyeo");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","0","0","27","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("20");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","19","0",null,"9","-1",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("21");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","49","0","10","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","19","31","1570","5",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","13","58",null,"9","-1",null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("24");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01","179","-1","56","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","259","-1","10","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_01","389","-1","56","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_01","469","-1","10","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_01","659","-1","56","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","769","-1","10","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00_01","1009","-1","56","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_01","1089","-1","10","67",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00_00_00","1169","-1","56","32",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1254","-1","10","32",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("사정리스트");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch1.form.spnSearchSchlYear","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch1.form.cboSearchSchlSmst","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch1.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch1.form.calSearchFrdt","value","ds_input","STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch1.form.calSearchTodt","value","ds_input","ENDD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch1.form.cboSearchRoomGb","value","ds_input","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch1.form.cboSearchStntSexc","value","ds_input","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch1.form.edtSearchStntName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch1.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch1.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch1.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch1.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch2.form.spnSearchSchlYear","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch2.form.cboSearchSchlSmst","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch2.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch2.form.calSearchFrdt","value","ds_input","STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch2.form.calSearchTodt","value","ds_input","ENDD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch2.form.cboSearchRoomGb","value","ds_input","ROOM_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch2.form.cboSearchStntSexc","value","ds_input","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch2.form.edtSearchStntName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch2.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch2.form.cboSearchHakgwa","value","ds_input","HAKGWA_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","Tab.TabPage1.form.edtGyojikwonNo00","value","dsMaster1","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Tab.TabPage1.form.edtGyojikwonNo00_00","value","dsMaster1","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Tab.TabPage1.form.edtGyojikwonNo00_01","value","dsMaster1","BLNG_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Tab.TabPage1.form.edtGyojikwonNo00_00_00","value","dsMaster1","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Tab.TabPage1.form.cboJikjong00_00","value","dsMaster1","STNT_SEXC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Tab.TabPage1.form.edtGyojikwonNo00_02","value","dsMaster1","AVRG_MARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Tab.TabPage1.form.edtGyojikwonNo00_00_00_00","value","dsMaster1","TOTL_MARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","BH02::BH02_4080201_T01.xfdl");
            this._addPreloadList("fdl","BH02::BH02_4080201_T02.xfdl");
            this._addPreloadList("fdl","BH02::BH02_4080201_T03.xfdl");
            this._addPreloadList("data","","dsSchl");
            this._addPreloadList("data","","dsDiffSequ");
            this._addPreloadList("data","","dsInsil");
            this._addPreloadList("data","","dsNamyeo");
            this._addPreloadList("data","","dsHaknyeon");
        };
        
        // User Script
        this.registerScript("BH02_4080201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH02_4080201_M.xfdl(업체공통클래스(샘풀) 관리(조회))
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/05
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
        this.lvchkColidDs   = "CLASS_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "설명";
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
            var strDs 	= "dsHakgi|dsInsil|dsHaknyeon";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd = "00022|00744|00060"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "T|T|T"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관 일정
        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", this.Tab.tabindex);
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "1");
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", "");
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");
        	this.fn_RetSchl();

        	// 입시학과 조회
        	this.fn_getHakgwaJeongongCd();

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       	= "dsGyeyeol";
        	strComb     	= "T";
        	svcId       	= "gyeyeolInit";
        	strUseYn    	= "1"; 	// 사용 여부
        	strJojikGbcd 	= "20"; // 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	strDaehakCd		= "";
        	this.gfn_GyeyeolComboLoad(this.divSearch1.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostGetHakgwa = function()
        {
        	var nRow = this.dsIpsiDept.insertRow(0);
        	this.dsIpsiDept.setColumn(nRow, "DEPT_NM", "전체");
        	this.divSearch2.form.cboSearchHakgwa.set_index(0);
        };

        this.fn_PostGyeyeolInit = function()
        {
        	this.divSearch1.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch1.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch1.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
                    case "singleInit":
                            this.fn_PostSingleInt();
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
        			case "GetHakgwa":
        					this.fn_PostGetHakgwa();
        				break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "RetSchl":
                            this.fn_PostRetSchl();
                        break;
                    case "RetDiffSequ":
                            this.fn_PostRetDiffSequ();
                        break;
                    case "Save":
                            this.fn_PostSave();
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 여분버튼1
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

        	this.fn_TabRet();
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {

        };

        /**
         * 기능 : 생활관 일정 조회
         */
        this.fn_RetSchl = function() {
        	var strSvc      = "RetSchl";
            var strUrl      = "/prj/BH/BH_COMMON/GET_SCHL.do";
            var strInDs     = "ds_input=ds_inputSchl";
            var strOutDs    = "dsSchl=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostRetSchl = function()
        {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsSchl.getColumn(0, "SCHL_SMST"));
        	this.ds_input.setColumn(0, "STRT_DATE", this.dsSchl.getColumn(0, "STRT_DATE"));
        	this.ds_input.setColumn(0, "ENDD_DATE", this.dsSchl.getColumn(0, "ENDD_DATE"));

        	// 생활관 일정차수
        	this.fn_RetDiffSequ(this.Tab.tabindex);
        };

        /**
         * 기능 : 생활관일정 차수 조회
         */
        this.fn_RetDiffSequ = function(stntGubn) {
        	this.ds_inputDiffSequ.setColumn(0, "STNT_GUBN", stntGubn);
        	this.ds_inputDiffSequ.setColumn(0, "DATE_CODE", "1");
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_SMST", this.ds_input.getColumn(0, "SCHL_SMST"));

        	var strSvc      = "RetDiffSequ";
            var strUrl      = "/prj/BH/BH_COMMON/GET_DIFF_SEQU.do";
            var strInDs     = "ds_input=ds_inputDiffSequ";
            var strOutDs    = "dsDiffSequ=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostRetDiffSequ = function()
        {
        	this.dsDiffSequ.insertRow(0);
        	this.dsDiffSequ.setColumn(0, "CODE", "");
        	this.dsDiffSequ.setColumn(0, "CODE_NM", "전체");

        	if (this.Tab.tabindex == 0) {
        		this.divSearch1.form.cboSearchDiffSequ.set_index(0);
        	} else {
        		this.divSearch2.form.cboSearchDiffSequ.set_index(0);
        	}

        	this.fn_getTabForm().dsDiffSequ.copyData(this.dsDiffSequ);
        };

        this.fn_TabRet = function() {
        	this.ds_input.setColumn(0, "STNT_GUBN", this.Tab.tabindex);
        	this.fn_getTabForm().fn_Ret(this.ds_input);
        }

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	var schlYear = this.ds_input.getColumn(0, "SCHL_YEAR");
        	var schlSmst = this.ds_input.getColumn(0, "SCHL_SMST");
        	var diffSequ = this.ds_input.getColumn(0, "DIFF_SEQU");

            if (this.gfn_isNull(this.gfn_trim(schlYear))) {
        		this.alert("년도를 선택하세요.");
        		return false;
        	}

            if (this.gfn_isNull(this.gfn_trim(schlSmst))) {
        		alert("학기를 선택하세요.");
        		return false;
        	}

            if (this.gfn_isNull(this.gfn_trim(diffSequ))) {
        		alert("차수를 선택하세요.");
        		return false;
        	}

            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

        	this.fn_getTabForm().fn_New(this.ds_input);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
        	this.fn_getTabForm().fn_Del();
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
        	this.fn_getTabForm().fn_Save();
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
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

        	this.gfn_HakgwaComboLoad(this.divSearch1.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
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

        	this.gfn_JeongongComboLoad(this.divSearch1.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.Tab_onchanged = function(obj,e)
        {
        	if (e.postindex == 0) { // 재학생
        		this.divSearch1.set_visible(true);
        		this.divSearch2.set_visible(false);
        	} else { // 신입생, 편입생
        		this.divSearch1.set_visible(false);
        		this.divSearch2.set_visible(true);
        	}

        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", e.postindex);
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "1");
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", "");
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");

        	//this.fn_RetSchl();
        	this.fn_Ret();
        };

        this.divSearch1_spnSearchSchlYear_canchange = function(obj,e)
        {
        	this.dsSchl.clearData();

        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", this.Tab.tabindex);
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "1");
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", e.postvalue);
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");

        	this.fn_RetSchl();
        };

        this.divSearch2_cboSearchSchlSmst_canitemchange = function(obj,e)
        {
        	this.dsSchl.clearData();

        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", this.Tab.tabindex);
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "1");
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", e.postvalue);

        	this.fn_RetSchl();
        };

        this.fn_getTabForm = function() {
        	var form;
        	if (this.Tab.tabindex == 0) {
        		form = this.Tab.TabPage1.form
        	} else if (this.Tab.tabindex == 1) {
        		form = this.Tab.TabPage2.form
        	} else {
        		form = this.Tab.TabPage3.form
        	}

        	return form;
        }

        this.btnSave_onclick = function(obj,e) {
        	this.fn_getTabForm().fn_Habgyeog();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.fn_getTabForm().fn_Chwiso();
        };

        // 신입 학과/전공 셋팅
        this.fn_getHakgwaJeongongCd = function() {
            var strSvc      = "GetHakgwa";
            var strUrl      = "/prj/BH/BH_COMMON/GET_IPSI_DEPT_CD.do";
            var strInDs     = "ds_input=ds_inputIpsiDept";
            var strOutDs    = "dsIpsiDept=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.divSearch1.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch1.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch1.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch1_spnSearchSchlYear_canchange,this);
            this.divSearch1.form.calSearchFrdt.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.calSearchTodt.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchRoomGb.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch1.form.cboSearchStntSexc.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch2.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch2.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch1_spnSearchSchlYear_canchange,this);
            this.divSearch2.form.calSearchFrdt.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.calSearchTodt.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchSchlSmst.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch2.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchRoomGb.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch2.form.cboSearchStntSexc.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsSchl.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSchl.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsSchl.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsSchl.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDiffSequ.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDiffSequ.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsDiffSequ.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsInsil.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsInsil.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsInsil.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsInsil.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsNamyeo.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNamyeo.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsNamyeo.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsNamyeo.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsHaknyeon.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsHaknyeon.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsHaknyeon.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsHaknyeon.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputIpsiDept.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH02_4080201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
