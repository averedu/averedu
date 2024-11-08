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
            this.set_titletext("선감면중복수혜자관리");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD_1\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT_1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN_1\" type=\"STRING\" size=\"1\"/><Column id=\"JANGHAK_CD_2\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT_2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN_2\" type=\"STRING\" size=\"1\"/><Column id=\"JANGHAK_CD_3\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT_3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN_3\" type=\"STRING\" size=\"1\"/><Column id=\"JANGHAK_CD_4\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT_4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN_4\" type=\"STRING\" size=\"1\"/><Column id=\"TOTAL_JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_Y_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_Y_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOGWA_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOGWA_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_AMT_CHOGWA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"BACKUP_JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"9\"/><Column id=\"JANGHAK_JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BACKUP_JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BACKUP_JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIGIN_JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ORIGIN_JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BACKUP_JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BACKUP_JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
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


            obj = new Dataset("dsDetail2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_Y_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_Y_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOGWA_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOGWA_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJigeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_YAKEO_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JANGHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GUKGA_JANGHAK_MAECHING_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_MAPPING_JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOJISEO_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_BANYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JUNGBOK_SUHYE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKYONG_DAESANG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSAENG_SINCHEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JECHUL_SEORYU\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut", this);
            obj._setContents("<ColumnInfo><Column id=\"O_RESULT\" type=\"STRING\" size=\"65532\"/><Column id=\"O_RESULT_CONT\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","-3","52",null,"22","1458",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("중복수혜자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","127","51",null,"24","1390",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","560","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","69",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","19","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","201","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","291","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","281","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","200","0","56","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","409","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","500","9","180","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","681","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","771","9","180","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","953","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1042","9","180","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","680","4","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","761","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00","951","4","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","1032","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00_00","1442","4","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01_00","1474","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("장학금액초과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02_00_00","1574","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchChogwa","1591",null,"20","22",null,"9",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_tooltiptype("hover");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","401","0","56","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","490","0","10","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_01_00_00_00","1222","4","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_01_00_00","1254","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_02_00_00_00","1335","6","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","1345","9","97","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"224","22",null,"319",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("장학상세 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","117",null,"123","24",null,"318",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","10","476",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","560","438","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","1190","440","10",null,null,"151",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","363",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"120\" band=\"left\"/><Column size=\"118\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"54\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"54\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"54\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"54\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"학과\"/><Cell col=\"2\" rowspan=\"2\" text=\"전공\"/><Cell col=\"3\" rowspan=\"2\" text=\"학년\"/><Cell col=\"4\" rowspan=\"2\" text=\"학번\"/><Cell col=\"5\" rowspan=\"2\" text=\"성명\"/><Cell col=\"6\" colspan=\"4\" text=\"장학1\"/><Cell col=\"10\" colspan=\"4\" text=\"장학2\"/><Cell col=\"14\" colspan=\"4\" text=\"장학3\"/><Cell col=\"18\" colspan=\"4\" text=\"장학4\"/><Cell col=\"22\" colspan=\"2\" text=\"장학금합계\"/><Cell col=\"24\" colspan=\"2\" text=\"지급금액\"/><Cell col=\"26\" colspan=\"2\" text=\"초과금액\"/><Cell row=\"1\" col=\"6\" text=\"장학명\"/><Cell row=\"1\" col=\"7\" text=\"입학금\"/><Cell row=\"1\" col=\"8\" text=\"수업료\"/><Cell row=\"1\" col=\"9\" text=\"지급여부\"/><Cell row=\"1\" col=\"10\" text=\"장학명\"/><Cell row=\"1\" col=\"11\" text=\"입학금\"/><Cell row=\"1\" col=\"12\" text=\"수업료\"/><Cell row=\"1\" col=\"13\" text=\"지급여부\"/><Cell row=\"1\" col=\"14\" text=\"장학명\"/><Cell row=\"1\" col=\"15\" text=\"입학금\"/><Cell row=\"1\" col=\"16\" text=\"수업료\"/><Cell row=\"1\" col=\"17\" text=\"지급여부\"/><Cell row=\"1\" col=\"18\" text=\"장학명\"/><Cell row=\"1\" col=\"19\" text=\"입학금\"/><Cell row=\"1\" col=\"20\" text=\"수업료\"/><Cell row=\"1\" col=\"21\" text=\"지급여부\"/><Cell row=\"1\" col=\"22\" text=\"입학금\"/><Cell row=\"1\" col=\"23\" text=\"수업료\"/><Cell row=\"1\" col=\"24\" text=\"입학금\"/><Cell row=\"1\" col=\"25\" text=\"수업료\"/><Cell row=\"1\" col=\"26\" text=\"입학금\"/><Cell row=\"1\" col=\"27\" text=\"수업료\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsGrdHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:JEONGONG_CD\" textAlign=\"left\" displaytype=\"expr:JEONGONG_CD!=&apos;&apos;?&apos;combotext&apos;:&apos;normal&apos;\" combodataset=\"dsGrdJeongong\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:HAKNYEON\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:HAKBEON\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:HAKSAENG_NM\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:JANGHAK_CD_1\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_YAKEO_NM\" combocodecol=\"JANGHAK_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:JIGEUP_IPHAK_AMT_1\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:JIGEUP_SUEOP_AMT_1\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:JIGEUP_YN_1\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:JANGHAK_CD_2\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_YAKEO_NM\" combocodecol=\"JANGHAK_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:JIGEUP_IPHAK_AMT_2\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:JIGEUP_SUEOP_AMT_2\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:JIGEUP_YN_2\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"14\" textAlign=\"left\" text=\"bind:JANGHAK_CD_3\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_YAKEO_NM\" combocodecol=\"JANGHAK_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"number\" text=\"bind:JIGEUP_IPHAK_AMT_3\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"16\" textAlign=\"right\" displaytype=\"number\" text=\"bind:JIGEUP_SUEOP_AMT_3\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:JIGEUP_YN_3\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"18\" textAlign=\"left\" text=\"bind:JANGHAK_CD_4\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_YAKEO_NM\" combocodecol=\"JANGHAK_CD\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"19\" textAlign=\"right\" displaytype=\"number\" text=\"bind:JIGEUP_IPHAK_AMT_4\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"20\" textAlign=\"right\" displaytype=\"number\" text=\"bind:JIGEUP_SUEOP_AMT_4\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:JIGEUP_YN_4\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:TOTAL_JIGEUP_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:TOTAL_JIGEUP_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:JIGEUP_Y_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:JIGEUP_Y_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:CHOGWA_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:CHOGWA_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" cssclass=\"expr:(CHOGWA_IPHAK_AMT &lt; 0)||(CHOGWA_SUEOP_AMT &lt; 0)?&apos;font_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0",null,null,"316","450","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"30\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"학번\"/><Cell col=\"2\" rowspan=\"2\" text=\"성명\"/><Cell col=\"3\" rowspan=\"2\" text=\"지원구분\"/><Cell col=\"4\" rowspan=\"2\" text=\"장학명\"/><Cell col=\"5\" rowspan=\"2\" text=\"우선&#13;&#10;순위\"/><Cell col=\"6\" rowspan=\"2\" text=\"지급&#13;&#10;상태\"/><Cell col=\"7\" colspan=\"2\" text=\"지급가능장학금\"/><Cell col=\"9\" colspan=\"2\" text=\"지급금액\"/><Cell col=\"11\" rowspan=\"2\" text=\"적용&#13;&#10;여부\"/><Cell row=\"1\" col=\"7\" text=\"입학금\"/><Cell row=\"1\" col=\"8\" text=\"수업료\"/><Cell row=\"1\" col=\"9\" text=\"입학금\"/><Cell row=\"1\" col=\"10\" text=\"수업료\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"3\" text=\"bind:JIWON_GBCD\" displaytype=\"combotext\" combodataset=\"dsJiwon\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"bind:JANGHAK_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_NM\" combocodecol=\"JANGHAK_CD\"/><Cell col=\"5\" text=\"bind:USEON_SEQ\"/><Cell col=\"6\" text=\"bind:JIGEUP_SANGTAE_GBCD\" displaytype=\"combotext\" combodataset=\"dsJigeup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:JIGEUP_GANEUNG_IPHAK_AMT\" textAlign=\"right\" controlautosizingtype=\"none\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:JIGEUP_GANEUNG_SUEOP_AMT\" textAlign=\"right\" controlautosizingtype=\"none\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:JIGEUP_IPHAK_AMT\" textAlign=\"right\" edittype=\"text\" controlautosizingtype=\"none\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:JIGEUP_SUEOP_AMT\" textAlign=\"right\" edittype=\"text\" controlautosizingtype=\"none\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:JIGEUP_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail2",null,null,"440","92","0","224",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fillareatype("allrow");
            obj.set_binddataset("dsDetail2");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"75\"/><Column size=\"65\"/><Column size=\"75\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"장학금합계\"/><Cell col=\"2\" colspan=\"2\" text=\"지급금액\"/><Cell col=\"4\" colspan=\"2\" text=\"초과금액\"/><Cell row=\"1\" text=\"입학금\"/><Cell row=\"1\" col=\"1\" text=\"수업료\"/><Cell row=\"1\" col=\"2\" text=\"입학금\"/><Cell row=\"1\" col=\"3\" text=\"수업료\"/><Cell row=\"1\" col=\"4\" text=\"입학금\"/><Cell row=\"1\" col=\"5\" text=\"수업료\"/></Band><Band id=\"body\"><Cell text=\"bind:TOTAL_JIGEUP_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" background=\"white\" color=\"#494949\"/><Cell col=\"1\" text=\"bind:TOTAL_JIGEUP_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" background=\"white\" color=\"#494949\"/><Cell col=\"2\" text=\"bind:JIGEUP_Y_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" background=\"white\" color=\"#494949\"/><Cell col=\"3\" text=\"bind:JIGEUP_Y_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" background=\"white\" color=\"#494949\"/><Cell col=\"4\" text=\"bind:CHOGWA_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\" background=\"white\" color=\"#494949\"/><Cell col=\"5\" text=\"bind:CHOGWA_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\" color=\"red\" background=\"white\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"55","25","510","324",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"55","25","450","324",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrdHakgwa","1649","45","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGrdHakgwa");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrdJeongong","1649","75","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGrdJeongong");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("선감면중복수혜자관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","JANGHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.chkSearchChogwa","value","ds_input","JANGHAK_AMT_CHOGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboGrdHakgwa","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboGrdJeongong","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetail2");
            this._addPreloadList("data","","dsJanghak");
            this._addPreloadList("data","","dsDeungrok");
        };
        
        // User Script
        this.registerScript("UE04_2060403_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE04_2060403_M.xfdl(선감면중복수혜자관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/11
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
        this.lvchkColidDs   = "JIGEUP_IPHAK_AMT$JIGEUP_SUEOP_AMT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "지급입학금$지급수업료";
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
            var strDs    = "dsHakgi|dsYn|dsJiwon|dsJigeup";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00051|02002|02015";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsGrdHakgwa";
        	strComb     = "N";
        	svcId       = "searchHakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.cboGrdHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsGrdJeongong";
        	strComb     = "N";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";

        	this.gfn_JeongongComboLoad(this.cboGrdJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// 장학코드 조회
        	this.fn_GetJanghak();

        };

        this.fn_PostformInit = function()
        {
        	this.dsHakgi.filter("REF_1 == '10'");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "JANGHAK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI",  this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
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
        	this.gfn_clearSortAll(this.grdDetail2);
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
        			case "First":
                            this.fn_PostFirst();
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
                case "tmp1" :        // 우선순위처리
                         this.fn_First();
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
            // 조회조건 셋팅
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "JANGHAK_YYYY")))
        	{
        		this.gfn_alert("학년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "HAKGI")))
        	{
        		this.gfn_alert("학기를 입력해주세요.","입력정보","","warning");
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
            var strUrl      = "/prj/UE/UE04/Retrieve_2060403_M.do";
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
                06. 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;
        	this.ds_dInput.setColumn(0, "JANGHAK_YYYY", this.dsMaster.getColumn(row, "JANGHAK_YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_dInput.setColumn(0, "HAKBEON", this.dsMaster.getColumn(row, "HAKBEON"));
        	this.ds_dInput.setColumn(0, "HAKNYEON", this.dsMaster.getColumn(row, "HAKNYEON"));
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
            var strUrl      = "/prj/UE/UE04/detailRetrieve_2060403_M.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail ";
        	    strOutDs   += "dsDetail2=dsDetail2";
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
        	this.dsDetail.set_updatecontrol(false);
        	this.dsDetail2.set_updatecontrol(false);
        	for(var i = 0 ; i < this.dsDetail.rowcount ; i++) {
        		var jigeupIphakAmt = this.dsDetail.getColumn(i, 'JIGEUP_IPHAK_AMT');
        		var jigeupSueopAmt = this.dsDetail.getColumn(i, 'JIGEUP_SUEOP_AMT');

        		if(jigeupIphakAmt > 0 || jigeupSueopAmt > 0) {
        			this.dsDetail.setColumn(i, 'JIGEUP_YN', '1');
        		}
        		else if(jigeupIphakAmt == 0 || jigeupSueopAmt == 0) {
        			this.dsDetail.setColumn(i, 'JIGEUP_YN', '0');
        		}
        	}
        	this.dsDetail.set_updatecontrol(true);
        	this.dsDetail2.set_updatecontrol(true);

        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                07. 우선순위처리
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreFirst = function()
        {
        	var janghakYyyy = this.ds_input.getColumn(0, "JANGHAK_YYYY"); 	// 장학년도
        	var hakgi = this.divSearch.form.cboSearchHakgi.text; 				// 학기
        	var hakbeon = this.ds_input.getColumn(0, "HAKBEON"); 			// 학번

        	// 등록대상자 생성유무 판단
        	if(nexacro.toNumber(this.fn_DeungrokRet()) > 0) {
        		if(!this.confirm(janghakYyyy +  '학년도 ' + hakgi + (!this.gfn_isNull(hakbeon)?' 학번 ' + hakbeon:'') + '의 등록대상자가 이미 생성완료되었습니다.\n우선순위처리 후에는 등록대상자를 재생성해야합니다.\n계속하시겠습니까?')) {
        			return false;
        		}
        	}
        	else {
        		if(!this.confirm(janghakYyyy +  '학년도 ' + hakgi + (!this.gfn_isNull(hakbeon)?' 학번 ' + hakbeon:'') + '의 우선순위처리를 하시겠습니까?')) {
        			return false;
        		}
        	}

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_First = function()
        {
            if(!this.fn_PreFirst())
            {
                return false;
            }
            var strSvc      = "First";
            var strUrl      = "/prj/UE/UE04/First_2060403_M.do";
            var strInDs     = "ds_input=ds_input:a";
            var strOutDs    = "dsOut=dsOut";
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
        this.fn_PostFirst = function()
        {
            this.alert(this.dsOut.getColumn(0, 'O_RESULT_CONT'));
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs, this.lvchkColNameDs, this.grdDetail, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	for(var i = 0 ; i < this.dsDetail.rowcount ; i++) {
        	    if(this.dsDetail.getRowType(i) == '4') {
        			var jigeupGaneungIphakAmt = this.dsDetail.getColumn(i, 'JIGEUP_GANEUNG_IPHAK_AMT');
        			var jigeupGaneungSueopAmt = this.dsDetail.getColumn(i, 'JIGEUP_GANEUNG_SUEOP_AMT');
        			var jigeupIphakAmt = this.dsDetail.getColumn(i, 'JIGEUP_IPHAK_AMT');
        			var jigeupSueopAmt = this.dsDetail.getColumn(i, 'JIGEUP_SUEOP_AMT');

        			if(nexacro.toNumber(jigeupIphakAmt) > nexacro.toNumber(jigeupGaneungIphakAmt)) {
        				this.alert('지급입학금은 지급가능입학금보다 클 수 없습니다.');
        				return false;
        			}
        			if(nexacro.toNumber(jigeupSueopAmt) > nexacro.toNumber(jigeupGaneungSueopAmt)) {
        				this.alert('지급수업료는 지급가능수업료보다 클 수 없습니다.');
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
            var strUrl      = "/prj/UE/UE04/Save_2060403_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsDetail=dsDetail:u";
            var strOutDs    = "dsMaster=dsMaster ";
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
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                09. 취소
        ***********************************************************************/
        this.fn_Cancel = function()
        {
        	if (!this.confirm("변경내용을 초기화하시겠습니까?"))
        	{
        		return false;
        	}
        	this.dsDetail.reset();
        	this.dsDetail2.reset();
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
        // 장학코드 조회
        this.fn_GetJanghak = function()
        {
        	var strSvc      = "";
            var strUrl      = "/prj/UE/UE01/Retrieve_2060101_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJanghak=dsMaster";
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

        // 지급입학금, 지급금액 변경시 통계 셋팅
        this.fn_SetAggregate = function()
        {
        	var jigeupYIphakAmt = 0;
        	var jigeupYSueopAmt = 0;
        	var totalJigeupIphakAmt = 0;
        	var totalJigeupSueopAmt = 0;
        	var iphakAmt = nexacro.toNumber(this.dsDetail2.getColumn(0, "IPHAK_AMT")); // 책정 입학금
        	var sueopAmt = nexacro.toNumber(this.dsDetail2.getColumn(0, "SUEOP_AMT")); // 책정 수업료

        	for(var i = 0 ; i < this.dsDetail.rowcount ; i++) {
        	    var jigeupYn = this.dsDetail.getColumn(i, "JIGEUP_YN");
                var jigeupIphakAmt = nexacro.toNumber(this.dsDetail.getColumn(i, "JIGEUP_IPHAK_AMT"));
        		var jigeupSueopAmt = nexacro.toNumber(this.dsDetail.getColumn(i, "JIGEUP_SUEOP_AMT"));

        		if(jigeupYn == '1') {
        		    jigeupYIphakAmt += jigeupIphakAmt;
        			jigeupYSueopAmt += jigeupSueopAmt;
        		}
        		totalJigeupIphakAmt += jigeupIphakAmt;
        		totalJigeupSueopAmt += jigeupSueopAmt;
        	}

        	this.dsDetail2.setColumn(0, 'TOTAL_JIGEUP_IPHAK_AMT', totalJigeupIphakAmt);
        	this.dsDetail2.setColumn(0, 'TOTAL_JIGEUP_SUEOP_AMT', totalJigeupSueopAmt);
        	this.dsDetail2.setColumn(0, 'JIGEUP_Y_IPHAK_AMT', jigeupYIphakAmt);
        	this.dsDetail2.setColumn(0, 'JIGEUP_Y_SUEOP_AMT', jigeupYSueopAmt);
        	this.dsDetail2.setColumn(0, 'CHOGWA_IPHAK_AMT', (nexacro.toNumber(iphakAmt) - nexacro.toNumber(totalJigeupIphakAmt))<0?(nexacro.toNumber(iphakAmt) - nexacro.toNumber(totalJigeupIphakAmt)):'0');
        	this.dsDetail2.setColumn(0, 'CHOGWA_SUEOP_AMT', (nexacro.toNumber(sueopAmt) - nexacro.toNumber(totalJigeupSueopAmt))<0?(nexacro.toNumber(sueopAmt) - nexacro.toNumber(totalJigeupSueopAmt)):'0');

        	var chogwaIphakAmt = this.dsDetail2.getColumn(0, 'CHOGWA_IPHAK_AMT');
        	var chogwaSueopAmt = this.dsDetail2.getColumn(0, 'CHOGWA_SUEOP_AMT');
        	this.grdDetail2.setCellProperty("body", 4, "color", nexacro.toNumber(chogwaIphakAmt) < 0?"red":'black');
        	this.grdDetail2.setCellProperty("body", 5, "color", nexacro.toNumber(chogwaSueopAmt) < 0?"red":'black');
        };

        // 등록대상자 조회
        this.fn_DeungrokRet = function()
        {
            var strSvc      = "DeungrokRet";
            var strUrl      = "/prj/UE/UE04/deungrokRetrieve_2060403_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeungrok=dsDeungrok ";
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

        	return this.dsDeungrok.getColumn(0, "CNT");
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

        this.dsDetail_oncolumnchanged = function(obj,e)
        {
        	// 1) 적용여부 변경
            if(e.columnid == 'JIGEUP_YN') {
        	    if(e.newvalue == '0') { // N -> 0. 0 셋팅
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_SANGTAE_GBCD', '4');
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_IPHAK_AMT', '0');
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_SUEOP_AMT', '0');

        			// 중복수혜삭제금액 계산
        			var originJigeupIphakAmt = this.dsDetail.getColumn(e.row, 'ORIGIN_JIGEUP_IPHAK_AMT');
        		    var jigeupIphakAmt = this.dsDetail.getColumn(e.row, 'JIGEUP_IPHAK_AMT');
        		    var originJigeupSueopAmt = this.dsDetail.getColumn(e.row, 'ORIGIN_JIGEUP_SUEOP_AMT');
        		    var jigeupSueopAmt = this.dsDetail.getColumn(e.row, 'JIGEUP_SUEOP_AMT');

        		    this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_IPHAK_AMT', nexacro.toNumber(originJigeupIphakAmt) - nexacro.toNumber(jigeupIphakAmt));
        		    this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_SUEOP_AMT', nexacro.toNumber(originJigeupSueopAmt) - nexacro.toNumber(jigeupSueopAmt));
        		}
        		else if(e.newvalue == '1') { // Y -> default값(지급금액 - 중복)
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_SANGTAE_GBCD', this.dsDetail.getColumn(e.row, 'BACKUP_JIGEUP_SANGTAE_GBCD'));
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_IPHAK_AMT', this.dsDetail.getColumn(e.row, 'BACKUP_JIGEUP_IPHAK_AMT'));
        		    this.dsDetail.setColumn(e.row, 'JIGEUP_SUEOP_AMT', this.dsDetail.getColumn(e.row, 'BACKUP_JIGEUP_SUEOP_AMT'));
        			this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_IPHAK_AMT', this.dsDetail.getColumn(e.row, 'BACKUP_JUNGBOKSAKJE_IPHAK_AMT'));
        		    this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_SUEOP_AMT', this.dsDetail.getColumn(e.row, 'BACKUP_JUNGBOKSAKJE_SUEOP_AMT'));

        		}
        		// 지급입학금, 지급금액 변경시 통계 셋팅
                this.fn_SetAggregate();
        	}

        	if(e.columnid == 'JIGEUP_IPHAK_AMT') { // 지급입학금이 지급가능입학금보다 크지 못하도록
        	    var jigeupGaneungIphakAmt = this.dsDetail.getColumn(e.row, 'JIGEUP_GANEUNG_IPHAK_AMT');
        		var originJigeupIphakAmt = this.dsDetail.getColumn(e.row, 'ORIGIN_JIGEUP_IPHAK_AMT');

        		if(e.newvalue == '') {
        		    this.alert('지급입학금을 입력하세요.');
        			return false;
        		}

        		if(nexacro.toNumber(jigeupGaneungIphakAmt) < nexacro.toNumber(e.newvalue)) {
        		    this.alert('지급입학금은 지급가능입학금보다 클 수 없습니다.');
        			this.dsDetail.setColumn(e.row, 'JIGEUP_IPHAK_AMT', e.oldvalue);
        			return false;
        		}
        	    this.dsDetail.setColumn(e.row, 'JIGEUP_YN', e.newvalue > 0 ? '1':'0');
        		this.dsDetail.setColumn(e.row, 'JIGEUP_SANGTAE_GBCD', e.newvalue > 0 ? this.dsDetail.getColumn(e.row, 'BACKUP_JIGEUP_SANGTAE_GBCD'):'4');

        		// 해당행의 지급입학금 - (입력)지급입학금(지급입학금 - 중복삭제) = 중복삭제입학
        		this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_IPHAK_AMT', nexacro.toNumber(originJigeupIphakAmt) - nexacro.toNumber(e.newvalue));
        		// 지급입학금, 지급금액 변경시 통계 셋팅
                this.fn_SetAggregate();
        	}

        	if(e.columnid == 'JIGEUP_SUEOP_AMT') { // 지급수업료가 지급가능수업료보다 크지 못하도록
        	    var jigeupGaneungSueopAmt = this.dsDetail.getColumn(e.row, 'JIGEUP_GANEUNG_SUEOP_AMT');
        		var originJigeupSueopAmt = this.dsDetail.getColumn(e.row, 'ORIGIN_JIGEUP_SUEOP_AMT');

        		if(e.newvalue == '') {
        		    this.alert('지급수업료를 입력하세요.');
        			return false;
        		}

        		if(nexacro.toNumber(jigeupGaneungSueopAmt) < nexacro.toNumber(e.newvalue)) {
        		    this.alert('지급수업료는 지급가능수업료보다 클 수 없습니다.');
        			this.dsDetail.setColumn(e.row, 'JIGEUP_SUEOP_AMT', e.oldvalue);
        			return false;
        		}
        		this.dsDetail.setColumn(e.row, 'JIGEUP_YN', e.newvalue > 0 ? '1':'0');
        		this.dsDetail.setColumn(e.row, 'JIGEUP_SANGTAE_GBCD', e.newvalue > 0 ? this.dsDetail.getColumn(e.row, 'BACKUP_JIGEUP_SANGTAE_GBCD'):'4');

        		// 해당행의 지급수업료 - (입력)지급수업료(지급수업료 - 중복삭제) = 중복삭제수업
        		this.dsDetail.setColumn(e.row, 'JUNGBOKSAKJE_SUEOP_AMT', nexacro.toNumber(originJigeupSueopAmt) - nexacro.toNumber(e.newvalue));
        		// 지급입학금, 지급금액 변경시 통계 셋팅
                this.fn_SetAggregate();
        	}
        };

        this.dsDetail2_onload = function(obj,e)
        {
        	var chogwaIphakAmt = this.dsDetail2.getColumn(0, 'CHOGWA_IPHAK_AMT');
        	var chogwaSueopAmt = this.dsDetail2.getColumn(0, 'CHOGWA_SUEOP_AMT');

            this.grdDetail2.setCellProperty("body", 4, "color", nexacro.toNumber(chogwaIphakAmt) < 0 ? "red":'black');
        	this.grdDetail2.setCellProperty("body", 5, "color", nexacro.toNumber(chogwaSueopAmt) < 0 ? "red":'black');
        };

        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if(this.gfn_isUpdate(this.dsDetail))
        	{
        		if (!this.confirm("수정 중인 장학상세 목록이 초기화됩니다.\n계속하시겠습니까?")) {
        			return false;
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsDetail);
        };

        /**********************************************************************
                13. 검색창 엔터키 조회
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
            this.stc_09_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.chkSearchChogwa.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.stc_09_00_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnCancel.addEventHandler("onclick",this.fn_Cancel,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
            this.cboGrdHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.cboGrdJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.fn_DRet,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
            this.ds_dInput.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail2.addEventHandler("onload",this.dsDetail2_onload,this);
            this.dsJanghak.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsJanghak.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsDeungrok.addEventHandler("onrowposchanged",this.fn_DRet,this);
            this.dsDeungrok.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("UE04_2060403_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
