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
            this.set_titletext("성적조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOMGYE\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_INWONSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_JEONCHE_SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_JEONCHE_CHONGWON\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOMGYE\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"JEOMSUGYE\" type=\"STRING\" size=\"256\"/><Column id=\"JEOMSU_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGGO_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGGO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailU", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANG_GUBUN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_INJEONG_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetailU", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","0","39","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","90","39","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","243","39","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","268","39","152","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","62","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","210","0","56","39",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","290","0","10","39",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","420","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","865","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","500","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","1075","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","955","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeok","1190","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","630","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","630","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","735","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_01","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","0","33","1640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","90","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","745","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_01","865","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_01","210","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00","945","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","300","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_01_00","1075","0","56","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","420","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00_00_00","1180","0","10","70",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","510","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","71","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","85","77","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","74","85","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("학생 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","106","650",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학과/전공\"/><Cell col=\"2\" text=\"주야구분\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"학번\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"학적상태\"/><Cell col=\"7\" text=\"신청학점\"/><Cell col=\"8\" text=\"이수학점\"/><Cell col=\"9\" text=\"평점계\"/><Cell col=\"10\" text=\"평점평균\"/><Cell col=\"11\" text=\"졸업석차\"/><Cell col=\"12\" text=\"졸업인원\"/><Cell col=\"13\" text=\"학과석차\"/><Cell col=\"14\" text=\"학과인원\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" combodataset=\"dsGrdYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:JUYA_GBNM\"/><Cell col=\"3\" text=\"bind:HAKNYEON\"/><Cell col=\"4\" text=\"bind:HAKBEON\"/><Cell col=\"5\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"6\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"7\" text=\"bind:SINCHEONG_HAKJEOM\"/><Cell col=\"8\" text=\"bind:CHWIDEUK_HAKJEOM\"/><Cell col=\"9\" text=\"bind:PYEONGJEOMGYE\"/><Cell col=\"10\" text=\"bind:PYEONGJEOM_AVG\"/><Cell col=\"11\" text=\"bind:JOLEOP_JEONCHE_SEOKCHA\"/><Cell col=\"12\" text=\"bind:JOLEOP_JEONCHE_CHONGWON\"/><Cell col=\"13\" text=\"bind:HAKGWA_SEOKCHA\"/><Cell col=\"14\" text=\"bind:HAKGWA_INWONSU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetailU","680",null,null,"350","0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsDetailU");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"과목코드\"/><Cell col=\"2\" text=\"교과목명\"/><Cell col=\"3\" text=\"담당교수\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"취득점수\"/><Cell col=\"6\" text=\"평어\"/><Cell col=\"7\" text=\"평점\"/><Cell col=\"8\" text=\"수강구분\"/><Cell col=\"9\" text=\"재수강년도\"/><Cell col=\"10\" text=\"재수강학기\"/><Cell col=\"11\" text=\"재수강과목\"/><Cell col=\"12\" text=\"성적인정\"/><Cell col=\"13\" text=\"이수여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ISU_GBNM\"/><Cell col=\"1\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"2\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SEONGMYEONG\"/><Cell col=\"4\" text=\"bind:HAKJEOM\"/><Cell col=\"5\" text=\"bind:CHWIDEUK_JEOMSU\"/><Cell col=\"6\" text=\"bind:DEUNGGEUP\"/><Cell col=\"7\" text=\"bind:PYEONGJEOM\"/><Cell col=\"8\" text=\"bind:SUGANG_GUBUN_NM\"/><Cell col=\"9\" text=\"bind:JAESUGANG_YYYY\"/><Cell col=\"10\" text=\"bind:JAESUGANG_HAKGI\"/><Cell col=\"11\" text=\"bind:JAESUGANG_GYOGWAMOK_NM\"/><Cell col=\"12\" text=\"bind:SEONGJEOK_INJEONG_YN_NM\"/><Cell col=\"13\" text=\"bind:ISU_YN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","650","71","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","680","74","100","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("학기별 성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCntDetail","780","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","650",null,"990","8",null,"350",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","680",null,"100","31",null,"351",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("교과목 성적");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCntDetailU","780",null,"200","24",null,"355",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","680","106",null,null,"0","stc_09_00_00_00:5",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"학기\"/><Cell col=\"2\" text=\"신청과목수\"/><Cell col=\"3\" text=\"취득과목수\"/><Cell col=\"4\" text=\"신청학점\"/><Cell col=\"5\" text=\"취득학점\"/><Cell col=\"6\" text=\"평점계\"/><Cell col=\"7\" text=\"평점평균\"/><Cell col=\"8\" text=\"취득점수계\"/><Cell col=\"9\" text=\"점수평균\"/><Cell col=\"10\" text=\"경고여부\"/><Cell col=\"11\" text=\"경고일자\"/><Cell col=\"12\" text=\"인정여부\"/><Cell col=\"13\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:YYYY\"/><Cell col=\"1\" text=\"bind:HAKGI_NM\"/><Cell col=\"2\" text=\"bind:SINCHEONG_GWAMOKSU\"/><Cell col=\"3\" text=\"bind:CHWIDEUK_GWAMOKSU\"/><Cell col=\"4\" text=\"bind:SINCHEONG_HAKJEOM\"/><Cell col=\"5\" text=\"bind:CHWIDEUK_HAKJEOM\"/><Cell col=\"6\" text=\"bind:PYEONGJEOMGYE\"/><Cell col=\"7\" text=\"bind:PYEONGJEOM_AVG\"/><Cell col=\"8\" text=\"bind:JEOMSUGYE\"/><Cell col=\"9\" text=\"bind:JEOMSU_AVG\"/><Cell col=\"10\" text=\"bind:GYEONGGO_YN_NM\"/><Cell col=\"11\" text=\"bind:GYEONGGO_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("성적조회");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchGyeyeol","value","ds_input","JUGWAN_DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchHakgwa","value","ds_input","JUGWAN_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJeongong","value","ds_input","JUGWAN_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchName","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchHakjeok","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetailU");
        };
        
        // User Script
        this.registerScript("UM04_2030403_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UM04_2030403_M.xfdl(성적조회)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/07/27
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
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi|dsHaknyeon|dsHakjeok|dsJuya";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00060|000035|00003";              // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|T";                               // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostGyeyeolInt = function()
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
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        this.fn_PostDetailRet = function()
        {
            this.gfn_getRowCount(this.stRowCntDetail,this.dsDetail);
        };

        this.fn_PostDetailURet = function()
        {
            this.gfn_getRowCount(this.stRowCntDetailU,this.dsDetailU);
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
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			// 검색조건 계열
        			case "gyeyeolInit":
        			        this.fn_PostGyeyeolInt();
        			    break;
        			// 검색조건 학과
        			case "hakgwaInit":
        			        this.fn_PostHakgwaInit();
        			    break;
        			// 검색조건 전공
        			case "jeongongInit":
        			        this.fn_PostJeongongInit();
        			    break;
                    case "DetailRet":
                            this.fn_PostDetailRet();
                        break;
                    case "DetailURet":
                            this.fn_PostDetailURet();
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
        		case "hakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(0, "HAKBEON", sRtn[0]);
        		            this.ds_input.setColumn(0, "HAKSAENG_NM", sRtn[1]);
        					this.ds_input.set_enableevent(true);
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
            var strUrl      = "/prj/UM/UM04/Retrieve_2030403_MList.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

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
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
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

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
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

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        this.divSearch_btnDamdang_onclick = function(obj,e)
        {
        	var damdangNm = this.divSearch.form.edtDamdangNm.value;
        	this.fn_setCallDamdangPopup(damdangNm);
        };

        this.divSearch_btnHakbeon_onclick = function(obj,e)
        {
        	var name = this.divSearch.form.edtSearchName.value;
        	this.fn_setCallHakbeonPopup(name);
        };

        /**
         * 학생 검색 팝업
         */
        this.fn_setCallHakbeonPopup = function(strSearchValue)
        {
        	this.dsHakbeon.clearData();

        	this.ds_input1.setColumn(0, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "hakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        	} else
        	{
        		var oArg = {hakbeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKSAENG_NM") {
        		if (this.gfn_isNull(e.newvalue)) {
        			obj.setColumn(0, "HAKBEON", "");
        		} else {
        			if (e.oldvalue != e.newvalue) {
        				this.fn_setCallHakbeonPopup(e.newvalue);
        			}
        		}
        	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_inputDetail.setColumn(0, "HAKBEON",	this.dsMaster.getColumn(obj.rowposition, "HAKBEON"));

            var strSvc      = "DetailRet";
            var strUrl      = "/prj/UM/UM04/Retrieve_2030403_DList.do";
            var strInDs     = "ds_input=ds_inputDetail";
            var strOutDs    = "dsDetail=dsMaster";
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

        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	this.ds_inputDetailU.setColumn(0, "YYYY", 			this.dsDetail.getColumn(obj.rowposition, "YYYY"));
        	this.ds_inputDetailU.setColumn(0, "HAKGI", 			this.dsDetail.getColumn(obj.rowposition, "HAKGI"));
        	this.ds_inputDetailU.setColumn(0, "HAKBEON",			this.dsDetail.getColumn(obj.rowposition, "HAKBEON"));

            var strSvc      = "DetailURet";
            var strUrl      = "/prj/UM/UM04/Retrieve_2030403_DUList.do";
            var strInDs     = "ds_input=ds_inputDetailU";
            var strOutDs    = "dsDetailU=dsMaster";
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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.btnHakbeon.addEventHandler("onclick",this.divSearch_btnHakbeon_onclick,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakjeok.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdDetailU.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetailU.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetailU.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetailU.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdDetail.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("UM04_2030403_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
