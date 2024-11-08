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
            this.set_titletext("학생포트폴리오조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsHakjeokGibon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"50\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"GYOGWA_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"GYOWON_JAGYEOK_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GYOWON_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALSONGJUSO_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"300\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"PWD\" type=\"STRING\" size=\"300\"/><Column id=\"PWD_1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BOHOJA_GWANGYE_GBCD\" type=\"STRING\" size=\"30\"/><Column id=\"BOHOJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_HP_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BOHOJA_POST_NO\" type=\"STRING\" size=\"6\"/><Column id=\"BOHOJA_ADDR1\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_ADDR2\" type=\"STRING\" size=\"300\"/><Column id=\"BOHOJA_JIKEOP\" type=\"STRING\" size=\"200\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINGOGYO_JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHULSINGOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_NM\" type=\"STRING\" size=\"300\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINDAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"CHULSINDAEHAK_HAKGWA_NM\" type=\"STRING\" size=\"200\"/><Column id=\"CHULSINDAEHAK_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JOLEOP_GIJUN_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JOLEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JOLEOP_HOETSU\" type=\"STRING\" size=\"5\"/><Column id=\"JOLEOP_HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_HAKGWA_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEONCHE_CHONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JOLEOP_JEUNGSEO_NO\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_DEUNGROK_NO2\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD1\" type=\"STRING\" size=\"20\"/><Column id=\"HAKWI_CD2\" type=\"STRING\" size=\"20\"/><Column id=\"BUNBAN_BYEONGYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN_BYEONGYEONG_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"BALGEUP_BULGA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BALGEUP_BULGA_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_BULGA_DT\" type=\"STRING\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEONJE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_HAKGI_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"BOHOJA_GWANGYE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"BALSONGJUSO_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokByeondong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSESAYU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"HYUHAK_GIGAN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_JINGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_JEOKYONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BYEONDONG_JEOKYONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BYEONDONG_JEOKYONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSU_SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_HAKGWA_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JINHAENG_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"IPDAE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_YEJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YEJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHOEJONG_DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_DEUNGROK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BOKHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAEHYUHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BEF_BUNBAN\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"AFT_BUNBAN\" type=\"STRING\" size=\"1\"/><Column id=\"JEONJEOK_DAEHAK_CD\" type=\"STRING\" size=\"4\"/><Column id=\"JEONJEOK_DAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"JEONJEOK_HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JEONJEOK_JEONGONG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHWISO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHWISO_SAYU\" type=\"STRING\" size=\"300\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"BYEONDONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BYEONDONG_SANGSESAYU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAK_YEJEONG_YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"BEF_HAKGWA_JEONGONG\" type=\"STRING\" size=\"256\"/><Column id=\"AFT_HAKGWA_JEONGONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokbuJeongjeong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JEONGJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONGJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JEONGJEONG_BEF_NAEYONG1\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG2\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG3\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG4\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_BEF_NAEYONG5\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_BEF_NAEYONG6\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_BEF_NAEYONG7\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_BEF_NAEYONG8\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_AFT_NAEYONG1\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG2\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG3\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG4\" type=\"STRING\" size=\"100\"/><Column id=\"JEONGJEONG_AFT_NAEYONG5\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGJEONG_AFT_NAEYONG6\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_AFT_NAEYONG7\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_AFT_NAEYONG8\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGJEONG_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"JEONDAL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"JEONGJEONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGJEONG_BEF_NAEYONG\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGJEONG_AFT_NAEYONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrokgeumNapbu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGROK_DAESANG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SAENGSEONGGIJUN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"BOKHAKIYEONJA_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GINAPBU_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GINAPBU_HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"GINAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GINAPBU_CHONGAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJANGHAK_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BOKHAK_CHAAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"BUNNAP_DAESANG_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SINIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK\" type=\"STRING\" size=\"256\"/><Column id=\"SUEOP\" type=\"STRING\" size=\"256\"/><Column id=\"SUHYE\" type=\"STRING\" size=\"256\"/><Column id=\"HAKHOE\" type=\"STRING\" size=\"256\"/><Column id=\"ELBEOM\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_GEUMAEK\" type=\"STRING\" size=\"256\"/><Column id=\"SILNAPBU_GEUMAEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrokgeumHwanbul", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GITA_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"HWANBUL_BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HWANBUL_GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HWANBUL_YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANBUL_CHONGAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GEUMAEK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_SAYU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_GIJUN_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_GEUMAEK\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJE_GEUMAEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SINIP_IGWAN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_GEUMAEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSugangM", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUGANG_INSERT_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYEGANG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHG_BEF_BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSAN_GRD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONGJEOK_IGWAN_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEONGJEOK_IGWAN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JAEISU_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAEISU_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAEISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEISU_GRD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_INJEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"SOSOK_BUNBAN\" type=\"STRING\" size=\"10\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYORYU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOGI_CHWIEOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSugangD", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IRON_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILSEUP_TM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUGANG_INSERT_DT\" type=\"STRING\" size=\"8\"/><Column id=\"PYEGANG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHG_BEF_BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANSAN_GRD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONGJEOK_IGWAN_ID\" type=\"STRING\" size=\"30\"/><Column id=\"SEONGJEOK_IGWAN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JAEISU_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAEISU_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAEISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEISU_GRD\" type=\"STRING\" size=\"10\"/><Column id=\"JAEISU_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_INJEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"SOSOK_BUNBAN\" type=\"STRING\" size=\"10\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYORYU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOGI_CHWIEOP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CORE_COMP_DIVNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEGR_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sugangInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSiganpyo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ISU_HAKNYEON_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"YOIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSI\" type=\"STRING\" size=\"2\"/><Column id=\"DAMDANGGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"13\"/><Column id=\"HWAKJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"MON\" type=\"STRING\" size=\"256\"/><Column id=\"TUES\" type=\"STRING\" size=\"256\"/><Column id=\"WED\" type=\"STRING\" size=\"256\"/><Column id=\"THURS\" type=\"STRING\" size=\"256\"/><Column id=\"FRI\" type=\"STRING\" size=\"256\"/><Column id=\"SAT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_siganpyoInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChongSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ISU_HAKGISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_ISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYANG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GONGTONG_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOJIK_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"PYEONIPINJEONG_HAKJEOM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgiSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_GWAMOKSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOMGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSUGYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEONGGO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEONGGO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YUGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"YUGEUP_SAYU\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_INWONSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKNYEON_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"SEOKCHA\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamokSeongjeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANG_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUEOP_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEOLSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSEOK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAJE_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGGAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIMAL_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAECHE_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAECHE_GWAJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"DAECHE_GWAJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOK_INJEONG_SAYU\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ORG_ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CHWISO_SAYU\" type=\"STRING\" size=\"2000\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_SIGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHE_SIGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_INJEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORE_COMP_DIVNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gwamokSeongjeokInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamokIryeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANG_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUEOP_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYEOLSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSEOK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWAJE_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGGAN_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIMAL_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"10\"/><Column id=\"JAESUGANG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAESUGANG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAESUGANG_GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAECHE_GWAJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAECHE_GWAJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"DAECHE_GWAJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJEOK_INJEONG_SAYU\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ORG_ISU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CHWISO_SAYU\" type=\"STRING\" size=\"2000\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_SIGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAESUGANG_GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHE_SIGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAECHE_GWAJEONG_GWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_INJEONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CORE_COMP_DIVNM\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEohak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"EOHAK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BALGEUP_GIGWAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_NO\" type=\"STRING\" size=\"100\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"EOHAK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGGEUP_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"JAGYEOKJEUNG_CD\" type=\"STRING\" size=\"30\"/><Column id=\"JAGYEOKJEUNG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BALGEUP_GIGWAN_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJEUNG_NO\" type=\"STRING\" size=\"50\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"JAGYEOK_DEUNGGEUP_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEohakYeonsu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"EOHAK_YEONSU_NM\" type=\"STRING\" size=\"100\"/><Column id=\"EOHAK_YEONSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"EOHAK_YEONSU_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChucheonseo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"CHUCHEON_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAKSEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"EOPCHE_CD\" type=\"STRING\" size=\"30\"/><Column id=\"EOPCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHUCHEON_TITLE\" type=\"STRING\" size=\"500\"/><Column id=\"PUMHAENG\" type=\"STRING\" size=\"4000\"/><Column id=\"GYOU_HAKGYO\" type=\"STRING\" size=\"4000\"/><Column id=\"GITA_SAHANG\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"CHUCHEON_GYOSU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDoseo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"50\"/><Column id=\"LEND_YORN\" type=\"STRING\" size=\"1\"/><Column id=\"LEND_NUMB\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DELY_YORN\" type=\"STRING\" size=\"1\"/><Column id=\"DELY_AMTN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DELY_NUMB\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"STOP_YORN\" type=\"STRING\" size=\"1\"/><Column id=\"STAT_CODE\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBigyogwa", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"BIGYOGWA_PROGRAM_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHIDEUK_MILEAGE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGYOGWA_PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAEKSIM_YEOKRYANG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKMU_YEOKRYANG\" type=\"STRING\" size=\"256\"/><Column id=\"HAWI_YEOKRYANG\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_SIJAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_JONGRYO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GANGSA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDanche", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GAIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DANCHE_JIKCHEAK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_JIKCHEAK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKSAENG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIryeokseo", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JAGSEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"GUNPIL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JONGGYO_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"GYEOLHON_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CWIMI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"TEUKGI_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BOHUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEONGJANG_GWAJEONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"SEONGGYEOK_TEUKGISAHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GIWON_DONGGI_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"IBSA_HU_POBU_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09","10","6","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","203","38","1427","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","188","38","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","340","41","216","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03","1181","38","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("한문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","558","41","218","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","778","38","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("영문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEnm","930","41","249","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCnm","1333","41","294","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","203","66","1427","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","188","66","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSosok","340","69","590","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","188","94","1442","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","188","94","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00","527","94","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon","680","97","96","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","778","94","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","1071","94","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("학년제");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeonje","1224","97","102","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00","1330","94","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu","1472","97","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","188","122","1442","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","188","122","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01","527","122","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("변동사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSayu","680","125","389","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01","1071","122","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("최종변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeokSangtae","340","125","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","1224","125","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","188","150","1442","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","188","150","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00","527","150","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00","1071","150","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","340","153","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","188","178","1442","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","188","178","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("분반변경여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00","527","178","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("분반변경일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBunbanDt","680","181","389","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00_00","1071","178","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("교직이수여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00","188","206","1442","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00","188","206","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("졸업기준년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","527","206","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("생활관여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00_00_00","1071","206","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubDt","340","209","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","10",null,null,"521","10","10",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("HakjeokGibon",this.tab);
            obj.set_text("학적기본");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","25","35",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("15");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtHpNo","162","38","216","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","383","35","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("16");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtTelNo","537","38","246","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","25","63",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("18");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtEmail","162","66","621","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("20");
            obj.set_text("우편발송구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","119","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtPostNo","162","122","184","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","147",null,"53","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","147","150","53",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("24");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("25");
            obj.set_text("주소 및 보호자 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtAddr1","163","150","621","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","163","176","621","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","25","233",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","10","233","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("27");
            obj.set_text("보호자성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaNm","162","236","216","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","383","233","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("28");
            obj.set_text("가족관계");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","25","261",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","10","261","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("30");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","289",null,"28","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","10","289","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("32");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaPostNo","162","292","184","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","10","317",null,"53","831",null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","10","317","150","53",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("34");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaAddr1","163","320","621","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaAddr2","163","346","621","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","383","261","150","28",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("35");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaTelNo","537","264","246","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaHpNo","162","264","216","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBalsongGb","162","94","184","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Edit("edtBohojaGajokGwangye","537","236","246","22",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("37");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("38");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","199","100","35",null,null,null,null,null,null,this.tab.HakjeokGibon.form);
            obj.set_taborder("39");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HakjeokGibon.addChild(obj.name, obj);

            obj = new Tabpage("IphakJeongbo",this.tab);
            obj.set_text("입학정보");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06","11","35","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("32");
            obj.set_text("출신고교명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyoNm","163","38","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","384","35","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("33");
            obj.set_text("출신고교코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtChulsinGogyoCd","538","38","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("34");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","789","35","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("35");
            obj.set_text("고교졸업일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","1128","35","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("36");
            obj.set_text("고교구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGogyoGb","1281","38","326","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Calendar("calGogyoJolubDt","941","38","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","62",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","11","62","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("38");
            obj.set_text("출신대학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtChulsinDaehakNm","163","65","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","384","62","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("39");
            obj.set_text("출신학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtChulsinHakgwa","538","65","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","789","62","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("40");
            obj.set_text("대학졸업년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtDaehakJolubYYYY","941","65","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","10","89",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","11","89","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("42");
            obj.set_text("편입학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtPyeonibHaknyeon","163","92","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","384","89","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("43");
            obj.set_text("인정학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakjeom","538","92","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00","789","89","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("44");
            obj.set_text("인정학기 수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtInjeongHakgiCnt","941","92","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","151",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","11","151","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("46");
            obj.set_text("교과과정적용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGyogwaGwajeong","163","154","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","127","153","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("47");
            obj.set_text("입학 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01","10","178",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01","11","178","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("49");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtMojibGb","163","181","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01","384","178","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("50");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtSuheomNo","538","181","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_01","789","178","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("51");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJeongwonGb","941","181","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","10","205",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","11","205","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("53");
            obj.set_text("입학학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtIbhakHakgwa","163","208","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00","384","205","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("54");
            obj.set_text("모집전형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtMojibjeonhyung","538","208","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00","789","205","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("55");
            obj.set_text("입학일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Calendar("calIbhakDt","941","208","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","10","267",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","11","267","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("57");
            obj.set_text("졸업년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubYYYY","163","270","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","7","242","153","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("58");
            obj.set_text("졸업 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_01_00","10","294",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_00","11","294","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("60");
            obj.set_text("졸업학과석차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgwaSeokcha","163","297","97","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00","384","294","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("61");
            obj.set_text("졸업전체석차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00","10","321",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00","11","321","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("63");
            obj.set_text("졸업증서번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubjeungNo","163","324","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("25");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00","384","321","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("64");
            obj.set_text("학위등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtHakwiDeungrokNo","538","324","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00_00","789","321","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("65");
            obj.set_text("영문학위등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","385","266","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("66");
            obj.set_text("졸업학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgi","540","269","244","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01_00_00_00_00","789","267","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("67");
            obj.set_text("졸업일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Calendar("calJolubDt","941","270","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00_00","1127","267","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("68");
            obj.set_text("졸업회차");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edt_02_06_01_00_00_00","1282","270","324","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubHakgwaChongSeokcha","282","297","97","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static00","263","301","17","15",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("69");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubjeoncheSeokcha","538","297","114","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static00_00","654","301","17","15",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("70");
            obj.set_text("/");
            obj.set_textAlign("center");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtJolubJeoncheChongSeokcha","671","297","113","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtEHakwiDeungrokNo","941","324","183","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("27");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00","10","349",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_00","11","349","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("72");
            obj.set_text("학위코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtHakwiCd","163","352","620","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("28");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_01","10","377",null,"28","10",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00_00_01","11","377","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("74");
            obj.set_text("교원자격번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGyowonJagyeokNo","163","380","216","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00_00_00_00","384","377","150","28",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("75");
            obj.set_text("교원증서번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Edit("edtGyowonJeungNo","538","380","246","22",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("76");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-1","10","437","0",null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("77");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("78");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("79");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","143","320","8",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("80");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","116","100","35",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("81");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","5","259","320","8",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("82");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","313","232","100","35",null,null,null,null,null,null,this.tab.IphakJeongbo.form);
            obj.set_taborder("83");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.IphakJeongbo.addChild(obj.name, obj);

            obj = new Tabpage("HakjeokByeondong",this.tab);
            obj.set_text("학적변동");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdHakjeokByeondong","10","35",null,"205","10",null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsHakjeokByeondong");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"87\"/><Column size=\"64\"/><Column size=\"77\"/><Column size=\"84\"/><Column size=\"347\"/><Column size=\"121\"/><Column size=\"117\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"92\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도/학기\"/><Cell col=\"2\" rowspan=\"2\" text=\"변동일자\"/><Cell col=\"3\" rowspan=\"2\" text=\"학적상태\"/><Cell col=\"4\" rowspan=\"2\" text=\"변동구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"변동상세구분\"/><Cell col=\"6\" rowspan=\"2\" text=\"상세내용\"/><Cell col=\"7\" rowspan=\"2\" text=\"이전학과(전공)\"/><Cell col=\"8\" rowspan=\"2\" text=\"전과학과(전공)\"/><Cell col=\"9\" colspan=\"2\" text=\"복학예정\"/><Cell col=\"11\" rowspan=\"2\" text=\"입대일자\"/><Cell row=\"1\" col=\"9\" text=\"학년도/학기\"/><Cell row=\"1\" col=\"10\" text=\"일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_DT\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOK_SANGTAE_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_NM\" editmaxlength=\"10\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BYEONDONG_SANGSE_NM\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BYEONDONG_SANGSE_NAEYONG\" editmaxlength=\"1000\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BEF_HAKGWA_JEONGONG\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:AFT_HAKGWA_JEONGONG\" editmaxlength=\"10\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BOKHAK_YEJEONG_YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BOKHAK_YEJEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"11\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPDAE_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("2");
            obj.set_text("학적변동내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Grid("grdHakjeokbuJeongjeong","10",null,null,"201","10","10",null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsHakjeokbuJeongjeong");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"107\"/><Column size=\"484\"/><Column size=\"484\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"정정일자\"/><Cell col=\"2\" text=\"정정구분\"/><Cell col=\"3\" text=\"변경전내용\"/><Cell col=\"4\" text=\"변경후내용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JEONGJEONG_DT\" editmaxlength=\"8\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JEONGJEONG_GBCD\" editmaxlength=\"3\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JEONGJEONG_BEF_NAEYONG\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:JEONGJEONG_AFT_NAEYONG\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","252","138","22",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("3");
            obj.set_text("학적부정정내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("stRowCnt","122","10","233","24",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","138","250","77","24",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_00","734","240","100","35",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","15","268","320","8",null,null,null,null,null,null,this.tab.HakjeokByeondong.form);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HakjeokByeondong.addChild(obj.name, obj);

            obj = new Tabpage("Deungrok",this.tab);
            obj.set_text("등록");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdDeungrokgeumNapbu","10","35",null,"205","10",null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDeungrokgeumNapbu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"56\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\" text=\"입학금\"/><Cell col=\"5\" text=\"수업료\"/><Cell col=\"6\" text=\"수혜경비\"/><Cell col=\"7\" text=\"학생회비\"/><Cell col=\"8\" text=\"졸업앨범비\"/><Cell col=\"9\" text=\"장학금\"/><Cell col=\"10\" text=\"실납부금\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON_GBCD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:NAPBU_DT\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:IPHAK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SUEOP\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SUHYE\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:HAKHOE\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"8\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:ELBEOM\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"9\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:JANGHAK_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"10\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:SILNAPBU_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/></Band></Format></Formats>");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("2");
            obj.set_text("등록금납부내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Grid("grdDeungrokgeumHwanbul","10",null,null,"201","10","10",null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsDeungrokgeumHwanbul");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"98\"/><Column size=\"107\"/><Column size=\"90\"/><Column size=\"75\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"환불일자\"/><Cell col=\"3\" text=\"환불구분\"/><Cell col=\"4\" text=\"환불사유\"/><Cell col=\"5\" text=\"환불기준구분\"/><Cell col=\"6\" text=\"공제액\"/><Cell col=\"7\" text=\"환불액\"/><Cell col=\"8\" text=\"계좌번호\"/><Cell col=\"9\" text=\"예금주\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_DT\" editmaxlength=\"8\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GEUMAEK_GBNM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_SAYU_GBNM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_GIJUN_GBNM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:GONGJE_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" textAlign=\"right\" text=\"bind:HWANBUL_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"8\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_GYEJWA_NO\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWANBUL_YEGEUMJU\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGO\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","251","131","22",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("3");
            obj.set_text("등록금환불내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("stRowCnt3","134","10","233","24",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("stRowCnt4","134","249","74","24",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("7");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_00","734","240","100","35",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","15","268","320","8",null,null,null,null,null,null,this.tab.Deungrok.form);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Deungrok.addChild(obj.name, obj);

            obj = new Tabpage("Janghak",this.tab);
            obj.set_text("장학");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdJanghak","10","35",null,null,"10","10",null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsJanghak");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"56\"/><Column size=\"166\"/><Column size=\"310\"/><Column size=\"152\"/><Column size=\"110\"/><Column size=\"212\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학년도/학기\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"장학코드\"/><Cell col=\"3\" text=\"장학내용\"/><Cell col=\"4\" text=\"장학금액\"/><Cell col=\"5\" text=\"지급구분\"/><Cell col=\"6\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON\" editmaxlength=\"1\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JANGHAK_CD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:JANGHAK_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" text=\"bind:JIGEUP_GEUMAEK\" editmaxlength=\"256\" maskeditformat=\"#,###,###\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIGEUP_YN\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIGEUP_DT\" editmaxlength=\"256\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("1");
            obj.set_text("장학 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("stRowCnt5","91","10","233","24",null,null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","15","28","320","8",null,null,null,null,null,null,this.tab.Janghak.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Janghak.addChild(obj.name, obj);

            obj = new Tabpage("Sugang",this.tab);
            obj.set_text("수강");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdSugangM","10","35","350",null,null,"10",null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsSugangM");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"146\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("2");
            obj.set_text("수강신청 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Grid("grdSugangD","370","35",null,null,"10","10",null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsSugangD");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"95\"/><Column size=\"170\"/><Column size=\"102\"/><Column size=\"49\"/><Column size=\"92\"/><Column size=\"201\"/><Column size=\"229\"/><Column size=\"355\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교과목코드\"/><Cell col=\"2\" text=\"교과목명\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"재수강여부\"/><Cell col=\"6\" text=\"핵심역량\"/><Cell col=\"7\" text=\"직무역량\"/><Cell col=\"8\" text=\"하위역량\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAEISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CORE_COMP_DIVNM\" editmaxlength=\"256\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JOB_COMP_NM\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEGR_COMP_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("stRowCnt6","124","10","233","24",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("stRowCnt7","559","10","233","24",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("8");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","360","9","10","477",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Static("stc_09_00","367","11","213","22",null,null,null,null,null,null,this.tab.Sugang.form);
            obj.set_taborder("11");
            obj.set_text("학기별 수강신청 상세내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Sugang.addChild(obj.name, obj);

            obj = new Tabpage("Siganpyo",this.tab);
            obj.set_text("시간표");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdSiganpyo","10","35",null,null,"10","10",null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsSiganpyo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"199\"/><Column size=\"199\"/><Column size=\"199\"/><Column size=\"199\"/><Column size=\"199\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"80\"/></Rows><Band id=\"head\"><Cell text=\"교시\"/><Cell col=\"1\" text=\"월요일\"/><Cell col=\"2\" text=\"화요일\"/><Cell col=\"3\" text=\"수요일\"/><Cell col=\"4\" text=\"목요일\"/><Cell col=\"5\" text=\"금요일\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CD_NM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:MON\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:TUES\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:WED\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:THURS\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:FRI\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","85","22",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("3");
            obj.set_text("시간표");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("stc_63","82","12","80","20",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("4");
            obj.set_text("학년도/학기");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","152","6","120","22",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("0");
            obj.set_value("2020");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","282","6","120","22",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Siganpyo.form);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Siganpyo.addChild(obj.name, obj);

            obj = new Tabpage("Seongjeok",this.tab);
            obj.set_text("성적");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdChongSeongjeok","10","35",null,"61","10",null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsChongSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/><Column size=\"178\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"신청학점\"/><Cell col=\"1\" text=\"취득학점\"/><Cell col=\"2\" text=\"편입학점\"/><Cell col=\"3\" text=\"점수총합\"/><Cell col=\"4\" text=\"백분율\"/><Cell col=\"5\" text=\"평점총계\"/><Cell col=\"6\" text=\"평균학점\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONIPINJEONG_HAKJEOM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSUGYE\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU_AVG\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOMGYE\" editmaxlength=\"256\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","85","22",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("4");
            obj.set_text("총성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","106","109","22",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("5");
            obj.set_text("이수별 성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Grid("grdHakgiSeongjeok","10",null,"616","213",null,"10",null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsHakgiSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"85\"/><Column size=\"98\"/><Column size=\"108\"/><Column size=\"88\"/><Column size=\"84\"/><Column size=\"82\"/><Column size=\"96\"/><Column size=\"96\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년도/학기\"/><Cell col=\"2\" text=\"신청학점\"/><Cell col=\"3\" text=\"취득학점\"/><Cell col=\"4\" text=\"백분율\"/><Cell col=\"5\" text=\"평점총점\"/><Cell col=\"6\" text=\"평점평균\"/><Cell col=\"7\" text=\"석차\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU_AVG\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOMGYE\" editmaxlength=\"22\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM_AVG\" editmaxlength=\"22\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOKCHA\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stc_09_01","7","238","100","22",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("6");
            obj.set_text("학기별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Grid("grdGwamokSeongjeok","636",null,null,"213","10","10",null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsGwamokSeongjeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"77\"/><Column size=\"140\"/><Column size=\"52\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"43\"/><Column size=\"67\"/><Column size=\"71\"/><Column size=\"130\"/><Column size=\"142\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교과목코드\"/><Cell col=\"2\" text=\"교과목명\"/><Cell col=\"3\" text=\"이수구분\"/><Cell col=\"4\" text=\"학년\"/><Cell col=\"5\" text=\"학점\"/><Cell col=\"6\" text=\"등급\"/><Cell col=\"7\" text=\"백분율\"/><Cell col=\"8\" text=\"평점\"/><Cell col=\"9\" text=\"이수여부\"/><Cell col=\"10\" text=\"재수강여부\"/><Cell col=\"11\" text=\"핵심역량\"/><Cell col=\"12\" text=\"직무역량\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKNYEON\" editmaxlength=\"1\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOM\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEUNGGEUP\" editmaxlength=\"10\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_JEOMSU\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONGJEOM\" editmaxlength=\"10\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_YN\" editmaxlength=\"1\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SUGANG_GUBUN_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CORE_COMP_DIVNM\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JOB_COMP_NM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stc_09_01_00","634","238","100","22",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("7");
            obj.set_text("과목별성적");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt9","73","11","233","24",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt10","102","237","233","24",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt11","731","236","233","24",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Div("Div03","10","130","602","102",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("type02");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("0");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","0","20","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("1");
            obj.set_text("전공학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","0","40","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("2");
            obj.set_text("교양학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","0","60","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("3");
            obj.set_text("교직학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","0","80","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("4");
            obj.set_text("공통학점");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","120","0","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("5");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("이수학점");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static06","240","0","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("6");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("점수총점");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static07","360","0","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("7");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("백분율");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static08","480","0","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("8");
            obj.set_background("powderblue");
            obj.set_border("1px solid #9db9d1");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("center");
            obj.set_text("평균학점");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","120","20","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","240","20","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("10");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","360","20","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("11");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","480","20","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("12");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","120","40","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("13");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit05","240","40","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("14");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit06","360","40","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("15");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit07","480","40","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("16");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit08","120","60","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("17");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit09","240","60","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("18");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit10","360","60","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("19");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit11","480","60","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("20");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit12","120","80","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("21");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit13","240","80","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_format("###,##0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit14","360","80","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("23");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit15","480","80","120","20",null,null,null,null,null,null,this.tab.Seongjeok.form.Div03.form);
            obj.set_taborder("24");
            obj.set_border("1px solid #9db9d1");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_displaynulltext("0");
            this.tab.Seongjeok.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("14");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("15");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_00","463","96","100","35",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("16");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","123","510","8",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("17");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","463","229","100","35",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("18");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","11","255","880","8",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","626","249","10","107",null,null,null,null,null,null,this.tab.Seongjeok.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Seongjeok.addChild(obj.name, obj);

            obj = new Tabpage("SeongjeokIryeok",this.tab);
            obj.set_text("성적이력");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdGwamokIryeok","10","35",null,null,"10","10",null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsGwamokIryeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"75\"/><Column size=\"78\"/><Column size=\"167\"/><Column size=\"54\"/><Column size=\"42\"/><Column size=\"42\"/><Column size=\"42\"/><Column size=\"63\"/><Column size=\"78\"/><Column size=\"96\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"84\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"78\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도/학기\"/><Cell col=\"2\" rowspan=\"2\" text=\"교과목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"교과목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"이수구분\"/><Cell col=\"5\" rowspan=\"2\" text=\"학점\"/><Cell col=\"6\" rowspan=\"2\" text=\"점수\"/><Cell col=\"7\" rowspan=\"2\" text=\"등급\"/><Cell col=\"8\" colspan=\"3\" text=\"재수강정보\"/><Cell col=\"11\" colspan=\"4\" text=\"대체과목과정 정보\"/><Cell col=\"15\" colspan=\"2\" text=\"성적취소 정보\"/><Cell row=\"1\" col=\"8\" text=\"년도/학기\"/><Cell row=\"1\" col=\"9\" text=\"교과목코드\"/><Cell row=\"1\" col=\"10\" text=\"교과목명\"/><Cell row=\"1\" col=\"11\" text=\"년도/학기\"/><Cell row=\"1\" col=\"12\" text=\"학년\"/><Cell row=\"1\" col=\"13\" text=\"교과목코드\"/><Cell row=\"1\" col=\"14\" text=\"교과목명\"/><Cell row=\"1\" col=\"15\" text=\"취소구분\"/><Cell row=\"1\" col=\"16\" text=\"취소일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY_HAKGI\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOM\" editmaxlength=\"10\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_JEOMSU\" editmaxlength=\"10\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEUNGGEUP\" editmaxlength=\"10\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAESUGANG_SIGI\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAESUGANG_GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAESUGANG_GYOGWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAECHE_SIGI\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAECHE_GWAJEONG_HAKNYEON\" editmaxlength=\"10\"/><Cell col=\"13\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAECHE_GWAJEONG_GWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"14\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAECHE_GWAJEONG_GWAMOK_NM\" editmaxlength=\"256\"/><Cell col=\"15\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEONGJEOK_INJEONG_NM\" editmaxlength=\"256\"/><Cell col=\"16\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWISO_DT\" editmaxlength=\"256\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","135","22",null,null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("1");
            obj.set_text("과목별성적이력");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt12","139","10","233","24",null,null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.SeongjeokIryeok.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.SeongjeokIryeok.addChild(obj.name, obj);

            obj = new Tabpage("HaksaengIryeok",this.tab);
            obj.set_text("학생이력");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdEohak","10","35",null,"127","10",null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsEohak");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"349\"/><Column size=\"108\"/><Column size=\"84\"/><Column size=\"321\"/><Column size=\"112\"/><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"시험명\"/><Cell col=\"2\" text=\"취득급수\"/><Cell col=\"3\" text=\"취득점수\"/><Cell col=\"4\" text=\"발급기관명\"/><Cell col=\"5\" text=\"발급번호\"/><Cell col=\"6\" text=\"취득일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:EOHAK_GBNM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEUNGGEUP_GBNM\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEOMSU\" editmaxlength=\"10\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BALGEUP_GIGWAN_NM\" editmaxlength=\"100\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BALGEUP_NO\" editmaxlength=\"100\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","135","22",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("3");
            obj.set_text("어학 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Grid("grdJagyeok","10","197",null,"127","10",null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsJagyeok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"363\"/><Column size=\"92\"/><Column size=\"286\"/><Column size=\"112\"/><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자격명\"/><Cell col=\"2\" text=\"자격등급\"/><Cell col=\"3\" text=\"발급기관명\"/><Cell col=\"4\" text=\"자격증번호\"/><Cell col=\"5\" text=\"취득일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:JAGYEOKJEUNG_NM\" editmaxlength=\"50\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAGYEOK_DEUNGGEUP_GBNM\" editmaxlength=\"10\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BALGEUP_GIGWAN_NM\" editmaxlength=\"50\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAGYEOKJEUNG_NO\" editmaxlength=\"50\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","173","135","22",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("4");
            obj.set_text("자격 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Grid("grdEohakYeonsu","10",null,null,"127","10","0",null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsEohakYeonsu");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"371\"/><Column size=\"144\"/><Column size=\"144\"/><Column size=\"368\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"어학연수명\"/><Cell col=\"2\" text=\"시작일자\"/><Cell col=\"3\" text=\"종료일자\"/><Cell col=\"4\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:EOHAK_YEONSU_NM\" editmaxlength=\"100\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:EOHAK_YEONSU_FRDT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:EOHAK_YEONSU_TODT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:NAEYONG\" editmaxlength=\"1000\"/></Band></Format></Formats>");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","334","135","22",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("5");
            obj.set_text("어학연수 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt13","96","9","233","24",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt14","96","172","233","24",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("7");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("stRowCnt15","123","332","233","24",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("8");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","510","8",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_00","742","162","100","35",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("14");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","742","324","100","35",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("15");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","189","510","8",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("16");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","10","351","510","8",null,null,null,null,null,null,this.tab.HaksaengIryeok.form);
            obj.set_taborder("17");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.HaksaengIryeok.addChild(obj.name, obj);

            obj = new Tabpage("ChiupChucheonseo",this.tab);
            obj.set_text("취업추천서");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdChucheonseo","10","35",null,null,"1260","10",null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsChucheonseo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"73\"/><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작성일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAKSEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("10");
            obj.set_text("취업추천서목록");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_09_00","367","12","330","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("11");
            obj.set_text("상담상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06",null,"35","1235","28","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06","370","35","150","28",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("13");
            obj.set_text("추천교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtChucheonGyosuCd","523","38","216","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtChucheonGyosuNm","743","38","246","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","994","35","150","28",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("14");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Calendar("calJakseongDt","1146","38","183","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00",null,"62","1235","28","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","370","62","150","28",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("16");
            obj.set_text("기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtGiganNm","523","65","805","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00",null,"89","1235","77","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","370","89","150","77",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("18");
            obj.set_text("추천타이틀");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtChucheonTitle","523","92","1083","71",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00",null,"166","1235","77","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","370","166","150","77",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("20");
            obj.set_text("품행");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtPumhaeng","523","169","1083","71",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_01",null,"241","1235","77","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01","370","241","150","77",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("22");
            obj.set_text("교우학교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtGyouHakgyo","523","244","1083","71",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_01_00",null,"317","1235","158","10",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00","370","317","150","158",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("24");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Edit("edtGitaSahang","523","320","1083","152",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Button("btnChucheonseoPrint","1528","6","82","22",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("9");
            obj.set_text("추천서 출력");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("stRowCnt16","139","9","233","24",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("25");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("27");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","1580","8",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","360","9","10","477",null,null,null,null,null,null,this.tab.ChiupChucheonseo.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.ChiupChucheonseo.addChild(obj.name, obj);

            obj = new Tabpage("DoseoYeoncheJeongbo",this.tab);
            obj.set_text("도서연체정보");
            this.tab.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","12","330","22",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("3");
            obj.set_text("연체정보");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_13_06","9","36",null,"28","823",null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","36","150","28",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("5");
            obj.set_text("연체정보");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","193","36","150","28",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("6");
            obj.set_text("대출유무");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","168","39","45","22",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("0");
            obj.set_tooltiptype("hover");
            obj.set_enable("false");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new CheckBox("chk_03_00","353","39","45","22",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("1");
            obj.set_tooltiptype("hover");
            obj.set_enable("false");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","378","36","150","28",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("7");
            obj.set_text("대출권수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Edit("edt_02_06_00_00","531","39","246","22",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","1580","8",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.DoseoYeoncheJeongbo.form);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.DoseoYeoncheJeongbo.addChild(obj.name, obj);

            obj = new Tabpage("Bigyogwa",this.tab);
            obj.set_text("비교과");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdBigyogwa","10","35",null,null,"10","10",null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsBigyogwa");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"56\"/><Column size=\"64\"/><Column size=\"156\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"73\"/><Column size=\"83\"/><Column size=\"85\"/><Column size=\"64\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"147\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도\"/><Cell col=\"2\" rowspan=\"2\" text=\"학기\"/><Cell col=\"3\" rowspan=\"2\" text=\"비교과프로그램\"/><Cell col=\"4\" colspan=\"2\" text=\"프로그램기간\"/><Cell col=\"6\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"7\" rowspan=\"2\" text=\"취득 마일리지\"/><Cell col=\"8\" rowspan=\"2\" text=\"주관부서\"/><Cell col=\"9\" rowspan=\"2\" text=\"강사\"/><Cell col=\"10\" rowspan=\"2\" text=\"핵심역량\"/><Cell col=\"11\" rowspan=\"2\" text=\"직무역량\"/><Cell col=\"12\" rowspan=\"2\" text=\"하위역량\"/><Cell row=\"1\" col=\"4\" text=\"시작일시\"/><Cell row=\"1\" col=\"5\" text=\"종료일시\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGI_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIGYOGWA_PROGRAM_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_SIJAK_DT\" editmaxlength=\"256\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:PROGRAM_JONGRYO_DT\" editmaxlength=\"256\" calendardisplaynulltype=\"none\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHIDEUK_MILEAGE\" editmaxlength=\"256\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUGWAN_DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GANGSA_NM\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAEKSIM_YEOKRYANG_NM\" editmaxlength=\"256\"/><Cell col=\"11\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JIKMU_YEOKRYANG\" editmaxlength=\"256\"/><Cell col=\"12\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAWI_YEOKRYANG\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("1");
            obj.set_text("비교과프로그램 신청 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("stRowCnt17","198","10","233","24",null,null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","1580","8",null,null,null,null,null,null,this.tab.Bigyogwa.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Bigyogwa.addChild(obj.name, obj);

            obj = new Tabpage("Danche",this.tab);
            obj.set_text("단체");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdDanche","10","35",null,null,"10","10",null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsDanche");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"91\"/><Column size=\"694\"/><Column size=\"112\"/><Column size=\"170\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"단체구분\"/><Cell col=\"1\" text=\"단체분류\"/><Cell col=\"2\" text=\"단체명\"/><Cell col=\"3\" text=\"대표학생\"/><Cell col=\"4\" text=\"가입일자\"/><Cell col=\"5\" text=\"직책\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_GBNM\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_BUNRYU_GBNM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:DANCHE_NM\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_HAKSAENG_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:GAIB_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_JIKCHEAK_GBNM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","330","22",null,null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("1");
            obj.set_text("단체 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("stRowCnt18","102","10","83","24",null,null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","1580","8",null,null,null,null,null,null,this.tab.Danche.form);
            obj.set_taborder("7");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Danche.addChild(obj.name, obj);

            obj = new Tabpage("Iryeokseo",this.tab);
            obj.set_text("이력서");
            this.tab.addChild(obj.name, obj);

            obj = new Grid("grdIryeokseo","10","35",null,null,"1260","10",null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsIryeokseo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"43\"/><Column size=\"177\"/><Column size=\"77\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"작성일자\"/><Cell col=\"3\" text=\"이력서출력\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAGSEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" cursor=\"pointer\"/><Cell col=\"3\" text=\"이력서출력\" displaytype=\"buttoncontrol\" edittype=\"button\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","110","22",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("3");
            obj.set_text("이력서목록");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("stc_09_00","367","11","110","22",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("4");
            obj.set_text("이력서");
            obj.set_cssclass("sta_WF_Title02");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Button("btn_add","266","6","46","22",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Button("btn_del","314","6","46","22",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("stc_IryeokseoReport",null,"35","1240",null,"10","10",null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("stRowCnt19","111","10","116","24",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","476",null,null,"5","0",null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"-11","10","487","0",null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("10");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28","1580","8",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","360","9","10","477",null,null,null,null,null,null,this.tab.Iryeokseo.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tab.Iryeokseo.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer","10","38","143","196",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Radio("RadioBunban","341","181","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var RadioBunban_innerdataset = new nexacro.NormalDataset("RadioBunban_innerdataset", obj);
            RadioBunban_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RadioBunban_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioSaengHwalGwan","680","210","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var RadioSaengHwalGwan_innerdataset = new nexacro.NormalDataset("RadioSaengHwalGwan_innerdataset", obj);
            RadioSaengHwalGwan_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RadioSaengHwalGwan_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioGender","1224","153","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var RadioGender_innerdataset = new nexacro.NormalDataset("RadioGender_innerdataset", obj);
            RadioGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(RadioGender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RadioGyojikYn","1224","181","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            var RadioGyojikYn_innerdataset = new nexacro.NormalDataset("RadioGyojikYn_innerdataset", obj);
            RadioGyojikYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이수</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미이수</Col></Row></Rows>");
            obj.set_innerdataset(RadioGyojikYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("edtJuya","340","97","184","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBunban","930","97","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGukjeok","1224","209","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","60","25","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","0","1640","10",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","1320","790",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","1632","721",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","110","234","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","153","30","35","67",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo","680","153","389","22",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_enable("false");
            obj.set_format("######-#{######}");
            obj.set_type("string");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학생포트폴리오조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHakbeon","value","dsHakjeokGibon","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtNm","value","dsHakjeokGibon","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtEnm","value","dsHakjeokGibon","HAKSAENG_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCnm","value","dsHakjeokGibon","HAKSAENG_CNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSosok","value","dsHakjeokGibon","SOSOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtHaknyeon","value","dsHakjeokGibon","HAKNYEON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtHaknyeonje","value","dsHakjeokGibon","HAKNYEONJE_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJidogyosu","value","dsHakjeokGibon","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtHakjeokSangtae","value","dsHakjeokGibon","HAKJEOK_STNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtByeondongSayu","value","dsHakjeokGibon","BYEONDONG_SANGSE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calByeondongDt","value","dsHakjeokGibon","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","calBirthday","value","dsHakjeokGibon","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","RadioGender","value","dsHakjeokGibon","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","RadioGyojikYn","value","dsHakjeokGibon","GYOJIK_ISU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtJolubDt","value","dsHakjeokGibon","JOLEOP_GIJUN_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","RadioBunban","value","dsHakjeokGibon","BUNBAN_BYEONGYEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtBunbanDt","value","dsHakjeokGibon","BUNBAN_BYEONGYEONG_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab.HakjeokGibon.form.edtHpNo","value","dsHakjeokGibon","HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab.HakjeokGibon.form.edtTelNo","value","dsHakjeokGibon","TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab.HakjeokGibon.form.edtEmail","value","dsHakjeokGibon","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab.HakjeokGibon.form.edtPostNo","value","dsHakjeokGibon","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab.HakjeokGibon.form.edtAddr1","value","dsHakjeokGibon","ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab.HakjeokGibon.form.edtAddr2","value","dsHakjeokGibon","ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab.HakjeokGibon.form.edtBohojaNm","value","dsHakjeokGibon","BOHOJA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab.HakjeokGibon.form.edtBohojaHpNo","value","dsHakjeokGibon","BOHOJA_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab.HakjeokGibon.form.edtBohojaTelNo","value","dsHakjeokGibon","BOHOJA_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab.HakjeokGibon.form.edtBohojaPostNo","value","dsHakjeokGibon","BOHOJA_POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab.HakjeokGibon.form.edtBohojaAddr1","value","dsHakjeokGibon","BOHOJA_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab.HakjeokGibon.form.edtBohojaAddr2","value","dsHakjeokGibon","ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab.IphakJeongbo.form.edtChulsinGogyoNm","value","dsHakjeokGibon","CHULSINGOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab.IphakJeongbo.form.edtChulsinGogyoCd","value","dsHakjeokGibon","CHULSINGOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab.IphakJeongbo.form.calGogyoJolubDt","value","dsHakjeokGibon","CHULSINGOGYO_JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab.IphakJeongbo.form.edtGogyoGb","value","dsHakjeokGibon","GOGYOGYEYEOL_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab.IphakJeongbo.form.edtChulsinDaehakNm","value","dsHakjeokGibon","CHULSINDAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab.IphakJeongbo.form.edtChulsinHakgwa","value","dsHakjeokGibon","CHULSINDAEHAK_HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab.IphakJeongbo.form.edtDaehakJolubYYYY","value","dsHakjeokGibon","CHULSINDAEHAK_JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab.IphakJeongbo.form.edtPyeonibHaknyeon","value","dsHakjeokGibon","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab.IphakJeongbo.form.edtInjeongHakjeom","value","dsHakjeokGibon","INJEONG_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab.IphakJeongbo.form.edtGyogwaGwajeong","value","dsHakjeokGibon","GYOGWA_GWAJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab.IphakJeongbo.form.edtMojibGb","value","dsHakjeokGibon","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab.IphakJeongbo.form.edtSuheomNo","value","dsHakjeokGibon","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab.IphakJeongbo.form.edtJeongwonGb","value","dsHakjeokGibon","JEONGWONNAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab.IphakJeongbo.form.edtIbhakHakgwa","value","dsHakjeokGibon","IPHAK_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab.IphakJeongbo.form.edtMojibjeonhyung","value","dsHakjeokGibon","IPHAK_JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab.IphakJeongbo.form.calIbhakDt","value","dsHakjeokGibon","IPHAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab.IphakJeongbo.form.edtJolubYYYY","value","dsHakjeokGibon","JOLEOP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab.IphakJeongbo.form.edtJolubHakgi","value","dsHakjeokGibon","JOLEOP_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab.IphakJeongbo.form.calJolubDt","value","dsHakjeokGibon","JOLEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","tab.IphakJeongbo.form.edtJolubHakgwaSeokcha","value","dsHakjeokGibon","JOLEOP_HAKGWA_SEOKCHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab.IphakJeongbo.form.edtJolubHakgwaChongSeokcha","value","dsHakjeokGibon","JOLEOP_HAKGWA_CHONGWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab.IphakJeongbo.form.edtJolubjeoncheSeokcha","value","dsHakjeokGibon","JOLEOP_JEONCHE_SEOKCHA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab.IphakJeongbo.form.edtJolubJeoncheChongSeokcha","value","dsHakjeokGibon","JOLEOP_JEONCHE_CHONGWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab.IphakJeongbo.form.edtJolubjeungNo","value","dsHakjeokGibon","JOLEOP_JEUNGSEO_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab.IphakJeongbo.form.edtHakwiDeungrokNo","value","dsHakjeokGibon","HAKWI_DEUNGROK_NO1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab.IphakJeongbo.form.edtEHakwiDeungrokNo","value","dsHakjeokGibon","HAKWI_DEUNGROK_NO2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab.IphakJeongbo.form.edtHakwiCd","value","dsHakjeokGibon","HAKWI_CD1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab.IphakJeongbo.form.edtGyowonJagyeokNo","value","dsHakjeokGibon","GYOWON_JAGYEOK_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab.IphakJeongbo.form.edtInjeongHakgiCnt","value","dsHakjeokGibon","INJEONG_HAKGI_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab.IphakJeongbo.form.edtGyowonJeungNo","value","dsHakjeokGibon","GYOWON_JEUNGSEO_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJuya","value","dsHakjeokGibon","JUYA_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtBunban","value","dsHakjeokGibon","BUNBAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtGukjeok","value","dsHakjeokGibon","GUKJEOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab.HakjeokGibon.form.edtBalsongGb","value","dsHakjeokGibon","BALSONGJUSO_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab.HakjeokGibon.form.edtBohojaGajokGwangye","value","dsHakjeokGibon","BOHOJA_GWANGYE_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab.Siganpyo.form.spnYYYY","value","ds_siganpyoInput","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","tab.Siganpyo.form.cboHakgi","value","ds_siganpyoInput","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","tab.Seongjeok.form.Div03.form.MaskEdit00","value","dsChongSeongjeok","JEONGONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","tab.Seongjeok.form.Div03.form.MaskEdit04","value","dsChongSeongjeok","GYOYANG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","tab.Seongjeok.form.Div03.form.MaskEdit08","value","dsChongSeongjeok","GYOJIK_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","tab.Seongjeok.form.Div03.form.MaskEdit12","value","dsChongSeongjeok","GONGTONG_ISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","tab.Seongjeok.form.Div03.form.MaskEdit01","value","dsChongSeongjeok","JEONGONG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","tab.Seongjeok.form.Div03.form.MaskEdit05","value","dsChongSeongjeok","GYOYANG_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","tab.Seongjeok.form.Div03.form.MaskEdit09","value","dsChongSeongjeok","GYOJIK_JEOMSUGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","tab.Seongjeok.form.Div03.form.MaskEdit13","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","tab.Seongjeok.form.Div03.form.MaskEdit02","value","dsChongSeongjeok","JEONGONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","tab.Seongjeok.form.Div03.form.MaskEdit06","value","dsChongSeongjeok","GYOYANG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","tab.Seongjeok.form.Div03.form.MaskEdit10","value","dsChongSeongjeok","GYOJIK_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","tab.Seongjeok.form.Div03.form.MaskEdit14","value","dsChongSeongjeok","GONGTONG_JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","tab.Seongjeok.form.Div03.form.MaskEdit03","value","dsChongSeongjeok","JEONGONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","tab.Seongjeok.form.Div03.form.MaskEdit07","value","dsChongSeongjeok","GYOYANG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","tab.Seongjeok.form.Div03.form.MaskEdit11","value","dsChongSeongjeok","GYOJIK_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","tab.Seongjeok.form.Div03.form.MaskEdit15","value","dsChongSeongjeok","GONGTONG_PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","tab.ChiupChucheonseo.form.edtChucheonGyosuCd","value","dsChucheonseo","CHUCHEON_GYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","tab.ChiupChucheonseo.form.edtChucheonGyosuNm","value","dsChucheonseo","CHUCHEON_GYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","tab.ChiupChucheonseo.form.calJakseongDt","value","dsChucheonseo","JAKSEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","tab.ChiupChucheonseo.form.edtGiganNm","value","dsChucheonseo","EOPCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","tab.ChiupChucheonseo.form.edtChucheonTitle","value","dsChucheonseo","CHUCHEON_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","tab.ChiupChucheonseo.form.edtPumhaeng","value","dsChucheonseo","PUMHAENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","tab.ChiupChucheonseo.form.edtGyouHakgyo","value","dsChucheonseo","GYOU_HAKGYO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","tab.ChiupChucheonseo.form.edtGitaSahang","value","dsChucheonseo","GITA_SAHANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","tab.DoseoYeoncheJeongbo.form.chk_03","value","dsDoseo","DELY_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","tab.DoseoYeoncheJeongbo.form.chk_03_00","value","dsDoseo","LEND_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","tab.DoseoYeoncheJeongbo.form.edt_02_06_00_00","value","dsDoseo","LEND_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","mdtResNo","value","dsHakjeokGibon","RES_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsHakjeokGibon");
            this._addPreloadList("data","","dsHakjeokByeondong");
            this._addPreloadList("data","","dsHakjeokbuJeongjeong");
            this._addPreloadList("data","","dsDeungrokgeumNapbu");
            this._addPreloadList("data","","dsDeungrokgeumHwanbul");
            this._addPreloadList("data","","dsJanghak");
            this._addPreloadList("data","","dsSugangM");
            this._addPreloadList("data","","dsSugangD");
            this._addPreloadList("data","","dsSiganpyo");
            this._addPreloadList("data","","dsChongSeongjeok");
            this._addPreloadList("data","","dsHakgiSeongjeok");
            this._addPreloadList("data","","dsGwamokSeongjeok");
            this._addPreloadList("data","","dsGwamokIryeok");
            this._addPreloadList("data","","dsEohak");
            this._addPreloadList("data","","dsJagyeok");
            this._addPreloadList("data","","dsEohakYeonsu");
            this._addPreloadList("data","","dsChucheonseo");
            this._addPreloadList("data","","dsDoseo");
            this._addPreloadList("data","","dsBigyogwa");
            this._addPreloadList("data","","dsDanche");
            this._addPreloadList("data","","dsIryeokseo");
        };
        
        // User Script
        this.registerScript("UI01_2090102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UI01_2090102_M.xfdl(학생포트폴리오조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/24
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

        	if( !this.gfn_isNull(this.getOwnerFrame().hakbeon))
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.getOwnerFrame().hakbeon);
        	}
        	else
        	{
        		this.ds_input.setColumn(0, "HAKBEON", objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        		this.btnClose.set_visible(false);
        	}

        	this.fn_Ret();
        	this.fn_HakjeokByeondongRet();
        	this.fn_HakjeokbuJeongjeongRet();
        	this.fn_DeungrokgeumNapbuRet();
        	this.fn_DeungrokgeumHwanbulRet();
        	this.fn_JanghakRet();
        	this.fn_SugangMRet();
        	this.fn_ChongSeongjeokRet();
        	this.fn_HakgiSeongjeokRet();
        	this.fn_GwamokIryeokRet();
        	this.fn_EohakRet();
        	this.fn_JagyeokRet();
        	this.fn_EohakYeonsuRet();
        	this.fn_ChucheonseoRet();
        	this.fn_DoseoRet();
        	this.fn_BigyogwaRet();
        	this.fn_DancheRet();
        	this.fn_IryeokseoRet();

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_siganpyoInput.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_siganpyoInput.setColumn(0,"HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		this.fn_SiganpyoRet();
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.tab.HakjeokByeondong.form.grdHakjeokByeondong);
        	this.gfn_clearSortAll(this.tab.HakjeokByeondong.form.grdHakjeokbuJeongjeong);
        	this.gfn_clearSortAll(this.tab.Deungrok.form.grdDeungrokgeumNapbu);
        	this.gfn_clearSortAll(this.tab.Deungrok.form.grdDeungrokgeumHwanbul);
        	this.gfn_clearSortAll(this.tab.Janghak.form.grdJanghak);
        	this.gfn_clearSortAll(this.tab.Sugang.form.grdSugangM);
        	this.gfn_clearSortAll(this.tab.Sugang.form.grdSugangD);
        	this.gfn_clearSortAll(this.tab.Siganpyo.form.grdSiganpyo);
        	this.gfn_clearSortAll(this.tab.Seongjeok.form.grdChongSeongjeok);
        	this.gfn_clearSortAll(this.tab.Seongjeok.form.grdHakgiSeongjeok);
        	this.gfn_clearSortAll(this.tab.Seongjeok.form.grdGwamokSeongjeok);
        	this.gfn_clearSortAll(this.tab.SeongjeokIryeok.form.grdGwamokIryeok);
        	this.gfn_clearSortAll(this.tab.HaksaengIryeok.form.grdEohak);
        	this.gfn_clearSortAll(this.tab.HaksaengIryeok.form.grdJagyeok);
        	this.gfn_clearSortAll(this.tab.HaksaengIryeok.form.grdEohakYeonsu);
        	this.gfn_clearSortAll(this.tab.ChiupChucheonseo.form.grdChucheonseo);
        	this.gfn_clearSortAll(this.tab.Bigyogwa.form.grdBigyogwa);
        	this.gfn_clearSortAll(this.tab.Danche.form.grdDanche);
        	this.gfn_clearSortAll(this.tab.Iryeokseo.form.grdIryeokseo);

            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }
        	else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
        				break;
        			case "HakjeokByeondongRet":
        					this.fn_PostHakjeokByeondongRet();
        				break;
        			case "HakjeokbuJeongjeongRet":
        					this.fn_PostHakjeokbuJeongjeongRet();
        				break;
        			case "DeungrokgeumNapbuRet":
        					this.fn_PostDeungrokgeumNapbuRet();
        				break;
        			case "DeungrokgeumHwanbulRet":
        					this.fn_PostDeungrokgeumHwanbulRet();
        				break;
        			case "JanghakRet":
        					this.fn_PostJanghakRet();
        				break;
        			case "SugangMRet":
        					this.fn_PostSugangMRet();
        				break;
        			case "SugangDRet":
        					this.fn_PostSugangDRet();
        				break;
        			case "SiganpyoRet":
        					this.fn_PostSiganpyoRet();
        				break;
        			case "ChongSeongjeokRet":
        					this.fn_PostChongSeongjeokRet();
        				break;
        			case "HakgiSeongjeokRet":
        					this.fn_PostHakgiSeongjeokRet();
        				break;
        			case "GwamokSeongjeokRet":
        					this.fn_PostGwamokSeongjeokRet();
        				break;
        			case "GwamokIryeokRet":
        					this.fn_PostGwamokIryeokRet();
        				break;
        			case "EohakRet":
        					this.fn_PostEohakRet();
        				break;
        			case "JagyeokRet":
        					this.fn_PostJagyeokRet();
        				break;
        			case "EohakYeonsuRet":
        					this.fn_PostEohakYeonsuRet();
        				break;
        			case "ChucheonseoRet":
        					this.fn_PostChucheonseoRet();
        				break;
        			case "DoseoRet":
        					this.fn_PostDoseoRet();
        				break;
        			case "BigyogwaRet":
        					this.fn_PostBigyogwaRet();
        				break;
        			case "DancheRet":
        					this.fn_PostDancheRet();
        				break;
        			case "IryeokseoRet":
        					this.fn_PostIryeokseoRet();
        				break;
        			case "IryeokseoDel":
        					this.fn_PostIryeokseoDel();
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
        		case "Iryeokseo" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "CLOSE")
        				{
        					this.fn_IryeokseoRet();
        				}
        			break;
        		default:
                    break;
        	}
         };
        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
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
            var strUrl      = "/prj/UI/UI01/Retrieve_2090102_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsHakjeokGibon=dsHakjeokGibon";
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
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	this.fn_picLoad(this.dsHakjeokGibon);
        };

        /**********************************************************************
                05-1. 학적변동 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHakjeokByeondongRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakjeokByeondongRet = function()
        {
            if(!this.fn_PreHakjeokByeondongRet())
            {
                return false;
            }
            var strSvc      = "HakjeokByeondongRet";
            var strUrl      = "/prj/UI/UI01/byeondongRetrieve_2090102_T03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsHakjeokByeondong=dsHakjeokByeondong";
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
        this.fn_PostHakjeokByeondongRet = function()
        {
            this.gfn_getRowCount(this.tab.HakjeokByeondong.form.stRowCnt,this.dsHakjeokByeondong);
        };

        /**********************************************************************
                05-2. 학적부정정내역 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHakjeokbuJeongjeongRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakjeokbuJeongjeongRet = function()
        {
            if(!this.fn_PreHakjeokbuJeongjeongRet())
            {
                return false;
            }
            var strSvc      = "HakjeokbuJeongjeongRet";
            var strUrl      = "/prj/UI/UI01/jeongjeongRetrieve_2090102_T03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsHakjeokbuJeongjeong=dsHakjeokbuJeongjeong";
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
        this.fn_PostHakjeokbuJeongjeongRet = function()
        {
            this.gfn_getRowCount(this.tab.HakjeokByeondong.form.stRowCnt2,this.dsHakjeokbuJeongjeong);
        };

        /**********************************************************************
                05-3. 등록금납부 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDeungrokgeumNapbuRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DeungrokgeumNapbuRet = function()
        {
            if(!this.fn_PreDeungrokgeumNapbuRet())
            {
                return false;
            }
            var strSvc      = "DeungrokgeumNapbuRet";
            var strUrl      = "/prj/UI/UI01/deungrokgeumNapbuRetrieve_2090102_T04.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeungrokgeumNapbu=dsDeungrokgeumNapbu";
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
        this.fn_PostDeungrokgeumNapbuRet = function()
        {
            this.gfn_getRowCount(this.tab.Deungrok.form.stRowCnt3,this.dsDeungrokgeumNapbu);
        };

        /**********************************************************************
                05-4. 등록금환불 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDeungrokgeumHwanbulRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DeungrokgeumHwanbulRet = function()
        {
            if(!this.fn_PreDeungrokgeumHwanbulRet())
            {
                return false;
            }
            var strSvc      = "DeungrokgeumHwanbulRet";
            var strUrl      = "/prj/UI/UI01/deungrokgeumHwanbulRetrieve_2090102_T04.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeungrokgeumHwanbul=dsDeungrokgeumHwanbul";
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
        this.fn_PostDeungrokgeumHwanbulRet = function()
        {
            this.gfn_getRowCount(this.tab.Deungrok.form.stRowCnt4,this.dsDeungrokgeumHwanbul);
        };

        /**********************************************************************
                05-5. 장학 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreJanghakRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JanghakRet = function()
        {
            if(!this.fn_PreJanghakRet())
            {
                return false;
            }
            var strSvc      = "JanghakRet";
            var strUrl      = "/prj/UI/UI01/janghakRetrieve_2090102_T05.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJanghak=dsJanghak";
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
        this.fn_PostJanghakRet = function()
        {
            this.gfn_getRowCount(this.tab.Janghak.form.stRowCnt5,this.dsJanghak);
        };

        /**********************************************************************
                05-6. 수강마스터 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSugangMRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SugangMRet = function()
        {
            if(!this.fn_PreSugangMRet())
            {
                return false;
            }
            var strSvc      = "SugangMRet";
            var strUrl      = "/prj/UI/UI01/sugangMRetrieve_2090102_T06.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsSugangM=dsSugangM";
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
        this.fn_PostSugangMRet = function()
        {
            this.gfn_getRowCount(this.tab.Sugang.form.stRowCnt6,this.dsSugangM);
        };

        /**********************************************************************
                05-7. 수강디테일 조회 함수 선언(탭 함수)
        ***********************************************************************/
        this.dsSugangM_onrowposchanged = function(obj,e)
        {
        	this.fn_SugangDRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSugangDRet = function()
        {
        	this.ds_sugangInput.setColumn(0, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        	this.ds_sugangInput.setColumn(0, "YYYY", this.dsSugangM.getColumn(this.dsSugangM.rowposition, "YYYY"));
        	this.ds_sugangInput.setColumn(0, "HAKGI", this.dsSugangM.getColumn(this.dsSugangM.rowposition, "HAKGI"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SugangDRet = function()
        {
            if(!this.fn_PreSugangDRet())
            {
                return false;
            }
            var strSvc      = "SugangDRet";
            var strUrl      = "/prj/UI/UI01/sugangDRetrieve_2090102_T06.do";
            var strInDs     = "ds_sugangInput=ds_sugangInput";
            var strOutDs    = "dsSugangD=dsSugangD";
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
        this.fn_PostSugangDRet = function()
        {
            this.gfn_getRowCount(this.tab.Sugang.form.stRowCnt7,this.dsSugangD);
        };

        /**********************************************************************
                05-8. 시간표 조회 함수 선언(탭 함수)
        ***********************************************************************/
        this.tab_Siganpyo_spnYYYY_onchanged = function(obj,e)
        {
        	this.fn_SiganpyoRet();
        };

        this.tab_Siganpyo_cboHakgi_onitemchanged = function(obj,e)
        {
        	this.fn_SiganpyoRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSiganpyoRet = function()
        {
            // 조회조건 셋팅
        	this.ds_siganpyoInput.setColumn(0, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SiganpyoRet = function()
        {
            if(!this.fn_PreSiganpyoRet())
            {
                return false;
            }
            var strSvc      = "SiganpyoRet";
            var strUrl      = "/prj/UI/UI01/siganpyoRetrieve_2090102_T07.do";
            var strInDs     = "ds_siganpyoInput=ds_siganpyoInput";
            var strOutDs    = "dsSiganpyo=dsSiganpyo";
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
        this.fn_PostSiganpyoRet = function()
        {

        };

        /**********************************************************************
                05-9. 총성적 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreChongSeongjeokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ChongSeongjeokRet = function()
        {
            if(!this.fn_PreChongSeongjeokRet())
            {
                return false;
            }
            var strSvc      = "ChongSeongjeokRet";
            var strUrl      = "/prj/UI/UI01/chongSeongjeokRetrieve_2090102_T08.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsChongSeongjeok=dsChongSeongjeok";
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
        this.fn_PostChongSeongjeokRet = function()
        {
            this.gfn_getRowCount(this.tab.Seongjeok.form.stRowCnt9,this.dsChongSeongjeok);
        };

        /**********************************************************************
                05-10. 학기별성적 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreHakgiSeongjeokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakgiSeongjeokRet = function()
        {
            if(!this.fn_PreHakgiSeongjeokRet())
            {
                return false;
            }
            var strSvc      = "HakgiSeongjeokRet";
            var strUrl      = "/prj/UI/UI01/hakgiSeongjeokRetrieve_2090102_T08.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsHakgiSeongjeok=dsHakgiSeongjeok";
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
        this.fn_PostHakgiSeongjeokRet = function()
        {
            this.gfn_getRowCount(this.tab.Seongjeok.form.stRowCnt10,this.dsHakgiSeongjeok);
        };

        /**********************************************************************
                05-11. 과목별성적 조회 함수 선언(탭 함수)
        ***********************************************************************/
        this.dsHakgiSeongjeok_onrowposchanged = function(obj,e)
        {
        	this.fn_GwamokSeongjeokRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreGwamokSeongjeokRet = function()
        {
            // 조회조건 셋팅

        	var pHakgi = '';
        	var hakgi  = this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "HAKGI");
        	var flag   = hakgi.substr(hakgi.length-1, 1);

        	if (flag != 'P' && flag != 'I')
        	{
        		flag   = 'N';
        		pHakgi = hakgi;
        	}
        	else pHakgi = hakgi.substr(0, hakgi.length-1);

        	this.ds_gwamokSeongjeokInput.setColumn(0, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        	this.ds_gwamokSeongjeokInput.setColumn(0, "YYYY", this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "YYYY"));
        	this.ds_gwamokSeongjeokInput.setColumn(0, "HAKGI", this.dsHakgiSeongjeok.getColumn(this.dsHakgiSeongjeok.rowposition, "HAKGI"));
        	this.ds_gwamokSeongjeokInput.setColumn(0, "FLAG", flag);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GwamokSeongjeokRet = function()
        {
            if(!this.fn_PreGwamokSeongjeokRet())
            {
                return false;
            }
            var strSvc      = "GwamokSeongjeokRet";
            var strUrl      = "/prj/UI/UI01/gwamokSeongjeokRetrieve_2090102_T08.do";
            var strInDs     = "ds_gwamokSeongjeokInput=ds_gwamokSeongjeokInput";
            var strOutDs    = "dsGwamokSeongjeok=dsGwamokSeongjeok";
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
        this.fn_PostGwamokSeongjeokRet = function()
        {
            this.gfn_getRowCount(this.tab.Seongjeok.form.stRowCnt11,this.dsGwamokSeongjeok);
        };

        /**********************************************************************
                05-12. 과목별성적이력 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreGwamokIryeokRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_GwamokIryeokRet = function()
        {
            if(!this.fn_PreGwamokIryeokRet())
            {
                return false;
            }
            var strSvc      = "GwamokIryeokRet";
            var strUrl      = "/prj/UI/UI01/gwamokIryeokRetrieve_2090102_T09.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGwamokIryeok=dsGwamokIryeok";
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
        this.fn_PostGwamokIryeokRet = function()
        {
            this.gfn_getRowCount(this.tab.SeongjeokIryeok.form.stRowCnt12,this.dsGwamokIryeok);
        };

        /**********************************************************************
                05-13. 어학 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreEohakRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_EohakRet = function()
        {
            if(!this.fn_PreEohakRet())
            {
                return false;
            }
            var strSvc      = "EohakRet";
            var strUrl      = "/prj/UI/UI01/eohakRetrieve_2090102_T10.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsEohak=dsEohak";
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
        this.fn_PostEohakRet = function()
        {
            this.gfn_getRowCount(this.tab.HaksaengIryeok.form.stRowCnt13,this.dsEohak);
        };


        /**********************************************************************
                05-14. 자격 조회 함수 선언(탭 함수)
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
            var strUrl      = "/prj/UI/UI01/jagyeokRetrieve_2090102_T10.do";
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
            this.gfn_getRowCount(this.tab.HaksaengIryeok.form.stRowCnt14,this.dsJagyeok);
        };

        /**********************************************************************
                05-15. 어학연수 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreEohakYeonsuRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_EohakYeonsuRet = function()
        {
            if(!this.fn_PreEohakYeonsuRet())
            {
                return false;
            }
            var strSvc      = "EohakYeonsuRet";
            var strUrl      = "/prj/UI/UI01/eohakYeonsuRetrieve_2090102_T10.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsEohakYeonsu=dsEohakYeonsu";
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
        this.fn_PostEohakYeonsuRet = function()
        {
            this.gfn_getRowCount(this.tab.HaksaengIryeok.form.stRowCnt15, this.dsEohakYeonsu);
        };

        /**********************************************************************
                05-16. 취업추천서 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreChucheonseoRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ChucheonseoRet = function()
        {
            if(!this.fn_PreChucheonseoRet())
            {
                return false;
            }
            var strSvc      = "ChucheonseoRet";
            var strUrl      = "/prj/UI/UI01/chucheonseoRetrieve_2090102_T11.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsChucheonseo=dsChucheonseo";
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
        this.fn_PostChucheonseoRet = function()
        {
            this.gfn_getRowCount(this.tab.ChiupChucheonseo.form.stRowCnt16,this.dsChucheonseo);
        };


        /**********************************************************************
                05-17. 도서연체정보 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDoseoRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DoseoRet = function()
        {
            if(!this.fn_PreDoseoRet())
            {
                return false;
            }
            var strSvc      = "DoseoRet";
            var strUrl      = "/prj/UI/UI01/doseoRetrieve_2090102_T12.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDoseo=dsDoseo";
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
        this.fn_PostDoseoRet = function()
        {

        };

        /**********************************************************************
                05-18. 비교과 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreBigyogwaRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_BigyogwaRet = function()
        {
            if(!this.fn_PreBigyogwaRet())
            {
                return false;
            }
            var strSvc      = "BigyogwaRet";
            var strUrl      = "/prj/UI/UI01/bigyogwaRetrieve_2090102_T13.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsBigyogwa=dsBigyogwa";
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
        this.fn_PostBigyogwaRet = function()
        {
            this.gfn_getRowCount(this.tab.Bigyogwa.form.stRowCnt17,this.dsBigyogwa);
        };

        /**********************************************************************
                05-19. 단체 조회 함수 선언(탭 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDancheRet = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DancheRet = function()
        {
            if(!this.fn_PreDancheRet())
            {
                return false;
            }
            var strSvc      = "DancheRet";
            var strUrl      = "/prj/UI/UI01/dancheRetrieve_2090102_T14.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDanche=dsDanche";
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
        this.fn_PostDancheRet = function()
        {
            this.gfn_getRowCount(this.tab.Danche.form.stRowCnt18,this.dsDanche);
        };

        /**********************************************************************
                05-20. 이력서목록 조회 함수 선언(탭 함수)
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
            var strUrl      = "/prj/UI/UI01/iryeokseoRetrieve_2090102_T15.do";
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
            this.gfn_getRowCount(this.tab.Iryeokseo.form.stRowCnt19,this.dsIryeokseo);
        };

        /**********************************************************************
                06. 이력서 삭제 함수 선언
        ***********************************************************************/
        this.tab_Iryeokseo_btn_del_onclick = function(obj,e)
        {
        	this.fn_IryeokseoDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreIryeokseoDel = function()
        {
            //멀티삭제용도
            if(this.dsIryeokseo.rowcount < 1 || this.dsIryeokseo.findRow("CHK",1) == -1)
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
        	this.dsIryeokseo.set_enableevent(false);
            for(var i=this.dsIryeokseo.rowcount-1;i>-1;i--)
            {
                if(this.dsIryeokseo.getColumn(i,"CHK") == "1" || this.dsIryeokseo.getRowType(i) == 2)
                {
                    this.dsIryeokseo.deleteRow(i);
                }
            }
            this.dsIryeokseo.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_IryeokseoDel = function()
        {

            if(!this.fn_PreIryeokseoDel())
            {
                return false;
            }

            var strSvc      = "IryeokseoDel";
            var strUrl      = "/prj/UI/UI01/iryeokseoDelete_2090102_T15.do";
            var strInDs     = "dsIryeokseo=dsIryeokseo:u";
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

        this.fn_PostIryeokseoDel = function()
        {
            this.gfn_getRowCount(this.tab.Iryeokseo.form.stRowCnt19,this.dsIryeokseo);
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdIryeokseo_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdIryeokseo.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };
        /**
         *      그리드멀티 소트정열
         */
        this.grdHakjeokByeongdong_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdHakjeokbuJeongjeong_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdDeungrokgeumNapbu_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdDeungrokgeumHwanbul_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdJanghak_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.grdSugangM_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdSugangD_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdHakgiSeongjeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdGwamokSeongjeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdGwamokIryeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdEohak_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdJagyeok_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdEohakYeonsu_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdEohakYeonsu.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdChucheonseo_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdBigyogwa_onheaddblclick = function(obj,e)
        {
            if(e.cell != 0)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdDanche_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.grdIryeokseo_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.tab.Iryeokseo.form.grdIryeokseo.getBindCellIndex("body","CHK") && e.cell != 1)
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

        /**********************************************************************
                08. 팝업, 출력물, 사진
        ***********************************************************************/
        // 이력서 팝업
        this.tab_Iryeokseo_btn_add_onclick = function(obj,e)
        {
            var hakbeon    = this.ds_input.getColumn(0, "HAKBEON"); //학번
        	var jagseongDt = this.gfn_getSvrDate();                 //작성일자
        	var oArg = {dsArg:this.dsHakjeokGibon, hakbeon:hakbeon};  //작성일자 안넘어 가는 것이 맞음
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "Iryeokseo","UI01::UI01_2090102_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.tab_Iryeokseo_grdIryeokseo_oncellclick = function(obj,e)
        {
        	// 이력서 팝업
        	if(e.col == 2)
        	{
        		var hakbeon    = this.dsIryeokseo.getColumn(this.dsIryeokseo.rowposition, "HAKBEON");      //학번
        		var jagseongDt = this.dsIryeokseo.getColumn(this.dsIryeokseo.rowposition, "JAGSEONG_DT");  //작성일자
        		var oArg = {dsArg:this.dsHakjeokGibon, hakbeon:hakbeon, jagseongDt:jagseongDt};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Iryeokseo","UI01::UI01_2090102_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        	// 이력서 출력물
        	if(e.col == 3)
        	{
        		var HAKBEON     = this.dsIryeokseo.getColumn(this.dsIryeokseo.rowposition, 'HAKBEON');
        		var JAGSEONG_DT = this.dsIryeokseo.getColumn(this.dsIryeokseo.rowposition, 'JAGSEONG_DT');

        		var param = { HAKBEON     : HAKBEON
        					, JAGSEONG_DT : JAGSEONG_DT
        					};

        		this.gfn_commonUtils_report('UI01/UI01_2090102_T15_01.crf',  param);
        	}
        };

        // 취업추천서 출력물
        this.tab_ChiupChucheonseo_btnChucheonseoPrint_onclick = function(obj,e)
        {
        	var HAKBEON = this.dsChucheonseo.getColumn(this.dsChucheonseo.rowposition, 'HAKBEON');
        	var SEQ = this.dsChucheonseo.getColumn(this.dsChucheonseo.rowposition, 'SEQ');

        	var param = { HAKBEON : HAKBEON
        				, SEQ	  : SEQ
        				};

        	this.gfn_commonUtils_report('US01/US01_2010101_M_T14.crf',  param);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_14_00_00_00_01.addEventHandler("onclick",this.stc_14_00_00_00_01_onclick,this);
            this.tab.addEventHandler("onchanged",this.tab_00_onchanged,this);
            this.tab.HakjeokGibon.form.stc_13_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.HakjeokGibon.form.stc_13_00_00_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.tab.IphakJeongbo.form.stc_12_06_00_00_00.addEventHandler("onclick",this.tab_00_Tabpage2_stc_12_06_00_00_00_onclick,this);
            this.tab.HakjeokByeondong.form.grdHakjeokByeondong.addEventHandler("onheaddblclick",this.grdHakjeokByeongdong_onheaddblclick,this);
            this.tab.HakjeokByeondong.form.grdHakjeokbuJeongjeong.addEventHandler("onheaddblclick",this.grdHakjeokbuJeongjeong_onheaddblclick,this);
            this.tab.Deungrok.form.grdDeungrokgeumNapbu.addEventHandler("onheaddblclick",this.grdDeungrokgeumNapbu_onheaddblclick,this);
            this.tab.Deungrok.form.grdDeungrokgeumHwanbul.addEventHandler("onheaddblclick",this.grdDeungrokgeumHwanbul_onheaddblclick,this);
            this.tab.Janghak.form.grdJanghak.addEventHandler("onheaddblclick",this.grdJanghak_onheaddblclick,this);
            this.tab.Sugang.form.grdSugangM.addEventHandler("onheaddblclick",this.grdSugangM_onheaddblclick,this);
            this.tab.Sugang.form.grdSugangD.addEventHandler("onheaddblclick",this.grdSugangD_onheaddblclick,this);
            this.tab.Siganpyo.form.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.Siganpyo.form.spnYYYY.addEventHandler("onkillfocus",this.tab_Tabpage7_spnYYYY_onkillfocus,this);
            this.tab.Siganpyo.form.spnYYYY.addEventHandler("onchanged",this.tab_Siganpyo_spnYYYY_onchanged,this);
            this.tab.Siganpyo.form.cboHakgi.addEventHandler("onkillfocus",this.tab_Tabpage7_cboHakgi_onkillfocus,this);
            this.tab.Siganpyo.form.cboHakgi.addEventHandler("onitemchanged",this.tab_Siganpyo_cboHakgi_onitemchanged,this);
            this.tab.Seongjeok.form.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.Seongjeok.form.stc_09_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.Seongjeok.form.grdHakgiSeongjeok.addEventHandler("onheaddblclick",this.grdHakgiSeongjeok_onheaddblclick,this);
            this.tab.Seongjeok.form.stc_09_01.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.Seongjeok.form.grdGwamokSeongjeok.addEventHandler("onheaddblclick",this.grdGwamokSeongjeok_onheaddblclick,this);
            this.tab.Seongjeok.form.stc_09_01_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.SeongjeokIryeok.form.grdGwamokIryeok.addEventHandler("onheaddblclick",this.grdGwamokIryeok_onheaddblclick,this);
            this.tab.SeongjeokIryeok.form.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.HaksaengIryeok.form.grdEohak.addEventHandler("onheaddblclick",this.grdEohak_onheaddblclick,this);
            this.tab.HaksaengIryeok.form.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.HaksaengIryeok.form.grdJagyeok.addEventHandler("onheaddblclick",this.grdJagyeok_onheaddblclick,this);
            this.tab.HaksaengIryeok.form.stc_09_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.HaksaengIryeok.form.grdEohakYeonsu.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.tab.HaksaengIryeok.form.grdEohakYeonsu.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.tab.HaksaengIryeok.form.stc_09_00_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.tab.ChiupChucheonseo.form.grdChucheonseo.addEventHandler("onheaddblclick",this.grdChucheonseo_onheaddblclick,this);
            this.tab.ChiupChucheonseo.form.btnChucheonseoPrint.addEventHandler("onclick",this.tab_ChiupChucheonseo_btnChucheonseoPrint_onclick,this);
            this.tab.Bigyogwa.form.grdBigyogwa.addEventHandler("onheaddblclick",this.grdBigyogwa_onheaddblclick,this);
            this.tab.Danche.form.grdDanche.addEventHandler("onheaddblclick",this.grdDanche_onheaddblclick,this);
            this.tab.Iryeokseo.form.grdIryeokseo.addEventHandler("onheaddblclick",this.grdIryeokseo_onheaddblclick,this);
            this.tab.Iryeokseo.form.grdIryeokseo.addEventHandler("onheadclick",this.grdIryeokseo_onheadclick,this);
            this.tab.Iryeokseo.form.grdIryeokseo.addEventHandler("oncellclick",this.tab_Iryeokseo_grdIryeokseo_oncellclick,this);
            this.tab.Iryeokseo.form.btn_add.addEventHandler("onclick",this.tab_Iryeokseo_btn_add_onclick,this);
            this.tab.Iryeokseo.form.btn_del.addEventHandler("onclick",this.tab_Iryeokseo_btn_del_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsSugangM.addEventHandler("onrowposchanged",this.dsSugangM_onrowposchanged,this);
            this.ds_siganpyoInput.addEventHandler("onrowposchanged",this.ds_siganpyoInput_onrowposchanged,this);
            this.dsHakgiSeongjeok.addEventHandler("onrowposchanged",this.dsHakgiSeongjeok_onrowposchanged,this);
        };
        this.loadIncludeScript("UI01_2090102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
