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
            this.set_titletext("학기별장학금액관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/><Col id=\"HAKGI\"/><Col id=\"GYONAEOE_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_GIJUN_GEUMAEK_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_GIJUN_GEUMAEK_GBCD\" type=\"STRING\" size=\"1\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEYAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JEYAK_BUNRYU_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JEHAN_JOGEON\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSuhye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJigeupGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGijunGeumaek", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeyakGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeyakBunryu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cntInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCnt", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copyInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GIJUN_YYYY\"/><Col id=\"GIJUN_HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","63","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학기별 장학금액 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","163","62","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13",null,"87","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12",null,"87","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("장학코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"115","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00",null,"115","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("수혜구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSuhye",null,"118","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsSuhye");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01",null,"143","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01",null,"143","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("우선순위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUseonSeq",null,"146","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00",null,"171","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00",null,"171","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("입학금 지급구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00",null,"199","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00",null,"199","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("입학금 기준금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_01",null,"227","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_01",null,"227","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("입학금 비율/원");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnJanghak",null,"90","22","22","3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("17");
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
            obj.set_taborder("18");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00",null,"255","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01",null,"255","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("제약구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakGbcd",null,"258","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00",null,"283","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00",null,"283","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("제약분류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00",null,"311","601","28","0",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_01_00_00",null,"311","120","28","481",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("제약조건");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02",null,"87","120","28","193",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSueopryoJigeupGbcd",null,"174","163","22","28",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJigeupGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSueopryoGijunGeumaek",null,"202","163","22","28",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeyakJogeon",null,"314","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","1029","71","10",null,null,"10",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"55","135","25","0",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("학기별장학금액 복사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","-33","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","78","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","159","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","249","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","415","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyonaeoe","505","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchGyonaeoe");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","158","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","379","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","68","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","239","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00","495","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","635","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","660","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("지원구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00","740","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJiwon","750","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJiwon");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63_00",null,"59","77","20","224",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text(">>  대상년도");
            this.addChild(obj.name, obj);

            obj = new Spin("spnGijunYYYY","1119","58","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGijunHakgi","1202","58","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Spin("spnDaesangYYYY","1420","58","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00_00",null,"59","77","20","524",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("기준년도학기");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00",null,"171","120","28","193",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("수업료 지급구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIphakgeumJigeupGbcd",null,"174","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsJigeupGubun");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakCd",null,"90","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIphakgeumGijunGeumaek",null,"202","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_innerdataset("dsGijunGeumaek");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00",null,"199","120","28","193",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("수업료 기준금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm",null,"90","163","22","28",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00",null,"227","120","28","193",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("수업료 비율/원");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeyakBunryu",null,"286","163","22","316",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeyakBunryu");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","87",null,null,"610","0",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"35\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"65\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"교내/외\"/><Cell col=\"4\" text=\"지원구분\"/><Cell col=\"5\" text=\"장학코드\"/><Cell col=\"6\" text=\"장학명\"/><Cell col=\"7\" text=\"입학금비율/원\"/><Cell col=\"8\" text=\"수업료비율/원\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_YYYY\" displaytype=\"normal\" editmaxlength=\"4\" editinputtype=\"number,digit\"/><Cell col=\"2\" text=\"bind:HAKGI\" displaytype=\"combotext\" combodataset=\"dsGridHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:GYONAEOE_GBCD\" displaytype=\"combotext\" combodataset=\"dsSearchGyonaeoe\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:JIWON_GBCD\" displaytype=\"combotext\" combodataset=\"dsGridJiwon\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:JANGHAK_CD\"/><Cell col=\"6\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"7\" expr=\"expr:IPHAKGEUM_JIGEUP_PAMT+(IPHAKGEUM_JIGEUP_GBCD==&apos;1&apos;?&apos;%&apos;:&apos;&apos;)\" displaytype=\"expr:IPHAKGEUM_JIGEUP_GBCD==&apos;1&apos;?&apos;normal&apos;:&apos;number&apos;\" textAlign=\"right\"/><Cell col=\"8\" displaytype=\"expr:SUEOPRYO_JIGEUP_GBCD==&apos;1&apos;?&apos;normal&apos;:&apos;number&apos;\" expr=\"expr:SUEOPRYO_JIGEUP_PAMT+(SUEOPRYO_JIGEUP_GBCD==&apos;1&apos;?&apos;%&apos;:&apos;&apos;)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtIphakgeumJigeupPamt","1161","230","163","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_format("9,999");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtSueopryoJigeupPamt","1449","230","163","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_format("9,999");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학기별장학금액관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","cboSuhye","value","dsMaster","SUHYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboJeyakGbcd","value","dsMaster","JEYAK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtUseonSeq","value","dsMaster","USEON_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cboSueopryoJigeupGbcd","value","dsMaster","SUEOPRYO_JIGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboSueopryoGijunGeumaek","value","dsMaster","SUEOPRYO_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtJeyakJogeon","value","dsMaster","JEHAN_JOGEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","btnJanghak","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.spnSearchYYYY","value","ds_input","JANGHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSearch.form.cboSearchGyonaeoe","value","ds_input","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJiwon","value","ds_input","JIWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboIphakgeumJigeupGbcd","value","dsMaster","IPHAKGEUM_JIGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJanghakCd","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboIphakgeumGijunGeumaek","value","dsMaster","IPHAKGEUM_GIJUN_GEUMAEK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJanghakNm","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboJeyakBunryu","value","dsMaster","JEYAK_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mdtSueopryoJigeupPamt","value","dsMaster","SUEOPRYO_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","mdtIphakgeumJigeupPamt","value","dsMaster","IPHAKGEUM_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","spnGijunYYYY","value","ds_copyInput","GIJUN_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboGijunHakgi","value","ds_copyInput","GIJUN_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","spnDaesangYYYY","value","ds_copyInput","DAESANG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsCnt");
        };
        
        // User Script
        this.registerScript("UE01_2060102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE01_2060102_M.xfdl(학기별장학금액관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/29
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
        this.lvchkColidDs   = "JANGHAK_CD$SUHYE_GBCD$USEON_SEQ";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "장학코드$수혜구분$우선순위";
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
            var strDs    = "dsSearchHakgi|dsGridHakgi|dsSearchGyonaeoe|dsGridGyonaeoe|dsSearchJiwon|dsGridJiwon|dsSuhye|dsJigeupGubun|dsGijunGeumaek|dsJeyakGubun|dsJeyakBunryu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00022|02001|02001|02002|02002|02008|02009|02019|02010|02011";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|T|X|T|X|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        };

        this.fn_PostformInit = function()
        {
        	this.dsSearchHakgi.filter("REF_1 == '10'");
        	this.btnJanghak.set_enable(false);
        };


        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "JANGHAK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		this.spnGijunYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY") - 1);
        		this.cboGijunHakgi.set_value(this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		this.spnDaesangYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
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
        			case "Copy":
                            this.fn_PostCopy();
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
        		case "janghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYONAEOE_GBCD", sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIWON_GBCD", sRtn[5]);
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
            var strUrl      = "/prj/UE/UE01/Retrieve_2060102_M.do";
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
        	this.dsMaster.setColumn(nRow, "JANGHAK_YYYY", this.ds_input.getColumn(0, "JANGHAK_YYYY")); 		// 장학년도
        	this.dsMaster.setColumn(nRow, "HAKGI", this.ds_input.getColumn(0, "HAKGI")); 					// 학기
            this.dsMaster.setColumn(nRow, "IPHAKGEUM_JIGEUP_GBCD", "2"); 		// 입학금 지급구분
        	this.dsMaster.setColumn(nRow, "SUEOPRYO_JIGEUP_GBCD", "2"); 		// 수업료 지급구분
        	this.dsMaster.setColumn(nRow, "IPHAKGEUM_GIJUN_GEUMAEK_GBCD", "1"); // 입학금 기준금액
        	this.dsMaster.setColumn(nRow, "SUEOPRYO_GIJUN_GEUMAEK_GBCD", "1"); 	// 수업료 기준금액
        	this.dsMaster.setColumn(nRow, "IPHAKGEUM_JIGEUP_PAMT", "0"); 		// 입학금 비율/원
        	this.dsMaster.setColumn(nRow, "SUEOPRYO_JIGEUP_PAMT", "0"); 		// 수업료 비율/원
        	this.dsMaster.setColumn(nRow, "JEYAK_GBCD", "1"); 					// 제약구분 default
        	this.dsMaster.setColumn(nRow, "JEYAK_BUNRYU_GBCD", "1"); 			// 제약조건 default
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
            var strUrl      = "/prj/UE/UE01/Delete_2060102_M.do";
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
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i=0; i<this.dsMaster.rowcount; i++) {
        		if(this.dsMaster.getRowType(i) == "2" || this.dsMaster.getRowType(i) == "4") {

        			// 지급구분 %(1) <-> 원(2)에 따른 지급비율/금액 체크
        			// 입학금 지급 구분 %
        			if(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_GBCD") == "1") {
        				if(this.gfn_isNull(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_PAMT"))) {
        					this.alert("입학금 지급 비율을 입력해주세요.");
        					return false;
        				}
        				if(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_PAMT") > 100) {
        					this.alert("입학금 지급 비율을 100이하로 입력해주세요.");
        					return false;
        				}
        			}
        			// 입학금 지급 구분 (원)
        			if(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_GBCD") == "2") {
        				if(this.gfn_isNull(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_PAMT"))) {
        					this.alert("입학금 지급 비율을 입력해주세요.");
        					return false;
        				}
        				if(this.dsMaster.getColumn(i, "IPHAKGEUM_JIGEUP_PAMT") >= 10000000000000) {
        					this.alert("입학금 지급 금액을 13자리 이하로 입력해주세요.");
        					return false;
        				}
        			}
        			// 수업료 지급 구분 %
        			if(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_GBCD") == "1") {
        				if(this.gfn_isNull(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_PAMT"))) {
        					this.alert("수업료 지급 비율을 입력해주세요.");
        					return false;
        				}
        				if(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_PAMT") > 100) {
        					this.alert("수업료 지급 비율을 100이하로 입력해주세요.");
        					return false;
        				}
        			}
        			// 수업료 지급 구분 (원)
        			if(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_GBCD") == "2") {
        				if(this.gfn_isNull(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_PAMT"))) {
        					this.alert("수업료 지급 비율을 입력해주세요.");
        					return false;
        				}
        				if(this.dsMaster.getColumn(i, "SUEOPRYO_JIGEUP_PAMT") >= 10000000000000) {
        					this.alert("수업료 지급 금액을 13자리 이하로 입력해주세요.");
        					return false;
        				}
        			}

        			// 제약분류구분에 따른 제약조건 체크
        			// 평점
        			if(this.dsMaster.getColumn(i, "JEYAK_BUNRYU_GBCD") == "2") {
        				if(this.dsMaster.getColumn(i, "JEHAN_JOGEON") > 4.5) {
        					this.alert("제약조건을 4.5 이하로 입력해주세요.");
        					return false;
        				}
        			}
        			// 취득학점
        			else if(this.dsMaster.getColumn(i, "JEYAK_BUNRYU_GBCD") == "3") {
        				if(this.dsMaster.getColumn(i, "JEHAN_JOGEON") >= 100) {
        					this.alert("제약조건을 두자리로 입력해주세요.");
        					return false;
        				}
        			}
        			// 백분율
        			else if(this.dsMaster.getColumn(i, "JEYAK_BUNRYU_GBCD") == "4") {
        				if(this.dsMaster.getColumn(i, "JEHAN_JOGEON") > 100) {
        					this.alert("제약조건을 100 이하로 입력해주세요.");
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
            var strUrl      = "/prj/UE/UE01/Save_2060102_M.do";
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
                09. 학기별장학금액 복사 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreCopy = function()
        {
        	var gijunYyyy = this.spnGijunYYYY.value; 		// 기준년도
        	var gijunHakgi = this.cboGijunHakgi.value; 		// 기준학기
        	var gijunHakgiNm = this.cboGijunHakgi.text; 	// 기준학기명
        	var daesangYyyy = this.spnDaesangYYYY.value; 	// 대상년도

        	if(this.gfn_isNull(gijunYyyy))
        	{
        		this.alert("기준년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(gijunHakgi))
        	{
        		this.alert("기준학기를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(daesangYyyy))
        	{
        		this.alert("대상년도를 입력해주세요.");
        		return false;
        	}
        	if(gijunYyyy == daesangYyyy)
        	{
        		this.alert("기준년도와 대상년도가 동일합니다.");
        		return false;
        	}

        	// 기준년도, 학기의 자료가 존재하지 않을 경우
        	var gijunCnt = this.fn_Cnt(gijunYyyy, gijunHakgi);
        	if(gijunCnt == '0')
        	{
        	    this.alert(gijunYyyy + '학년도' + (gijunHakgi!=''?' '+gijunHakgiNm:'') + '의 자료가 존재하지 않습니다.');
        		return;
        	}

         	// 학년도학기별 장학 금액 존재 여부 체크
         	var cnt = this.fn_Cnt(daesangYyyy, gijunHakgi);

        	// 건수가 존재할 경우 재생성 여부 확인
         	if(cnt > 0)
        	{
         	    if(!this.confirm(daesangYyyy + '학년도' + (gijunHakgi!=''?' '+gijunHakgiNm:'') + '에 ' +  cnt + "건의 자료가 이미 존재합니다.\n기존자료를 삭제하고 다시 복사하시겠습니까?"))
        		{
                     return false;
         		}
         	}
        	// 건수가 존재하지 않을 경우 학기별장학금액 생성여부 확인
        	else if (cnt == 0)
        	{
         		if(!this.confirm(gijunYyyy + '학년도' + (gijunHakgi!=''?' '+gijunHakgiNm:'') + '의 학기별장학금액을 '+ daesangYyyy + '학년도' + (gijunHakgi!=''?' '+gijunHakgiNm:'') + '에 복사하시겠습니까?'))
        		{
                     return false;
         	    }
         	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Copy = function()
        {
            if(!this.fn_PreCopy())
            {
                return false;
            }
            var strSvc      = "Copy";
            var strUrl      = "/prj/UE/UE01/Copy_2060102_M.do";
            var strInDs     = "ds_copyInput=ds_copyInput";
            var strOutDs    = "";
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
        this.fn_PostCopy = function()
        {
            this.alert("복사되었습니다.");
        };

        /**********************************************************************
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                11. 각종함수
        ***********************************************************************/
        // 학년도학기별 장학 금액 존재 여부 체크
        this.fn_PreCnt = function(yyyy, hakgi)
        {
            // 조회조건 셋팅
        	this.ds_cntInput.setColumn(0, "YYYY", yyyy);
        	this.ds_cntInput.setColumn(0, "HAKGI", hakgi);
            return true;
        };

        this.fn_Cnt = function(yyyy, hakgi)
        {
            if(!this.fn_PreCnt(yyyy, hakgi))
            {
                return false;
            }
        	var strSvc      = "Cnt";
            var strUrl      = "/prj/UE/UE01/cntRetrieve_2060102_M.do";
            var strInDs     = "ds_cntInput=ds_cntInput";
            var strOutDs    = "dsCnt=dsCnt";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        	return this.dsCnt.getColumn(0, "CNT");
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        // 장학 팝업
        this.btnJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.edtJanghakNm.value;
        	this.fn_setCallJanghakPopup("JANGHAK_CD_NM", janghakCdNm)
        };

        this.fn_setCallJanghakPopup = function(strColumnName, strSearchValue)
        {
        	this.dsJanghak.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "JANGHAK_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchJanghak";
        		var strUrl      = "/prj/com/Retrieve_P11.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsJanghak=dsMaster";
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

        	if(this.dsJanghak.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", this.dsJanghak.getColumn(0,"JANGHAK_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", this.dsJanghak.getColumn(0,"JANGHAK_NM"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYONAEOE_GBCD", this.dsJanghak.getColumn(0,"GYONAEOE_GBCD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIWON_GBCD", this.dsJanghak.getColumn(0,"JIWON_GBCD"));
        	} else
        	{
        		var oArg = {janghakCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                13. 기타 Control Event
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
        	if(this.dsMaster.getRowType(e.newrow) == '2') {
        	    this.edtJanghakNm.set_readonly(false);
        		this.btnJanghak.set_enable(true);
        	} else {
        	    this.edtJanghakNm.set_readonly(true);
        		this.btnJanghak.set_enable(false);
        	}
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "JANGHAK_NM")
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

        // 학기별장학금액 복사
        this.btnCopy_onclick = function(obj,e)
        {
        	this.fn_Copy();
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
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JANGHAK_YYYY",obj.value);
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

        this.divSearch_cboSearchGyonaeoe_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GYONAEOE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJiwon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIWON_GBCD",obj.value);
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
            this.btnJanghak.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.cboJeyakGbcd.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.btnCopy.addEventHandler("onclick",this.btnCopy_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchGyonaeoe.addEventHandler("onkeydown",this.divSearch_cboSearchGyonaeoe_onkeydown,this);
            this.divSearch.form.cboSearchJiwon.addEventHandler("onkeydown",this.divSearch_cboSearchJiwon_onkeydown,this);
            this.spnGijunYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.cboGijunHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.spnDaesangYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.cboJeyakBunryu.addEventHandler("onitemchanged",this.cboSilseup_onitemchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsCnt.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCnt.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE01_2060102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
