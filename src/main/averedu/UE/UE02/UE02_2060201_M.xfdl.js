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
            this.set_titletext("연속장학생관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SIJAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SIJAK_HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"JANYEO_HAKGI_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_HAKGI_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BOHUN_NO\" type=\"STRING\" size=\"20\"/><Column id=\"BOHUN_DAESANGJA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SIJAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SIJAK_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANYEO_HAKGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIJAK_YYYY\"/><Col id=\"SIJAK_HAKGI\"/></Row></Rows>");
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


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAKBEON\"/><Col id=\"JANGHAK_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">재학</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"CODE_NM\">휴학</Col></Row><Row><Col id=\"CODE\">30</Col><Col id=\"CODE_NM\">제적</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">복학</Col></Row><Row><Col id=\"CODE\">05</Col><Col id=\"CODE_NM\">전과</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridBohun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridJigeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridSuhye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJoleopHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JOLEOP_HAKNYEON\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_YAKEO_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JANGHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GUKGA_JANGHAK_MAECHING_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_MAPPING_JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOJISEO_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_BANYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JUNGBOK_SUHYE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKYONG_DAESANG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSAENG_SINCHEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JECHUL_SEORYU\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaksaeng", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_getInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SIJAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SIJAK_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANYEO_HAKGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SIJAK_YYYY\"/><Col id=\"SIJAK_HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","-3","79",null,"22","1458",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("연속장학생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","127","78",null,"24","1390",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","560","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","96",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("stc_01_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("시작학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","201","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","291","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","281","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","401","-1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","200","0","56","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-1","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","90","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","291","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","381","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","583","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","672","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","506","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","426","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","290","31","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","371","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","581","31","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","662","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeok","516","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("재학");
            obj.set_value("10");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_00","655","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCd","745","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01","865","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchJanghak","875","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","897","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","907","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01","626","-3","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01","1059","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","1149","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02","1269","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchHakbeon","1279","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_02","1301","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","1311","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00","1027","-3","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00","735","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02_00","1139","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00_00","872","31","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01_00","904","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("잔여학기 존재");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02_00_00","1004","33","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchJanyeoHakgiYn","1021",null,"120","22",null,"9",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"224","22",null,"214",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("연속장학생 수혜상세 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","187",null,"123","24",null,"213",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","10","581",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","560","554","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104",null,null,"0","246",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"54\"/><Column size=\"64\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"54\"/><Column size=\"80\"/><Column size=\"92\"/><Column size=\"41\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"장학명\" cssclass=\"point\"/><Cell col=\"2\" text=\"학번\" cssclass=\"point\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"학과\"/><Cell col=\"5\" text=\"전공\"/><Cell col=\"6\" text=\"학년\"/><Cell col=\"7\" text=\"학적상태\"/><Cell col=\"8\" text=\"가능학기\"/><Cell col=\"9\" text=\"시작학년도\"/><Cell col=\"10\" text=\"시작학기\"/><Cell col=\"11\" text=\"잔여학기\" cssclass=\"point\"/><Cell col=\"12\" text=\"수혜학기\" cssclass=\"point\"/><Cell col=\"13\" text=\"보훈번호\"/><Cell col=\"14\" text=\"보훈대상자구분\"/><Cell col=\"15\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_NM\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow) == &apos;2&apos; ?&apos;show&apos;:&apos;hide&apos;\" expandsize=\"20\"/><Cell col=\"2\" text=\"bind:HAKBEON\" expandshow=\"expr:dataset.getRowType(currow) == &apos;2&apos; ?&apos;show&apos;:&apos;hide&apos;\" expandsize=\"20\"/><Cell col=\"3\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"4\" textAlign=\"left\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:JEONGONG_NM\"/><Cell col=\"6\" text=\"bind:HAKNYEON\"/><Cell col=\"7\" text=\"bind:HAKJEOK_STCD\" displaytype=\"combotext\" combodataset=\"dsHakjeok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" text=\"bind:JIGEUP_GIGAN_GBCD\"/><Cell col=\"9\" text=\"bind:SIJAK_YYYY\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:SIJAK_HAKGI\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsGridHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"11\" text=\"bind:JANYEO_HAKGI_CNT\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:JIGEUP_HAKGI_CNT\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:BOHUN_NO\" edittype=\"text\"/><Cell col=\"14\" edittype=\"combo\" text=\"bind:BOHUN_DAESANGJA_GBCD\" combodataset=\"dsGridBohun\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"expr:BOHUN_DAESANGJA_GBCD == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\"/><Cell col=\"15\" edittype=\"text\" text=\"bind:BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0",null,null,"211","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"54\"/><Column size=\"80\"/><Column size=\"189\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"학과\"/><Cell col=\"4\" text=\"전공\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"주야구분\"/><Cell col=\"7\" text=\"지급입학금\"/><Cell col=\"8\" text=\"지급수업료\"/><Cell col=\"9\" text=\"지급상태\"/><Cell col=\"10\" text=\"수혜구분\"/><Cell col=\"11\" text=\"지급여부\"/><Cell col=\"12\" text=\"지급일자\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_YYYY\"/><Cell col=\"2\" text=\"bind:HAKGI\" combodataset=\"dsGridHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JEONGONG_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:JUYA_GBCD\" combodataset=\"dsGridJuya\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:JIGEUP_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:JIGEUP_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:JIGEUP_SANGTAE_GBCD\" combodataset=\"dsGridJigeup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:SUHYE_GBCD\" combodataset=\"dsGridSuhye\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"expr:JIGEUP_YN==1?&apos;지급&apos;:&apos;미지급&apos;\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:JIGEUP_DT\" displaytype=\"expr:JIGEUP_YN==&apos;0&apos;?&apos;normal&apos;:&apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"bind:BIGO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("연속장학생관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","SIJAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","SIJAK_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboSearchHakjeok","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.chkSearchJanyeoHakgiYn","value","ds_input","JANYEO_HAKGI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchJanghakCd","value","ds_input","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("UE02_2060201_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE02_2060201_M.xfdl(연속장학생관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/02
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
        this.lvchkColidDs   = "JANGHAK_CD$HAKBEON$JANYEO_HAKGI_CNT$JIGEUP_HAKGI_CNT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "장학명$학번$잔여학기$수혜학기";
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
            var strDs    = "dsSearchHakgi|dsGridHakgi|dsGridBohun|dsGridJuya|dsGridJigeup|dsGridSuhye";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00022|02012|00003|02015|02008";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        };

        this.fn_PostformInit = function()
        {
        	this.dsSearchHakgi.filter("REF_1 == '10'");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "GIJUN_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "GIJUN_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}

        	this.fn_CommRet();
        };

        this.fn_PostGyeyeolInit = function()
        {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdDetail);
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
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInit();
        			    break;
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "Get":
                            this.fn_PostGet();
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
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "HAKBEON", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "HAKSAENG_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		case "janghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JANGHAK_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		default:
                    break;
        	}
        };

        this.fn_gridPopupCallback = function(strId, strVal)
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
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JEONGONG_CD", sRtn[12]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKNYEON", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKJEOK_STCD", sRtn[14]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "MOJIP_GBCD", sRtn[36]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "IPHAK_JEONHYEONG_GBCD", sRtn[76]);
        					this.dsMaster.set_enableevent(true);

        					this.fn_CalJigeupGiganGbcd();
        				}
        			break;
        		case "janghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_GIGAN_GBCD", sRtn[11]);
        					this.dsMaster.set_enableevent(true);

        					this.fn_CalJigeupGiganGbcd();
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
                case "tmp1" :        // 연속장학생 가져오기
                         this.fn_Get();
                    break;
                case "tmp2" :        // 팁
                         this.fn_Tip();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(장학코드, 학과, 졸업학년 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_CommRet = function()
        {
            var strSvc      = "CommRet";
            var strUrl      = "/prj/UE/UE02/commRetrieve_2060201_M.do";
            var strInDs     = "";
            var strOutDs    = "dsJanghak=dsJanghak ";
        	    strOutDs   += "dsJoleopHaknyeon=dsJoleopHaknyeon";
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

        /**********************************************************************
                06. 조회 함수 선언(마스터 함수)
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

        	this.dsDetail.clearData();

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
            var strUrl      = "/prj/UE/UE02/Retrieve_2060201_M.do";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster);
        };

        /**********************************************************************
                07. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;
        	this.ds_dInput.setColumn(0, "HAKBEON", this.dsMaster.getColumn(row, "HAKBEON"));
        	this.ds_dInput.setColumn(0, "JANGHAK_CD", this.dsMaster.getColumn(row, "JANGHAK_CD"));
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
            var strUrl      = "/prj/UE/UE02/detailRetrieve_2060201_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail";
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
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                08. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	var sijakYyyy = this.ds_input.getColumn(0, "SIJAK_YYYY");
        	var sijakHakgi = this.ds_input.getColumn(0, "SIJAK_HAKGI");

        	if(this.gfn_isNull(sijakYyyy))
        	{
        		sijakYyyy = this.dsBaseYyyyHakgi.getColumn(0, "YYYY");
        	}
        	if(this.gfn_isNull(sijakHakgi))
        	{
        		sijakHakgi = this.dsBaseYyyyHakgi.getColumn(0, "HAKGI");
        	}
            if(sijakYyyy.length != '4')
        	{
        	    this.alert("시작학년도는 4자리 숫자로 입력해주세요.");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }
            var nRow = this.dsMaster.addRow();
        	var sijakYyyy = this.ds_input.getColumn(0, "SIJAK_YYYY");
        	var sijakHakgi = this.ds_input.getColumn(0, "SIJAK_HAKGI");

        	if(this.gfn_isNull(sijakYyyy))
        	{
        		sijakYyyy = this.dsBaseYyyyHakgi.getColumn(0, "YYYY");
        	}
        	if(this.gfn_isNull(sijakHakgi))
        	{
        		sijakHakgi = this.dsBaseYyyyHakgi.getColumn(0, "HAKGI");
        	}

            this.dsMaster.setColumn(nRow,"SIJAK_YYYY", sijakYyyy);
            this.dsMaster.setColumn(nRow,"SIJAK_HAKGI", sijakHakgi);
        };

        /**********************************************************************
                09. 삭제 함수 선언
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
            var strUrl      = "/prj/UE/UE02/Delete_2060201_M.do";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster);
        };

        /**********************************************************************
                10. 저장 함수 선언
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
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i=0; i<this.dsMaster.rowcount; i++) {
        		if(this.dsMaster.getRowType(i) == "2" || this.dsMaster.getRowType(i) == "4") {
        			var sijakYyyy = this.dsMaster.getColumn(i, "SIJAK_YYYY");				// 시작학기
        			var janyeoHakgiCnt = this.dsMaster.getColumn(i, "JANYEO_HAKGI_CNT"); 	// 잔여학기
        			var jigeupHakgiCnt = this.dsMaster.getColumn(i, "JIGEUP_HAKGI_CNT");  	// 수혜학기
        			var jigeupGiganGbcd = this.dsMaster.getColumn(i, "JIGEUP_GIGAN_GBCD"); 	// 가능학기
        			var hakgiCal = 0; // 지급가능학기 계산
        			    hakgiCal = nexacro.toNumber(jigeupGiganGbcd) - (nexacro.toNumber(jigeupHakgiCnt) + nexacro.toNumber(janyeoHakgiCnt)); // 가능학기 - (지급학기 + 잔여학기)

        			if(sijakYyyy.length != '4')
        			{
        	            this.alert("시작학년도는 4자리 숫자로 입력해주세요.");
        		        return false;
        	        }
        			if(hakgiCal < 0)
        			{
        			    if(!this.confirm("잔여학기와 수혜학기의 합이 가능학기보다 큽니다.\n저장하시겠습니까?"))
        				{
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
            var strUrl      = "/prj/UE/UE02/Save_2060201_M.do";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster);
        };

        /**********************************************************************
                11. 연속장학생 가져오기 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreGet = function()
        {
        	var sijakYyyy = this.ds_input.getColumn(0, "SIJAK_YYYY"); // 시작년도

        	if(this.gfn_isNull(sijakYyyy))
        	{
        		sijakYyyy = this.dsBaseYyyyHakgi.getColumn(0, "YYYY");
        	}

        	var result = this.gfn_confirm(sijakYyyy + "년도 연속장학생 가져오기를 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Get = function()
        {
            if(!this.fn_PreGet())
            {
                return false;
            }
            var strSvc      = "Get";
            var strUrl      = "/prj/UE/UE02/Get_2060201_M.do";
            var strInDs     = "ds_getInput=ds_getInput";
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
        this.fn_PostGet = function()
        {
            this.alert("저장되었습니다.");
        	this.fn_Ret();
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
        // 수혜가능학기 계산
        this.fn_CalJigeupGiganGbcd = function()
        {
            // 학생소속 학과의 졸업학년
            var hakgwaCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"); // 학과
        	var jeongongCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"); // 전공
        	var haknyeon = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON"); // 학년
        	var sijakHakgi = this.dsMaster.getColumn(this.dsMaster.rowposition, "SIJAK_HAKGI"); // 시작학기
        	var mojipGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"); // 입시모집구분
        	var iphakJeonhyeongGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "IPHAK_JEONHYEONG_GBCD"); // 입학전형구분
        	var janghakCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_CD"); // 장학코드
        	var deptCd = jeongongCd==''?hakgwaCd:jeongongCd;

        	if(this.gfn_isNull(deptCd) || this.gfn_isNull(haknyeon) || this.gfn_isNull(sijakHakgi))
        	{
        	    return false;
        	}

        	this.dsJoleopHaknyeon.set_filterstr("DEPT_CD == " + deptCd);
        	var joleopHaknyeon = this.dsJoleopHaknyeon.getColumn(0, "JOLEOP_HAKNYEON");
        	var joleopHakgi = joleopHaknyeon*2; // 1년에 학기 2개
            var joleopHakgi = joleopHakgi - (haknyeon*2) + nexacro.toNumber(sijakHakgi=='11'?'2':'1'); // 학생의 남은 졸업학기 계산

        	// 9월 입학생
        	if(mojipGbcd == '9')
        	{
        	    joleopHakgi++; // 1 더함
        	}

        	this.dsJanghak.set_filterstr("JANGHAK_CD == " + nexacro.wrapQuote(janghakCd)); // 장학코드에 따른 filter
        	var jigeupGiganGbcd = this.dsJanghak.getColumn(0, "JIGEUP_GIGAN_GBCD");

        	// 지급기간이 졸업학기보다 클 경우
        	if(nexacro.toNumber(jigeupGiganGbcd) > nexacro.toNumber(joleopHakgi))
        	{
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_GIGAN_GBCD", joleopHakgi);
        	}
        	else
        	{
        	    this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_GIGAN_GBCD", jigeupGiganGbcd);
        	}
        };

        /**********************************************************************
                14. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.divSearch_btnSearchHakbeon_onclick = function(obj,e)
        {
        	var hakbeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallHaksaengPopup("HAKBEON_NM", hakbeonNm)
        };
        // 장학 팝업
        this.divSearch_btnSearchJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.divSearch.form.edtSearchJanghakNm.value;
        	this.fn_setCallJanghakPopup("JANGHAK_CD_NM", janghakCdNm)
        };

        this.fn_setCallHaksaengPopup = function(strColumnName, strSearchValue)
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
        		this.ds_input.setColumn(0, "HAKBEON", this.dsHaksaeng.getColumn(0,"HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM", this.dsHaksaeng.getColumn(0,"HAKSAENG_NM"));
        	} else
        	{
        		var oArg = {hakbeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("haksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallJanghakPopup = function(strColumnName, strSearchValue)
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
        		this.ds_input.setColumn(0, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        		this.ds_input.setColumn(0, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        	} else
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
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 학과 필터 적용
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsJeongong";
        	strComb     = "T";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 마스터 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        // 장학코드, 학번, 학기 변경 시 계산
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "SIJAK_HAKGI") {
        	    this.fn_CalJigeupGiganGbcd();
        	}
        };

        // 검색버튼 클릭
        this.grdMaster_onexpandup = function(obj,e)
        {
        	if(e.cell == 1)
        	{
        		var oArg = {yeonsokJanghakYn:1};
        		var oOption = {};
        		var sPopupCallBack = "fn_gridPopupCallback";
        		this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        	}
        	if(e.cell == 2)
        	{
        		var oArg = {};
        		var oOption = {};
        		var sPopupCallBack = "fn_gridPopupCallback";
        		this.gfn_openPopup("haksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HAKSAENG_NM")
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
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SIJAK_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SIJAK_HAKGI",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakjeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DAEHAK_CD",obj.value);
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

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.stc_09_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchHakjeok.addEventHandler("onkeydown",this.divSearch_cboSearchHakjeok_onkeydown,this);
            this.divSearch.form.btnSearchJanghak.addEventHandler("onclick",this.divSearch_btnSearchJanghak_onclick,this);
            this.divSearch.form.btnSearchHakbeon.addEventHandler("onclick",this.divSearch_btnSearchHakbeon_onclick,this);
            this.stc_09_00_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_dInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsJanghak.addEventHandler("onrowposchanged",this.DS_UE_JANGHAK_C_onrowposchanged,this);
            this.dsJanghak.addEventHandler("cancolumnchange",this.DS_UE_JANGHAK_C_cancolumnchange,this);
            this.ds_getInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE02_2060201_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
