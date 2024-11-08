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
            this.set_titletext("장학지급관리(재학생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_MAGAM_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_MAGAM_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SODEUKBUNWI_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JAEIPHAK_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RES_NO_1\" type=\"STRING\" size=\"18\"/><Column id=\"DEUNGROK_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsSearchJigeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSuhye", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJigeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
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


            obj = new Dataset("dsHaksaeng", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakNm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_janghakInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JANGHAK_YYYY\"/><Col id=\"HAKGI\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakAmt", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sueopInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSueop", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cheoriInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheori", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAKDAESANG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUHYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_SANGTAE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"JUNGBOKSAKJE_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JUNGBOKSAKJE_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANSU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEOLJE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USEON_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAKGEUM_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"SUEOPRYO_JIGEUP_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"IPHAKGEUM_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOPRYO_JIGEUP_PAMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_GANEUNG_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_HWANSU_SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SODEUKBUNWI_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JAEIPHAK_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RES_NO_1\" type=\"STRING\" size=\"18\"/><Column id=\"DEUNGROK_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSodeuk", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_janghakJigeupInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"JANGHAK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghakJigeup", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
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
            obj = new Static("stc_09_00","0","90","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("장학 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","93","89","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","1",null,"1112","28",null,"140",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","0",null,"120","28",null,"140",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","107",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00","558",null,"120","28",null,"140",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("수혜구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0",null,"135","22",null,"171",null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("장학신청 상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","624",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","500","586","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","58",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","202","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","-2","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("지급상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","281","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","168","0","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","78","0","10","60",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","863","6","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","873","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJigeup","88","36","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJigeup");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","88","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","371","0","56","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","763","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01_00","382","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCd","472","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchJanghak","602","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_01","624","4","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakNm","634","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBokhak","233","36","96","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("등록마감기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","325","38","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchDeungrokMagamFr","335","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63_00","442","37","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchDeungrokMagamTo","458","36","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","26","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_01","558","32","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","585","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00","636","27","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","646","36","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_02","776","35","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00","807","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00","857","27","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","867","36","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_00_00","997","36","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","1029","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_00","1078","27","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","1088","36","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","198","30","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00","271","4","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00","462","5","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_01","592","5","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_02_00","754","1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_02_00_00","1223","1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00_00","1232","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_01","1332","6","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("edtSearchResNo","1342","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","1016","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00","1085","4","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","1095","9","128","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchHaknyeon");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00_02_00_00_00","1004","1","56","36",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_13_02","1",null,"1112","28",null,"112",null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02","0",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("장학명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00","558",null,"120","28",null,"112",null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("우선순위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00","1",null,"1112","28",null,"84",null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00","0",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("입학금비율/원");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00","278",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("수업료비율/원");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00","558",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("책정입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00","1",null,"1112","28",null,"56",null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_00","0",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("지급가능입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_00","278",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("지급가능등록금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00","558",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("지급입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01","1",null,"1112","28",null,"28",null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01","0",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_01_00_01","278",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01","558",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("총 환수입학금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_00","1",null,"1112","28",null,"0",null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00_01_00","0",null,"120","28",null,"0",null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("비고(선발취소사유)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Div("divCheckBoxCrt","721",null,null,"22","531","3",null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpload",null,"82","85","25","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("엑셀 업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"82","125","25","90",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀 양식 다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMoney",null,"82","75","25","220",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("현금지급");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeungrokMagamCancel",null,"82","95","25","300",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록마감취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeungrokMagam",null,"82","75","25","400",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("등록마감");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSunbalHwakjeong",null,"82","75","25","580",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선발확정");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSunbalHwakjeongCancel",null,"82","95","25","480",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선발확정취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnBanryeo",null,null,"75","25","0","176",null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("선발취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakCd","122",null,"120","22",null,"115",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnJanghak","252",null,"22","22",null,"115",null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJanghakNm","284",null,"270","22",null,"115",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","122",null,"120","22",null,"143",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Button("btnHakbeon","252",null,"22","22",null,"143",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaksaengNm","284",null,"120","22",null,"143",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCd00_00","406",null,"148","22",null,"143",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIphakgeumPamt","122",null,"153","22",null,"87",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupIphakgeum","122",null,"153","22",null,"59",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupSueopryo","401",null,"153","22",null,"59",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSueopryoPamt","401",null,"153","22",null,"87",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJigeupYn","122",null,"153","22",null,"31",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsYn");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBigo","122",null,"432","22",null,"3",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJigeupDt","401",null,"153","22",null,"32",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSuhye","680",null,"153","22",null,"143",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsSuhye");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUseonSeq","680",null,"153","22",null,"115",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIphakAmt","680",null,"153","22",null,"87",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupIphakAmt","680",null,"153","22",null,"59",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTotalHwansuIphakAmt","680",null,"153","22",null,"31",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_01","835",null,"120","28",null,"140",null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("지급상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_02","835",null,"120","28",null,"84",null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("책정등록금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00_00","835",null,"120","28",null,"56",null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("지급등록금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_00","835",null,"120","28",null,"28",null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("총 환수등록금");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTotalHwansuSueopAmt","957",null,"153","22",null,"31",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJigeupSueopAmt","957",null,"153","22",null,"59",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSueopAmt","957",null,"153","22",null,"87",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJigeup","957",null,"153","22",null,"143",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJigeup");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00_00_00_01","1113","590","10",null,null,"1",null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","1123",null,"135","22",null,"171",null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("학생 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,null,"517","28","0","140",null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_01",null,null,"517","28","0","112",null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_02",null,null,"517","28","0","84",null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_00_00",null,null,"517","28","0","56",null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_01",null,null,"517","28","0","28",null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_02","1123",null,"90","28",null,"140",null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_01","1123",null,"90","28",null,"112",null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_03","1123",null,"90","28",null,"84",null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00_01","1123",null,"90","28",null,"56",null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_01","1123",null,"90","28",null,"28",null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjeonSeongjeok","1462",null,"175","22",null,"143",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgwa","1215",null,"153","22",null,"143",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_datacolumn("DEPT_NM");
            obj.set_codecolumn("DEPT_CD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGrdHakgwa");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00_01_00","1310",null,"70","28",null,"56",null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("소득분위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_02_00","1370",null,"90","28",null,"140",null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("직전학기성적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_03_00","1370",null,"90","28",null,"84",null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("백분율");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","1215",null,null,"22","332","59",null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsJuya");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJeongong","1215",null,"153","22",null,"115",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_datacolumn("DEPT_NM");
            obj.set_codecolumn("DEPT_CD");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsGrdJeongong");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaknyeon","1215",null,"153","22",null,"87",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakjeokStcd","1215",null,"153","22",null,"31",null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsHakjeok");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwansu","1004",null,"105","22",null,"3",null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("환수 상세보기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_02_00_00","1370",null,"90","28",null,"112",null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("직전취득학점");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSodeukBunwi","1382",null,null,"22","165","59",null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsSodeuk");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikjeonHakjeom","1462",null,"175","22",null,"115",null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBaekbunyul","1462",null,"175","22",null,"87",null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_00_01_00_00","1478",null,"70","28",null,"56",null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("등록여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDeungrokYn","1550",null,null,"22","3","59",null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsYn");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_01_00","1370",null,"90","28",null,"28",null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("재입학여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJaeiphakYn","1462",null,"175","22",null,"31",null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsYn");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00_01_01_00",null,null,"517","28","0","0",null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_01_01","1123",null,"90","28",null,"0",null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("학적변동");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboByeondongCd","1215",null,"153","22",null,"3",null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_innerdataset("dsByeondong");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02_00_00_00_01_01_00_00","1370",null,"90","28",null,"0",null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("학적변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","1462",null,"175","22",null,"3",null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","114",null,null,"0","214",null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"160\"/><Column size=\"55\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"55\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" expr=\"expr:comp._allCheck\"/><Cell col=\"1\" text=\"NO\" textAlign=\"center\"/><Cell col=\"2\" text=\"장학명\" textAlign=\"center\"/><Cell col=\"3\" text=\"우선순위\"/><Cell col=\"4\" text=\"학과\" textAlign=\"center\"/><Cell col=\"5\" text=\"전공\"/><Cell col=\"6\" text=\"학년\" textAlign=\"center\"/><Cell col=\"7\" text=\"주야구분\"/><Cell col=\"8\" text=\"학번\" textAlign=\"center\"/><Cell col=\"9\" text=\"성명\" textAlign=\"center\"/><Cell col=\"10\" text=\"수혜구분\" textAlign=\"center\"/><Cell col=\"11\" text=\"지급입학금\" textAlign=\"center\"/><Cell col=\"12\" text=\"지급수업료\" textAlign=\"center\"/><Cell col=\"13\" text=\"지급상태\" textAlign=\"center\"/><Cell col=\"14\" text=\"지급일자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" textAlign=\"center\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:JANGHAK_CD\" textareaautoselect=\"true\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsJanghak\" combodatacol=\"JANGHAK_NM\" combocodecol=\"JANGHAK_CD\"/><Cell col=\"3\" text=\"bind:USEON_SEQ\"/><Cell col=\"4\" text=\"bind:HAKGWA_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsGrdHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\"/><Cell col=\"5\" text=\"bind:JEONGONG_CD\" displaytype=\"expr:JEONGONG_CD != &apos;&apos;?&apos;combotext&apos;:&apos;normal&apos;\" combodataset=\"dsGrdJeongong\" combodatacol=\"DEPT_NM\" combocodecol=\"DEPT_CD\"/><Cell col=\"6\" text=\"bind:HAKNYEON\" displaytype=\"combotext\" combodataset=\"dsHaknyeon\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"7\" text=\"bind:JUYA_GBCD\" displaytype=\"combotext\" combodataset=\"dsJuya\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"8\" text=\"bind:HAKBEON\"/><Cell col=\"9\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"10\" text=\"bind:SUHYE_GBCD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsSuhye\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"11\" text=\"bind:JIGEUP_IPHAK_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:JIGEUP_SUEOP_AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:JIGEUP_SANGTAE_GBCD\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsJigeup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"14\" text=\"bind:JIGEUP_DT\" displaytype=\"expr:JIGEUP_DT!=&apos;&apos;?&apos;date&apos;:&apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrdHakgwa","1649","45","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGrdHakgwa");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrdJeongong","1649","75","30","22",null,null,null,null,null,null,this);
            obj.set_taborder("101");
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
            obj.set_description("장학지급관리(재학생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item40","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchJigeup","value","ds_input","JIGEUP_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboJigeupYn","value","dsMaster","JIGEUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.edtSearchJanghakCd","value","ds_input","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.edtSearchJanghakNm","value","ds_input","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSearch.form.calSearchDeungrokMagamFr","value","ds_input","DEUNGROK_MAGAM_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.calSearchDeungrokMagamTo","value","ds_input","DEUNGROK_MAGAM_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtJanghakCd","value","dsMaster","JANGHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtJanghakNm","value","dsMaster","JANGHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHaksaengNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSearchJanghakCd00_00","value","dsMaster","RES_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtIphakgeumPamt","value","dsMaster","IPHAKGEUM_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtJigeupIphakgeum","value","dsMaster","JIGEUP_GANEUNG_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJigeupSueopryo","value","dsMaster","JIGEUP_GANEUNG_SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtSueopryoPamt","value","dsMaster","SUEOPRYO_JIGEUP_PAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtBigo","value","dsMaster","BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calJigeupDt","value","dsMaster","JIGEUP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboSuhye","value","dsMaster","SUHYE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtUseonSeq","value","dsMaster","USEON_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtIphakAmt","value","dsMaster","IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtJigeupIphakAmt","value","dsMaster","JIGEUP_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtTotalHwansuIphakAmt","value","dsMaster","TOTAL_HWANSU_IPHAK_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtTotalHwansuSueopAmt","value","dsMaster","TOTAL_HWANSU_SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtJigeupSueopAmt","value","dsMaster","JIGEUP_SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtSueopAmt","value","dsMaster","SUEOP_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","cboJigeup","value","dsMaster","JIGEUP_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edtJikjeonSeongjeok","value","dsMaster","CHWIDEUK_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","cboHakgwa","value","dsMaster","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","cboJeongong","value","dsMaster","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","cboHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","cboHakjeokStcd","value","dsMaster","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","cboSodeukBunwi","value","dsMaster","SODEUKBUNWI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtJikjeonHakjeom","value","dsMaster","PYEONGJEOM_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtBaekbunyul","value","dsMaster","JEOMSU_AVG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","cboDeungrokYn","value","dsMaster","DEUNGROK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","cboJaeiphakYn","value","dsMaster","JAEIPHAK_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","cboByeondongCd","value","dsMaster","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","calByeondongDt","value","dsMaster","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","cboGrdHakgwa","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","cboGrdJeongong","value","ds_input","HAKSAENG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divSearch.form.edtSearchResNo","value","ds_input","RES_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsJanghak");
            this._addPreloadList("data","","dsJanghakAmt");
            this._addPreloadList("data","","dsSueop");
            this._addPreloadList("data","","dsCheori");
            this._addPreloadList("data","","dsJanghakJigeup");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UE04_2060402_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE04_2060402_M.xfdl(장학지급관리(재학생))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/10
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
        this.lvchkColidDs   = "HAKBEON$JANGHAK_CD$SUHYE_GBCD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학번$장학코드$수혜구분";
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
            var strDs    = "dsSearchHakgi|dsSearchJigeup|dsJuya|dsSuhye|dsJigeup|dsYn|dsSearchHaknyeon|dsHaknyeon|dsSodeuk|dsByeondong|dsHakjeok";
            var strLgcd  = "00022|02015|00003|02008|02015|00051|00060|00060|02018|00023|00004";
            var strComb  = "X|T|X|X|X|X|T|X|X|X|X";
            var strOptn  = "";
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
        	this.dsSearchHakgi.filter("REF_1 == '10'");
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
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
        			case "JanghakAmtRet":
                            this.fn_PostJanghakAmtRet();
                        break;
        			case "SueopRet":
                            this.fn_PostSueopRet();
                        break;
        			case "JanghakJigeupRet":
                            this.fn_PostJanghakJigeupRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "Jigeup":
                            this.alert("처리되었습니다.");
                        break;
        			case "Banryeo":
                            this.alert("처리되었습니다.");
                        break;
        			case "ExcelUpload":
        					this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", sRtn[1]);

        					// 장학지급내역 조회
        					this.fn_JanghakJigeupRet(sRtn[0]);
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
        			break
        		case "gridJanghak" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", sRtn[0]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);

        					// 입학금 수업료 지급구분, 우선순위 셋팅
        					this.fn_SueopRet(sRtn[0]);
        				}
        			break;
        		case "popExcleFileUploadP01":
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        				    this.ds_input.setColumn(0, "ATTFL_NO", sRtn[1]); // 첨부파일번호

        					var strSvc      = "ExcelUpload";
        					var strUrl      = "/prj/UE/UE04/Excel_2060402_M.do";
        					var strInDs     = "ds_input=ds_input:a";
        					var strOutDs    = "dsMaster=dsMaster";
        					var strArg      = "";
        					var GBV_MENUID    = objApp.gv_cutPrgId;
        					if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        					{
        						strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        					}
        					var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        					var strASync    = true;            //생략이나 공백일시에는 ASync=true,싱크시는 false로
        					this.gfn_Transaction(strSvc
        									   , strUrl
        									   , strInDs
        									   , strOutDs
        									   , strArg
        									   , strCallBack
        									   , strASync);
        				}
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
            var strUrl      = "/prj/UE/UE04/Retrieve_2060402_M.do";
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
                06. 지급가능 입학금, 지급가능 등록금 계산
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreJanghakAmtRet = function()
        {
            // 조회조건 셋팅
        	var row = this.dsMaster.rowposition;
        	this.ds_janghakInput.setColumn(0, "JANGHAK_YYYY", this.dsMaster.getColumn(row, "JANGHAK_YYYY"));
        	this.ds_janghakInput.setColumn(0, "HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.ds_janghakInput.setColumn(0, "HAKBEON", this.dsMaster.getColumn(row, "HAKBEON"));
        	this.ds_janghakInput.setColumn(0, "JANGHAK_CD", this.dsMaster.getColumn(row, "JANGHAK_CD"));
        	this.ds_janghakInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(row, "HAKGWA_CD"));
        	this.ds_janghakInput.setColumn(0, "HAKNYEON", this.dsMaster.getColumn(row, "HAKNYEON"));

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JanghakAmtRet = function()
        {
            if(!this.fn_PreJanghakAmtRet())
            {
                return false;
            }
            var strSvc      = "JanghakAmtRet";
            var strUrl      = "/prj/UE/UE04/JanghakAmtRetrieve_2060402_M.do";
            var strInDs     = "ds_janghakInput=ds_janghakInput";
            var strOutDs    = "dsJanghakAmt=dsJanghakAmt";
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
        this.fn_PostJanghakAmtRet = function()
        {
        	var jigeupGaneungIphakAmt = this.dsJanghakAmt.getColumn(0, "JIGEUP_GANEUNG_IPHAK_AMT"); // 지급가능입학금
        	var jigeupGaneungSueopAmt = this.dsJanghakAmt.getColumn(0, "JIGEUP_GANEUNG_SUEOP_AMT"); // 지급가능등록금
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_GANEUNG_IPHAK_AMT", jigeupGaneungIphakAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_GANEUNG_SUEOP_AMT", jigeupGaneungSueopAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_IPHAK_AMT", jigeupGaneungIphakAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "JIGEUP_SUEOP_AMT", jigeupGaneungSueopAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "TOTAL_HWANSU_IPHAK_AMT", 0);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "TOTAL_HWANSU_SUEOP_AMT", 0);
        };

        /**********************************************************************
                07. 입학금 수업료 지급구분, 우선순위 셋팅
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreSueopRet = function(janghakCd)
        {
            // 조회조건 셋팅
        	this.ds_sueopInput.setColumn(0, "JANGHAK_CD", janghakCd);
        	this.ds_sueopInput.setColumn(0, "JANGHAK_YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.ds_sueopInput.setColumn(0, "HAKGI", "11");

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_SueopRet = function(janghakCd)
        {
            if(!this.fn_PreSueopRet(janghakCd))
            {
                return false;
            }
            var strSvc      = "SueopRet";
            var strUrl      = "/prj/UE/UE04/SueopRetrieve_2060402_M.do";
            var strInDs     = "ds_sueopInput=ds_sueopInput";
            var strOutDs    = "dsSueop=dsSueop";
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
        this.fn_PostSueopRet = function()
        {
        	var iphakgeumJigeupGbcd = this.dsSueop.getColumn(0, 'IPHAKGEUM_JIGEUP_GBCD'); // 입학지급 구분
        	var iphakgeumJigeupPamt = this.dsSueop.getColumn(0, 'IPHAKGEUM_JIGEUP_PAMT'); // 입학금지급금액%
        	var sueopryoJigeupGbcd = this.dsSueop.getColumn(0, 'SUEOPRYO_JIGEUP_GBCD'); // 수업료지급 구분
        	var sueopryoJigeupPamt = this.dsSueop.getColumn(0, 'SUEOPRYO_JIGEUP_PAMT'); // 수업료지급금액%
        	var useonSeq = this.dsSueop.getColumn(0, 'USEON_SEQ'); // 입학지급 구분
        	var suhyeGbcd = this.dsSueop.getColumn(0, 'SUHYE_GBCD'); // 수혜구분

        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'IPHAKGEUM_JIGEUP_GBCD', iphakgeumJigeupGbcd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'IPHAKGEUM_JIGEUP_PAMT', iphakgeumJigeupPamt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'SUEOPRYO_JIGEUP_GBCD', sueopryoJigeupGbcd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'SUEOPRYO_JIGEUP_PAMT', sueopryoJigeupPamt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'USEON_SEQ', useonSeq);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'SUHYE_GBCD', suhyeGbcd);

        	// 지급가능 입학금, 지급가능 등록금 계산
        	this.fn_JanghakAmtRet();
        };

        /**********************************************************************
                08. 장학지급내역 조회
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreJanghakJigeupRet = function(hakbeon)
        {
            // 조회조건 셋팅
        	this.ds_janghakJigeupInput.setColumn(0, "HAKBEON", hakbeon);
        	this.ds_janghakJigeupInput.setColumn(0, "JANGHAK_YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.ds_janghakJigeupInput.setColumn(0, "HAKGI", this.ds_input.getColumn(0, "HAKGI"));

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JanghakJigeupRet = function(hakbeon)
        {
            if(!this.fn_PreJanghakJigeupRet(hakbeon))
            {
                return false;
            }
            var strSvc      = "JanghakJigeupRet";
            var strUrl      = "/prj/UE/UE04/JanghakJigeupRetrieve_2060402_M.do";
            var strInDs     = "ds_janghakJigeupInput=ds_janghakJigeupInput";
            var strOutDs    = "dsJanghakJigeup=dsJanghakJigeup";
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
        this.fn_PostJanghakJigeupRet = function()
        {
        	var iphakAmt = this.dsJanghakJigeup.getColumn(0, 'IPHAK_AMT');
        	var sueopAmt = this.dsJanghakJigeup.getColumn(0, 'SUEOP_AMT');
        	var hakgwaCd = this.dsJanghakJigeup.getColumn(0, 'HAKGWA_CD');
        	var jeongongCd = this.dsJanghakJigeup.getColumn(0, 'JEONGONG_CD');
        	var haknyeon = this.dsJanghakJigeup.getColumn(0, 'HAKNYEON');
        	var juyaGbcd = this.dsJanghakJigeup.getColumn(0, 'JUYA_GBCD');
        	var hakjeokStcd = this.dsJanghakJigeup.getColumn(0, 'HAKJEOK_STCD');
        	var chwideukHakjeom = this.dsJanghakJigeup.getColumn(0, 'CHWIDEUK_HAKJEOM');
        	var pyeongjeomAvg = this.dsJanghakJigeup.getColumn(0, 'PYEONGJEOM_AVG');
        	var byeondongCd = this.dsJanghakJigeup.getColumn(0, 'BYEONDONG_CD');
        	var byeondongSangseCd = this.dsJanghakJigeup.getColumn(0, 'BYEONDONG_SANGSE_CD');
        	var byeondongDt = this.dsJanghakJigeup.getColumn(0, 'BYEONDONG_DT');

        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'IPHAK_AMT', iphakAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'SUEOP_AMT', sueopAmt);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'HAKGWA_CD', hakgwaCd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JEONGONG_CD', jeongongCd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'HAKNYEON', haknyeon);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'JUYA_GBCD', juyaGbcd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'HAKJEOK_STCD', hakjeokStcd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'CHWIDEUK_HAKJEOM', chwideukHakjeom);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'PYEONGJEOM_AVG', pyeongjeomAvg);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'BYEONDONG_CD', byeondongCd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'BYEONDONG_SANGSE_CD', byeondongSangseCd);
        	this.dsMaster.setColumn(this.dsMaster.rowposition, 'BYEONDONG_DT', byeondongDt);

        	// 지급가능 입학금, 지급가능 등록금 계산
        	this.fn_JanghakAmtRet();
        };

        /**********************************************************************
                09. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, 'JANGHAK_YYYY', this.ds_input.getColumn(0, "YYYY")); // 장학년도
        	this.dsMaster.setColumn(nRow, 'HAKGI', this.ds_input.getColumn(0, "HAKGI")); // 학기
        	this.dsMaster.setColumn(nRow, 'SUHYE_GBCD', ''); // 수혜구분
        	this.dsMaster.setColumn(nRow, 'JIGEUP_SANGTAE_GBCD', '1'); // 지급상태구분
        	this.dsMaster.setColumn(nRow, 'JIGEUP_IPHAK_AMT', '0'); // 지급입학금액
        	this.dsMaster.setColumn(nRow, 'JIGEUP_SUEOP_AMT', '0'); // 지급수업금액
        	this.dsMaster.setColumn(nRow, 'JUNGBOKSAKJE_IPHAK_AMT', '0'); // 중복수혜입학금액
        	this.dsMaster.setColumn(nRow, 'JUNGBOKSAKJE_SUEOP_AMT', '0'); // 중복수혜수업금액
        	this.dsMaster.setColumn(nRow, 'JIGEUP_YN', '0'); // 지급여부
        	this.dsMaster.setColumn(nRow, 'HWANSU_YN', '0'); // 환수여부
        	this.dsMaster.setColumn(nRow, 'GYEOLJE_YN', '0'); // 결제여부
        	this.dsMaster.setColumn(nRow, 'JIGEUP_DT', ''); // 지급일자
        };

        /**********************************************************************
                10. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
        	//멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	var cnt = 0 ; //삭제가능 row수
        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        	    if(this.dsMaster.getColumn(i, 'CHK') == '1') {
        			if(this.dsMaster.getRowType(i) != '2' && this.dsMaster.getColumn(i, 'JIGEUP_SANGTAE_GBCD') != '1' && this.dsMaster.getColumn(i, 'JIGEUP_YN') == '1') { // 등록, 지급여부N
        				cnt++;
        			}
        		}
        	}

            if(cnt > 0) {
        	    this.alert('새로 생성된 장학지급내역 혹은 지급상태가 "선발"인 장학지급내역만 선택해주세요.');
        		return false;
        	}

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            // 체크삭제
            for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        	    if(this.dsMaster.getColumn(i, 'CHK') == '1' && this.dsMaster.getRowType(i) == '2') { // 신규행 삭제 (행 상태 신규, 장학코드, 수험번호 null)
        		    this.dsMaster.deleteRow(i);
        			i--;
        		}
         	    else if(this.dsMaster.getColumn(i, 'CHK') == '1' && this.dsMaster.getColumn(i, 'JIGEUP_SANGTAE_GBCD') == '1' && this.dsMaster.getColumn(i, 'JIGEUP_YN') == '0') {
         	        this.dsMaster.setColumn(i, 'JIGEUP_SANGTAE_GBCD', '6');
         		}
         	}
        };

        /**********************************************************************
                11. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
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

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        	    if(this.dsMaster.getRowType(i) == '2' || this.dsMaster.getRowType(i) == '4') {
        			var jigeupGaneungIphakAmt = this.dsMaster.getColumn(i, 'JIGEUP_GANEUNG_IPHAK_AMT'); // 지급가능입학금
        			var jigeupGaneungSueopAmt = this.dsMaster.getColumn(i, 'JIGEUP_GANEUNG_SUEOP_AMT'); // 지급가능등록금
        			var jigeupIphakAmt = this.dsMaster.getColumn(i, 'JIGEUP_IPHAK_AMT'); // 지급입학금
        			var jigeupSueopAmt = this.dsMaster.getColumn(i, 'JIGEUP_SUEOP_AMT'); // 지급등록금

        			if(nexacro.toNumber(jigeupGaneungIphakAmt) < nexacro.toNumber(jigeupIphakAmt)) {
        				this.alert('지급입학금이 지급가능입학금보다 큽니다.');
        				return false;
        			}
        			if(nexacro.toNumber(jigeupGaneungSueopAmt) < nexacro.toNumber(jigeupSueopAmt)) {
        				this.alert('지급등록금이 지급가능등록금보다 큽니다.');
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
            var strUrl      = "/prj/UE/UE04/Save_2060402_M.do";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                12. 선발확정
        ***********************************************************************/
        this.btnSunbalHwakjeong_onclick = function(obj,e)
        {
        	// 장학지급처리 데이터셋 초기화
        	this.dsCheori.clearData();
        	var noChkCnt = 0;
        	var cnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var chk = this.dsMaster.getColumn(i, "CHK"); // chk
        		var suhyeGbcd = this.dsMaster.getColumn(i, "SUHYE_GBCD");
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, "JIGEUP_SANGTAE_GBCD"); // 지급상태구분

        		if(chk == '1') {
        			noChkCnt++;
        			if(jigeupSangtaeGbcd == '1') { // 지급상태 : 등록
        			   var addRow = this.dsCheori.addRow();
        			   this.dsCheori.copyRow(addRow, this.dsMaster, i);
        			}
        			else {
        				cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0) {
        		this.alert('선택된 장학 지급내역이 없습니다.');
        		return false;
        	}
        	else if(cnt > 0) {
        		this.alert('지급상태가 "선발"인 장학 지급내역만 선택해주세요.');
        		return false;
        	}
        	else {
        		// flag에 따른 장학지급처리
        		this.fn_Jigeup(4, '');
        	}
        };

        /**********************************************************************
                13. 선발확정취소
        ***********************************************************************/
        this.btnSunbalHwakjeongCancel_onclick = function(obj,e)
        {
        	// 장학지급처리 데이터셋 초기화
        	this.dsCheori.clearData();
        	var noChkCnt = 0;
        	var cnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var chk = this.dsMaster.getColumn(i, "CHK"); // chk
        		var suhyeGbcd = this.dsMaster.getColumn(i, "SUHYE_GBCD");
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, "JIGEUP_SANGTAE_GBCD"); // 지급상태구분
        		var jigeupYn = this.dsMaster.getColumn(i, "JIGEUP_YN");

        		if(chk == '1') {
        			noChkCnt++;
        			if(!(suhyeGbcd == '2' && jigeupSangtaeGbcd == '2' && jigeupYn == '1') && jigeupSangtaeGbcd == '2') { // 지급상태 : 확정
        			   var addRow = this.dsCheori.addRow();
        			   this.dsCheori.copyRow(addRow, this.dsMaster, i);
        			}
        			else {
        				cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0) {
        		this.alert('선택된 장학 지급내역이 없습니다.');
        		return false;
        	}
        	else if(cnt > 0) {
        		this.alert('지급상태가 "선발확정"이며 지급여부가 "N"인 장학 지급내역만 선택해주세요.');
        		return false;
        	}
        	else {
        		// flag에 따른 장학지급처리
        		this.fn_Jigeup(5, '');
        	}
        };

        /**********************************************************************
                14. 등록마감
        ***********************************************************************/
        this.btnDeungrokMagam_onclick = function(obj,e)
        {
        	// 장학지급처리 데이터셋 초기화
        	this.dsCheori.clearData();
        	var noChkCnt = 0;
        	var cnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var chk = this.dsMaster.getColumn(i, "CHK"); // chk
        		var suhyeGbcd = this.dsMaster.getColumn(i, "SUHYE_GBCD");
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, "JIGEUP_SANGTAE_GBCD"); // 지급상태구분
        		var jigeupYn = this.dsMaster.getColumn(i, "JIGEUP_YN");

        		if(chk == '1') {
        			noChkCnt++;
        			if(jigeupSangtaeGbcd == '2' && suhyeGbcd == '1' && jigeupYn == '0') { // 지급상태 : 확정, 수혜구분 : 선감면 (1)
        			   var addRow = this.dsCheori.addRow();
        			   this.dsCheori.copyRow(addRow, this.dsMaster, i);
        			}
        			else {
        				cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0) {
        		this.alert('선택된 장학 지급내역이 없습니다.');
        		return false;
        	}
        	else if(cnt > 0) {
        		this.alert('지급상태가 "선발확정", 수혜구분이 "선감면지급", 지급여부가 "N"인 장학 지급내역만 선택해주세요.');
        		return false;
        	}
        	else {
        		var oArg = {dsCheori:this.dsCheori, ds_cheoriInput:this.ds_cheoriInput, today:this.fn_Today()};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("cheori","UE04::UE04_2060402_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                15. 등록마감취소
        ***********************************************************************/
        this.btnDeungrokMagamCancel_onclick = function(obj,e)
        {
        	// 장학지급처리 데이터셋 초기화
        	this.dsCheori.clearData();
        	var noChkCnt = 0;
        	var cnt = 0;
        	var jigeupCnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var chk = this.dsMaster.getColumn(i, "CHK"); // chk
        		var suhyeGbcd = this.dsMaster.getColumn(i, "SUHYE_GBCD");
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, "JIGEUP_SANGTAE_GBCD"); // 지급상태구분
        		var jigeupYn = this.dsMaster.getColumn(i, "JIGEUP_YN"); // 지급여부
        		var hwansuYn = this.dsMaster.getColumn(i, "HWANSU_YN"); // 환수여부

        		if(chk == '1') {
        			noChkCnt++;
        			if(jigeupSangtaeGbcd == '3' && suhyeGbcd == '1' && hwansuYn == '0') { // 지급상태 : 등록, 수혜구분 : 선감면 (1), 지급X
        			   var addRow = this.dsCheori.addRow();
        			   this.dsCheori.copyRow(addRow, this.dsMaster, i);
        			   if (jigeupYn == '1') jigeupCnt++;
        			}
        			else {
        				cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0) {
        		this.alert('선택된 장학 지급내역이 없습니다.');
        		return false;
        	}
        	else if(cnt > 0) {
        		this.alert('지급상태가 "등록마감", 수혜구분이 "선감면지급", 환수여부가 "N"인 장학 지급내역만 선택해주세요.');
        		return false;
        	}
        	else {
        		// flag에 따른 장학지급처리
        		this.fn_Jigeup(3, '', jigeupCnt);
        	}
        };

        /**********************************************************************
                16. 현금지급
        ***********************************************************************/
        this.btnMoney_onclick = function(obj,e)
        {
        	// 장학지급처리 데이터셋 초기화
        	this.dsCheori.clearData();
        	var noChkCnt = 0;
        	var cnt = 0;

        	for(var i = 0 ; i < this.dsMaster.rowcount ; i++) {
        		var chk = this.dsMaster.getColumn(i, "CHK"); // chk
        		var suhyeGbcd = this.dsMaster.getColumn(i, "SUHYE_GBCD");
        		var jigeupSangtaeGbcd = this.dsMaster.getColumn(i, "JIGEUP_SANGTAE_GBCD"); // 지급상태구분
        		var jigeupYn = this.dsMaster.getColumn(i, "JIGEUP_YN"); // 지급상태구분

        		if(chk == '1') {
        			noChkCnt++;
        			if(jigeupSangtaeGbcd == '2' && suhyeGbcd == '2' && jigeupYn == '0') { // 지급상태 : 확정, 수혜구분 : 현금 (2), 현금지급 X
        			   var addRow = this.dsCheori.addRow();
        			   this.dsCheori.copyRow(addRow, this.dsMaster, i);
        			}
        			else {
        			   cnt++;
        			}
        		}
        	}
        	if(noChkCnt == 0) {
        		this.alert('선택된 장학 지급내역이 없습니다.');
        		return false;
        	}
        	else if(cnt > 0) {
        		this.alert('지급상태가 "선발확정", 수혜구분이 "현금", 지급여부가 "N"인 장학 지급내역만 선택해주세요.');
        		return false;
        	}
        	else {
        		var oArg = {dsCheori:this.dsCheori, ds_cheoriInput:this.ds_cheoriInput, today:this.fn_Today()};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("cheori","UE04::UE04_2060402_P02.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                17. 엑셀 양식 다운로드
        ***********************************************************************/
        this.btnDownload_onclick = function(obj,e)
        {
        	this.gfn_attFileDownload("attach5b1ec0b23bbe1ccee1735c9244", "001");
        };

        /**********************************************************************
                18. 엑셀 업로드
        ***********************************************************************/
        this.btnUpload_onclick = function(obj,e)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sValue01 		= "";				        // 부모에서 넘어가는 파라미터(첨부파일번호)
        	var lv_sValue02 		= "1";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        	var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        	var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        	var lv_sValue05 		= "univ_upload";			// 부모에서 넘어가는 파라미터(도메인네임)
        	var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)
        	var sPopId 			= "popExcleFileUploadP01";
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
        };

        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };

        /**********************************************************************
                19. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                20. 장학지급처리
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreJigeup = function(flag, jigeupDt, jigeupCnt)
        {
        	var result = this.gfn_confirm(
        			 (jigeupCnt > 0 ? '지급완료된 건이 존재합니다.\n': '')
        		   + (flag=='1'?'현금지급':flag=='2'?'등록마감':flag=='3'?'등록마감취소':flag=='4'?'선발확정':flag=='5'?'선발확정취소':'')
        		   + ' 처리 하시겠습니까?'
        		   + (jigeupCnt > 0 ? '\n\n※ 지급완료된 건이 존재할 경우 반드시 등록대상자를 재생성해야 합니다.': ''), "저장","", "question" );

        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_cheoriInput.setColumn(0, "FLAG", flag);
        	this.ds_cheoriInput.setColumn(0, "JIGEUP_DT", jigeupDt);

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Jigeup = function(flag, jigeupDt, jigeupCnt)
        {
            if(!this.fn_PreJigeup(flag, jigeupDt, jigeupCnt))
            {
                return false;
            }
            var strSvc      = "Jigeup";
            var strUrl      = "/prj/UE/UE04/Jigeup_2060402_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_cheoriInput=ds_cheoriInput ";
        		strInDs    += "dsCheori=dsCheori";
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

        /**********************************************************************
                21. 선발, 선발취소
        ***********************************************************************/
        this.fn_PreBanryeo = function()
        {
            // 장학지급처리 데이터셋 초기화
            this.dsCheori.clearData();
        	var suhyeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "SUHYE_GBCD"); // 수혜구분
        	var jigeupSangtaeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_SANGTAE_GBCD'); // 지급상태
            var jigeupYn = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIGEUP_YN"); // 지급여부
        	var bigo = this.dsMaster.getColumn(this.dsMaster.rowposition, "BIGO"); // 반려사유
        	var flag = ''; // 1 : 반려, 2: 반려취소

        	if(jigeupSangtaeGbcd == '2' || jigeupSangtaeGbcd == '3') {
                if(this.gfn_isNull(bigo)) {
        		    this.alert('선발취소사유를 입력해주세요.');
        			return false;
        		}
        		this.ds_cheoriInput.setColumn(0, "FLAG", "1");
        		this.ds_cheoriInput.setColumn(0, "BIGO", bigo);
        	}
        	else if(jigeupSangtaeGbcd == 4) {
        		this.ds_cheoriInput.setColumn(0, "FLAG", "2");
        	}

        	var result = this.gfn_confirm(this.btnBanryeo.text + " 처리 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	var addRow = this.dsCheori.addRow();
        	this.dsCheori.copyRow(addRow, this.dsMaster, this.dsMaster.rowposition);

        	return true;
        };

        this.fn_Banryeo = function()
        {
        	if(!this.fn_PreBanryeo())
            {
                return false;
            }
        	var strSvc      = "Banryeo";
            var strUrl      = "/prj/UE/UE04/Banryeo_2060402_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "ds_cheoriInput=ds_cheoriInput ";
        		strInDs    += "dsCheori=dsCheori";
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

        /**********************************************************************
                22. 환수 상세 보기
        ***********************************************************************/
        this.btnHwansu_onclick = function(obj,e)
        {
        	this.dsCheori.clearData();
        	var addRow = this.dsCheori.addRow();
        	this.dsCheori.copyRow(addRow, this.dsMaster, this.dsMaster.rowposition);

        	var oArg = {dsCheori:this.dsCheori};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("seokcha","UE04::UE04_2060402_P03.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                23. 각종함수
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

        // 반려, 반려취소 버튼
        this.fn_VisibleBanryeoButton = function()
        {
        	var suhyeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUHYE_GBCD');
            var jigeupSangtaeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_SANGTAE_GBCD'); // 지급상태 구분
            var jigeupYn = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_YN'); // 지급여부

        	if((jigeupSangtaeGbcd == '2' || jigeupSangtaeGbcd == '3')) { // 확정, 등록마감일 때 지급여부 상관없이 반려가능
        	    this.btnBanryeo.set_visible(true);
        	    this.btnBanryeo.set_text('선발취소');
        	    this.edtBigo.set_cssclass('point');
        	}
        	else if(jigeupSangtaeGbcd == '4') {
        	    this.btnBanryeo.set_visible(true);
        	    this.btnBanryeo.set_text('재선발');
        		this.edtBigo.set_cssclass('');
        	}
        	else {
        	    this.btnBanryeo.set_visible(false);
        		this.edtBigo.set_cssclass('');
        	}
        };

        // 환수 상세보기 버튼
        this.fn_VisibleHwansuButton = function()
        {
            var suhyeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'SUHYE_GBCD');
            var jigeupSangtaeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_SANGTAE_GBCD'); // 지급상태 구분
            var jigeupYn = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_YN'); // 지급여부

        	if((suhyeGbcd == '1' && jigeupSangtaeGbcd == '3' && jigeupYn == '1')
        	   || (suhyeGbcd == '2' && jigeupSangtaeGbcd == '2' && jigeupYn == '1')
        	   || jigeupSangtaeGbcd == '5') {
        	    this.btnHwansu.set_visible(true);
        	}
        	else {
        	    this.btnHwansu.set_visible(false);
            }
        };

        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        /**********************************************************************
                24. 팝업
        ***********************************************************************/
        // 학생 팝업
        this.btnHakbeon_onclick = function(obj,e)
        {
        	var habeonNm = this.edtHaksaengNm.value;
        	this.fn_setCallHaksaengPopup(obj.name, habeonNm)
        };

        // 장학 팝업
        this.divSearch_btnSearchJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.divSearch.form.edtSearchJanghakNm.value;
        	this.fn_setCallJanghakPopup(obj.name, janghakCdNm)
        };
        this.btnJanghak_onclick = function(obj,e)
        {
        	var janghakCdNm = this.edtJanghakNm.value;
        	this.fn_setCallJanghakPopup(obj.name, janghakCdNm)
        };

        this.fn_setCallHaksaengPopup = function(strObjName, strSearchValue)
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
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKBEON", this.dsHaksaeng.getColumn(0,"HAKBEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKSAENG_NM", this.dsIpsi.getColumn(0,"HAKSAENG_NM"));

        		// 장학지급내역 조회
        		this.fn_JanghakJigeupRet(this.dsHaksaeng.getColumn(0,"HAKBEON"));
        	}
        	else
        	{
        		var oArg = {habeonNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup("haksaeng","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.fn_setCallJanghakPopup = function(strObjName, strSearchValue)
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
        		if (strObjName == "ds_input" || strObjName == "btnSearchJanghak") {
        			this.ds_input.setColumn(0, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        			this.ds_input.setColumn(0, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));
        		} else {
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_CD", this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "JANGHAK_NM", this.dsJanghakNm.getColumn(0,"JANGHAK_NM"));

        			// 입학금 수업료 지급구분, 우선순위 셋팅
        			this.fn_SueopRet(this.dsJanghakNm.getColumn(0,"JANGHAK_CD"));
        		}
        	}
        	else
        	{
        		var oArg = {janghakCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";

        		if (strObjName == "ds_input" || strObjName == "btnSearchJanghak")
        			this.gfn_openPopup("janghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        		else
        			this.gfn_openPopup("gridJanghak","com::COMM_P11.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                25. 기타 Control Event
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
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

        // 행 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var jigeupSangtaeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, 'JIGEUP_SANGTAE_GBCD'); // 지급상태구분 등록(1)
            if(jigeupSangtaeGbcd == '1' || this.dsMaster.getRowType(this.dsMaster.rowposition) == '2') { // 등록
        		this.edtHaksaengNm.set_readonly(false);
        		this.edtJanghakNm.set_readonly(false);
        		this.btnHakbeon.set_enable(true);
        		this.btnJanghak.set_enable(true);
        	    this.cboSuhye.set_readonly(false); // 수혜구분
        		this.edtJigeupIphakAmt.set_readonly(false); // 지급입학금
        		this.edtJigeupSueopAmt.set_readonly(false); // 지급등록금
        		this.edtBigo.set_readonly(true); // 비고(반려사유)
        	}
            else if(jigeupSangtaeGbcd == '2' || jigeupSangtaeGbcd == '3') { // 확정
        		this.edtHaksaengNm.set_readonly(true);
        		this.edtJanghakNm.set_readonly(true);
        		this.btnHakbeon.set_enable(false);
        		this.btnJanghak.set_enable(false);
        	    this.cboSuhye.set_readonly(true); // 수혜구분
        		this.edtJigeupIphakAmt.set_readonly(true); // 지급입학금
        		this.edtJigeupSueopAmt.set_readonly(true); // 지급등록금
        	    this.edtBigo.set_readonly(false); // 비고(반려사유)
        	}
        	else {
        		this.edtHaksaengNm.set_readonly(true);
        		this.edtJanghakNm.set_readonly(true);
        		this.btnHakbeon.set_enable(false);
        		this.btnJanghak.set_enable(false);
        	    this.cboSuhye.set_readonly(true); // 수혜구분
        		this.edtJigeupIphakAmt.set_readonly(true); // 지급입학금
        		this.edtJigeupSueopAmt.set_readonly(true); // 지급등록금
        		this.edtBigo.set_readonly(true); // 비고(반려사유)
        	}

        	// 반려, 반려취소 버튼
            this.fn_VisibleBanryeoButton();
        	// 환수 상세보기 버튼
            this.fn_VisibleHwansuButton();
        };

        this.dsMaster_oncolumnchanged = function(obj,e)
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
        	else if (e.columnid == "JANGHAK_NM")
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
                26. 검색창 엔터키 조회
        ***********************************************************************/
        this.fn_Enter = function(obj,e)
        {
        	if(e.keycode == '13') {
        	    this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJigeup.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.btnSearchJanghak.addEventHandler("onclick",this.divSearch_btnSearchJanghak_onclick,this);
            this.divSearch.form.calSearchDeungrokMagamFr.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.calSearchDeungrokMagamTo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.edtSearchResNo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.btnUpload.addEventHandler("onclick",this.btnUpload_onclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnDownload_onclick,this);
            this.btnMoney.addEventHandler("onclick",this.btnMoney_onclick,this);
            this.btnDeungrokMagamCancel.addEventHandler("onclick",this.btnDeungrokMagamCancel_onclick,this);
            this.btnDeungrokMagam.addEventHandler("onclick",this.btnDeungrokMagam_onclick,this);
            this.btnSunbalHwakjeong.addEventHandler("onclick",this.btnSunbalHwakjeong_onclick,this);
            this.btnSunbalHwakjeongCancel.addEventHandler("onclick",this.btnSunbalHwakjeongCancel_onclick,this);
            this.btnBanryeo.addEventHandler("onclick",this.fn_Banryeo,this);
            this.btnJanghak.addEventHandler("onclick",this.btnJanghak_onclick,this);
            this.btnHakbeon.addEventHandler("onclick",this.btnHakbeon_onclick,this);
            this.calJigeupDt.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.btnHwansu.addEventHandler("onclick",this.btnHwansu_onclick,this);
            this.calByeondongDt.addEventHandler("onkeydown",this.divSearch_calSearchBokhakFr_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.cboGrdHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.cboGrdJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchHaksaeng_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsJanghak.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsJanghak.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsJanghakAmt.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSueop.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCheori.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsJanghakJigeup.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UE04_2060402_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
