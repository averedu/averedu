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
            this.set_titletext("모집합격:등록현황");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_111_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_111_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_111_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_111_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_1_01_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_1_02_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_221_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_221_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_221_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_221_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_222_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_222_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_222_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_222_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_223_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_223_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_223_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_223_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_224_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_224_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_224_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_224_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_2_01_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_2_02_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_331_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_331_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_331_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_331_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_332_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_332_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_332_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_332_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_333_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_333_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_333_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_333_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_334_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_334_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_334_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_334_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_335_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_335_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_335_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_335_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_336_01\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_336_01_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_336_02\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_336_02_D\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_3_01_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CLN_3_02_D_ALL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCDTO\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGongji", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("모집합격 : 등록 현황 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","197","51",null,"24","1320",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-1","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","94","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","244","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","335","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","84","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","325","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","630","2","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","218","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","657","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("공지구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","738","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGongji","748","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGongji");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","474","9","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojipTo","506","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkGansohwa1",null,"52","110","20","132",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("간략하게 보기1");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkGansohwa2",null,"52","110","20","2",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("간략하게 보기2");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야&#13;&#10;구분\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"4\" text=\"일반전형\"/><Cell col=\"6\" colspan=\"20\" text=\"정원 내\"/><Cell col=\"26\" colspan=\"28\" text=\"정원외\"/><Cell row=\"1\" col=\"6\" colspan=\"4\" text=\"일반고\"/><Cell row=\"1\" col=\"10\" colspan=\"4\" text=\"특성화고\"/><Cell row=\"1\" col=\"14\" colspan=\"4\" text=\"특기자\"/><Cell row=\"1\" col=\"18\" colspan=\"4\" text=\"대학자체기준\"/><Cell row=\"1\" col=\"22\" colspan=\"4\" text=\"합계\"/><Cell row=\"1\" col=\"26\" colspan=\"4\" text=\"전문대이상 졸업자\"/><Cell row=\"1\" col=\"30\" colspan=\"4\" text=\"농어촌\"/><Cell row=\"1\" col=\"34\" colspan=\"4\" text=\"기초생활수급자 및 차상위\"/><Cell row=\"1\" col=\"38\" colspan=\"4\" text=\"재외국민 및 외국인\"/><Cell row=\"1\" col=\"42\" colspan=\"4\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"46\" colspan=\"4\" text=\"특수교육대상자\"/><Cell row=\"1\" col=\"50\" colspan=\"4\" text=\"합계\"/><Cell row=\"2\" col=\"2\" text=\"최초\"/><Cell row=\"2\" col=\"3\" text=\"등록\"/><Cell row=\"2\" col=\"4\" text=\"충원\"/><Cell row=\"2\" col=\"5\" text=\"등록\"/><Cell row=\"2\" col=\"6\" text=\"최초\"/><Cell row=\"2\" col=\"7\" text=\"등록\"/><Cell row=\"2\" col=\"8\" text=\"충원\"/><Cell row=\"2\" col=\"9\" text=\"등록\"/><Cell row=\"2\" col=\"10\" text=\"최초\"/><Cell row=\"2\" col=\"11\" text=\"등록\"/><Cell row=\"2\" col=\"12\" text=\"충원\"/><Cell row=\"2\" col=\"13\" text=\"등록\"/><Cell row=\"2\" col=\"14\" text=\"최초\"/><Cell row=\"2\" col=\"15\" text=\"등록\"/><Cell row=\"2\" col=\"16\" text=\"충원\"/><Cell row=\"2\" col=\"17\" text=\"등록\"/><Cell row=\"2\" col=\"18\" text=\"최초\"/><Cell row=\"2\" col=\"19\" text=\"등록\"/><Cell row=\"2\" col=\"20\" text=\"충원\"/><Cell row=\"2\" col=\"21\" text=\"등록\"/><Cell row=\"2\" col=\"22\" text=\"최초\"/><Cell row=\"2\" col=\"23\" text=\"등록\"/><Cell row=\"2\" col=\"24\" text=\"충원\"/><Cell row=\"2\" col=\"25\" text=\"등록\"/><Cell row=\"2\" col=\"26\" text=\"최초\"/><Cell row=\"2\" col=\"27\" text=\"등록\"/><Cell row=\"2\" col=\"28\" text=\"충원\"/><Cell row=\"2\" col=\"29\" text=\"등록\"/><Cell row=\"2\" col=\"30\" text=\"최초\"/><Cell row=\"2\" col=\"31\" text=\"등록\"/><Cell row=\"2\" col=\"32\" text=\"충원\"/><Cell row=\"2\" col=\"33\" text=\"등록\"/><Cell row=\"2\" col=\"34\" text=\"최초\"/><Cell row=\"2\" col=\"35\" text=\"등록\"/><Cell row=\"2\" col=\"36\" text=\"충원\"/><Cell row=\"2\" col=\"37\" text=\"등록\"/><Cell row=\"2\" col=\"38\" text=\"최초\"/><Cell row=\"2\" col=\"39\" text=\"등록\"/><Cell row=\"2\" col=\"40\" text=\"충원\"/><Cell row=\"2\" col=\"41\" text=\"등록\"/><Cell row=\"2\" col=\"42\" text=\"최초\"/><Cell row=\"2\" col=\"43\" text=\"등록\"/><Cell row=\"2\" col=\"44\" text=\"충원\"/><Cell row=\"2\" col=\"45\" text=\"등록\"/><Cell row=\"2\" col=\"46\" text=\"최초\"/><Cell row=\"2\" col=\"47\" text=\"등록\"/><Cell row=\"2\" col=\"48\" text=\"충원\"/><Cell row=\"2\" col=\"49\" text=\"등록\"/><Cell row=\"2\" col=\"50\" text=\"최초\"/><Cell row=\"2\" col=\"51\" text=\"등록\"/><Cell row=\"2\" col=\"52\" text=\"충원\"/><Cell row=\"2\" col=\"53\" text=\"등록\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:CLN_111_01\"/><Cell col=\"3\" text=\"bind:CLN_111_01_D\"/><Cell col=\"4\" text=\"bind:CLN_111_02\"/><Cell col=\"5\" text=\"bind:CLN_111_02_D\"/><Cell col=\"6\" text=\"bind:CLN_221_01\"/><Cell col=\"7\" text=\"bind:CLN_221_01_D\"/><Cell col=\"8\" text=\"bind:CLN_221_02\"/><Cell col=\"9\" text=\"bind:CLN_221_02_D\"/><Cell col=\"10\" text=\"bind:CLN_222_01\"/><Cell col=\"11\" text=\"bind:CLN_222_01_D\"/><Cell col=\"12\" text=\"bind:CLN_222_02\"/><Cell col=\"13\" text=\"bind:CLN_222_02_D\"/><Cell col=\"14\" text=\"bind:CLN_223_01\"/><Cell col=\"15\" text=\"bind:CLN_223_01_D\"/><Cell col=\"16\" text=\"bind:CLN_223_02\"/><Cell col=\"17\" text=\"bind:CLN_223_02_D\"/><Cell col=\"18\" text=\"bind:CLN_224_01\"/><Cell col=\"19\" text=\"bind:CLN_224_01_D\"/><Cell col=\"20\" text=\"bind:CLN_224_02\"/><Cell col=\"21\" text=\"bind:CLN_224_02_D\"/><Cell col=\"22\" text=\"expr:CLN_221_01+CLN_222_01+CLN_223_01+CLN_224_01\"/><Cell col=\"23\" text=\"bind:CLN_2_01_D_ALL\"/><Cell col=\"24\" text=\"expr:CLN_221_02+CLN_222_02+CLN_223_02+CLN_224_02\"/><Cell col=\"25\" text=\"bind:CLN_2_02_D_ALL\"/><Cell col=\"26\" text=\"bind:CLN_334_01\"/><Cell col=\"27\" text=\"bind:CLN_334_01_D\"/><Cell col=\"28\" text=\"bind:CLN_334_02\"/><Cell col=\"29\" text=\"bind:CLN_334_02_D\"/><Cell col=\"30\" text=\"bind:CLN_331_01\"/><Cell col=\"31\" text=\"bind:CLN_331_01_D\"/><Cell col=\"32\" text=\"bind:CLN_331_02\"/><Cell col=\"33\" text=\"bind:CLN_331_02_D\"/><Cell col=\"34\" text=\"bind:CLN_332_01\"/><Cell col=\"35\" text=\"bind:CLN_332_01_D\"/><Cell col=\"36\" text=\"bind:CLN_332_02\"/><Cell col=\"37\" text=\"bind:CLN_332_02_D\"/><Cell col=\"38\" text=\"bind:CLN_335_01\"/><Cell col=\"39\" text=\"bind:CLN_335_01_D\"/><Cell col=\"40\" text=\"bind:CLN_335_02\"/><Cell col=\"41\" text=\"bind:CLN_335_02_D\"/><Cell col=\"42\" text=\"bind:CLN_333_01\"/><Cell col=\"43\" text=\"bind:CLN_333_01_D\"/><Cell col=\"44\" text=\"bind:CLN_333_02\"/><Cell col=\"45\" text=\"bind:CLN_333_02_D\"/><Cell col=\"46\" text=\"bind:CLN_336_01\"/><Cell col=\"47\" text=\"bind:CLN_336_01_D\"/><Cell col=\"48\" text=\"bind:CLN_336_02\"/><Cell col=\"49\" text=\"bind:CLN_336_02_D\"/><Cell col=\"50\" text=\"expr:CLN_331_01+CLN_332_01+CLN_333_01+CLN_334_01+CLN_335_01+CLN_336_01\"/><Cell col=\"51\" text=\"bind:CLN_3_01_D_ALL\"/><Cell col=\"52\" text=\"expr:CLN_331_02+CLN_332_02+CLN_333_02+CLN_334_02+CLN_335_02+CLN_336_02\"/><Cell col=\"53\" text=\"bind:CLN_3_02_D_ALL\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합  계:\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&apos;CLN_111_01&apos;)\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;CLN_111_01_D&apos;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;CLN_111_02&apos;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;CLN_111_02_D&apos;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;CLN_221_01&apos;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;CLN_221_01_D&apos;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;CLN_221_02&apos;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;CLN_221_02_D&apos;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;CLN_222_01&apos;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;CLN_222_01_D&apos;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;CLN_222_02&apos;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&apos;CLN_222_02_D&apos;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&apos;CLN_223_01&apos;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&apos;CLN_223_01_D&apos;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&apos;CLN_223_02&apos;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&apos;CLN_223_02_D&apos;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&apos;CLN_224_01&apos;)\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&apos;CLN_224_01_D&apos;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&apos;CLN_224_02&apos;)\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&apos;CLN_224_02_D&apos;)\"/><Cell col=\"22\" text=\"expr:dataset.getSum(&apos;CLN_221_01&apos;) + dataset.getSum(&apos;CLN_222_01&apos;) + dataset.getSum(&apos;CLN_223_01&apos;) + dataset.getSum(&apos;CLN_224_01&apos;)\"/><Cell col=\"23\" text=\"expr:dataset.getSum(&apos;CLN_2_01_D_ALL&apos;)\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&apos;CLN_221_02&apos;) + dataset.getSum(&apos;CLN_222_02&apos;) + dataset.getSum(&apos;CLN_223_02&apos;) + dataset.getSum(&apos;CLN_224_02&apos;)\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&apos;CLN_2_02_D_ALL&apos;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&apos;CLN_334_01&apos;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&apos;CLN_334_01_D&apos;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&apos;CLN_334_02&apos;)\"/><Cell col=\"29\" text=\"expr:dataset.getSum(&apos;CLN_334_02_D&apos;)\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&apos;CLN_331_01&apos;)\"/><Cell col=\"31\" text=\"expr:dataset.getSum(&apos;CLN_331_01_D&apos;)\"/><Cell col=\"32\" text=\"expr:dataset.getSum(&apos;CLN_331_02&apos;)\"/><Cell col=\"33\" text=\"expr:dataset.getSum(&apos;CLN_331_02_D&apos;)\"/><Cell col=\"34\" text=\"expr:dataset.getSum(&apos;CLN_332_01&apos;)\"/><Cell col=\"35\" text=\"expr:dataset.getSum(&apos;CLN_332_01_D&apos;)\"/><Cell col=\"36\" text=\"expr:dataset.getSum(&apos;CLN_332_02&apos;)\"/><Cell col=\"37\" text=\"expr:dataset.getSum(&apos;CLN_332_02_D&apos;)\"/><Cell col=\"38\" text=\"expr:dataset.getSum(&apos;CLN_335_01&apos;)\"/><Cell col=\"39\" text=\"expr:dataset.getSum(&apos;CLN_335_01_D&apos;)\"/><Cell col=\"40\" text=\"expr:dataset.getSum(&apos;CLN_335_02&apos;)\"/><Cell col=\"41\" text=\"expr:dataset.getSum(&apos;CLN_335_02_D&apos;)\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&apos;CLN_333_01&apos;)\"/><Cell col=\"43\" text=\"expr:dataset.getSum(&apos;CLN_333_01_D&apos;)\"/><Cell col=\"44\" text=\"expr:dataset.getSum(&apos;CLN_333_02&apos;)\"/><Cell col=\"45\" text=\"expr:dataset.getSum(&apos;CLN_333_02_D&apos;)\"/><Cell col=\"46\" text=\"expr:dataset.getSum(&apos;CLN_336_01&apos;)\"/><Cell col=\"47\" text=\"expr:dataset.getSum(&apos;CLN_336_01_D&apos;)\"/><Cell col=\"48\" text=\"expr:dataset.getSum(&apos;CLN_336_02&apos;)\"/><Cell col=\"49\" text=\"expr:dataset.getSum(&apos;CLN_336_02_D&apos;)\"/><Cell col=\"50\" text=\"expr:dataset.getSum(&apos;CLN_331_01&apos;) + dataset.getSum(&apos;CLN_332_01&apos;) + dataset.getSum(&apos;CLN_333_01&apos;) + dataset.getSum(&apos;CLN_334_01&apos;) + dataset.getSum(&apos;CLN_335_01&apos;) + dataset.getSum(&apos;CLN_336_01&apos;)\"/><Cell col=\"51\" text=\"expr:dataset.getSum(&apos;CLN_3_01_D_ALL&apos;)\"/><Cell col=\"52\" text=\"expr:dataset.getSum(&apos;CLN_331_02&apos;) + dataset.getSum(&apos;CLN_332_02&apos;) + dataset.getSum(&apos;CLN_333_02&apos;) + dataset.getSum(&apos;CLN_334_02&apos;) + dataset.getSum(&apos;CLN_335_02&apos;) + dataset.getSum(&apos;CLN_336_02&apos;)\"/><Cell col=\"53\" text=\"expr:dataset.getSum(&apos;CLN_3_02_D_ALL&apos;)\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"120\"/><Column size=\"40\"/><Column size=\"53\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학과명\"/><Cell col=\"1\" rowspan=\"2\" text=\"주야\"/><Cell col=\"2\" rowspan=\"2\" text=\"입학정원\"/><Cell col=\"3\" colspan=\"2\" text=\"일반전형\"/><Cell col=\"5\" colspan=\"5\" text=\"정원내\"/><Cell col=\"10\" colspan=\"7\" text=\"정원외\"/><Cell row=\"1\" col=\"3\" text=\"일반전형\"/><Cell row=\"1\" col=\"4\" text=\"계\"/><Cell row=\"1\" col=\"5\" text=\"일반과정\"/><Cell row=\"1\" col=\"6\" text=\"전문과정\"/><Cell row=\"1\" col=\"7\" text=\"특기자\"/><Cell row=\"1\" col=\"8\" text=\"대학자체\"/><Cell row=\"1\" col=\"9\" text=\"계\"/><Cell row=\"1\" col=\"10\" text=\"전문대\"/><Cell row=\"1\" col=\"11\" text=\"농어촌\"/><Cell row=\"1\" col=\"12\" text=\"수급자\"/><Cell row=\"1\" col=\"13\" text=\"외국인\"/><Cell row=\"1\" col=\"14\" text=\"만학도\"/><Cell row=\"1\" col=\"15\" text=\"특수교육\"/><Cell row=\"1\" col=\"16\" text=\"계\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:JEONGWON\"/><Cell col=\"3\" text=\"expr:CLN_111_01_D+CLN_111_02_D\"/><Cell col=\"4\" text=\"expr:CLN_1_01_D_ALL+CLN_1_02_D_ALL\"/><Cell col=\"5\" text=\"expr:CLN_221_01_D+CLN_221_02_D\"/><Cell col=\"6\" text=\"expr:CLN_222_01_D+CLN_222_02_D\"/><Cell col=\"7\" text=\"expr:CLN_223_01_D+CLN_223_02_D\"/><Cell col=\"8\" text=\"expr:CLN_224_01_D+CLN_224_02_D\"/><Cell col=\"9\" text=\"expr:CLN_2_01_D_ALL+CLN_2_02_D_ALL\"/><Cell col=\"10\" text=\"expr:CLN_334_01_D+CLN_334_02_D\"/><Cell col=\"11\" text=\"expr:CLN_331_01_D+CLN_331_02_D\"/><Cell col=\"12\" text=\"expr:CLN_332_01_D+CLN_332_02_D\"/><Cell col=\"13\" text=\"expr:CLN_335_01_D+CLN_335_02_D\"/><Cell col=\"14\" text=\"expr:CLN_333_01_D+CLN_333_02_D\"/><Cell col=\"15\" text=\"expr:CLN_336_01_D+CLN_336_02_D\"/><Cell col=\"16\" text=\"expr:CLN_3_01_D_ALL+CLN_3_02_D_ALL\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합  계 :\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;CLN_111_01_D&apos;)+dataset.getSum(&apos;CLN_111_02_D&apos;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;CLN_1_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_1_02_D_ALL&apos;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;CLN_221_01_D&apos;)+dataset.getSum(&apos;CLN_221_02_D&apos;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;CLN_222_01_D&apos;)+dataset.getSum(&apos;CLN_222_02_D&apos;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;CLN_223_01_D&apos;)+dataset.getSum(&apos;CLN_223_02_D&apos;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;CLN_224_01_D&apos;)+dataset.getSum(&apos;CLN_224_02_D&apos;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;CLN_2_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_2_02_D_ALL&apos;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;CLN_334_01_D&apos;)+dataset.getSum(&apos;CLN_334_02_D&apos;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&apos;CLN_331_01_D&apos;)+dataset.getSum(&apos;CLN_331_02_D&apos;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;CLN_332_01_D&apos;)+dataset.getSum(&apos;CLN_332_02_D&apos;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&apos;CLN_335_01_D&apos;)+dataset.getSum(&apos;CLN_335_02_D&apos;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&apos;CLN_333_01_D&apos;)+dataset.getSum(&apos;CLN_333_02_D&apos;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&apos;CLN_336_01_D&apos;)+dataset.getSum(&apos;CLN_336_02_D&apos;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&apos;CLN_3_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_3_02_D_ALL&apos;)\"/></Band></Format><Format id=\"format01\"><Columns><Column size=\"120\"/><Column size=\"50\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학과명\"/><Cell col=\"1\" rowspan=\"2\" text=\"입학정원\"/><Cell col=\"2\" rowspan=\"2\" text=\"주야\"/><Cell col=\"3\" colspan=\"2\" text=\"일반전형\"/><Cell col=\"5\" colspan=\"2\" text=\"정원내\"/><Cell col=\"7\" colspan=\"2\" text=\"정원외\"/><Cell col=\"9\" colspan=\"2\" text=\"계\"/><Cell row=\"1\" col=\"3\" text=\"합격수\"/><Cell row=\"1\" col=\"4\" text=\"등록수\"/><Cell row=\"1\" col=\"5\" text=\"합격수\"/><Cell row=\"1\" col=\"6\" text=\"등록수\"/><Cell row=\"1\" col=\"7\" text=\"합격수\"/><Cell row=\"1\" col=\"8\" text=\"등록수\"/><Cell row=\"1\" col=\"9\" text=\"합격수\"/><Cell row=\"1\" col=\"10\" text=\"등록수\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\"/><Cell col=\"1\" text=\"bind:JEONGWON\"/><Cell col=\"2\" text=\"bind:JUYA_GBNM\"/><Cell col=\"3\" text=\"expr:CLN_111_01\"/><Cell col=\"4\" text=\"expr:CLN_111_01_D + CLN_111_02_D\"/><Cell col=\"5\" text=\"expr:CLN_221_01+CLN_222_01+CLN_223_01+CLN_224_01\"/><Cell col=\"6\" text=\"expr:CLN_221_01_D+CLN_222_01_D+CLN_223_01_D+CLN_224_01_D+CLN_221_02_D+CLN_222_02_D+CLN_223_02_D+CLN_224_02_D\"/><Cell col=\"7\" text=\"expr:CLN_331_01+CLN_332_01+CLN_333_01+CLN_334_01+CLN_335_01+CLN_336_01\"/><Cell col=\"8\" text=\"expr:CLN_331_01_D+CLN_332_01_D+CLN_333_01_D+CLN_334_01_D+CLN_335_01_D+CLN_336_01_D+CLN_331_02_D+CLN_332_02_D+CLN_333_02_D+CLN_334_02_D+CLN_335_02_D+CLN_336_02_D\"/><Cell col=\"9\" text=\"expr:CLN_111_01+CLN_221_01+CLN_222_01+CLN_223_01+CLN_224_01+CLN_331_01+CLN_332_01+CLN_333_01+CLN_334_01+CLN_335_01+CLN_336_01\"/><Cell col=\"10\" text=\"expr:CLN_1_01_D_ALL+CLN_2_01_D_ALL+CLN_3_01_D_ALL+CLN_1_02_D_ALL+CLN_2_02_D_ALL+CLN_3_02_D_ALL\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합  계 :\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&apos;CLN_111_01&apos;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&apos;CLN_111_01_D&apos;) + dataset.getSum(&apos;CLN_111_02_D&apos;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&apos;CLN_221_01&apos;)+dataset.getSum(&apos;CLN_222_01&apos;)+dataset.getSum(&apos;CLN_223_01&apos;)+dataset.getSum(&apos;CLN_224_01&apos;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&apos;CLN_221_01_D&apos;)+dataset.getSum(&apos;CLN_222_01_D&apos;)+dataset.getSum(&apos;CLN_223_01_D&apos;)+dataset.getSum(&apos;CLN_224_01_D&apos;)+dataset.getSum(&apos;CLN_221_02_D&apos;)+dataset.getSum(&apos;CLN_222_02_D&apos;)+dataset.getSum(&apos;CLN_223_02_D&apos;)+dataset.getSum(&apos;CLN_224_02_D&apos;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&apos;CLN_331_01&apos;)+dataset.getSum(&apos;CLN_332_01&apos;)+dataset.getSum(&apos;CLN_333_01&apos;)+dataset.getSum(&apos;CLN_334_01&apos;)+dataset.getSum(&apos;CLN_335_01&apos;)+dataset.getSum(&apos;CLN_336_01&apos;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&apos;CLN_331_01_D&apos;)+dataset.getSum(&apos;CLN_332_01_D&apos;)+dataset.getSum(&apos;CLN_333_01_D&apos;)+dataset.getSum(&apos;CLN_334_01_D&apos;)+dataset.getSum(&apos;CLN_335_01_D&apos;)+dataset.getSum(&apos;CLN_336_01_D&apos;)+dataset.getSum(&apos;CLN_331_02_D&apos;)+dataset.getSum(&apos;CLN_332_02_D&apos;)+dataset.getSum(&apos;CLN_333_02_D&apos;)+dataset.getSum(&apos;CLN_334_02_D&apos;)+dataset.getSum(&apos;CLN_335_02_D&apos;)+dataset.getSum(&apos;CLN_336_02_D&apos;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;CLN_111_01&apos;)+dataset.getSum(&apos;CLN_221_01&apos;)+dataset.getSum(&apos;CLN_222_01&apos;)+dataset.getSum(&apos;CLN_223_01&apos;)+dataset.getSum(&apos;CLN_224_01&apos;)+dataset.getSum(&apos;CLN_331_01&apos;)+dataset.getSum(&apos;CLN_332_01&apos;)+dataset.getSum(&apos;CLN_333_01&apos;)+dataset.getSum(&apos;CLN_334_01&apos;)+dataset.getSum(&apos;CLN_335_01&apos;)+dataset.getSum(&apos;CLN_336_01&apos;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;CLN_1_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_2_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_3_01_D_ALL&apos;)+dataset.getSum(&apos;CLN_1_02_D_ALL&apos;)+dataset.getSum(&apos;CLN_2_02_D_ALL&apos;)+dataset.getSum(&apos;CLN_3_02_D_ALL&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("모집합격:등록현황");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchGongji","value","ds_input","GONGJI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchMojipTo","value","ds_input","MOJIP_GBCDTO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN07_1010710_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010710_M.xfdl(모집합격:등록현황)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/21
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

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsGongji|dsMojip";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01057|00005";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_GijunYyyy();
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
        		case "print" :       // 출력
                         this.fn_Print();
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
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
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
        	var strUrl      = "/prj/EN/EN07/Retrieve_1010710_M.do";
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
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 출력
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var IPSI_YYYY				= this.ds_input.getColumn(0, "IPSI_YYYY");
        	var MOJIP_GBCD 				= this.ds_input.getColumn(0, "MOJIP_GBCD");
        	var GONGJI_GBCD 			= this.ds_input.getColumn(0, "GONGJI_GBCD");
        	var chk1 = this.chkGansohwa1.value;	// 간략1
        	var chk2 = this.chkGansohwa2.value;	// 간략2

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , GONGJI_GBCD:GONGJI_GBCD
        				  }

        	if(chk1 == false && chk2 == false)
        	{
        		if(IPSI_YYYY < 2020)
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_01.crf',  param);
        		}
        		else
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_01_2.crf',  param);
        		}
        	}
        	else if(chk1 == true && chk2 == false)
        	{
        		if(IPSI_YYYY < 2020)
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_02.crf',  param);
        		}
        		else
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_02_2.crf',  param);
        		}
        	}
        	else if(chk1 == false && chk2 == true)
        	{
        		if(IPSI_YYYY < 2020)
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_03.crf',  param);
        		}
        		else
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010710_M_03_2.crf',  param);
        		}
        	}
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 간략하게 보기1
        this.chkGansohwa1_onclick = function(obj,e)
        {
        	if(obj.value)
        	{
        		this.grdMaster.set_formatid("format00");		// 간략하게보기1
        		this.chkGansohwa2.set_value(false);
        	}
        	else
        	{
        		this.grdMaster.set_formatid("default");			// 기본
        	}
        };

        // 간략하게 보기2
        this.chkGansohwa2_onclick = function(obj,e)
        {
        	if(obj.value)
        	{
        		this.grdMaster.set_formatid("format01");		// 간략하게보기2
        		this.chkGansohwa1.set_value(false);
        	}
        	else
        	{
        		this.grdMaster.set_formatid("default");			// 기본
        	}
        };

        // 모집구분 FROM 변경시
        this.divSearch_cboSearchMojip_onitemchanged = function(obj,e)
        {
        	this.ds_input.setColumn(0, "MOJIP_GBCDTO", this.ds_input.getColumn(0, "MOJIP_GBCD"));
        };

        /**********************************************************************
                09. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.divSearch.form.cboSearchGongji.set_index(1);
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojipTo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCDTO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGongji_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GONGJI_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.divSearch.form.cboSearchGongji.addEventHandler("onkeydown",this.divSearch_cboSearchGongji_onkeydown,this);
            this.divSearch.form.cboSearchMojipTo.addEventHandler("onkeydown",this.divSearch_cboSearchMojipTo_onkeydown,this);
            this.chkGansohwa1.addEventHandler("onclick",this.chkGansohwa1_onclick,this);
            this.chkGansohwa2.addEventHandler("onclick",this.chkGansohwa2_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN07_1010710_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
