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
            this.set_titletext("등록대상자조회(신입생)");
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
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"IJUNG_NAPBU_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"YECHIGEUM_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHAEKJEONG_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHAEKJEONG_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_HAKSAENGWEI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_GISUEONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_SUHYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HWANBUL_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SAYU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANGJU_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"KOOKMIN_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsBank", this);
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


            obj = new Dataset("dsPrintBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","89",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","137","88",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","114",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"모집구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"차수\"/><Cell col=\"3\" rowspan=\"2\" text=\"수험번호\"/><Cell col=\"4\" rowspan=\"2\" text=\"성명\"/><Cell col=\"5\" rowspan=\"2\" text=\"주민번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"학과\"/><Cell col=\"7\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"8\" colspan=\"3\" text=\"책정금액\"/><Cell col=\"11\" colspan=\"3\" text=\"장학혜택\"/><Cell col=\"14\" colspan=\"3\" text=\"기타금액\"/><Cell col=\"17\" rowspan=\"2\" text=\"납부일자\"/><Cell col=\"18\" colspan=\"2\" text=\"실수납액\"/><Cell col=\"20\" rowspan=\"2\" text=\"납부은행\"/><Cell col=\"21\" rowspan=\"2\" text=\"광주은행 가상계좌번호\"/><Cell col=\"22\" rowspan=\"2\" text=\"국민은행 가상계좌번호\"/><Cell col=\"23\" rowspan=\"2\" text=\"납부상태\"/><Cell col=\"24\" rowspan=\"2\" text=\"등록상태\"/><Cell col=\"25\" rowspan=\"2\" text=\"이중납부여부\"/><Cell col=\"26\" rowspan=\"2\" text=\"환불여부\"/><Cell col=\"27\" rowspan=\"2\" text=\"환불사유\"/><Cell row=\"1\" col=\"8\" text=\"입학금\"/><Cell row=\"1\" col=\"9\" text=\"수업료\"/><Cell row=\"1\" col=\"10\" text=\"등록금액\"/><Cell row=\"1\" col=\"11\" text=\"입학금\"/><Cell row=\"1\" col=\"12\" text=\"수업료\"/><Cell row=\"1\" col=\"13\" text=\"혜택액\"/><Cell row=\"1\" col=\"14\" text=\"학생회비\"/><Cell row=\"1\" col=\"15\" text=\"기성회비\"/><Cell row=\"1\" col=\"16\" text=\"수혜경비\"/><Cell row=\"1\" col=\"18\" text=\"납부금액\"/><Cell row=\"1\" col=\"19\" text=\"예치금\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:MOJIP_GBNM\" combodataset=\"ds_모집구분\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:DEUNGROK_CHASU_GBNM\" combodataset=\"ds_차수_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"3\" text=\"bind:SUHEOM_NO\"/><Cell col=\"4\" text=\"bind:SUHEOMSAENG_NM\" combodataset=\"ds_차수_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"5\" text=\"bind:RES_NO\"/><Cell col=\"6\" text=\"bind:HAKGWA_NM\" combodataset=\"ds_학과_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\" combodataset=\"ds_주야_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"8\" text=\"bind:CHAEKJEONG_IPHAKGUEM\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CHAEKJEONG_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:CHAEKJEONG_IPHAKGUEM + CHAEKJEONG_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:JANGHAK_IPHAKGUEM\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:JANGHAK_IPHAKGUEM + JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:GITA_HAKSAENGWEI\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:GITA_GISUEONG\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:GITA_SUHYE\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:NAPBU_DT\" displaytype=\"expr:NAPBU_DT != &apos;&apos; ? &apos;date&apos; : &apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"18\" text=\"bind:NAPBU_GEUMAEK\"/><Cell col=\"19\" text=\"bind:YECHIGEUM_GEUMAEK\"/><Cell col=\"20\" text=\"bind:BANK_GBNM\" combodataset=\"ds_납부은행_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"21\" text=\"bind:GWANGJU_GYEJWA\"/><Cell col=\"22\" text=\"bind:KOOKMIN_GYEJWA\"/><Cell col=\"23\" text=\"bind:NAPBU_STNM\" combodataset=\"ds_납부상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"24\" text=\"bind:DEUNGROK_STNM\" combodataset=\"ds_등록상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"25\" text=\"bind:IJUNG_NAPBU_YN_NM\" combodataset=\"ds_이중납부여부_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"26\" text=\"bind:HWANBUL_YN_NM\" combodataset=\"ds_환불여부_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"27\" text=\"bind:HWANBUL_SAYU_GBNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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
            obj.set_taborder("14");
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
            obj.set_taborder("15");
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
            obj.set_taborder("16");
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
            obj.set_taborder("17");
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
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","339","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","237","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
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
            obj.set_taborder("23");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","474","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
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

            obj = new Static("Static07_00","238","37","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchNapbuToDt","272","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","473","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","553","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00","422","30","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","474","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
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
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","710","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00","1182","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
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
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","946","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_00_00","1397","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","923","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1025","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
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
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1159","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul","1364","37","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","1215","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
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
            obj.set_taborder("40");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1476","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","710","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
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

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00_01","1308","30","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","64","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01_00","946","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("등록상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDeungrokSt","1035","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnGosiseoPrint","1550","81","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("고지서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBank","1422","84","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsPrintBank");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록대상자조회(신입생)");
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

            obj = new BindItem("item3","divSearch.form.calSearchNapbuFrDt","value","ds_input","DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calSearchNapbuToDt","value","ds_input","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchBank","value","ds_input","BANK_GBCD");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UR02_2050205_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050205_M.xfdl(등록 대상자 관리(신입) 관리(조회))
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
            var strDs    = "dsChasu|dsJuya|dsBank|dsPrintBank|dsNapbuSt|dsDeungrok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "03006|00003|03007|03007|03008|03009";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|X|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.dsPrintBank.filter("REF_1 == '1'");
        	this.cboBank.set_index(0);
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
        			case "Mojip":
                            this.fn_PostMojip();
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

        	// 등록시작일자가 널값이 아니고 등록종료일자는 널값일때
        	if(!this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	// 등록시작일자와 등록종료일자가 널값이 아닐때
        	else if(!this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		// 등록시작일자가 등록종료일자보다 최근날짜일때
        		if(this.ds_input.getColumn(0, "DEUNGROK_FRDT") > this.ds_input.getColumn(0, "DEUNGROK_TODT"))
        		{
        			this.alert("등록기간을 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	// 등록시작일자가 널값이고 등록종료일자는 널값이 아닐때
        	else if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		this.alert("등록기간을 확인해주세요.");
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
            var strUrl      = "/prj/UR/UR02/Retrieve_2050205_M.do";
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
                06. 고지서출력
        ***********************************************************************/
        this.btnGosiseoPrint_onclick = function(obj,e)
        {
        	var DEUNGROK_YYYY       = this.ds_input.getColumn(0, "DEUNGROK_YYYY");
        	var MOJIP_GBCD          = this.ds_input.getColumn(0, "MOJIP_GBCD");
        	var DEUNGROK_CHASU_GBCD = this.ds_input.getColumn(0, "DEUNGROK_CHASU_GBCD");
        	var HAKGWA_CD           = this.ds_input.getColumn(0, "HAKGWA_CD");
        	var JUYA_GBCD           = this.ds_input.getColumn(0, "JUYA_GBCD");
        	var BANK_GBCD           = this.cboBank.value;
        	var NAPBU_STCD          = this.ds_input.getColumn(0, "NAPBU_STCD");
        	var SUHEOMSAENG_NM      = this.ds_input.getColumn(0, "SUHEOMSAENG_NM");
        	var SUHEOM_NO           = this.ds_input.getColumn(0, "SUHEOM_NO");
        	var INSERT_ID           = objApp.gds_userInfoDb.getColumn(0,"USER_ID")
        	var INSERT_PG			= objApp.gv_cutPrgId;

        	if(this.gfn_isNull(MOJIP_GBCD))
        	{
        		MOJIP_GBCD = '6';
        	}

        	if(this.gfn_isNull(DEUNGROK_YYYY))
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
        				, NAPBU_STCD			: NAPBU_STCD
        				, SUHEOMSAENG_NM		: SUHEOMSAENG_NM
        				, SUHEOM_NO				: SUHEOM_NO
        				, INSERT_ID				: INSERT_ID
        				, INSERT_PG				: INSERT_PG
        				};

        	if(MOJIP_GBCD == '9')
        	{
        		this.gfn_commonUtils_report('UR02/UR02_2050205_M_02.crf',  param);
        	}
        	else
        	{
        		this.gfn_commonUtils_report('UR02/UR02_2050205_M_01.crf',  param);
        	}
        };

        /**********************************************************************
                07. 각종함수
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchChasu.addEventHandler("onkeydown",this.divSearch_cboSearchChasu_onkeydown,this);
            this.divSearch.form.calSearchNapbuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchNapbuFrDt_onkeydown,this);
            this.divSearch.form.calSearchNapbuToDt.addEventHandler("onkeydown",this.divSearch_calSearchNapbuToDt_onkeydown,this);
            this.divSearch.form.cboSearchBank.addEventHandler("onkeydown",this.divSearch_cboSearchBank_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.edtSearchSuhoemNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.cboSearchNapbuSt.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.divSearch.form.cboSearchDeungrokSt.addEventHandler("onkeydown",this.divSearch_cboSearchDeungrokSt_onkeydown,this);
            this.btnGosiseoPrint.addEventHandler("onclick",this.btnGosiseoPrint_onclick,this);
            this.cboBank.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UR02_2050205_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
