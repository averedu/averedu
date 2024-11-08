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
            this.set_titletext("교직사정대상자 검색 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,288);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"4\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_JAGYEOK_NO\" type=\"STRING\" size=\"56\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_NM2\" type=\"STRING\" size=\"101\"/><Column id=\"JAGYEOKJONGBYEOL_NM3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputJagyeokjongbyeol", this);
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokNo", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GYOJIK_JAGYEOK_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_01_00_00_00_01_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학번/성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
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

            obj = new Static("Static01_02_00_00_00","80","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","90","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","213","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","238","9","122","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","360","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("생년월일");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","360","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","465","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnBirth","598","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchBirthday","475","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","195","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교직 사정 대상자 정보 입력");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","52",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","90",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("Div00","10","98",null,"140","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Outline");
            this.addChild(obj.name, obj);

            obj = new Static("stt_joleopYyyy","0","60","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("졸업년도/학기");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Spin("spn_joleopYyyy","115","60","87","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_joleopHakgi","205","60","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_jagyeokjongbyeolCd","0","85","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("자격종별");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_jagyeokjongbyeolCd","115","85","195","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJagyeokjongbyeol");
            obj.set_datacolumn("JAGYEOKJONGBYEOL_NM3");
            obj.set_codecolumn("JAGYEOKJONGBYEOL_CD");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_chwideukDt","0","110","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("취득일자");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("cal_chwideukDt","115","110","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_hakbeon","0","10","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("학번/성명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hakbeon","115","10","90","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_haksaengNm","208","10","102","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_birthday","310","10","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("생년월일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("btn_birthday","425","10","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_iphakYyyy","525","10","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("입학년도");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_iphakYyyy","640","10","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_hakgwaJeongongNm","0","35","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("학과(전공)");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_hakgwaJeongongNm","115","35","195","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_haknyeon","310","35","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("학년");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_haknyeon","425","35","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_juyaGbcd","525","35","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("주야");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stt_gyojikJagyeokNo","310","85","105","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("자격번호");
            obj.getSetter("onitemchanged").set("divSearch_cbo_jagyeokjongbyeolCd_onitemchanged");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_gyojikJagyeokNo","425","85","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_createJagyeokNo","528","85","95","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("자격번호생성");
            obj.set_cssclass("btn_WF_Crud");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_juyaGbcd","640","35","100","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"9","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("23");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("24");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","30",null,"5","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("25");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","0","55",null,"5","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("26");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00","0","80",null,"5","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("27");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","310","0","56",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("28");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","105","0","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","415","0","10",null,null,"0",null,null,null,null,this.Div00.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","525","0","56","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","630","0","10","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00_00_00","0","105",null,"5","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("33");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","10","130",null,"9","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("34");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_createDaesangja","323","258","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("대상자 생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","417","258","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00_00","0","238",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
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
            obj = new Layout("default","",800,288,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.edt_hakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.edt_haksaengNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.btn_birthday","value","dsMaster","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.edt_iphakYyyy","value","dsMaster","IPHAK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.edt_hakgwaJeongongNm","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.edt_haknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","Div00.form.cbo_juyaGbcd","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","Div00.form.spn_joleopYyyy","value","dsMaster","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","Div00.form.cbo_joleopHakgi","value","dsMaster","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Div00.form.cbo_jagyeokjongbyeolCd","value","dsMaster","JAGYEOKJONGBYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Div00.form.edt_gyojikJagyeokNo","value","dsMaster","GYOJIK_JAGYEOK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Div00.form.cal_chwideukDt","value","dsMaster","CHWIDEUK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calSearchBirthday","value","ds_input","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsJagyeokNo");
            this._addPreloadList("data","","dsCount");
        };
        
        // User Script
        this.registerScript("UP02_2040202_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040202_P02.xfdl(교직사정대상자)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/22
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
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        	// 자격증별 조회 함수
        	this.fn_searchJagyeokjongbyeol();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
            var strDs    = "dsJuya|dsHakgi";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00022"; 		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X"; 				// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 					// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
        			case "JagyeokNo":
        				this.fn_PostJagyeokNo();
        				break;
        			case "CreateDaesangja":
        				this.fn_PostCreateDaesangja();
        				break;
        			case "CountDaesangja":
        				this.fn_PostCountDaesangja();
        				break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "hakbeon" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE") {
        				this.ds_input.set_enableevent(false);
        				this.ds_input.setColumn(0, "HAKBEON", 		sRtn[0]);
        				this.ds_input.setColumn(0, "HAKSAENG_NM", 	sRtn[1]);
        				this.ds_input.set_enableevent(true);

        				this.dsMaster.clearData();

        				var nRow = this.dsMaster.insertRow();
        				this.dsMaster.setColumn(nRow, "JOLEOP_YYYY", 			sRtn[80]);
        				this.dsMaster.setColumn(nRow, "JOLEOP_HAKGI", 			sRtn[81]);
        				this.dsMaster.setColumn(nRow, "HAKBEON", 				sRtn[0]);
        				this.dsMaster.setColumn(nRow, "HAKSAENG_NM", 			sRtn[1]);
        				this.dsMaster.setColumn(nRow, "BIRTHDAY", 				sRtn[9]);
        				this.dsMaster.setColumn(nRow, "HAKNYEON", 				sRtn[4]);
        				this.dsMaster.setColumn(nRow, "IPHAK_YYYY", 			sRtn[35]);
        				this.dsMaster.setColumn(nRow, "JUYA_GBCD", 				sRtn[22]);

        				this.Div00.form.cbo_jagyeokjongbyeolCd.set_index(0);

        				if (sRtn[12] == "") {
        					this.dsMaster.setColumn(nRow, "HAKGWA_CD", sRtn[10]);
        					this.dsMaster.setColumn(nRow, "HAKGWA_NM", sRtn[2]);
        				} else  {
        					this.dsMaster.setColumn(nRow, "HAKGWA_CD", sRtn[12]);
        					this.dsMaster.setColumn(nRow, "HAKGWA_NM", sRtn[13]);
        				}
        			}
        			break;
        		case "birthday" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE") {
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(0, "BIRTHDAY", sRtn[9]);
        					this.ds_input.set_enableevent(true);

        					this.dsMaster.clearData();

        					var nRow = this.dsMaster.insertRow();
        					this.dsMaster.setColumn(nRow, "JOLEOP_YYYY",	sRtn[80]);
        					this.dsMaster.setColumn(nRow, "JOLEOP_HAKGI", 	sRtn[81]);
        					this.dsMaster.setColumn(nRow, "HAKBEON", 		sRtn[0]);
        					this.dsMaster.setColumn(nRow, "HAKSAENG_NM", 	sRtn[1]);
        					this.dsMaster.setColumn(nRow, "BIRTHDAY", 		sRtn[9]);
        					this.dsMaster.setColumn(nRow, "HAKNYEON", 		sRtn[4]);
        					this.dsMaster.setColumn(nRow, "IPHAK_YYYY", 	sRtn[35]);
        					this.dsMaster.setColumn(nRow, "JUYA_GBCD", 		sRtn[22]);

        					if (sRtn[12] == "") { // 전공
        						this.dsMaster.setColumn(nRow, "HAKGWA_CD", sRtn[10]);
        						this.dsMaster.setColumn(nRow, "HAKGWA_NM", sRtn[2]);
        					} else {
        						this.dsMaster.setColumn(nRow, "HAKGWA_CD", sRtn[12]);
        						this.dsMaster.setColumn(nRow, "HAKGWA_NM", sRtn[13]);
        					}

        					this.Div00.form.cbo_jagyeokjongbyeolCd.set_index(0);
        				}
        			break;
        		default:
                    break;
        	}
         };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         * 학생 검색 팝업
         */
        this.fn_setCallHakbeonPopup = function(strSearchValue) {
        	this.dsHakbeon.clearData();
        	this.ds_input1.setColumn(0, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "hakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        		  strArg 	   += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1) {
        		this.ds_input.setColumn(0, "HAKBEON", 		this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM", 	this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));

        		this.dsMaster.clearData();

        		var nRow = this.dsMaster.insertRow();
        		this.dsMaster.setColumn(nRow, "JOLEOP_YYYY", 	this.dsHakbeon.getColumn(0,"JOLEOP_YYYY"));
        		this.dsMaster.setColumn(nRow, "JOLEOP_HAKGI", 	this.dsHakbeon.getColumn(0,"JOLEOP_HAKGI"));
        		this.dsMaster.setColumn(nRow, "HAKBEON", 		this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.dsMaster.setColumn(nRow, "HAKSAENG_NM", 	this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		this.dsMaster.setColumn(nRow, "BIRTHDAY", 		this.dsHakbeon.getColumn(0,"BIRTHDAY"));
        		this.dsMaster.setColumn(nRow, "HAKNYEON", 		this.dsHakbeon.getColumn(0,"HAKNYEON"));
        		this.dsMaster.setColumn(nRow, "IPHAK_YYYY", 	this.dsHakbeon.getColumn(0,"IPSI_YYYY"));
        		this.dsMaster.setColumn(nRow, "JUYA_GBCD", 		this.dsHakbeon.getColumn(0,"JUYA_GBCD"));

        		if (this.dsHakbeon.getColumn(0, "JEONGONG_CD") == "") {
        			this.dsMaster.setColumn(nRow, "HAKGWA_CD", this.dsHakbeon.getColumn(0,"HAKGWA_CD"));
        			this.dsMaster.setColumn(nRow, "HAKGWA_NM", this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        		} else {
        			this.dsMaster.setColumn(nRow, "HAKGWA_CD", this.dsHakbeon.getColumn(0,"JEONGONG_CD"));
        			this.dsMaster.setColumn(nRow, "HAKGWA_NM", this.dsHakbeon.getColumn(0,"JEONGONG_NM"));
        		}

        		this.Div00.form.cbo_jagyeokjongbyeolCd.set_index(0);
        	} else {
        		var oArg 			= {hakbeonNm: strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("hakbeon", "com::COMM_P04.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**
         * 학생 검색 팝업 - 생년월일
         */
        this.fn_setCallBirthdayPopup = function(strSearchValue) {
        	this.dsHakbeon.clearData();
        	this.ds_input1.setColumn(0, "BIRTHDAY", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "hakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1) {
        		this.dsMaster.clearData();
        		this.ds_input.setColumn(0, "BIRTHDAY", this.dsHakbeon.getColumn(0,"BIRTHDAY"));

        		var nRow = this.dsMaster.insertRow();
        		this.dsMaster.setColumn(nRow, "JOLEOP_YYYY",	this.dsHakbeon.getColumn(0, "JOLEOP_YYYY"));
        		this.dsMaster.setColumn(nRow, "JOLEOP_HAKGI", 	this.dsHakbeon.getColumn(0, "JOLEOP_HAKGI"));
        		this.dsMaster.setColumn(nRow, "HAKBEON", 		this.dsHakbeon.getColumn(0, "HAKBEON"));
        		this.dsMaster.setColumn(nRow, "HAKSAENG_NM", 	this.dsHakbeon.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(nRow, "BIRTHDAY", 		this.dsHakbeon.getColumn(0, "BIRTHDAY"));
        		this.dsMaster.setColumn(nRow, "HAKNYEON", 		this.dsHakbeon.getColumn(0, "HAKNYEON"));
        		this.dsMaster.setColumn(nRow, "IPHAK_YYYY", 	this.dsHakbeon.getColumn(0, "IPSI_YYYY"));
        		this.dsMaster.setColumn(nRow, "JUYA_GBCD", 		this.dsHakbeon.getColumn(0, "JUYA_GBCD"));

        		if (this.dsHakbeon.getColumn(0,"JEONGONG_CD") == "") {
        			this.dsMaster.setColumn(nRow, "HAKGWA_CD", this.dsHakbeon.getColumn(0, "HAKGWA_CD"));
        			this.dsMaster.setColumn(nRow, "HAKGWA_NM", this.dsHakbeon.getColumn(0, "HAKGWA_NM"));
        		} else {
        			this.dsMaster.setColumn(nRow, "HAKGWA_CD", this.dsHakbeon.getColumn(0, "JEONGONG_CD"));
        			this.dsMaster.setColumn(nRow, "HAKGWA_NM", this.dsHakbeon.getColumn(0, "JEONGONG_NM"));
        		}

        		this.Div00.form.cbo_jagyeokjongbyeolCd.set_index(0);
        	} else {
        		var oArg 			= {birthday: strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("birthday", "com::COMM_P04.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 자격번호생성 버튼
         **/
        this.Div00_btn_createJagyeokNo_onclick = function(obj, e) {
        	if (this.gfn_isNull(this.dsMaster.getColumn(0, "JOLEOP_YYYY")) || this.gfn_isNull(this.dsMaster.getColumn(0, "JOLEOP_HAKGI"))) {
        		alert("졸업하지 않은 학생은 교직사정 대상자가 될 수 없습니다.");
        		return;
        	}

            var strSvc      = "JagyeokNo";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040202_P02List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJagyeokNo=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        // 대상자 생성
        this.fn_createDaesangja = function() {
        	if (!this.fn_preCreateDaesangja()) return;

        	var txt	 = "\n　　졸업년도학기: "	+ this.Div00.form.spn_joleopYyyy.value + " - " + this.Div00.form.cbo_joleopHakgi.text;
        		txt += "\n　　취득일자: "		+ this.Div00.form.cal_chwideukDt.text;
        		txt += "\n　　자격종별: "     	+ this.Div00.form.cbo_jagyeokjongbyeolCd.text;
        		txt += "\n　　학번성명: "     	+ this.Div00.form.edt_hakbeon.value + " " + this.Div00.form.edt_haksaengNm.value;

             var result = this.gfn_confirm(txt + "\n\n(으)로 교직사정 대상자를 생성하시겠습니까?", "대상자생성", "", "question");
             if(result == 0) return;

            var strSvc      = "CreateDaesangja";
            var strUrl      = "/prj/UP/UP02/Save_2040202_P02List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_preCreateDaesangja = function() {
        	if (this.dsMaster.rowcount < 1) {
        		alert("생성할 교직사정 대상자 정보를 입력하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(this.dsMaster.getColumn(0, "JAGYEOKJONGBYEOL_CD"))) {
        		alert("자격종별 정보를 선택하세요.");
        		this.Div00.form.cbo_jagyeokjongbyeolCd.setFocus();
        		return false;
        	}

        	if (this.gfn_isNull(this.dsMaster.getColumn(0, "GYOJIK_JAGYEOK_NO"))) {
        		alert("자격번호를 생성하세요.");
        		this.Div00.form.btn_createJagyeokNo.setFocus();
        		return false;
        	}

        	if (this.gfn_isNull(this.dsMaster.getColumn(0, "CHWIDEUK_DT"))) {
        		alert("취득일자를 입력하세요.");
        		this.Div00.form.cal_chwideukDt.setFocus();
        		return false;
        	}

        	return true;
        }
        this.fn_PostCreateDaesangja = function() {
        	this.close();
        }

        /**
          * 대상자생성 버튼
         **/
        this.btn_createDaesangja_onclick = function(obj, e) {
        	// 중복체크
        	if (!this.fn_countDaesangja()) return;
        	// 대상자 생성
        	this.fn_createDaesangja();
        };

        /**
          * 닫기 버튼
         **/
        this.btn_close_onclick = function(obj, e) {
        	this.close("CLOSE");
        };

        /**
          * 학생검색 실행
         **/
        this.fn_searchHakbeon = function() {
        	if (this.gfn_isNull(this.divSearch.form.edtSearchName.value)) {
        		this.alert("학번 또는 성명을 입력하세요.");
        		this.divSearch.form.edtSearchName.setFocus();
        		return;
        	}

        	var name = this.divSearch.form.edtSearchName.value;
        	this.fn_setCallHakbeonPopup(name);
        }

        /**
          * 학생검색 버튼 클릭
         **/
        this.divSearch_btnHakbeon_onclick = function(obj, e) {
        	this.fn_searchHakbeon();
        };

        /**
          * 학생검색 엔터 입력
         **/
        this.divSearch_edtSearchName_onkeyup = function(obj, e) {
        	if (e.keycode == 13) {
        		if (this.gfn_isNull(obj.value)) {
        			this.divSearch.form.edtSearchHakbeon.set_value("");
        		} else {
        			this.fn_searchHakbeon();
        		}
        	}
        };

        /**
          * 학생검색 포커스 나갈때
         **/
        this.divSearch_edtSearchName_onkillfocus = function(obj, e) {
        	if (this.gfn_isNull(this.divSearch.form.edtSearchName.value)) {
        		this.divSearch.form.edtSearchHakbeon.set_value("");
        	}
        };

        /**
          * 학생검색-생년월일 실행
         **/
        this.fn_searchBirth = function() {
        	if (this.gfn_isNull(this.divSearch.form.calSearchBirthday.value)) {
        		this.alert("생년월일을 입력하세요.");
        		this.divSearch.form.calSearchBirthday.setFocus();
        		return;
        	}

        	var birthday = this.divSearch.form.calSearchBirthday.value;
        	this.fn_setCallBirthdayPopup(birthday);
        }

        /**
          * 학생검색-생년월일 엔터 입력
         **/
        this.divSearch_calSearchBirthday_onkeyup = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_searchBirth();
        	}
        };

        /**
          * 학생검색-생년월일 버튼 클릭
         **/
        this.divSearch_btnBirth_onclick = function(obj, e) {
        	this.fn_searchBirth();
        };

        /**
         * 기능 : 자격증별 조회
         */
        this.fn_searchJagyeokjongbyeol = function() {
        	this.ds_inputJagyeokjongbyeol.setColumn(0, "SELECT_TYPE", "S");
            var strSvc      = "Jagyeokjongbyeol";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_jagyeokjongbyeolList.do";
            var strInDs     = "ds_input=ds_inputJagyeokjongbyeol";
            var strOutDs    = "dsJagyeokjongbyeol=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        this.fn_PostJagyeokNo = function() {
        	this.dsMaster.setColumn(0, "GYOJIK_JAGYEOK_NO", this.dsJagyeokNo.getColumn(0, "GYOJIK_JAGYEOK_NO"));
        }

        // 중복 생성 체크
        this.fn_countDaesangja = function() {
            var strSvc      = "CountDaesangja";
            var strUrl      = "/prj/UP/UP02/Count_2040202_P02List.do";
            var strInDs     = "ds_input=dsMaster";
            var strOutDs    = "dsCount=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostCountDaesangja = function() {
        	var cnt = this.dsCount.getColumn(0, "CNT");
        	if (cnt > 0) {
        		this.alert("이미 추가되었습니다. 확인바랍니다.");
        		return false;
        	}

        	return true;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Static01_01_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.divSearch.form.btnHakbeon.addEventHandler("onclick",this.divSearch_btnHakbeon_onclick,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeyup",this.divSearch_edtSearchName_onkeyup,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkillfocus",this.divSearch_edtSearchName_onkillfocus,this);
            this.divSearch.form.btnBirth.addEventHandler("onclick",this.divSearch_btnBirth_onclick,this);
            this.divSearch.form.calSearchBirthday.addEventHandler("onkeyup",this.divSearch_calSearchBirthday_onkeyup,this);
            this.Div00.form.cbo_jagyeokjongbyeolCd.addEventHandler("onitemchanged",this.divSearch_cbo_jagyeokjongbyeolCd_onitemchanged,this);
            this.Div00.form.edt_hakbeon.addEventHandler("onkeyup",this.divSearch_edt_haksaengNm_onkeyup,this);
            this.Div00.form.edt_hakbeon.addEventHandler("onkillfocus",this.divSearch_edt_haksaengNm_onkillfocus,this);
            this.Div00.form.edt_iphakYyyy.addEventHandler("onkeyup",this.divSearch_edt_haksaengNm_onkeyup,this);
            this.Div00.form.edt_iphakYyyy.addEventHandler("onkillfocus",this.divSearch_edt_haksaengNm_onkillfocus,this);
            this.Div00.form.edt_haknyeon.addEventHandler("onkeyup",this.divSearch_edt_haksaengNm_onkeyup,this);
            this.Div00.form.edt_haknyeon.addEventHandler("onkillfocus",this.divSearch_edt_haksaengNm_onkillfocus,this);
            this.Div00.form.edt_gyojikJagyeokNo.addEventHandler("onkeyup",this.divSearch_edt_haksaengNm_onkeyup,this);
            this.Div00.form.edt_gyojikJagyeokNo.addEventHandler("onkillfocus",this.divSearch_edt_haksaengNm_onkillfocus,this);
            this.Div00.form.btn_createJagyeokNo.addEventHandler("onclick",this.Div00_btn_createJagyeokNo_onclick,this);
            this.btn_createDaesangja.addEventHandler("onclick",this.btn_createDaesangja_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.ds_inputJagyeokjongbyeol.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP02_2040202_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
