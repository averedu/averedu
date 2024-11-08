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
            this.set_titletext("월별근로장학관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GEUNRO_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GEUNRO_MM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GEUNRO_YYYY\"/><Col id=\"GEUNRO_MM\"/><Col id=\"HAKBEON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GEUNRO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GEUNRO_MM\" type=\"STRING\" size=\"2\"/><Column id=\"SUB_GEUNRO_MM\" type=\"STRING\" size=\"3\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEUNRO_JANGSO\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"EUNHAENG_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FILTER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJigeupYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">지급</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAKBEON_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJigeupYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">지급</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaeng", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","63","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("월별근로장학 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","143","62","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1",null,"1502","28",null,"85",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0",null,"120","28",null,"85",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("근로년월");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","80",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","671",null,"120","28",null,"85",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0",null,"135","22",null,"116",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("월별근로장학 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","679",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","651","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("33");
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

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("근로년월");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","531","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","78","0","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","356","6","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","366","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyonaeoe","621","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchGyonaeoe");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","88","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","256","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","731","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","248","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00","611","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63","175","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("-");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchMonth","188","9","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            obj.set_min("1");
            obj.set_max("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","496","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","761","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00_00","841","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJigeup","851","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJigeupYn");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_02","1",null,"1502","28",null,"57",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","0",null,"120","28",null,"57",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","671",null,"120","28",null,"57",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("근로장소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","1",null,"1502","28",null,"29",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","0",null,"120","28",null,"29",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("지급금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00","278",null,"120","28",null,"29",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00","671",null,"120","28",null,"29",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00","1",null,"1502","28",null,"1",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_00","0",null,"120","28",null,"1",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"55","85","25","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀 업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"55","125","25","90",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀 양식 다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelAll",null,"55","75","25","220",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakCd","401",null,"120","22",null,"60",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnJanghak","523",null,"22","22",null,"60",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm","548",null,"120","22",null,"60",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","401",null,"120","22",null,"88",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","523",null,"22","22",null,"88",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaksaengNm","548",null,"120","22",null,"88",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupAmt","122",null,"153","22",null,"32",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","122",null,"1378","22",null,"4",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","793",null,"153","22",null,"88",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_datacolumn("DEPT_NM");
            obj.set_codecolumn("DEPT_CD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGrdHakgwa");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJangso","793",null,"153","22",null,"60",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01","948",null,"120","28",null,"85",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_02","948",null,"120","28",null,"29",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","1070",null,"153","22",null,"88",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_datacolumn("DEPT_NM");
            obj.set_codecolumn("DEPT_CD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGrdHakgwa");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","87",null,null,"0","149",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"전공\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"교내외구분\"/><Cell col=\"7\" text=\"장학명\"/><Cell col=\"8\" text=\"근로장소\"/><Cell col=\"9\" text=\"은행명\"/><Cell col=\"10\" text=\"계좌번호\"/><Cell col=\"11\" text=\"지급금액\"/><Cell col=\"12\" text=\"지급여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:JEONGONG_NM\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:HAKBEON\"/><Cell col=\"5\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"6\" text=\"bind:GYONAEOE_GBCD\" displaytype=\"combotext\" combodataset=\"dsGyonaeoe\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:GEUNRO_JANGSO\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:EUNHAENG_GBCD\" displaytype=\"expr:EUNHAENG_GBCD == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\" combodataset=\"dsBank\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"10\" text=\"bind:GYEJWA_NO\"/><Cell col=\"11\" textAlign=\"right\" text=\"bind:JIGEUP_AMT\"/><Cell col=\"12\" text=\"bind:JIGEUP_YN\" combodataset=\"dsJigeupYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_02","278",null,"120","28",null,"85",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_01","278",null,"120","28",null,"57",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01_00","1225",null,"120","28",null,"85",null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","1347",null,"153","22",null,"88",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_02_00","1225",null,"120","28",null,"29",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyejwaNo","1347",null,"153","22",null,"32",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","122",null,"80","22",null,"88",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63","207",null,"10","20",null,"89",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Spin("spnMonth","216",null,"60","22",null,"88",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyonaeoe","122",null,"153","22",null,"60",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGyonaeoe");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJigeupYn","401",null,"267","22",null,"32",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJigeupYn");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBank","1070",null,"153","22",null,"32",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsBank");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJigeupDt","793",null,"153","22",null,"32",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("월별근로장학관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item41","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchGyonaeoe","value","ds_input","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.spnSearchYYYY","value","ds_input","GEUNRO_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtJanghakCd","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtJanghakNm","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHaksaengNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtJigeupAmt","value","dsMaster","JIGEUP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtJangso","value","dsMaster","GEUNRO_JANGSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cboJeongong","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.spnSearchMonth","value","ds_input","GEUNRO_MM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.cboSearchJigeup","value","ds_input","JIGEUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","cboGyonaeoe","value","dsMaster","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboJigeupYn","value","dsMaster","JIGEUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboBank","value","dsMaster","EUNHAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calJigeupDt","value","dsMaster","JIGEUP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","spnYYYY","value","dsMaster","GEUNRO_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","spnMonth","value","dsMaster","SUB_GEUNRO_MM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtGyejwaNo","value","dsMaster","GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UE05_2060501_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE05_2060501_M.xfdl(월별근로장학관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/16
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
        this.lvchkColidDs   = "HAKBEON$JANGHAK_CD$GEUNRO_JANGSO";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$장학$근로장소";
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
            var strDs    = "dsSearchGyonaeoe|dsGyonaeoe|dsBank|dsHaknyeon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "02001|02001|00040|00060";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsGrdHakgwa";
        	strComb     = "N";
        	svcId       = "HakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.cboHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        };

        this.fn_PostformInit = function()
        {
        	this.ds_input.setColumn(0, "GEUNRO_YYYY", this.fn_Today().substr(0, 4).toString());
        	if(this.fn_Today().substr(4, 1).toString() == "0") {
        		this.ds_input.setColumn(0, "GEUNRO_MM", this.fn_Today().substr(5, 1).toString());
        	} else {
        		this.ds_input.setColumn(0, "GEUNRO_MM", this.fn_Today().substr(4, 2).toString());
        	}
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
        			case "DelAll":
                            this.fn_Ret();
                        break;
        			case "ExcelUpload":
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
        		case "haksaeng" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", sRtn[10]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_CD", sRtn[12]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_NM", sRtn[13]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKNYEON", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JUYA_GBCD", sRtn[22]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "janghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYONAEOE_GBCD", sRtn[2]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "popExcleFileUploadP01":
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        				    this.ds_input.setColumn(0, "ATTFL_NO", sRtn[1]); // 첨부파일번호

        					var strSvc      = "ExcelUpload";
        					var strUrl      = "/prj/UE/UE05/Excel_2060501_M.do";
        					var strInDs     = "ds_input=ds_input:a";
        					var strOutDs    = "dsMaster=dsMaster";
        					var strArg      = "";
        					var GBV_MENUID    = objApp.gv_cutPrgId;
        					if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        					{
        						strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        					}
        					var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        					var strASync    = true;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        					this.gfn_Transaction(strSvc
        									   , strUrl
        									   , strInDs
        									   , strOutDs
        									   , strArg
        									   , strCallBack
        									   , strASync);
        				}
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_YYYY")))
        	{
        		this.gfn_alert("근로년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_MM")))
        	{
        		this.gfn_alert("근로월을 입력해주세요.","입력정보","","warning");
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
            var strUrl      = "/prj/UE/UE05/Retrieve_2060501_M.do";
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
            this.dsMaster.setColumn(nRow, 'GEUNRO_YYYY', this.ds_input.getColumn(0, "GEUNRO_YYYY"));
        	this.dsMaster.setColumn(nRow, 'SUB_GEUNRO_MM', this.ds_input.getColumn(0, "GEUNRO_MM"));
        	this.dsMaster.setColumn(nRow, 'JIGEUP_AMT', '0');
        	this.dsMaster.setColumn(nRow, 'JIGEUP_YN', '0');
        	this.dsMaster.setColumn(nRow, 'EUNHAENG_GBCD', '');
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
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
            var strUrl      = "/prj/UE/UE05/Delete_2060501_M.do";
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
                08. 전체삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDelAll = function()
        {
            var result = this.gfn_confirm("검색조건 기준의 근로년월의 데이터를 삭제합니다. 삭제 하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DelAll = function()
        {
            if(!this.fn_PreDelAll())
            {
                return false;
            }
            var strSvc      = "DelAll";
            var strUrl      = "/prj/UE/UE05/DeleteAll_2060501_M.do";
            var strInDs     = "ds_input=ds_input";
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

        /**********************************************************************
                09. 저장 함수 선언
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
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i = 0 ; i < this.dsMaster.rowcount; i++) {
        	    if(this.dsMaster.getRowType(i) == '2' || this.dsMaster.getRowType(i) == '4') {
                    var jigeupAmt = this.dsMaster.getColumn(i, 'JIGEUP_AMT');
        			var jigeupYn = this.dsMaster.getColumn(i, 'JIGEUP_YN');
        			var jigeupDt = this.dsMaster.getColumn(i, 'JIGEUP_DT');
        			var eunhaengGbcd = this.dsMaster.getColumn(i, 'EUNHAENG_GBCD');
        			var gyejwaNo = this.dsMaster.getColumn(i, 'GYEJWA_NO');

        		    if(this.gfn_isNull(jigeupAmt) || jigeupAmt == '0') {
        		        this.alert('지급금액을 0원 이상 입력해주세요.');
        		    	return false;
        		    }
        			if(jigeupYn == '1' && this.gfn_isNull(jigeupDt)) {
        				this.alert('필수입력항목 지급일자를 입력 하지 않으셨습니다.');
        				return false;
        		    }
        			if(!this.gfn_isNull(eunhaengGbcd) == '1' && this.gfn_isNull(gyejwaNo)) {
        				this.alert('필수입력항목 계좌번호를 입력 하지 않으셨습니다.');
        				return false;
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
            var strUrl      = "/prj/UE/UE05/Save_2060501_M.do";
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
                10. 엑셀 양식 다운로드
        ***********************************************************************/
        this.btnDownload_onclick = function(obj,e)
        {
        	this.gfn_attFileDownload("attachdfd44048493b6c549a91620ad9", "001");
        };

        /**********************************************************************
                11. 엑셀 업로드
        ***********************************************************************/
        this.btnUpload_onclick = function(obj,e)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sValue01 		= "";				        // 부모에서 넘어가는 파라미터(첨부파일번호)
        	var lv_sValue02 		= "1";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        	var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        	var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        	var lv_sValue05 		= "univ_upload";			// 부모에서 넘어가는 파라미터(도메인네임)
        	var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)
        	var sPopId 			= "popExcleFileUploadP01";
        	var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05       // 파라미터5
        						  , pv_sVal06:lv_sValue06};     // 파라미터6
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {};

        	this.dsDummy.clearData();
        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);
        };

        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        /**********************************************************************
                12. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                13. 각종함수
        ***********************************************************************/
        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        // 지급여부에 따른 지급일자 req
        this.fn_SetJigeupDtReq = function ()
        {
            var rowNum = this.dsMaster.rowposition;
        	var jigeupYn = this.dsMaster.getColumn(rowNum, 'JIGEUP_YN');

        	if(jigeupYn == '1') { // Y
        		this.calJigeupDt.set_cssclass('point');
        	    this.calJigeupDt.set_readonly(false);
        	}
        	else if(jigeupYn == '0') {
        		this.calJigeupDt.set_cssclass("");
        		this.calJigeupDt.set_readonly(true);
        	}
        };

        // 은행구분코드에 따른 계좌번호 readonly
        this.fn_SetGyejwaNoReadonly = function ()
        {
            var rowNum = this.dsMaster.rowposition;
        	var eunhaengGbcd = this.dsMaster.getColumn(rowNum, 'EUNHAENG_GBCD');

        	if(this.gfn_isNull(eunhaengGbcd)) { // 은행구분코드 미입력
        	    this.edtGyejwaNo.set_readonly(true);
        		this.edtGyejwaNo.set_cssclass("");
        	}
        	else { // 은행구분코드 입력
        	    this.edtGyejwaNo.set_readonly(false);
        		this.edtGyejwaNo.set_cssclass('point');
        	}
        };

        /**********************************************************************
                14. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.btnHakbeon_onclick = function(obj,e)
        {
        	var hakbeonNm = this.edtHaksaengNm.value;
        	this.fn_setCallHaksaengPopup(obj.name, hakbeonNm)
        };
        // 장학 팝업
        this.btnJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.edtJanghakNm.value;
        	this.fn_setCallJanghakPopup(obj.name, janghakCdNm)
        };

        this.fn_setCallHaksaengPopup = function(strObjName, strSearchValue)
        {
        	this.dsHaksaeng.clearData();
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchHaksaeng";
        		var strUrl      = "/prj/com/Retrieve_P04.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsHaksaeng=dsMaster";
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

        	if(this.dsHaksaeng.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", this.dsHaksaeng.getColumn(0,"HAKBEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", this.dsHaksaeng.getColumn(0,"HAKSAENG_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", this.dsHaksaeng.getColumn(0,"HAKGWA_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsHaksaeng.getColumn(0,"HAKGWA_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_CD", this.dsHaksaeng.getColumn(0,"JEONGONG_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_NM", this.dsHaksaeng.getColumn(0,"JEONGONG_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKNYEON", this.dsHaksaeng.getColumn(0,"HAKNYEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JUYA_GBCD", this.dsHaksaeng.getColumn(0,"JUYA_GBCD"));
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("haksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallJanghakPopup = function(strObjName, strSearchValue)
        {
        	this.dsJanghakNm.clearData();
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "JANGHAK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchJanghak";
        		var strUrl      = "/prj/com/Retrieve_P11.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsJanghakNm=dsMaster";
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

        	if(this.dsJanghakNm.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYONAEOE_GBCD", this.dsJanghakNm.getColumn(0,"GYONAEOE_GBCD"));
        	}
        	else
        	{
        		var oArg = {janghakCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                15. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 지급여부에 따른 지급일자 req
            this.fn_SetJigeupDtReq();
        	// 은행구분코드에 따른 계좌번호 readonly
            this.fn_SetGyejwaNoReadonly();

        	if(this.dsMaster.getRowType(e.newrow) != '2') {
        		this.edtHaksaengNm.set_readonly(true);
        		this.btnHakbeon.set_enable(false);
        		this.edtJanghakNm.set_readonly(true);
        		this.btnJanghak.set_enable(false);
        	}
        	else {
        	    this.edtHaksaengNm.set_readonly(false);
        		this.btnHakbeon.set_enable(true);
        		this.edtJanghakNm.set_readonly(false);
        		this.btnJanghak.set_enable(true);
        	}
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	// 근로월 변경
        	if(e.columnid == 'SUB_GEUNRO_MM')
        	{
        		var geunroMm = e.newvalue < 10 ? ('0'.concat(e.newvalue)) : e.newvalue;
        		this.dsMaster.setColumn(e.row, 'GEUNRO_MM', geunroMm);
            }
        	// 지급여부 변경
        	else if(e.columnid == 'JIGEUP_YN')
        	{
        	    if(e.newvalue == '1') { // Y
        		    this.dsMaster.setColumn(e.row, 'JIGEUP_DT', this.fn_Today());
        		}
        	    else if(e.newvalue == '0') {
        		    this.dsMaster.setColumn(e.row, 'JIGEUP_DT', '');
        		}
        		// 지급여부에 따른 지급일자 req
                this.fn_SetJigeupDtReq();
        	}
        	// 은행 구분코드 변경
        	else if(e.columnid == 'EUNHAENG_GBCD')
        	{
        	    if(this.gfn_isNull(e.newvalue)) {
        		    this.dsMaster.setColumn(e.row, 'GYEJWA_NO', '');
        		}
        		// 은행구분코드에 따른 계좌번호 readonly
                this.fn_SetGyejwaNoReadonly();
        	}
        	else if (e.columnid == "HAKSAENG_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHaksaengPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "JANGHAK_NM")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "JANGHAK_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallJanghakPopup(e.columnid, e.newvalue);
        			}
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
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.fn_Enter = function(obj,e)
        {
        	if(e.keycode == '13') {
        	    this.fn_Ret();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyonaeoe.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchMonth.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJigeup.addEventHandler("onkeydown",this.fn_Enter,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnDelAll.addEventHandler("onclick",this.fn_DelAll,this);
            this.btnJanghak.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.btnHakbeon.addEventHandler("onclick",this.btnHakbeon_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.calJigeupDt.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE05_2060501_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
