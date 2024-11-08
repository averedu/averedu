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
            this.set_titletext("예치금대상자조회");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YECHIGEUM_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GWANGJU_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"KOOKMIN_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsDeungrok", this);
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
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","106",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("예치금대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","105",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","131",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"154\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"입시년도\"/><Cell col=\"1\" text=\"모집구분\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"수험번호\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"주민번호\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"주야구분\"/><Cell col=\"8\" text=\"예치금\"/><Cell col=\"9\" text=\"납부금액\"/><Cell col=\"10\" text=\"납부상태\"/><Cell col=\"11\" text=\"납부일자\"/><Cell col=\"12\" text=\"납부은행\"/><Cell col=\"13\" text=\"광주은행 계좌\"/><Cell col=\"14\" text=\"국민은행 계좌\"/><Cell col=\"15\" text=\"등록상태\"/><Cell col=\"16\" text=\"환불여부\"/></Band><Band id=\"body\"><Cell text=\"bind:DEUNGROK_YYYY\" suppressalign=\"first\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:MOJIP_GBNM\" combodataset=\"ds_모집구분\" combocodecol=\"cd\" combodatacol=\"cdNm\" suppressalign=\"first\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:DEUNGROK_CHASU_GBNM\" combodataset=\"ds_차수\" combocodecol=\"cd\" combodatacol=\"cdNm\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:SUHEOM_NO\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:SUHEOMSAENG_NM\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:RES_NO\"/><Cell col=\"6\" text=\"bind:HAKGWA_NM\" combodataset=\"ds_학과_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\" combodataset=\"ds_주야구분_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:YECHIGEUM_GEUMAEK\" displaytype=\"number\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"number\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"10\" text=\"bind:NAPBU_STNM\" combodataset=\"ds_납부여부_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"11\" text=\"bind:NAPBU_DT\" calendardateformat=\"yyyy-MM-dd \" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\" displaytype=\"expr:NAPBU_DT != null ? &apos;date&apos; : &apos;none&apos;\"/><Cell col=\"12\" text=\"bind:BANK_GBNM\" combodataset=\"ds_납부은행_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"13\" text=\"bind:GWANGJU_GYEJWA\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"14\" text=\"bind:KOOKMIN_GYEJWA\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"15\" text=\"bind:DEUNGROK_STNM\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:HWANBUL_YN\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" cssclass=\"expr:IJUNG_NAPBU_YN == &quot;1&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","96","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","123",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"96","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00","20","85","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00","17","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","110","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","283","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","372","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","94",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","100","0","10","94",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","362","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","260","0","56","34",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00_01","17","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("납부기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00","26","58","1600","5",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00_00_00","497","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchChasu","586","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsChasu");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchNapbuFrDt","110","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchHwanbulFrDt","110","63","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","261","37","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchNapbuToDt","295","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","496","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00_00","261","64","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchHwanbulToDt","295","63","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","576","0","10","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00","445","30","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","497","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("납부은행");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBank","586","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBank");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","816","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","737","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","737","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","826","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00","710","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","977","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00_00","977","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","950","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1056","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1066","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00_00","1217","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1296","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDeungrok","1306","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1190","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul","28","63","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","1204","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("이중납부여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuhoemNo","826","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1066","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("예치금대상자조회");
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

            obj = new BindItem("item3","divSearch.form.calSearchNapbuFrDt","value","ds_input","NAPBU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.calSearchHwanbulFrDt","value","ds_input","HWANBUL_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calSearchNapbuToDt","value","ds_input","NAPBU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.calSearchHwanbulToDt","value","ds_input","HWANBUL_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchBank","value","ds_input","BANK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchDeungrok","value","ds_input","DEUNGROK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.edtSearchSuhoemNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.chkSearchNapbu","value","ds_input","IJUNG_NAPBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.chkSearchHwanbul","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UR02_2050203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050203_M.xfdl(예치금대상자조회)
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
            var strDs    = "dsMojip|dsChasu|dsJuya|dsDeungrok|dsBank|dsYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00005|03006|00003|03009|03007|00051";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        		case "tmp1" :        // 고지서 출력
                         this.fn_Print();
                    break;
        		case "tmp2" :        // 팁
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
            var strUrl      = "/prj/UR/UR02/Retrieve_2050203_M.do";
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
                06. 고지서 출력
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var DEUNGROK_YYYY       = this.ds_input.getColumn(0, "DEUNGROK_YYYY");
        	var MOJIP_GBCD          = this.ds_input.getColumn(0, "MOJIP_GBCD");
        	var DEUNGROK_CHASU_GBCD = this.ds_input.getColumn(0, "DEUNGROK_CHASU_GBCD");
        	var HAKGWA_CD           = this.ds_input.getColumn(0, "HAKGWA_CD");
        	var JUYA_GBCD           = this.ds_input.getColumn(0, "JUYA_GBCD");
        	var BANK_GBCD           = this.ds_input.getColumn(0, "BANK_GBCD");
        	var SUHEOMSAENG_NM      = this.ds_input.getColumn(0, "SUHEOMSAENG_NM");
        	var SUHEOM_NO           = this.ds_input.getColumn(0, "SUHEOM_NO");
        	var INSERT_ID           = objApp.gds_userInfoDb.getColumn(0, "USER_ID");
        	var INSERT_PG			= objApp.gv_cutPrgId;

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var param = { DEUNGROK_YYYY			: DEUNGROK_YYYY
        				, MOJIP_GBCD			: MOJIP_GBCD
        				, DEUNGROK_CHASU_GBCD	: DEUNGROK_CHASU_GBCD
        				, HAKGWA_CD				: HAKGWA_CD
        				, JUYA_GBCD				: JUYA_GBCD
        				, BANK_GBCD				: BANK_GBCD
        				, SUHEOMSAENG_NM		: SUHEOMSAENG_NM
        				, SUHEOM_NO				: SUHEOM_NO
        				, INSERT_ID				: INSERT_ID
        				, INSERT_PG				: INSERT_PG
        				};

        	this.gfn_commonUtils_report('UR02/UR02_2050203_M_01.crf',  param);
        };

        /**********************************************************************
                07. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
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

        /**********************************************************************
                09. 검색창 엔터키 조회
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

        this.divSearch_cboSearchDeungrok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_STCD",obj.value);
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

        this.divSearch_chkSearchNapbu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IJUNG_NAPBU_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_chkSearchHwanbul_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HWANBUL_YN",obj.value);
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
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
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
            this.divSearch.form.cboSearchDeungrok.addEventHandler("onkeydown",this.divSearch_cboSearchDeungrok_onkeydown,this);
            this.divSearch.form.chkSearchHwanbul.addEventHandler("onkeydown",this.divSearch_chkSearchHwanbul_onkeydown,this);
            this.divSearch.form.chkSearchNapbu.addEventHandler("onkeydown",this.divSearch_chkSearchNapbu_onkeydown,this);
            this.divSearch.form.edtSearchSuhoemNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UR02_2050203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
