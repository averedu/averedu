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
            this.set_titletext("본등록납부/환불처리(신입생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDaesangja", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"POGI_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"IJUNG_NAPBU_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChasu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbuSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_IPHAKGEUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHAEKJEONG_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOJI_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJON_BANK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbul", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GIJUN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPogi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDeungrok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGeumaek", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGijun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSayu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GITA_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"HWANBUL_BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HWANBUL_GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HWANBUL_YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_POGI_SAYU_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIphakPogi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","89",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("등록대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","137","88",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDaesangja","0","114","590","379",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDaesangja");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"차수\"/><Cell col=\"4\" text=\"수험번호\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"생년월일\"/><Cell col=\"7\" text=\"학과\"/><Cell col=\"8\" text=\"주야구분\"/><Cell col=\"9\" text=\"납부상태\"/><Cell col=\"10\" text=\"등록상태\"/><Cell col=\"11\" text=\"등록포기사유\"/><Cell col=\"12\" text=\"이중납부여부\"/><Cell col=\"13\" text=\"환불여부\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:MOJIP_GBNM\"/><Cell col=\"3\" text=\"bind:DEUNGROK_CHASU_GBNM\"/><Cell col=\"4\" text=\"bind:SUHEOM_NO\"/><Cell col=\"5\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"6\" text=\"bind:BIRTHDAY\"/><Cell col=\"7\" text=\"bind:HAKGWA_NM\"/><Cell col=\"8\" text=\"bind:JUYA_GBNM\"/><Cell col=\"9\" text=\"bind:NAPBU_STNM\"/><Cell col=\"10\" text=\"bind:DEUNGROK_STCD\" displaytype=\"expr:NAPBU_STCD == &apos;0&apos; &amp;&amp; DEUNGROK_STCD != &apos;&apos; ? &apos;combocontrol&apos; : &apos;combotext&apos;\" combodataset=\"dsGridDeungrok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"expr:NAPBU_STCD == &apos;0&apos; &amp;&amp; DEUNGROK_STCD != &apos;&apos; ? &apos;combo&apos; : &apos;none&apos;\"/><Cell col=\"11\" text=\"bind:POGI_SAYU_GBCD\" displaytype=\"expr:NAPBU_STCD == &apos;0&apos; &amp;&amp; DEUNGROK_STCD == &apos;4&apos; ? &apos;combocontrol&apos; : &apos;combotext&apos;\" edittype=\"expr:NAPBU_STCD == &apos;0&apos; &amp;&amp; DEUNGROK_STCD == &apos;4&apos; ? &apos;combo&apos; : &apos;none&apos;\" combodataset=\"dsPogi\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"12\" text=\"bind:IJUNG_NAPBU_YN_NM\"/><Cell col=\"13\" text=\"bind:HWANBUL_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","290","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("18");
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

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-4","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","260","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","349","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","339","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","237","0","56","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","474","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
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

            obj = new Static("Static01_02_01_01_01_00","473","0","56","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","553","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","789","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","710","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","1182","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
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

            obj = new Static("Static01_02_01_01_01_00_00_00","687","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","946","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00_00","1397","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","923","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1025","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
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
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1159","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul","686","37","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","532","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
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
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1476","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","-4","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("납부상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNapbuSt","87","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNapbuSt");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","64","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01_00","260","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDeungrokSt","349","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_01","627","30","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave1","540","81","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel1","425","81","110","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록대상자 삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","590","84","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","290","493","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","503",null,"22","1545",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("장학정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","87","502",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","520",null,"8","1050",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdJanghak","0","528","590",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJanghak");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"장학명\"/><Cell col=\"2\" text=\"입학금\"/><Cell col=\"3\" text=\"수업료\"/><Cell col=\"4\" text=\"장학금 합계\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_NM\"/><Cell col=\"2\" text=\"bind:JANGHAK_IPHAKGEUM\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:JANGHAK_IPHAKGEUM + JANGHAK_SUEOPRYO\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;JANGHAK_IPHAKGEUM&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;JANGHAK_SUEOPRYO&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;JANGHAK_IPHAKGEUM&quot;) + dataset.getSum(&quot;JANGHAK_SUEOPRYO&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","620","89",null,"22","925",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("납부내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","707","88",null,"24","810",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNapbu","620","114",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsNapbu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"납부일자\"/><Cell col=\"2\" text=\"납부항목\"/><Cell col=\"3\" text=\"책정금액\"/><Cell col=\"4\" text=\"장학금액\"/><Cell col=\"5\" text=\"고지금액\"/><Cell col=\"6\" text=\"납부금액\"/><Cell col=\"7\" text=\"납부은행\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:NAPBU_DT\" edittype=\"expr:GEUMAEK_GBCD != &apos;00&apos; ? &quot;date&quot;:&quot;none&quot; \" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:GEUMAEK_GBCD\" edittype=\"none\" combodataset=\"dsGeumaek\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:CHAEKJEONG_GEUMAEK\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:JANGHAK_GEUMAEK\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:GOJI_GEUMAEK\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"expr:GEUMAEK_GBCD != &apos;00&apos; ? &apos;number&apos; : &quot;number&quot;\" edittype=\"expr:GEUMAEK_GBCD != &apos;00&apos; ? &apos;text&apos; : &apos;none&apos;\" editinputtype=\"number\" editmaxlength=\"22\"/><Cell col=\"7\" text=\"bind:BANK_GBCD\" displaytype=\"expr: GEUMAEK_GBCD != &apos;00&apos;  ? &quot;combocontrol&quot; : &quot;combotext&quot;\" edittype=\"expr:GEUMAEK_GBCD != &apos;00&apos; ? &apos;combo&apos;:&apos;none&apos;\" combodataset=\"dsBank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getCaseSum(&quot;GEUMAEK_GBCD!=&apos;00&apos;&quot;,&quot;parseInt(CHAEKJEONG_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getCaseSum(&quot;GEUMAEK_GBCD!=&apos;00&apos;&quot;,&quot;parseInt(JANGHAK_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseInt(GOJI_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseInt(NAPBU_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbu","1430","81","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("이중납부 등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2","1590","81","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2","1535","81","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaengsung","1305","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("납부금액 자동생성");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","862","379","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divHwanbul","620","424",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","970","9",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","58","1020","9",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00","16","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("9");
            obj.set_text("환불사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","280","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("10");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","97","0","10","65",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","359","0","10","65",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","257","0","56","64",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","31","970","5",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("15");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","517","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("16");
            obj.set_text("환불계좌");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","493","0","56","34",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","596","0","10","35",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","833","0","10","61",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","754","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("20");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00","730","0","56","62",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulBank","369","9","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("16");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulGyejwa","606","9","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("30");
            obj.set_inputtype("number");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","-1","36","100","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("22");
            obj.set_text("입학포기사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Combo("cboIphakPogiSayu","107","36","150","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsIphakPogi");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01_00","280","36","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("23");
            obj.set_text("기타사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Combo("cboHwanbulSayu","107","9","150","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSayu");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtYegeumju","843","9","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("13");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtGitaSayu","369","36","361","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("166");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","754","36","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("24");
            obj.set_text("환불일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Calendar("calHwanbulDt","843","36","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Grid("grdHwanbul","620","528",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHwanbul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"환불일자\"/><Cell col=\"2\" text=\"환불항목\"/><Cell col=\"3\" text=\"납부금액\"/><Cell col=\"4\" text=\"납부은행\"/><Cell col=\"5\" text=\"환불산정구분\"/><Cell col=\"6\" text=\"환불금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HWANBUL_DT\" displaytype=\"expr:HWANBUL_DT != &quot;&quot; ? &quot;date&quot; : &quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:GEUMAEK_GBCD\" combodataset=\"dsGeumaek\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\" edittype=\"none\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"expr:GEUMAEK_GBCD != &apos;00&apos; &amp;&amp; NAPBU_GEUMAEK != &quot;&quot; ? &quot;number&quot; : &quot;number&quot;\"/><Cell col=\"4\" displaytype=\"combotext\" text=\"bind:BANK_GBCD\" combodataset=\"dsBank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:HWANBUL_GIJUN_GBCD\" displaytype=\"combotext\" combodataset=\"dsGijun\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:HWANBUL_GEUMAEK\" edittype=\"expr:GEUMAEK_GBCD!=&apos;00&apos; ? &apos;text&apos;:&apos;none&apos;\" displaytype=\"number\" editinputtype=\"number\" editmaxlength=\"22\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;parseInt(NAPBU_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseInt(HWANBUL_GEUMAEK)&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","650","493","100","35",null,null,null,null,null,null,this);
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

            obj = new Button("btnSanjeong","1375","391","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("환불금액산정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","1480","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel3","1535","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave3","1590","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","620","416",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("stc_09_00_01_00","620","399",null,"22","925",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("환불정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt4","707","398",null,"24","810",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("본등록납부/환불처리(신입생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchChasu","value","ds_input","DEUNGROK_CHASU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtSearchSuhoemNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.chkSearchNapbu","value","ds_input","IJUNG_NAPBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.chkSearchHwanbul","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchNapbuSt","value","ds_input","NAPBU_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchDeungrokSt","value","ds_input","DEUNGROK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divHwanbul.form.edtHwanbulBank","value","dsHwanbulList","HWANBUL_BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divHwanbul.form.edtHwanbulGyejwa","value","dsHwanbulList","HWANBUL_GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divHwanbul.form.cboIphakPogiSayu","value","dsHwanbulList","IPHAK_POGI_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divHwanbul.form.cboHwanbulSayu","value","dsHwanbulList","HWANBUL_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divHwanbul.form.edtYegeumju","value","dsHwanbulList","HWANBUL_YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divHwanbul.form.edtGitaSayu","value","dsHwanbulList","GITA_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divHwanbul.form.calHwanbulDt","value","dsHwanbulList","HWANBUL_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDaesangja");
            this._addPreloadList("data","","dsJanghak");
            this._addPreloadList("data","","dsNapbu");
            this._addPreloadList("data","","dsHwanbul");
            this._addPreloadList("data","","dsHwanbulList");
        };
        
        // User Script
        this.registerScript("UR02_2050206_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050206_M.xfdl(등록 대상자 관리(신입) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/12
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
        this.geumaekChk = 0;
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
            var strDs    = "dsChasu|dsJuya|dsNapbuSt|dsDeungrok|dsGridDeungrok|dsYn|dsPogi|dsIphakPogi|dsGeumaek|dsBank|dsGijun|dsSayu|dsGijun";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "03006|00003|03008|03009|03009|00051|03010|03010|03002|03007|03004|03011|03004";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|X|X|X|S|X|X|X|S|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	this.fn_Mojip();
        };

        this.fn_PostInit = function()
        {
        	this.dsDeungrok.filter("CODE != '9'");
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
            this.gfn_clearSortAll(this.grdDaesangja);
        	this.gfn_clearSortAll(this.grdJanghak);
        	this.gfn_clearSortAll(this.grdNapbu);
        	this.gfn_clearSortAll(this.grdHwanbul);
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
        			case "Mojip":
                            this.fn_PostMojip();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
                    case "DaesangjaSave":
                            this.fn_PostDaesangjaSave();
                        break;
        			case "NapbuSave":
                            this.fn_PostNapbuSave();
                        break;
        			case "HwanbulSave":
                            this.fn_PostHwanbulSave();
                        break;
                    case "DaesangjaDel":
                            this.fn_PostDaesangjaDel();
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
                05. 등록대상자 목록 조회 함수
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

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	this.dsDaesangja.clearData();
        	this.dsJanghak.clearData();
        	this.dsNapbu.clearData();
        	this.dsHwanbul.clearData();
        	this.dsHwanbulList.clearData();

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
            var strUrl      = "/prj/UR/UR02/Retrieve_2050206_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDaesangja=dsDaesangja";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsDaesangja);
        };

        /**********************************************************************
                06. 납부,장학,환불 내역 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        	this.ds_dInput.setColumn(0, "GONGJI_GBCD", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "GONGJI_GBCD"));
        	this.ds_dInput.setColumn(0, "SUHEOM_NO", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "SUHEOM_NO"));
        	this.ds_dInput.setColumn(0, "BANK_GBCD", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "BANK_GBCD"));

            return true;
        };
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            if(!this.fn_PreDRet())
            {
                return false;
            }
            var strSvc      = "DRet";
            var strUrl      = "/prj/UR/UR02/Retrieve_2050206_M_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsNapbu=dsNapbu ";
        		strOutDs   += "dsJanghak=dsJanghak ";
        		strOutDs   += "dsHwanbul=dsHwanbul ";
        		strOutDs   += "dsHwanbulList=dsHwanbulList ";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsNapbu);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsJanghak);
        	this.gfn_getRowCount(this.staRowCnt4,this.dsHwanbul);
        };

        /**********************************************************************
                07. 환불내역 신규 함수 선언
        ***********************************************************************/
        this.fn_HwanbulNew = function()
        {
        	//환불 중복 체크
        	var chk = 1;

        	var rowPos1 = this.dsNapbu.rowposition;
        	var rowCnt = this.dsHwanbul.rowcount;

        	if(this.dsNapbu.getColumn(rowPos1, "GEUMAEK_GBCD") == '00')
        	{
        		this.alert("예치금 환불처리는 예치금 납부/환불 처리 화면에서 가능합니다.");
        		return false;
        	}

        	for(var i = 0; i < rowCnt ; i++)
        	{
        		var napbuGeumaekGbcd = this.dsNapbu.getColumn(rowPos1, "GEUMAEK_GBCD");
        		var hwanbulGeumaekGbcd = this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD");

        		if(napbuGeumaekGbcd.toString() == hwanbulGeumaekGbcd.toString())
        		{
        			chk = 0;
        		}
        	}

        	if(chk == 1)
        	{
        		if(!this.gfn_isNull(this.dsNapbu.getColumn(rowPos1, "NAPBU_GEUMAEK")))
        		{
        			if(this.dsHwanbulList.rowcount == 0)
        			{
        				this.dsHwanbulList.deleteAll();
        				var nRow1 = this.dsHwanbulList.addRow();
        				this.dsHwanbulList.setColumn(nRow1, "DEUNGROK_YYYY", this.dsNapbu.getColumn(rowPos1, "DEUNGROK_YYYY"));
        				this.dsHwanbulList.setColumn(nRow1, "GONGJI_GBCD", this.dsNapbu.getColumn(rowPos1, "GONGJI_GBCD"));
        				this.dsHwanbulList.setColumn(nRow1, "SUHEOM_NO", this.dsNapbu.getColumn(rowPos1, "SUHEOM_NO"));
        				this.dsHwanbulList.setColumn(nRow1, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        				this.dsHwanbulList.setColumn(nRow1, "HWANBUL_SAYU_GBCD", "");
        			}
        			var nRow = this.dsHwanbul.addRow();
        			this.dsHwanbul.setColumn(nRow, "DEUNGROK_YYYY", this.dsNapbu.getColumn(rowPos1, "DEUNGROK_YYYY"));
        			this.dsHwanbul.setColumn(nRow, "GONGJI_GBCD", this.dsNapbu.getColumn(rowPos1, "GONGJI_GBCD"));
        			this.dsHwanbul.setColumn(nRow, "SUHEOM_NO", this.dsNapbu.getColumn(rowPos1, "SUHEOM_NO"));
        			this.dsHwanbul.setColumn(nRow, "BANK_GBCD", this.dsNapbu.getColumn(rowPos1, "BANK_GBCD"));
        			if(!this.gfn_isNull(this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ")))
        			{
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_SEQ", this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ"));
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_SAYU_GBCD", this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD"));
        			}
        			this.dsHwanbul.setColumn(nRow, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			this.dsHwanbul.setColumn(nRow, "GEUMAEK_GBCD", this.dsNapbu.getColumn(rowPos1, "GEUMAEK_GBCD"));
        			this.dsHwanbul.setColumn(nRow, "NAPBU_GEUMAEK", this.dsNapbu.getColumn(rowPos1, "NAPBU_GEUMAEK"));
        			this.dsHwanbul.setColumn(nRow, "HWANBUL_GEUMAEK", this.dsNapbu.getColumn(rowPos1, "NAPBU_GEUMAEK"));
        			this.dsHwanbul.setColumn(nRow, "HWANBUL_GIJUN_GBCD", "1");
        		}
        		else
        		{
        			this.alert("납부한 항목만 환불처리가 가능합니다. 다시 확인해주세요.");
        			return false;
        		}
        	}
        	else
        	{
        		this.alert("이미 등록된 환불 정보입니다. 다시 확인해주세요.");
        		return false;
        	}
        };

        /**********************************************************************
                08. 등록대상자 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDaesangjaDel = function()
        {
            //멀티삭제용도
            if(this.dsDaesangja.rowcount < 1 || this.dsDaesangja.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "확인 시 등록대상자가 삭제됩니다. 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsDaesangja.set_enableevent(false);
            for(var i=this.dsDaesangja.rowcount-1;i>-1;i--)
            {
                if(this.dsDaesangja.getColumn(i,"CHK") == "1" || this.dsDaesangja.getRowType(i) == 2)
                {
                    this.dsDaesangja.deleteRow(i);
                }
            }
            this.dsDaesangja.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DaesangjaDel = function()
        {
            if(!this.fn_PreDaesangjaDel())
            {
                return false;
            }
            var strSvc      = "DaesangjaDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050206_M_Daesangja.do";
            var strInDs     = "dsDaesangja=dsDaesangja:u";
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

        this.fn_PostDaesangjaDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt1,this.dsDaesangja);
        };

        /**********************************************************************
                09. 납부내역 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreNapbuDel = function()
        {
            //멀티삭제용도
            if(this.dsNapbu.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if(this.dsNapbu.getColumn(this.dsNapbu.rowposition, "GEUMAEK_GBCD") == '00')
        	{
        		this.alert("예치금은 삭제할 수 없습니다.");
        		return false;
        	}

        	var chk = 0;
        	var rowCnt = this.dsHwanbul.rowcount;

        	var napbuGeaumaekGbcd = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "GEUMAEK_GBCD");

        	for(var i = 0 ; i < rowCnt ; i++)
        	{
        		var hwanbulGeaumaekGbcd = this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD");
        		if(napbuGeaumaekGbcd == hwanbulGeaumaekGbcd)
        		{
        			chk = 1;
        		}
        	}

        	if(chk == 1)
        	{
        		if(this.dsHwanbul.getRowType(this.dsHwanbul.rowposition) != Dataset.ROWTYPE_INSERT)
        		{
        			this.alert("환불한 내역이 있습니다. 다시 확인해주세요.");
        			return false;
        		}
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsNapbu.deleteRow(this.dsNapbu.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_NapbuDel = function()
        {
            if(!this.fn_PreNapbuDel())
            {
                return false;
            }
            var strSvc      = "NapbuDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050206_M_Napbu.do";
            var strInDs     = "dsNapbu=dsNapbu:u";
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
            this.gfn_getRowCount(this.staRowCnt3,this.dsNapbu);
        };

        /**********************************************************************
                10. 환불내역 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreHwanbulDel = function()
        {
            //멀티삭제용도
            if(this.dsNapbu.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if(this.dsHwanbul.getColumn(this.dsHwanbul.rowposition, "GEUMAEK_GBCD") == '00')
        	{
        		this.alert("예치금 환불처리는 예치금 납부/환불 처리 화면에서 가능합니다.");
        		return false;
        	}

        	if (this.dsHwanbul.getRowType(this.dsHwanbul.rowposition) != Dataset.ROWTYPE_INSERT && this.dsHwanbul.getColumn(0, "HWANBUL_SAYU_GBCD") == '1')
        	{
        		this.alert("환불 사유가 입학 포기인 경우에는 환불 정보를 삭제하실 수 없습니다.");
        		return false;
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsHwanbul.deleteRow(this.dsHwanbul.rowposition);
        	this.dsHwanbulList.deleteAll();
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_HwanbulDel = function()
        {
            if(!this.fn_PreHwanbulDel())
            {
                return false;
            }
            var strSvc      = "HwanbulDel";
            var strUrl      = "/prj/UR/UR02/Delete_2050206_M_Hwanbul.do";
            var strInDs     = "dsHwanbul=dsHwanbul:u ";
        		strInDs    += "dsHwanbulList=dsHwanbulList:u";
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
            this.gfn_getRowCount(this.staRowCnt4,this.dsHwanbul);
        };

        /**********************************************************************
                11. 등록대상자 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreDaesangjaSave = function()
        {
            if(this.dsDaesangja.rowcount > 0)
            {
                for(var i=0;i<this.dsDaesangja.rowcount; i++)
                {
                    if(this.dsDaesangja.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsDaesangja.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsDaesangja))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	for(var i=0; i<this.dsDaesangja.rowcount; i++)
        	{
        		if(this.dsDaesangja.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			if(this.dsDaesangja.getColumn(i, "DEUNGROK_STCD") == '1')
        			{
        				this.alert("등록으로는 변경할 수 없습니다.");
        				return false;
        			}
        			else if(this.dsDaesangja.getColumn(i, "DEUNGROK_STCD") == '5')
        			{
        				this.alert("문서 등록으로는 변경할 수 없습니다.");
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
        this.fn_DaesangjaSave = function()
        {
            if(!this.fn_PreDaesangjaSave())
            {
                return false;
            }
            var strSvc      = "DaesangjaSave";
            var strUrl      = "/prj/UR/UR02/Save_2050206_M_Daesangja.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsDaesangja=dsDaesangja:u";
            var strOutDs    = "dsDaesangja=dsDaesangja";
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
        this.fn_PostDaesangjaSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt1,this.dsDaesangja);
        };

        /**********************************************************************
                12. 납부내역 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreNapbuSave = function()
        {
            if(!this.gfn_isUpdate(this.dsNapbu))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var updateGeumaekGbcd;
        	for(var i=0; i<this.dsNapbu.rowcount; i++)
        	{
        		if(this.dsNapbu.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			var napbuDt = this.dsNapbu.getColumn(i, "NAPBU_DT");
        			var bankGbcd = this.dsNapbu.getColumn(i,"BANK_GBCD");
        			var gojiGeumaek = this.dsNapbu.getColumn(i, "GOJI_GEUMAEK");
        			var napbuGeumaek = this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK");

        			if(!this.gfn_isNull(napbuDt))
        			{
        				if(gojiGeumaek != 0 && this.gfn_isNull(napbuGeumaek))
        				{
        					this.alert("납부금액을 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(bankGbcd))
        				{
        					this.alert("납부은행을 입력해주세요.");
        					return false;
        				}
        			}
        			if(gojiGeumaek != 0 && !this.gfn_isNull(napbuGeumaek))
        			{
        				if(this.gfn_isNull(napbuDt))
        				{
        					this.alert("납부일자를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(bankGbcd))
        				{
        					this.alert("납부은행을 입력해주세요.");
        					return false;
        				}
        			}
        			if(!this.gfn_isNull(bankGbcd))
        			{
        				if(this.gfn_isNull(napbuDt))
        				{
        					this.alert("납부일자를 입력해주세요.");
        					return false;
        				}
        				if(gojiGeumaek != 0 && this.gfn_isNull(napbuGeumaek))
        				{
        					this.alert("납부금액을 입력해주세요.");
        					return false;
        				}
        			}
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") !='02')
        			{
        				if(gojiGeumaek.toString() != napbuGeumaek.toString())
        				{
        					this.alert("수업료를 제외한 납부 금액은 고지 금액과 같아야 합니다.\n다시 확인해주세요.");
        					return false;
        				}
        			}
        			updateGeumaekGbcd = this.dsNapbu.getColumn(i, "GEUMAEK_GBCD");
        		}

        		//금액 구분별 납부 금액 체크
        		if(updateGeumaekGbcd == '01')
        		{
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") == '02' && this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        			{
        				this.alert("입학금과 수업료는 한번에 납부 처리하셔야 합니다.");
        				return false;
        			}
        		}
        		else if(updateGeumaekGbcd == '02')
        		{
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") == '01' && this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        			{
        				this.alert("입학금과 수업료는 한번에 납부 처리하셔야 합니다.");
        				return false;
        			}
        		}

        		if(i != this.dsNapbu.rowcount)
        		{
        			var bankGbcd1 = this.dsNapbu.getColumn(i, "BANK_GBCD");
        			var bankGbcd2 = this.dsNapbu.getColumn(i+1, "BANK_GBCD");

        			if(!this.gfn_isNull(bankGbcd1) && !this.gfn_isNull(bankGbcd2) && bankGbcd1 != bankGbcd2 && this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") != '00')
        			{
        				this.alert("납부 은행이 다른 항목이 존재합니다.\n다시 확인해주세요.");
        				return false;
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
            var strUrl      = "/prj/UR/UR02/Save_2050206_M_Napbu.do";
            var strInDs     = "dsNapbu=dsNapbu:u";
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
        this.fn_PostNapbuSave = function()
        {
            this.fn_DRet();
        };

        /**********************************************************************
                13. 환불내역 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHwanbulSave = function()
        {
            if(!this.gfn_isUpdate(this.dsHwanbul) && !this.gfn_isUpdate(this.dsHwanbulList))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var rowCnt = this.dsHwanbul.rowcount;
        	var chk = 0;

        	for(var i=0 ; i<rowCnt; i++)
        	{
        		if(this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			var hwanbulSayu = this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD");
        			var hwanbulDt = this.dsHwanbulList.getColumn(0, "HWANBUL_DT");
        			var hwanbulDt1 = this.dsHwanbul.getColumn(i, "HWANBUL_DT");
        			var hwanbulBankNm = this.dsHwanbulList.getColumn(0, "HWANBUL_BANK_NM");
        			var napbuGeumaek = this.dsHwanbul.getColumn(i, "NAPBU_GEUMAEK");
        			var hwanbulGyejwa = this.dsHwanbulList.getColumn(0, "HWANBUL_GYEJWA_NO");
        			var yegeumju = this.dsHwanbulList.getColumn(0, "HWANBUL_YEGEUMJU");
        			var gitaSayu = this.dsHwanbulList.getColumn(0, "GITA_SAYU");
        			var hwanbulGeumaek = this.dsHwanbul.getColumn(i, "HWANBUL_GEUMAEK");
        			var ijunnapbuYn = this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "IJUNG_NAPBU_YN");

        			if(this.gfn_isNull(hwanbulSayu))
        			{
        				this.alert("환불사유를 선택해주세요.");
        				return false;
        			}
        			if(hwanbulSayu == '99' && this.gfn_isNull(gitaSayu))
        			{
        				this.alert("기타사유를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulBankNm))
        			{
        				this.alert("환불은행을 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulGyejwa))
        			{
        				this.alert("환불계좌를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(yegeumju))
        			{
        				this.alert("예금주를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulDt))
        			{
        				this.alert("환불일자를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulDt1))
        			{
        				this.alert("아래 표의 환불일자를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulGeumaek))
        			{
        				this.alert("환불금액을 입력해주세요.");
        				return false;
        			}
        			if(hwanbulGeumaek.toString() != napbuGeumaek.toString())
        			{
        				this.alert("환불 금액은 납부 금액과 같아야 합니다.\n다시 확인해주세요.");
        				return false;
        			}
        			if(hwanbulSayu == '1')
        			{
        				this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        				this.ds_dInput.setColumn(0, "SUHEOM_NO", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "SUHEOM_NO"));

        				var strSvc      = "HwanbulCntRet";
        				var strUrl      = "/prj/UR/UR02/Retrieve_2050206_M_HwanbulCnt.do";
        				var strInDs     = "ds_dInput=ds_dInput";
        				var strOutDs    = "dsHwanbulCnt=dsHwanbulCnt";
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

        				var hwanbulCnt = this.dsHwanbulCnt.getColumn(0, "CNT");

        				if(hwanbulCnt == 0 && ijunnapbuYn == '1')
        				{
        					this.alert("이중 납부자는 입학포기를 선택할 수 없습니다.");
        					return false;
        				}

        				if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '01' || this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '02')
        				{
        					this.geumaekChk++;
        				}
        			}
        		}
        		if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '01')
        		{
        			chk ++;
        		}
        		if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '02')
        		{
        			chk ++;
        		}
        	}

        	if(chk != 0 && chk != 2)
        	{
        		this.alert("입학금과 수업료는 한번에 환불 처리하셔야 합니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "저장 시 납부 정보를 수정, 추가하셨다면 적용이 되지 않습니다.\n정말로 저장하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        	this.ds_dInput.setColumn(0, "GONGJI_GBCD", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "GONGJI_GBCD"));
        	this.ds_dInput.setColumn(0, "SUHEOM_NO", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "SUHEOM_NO"));

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
            var strUrl      = "/prj/UR/UR02/Save_2050206_M_Hwanbul.do";
            var strInDs     = "dsHwanbul=dsHwanbul:u ";
        		strInDs    += "dsHwanbulList=dsHwanbulList:u ";
        		strInDs    += "ds_dInput=ds_dInput";
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
        this.fn_PostHwanbulSave = function()
        {
        	if(this.dsJanghak.rowcount != 0 && this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD") == '1')
        	{
        		this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsHwanbul.getColumn(0, "DEUNGROK_YYYY"));
        		this.ds_dInput.setColumn(0, "GONGJI_GBCD", this.dsHwanbul.getColumn(0, "GONGJI_GBCD"));
        		this.ds_dInput.setColumn(0, "SUHEOM_NO", this.dsHwanbul.getColumn(0, "SUHEOM_NO"));
        		this.ds_dInput.setColumn(0, "BANK_GBCD", this.dsHwanbul.getColumn(0, "BANK_GBCD"));

        		this.fn_Iphakpogi();
        	}
        	geumaekChk = 0;
        	this.fn_DRet();
        };

        /**********************************************************************
                14. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                15. 각종함수
        ***********************************************************************/
        // 공통 모집구분 조회
        this.fn_Mojip = function()
        {
            var strSvc      = "Mojip";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_MojipAll.do";
            var strInDs     = "";
            var strOutDs    = "dsMojip=dsMojip";
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

        this.fn_PostMojip = function()
        {
        	this.dsMojip.insertRow(0);
        	this.dsMojip.setColumn(0, "MOJIP_GBCD", "");
        	this.dsMojip.setColumn(0, "MOJIP_NM", "전체");
        	this.divSearch.form.cboSearchMojip.set_index(0);
        };

        // 환불내역 버튼 활성화
        this.fn_HwanbulEnable = function()
        {
        	this.btnSanjeong.set_visible(true);
        	this.btnNew.set_visible(true);
        	this.btnDel3.set_visible(true);
        	this.btnSave3.set_visible(true);
        };

        // 환불내역 버튼 비활성화
        this.fn_HwanbulDisable = function()
        {
        	this.btnSanjeong.set_visible(false);
        	this.btnNew.set_visible(false);
        	this.btnDel3.set_visible(false);
        	this.btnSave3.set_visible(false);
        };

        // 납부금액 자동생성
        this.fn_Saengsung = function()
        {
        	var napbuCnt = 0;
        	var yechiGeumaek = 0;
        	var iphakGeumaek = 0;
        	var sueopryoGeumaek = 0;
        	var iphakGeumaekJ = 0;
        	var sueopryoGeumaekJ = 0;

        	for(var i = 0 ; i < this.dsNapbu.rowcount ; i++)
        	{
        		if(this.dsNapbu.getColumn(i,'GEUMAEK_GBCD') == '00')
        		{
        			yechiGeumaek = this.dsNapbu.getColumn(i,'NAPBU_GEUMAEK');
        		}
        		if(this.dsNapbu.getColumn(i,'GEUMAEK_GBCD') == '01')
        		{
        			iphakGeumaek = this.dsNapbu.getColumn(i,'CHAEKJEONG_GEUMAEK');
        			iphakGeumaekJ = this.dsNapbu.getColumn(i,'JANGHAK_GEUMAEK');
        		}
        		if(this.dsNapbu.getColumn(i,'GEUMAEK_GBCD') == '02')
        		{
        			sueopryoGeumaek = this.dsNapbu.getColumn(i,'CHAEKJEONG_GEUMAEK');
        			sueopryoGeumaekJ = this.dsNapbu.getColumn(i,'JANGHAK_GEUMAEK');
        		}
        		if(this.dsNapbu.getColumn(i,'GEUMAEK_GBCD') != '00')
        		{
        			if(this.dsNapbu.getColumn(i,'GOJI_GEUMAEK') > 0 )
        			{
        				if(this.dsNapbu.getColumn(i,'NAPBU_GEUMAEK') == null)
        				{
        					if(this.dsNapbu.getColumn(i,'GEUMAEK_GBCD') == '02')
        					{
        						if( (iphakGeumaek+sueopryoGeumaek)-(iphakGeumaekJ+sueopryoGeumaekJ) >= yechiGeumaek )
        						{
        							this.dsNapbu.setColumn(i,'NAPBU_GEUMAEK', this.dsNapbu.getColumn(i,'CHAEKJEONG_GEUMAEK') - this.dsNapbu.getColumn(i,'JANGHAK_GEUMAEK') - yechiGeumaek)
        						}
        					}
        					else
        					{
        						this.dsNapbu.setColumn(i,'NAPBU_GEUMAEK',this.dsNapbu.getColumn(i,'GOJI_GEUMAEK'));
        					}
        					this.dsNapbu.setColumn(i,'NAPBU_DT', objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        					this.dsNapbu.setColumn(i,'BANK_GBCD','09');
        				}
        			}
        		}
        	}
        };

        // 환불금액산정
        this.fn_Sanjeong = function()
        {
        	var rowCnt = this.dsNapbu.rowcount;
        	var chk = 0;

        	if(this.gfn_isNull(this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ")))
        	{
        		this.dsHwanbul.deleteAll();
        		for(var i = 0; i < rowCnt; i ++)
        		{
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") != '00')
        			{
        				if(!this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        				{
        					var nRow = this.dsHwanbul.addRow(i);
        					this.dsHwanbul.setColumn(nRow, "DEUNGROK_YYYY", this.dsNapbu.getColumn(i, "DEUNGROK_YYYY"));
        					this.dsHwanbul.setColumn(nRow, "GONGJI_GBCD", this.dsNapbu.getColumn(i, "GONGJI_GBCD"));
        					this.dsHwanbul.setColumn(nRow, "SUHEOM_NO", this.dsNapbu.getColumn(i, "SUHEOM_NO"));
        					this.dsHwanbul.setColumn(nRow, "BANK_GBCD", this.dsNapbu.getColumn(i, "BANK_GBCD"));
        					this.dsHwanbul.setColumn(nRow, "GEUMAEK_GBCD", this.dsNapbu.getColumn(i, "GEUMAEK_GBCD"));
        					this.dsHwanbul.setColumn(nRow, "NAPBU_GEUMAEK", this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK"));
        					this.dsHwanbul.setColumn(nRow, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        					this.dsHwanbul.setColumn(nRow, "HWANBUL_GEUMAEK", this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK"));
        					this.dsHwanbul.setColumn(nRow, "HWANBUL_GIJUN_GBCD", "1");
        					chk++;
        				}
        			}
        		}
        		if(chk != 0)
        		{
        			var nRow1 = this.dsHwanbulList.addRow();
        			this.dsHwanbulList.setColumn(nRow1, "DEUNGROK_YYYY", this.dsNapbu.getColumn(0, "DEUNGROK_YYYY"));
        			this.dsHwanbulList.setColumn(nRow1, "GONGJI_GBCD", this.dsNapbu.getColumn(0, "GONGJI_GBCD"));
        			this.dsHwanbulList.setColumn(nRow1, "SUHEOM_NO", this.dsNapbu.getColumn(0, "SUHEOM_NO"));
        			this.dsHwanbulList.setColumn(nRow1, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			this.dsHwanbulList.setColumn(nRow1, "HWANBUL_SAYU_GBCD", "");

        			//환불 사유 콤보 활성화
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(true);
        			this.divHwanbul.form.cboHwanbulSayu.set_index(0);
        		}
        		else
        		{
        			this.alert("환불할 금액이 없습니다. 다시 확인해주세요.");
        			return false;
        		}
        	}
        	else
        	{
        		this.alert("환불한 내역이 있을 경우 환불 금액 산정을 할 수 없습니다.");
        		return false;
        	}
        };

        // 이중납부 등록
        this.fn_Napbu = function()
        {
        	var curRow = this.dsDaesangja.rowposition;
        	if(this.dsDaesangja.getColumn(curRow, "NAPBU_STCD") != '1')
        	{
        		this.alert("납부한 대상자만 이중납부 등록을 하실 수 있습니다.");
        		return false;
        	};

        	var row = this.dsDaesangja.insertRow(curRow+1);
        	this.dsDaesangja.copyRow(row, this.dsDaesangja, curRow);
        	this.dsDaesangja.setColumn(row, "BANK_GBCD", "");

        	this.fn_DRet();
        };

        // 입학포기
        this.fn_Iphakpogi = function()
        {
        	if(this.geumaekChk != 2)
        	{
        		return false;
        	}
        	var strSvc      = "Iphakpogi";
            var strUrl      = "/prj/UR/UR02/Save_2050206_M_Iphakpogi.do";
            var strInDs     = "ds_dInput=ds_dInput";
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
        }

        /**********************************************************************
                16. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdDaesangja_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdDaesangja.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdDaesangja_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdDaesangja.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };
        this.grdNapbu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdJanghak_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdHwanbul_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 등록대상자 목록 로우 변경전
        this.dsDaesangja_canrowposchange = function(obj,e)
        {
        	if(this.fn_beforedetailclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        // 등록대상자 목록 로우 변경시 조회
        this.dsDaesangja_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();

        	if(obj.getColumn(obj.rowposition, "NAPBU_STCD") == '1' && obj.getRowType(obj.rowposition) != Dataset.ROWTYPE_INSERT)
        	{
        		this.fn_HwanbulEnable();
        	}
        	else
        	{
        		if(this.dsHwanbul.rowcount != 0)
        		{
        			this.fn_HwanbulEnable();
        		}
        		else
        		{
        			this.fn_HwanbulDisable();
        		}
        	}
        	this.btnNapbu.set_visible(true);
        	this.btnDel2.set_visible(true);
        	this.btnSave2.set_visible(true);

        	if(obj.getColumn(obj.rowposition, "DEUNGROK_STCD") == '4' && obj.getRowType(obj.rowposition) != Dataset.ROWTYPE_INSERT)
        	{
        		this.btnNapbu.set_visible(false);
        		this.btnDel2.set_visible(false);
        		this.btnSave2.set_visible(false);
        		this.fn_HwanbulDisable();
        	}
        };

        // 환불내역 로우 변경시
        this.dsHwanbul_onrowposchanged = function(obj,e)
        {
        	if(this.dsHwanbulList.getRowType(0) == Dataset.ROWTYPE_INSERT)
        	{
        		if(obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        		{
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(true);
        			this.divHwanbul.form.cboIphakPogiSayu.set_enable(false);
        			this.divHwanbul.form.edtHwanbulBank.set_enable(true);
        			this.divHwanbul.form.edtHwanbulGyejwa.set_enable(true);
        			this.divHwanbul.form.edtYegeumju.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(true);
        			this.divHwanbul.form.edtGitaSayu.set_enable(false);
        			this.divHwanbul.form.cboHwanbulSayu.set_index(0);
        		}
        	}
        	else
        	{
        		if(obj.rowcount != 0)
        		{
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(false);
        			this.divHwanbul.form.cboIphakPogiSayu.set_enable(false);
        			this.divHwanbul.form.edtHwanbulBank.set_enable(true);
        			this.divHwanbul.form.edtHwanbulGyejwa.set_enable(true);
        			this.divHwanbul.form.edtYegeumju.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(false);
        			this.divHwanbul.form.edtGitaSayu.set_enable(false);
        		}
        		if(this.dsHwanbulList.getColumn(this.dsHwanbulList.rowposition, "HWANBUL_SAYU_GBCD") == '99')
        		{
        			this.divHwanbul.form.edtGitaSayu.set_enable(true);
        		}
        		else
        		{
        			this.divHwanbul.form.edtGitaSayu.set_enable(false);
        		}
        	}
        };

        // 환불사유 변경시
        this.divHwanbul_cboHwanbulSayu_onitemchanged = function(obj,e)
        {
        	// 기타
        	if(obj.value == '99')
        	{
        		this.divHwanbul.form.edtGitaSayu.set_enable(true);
        		this.divHwanbul.form.cboIphakPogiSayu.set_enable(false);
        		this.divHwanbul.form.cboIphakPogiSayu.set_index(0);
        	}
        	// 입학포기
        	else if (obj.value == '1')
        	{
        		this.divHwanbul.form.cboIphakPogiSayu.set_enable(true);
        		this.divHwanbul.form.edtGitaSayu.set_enable(false);
        		this.divHwanbul.form.edtGitaSayu.set_value('');
        	}
        	else
        	{
        		this.divHwanbul.form.edtGitaSayu.set_enable(false);
        		this.divHwanbul.form.cboIphakPogiSayu.set_enable(false);
        		this.divHwanbul.form.cboIphakPogiSayu.set_index(0);
        		this.divHwanbul.form.edtGitaSayu.set_value('');
        	}
        };

        // 입학포기사유 변경시
        this.divHwanbul_cboIphakPogiSayu_onitemchanged = function(obj,e)
        {
        	if(obj.value == '99')
        	{
        		this.divHwanbul.form.edtGitaSayu.set_enable(true);
        	}
        	else
        	{
        		this.divHwanbul.form.edtGitaSayu.set_enable(false);
        	}
        };

        // 납부내역 변경시
        this.dsNapbu_onvaluechanged = function(obj,e)
        {
        	if(obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		if(this.gfn_isNull(obj.getColumn(obj.rowposition, "NAPBU_DT")))
        		{
        			obj.setColumn(obj.rowposition, "NAPBU_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		}
        	}
        };

        // 환불날짜 변경시 그리드에도 적용
        this.divHwanbul_calHwanbulDt_onchanged = function(obj,e)
        {
        	for(var i=0; i<this.dsHwanbul.rowcount; i++)
        	{
        		if(this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			this.dsHwanbul.setColumn(i,'HWANBUL_DT', obj.value);
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsDaesangja))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsNapbu))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbul))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbulList))
        	{
        		value = true;
        	}

        	return value;
        };

        this.fn_beforedetailclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsNapbu))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbul))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbulList))
        	{
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                17. 검색창 엔터키 조회
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

        this.divSearch_cboSearchNapbuSt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchDeungrokSt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_STCD",obj.value);
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
            this.grdDaesangja.addEventHandler("onheadclick",this.grdDaesangja_onheadclick,this);
            this.grdDaesangja.addEventHandler("onheaddblclick",this.grdDaesangja_onheaddblclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchChasu.addEventHandler("onkeydown",this.divSearch_cboSearchChasu_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.edtSearchSuhoemNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.cboSearchNapbuSt.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.divSearch.form.cboSearchDeungrokSt.addEventHandler("onkeydown",this.divSearch_cboSearchDeungrokSt_onkeydown,this);
            this.btnSave1.addEventHandler("onclick",this.fn_DaesangjaSave,this);
            this.btnDel1.addEventHandler("onclick",this.fn_DaesangjaDel,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.grdJanghak.addEventHandler("onheaddblclick",this.grdJanghak_onheaddblclick,this);
            this.grdNapbu.addEventHandler("onheaddblclick",this.grdNapbu_onheaddblclick,this);
            this.btnNapbu.addEventHandler("onclick",this.fn_Napbu,this);
            this.btnSave2.addEventHandler("onclick",this.fn_NapbuSave,this);
            this.btnDel2.addEventHandler("onclick",this.fn_NapbuDel,this);
            this.btnSaengsung.addEventHandler("onclick",this.fn_Saengsung,this);
            this.divHwanbul.form.edtHwanbulBank.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divHwanbul.form.edtHwanbulGyejwa.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divHwanbul.form.cboIphakPogiSayu.addEventHandler("onitemchanged",this.divHwanbul_cboIphakPogiSayu_onitemchanged,this);
            this.divHwanbul.form.cboHwanbulSayu.addEventHandler("onitemchanged",this.divHwanbul_cboHwanbulSayu_onitemchanged,this);
            this.divHwanbul.form.edtYegeumju.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divHwanbul.form.edtGitaSayu.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divHwanbul.form.calHwanbulDt.addEventHandler("onchanged",this.divHwanbul_calHwanbulDt_onchanged,this);
            this.grdHwanbul.addEventHandler("onheaddblclick",this.grdHwanbul_onheaddblclick,this);
            this.btnSanjeong.addEventHandler("onclick",this.fn_Sanjeong,this);
            this.btnNew.addEventHandler("onclick",this.fn_HwanbulNew,this);
            this.btnDel3.addEventHandler("onclick",this.fn_HwanbulDel,this);
            this.btnSave3.addEventHandler("onclick",this.fn_HwanbulSave,this);
            this.dsDaesangja.addEventHandler("onrowposchanged",this.dsDaesangja_onrowposchanged,this);
            this.dsDaesangja.addEventHandler("canrowposchange",this.dsDaesangja_canrowposchange,this);
            this.dsJanghak.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNapbu.addEventHandler("onvaluechanged",this.dsNapbu_onvaluechanged,this);
            this.dsHwanbul.addEventHandler("onrowposchanged",this.dsHwanbul_onrowposchanged,this);
            this.dsHwanbulList.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UR02_2050206_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
