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
            this.set_titletext("등록납부/환불처리(재학생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDaesangja", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_DAESANG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"IJUNG_NAPBU_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BUNNAP_DAESANG_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SINIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BUNNAP_DAESANG_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNNAP_DAESANG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAKIYEONJA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbuSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJanghak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_IPHAKGEUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHAEKJEONG_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOJI_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJON_BANK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbul", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GEUMAEK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GIJUN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPogi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSayu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HWANBUL_GYEJWA_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HWANBUL_YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"HWANBUL_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIphakPogi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGeumaek", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGijun", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"HAKBEON_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","89",null,"22","1455",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("등록대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","137","88",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDaesangja","0","114","590","379",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDaesangja");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학년\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"학적상태\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"주야구분\"/><Cell col=\"8\" text=\"납부상태\"/><Cell col=\"9\" text=\"이중등록여부\"/><Cell col=\"10\" text=\"분납여부\"/><Cell col=\"11\" text=\"환불여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKNYEON_GBNM\"/><Cell col=\"2\" text=\"bind:HAKGI_NM\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"6\" text=\"bind:HAKGWA_NM\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\"/><Cell col=\"8\" text=\"bind:NAPBU_STNM\"/><Cell col=\"9\" text=\"bind:IJUNG_NAPBU_YN_NM\"/><Cell col=\"10\" text=\"bind:BUNNAP_DAESANG_YN_NM\"/><Cell col=\"11\" text=\"bind:HWANBUL_YN\" displaytype=\"combotext\" combodataset=\"dsYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","290","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","106",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","590","84","30",null,null,"0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","290","493","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","503",null,"22","1545",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("장학정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","87","502",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","520",null,"8","1050",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdJanghak","0","528","590",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJanghak");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"장학명\"/><Cell col=\"2\" text=\"입학금\"/><Cell col=\"3\" text=\"수업료\"/><Cell col=\"4\" text=\"장학금 합계\"/></Band><Band id=\"body\"><Cell text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:JANGHAK_NM\"/><Cell col=\"2\" text=\"bind:JANGHAK_IPHAKGEUM\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:JANGHAK_IPHAKGEUM + JANGHAK_SUEOPRYO\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;JANGHAK_IPHAKGEUM&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;JANGHAK_SUEOPRYO&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;JANGHAK_IPHAKGEUM&quot;) + dataset.getSum(&quot;JANGHAK_SUEOPRYO&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","620","89",null,"22","925",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("납부내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","707","88",null,"24","810",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdNapbu","620","114",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsNapbu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"납부일자\"/><Cell col=\"2\" text=\"납부항목\"/><Cell col=\"3\" text=\"책정금액\"/><Cell col=\"4\" text=\"장학금액\"/><Cell col=\"5\" text=\"고지금액\"/><Cell col=\"6\" text=\"납부금액\"/><Cell col=\"7\" text=\"납부은행\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:NAPBU_DT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:GEUMAEK_GBCD\" displaytype=\"combotext\" combodataset=\"dsGeumaek\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:CHAEKJEONG_GEUMAEK\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:JANGHAK_GEUMAEK\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:GOJI_GEUMAEK\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:NAPBU_GEUMAEK\" edittype=\"text\" displaytype=\"number\" editinputtype=\"number\" editmaxlength=\"22\"/><Cell col=\"7\" text=\"bind:BANK_GBCD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsBank\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;parseInt(CHAEKJEONG_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;parseInt(JANGHAK_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseInt(GOJI_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseInt(NAPBU_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNapbu","1430","81","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이중납부 등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2","1590","81","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2","1535","81","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaengsung","1305","81","120","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("납부금액 자동생성");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","862","379","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divHwanbul","620","424",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","970","9",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","58","1020","9",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-4","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("7");
            obj.set_text("환불사유");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","260","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("8");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("9");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","77","0","10","65",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","339","0","10","65",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","237","0","56","64",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","26","31","970","5",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","497","9","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("14");
            obj.set_text("환불계좌");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","473","0","56","34",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","576","0","10","35",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","-2","36","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("17");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulBank","349","9","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("1");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("16");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtHwanbulGyejwa","586","9","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("30");
            obj.set_inputtype("number");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Combo("cboHwanbulSayu","87","9","150","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSayu");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Edit("edtYegeumju","87","36","150","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("3");
            obj.set_visible("true");
            obj.set_enable("false");
            obj.set_maxlength("13");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","260","36","80","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("18");
            obj.set_text("환불일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Calendar("calHwanbulDt","349","36","124","22",null,null,null,null,null,null,this.divHwanbul.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divHwanbul.addChild(obj.name, obj);

            obj = new Grid("grdHwanbul","620","528",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsHwanbul");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"환불일자\"/><Cell col=\"2\" text=\"환불항목\"/><Cell col=\"3\" text=\"납부금액\"/><Cell col=\"4\" text=\"환불산정구분\"/><Cell col=\"5\" text=\"환불금액\"/><Cell col=\"6\" text=\"공제금액\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HWANBUL_DT\" displaytype=\"expr:HWANBUL_DT != &quot;&quot; ? &quot;date&quot; : &quot;none&quot;\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:GEUMAEK_GBCD\" displaytype=\"combotext\" combodataset=\"dsGeumaek\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:HWANBUL_GIJUN_GBCD\" displaytype=\"expr:HWANBUL_GIJUN_GBCD != &quot;&quot; ? &quot;combocontrol&quot; : &quot;combocontrol&quot;\" combodataset=\"dsGijun\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HWANBUL_GEUMAEK\" edittype=\"normal\" displaytype=\"number\" editinputtype=\"number\" editmaxlength=\"22\"/><Cell col=\"6\" text=\"expr:NAPBU_GEUMAEK - HWANBUL_GEUMAEK\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;parseInt(NAPBU_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseInt(HWANBUL_GEUMAEK)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseInt(NAPBU_GEUMAEK)&quot;) - dataset.getSum(&quot;parseInt(HWANBUL_GEUMAEK)&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","650","493","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSanjeong","1375","391","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("환불금액산정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","1480","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel3","1535","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave3","1590","391","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","620","416",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01_00","620","399",null,"22","925",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("환불정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt4","707","398",null,"24","810",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_01_00","20","58","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-2","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","89","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","239","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","328","9","104","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","79","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","318","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","239","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","30","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00","432","0","56","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","533","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","824","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","453","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","543","9","180","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00","723","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","745","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","938","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1040","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","834","9","104","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJuya");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1276","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1174","0","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchBunnap","826","37","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("분납대상여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","723","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("이중납부여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","454","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("납부상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNapbuSt","543","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNapbuSt");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_01","961","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","1050","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00_00","1197","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeokSt","1286","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakjeok");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","-1","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","89","36","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchHaksaeng","249","36","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","281","36","151","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","239","32","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","271","32","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","816","31","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","919","32","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul00","929","37","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00_00","998","32","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchBokhak","1008","37","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("복학이연자 여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_01","666","33","56","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록납부/환불처리(재학생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item16","divHwanbul.form.edtHwanbulBank","value","dsHwanbulList","HWANBUL_BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divHwanbul.form.edtHwanbulGyejwa","value","dsHwanbulList","HWANBUL_GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divHwanbul.form.cboHwanbulSayu","value","dsHwanbulList","HWANBUL_SAYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divHwanbul.form.edtYegeumju","value","dsHwanbulList","HWANBUL_YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divHwanbul.form.calHwanbulDt","value","dsHwanbulList","HWANBUL_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.chkSearchNapbu","value","ds_input","IJUNG_NAPBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.chkSearchBunnap","value","ds_input","BUNNAP_DAESANG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboSearchNapbuSt","value","ds_input","NAPBU_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchHakjeokSt","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.chkSearchHwanbul00","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.chkSearchBokhak","value","ds_input","BOKHAKIYEONJA_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDaesangja");
            this._addPreloadList("data","","dsJanghak");
            this._addPreloadList("data","","dsNapbu");
            this._addPreloadList("data","","dsHwanbul");
            this._addPreloadList("data","","dsHwanbulList");
        };
        
        // User Script
        this.registerScript("UR03_2050305_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR03_2050305_M.xfdl(등록 대상자 관리(재학) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/15
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
        this.geumaekChk = 0;
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
            var strDs    = "dsHakgi|dsJuya|dsNapbuSt|dsYn|dsPogi|dsIphakPogi|dsBank|dsGijun|dsSayu|dsHaknyeon|dsHakjeok|dsGeumaek";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00003|03008|00051|03010|03010|03007|03004|03014|03001|00004|03002";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|X|X|S|X|X|S|T|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UR";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "T";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "DEUNGROK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_input.setColumn(0, "HAKGI",  this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdDaesangja);
        	this.gfn_clearSortAll(this.grdJanghak);
        	this.gfn_clearSortAll(this.grdNapbu);
        	this.gfn_clearSortAll(this.grdHwanbul);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			case "Mojip":
                            this.fn_PostMojip();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
        			case "NapbuSave":
                            this.fn_PostNapbuSave();
                        break;
        			case "HwanbulSave":
                            this.fn_PostHwanbulSave();
                        break;
        			case "NapbuDel":
                            this.fn_PostNapbuDel();
                        break;
        			case "HwanbulDel":
                            this.fn_PostHwanbulDel();
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
        		case "Hakbeon" :
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
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 등록대상자 목록 조회 함수
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

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("입시년도를 입력해주세요.");
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
            var strUrl      = "/prj/UR/UR03/Retrieve_2050305_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDaesangja=dsDaesangja ";
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
        	this.dsJanghak.clearData();
        	this.dsNapbu.clearData();
        	this.dsHwanbul.clearData();
        	this.dsHwanbulList.clearData();
            this.gfn_getRowCount(this.staRowCnt1,this.dsDaesangja);
        };

        /**********************************************************************
                06. 납부,장학,환불 내역 조회 함수
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKGI"));
        	this.ds_dInput.setColumn(0, "HAKBEON", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKBEON"));
        	this.ds_dInput.setColumn(0, "BANK_GBCD", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "BANK_GBCD"));

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
            var strUrl      = "/prj/UR/UR03/Retrieve_2050305_M_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsNapbu=dsNapbu ";
        		strOutDs   += "dsJanghak=dsJanghak ";
        		strOutDs   += "dsHwanbul=dsHwanbul ";
        		strOutDs   += "dsHwanbulList=dsHwanbulList ";
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
            this.gfn_getRowCount(this.staRowCnt3,this.dsNapbu);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsJanghak);
        	this.gfn_getRowCount(this.staRowCnt4,this.dsHwanbul);
        };

        /**********************************************************************
                07. 환불내역 신규 함수 선언
        ***********************************************************************/
        this.fn_HwanbulNew = function()
        {
        	//환불 중복 체크
        	var chk = 1;

        	var rowPos1 = this.dsNapbu.rowposition;
        	var rowCnt = this.dsHwanbul.rowcount;

        	for(var i = 0; i < rowCnt ; i++)
        	{
        		var napbuGeumaekGbcd = this.dsNapbu.getColumn(rowPos1, "GEUMAEK_GBCD");
        		var hwanbulGeumaekGbcd = this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD");

        		if(napbuGeumaekGbcd.toString() == hwanbulGeumaekGbcd.toString())
        		{
        			chk = 0;
        		}
        	}

        	if(chk == 1)
        	{
        		if(!this.gfn_isNull(this.dsNapbu.getColumn(rowPos1, "NAPBU_GEUMAEK")))
        		{
        			if(this.dsHwanbulList.rowcount == 0)
        			{
        				this.dsHwanbulList.deleteAll();
        				var nRow1 = this.dsHwanbulList.addRow();
        				this.dsHwanbulList.setColumn(nRow1, "DEUNGROK_YYYY", this.dsNapbu.getColumn(rowPos1, "DEUNGROK_YYYY"));
        				this.dsHwanbulList.setColumn(nRow1, "HAKGI", this.dsNapbu.getColumn(rowPos1, "HAKGI"));
        				this.dsHwanbulList.setColumn(nRow1, "HAKBEON", this.dsNapbu.getColumn(rowPos1, "HAKBEON"));
        				this.dsHwanbulList.setColumn(nRow1, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        				this.dsHwanbulList.setColumn(nRow1, "HWANBUL_SAYU_GBCD", "");
        			}
        			var nRow = this.dsHwanbul.addRow();
        			this.dsHwanbul.setColumn(nRow, "DEUNGROK_YYYY", this.dsNapbu.getColumn(rowPos1, "DEUNGROK_YYYY"));
        			this.dsHwanbul.setColumn(nRow, "HAKGI", this.dsNapbu.getColumn(rowPos1, "HAKGI"));
        			this.dsHwanbul.setColumn(nRow, "HAKBEON", this.dsNapbu.getColumn(rowPos1, "HAKBEON"));
        			this.dsHwanbul.setColumn(nRow, "BANK_GBCD", this.dsNapbu.getColumn(rowPos1, "BANK_GBCD"));
        			if(!this.gfn_isNull(this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ")))
        			{
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_SEQ", this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ"));
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_SAYU_GBCD", this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD"));
        			}
        			this.dsHwanbul.setColumn(nRow, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			this.dsHwanbul.setColumn(nRow, "GEUMAEK_GBCD", this.dsNapbu.getColumn(rowPos1, "GEUMAEK_GBCD"));
        			this.dsHwanbul.setColumn(nRow, "NAPBU_GEUMAEK", this.dsNapbu.getColumn(rowPos1, "NAPBU_GEUMAEK"));
        			this.dsHwanbul.setColumn(nRow, "HWANBUL_GIJUN_GBCD", "");
        		}
        		else
        		{
        			this.alert("납부한 항목만 환불처리가 가능합니다. 다시 확인해주세요.");
        			return false;
        		}
        	}
        	else
        	{
        		this.alert("이미 등록된 환불 정보입니다. 다시 확인해주세요.");
        		return false;
        	}
        };

        /**********************************************************************
                08. 납부내역 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreNapbuDel = function()
        {
            //멀티삭제용도
            if(this.dsNapbu.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	var chk = 0;
        	var rowCnt = this.dsHwanbul.rowcount;

        	var napbuGeaumaekGbcd = this.dsNapbu.getColumn(this.dsNapbu.rowposition, "GEUMAEK_GBCD");

        	for(var i = 0 ; i < rowCnt ; i++)
        	{
        		var hwanbulGeaumaekGbcd = this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD");
        		if(napbuGeaumaekGbcd == hwanbulGeaumaekGbcd)
        		{
        			chk = 1;
        		}
        	}

        	if(chk == 1)
        	{
        		if(this.dsHwanbul.getRowType(this.dsHwanbul.rowposition) != Dataset.ROWTYPE_INSERT)
        		{
        			this.alert("환불한 내역이 있습니다. 다시 확인해주세요.");
        			return false;
        		}
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsNapbu.deleteRow(this.dsNapbu.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_NapbuDel = function()
        {
            if(!this.fn_PreNapbuDel())
            {
                return false;
            }
            var strSvc      = "NapbuDel";
            var strUrl      = "/prj/UR/UR03/Delete_2050305_M_Napbu.do";
            var strInDs     = "dsNapbu=dsNapbu:u";
            var strOutDs    = "";
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
        };

        this.fn_PostNapbuDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsNapbu);
        };

        /**********************************************************************
                09. 환불내역 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreHwanbulDel = function()
        {
            //멀티삭제용도
            if(this.dsNapbu.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	if (this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD") == '1' || this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD") == '2')
        	{
        		this.alert("환불 사유가 자퇴, 제적인 경우에는 환불 정보를 삭제하실 수 없습니다.");
        		return false;
        	}

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsHwanbul.deleteRow(this.dsHwanbul.rowposition);
        	this.dsHwanbulList.deleteAll();
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_HwanbulDel = function()
        {
            if(!this.fn_PreHwanbulDel())
            {
                return false;
            }
            var strSvc      = "HwanbulDel";
            var strUrl      = "/prj/UR/UR03/Delete_2050305_M_Hwanbul.do";
            var strInDs     = "dsHwanbul=dsHwanbul:u ";
        		strInDs    += "dsHwanbulList=dsHwanbulList:u";
            var strOutDs    = "";
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
        };

        this.fn_PostHwanbulDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt4,this.dsHwanbul);
        };

        /**********************************************************************
                10. 납부내역 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreNapbuSave = function()
        {
            if(!this.gfn_isUpdate(this.dsNapbu))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var rowCnt = this.dsNapbu.rowcount;
        	var updateGeumaekGbcd;
        	for(var i=0; i<rowCnt; i++)
        	{
        		if(this.dsNapbu.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			var napbuDt = this.dsNapbu.getColumn(i, "NAPBU_DT");
        			var bankGbcd = this.dsNapbu.getColumn(i,"BANK_GBCD");
        			var gojiGeumaek = this.dsNapbu.getColumn(i, "GOJI_GEUMAEK");
        			var napbuGeumaek = this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK");

        			if(!this.gfn_isNull(napbuDt))
        			{
        				if(gojiGeumaek != 0 && this.gfn_isNull(napbuGeumaek))
        				{
        					this.alert("납부금액을 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(bankGbcd))
        				{
        					this.alert("납부은행을 입력해주세요.");
        					return false;
        				}
        			}
        			if(gojiGeumaek != 0 && !this.gfn_isNull(napbuGeumaek))
        			{
        				if(this.gfn_isNull(napbuDt))
        				{
        					this.alert("납부일자를 입력해주세요.");
        					return false;
        				}
        				if(this.gfn_isNull(bankGbcd))
        				{
        					this.alert("납부은행을 입력해주세요.");
        					return false;
        				}
        			}
        			if(!this.gfn_isNull(bankGbcd))
        			{
        				if(this.gfn_isNull(napbuDt))
        				{
        					this.alert("납부일자를 입력해주세요.");
        					return false;
        				}
        				if(gojiGeumaek != 0 && this.gfn_isNull(napbuGeumaek))
        				{
        					this.alert("납부금액을 입력해주세요.");
        					return false;
        				}
        			}
        			if(gojiGeumaek.toString() != napbuGeumaek.toString())
        			{
        				this.alert("납부 금액은 고지 금액과 같아야 합니다.\n다시 확인해주세요.");
        				return false;
        			}
        			updateGeumaekGbcd = this.dsNapbu.getColumn(i, "GEUMAEK_GBCD");
        		}

        		//금액 구분별 납부 금액 체크
        		if(updateGeumaekGbcd == '01')
        		{
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") == '02' && this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        			{
        				this.alert("입학금과 수업료는 한번에 납부 처리하셔야 합니다.");
        				return false;
        			}
        		}
        		else if(updateGeumaekGbcd == '02')
        		{
        			if(this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") == '01' && this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        			{
        				this.alert("입학금과 수업료는 한번에 납부 처리하셔야 합니다.");
        				return false;
        			}
        		}

        		if(i != rowCnt)
        		{
        			var bankGbcd1 = this.dsNapbu.getColumn(i, "BANK_GBCD");
        			var bankGbcd2 = this.dsNapbu.getColumn(i+1, "BANK_GBCD");

        			if(!this.gfn_isNull(bankGbcd1) && !this.gfn_isNull(bankGbcd2) && bankGbcd1 != bankGbcd2 && this.dsNapbu.getColumn(i, "GEUMAEK_GBCD") != '00')
        			{
        				this.alert("납부 은행이 다른 항목이 존재합니다.\n다시 확인해주세요.");
        				return false;
        			}
        		}
        	}

        	var result = this.gfn_confirm( "저장 시 환불 정보를 수정, 추가하셨다면 적용이 되지 않습니다.\n정말로 저장하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_NapbuSave = function()
        {
            if(!this.fn_PreNapbuSave())
            {
                return false;
            }
            var strSvc      = "NapbuSave";
            var strUrl      = "/prj/UR/UR03/Save_2050305_M_Napbu.do";
            var strInDs     = "dsNapbu=dsNapbu:u";
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
        this.fn_PostNapbuSave = function()
        {
            this.fn_DRet();
        };

        /**********************************************************************
                11. 환불내역 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreHwanbulSave = function()
        {
            if(!this.gfn_isUpdate(this.dsHwanbul) && !this.gfn_isUpdate(this.dsHwanbulList))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	var rowCnt = this.dsHwanbul.rowcount;
        	var chk = 0;

        	for(var i=0 ; i<rowCnt; i++)
        	{
        		if(this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_INSERT || this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			var hwanbulSayu = this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD");
        			var hwanbulDt = this.dsHwanbulList.getColumn(0, "HWANBUL_DT");
        			var hwanbulDt1 = this.dsHwanbul.getColumn(i, "HWANBUL_DT");
        			var hwanbulBankNm = this.dsHwanbulList.getColumn(0, "HWANBUL_BANK_NM");
        			var napbuGeumaek = this.dsHwanbul.getColumn(i, "NAPBU_GEUMAEK");
        			var hwanbulGyejwa = this.dsHwanbulList.getColumn(0, "HWANBUL_GYEJWA_NO");
        			var yegeumju = this.dsHwanbulList.getColumn(0, "HWANBUL_YEGEUMJU");
        			var hwanbulGijunGbcd = this.dsHwanbul.getColumn(i, "HWANBUL_GIJUN_GBCD");
        			var hwanbulGeumaek = this.dsHwanbul.getColumn(i, "HWANBUL_GEUMAEK");
        			var ijunnapbuYn = this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "IJUNG_NAPBU_YN");

        			if(this.gfn_isNull(hwanbulSayu))
        			{
        				this.alert("환불사유를 선택해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulBankNm))
        			{
        				this.alert("환불은행을 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulGyejwa))
        			{
        				this.alert("환불계좌를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(yegeumju))
        			{
        				this.alert("예금주를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulDt))
        			{
        				this.alert("환불일자를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulDt1))
        			{
        				this.alert("아래 표의 환불일자를 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulGeumaek))
        			{
        				this.alert("환불금액을 입력해주세요.");
        				return false;
        			}
        			if(this.gfn_isNull(hwanbulGijunGbcd))
        			{
        				this.alert("환불산정구분을 선택해주세요.");
        				return false;
        			}
        			if(hwanbulSayu == '1' || hwanbulSayu == '2')
        			{
        				this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        				this.ds_dInput.setColumn(0, "HAKGI", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKGI"));
        				this.ds_dInput.setColumn(0, "HAKBEON", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKBEON"));

        				var strSvc      = "HwanbulCntRet";
        				var strUrl      = "/prj/UR/UR03/Retrieve_2050305_M_HwanbulCnt.do";
        				var strInDs     = "ds_dInput=ds_dInput";
        				var strOutDs    = "dsHwanbulCnt=dsHwanbulCnt";
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

        				var hwanbulCnt = this.dsHwanbulCnt.getColumn(0, "CNT");

        				if(hwanbulCnt == 0 && ijunnapbuYn == '1')
        				{
        					this.alert("이중 납부자는 자퇴와 제적을 선택할 수 없습니다.");
        					return false;
        				}

        				if(this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_DAESANG_GBCD") == '03')
        				{
        					if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '01' || this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '02')
        					{
        						this.geumaekChk ++;
        					}
        				}
        				else
        				{
        					if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '02')
        					{
        						this.geumaekChk = 2;
        					}
        				}
        			}
        		}
        		if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '01')
        		{
        			chk ++;
        		}
        		if(this.dsHwanbul.getColumn(i, "GEUMAEK_GBCD") == '02')
        		{
        			chk ++;
        		}
        	}

        	if(this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_DAESANG_GBCD") == '03')
        	{
        		if(chk != 0 && chk != 2)
        		{
        			this.alert("입학금과 수업료는 한번에 환불 처리하셔야 합니다.");
        			return false;
        		}
        	}

        	var result = this.gfn_confirm( "저장 시 납부 정보를 수정, 추가하셨다면 적용이 되지 않습니다.\n정말로 저장하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "DEUNGROK_YYYY"));
        	this.ds_dInput.setColumn(0, "HAKGI", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKGI"));
        	this.ds_dInput.setColumn(0, "HAKBEON", this.dsDaesangja.getColumn(this.dsDaesangja.rowposition, "HAKBEON"));

        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_HwanbulSave = function()
        {
            if(!this.fn_PreHwanbulSave())
            {
                return false;
            }
            var strSvc      = "HwanbulSave";
            var strUrl      = "/prj/UR/UR03/Save_2050305_M_Hwanbul.do";
            var strInDs     = "dsHwanbul=dsHwanbul:u ";
        		strInDs    += "dsHwanbulList=dsHwanbulList:u ";
        		strInDs    += "ds_dInput=ds_dInput";
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
        this.fn_PostHwanbulSave = function()
        {
        	if(this.dsJanghak.rowcount != 0)
        	{
        		if(this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD") == '1' || this.dsHwanbulList.getColumn(0, "HWANBUL_SAYU_GBCD") == '2')
        		{
        			this.ds_dInput.setColumn(0, "DEUNGROK_YYYY", this.dsHwanbul.getColumn(0, "DEUNGROK_YYYY"));
        			this.ds_dInput.setColumn(0, "HAKGI", this.dsHwanbul.getColumn(0, "HAKGI"));
        			this.ds_dInput.setColumn(0, "HAKBEON", this.dsHwanbul.getColumn(0, "HAKBEON"));
        			this.ds_dInput.setColumn(0, "BANK_GBCD", this.dsHwanbul.getColumn(0, "BANK_GBCD"));

        			this.fn_Janghak();
        		}
        	}
        	this.geumaekChk = 0;
        	this.fn_DRet();
        };

        /**********************************************************************
                12. 각종함수
        ***********************************************************************/
        // 환불내역 버튼 활성화
        this.fn_HwanbulEnable = function()
        {
        	this.btnSanjeong.set_visible(true);
        	this.btnNew.set_visible(true);
        	this.btnDel3.set_visible(true);
        	this.btnSave3.set_visible(true);
        };

        // 환불내역 버튼 비활성화
        this.fn_HwanbulDisable = function()
        {
        	this.btnSanjeong.set_visible(false);
        	this.btnNew.set_visible(false);
        	this.btnDel3.set_visible(false);
        	this.btnSave3.set_visible(false);
        };

        // 납부금액 자동생성
        this.fn_Saengsung = function()
        {
        	for(var i=0; i<this.dsNapbu.rowcount; i++)
        	{
        		if(this.dsNapbu.getColumn(i,'GOJI_GEUMAEK') > 0 && this.gfn_isNull(this.dsNapbu.getColumn(i,'NAPBU_GEUMAEK')))
        		{
        			this.dsNapbu.setColumn(i,'NAPBU_GEUMAEK', this.dsNapbu.getColumn(i,'GOJI_GEUMAEK'));
        			this.dsNapbu.setColumn(i,'NAPBU_DT', objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			this.dsNapbu.setColumn(i,'BANK_GBCD', '09');
        		}
        	}
        };

        // 환불금액산정
        this.fn_Sanjeong = function()
        {
        	var rowCnt = this.dsNapbu.rowcount;
        	var chk = 0;

        	if(this.gfn_isNull(this.dsHwanbulList.getColumn(0, "HWANBUL_SEQ")))
        	{
        		this.dsHwanbul.deleteAll();
        		for(var i = 0; i < rowCnt; i ++)
        		{
        			if(!this.gfn_isNull(this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK")))
        			{
        				var nRow = this.dsHwanbul.addRow(i);
        				this.dsHwanbul.setColumn(nRow, "DEUNGROK_YYYY", this.dsNapbu.getColumn(i, "DEUNGROK_YYYY"));
        				this.dsHwanbul.setColumn(nRow, "HAKGI", this.dsNapbu.getColumn(i, "HAKGI"));
        				this.dsHwanbul.setColumn(nRow, "HAKBEON", this.dsNapbu.getColumn(i, "HAKBEON"));
        				this.dsHwanbul.setColumn(nRow, "BANK_GBCD", this.dsNapbu.getColumn(i, "BANK_GBCD"));
        				this.dsHwanbul.setColumn(nRow, "GEUMAEK_GBCD", this.dsNapbu.getColumn(i, "GEUMAEK_GBCD"));
        				this.dsHwanbul.setColumn(nRow, "NAPBU_GEUMAEK", this.dsNapbu.getColumn(i, "NAPBU_GEUMAEK"));
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        				this.dsHwanbul.setColumn(nRow, "HWANBUL_GIJUN_GBCD", "");
        				chk++;
        			}
        		}
        		if(chk != 0)
        		{
        			var nRow1 = this.dsHwanbulList.addRow();
        			this.dsHwanbulList.setColumn(nRow1, "DEUNGROK_YYYY", this.dsNapbu.getColumn(0, "DEUNGROK_YYYY"));
        			this.dsHwanbulList.setColumn(nRow1, "HAKGI", this.dsNapbu.getColumn(0, "HAKGI"));
        			this.dsHwanbulList.setColumn(nRow1, "HAKBEON", this.dsNapbu.getColumn(0, "HAKBEON"));
        			this.dsHwanbulList.setColumn(nRow1, "HWANBUL_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        			this.dsHwanbulList.setColumn(nRow1, "HWANBUL_SAYU_GBCD", "");

        			//환불 사유 콤보 활성화
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(true);
        			this.divHwanbul.form.cboHwanbulSayu.set_index(0);
        		}
        		else
        		{
        			this.alert("환불할 금액이 없습니다. 다시 확인해주세요.");
        			return false;
        		}
        	}
        	else
        	{
        		this.alert("환불한 내역이 있을 경우 환불 금액 산정을 할 수 없습니다.");
        		return false;
        	}
        };

        // 이중납부 등록
        this.fn_Napbu = function()
        {
        	var curRow = this.dsDaesangja.rowposition;
        	if(this.dsDaesangja.getColumn(curRow, "NAPBU_STCD") != '1')
        	{
        		this.alert("납부한 대상자만 이중납부 등록을 하실 수 있습니다.");
        		return false;
        	};

        	var row = this.dsDaesangja.insertRow(curRow+1);
        	this.dsDaesangja.copyRow(row, this.dsDaesangja, curRow);
        	this.dsDaesangja.setColumn(row, "BANK_GBCD", "");

        	this.fn_DRet();
        };

        // 장학
        this.fn_Janghak = function()
        {
        	if(this.geumaekChk != 2)
        	{
        		return false;
        	}
        	var strSvc      = "Janghak";
            var strUrl      = "/prj/UR/UR03/Save_2050206_M_Janghak.do";
            var strInDs     = "ds_dInput=ds_dInput";
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
        }

        /**********************************************************************
                13. 팝업
        ***********************************************************************/
        this.divSearch_btnSearchHaksaeng_onclick = function(obj,e)
        {
        	var hakbeonNm = this.divSearch.form.edtSearchNm.value;
        	this.fn_setCallHakbeonPopup(hakbeonNm);
        };

        this.fn_setCallHakbeonPopup = function(strSearchValue)
        {
        	this.dsHakbeon.clearData();
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchHakbeon";
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
        	}
        	else
        	{
        		var oArg = {hakbeonNm:strSearchValue, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }

        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdDaesangja_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        this.grdNapbu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdJanghak_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdHwanbul_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 조회조건 팝업내용 변경시
        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(e.newvalue);
        			}
        	   }
        	}
        };

        // 등록대상자 목록 로우 변경전
        this.dsDaesangja_canrowposchange = function(obj,e)
        {
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        };

        // 등록대상자 목록 로우 변경시 조회
        this.dsDaesangja_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();

        	if(obj.getColumn(obj.rowposition, "NAPBU_STCD") == '1' && obj.getRowType(obj.rowposition) != Dataset.ROWTYPE_INSERT)
        	{
        		this.fn_HwanbulEnable();
        	}
        	else
        	{
        		if(this.dsHwanbul.rowcount != 0)
        		{
        			this.fn_HwanbulEnable();
        		}
        		else
        		{
        			this.fn_HwanbulDisable();
        		}
        	}
        };

        // 납부내역 변경시
        this.dsNapbu_onvaluechanged = function(obj,e)
        {
        	if(obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_UPDATE)
        	{
        		if(this.gfn_isNull(obj.getColumn(obj.rowposition, "NAPBU_DT")))
        		{
        			obj.setColumn(obj.rowposition, "NAPBU_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        		}
        	}
        };

        // 환불날짜 변경시 그리드에도 적용
        this.divHwanbul_calHwanbulDt_onchanged = function(obj,e)
        {
        	for(var i=0; i<this.dsHwanbul.rowcount; i++)
        	{
        		if(this.dsHwanbul.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			this.dsHwanbul.setColumn(i,'HWANBUL_DT', obj.value);
        		}
        	}
        };

        // 환불산정구분 변경시
        this.dsHwanbul_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "HWANBUL_GIJUN_GBCD")
        	{
        		if(obj.getColumn(obj.rowposition, "HWANBUL_GIJUN_GBCD") == '1')
        		{
        			obj.setColumn(obj.rowposition, "HWANBUL_GEUMAEK", obj.getColumn(obj.rowposition, "NAPBU_GEUMAEK"));
        		}
        		else
        		{
        			var napbuGeumaek = obj.getColumn(obj.rowposition, "NAPBU_GEUMAEK");
        			var hwanbulGijunGbcd = obj.getColumn(obj.rowposition, "HWANBUL_GIJUN_GBCD");
        			var preHwanbulGijunGbcd;
        			var postHwanbulGijunGbcd;
        			preHwanbulGijunGbcd = parseInt(hwanbulGijunGbcd.split("/")[0]);
        			postHwanbulGijunGbcd = parseInt(hwanbulGijunGbcd.split("/")[1]);

        			var hwanbulGeumaek = Math.trunc(napbuGeumaek*(preHwanbulGijunGbcd/postHwanbulGijunGbcd));

        			var tenwonFloorGeumaek = Math.floor(hwanbulGeumaek/10)*10;

        			obj.setColumn(obj.rowposition, "HWANBUL_GEUMAEK", tenwonFloorGeumaek);
        		}
        	}
        };

        // 환불내역 로우 변경시
        this.dsHwanbul_onrowposchanged = function(obj,e)
        {
        	if(this.dsHwanbulList.getRowType(0) == Dataset.ROWTYPE_INSERT)
        	{
        		if(obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        		{
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(true);
        			this.divHwanbul.form.edtHwanbulBank.set_enable(true);
        			this.divHwanbul.form.edtHwanbulGyejwa.set_enable(true);
        			this.divHwanbul.form.edtYegeumju.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(true);
        			this.divHwanbul.form.cboHwanbulSayu.set_index(0);
        		}
        	}
        	else
        	{
        		if(obj.rowcount != 0)
        		{
        			this.divHwanbul.form.cboHwanbulSayu.set_enable(false);
        			this.divHwanbul.form.edtHwanbulBank.set_enable(true);
        			this.divHwanbul.form.edtHwanbulGyejwa.set_enable(true);
        			this.divHwanbul.form.edtYegeumju.set_enable(true);
        			this.divHwanbul.form.calHwanbulDt.set_enable(false);
        		}
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsNapbu))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbul))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsHwanbulList))
        	{
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                15. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgi_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGI",obj.value);
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
        		this.ds_input.setColumn(0,"HAKNYEON_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakjeokSt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchNapbuSt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"NAPBU_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdDaesangja.addEventHandler("onheadclick",this.grdDaesangja_onheadclick,this);
            this.grdDaesangja.addEventHandler("onheaddblclick",this.grdDaesangja_onheaddblclick,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.grdJanghak.addEventHandler("onheaddblclick",this.grdJanghak_onheaddblclick,this);
            this.grdNapbu.addEventHandler("onheaddblclick",this.grdNapbu_onheaddblclick,this);
            this.btnNapbu.addEventHandler("onclick",this.fn_Napbu,this);
            this.btnSave2.addEventHandler("onclick",this.fn_NapbuSave,this);
            this.btnDel2.addEventHandler("onclick",this.fn_NapbuDel,this);
            this.btnSaengsung.addEventHandler("onclick",this.fn_Saengsung,this);
            this.divHwanbul.form.edtHwanbulBank.addEventHandler("onkeydown",this.divSearch_edtSearchSuhoemNo_onkeydown,this);
            this.divHwanbul.form.edtHwanbulGyejwa.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divHwanbul.form.cboHwanbulSayu.addEventHandler("onitemchanged",this.divHwanbul_cboHwanbulSayu_onitemchanged,this);
            this.divHwanbul.form.edtYegeumju.addEventHandler("onkeydown",this.divSearch_edtSearchNm_onkeydown,this);
            this.divHwanbul.form.calHwanbulDt.addEventHandler("onchanged",this.divHwanbul_calHwanbulDt_onchanged,this);
            this.grdHwanbul.addEventHandler("onheaddblclick",this.grdHwanbul_onheaddblclick,this);
            this.btnSanjeong.addEventHandler("onclick",this.fn_Sanjeong,this);
            this.btnNew.addEventHandler("onclick",this.fn_HwanbulNew,this);
            this.btnDel3.addEventHandler("onclick",this.fn_HwanbulDel,this);
            this.btnSave3.addEventHandler("onclick",this.fn_HwanbulSave,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.divSearch_cboSearchHakgi_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchNapbuSt.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchHakjeokSt.addEventHandler("onkeydown",this.divSearch_cboSearchHakjeokSt_onkeydown,this);
            this.divSearch.form.btnSearchHaksaeng.addEventHandler("onclick",this.divSearch_btnSearchHaksaeng_onclick,this);
            this.divSearch.form.edtSearchNm.addEventHandler("onchanged",this.divSearch_edtSearchInsrtNm_onchanged,this);
            this.dsDaesangja.addEventHandler("onrowposchanged",this.dsDaesangja_onrowposchanged,this);
            this.dsDaesangja.addEventHandler("canrowposchange",this.dsDaesangja_canrowposchange,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsJanghak.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsNapbu.addEventHandler("onvaluechanged",this.dsNapbu_onvaluechanged,this);
            this.dsHwanbul.addEventHandler("oncolumnchanged",this.dsHwanbul_oncolumnchanged,this);
            this.dsHwanbul.addEventHandler("onrowposchanged",this.dsHwanbul_onrowposchanged,this);
            this.dsHwanbulList.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UR03_2050305_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
