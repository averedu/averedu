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
            this.set_titletext("통합학적부조회");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"CAMPUS_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JINGEUP_SYS_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JINGEUP_ADMIN_SAJEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"BEF_BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_ENM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSAENG_CNM\" type=\"STRING\" size=\"50\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SANGSE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BYEONDONG_SANGSE_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BYEONDONG_SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"BYEONDONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JIDOGYOSU_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JIDOGYOSU_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKSEOKSA_TONGHAPGWAJEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKNYEONJE_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"GENDER_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"GYOJIK_ISU_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GYOJIK_POGI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYOJIK_POGI_SAYU\" type=\"STRING\" size=\"500\"/><Column id=\"SERVICE_HAKJEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OEGUKIN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"DONGPO_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IPHAK_HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINGOGYO_JOLEOP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"NEIS_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSINGOGYO_GUKJEOK_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHULSINDAEHAK_JOLEOP_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"DAEHAK_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JEONGWONNAEOE_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_JEONHYEONG_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_TYCD\" type=\"STRING\" size=\"3\"/><Column id=\"IPHAK_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JOLEOP_GIJUN_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JOLEOP_HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"BUNBAN_BYEONGYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN_BYEONGYEONG_DTTM\" type=\"STRING\" size=\"19\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"35\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resNoInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchBunban", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmp1", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmp2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchHakjeokSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","532","104","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","532","104","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","709","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03","1330","104","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("한문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","865","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","1022","104","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("영문성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEnm","1174","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCnm","1482","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","532","132","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","532","132","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSosok","709","135","560","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","532","160","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","532","160","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00","866","160","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeon","1019","163","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_00","1067","160","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00","1257","160","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("학년제");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHaknyeonje","1369","163","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00","1447","160","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("지도교수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJidogyosu","1549","163","88","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","532","188","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","532","188","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01","866","188","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("변동사유");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtByeondongSayu","1019","191","309","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01","1330","188","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("최종변동일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHakjeokSangtae","709","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calByeondongDt","1483","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","532","216","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","532","216","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00","866","216","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00","1330","216","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","709","219","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00","532","244","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","532","244","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("분반변경여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00","866","244","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("분반변경일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBunbanDt","1019","247","309","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00_00","1330","244","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("교직이수여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_00_00","532","272","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00","532","272","175","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("졸업기준년도");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00_00","866","272","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("생활관여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_01_00_00_00","1330","272","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_color("blue");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJolubDt","709","275","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_inputtype("digit");
            obj.set_maxlength("4");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab","399","334",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("학적기본");
            obj.set_url("US01::US01_2010101_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("입학정보");
            obj.set_url("US01::US01_2010101_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("학적변동");
            obj.set_url("US01::US01_2010101_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage4",this.Tab);
            obj.set_text("등록");
            obj.set_url("US01::US01_2010101_T04.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage5",this.Tab);
            obj.set_text("장학");
            obj.set_url("US01::US01_2010101_T05.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage6",this.Tab);
            obj.set_text("수강");
            obj.set_url("US01::US01_2010101_T06.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage7",this.Tab);
            obj.set_text("시간표");
            obj.set_url("US01::US01_2010101_T07.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage8",this.Tab);
            obj.set_text("성적");
            obj.set_url("US01::US01_2010101_T08.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage9",this.Tab);
            obj.set_text("성적이력");
            obj.set_url("US01::US01_2010101_T09.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage10",this.Tab);
            obj.set_text("상담");
            obj.set_url("US01::US01_2010101_T10.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage11",this.Tab);
            obj.set_text("학생이력");
            obj.set_url("US01::US01_2010101_T11.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage12",this.Tab);
            obj.set_text("취업추천서");
            obj.set_url("US01::US01_2010101_T12.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage13",this.Tab);
            obj.set_text("도서연체정보");
            obj.set_url("US01::US01_2010101_T13.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","399","104","123","168",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoBunban","710","247","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var RdoBunban_innerdataset = new nexacro.NormalDataset("RdoBunban_innerdataset", obj);
            RdoBunban_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RdoBunban_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RdoSaengHwalGwan","1019","276","183","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var RdoSaengHwalGwan_innerdataset = new nexacro.NormalDataset("RdoSaengHwalGwan_innerdataset", obj);
            RdoSaengHwalGwan_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Yes</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">No</Col></Row></Rows>");
            obj.set_innerdataset(RdoSaengHwalGwan_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGender","1483","219","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var RdoGender_innerdataset = new nexacro.NormalDataset("RdoGender_innerdataset", obj);
            RdoGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(RdoGender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGyojikYn","1483","247","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var RdoGyojikYn_innerdataset = new nexacro.NormalDataset("RdoGyojikYn_innerdataset", obj);
            RdoGyojikYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이수</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미이수</Col></Row></Rows>");
            obj.set_innerdataset(RdoGyojikYn_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static01","490","300","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo","1019","219","247","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_format("######-#{######}");
            obj.set_type("string");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","95","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","0","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","95","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","627","36","104","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("학적상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","333","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","424","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakjeokSangtae","742","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsSearchHakjeokSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","333","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","651","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","742","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02","1392","36","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("주야");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","1468","36","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsSearchJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","1190","36","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","1268","36","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsSearchHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","971","36","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("분반");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchBunban","1048","36","125","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsSearchBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchBirthday","424","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","86","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1550","5",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","296","1","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","59","790","9",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","625","1","56","67",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","415","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","733","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","943","1","56","68",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1039","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","1174","31","56","37",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1374","31","56","37",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00","1259","31","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1459","33","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","96","1160","8",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","1268","219","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new FileUpload("btnImgUp","399","275","46","25",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_uploadurl("/univ_cm/picUpload?upload_path=pic");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","448","275","74","25",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("삭제");
            obj.set_cssclass("btn05");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("학생목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","78",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","104","369",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"30\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\" textAlign=\"center\"/><Cell col=\"1\" text=\"생년월일\" textAlign=\"center\"/><Cell col=\"2\" text=\"성명\" textAlign=\"center\"/><Cell col=\"3\" text=\"분반\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:BIRTHDAY\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:BUNBAN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","263","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya","709","163","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_innerdataset("dsJuya");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBunban","1179","163","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsBunban");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJuya00","1483","275","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("dsGukjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","397","79",null,"22","1088",null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("학적기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("통합학적부조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHakbeon","value","dsMaster","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtNm","value","dsMaster","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtEnm","value","dsMaster","HAKSAENG_ENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCnm","value","dsMaster","HAKSAENG_CNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSosok","value","dsMaster","SOSOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtHaknyeon","value","dsMaster","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtHaknyeonje","value","dsMaster","HAKNYEONJE_GBNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtJidogyosu","value","dsMaster","JIDOGYOSU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtHakjeokSangtae","value","dsMaster","HAKJEOK_STNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtByeondongSayu","value","dsMaster","BYEONDONG_SANGSE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calByeondongDt","value","dsMaster","BYEONDONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","calBirthday","value","dsMaster","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","RdoGender","value","dsMaster","GENDER_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","RdoGyojikYn","value","dsMaster","GYOJIK_ISU_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtJolubDt","value","dsMaster","JOLEOP_GIJUN_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","RdoBunban","value","dsMaster","BUNBAN_BYEONGYEONG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","mdtResNo","value","dsMaster","RES_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divSearch.form.cboSearchGyeyeol","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item97","divSearch.form.cboSearchHakjeokSangtae","value","ds_input","HAKJEOK_STCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divSearch.form.cboSearchBunban","value","ds_input","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divSearch.form.edtSearchBirthday","value","ds_input","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboJuya","value","dsMaster","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboBunban","value","dsMaster","BUNBAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboJuya00","value","dsMaster","GUKJEOK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtBunbanDt","value","dsMaster","BUNBAN_BYEONGYEONG_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","US01::US01_2010101_T01.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T02.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T03.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T04.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T05.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T06.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T07.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T08.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T09.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T10.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T11.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T12.xfdl");
            this._addPreloadList("fdl","US01::US01_2010101_T13.xfdl");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSave");
            this._addPreloadList("data","","dsTmp1");
            this._addPreloadList("data","","dsTmp2");
        };
        
        // User Script
        this.registerScript("US01_2010101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_M.xfdl(학적기본관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/01
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
            var strDs    = "dsSearchJuya|dsJuya|dsSearchBunban|dsBunban|dsGukjeok|dsSearchHaknyeon|dsSearchHakjeokSangtae";                 // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00003|00050|00050|00266|00060|00004";                            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|S|T|S|S|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       = "dsGyeyeol";
        	strComb     = "T";
        	svcId       = "gyeyeolInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strDaehakCd = "";  //
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);
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
        	var nCnt = 0;

        	if(this.fn_beforeRet())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "DAEHAK_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JEONGONG_CD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKNYEON")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKJEOK_STCD")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "BUNBAN")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "HAKBEON")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "BIRTHDAY")))  nCnt++;
        	if (!this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD")))  nCnt++;

            if (nCnt == 0)
        	{
        	    this.gfn_alert("검색 조건 1개 이상 입력해 주세요.","조회정보","","information");
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
            var strUrl      = "/prj/US/US01/Retrieve_2010101_M.do";
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
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.btnImgUp.set_enable(false);
        		this.btnDel.set_enable(false);
        		this.btnConfirm.set_enable(false);
        		this.imgView.set_image(null);
        	}
        	else
        	{
        		this.btnImgUp.set_enable(true);
        		this.btnDel.set_enable(true);
        		this.btnConfirm.set_enable(true);
        	}

        	this.Tab.TabPage2.form.fn_Ret(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 조회 함수 선언(탭 함수)
        ***********************************************************************/
        this.fn_TabRet = function()
        {
        	var hakbeon = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON");

        	// 학적기본
          	if(this.Tab.tabindex==0){
          		this.Tab.TabPage1.form.fn_Ret(hakbeon);
          	}
        	// 입학정보
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret(hakbeon);
        	}
        	// 학적변동
        	if(this.Tab.tabindex==2){
        		this.Tab.TabPage3.form.fn_Ret(hakbeon);
        	}
        	// 등록
        	if(this.Tab.tabindex==3){
        		this.Tab.TabPage4.form.fn_Ret(hakbeon);
        	}
        	// 장학
        	if(this.Tab.tabindex==4){
        		this.Tab.TabPage5.form.fn_Ret(hakbeon);
        	}
        	// 수강
        	if(this.Tab.tabindex==5){
        		this.Tab.TabPage6.form.fn_Ret(hakbeon);
        	}
        	// 시간표
        	if(this.Tab.tabindex==6){
        		this.Tab.TabPage7.form.fn_Ret(hakbeon);
        	}
        	// 성적
        	if(this.Tab.tabindex==7){
        		this.Tab.TabPage8.form.fn_Ret(hakbeon);
        	}
        	// 성적이력
        	if(this.Tab.tabindex==8){
        		this.Tab.TabPage9.form.fn_Ret(hakbeon);
        	}
        	// 상담
        	if(this.Tab.tabindex==9){
        		this.Tab.TabPage10.form.fn_Ret(hakbeon);
        	}
        	// 학생이력
        	if(this.Tab.tabindex==10){
        		this.Tab.TabPage11.form.fn_EohakRet(hakbeon);
        		this.Tab.TabPage11.form.fn_JagyeokRet(hakbeon);
        		this.Tab.TabPage11.form.fn_EohakYeonsuRet(hakbeon);
        	}
        	// 취업추천서
        	if(this.Tab.tabindex==11){
        		this.Tab.TabPage12.form.fn_Ret(hakbeon);
        	}
        	// 도서연체정보
        	if(this.Tab.tabindex==12){
        		this.Tab.TabPage13.form.fn_Ret(hakbeon);
        	}
        }

        /**********************************************************************
                07. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster) && !this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster) && !this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            var result = this.gfn_confirm( "학적기본정보와 입학정보의 변경된 사항이 저장됩니다.\n저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	// 탭페이지1,2의 데이터셋 내용 복사
        	this.dsTmp1.copyData(this.Tab.TabPage1.form.dsMaster);
        	this.dsTmp2.copyData(this.Tab.TabPage2.form.dsMaster);

        	// 저장할 데이터셋에 메인페이지, 탭페이지1,2의 내용 복사
        	var nColi;
        	var nColj;
        	this.dsSave.copyData(this.dsMaster);
        	for(var i=0; i<this.dsTmp1.colcount; i++)
        	{
        		nColi = this.dsTmp1.getColID(i);
        		this.dsSave.addColumn(nColi, "string", "256");
        		this.dsSave.setColumn(0, nColi, this.dsTmp1.getColumn(0, nColi));
        	}
        	for(var j=0; j<this.dsTmp2.colcount; j++)
        	{
        		nColj = this.dsTmp2.getColID(j);
        		this.dsSave.addColumn(nColj, "string", "256");
        		this.dsSave.setColumn(0, nColj, this.dsTmp2.getColumn(0, nColj));
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
            var strUrl      = "/prj/US/US01/Save_2010101_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsSave=dsSave:a";
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
        	this.dsTmp1.clear();
        	this.dsTmp2.clear();
        	this.dsSave.clear();
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
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

        // 주민등록번호 조회
        this.btnConfirm_onclick = function(obj,e)
        {
        	if (!this.confirm("주민등록번호를 조회하시겠습니까?")) return;

        	this.fn_InsertResNoConfirm();
        	this.mdtResNo.set_format("######-#######"); // 주민등록번호 전체 보이기
        };

        // 주민등록번호 조회 이력 insert
        this.fn_InsertResNoConfirm = function ()
        {
        	this.ds_resNoInput.setColumn(0, "USER_ID", objApp.gds_userInfoDb.getColumn(0,"USER_ID"));
        	this.ds_resNoInput.setColumn(0, "HAKBEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON"));

            var strSvc      = "resNoInput";
            var strUrl      = "/prj/US/US01/resNoConfirm_2010101_M.do";
            var strInDs     = "ds_resNoInput=ds_resNoInput";
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

        // 사진 삭제 버튼
        this.btnDel_onclick = function(obj,e)
        {
        //      var result = this.gfn_confirm( "삭제 하시겠습니까?", "저장","", "question" );
        //      if(result == 0)
        //      {
        //          return false;
        //      }
        	this.alert("보류");
        };

        // 사진 업로드 버튼
        this.btnImgUp_onitemchanged = function(obj,e)
        {
        	this.alert("보류");
        };

        // 탭 변경시 각 탭 조회
        this.Tab_onchanged = function(obj,e)
        {
        	this.fn_TabRet();
        };

        // dsMaster 로우 변경시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_picLoad();  // 학생사진 set
        	this.mdtResNo.set_format("######-#{######}"); // 주민등록번호 가리기
        	this.fn_TabRet();
        };

        // 학생 사진 set
        this.fn_picLoad = function()
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

        /**********************************************************************
                10. 변경유무 체크
        ***********************************************************************/
        // dsMaster 로우변경시 사용자가 변경유무를 체크(공통처리)
        this.dsMaster_canrowposchange = function(obj,e)
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

        // 탭변경시 사용자가 변경유무를 체크(공통처리)
        this.Tab_canchange = function(obj,e)
        {
        	// 학적기본
        	if(this.Tab.tabindex==0)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 입학정보
        	if(this.Tab.tabindex==1)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 상담
        	if(this.Tab.tabindex==9)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage10.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 학생이력
        	if(this.Tab.tabindex==10)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsEohak) || this.gfn_isUpdate(this.Tab.TabPage11.form.dsJagyeok) || this.gfn_isUpdate(this.Tab.TabPage11.form.dsEohakYeonsu))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 취업추천서
        	if(this.Tab.tabindex==11)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage12.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        };

        // 조회전 사용자가 변경유무를 체크(공통처리)
        this.fn_beforeRet = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster)) {
        		value = true;
        	}

        	return value;
        };

        // 닫을시 사용자가 변경유무를 체크(공통처리)
        this.fn_beforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage10.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsEohak)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsJagyeok)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsEohakYeonsu)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage12.form.dsMaster)) {
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                11. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_cboSearchGyeyeol_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"DAEHAK_CD",obj.value);
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

        this.divSearch_cboSearchJeongong_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JEONGONG_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchHakbeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKBEON",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchBirthday_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BIRTHDAY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakjeokSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKJEOK_STCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchBunban_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"BUNBAN",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKNYEON",obj.value);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_14_00_00_00_01.addEventHandler("onclick",this.stc_14_00_00_00_01_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.Tab.addEventHandler("canchange",this.Tab_canchange,this);
            this.Tab.TabPage1.addEventHandler("onkillfocus",this.Tab_TabPage1_onkillfocus,this);
            this.Tab.TabPage2.addEventHandler("onkillfocus",this.Tab_TabPage2_onkillfocus,this);
            this.Tab.TabPage10.addEventHandler("onkillfocus",this.Tab_TabPage10_onkillfocus,this);
            this.Tab.TabPage11.addEventHandler("onkillfocus",this.Tab_TabPage11_onkillfocus,this);
            this.Tab.TabPage12.addEventHandler("onkillfocus",this.Tab_TabPage12_onkillfocus,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.divSearch_cboSearchGyeyeol_onkeydown,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeon_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchHakjeokSangtae.addEventHandler("onkeydown",this.divSearch_cboSearchHakjeokSangtae_onkeydown,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.divSearch_cboSearchJeongong_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchBunban.addEventHandler("onkeydown",this.divSearch_cboSearchBunban_onkeydown,this);
            this.divSearch.form.edtSearchBirthday.addEventHandler("onkeydown",this.divSearch_edtSearchBirthday_onkeydown,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnImgUp.addEventHandler("onitemclick",this.btnImgUp_onitemclick,this);
            this.btnImgUp.addEventHandler("onitemchanged",this.btnImgUp_onitemchanged,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.cboJuya.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJuya.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJuya.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboBunban.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboBunban.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboBunban.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJuya00.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJuya00.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJuya00.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("US01_2010101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
