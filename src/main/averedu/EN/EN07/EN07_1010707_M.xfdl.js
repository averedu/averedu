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
            this.set_titletext("모집등록률현황");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"ILBAN_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBAN_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBAN_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_DEUNGROK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"TONGGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYechigeum", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTonggye", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"ILBAN_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBAN_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBAN_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ILBANGO_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSEONGHWA_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKGIJA_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAEHAKJACHE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONNAE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NONGEOCHON_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GICHOSAENGHWAL_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MANHAKDO_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONMUNDAE_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEOEGUKMIN_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TEUKSUGYOYUK_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_DEUNGROK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGWONOEI_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_DEUNGROK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONG_DEUNGROKRYUL\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("합격률 현황 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","137","78",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00","39","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","134","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","307","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","398","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","124","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","388","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","522","2","56","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","258","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","58","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_01","761","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuFrDt","883","9","155","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","1047","9","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchJeopsuToDt","1075","9","155","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","1037","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1065","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","873","-3","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","549","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","630","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","640","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","764","2","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","17","31","1610","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","1","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("예치금 등록 구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchYechigeum","134","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYechigeum");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","287","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("등록통계구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchTonggye","398","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsTonggye");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","549","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("합격구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHapgyeok","640","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHapgyeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야구분\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"3\" text=\"일반전형\"/><Cell col=\"5\" colspan=\"15\" text=\"정원 내\"/><Cell col=\"20\" colspan=\"21\" text=\"정원 외\"/><Cell col=\"41\" rowspan=\"2\" colspan=\"3\" text=\"총계\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"일반고\"/><Cell row=\"1\" col=\"8\" colspan=\"3\" text=\"특성화고\"/><Cell row=\"1\" col=\"11\" colspan=\"3\" text=\"특기자\"/><Cell row=\"1\" col=\"14\" colspan=\"3\" text=\"대학자체기준\"/><Cell row=\"1\" col=\"17\" colspan=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"20\" colspan=\"3\" text=\"농어촌 출신\"/><Cell row=\"1\" col=\"23\" colspan=\"3\" text=\"기초생활수급자 및 차상위\"/><Cell row=\"1\" col=\"26\" colspan=\"3\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"29\" colspan=\"3\" text=\"전문대이상 졸업자\"/><Cell row=\"1\" col=\"32\" colspan=\"3\" text=\"재외국민 및 외국인\"/><Cell row=\"1\" col=\"35\" colspan=\"3\" text=\"특수교육대상자\"/><Cell row=\"1\" col=\"38\" colspan=\"3\" text=\"소계\"/><Cell row=\"2\" col=\"2\" text=\"합격\"/><Cell row=\"2\" col=\"3\" text=\"등록\"/><Cell row=\"2\" col=\"4\" text=\"등록률\"/><Cell row=\"2\" col=\"5\" text=\"합격\"/><Cell row=\"2\" col=\"6\" text=\"등록\"/><Cell row=\"2\" col=\"7\" text=\"등록률\"/><Cell row=\"2\" col=\"8\" text=\"합격\"/><Cell row=\"2\" col=\"9\" text=\"등록\"/><Cell row=\"2\" col=\"10\" text=\"등록률\"/><Cell row=\"2\" col=\"11\" text=\"합격\"/><Cell row=\"2\" col=\"12\" text=\"등록\"/><Cell row=\"2\" col=\"13\" text=\"등록률\"/><Cell row=\"2\" col=\"14\" text=\"합격\"/><Cell row=\"2\" col=\"15\" text=\"등록\"/><Cell row=\"2\" col=\"16\" text=\"등록률\"/><Cell row=\"2\" col=\"17\" text=\"합격\"/><Cell row=\"2\" col=\"18\" text=\"등록\"/><Cell row=\"2\" col=\"19\" text=\"등록률\"/><Cell row=\"2\" col=\"20\" text=\"합격\"/><Cell row=\"2\" col=\"21\" text=\"등록\"/><Cell row=\"2\" col=\"22\" text=\"등록률\"/><Cell row=\"2\" col=\"23\" text=\"합격\"/><Cell row=\"2\" col=\"24\" text=\"등록\"/><Cell row=\"2\" col=\"25\" text=\"등록률\"/><Cell row=\"2\" col=\"26\" text=\"합격\"/><Cell row=\"2\" col=\"27\" text=\"등록\"/><Cell row=\"2\" col=\"28\" text=\"등록률\"/><Cell row=\"2\" col=\"29\" text=\"합격\"/><Cell row=\"2\" col=\"30\" text=\"등록\"/><Cell row=\"2\" col=\"31\" text=\"등록률\"/><Cell row=\"2\" col=\"32\" text=\"합격\"/><Cell row=\"2\" col=\"33\" text=\"등록\"/><Cell row=\"2\" col=\"34\" text=\"등록률\"/><Cell row=\"2\" col=\"35\" text=\"합격\"/><Cell row=\"2\" col=\"36\" text=\"등록\"/><Cell row=\"2\" col=\"37\" text=\"등록률\"/><Cell row=\"2\" col=\"38\" text=\"합격\"/><Cell row=\"2\" col=\"39\" text=\"등록\"/><Cell row=\"2\" col=\"40\" text=\"등록률\"/><Cell row=\"2\" col=\"41\" text=\"모집 인원\"/><Cell row=\"2\" col=\"42\" text=\"등록 인원\"/><Cell row=\"2\" col=\"43\" text=\"등록률\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:ILBAN_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:ILBAN_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:ILBAN_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:ILBANGO_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:ILBANGO_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:ILBANGO_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:TEUKSEONGHWA_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:TEUKSEONGHWA_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:TEUKSEONGHWA_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:TEUKGIJA_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:TEUKGIJA_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:TEUKGIJA_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:DAEHAKJACHE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:DAEHAKJACHE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:DAEHAKJACHE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:JEONGWONNAE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:JEONGWONNAE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:JEONGWONNAE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:NONGEOCHON_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:NONGEOCHON_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:NONGEOCHON_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:GICHOSAENGHWAL_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:GICHOSAENGHWAL_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:GICHOSAENGHWAL_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:MANHAKDO_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"27\" text=\"bind:MANHAKDO_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"28\" text=\"bind:MANHAKDO_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"29\" text=\"bind:JEONMUNDAE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"30\" text=\"bind:JEONMUNDAE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"31\" text=\"bind:JEONMUNDAE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"32\" text=\"bind:JAEOEGUKMIN_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"33\" text=\"bind:JAEOEGUKMIN_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"34\" text=\"bind:JAEOEGUKMIN_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"35\" text=\"bind:TEUKSUGYOYUK_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"36\" text=\"bind:TEUKSUGYOYUK_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"37\" text=\"bind:TEUKSUGYOYUK_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"38\" text=\"bind:JEONGWONOEI_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"39\" text=\"bind:JEONGWONOEI_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"40\" text=\"bind:JEONGWONOEI_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"41\" text=\"bind:CHONG_JEONGWON\" displaytype=\"number\"/><Cell col=\"42\" text=\"bind:CHONG_DEUNGROK\" displaytype=\"number\"/><Cell col=\"43\" text=\"bind:CHONG_DEUNGROKRYUL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합  계:\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;ILBAN_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;ILBAN_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;ILBAN_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;ILBAN_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;ILBANGO_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;ILBANGO_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;ILBANGO_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;ILBANGO_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;TEUKGIJA_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;DAEHAKJACHE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;JEONGWONNAE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;NONGEOCHON_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;MANHAKDO_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;JEONMUNDAE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"35\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"36\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"37\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"38\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"39\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"40\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;JEONGWONOEI_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"41\" expr=\"expr:dataset.getSum(&quot;CHONG_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"42\" expr=\"expr:dataset.getSum(&quot;CHONG_DEUNGROK&quot;)\" displaytype=\"number\"/><Cell col=\"43\" expr=\"expr:dataset.getSum(&quot;CHONG_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos; : nexacro.round(dataset.getSum(&quot;CHONG_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/></Band></Format><Format id=\"format00\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"3\" text=\"주야구분\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"3\" text=\"일반전형\"/><Cell col=\"5\" colspan=\"15\" text=\"정원 내\"/><Cell col=\"20\" colspan=\"21\" text=\"정원 외\"/><Cell col=\"41\" rowspan=\"2\" colspan=\"3\" text=\"총계\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"일반고\"/><Cell row=\"1\" col=\"8\" colspan=\"3\" text=\"특성화고\"/><Cell row=\"1\" col=\"11\" colspan=\"3\" text=\"특기자\"/><Cell row=\"1\" col=\"14\" colspan=\"3\" text=\"대학자체기준\"/><Cell row=\"1\" col=\"17\" colspan=\"3\" text=\"소계\"/><Cell row=\"1\" col=\"20\" colspan=\"3\" text=\"농어촌 출신\"/><Cell row=\"1\" col=\"23\" colspan=\"3\" text=\"기초생활수급자 및 차상위\"/><Cell row=\"1\" col=\"26\" colspan=\"3\" text=\"만학도 및 성인재직자\"/><Cell row=\"1\" col=\"29\" colspan=\"3\" text=\"전문대이상 졸업자\"/><Cell row=\"1\" col=\"32\" colspan=\"3\" text=\"재외국민 및 외국인\"/><Cell row=\"1\" col=\"35\" colspan=\"3\" text=\"특수교육대상자\"/><Cell row=\"1\" col=\"38\" colspan=\"3\" text=\"소계\"/><Cell row=\"2\" col=\"2\" text=\"정원\"/><Cell row=\"2\" col=\"3\" text=\"등록\"/><Cell row=\"2\" col=\"4\" text=\"등록률\"/><Cell row=\"2\" col=\"5\" text=\"정원\"/><Cell row=\"2\" col=\"6\" text=\"등록\"/><Cell row=\"2\" col=\"7\" text=\"등록률\"/><Cell row=\"2\" col=\"8\" text=\"정원\"/><Cell row=\"2\" col=\"9\" text=\"등록\"/><Cell row=\"2\" col=\"10\" text=\"등록률\"/><Cell row=\"2\" col=\"11\" text=\"정원\"/><Cell row=\"2\" col=\"12\" text=\"등록\"/><Cell row=\"2\" col=\"13\" text=\"등록률\"/><Cell row=\"2\" col=\"14\" text=\"정원\"/><Cell row=\"2\" col=\"15\" text=\"등록\"/><Cell row=\"2\" col=\"16\" text=\"등록률\"/><Cell row=\"2\" col=\"17\" text=\"정원\"/><Cell row=\"2\" col=\"18\" text=\"등록\"/><Cell row=\"2\" col=\"19\" text=\"등록률\"/><Cell row=\"2\" col=\"20\" text=\"정원\"/><Cell row=\"2\" col=\"21\" text=\"등록\"/><Cell row=\"2\" col=\"22\" text=\"등록률\"/><Cell row=\"2\" col=\"23\" text=\"정원\"/><Cell row=\"2\" col=\"24\" text=\"등록\"/><Cell row=\"2\" col=\"25\" text=\"등록률\"/><Cell row=\"2\" col=\"26\" text=\"정원\"/><Cell row=\"2\" col=\"27\" text=\"등록\"/><Cell row=\"2\" col=\"28\" text=\"등록률\"/><Cell row=\"2\" col=\"29\" text=\"정원\"/><Cell row=\"2\" col=\"30\" text=\"등록\"/><Cell row=\"2\" col=\"31\" text=\"등록률\"/><Cell row=\"2\" col=\"32\" text=\"정원\"/><Cell row=\"2\" col=\"33\" text=\"등록\"/><Cell row=\"2\" col=\"34\" text=\"등록률\"/><Cell row=\"2\" col=\"35\" text=\"정원\"/><Cell row=\"2\" col=\"36\" text=\"등록\"/><Cell row=\"2\" col=\"37\" text=\"등록률\"/><Cell row=\"2\" col=\"38\" text=\"정원\"/><Cell row=\"2\" col=\"39\" text=\"등록\"/><Cell row=\"2\" col=\"40\" text=\"등록률\"/><Cell row=\"2\" col=\"41\" text=\"모집 인원\"/><Cell row=\"2\" col=\"42\" text=\"등록 인원\"/><Cell row=\"2\" col=\"43\" text=\"등록률\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:JUYA_GBNM\"/><Cell col=\"2\" text=\"bind:ILBAN_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:ILBAN_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:ILBAN_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:ILBANGO_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:ILBANGO_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:ILBANGO_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:TEUKSEONGHWA_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:TEUKSEONGHWA_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:TEUKSEONGHWA_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:TEUKGIJA_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:TEUKGIJA_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:TEUKGIJA_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:DAEHAKJACHE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:DAEHAKJACHE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:DAEHAKJACHE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:JEONGWONNAE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:JEONGWONNAE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:JEONGWONNAE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:NONGEOCHON_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:NONGEOCHON_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:NONGEOCHON_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:GICHOSAENGHWAL_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:GICHOSAENGHWAL_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:GICHOSAENGHWAL_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:MANHAKDO_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"27\" text=\"bind:MANHAKDO_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"28\" text=\"bind:MANHAKDO_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"29\" text=\"bind:JEONMUNDAE_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"30\" text=\"bind:JEONMUNDAE_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"31\" text=\"bind:JEONMUNDAE_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"32\" text=\"bind:JAEOEGUKMIN_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"33\" text=\"bind:JAEOEGUKMIN_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"34\" text=\"bind:JAEOEGUKMIN_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"35\" text=\"bind:TEUKSUGYOYUK_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"36\" text=\"bind:TEUKSUGYOYUK_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"37\" text=\"bind:TEUKSUGYOYUK_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"38\" text=\"bind:JEONGWONOEI_IPHAK_JEONGWON\" displaytype=\"number\"/><Cell col=\"39\" text=\"bind:JEONGWONOEI_DEUNGROK_JEONGWON\" displaytype=\"number\"/><Cell col=\"40\" text=\"bind:JEONGWONOEI_DEUNGROKRYUL\" displaytype=\"number\"/><Cell col=\"41\" text=\"bind:CHONG_JEONGWON\" displaytype=\"number\"/><Cell col=\"42\" text=\"bind:CHONG_DEUNGROK\" displaytype=\"number\"/><Cell col=\"43\" text=\"bind:CHONG_DEUNGROKRYUL\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합  계:\"/><Cell col=\"2\" expr=\"expr:dataset.getSum(&quot;ILBAN_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"3\" expr=\"expr:dataset.getSum(&quot;ILBAN_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"4\" expr=\"expr:dataset.getSum(&quot;ILBAN_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;ILBAN_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"5\" expr=\"expr:dataset.getSum(&quot;ILBANGO_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"expr:dataset.getSum(&quot;ILBANGO_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"expr:dataset.getSum(&quot;ILBANGO_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;ILBANGO_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"expr:dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;TEUKSEONGHWA_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;TEUKGIJA_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;TEUKGIJA_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"expr:dataset.getSum(&quot;DAEHAKJACHE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;DAEHAKJACHE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"17\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"18\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"19\" expr=\"expr:dataset.getSum(&quot;JEONGWONNAE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;JEONGWONNAE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"20\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"21\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"22\" expr=\"expr:dataset.getSum(&quot;NONGEOCHON_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;NONGEOCHON_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"23\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"24\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;GICHOSAENGHWAL_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;MANHAKDO_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;MANHAKDO_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"29\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"30\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"31\" expr=\"expr:dataset.getSum(&quot;JEONMUNDAE_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;JEONMUNDAE_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"32\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"33\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"34\" expr=\"expr:dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;JAEOEGUKMIN_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"35\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"36\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"37\" expr=\"expr:dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;TEUKSUGYOYUK_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"38\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_IPHAK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"39\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_DEUNGROK_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"40\" expr=\"expr:dataset.getSum(&quot;JEONGWONOEI_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;JEONGWONOEI_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/><Cell col=\"41\" expr=\"expr:dataset.getSum(&quot;CHONG_JEONGWON&quot;)\" displaytype=\"number\"/><Cell col=\"42\" expr=\"expr:dataset.getSum(&quot;CHONG_DEUNGROK&quot;)\" displaytype=\"number\"/><Cell col=\"43\" expr=\"expr:dataset.getSum(&quot;CHONG_DEUNGROKRYUL&quot;)==&apos;0&apos;?&apos;0&apos;:nexacro.round(dataset.getSum(&quot;CHONG_DEUNGROKRYUL&quot;)/dataset.getRowCount(),2)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","137","78",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("모집등록률현황");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.calSearchJeopsuFrDt","value","ds_input","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calSearchJeopsuToDt","value","ds_input","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchYechigeum","value","ds_input","DEUNGROK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchTonggye","value","ds_input","TONGGYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHapgyeok","value","ds_input","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsMaster1");
        };
        
        // User Script
        this.registerScript("EN07_1010707_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010707_M.xfdl(모집등록률현황)
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
            var strDs    = "dsJuya|dsYechigeum|dsTonggye|dsHapgyeok|dsMojip";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|01053|01054|01055|01056";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|X|X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

            // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.grdMaster.set_visible(true);
        	this.staRowCnt.set_visible(true);

        	this.fn_GijunYyyy();
        };

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsHapgyeok.rowcount; i++)
        	{
        		if(this.dsHapgyeok.getColumn(i, "CODE") == "3")
        		{
        			this.dsHapgyeok.deleteRow(i);
        		}
        	}
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdMaster1);
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret1":
                            this.fn_PostRet1();
                        break;
        			case "Ret2":
                            this.fn_PostRet2();
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
            // 조회조건 셋팅
        	var startDt = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var endDt = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	if(this.ds_input.getColumn(0, "MOJIP_GBCD") == null || this.ds_input.getColumn(0, "MOJIP_GBCD") == '')
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}

        	if(this.ds_input.getColumn(0, "DEUNGROK_GBCD") == null || this.ds_input.getColumn(0, "DEUNGROK_GBCD") == "")
        	{
        		this.alert("예치금 등록 구분을 선택해주세요.");
        		return false;
        	}

        	if(startDt != '' && endDt == '')
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	else if(startDt!="" && endDt!="")
        	{
        		if(startDt > endDt!="")
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	else if(startDt == "" && endDt != "")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(startDt == "" && endDt == "")
        	{
        		this.alert("접수일자를 확인해주세요.");
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

        	if(this.ds_input.getColumn(0, "TONGGYE_GBCD") == '1')
        	{
        		var strSvc      = "Ret1";
        		var strUrl      = "/prj/EN/EN07/Retrieve_1010707_M_1.do";
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
        	}
        	else if(this.ds_input.getColumn(0, "TONGGYE_GBCD") == '2')
        	{
        		var strSvc      = "Ret2";
        		var strUrl      = "/prj/EN/EN07/Retrieve_1010707_M_2.do";
        		var strInDs     = "ds_input=ds_input";
        		var strOutDs    = "dsMaster1=dsMaster1";
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
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet1 = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        this.fn_PostRet2 = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsMaster1);
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
        	var JUYA_GBCD 				= this.ds_input.getColumn(0, "JUYA_GBCD");
        	var DEUNGROK_GBCD 			= this.ds_input.getColumn(0, "DEUNGROK_GBCD");
        	var HAPGYEOK_GBCD 			= this.ds_input.getColumn(0, "HAPGYEOK_GBCD");
        	var JEOPSU_FRDT 			= this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSU_TODT 			= this.ds_input.getColumn(0, "JEOPSU_TODT");
        	var GUBUN					= ''	// 0 : 일계, 1: 누계

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	if(MOJIP_GBCD == "" || MOJIP_GBCD == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	if(JUYA_GBCD == "" || JUYA_GBCD == null)
        	{
        		this.alert("주야구분을 선택해주세요.");
        		return false;
        	}
        	if(DEUNGROK_GBCD == "" || DEUNGROK_GBCD == null)
        	{
        		this.alert("예치금 등록 구분을 선택해주세요.");
        		return false;
        	}

        	if(JEOPSU_FRDT!='' && JEOPSU_TODT=='')
        	{
        		GUBUN = "0";
        	}
        	else if(JEOPSU_FRDT!="" && JEOPSU_TODT!="")
        	{
        		if(JEOPSU_FRDT > JEOPSU_TODT!="")
        		{
        			this.alert("접수일자를 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			GUBUN = "1";
        		}
        	}
        	else if(JEOPSU_FRDT=="" && JEOPSU_TODT!="")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}
        	else if(JEOPSU_FRDT=="" && JEOPSU_TODT=="")
        	{
        		this.alert("접수일자를 확인해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , JUYA_GBCD:JUYA_GBCD
        				  , DEUNGROK_GBCD:DEUNGROK_GBCD
        				  , HAPGYEOK_GBCD:HAPGYEOK_GBCD
        				  , JEOPSU_FRDT:JEOPSU_FRDT
        				  , JEOPSU_TODT:JEOPSU_TODT
        				  , GUBUN:GUBUN
        				  }

        	if(this.ds_input.getColumn(0, "TONGGYE_GBCD") == '1')
        	{
        		if(IPSI_YYYY < 2020)
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010707_M_01.crf',  param);
        		}
        		else
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010707_M_01_2.crf',  param);
        		}
        	}
        	else
        	{
        		if(IPSI_YYYY < 2020)
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010707_M_02.crf',  param);
        		}
        		else
        		{
        			this.gfn_commonUtils_report('EN07/EN07_1010707_M_02_2.crf',  param);
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

        this.grdMaster1_onheaddblclick = function(obj,e)
        {
        	 this.gfn_gridSort(obj,e);
        };

        // 기간 체크 함수
        this.fn_CheckDt = function(Frdt,Todt,Contents)
        {
        	var result ;

        	var yearFr = Frdt.substr(0,4) ;
        	var monthFr = Frdt.substr(4,2);
        	var dayFr = Frdt.substr(6,2);

        	var dtFr = new Date(yearFr,monthFr,dayFr);

        	var yearTo =Todt.substr(0,4);
        	var monthTo =Todt.substr(4,2);
        	var dayTo =Todt.substr(6,2);

        	var dtTo = new Date(yearTo,monthTo,dayTo);

        	if(dtFr > dtTo)
        	{
        		this.alert(Contents + "을 확인하세요.");
        		result = -1;
        	}
        	else
        	{
        		result = 0;
        	}

        	return result;
        };

        // 접수시작일 validation 체크
        this.divSearch_calSearchJeopsuFrDt_onchanged = function(obj,e)
        {
        	//접수시작일,접수종료일자 가져오기
        	var JEOPSUFRDT = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSUTODT = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(JEOPSUTODT != null && JEOPSUTODT != '')
        	{
        	    var result = this.fn_CheckDt(JEOPSUFRDT,JEOPSUTODT,'시작날짜');
        	    if(result == -1)
        		{
        			this.ds_input.setColumn(0, "JEOPSU_FRDT", "");
        	    }
        	}
        };

        //접수종료일 validation 체크
        this.divSearch_calSearchJeopsuToDt_onchanged = function(obj,e)
        {
        	//접수시작일,접수종료일자 가져오기
        	var JEOPSUFRDT = this.ds_input.getColumn(0, "JEOPSU_FRDT");
        	var JEOPSUTODT = this.ds_input.getColumn(0, "JEOPSU_TODT");

        	if(JEOPSUTODT != null && JEOPSUTODT != '')
        	{
        	    var result = this.fn_CheckDt(JEOPSUFRDT,JEOPSUTODT,'종료날짜');
        	    if(result == -1)
        		{
        			this.ds_input.setColumn(0, "JEOPSU_TODT", "");
        	    }
        	}
        };

        // 등록통계구분 변경시 그리드 변경
        this.divSearch_cboSearchTonggye_onitemchanged = function(obj,e)
        {
        	if(this.ds_input.getColumn(0, "TONGGYE_GBCD") == '1')
        	{
        		this.grdMaster.set_visible(true);
        		this.grdMaster1.set_visible(false);
        		this.staRowCnt.set_visible(true);
        		this.staRowCnt2.set_visible(false);
        	}
        	else
        	{
        		this.grdMaster.set_visible(false);
        		this.grdMaster1.set_visible(true);
        		this.staRowCnt.set_visible(false);
        		this.staRowCnt2.set_visible(true);
        	}
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
        	this.divSearch.form.cboSearchTonggye.set_index(0);
        	this.divSearch.form.cboSearchHapgyeok.set_index(0);
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

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeopsuFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchJeopsuToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEOPSU_TODT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchYechigeum_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchTonggye_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"TONGGYE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHapgyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAPGYEOK_GBCD",obj.value);
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
            this.divSearch.form.calSearchJeopsuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuFrDt_onkeydown,this);
            this.divSearch.form.calSearchJeopsuFrDt.addEventHandler("onchanged",this.divSearch_calSearchJeopsuFrDt_onchanged,this);
            this.divSearch.form.calSearchJeopsuToDt.addEventHandler("onkeydown",this.divSearch_calSearchJeopsuToDt_onkeydown,this);
            this.divSearch.form.calSearchJeopsuToDt.addEventHandler("onchanged",this.divSearch_calSearchJeopsuToDt_onchanged,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchYechigeum.addEventHandler("onkeydown",this.divSearch_cboSearchYechigeum_onkeydown,this);
            this.divSearch.form.cboSearchTonggye.addEventHandler("onkeydown",this.divSearch_cboSearchTonggye_onkeydown,this);
            this.divSearch.form.cboSearchTonggye.addEventHandler("onitemchanged",this.divSearch_cboSearchTonggye_onitemchanged,this);
            this.divSearch.form.cboSearchHapgyeok.addEventHandler("onkeydown",this.divSearch_cboSearchHapgyeok_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster1_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster1.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN07_1010707_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
