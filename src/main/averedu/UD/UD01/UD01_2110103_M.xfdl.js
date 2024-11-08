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
            this.set_titletext("단체등록");
            this.set_cssclass("point");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SEOLIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"DAEYPO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BU_DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_MOKJEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SINSEOL_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SINSEOL_HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MYEONGDAN_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOYUK_GONGGAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOYUK_GONGGAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANGJA_SAWON_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DAMDANGJA_TEL_NO\" type=\"STRING\" size=\"16\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"GYEOLGWA_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NO_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NM_BKUP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"HWALDONG_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DANCHE_GBCD\"/><Col id=\"DANCHE_BUNRYU_GBCD\"/><Col id=\"DANCHE_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheGbcdMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryuGbcdMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheGbcdDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryuGbcdDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwaldongSangtaeMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwaldongSangtaeDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOSIL_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","76",null,null,"1025","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"191\"/><Column size=\"104\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"단체코드\"/><Cell col=\"2\" text=\"단체명\"/><Cell col=\"3\" text=\"단체구분\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"100\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_GBNM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","0",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-6","8","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("단체구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchHwaldongGb","652","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsHwaldongSangtaeMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_04","546","8","95","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("활동구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchDancheBunryu","368","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDancheBunryuGbcdMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchDancheGb","84","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsDancheGbcdMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_index("-1");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00","833","8","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDancheNm","922","8","257","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","-1","52","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("단체목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","279","8","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05",null,"79","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_05",null,"79","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("단체코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheCd",null,"82","343","22","518",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02",null,"79","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheNm",null,"82","343","22","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00",null,"107","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00",null,"107","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("단체구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_01",null,"107","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheGb",null,"111","343","22","518",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDancheGbcdDetail");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheBunryu",null,"110","343","22","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDancheBunryuGbcdDetail");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_cssclass("point");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_01",null,"135","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_01",null,"135","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuCd",null,"138","202","22","659",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuNm",null,"138","198","22","428",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuHakgwa",null,"138","202","22","218",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_02",null,"163","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_02",null,"163","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengCd",null,"166","202","22","659",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("point");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengNm",null,"166","198","22","428",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHakgwa",null,"166","202","22","218",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHpNo",null,"166","198","22","15",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00_00",null,"191","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00_00",null,"191","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("부대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengCd",null,"194","202","22","659",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengNm",null,"194","198","22","428",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHakgwa",null,"194","202","22","218",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHpNo",null,"194","198","22","15",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_01_00",null,"219","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_01_00",null,"219","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("사회봉사 활동여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSahoebongsa",null,"222","40","22","818",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00",null,"247","1005","195","8",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00",null,"247","150","195","863",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("활동목적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldongMokjeok",null,"250","846","185","15",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_01",null,"442","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_01",null,"442","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("사용공간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSayongGongganCd",null,"445","155","22","706",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_01",null,"442","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00_01",null,"526","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00_01",null,"526","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("서약서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSeoyakseo",null,"529","251","22","590",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00_01",null,"526","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("회원명단");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSeoyakseo",null,"529","40","22","821",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHoewon",null,"529","249","22","90",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHoewon",null,"529","40","22","318",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00_00_00",null,"554","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00_00_00",null,"554","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("활동계획");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldong",null,"557","251","22","590",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00_00_00",null,"554","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("지도교수소견");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHwaldong",null,"557","40","22","821",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu",null,"557","249","22","90",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJidogyosu",null,"557","40","22","318",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosu",null,"138","22","22","632",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDaepyoHaksaeng",null,"166","22","22","632",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBuDaepyoHaksaeng",null,"194","22","22","632",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00",null,"218","150","28","357",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("현재상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboSangtae",null,"222","343","22","11",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsHwaldongSangtaeDetail");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_01_00",null,"470","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_01_00",null,"470","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_01_00",null,"470","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeolibDt",null,"473","343","22","15",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSayongGonggan",null,"445","22","22","680",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwanliDeptNm",null,"445","155","22","15",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnGwanliDept",null,"445","22","22","176",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeunginDt",null,"473","346","22","514",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04_00_00",null,"498","1005","28","8",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00_00",null,"498","150","28","361",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("신설학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_04_00_00",null,"498","150","28","863",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("신설학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","87","51","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeoyakseoFile",null,"528","70","22","517",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwaldongFile",null,"556","70","22","517",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonFile",null,"528","70","22","14",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosuFile",null,"556","70","22","14",null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("파일첨부");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Spin("SpinSinseolYYYY",null,"501","346","22","514",null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboSinseolHakgi",null,"501","343","22","15",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("dsHakgi");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGwanliDeptCd",null,"445","155","22","203",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSayongGongganNm",null,"445","163","22","514",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","41","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","75","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","538","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","643","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","720","0","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","720","31","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","254","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","359","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","822","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","913","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("91");
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
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체등록");
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

            obj = new BindItem("item3","ComboDancheBunryu","value","dsMaster","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtJidogyosuCd","value","dsMaster","JIDOGYOSU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtJidogyosuNm","value","dsMaster","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtJidogyosuHakgwa","value","dsMaster","JIDOGYOSU_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtDaepyoHaksaengCd","value","dsMaster","DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtDaepyoHaksaengNm","value","dsMaster","DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtDaepyoHaksaengHakgwa","value","dsMaster","DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtDaepyoHaksaengHpNo","value","dsMaster","DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtBuDaepyoHaksaengCd","value","dsMaster","BU_DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtBuDaepyoHaksaengNm","value","dsMaster","BU_DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtBuDaepyoHaksaengHakgwa","value","dsMaster","BU_DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtBuDaepyoHaksaengHpNo","value","dsMaster","BU_DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","chkSahoebongsa","value","dsMaster","SAHOE_BONGSA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtHwaldongMokjeok","value","dsMaster","HWALDONG_MOKJEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtSayongGongganCd","value","dsMaster","GYOYUK_GONGGAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtSeoyakseo","value","dsMaster","SEOYAKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","chkSeoyakseo","value","dsMaster","SEOYAKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtHoewon","value","dsMaster","MYEONGDAN_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","chkHoewon","value","dsMaster","MYEONGDAN_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtHwaldong","value","dsMaster","GYEHOEKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","chkHwaldong","value","dsMaster","GYEHOEKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtJidogyosu","value","dsMaster","JIDOGYOSU_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","chkJidogyosu","value","dsMaster","JIDOGYOSU_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtGwanliDeptNm","value","dsMaster","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","calSeunginDt","value","dsMaster","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","calSeolibDt","value","dsMaster","SEOLIB_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_00.form.cboSearchDancheGb","value","ds_input","DANCHE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_00.form.cboSearchDancheBunryu","value","ds_input","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","SpinSinseolYYYY","value","dsMaster","SINSEOL_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","ComboSinseolHakgi","value","dsMaster","SINSEOL_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtGwanliDeptCd","value","dsMaster","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtSayongGongganNm","value","dsMaster","GYOYUK_GONGGAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_00.form.cboSearchHwaldongGb","value","ds_input","HWALDONG_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","ComboSangtae","value","dsMaster","HWALDONG_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_00.form.edtSearchDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("UD01_2110103_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110103_M.xfdl(단체등록)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/02
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
        this.lvchkColidDs   = "DANCHE_NM$DANCHE_GBCD$DANCHE_BUNRYU_GBCD$DAEPYO_HAKBEON$SEUNGIN_DT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "단체명$단체구분$단체분류$대표학생정보$승인일자";

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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsDancheGbcdMaster|dsDancheGbcdDetail|dsDancheBunryuGbcdMaster|dsDancheBunryuGbcdDetail|dsHakgi|dsHwaldongSangtaeMaster|dsHwaldongSangtaeDetail";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80301|80301|80302|80302|00022|80305|80305";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X|X|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostformInit = function()
        {
            this.ds_input.setColumn(0,"DANCHE_GBCD",null);         //단체구분
            this.ds_input.setColumn(0,"DANCHE_BUNRYU_GBCD",null);  //단체분류
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
        		case "Jidogyosu" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE")
        			{
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_CD",       sRtn[0]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_NM",       sRtn[1]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_DEPT",     sRtn[2]);
        				this.dsMaster.set_enableevent(true);
        			}
        		break;
        		case "Dept" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] != "CLOSE")
        			{
        				this.dsMaster.set_enableevent(false);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_CD", sRtn[0]);
        				this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_NM", sRtn[1]);
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
        						this.ds_input1.setColumn(0, "DANCHE_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "SEOYAKSEO_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO"));
        						this.ds_input1.setColumn(0, "SEOYAKSEO_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_JECHUL_YN"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110103_M.do";
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
        						this.ds_input1.setColumn(0, "DANCHE_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "MYEONGDAN_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO"));
        						this.ds_input1.setColumn(0, "MYEONGDAN_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_JECHUL_YN"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110103_M.do";
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
        						this.ds_input1.setColumn(0, "DANCHE_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "GYEHOEKSEO_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO"));
        						this.ds_input1.setColumn(0, "GYEHOEKSEO_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_JECHUL_YN"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110103_M.do";
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
        						this.ds_input1.setColumn(0, "DANCHE_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD"));
        						this.ds_input1.setColumn(0, "JIDOGYOSU_FILE_NO",   this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO"));
        						this.ds_input1.setColumn(0, "JIDOGYOSU_JECHUL_YN",   this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_JECHUL_YN"));

        						var strSvc      = "Save02";
        						var strUrl      = "/prj/UD/UD01/Save02_2110103_M.do";
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
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "tmp1" :        // 회원등록
                         this.fn_Deungrok();
                    break;
                case "tmp2" :        // 변경이력조회
                         this.fn_Byeongyeong();
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
            var strUrl      = "/prj/UD/UD01/Retrieve_2110103_M.do";
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

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	this.btnJidogyosu.set_enable(true);
        	this.btnDaepyoHaksaeng.set_enable(true);
        	this.btnBuDaepyoHaksaeng.set_enable(true);
        	this.btnSayongGonggan.set_enable(true);
        	this.btnGwanliDept.set_enable(true);

            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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
            this.dsMaster.setColumn(nRow,"USE_CHK", "1");           //사용유무
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //하위 자료가 존재하는 데이터에 대한 삭제 건수
        	for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" && this.dsMaster.getColumn(i, "GYEOLGWA_CNT") > 0 )
                {
                    this.gfn_alert("선택한 자료에 대한 활동결과보고서가 존재하여 삭제할 수 없습니다.\n먼저 활동결과보고서를 삭제한 후 다시 삭제 처리하여 주십시오!.","삭제정보","","question");
                    return false;
                }
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UD/UD01/Delete_2110103_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
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

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
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
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

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
            var strUrl      = "/prj/UD/UD01/Save_2110103_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
        	var strArg      = "rowposition=" + this.gfn_updateRowPosition(this.dsMaster);  // 저장 후 row 유지

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
        	var nRow = this.dsMaster.findRow("DANCHE_CD",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);

            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdMaster, "단체 목록","단체 목록");
        };

        /**********************************************************************
                10. 기타 Control Event
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

        // 엔터키 누르면 조회
        this.edtSearchDancheNm_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchDancheNm")
        	{
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"DANCHE_NM",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchDancheGb_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DANCHE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchDancheBunryu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DANCHE_BUNRYU_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchHwaldongGb_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HWALDONG_SANGTAE_GBCD",obj.value);
        		this.fn_Ret();
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
                11. 팝업
        ***********************************************************************/
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

        // 관리부서 팝업
        this.btnGwanliDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.edtGwanliDeptCd.value;
        	this.fn_setCallDeptPopup(deptCdNm);
        };


        // 회원등록 팝업
        this.fn_Deungrok = function()
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("단체조회 후 클릭해주세요.","저장정보","","question");
                return false;
        	}

        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == 2)
        	{
        		this.gfn_alert("신규 단체는 회원등록이 불가능합니다.\n저장 후 등록해주세요.","저장정보","","question");
                return false;
        	}

        	// 회원목록 팝업
        	else
        	{
        		var dancheCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD");

        		if (this.gfn_isNull(dancheCd))
        			return false;

        		var dancheNm = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_NM");
                var oArg = {dancheCd:dancheCd,dancheNm:dancheNm};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hoewon","UD01::UD01_2110103_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        // 변경이력 팝업
        this.fn_Byeongyeong = function()
        {
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) == 2)
        	{
        		this.gfn_alert("신규 단체는 변경이력조회가 불가능합니다.\n저장 후 조회해주세요.","저장정보","","question");
                return false;
        	}
        	var dancheCd = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD");

        	if (this.gfn_isNull(dancheCd))
        			return false;

        	var dancheNm = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_NM");
        	var oArg = {dancheCd:dancheCd,dancheNm:dancheNm};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "byeongyeong","UD01::UD01_2110103_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                12. 파일첨부
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
        	       obj.setColumn(obj.rowposition, "JIDOGYOSU_CD", "");
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
        	else if (e.columnid == "DEPT_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DEPT_CD", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDeptPopup(e.newvalue);
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
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_CD",   this.dsSawon.getColumn(0,"SABEON"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_NM",   this.dsSawon.getColumn(0,"SEONGMYEONG"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "JIDOGYOSU_DEPT", this.dsSawon.getColumn(0,"DEPT_NM"));
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
        		switch (strObjName)
        		{
        			case "grdHoewon":
        					if ( this.dsHoewon.findRow("HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON")) >= 0 ) {
        						this.gfn_alert("이미 신청한 학번입니다.","신청정보","","warning");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",     "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM", "");
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", "");
        						return;
        					} else {
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKBEON",            this.dsHakbeon.getColumn(0,"HAKBEON"));
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKSAENG_NM",        this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        						this.dsHoewon.setColumn(this.dsHoewon.rowposition, "HAKJEOK_SANGTAE_NM", this.dsHakbeon.getColumn(0,"HAKJEOK_SANGTAE_NM"));
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
        };

        this.fn_setCallDeptPopup = function(strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsDept";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsDept.rowcount == 1)
        	{
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue, jojikGbcd:'00', useYn:'1'};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "Dept","com::COMM_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };


        /**********************************************************************
                13. 첨부파일
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.div_00.form.cboSearchHwaldongGb.addEventHandler("onkeydown",this.div_00_cboSearchHwaldongGb_onkeydown,this);
            this.div_00.form.cboSearchDancheBunryu.addEventHandler("onkeydown",this.div_00_cboSearchDancheBunryu_onkeydown,this);
            this.div_00.form.cboSearchDancheGb.addEventHandler("onkeydown",this.div_00_cboSearchDancheGb_onkeydown,this);
            this.div_00.form.edtSearchDancheNm.addEventHandler("onkeydown",this.edtSearchDancheNm_onkeydown,this);
            this.btnJidogyosu.addEventHandler("onclick",this.btnJidogyosu_onclick,this);
            this.btnDaepyoHaksaeng.addEventHandler("onclick",this.btnDaepyoHaksaeng_onclick,this);
            this.btnBuDaepyoHaksaeng.addEventHandler("onclick",this.btnBuDaepyoHaksaeng_onclick,this);
            this.calSeolibDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.btnSayongGonggan.addEventHandler("onclick",this.btnSayongGonggan_onclick,this);
            this.btnGwanliDept.addEventHandler("onclick",this.btnGwanliDept_onclick,this);
            this.calSeunginDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.btnSeoyakseoFile.addEventHandler("onclick",this.btnSeoyakseoFile_onclick,this);
            this.btnHwaldongFile.addEventHandler("onclick",this.btnHwaldongFile_onclick,this);
            this.btnHoewonFile.addEventHandler("onclick",this.btnHoewonFile_onclick,this);
            this.btnJidogyosuFile.addEventHandler("onclick",this.btnJidogyosuFile_onclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("UD01_2110103_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
