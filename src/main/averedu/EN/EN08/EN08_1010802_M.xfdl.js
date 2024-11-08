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
            this.set_titletext("충원합격자대장");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_CHASU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"3\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO1\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"KOOKMIN_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"POGI_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POGI_SAYU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YNNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sebujeonhyeong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbul", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","69","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","79",null,"22","1475",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("충원합격자 대장 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","177","78",null,"24","1340",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96","320","8",null,null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
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
            obj.set_taborder("12");
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
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","584","9","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_codecolumn("IPSI_DEPT_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","762","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","493","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("지원학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","248","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","341","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
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

            obj = new Static("Static01_02_00_00_00","90","0","10","57",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","-1","56","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","574","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","767","-1","56","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","874","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","884","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","1008","-1","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1003","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","1115","0","10","63",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeonhyeong","1125","9","133","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("JEONHYEONG_GBCD");
            obj.set_datacolumn("JEONHYEONG_NM");
            obj.set_innerdataset("ds_jeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","1257","-1","56","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","1278","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("세부전형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00","1388","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSebu","1398","9","213","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("SEBUJEONHYEONG_GBCD");
            obj.set_datacolumn("SEBUJEONHYEONG_NM");
            obj.set_innerdataset("ds_sebujeonhyeong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00","762","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("등록구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDeungrok","884","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDeungrok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_03_00_00","1002","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("환불여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHwanbul","1124","36","133","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHwanbul");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00",null,"0","27","67","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","7","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("납부구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNapbu","100","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNapbu");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","493","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","584","36","183","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","248","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","341","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"주야\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"생년월일\"/><Cell col=\"6\" text=\"성별\"/><Cell col=\"7\" text=\"수험번호\"/><Cell col=\"8\" text=\"전형\"/><Cell col=\"9\" text=\"세부전형\"/><Cell col=\"10\" text=\"순위\"/><Cell col=\"11\" text=\"휴대폰\"/><Cell col=\"12\" text=\"자택 연락처\"/><Cell col=\"13\" text=\"추가연락처\"/><Cell col=\"14\" text=\"출신고\"/><Cell col=\"15\" text=\"등록상태\"/><Cell col=\"16\" text=\"환불상태\"/><Cell col=\"17\" text=\"등록은행\"/><Cell col=\"18\" edittype=\"combo\" text=\"등록일자\"/><Cell col=\"19\" text=\"포기일자\"/><Cell col=\"20\" text=\"가상계좌(국민)\"/><Cell col=\"21\" text=\"포기사유(상담내용)\"/><Cell col=\"22\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"expr:currow +1\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:MOJIP_GBCD\" editlimit=\"1\" displaytype=\"combotext\" combodataset=\"ds_mojipGbcd\" combocodecol=\"MOJIP_GBCD\" combodatacol=\"MOJIP_NM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:HAKGWA_NM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:JUYA_GBNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"4\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:SUHEOMSAENG_NM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:GENDER_NM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"7\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:SUHEOM_NO\" maskchar=\"_\" editlimit=\"4\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"8\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:JEONHYEONG_GBNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:SEBUJEONHYEONG_GBNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"10\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:YEBIHAPGYEOKHUBO_SEOKCHA\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"11\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:HP_NO\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"12\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:TEL_NO\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"13\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:CHUGA_YEONRAKCHEO\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"14\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:GOGYO_NM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"15\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);color:EXPR(((((div_Search.InsertGbn2.value == &apos;01&apos;)?I_DUNGROK_SU_YN:I_DUNGROK_YN)==&quot;등록포기&quot;)?&quot;red&quot;:&quot;&quot;));color2:EXPR(((((div_Search.InsertGbn2.value == &apos;01&apos;)?I_DUNGROK_SU_YN:I_DUNGROK_YN)==&quot;등록포기&quot;)?&quot;red&quot;:&quot;&quot;));\" text=\"bind:DEUNGROK_STNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:HWANBUL_YNNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"17\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:BANK_GBNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"18\" displaytype=\"expr:NAPBU_DT != &apos;&apos; ? &apos;date&apos; : &apos;none&apos;\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:NAPBU_DT\" calendardisplaynulltype=\"default\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"19\" displaytype=\"expr:POGI_DT != &apos;&apos; ? &apos;date&apos; : &apos;none&apos;\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:POGI_DT\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"20\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:KOOKMIN_GYEJWA\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"21\" text=\"bind:POGI_SAYU_GBNM\" cssclass=\"expr:HAPGYEOK_GBCD == &quot;02&quot; ? &quot;Expr_Case_yellow&quot; : &quot;&quot;\"/><Cell col=\"22\" text=\"bind:I_HAPGYUK_GBN\"/></Band></Format><Format id=\"rgst2\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"주야\"/><Cell col=\"4\" text=\"지원전공\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"수험번호\"/><Cell col=\"7\" text=\"생년월일\"/><Cell col=\"8\" text=\"전형\"/><Cell col=\"9\" text=\"순위\"/><Cell col=\"10\" text=\"휴대전화\"/><Cell col=\"11\" text=\"전화1\"/><Cell col=\"12\" text=\"전화2\"/><Cell col=\"13\" text=\"출신고\"/><Cell col=\"14\" text=\"등록구분\"/><Cell col=\"15\" text=\"등록은행\"/><Cell col=\"16\" edittype=\"combo\" text=\"등록일자\"/><Cell col=\"17\" text=\"포기일자\"/><Cell col=\"18\" text=\"가상계좌(국민)\"/><Cell col=\"19\" text=\"상담내용\"/><Cell col=\"20\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"expr:currow +1\"/><Cell col=\"1\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_SJ_GBN\" editlimit=\"1\"/><Cell col=\"2\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_ILHAK\"/><Cell col=\"3\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_JUYA\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_JUNG0\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_NAME\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_NO\" maskchar=\"_\" editlimit=\"4\"/><Cell col=\"7\" displaytype=\"normal\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_JUMIN1\"/><Cell col=\"8\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_JGBN\"/><Cell col=\"9\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_HUBO_SEQ\"/><Cell col=\"10\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:PHONE1\"/><Cell col=\"11\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:PHONE2\"/><Cell col=\"12\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:PHONE3\"/><Cell col=\"13\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_HCODE\"/><Cell col=\"14\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);color:EXPR(((((div_Search.InsertGbn2.value == &apos;01&apos;)?I_DUNGROK_SU_YN:I_DUNGROK_YN)==&quot;등록포기&quot;)?&quot;red&quot;:&quot;&quot;));color2:EXPR(((((div_Search.InsertGbn2.value == &apos;01&apos;)?I_DUNGROK_SU_YN:I_DUNGROK_YN)==&quot;등록포기&quot;)?&quot;red&quot;:&quot;&quot;));\" text=\"bind:I_DUNGROK_YN\"/><Cell col=\"15\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_BANK_GBN\"/><Cell col=\"16\" displaytype=\"date\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_DUNGROK_ILJA\" calendardisplaynulltype=\"default\"/><Cell col=\"17\" displaytype=\"date\" edittype=\"none\" style=\"align:center middle;background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:I_CANCEL_ILJA\"/><Cell col=\"18\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\" text=\"bind:ACNT_NUMB2\"/><Cell col=\"19\" style=\"background:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);background2:EXPR((I_HAPGYUK_GBN==&apos;10&apos;)? &apos;&apos;:&apos;yellow &apos;);\"/><Cell col=\"20\" text=\"bind:I_HAPGYUK_GBN\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"19\" style=\"align:left middle;\" expr=\"ds_documentprint01.getRowCount() +&apos;건이 조회되었습니다&apos;\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("충원합격자대장");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJeonhyeong","value","ds_input","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchSebu","value","ds_input","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchDeungrok","value","ds_input","DEUNGROK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboSearchHwanbul","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchNapbu","value","ds_input","NAPBU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN08_1010802_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN08_1010802_M.xfdl(충원합격자대장)
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
            var strDs    = "dsNapbu|dsDeungrok|dsHwanbul";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01057|03009|00051";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostInit = function()
        {
        	for(var i=0; i<this.dsDeungrok.rowcount; i++)
        	{
        		if(this.dsDeungrok.getColumn(i, "CODE") == "9")
        		{
        			this.dsDeungrok.deleteRow(i);
        		}
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
        			case "MojipGb":
                            this.fn_PostMojipGb();
                        break;
        			case "Hakgwa":
                            this.fn_PostHakgwa();
                        break;
        			case "Juya":
                            this.fn_PostJuya();
                        break;
        			case "Jeonhyeong":
                            this.fn_PostJeonhyeong();
                        break;
        			case "SebuJeonhyeong":
                            this.fn_PostSebuJeonhyeong();
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
            var strUrl      = "/prj/EN/EN08/Retrieve_1010802_M.do";
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
        	var HAKGWA_CD 				= this.ds_input.getColumn(0, "HAKGWA_CD");
        	var SUHEOMSAENG_NM 			= this.ds_input.getColumn(0, "SUHEOMSAENG_NM");
        	var SUHEOM_NO 				= this.ds_input.getColumn(0, "SUHEOM_NO");
        	var JUYA_GBCD 				= this.ds_input.getColumn(0, "JUYA_GBCD");
        	var JEONHYEONG_GBCD 		= this.ds_input.getColumn(0, "JEONHYEONG_GBCD");
        	var SEBUJEONHYEONG_GBCD 	= this.ds_input.getColumn(0, "SEBUJEONHYEONG_GBCD");
        	var DEUNGROK_GBCD 			= this.ds_input.getColumn(0, "DEUNGROK_GBCD");
        	var NAPBU_GBCD 				= this.ds_input.getColumn(0, "NAPBU_GBCD");
        	//var INSERT_ID 			= objApp.gds_userInfoDb.getColumn(0,"USER_ID");
        	var INSERT_ID 				= '2031';
        	var INSERT_PG				= 'H020108002';

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        // 	for(var i=0; i<objApp.gds_Menu.rowcount; i ++)
        // 	{
        // 		if(objApp.gds_Menu.getColumn(i, "FORM_ID") == 'EN08_1010801_M.xfdl')
        // 		{
        // 			INSERT_PG = objApp.gds_Menu.getColumn(i, "MENU_ID");
        // 		}
        // 	}

        	var param =   { IPSI_YYYY:IPSI_YYYY
        				  , MOJIP_GBCD:MOJIP_GBCD
        				  , HAKGWA_CD:HAKGWA_CD
        				  , SUHEOMSAENG_NM:SUHEOMSAENG_NM
        				  , SUHEOM_NO:SUHEOM_NO
        				  , JUYA_GBCD:JUYA_GBCD
        				  , JEONHYEONG_GBCD:JEONHYEONG_GBCD
        				  , SEBUJEONHYEONG_GBCD:SEBUJEONHYEONG_GBCD
        				  , DEUNGROK_GBCD:DEUNGROK_GBCD
        				  , NAPBU_GBCD:NAPBU_GBCD
        				  , INSERT_ID:INSERT_ID
        				  , INSERT_PG:INSERT_PG
        				  }

        	this.gfn_commonUtils_report('EN08/EN08_1010802_M_01.crf',  param);
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
        	this.divSearch.form.cboSearchNapbu.set_index(1);
        	this.fn_MojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_MojipGb = function()
        {
        	this.ds_mojipGbcd.deleteAll();
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

            var strSvc      = "MojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_IPSI_MOJIPGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_mojipGbcd=ds_mojipGbcd";
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

        this.fn_PostMojipGb = function()
        {
        	this.ds_mojipGbcd.insertRow(0);
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_GBCD", "");
        	this.ds_mojipGbcd.setColumn(0, "MOJIP_NM", "전체");
        	this.divSearch.form.cboSearchMojip.set_index(0);

        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "IPSI_DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "HAKGWA_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시학과 가져오기
        this.fn_Hakgwa = function()
        {
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Hakgwa";
            var strUrl      = "prj/EN/EN_COM/Retrieve_HAKGWA_CD_FOR_JEONGONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_hakgwaCd=ds_hakgwaCd";
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

        this.fn_PostHakgwa = function()
        {
        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "IPSI_DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "HAKGWA_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시주야 가져오기
        this.fn_Juya = function()
        {
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Juya";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JUYAGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_juyaGbcd=ds_juyaGbcd";
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

        this.fn_PostJuya = function()
        {
        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시전형 가져오기
        this.fn_Jeonhyeong = function()
        {
        	this.ds_jeonhyeong.deleteAll();
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "Jeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_jeonhyeong=ds_jeonhyeong";
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

        this.fn_PostJeonhyeong = function()
        {
        	this.ds_jeonhyeong.insertRow(0);
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_GBCD", "");
        	this.ds_jeonhyeong.setColumn(0, "JEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchJeonhyeong.set_index(0);

        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
        }

        // 입시세부전형 가져오기
        this.fn_SebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.deleteAll();

        	var strSvc      = "SebuJeonhyeong";
            var strUrl      = "prj/EN/EN_COM/Retrieve_SEBUJEONHYEONG.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sebujeonhyeong=ds_sebujeonhyeong";
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

        this.fn_PostSebuJeonhyeong = function()
        {
        	this.ds_sebujeonhyeong.insertRow(0);
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_GBCD", "");
        	this.ds_sebujeonhyeong.setColumn(0, "SEBUJEONHYEONG_NM", "전체");
        	this.divSearch.form.cboSearchSebu.set_index(0);
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

        this.divSearch_cboSearchJeonhyeong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchSebu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEBUJEONHYEONG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchNapbu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchSuheomNo_onkeydown = function(obj,e)
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

        this.divSearch_cboSearchDeungrok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHwanbul_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HWANBUL_YN",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_Juya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_Hakgwa,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_Jeonhyeong,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onitemchanged",this.fn_SebuJeonhyeong,this);
            this.divSearch.form.cboSearchJeonhyeong.addEventHandler("onkeydown",this.divSearch_cboSearchJeonhyeong_onkeydown,this);
            this.divSearch.form.cboSearchSebu.addEventHandler("onkeydown",this.divSearch_cboSearchSebu_onkeydown,this);
            this.divSearch.form.cboSearchDeungrok.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.divSearch.form.cboSearchHwanbul.addEventHandler("onkeydown",this.divSearch_cboSearchHwanbul_onkeydown,this);
            this.divSearch.form.cboSearchNapbu.addEventHandler("onkeydown",this.divSearch_cboSearchNapbu_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN08_1010802_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
