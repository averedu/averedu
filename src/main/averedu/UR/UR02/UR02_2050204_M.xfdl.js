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
            this.set_titletext("예치금납부/환불처리");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"POGI_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHAEKJEONG_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOJI_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GITA_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"HWANBUL_BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HWANBUL_GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HWANBUL_YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"HWANBUL_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANBUL_GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GIJUN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_POGI_SAYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChasu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbuSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrokPogi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulSayu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gyejwaInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyejwa", this);
            obj.set_progressload("false");
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"GASANG_GYEJWA_NO\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_1_01_00_00_00","1114","222","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00","1114","195","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01","1114","168","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00","1114","141","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","106",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","84","130","31",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("등록대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","114","1084",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입시년도\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"차수\"/><Cell col=\"4\" text=\"학과\"/><Cell col=\"5\" text=\"주야구분\"/><Cell col=\"6\" text=\"수험번호\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"생년월일\"/><Cell col=\"9\" text=\"납부은행\"/><Cell col=\"10\" text=\"납부일자\"/><Cell col=\"11\" text=\"납부상태\"/><Cell col=\"12\" text=\"등록상태\"/><Cell col=\"13\" text=\"환불여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DEUNGROK_YYYY\"/><Cell col=\"2\" text=\"bind:MOJIP_GBNM\"/><Cell col=\"3\" text=\"bind:DEUNGROK_CHASU_GBNM\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" text=\"bind:JUYA_GBNM\"/><Cell col=\"6\" text=\"bind:SUHEOM_NO\"/><Cell col=\"7\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"8\" text=\"bind:BIRTHDAY\"/><Cell col=\"9\" text=\"bind:BANK_GBCD\" combodataset=\"dsGridBank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:NAPBU_DT\" displaytype=\"expr:NAPBU_DT != null ? &apos;date&apos;:&apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:NAPBU_STCD\" displaytype=\"combotext\" combodataset=\"dsNapbuSt\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"12\" text=\"bind:DEUNGROK_STCD\" combodataset=\"dsDeungrok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"13\" text=\"bind:HWANBUL_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1084","94","30",null,null,"-10",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","1114","84","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("납부정보상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1","1114","114","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2","1114","114","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00","1114","141","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("납부일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00","1114","168","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("납부은행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01","1381","114","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("등록포기사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01","1381","141","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("납부계좌");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00","1114","195","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("납부금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00_00","1114","222","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDeungrokSangtae","1226","117","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","136","88","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calIpgukDt","241","-224","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calNapbuDt","1226","144","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPogisayu","1483","117","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrokPogi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
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
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-6","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","260","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","349","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","339","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","237","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-6","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("납부기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","474","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchChasu","563","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsChasu");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchNapbuFrDt","87","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchHwanbulFrDt","1207","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","238","37","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchNapbuToDt","272","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","473","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","1358","37","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchHwanbulToDt","1392","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","553","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00","422","30","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","474","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("납부은행");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBank","563","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBank");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","789","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","710","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","1182","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","799","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00","687","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","946","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00_00","1397","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","923","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1025","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1035","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1261","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1159","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul","1128","37","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","979","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("이중납부여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuhoemNo","1271","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1486","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00_00","1395","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1476","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","710","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("납부상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNapbuSt","799","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNapbuSt");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00_01","1072","30","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_01","1197","31","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","64","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01_00","1381","168","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("책정예치금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01_00_00","1381","195","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("고지예치금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboNapbuBank","1226","171","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsCompBank");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNapbuGeumaek","1226","198","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_maxlength("22");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGoji","1483","198","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChaekjeong","1483","171","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("22");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNapbuGyejwa","1483","144","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","1226","225","410","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_visible("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbuDel","1516","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbuDeungrok","1412","81","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이중납부 등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbuSave","1580","81","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbuAuto","1328","81","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("자동입력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","1230","250","100","55",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("↑\r\n55\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","1114","275","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("환불정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwanbulAuto","1432","272","80","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("자동입력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwanbulDel","1516","272","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwanbulSave","1580","272","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1114","297",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00_00_00","1114","413","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00_00_01","1114","386","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_01_00","1114","359","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00","1114","332","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_02","1114","305","525","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_02","1114","305","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("환불금액");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_02","1114","332","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("환불일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00","1114","359","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01_00","1381","305","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("환불계좌");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01_01","1381","332","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_01_00_00_00","1114","413","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHwanbulDt","1226","335","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHwanbulSayu","1483","362","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHwanbulSayu");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01_00_01","1381","359","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("환불사유구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_01_00_00_00","1381","386","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("입학포기사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulGyejwa","1483","308","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("true");
            obj.set_inputtype("number");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulGemaek","1226","308","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_maxlength("22");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulBank","1483","335","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_visible("true");
            obj.set_maxlength("16");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGita","1226","416","410","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_visible("true");
            obj.set_maxlength("333");
            this.addChild(obj.name, obj);

            obj = new Edit("edtYegeumju","1226","362","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_visible("true");
            obj.set_maxlength("13");
            this.addChild(obj.name, obj);

            obj = new Combo("cboIphakPogisayu","1483","389","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrokPogi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("예치금납부/환불처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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

            obj = new BindItem("item25","cboDeungrokSangtae","value","dsMaster","DEUNGROK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calIpgukDt","value","dsMaster","IPGUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calNapbuDt","value","dsMaster","NAPBU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.spnSearchYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchChasu","value","ds_input","DEUNGROK_CHASU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.calSearchNapbuFrDt","value","ds_input","NAPBU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.calSearchHwanbulFrDt","value","ds_input","HWANBUL_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.calSearchNapbuToDt","value","ds_input","NAPBU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.calSearchHwanbulToDt","value","ds_input","HWANBUL_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.cboSearchBank","value","ds_input","BANK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.edtSearchSuhoemNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSearch.form.chkSearchNapbu","value","ds_input","IJUNG_NAPBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSearch.form.chkSearchHwanbul","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchNapbuSt","value","ds_input","NAPBU_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboNapbuBank","value","dsMaster","BANK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtNapbuGeumaek","value","dsMaster","NAPBU_GEUMAEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtGoji","value","dsMaster","GOJI_GEUMAEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtChaekjeong","value","dsMaster","CHAEKJEONG_GEUMAEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtBigo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calHwanbulDt","value","dsMaster","HWANBUL_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtHwanbulGyejwa","value","dsMaster","HWANBUL_GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edtHwanbulGemaek","value","dsMaster","HWANBUL_GEUMAEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtHwanbulBank","value","dsMaster","HWANBUL_BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtGita","value","dsMaster","GITA_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtYegeumju","value","dsMaster","HWANBUL_YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboPogisayu","value","dsMaster","POGI_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","cboHwanbulSayu","value","dsMaster","HWANBUL_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","cboIphakPogisayu","value","dsMaster","IPHAK_POGI_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsGyejwa");
        };
        
        // User Script
        this.registerScript("UR02_2050204_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050204_M.xfdl(등록 대상자 관리(신입) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/07
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
            var strDs    = "dsMojip|dsChasu|dsJuya|dsNapbuSt|dsBank|dsGridBank|dsCompBank|dsDeungrok|dsYn|dsDeungrokPogi|dsHwanbulSayu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00005|03006|00003|03008|03007|03007|03007|03009|00051|03010|03011";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|T|X|S|X|X|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UR";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        };

        this.fn_PostInit = function()
        {
        	this.dsMojip.filter("REF_1 == '1'");
        	this.dsMojip.insertRow(0);
        	this.dsMojip.setColumn(0, "CODE", "");
        	this.dsMojip.setColumn(0, "CODE_NM", "전체");
        	this.divSearch.form.cboSearchMojip.set_index(0);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "DEUNGROK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
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
        					this.fn_PostInit();
        			    break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "GyejwaRet":
                            this.fn_PostGyejwa();
                        break;
                    case "NapbuSave":
                            this.fn_PostNapbuSave();
                        break;
        			case "HwanbulSave":
                            this.fn_PostHwanbulSave();
                        break;
                    case "NapbuDel":
                            this.fn_PostNapbuDel();
                        break;
        			case "HwanbulDel":
                            this.fn_PostHwanbulDel();
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
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	// 납부시작일자가 널값이 아니고 납부종료일자는 널값일때
        	if(!this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_FRDT")) && this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_TODT")))
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	// 납부시작일자와 납부종료일자가 널값이 아닐때
        	else if(!this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_TODT")))
        	{
        		// 납부시작일자가 납부종료일자보다 최근날짜일때
        		if(this.ds_input.getColumn(0, "NAPBU_FRDT") > this.ds_input.getColumn(0, "NAPBU_TODT"))
        		{
        			this.alert("납부기간을 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	// 납부시작일자가 널값이고 납부종료일자는 널값이 아닐때
        	else if(this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "NAPBU_TODT")))
        	{
        		this.alert("납부기간을 확인해주세요.");
        		return false;
        	}

        	// 환불여부가 체크되어 있을 때
        	if(this.ds_input.getColumn(0, "HWANBUL_YN") == "1")
        	{
        		// 환불시작일자가 환불종료일자보다 최근날짜일때
        		if(this.ds_input.getColumn(0, "HWANBUL_FRDT") > this.ds_input.getColumn(0, "HWANBUL_TODT"))
        		{
        			this.alert("환불기간을 확인해주세요.");
        			return false;
        		}
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
            var strUrl      = "/prj/UR/UR02/Retrieve_2050204_M.do";
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
                06. 납부 삭제 함수 선언
        ***********************************************************************/
        this.fn_PreNapbuDel = function()
        {
            if(this.dsMaster.rowcount < 1 )
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if(this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("신규나 수정된 값이 있습니다.\n먼저 저장을 해주세요.","저장정보","","question");
                return false;
            }

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HWANBUL_YN") == '1')
        	{
        		this.alert("환불 정보가 존재합니다.\n납부 정보를 지우고 싶다면 환불 정보를 먼저 삭제해주세요.");
        		return false;
        	}

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "NAPBU_STCD") == '1' && this.dsMaster.getColumn(this.dsMaster.rowposition, "BANK_GBCD") != '09')
        	{
        		this.alert("창구 접수가 아니고 납부 상태가 납부인 데이터는 삭제할 수 없습니다.");
        		return false;
        	}

            var result = this.gfn_confirm( "삭제 시 납부 관련 정보가 모두 삭제됩니다.\n정말로 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        this.fn_NapbuDel = function()
        {
            if(!this.fn_PreNapbuDel())
            {
                return false;
            }
            var strSvc      = "NapbuDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050204_M_Napbu.do";
            var strInDs     = "dsMaster=dsMaster:u";
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
        };

        this.fn_PostNapbuDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                07. 환불 삭제 함수 선언
        ***********************************************************************/
        this.fn_PreHwanbulDel = function()
        {
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HWANBUL_YN") != "1")
        	{
        		this.alert("환불 정보가 있는 데이터만 삭제가 가능합니다.");
        		return false;
        	}

            var result = this.gfn_confirm( "삭제 시 장학 관련 정보가 모두 삭제됩니다.\n정말로 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            this.dsMaster.deleteRow(this.dsMaster.rowposition);
            return true;
        };

        this.fn_HwanbulDel = function()
        {
            if(!this.fn_PreHwanbulDel())
            {
                return false;
            }
            var strSvc      = "HwanbulDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050204_M_Hwanbul.do";
            var strInDs     = "dsMaster=dsMaster:u";
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
        };

        this.fn_PostHwanbulDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 납부 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreNapbuSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		var napbuDt = this.dsMaster.getColumn(i, "NAPBU_DT");
        		var deungrokStcd = this.dsMaster.getColumn(i, "DEUNGROK_STCD");
        		var napbuGeumaek = this.dsMaster.getColumn(i, "NAPBU_GEUMAEK");
        		var gasangGyejwaNo = this.dsMaster.getColumn(i, "GASANG_GYEJWA_NO");
        		var bankGbcd = this.dsMaster.getColumn(i, "BANK_GBCD");
        		var gojiGeumaek = this.dsMaster.getColumn(i, "GOJI_GEUMAEK");

        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			if(deungrokStcd == '2')
        			{
        				this.dsMaster.setColumn(i, "NAPBU_STCD", "0");
        				this.dsMaster.setColumn(i, "DEUNGROK_STCD", "2");
        			}
        			else if(deungrokStcd == '4')
        			{
        				if(this.gfn_isNull(this.dsMaster.getColumn(i, "POGI_SAYU_GBCD")))
        				{
        					this.alert("등록포기사유를 선택해주세요.");
        					return false;
        				}
        				this.dsMaster.setColumn(i, "DEUNGROK_STCD", "4");
        				this.dsMaster.setColumn(i, "NAPBU_STCD", "0");
        			}
        			else
        			{
        				if(this.gfn_isNull(napbuDt))
        				{
        					this.alert("납부일자를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(bankGbcd))
        				{
        					this.alert("납부은행을 선택해주세요.");
        					return false;
        				}
        				if(deungrokStcd == '1')
        				{
        					if(this.gfn_isNull(napbuGeumaek))
        					{
        						this.alert("납부금액을 입력해주세요.");
        						return false;
        					}
        					if(napbuGeumaek.toString() != gojiGeumaek.toString())
        					{
        						this.alert("납부 금액과 고지 예치금액이 일치 하여야합니다. 다시 확인해주세요.");
        						return false;
        					}
        					else
        					{
        						this.dsMaster.setColumn(i, "DEUNGROK_STCD", "1");
        						this.dsMaster.setColumn(i, "NAPBU_STCD", "1");
        					}
        				}
        				else
        				{
        					this.dsMaster.setColumn(i, "DEUNGROK_STCD", "5");
        					this.dsMaster.setColumn(i, "NAPBU_STCD", "1");
        				}
        			}
        		}
        	}

        	var result = this.gfn_confirm( "저장 시 환불 정보를 수정, 추가하셨다면 적용이 되지 않습니다.\n정말로 저장하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_NapbuSave = function()
        {
            if(!this.fn_PreNapbuSave())
            {
                return false;
            }
            var strSvc      = "NapbuSave";
            var strUrl      = "/prj/UR/UR02/Save_2050204_M_Napbu.do";
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
        this.fn_PostNapbuSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 환불 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHwanbulSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			this.alert("먼저 신규로 등록된 이중 납부자를 저장해주세요.");
        			return false;
        		}

        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			if(this.dsMaster.getColumn(i, "NAPBU_STCD") == '1')
        			{
        				var HWANBUL_GYEJWA_NO = this.dsMaster.getColumn(i, "HWANBUL_GYEJWA_NO");
        				var HWANBUL_BANK_NM = this.dsMaster.getColumn(i, "HWANBUL_BANK_NM");
        				var HWANBUL_YEGEUMJU = this.dsMaster.getColumn(i, "HWANBUL_YEGEUMJU");
        				var HWANBUL_DT = this.dsMaster.getColumn(i, "HWANBUL_DT");
        				var HWANBUL_SAYU_GBCD = this.dsMaster.getColumn(i, "HWANBUL_SAYU_GBCD");
        				var GITA_SAYU = this.dsMaster.getColumn(i, "GITA_SAYU");
        				var NAPBU_GEUMAEK = this.dsMaster.getColumn(i, "NAPBU_GEUMAEK");
        				var HWANBUL_GEUMAEK = this.dsMaster.getColumn(i, "HWANBUL_GEUMAEK");

        				if(this.gfn_isNull(HWANBUL_GEUMAEK))
        				{
        					this.alert("환불금액을 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(HWANBUL_GYEJWA_NO))
        				{
        					this.alert("환불계좌를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(HWANBUL_DT))
        				{
        					this.alert("환불일자를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(HWANBUL_BANK_NM))
        				{
        					this.alert("환불은행을 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(HWANBUL_YEGEUMJU))
        				{
        					this.alert("예금주를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(HWANBUL_SAYU_GBCD))
        				{
        					this.alert("환불사유를 입력해주세요.");
        					return false;
        				}
        				if(HWANBUL_SAYU_GBCD == '99' && this.gfn_isNull(GITA_SAYU))
        				{
        					this.alert("기타사유를 입력해주세요.");
        					return false;
        				}
        				if(NAPBU_GEUMAEK.toString() != HWANBUL_GEUMAEK.toString())
        				{
        					this.alert("납부금액과 환불 금액이 같아야 합니다. 다시 확인해주세요.");
        					return false;
        				}
        			}
        		}
        	}

        	var result = this.gfn_confirm( "저장 시 납부 정보 상세를 수정하였다면 적용이 되지 않습니다.\n정말로 저장하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HwanbulSave = function()
        {
            if(!this.fn_PreHwanbulSave())
            {
                return false;
            }
            var strSvc      = "HwanbulSave";
            var strUrl      = "/prj/UR/UR02/Save_2050204_M_Hwanbul.do";
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
        this.fn_PostHwanbulSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
        // 환불관련 Enable
        this.fn_HwanbulEnable = function()
        {
        	this.edtHwanbulGemaek.set_enable(true);
        	this.edtHwanbulGyejwa.set_enable(true);
        	this.calHwanbulDt.set_enable(true);
        	this.edtHwanbulBank.set_enable(true);
        	this.edtYegeumju.set_enable(true);
        	this.cboHwanbulSayu.set_enable(true);
        	//환불 관련 button
        	this.btnHwanbulAuto.set_visible(true);
        	this.btnHwanbulDel.set_visible(true);
        	this.btnHwanbulSave.set_visible(true);
        };

        // 환불관련 Disable
        this.fn_HwanbulDisable = function()
        {
        	this.edtHwanbulGemaek.set_enable(false);
        	this.edtHwanbulGyejwa.set_enable(false);
        	this.calHwanbulDt.set_enable(false);
        	this.edtHwanbulBank.set_enable(false);
        	this.edtYegeumju.set_enable(false);
        	this.cboHwanbulSayu.set_enable(false);
        	this.cboIphakPogisayu.set_enable(false);
        	this.edtGita.set_enable(false);
        	//환불 관련 button
        	this.btnHwanbulAuto.set_visible(false);
        	this.btnHwanbulDel.set_visible(false);
        	this.btnHwanbulSave.set_visible(false);
        };

        // 납부관련 Enable
        this.fn_NapbuEnable = function()
        {
        	var nRow = this.dsMaster.rowposition;
        	var deungrokStcd = this.dsMaster.getColumn(nRow, 'DEUNGROK_STCD');

        	if(deungrokStcd == '4')
        	{
        		this.calNapbuDt.set_enable(false);
        		this.cboNapbuBank.set_enable(false);
        		this.edtNapbuGeumaek.set_enable(false);
        		this.edtBigo.set_enable(false);
        		this.cboPogisayu.set_enable(true);
        	}
        	else if(deungrokStcd == '5')
        	{
        		this.calNapbuDt.set_enable(true);
        		this.cboNapbuBank.set_enable(true);
        		this.edtNapbuGeumaek.set_enable(false);
        		this.edtBigo.set_enable(true);
        		this.cboPogisayu.set_index(0);
        		this.cboPogisayu.set_enable(false);
        		this.dsMaster.setColumn(nRow, 'NAPBU_GEUMAEK', '');
        	}
        	else
        	{
        		this.calNapbuDt.set_enable(true);
        		this.cboNapbuBank.set_enable(true);
        		this.edtNapbuGeumaek.set_enable(true);
        		this.edtBigo.set_enable(true);
        		this.cboPogisayu.set_index(0);
        		this.cboPogisayu.set_enable(false);
        		this.dsMaster.setColumn(nRow, 'NAPBU_GEUMAEK', '');
        	}
        };

        // 가상계좌 조회
        this.fn_Gyejwa = function()
        {
        	this.ds_gyejwaInput.setColumn(0, "DEUNGROK_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_YYYY"));
        	this.ds_gyejwaInput.setColumn(0, "GONGJI_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "GONGJI_GBCD"));
        	this.ds_gyejwaInput.setColumn(0, "SUHEOM_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHEOM_NO"));
        	this.ds_gyejwaInput.setColumn(0, "BANK_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "BANK_GBCD"));

        	var strSvc      = "GyejwaRet";
            var strUrl      = "/prj/UR/UR02/Retrieve_2050204_M_Gyejwa.do";
            var strInDs     = "ds_gyejwaInput=ds_gyejwaInput";
            var strOutDs    = "dsGyejwa=dsGyejwa";
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

        this.fn_PostGyejwa = function()
        {
        	this.edtNapbuGyejwa.set_value(this.dsGyejwa.getColumn(0, "GASANG_GYEJWA_NO"));
        };

        /**********************************************************************
                12. 기타 Control Event
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
        	if(obj.getColumn(obj.rowposition, "NAPBU_STCD") == '1' && obj.getColumn(obj.rowposition, "DEUNGROK_STCD") == '1')
        	{
        		if(obj.getRowType(obj.rowposition) == 1)
        		{
        			this.calNapbuDt.set_enable(true);
        			this.cboDeungrokSangtae.set_enable(false);
        			this.cboPogisayu.set_enable(false);
        			this.cboNapbuBank.set_enable(false);
        			this.edtNapbuGeumaek.set_enable(false);
        		}
        		else
        		{
        			this.cboNapbuBank.set_enable(true);
        			this.edtNapbuGeumaek.set_enable(true);
        			this.edtBigo.set_enable(true);
        		}
        		this.calNapbuDt.set_enable(true);
        		this.cboPogisayu.set_enable(false);

        		if(obj.getColumn(obj.rowposition, "HWANBUL_SAYU_GBCD") == '99')
        		{
        			this.edtGita.set_enable(true);
        		}
        		else if(obj.getColumn(obj.rowposition, "HWANBUL_SAYU_GBCD") == '1')
        		{
        			this.cboIphakPogisayu.set_enable(true);
        		}
        		else
        		{
        			this.edtGita.set_enable(false);
        			this.cboIphakPogisayu.set_enable(false);
        		}

        		if(obj.getColumn(obj.rowposition, "IPHAK_POGI_SAYU_GBCD") == '99')
        		{
        			this.edtGita.set_enable(true);
        		}
        		else
        		{
        			this.edtGita.set_enable(false);
        		}

        		//환불 관련 div
        		this.fn_HwanbulEnable();
        	}
        	else
        	{
        		this.cboDeungrokSangtae.set_enable(true);

        		if(obj.getColumn(obj.rowposition, "DEUNGROK_STCD") == '4')
        		{
        			//등록포기
        			this.calNapbuDt.set_enable(false);
        			this.cboNapbuBank.set_enable(false);
        			this.edtNapbuGeumaek.set_enable(false);
        			this.edtBigo.set_enable(false);
        			this.cboPogisayu.set_enable(true);
        		}
        		else if(obj.getColumn(obj.currentrow, "DEUNGROK_STCD") == '5')
        		{
        			//문서등록
        			this.calNapbuDt.set_enable(true);
        			this.cboNapbuBank.set_enable(true);
        			this.edtNapbuGeumaek.set_enable(false);
        			this.edtBigo.set_enable(true);
        			this.cboPogisayu.set_index(0);
        			this.cboPogisayu.set_enable(false);
        		}
        		else
        		{
        			this.calNapbuDt.set_enable(true);
        			this.edtNapbuGeumaek.set_enable(true);
        			this.cboNapbuBank.set_enable(true);
        			this.edtBigo.set_enable(true);
        			this.cboPogisayu.set_index(0);
        			this.cboPogisayu.set_enable(false);
        		}
        		//환불 관련 div
        		this.fn_HwanbulDisable();
        	}
        	this.fn_Gyejwa();
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == 'DEUNGROK_STCD')
        	{
        		// 등록상태 변경에 따른 납부정보상세 div의 컴포넌트 enable setting
        		this.fn_NapbuEnable();
        	}
        	else if(e.columnid == 'BANK_GBCD')
        	{
        		// 납부은행 변경에 따른 계좌정보 조회 및 setting
        		if(this.dsMaster.getColumn(obj.rowposition,'DEUNGROK_STCD') == '1' || this.dsMaster.getColumn(obj.rowposition,'DEUNGROK_STCD') == '5')
        		{
        			this.fn_Gyejwa();
        		}
        	}
        };

        // 환불사유구분 변경시
        this.cboHwanbulSayu_onitemchanged = function(obj,e)
        {
        	if(obj.value == '99')
        	{
        		this.edtGita.set_enable(true);
        		this.cboIphakPogisayu.set_value('');
        		this.cboIphakPogisayu.set_enable(false);
        	}
        	else if (obj.value == '1')
        	{
        		this.cboIphakPogisayu.set_enable(true);
        		this.edtGita.set_enable(false);
        	}
        	else
        	{
        		this.edtGita.set_enable(false);
        		this.cboIphakPogisayu.set_enable(false);
        		this.cboIphakPogisayu.set_value('');
        	}
        };

        // 입학포기사유 변경시
        this.cboIphakPogisayu_onitemchanged = function(obj,e)
        {
        	if(obj.value == '99')
        	{
        		this.edtGita.set_enable(true);
        	}
        	else
        	{
        		this.edtGita.set_enable(false);
        	}
        };

        // 납부 자동입력
        this.btnNapbuAuto_onclick = function(obj,e)
        {
        	var rRow = this.dsMaster.rowposition
        	if(this.dsMaster.getColumn(rRow,'DEUNGROK_STCD') =='2')
        	{
        		this.dsMaster.setColumn(rRow, 'NAPBU_GEUMAEK', this.dsMaster.getColumn(rRow,'GOJI_GEUMAEK'));
        		this.dsMaster.setColumn(rRow, 'NAPBU_DT', objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		this.dsMaster.setColumn(rRow, 'BANK_GBCD', '09');
        		this.dsMaster.setRowType(rRow, Dataset.ROWTYPE_NORMAL);
        	}
        	else
        	{
        		this.alert('미등록 상태만 자동입력 가능합니다.');
        		return false;
        	}
        };

        // 환불 자동입력
        this.btnHwanbulAuto_onclick = function(obj,e)
        {
        	var rRow = this.dsMaster.rowposition
        	// 환불금액, 일자 자동 입력
        	if(this.gfn_isNull(this.dsMaster.getColumn(rRow,'HWANBUL_SEQ')))
        	{
        		this.dsMaster.setColumn(rRow, 'HWANBUL_GEUMAEK', this.dsMaster.getColumn(rRow,'NAPBU_GEUMAEK'));
        		this.dsMaster.setColumn(rRow, 'HWANBUL_DT', objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		this.dsMaster.setRowType(rRow, Dataset.ROWTYPE_NORMAL);
        	}
        	else
        	{
        		this.alert('환불내역이 없을 시 가능합니다.');
        		return false;
        	}
        };

        // 이중납부 등록
        this.btnNapbuDeungrok_onclick = function(obj,e)
        {
        	var chk;
        	var rRow = this.dsMaster.rowposition;

        	this.dsMaster.filter("SUHEOM_NO==" + this.dsMaster.getColumn(rRow, "SUHEOM_NO"));

        	for(var i=0 ; i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i, "NAPBU_STCD") != '1')
        		{
        			this.alert("납부한 대상자만 이중납부 등록을 하실 수 있습니다.");
        			return false;
        		}
        		else
        		{
        			chk = 1;
        		}
        	}

        	this.dsMaster.filter("");
        	this.grdMaster.selectRow(rRow, true);

        	if(chk == 1)
        	{
        		var nRow = this.dsMaster.insertRow(rRow+1);

        		if(this.dsMaster.getRowType(rRow) == 2)
        		{
        			this.alert("더이상 신규 추가를 하실 수 없습니다.");
        			return false;
        		}

        		this.dsMaster.copyRow(nRow, this.dsMaster, rRow);
        		this.dsMaster.setColumn(nRow, "NAPBU_STCD", 0);
        		this.dsMaster.setColumn(nRow, "DEUNGROK_STCD", 2);
        		this.dsMaster.setColumn(nRow, "BANK_GBCD", "");
        		this.dsMaster.setColumn(nRow, "NAPBU_GEUMAEK", "");
        		this.dsMaster.setColumn(nRow, "NAPBU_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		this.dsMaster.setColumn(nRow, "GASANG_GYEJWA_NO", "");
        		this.dsMaster.setColumn(nRow, "BIGO", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_BANK_NM", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_GYEJWA_NO", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_GEUMAEK", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_DT", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_GEUMAEK_GBCD", "");
        		this.dsMaster.setColumn(nRow, "HWANBUL_GIJUN_GBCD", "");
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
                13. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_YYYY",obj.value);
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

        this.divSearch_cboSearchChasu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_CHASU_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
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

        this.divSearch_edtSearchSuhoemNo_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOM_NO",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SUHEOMSAENG_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchNapbuFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchNapbuToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_TODT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchBank_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BANK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchNapbuSt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchHwanbulFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HWANBUL_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchHwanbulToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HWANBUL_TODT",obj.value);
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.stc_2.addEventHandler("onclick",this.stc_2_onclick,this);
            this.stc_2_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.cboDeungrokSangtae.addEventHandler("onitemchanged",this.cboDeungrokSangtae_onitemchanged,this);
            this.cboPogisayu.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchChasu.addEventHandler("onkeydown",this.divSearch_cboSearchChasu_onkeydown,this);
            this.divSearch.form.calSearchNapbuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchNapbuFrDt_onkeydown,this);
            this.divSearch.form.calSearchHwanbulFrDt.addEventHandler("onkeydown",this.divSearch_calSearchHwanbulFrDt_onkeydown,this);
            this.divSearch.form.calSearchNapbuToDt.addEventHandler("onkeydown",this.divSearch_calSearchNapbuToDt_onkeydown,this);
            this.divSearch.form.calSearchHwanbulToDt.addEventHandler("onkeydown",this.divSearch_calSearchHwanbulToDt_onkeydown,this);
            this.divSearch.form.cboSearchBank.addEventHandler("onkeydown",this.divSearch_cboSearchBank_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.edtSearchSuhoemNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.cboSearchNapbuSt.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.cboNapbuBank.addEventHandler("onitemchanged",this.cboGyeyeol_onitemchanged,this);
            this.edtNapbuGeumaek.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtGoji.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtChaekjeong.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtNapbuGyejwa.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtBigo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.btnNapbuDel.addEventHandler("onclick",this.fn_NapbuDel,this);
            this.btnNapbuDeungrok.addEventHandler("onclick",this.btnNapbuDeungrok_onclick,this);
            this.btnNapbuSave.addEventHandler("onclick",this.fn_NapbuSave,this);
            this.btnNapbuAuto.addEventHandler("onclick",this.btnNapbuAuto_onclick,this);
            this.btnHwanbulAuto.addEventHandler("onclick",this.btnHwanbulAuto_onclick,this);
            this.btnHwanbulDel.addEventHandler("onclick",this.fn_HwanbulDel,this);
            this.btnHwanbulSave.addEventHandler("onclick",this.fn_HwanbulSave,this);
            this.stc_2_02.addEventHandler("onclick",this.stc_2_onclick,this);
            this.stc_2_00_02.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.cboHwanbulSayu.addEventHandler("onitemchanged",this.cboHwanbulSayu_onitemchanged,this);
            this.edtHwanbulGyejwa.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtHwanbulGemaek.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtHwanbulBank.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtGita.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.edtYegeumju.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.cboIphakPogisayu.addEventHandler("onitemchanged",this.cboIphakPogisayu_onitemchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UR02_2050204_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
