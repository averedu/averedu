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
            this.set_titletext("이력서");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsIryeokseo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GUNPIL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JONGGYO_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"GYEOLHON_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CWIMI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"TEUKGI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BOHUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJANG_GWAJEONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEONGGYEOK_TEUKGISAHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GIWON_DONGGI_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"IBSA_HU_POBU_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"JONGGYO_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJonggyo", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakryeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKRYEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HAKGYO_NM\" type=\"STRING\" size=\"200\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"200\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IBHAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JOLUB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"JOLUB_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJolub", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOegukeo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"OEGUKEO_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JUMSU_DEUNGGEUB_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CWIDEUK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"BALGEUB_NO\" type=\"STRING\" size=\"8\"/><Column id=\"BALGEUBCHEO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakryeokGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOegukeoGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGajokGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAGYEOKJEUNG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JUMSU_DEUNGGEUB_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CWIDEUK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"BALGEUB_NO\" type=\"STRING\" size=\"20\"/><Column id=\"BALGEUBCHEO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSusangGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSusang", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSANG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DAEHOE_NM\" type=\"STRING\" size=\"200\"/><Column id=\"SUSANG_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHOE_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SUSANG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SANGJANG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUBCHEO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGajok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANGYE_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GAJOK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"YEONRYEONG\" type=\"STRING\" size=\"3\"/><Column id=\"JIKUB_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEUMMUCHEO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HAKRYEOK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwakin", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GUNPIL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JONGGYO_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"GYEOLHON_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CWIMI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"TEUKGI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BOHUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJANG_GWAJEONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEONGGYEOK_TEUKGISAHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GIWON_DONGGI_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"IBSA_HU_POBU_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hwakinInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokGibon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"50\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"GYOGWA_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"GYOWON_JAGYEOK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"300\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PWD\" type=\"STRING\" size=\"300\"/><Column id=\"PWD_1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"200\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"300\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_GIJUN_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"JOLEOP_HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_HAKGWA_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"20\"/><Column id=\"BUNBAN_BYEONGYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN_BYEONGYEONG_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_HAKGI_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06_00_00_00","161","122",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","10","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("이력서");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","161","38",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","161","38","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","248","41","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","10","38","142","196",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","488","41","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","402","38","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","644","38","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","161","66",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","161","66","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("성명(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEnm","248","69","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCnm","488","69","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","402","66","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("성명(한자)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","644","66","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","729","69","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","161","94",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","161","94","82","56",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","248","97","391","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","644","94","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","729","97","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","248","125","391","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","161","150",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","161","150","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","248","153","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhoneNo","488","153","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02","402","150","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("휴대폰번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","644","150","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("군필여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_02","161","178",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_03","161","178","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","248","181","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_03","402","178","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("종교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_02","644","178","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_03","161","206",null,"28","10",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_04","161","206","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("취미");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChwimi","248","209","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTeukgi","488","209","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_04","402","206","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("특기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_03","644","206","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("보훈여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","10","241",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Hakryeok",this.tab);
            obj.set_text("학력사항");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdHakryeok","10","35",null,null,"10","10",null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHakryeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"124\"/><Column size=\"164\"/><Column size=\"146\"/><Column size=\"84\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"95\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"학력구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"학교명\" cssclass=\"point\"/><Cell col=\"3\" text=\"전공명\" cssclass=\"point\"/><Cell col=\"4\" text=\"평균평점\" cssclass=\"point\"/><Cell col=\"5\" text=\"입학일자\"/><Cell col=\"6\" text=\"졸업일자\"/><Cell col=\"7\" text=\"졸업구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:HAKRYEOK_GBCD\" editmaxlength=\"8\" combodataset=\"dsHakryeokGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:HAKGYO_NM\" editmaxlength=\"66\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JEONGONG_NM\" editmaxlength=\"66\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" textAlign=\"right\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"5\" editinputtype=\"number\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:IBHAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:JOLUB_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:JOLUB_GBCD\" editmaxlength=\"8\" combodataset=\"dsJolub\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("3");
            obj.set_text("학력사항");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Button("btnDel","824","6","46","22",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Button("btnAdd","776","6","46","22",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt","89","10","116","24",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Hakryeok.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Hakryeok.addChild(obj.name, obj);

            obj = new Tabpage("Oegukeo",this.tab);
            obj.set_text("외국어능력");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdOegukeo","10","35",null,null,"10","10",null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsOegukeo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"124\"/><Column size=\"164\"/><Column size=\"146\"/><Column size=\"182\"/><Column size=\"179\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"외국어구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"취득일자\"/><Cell col=\"3\" text=\"점수등급\" cssclass=\"point\"/><Cell col=\"4\" text=\"발급번호\"/><Cell col=\"5\" text=\"발급처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:OEGUKEO_GBCD\" editmaxlength=\"8\" combodataset=\"dsOegukeoGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:CWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JUMSU_DEUNGGEUB_NM\" editmaxlength=\"33\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUB_NO\" editmaxlength=\"8\" editinputtype=\"number,sign\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUBCHEO_NM\" editmaxlength=\"33\"/></Band></Format></Formats>");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("3");
            obj.set_text("외국어능력");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Button("btnDel","824","6","46","22",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Button("btnAdd","776","6","46","22",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","101","10","116","24",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Oegukeo.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Oegukeo.addChild(obj.name, obj);

            obj = new Tabpage("Jagyeokjeung",this.tab);
            obj.set_text("자격증");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJagyeok","10","35",null,null,"10","10",null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJagyeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"124\"/><Column size=\"164\"/><Column size=\"146\"/><Column size=\"182\"/><Column size=\"179\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"자격증구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"취득일자\"/><Cell col=\"3\" text=\"점수등급\" cssclass=\"point\"/><Cell col=\"4\" text=\"발급번호\"/><Cell col=\"5\" text=\"발급처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:JAGYEOKJEUNG_GBCD\" editmaxlength=\"8\" combodataset=\"dsJagyeokGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:CWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JUMSU_DEUNGGEUB_NM\" editmaxlength=\"33\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUB_NO\" editmaxlength=\"20\" editinputtype=\"number,sign\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUBCHEO_NM\" editmaxlength=\"33\"/></Band></Format></Formats>");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("3");
            obj.set_text("자격증");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Button("btnDel","824","6","46","22",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Button("btnAdd","776","6","46","22",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("stRowCnt3","77","10","116","24",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Jagyeokjeung.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Jagyeokjeung.addChild(obj.name, obj);

            obj = new Tabpage("Susang",this.tab);
            obj.set_text("수상내역");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdSusang","10","35",null,null,"10","10",null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsSusang");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"152\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"126\"/><Column size=\"144\"/><Column size=\"118\"/><Column size=\"129\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"대회명\" cssclass=\"point\"/><Cell col=\"2\" text=\"대회시작일자\"/><Cell col=\"3\" text=\"종료(수상)일자\"/><Cell col=\"4\" text=\"수상구분\" cssclass=\"point\"/><Cell col=\"5\" text=\"수상명\" cssclass=\"point\"/><Cell col=\"6\" text=\"상장 및 부상\"/><Cell col=\"7\" text=\"발급처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:DAEHOE_NM\" editmaxlength=\"66\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:DAEHOE_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" textAlign=\"center\" text=\"bind:SUSANG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:SUSANG_GBCD\" editmaxlength=\"8\" combodataset=\"dsSusangGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:SUSANG_NM\" editmaxlength=\"66\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:SANGJANG_NM\" editmaxlength=\"33\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUBCHEO_NM\" editmaxlength=\"33\"/></Band></Format></Formats>");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("3");
            obj.set_text("수상내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Button("btnDel","824","6","46","22",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Button("btnAdd","776","6","46","22",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("stRowCnt4","97","10","116","24",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Susang.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Susang.addChild(obj.name, obj);

            obj = new Tabpage("Gajok",this.tab);
            obj.set_text("가족사항");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdGajok","10","35",null,null,"10","10",null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsGajok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"152\"/><Column size=\"138\"/><Column size=\"119\"/><Column size=\"143\"/><Column size=\"144\"/><Column size=\"98\"/><Column size=\"113\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"관계구분\" cssclass=\"point\"/><Cell col=\"2\" text=\"성명\" cssclass=\"point\"/><Cell col=\"3\" text=\"연령\"/><Cell col=\"4\" text=\"직업\"/><Cell col=\"5\" text=\"근무처\"/><Cell col=\"6\" text=\"직위\"/><Cell col=\"7\" text=\"학력\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:GWANGYE_GBCD\" editmaxlength=\"10\" combodataset=\"dsGajokGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:GAJOK_NM\" editmaxlength=\"16\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:YEONRYEONG\" editmaxlength=\"3\" editinputtype=\"number\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JIKUB_NM\" editmaxlength=\"33\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:GEUMMUCHEO_NM\" editmaxlength=\"33\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JIKWI_NM\" editmaxlength=\"33\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:HAKRYEOK_NM\" editmaxlength=\"33\"/></Band></Format></Formats>");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("3");
            obj.set_text("가족사항");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Button("btnDel","824","6","46","22",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Button("btnAdd","776","6","46","22",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("stRowCnt5","97","10","116","24",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Gajok.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Gajok.addChild(obj.name, obj);

            obj = new Tabpage("Seongjang",this.tab);
            obj.set_text("성장과정");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("1");
            obj.set_text("성장과정");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new TextArea("TextAreaSeongjang","10","35",null,null,"10","10",null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Seongjang.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjang.addChild(obj.name, obj);

            obj = new Tabpage("Seonggyeok",this.tab);
            obj.set_text("성격 및 특기사항");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("1");
            obj.set_text("성격 및 특기사항");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new TextArea("TextAreaSeonggyeok","10","35",null,null,"10","10",null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Seonggyeok.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seonggyeok.addChild(obj.name, obj);

            obj = new Tabpage("Giwon",this.tab);
            obj.set_text("지원동기");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("1");
            obj.set_text("지원동기");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new TextArea("TextAreaGiwon","10","35",null,null,"10","10",null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Giwon.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Giwon.addChild(obj.name, obj);

            obj = new Tabpage("Ipsa",this.tab);
            obj.set_text("입사 후 포부");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","11","140","22",null,null,null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("1");
            obj.set_text("입사 후 포부");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new TextArea("TextAreaIpsa","10","35",null,null,"10","10",null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("0");
            obj.set_maxlength("1333");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","367",null,null,null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Static("Static01","360","0","100","35",null,null,null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","860","8",null,null,null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,null,"10","367","0","53",null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","408","860",null,null,"0",null,null,null,null,this.tab.Ipsa.form);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Ipsa.addChild(obj.name, obj);

            obj = new Radio("RadioGender","729","41","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var RadioGender_innerdataset = new nexacro.NormalDataset("RadioGender_innerdataset", obj);
            RadioGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(RadioGender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioGunpil","729","153","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var RadioGunpil_innerdataset = new nexacro.NormalDataset("RadioGunpil_innerdataset", obj);
            RadioGunpil_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RadioGunpil_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioGyeolhon","729","181","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var RadioGyeolhon_innerdataset = new nexacro.NormalDataset("RadioGyeolhon_innerdataset", obj);
            RadioGyeolhon_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RadioGyeolhon_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioBohun","729","209","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var RadioBohun_innerdataset = new nexacro.NormalDataset("RadioBohun_innerdataset", obj);
            RadioBohun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RadioBohun_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","797","10","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJonggyo","488","181","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("dsJonggyo");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("승인상태");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","845","10","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","644","122","82","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJagseongDt","729","125","151","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","0","890","10",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","890","0","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHakbeon","value","dsIryeokseo","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtNm","value","dsIryeokseo","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtEnm","value","dsIryeokseo","HAKSAENG_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCnm","value","dsIryeokseo","HAKSAENG_CNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calBirthday","value","dsIryeokseo","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtAddr1","value","dsIryeokseo","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtAddr2","value","dsIryeokseo","ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtPostNo","value","dsIryeokseo","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtTelNo","value","dsIryeokseo","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtPhoneNo","value","dsIryeokseo","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","RadioGender","value","dsIryeokseo","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","RadioGunpil","value","dsIryeokseo","GUNPIL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","RadioGyeolhon","value","dsIryeokseo","GYEOLHON_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","RadioBohun","value","dsIryeokseo","BOHUN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtEmail","value","dsIryeokseo","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtChwimi","value","dsIryeokseo","CWIMI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtTeukgi","value","dsIryeokseo","TEUKGI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboJonggyo","value","dsIryeokseo","JONGGYO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.Seongjang.form.TextAreaSeongjang","value","dsIryeokseo","SEONGJANG_GWAJEONG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab.Seonggyeok.form.TextAreaSeonggyeok","value","dsIryeokseo","SEONGGYEOK_TEUKGISAHANG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab.Giwon.form.TextAreaGiwon","value","dsIryeokseo","GIWON_DONGGI_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.Ipsa.form.TextAreaIpsa","value","dsIryeokseo","IBSA_HU_POBU_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","calJagseongDt","value","dsIryeokseo","JAGSEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsIryeokseo");
            this._addPreloadList("data","","dsJonggyo");
            this._addPreloadList("data","","dsHakryeok");
            this._addPreloadList("data","","dsJolub");
            this._addPreloadList("data","","dsOegukeo");
            this._addPreloadList("data","","dsJagyeok");
            this._addPreloadList("data","","dsSusang");
            this._addPreloadList("data","","dsGajok");
            this._addPreloadList("data","","dsHwakin");
            this._addPreloadList("data","","dsHakjeokGibon");
        };
        
        // User Script
        this.registerScript("UI01_2090102_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UI01_2090102_P01.xfdl(이력서)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/26
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
        this.lvchkColidDs   = "HAKBEON$JAGSEONG_DT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$작성일자";
        this.lvchkColidDs1   = "HAKRYEOK_GBCD$HAKGYO_NM$JEONGONG_NM$PYEONGJEOM_AVG";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs1 = "학력구분$학교명$전공명$평균평점";
        this.lvchkColidDs2   = "OEGUKEO_GBCD$JUMSU_DEUNGGEUB_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs2 = "외국어구분$점수등급";
        this.lvchkColidDs3   = "JAGYEOKJEUNG_GBCD$JUMSU_DEUNGGEUB_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs3 = "자격증구분$점수등급";
        this.lvchkColidDs4   = "DAEHOE_NM$SUSANG_GBCD$SUSANG_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs4 = "대회명$수상구분$수상명";
        this.lvchkColidDs5   = "GWANGYE_GBCD$GAJOK_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs5 = "관계구분$성명";
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

        	if( !this.gfn_isNull(this.getOwnerFrame().hakbeon))
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.getOwnerFrame().hakbeon);
        		this.ds_input.setColumn(0, "JAGSEONG_DT", this.getOwnerFrame().jagseongDt);
        		this.dsHakjeokGibon.copyData(this.getOwnerFrame().dsArg);
        	} else {
        		close();
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().jagseongDt))
        	{
        	    this.calJagseongDt.set_enable(false);  // 작성일자
        		this.ds_input.setColumn(0, "JAGSEONG_DT", this.getOwnerFrame().jagseongDt);
        		this.fn_HakryeokRet();   //학력사항
        		this.fn_IryeokseoRet();
        		this.fn_OegukeoRet();
        		this.fn_JagyeokRet();
        		this.fn_SusangRet();
        		this.fn_GajokRet();
        	} else {
        		this.ds_input.setColumn(0, "JAGSEONG_DT", this.gfn_getSvrDate());  //작성일자

                var nRow = this.dsIryeokseo.addRow();
        		this.dsIryeokseo.setColumn(nRow, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        		this.dsIryeokseo.setColumn(nRow, "JAGSEONG_DT", this.ds_input.getColumn(0, "JAGSEONG_DT"));
        		//alert("", this.dsHakjeokGibon.getColumn(0, "HAKSAENG_NM"));
        		this.dsIryeokseo.setColumn(nRow, "HAKSAENG_NM", this.dsHakjeokGibon.getColumn(0, "HAKSAENG_NM"));
        		this.dsIryeokseo.setColumn(nRow, "HAKSAENG_ENM", this.dsHakjeokGibon.getColumn(0, "HAKSAENG_ENM"));
        		this.dsIryeokseo.setColumn(nRow, "HAKSAENG_CNM", this.dsHakjeokGibon.getColumn(0, "HAKSAENG_CNM"));
        		this.dsIryeokseo.setColumn(nRow, "BIRTHDAY", this.dsHakjeokGibon.getColumn(0, "BIRTHDAY"));
        		this.dsIryeokseo.setColumn(nRow, "GENDER_CD", this.dsHakjeokGibon.getColumn(0, "GENDER_CD"));
        		this.dsIryeokseo.setColumn(nRow, "GENDER_NM", this.dsHakjeokGibon.getColumn(0, "GENDER_NM"));
        		this.dsIryeokseo.setColumn(nRow, "EMAIL", this.dsHakjeokGibon.getColumn(0, "EMAIL"));
        		this.dsIryeokseo.setColumn(nRow, "TEL_NO", this.dsHakjeokGibon.getColumn(0, "TEL_NO"));
        		this.dsIryeokseo.setColumn(nRow, "POST_NO", this.dsHakjeokGibon.getColumn(0, "POST_NO"));
        		this.dsIryeokseo.setColumn(nRow, "ADDR1", this.dsHakjeokGibon.getColumn(0, "ADDR1"));
        		this.dsIryeokseo.setColumn(nRow, "ADDR2", this.dsHakjeokGibon.getColumn(0, "ADDR2"));
        	}
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsJonggyo|dsJolub|dsHakryeokGbcd|dsOegukeoGbcd|dsJagyeokGbcd|dsGajokGbcd|dsSusangGbcd";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "03022|00004|00259|00081|00601|00258|80304";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

            this.gfn_clearSortAll(this.tab.Hakryeok.form.grdHakryeok);
        	this.gfn_clearSortAll(this.tab.Oegukeo.form.grdOegukeo);
        	this.gfn_clearSortAll(this.tab.Jagyeokjeung.form.grdJagyeok);
        	this.gfn_clearSortAll(this.tab.Susang.form.grdSusang);
        	this.gfn_clearSortAll(this.tab.Gajok.form.grdGajok);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "IryeokseoRet":
                            this.fn_PostIryeokseoRet();
                        break;
        			case "HakryeokRet":
                            this.fn_PostHakryeokRet();
                        break;
        			case "OegukeoRet":
                            this.fn_PostOegukeoRet();
                        break;
        			case "JagyeokRet":
                            this.fn_PostJagyeokRet();
                        break;
        			case "SusangRet":
                            this.fn_PostSusangRet();
                        break;
        			case "GajokRet":
                            this.fn_PostGajokRet();
                        break;
        			case "HakryeokDel":
                            this.fn_PostHakryeokDel();
                        break;
        			case "OegukeoDel":
                            this.fn_PostOegekeoDel();
                        break;
        			case "JagyeokDel":
                            this.fn_PostJagyeokDel();
                        break;
        			case "SusangDel":
                            this.fn_PostSusangDel();
                        break;
        			case "GajokDel":
                            this.fn_GajokDel();
                        break;
        			case "IryeokseoSave":
                            this.fn_PostIryeokseoSave();
                        break;
        			case "HakryeokSave":
                            this.fn_PostHakryeokSave();
                        break;
        			case "OegukeoSave":
                            this.fn_PostOegukeoSave();
                        break;
        			case "JagyeokSave":
                            this.fn_PostJagyeokSave();
                        break;
        			case "SusangSave":
                            this.fn_PostSusangSave();
                        break;
        			case "GajokSave":
                            this.fn_PostGajokSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/
        // 저장버튼 클릭시
        this.btnSave_onclick = function(obj,e)
        {
        	this.ds_hwakinInput.setColumn(0, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	this.ds_hwakinInput.setColumn(0, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));

        	var strSvc      = "";
            var strUrl      = "/prj/UI/UI01/hwakinRetrieve_2090102_P01.do";
            var strInDs     = "ds_hwakinInput=ds_hwakinInput";
            var strOutDs    = "dsHwakin=dsHwakin";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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

        	if(this.dsHwakin.rowcount > 0 && this.dsIryeokseo.getRowType(0) == 2)
        	{
        		this.gfn_alert("이미 해당 날짜에 작성한 이력서가 있습니다.","저장정보","","question");
        		return false;
        	}

        	this.fn_IryeokseoSave();
        	this.ds_input.setColumn(0, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));

        	if(this.gfn_isUpdate(this.dsHakryeok))
        	{
        		this.fn_HakryeokSave();
        	}

        	if(this.gfn_isUpdate(this.dsOegukeo))
        	{
        		this.fn_OegukeoSave();
        	}

        	if(this.gfn_isUpdate(this.dsJagyeok))
        	{
        		this.fn_JagyeokSave();
        	}

        	if(this.gfn_isUpdate(this.dsSusang))
        	{
        		this.fn_SusangSave();
        	}

        	if(this.gfn_isUpdate(this.dsGajok))
        	{
        		this.fn_GajokSave();
        	}

        	if(!this.gfn_isUpdate(this.dsIryeokseo) && !this.gfn_isUpdate(this.dsHakryeok) && !this.gfn_isUpdate(this.dsOegukeo)
        	   && !this.gfn_isUpdate(this.dsJagyeok) && !this.gfn_isUpdate(this.dsSusang) && !this.gfn_isUpdate(this.dsGajok))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }
        };
        /**********************************************************************
                05. 이력서 기본 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreIryeokseoRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_IryeokseoRet = function()
        {
            if(!this.fn_PreIryeokseoRet())
            {
                return false;
            }
            var strSvc      = "IryeokseoRet";
            var strUrl      = "/prj/UI/UI01/iryeokseoRetrieve_2090102_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsIryeokseo=dsIryeokseo";
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
        this.fn_PostIryeokseoRet = function()
        {
           this.fn_picLoad(this.dsIryeokseo);
        };

        /**********************************************************************
                05-1. 학력사항 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHakryeokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakryeokRet = function()
        {
            if(!this.fn_PreHakryeokRet())
            {
                return false;
            }
            var strSvc      = "HakryeokRet";
            var strUrl      = "/prj/UI/UI01/hakryeokRetrieve_2090102_P01_T01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsHakryeok=dsHakryeok";
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
        this.fn_PostHakryeokRet = function()
        {
            this.gfn_getRowCount(this.tab.Hakryeok.form.stRowCnt,this.dsHakryeok);
        };

        /**********************************************************************
                05-2. 외국어능력 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreOegukeoRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_OegukeoRet = function()
        {
            if(!this.fn_PreOegukeoRet())
            {
                return false;
            }
            var strSvc      = "OegukeoRet";
            var strUrl      = "/prj/UI/UI01/oegukeoRetrieve_2090102_P01_T02.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsOegukeo=dsOegukeo";
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
        this.fn_PostOegukeoRet = function()
        {
            this.gfn_getRowCount(this.tab.Oegukeo.form.stRowCnt2,this.dsOegukeo);
        };


        /**********************************************************************
                05-3. 자격증 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreJagyeokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JagyeokRet = function()
        {
            if(!this.fn_PreJagyeokRet())
            {
                return false;
            }
            var strSvc      = "JagyeokRet";
            var strUrl      = "/prj/UI/UI01/jagyeokRetrieve_2090102_P01_T03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJagyeok=dsJagyeok";
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
        this.fn_PostJagyeokRet = function()
        {
            this.gfn_getRowCount(this.tab.Jagyeokjeung.form.stRowCnt3,this.dsJagyeok);
        };

        /**********************************************************************
                05-4. 수상 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSusangRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SusangRet = function()
        {
            if(!this.fn_PreSusangRet())
            {
                return false;
            }
            var strSvc      = "SusangRet";
            var strUrl      = "/prj/UI/UI01/susangRetrieve_2090102_P01_T04.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsSusang=dsSusang";
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
        this.fn_PostSusangRet = function()
        {
            this.gfn_getRowCount(this.tab.Susang.form.stRowCnt4,this.dsSusang);
        };

        /**********************************************************************
                05-5. 가족사항 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreGajokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GajokRet = function()
        {
            if(!this.fn_PreGajokRet())
            {
                return false;
            }
            var strSvc      = "GajokRet";
            var strUrl      = "/prj/UI/UI01/gajokRetrieve_2090102_P01_T05.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGajok=dsGajok";
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
        this.fn_PostGajokRet = function()
        {
            this.gfn_getRowCount(this.tab.Gajok.form.stRowCnt5,this.dsGajok);
        };

        /**********************************************************************
                06-1. 학력사항 추가 함수 선언
        ***********************************************************************/
        this.tab_Hakryeok_btnAdd_onclick = function(obj,e)
        {
        	this.fn_HakryeokNew();
        };
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreHakryeokNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_HakryeokNew = function()
        {
            if(!this.fn_PreHakryeokNew())
            {
                return false;
            }
            var nRow = this.dsHakryeok.addRow();
            this.dsHakryeok.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsHakryeok.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostHakryeokNew = function()
        {

        };


        /**********************************************************************
                06-2. 외국어능력 추가 함수 선언
        **********************************************************************/
        this.tab_Oegukeo_btnAdd_onclick = function(obj,e)
        {
        	this.fn_OegukeoNew();
        };
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreOegukeoNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_OegukeoNew = function()
        {
            if(!this.fn_PreOegukeoNew())
            {
                return false;
            }
            var nRow = this.dsOegukeo.addRow();
            this.dsOegukeo.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsOegukeo.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostOegukeoNew = function()
        {

        };

        /**********************************************************************
                06-3. 자격증 추가 함수 선언
        ***********************************************************************/
        this.tab_Jagyeokjeung_btnAdd_onclick = function(obj,e)
        {
        	this.fn_JagyeokNew();
        };
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreJagyeokNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_JagyeokNew = function()
        {
            if(!this.fn_PreJagyeokNew())
            {
                return false;
            }
            var nRow = this.dsJagyeok.addRow();
            this.dsJagyeok.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsJagyeok.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostJagyeokNew = function()
        {

        };

        /**********************************************************************
                06-4. 수상 추가 함수 선언
        ***********************************************************************/
        this.tab_Susang_btnAdd_onclick = function(obj,e)
        {
        	this.fn_SusangNew();
        };
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreSusangNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_SusangNew = function()
        {
            if(!this.fn_PreSusangNew())
            {
                return false;
            }
            var nRow = this.dsSusang.addRow();
            this.dsSusang.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsSusang.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostSusangNew = function()
        {

        };

        /**********************************************************************
                06-5. 가족사항 추가 함수 선언
        ***********************************************************************/
        this.tab_Gajok_btnAdd_onclick = function(obj,e)
        {
        	this.fn_GajokNew();
        };
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreGajokNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_GajokNew = function()
        {
            if(!this.fn_PreGajokNew())
            {
                return false;
            }
            var nRow = this.dsGajok.addRow();
            this.dsGajok.setColumn(nRow,"CHK",     "0");           //업체코드
            this.dsGajok.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostGajokNew = function()
        {

        };

        /**********************************************************************
                07-1. 학력사항 삭제 함수 선언
        ***********************************************************************/
        this.tab_Hakryeok_btnDel_onclick = function(obj,e)
        {
        	this.fn_HakryeokDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreHakryeokDel = function()
        {
            //멀티삭제용도
            if(this.dsHakryeok.rowcount < 1 || this.dsHakryeok.findRow("CHK",1) == -1)
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
            this.dsHakryeok.set_enableevent(false);
            for(var i=this.dsHakryeok.rowcount-1;i>-1;i--)
            {
                if(this.dsHakryeok.getColumn(i,"CHK") == "1" || this.dsHakryeok.getRowType(i) == 2)
                {
                    this.dsHakryeok.deleteRow(i);
                }
            }
            this.dsHakryeok.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_HakryeokDel = function()
        {
            if(!this.fn_PreHakryeokDel())
            {
                return false;
            }

            var strSvc      = "HakryeokDel";
            var strUrl      = "/prj/UI/UI01/hakryeokDelete_2090102_P01_T01.do";
            var strInDs     = "dsHakryeok=dsHakryeok:u";
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

        this.fn_PostHakryeokDel = function()
        {
            this.gfn_getRowCount(this.tab.Hakryeok.form.stRowCnt,this.dsHakryeok);
        };

        /**********************************************************************
                07-2. 외국어능력 삭제 함수 선언
        ***********************************************************************/
        this.tab_Oegukeo_btnDel_onclick = function(obj,e)
        {
        	this.fn_OegukeoDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreOegukeoDel = function()
        {
            //멀티삭제용도
            if(this.dsOegukeo.rowcount < 1 || this.dsOegukeo.findRow("CHK",1) == -1)
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
            this.dsOegukeo.set_enableevent(false);
            for(var i=this.dsOegukeo.rowcount-1;i>-1;i--)
            {
                if(this.dsOegukeo.getColumn(i,"CHK") == "1" || this.dsOegukeo.getRowType(i) == 2)
                {
                    this.dsOegukeo.deleteRow(i);
                }
            }
            this.dsOegukeo.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_OegukeoDel = function()
        {
            if(!this.fn_PreOegukeoDel())
            {
                return false;
            }

            var strSvc      = "OegukeoDel";
            var strUrl      = "/prj/UI/UI01/oegukeoDelete_2090102_P01_T02.do";
            var strInDs     = "dsOegukeo=dsOegukeo:u";
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

        this.fn_PostOegukeoDel = function()
        {
            this.gfn_getRowCount(this.tab.Oegukeo.form.stRowCnt2,this.dsOegukeo);
        };

        /**********************************************************************
                07-3. 자격증 삭제 함수 선언
        ***********************************************************************/
        this.tab_Jagyeokjeung_btnDel_onclick = function(obj,e)
        {
        	this.fn_JagyeokDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreJagyeokDel = function()
        {
            //멀티삭제용도
            if(this.dsJagyeok.rowcount < 1 || this.dsJagyeok.findRow("CHK",1) == -1)
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
            this.dsJagyeok.set_enableevent(false);
            for(var i=this.dsJagyeok.rowcount-1;i>-1;i--)
            {
                if(this.dsJagyeok.getColumn(i,"CHK") == "1" || this.dsJagyeok.getRowType(i) == 2)
                {
                    this.dsJagyeok.deleteRow(i);
                }
            }
            this.dsJagyeok.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_JagyeokDel = function()
        {
            if(!this.fn_PreJagyeokDel())
            {
                return false;
            }

            var strSvc      = "JagyeokDel";
            var strUrl      = "/prj/UI/UI01/jagyeokDelete_2090102_P01_T03.do";
            var strInDs     = "dsJagyeok=dsJagyeok:u";
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

        this.fn_PostJagyeokDel = function()
        {
            this.gfn_getRowCount(this.tab.Jagyeokjeung.form.stRowCnt3,this.dsJagyeok);
        };

        /**********************************************************************
                07-4. 수상 삭제 함수 선언
        ***********************************************************************/
        this.tab_Susang_btnDel_onclick = function(obj,e)
        {
        	this.fn_SusangDel();
        };

        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreSusangDel = function()
        {
            //멀티삭제용도
            if(this.dsSusang.rowcount < 1 || this.dsSusang.findRow("CHK",1) == -1)
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
            this.dsSusang.set_enableevent(false);
            for(var i=this.dsSusang.rowcount-1;i>-1;i--)
            {
                if(this.dsSusang.getColumn(i,"CHK") == "1" || this.dsSusang.getRowType(i) == 2)
                {
                    this.dsSusang.deleteRow(i);
                }
            }
            this.dsSusang.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_SusangDel = function()
        {
            if(!this.fn_PreSusangDel())
            {
                return false;
            }

            var strSvc      = "SusangDel";
            var strUrl      = "/prj/UI/UI01/susangDelete_2090102_P01_T04.do";
            var strInDs     = "dsSusang=dsSusang:u";
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

        this.fn_PostSusangDel = function()
        {
            this.gfn_getRowCount(this.tab.Susang.form.stRowCnt4,this.dsSusang);
        };

        /**********************************************************************
                07-5. 가족사항 삭제 함수 선언
        ***********************************************************************/
        this.tab_Gajok_btnDel_onclick = function(obj,e)
        {
        	this.fn_GajokDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreGajokDel = function()
        {
            //멀티삭제용도
            if(this.dsGajok.rowcount < 1 || this.dsGajok.findRow("CHK",1) == -1)
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
            this.dsGajok.set_enableevent(false);
            for(var i=this.dsGajok.rowcount-1;i>-1;i--)
            {
                if(this.dsGajok.getColumn(i,"CHK") == "1" || this.dsGajok.getRowType(i) == 2)
                {
                    this.dsGajok.deleteRow(i);
                }
            }
            this.dsGajok.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_GajokDel = function()
        {
            if(!this.fn_PreGajokDel())
            {
                return false;
            }

            var strSvc      = "GajokDel";
            var strUrl      = "/prj/UI/UI01/gajokDelete_2090102_P01_T05.do";
            var strInDs     = "dsGajok=dsGajok:u";
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

        this.fn_PostGajokDel = function()
        {
            this.gfn_getRowCount(this.tab.Gajok.form.stRowCnt5,this.dsGajok);
        };

        /**********************************************************************
                08. 이력서 기본 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreIryeokseoSave = function()
        {
            if(this.dsIryeokseo.rowcount > 0)
            {
                for(var i=0;i<this.dsIryeokseo.rowcount; i++)
                {
                    if(this.dsIryeokseo.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsIryeokseo.setColumn(i,"CHK","0");
                }
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsIryeokseo, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsIryeokseo.set_rowposition(result[1]); //데이터셋 변경
                return false;
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
        this.fn_IryeokseoSave = function()
        {
            if(!this.fn_PreIryeokseoSave())
            {
                return false;
            }

            var strSvc      = "IryeokseoSave";
            var strUrl      = "/prj/UI/UI01/iryeokseoSave_2090102_P01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsIryeokseo=dsIryeokseo:u";
            var strOutDs    = "dsIryeokseo=dsIryeokseo";
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
        this.fn_PostIryeokseoSave = function()
        {

        };

        /**********************************************************************
                08-1. 학력사항 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHakryeokSave = function()
        {
            if(this.dsHakryeok.rowcount > 0)
            {
                for(var i=0;i<this.dsHakryeok.rowcount; i++)
                {
                    if(this.dsHakryeok.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsHakryeok.setColumn(i,"CHK","0");
                }
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsHakryeok, this.lvchkColidDs1, this.lvchkColNameDs1, this.grdHakryeok, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsHakryeok.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 this.dsHakryeok.setColumn(this.dsHakryeok.rowposition, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	 this.dsHakryeok.setColumn(this.dsHakryeok.rowposition, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));
             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HakryeokSave = function()
        {
            if(!this.fn_PreHakryeokSave())
            {
                return false;
            }

            var strSvc      = "HakryeokSave";
            var strUrl      = "/prj/UI/UI01/hakryeokSave_2090102_P01_T01.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsHakryeok=dsHakryeok:u";
            var strOutDs    = "dsHakryeok=dsHakryeok";
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
        this.fn_PostHakryeokSave = function()
        {
            this.gfn_getRowCount(this.tab.Hakryeok.form.stRowCnt,this.dsHakryeok);
        };

        /**********************************************************************
                08-2. 외국어능력 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreOegukeoSave = function()
        {
            if(this.dsOegukeo.rowcount > 0)
            {
                for(var i=0;i<this.dsOegukeo.rowcount; i++)
                {
                    if(this.dsOegukeo.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsOegukeo.setColumn(i,"CHK","0");
                }
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsOegukeo, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdOegukeo, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsOegukeo.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 this.dsOegukeo.setColumn(this.dsOegukeo.rowposition, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	 this.dsOegukeo.setColumn(this.dsOegukeo.rowposition, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_OegukeoSave = function()
        {
            if(!this.fn_PreOegukeoSave())
            {
                return false;
            }

            var strSvc      = "OegukeoSave";
            var strUrl      = "/prj/UI/UI01/oegukeoSave_2090102_P01_T02.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsOegukeo=dsOegukeo:u";
            var strOutDs    = "dsOegukeo=dsOegukeo";
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
        this.fn_PostOegukeoSave = function()
        {
            this.gfn_getRowCount(this.tab.Oegukeo.form.stRowCnt2,this.dsOegukeo);
        };


        /**********************************************************************
                08-3. 자격증 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreJagyeokSave = function()
        {
            if(this.dsJagyeok.rowcount > 0)
            {
                for(var i=0;i<this.dsJagyeok.rowcount; i++)
                {
                    if(this.dsJagyeok.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsJagyeok.setColumn(i,"CHK","0");
                }
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsJagyeok, this.lvchkColidDs3, this.lvchkColNameDs3, this.grdJagyeok, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsJagyeok.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 this.dsJagyeok.setColumn(this.dsJagyeok.rowposition, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	 this.dsJagyeok.setColumn(this.dsJagyeok.rowposition, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_JagyeokSave = function()
        {
            if(!this.fn_PreJagyeokSave())
            {
                return false;
            }

            var strSvc      = "JagyeokSave";
            var strUrl      = "/prj/UI/UI01/jagyeokSave_2090102_P01_T03.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsJagyeok=dsJagyeok:u";
            var strOutDs    = "dsJagyeok=dsJagyeok";
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
        this.fn_PostJagyeokSave = function()
        {
            this.gfn_getRowCount(this.tab.Jagyeokjeung.form.stRowCnt3,this.dsJagyeok);
        };

        /**********************************************************************
                08-4. 수상 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSusangSave = function()
        {
            if(this.dsSusang.rowcount > 0)
            {
                for(var i=0;i<this.dsSusang.rowcount; i++)
                {
                    if(this.dsSusang.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsSusang.setColumn(i,"CHK","0");
                }
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsSusang, this.lvchkColidDs4, this.lvchkColNameDs4, this.grdSusang, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsSusang.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 this.dsSusang.setColumn(this.dsSusang.rowposition, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	 this.dsSusang.setColumn(this.dsSusang.rowposition, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_SusangSave = function()
        {
            if(!this.fn_PreSusangSave())
            {
                return false;
            }

            var strSvc      = "SusangSave";
            var strUrl      = "/prj/UI/UI01/susangSave_2090102_P01_T04.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsSusang=dsSusang:u";
            var strOutDs    = "dsSusang=dsSusang";
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
        this.fn_PostSusangSave = function()
        {
            this.gfn_getRowCount(this.tab.Susang.form.stRowCnt4,this.dsSusang);
        };

        /**********************************************************************
                08-5. 가족사항 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreGajokSave = function()
        {
            if(this.dsGajok.rowcount > 0)
            {
                for(var i=0;i<this.dsGajok.rowcount; i++)
                {
                    if(this.dsGajok.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsGajok.setColumn(i,"CHK","0");
                }
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsGajok, this.lvchkColidDs5, this.lvchkColNameDs5, this.grdGajok, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsGajok.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 this.dsGajok.setColumn(this.dsGajok.rowposition, "HAKBEON", this.dsIryeokseo.getColumn(0, "HAKBEON"));
        	 this.dsGajok.setColumn(this.dsGajok.rowposition, "JAGSEONG_DT", this.dsIryeokseo.getColumn(0, "JAGSEONG_DT"));
             return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_GajokSave = function()
        {
            if(!this.fn_PreGajokSave())
            {
                return false;
            }

            var strSvc      = "GajokSave";
            var strUrl      = "/prj/UI/UI01/gajokSave_2090102_P01_T05.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsGajok=dsGajok:u";
            var strOutDs    = "dsGajok=dsGajok";
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
        this.fn_PostGajokSave = function()
        {
            this.gfn_getRowCount(this.tab.Gajok.form.stRowCnt5,this.dsGajok);
        };

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/

        /**
         *      그리드멀티 체크
         */
        this.grdHakryeok_onheadclick = function(obj,e)
        {
            if(e.cell == this.tab.Hakryeok.form.grdHakryeok.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.grdOegukeo_onheadclick = function(obj,e)
        {
            if(e.cell == this.tab.Oegukeo.form.grdOegukeo.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.grdJagyeok_onheadclick = function(obj,e)
        {
            if(e.cell == this.tab.Jagyeokjeung.form.grdJagyeok.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.grdSusang_onheadclick = function(obj,e)
        {
            if(e.cell == this.tab.Susang.form.grdSusang.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        this.grdGajok_onheadclick = function(obj,e)
        {
            if(e.cell == this.tab.Gajok.form.grdGajok.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdHakryeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.tab.Hakryeok.form.grdHakryeok.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdOegukeo_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.tab.Oegukeo.form.grdOegukeo.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdJagyeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.tab.Jagyeokjeung.form.grdJagyeok.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdSusang_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.tab.Susang.form.grdSusang.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdGajok_onheaddblclick = function(obj,e)
        {
             if(e.cell != this.tab.Gajok.form.grdGajok.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 학생 사진 set
        this.fn_picLoad = function ()
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj  = arguments[0]
        	xhttp.targetComp = this.ImageViewer;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", arguments[0].getColumn(arguments[0].rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

            if(this.gfn_isUpdate(this.dsIryeokseo))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHakryeok))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsJagyeok))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsSusang))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsGajok))
        	{
        		value = true;
        	}

        	return value;
        };

        // 닫기 버튼 클릭
        this.btnClose_onclick = function(obj,e)
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	this.close("CLOSE");
        };

        this.tab_Seongjang_TextAreaSeongjang_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tab.Hakryeok.form.grdHakryeok.addEventHandler("onheaddblclick",this.grdHakryeok_onheaddblclick,this);
            this.tab.Hakryeok.form.grdHakryeok.addEventHandler("onheadclick",this.grdHakryeok_onheadclick,this);
            this.tab.Hakryeok.form.btnDel.addEventHandler("onclick",this.tab_Hakryeok_btnDel_onclick,this);
            this.tab.Hakryeok.form.btnAdd.addEventHandler("onclick",this.tab_Hakryeok_btnAdd_onclick,this);
            this.tab.Oegukeo.form.grdOegukeo.addEventHandler("onheaddblclick",this.grdOegukeo_onheaddblclick,this);
            this.tab.Oegukeo.form.grdOegukeo.addEventHandler("onheadclick",this.grdOegukeo_onheadclick,this);
            this.tab.Oegukeo.form.btnDel.addEventHandler("onclick",this.tab_Oegukeo_btnDel_onclick,this);
            this.tab.Oegukeo.form.btnAdd.addEventHandler("onclick",this.tab_Oegukeo_btnAdd_onclick,this);
            this.tab.Jagyeokjeung.form.grdJagyeok.addEventHandler("onheaddblclick",this.grdJagyeok_onheaddblclick,this);
            this.tab.Jagyeokjeung.form.grdJagyeok.addEventHandler("onheadclick",this.grdJagyeok_onheadclick,this);
            this.tab.Jagyeokjeung.form.btnDel.addEventHandler("onclick",this.tab_Jagyeokjeung_btnDel_onclick,this);
            this.tab.Jagyeokjeung.form.btnAdd.addEventHandler("onclick",this.tab_Jagyeokjeung_btnAdd_onclick,this);
            this.tab.Susang.form.grdSusang.addEventHandler("onheaddblclick",this.grdSusang_onheaddblclick,this);
            this.tab.Susang.form.grdSusang.addEventHandler("onheadclick",this.grdSusang_onheadclick,this);
            this.tab.Susang.form.btnDel.addEventHandler("onclick",this.tab_Susang_btnDel_onclick,this);
            this.tab.Susang.form.btnAdd.addEventHandler("onclick",this.tab_Susang_btnAdd_onclick,this);
            this.tab.Gajok.form.grdGajok.addEventHandler("onheaddblclick",this.grdGajok_onheaddblclick,this);
            this.tab.Gajok.form.grdGajok.addEventHandler("onheadclick",this.grdGajok_onheadclick,this);
            this.tab.Gajok.form.btnDel.addEventHandler("onclick",this.tab_Gajok_btnDel_onclick,this);
            this.tab.Gajok.form.btnAdd.addEventHandler("onclick",this.tab_Gajok_btnAdd_onclick,this);
            this.tab.Seongjang.form.TextAreaSeongjang.addEventHandler("onchanged",this.tab_Seongjang_TextAreaSeongjang_onchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("UI01_2090102_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
