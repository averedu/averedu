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
            this.set_titletext("학적변동관리");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAEHAK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DELY_YORN\" type=\"STRING\" size=\"1\"/><Column id=\"LEND_YORN\" type=\"STRING\" size=\"1\"/><Column id=\"LEND_NUMB\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakbeon", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_SANGTAE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"DATE\" size=\"8\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"10\"/><Column id=\"YYYY_HAKGI\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"C_IPHAKGEUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C_HAKSAENG_HOEBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C_SUHYE_GYEONGBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C_AELBEOMBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"N_IPHAKGEUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"N_SUEOPRYO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"N_HAKSAENG_HOEBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"N_SUHYE_GYEONGBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"N_AELBEOMBI\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAPBU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JANGHAKGEUM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SIL_NAPBUGEUM\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondong", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SANGSE_REF_1\" type=\"STRING\" size=\"65532\"/><Column id=\"SANGSE_REF_3\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSESAYU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSESAYU_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SANGSE_SAYU_REF_1\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"JEOPSU_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"HYUHAK_GIGAN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKNYEON_JINGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BYEONDONG_JEOKYONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BYEONDONG_JEOKYONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BYEONDONG_JEOKYONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"GYOSU_SEUNGIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_HAKGWA_GYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_SANGDAM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"JINHAENG_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"ORG_JINHAENG_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"SEUNGINJA_ID\" type=\"STRING\" size=\"30\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEUNGIN_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"IPDAE_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SEONGJEOK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_INJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_YEJEONG_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YEJEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_YEJEONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHOEJONG_DEUNGROK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_DEUNGROK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BOKHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BOKHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"JAEHYUHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BEF_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BEF_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BEF_BUNBAN\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_GYEYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"AFT_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"AFT_JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"AFT_BUNBAN\" type=\"STRING\" size=\"1\"/><Column id=\"JEONJEOK_DAEHAK_CD\" type=\"STRING\" size=\"4\"/><Column id=\"JEONJEOK_DAEHAK_NM\" type=\"STRING\" size=\"300\"/><Column id=\"JEONJEOK_HAKGWA_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JEONJEOK_JEONGONG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHWISO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHWISO_DT\" type=\"STRING\" size=\"8\"/><Column id=\"CHWISO_SAYU\" type=\"STRING\" size=\"300\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondongSangse", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondongSangseSayu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGijun", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HYUHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HYUHAK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BOKHAK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"BOKHAK_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBefGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBefHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBefJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAftGyeyeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAftHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAftJeongong", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsByeondongSeq", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakjeokGibon", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","68","77","1572","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","68","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","220","80","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03","841","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","376","80","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","533","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","68","105","1572","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","68","105","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyeyeol","220","108","311","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","68","133","1572","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","68","133","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("학년/분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","841","133","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("변동사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakgwa","685","108","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","533","133","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeokSangtae","685","136","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab","0","541",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("입학·졸업");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("15");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("17");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("19");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("20");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("21");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("22");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","472","66","465","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("24");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("25");
            obj.set_text("입학·졸업");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("29");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("30");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("31");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("32");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("4");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("7");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","122","465","22",null,null,null,null,null,null,this.Tab.TabPage1.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage1.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("휴학");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("25");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("27");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("29");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("30");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("31");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","630","63","154","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("32");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","786","66","463","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("34");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("35");
            obj.set_text("휴학");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("39");
            obj.set_text("성적인정여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("40");
            obj.set_text("등록인정여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("8");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("11");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","320","35","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("41");
            obj.set_text("휴학구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Radio("rdoHyuhak","472","38","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var Tab_TabPage2_form_rdoHyuhak_innerdataset = new nexacro.NormalDataset("Tab_TabPage2_form_rdoHyuhak_innerdataset", obj);
            Tab_TabPage2_form_rdoHyuhak_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일반휴학</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">군휴학</Col></Row></Rows>");
            obj.set_innerdataset(Tab_TabPage2_form_rdoHyuhak_innerdataset);
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00","630","35","154","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("42");
            obj.set_text("입대예정일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("43");
            obj.set_text("학적변동상세사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangseSayu","472","66","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsByeondongSangseSayu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calIpdaeYejeongDt","786","38","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("2");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00_00","939","35","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("44");
            obj.set_text("전역예정일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calJeonyeokYejeongDt","1092","38","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","147","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","10","147","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("46");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01","630","147","154","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("47");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","320","147","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("48");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00_00","939","147","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("49");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","150","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","150","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","150","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","150","465","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Radio("rdoSeongjeokInjeong","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var Tab_TabPage2_form_rdoSeongjeokInjeong_innerdataset = new nexacro.NormalDataset("Tab_TabPage2_form_rdoSeongjeokInjeong_innerdataset", obj);
            Tab_TabPage2_form_rdoSeongjeokInjeong_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Tab_TabPage2_form_rdoSeongjeokInjeong_innerdataset);
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Radio("rdoDeungrokInjeong","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("false");
            var Tab_TabPage2_form_rdoDeungrokInjeong_innerdataset = new nexacro.NormalDataset("Tab_TabPage2_form_rdoDeungrokInjeong_innerdataset", obj);
            Tab_TabPage2_form_rdoDeungrokInjeong_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(Tab_TabPage2_form_rdoDeungrokInjeong_innerdataset);
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_01","10","175","1620","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","10","175","150","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("51");
            obj.set_text("복학예정년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Spin("spnBokhakYYYY","162","178","156","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("20");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboBokhakHakgi","320","178","154","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("21");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Combo("cboBokhakHaknyeon","476","178","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01_00","630","175","154","28",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("52");
            obj.set_text("복학예정일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Calendar("calBokhakYejeongDt","786","178","151","22",null,null,null,null,null,null,this.Tab.TabPage2.form);
            obj.set_taborder("23");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage2.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("복학");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("17");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("19");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("21");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("22");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("23");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","630","63","154","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("24");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","786","66","463","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("26");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("27");
            obj.set_text("복학");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("31");
            obj.set_text("학년진급여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("5");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("8");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("32");
            obj.set_text("학적변동상세사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangseSayu","472","66","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsByeondongSangseSayu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","147","1620","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","10","147","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("34");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01","630","147","154","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("35");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","320","147","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("36");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00_00","939","147","150","28",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("37");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","150","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","150","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","150","151","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","150","465","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Combo("cboJingeupYeobu","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage3.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_5");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage3.addChild(obj.name, obj);

            obj = new Tabpage("TabPage4",this.Tab);
            obj.set_text("제적");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("16");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("18");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("20");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("21");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("22");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","630","63","154","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("23");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","786","66","463","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("25");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("26");
            obj.set_text("제적");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("5");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("8");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("29");
            obj.set_text("학적변동상세사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangseSayu","472","66","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsByeondongSangseSayu");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("31");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("32");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("33");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("34");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","122","465","22",null,null,null,null,null,null,this.Tab.TabPage4.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage4.addChild(obj.name, obj);

            obj = new Tabpage("TabPage5",this.Tab);
            obj.set_text("전과");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("25");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("27");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("29");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("30");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("31");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("32");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","472","66","463","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("33");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("34");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("35");
            obj.set_text("전과");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("36");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("37");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("39");
            obj.set_text("전과 \"전\" 계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("40");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("4");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("7");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","175","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","10","175","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("42");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01","630","175","154","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("43");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","320","175","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("44");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00_00","939","175","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("45");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","178","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","178","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","178","151","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("22");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","178","465","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboBefGyeyeol","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsBefGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboBefHakgwa","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsBefHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("46");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboBefJeongong","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsBefJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("47");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboBefJuya","1091","122","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00_00","1249","119","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("48");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboBefBunban","1401","122","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","147","1620","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01","10","147","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("50");
            obj.set_text("전과 \"후\" 계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_02","320","147","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("51");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboAftGyeyeol","162","150","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsAftGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboAftHakgwa","472","150","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsAftHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_01","630","147","154","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("52");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboAftJeongong","786","150","151","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsAftJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00_01","939","147","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("53");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboAftJuya","1091","150","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00_00_00","1249","147","150","28",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("54");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Combo("cboAftBunban","1401","150","156","22",null,null,null,null,null,null,this.Tab.TabPage5.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage5.addChild(obj.name, obj);

            obj = new Tabpage("TabPage6",this.Tab);
            obj.set_text("재입학");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("23");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("25");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("27");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("28");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("29");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("30");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","472","66","463","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("32");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("33");
            obj.set_text("재입학");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("34");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("37");
            obj.set_text("전과 \"전\" 계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("38");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("4");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("7");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","175","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_00","10","175","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("40");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_01","630","175","154","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("41");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","320","175","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("42");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00_00","939","175","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("43");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","178","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("18");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","178","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","178","151","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","178","465","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboBefGyeyeol","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsBefGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboBefHakgwa","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsBefHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("44");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboBefJeongong","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsBefJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("45");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboBefJuya","1091","122","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","147","1620","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00_01","10","147","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("47");
            obj.set_text("전과 \"후\" 계열");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_02","320","147","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("48");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboAftGyeyeol","162","150","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsAftGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboAftHakgwa","472","150","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsAftHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_01","630","147","154","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("49");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboAftJeongong","786","150","151","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsAftJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00_01","939","147","150","28",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("50");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Combo("cboAftJuya","1091","150","156","22",null,null,null,null,null,null,this.Tab.TabPage6.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage6.addChild(obj.name, obj);

            obj = new Tabpage("TabPage7",this.Tab);
            obj.set_text("유급");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("1");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("3");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("5");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("6");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("7");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("8");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","472","66","465","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("11");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("12");
            obj.set_text("유급");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("19");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("20");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("21");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("22");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("24");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("25");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("26");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("28");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("29");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("30");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("31");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","122","465","22",null,null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Button("btnSeongjeok",null,"38","70","22","1250",null,null,null,null,null,this.Tab.TabPage7.form);
            obj.set_taborder("33");
            obj.set_text("성적처리");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.Tab.TabPage7.addChild(obj.name, obj);

            obj = new Tabpage("TabPage8",this.Tab);
            obj.set_text("기타");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","35","1620","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","35","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("16");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","63","1620","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","63","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("18");
            obj.set_text("학적변동상세");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","91","1620","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","91","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("20");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","939","91","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("21");
            obj.set_text("학사년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","320","91","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("22");
            obj.set_text("적용년도학기학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","320","63","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("23");
            obj.set_text("학적변동상세내용");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSangse","472","66","465","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","217",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("25");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("26");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_Title02");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","320","8",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("27");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuDt","162","38","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"9","10","217","0",null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","162","94","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboByeondongSangse","162","66","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsByeondongSangse");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","119","1620","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","10","119","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("29");
            obj.set_text("결재여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01","630","119","154","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("30");
            obj.set_text("취소일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","320","119","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("31");
            obj.set_text("결재일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00","939","119","150","28",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("32");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboGyeoljaeYeobu","162","122","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsYN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("REF_2");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Spin("spnJeokyongYYYY","472","94","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("4");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHakgi","630","94","154","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboJeokyongHaknyeon","786","94","151","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Calendar("calGyeoljaeDt","472","122","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("11");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Calendar("calChwisoDt","786","122","151","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Spin("spnHaksaYYYY","1092","94","156","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("7");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakgi","1250","94","154","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHaknyeon","1406","94","151","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new Edit("edtChwisoSayu","1092","122","465","22",null,null,null,null,null,null,this.Tab.TabPage8.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.Tab.TabPage8.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","0","77","62","83",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGender","994","80","84","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var rdoGender_innerdataset = new nexacro.NormalDataset("rdoGender_innerdataset", obj);
            rdoGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(rdoGender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("rdoJuya","1370","108","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var rdoJuya_innerdataset = new nexacro.NormalDataset("rdoJuya_innerdataset", obj);
            rdoJuya_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">주간</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">야간</Col></Row></Rows>");
            obj.set_innerdataset(rdoJuya_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static01","220","160","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","-38","69","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","171","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("등록 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1","87","170","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDeungrok","0","195",null,"143","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDeungrok");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"학년도학기\"/><Cell col=\"2\" rowspan=\"2\" text=\"등록일자\"/><Cell col=\"3\" colspan=\"5\" text=\"책정등록금\"/><Cell col=\"8\" colspan=\"5\" text=\"납부등록금\"/><Cell col=\"13\" rowspan=\"2\" text=\"장학금\"/><Cell col=\"14\" rowspan=\"2\" text=\"실납부금\"/><Cell row=\"1\" col=\"3\" text=\"입학금\"/><Cell row=\"1\" col=\"4\" text=\"수업료\"/><Cell row=\"1\" col=\"5\" text=\"학생회비\"/><Cell row=\"1\" col=\"6\" text=\"수혜경비\"/><Cell row=\"1\" col=\"7\" text=\"졸업앨범비\"/><Cell row=\"1\" col=\"8\" text=\"입학금\"/><Cell row=\"1\" col=\"9\" text=\"수업료\"/><Cell row=\"1\" col=\"10\" text=\"학생회비\"/><Cell row=\"1\" col=\"11\" text=\"수혜경비\"/><Cell row=\"1\" col=\"12\" text=\"졸업앨범비\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:YYYY_HAKGI\"/><Cell col=\"2\" text=\"bind:NAPBU_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:C_IPHAKGEUM\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:C_SUEOPRYO\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:C_HAKSAENG_HOEBI\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:C_SUHYE_GYEONGBI\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:C_AELBEOMBI\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" displaytype=\"number\" text=\"bind:N_IPHAKGEUM\" textAlign=\"right\"/><Cell col=\"9\" displaytype=\"number\" text=\"bind:N_SUEOPRYO\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"number\" text=\"bind:N_HAKSAENG_HOEBI\" textAlign=\"right\"/><Cell col=\"11\" displaytype=\"number\" text=\"bind:N_SUHYE_GYEONGBI\" textAlign=\"right\"/><Cell col=\"12\" displaytype=\"number\" text=\"bind:C_AELBEOMBI\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:JANGHAKGEUM\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:SIL_NAPBUGEUM\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","52",null,"22","1488",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","1500","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","1500","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","393","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","81","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","221","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","500","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","91","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_usecontextmenu("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchHakbeon","231","9","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchNm","263","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","-1","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","253","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","417","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchBirthday","510","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("mskBirthday","685","80","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00","1073","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("연체정보");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkYeonche","1228","81","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00_00","1248","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("대출유무");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDaechul","1403","81","21","20",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00_00_00","1423","77","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("대출권수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDaechul","1575","80","63","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","533","105","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_01","841","105","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJeongong","993","108","221","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00_00_01","1217","105","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon","220","136","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBunban","376","136","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSayu","993","136","221","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00","1217","133","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskByeondongDt","1369","136","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","220","338","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","187","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00","0","365","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_01","0","349","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("변동 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","87","348","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdByeondong","0","373",null,"123","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsByeondong");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"변동일자\"/><Cell col=\"2\" text=\"변동상세\"/><Cell col=\"3\" text=\"변동상세사유\"/><Cell col=\"4\" text=\"변동상세내용\"/><Cell col=\"5\" text=\"성적인정\"/><Cell col=\"6\" text=\"등록인정\"/><Cell col=\"7\" text=\"복학예정일\"/><Cell col=\"8\" text=\"결재여부\"/><Cell col=\"9\" text=\"처리일자\"/><Cell col=\"10\" text=\"취소여부\"/><Cell col=\"11\" text=\"취소일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:BYEONDONG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:BYEONDONG_SANGSE_NM\"/><Cell col=\"3\" text=\"bind:BYEONDONG_SANGSESAYU_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:BYEONDONG_SANGSE_NAEYONG\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SEONGJEOK_INJEONG_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"6\" text=\"bind:DEUNGROK_INJEONG_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"7\" text=\"bind:BOKHAK_YEJEONG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"8\" text=\"bind:JINHAENG_STCD\" combodataset=\"ds_gyeoljaeYn\" combocodecol=\"CD\" combodatacol=\"GRP1\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:SEUNGIN_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" text=\"bind:CHWISO_YN\"/><Cell col=\"11\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" text=\"bind:CHWISO_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","220","496","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","0","533",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_00",null,"517","50","20","534",null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("학적변동");
            this.addChild(obj.name, obj);

            obj = new Combo("cboByeondong",null,"511","140","22","386",null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboByeondong_innerdataset = new nexacro.NormalDataset("cboByeondong_innerdataset", obj);
            cboByeondong_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"datacolumn\">휴학</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"datacolumn\">복학</Col><Col id=\"codecolumn\">03</Col></Row><Row><Col id=\"datacolumn\">제적</Col><Col id=\"codecolumn\">04</Col></Row><Row><Col id=\"datacolumn\">전과</Col><Col id=\"codecolumn\">05</Col></Row><Row><Col id=\"datacolumn\">재입학</Col><Col id=\"codecolumn\">01</Col></Row><Row><Col id=\"datacolumn\">유급</Col><Col id=\"codecolumn\">06</Col></Row><Row><Col id=\"datacolumn\">기타</Col><Col id=\"codecolumn\">99</Col></Row></Rows>");
            obj.set_innerdataset(cboByeondong_innerdataset);
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnByeondong",null,"508","120","25","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("학적변동정보 수정");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"508","60","25","190",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet",null,"508","60","25","255",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"508","60","25","320",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"508","60","25","125",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학적변동관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtGyeyeol","value","dsMaster","DAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtHakjeokSangtae","value","dsMaster","HAKJEOK_STNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","rdoGender","value","dsMaster","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","rdoJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSearch.form.btnSearchHakbeon","enable","dsBindable","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSearch.form.edtSearchNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","mskBirthday","value","dsMaster","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","chkYeonche","value","dsMaster","DELY_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","chkDaechul","value","dsMaster","LEND_YORN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtBunban","value","dsMaster","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","mskByeondongDt","value","dsMaster","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtDaechul","value","dsMaster","LEND_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtHakgwa","value","dsMaster","HAKGWA_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtJeongong","value","dsMaster","JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtByeondongSayu","value","dsMaster","BYEONDONG_SANGSE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","Tab.TabPage1.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","Tab.TabPage1.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","Tab.TabPage1.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","Tab.TabPage1.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","Tab.TabPage1.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Tab.TabPage1.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","Tab.TabPage1.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","Tab.TabPage1.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","Tab.TabPage1.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","Tab.TabPage1.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","Tab.TabPage1.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","Tab.TabPage1.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","Tab.TabPage1.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","Tab.TabPage1.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","Tab.TabPage2.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","Tab.TabPage2.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","Tab.TabPage2.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","Tab.TabPage2.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","Tab.TabPage2.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","Tab.TabPage2.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","Tab.TabPage2.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","Tab.TabPage2.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","Tab.TabPage2.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","Tab.TabPage2.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","Tab.TabPage2.form.rdoHyuhak","value","dsByeondong","SANGSE_REF_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","Tab.TabPage2.form.cboByeondongSangseSayu","value","dsByeondong","BYEONDONG_SANGSESAYU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","Tab.TabPage2.form.rdoSeongjeokInjeong","value","dsByeondong","SEONGJEOK_INJEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","Tab.TabPage2.form.rdoDeungrokInjeong","value","dsByeondong","DEUNGROK_INJEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","Tab.TabPage2.form.spnBokhakYYYY","value","dsByeondong","BOKHAK_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","Tab.TabPage2.form.cboBokhakHakgi","value","dsByeondong","BOKHAK_YEJEONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","Tab.TabPage2.form.cboBokhakHaknyeon","value","dsByeondong","BOKHAK_YEJEONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","Tab.TabPage2.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","Tab.TabPage2.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","Tab.TabPage2.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","Tab.TabPage2.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","Tab.TabPage2.form.calBokhakYejeongDt","value","dsByeondong","BOKHAK_YEJEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","Tab.TabPage3.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","Tab.TabPage3.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","Tab.TabPage3.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","Tab.TabPage3.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","Tab.TabPage3.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","Tab.TabPage3.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","Tab.TabPage3.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","Tab.TabPage3.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","Tab.TabPage3.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","Tab.TabPage3.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","Tab.TabPage3.form.cboByeondongSangseSayu","value","dsByeondong","BYEONDONG_SANGSESAYU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","Tab.TabPage3.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","Tab.TabPage3.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","Tab.TabPage3.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","Tab.TabPage3.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","Tab.TabPage3.form.cboJingeupYeobu","value","dsByeondong","HAKNYEON_JINGEUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","Tab.TabPage4.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","Tab.TabPage4.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","Tab.TabPage4.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","Tab.TabPage4.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","Tab.TabPage4.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","Tab.TabPage4.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","Tab.TabPage4.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","Tab.TabPage4.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","Tab.TabPage4.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","Tab.TabPage4.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item82","Tab.TabPage4.form.cboByeondongSangseSayu","value","dsByeondong","BYEONDONG_SANGSESAYU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item83","Tab.TabPage4.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item84","Tab.TabPage4.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item85","Tab.TabPage4.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item86","Tab.TabPage4.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item87","Tab.TabPage5.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item88","Tab.TabPage5.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item89","Tab.TabPage5.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item90","Tab.TabPage5.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item91","Tab.TabPage5.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item92","Tab.TabPage5.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","Tab.TabPage5.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","Tab.TabPage5.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","Tab.TabPage5.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","Tab.TabPage5.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","Tab.TabPage5.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","Tab.TabPage5.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","Tab.TabPage5.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","Tab.TabPage5.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","Tab.TabPage5.form.cboBefGyeyeol","value","dsByeondong","BEF_GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","Tab.TabPage5.form.cboBefHakgwa","value","dsByeondong","BEF_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item103","Tab.TabPage5.form.cboBefJeongong","value","dsByeondong","BEF_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item104","Tab.TabPage5.form.cboBefJuya","value","dsByeondong","BEF_JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item105","Tab.TabPage5.form.cboBefBunban","value","dsByeondong","BEF_BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item106","Tab.TabPage5.form.cboAftGyeyeol","value","dsByeondong","AFT_GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item107","Tab.TabPage5.form.cboAftHakgwa","value","dsByeondong","AFT_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item108","Tab.TabPage5.form.cboAftJeongong","value","dsByeondong","AFT_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item109","Tab.TabPage5.form.cboAftJuya","value","dsByeondong","AFT_JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item110","Tab.TabPage5.form.cboAftBunban","value","dsByeondong","AFT_BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item111","Tab.TabPage6.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item112","Tab.TabPage6.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item113","Tab.TabPage6.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item114","Tab.TabPage6.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item115","Tab.TabPage6.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item116","Tab.TabPage6.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item117","Tab.TabPage6.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item118","Tab.TabPage6.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item119","Tab.TabPage6.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item120","Tab.TabPage6.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item121","Tab.TabPage6.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item122","Tab.TabPage6.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item123","Tab.TabPage6.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item124","Tab.TabPage6.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item125","Tab.TabPage6.form.cboBefGyeyeol","value","dsByeondong","BEF_GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item126","Tab.TabPage6.form.cboBefHakgwa","value","dsByeondong","BEF_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item127","Tab.TabPage6.form.cboBefJeongong","value","dsByeondong","BEF_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item128","Tab.TabPage6.form.cboBefJuya","value","dsByeondong","BEF_JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item130","Tab.TabPage6.form.cboAftGyeyeol","value","dsByeondong","AFT_GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item131","Tab.TabPage6.form.cboAftHakgwa","value","dsByeondong","AFT_HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item132","Tab.TabPage6.form.cboAftJeongong","value","dsByeondong","AFT_JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item133","Tab.TabPage6.form.cboAftJuya","value","dsByeondong","AFT_JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item129","Tab.TabPage7.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item134","Tab.TabPage7.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item135","Tab.TabPage7.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item136","Tab.TabPage7.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item137","Tab.TabPage7.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item138","Tab.TabPage7.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item139","Tab.TabPage7.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item140","Tab.TabPage7.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item141","Tab.TabPage7.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item142","Tab.TabPage7.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item143","Tab.TabPage7.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item144","Tab.TabPage7.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item145","Tab.TabPage7.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item146","Tab.TabPage7.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item147","Tab.TabPage8.form.edtByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item148","Tab.TabPage8.form.calJeopsuDt","value","dsByeondong","JEOPSU_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item149","Tab.TabPage8.form.calByeondongDt","value","dsByeondong","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item150","Tab.TabPage8.form.cboByeondongSangse","value","dsByeondong","BYEONDONG_SANGSE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item151","Tab.TabPage8.form.cboGyeoljaeYeobu","value","dsByeondong","JINHAENG_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item152","Tab.TabPage8.form.spnJeokyongYYYY","value","dsByeondong","BYEONDONG_JEOKYONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item153","Tab.TabPage8.form.cboJeokyongHakgi","value","dsByeondong","BYEONDONG_JEOKYONG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item154","Tab.TabPage8.form.cboJeokyongHaknyeon","value","dsByeondong","BYEONDONG_JEOKYONG_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item155","Tab.TabPage8.form.calGyeoljaeDt","value","dsByeondong","SEUNGIN_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item156","Tab.TabPage8.form.calChwisoDt","value","dsByeondong","CHWISO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item157","Tab.TabPage8.form.spnHaksaYYYY","value","dsByeondong","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item158","Tab.TabPage8.form.cboHaksaHakgi","value","dsByeondong","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item159","Tab.TabPage8.form.cboHaksaHaknyeon","value","dsByeondong","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item160","Tab.TabPage8.form.edtChwisoSayu","value","dsByeondong","CHWISO_SAYU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSearch.form.calSearchBirthday","value","ds_input","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDeungrok");
            this._addPreloadList("data","","dsByeondong");
            this._addPreloadList("data","","dsGijun");
            this._addPreloadList("data","","dsByeondongSeq");
            this._addPreloadList("data","","dsHakjeokGibon");
        };
        
        // User Script
        this.registerScript("US02_2010203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US02_2010203_M.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/13
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
        this.lvchkColidDs   = "BYEONDONG_SANGSE_CD";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학적변동상세";
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
            var strDs    = "dsByeondongSangse|dsByeondongSangseSayu|dsYN|dsHakgi|dsHaknyeon|dsJuya|dsBunban";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00023|00076|00051|00022|00060|00003|00050";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	strDs       = "dsBefGyeyeol";
        	strComb     = "S";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.Tab.TabPage5.form.cboBefGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsBefHakgwa";
        	strComb     = "S";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_HakgwaComboLoad(this.Tab.TabPage5.form.cboBefHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsBefJeongong";
        	strComb     = "S";
        	svcId       = "";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "all";
        	this.gfn_JeongongComboLoad(this.Tab.TabPage5.form.cboBefJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsAftGyeyeol";
        	strComb     = "S";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.Tab.TabPage5.form.cboAftGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
        };

        this.fn_PostInit = function()
        {
        	this.dsYN.setColumn(0, "REF_2", "선택");
        	this.dsYN.setColumn(0, "REF_5", "선택");
        }

        this.fn_PostGyeyeolInit = function()
        {
        	this.Tab.TabPage5.form.cboAftGyeyeol.set_index(0);

        	// 계열 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.Tab_TabPage5_cboAftGyeyeol_onitemchanged(this.Tab.TabPage5.form.cboAftGyeyeol, info);
        };


        this.fn_PostHakgwaInit = function()
        {
        	this.Tab.TabPage5.form.cboAftHakgwa.set_index(0);

        	// 학과 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.Tab_TabPage5_cboAftHakgwa_onitemchanged(this.Tab.TabPage5.form.cboAftHakgwa, info);
        };

        this.fn_PostJeongongInit = function()
        {
        	this.Tab.TabPage5.form.cboAftJeongong.set_index(0);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
            this.gfn_clearSortAll(this.grdDeungrok);
        	this.gfn_clearSortAll(this.grdByeondong);
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
                    case "Save":
                            this.fn_PostSave();
                        break;
        			case "SaveByeondong":
                            this.fn_PostSaveByeondong();
                        break;
                    case "New":
                            this.fn_PostNew();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    case "GetHakjeok":
                            this.fn_PostGetHakjeok();
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
        					this.ds_input.setColumn(0, "HAKBEON", sRtn[0]);
        					this.ds_input.setColumn(0, "HAKSAENG_NM", sRtn[1]);
        					this.ds_input.setColumn(0, "BIRTHDAY", sRtn[9]);
        					this.fn_Ret();
        				}
        			break;
        		default:
                    break;
        	}
        };
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
            var strUrl      = "/prj/US/US02/Retrieve_2010203_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster ";
        		strOutDs   += "dsDeungrok=dsDeungrok ";
        		strOutDs   += "dsByeondong=dsByeondong ";
        		strOutDs   += "dsByeondongSeq=dsByeondongSeq ";
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
        	this.cboByeondong.set_index(0);
            this.gfn_getRowCount(this.staRowCnt1,this.dsDeungrok);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsByeondong);
        };

        /**********************************************************************
                06. 변동내역 조회 함수 선언(변동내역 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.btnRet_onclick = function(obj,e)
        {
        	this.fn_ByeondongRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_ByeondongRet = function()
        {
            var strSvc      = "ByeondongRet";
            var strUrl      = "/prj/US/US02/Retrieve_2010203_M_Byeondong.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsByeondong=dsByeondong ";
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
        this.fn_PostByeondongRet = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsByeondong);
        };

        /**********************************************************************
                07. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.btnNew_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("학생을 선택하세요.");
        		return false;
        	}

        	var nCnt1 = this.dsByeondong.getCaseCount("dataset.getRowType(currow)==2");
        	var nCnt2 = this.dsByeondong.getCaseCount("dataset.getRowType(currow)==4");

        	if(nCnt2 > 0)
        	{
        		this.alert("변경된 정보가 있습니다. 저장후 신규 입력하세요.");
        		return false;
        	}

        	if(this.gfn_isNull(this.cboByeondong.value))
        	{
        		this.alert("학적변동을 선택하세요.");
        		return false;
        	}

        	// 신규 후 또 신규를 눌렀을때
        	if(nCnt1 > 0)
        	{
        		this.alert("입력중인 정보가 있습니다. 저장 후 신규 입력하세요.");
        		return false;
        	}
        	else
        	{
        		this.fn_New();
        	}
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	var strSvc      = "New";
            var strUrl      = "/prj/US/US02/Retrieve_2010203_M_Gijun.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGijun=dsGijun ";
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
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {
        	// 최근학적변동에 따라
        	// 재학생 -> 복학, 재입학 안됨
        	if((this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10" && this.cboByeondong.value == "01") ||
        	   (this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10" && this.cboByeondong.value == "03"))
        	{
        		this.alert("현재 재학생입니다. " + this.cboByeondong.text + " 처리할 수 없습니다.");
        		return false;
        	}
        	// 휴학생 -> 재입학 안됨
        	if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "20" && this.cboByeondong.value == "01")
        	{
        		this.alert("현재 휴학생입니다. " + this.cboByeondong.text + " 처리할 수 없습니다.");
        		return false;
        	}
        	// 제적생은 재입학 처리만 가능
        	if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "30" && this.cboByeondong.value != "01")
        	{
        		this.alert("제적생은 재입학 처리만 가능합니다.");
        		return false;
        	}
        	// 수료생, 졸업생은 학적변동 처리 불가
        	if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "40" || this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "50")
        	{
        		this.alert("수료생, 졸업생은 학적변동처리를 할 수 없습니다.");
        		return false;
        	}

        	var currDt = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");
        	var nRow = this.dsByeondong.addRow();

        	this.dsByeondong.setColumn(nRow, "HAKBEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));
        	this.dsByeondong.setColumn(nRow, "SANGSE_REF_3", "1");
        	this.dsByeondong.setColumn(nRow, "JINHAENG_STCD", "0"); // 진행상태-미승인
        	this.dsByeondong.setColumn(nRow, "JEOPSU_DT", currDt);
        	this.dsByeondong.setColumn(nRow, "BYEONDONG_DT", currDt);
        	this.dsByeondong.setColumn(nRow, "SEUNGIN_DT", currDt);

        	// 현재 학사일정의 년도학기
        	this.dsByeondong.setColumn(nRow, "YYYY",            this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	this.dsByeondong.setColumn(nRow, "HAKGI",           this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	this.dsByeondong.setColumn(nRow, "HAKNYEON",        this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON"));
        	this.dsByeondong.setColumn(nRow, "HAKGWA_CD",       this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.dsByeondong.setColumn(nRow, "JEONGONG_CD",     this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"));
        	this.dsByeondong.setColumn(nRow, "JUYA_GBCD",       this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.dsByeondong.setColumn(nRow, "BEF_GYEYEOL_CD",  this.dsMaster.getColumn(this.dsMaster.rowposition, "DAEHAK_CD"));
        	this.dsByeondong.setColumn(nRow, "BEF_HAKGWA_CD",   this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.dsByeondong.setColumn(nRow, "BEF_JEONGONG_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD"));
        	this.dsByeondong.setColumn(nRow, "BEF_JUYA_GBCD",   this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        	this.dsByeondong.setColumn(nRow, "BEF_BUNBAN",      this.dsMaster.getColumn(this.dsMaster.rowposition, "BUNBAN"));

        	this.fn_ByeondongSangseFilter(this.Tab.tabindex);

        	// 휴학 - 적용년도학기는 기준일자의 휴학년도학기로 SET
        	if(this.cboByeondong.value == "02")
        	{
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_YYYY",  this.dsGijun.getColumn(0, "HYUHAK_YYYY"));
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_HAKGI", this.dsGijun.getColumn(0, "HYUHAK_HAKGI"));
        		this.dsByeondong.setColumn(nRow, "BOKHAK_YEJEONG_HAKNYEON",  this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON"));

        	}
        	// 복학 - 적용년도학기는 기준일자의 복학년도학기로 set
        	else if(this.cboByeondong.value == "03")
        	{
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_YYYY",     this.dsGijun.getColumn(0, "BOKHAK_YYYY"));
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_HAKGI",    this.dsGijun.getColumn(0, "BOKHAK_HAKGI"));

        		// 복학 처리인 경우 휴학 정보로 복학 정보 기본 set
        		if(this.dsGijun.getColumn(0, "BYEONDONG_SANGSE_CD") == "0201" || this.dsGijun.getColumn(0, "BYEONDONG_SANGSE_CD") == "0205")
        		{
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSE_CD","0301");
        			this.fn_ByeondongSangseSayuFilter("0301");
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSESAYU_CD", "030102");
        		}
        		else
        		{
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSE_CD", "0301");
        			this.fn_ByeondongSangseSayuFilter("0301");
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSESAYU_CD", "030101");
        		}
        	}
        	// 전과
        	else if(this.cboByeondong.value == "05")
        	{
        		// 재학은 교내전과
        		if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10")
        		{
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSE_CD", "0501")
        		}
        		// 휴학은 휴학중전과
        		else if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "20")
        		{
        			this.dsByeondong.setColumn(nRow, "BYEONDONG_SANGSE_CD", "0502")
        		}

        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_YYYY",     this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_HAKGI",    this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        	// 그외는 학사년도학기로 SET
        	else
        	{
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_YYYY",     this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_HAKGI",    this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        	this.dsByeondong.setColumn(nRow, "BYEONDONG_JEOKYONG_HAKNYEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON"));
        };

        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnDel_onclick = function(obj,e)
        {
            if(this.dsByeondong.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	// 신규데이터는 취소시 reset
        	if(this.dsByeondong.getRowType(this.dsByeondong.rowposition) == 2)
        	{
        		this.dsByeondong.reset();
        		this.cboByeondong.set_index(0);
        		return false;
        	}

        	// 최근학적변동만(max(학적변동순번)) 취소
        	if(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "BYEONDONG_SEQ") != this.dsByeondongSeq.getColumn(0, "BYEONDONG_SEQ"))
        	{
        		this.alert("최근 학적변동정보만 취소 가능합니다.");
        		return false;
        	}

        	var sTxt = "";
        	if(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "JINHAENG_STCD") == "1")
        	{
        		sTxt = "결재여부가 승인된 학적변동정보입니다.\n삭제하면 학적기본정보도 수정됩니다.\n"
        	}
        	else
        	{
        		sTxt = "결재여부가 미승인된 학적변동정보는 해당 학적변동정보만 삭제됩니다.\n"
        	}

            var result = this.gfn_confirm( sTxt + "삭제 하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            this.dsByeondong.deleteRow(this.dsByeondong.rowposition);
        	this.fn_Del();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            var strSvc      = "Del";
            var strUrl      = "/prj/US/US02/Delete_2010203_M.do";
            var strInDs     = "dsByeondong=dsByeondong:u";
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

        this.fn_PostDel = function()
        {
            this.fn_Ret();
        };

        /**********************************************************************
                09. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.btnSave_onclick = function(obj,e)
        {
            if(!this.gfn_isUpdate(this.dsByeondong))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsByeondong, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsByeondong.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

        	for(var i=0; i<this.dsByeondong.rowcount; i++)
        	{
        		if(this.dsByeondong.getRowType(i) == 2 || this.dsByeondong.getRowType(i) == 4)
        		{
        			// 휴학
        			if(this.Tab.tabindex == 1)
        			{
        				if(this.dsByeondong.getColumn(i, "BYEONDONG_SANGSE_CD") == "0203" && this.gfn_isNull(this.dsByeondong.getColumn(i, "BYEONDONG_SANGSESAYU_CD")))
        				{
        					this.alert("가사휴학인 경우 학적변동상세사유는 필수입력입니다.");
        					return false;
        				}

        				// 성적인정여부, 등록인정여부, 복학예정년도학기
        				if(this.gfn_isNull(this.dsByeondong.getColumn(i, "SEONGJEOK_INJEONG_YN")))
        				{
        					this.alert("성적인정여부는 필수입력입니다.");
        					return false;
        				}
        				else if(this.gfn_isNull(this.dsByeondong.getColumn(i, "DEUNGROK_INJEONG_YN")))
        				{
        					this.alert("등록인정여부는 필수입력입니다.");
        					return false;
        				}
        				else if(this.gfn_isNull(this.dsByeondong.getColumn(i, "BOKHAK_YEJEONG_YYYY")))
        				{
        					this.alert("복학예정년도는 필수입력입니다.");
        					return false;
        				}
        				else if(this.gfn_isNull(this.dsByeondong.getColumn(i, "BOKHAK_YEJEONG_HAKGI")))
        				{
        					this.alert("복학예정학기는 필수입력입니다.");
        					return false;
        				}

        				var jeokyong = this.dsByeondong.getColumn(i, "BYEONDONG_JEOKYONG_YYYY") + this.dsByeondong.getColumn(i, "BYEONDONG_JEOKYONG_HAKGI");
        				var yejeong  = this.dsByeondong.getColumn(i, "BOKHAK_YEJEONG_YYYY") + this.dsByeondong.getColumn(i, "BOKHAK_YEJEONG_HAKGI");

        				// 복학예정년도학기는 적용년도학기보다 이후
        				if(jeokyong >= yejeong)
        				{
        					this.alert("복학예정년도학기는 적용년도학기보다 이후 이어야 합니다.");
        					return false;
        				}
        			}
        			// 제적
        			else if(this.Tab.tabindex == 3)
        			{
        				if(this.dsByeondong.getColumn(i, "BYEONDONG_SANGSE_CD") == "0407" && this.gfn_isNull(this.dsByeondong.getColumn(i, "BYEONDONG_SANGSESAYU_CD")))
        				{
        					this.alert("자퇴인 경우 학적변동상세사유는 필수입력입니다.");
        					return false;
        				}
        			}
        			// 전과
        			else if(this.Tab.tabindex == 4)
        			{
        				if(this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_GYEYEOL_CD")) ||
        				   this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_HAKGWA_CD")) ||
        				   this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_JUYA_GBCD")) ||
        				   this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_BUNBAN")))
        				{
        					this.alert("전과인 경우 전과후 계열, 학과/학부, 주야구분, 분반은 필수입력입니다.");
        					return false;
        				}

        				// 재학생은 교내전과, 휴학생은 휴학중전과로 처리
        				if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10" && this.dsByeondong.getColumn(i, "BYEONDONG_SANGSE_CD") != "0501")
        				{
        					this.alert("재학생은 교내전과로 처리해야 합니다.");
        					return false;
        				}
        				else if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "20" && this.dsByeondong.getColumn(i, "BYEONDONG_SANGSE_CD") != "0502")
        				{
        					this.alert("휴학생은 휴학중전과로 처리해야 합니다.");
        					return false;
        				}
        			}
        			// 재입학
        			else if(this.Tab.tabindex == 5)
        			{
        				if(this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_GYEYEOL_CD")) ||
        				   this.gfn_isNull(this.dsByeondong.getColumn(i, "AFT_HAKGWA_CD")))
        				{
        					this.alert("재입학인 경우 전과후 계열, 학과/학부는 필수입력입니다.");
        					return false;
        				}
        			}
        		}
        	}

        	var nTxt = "";

        	if(this.Tab.tabindex == 0) nTxt = "변경";
        	else if(this.Tab.tabindex == 1) nTxt = "휴학";
        	else if(this.Tab.tabindex == 2) nTxt = "복학";
        	else if(this.Tab.tabindex == 3) nTxt = "제적";
        	else if(this.Tab.tabindex == 4) nTxt = "전과";
        	else if(this.Tab.tabindex == 5) nTxt = "재입학";
        	else if(this.Tab.tabindex == 6) nTxt = "유급";
        	else if(this.Tab.tabindex == 7) nTxt = "기타항목";

            var result = this.gfn_confirm( nTxt + " 처리 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            this.fn_Save(nTxt);
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function(nTxt)
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/US/US02/Save_2010203_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsByeondong=dsByeondong:u";
            var strOutDs    = "dsMaster=dsMaster ";
        		strOutDs   += "dsDeungrok=dsDeungrok ";
        		strOutDs   += "dsByeondong=dsByeondong ";
            var strArg      = "";
        		strArg     += "GUBUN=" + nTxt + " " + strArg;
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
            this.fn_Ret();
        };

        /**********************************************************************
                10. 학적변동정보 수정 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnByeondong_onclick = function(obj,e)
        {
        	if(!this.gfn_isUpdate(this.dsByeondong))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	if(this.dsByeondong.getRowType(this.dsByeondong.rowposition) == 2)
        	{
        		this.alert("신규 학적변동정보는 저장 버튼을 클릭하세요.");
        		return false;
        	}
        	if(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "JINHAENG_STCD") == "0")
        	{
        		this.alert("결재여부가 [미승인]인 학적변동정보는 저장 버튼을 클릭하세요.");
        		return false;
        	}

            var result = this.gfn_confirm( "학적변동정보만 수정됩니다. 저장하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }
        	this.fn_SaveByeondong();
        };

        /**
         * 기능
         */
        this.fn_SaveByeondong = function()
        {
            var strSvc      = "SaveByeondong";
            var strUrl      = "/prj/US/US02/Save_2010203_M_Byeondong.do";
            var strInDs     = "dsByeondong=dsByeondong:u";
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

        this.fn_PostSaveByeondong = function()
        {
            this.fn_Ret();
        };

        /**********************************************************************
                11. 각종 함수
        ***********************************************************************/
        // 탭페이지 설정
        this.fn_SetTabpage = function(byeondongRef1, byeondongSangseCd)
        {
        	this.Tab.TabPage1.set_enable(false);
        	this.Tab.TabPage2.set_enable(false);
        	this.Tab.TabPage3.set_enable(false);
        	this.Tab.TabPage4.set_enable(false);
        	this.Tab.TabPage5.set_enable(false);
        	this.Tab.TabPage6.set_enable(false);
        	this.Tab.TabPage7.set_enable(false);
        	this.Tab.TabPage8.set_enable(false);

        	// 입학, 졸업
        	if(byeondongRef1 == "01" || byeondongRef1 == "07")
        	{
        		// 재입학
        		if(byeondongSangseCd == "0103")
        		{
        			this.Tab.set_tabindex(5);
        			this.Tab.TabPage6.set_enable(true);
        		}
        		else
        		{
        			this.Tab.set_tabindex(0);
        			this.Tab.TabPage1.set_enable(true);
        		}
        	}
        	// 휴학
        	else if(byeondongRef1 == "02")
        	{
        		this.Tab.set_tabindex(1);
        		this.Tab.TabPage2.set_enable(true);
        	}
        	// 복학
        	else if(byeondongRef1 == "03")
        	{
        		this.Tab.set_tabindex(2);
        		this.Tab.TabPage3.set_enable(true);
        	}
        	// 제적
        	else if(byeondongRef1 == "04")
        	{
        		this.Tab.set_tabindex(3);
        		this.Tab.TabPage4.set_enable(true);
        	}
        	// 전과
        	else if(byeondongRef1 == "05")
        	{
        		this.Tab.set_tabindex(4);
        		this.Tab.TabPage5.set_enable(true);
        	}
        	// 유급
        	else if(byeondongRef1 == "06")
        	{
        		this.Tab.set_tabindex(6);
        		this.Tab.TabPage7.set_enable(true);
        	}
        	// 기타
        	else if(byeondongRef1 == "99")
        	{
        		this.Tab.set_tabindex(7);
        		this.Tab.TabPage8.set_enable(true);
        	}
        }

        // 변동상세코드 필터함수
        this.fn_ByeondongSangseFilter = function(nIdx)
        {
        	this.dsByeondongSangse.filter("");
        	// 입학,졸업
        	if(nIdx == 0)
        	{
        		this.dsByeondongSangse.filter("CODE=='0101'||CODE=='0102'||CODE=='0103'||CODE=='0701'");
        	}
        	// 휴학
        	else if(nIdx == 1)
        	{
        		if(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "SANGSE_REF_3") == "1")
        		{
        			this.dsByeondongSangse.filter("REF_1=='02'&&REF_3=='1'");
        		}
        		else
        		{
        			this.dsByeondongSangse.filter("REF_1=='02'&&REF_3=='2'");
        		}

        		// 학적변동상세사유코드 FILTER
        		this.fn_ByeondongSangseSayuFilter(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "BYEONDONG_SANGSE_CD"));
        	}
        	// 복학
        	else if(nIdx == 2)
        	{
        		this.dsByeondongSangse.filter("REF_1=='03'");

        		// 학적변동상세사유코드 FILTER
        		this.fn_ByeondongSangseSayuFilter(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "BYEONDONG_SANGSE_CD"));
        	}
        	// 제적
        	else if(nIdx == 3)
        	{
        		this.dsByeondongSangse.filter("REF_1=='04'");

        		// 학적변동상세사유코드 FILTER
        		this.fn_ByeondongSangseSayuFilter(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "BYEONDONG_SANGSE_CD"));
        	}
        	// 전과
        	else if(nIdx == 4)
        	{
        		this.dsByeondongSangse.filter("REF_1=='05'");
        	}
        	// 재입학
        	else if(nIdx == 5)
        	{
        		this.dsByeondongSangse.filter("CODE=='0103'");
        	}
        	// 유급
        	else if(nIdx == 6)
        	{
        		this.dsByeondongSangse.filter("REF_1=='06'");
        	}
        	// 기타
        	else if(nIdx == 7)
        	{
        		this.dsByeondongSangse.filter("REF_1=='99'");
        	}

        	this.dsByeondongSangse.insertRow(0);
        	this.dsByeondongSangse.setColumn(0, "CODE");
        	this.dsByeondongSangse.setColumn(0, "CODE_NM", "선택");
        };

        // 변동상세사유 필터함수
        this.fn_ByeondongSangseSayuFilter = function(sangseCd)
        {
        	this.dsByeondongSangseSayu.filter("");
        	this.dsByeondongSangseSayu.filter("REF_1=='" + sangseCd + "'");

        	this.dsByeondongSangseSayu.insertRow(0);
        	this.dsByeondongSangseSayu.setColumn(0, "CODE");
        	this.dsByeondongSangseSayu.setColumn(0, "CODE_NM", "선택");
        };

        /**********************************************************************
                12. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdDeungrok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdByeondong_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 학과 필터 적용
        this.Tab_TabPage5_cboAftGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsAftHakgwa";
        	strComb     = "S";
        	svcId       = "hakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_HakgwaComboLoad(this.Tab.TabPage5.form.cboAftHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.Tab_TabPage5_cboAftHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	strDs       = "dsAftJeongong";
        	strComb     = "S";
        	svcId       = "jeongongInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직

        	if(this.gfn_isNull(e.postvalue))
        		strUpDeptCd = "";
        	else
        		strUpDeptCd = e.postvalue;

        	this.gfn_JeongongComboLoad(this.Tab.TabPage5.form.cboAftJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // ds_input 컬럼 변경시
        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "HAKSAENG_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "HAKBEON", "");
        	   }
        	   /*
        	   else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallHakbeonPopup(e.newvalue);
        			}
        	   }
        	   */
        	}
        };

        // 학적기본 데이터셋 변경시 이미지 불러오기
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	var xhttp = new XMLHttpRequest();
        	xhttp.targetObj  = this.dsMaster;
        	xhttp.targetComp = this.imgView;
        	xhttp.onreadystatechange = function() {
        		if (this.readyState == 4 && this.status == 200) {
        			xhttp.targetComp.set_image(xhttp.targetObj.getColumn(xhttp.targetObj.rowposition, 'FILE_PATH'));
        		} else {
        			xhttp.targetComp.set_image('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png');
        		}
        	};
        	xhttp.open("GET", this.dsMaster.getColumn(this.dsMaster.rowposition, 'FILE_PATH'), false);
        	xhttp.send();
        };

        // 탭 변경시 학적변동상세코드 변경
        this.Tab_onchanged = function(obj,e)
        {
        	if(this.dsByeondong.getRowType(this.dsByeondong.rowposition) == 2)
        	{
        		this.fn_ByeondongSangseFilter(e.postindex);

        		// 신규일때 탭페이지 이동시 학적변동상세코드는 초기화
        		this.dsByeondong.setColumn(this.dsByeondong.rowposition, "BYEONDONG_SANGSE_CD", null);
        	}
        };

        // 변동 내역 로우 변경시 이벤트
        this.dsByeondong_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) == 2)
        	{
        		this.fn_SetTabpage(this.cboByeondong.value, this.cboByeondong.value=="01"?"0103":null);
        	}
        	else
        	{
        		this.fn_SetTabpage(obj.getColumn(e.newrow, "SANGSE_REF_1"), obj.getColumn(e.newrow, "BYEONDONG_SANGSE_CD"));
        	}
        	// 변동상세코드 filter
        	this.fn_ByeondongSangseFilter(this.Tab.tabindex);
        };

        // 학적변동 변경 전 이벤트
        this.cboByeondong_canitemchange = function(obj,e)
        {
        	if(this.dsByeondong.getRowType(this.dsByeondong.rowposition) == 2)
        	{
        		// 재학생 -> 복학, 재입학
        		if((this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10" && e.postvalue == "01") ||
        		   (this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "10" && e.postvalue == "03"))
        		{
        			this.alert("현재 재학생입니다. " + e.posttext + " 처리할 수 없습니다.");
        			return false;
        		}
        		// 휴학생 -> 재입학
        		if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "20" && e.postvalue == "01")
        		{
        			this.alert("현재 휴학생입니다. " + e.posttext + " 처리할 수 없습니다.");
        			return false;
        		}
        		// 제적생은 재입학 처리만 가능
        		if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "30" && e.postvalue != "01")
        		{
        			this.alert("제적생은 재입학 처리만 가능합니다.");
        			return false;
        		}
        		// 수료생, 졸업생은 학적변동 처리 불가
        		// if(this.ds_hakjeokGibon.getColumn(0, "HAKJEOK_STCD") == "40" || this.ds_hakjeokGibon.getColumn(0, "HAKJEOK_STCD") == "50")
        		// 졸업생은 학적변동 처리 불가
        		if(this.dsMaster.getColumn(0, "HAKJEOK_STCD") == "50")
        		{
        			this.alert("졸업생은 학적변동처리를 할 수 없습니다.");
        			return false;
        		}
        	}
        };

        // 학적변동 변경시 이벤트
        this.cboByeondong_onitemchanged = function(obj,e)
        {
        	// 신규일때만 탭 변경
        	if(this.dsByeondong.getRowType(this.dsByeondong.rowposition) == 2)
        	{
        		this.fn_SetTabpage(e.postvalue, e.postvalue=="01"?"0103":null);
        	}
        };

        // 학적변동상세 콤보 변경 후 이벤트
        this.Tab_TabPage2_cboByeondongSangse_onitemchanged = function(obj,e)
        {
        	this.fn_ByeondongSangseSayuFilter(e.postvalue);
        };

        // 휴학구분 변경시 이벤트
        this.Tab_TabPage2_rdoHyuhak_onitemchanged = function(obj,e)
        {
        	this.dsByeondongSangse.filter("");
        	if(e.postvalue == "1")
        	{
        		this.dsByeondongSangse.filter("REF_1=='02'&&REF_3=='1'");
        	}
        	else
        	{
        		this.dsByeondongSangse.filter("REF_1=='02'&&REF_3=='2'");
        	}

        	this.dsByeondongSangse.insertRow(0);
        	this.dsByeondongSangse.setColumn(0, "CODE");
        	this.dsByeondongSangse.setColumn(0, "CODE_NM", "선택");
        	this.Tab.TabPage2.form.cboByeondongSangse.set_index(0);
        	this.Tab.TabPage2.form.cboByeondongSangseSayu.set_index(0);

        	// 학적변동상세사유코드 FILTER
        	this.fn_ByeondongSangseSayuFilter(this.dsByeondong.getColumn(this.dsByeondong.rowposition, "BYEONDONG_SANGSE_CD"));
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsByeondong);
        };

        /**********************************************************************
                13. 팝업
        ***********************************************************************/
        this.divSearch_btnSearchHakbeon_onclick = function(obj,e)
        {
        	this.fn_setCallHakbeonPopup();
        };

        // 학번 popup
        this.fn_setCallHakbeonPopup = function()
        {
        	this.dsHakbeon.clearData();
        	var hakbeonNm = this.divSearch.form.edtSearchNm.value;
        	var birthday = this.divSearch.form.calSearchBirthday.value;
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "HAKBEON_NM", hakbeonNm);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "BIRTHDAY", birthday);

        	var strSvc 		= "SearchHakbeon";
        	var strUrl 		= "/prj/com/Retrieve_P04.do";
        	var strInDs  	= "ds_input=ds_input1";
        	var strOutDs 	= "dsHakbeon=dsMaster";
        	var strArg 		= "";
        	var GBV_MENUID	= objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        	  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        	if(this.dsHakbeon.rowcount == 1)
        	{
        		this.ds_input.setColumn(0, "HAKBEON", this.dsHakbeon.getColumn(0,"HAKBEON"));
        		this.ds_input.setColumn(0, "HAKSAENG_NM", this.dsHakbeon.getColumn(0,"HAKSAENG_NM"));
        		this.ds_input.setColumn(0, "BIRTHDAY", this.dsHakbeon.getColumn(0,"BIRTHDAY"));
        		this.fn_Ret();
        	}
        	else
        	{
        		var oArg = {hakbeonNm:hakbeonNm, birthday:birthday, menuId:objApp.gv_cutPrgId};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "hakbeon","com::COMM_P04.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }

        // 성적처리 버튼 클릭시
        this.Tab_TabPage7_btnSeongjeok_onclick = function(obj,e)
        {
        	var hakbeon = this.dsByeondong.getColumn(this.dsByeondong.rowposition, "HAKBEON")
        	var oArg = {hakbeon:hakbeon};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "popup","US02::US02_2010203_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.divSearch_calSearchBirthday_onchanged = function(obj,e)
        {
        	this.fn_setCallHakbeonPopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.Tab.TabPage1.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage1.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage2.addEventHandler("onkillfocus",this.Tab_TabPage2_onkillfocus,this);
            this.Tab.TabPage2.form.cboByeondongSangse.addEventHandler("onitemchanged",this.Tab_TabPage2_cboByeondongSangse_onitemchanged,this);
            this.Tab.TabPage2.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage2.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage2.form.rdoHyuhak.addEventHandler("onitemchanged",this.Tab_TabPage2_rdoHyuhak_onitemchanged,this);
            this.Tab.TabPage2.form.rdoSeongjeokInjeong.addEventHandler("onitemchanged",this.Tab_TabPage2_rdoGender00_onitemchanged,this);
            this.Tab.TabPage2.form.rdoDeungrokInjeong.addEventHandler("onitemchanged",this.Tab_TabPage2_rdoGender00_onitemchanged,this);
            this.Tab.TabPage2.form.spnBokhakYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage3.form.cboByeondongSangse.addEventHandler("onitemchanged",this.Tab_TabPage2_cboByeondongSangse_onitemchanged,this);
            this.Tab.TabPage3.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage3.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage4.form.cboByeondongSangse.addEventHandler("onitemchanged",this.Tab_TabPage2_cboByeondongSangse_onitemchanged,this);
            this.Tab.TabPage4.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage4.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage5.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage5.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage5.form.cboAftGyeyeol.addEventHandler("onitemchanged",this.Tab_TabPage5_cboAftGyeyeol_onitemchanged,this);
            this.Tab.TabPage5.form.cboAftHakgwa.addEventHandler("onitemchanged",this.Tab_TabPage5_cboAftHakgwa_onitemchanged,this);
            this.Tab.TabPage6.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage6.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage6.form.cboAftGyeyeol.addEventHandler("onitemchanged",this.Tab_TabPage5_cboAftGyeyeol_onitemchanged,this);
            this.Tab.TabPage6.form.cboAftHakgwa.addEventHandler("onitemchanged",this.Tab_TabPage5_cboAftHakgwa_onitemchanged,this);
            this.Tab.TabPage7.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage7.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage7.form.btnSeongjeok.addEventHandler("onclick",this.Tab_TabPage7_btnSeongjeok_onclick,this);
            this.Tab.TabPage8.form.spnJeokyongYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.Tab.TabPage8.form.spnHaksaYYYY.addEventHandler("onchanged",this.spnYYYY_onchanged,this);
            this.grdDeungrok.addEventHandler("onheaddblclick",this.grdDeungrok_onheaddblclick,this);
            this.divSearch.form.calSearchBirthday.addEventHandler("onchanged",this.divSearch_calSearchBirthday_onchanged,this);
            this.grdByeondong.addEventHandler("onheaddblclick",this.grdByeondong_onheaddblclick,this);
            this.cboByeondong.addEventHandler("canitemchange",this.cboByeondong_canitemchange,this);
            this.cboByeondong.addEventHandler("onitemchanged",this.cboByeondong_onitemchanged,this);
            this.btnByeondong.addEventHandler("onclick",this.btnByeondong_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnRet.addEventHandler("onclick",this.btnRet_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsByeondong.addEventHandler("onrowposchanged",this.dsByeondong_onrowposchanged,this);
            this.dsByeondongSeq.addEventHandler("onrowposchanged",this.dsByeondong_onrowposchanged,this);
            this.dsHakjeokGibon.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US02_2010203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
