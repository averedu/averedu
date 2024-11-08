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
            this.set_titletext("등록대상자조회(재학생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"IJUNG_NAPBU_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BUNNAP_DAESANG_YN\" type=\"STRING\" size=\"2\"/><Column id=\"BUNNAP_DAESANG_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BOKHAKIYEONJA_YN\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAKIYEONJA_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"CHAEKJEONG_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHAEKJEONG_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_HAKSAENGWEI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_GISUEONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_SUHYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HWANBUL_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SAYU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANGJU_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"KOOKMIN_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BUNNAP_DAESANG_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAKIYEONJA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNapbu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrintBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKNYEON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONG_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_STCD\" type=\"STRING\" size=\"10\"/><Column id=\"NAPBU_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"IJUNG_NAPBU_YN\" type=\"STRING\" size=\"2\"/><Column id=\"IJUNG_NAPBU_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"CHAEKJEONG_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHAEKJEONG_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_IPHAKGUEM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JANGHAK_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_HAKSAENGWEI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_GISUEONG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GITA_SUHYE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HWANBUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HWANBUL_YN_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HWANBUL_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HWANBUL_SAYU_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"NAPBU_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANGJU_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"KOOKMIN_GYEJWA\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("4");
            obj.set_text("등록대상자 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","137","88",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","0","114",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsMaster2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학년\"/><Cell col=\"1\" text=\"학기\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"주민번호\"/><Cell col=\"5\" text=\"학적상태\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"주야구분\"/><Cell col=\"8\" text=\"신청학점\"/><Cell col=\"9\" text=\"수업료\"/><Cell col=\"10\" text=\"납부일자\"/><Cell col=\"11\" text=\"실수납액\"/><Cell col=\"12\" text=\"납부은행\"/><Cell col=\"13\" text=\"광주은행 가상계좌번호\"/><Cell col=\"14\" text=\"국민은행 가상계좌번호\"/><Cell col=\"15\" text=\"납부상태\"/><Cell col=\"16\" text=\"이중납부여부\"/><Cell col=\"17\" text=\"환불여부\"/><Cell col=\"18\" text=\"환불사유\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKNYEON_GBNM\" combodataset=\"ds_학년_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"1\" text=\"bind:HAKGI_NM\" combodataset=\"ds_학기_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:HAKBEON\"/><Cell col=\"3\" text=\"bind:HAKSAENG_NM\" combodataset=\"ds_차수_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"4\" text=\"bind:RES_NO\"/><Cell col=\"5\" text=\"bind:HAKJEOK_STNM\" combodataset=\"ds_학적상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"6\" text=\"bind:HAKGWA_NM\" combodataset=\"ds_학과_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\" combodataset=\"ds_주야_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"8\" text=\"bind:SINCHEONG_HAKJEOM\"/><Cell col=\"9\" text=\"bind:CHAEKJEONG_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:NAPBU_DT\" displaytype=\"expr:NAPBU_DT != null ? &apos;date&apos; : &apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:BANK_GBNM\" combodataset=\"ds_납부은행_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"13\" text=\"bind:GWANGJU_GYEJWA\"/><Cell col=\"14\" text=\"bind:KOOKMIN_GYEJWA\"/><Cell col=\"15\" text=\"bind:NAPBU_STNM\" combodataset=\"ds_납부상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"16\" text=\"bind:IJUNG_NAPBU_YN_NM\" combodataset=\"ds_이중납부여부\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"17\" text=\"bind:HWANBUL_YN_NM\" combodataset=\"ds_환불여부_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"18\" text=\"bind:HWANBUL_SAYU_GBNM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","69","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
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
            obj.set_taborder("17");
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
            obj.set_taborder("18");
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
            obj.set_taborder("19");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","328","9","104","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","64",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","79","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","318","0","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","239","0","56","34",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","30","31","1600","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
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
            obj.set_taborder("27");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","533","0","10","65",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","824","0","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01","453","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
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
            obj.set_taborder("31");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_00","745","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00","938","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1040","0","10","61",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
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
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01_00_00_00_00_00","1174","0","56","62",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchBunnap","1333","37","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("분납대상여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchNapbu","1230","37","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("이중납부여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_00_01","961","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("납부상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNapbuSt","1050","36","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsNapbu");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00_01_01","961","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
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
            obj.set_taborder("39");
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
            obj.set_taborder("40");
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
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","271","32","10","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","454","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchDeungrokFrDt","542","36","180","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchDeungrokToDt","756","36","182","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07_00","723","37","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1323","32","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00","1426","33","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchHwanbul00","1436","37","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("환불여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00_00_00","1505","33","10","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchBokhak","1515","37","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("복학이연자 여부");
            obj.set_tooltiptype("hover");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnGosiseoPrint","1550","81","90","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("고지서 출력");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBank","1422","84","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBank");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster1","0","114",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMaster1");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"학년\"/><Cell col=\"1\" rowspan=\"2\" text=\"학기\"/><Cell col=\"2\" rowspan=\"2\" text=\"학번\"/><Cell col=\"3\" rowspan=\"2\" text=\"성명\"/><Cell col=\"4\" rowspan=\"2\" text=\"주민번호\"/><Cell col=\"5\" rowspan=\"2\" text=\"학적상태\"/><Cell col=\"6\" rowspan=\"2\" text=\"학과\"/><Cell col=\"7\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"8\" colspan=\"3\" text=\"책정금액\"/><Cell col=\"11\" colspan=\"3\" text=\"장학혜택\"/><Cell col=\"14\" colspan=\"3\" text=\"기타금액\"/><Cell col=\"17\" rowspan=\"2\" text=\"납부일자\"/><Cell col=\"18\" rowspan=\"2\" text=\"실수납액\"/><Cell col=\"19\" rowspan=\"2\" text=\"납부은행\"/><Cell col=\"20\" rowspan=\"2\" text=\"광주은행 가상계좌번호\"/><Cell col=\"21\" rowspan=\"2\" text=\"국민은행 가상계좌번호\"/><Cell col=\"22\" rowspan=\"2\" text=\"납부상태\"/><Cell col=\"23\" rowspan=\"2\" text=\"이중납부여부\"/><Cell col=\"24\" rowspan=\"2\" text=\"분납여부\"/><Cell col=\"25\" rowspan=\"2\" text=\"환불여부\"/><Cell col=\"26\" rowspan=\"2\" text=\"환불사유\"/><Cell col=\"27\" rowspan=\"2\" text=\"복학이연자\"/><Cell row=\"1\" col=\"8\" text=\"입학금\"/><Cell row=\"1\" col=\"9\" text=\"수업료\"/><Cell row=\"1\" col=\"10\" text=\"등록금액\"/><Cell row=\"1\" col=\"11\" text=\"입학금\"/><Cell row=\"1\" col=\"12\" text=\"수업료\"/><Cell row=\"1\" col=\"13\" text=\"혜택액\"/><Cell row=\"1\" col=\"14\" text=\"학생회비\"/><Cell row=\"1\" col=\"15\" text=\"기성회비\"/><Cell row=\"1\" col=\"16\" text=\"수혜경비\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKNYEON_GBNM\" combodataset=\"ds_학년\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"1\" text=\"bind:HAKGI_NM\" combodataset=\"ds_학기\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"2\" text=\"bind:HAKBEON\"/><Cell col=\"3\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"4\" text=\"bind:RES_NO\"/><Cell col=\"5\" text=\"bind:HAKJEOK_STNM\" combodataset=\"ds_학적상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"6\" text=\"bind:HAKGWA_NM\" combodataset=\"ds_학과_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"bind:JUYA_GBNM\" combodataset=\"ds_주야_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"8\" text=\"bind:CHAEKJEONG_IPHAKGUEM\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CHAEKJEONG_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"10\" text=\"expr:CHAEKJEONG_IPHAKGUEM + CHAEKJEONG_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:JANGHAK_IPHAKGUEM\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"13\" text=\"expr:JANGHAK_IPHAKGUEM + JANGHAK_SUEOPRYO\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:GITA_HAKSAENGWEI\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:GITA_GISUEONG\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:GITA_SUHYE\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:NAPBU_DT\" displaytype=\"expr:NAPBU_DT != null ? &apos;date&apos; : &apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"18\" text=\"bind:NAPBU_GEUMAEK\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:BANK_GBNM\" combodataset=\"ds_납부은행_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"20\" text=\"bind:GWANGJU_GYEJWA\"/><Cell col=\"21\" text=\"bind:KOOKMIN_GYEJWA\"/><Cell col=\"22\" text=\"bind:NAPBU_STNM\" combodataset=\"ds_납부상태_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"23\" text=\"bind:IJUNG_NAPBU_YN_NM\" combodataset=\"ds_이중납부여부\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"24\" text=\"bind:BUNNAP_DAESANG_YN_NM\" combodataset=\"ds_분납여부_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"25\" text=\"bind:HWANBUL_YN_NM\" combodataset=\"ds_환불여부_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/><Cell col=\"26\" text=\"bind:HWANBUL_SAYU_GBNM\"/><Cell col=\"27\" text=\"bind:BOKHAKIYEONJA_YN_NM\" combodataset=\"ds_복학이연자_grid\" combocodecol=\"CD\" combodatacol=\"LABEL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","137","88",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록대상자조회(재학생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calSearchDeungrokFrDt","value","ds_input","DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.calSearchDeungrokToDt","value","ds_input","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.chkSearchNapbu","value","ds_input","IJUNG_NAPBU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.chkSearchBunnap","value","ds_input","BUNNAP_DAESANG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cboSearchNapbuSt","value","ds_input","NAPBU_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchHakjeokSt","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.chkSearchHwanbul00","value","ds_input","HWANBUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.chkSearchBokhak","value","ds_input","BOKHAKIYEONJA_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster1");
            this._addPreloadList("data","","dsMaster2");
        };
        
        // User Script
        this.registerScript("UR03_2050304_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR03_2050304_M.xfdl(등록 대상자 관리(재학) 관리(조회))
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
            var strDs    = "dsHakgi|dsJuya|dsHaknyeon|dsHakjeok|dsNapbu|dsBank";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00003|03001|00004|03008|03007";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|T|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostInit = function()
        {
        	this.dsBank.filter("REF_1 == '1'");
        	this.cboBank.set_index(0);
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
            this.gfn_clearSortAll(this.grdMaster1);
        	this.gfn_clearSortAll(this.grdMaster2);
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
        					this.fn_PostInit();
        			    break;
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
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
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("등록년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "HAKGI")))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	// 등록시작일자가 널값이 아니고 등록종료일자는 널값일때
        	if(!this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		this.ds_input.setColumn(0, "GUBUN", "0");
        	}
        	// 등록시작일자와 등록종료일자가 널값이 아닐때
        	else if(!this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		// 등록시작일자가 등록종료일자보다 최근날짜일때
        		if(this.ds_input.getColumn(0, "DEUNGROK_FRDT") > this.ds_input.getColumn(0, "DEUNGROK_TODT"))
        		{
        			this.alert("등록기간을 확인해주세요.");
        			return false;
        		}
        		else
        		{
        			this.ds_input.setColumn(0, "GUBUN", "1");
        		}
        	}
        	// 등록시작일자가 널값이고 등록종료일자는 널값이 아닐때
        	else if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_FRDT")) && !this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_TODT")))
        	{
        		this.alert("등록기간을 확인해주세요.");
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
            var strUrl      = "/prj/UR/UR03/Retrieve_2050304_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster1=dsMaster1 ";
        		strOutDs   += "dsMaster2=dsMaster2";
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
            this.gfn_getRowCount(this.staRowCnt1,this.dsMaster1);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsMaster2);
        };

        /**********************************************************************
                06. 고지서출력
        ***********************************************************************/
        this.btnGosiseoPrint_onclick = function(obj,e)
        {
        	var DEUNGROK_YYYY       = this.ds_input.getColumn(0, "DEUNGROK_YYYY");
        	var HAKGI          		= this.ds_input.getColumn(0, "HAKGI");
        	var HAKNYEON_GBCD 		= this.ds_input.getColumn(0, "HAKNYEON_GBCD");
        	var HAKGWA_CD           = this.ds_input.getColumn(0, "HAKGWA_CD");
        	var JUYA_GBCD           = this.ds_input.getColumn(0, "JUYA_GBCD");
        	var BANK_GBCD           = this.cboBank.value;
        	var HAKJEOK_STCD        = this.ds_input.getColumn(0, "HAKJEOK_STCD");
        	var HAKBEON          	= this.ds_input.getColumn(0, "HAKBEON");
        	var NAPBU_STCD          = this.ds_input.getColumn(0, "NAPBU_STCD");
        	var INSERT_ID           = objApp.gds_userInfoDb.getColumn(0,"USER_ID")
        	var INSERT_PG			= objApp.gv_cutPrgId;

        	if(this.gfn_isNull(DEUNGROK_YYYY))
        	{
        		this.alert("등록년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(HAKGI))
        	{
        		this.alert("학기를 선택해주세요.");
        		return false;
        	}

        	var param1 = { DEUNGROK_YYYY		: DEUNGROK_YYYY
        				, HAKGI					: HAKGI
        				, HAKGWA_CD				: HAKGWA_CD
        				, JUYA_GBCD				: JUYA_GBCD
        				, HAKBEON				: HAKBEON
        				, BANK_GBCD				: BANK_GBCD
        				, HAKNYEON_GBCD			: HAKNYEON_GBCD
        				, HAKJEOK_STCD			: HAKJEOK_STCD
        				, NAPBU_STCD			: NAPBU_STCD
        				, INSERT_ID				: INSERT_ID
        				, INSERT_PG				: INSERT_PG
        				};

        	var param2 = { DEUNGROK_YYYY		: DEUNGROK_YYYY
        				, HAKGI					: HAKGI
        				, HAKGWA_CD				: HAKGWA_CD
        				, JUYA_GBCD				: JUYA_GBCD
        				, HAKNYEON_GBCD			: HAKNYEON_GBCD
        				, HAKJEOK_STCD			: HAKJEOK_STCD
        				, NAPBU_STCD			: NAPBU_STCD
        				, HAKBEON				: HAKBEON
        				};

        	if(HAKGI == '11')
        	{
        		this.gfn_commonUtils_report('UR03/UR03_2050304_M_01.crf',  param1);
        	}
        	else if(HAKGI == '21')
        	{
        		this.gfn_commonUtils_report('UR03/UR03_2050304_M_02.crf',  param1);
        	}
        	else
        	{
        		this.gfn_commonUtils_report('UR03/UR03_2050304_M_03.crf',  param2);
        	}
        };

        /**********************************************************************
                07. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 팝업
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
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster1_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdMaster2_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

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

        this.divSearch_cboSearchHakgi_onitemchanged = function(obj,e)
        {
        	this.dsMaster1.clearData();
        	this.dsMaster2.clearData();
        	// 계절학기일때
        	if(obj.value == '12' || obj.value == '22')
        	{
        		this.grdMaster1.set_visible(false);
        		this.grdMaster2.set_visible(true);
        		this.staRowCnt1.set_visible(false);
        		this.staRowCnt2.set_visible(true);
        	}
        	// 본학기일때
        	else if(obj.value == '11' || obj.value == '21')
        	{
        		this.grdMaster1.set_visible(true);
        		this.grdMaster2.set_visible(false);
        		this.staRowCnt1.set_visible(true);
        		this.staRowCnt2.set_visible(false);
        	}
        };

        /**********************************************************************
                09. 검색창 엔터키 조회
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

        this.divSearch_calSearchDeungrokFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_FRDT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchDeungrokToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DEUNGROK_TODT",obj.value);
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
            this.grdMaster2.addEventHandler("onheaddblclick",this.grdMaster2_onheaddblclick,this);
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
            this.divSearch.form.calSearchDeungrokFrDt.addEventHandler("onkeydown",this.divSearch_calSearchDeungrokFrDt_onkeydown,this);
            this.divSearch.form.calSearchDeungrokToDt.addEventHandler("onkeydown",this.divSearch_calSearchDeungrokToDt_onkeydown,this);
            this.btnGosiseoPrint.addEventHandler("onclick",this.btnGosiseoPrint_onclick,this);
            this.cboBank.addEventHandler("onkeydown",this.divSearch_cboSearchNapbuSt_onkeydown,this);
            this.grdMaster1.addEventHandler("onheaddblclick",this.grdMaster1_onheaddblclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UR03_2050304_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
