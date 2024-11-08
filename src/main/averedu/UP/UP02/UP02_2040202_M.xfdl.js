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
            this.set_titletext("교직사정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_JAGYEOK_NO\" type=\"STRING\" size=\"40\"/><Column id=\"GYOJIK_JAGYEOK_NO2\" type=\"STRING\" size=\"56\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JO\" type=\"STRING\" size=\"10\"/><Column id=\"HANG\" type=\"STRING\" size=\"10\"/><Column id=\"HO\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONGONG_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GIBON_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"GIBON_CNT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GIBON_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GIBON_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOGWA_GYUYUK_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOGWA_GYUYUK_CNT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOGWA_GYOYUK_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOGWA_GYOYUK_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_IRON_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_IRON_CNT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_IRON_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_IRON_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_SOYANG_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_SOYANG_CNT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_SOYANG_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_SOYANG_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_SILSEUP_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_SILSEUP_CNT_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_SILSEUP_HAKJEOM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_SILSEUP_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOMSU_AVG\" type=\"STRING\" size=\"7\"/><Column id=\"PYEONGJEOM_AVG\" type=\"STRING\" size=\"5\"/><Column id=\"CHONG_GIJUN_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DAESANG_GBNM\" type=\"STRING\" size=\"601\"/><Column id=\"GYOJIK_ISU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONCHE_AVG\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONCHE_AVG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEONGONG_AVG\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_AVG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_AVG\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOJIK_AVG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKSEONG_INSEONG_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"JEOKSEONG_INSEONG_CNT_YN\" type=\"STRING\" size=\"9\"/><Column id=\"EUNGGEUP_SIMPYE_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"EUNGGEUP_SIMPYE_CNT_YN\" type=\"STRING\" size=\"9\"/><Column id=\"JAGYEOK_YN\" type=\"STRING\" size=\"9\"/><Column id=\"GYOYUKSILSEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALGEUP_YN\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("stc_01_00_01_00","365","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","480","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","600","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","690","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","810","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","900","9","120","22",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Edit("edtSearchName","110","39","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","810","0","56","35",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00_00_00_00_00_00","600","0","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","680","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","365","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","470","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","890","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","318","10","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","365","39","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("포기여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoPogi","480","39","170","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_rdoPogi_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoPogi_innerdataset", obj);
            divSearch_form_rdoPogi_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">포기</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미포기</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoPogi_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","214","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
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

            obj = new Static("staRowCnt","160","77","500","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건 (취득 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건 / 미취득 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건)]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","160","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교직 사정대상자 목록");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"20\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"3\" text=\"No\"/><Cell col=\"2\" rowspan=\"3\" text=\"졸업년도학기\"/><Cell col=\"3\" rowspan=\"3\" text=\"학과/전공\"/><Cell col=\"4\" rowspan=\"3\" text=\"자격종별\"/><Cell col=\"5\" rowspan=\"3\" text=\"표시과목\"/><Cell col=\"6\" rowspan=\"3\" text=\"학번\"/><Cell col=\"7\" rowspan=\"3\" text=\"성명\"/><Cell col=\"8\" rowspan=\"3\" text=\"학년\"/><Cell col=\"9\" rowspan=\"3\" text=\"생년월일\"/><Cell col=\"10\" rowspan=\"3\" text=\"자격번호\"/><Cell col=\"11\" rowspan=\"3\" text=\"발급&#13;&#10;여부\"/><Cell col=\"12\" rowspan=\"3\" text=\"신청일자\"/><Cell col=\"13\" rowspan=\"3\" text=\"취득일자\"/><Cell col=\"14\" rowspan=\"3\" text=\"취득여부\"/><Cell col=\"15\" rowspan=\"3\" text=\"조\"/><Cell col=\"16\" rowspan=\"3\" text=\"항\"/><Cell col=\"17\" rowspan=\"3\" text=\"호\"/><Cell col=\"18\" rowspan=\"3\" text=\"법정해당 자격기준\"/><Cell col=\"19\" rowspan=\"3\" text=\"입학년도\"/><Cell col=\"20\" colspan=\"10\" text=\"전공 (이수점수 / 기준점수)\"/><Cell col=\"30\" colspan=\"14\" text=\"교직 (이수점수 / 기준점수)\"/><Cell col=\"44\" colspan=\"6\" text=\"전체 성적 (이수점수 / 기준점수)\"/><Cell col=\"50\" colspan=\"3\" text=\"기타 점수\"/><Cell col=\"53\" rowspan=\"3\" text=\"총점평균\"/><Cell col=\"54\" rowspan=\"3\" text=\"평점평균\"/><Cell col=\"55\" rowspan=\"3\" text=\"졸업학점\"/><Cell col=\"56\" rowspan=\"3\" text=\"이수학점\"/><Cell row=\"1\" col=\"20\" rowspan=\"2\" colspan=\"2\" text=\"전공학점\"/><Cell row=\"1\" col=\"22\" colspan=\"4\" text=\"기본이수\"/><Cell row=\"1\" col=\"26\" colspan=\"4\" text=\"교과교육\"/><Cell row=\"1\" col=\"30\" rowspan=\"2\" colspan=\"2\" text=\"교직학점\"/><Cell row=\"1\" col=\"32\" colspan=\"4\" text=\"교직이론\"/><Cell row=\"1\" col=\"36\" colspan=\"4\" text=\"교직소양\"/><Cell row=\"1\" col=\"40\" colspan=\"4\" text=\"교직실습\"/><Cell row=\"1\" col=\"44\" rowspan=\"2\" colspan=\"2\" text=\"졸업점수\"/><Cell row=\"1\" col=\"46\" rowspan=\"2\" colspan=\"2\" text=\"전공점수\"/><Cell row=\"1\" col=\"48\" rowspan=\"2\" colspan=\"2\" text=\"교직점수\"/><Cell row=\"1\" col=\"50\" rowspan=\"2\" text=\"인적성&#13;&#10;검사\"/><Cell row=\"1\" col=\"51\" rowspan=\"2\" text=\"응급처치&#13;&#10;및&#13;&#10;심폐소생술\"/><Cell row=\"1\" col=\"52\" rowspan=\"2\" text=\"자격증\"/><Cell row=\"2\" col=\"22\" colspan=\"2\" text=\"과목수\"/><Cell row=\"2\" col=\"24\" colspan=\"2\" text=\"학점\"/><Cell row=\"2\" col=\"26\" colspan=\"2\" text=\"과목수\"/><Cell row=\"2\" col=\"28\" colspan=\"2\" text=\"학점\"/><Cell row=\"2\" col=\"32\" colspan=\"2\" text=\"과목수\"/><Cell row=\"2\" col=\"34\" colspan=\"2\" text=\"학점\"/><Cell row=\"2\" col=\"36\" colspan=\"2\" text=\"과목수\"/><Cell row=\"2\" col=\"38\" colspan=\"2\" text=\"학점\"/><Cell row=\"2\" col=\"40\" colspan=\"2\" text=\"과목수\"/><Cell row=\"2\" col=\"42\" colspan=\"2\" text=\"학점\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:JOLEOP_YYYY_HAKGI\"/><Cell col=\"3\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JAGYEOKJONGBYEOL_CD\" displaytype=\"combotext\" combodataset=\"dsJagyeokjongbyeol\" combodatacol=\"JAGYEOKJONGBYEOL_NM2\" combocodecol=\"JAGYEOKJONGBYEOL_CD\"/><Cell col=\"5\" text=\"bind:PYOSIGWAMOK_NM\"/><Cell col=\"6\" text=\"bind:HAKBEON\"/><Cell col=\"7\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"8\" text=\"bind:HAKNYEON\"/><Cell col=\"9\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:GYOJIK_JAGYEOK_NO2\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" text=\"bind:BALGEUP_YN\"/><Cell col=\"12\" displaytype=\"date\" text=\"bind:SINCHEONG_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" displaytype=\"date\" text=\"bind:CHWIDEUK_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" text=\"bind:CHWIDEUK_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"15\" text=\"bind:JO\"/><Cell col=\"16\" text=\"bind:HANG\"/><Cell col=\"17\" text=\"bind:HO\"/><Cell col=\"18\" text=\"bind:DAESANG_GBNM\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:IPHAK_YYYY\"/><Cell col=\"20\" text=\"bind:JEONGONG_HAKJEOM\"/><Cell col=\"21\" text=\"bind:JEONGONG_HAKJEOM_YN\"/><Cell col=\"22\" text=\"bind:GIBON_CNT\"/><Cell col=\"23\" text=\"bind:GIBON_CNT_YN\"/><Cell col=\"24\" text=\"bind:GIBON_HAKJEOM\"/><Cell col=\"25\" text=\"bind:GIBON_HAKJEOM_YN\"/><Cell col=\"26\" text=\"bind:GYOGWA_GYUYUK_CNT\"/><Cell col=\"27\" text=\"bind:GYOGWA_GYUYUK_CNT_YN\"/><Cell col=\"28\" text=\"bind:GYOGWA_GYOYUK_HAKJEOM\"/><Cell col=\"29\" text=\"bind:GYOGWA_GYOYUK_HAKJEOM_YN\"/><Cell col=\"30\" text=\"bind:GYOJIK_HAKJEOM\"/><Cell col=\"31\" text=\"bind:GYOJIK_HAKJEOM_YN\"/><Cell col=\"32\" text=\"bind:GYOJIK_IRON_CNT\"/><Cell col=\"33\" text=\"bind:GYOJIK_IRON_CNT_YN\"/><Cell col=\"34\" text=\"bind:GYOJIK_IRON_HAKJEOM\"/><Cell col=\"35\" text=\"bind:GYOJIK_IRON_HAKJEOM_YN\"/><Cell col=\"36\" text=\"bind:GYOJIK_SOYANG_CNT\"/><Cell col=\"37\" text=\"bind:GYOJIK_SOYANG_CNT_YN\"/><Cell col=\"38\" text=\"bind:GYOJIK_SOYANG_HAKJEOM\"/><Cell col=\"39\" text=\"bind:GYOJIK_SOYANG_HAKJEOM_YN\"/><Cell col=\"40\" text=\"bind:GYOJIK_SILSEUP_CNT\"/><Cell col=\"41\" text=\"bind:GYOJIK_SILSEUP_CNT_YN\"/><Cell col=\"42\" text=\"bind:GYOJIK_SILSEUP_HAKJEOM\"/><Cell col=\"43\" text=\"bind:GYOJIK_SILSEUP_HAKJEOM_YN\"/><Cell col=\"44\" text=\"bind:JEONCHE_AVG\"/><Cell col=\"45\" text=\"bind:JEONCHE_AVG_YN\"/><Cell col=\"46\" text=\"bind:JEONGONG_AVG\"/><Cell col=\"47\" text=\"bind:JEONGONG_AVG_YN\"/><Cell col=\"48\" text=\"bind:GYOJIK_AVG\"/><Cell col=\"49\" text=\"bind:GYOJIK_AVG_YN\"/><Cell col=\"50\" text=\"bind:JEOKSEONG_INSEONG_CNT_YN\"/><Cell col=\"51\" text=\"bind:EUNGGEUP_SIMPYE_CNT_YN\"/><Cell col=\"52\" text=\"bind:JAGYEOK_YN\"/><Cell col=\"53\" text=\"bind:JEOMSU_AVG\"/><Cell col=\"54\" text=\"bind:PYEONGJEOM_AVG\"/><Cell col=\"55\" text=\"bind:CHONG_GIJUN_HAKJEOM\"/><Cell col=\"56\" text=\"bind:CHWIDEUK_HAKJEOM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDaejang",null,"78","90","22","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("교직사정대장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJagyeog",null,"78","90","22","93",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("자격번호생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnGyojikSajung",null,"78","90","22","186",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("교직사정처리");
            obj.set_cssclass("btn_WF_Crud");
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

            obj = new BindItem("item6","divSearch.form.rdoPogi","value","ds_input","CHWIDEUK_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UP02_2040202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040202_M.xfdl(교직사정관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/22
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
        this.lvchkColidDs   = ""; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";

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
        	// 자격증별 조회 함수
        	this.fn_searchJagyeokjongbyeol();
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
        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "00009";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

            var strDs    = "dsHakgi|dsYn";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00051"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|N"; 			// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 				// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

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
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "Save":
        				this.fn_PostSave();
                        break;
                    case "Del":
        				this.fn_PostDel();
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "New":
        			this.fn_PostNew();
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
                case "ret" : 		// 조회
        			this.fn_Ret();
                    break;
                case "new" : 		// 신규
        			this.fn_New();
                    break;
                case "del" : 		// 삭제
        			this.fn_Del();
                    break;
                case "save" : 		// 저장
        			this.fn_Save();
                    break;
                case "excel" : 		// 엑셀
        			this.fn_Excel();
                    break;
                case "print" : 		// 출력
        			this.fn_Print();
                    break;
                case "confirm" :	// 확정
        			this.fn_Confirm();
                    break;
                case "tmp1" : 		// 여분버튼1
        			this.fn_Tip();
                    break;
                case "tmp2" : 		// 여분버튼2
        			this.fn_Tmp2();
                    break;
                case "tmp3" : 		// 여분버튼3
        			this.fn_Tmp3();
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
            var strUrl      = "/prj/UP/UP02/Retrieve_2040202_MList.do";
        	var strInDs 	= this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll" : "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
        	this.fn_countChwideuk();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function() {
        	var oArg = {};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("New", "UP02::UP02_2040202_P02.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fn_PostNew = function() {
        	this.fn_Ret();
        }

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.", "삭제정보", "", "warning");
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
            var strUrl      = "/prj/UP/UP02/Delete_2040202_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
        	this.fn_countChwideuk();
        };

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
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         * 교직사정
         */
        this.fn_callGyojiksajeongPopup = function() {
        	var joleopYyyy 	= this.ds_input.getColumn(0, "JOLEOP_YYYY");
        	var joleopHakgi = this.ds_input.getColumn(0, "JOLEOP_HAKGI");

        	var oArg 			= {joleopYyyy: joleopYyyy, joleopHakgi: joleopHakgi};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("Gyojiksajeong", "UP02::UP02_2040202_P01.xfdl", oArg, sPopupCallBack, oOption);
        }

        /**
         * 자격번호생성
         */
        this.fn_callJagyeogPopup = function() {
        	var joleopYyyy 	= this.ds_input.getColumn(0, "JOLEOP_YYYY");
        	var joleopHakgi = this.ds_input.getColumn(0, "JOLEOP_HAKGI");

        	var oArg 			= {joleopYyyy:joleopYyyy, joleopHakgi:joleopHakgi};
        	var oOption 		= {};
        	var sPopupCallBack 	= "fn_popupCallback";
        	this.gfn_openPopup("Jagyeog", "UP02::UP02_2040202_P03.xfdl", oArg, sPopupCallBack, oOption);
        }

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
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
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
         * 기능 : 자격증별 조회
         */
        this.fn_searchJagyeokjongbyeol = function(objStr) {
        	this.ds_inputJagyeokjongbyeol.setColumn(0, "SELECT_TYPE", "S");
            var strSvc      = "Jagyeokjongbyeol";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jagyeokjongbyeolList.do";
            var strInDs     = "ds_input=ds_inputJagyeokjongbyeol";
            var strOutDs    = "dsJagyeokjongbyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 교직사정처리 버튼
         */
        this.btnGyojikSajung_onclick = function(obj, e) {
        	if (this.gfn_isNull(this.divSearch.form.spnSearchYYYY.value)) {
        		this.alert("졸업년도를 입력하세요");
        		return;
        	}

        	if (this.gfn_isNull(this.divSearch.form.cboSearchHakgi.value)) {
        		this.alert("졸업학기를 선택하세요");
        		return;
        	}

        	this.fn_callGyojiksajeongPopup();
        };

        /**
         * 자격번호생성 버튼
         */
        this.btnJagyeog_onclick = function(obj, e) {
        	this.fn_callJagyeogPopup();
        };

        this.btnDaejang_onclick = function(obj, e) {
        	this.alert("출력물 준비중입니다.");
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
        		this.ds_inputAll.setColumn(0, "JOLEOP_YYYY",	"");
        		this.ds_inputAll.setColumn(0, "JOLEOP_HAKGI", 	"");
        	}
        };

        this.divSearch_chk_searchAll_onchanged = function(obj, e) {
        	var enableBool = (e.postvalue == "1" ? false : true);
        	this.divSearch.form.spnSearchYYYY.set_enable(enableBool);
        	this.divSearch.form.cboSearchHakgi.set_enable(enableBool);
        };

        /**
         * 기능 : 조회 건수
         */
        this.fn_countChwideuk = function() {
        	var totCnt 	= this.dsMaster.rowcount;
        	var yCnt 	= this.dsMaster.getCaseCount("CHWIDEUK_YN=='1'");
        	var nCnt 	= this.dsMaster.getCaseCount("CHWIDEUK_YN=='0'");
        	var txt 	= "[총 <fc v='red'><b v='true'>" 		+ totCnt	+ " </b></fc>건 "
        		        + "(취득 <fc v='red'><b v='true'>" 		+ yCnt 		+ " </b></fc>건 "
        			    + "/ 미취득 <fc v='red'><b v='true'>"	+ nCnt 		+ " </b></fc>건)]"
        	this.staRowCnt.set_text(txt);
        }

        this.divSearch_spnSearchYYYY_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "JOLEOP_YYYY", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "JOLEOP_HAKGI", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "GYEYEOL_CD", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "HAKGWA_CD", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeongong_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "JEONGONG_CD", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchName_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "NUMNAME", obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_rdoPogi_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "CHWIDEUK_YN", obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.divSearch_edtSearchName_onkeydown,this);
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.divSearch.form.rdoPogi.addEventHandler("onkeydown",this.divSearch_rdoPogi_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.btnDaejang.addEventHandler("onclick",this.btnDaejang_onclick,this);
            this.btnJagyeog.addEventHandler("onclick",this.btnJagyeog_onclick,this);
            this.btnGyojikSajung.addEventHandler("onclick",this.btnGyojikSajung_onclick,this);
            this.ds_input.addEventHandler("onvaluechanged",this.ds_input_onvaluechanged,this);
            this.ds_inputCombo.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputJagyeokjongbyeol.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP02_2040202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
