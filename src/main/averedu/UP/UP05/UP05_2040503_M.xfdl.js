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
            this.set_titletext("교육실습활동승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"IPRYEOK_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"HWALDONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BONGSA_GIGWAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BONGSA_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"BONGSA_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"BONGSA_ILSU\" type=\"STRING\" size=\"4\"/><Column id=\"BONGSA_SIGAN\" type=\"STRING\" size=\"4\"/><Column id=\"BONGSA_NAEYONG\" type=\"STRING\" size=\"500\"/><Column id=\"SEUNGIN_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"INJEONG_GYOGWAMOK_CD\" type=\"STRING\" size=\"6\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"HWALDONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputAll", this);
            obj._setContents("<ColumnInfo><Column id=\"HWALDONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"NUMNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeog", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","52","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("실습활동 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","110","51","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500",null,"100","35",null,"168",null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("선발년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","90","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","260","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","375","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","495","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","585","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","705","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","795","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchName","1035","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01_00","705","0","56",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
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

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","495","0","56",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_00","575","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","260","0","56",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01","365","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00_01_00","785","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","915","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk_searchAll","213","10","47","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("전체");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","915","0","56",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","1025","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","203",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"140\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" rowspan=\"2\" text=\"No\"/><Cell col=\"2\" rowspan=\"2\" text=\"학번\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\" textAlign=\"center\"/><Cell col=\"4\" rowspan=\"2\" text=\"학과\" textAlign=\"center\"/><Cell col=\"5\" rowspan=\"2\" text=\"학년\" textAlign=\"center\"/><Cell col=\"6\" rowspan=\"2\" text=\"학적상태\" textAlign=\"center\"/><Cell col=\"7\" colspan=\"6\" text=\"교육봉사정보\"/><Cell col=\"13\" rowspan=\"2\" text=\"처리일시\"/><Cell col=\"14\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"7\" text=\"기관명\"/><Cell row=\"1\" col=\"8\" text=\"시작일자\"/><Cell row=\"1\" col=\"9\" text=\"종료일자\"/><Cell row=\"1\" col=\"10\" text=\"봉사 일수\"/><Cell row=\"1\" col=\"11\" text=\"봉사 시간\"/><Cell row=\"1\" col=\"12\" text=\"봉사 내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:HAKBEON\"/><Cell col=\"3\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:HAKJEOK_STCD\" displaytype=\"combotext\" combodataset=\"dsHakjeog\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:BONGSA_GIGWAN_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:BONGSA_FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"9\" text=\"bind:BONGSA_TODT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:BONGSA_ILSU\"/><Cell col=\"11\" text=\"bind:BONGSA_SIGAN\" displaytype=\"mask\" maskeditformat=\"##:##\" maskedittype=\"string\"/><Cell col=\"12\" text=\"bind:BONGSA_NAEYONG\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SEUNGIN_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" text=\"bind:BIGO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1640","28",null,"108",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1640","28",null,"135",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"135",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","0",null,"150","28",null,"108",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("실습기관");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","152",null,"417","22",null,"111",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_maxlength("166");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","572",null,"150","28",null,"108",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("실습기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calFrdt","725",null,"120","22",null,"111",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00","1232",null,"150","28",null,"108",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("실습시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtSigan","1385",null,"107","22",null,"111",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_type("string");
            obj.set_format("##시##분");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","0",null,"1640","83",null,"27",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","0",null,"150","85",null,"25",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("실습내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","0",null,null,"28","0","0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_01","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd3","152",null,null,"22","3","3",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_maxlength("33");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAdd1","152",null,null,"77","3","30",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_maxlength("33");
            obj.set_accessibilityrole("textarea");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","152",null,"120","22",null,"138",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_maxlength("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","275",null,"22","22",null,"138",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","299",null,"120","22",null,"138",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","422",null,"150","28",null,"135",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","575",null,"180","22",null,"138",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","758",null,"150","28",null,"135",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","911",null,"120","22",null,"138",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","1034",null,"150","28",null,"135",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakjeog","1187",null,"120","22",null,"138",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakjeog");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTodt","860",null,"120","22",null,"111",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","848",null,"10","22",null,"111",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00","983",null,"150","28",null,"108",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("실습일수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtilsu","1136",null,"30","22",null,"111",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","1169",null,"60","22",null,"111",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("(자동계산)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("교육실습활동승인");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","SINCHEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchName","value","ds_input","NUMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtName","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtHakgwa","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboHakjeog","value","dsMaster","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBigo","value","dsMaster","BONGSA_GIGWAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calFrdt","value","dsMaster","BONGSA_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calTodt","value","dsMaster","BONGSA_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtilsu","value","dsMaster","BONGSA_ILSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","mdtSigan","value","dsMaster","BONGSA_SIGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtAdd1","value","dsMaster","BONGSA_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtAdd3","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UP05_2040503_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP05_2040503_M.xfdl(교육실습활동승인)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/30
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
        this.lvchkColidDs   = "HAKBEON$BONGSA_GIGWAN_NM$BONGSA_FRDT$BONGSA_TODT$BONGSA_ILSU$BONGSA_SIGAN$BONGSA_NAEYONG"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$실습기관$시작일자$종료일자$실습일수$실습시간$실습내용";

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
            var strDs   = "dsHakjeog|dsHaknyeon";	// 데이터를 받을 데이터셋리스트 예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd	= "000035|00060"; 			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "N|N"; 					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "US";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	var strComb     	= "T";
        	var svcId      	 	= "gyeyeolInit";
        	var strUseYn    	= "1";	// 사용 여부
        	var strJojikGbcd	= "20"; // 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strDaehakCd 	= "";
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.divSearch.form.spnSearchYYYY.set_value(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        };

        this.fn_PostGyeyeolInt = function() {
        	this.divSearch.form.cboSearchGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchGyeyeol_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };

        this.fn_PostHakgwaInit = function() {
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch_cboSearchHakgwa_onitemchanged(this.divSearch.form.cboSearchHakgwa, info);
        };

        this.fn_PostJeongongInit = function() {
        	this.divSearch.form.cboSearchJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);

            if (nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
        				this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "Save":
        				this.fn_PostSave();
                        break;
                    case "New":
        				this.fn_PostNew();
                        break;
                    case "Del":
        				this.fn_PostDel();
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
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
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
        				var rowPosition = this.dsMaster.rowposition;
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(rowPosition, "HAKBEON", 		sRtn[0]);
        				this.dsMaster.setColumn(rowPosition, "HAKSAENG_NM", 	sRtn[1]);
        				this.dsMaster.setColumn(rowPosition, "HAKGWA_CD", 		sRtn[2]);
        				this.dsMaster.setColumn(rowPosition, "HAKGWA_NM", 		sRtn[3]);
        				this.dsMaster.setColumn(rowPosition, "HAKNYEON", 		sRtn[8]);
        				this.dsMaster.setColumn(rowPosition, "HAKJEOK_STCD", 	sRtn[5]);
        				this.dsMaster.set_enableevent(true);
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
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 	// 조회
        			this.fn_Ret();
                    break;
                case "new" : 	// 신규
        			this.fn_New();
                    break;
                case "del" : 	// 삭제
        			this.fn_Del();
                    break;
                case "save" :	// 저장
        			this.fn_Save();
                    break;
                case "tmp1" : 	// 팁
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
        this.fn_PreRet = function() {
            // 조회조건 셋팅
        	if (this.divSearch.form.chk_searchAll.value == "1") {
        		this.ds_inputAll.copyData(this.ds_input);
        		this.ds_inputAll.setColumn(0, "SINCHEONG_YYYY", "");
        		this.ds_inputAll.setColumn(0, "HWALDONG_GBCD", "2");
        	} else {
        		this.ds_input.setColumn(0, "HWALDONG_GBCD", "2");
        	}

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if (!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP05/Retrieve_2040503_MList.do";
            var strInDs     = this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll" : "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function() {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function() {
            if (!this.fn_PreNew()) {
                return false;
            }

            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow, "HWALDONG_GBCD", "2");
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function() {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.", "삭제정보", "", "warning");
                return false;
            }

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if(result == 0) {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for (var i = this.dsMaster.rowcount - 1; i > -1; i--) {
                if (this.dsMaster.getColumn(i, "CHK") == "1" || this.dsMaster.getRowType(i) == 2) {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function() {
            if (!this.fn_PreDel()) {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UP/UP05/Delete_2040503_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack	= "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if (this.dsMaster.rowcount > 0) {
                for (var i = 0; i < this.dsMaster.rowcount; i++) {
                    if (this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if (!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
            if (result[0] != "success") {
                this.gfn_alert(result[0], "저장정보", "", "question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
             if(result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if (!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP05/Save_2040503_MList.do";
            var strInDs     = this.divSearch.form.chk_searchAll.value == "1" ? "ds_input=ds_inputAll:a " : "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

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

        	if (!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "hakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P14.do";
        		var strInDs 	= "ds_input=ds_input1";
        		var strOutDs 	= "dsHakbeon=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsHakbeon.rowcount == 1) {
        		var rowPosition = this.dsMaster.rowposition;
        		this.dsMaster.setColumn(rowPosition, "HAKBEON", 		this.dsHakbeon.getColumn(0, "HAKBEON"));
        		this.dsMaster.setColumn(rowPosition, "HAKSAENG_NM", 	this.dsHakbeon.getColumn(0, "HAKSAENG_NM"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_CD", 		this.dsHakbeon.getColumn(0, "HAKGWA_CD"));
        		this.dsMaster.setColumn(rowPosition, "HAKGWA_NM", 		this.dsHakbeon.getColumn(0, "HAKGWA_NM"));
        		this.dsMaster.setColumn(rowPosition, "HAKNYEON", 		this.dsHakbeon.getColumn(0, "HAKNYEON"));
        		this.dsMaster.setColumn(rowPosition, "HAKJEOK_STCD", 	this.dsHakbeon.getColumn(0, "HAKJEOK_STCD"));
        	} else {
        		var oArg 			= {hakbeonNm: strSearchValue};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("hakbeon", "com::COMM_P14.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if (e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if (e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
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
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
        };

        this.divSearch_chk_searchAll_onchanged = function(obj, e) {
        	this.divSearch.form.spnSearchYYYY.set_enable(e.postvalue == "1" ? false : true);
        };

        /**
          * 학과 필터
         **/
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj, e) {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	var strComb     	= "T";
        	var svcId       	= "hakgwaInit";
        	var strUseYn    	= "1";	// 사용 여부
        	var strJojikGbcd	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strUpDeptCd 	= (this.gfn_isNull(e.postvalue) ? "" : e.postvalue);
        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        /**
          * 전공 필터
         **/
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj, e) {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	var strComb     	= "T";
        	var svcId       	= "jeongongInit";
        	var strUseYn    	= "1";	// 사용 여부
        	var strJojikGbcd 	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strUpDeptCd 	= (this.gfn_isNull(e.postvalue) ? "" : e.postvalue);
        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        /**
          * 학생검색 버튼
         **/
        this.btnHakbeon_onclick = function(obj, e) {
        	var name = this.edtName.value
        	this.fn_setCallHakbeonPopup(name);
        };

        /**
          * 봉사일수 계산
         **/
        this.fn_bongsaIlsu = function() {
        	var frdt = this.calFrdt.value;
        	var todt = this.calTodt.value;
        	if (!this.gfn_isNull(frdt) && !this.gfn_isNull(todt)) {
        		var ilsu = todt - frdt + 1;
        		this.edtilsu.set_value(ilsu);
        	}
        }

        this.mdtSigan_onkeyup = function(obj, e) {
        	var mm = nexacro.toNumber(obj.value.substr(2, 2));
        	if (mm > 59) {
        		this.alert("분은 60이하로 입력가능합니다.");
        		obj.set_value(obj.value.substr(0, 2));
        	}
        };

        this.dsMaster_onrowposchanged = function(obj, e) {
        	var rowTypeBool = (obj.getRowType(e.newrow) != 2);
        	this.edtName.set_readonly(rowTypeBool);
        	this.btnHakbeon.set_enable(!rowTypeBool);
        };

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.chk_searchAll.addEventHandler("onchanged",this.divSearch_chk_searchAll_onchanged,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.calFrdt.addEventHandler("onchanged",this.fn_bongsaIlsu,this);
            this.mdtSigan.addEventHandler("onkeyup",this.mdtSigan_onkeyup,this);
            this.btnHakbeon.addEventHandler("onclick",this.btnHakbeon_onclick,this);
            this.cboHaknyeon.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.cboHaknyeon.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.cboHakjeog.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.cboHakjeog.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.calTodt.addEventHandler("onchanged",this.fn_bongsaIlsu,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP05_2040503_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
