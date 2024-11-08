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
            this.set_titletext("입시사정대장");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAPGYEOK_GBCD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSIN_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM_HWANSAN_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_HWANSAN_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"SILGI_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"SILGI_HWANSAN_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_SILGI_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"CHONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHOECHOHAPGYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWABYEOL_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeokGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHapgyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","86","9","111","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","197","0","56","72",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","73",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","300","1","10","68",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","232","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","310","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","420","0","56","73",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00","457","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","531","1","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","541","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_SearchHakgwa");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","661","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00","697","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","775","9","91","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_SearchJuya");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_GBNM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","765","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00","902","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","866","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","945","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","955","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_SearchHaknyeon");
            obj.set_codecolumn("PYEONIP_HAKNYEON");
            obj.set_datacolumn("PYEONIP_HAKNYEON_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00","232","35","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSuheomNo","310","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00_00","488","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","541","36","119","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","76","0","10","72",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00_00_01","8","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("합격구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHapgyeok","86","36","111","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SearchHapgyeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","1040","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","31","1040","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00_00","0","58","640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","390","69","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","73","155","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("실기점수 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","117","72","123","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"모집구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"학과\"/><Cell col=\"3\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"4\" rowspan=\"2\" text=\"학년\"/><Cell col=\"5\" rowspan=\"2\" text=\"수험번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"성명\"/><Cell col=\"7\" rowspan=\"2\" text=\"성별\"/><Cell col=\"8\" rowspan=\"2\" text=\"휴대전화번호\"/><Cell col=\"9\" rowspan=\"2\" text=\"생년월일\"/><Cell col=\"10\" rowspan=\"2\" text=\"졸업일자\"/><Cell col=\"11\" rowspan=\"2\" text=\"출신대학\"/><Cell col=\"12\" rowspan=\"2\" text=\"출신대학학과\"/><Cell col=\"13\" colspan=\"3\" text=\"총점\"/><Cell col=\"16\" rowspan=\"2\" text=\"석차\"/><Cell col=\"17\" rowspan=\"2\" text=\"1순위\"/><Cell col=\"18\" rowspan=\"2\" text=\"2순위\"/><Cell col=\"19\" rowspan=\"2\" text=\"3순위\"/><Cell col=\"20\" rowspan=\"2\" text=\"합격판정\"/><Cell col=\"21\" rowspan=\"2\" text=\"비고\"/><Cell col=\"22\" rowspan=\"2\" text=\"확인\"/><Cell row=\"1\" col=\"13\" text=\"대학성적\"/><Cell row=\"1\" col=\"14\" text=\"면접/실기\"/><Cell row=\"1\" col=\"15\" text=\"계\"/></Band><Band id=\"body\"><Cell expr=\"expr:SUHEOM_NO != &apos;&apos; ? currow + 1 : &apos;none&apos;\"/><Cell col=\"1\" text=\"bind:PYEONIP_MOJIP_NM\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\"/><Cell col=\"3\" text=\"bind:JUYA_GBNM\"/><Cell col=\"4\" text=\"bind:PYEONIP_HAKNYEON\" displaytype=\"combotext\" combodataset=\"dsHaknyeon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:SUHEOM_NO\"/><Cell col=\"6\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"7\" text=\"bind:GENDER_NM\"/><Cell col=\"8\" text=\"bind:HP_NO\"/><Cell col=\"9\" text=\"bind:BIRTHDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:JEOPSU_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" text=\"bind:CHULSIN_DAEHAK_NM\"/><Cell col=\"12\" text=\"bind:CHULSIN_HAKGWA_NM\"/><Cell col=\"13\" text=\"bind:PYEONGJEOM_HWANSAN_JEOMSU\"/><Cell col=\"14\" text=\"bind:MYEONJEOP_SILGI_JEOMSU\"/><Cell col=\"15\" text=\"bind:CHONGJEOM\"/><Cell col=\"16\" text=\"bind:HAKGWABYEOL_SEOKCHA\"/><Cell col=\"17\" text=\"bind:PYEONGJEOM\"/><Cell col=\"18\" text=\"bind:MYEONJEOP_SILGI_JEOMSU\"/><Cell col=\"19\" text=\"bind:CHONGISU_HAKJEOM\"/><Cell col=\"20\" text=\"bind:HAPGYEOK_GBCD\" displaytype=\"combotext\" combodataset=\"dsHapgyeokGbcd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1","96","1630","8",null,null,null,null,null,null,this);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHaknyeon","value","ds_input","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchSuheomNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchNm","value","ds_input","SUHEOMSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchHapgyeok","value","ds_input","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET06_1020601_R.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET06_1020601_R.xfdl(입시사정대장)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/05/04
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입년도$편입모집구분";
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
            var strDs    = "dsHaknyeon|dsHapgyeokGbcd|ds_SearchHapgyeok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01041|01014|01014";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
        			case "SearchMojip":
                            this.fn_PostSearchMojip();
                        break;
        			case "SearchHakgwa":
                            this.fn_PostSearchHakgwa();
                        break;
        			case "SearchJuya":
                            this.fn_PostSearchJuya();
                        break;
        			case "SearchHaknyeon":
                            this.fn_PostSearchHaknyeon();
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_YYYY")))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD")))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.","입력정보","","warning");
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
            var strUrl      = "/prj/ET/ET06/Retrieve_1020601_R.do";
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
                06. 출력물 함수 선언
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var PYEONIP_YYYY 		= this.ds_input.getColumn(0, "PYEONIP_YYYY");
        	var PYEONIP_MOJIP_GBCD 	= this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD");
        	var JIWONHAKGWA_CD 		= this.ds_input.getColumn(0, "HAKGWA_CD");
        	var JUYA_GBCD 			= this.ds_input.getColumn(0, "JUYA_GBCD");
        	var PYEONIP_HAKNYEON 	= this.ds_input.getColumn(0, "PYEONIP_HAKNYEON");
        	var HAPGYEOK_GBCD 		= this.ds_input.getColumn(0, "HAPGYEOK_GBCD");
        	var SUHEOM_NO 			= this.ds_input.getColumn(0, "SUHEOM_NO");
        	var SUHEOMSAENG_NM 		= this.ds_input.getColumn(0, "SUHEOMSAENG_NM");

        	if(this.gfn_isNull(PYEONIP_YYYY))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.", "편입년도" ,"","information");
        		return;
        	}
        	if(this.gfn_isNull(PYEONIP_MOJIP_GBCD))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.", "모집구분" ,"","information");
        		return;
        	}

        	this.gfn_commonUtils_report('ET06/ET06_1020601_R_01.crf', {PYEONIP_YYYY:PYEONIP_YYYY
        															, PYEONIP_MOJIP_GBCD:PYEONIP_MOJIP_GBCD
        															, JIWONHAKGWA_CD:JIWONHAKGWA_CD
        															, JUYA_GBCD:JUYA_GBCD
        															, PYEONIP_HAKNYEON:PYEONIP_HAKNYEON
        															, SUHEOM_NO:SUHEOM_NO
        															, SUHEOMSAENG_NM:SUHEOMSAENG_NM
        															, HAPGYEOK_GBCD:HAPGYEOK_GBCD});
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
                09. 공통 함수
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
        	this.ds_input.setColumn(0,"PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_SearchMojip();
        }

        //모집구분 조회(검색조건)
        this.fn_SearchMojip = function()
        {
        	this.ds_SearchHakgwa.deleteAll();
        	this.ds_SearchJuya.deleteAll();
        	this.ds_SearchHaknyeon.deleteAll();

        	var strSvc      = "SearchMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchMojip=ds_pyeonipMojip";
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

        this.fn_PostSearchMojip = function()
        {
        	for(var i = 0; i < this.ds_SearchMojip.rowcount; i++)
        	{
                if(this.ds_SearchMojip.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD", this.ds_SearchMojip.getColumn(0, "PYEONIP_MOJIP_GBCD"));
        			this.ds_input.setColumn(0,"JEOPSU_FRDT", this.ds_SearchMojip.getColumn(0, "JEOPSU_FRDT"));
        			this.ds_input.setColumn(0,"JEOPSU_TODT", this.ds_SearchMojip.getColumn(0, "JEOPSU_TODT"));
                }
            }

        	if(this.ds_SearchMojip.rowcount == 0)
        	{
        		this.ds_SearchMojip.insertRow(0);
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_GBCD','');
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_NM','전체');
        	}

        	this.fn_SearchHakgwa();
        }

        // 학과 조회(검색조건)
        this.fn_SearchHakgwa = function ()
        {
        	this.ds_input.setColumn(0, "MYEONJEOP_YN", "N");
        	this.ds_input.setColumn(0, "SILGI_YN", "Y");

        	var strSvc      = "SearchHakgwa";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKGWA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHakgwa=ds_Hakgwa";
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

        this.fn_PostSearchHakgwa = function()
        {
        	this.ds_SearchHakgwa.insertRow(0);
        	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_CD','');
         	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_NM','전체');
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        //주야구분 조회(검색조건)
        this.fn_SearchJuya = function ()
        {
        	var strSvc      = "SearchJuya";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_JUYA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchJuya=ds_Juya";
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

        this.fn_PostSearchJuya = function()
        {
        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        //학년 조회(검색조건)
        this.fn_SearchHaknyeon = function ()
        {
        	var strSvc      = "SearchHaknyeon";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKNYEON.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHaknyeon=ds_Haknyeon";
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

        this.fn_PostSearchHaknyeon = function()
        {
        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD",obj.value);
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

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_HAKNYEON",obj.value);
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
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_SearchMojip,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_SearchHakgwa,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_SearchJuya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_SearchHaknyeon,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.edtSearchSuheomNo.addEventHandler("onkeydown",this.divSearch_edtSearchSuheomNo_onkeydown,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divSearch.form.cboSearchHapgyeok.addEventHandler("onkeydown",this.divSearch_cboSearchHapgyeok_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET06_1020601_R.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
