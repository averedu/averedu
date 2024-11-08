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
            this.set_titletext("교과목코드관리");
            this.set_color("blue");
            this.set_cssclass("type02");
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
            obj._setContents("<ColumnInfo><ConstColumn id=\"A\" type=\"STRING\" size=\"30\" value=\"\"/><ConstColumn id=\"B\" type=\"STRING\" size=\"30\" value=\"\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_NEUNGRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SISU_HALF_GWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIKGWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHOICHO_GAESEOL_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PYEJI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONGJA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GU_SYS_GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOYANG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchUseYn", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprovalgnb", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsGrdIsuGbcd", this);
            obj.set_arguments("00025");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGwamokGbcd", this);
            obj.set_arguments("00033");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGwSeongjeokGbcd", this);
            obj.set_arguments("00519");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGanguiTycd", this);
            obj.set_arguments("00403");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdSeunginGbcd", this);
            obj.set_arguments("03017");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptAll", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSilseup", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwalyong", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguisil", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongjeok", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeongjeokBuyeo", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj.set_arguments("00051");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGanguiPyeongga", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_1_01_00_00_00_00","990","254",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00_00","990","227",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00","990","200",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00","990","158",null,"43","0",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01","990","131",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00","990","104","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","68","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-25","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","359","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","594","9","46","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","58","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","268","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","350","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00","640","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","886","9","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("과목명/코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00","972","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00","1218","9","67","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00_01","1285","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchUseyn","1295","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchUseYn");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","1433","9","67","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("승인구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00_01_00","1501","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchApprovalgnb","1511","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsApprovalgnb");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03","303","9","46","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","650","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGwamok","982","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_maxlength("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","559","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","850","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","1182","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1395","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1160","8",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","47","110","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교과목 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77","960",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"39\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"92\"/><Column size=\"89\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"계열\"/><Cell col=\"3\" rowspan=\"2\" text=\"학과\"/><Cell col=\"4\" rowspan=\"2\" text=\"전공\"/><Cell col=\"5\" rowspan=\"2\" text=\"구코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"과목코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"과목명(한글)\"/><Cell col=\"8\" rowspan=\"2\" text=\"과목명(영문)\"/><Cell col=\"9\" rowspan=\"2\" text=\"이수구분\"/><Cell col=\"10\" rowspan=\"2\" text=\"실습구분\"/><Cell col=\"11\" rowspan=\"2\" text=\"학점\"/><Cell col=\"12\" colspan=\"3\" text=\"시수\"/><Cell col=\"15\" rowspan=\"2\" text=\"성적부여구분\"/><Cell col=\"16\" rowspan=\"2\" text=\"강의평가유형\"/><Cell col=\"17\" rowspan=\"2\" text=\"승인구분\"/><Cell row=\"1\" col=\"12\" text=\"이론\"/><Cell row=\"1\" col=\"13\" text=\"실습\"/><Cell row=\"1\" col=\"14\" text=\"통합\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:JUGWAN_DAEHAK_CD\" displaytype=\"combotext\" combodataset=\"dsDeptAll\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:JUGWAN_HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"dsDeptAll\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JUGWAN_JEONGONG_CD\" displaytype=\"combotext\" combodataset=\"dsDeptAll\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GU_SYS_GYOGWAMOK_CD\"/><Cell col=\"6\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"7\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:GYOGWAMOK_ENM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ISU_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsIsu\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:GWAMOK_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSilseup\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" text=\"bind:HAKJEOM\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:IRON_SISU\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:SILSEUP_SISU\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:TONGHAP_SISU\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:SEONGJEOK_BUYEO_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGrdGwSeongjeokGbcd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"16\" text=\"bind:GANGUIPYEONGGA_TYCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGrdGanguiTycd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"17\" text=\"bind:SEUNGIN_GBCD\" displaytype=\"combotext\" combodataset=\"dsGrdSeunginGbcd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"none\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","960","54","30",null,null,"30",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","990","47","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("교과목 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","32","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00_00","639","32","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00_00_00","639","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","440","69","1160","8",null,null,null,null,null,null,this);
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

            obj = new Static("stc_1","990","77",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2","990","77","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("과목명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00","990","104","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("과목명(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00","990","131","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01","1420","77","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("이수구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01","1420","104","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("실습구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00","1210","131","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIsu","1513","80","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_innerdataset("dsIsu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSilseup","1513","107","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsSilseup");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","1304","134","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("dsCompHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01","990","158","100","43",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00","1210","158","90","43",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_00","1420","158","90","43",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("NCS활용구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_00_00","1420","131","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","1513","134","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("dsCompJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00","990","200","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("강의실유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGanguisil","1094","203","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_innerdataset("dsGanguisil");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_01","1210","200","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("성적평가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeongjeokPyeongga","1304","203","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_innerdataset("dsSeongjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_00_01","1420","200","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("성적부여");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSeongjeokBuyeo","1513","203","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("dsSeongjeokBuyeo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00_00","990","227","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("교직과목여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_01_00","1210","227","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00_00_01_00","1420","227","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("강의 평가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02","990","254","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("최초 개설 년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calPyejiDt","1304","257","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_00_00","1420","254","90","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("강의평가유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGanguiPyeongga","1513","257","123","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_innerdataset("dsGanguiPyeongga");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("spnGaeseolYYYY","1093","257","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00","990","463",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_01","990","463","100",null,null,"0",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("교과목 개요\r\n(영어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_00","990","281","649","184",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_01_00","990","281","100","184",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("교과목 개요\r\n(한글)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHwalyong","1513","161","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_innerdataset("dsHwalyong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuIron","1304","161","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","1331","162","13","20",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuSilseup","1348","161","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","1375","162","13","20",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("-");
            obj.set_textAlign("center");
            obj.set_font("8pt Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisuSogye","1392","161","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_maxlength("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","1305","185","110","15",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("이론   -   실습   -   소계");
            obj.set_cssclass("sta_label_title03");
            obj.set_textAlign("center");
            obj.set_verticalAlign("top");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02_00_01","1210","254","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("폐지일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyeyeol","1094","134","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_innerdataset("dsCompGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwamok","1094","80","324","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_maxlength("66");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEngGwamok","1094","108","324","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeom","1094","162","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_maxlength("5");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGyeoljaeYeobu","1094","230","114","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("textGyoGwamok","1093","285","543","176",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new TextArea("textGyoGwamokGaeyo","1093","467","545",null,null,"0",null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_maxlength("500");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoUseYeobu","1305","230","111","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGangui","1514","230","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","106","51","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("교과목코드관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item93","divSearch.form.cboSearchGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divSearch.form.cboSearchHakgwa","value","ds_input","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboSearchHakjeokSangtae00_00_02","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboSearchHakjeokSangtae00_00","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cboSearchHakjeokSangtae00_01","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","cboSearchHakjeokSangtae00","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","cboSearchHakjeokSangtae01","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.cboSearchUseyn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSearch.form.cboSearchApprovalgnb","value","ds_input","SEUNGIN_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.cboSearchJeongong","value","ds_input","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.edtSearchGwamok","value","ds_input","GYOGWAMOK_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboHakgwa","value","dsMaster","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","calPyejiDt","value","dsMaster","PYEJI_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","cboGanguiPyeongga","value","dsMaster","GANGUIPYEONGGA_TYCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSisuIron","value","dsMaster","IRON_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtSisuSilseup","value","dsMaster","SILSEUP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSisuSogye","value","dsMaster","TONGHAP_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cboGyeyeol","value","dsMaster","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cboGyeyeol","enable","dsBindableComp","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cboHakgwa","enable","dsBindableComp","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboJeongong","enable","dsBindableComp","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","cboIsu","enable","dsBindableComp","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cboJeongong","value","dsMaster","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtGwamok","value","dsMaster","GYOGWAMOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtHakjeom","value","dsMaster","HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","RdoGyeoljaeYeobu","value","dsMaster","GYOJIKGWAMOK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","RdoGangui","value","dsMaster","GANGUIPYEONGGA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboIsu","value","dsMaster","ISU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSilseup","value","dsMaster","GWAMOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtEngGwamok","value","dsMaster","GYOGWAMOK_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboHwalyong","value","dsMaster","NCS_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboGanguisil","value","dsMaster","GANGUISIL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboSeongjeokBuyeo","value","dsMaster","SEONGJEOK_BUYEO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","spnGaeseolYYYY","value","dsMaster","CHOICHO_GAESEOL_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","textGyoGwamok","value","dsMaster","GYOGWAMOK_GAEYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","textGyoGwamokGaeyo","value","dsMaster","GYOGWAMOK_GAEYO_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","RdoUseYeobu","value","dsMaster","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","cboSeongjeokPyeongga","value","dsMaster","PYEONGGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSearchUseYn","00051");
            this._addPreloadList("data","","dsApprovalgnb");
            this._addPreloadList("data","","dsUseYn","00051");
            this._addPreloadList("data","","dsIsu","00051");
            this._addPreloadList("data","","dsSilseup");
            this._addPreloadList("data","","dsHwalyong");
            this._addPreloadList("data","","dsGanguisil","00051");
            this._addPreloadList("data","","dsSeongjeok","00051");
            this._addPreloadList("data","","dsSeongjeokBuyeo","00051");
            this._addPreloadList("data","","dsGanguiPyeongga");
        };
        
        // User Script
        this.registerScript("UL02_2020201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL02_2020201_M.xfdl(기본과목 관리(조회))
        * 작 성         일 명: 이성구
        * 작 성         일 자: 2021/09/24
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
        this.lvchkColidDs   = "GYOGWAMOK_NM$GYOGWAMOK_ENM$ISU_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "과목명$과목영문명$이수구분코드";
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
            var strDs    = "dsSearchUseYn|dsUseYn|dsApprovalgnb|dsGrdIsuGbcd|dsGrdGwamokGbcd|dsGrdGwSeongjeokGbcd|dsGrdGanguiTycd|dsGrdSeunginGbcd|dsIsu|dsSilseup|dsHwalyong|dsGanguisil|dsSeongjeok|dsSeongjeokBuyeo|dsGanguiPyeongga";  // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00051|00051|00520|00025|00033|00519|00403|00520|00025|00033|00506|00517|00518|00519|00403";               // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X|X|X|X|X|X|X|X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      	  // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 조건부 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	this.fn_DeptAll();
        };


        // 조회조건 계열
        this.fn_PostGyeyeolInit = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };

        // 조회 조건 학과
        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.cboSearchHakgwa, info);
        };

        // 조회 조건 전공
        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };


        // 컴포넌트 계열
        this.fn_PostCompGyeyeolInit = function()
        {
        	this.cboGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboGyeyeol_onitemchanged(this.cboGyeyeol, info);
        };

        // 컴포넌트 학과
        this.fn_PostCompHakgwaInit = function()
        {
        	this.cboHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.cboHakgwa_onitemchanged(this.cboHakgwa, info);
        };

        // 컴포넌트 전공
        this.fn_PostCompJeongongInit = function()
        {
        	this.cboJeongong.set_index(0);
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
                    case "gyeyeolInit":
        			        this.fn_PostGyeyeolInit();		//조건부 계열
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();		//조건부 학과
        			    break;
        			case "jeongongInit":					//조건부 전공
        			        this.fn_PostJeongongInit();
        			    break;
        			case "compGyeyeolInit":
        			        this.fn_PostCompGyeyeolInit();
        			    break;
        			case "compHakgwaInit":
        			        this.fn_PostCompHakgwaInit();
        			    break;
        			case "compJeongongInit":
        			        this.fn_PostCompJeongongInit();
        			    break;
        			case "Sincheong":					//공통버튼 신청
                            this.fn_PostSincheong();
                        break;
        			case "Sungin":						//공통버튼 승인
                            this.fn_PostSungin();
                        break;
        			case "bunryo":						//공통버튼 반려
                            this.fn_Postbunryo();
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
                case "tmp1" :        						// 신청버튼
        				 this.fn_Sincheong();
                    break;
                case "tmp2" :        						// 승인버튼
                         this.fn_Sungin();
                    break;
                case "tmp3" :        						// 반려버튼
                         this.fn_bunryo();
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
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL02/Retrieve_2020201_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
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

        	if(this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD")))
        	{
        		this.dsMaster.setColumn(nRow,"SEUNGIN_GBCD","03");	// 관리자면 승인
        	}
        	else
        	{
        		this.dsMaster.setColumn(nRow,"SEUNGIN_GBCD","02");	// 관리자 아니면 신청으로 기본값 설정
        	}

        	// 시수 0 설정
        	this.edtSisuIron.set_enable(true);											//sisu.이론 enable
        	this.edtSisuSilseup.set_enable(true);										//sisu.실습 enable

        	var IRON_SISU = this.dsMaster.setColumn(nRow,"IRON_SISU",0); 				//sisu.이론 값 0으로 세팅
        	var edtSisuSilseup = this.edtSisuSilseup.set_value("0");					//sisu.실습 값 0으로 세팅

        	this.edtSisuSogye.set_value("0"); 											//sisu.소계 디폴트 값 0으로 세팅
        	this.dsMaster.setColumn(nRow,"edtSisuSogye",IRON_SISU+edtSisuSilseup);		//sisu.소계 이론+실습 값 세팅

        	// 기본값 설정
        	this.cboGanguisil.set_index(0);													//강의실 유형
        	this.cboSeongjeokPyeongga.set_index(0);											//성적 평가
        	this.cboSeongjeokBuyeo.set_index(0);											//성적 부여
        	this.cboHwalyong.set_index(3);													//NCS 활용구분

        	this.dsMaster.setColumn(nRow, "GANGUIPYEONGGA_YN", "1");

        	this.RdoGyeoljaeYeobu.set_index(1);												//교직 과목 여부
        	this.RdoUseYeobu.set_index(0);													//사용여부 설정
        	this.RdoGangui.set_index(0);													//강의 평가

        	this.cboGanguiPyeongga.set_index(0);											//강의 평가 유형
        };
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
        	// 신규 항목 삭제일 경우.
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsMaster.deleteRow(this.dsMaster.rowposition);
        		return false;
        	}

        	//멀티삭제용도
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
        		return false;
        	}

        	// 관리자가 아니면 승인된 항목은 삭제할 수 없음.
        	if(!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD")))
        	{
        		var chk_del = 0;
        		for(var i=0; i<this.dsMaster.rowcount; i++)
        		{
        			// 체크된 값
        			if(this.dsMaster.getColumn(i, "CHK") == 1)
        			{
        				if(this.dsMaster.getColumn(i, "SEUNGIN_GBCD") == "03")
        				{
        					chk_del++;
        				};
        			};
        		};

        		if(chk_del > 0)
        		{
        			this.alert("승인된 항목이 존재하여 삭제할 수 없습니다.");
        			return false;
        		};
        	};

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1")
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

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
            var strUrl      = "/prj/UL/UL02/Delete_2020201_M.do";
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
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	//이수 구분에 따른 계열 학과 체크
        	for(var i=0; i <this.dsMaster.rowcount; i++ )
        	{
        		//신규 행일 때
        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			var isuGbcd = this.dsMaster.getColumn(i,"ISU_GBCD")
        			//이수 구분이 전공필수, 전공선택,전공기초,전공인 것만 학과컬럼이 있어야함
        			if(isuGbcd == '03' || isuGbcd =='04' || isuGbcd == '07' || isuGbcd == '08')
        			{
        				var hakgwa =  this.dsMaster.getColumn(i, 'JUGWAN_HAKGWA_CD');
        				if(this.gfn_isNull(hakgwa))
        				{
        					this.alert("전공 교과목은 계열/학과 선택이 필수입니다.");
        					return false;
        				}
        			}
        		}
        	}

        	// 필수입력사항은 체크를 한다 tip) 신규를 눌러보고 저장을 계속 해본 후 필수 입력사항을 확인
        	// 필수 입력사항 체크(chkFocusFlg) => grid 필수항목체크할거냐:true, 일반 컴포넌트에 필수항목을 할거냐 false)
        	// 맨위에 lvchkColidDs, lvchkColNameDs 필수입력사항 상황에 맞춰서 변경
        	// 컴포넌트에 필수항목 체크할경우 네번째 인덱스 ""으로 변경
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/UL/UL02/Save_2020201_M.do";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
                09. Com의 Event 함수 (신청)
        ***********************************************************************/
        this.fn_Sincheong = function()
        {
        	// 	01 : 등록,	02 : 신청,	03 : 승인,	04 : 반려
        	// 체크여부확인
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("선택된 행이 없습니다");
                return false;
            }

        	var result = this.gfn_confirm( "신청 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	// 체크된 값 중 신규 또는 수정된 항목이 존재하는 경우 처리 불가능하게 처리.
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		// 체크된 값만
        		if(this.dsMaster.getColumn(i, "CHK") == 1)
        		{
        			this.dsMaster.setColumn(i,"CHK","0");
        			// 로우타입이 삽입이나 수정인 경우
        			if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        			{
        				this.alert( "신규 또는 수정된 항목이 존재하여 승인 처리할 수 없습니다." );
        				return false;
        			}
        			// 로우타입이 노말인 경우
        			else
        			{
        				this.dsMaster.setColumn(i, "SEUNGIN_GBCD","02");
        			}
        		};
        	};

        	var strSvc      = "Sincheong";
        	var strUrl      = "/prj/UL/UL02/seungin_2020201_M.do";
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
        	var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					, strUrl
        					, strInDs
        					, strOutDs
        					, strArg
        					, strCallBack
        					, strASync);
        }

        this.fn_PostSincheong = function()
        {
            this.alert("정삭적으로 저장되었습니다.");
        };
        /**********************************************************************
                10. Com의 Event 함수 (승인)
        ***********************************************************************/
        this.fn_Sungin = function()
        {
        	// 	01 : 등록,	02 : 신청,	03 : 승인,	04 : 반려
        	// 체크여부확인
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("선택된 행이 없습니다");
                return false;
            }

        	var result = this.gfn_confirm( "승인 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	// 체크된 값 중 신규 또는 수정된 항목이 존재하는 경우 처리 불가능하게 처리.
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		// 체크된 값만
        		if(this.dsMaster.getColumn(i, "CHK") == 1)
        		{
        			this.dsMaster.setColumn(i,"CHK","0");
        			// 로우타입이 삽입이나 수정인 경우
        			if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        			{
        				this.alert( "신규 또는 수정된 항목이 존재하여 승인 처리할 수 없습니다." );
        				return false;
        			}
        			// 로우타입이 노말인 경우
        			else
        			{
        				this.dsMaster.setColumn(i, "SEUNGIN_GBCD","03");
        			}
        		};
        	};

        	var strSvc      = "Sungin";
        	var strUrl      = "/prj/UL/UL02/seungin_2020201_M.do";
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
        	var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					, strUrl
        					, strInDs
        					, strOutDs
        					, strArg
        					, strCallBack
        					, strASync);
        }

        this.fn_PostSungin = function()
        {
            this.alert("정삭적으로 저장되었습니다.");
        };
        /**********************************************************************
                11. Com의 Event 함수 (반려)
        ***********************************************************************/
        this.fn_bunryo = function()
        {
        	// 	01 : 등록,	02 : 신청,	03 : 승인,	04 : 반려
        	// 체크여부확인
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.alert("선택된 행이 없습니다");
                return false;
            }

        	var result = this.gfn_confirm( "반려 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	// 체크된 값 중 신규 또는 수정된 항목이 존재하는 경우 처리 불가능하게 처리.
        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		// 체크된 값만
        		if(this.dsMaster.getColumn(i, "CHK") == 1)
        		{
        			this.dsMaster.setColumn(i,"CHK","0");
        			// 로우타입이 삽입이나 수정인 경우
        			if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        			{
        				this.alert( "신규 또는 수정된 항목이 존재하여 승인 처리할 수 없습니다." );
        				return false;
        			}
        			// 로우타입이 노말인 경우
        			else
        			{
        				this.dsMaster.setColumn(i, "SEUNGIN_GBCD","04");
        			}
        		};
        	};

        	var strSvc      = "bunryo";
        	var strUrl      = "/prj/UL/UL02/seungin_2020201_M.do";
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
        	var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        					, strUrl
        					, strInDs
        					, strOutDs
        					, strArg
        					, strCallBack
        					, strASync);
        }

        this.fn_Postbunryo = function()
        {
            this.alert("정삭적으로 저장되었습니다.");
        };
        /**********************************************************************
                12. 각종 함수
        ***********************************************************************/
        // 계열.학과,전공을 모두 불러오는 함수
        this.fn_DeptAll = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/UL/UL02/Retrieve_2020201_M_deptAll.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeptAll=dsDeptAll";
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
        }


        /**********************************************************************
                13. 기타 Control Event
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
         *      그리드멀티 소트정렬
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 조회조건 학과 필터 적용
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

        // 조회조건 전공 필터 적용
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

        // 컴포넌트 학과 필터 적용
        this.cboGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsCompHakgwa";
        	strComb     = "T";
        	svcId       = "compHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.cboHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 컴포넌트 전공 필터 적용
        this.cboHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsCompJeongong";
        	strComb     = "T";
        	svcId       = "compJeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.cboJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // dsMaster row가 변경될때
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT) //선택한 로우가 신규일 때
        	{
        		this.cboGyeyeol.set_innerdataset("dsCompGyeyeol");
        		this.cboGyeyeol.set_codecolumn("DEPT_CD");
        		this.cboGyeyeol.set_datacolumn("DEPT_NM");

        		this.cboHakgwa.set_innerdataset("dsCompHakgwa");
        		this.cboHakgwa.set_codecolumn("DEPT_CD");
        		this.cboHakgwa.set_datacolumn("DEPT_NM");

        		this.cboJeongong.set_innerdataset("dsCompJeongong");
        		this.cboJeongong.set_codecolumn("DEPT_CD");
        		this.cboJeongong.set_datacolumn("DEPT_NM");

        		this.dsBindableComp.setColumn(0, "bEnable", "true");

        		// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        		// 계열콤보
        		var strDs       = "dsCompGyeyeol";
        		var strComb     = "T";
        		var svcId       = "compGyeyeolInit";
        		var strUseYn    = "1"; // 사용 여부
        		var strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        		var strDaehakCd = "";  //
        		this.gfn_GyeyeolComboLoad(this.cboGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        	}
        	else
        	{
        		this.cboGyeyeol.set_innerdataset("dsDeptAll");
        		this.cboGyeyeol.set_codecolumn("DEPT_CD");
        		this.cboGyeyeol.set_datacolumn("DEPT_NM");

        		this.cboHakgwa.set_innerdataset("dsDeptAll");
        		this.cboHakgwa.set_codecolumn("DEPT_CD");
        		this.cboHakgwa.set_datacolumn("DEPT_NM");

        		this.cboJeongong.set_innerdataset("dsDeptAll");
        		this.cboJeongong.set_codecolumn("DEPT_CD");
        		this.cboJeongong.set_datacolumn("DEPT_NM");

        		this.dsBindableComp.setColumn(0, "bEnable", "false");
        	}
        };

        //이수 구분이 바뀔 때
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ISU_GBCD")
        	{
        		if (e.newvalue == "05")
        		{
        			// 교직
        			this.RdoGyeoljaeYeobu.set_value("1");
        		}
        		else
        		{
        			// 교직 외
        			this.RdoGyeoljaeYeobu.set_value("0");
        		}
        	}
        	else if(e.columnid == "GWAMOK_GBCD")
        	{
        		if (e.newvalue == "1")
        		{
        			// 이론
        			this.edtSisuIron.set_enable(true);
        			this.dsMaster.setColumn(this.dsMaster.rowposition,"IRON_SISU",0);
        			this.edtSisuSilseup.set_enable(false);
        			this.edtSisuSogye.set_value(this.edtSisuIron.value);
        			this.edtSisuSilseup.set_value("0");
        			this.edtSisuSilseup.set_enable(false);
        		}
        		else if(e.newvalue == "2")
        		{
        			// 실습
        			this.edtSisuIron.set_enable(false);
        			this.edtSisuIron.set_value("0");
        			this.edtSisuSilseup.set_enable(true);
        			this.edtSisuSogye.set_value(this.edtSisuSilseup.value);
        			this.edtSisuIron.set_value("0");
        			this.edtSisuIron.set_enable(false);
        		}
        		else if(e.newvalue == "3")
        		{
        			// 이론/실습
        			this.edtSisuIron.set_enable(true);
        			this.edtSisuSilseup.set_enable(true);
        			this.edtSisuSogye.set_value(parseInt(this.edtSisuIron.value)+parseInt(this.edtSisuSilseup.value));
        		}
        	}
        	else if(e.columnid == "IRON_SISU")
        	{
        		// 이론시수
        		var IRON_SISU = e.newvalue;
        		var SILSEUP_SISU = this.dsMaster.getColumn(this.dsMaster.rowposition,"SILSEUP_SISU");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "TONGHAP_SISU", parseInt(IRON_SISU) + parseInt(SILSEUP_SISU));
        	}
        	else if(e.columnid == "SILSEUP_SISU")
        	{
        		// 실습시수
        		var SILSEUP_SISU = e.newvalue;
        		var IRON_SISU = this.dsMaster.getColumn(this.dsMaster.rowposition, "IRON_SISU");
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "TONGHAP_SISU", parseInt(SILSEUP_SISU) + parseInt(IRON_SISU));
        	}
        };

        //그리드가 변경 될때
        this.grdMaster_onselectchanged = function(obj,e)
        {
        	// 관리자가 아니면 승인된 항목은 수정 안되게.
        	if(!this.gfn_isNull(objApp.gds_userInfoDb.getColumn(0,"USER_GBCD")))
        	{
        		var SEUNGIN_GBCD = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_GBCD");
        		if(SEUNGIN_GBCD == "03")
        		{
        			this.edtGwamok.set_enable(false);
        			this.cboIsu.set_enable(false);
        			this.edtEngGwamok.set_enable(false);
        			this.cboSilseup.set_enable(false);
        			this.cboGyeyeol.set_enable(false);
        			this.cboHakgwa.set_enable(false);
        			this.cboJeongong.set_enable(false);
        			this.edtHakjeom.set_enable(false);
        			this.edtSisuIron.set_enable(false);
        			this.edtSisuSilseup.set_enable(false);
        			this.cboHwalyong.set_enable(false);
        			this.cboGanguisil.set_enable(false);
        			this.cboSeongjeokPyeongga.set_enable(false);
        			this.cboSeongjeokBuyeo.set_enable(false);
        			this.RdoGyeoljaeYeobu.set_enable(false);
        			this.RdoUseYeobu.set_enable(false);
        			this.RdoGangui.set_enable(false);
        			this.spnGaeseolYYYY.set_enable(false);
        			this.calPyejiDt.set_enable(false);
        			this.cboGanguiPyeongga.set_enable(false);
        			this.AreaGyoGwamokGaeYo.set_enable(false);
        			this.AreaCholchoGaeseolYear.set_enable(false);
        		}
        		else
        		{
        			this.edtGwamok.set_enable(true);
        			this.cboIsu.set_enable(true);
        			this.edtEngGwamok.set_enable(true);
        			this.cboSilseup.set_enable(true);
        			this.cboGyeyeol.set_enable(true);
        			this.cboHakgwa.set_enable(true);
        			this.cboJeongong.set_enable(true);
        			this.edtHakjeom.set_enable(true);
        			this.edtSisuIron.set_enable(true);
        			this.edtSisuSilseup.set_enable(true);
        			this.cboHwalyong.set_enable(true);
        			this.cboGanguisil.set_enable(true);
        			this.cboSeongjeokPyeongga.set_enable(true);
        			this.cboSeongjeokBuyeo.set_enable(true);
        			this.RdoGyeoljaeYeobu.set_enable(true);
        			this.RdoUseYeobu.set_enable(true);
        			this.RdoGangui.set_enable(true);
        			this.spnGaeseolYYYY.set_enable(true);
        			this.calPyejiDt.set_enable(true);
        			this.cboGanguiPyeongga.set_enable(true);
        			this.AreaGyoGwamokGaeYo.set_enable(true);
        			this.AreaCholchoGaeseolYear.set_enable(true);

        			// 신규는 모두 입력가능하고 신규가 아니면 일부만 입력가능.
        			if(this.dsMaster.getRowType(this.dsMaster.rowposition) == Dataset.ROWTYPE_INSERT)
        			{
        				this.cboIsu.set_enable(true);
        			}
        			else
        			{
        				this.cboIsu.set_enable(false);
        			}
        		}
        	}
        	else
        	{
        		// 관리자면 기존대로
        		if(this.dsMaster.getRowType(this.dsMaster.rowposition)==Dataset.ROWTYPE_INSERT)
        		{
        			this.cboIsu.set_enable(true);
        			this.cboGyeyeol.set_enable(true);
        			this.cboHakgwa.set_enable(true);
        			this.cboJeongong.set_enable(true);
        		}
        		else
        		{
        			this.cboIsu.set_enable(false);
        			this.cboGyeyeol.set_enable(false);
        			this.cboHakgwa.set_enable(false);
        			this.cboJeongong.set_enable(false);
        		}

        		var GWAMOK_CD = this.dsMaster.getColumn(this.dsMaster.rowposition, "GWAMOK_GBCD");
        		if(GWAMOK_CD == "1")
        		{
        			// 이론
        			this.edtSisuIron.set_enable(true);
        			this.edtSisuSilseup.set_enable(false);
        		}
        		else if(GWAMOK_CD == "2")
        		{
        			// 실습
        			this.edtSisuIron.set_enable(false);
        			this.edtSisuSilseup.set_enable(true);
        		}
        		else if(GWAMOK_CD == "3")
        		{
        			// 이론/실습
        			this.edtSisuIron.set_enable(true);
        			this.edtSisuSilseup.set_enable(true);
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	return this.gfn_isUpdate(this.dsMaster);
        };
        /**********************************************************************
                14. 검색창 엔터키 조회
        ***********************************************************************/
        // 계열
        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUGWAN_DAEHAK_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        //학과
        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUGWAN_HAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        //전공
        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUGWAN_JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        //과목명
        this.divSearch_edtSearchGwamok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GYOGWAMOK_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        //사용 여부
        this.divSearch_cboSearchUseyn_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"USE_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        //승인 구분
        this.divSearch_cboSearchApprovalgnb_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEUNGIN_GBCD",obj.value);
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
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchUseyn.addEventHandler("onkeydown",this.divSearch_cboSearchUseyn_onkeydown,this);
            this.divSearch.form.cboSearchApprovalgnb.addEventHandler("onkeydown",this.divSearch_cboSearchApprovalgnb_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.edtSearchGwamok.addEventHandler("onkeydown",this.divSearch_edtSearchGwamok_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.stc_2.addEventHandler("onclick",this.stc_2_onclick,this);
            this.stc_2_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.cboSilseup.addEventHandler("canitemchange",this.cboSilseup_canitemchange,this);
            this.cboHakgwa.addEventHandler("onitemchanged",this.cboHakgwa_onitemchanged,this);
            this.stc_2_00_02_00_00.addEventHandler("onclick",this.stc_2_00_02_00_00_onclick,this);
            this.edtSisuIron.addEventHandler("oninput",this.edtSisuIron_oninput,this);
            this.edtSisuSilseup.addEventHandler("oninput",this.edtSisuSilseup_oninput,this);
            this.cboGyeyeol.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.edtHakjeom.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsSearchUseYn.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSearchUseYn.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsApprovalgnb.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsApprovalgnb.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsUseYn.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsUseYn.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsIsu.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsIsu.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsSilseup.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSilseup.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsHwalyong.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsHwalyong.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsGanguisil.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsGanguisil.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsSeongjeok.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSeongjeok.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsSeongjeokBuyeo.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSeongjeokBuyeo.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsGanguiPyeongga.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsGanguiPyeongga.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UL02_2020201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
