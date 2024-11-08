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
            this.set_titletext("단체신청내역 관리");
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
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_SIJAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_JONGRYO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SINCHEONG_SIJAK_DT\"/><Col id=\"SINCHEONG_JONGRYO_DT\"/><Col id=\"DANCHE_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeunginSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDancheBunryuGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_SINCHEONG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_SINCHEONG_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"100\"/><Column id=\"SEOLIB_DT\" type=\"DATE\" size=\"8\"/><Column id=\"DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BU_DAEPYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HAKGWA\" type=\"STRING\" size=\"256\"/><Column id=\"BU_DAEPYO_HP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"DANCHE_BUNRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"SAHOE_BONGSA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_SAWON_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGINWON\" type=\"STRING\" size=\"256\"/><Column id=\"HWALDONG_MOKJEOK\" type=\"STRING\" size=\"4000\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SANGSIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"SEUNGIN_SANGTAE\" type=\"STRING\" size=\"10\"/><Column id=\"SEUNGIN_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGIN_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPMU_GYEOLJAE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"SEOYAKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"MYEONGDAN_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIDOGYOSU_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYEHOEKSEO_JECHUL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SEOYAKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"MYEONGDAN_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"JIDOGYOSU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYEHOEKSEO_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"GYOYUK_GONGGAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAMGEUM_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"SEOYAKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONGDAN_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIDOGYOSU_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEHOEKSEO_FILE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("stc_09_00","0","51","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("신청단체목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","0",null,"41","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","7","8","70","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt","84","8","200","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","300","8","16","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongJongryoDt","334","8","200","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00","546","8","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtSearchDancheNm","636","8","257","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_04","923","8","74","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cboSearchCheoriSangtae","1007","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsSeunginSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"1010","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"133\"/><Column size=\"175\"/><Column size=\"162\"/><Column size=\"263\"/><Column size=\"185\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"처리상태\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"단체명\"/><Cell col=\"4\" text=\"대표학생 성명\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_SINCHEONG_NO\" editmaxlength=\"22\" cursor=\"pointer\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEUNGIN_SANGTAE_NM\" editmaxlength=\"10\" cursor=\"pointer\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" cursor=\"pointer\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"100\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DAEPYO_NM\" editmaxlength=\"10\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","123","49","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13",null,"76","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12",null,"76","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("단체코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheCd",null,"79","343","22","510",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14",null,"76","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("단체명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDancheNm",null,"79","343","22","7",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00",null,"104","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00",null,"104","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("단체구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00",null,"104","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("단체분류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheGb",null,"108","343","22","510",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDancheGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("ComboDancheBunryu",null,"107","343","22","7",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsDancheBunryuGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01",null,"132","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01",null,"132","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuCd",null,"135","202","22","651",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuNm",null,"135","198","22","420",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosuHakgwa",null,"135","202","22","210",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00",null,"160","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00",null,"160","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengCd",null,"163","202","22","651",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengNm",null,"163","198","22","420",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHakgwa",null,"163","202","22","210",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaepyoHaksaengHpNo",null,"163","198","22","7",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_00",null,"188","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_00",null,"188","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("부대표학생");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengCd",null,"191","202","22","651",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengNm",null,"191","198","22","420",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHakgwa",null,"191","202","22","210",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBuDaepyoHaksaengHpNo",null,"191","198","22","7",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_01_00_01",null,"216","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_01_00_01",null,"216","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("사회봉사 활동여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSahoebongsa",null,"219","40","22","810",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_tooltiptype("hover");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02",null,"244","1005","195","0",null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02",null,"244","150","195","855",null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("활동목적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldongMokjeok",null,"247","846","185","7",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03",null,"439","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03",null,"439","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("사용공간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSayongGonggan",null,"442","347","22","506",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_enableevent("false");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01",null,"439","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("설립일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_04",null,"467","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_04",null,"467","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("인원수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon1",null,"470","109","22","689",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"470","42","22","798",null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("1학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon2",null,"470","109","22","519",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00",null,"470","42","22","628",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("2학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon3",null,"470","109","22","354",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00",null,"470","42","22","463",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("3학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon4",null,"470","109","22","188",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00",null,"470","42","22","297",null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("4학년");
            this.addChild(obj.name, obj);

            obj = new Edit("edtChongInwon",null,"470","122","22","7",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00",null,"470","42","22","129",null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("총인원");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00",null,"495","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00",null,"495","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("서약서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSeoyakseo",null,"498","253","22","580",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00",null,"495","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("회원명단");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSeoyakseo",null,"498","40","22","813",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHoewon",null,"498","250","22","80",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHoewon",null,"498","40","22","310",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_03_00_00",null,"523","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_03_00_00",null,"523","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("활동계획");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHwaldong",null,"526","253","22","580",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_01_00_00",null,"523","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("지도교수소견");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkHwaldong",null,"526","40","22","813",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu",null,"526","250","22","80",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkJidogyosu",null,"526","40","22","310",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_tooltiptype("hover");
            obj.set_text("");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_05",null,"551","1005","28","0",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_05",null,"551","150","28","855",null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSincheongDt",null,"554","347","22","506",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_02_00",null,"551","150","28","353",null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCheoriSangtae",null,"554","343","22","7",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_02_00",null,"579","1005",null,"0","0",null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_02_00",null,"579","150",null,"855","0",null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBanryeoSayu",null,"584","846",null,"5","4",null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosu",null,"135","22","22","624",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDaepyoHaksaeng",null,"163","22","22","624",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBuDaepyoHaksaeng",null,"191","22","22","624",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSeolibDt",null,"442","343","22","7",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","75","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","535","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","627","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","720","0","100","9",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00","720","31","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","894","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","998","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","41","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeoyakseoFile",null,"498","70","22","507",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("파일받기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHoewonFile",null,"498","70","22","7",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("파일받기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnJidogyosuFile",null,"526","70","22","7",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("파일받기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnHwaldongFile",null,"526","70","22","507",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("파일받기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체신청내역 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","edtDancheCd","value","dsMaster","DANCHE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtDancheNm","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ComboDancheGb","value","dsMaster","DANCHE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","ComboDancheBunryu","value","dsMaster","DANCHE_BUNRYU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtJidogyosuCd","value","dsMaster","JIDOGYOSU_SAWON_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJidogyosuNm","value","dsMaster","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtJidogyosuHakgwa","value","dsMaster","JIDOGYOSU_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtDaepyoHaksaengCd","value","dsMaster","DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtDaepyoHaksaengNm","value","dsMaster","DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtDaepyoHaksaengHakgwa","value","dsMaster","DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtDaepyoHaksaengHpNo","value","dsMaster","DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtBuDaepyoHaksaengCd","value","dsMaster","BU_DAEPYO_HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtBuDaepyoHaksaengNm","value","dsMaster","BU_DAEPYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtBuDaepyoHaksaengHakgwa","value","dsMaster","BU_DAEPYO_HAKGWA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtBuDaepyoHaksaengHpNo","value","dsMaster","BU_DAEPYO_HP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","chkSahoebongsa","value","dsMaster","SAHOE_BONGSA_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtHwaldongMokjeok","value","dsMaster","HWALDONG_MOKJEOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtSayongGonggan","value","dsMaster","GYOYUK_GONGGAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","edtHaknyeon1","value","dsMaster","HOEWON_CNT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","edtHaknyeon2","value","dsMaster","HOEWON_CNT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edtHaknyeon3","value","dsMaster","HOEWON_CNT3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtHaknyeon4","value","dsMaster","HOEWON_CNT4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtChongInwon","value","dsMaster","CHONGINWON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtSeoyakseo","value","dsMaster","SEOYAKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","chkSeoyakseo","value","dsMaster","SEOYAKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtHoewon","value","dsMaster","MYEONGDAN_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","chkHoewon","value","dsMaster","MYEONGDAN_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","edtHwaldong","value","dsMaster","GYEHOEKSEO_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","chkHwaldong","value","dsMaster","GYEHOEKSEO_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","edtJidogyosu","value","dsMaster","JIDOGYOSU_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","chkJidogyosu","value","dsMaster","JIDOGYOSU_JECHUL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","edtSincheongDt","value","dsMaster","SINCHEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","edtCheoriSangtae","value","dsMaster","SEUNGIN_SANGTAE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtBanryeoSayu","value","dsMaster","BANRYEO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","calSeolibDt","value","dsMaster","SEOLIB_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_00.form.calSearchSincheongSijakDt","value","ds_input","SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.calSearchSincheongJongryoDt","value","ds_input","SINCHEONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.edtSearchDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.cboSearchCheoriSangtae","value","ds_input","SEUNGIN_SANGTAE");
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
        this.registerScript("UD01_2110102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110102_M.xfdl(단체신청내역 관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/01
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
            var strDs    = "dsDancheGbcd|dsDancheBunryuGbcd|dsSeunginSangtae";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80301|80302|00520";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

            var strFrDt = this.gfn_addMonth(this.gfn_getSvrDate(),-1);
        	var strToDt = this.gfn_getSvrDate();

            this.ds_input.setColumn(0,"SINCHEONG_SIJAK_DT"  ,strFrDt); //신청기간(Fr)
        	this.ds_input.setColumn(0,"SINCHEONG_JONGRYO_DT",strToDt); //신청기간(To)

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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
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
        		case "hoewon" :
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
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "tmp1" :        // 승인
                         this.fn_Seungin();
                    break;
                case "tmp2" :        // 반려
                         this.fn_Banryeo();
                    break;
        		case "tmp3" :        // 회원목록
                         this.fn_Hoewon();
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
        	if(this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_SIJAK_DT") > this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_JONGRYO_DT"))
        	{
        		this.gfn_alert("신청 종료일자는 신청 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
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
            var strUrl      = "/prj/UD/UD01/Retrieve_2110102_M.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
        	    06. 승인 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreSeungin = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Seungin = function()
        {
        	var nRow = this.dsMaster.rowposition;

        	if(!this.fn_PreSeungin())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("승인할 데이터를 선택해주세요.","승인정보","","warning");
                return false;
            }

        	// 승인상태가 승인일 경우
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "03")
        	{
        		this.gfn_alert("이미 승인한 항목입니다.","승인정보","","warning");
                return false;
        	}

        	// 승인상태가 반려일 경우
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "04")
        	{
        		this.gfn_alert("이미 반려한 항목은 승인할 수 없습니다.","승인정보","","warning");
                return false;
        	}

        	// 반려사유 내용이 존재할 경우
        	if(this.dsMaster.getColumn(nRow, "BANRYEO_SAYU") != null)
        	{
        		this.gfn_alert("반려사유가 존재하는 항목은 승인할 수 없습니다.","승인정보","","warning");
        		this.dsMaster.setColumn(nRow, "BANRYEO_SAYU", null);
                return false;
        	}

        	if( this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "02")
        	{
        		var result = this.gfn_confirm( "현재 선택행을 승인하시겠습니까?", "신청정보","","question" );
        		if(result == 0)
        		{
        			return false;
        		}
        		this.dsMaster.setColumn(nRow, "SEUNGIN_SANGTAE", "03");
        	}

        	this.strKeyValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO");

        	// 승인할 경우 해당 단체를 단체목록에 저장함
            var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110102_M.do";
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
        	    07. 반려 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreBanryeo = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_Banryeo = function()
        {
        	var nRow = this.dsMaster.rowposition;

        	if(!this.fn_PreBanryeo())
        	{
        		return false;
        	}

        	// 선택한 데이터가 없을 경우
        	if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("반려할 데이터를 선택해주세요.","반려정보","","warning");
                return false;
            }

        	// 승인상태가 반려일 경우
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "04")
        	{
        		this.gfn_alert("이미 반려한 항목입니다.","반려정보","","warning");
                return false;
        	}

        	// 승인상태가 승인일 경우
        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "03")
        	{
        		this.gfn_alert("이미 승인한 항목은 반려할 수 없습니다.","승인정보","","warning");
                return false;
        	}

        	// 반려사유가 없을 경우
        	if(this.dsMaster.getColumn(nRow, "BANRYEO_SAYU") == null)
        	{
        		this.gfn_alert("반려사유가 존재하지 않는 항목은 반려할 수 없습니다.","승인정보","","warning");
        		this.edtBanryeoSayu.setFocus();
        		return false;
        	}

        	if(this.dsMaster.getColumn(nRow, "SEUNGIN_SANGTAE") == "02")
        	{
        		var result = this.gfn_confirm( "현재 선택행을 반려하시겠습니까?", "반려정보","","question" );
        		if(result == 0)
        		{
        			return false;
        		}

        		this.dsMaster.setColumn(nRow, "SEUNGIN_SANGTAE", "04");
        	}

        	this.strKeyValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO");

            var strSvc      = "Save";
            var strUrl      = "/prj/UD/UD01/Save_2110102_M.do";
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
        trace("this.strKeyValue="+this.strKeyValue);
        		var nRow = this.dsMaster.findRow("DANCHE_SINCHEONG_NO", this.strKeyValue);
        		this.dsMaster.set_rowposition(nRow);
        		this.strKeyValue = "";
        	}
        }

        /**********************************************************************
                08. ExcelDnwn 엑셀로 출력
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
            this.gfn_excelExport(this.grdMaster, "신청 단체 목록","신청 단체 목록");

        };

        /**********************************************************************
                09. 기타 Control Event
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
        this.div_00_calSearchSincheongSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_SIJAK_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_calSearchSincheongJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_JONGRYO_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchCheoriSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEUNGIN_SANGTAE",obj.value);
        		this.fn_Ret();
        	}
        };

        /**********************************************************************
                10. 팝업
        ***********************************************************************/
        // 회원목록 팝업
        this.fn_Hoewon = function()
        {
        	var dancheNm = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_NM");
        	var dancheSincheongNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_SINCHEONG_NO");

        	var oArg = {dancheNm:dancheNm,dancheSincheongNo:dancheSincheongNo};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "hoewon","UD01::UD01_2110102_P01.xfdl",oArg,sPopupCallBack,oOption);
        }

        this.btnSeoyakseoFile_onclick = function(obj,e)
        {
        	var strAttFileNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEOYAKSEO_FILE_NO");
        	this.fn_setCallAttFilePopup(obj.name, strAttFileNo);
        };


        this.btnHoewonFile_onclick = function(obj,e)
        {
        	var strAttFileNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "MYEONGDAN_FILE_NO");
        	this.fn_setCallAttFilePopup(obj.name, strAttFileNo);
        };

        this.btnHwaldongFile_onclick = function(obj,e)
        {
        	var strAttFileNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEHOEKSEO_FILE_NO");
        	this.fn_setCallAttFilePopup(obj.name, strAttFileNo);
        };

        this.btnJidogyosuFile_onclick = function(obj,e)
        {
        	var strAttFileNo = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIDOGYOSU_FILE_NO");
        	this.fn_setCallAttFilePopup(obj.name, strAttFileNo);
        };

        this.fn_setCallAttFilePopup = function(strObj, strAttFileNo)
        {
        	if (!this.gfn_isNull(strAttFileNo))
        	{

        		var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        		this.ds_input.setColumn(this.ds_input.rowposition, "ATTFL_NO", strAttFileNo);

        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= strAttFileNo;				// 부모에서 넘어가는 파라미터(첨부파일번호)
        		var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        		var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        		var lv_sValue05 		= "univ_UY";				// 부모에서 넘어가는 파라미터(도메인네임)
        		var lv_sValue06 		= "N";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        		var sPopId 			= "POP101FileUploadP01";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div_00.form.calSearchSincheongSijakDt.addEventHandler("onkeydown",this.div_00_calSearchSincheongSijakDt_onkeydown,this);
            this.div_00.form.calSearchSincheongJongryoDt.addEventHandler("onkeydown",this.div_00_calSearchSincheongJongryoDt_onkeydown,this);
            this.div_00.form.edtSearchDancheNm.addEventHandler("onkeydown",this.edtSearchDancheNm_onkeydown,this);
            this.div_00.form.cboSearchCheoriSangtae.addEventHandler("onkeydown",this.div_00_cboSearchCheoriSangtae_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.calSeolibDt.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.btnSeoyakseoFile.addEventHandler("onclick",this.btnSeoyakseoFile_onclick,this);
            this.btnHoewonFile.addEventHandler("onclick",this.btnHoewonFile_onclick,this);
            this.btnJidogyosuFile.addEventHandler("onclick",this.btnJidogyosuFile_onclick,this);
            this.btnHwaldongFile.addEventHandler("onclick",this.btnHwaldongFile_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("UD01_2110102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
