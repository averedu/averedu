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
            this.set_titletext("단체신청(팝업)");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_SINCHEONG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SEOLIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BU_DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_SAWON_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGINWON\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_MOKJEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SANGSIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPMU_GYEOLJAE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MYEONGDAN_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYOYUK_GONGGAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOYUK_GONGGAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JAMGEUM_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"SEOYAKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DANCHE_SINCHEONG_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DANCHE_SINCHEONG_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryuGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHoewon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GAIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"TALTOE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JAGYEOK_YUJI_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"GAIB_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_JIKCHEAK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_JIKCHEAK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hoewonInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DANCHE_SINCHEONG_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikcheak", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSawon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"256\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHosil", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdHoewon","1030","96",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_binddataset("dsHoewon");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"153\"/><Column size=\"140\"/><Column size=\"153\"/><Column size=\"152\"/><Column size=\"155\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"학번\" cssclass=\"point\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"가입일자\" cssclass=\"point\"/><Cell col=\"4\" text=\"직책\"/><Cell col=\"5\" text=\"학적상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKBEON\" editmaxlength=\"10\" expandshow=\"hide\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"center\" text=\"bind:HAKSAENG_NM\" editmaxlength=\"10\" expandshow=\"show\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:GAIB_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DANCHE_JIKCHEAK_GBCD\" editmaxlength=\"8\" combodataset=\"dsJikcheak\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_SANGTAE_NM\" editmaxlength=\"10\" combodataset=\"dsHakjeokSangtae\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","60","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edtYYYY","80","9","225","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_01_00","306","9","80","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div.addChild(obj.name, obj);

            obj = new Combo("CboHakgi","396","9","225","22",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgi");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","70","0","10","40",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","305","1","56","40",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","386","0","10","40",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_01","20","0","610","9",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","610","9",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.div.addChild(obj.name, obj);

            obj = new Button("btnClose","1549","8","60","25",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.div.addChild(obj.name, obj);

            obj = new Static("stc_09","1030","72","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("회원목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("신청단체");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","10","97",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","10","97","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("단체코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheCd","162","100","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","512","97","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheNm","665","100","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00","10","125",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00","10","125","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("단체구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00","512","125","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheGb","162","129","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDancheGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheBunryu","665","128","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("dsDancheBunryuGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01","10","153",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01","10","153","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuCd","162","156","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuNm","397","156","198","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuHakgwa","603","156","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00","10","181",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00","10","181","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengCd","162","184","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("point");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengNm","397","184","198","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHakgwa","603","184","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHpNo","810","184","198","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00","10","209",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00","10","209","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("부대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengCd","162","212","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengNm","397","212","198","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHakgwa","603","212","202","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHpNo","810","212","198","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_01","10","237",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_01","10","237","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("사회봉사 활동여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSahoebongsa","165","240","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02","10","265",null,"195","625",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","10","265","150","195",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("활동목적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldongMokjeok","162","270","846","185",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03","10","460",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03","10","460","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("사용공간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01","512","460","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04","10","488",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_04","10","488","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("인원수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon1","217","491","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","175","491","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("1학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon2","387","491","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","345","491","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("2학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon3","552","491","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","510","491","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("3학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon4","718","491","109","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","676","491","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("4학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChongInwon","886","491","122","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","844","491","42","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("총인원");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00","10","516",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00","10","516","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("서약서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSeoyakseo","182","519","243","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00","512","516","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("회원명단");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeoyakseoFile","435","519","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSeoyakseo","162","519","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHoewon","685","519","243","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonFile","938","519","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHoewon","665","519","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00_00","10","544",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00_00","10","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("활동계획");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldong","182","547","243","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00_00","512","544","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("지도교수소견");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwaldongFile","435","547","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHwaldong","162","547","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu","685","547","243","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosuFile","938","547","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJidogyosu","665","547","40","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05","10","572",null,"28","625",null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_05","10","572","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSincheongDt","162","575","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_00","512","572","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCheoriSangtae","665","575","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","10","600",null,"190","625",null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","10","600","150","190",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBanryeoSayu","162","605","846","180",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSincheong","890","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","955","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonExcel","1375","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonAdd","1440","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonDel","1505","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonSave","1570","64","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","1117","69","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosu","369","156","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDaepyoHaksaeng","369","184","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Button("btnBuDaepyoHaksaeng","369","212","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeolibDt","665","463","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSayongGongganCd","163","463","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSayongGonggan","322","463","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSayongGongganNm","347","463","163","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","737","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","16","89","1610","8",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1207","52","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체신청(팝업)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtDancheCd","value","dsMaster","DANCHE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtDancheNm","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ComboDancheGb","value","dsMaster","DANCHE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtJidogyosuCd","value","dsMaster","JIDOGYOSU_SAWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtDaepyoHaksaengCd","value","dsMaster","DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtBuDaepyoHaksaengCd","value","dsMaster","BU_DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ComboDancheBunryu","value","dsMaster","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chkSahoebongsa","value","dsMaster","SAHOE_BONGSA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtHwaldongMokjeok","value","dsMaster","HWALDONG_MOKJEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtHaknyeon1","value","dsMaster","HOEWON_CNT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtHaknyeon2","value","dsMaster","HOEWON_CNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtHaknyeon3","value","dsMaster","HOEWON_CNT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtHaknyeon4","value","dsMaster","HOEWON_CNT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtChongInwon","value","dsMaster","CHONGINWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","chkSeoyakseo","value","dsMaster","SEOYAKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtSeoyakseo","value","dsMaster","SEOYAKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","chkHoewon","value","dsMaster","MYEONGDAN_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtHoewon","value","dsMaster","MYEONGDAN_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","chkHwaldong","value","dsMaster","GYEHOEKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtHwaldong","value","dsMaster","GYEHOEKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","chkJidogyosu","value","dsMaster","JIDOGYOSU_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtJidogyosu","value","dsMaster","JIDOGYOSU_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtBanryeoSayu","value","dsMaster","BANRYEO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtCheoriSangtae","value","dsMaster","SEUNGIN_SANGTAE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtJidogyosuNm","value","dsMaster","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","edtDaepyoHaksaengNm","value","dsMaster","DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtBuDaepyoHaksaengNm","value","dsMaster","BU_DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtDaepyoHaksaengHakgwa","value","dsMaster","DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtDaepyoHaksaengHpNo","value","dsMaster","DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","edtBuDaepyoHaksaengHakgwa","value","dsMaster","BU_DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtBuDaepyoHaksaengHpNo","value","dsMaster","BU_DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtJidogyosuHakgwa","value","dsMaster","JIDOGYOSU_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","calSeolibDt","value","dsMaster","SEOLIB_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtSayongGongganCd","value","dsMaster","GYOYUK_GONGGAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtSayongGongganNm","value","dsMaster","GYOYUK_GONGGAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div.form.edtYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div.form.CboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsHoewon");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110101_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110101_P01.xfdl(단체신청(팝업))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/30
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
        this.lvchkColidDs   = "DANCHE_NM$DANCHE_GBCD$DANCHE_BUNRYU_GBCD$DAEPYO_HAKBEON";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "단체명$단체구분$단체분류$대표학생학번";
        this.lvchkColidDs2   = "HAKBEON$GAIB_DT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs2 = "학번$가입일자";

        this.strKeyValue 	= "";  // 저장 후 row 유지
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

        	if(this.getOwnerFrame().sincheongNo == null)
        	{
        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.setColumn(nRow, "YYYY", this.getOwnerFrame().yyyy);
        		this.dsMaster.setColumn(nRow, "HAKGI", this.getOwnerFrame().hakgi);
        	}
        	else
        	{
        	    //처리상태값이 신청,승인,반려(02,03,04)인 경우 비활성화 처리
        		if(this.getOwnerFrame().seunginSangtae == "02" || this.getOwnerFrame().seunginSangtae == "03" || this.getOwnerFrame().seunginSangtae == "04"){
        		   this.fn_enable("false");
        		}

        		this.ds_input.setColumn(0, "DANCHE_SINCHEONG_NO", this.getOwnerFrame().sincheongNo);
        		this.ds_hoewonInput.setColumn(0, "DANCHE_SINCHEONG_NO", this.getOwnerFrame().sincheongNo);
        		this.fn_Ret();
        		this.fn_HoewonRet();
        	}

        	if(this.gfn_isUpdate(this.dsMaster))
            {
        		this.grdHoewon.set_enable(false);
        		this.btnHoewonExcel.set_enable(false);
        		this.btnHoewonAdd.set_enable(false);
        		this.btnHoewonDel.set_enable(false);
        		this.btnHoewonSave.set_enable(false);
            }
        };

        /**********************************************************************
         각 기능 활성화/비활성화 처리
        ***********************************************************************/
        this.fn_enable = function(val)
        {
            if(val == "false"){
        	        this.btnSincheong.set_enable(val);
        	        this.btnSave.set_enable(val);
        			this.btnSeoyakseoFile.set_enable(val);
        			this.btnHoewonFile.set_enable(val);
        			this.btnHwaldongFile.set_enable(val);
        			this.btnJidogyosuFile.set_enable(val);
        			this.edtDancheNm.set_enable(val);
        			this.ComboDancheGb.set_enable(val);
        			this.ComboDancheBunryu.set_enable(val);
        			this.edtJidogyosuCd.set_enable(val);
        			this.btnJidogyosu.set_enable(val);
        			this.edtDaepyoHaksaengCd.set_enable(val);
        			this.btnDaepyoHaksaeng.set_enable(val);
        			this.edtBuDaepyoHaksaengCd.set_enable(val);
        			this.btnBuDaepyoHaksaeng.set_enable(val);
        			this.chkSahoebongsa.set_enable(val);
        			this.edtHwaldongMokjeok.set_enable(val);
        			this.edtSayongGongganCd.set_enable(val);
        			this.btnSayongGonggan.set_enable(val);
        			this.calSeolibDt.set_enable(val);
        			this.edtHaknyeon1.set_enable(val);
        			this.edtHaknyeon2.set_enable(val);
        			this.edtHaknyeon3.set_enable(val);
        			this.edtHaknyeon4.set_enable(val);
        			this.chkSeoyakseo.set_enable(val);
        			this.chkHoewon.set_enable(val);
        			this.chkHwaldong.set_enable(val);
        			this.chkJidogyosu.set_enable(val);
        			this.edtJidogyosuNm.set_enable(val);
        			this.edtDaepyoHaksaengNm.set_enable(val);
        			this.edtBuDaepyoHaksaengNm.set_enable(val);

        			this.grdHoewon.set_enable(false);
        			this.btnHoewonAdd.set_enable(false);
        			this.btnHoewonDel.set_enable(false);
        			this.btnHoewonSave.set_enable(val);
        	}
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsDancheGbcd|dsDancheBunryuGbcd|dsHakgi|dsHakjeokSangtae|dsJikcheak";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80301|80302|00022|00004|80303";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdHoewon);
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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
        			case "HoewonRet":
                            this.fn_PostHoewonRet();
                        break;
                    case "HoewonSave":
                            this.fn_PostHoewonSave();
                        break;
                    case "HoewonNew":
                            this.fn_PostHoewonNew();
                        break;
                    case "HoewonDel":
                            this.fn_PostHoewonDel();
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
        		case "Daepyo" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HAKBEON",   sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_NM",        sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HAKGWA",    sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HP_NO",     sRtn[3]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		case "BuDaepyo" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HAKBEON",  sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_NM",       sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HAKGWA",   sRtn[2]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HP_NO",    sRtn[3]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        			case "hakbeon" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					if ( this.dsHoewon.findRow("HAKBEON", sRtn[0]) >= 0 ) {

        						this.gfn_alert("이미 신청한 학번입니다.","신청정보","","warning");

        						this.dsHoewon.set_enableevent(false);
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",            "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM",        "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "GAIB_HAKNYEON",      "");
        						this.dsHoewon.set_enableevent(true);

        					} else {
        						this.dsHoewon.set_enableevent(false);
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",            sRtn[0]);
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM",        sRtn[1]);
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", sRtn[5]);
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "GAIB_HAKNYEON",      sRtn[4]);
        						this.dsHoewon.set_enableevent(true);
        					}
        				}
        			break;
        			case "Jidogyosu" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_SAWON_NO", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_NM",       sRtn[1]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_DEPT",     sRtn[2]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        			case "gonggan" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOYUK_GONGGAN_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOYUK_GONGGAN_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;

        			//서약서
        			case "seoyakseoFileUpload" :
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "S")
        					{
        						// 첨부파일번호가 바뀌면 저장한다.
        						if (this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO") != sRtn[1])
        						{
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NM", sRtn[2]);

        							this.dsMaster.setColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO_BKUP", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NM_BKUP", sRtn[2]);

        							// 첨부파일번호 업데이트
        							this.ds_input1.clearData(); this.ds_input1.addRow();
        							this.ds_input1.setColumn(0, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));
        							this.ds_input1.setColumn(0, "SEOYAKSEO_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO"));
        							this.ds_input1.setColumn(0, "SEOYAKSEO_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_JECHUL_YN"));

        							var strSvc      = "Save02";
        							var strUrl      = "/prj/UD/UD01/Save02_2110101_P01.do";
        							var strInDs     = "ds_input1=ds_input1:a";
        							var strOutDs    = "";
        							var strArg      = "";

        							var GBV_MENUID    = objApp.gv_cutPrgId;
        							if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        							{
        							  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        							}

        							var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        							var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        							this.gfn_Transaction(strSvc
        											   , strUrl
        											   , strInDs
        											   , strOutDs
        											   , strArg
        											   , strCallBack
        											   , strASync);
        						}
        					} // "S"
        				}
        				break;

        			//회원명단
        			case "hoewonFileUpload" :
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "S")
        					{
        						// 첨부파일번호가 바뀌면 저장한다.
        						if (this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO") != sRtn[1])
        						{
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NM", sRtn[2]);

        							this.dsMaster.setColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO_BKUP", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NM_BKUP", sRtn[2]);

        							// 첨부파일번호 업데이트
        							this.ds_input1.clearData();  this.ds_input1.addRow();
        							this.ds_input1.setColumn(0, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));
        							this.ds_input1.setColumn(0, "MYEONGDAN_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO"));
        							this.ds_input1.setColumn(0, "MYEONGDAN_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_JECHUL_YN"));

        							var strSvc      = "Save02";
        							var strUrl      = "/prj/UD/UD01/Save02_2110101_P01.do";
        							var strInDs     = "ds_input1=ds_input1:a";
        							var strOutDs    = "";
        							var strArg      = "";

        							var GBV_MENUID    = objApp.gv_cutPrgId;
        							if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        							{
        							  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        							}

        							var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        							var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        							this.gfn_Transaction(strSvc
        											   , strUrl
        											   , strInDs
        											   , strOutDs
        											   , strArg
        											   , strCallBack
        											   , strASync);
        						}
        					} // "S"
        				}
        				break;

        			//활동계획
        			case "hwaldongFileUpload" :
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "S")
        					{
        						// 첨부파일번호가 바뀌면 저장한다.
        						if (this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO") != sRtn[1])
        						{
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NM", sRtn[2]);

        							this.dsMaster.setColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO_BKUP", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NM_BKUP", sRtn[2]);

        							// 첨부파일번호 업데이트
        							this.ds_input1.clearData();  this.ds_input1.addRow();
        							this.ds_input1.setColumn(0, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));
        							this.ds_input1.setColumn(0, "GYEHOEKSEO_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO"));
        							this.ds_input1.setColumn(0, "GYEHOEKSEO_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_JECHUL_YN"));

        							var strSvc      = "Save02";
        							var strUrl      = "/prj/UD/UD01/Save02_2110101_P01.do";
        							var strInDs     = "ds_input1=ds_input1:a";
        							var strOutDs    = "";
        							var strArg      = "";

        							var GBV_MENUID    = objApp.gv_cutPrgId;
        							if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        							{
        							  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        							}

        							var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        							var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        							this.gfn_Transaction(strSvc
        											   , strUrl
        											   , strInDs
        											   , strOutDs
        											   , strArg
        											   , strCallBack
        											   , strASync);
        						}
        					} // "S"
        				}
        				break;

        			//지도교수소견
        			case "jidogyosuFileUpload" :
        				if(!this.gfn_isNull(strVal))
        				{
        					//일반
        					var sRtn = strVal.split(",");
        					if(sRtn[0] == "S")
        					{
        						// 첨부파일번호가 바뀌면 저장한다.
        						if (this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO") != sRtn[1])
        						{
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NM", sRtn[2]);

        							this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO_BKUP", sRtn[1]);
        							this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NM_BKUP", sRtn[2]);

        							// 첨부파일번호 업데이트
        							this.ds_input1.clearData();  this.ds_input1.addRow();
        							this.ds_input1.setColumn(0, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));
        							this.ds_input1.setColumn(0, "JIDOGYOSU_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO"));
        							this.ds_input1.setColumn(0, "JIDOGYOSU_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_JECHUL_YN"));

        							var strSvc      = "Save02";
        							var strUrl      = "/prj/UD/UD01/Save02_2110101_P01.do";
        							var strInDs     = "ds_input1=ds_input1:a";
        							var strOutDs    = "";
        							var strArg      = "";

        							var GBV_MENUID    = objApp.gv_cutPrgId;
        							if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        							{
        							  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        							}

        							var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        							var strASync    = false;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        							this.gfn_Transaction(strSvc
        											   , strUrl
        											   , strInDs
        											   , strOutDs
        											   , strArg
        											   , strCallBack
        											   , strASync);
        						}
        					} // "S"
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
        				this.fn_HoewonRet();
                    break;s
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UD/UD01/Retrieve_2110101_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
                05-1. 회원 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HoewonRet = function()
        {
            var strSvc      = "HoewonRet";
            var strUrl      = "/prj/UD/UD01/hoewonRetrieve_2110101_P01.do";
            var strInDs     = "ds_hoewonInput=ds_hoewonInput";
            var strOutDs    = "dsHoewon=dsHoewon";
            var strArg      = "";
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
        this.fn_PostHoewonRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsHoewon);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsMaster.setColumn(nRow,"SEUNGIN_SANGTAE", "02");  //신청상태
        };

        /**********************************************************************
                06-1. 회원 추가 함수 선언
        ***********************************************************************/
        this.btnHoewonAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsMaster.rowposition;
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "02")
        	{
        		this.gfn_alert("이미 신청한 항목입니다.","신청정보","","warning");
                return false;
        	}
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "03")
        	{
        		this.gfn_alert("이미 승인된 항목입니다.","신청정보","","warning");
                return false;
        	}

        	this.fn_HoewonNew();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_HoewonNew = function()
        {
            var nRow = this.dsHoewon.addRow();
            this.dsHoewon.setColumn(nRow,"CHK",     "0");
            this.dsHoewon.setColumn(nRow,"DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));
        	this.dsHoewon.setColumn(nRow,"YYYY",                this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY"));
        	this.dsHoewon.setColumn(nRow,"HAKGI",               this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGI"));

        	this.grdHoewon.setFocus();
        	this.grdHoewon.setCellPos(2);
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostHoewonNew = function()
        {
        	this.gfn_getRowCount(this.stRowCnt,this.dsHoewon);
        };

        /**********************************************************************
                07. 회원 삭제 함수 선언
        ***********************************************************************/
        this.btnHoewonDel_onclick = function(obj,e)
        {
            //멀티삭제용도
            if(this.dsHoewon.rowcount < 1 || this.dsHoewon.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsHoewon.set_enableevent(false);
            for(var i=this.dsHoewon.rowcount-1;i>-1;i--)
            {
                if(this.dsHoewon.getColumn(i,"CHK") == "1" || this.dsHoewon.getRowType(i) == 2)
                {
                    this.dsHoewon.deleteRow(i);
                }
            }
            this.dsHoewon.set_enableevent(true);

        	this.fn_HoewonDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_HoewonDel = function()
        {
            var strSvc      = "HoewonDel";
            var strUrl      = "/prj/UD/UD01/hoewonDelete_2110101_P01.do";
            var strInDs     = "dsHoewon=dsHoewon:u";
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

        this.fn_PostHoewonDel = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsHoewon);
        };

        /**********************************************************************
                08. 신청 함수 선언
        ***********************************************************************/
        this.btnSincheong_onclick = function(obj,e)
        {
        	var nRow = this.dsMaster.rowposition;

        	if(this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("먼저 저장해주세요.","저장정보","","question");
                return false;
            }

        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "02")
        	{
        		this.gfn_alert("이미 신청한 항목입니다.","신청정보","","warning");
                return false;
        	}
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "03")
        	{
        		this.gfn_alert("이미 승인된 항목입니다.","신청정보","","warning");
                return false;
        	}

        	var result = this.gfn_confirm( "현재 선택행을 신청하시겠습니까?", "신청정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	this.dsMaster.setColumn(nRow, "SEUNGIN_SANGTAE", "02");
        	this.dsMaster.setColumn(nRow, "SINCHEONG_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));

        	this.fn_Sincheong();
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Sincheong = function()
        {
        	var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110101_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
                09. 저장 함수 선언
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	this.fn_Save();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110101_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        	if (!this.gfn_isNull(this.strKeyValue)) {
        		var nRow = this.dsMaster.findRow("DANCHE_SINCHEONG_NO", this.strKeyValue);
        		this.dsMaster.set_rowposition(nRow);
        		this.strKeyValue = "";
        	}

            // 신청, 승인, 반려
        	if (this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_SANGTAE") == "02" ||
        	    this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_SANGTAE") == "03" ||
        		this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGIN_SANGTAE") == "04")
        	{
        		this.fn_enable("false");
        	}
        	else
        	{
        		this.grdHoewon.set_enable(true);
        		this.btnHoewonExcel.set_enable(true);
        		this.btnHoewonAdd.set_enable(true);
        		this.btnHoewonDel.set_enable(true);
        		this.btnHoewonSave.set_enable(true);
        	}
        };

        /**********************************************************************
                09-1. 회원 저장 함수 선언
        ***********************************************************************/
        this.btnHoewonSave_onclick = function(obj,e)
        {
        	for(var i=0; i<this.dsHoewon.rowcount; i++)
        	{
        		this.dsHoewon.setColumn(i, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"))
        	}

            if(this.dsHoewon.rowcount > 0)
            {
                for(var i=0;i<this.dsHoewon.rowcount; i++)
                {
                    if(this.dsHoewon.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsHoewon.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsHoewon))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsHoewon, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdHoewon, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsHoewon.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.ds_hoewonInput.setColumn(this.ds_hoewonInput.rowposition, "DANCHE_SINCHEONG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO"));

        	this.fn_HoewonSave();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HoewonSave = function()
        {
            var strSvc      = "HoewonSave";
            var strUrl      = "/prj/UD/UD01/hoewonSave_2110101_P01.do";
            var strInDs     = "ds_hoewonInput=ds_hoewonInput:a ";
                strInDs    += "dsHoewon=dsHoewon:u";
            var strOutDs    = "dsHoewon=dsHoewon";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        this.fn_PostHoewonSave = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsHoewon);
        };

        /**********************************************************************
                10. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnHoewonExcel_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.dsHoewon.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdHoewon, "신청 단체 회원 목록","신청 단체 회원 목록");

        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdHoewon_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdHoewon.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };
        /**
         *      그리드멀티 소트정열
         */
        this.grdHoewon_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdHoewon.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 닫기버튼 클릭
        this.div_btnClose_onclick = function(obj,e)
        {
        	if (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsHoewon))
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == false)
        		{
        			return false;
        		}
        	}

        	var strDancheSincheongNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO");
        	this.close("CLOSE," + strDancheSincheongNo);
        };
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.grdHoewon_onexpandup = function(obj,e)
        {
        	var sValue = "";

        	if(e.cell == this.grdHoewon.getBindCellIndex("body","HAKSAENG_NM"))
        	{
        		sValue = this.gfn_trim(this.dsHoewon.getColumn(this.dsHoewon.rowposition,"HAKSAENG_NM"));

        		this.fn_setCallHakbeonPopup(obj.name, sValue);
        	}
        };

        // 지도교수 팝업
        this.btnJidogyosu_onclick = function(obj,e)
        {
        	var sabeonNm = this.edtJidogyosuNm.value;

        	this.fn_setCallJidogyosuPopup(sabeonNm);
        };

        // 학생 팝업
        this.btnDaepyoHaksaeng_onclick = function(obj,e)
        {
        	var hakbeonNm = this.edtDaepyoHaksaengNm.value;
        	this.fn_setCallHakbeonPopup("DAEPYO_NM", hakbeonNm);
        };

        // 학생 팝업
        this.btnBuDaepyoHaksaeng_onclick = function(obj,e)
        {
        	var hakbeonNm = this.edtBuDaepyoHaksaengNm.value;
        	this.fn_setCallHakbeonPopup("BU_DAEPYO_NM", hakbeonNm);
        };

        // 사용공간 팝업
        this.btnSayongGonggan_onclick = function(obj,e)
        {
        	var gongganCdNm = this.edtSayongGongganNm.value;
        	this.fn_setCallSayongGongganPopup(gongganCdNm);
        };

        /**********************************************************************
                13. 파일첨부
        ***********************************************************************/
        this.btnSeoyakseoFile_onclick = function(obj,e)
        {
        	if (this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_JECHUL_YN") == "1")
        	{
        		this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO"));
        	}
        };

        this.btnHwaldongFile_onclick = function(obj,e)
        {
        	if (this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_JECHUL_YN") == "1")
        	{
        		this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO"));
        	}
        };

        this.btnHoewonFile_onclick = function(obj,e)
        {
        	if (this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_JECHUL_YN") == "1")
        	{
        		this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO"));
        	}
        };

        this.btnJidogyosuFile_onclick = function(obj,e)
        {
        	if (this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_JECHUL_YN") == "1")
        	{
        		this.fn_setCallAttFilePopup(obj.name, this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO"));
        	}
        };

        //
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "JIDOGYOSU_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "JIDOGYOSU_SAWON_NO", "");
        		   obj.setColumn(obj.rowposition, "JIDOGYOSU_DEPT", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallJidogyosuPopup(e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "DAEPYO_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DAEPYO_HAKBEON", "");
        		   obj.setColumn(obj.rowposition, "DAEPYO_HAKGWA", "");
        		   obj.setColumn(obj.rowposition, "DAEPYO_HP_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "BU_DAEPYO_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "BU_DAEPYO_HAKBEON", "");
        		   obj.setColumn(obj.rowposition, "BU_DAEPYO_HAKGWA", "");
        		   obj.setColumn(obj.rowposition, "BU_DAEPYO_HP_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(e.columnid, e.newvalue);
        			}
        	   }
        	}
        	else if (e.columnid == "GYOYUK_GONGGAN_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "GYOYUK_GONGGAN_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallSayongGongganPopup(e.newvalue);
        			}
        	   }
        	}
        	// 서약서제출여부
        	else if (e.columnid == "SEOYAKSEO_JECHUL_YN") {
        		if (obj.getColumn(obj.rowposition, "SEOYAKSEO_JECHUL_YN") == "1")
        		{
        			obj.setColumn(obj.rowposition, "SEOYAKSEO_FILE_NO", obj.getColumn(obj.rowposition, "SEOYAKSEO_FILE_NO_BKUP"));
        			obj.setColumn(obj.rowposition, "SEOYAKSEO_FILE_NM", obj.getColumn(obj.rowposition, "SEOYAKSEO_FILE_NM_BKUP"));
        		}
        		else
        		{
        			obj.setColumn(obj.rowposition, "SEOYAKSEO_FILE_NO", "");
        			obj.setColumn(obj.rowposition, "SEOYAKSEO_FILE_NM", "");
        		}
        	}
        	// 명단제출여부
        	else if (e.columnid == "MYEONGDAN_JECHUL_YN") {
        		if (obj.getColumn(obj.rowposition, "MYEONGDAN_JECHUL_YN") == "1")
        		{
        			obj.setColumn(obj.rowposition, "MYEONGDAN_FILE_NO", obj.getColumn(obj.rowposition, "MYEONGDAN_FILE_NO_BKUP"));
        			obj.setColumn(obj.rowposition, "MYEONGDAN_FILE_NM", obj.getColumn(obj.rowposition, "MYEONGDAN_FILE_NM_BKUP"));
        		}
        		else
        		{
        			obj.setColumn(obj.rowposition, "MYEONGDAN_FILE_NO", "");
        			obj.setColumn(obj.rowposition, "MYEONGDAN_FILE_NM", "");
        		}
        	}
        	// 지도교수제출여부
        	else if (e.columnid == "JIDOGYOSU_JECHUL_YN") {
        		if (obj.getColumn(obj.rowposition, "JIDOGYOSU_JECHUL_YN") == "1")
        		{
        			obj.setColumn(obj.rowposition, "JIDOGYOSU_FILE_NO", obj.getColumn(obj.rowposition, "JIDOGYOSU_FILE_NO_BKUP"));
        			obj.setColumn(obj.rowposition, "JIDOGYOSU_FILE_NM", obj.getColumn(obj.rowposition, "JIDOGYOSU_FILE_NM_BKUP"));
        		}
        		else
        		{
        			obj.setColumn(obj.rowposition, "JIDOGYOSU_FILE_NO", "");
        			obj.setColumn(obj.rowposition, "JIDOGYOSU_FILE_NM", "");
        		}
        	}
        	// 계획서제출여부
        	else if (e.columnid == "GYEHOEKSEO_JECHUL_YN") {
        		if (obj.getColumn(obj.rowposition, "GYEHOEKSEO_JECHUL_YN") == "1")
        		{
        			obj.setColumn(obj.rowposition, "GYEHOEKSEO_FILE_NO", obj.getColumn(obj.rowposition, "GYEHOEKSEO_FILE_NO_BKUP"));
        			obj.setColumn(obj.rowposition, "GYEHOEKSEO_FILE_NM", obj.getColumn(obj.rowposition, "GYEHOEKSEO_FILE_NM_BKUP"));
        		}
        		else
        		{
        			obj.setColumn(obj.rowposition, "GYEHOEKSEO_FILE_NO", "");
        			obj.setColumn(obj.rowposition, "GYEHOEKSEO_FILE_NM", "");
        		}
        	}


        };

        this.dsHoewon_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        		   obj.setColumn(obj.rowposition, "HAKJEOK_SANGTAE_NM", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup("grdHoewon", e.newvalue);
        			}
        	   }
        	}
        };

        // 지도교수 Popup
        this.fn_setCallJidogyosuPopup = function(strSearchValue)
        {
        	this.dsSawon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "SABEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchSawon";
        		var strUrl      = "/prj/com/Retrieve_P02.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsSawon=dsMaster";
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

        	if(this.dsSawon.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_SAWON_NO", this.dsSawon.getColumn(0,"SABEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_NM",       this.dsSawon.getColumn(0,"SEONGMYEONG"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_DEPT",     this.dsSawon.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {sabeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Jidogyosu","com::COMM_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };


        // 학번 popup
        this.fn_setCallHakbeonPopup = function(strObjName, strSearchValue)
        {
        	this.dsHakbeon.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchHakbeon";
        		var strUrl 		= "/prj/com/Retrieve_P04.do";
        		var strInDs  	= "ds_input=ds_sincheongInput";
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
        		switch (strObjName)
        		{
        			case "grdHoewon":
        					if ( this.dsHoewon.findRow("HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON")) >= 0 ) {
        						this.gfn_alert("이미 신청한 학번입니다.","신청정보","","warning");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",     "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM", "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "GAIB_HAKNYEON", "");
        						return;
        					} else {
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",            this.dsHakbeon.getColumn(0,"HAKBEON"));
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM",        this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", this.dsHakbeon.getColumn(0,"HAKJEOK_SANGTAE_NM"));
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "GAIB_HAKNYEON",      this.dsHakbeon.getColumn(0,"HAKNYEON"));
        					}
        					break;
        			case "DAEPYO_NM":
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HAKBEON",   this.dsHakbeon.getColumn(0,"HAKBEON"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_NM",        this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HAKGWA",    this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "DAEPYO_HP_NO",     this.dsHakbeon.getColumn(0,"HP_NO"));
        					break;
        			case "BU_DAEPYO_NM":
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HAKBEON",  this.dsHakbeon.getColumn(0,"HAKBEON"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_NM",       this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HAKGWA",   this.dsHakbeon.getColumn(0,"HAKGWA_NM"));
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "BU_DAEPYO_HP_NO",    this.dsHakbeon.getColumn(0,"HP_NO"));
        					break;
        		}
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		switch (strObjName)
        		{
        			case "grdHoewon":
        					this.gfn_openPopup( "hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        					break;
        			case "DAEPYO_NM":
        					this.gfn_openPopup( "Daepyo","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        					break;
        			case "BU_DAEPYO_NM":
        					this.gfn_openPopup( "BuDaepyo","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        					break;
        		}
        	}
        }

        //
        this.fn_setCallSayongGongganPopup = function(strSearchValue)
        {
        	this.dsHosil.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HOSIL_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc      = "SearchHosil";
        		var strUrl      = "/prj/com/Retrieve_P08.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsHosil=dsMaster";
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

        	if(this.dsHosil.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOYUK_GONGGAN_CD", this.dsHosil.getColumn(0,"HOSIL_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "GYOYUK_GONGGAN_NM", this.dsHosil.getColumn(0,"HOSIL_NM"));
        	} else
        	{
        		var oArg = {gongganCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "gonggan","com::COMM_P08.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }


        /**********************************************************************
                14. 첨부파일
        ***********************************************************************/
        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (this.dsMaster.rowcount > 0) {
        		var nRow = this.dsMaster.rowposition;

        		if (this.dsMaster.getRowType(nRow) == Dataset.ROWTYPE_INSERT) {
        			this.gfn_alert("저장 후 첨부파일 사용 가능합니다.","저장정보","","information");
        		} else {

        			var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        			this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", strAttFileNo);

        			var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        			var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        			var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        			var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        			var lv_sValue02 		= "1";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        			var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        			var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        			var lv_sValue05 		= "univ_UD";				// 부모에서 넘어가는 파라미터(도메인네임)
        			var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        			var sPopId = "";
                    switch (strObj)
        			{
        				case "btnSeoyakseoFile":
        						sPopId = "seoyakseoFileUpload";
        						break;
        				case "btnHoewonFile":
        						sPopId = "hoewonFileUpload";
        						break;
        				case "btnHwaldongFile":
        						sPopId = "hwaldongFileUpload";
        						break;
        				case "btnJidogyosuFile":
        						sPopId = "jidogyosuFileUpload";
        						break;
        				default:
        						return false;
        			}

        			var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        			var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        								  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        								  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        								  , pv_sVal01:lv_sValue01      	// 파라미터1
        								  , pv_sVal02:lv_sValue02       // 파라미터2
        								  , pv_sVal03:lv_sValue03       // 파라미터3
        								  , pv_sVal04:lv_sValue04       // 파라미터4
        								  , pv_sVal05:lv_sValue05       // 파라미터5
        								  , pv_sVal06:lv_sValue06};     // 파라미터6
        			var sPopupCallBack 	= "fn_popupCallback";
        			var oOption 		= {};

        			this.dsDummy.clearData();
        			this.gfn_openPopup( sPopId
        							  , sUrl
        							  , oArg
        							  , sPopupCallBack
        							  , oOption);

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdHoewon.addEventHandler("onheaddblclick",this.grdHoewon_onheaddblclick,this);
            this.grdHoewon.addEventHandler("onheadclick",this.grdHoewon_onheadclick,this);
            this.grdHoewon.addEventHandler("onexpandup",this.grdHoewon_onexpandup,this);
            this.div.form.btnClose.addEventHandler("onclick",this.div_btnClose_onclick,this);
            this.btnSeoyakseoFile.addEventHandler("onclick",this.btnSeoyakseoFile_onclick,this);
            this.btnHoewonFile.addEventHandler("onclick",this.btnHoewonFile_onclick,this);
            this.btnHwaldongFile.addEventHandler("onclick",this.btnHwaldongFile_onclick,this);
            this.btnJidogyosuFile.addEventHandler("onclick",this.btnJidogyosuFile_onclick,this);
            this.btnSincheong.addEventHandler("onclick",this.btnSincheong_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnHoewonExcel.addEventHandler("onclick",this.btnHoewonExcel_onclick,this);
            this.btnHoewonAdd.addEventHandler("onclick",this.btnHoewonAdd_onclick,this);
            this.btnHoewonDel.addEventHandler("onclick",this.btnHoewonDel_onclick,this);
            this.btnHoewonSave.addEventHandler("onclick",this.btnHoewonSave_onclick,this);
            this.btnJidogyosu.addEventHandler("onclick",this.btnJidogyosu_onclick,this);
            this.btnDaepyoHaksaeng.addEventHandler("onclick",this.btnDaepyoHaksaeng_onclick,this);
            this.btnBuDaepyoHaksaeng.addEventHandler("onclick",this.btnBuDaepyoHaksaeng_onclick,this);
            this.calSeolibDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.btnSayongGonggan.addEventHandler("onclick",this.btnSayongGonggan_onclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsHoewon.addEventHandler("oncolumnchanged",this.dsHoewon_oncolumnchanged,this);
        };
        this.loadIncludeScript("UD01_2110101_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
