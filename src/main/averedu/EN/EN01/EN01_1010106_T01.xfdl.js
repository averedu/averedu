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
            this.set_titletext("고교코드 업로드");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SIDO_GYOYUKCHEONG\" type=\"STRING\" size=\"100\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"50\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOYAKEO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"JEOKYONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEGONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GIJUN_YYYY_DAESANG_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN1\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN2\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN3\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN4\" type=\"STRING\" size=\"2\"/><Column id=\"DAESANG_YN5\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOKYONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeokyongGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGogyoGyeYeolGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchSebujiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableComp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">false</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchGogyoGyeYeolGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebuJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","45",null,"69","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Edit("edtSearchGogyoNm","1005","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJiyeok","391","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SearchJiyeok");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSebuJiyeok","634","36","253","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_SearchSebujiyeok");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","873","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("고교명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","541","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("세부지역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","299","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","540","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("고교코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","302","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeokyong","391","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJeokyongGbCd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-23","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("고교계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","381","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","515","-1","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","624","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","887","-1","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","995","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGogyo","100","36","177","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("ds_SearchGogyoGyeYeolGbCd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBigo","1005","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","915","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("비고여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoCd","634","9","253","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","277","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","124",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("고교코드 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","127","123",null,"24","1390",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","149",null,null,"10","182",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"226\"/><Column size=\"129\"/><Column size=\"128\"/><Column size=\"120\"/><Column size=\"134\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\"/><Cell col=\"1\" disptype=\"normal\" text=\"입시년도\"/><Cell col=\"2\" disptype=\"normal\" text=\"고교코드\"/><Cell col=\"3\" disptype=\"normal\" text=\"고교명\"/><Cell col=\"4\" disptype=\"normal\" text=\"고교계열\"/><Cell col=\"5\" disptype=\"normal\" text=\"지역\"/><Cell col=\"6\" disptype=\"normal\" text=\"세부지역\"/><Cell col=\"7\" disptype=\"normal\" text=\"시도\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_CD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_NM\" editmaxlength=\"100\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYOGYEYEOL_GBCD\" editmaxlength=\"10\" combodataset=\"dsGogyoGyeYeolGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIYEOK_GBCD\" editmaxlength=\"10\" combodataset=\"dsJiyeok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEBUJIYEOK_GBCD\" editmaxlength=\"10\" combodataset=\"dsSebuJiyeok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SIDO_GYOYUKCHEONG\" editmaxlength=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10",null,"155","22",null,"147",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("고교코드 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10",null,"1134","28",null,"118",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10",null,"1134","28",null,"91",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10",null,"1134","28",null,"37",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10",null,"1134","28",null,"64",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","10",null,"1134","28",null,"10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10",null,"150","28",null,"118",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","164",null,"119","22",null,"121",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","286",null,"120","28",null,"118",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("시도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","583",null,"100","28",null,"118",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("고교코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","795",null,"100","28",null,"118",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("고교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoNm","898",null,"242","22",null,"121",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_maxlength("33");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10",null,"150","28",null,"91",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","286",null,"120","28",null,"91",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJiyeok","409",null,"169","22",null,"94",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_jiyeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","583",null,"100","28",null,"91",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("세부지역");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSebuJiyeok","686",null,"106","22",null,"94",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("ds_sebujiyeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","795",null,"100","28",null,"91",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("고교계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","10",null,"150","82",null,"10",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso1","164",null,"120","22",null,"67",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_maxlength("166");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso2","164",null,"415","22",null,"40",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_maxlength("166");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuso3","164",null,"415","22",null,"14",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","583",null,"100","28",null,"63",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("고교약어명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoYakeo","686",null,"454","22",null,"67",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","583",null,"100","28",null,"36",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","686",null,"454","22",null,"40",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","164",null,"119","22",null,"94",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_maxlength("13");
            obj.set_inputtype("number,dot");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSido","409",null,"169","22",null,"121",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGogyo","898",null,"243","22",null,"94",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGogyoGyeYeolGbCd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGogyoCd","686",null,"106","22",null,"121",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_maxlength("10");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","114","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","141","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","510","619","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","10","646","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","610","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_05","10","20","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","11","37","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_39",null,"21","519","20","1030",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("※엑셀업로드 자료입력시 셀서식에서 속성을 일반으로 변경한 후, 입력하시기 바랍니다.");
            obj.set_cssclass("sta_WF_Desc02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnJuso","287",null,"101","22",null,"67",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("주소검색");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"12","80","25","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("고교코드 업로드");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","spnYYYY","value","dsMaster","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtGogyoNm","value","dsMaster","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboJiyeok","value","dsMaster","JIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtJuso1","value","dsMaster","POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtJuso2","value","dsMaster","JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtJuso3","value","dsMaster","SANGSE_JUSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtGogyoYakeo","value","dsMaster","GOGYOYAKEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtHpNo","value","dsMaster","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtSearchGogyoNm","value","ds_input","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchJiyeok","value","ds_input","JIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchSebuJiyeok","value","ds_input","SEBUJIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchBigo","value","ds_input","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJeokyong","value","ds_input","JEOKYONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchGogyo","value","ds_input","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchGogyoCd","value","ds_input","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGogyoCd","value","dsMaster","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtSido","value","dsMaster","SIDO_GYOYUKCHEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboSebuJiyeok","value","dsMaster","SEBUJIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","spnYYYY","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtGogyoCd","readonly","dsBindableComp","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","cboGogyo","value","dsMaster","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN01_1010106_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010106_T01.xfdl(고교코드 업로드)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/14
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
        this.lvchkColidDs   = "IPSI_YYYY$GOGYO_CD$GOGYO_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "입시년도$고교코드$고교명";
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
            var strDs    = "dsJeokyongGbCd|ds_SearchGogyoGyeYeolGbCd|dsGogyoGyeYeolGbCd|dsYn|dsJiyeok|dsSebuJiyeok";    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01022|01008|01008|01032|00053|00054";                          			 // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|S|T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
        			case "SearchJiyeok":
                            this.fn_PostSearchJiyeok();
                        break;
        			case "SearchSebuJiyeok":
                            this.fn_PostSearchSebuJiyeok();
                        break;
        			case "Jiyeok":
                            this.fn_PostJiyeok();
                        break;
        			case "SebuJiyeok":
                            this.fn_PostSebuJiyeok();
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
        			case "ExcelUpload":
        					this.gfn_alert("엑셀 업로드에 성공하였습니다.","저장정보","","information");
        					this.fn_Ret();
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
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010106_T01.do";
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
        	this.dsBindableComp.setColumn(0, "bReadonly", "true");
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
        	this.dsMaster.setColumn(nRow, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
        	this.dsMaster.setColumn(nRow, "JEOKYONG_GBCD", "1");
        	this.dsBindableComp.setColumn(0, "bReadonly", "false");
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
            var strUrl      = "/prj/EN/EN01/Delete_1010106_T01.do";
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
        	this.dsBindableComp.setColumn(0, "bReadonly", "true");
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
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

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
            var strUrl      = "/prj/EN/EN01/Save_1010106_T01.do";
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
        	this.dsBindableComp.setColumn(0, "bReadonly", "true");
        };

        /**********************************************************************
                09. 엑셀업로드 함수 선언
        ***********************************************************************/
        this.btnExcelUpload_onclick = function(obj,e)
        {
        	if(this.gfn_confirm("검색조건의 입시년도를 기준으로 업로드합니다.", "엑셀 업로드","","question"))
        	{
        		this.gfn_excelImportNsheet("dsExcelUpload","고교코드","","","excelUpload_succFunc","excelUpload_errorFunc",this);
        	}
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

        //주소입력
        this.btnJuso_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("주소를 검색할 데이터가 존재하지 않습니다.");
        	}
        	else
        	{
        		this.gfn_searchPost(this, searchPost);
        	}
        };

        this.postWebbrowser_close = function (obj,e) {
        	if (e.userdata != 'close') {
        		obj.user_callback(e.userdata);
        	} else {
        		obj.parent.removeChild('Post');
        		obj.destroy();
        		obj = null;
        	}
        };

        //주소검색
        function searchPost(postData){
        	var addr	= "";
        	if (postData.userSelectedType == "R"){
        		// 도로명주소
        		addr = postData.roadAddress;
        	}
        	else if (postData.userSelectedType == "J"){
        		// 지번주소
        		addr = postData.jibunAddress;
        	}

        	this.parent.edtJuso2.set_value(addr);				// 도로명/지번 주소
        	this.parent.edtJuso1.set_value(postData.zonecode);	// 우편번호 - 5자리
        };

        // 그리드 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "false");
        	}
        	else
        	{
        		this.dsBindableComp.setColumn(0, "bReadonly", "true");
        	}
        };

        /**********************************************************************
                11. 공통 함수
        ***********************************************************************/
        // 기준년도 조회
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GijunYyyy";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGijunYyyy = function()
        {
        	this.ds_input.setColumn(0,"IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_SearchJiyeok();
        	this.fn_Jiyeok();
        }

        // 지역 조회(검색조건)
        this.fn_SearchJiyeok = function()
        {
        	this.ds_SearchJiyeok.deleteAll();
        	this.ds_SearchSebujiyeok.deleteAll();

        	var strSvc      = "SearchJiyeok";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_JIYEOK.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchJiyeok=ds_jiyeok";
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
        }

        this.fn_PostSearchJiyeok = function()
        {
        	this.ds_SearchJiyeok.insertRow(0);
        	this.ds_SearchJiyeok.setColumn(0, 'CD','');
         	this.ds_SearchJiyeok.setColumn(0, 'CD_NM','전체');
        	this.divSearch.form.cboSearchJiyeok.set_index(0);

        	this.ds_SearchSebujiyeok.insertRow(0);
        	this.ds_SearchSebujiyeok.setColumn(0, 'CD','');
         	this.ds_SearchSebujiyeok.setColumn(0, 'CD_NM','전체');
        	this.divSearch.form.cboSearchSebuJiyeok.set_index(0);
        }

        // 세부지역 조회(검색조건)
        this.fn_SearchSebuJiyeok = function()
        {
        	var strSvc      = "SearchSebuJiyeok";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_SEBUJIYEOK.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchSebujiyeok=ds_sebujiyeok";
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
        }

        this.fn_PostSearchSebuJiyeok = function()
        {
        	this.ds_SearchSebujiyeok.insertRow(0);
        	this.ds_SearchSebujiyeok.setColumn(0, 'CD','');
         	this.ds_SearchSebujiyeok.setColumn(0, 'CD_NM','전체');
        	this.divSearch.form.cboSearchSebuJiyeok.set_index(0);
        }

        // 지역 조회(입력조건)
        this.fn_Jiyeok = function()
        {
        	this.ds_jiyeok.deleteAll();
        	this.ds_sebujiyeok.deleteAll();

        	var strSvc      = "Jiyeok";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_JIYEOK.do";
            var strInDs     = "ds_input=ds_dInput";
            var strOutDs    = "ds_jiyeok=ds_jiyeok";
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
        }

        this.fn_PostJiyeok = function()
        {
        	this.ds_jiyeok.insertRow(0);
        	this.ds_jiyeok.setColumn(0, 'CD','');
         	this.ds_jiyeok.setColumn(0, 'CD_NM','선택');
        	this.cboJiyeok.set_index(0);

        	this.ds_sebujiyeok.insertRow(0);
        	this.ds_sebujiyeok.setColumn(0, 'CD','');
         	this.ds_sebujiyeok.setColumn(0, 'CD_NM','선택');
        	this.cboSebuJiyeok.set_index(0);
        }

        // 세부지역 조회(입력조건)
        this.fn_SebuJiyeok = function()
        {
        	this.ds_dInput.setColumn(0, "JIYEOK_GBCD", this.ds_jiyeok.getColumn(this.cboJiyeok.index, "CD"));

        	var strSvc      = "SebuJiyeok";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_SEBUJIYEOK.do";
            var strInDs     = "ds_input=ds_dInput";
            var strOutDs    = "ds_sebujiyeok=ds_sebujiyeok";
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
        }

        this.fn_PostSebuJiyeok = function()
        {
        	this.ds_sebujiyeok.insertRow(0);
        	this.ds_sebujiyeok.setColumn(0, 'CD','');
         	this.ds_sebujiyeok.setColumn(0, 'CD_NM','선택');
        	this.cboSebuJiyeok.set_index(0);
        }

        // 중복 데이터 조회
        this.fn_unique = function(params)
        {
            var uniqueCk = 0;
            var array = new Array();
            for(var i = 0 ; i < params.length; i++){
                for(var j = 0 ; j < array.length ; j++){
                    if(array[j] == params[i]){
                        uniqueCk = 1;
                        break;
                    }
                }
                array[array.length] = params[i];
            }
            return uniqueCk;
        };

        // 엑셀업로드 성공
        this.excelUpload_succFunc = function()
        {
        	this.dsExcelUpload.updateColID(0, "GOGYO_CD");				// 학교코드
        	this.dsExcelUpload.updateColID(1, "SIDO_GYOYUKCHEONG");		// 시도교육청
        	this.dsExcelUpload.updateColID(2, "GOGYOYAKEO_NM");			// 학교약어명
        	this.dsExcelUpload.updateColID(3, "GOGYO_NM");				// 학교명
        	this.dsExcelUpload.updateColID(4, "POST");					// 우편번호
        	this.dsExcelUpload.updateColID(5, "JUSO");					// 주소
        	this.dsExcelUpload.updateColID(6, "TEL_NO");				// 전화번호
        	this.dsExcelUpload.updateColID(7, "BIGO");					// 비고

         	this.dsExcelUpload.set_updatecontrol(false);
         	this.dsExcelUpload.set_enableevent(false);

         	for(var i = 0 ; this.dsExcelUpload.rowcount > i ; i++)
        	{
        		this.dsExcelUpload.setRowType(i, Dataset.ROWTYPE_INSERT);
         	}
         	this.dsExcelUpload.set_updatecontrol(true);
         	this.dsExcelUpload.set_enableevent(true);

        	//중복 데이터 체크
        	var r = new Array();

        	for(var i = 0 ; i < this.dsExcelUpload.rowcount ; i++){
        		 var GOGYO_CD = this.dsExcelUpload.getColumn(i, "GOGYO_CD");
        		 r.push(GOGYO_CD);
        	}

        	if(this.fn_unique(r) == 0)
        	{
        		// 고교코드 테이블 삭제 후 추가
        		var strSvc      = "ExcelUpload";
        		var strUrl      = "/prj/ET/EN01/Upload_1010106_T01.do";
        		var strInDs     = "dsExcelUpload=dsExcelUpload:u";
        		var strOutDs    = "";
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
        	else
        	{
        		this.alert("저장된 데이터가 존재합니다.");
        	}
        }

        // 엑셀업로드 실패
        this.excelUpload_errorFunc = function()
        {
        	this.alert("엑셀을 업로드하는데 실패하였습니다.");
        }

        /**********************************************************************
                12. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJeokyong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOKYONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGogyo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYOGYEYEOL_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJiyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchSebuJiyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEBUJIYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchBigo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIGO",obj.value);
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
            this.divSearch.form.edtSearchGogyoNm.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoNm_onkeydown,this);
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onitemchanged",this.fn_SearchSebuJiyeok,this);
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.divSearch.form.cboSearchSebuJiyeok.addEventHandler("onkeydown",this.divSearch_cboSearchSebuJiyeok_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchJeokyong.addEventHandler("onkeydown",this.divSearch_cboSearchJeokyong_onkeydown,this);
            this.divSearch.form.cboSearchGogyo.addEventHandler("onkeydown",this.divSearch_cboSearchGogyo_onkeydown,this);
            this.divSearch.form.cboSearchBigo.addEventHandler("onkeydown",this.divSearch_cboSearchBigo_onkeydown,this);
            this.divSearch.form.edtSearchGogyoCd.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoCd_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.cboJiyeok.addEventHandler("onitemchanged",this.fn_SebuJiyeok,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.btnJuso.addEventHandler("onclick",this.btnJuso_onclick,this);
            this.btnExcelUpload.addEventHandler("onclick",this.btnExcelUpload_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("EN01_1010106_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
