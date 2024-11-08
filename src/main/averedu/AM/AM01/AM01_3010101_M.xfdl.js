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
            this.set_color("blue");
            this.set_titletext("전임교원정보관리");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"50\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"2\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_DVSN\" type=\"STRING\" size=\"30\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BOJIK_DEPT_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGNYEON_BOJANG_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"2\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"500\"/><Column id=\"SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSA_HAKWI_GUKGA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"20\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"1\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CONT_YEAR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"6\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"2\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"2\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BOJIK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOGWAMOK_NM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIKGEUP_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIKJONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEONGRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYEONGRYEOK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HAEDANG_GIGWAN\" type=\"STRING\" size=\"160\"/><Column id=\"GYEONGRYEOK_JIKWI_NM\" type=\"STRING\" size=\"160\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"SABEON\" type=\"STRING\" size=\"255\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"255\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DTL_SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JIKWON_GBCD\">10</Col><Col id=\"JAEJIK_GBCD\">10</Col><Col id=\"JIKJONG_GBCD\">1010</Col><Col id=\"JIKGEUP_GBCD\"/><Col id=\"SABEON\"/><Col id=\"SEONGMYEONG\"/><Col id=\"GYEYEOL_CD\"/><Col id=\"DEPT_CD\"/><Col id=\"JEONGONG_CD\"/></Row></Rows>");
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


            obj = new Dataset("dsSearchJikwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJaejik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJikjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJikjeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikjeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJaejik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyeyak", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">계약제</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">정규직</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGwamok", this);
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"50\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"82\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"2\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"6\"/><Column id=\"BOJIK_BUSEO_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"6\"/><Column id=\"MJOR_DVSN\" type=\"STRING\" size=\"30\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_BUSEO2_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGNYEON_BOJANG_CD\" type=\"STRING\" size=\"2\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"2\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"500\"/><Column id=\"RSPN_SISU\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"GUKGA_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GUKGA2_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"20\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"1\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CONT_YEAR\" type=\"BIGDECIMAL\" size=\"2\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"6\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"2\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"2\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"10\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"30\"/><Column id=\"BELG_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"ASMT_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"EVAL_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"SUBJ_CONT\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOut", this);
            obj._setContents("<ColumnInfo><Column id=\"O_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"O_COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHyujik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","532","104","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","532","104","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("교직원번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNo","649","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03","1078","104","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("성명(영문)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","805","105","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonNm","922","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyojikwonEnm","1195","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","532","132","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","532","132","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSosok","649","135","428","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","532","160","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","532","160","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00","805","160","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00","1351","160","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","532","188","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","532","188","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("보직");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBojik","649","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","1468","163","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","532","216","1107","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","805","188","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00","1078","160","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab","399","307",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("기초");
            obj.set_url("AM01::AM01_3010101_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("신상");
            obj.set_url("AM01::AM01_3010101_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("경력");
            obj.set_url("AM01::AM01_3010101_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage4",this.Tab);
            obj.set_text("발령");
            obj.set_url("AM01::AM01_3010101_T04.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage5",this.Tab);
            obj.set_text("보직");
            obj.set_url("AM01::AM01_3010101_T05.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage6",this.Tab);
            obj.set_text("호봉");
            obj.set_url("AM01::AM01_3010101_T06.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage7",this.Tab);
            obj.set_text("상벌");
            obj.set_url("AM01::AM01_3010101_T07.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage8",this.Tab);
            obj.set_text("자격증");
            obj.set_url("AM01::AM01_3010101_T08.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage9",this.Tab);
            obj.set_text("학력");
            obj.set_url("AM01::AM01_3010101_T09.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage10",this.Tab);
            obj.set_text("가족");
            obj.set_url("AM01::AM01_3010101_T10.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage11",this.Tab);
            obj.set_text("봉사");
            obj.set_url("AM01::AM01_3010101_T11.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage12",this.Tab);
            obj.set_text("연수/출장/세미나");
            obj.set_url("AM01::AM01_3010101_T12.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new ImageViewer("imgView","399","104","123","168",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_stretch("fixaspectratio");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGender","1468","107","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            var RdoGender_innerdataset = new nexacro.NormalDataset("RdoGender_innerdataset", obj);
            RdoGender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남자</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">여자</Col></Row></Rows>");
            obj.set_innerdataset(RdoGender_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Static01","490","272","100","35",null,null,null,null,null,null,this);
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

            obj = new MaskEdit("mdtResNo","1195","163","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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

            obj = new Combo("cboSearchGyeyeol","95","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("계열");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","661","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("교직원번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyojikwonNo","750","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","333","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","424","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsHakgwa");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01","986","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("교직원성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","661","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","750","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsJeongong");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyojikwonNm","1077","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00_00","5","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikwon","95","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsSearchJikwon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00_00_00","338","9","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJaejik","424","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsSearchJaejik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"7","59","25","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("29");
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
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1550","5",null,null,null,null,null,null,this);
            obj.set_taborder("31");
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
            obj.set_taborder("32");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","59","790","9",null,null,null,null,null,null,this);
            obj.set_taborder("33");
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
            obj.set_taborder("34");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","415","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","741","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","951","1","56","68",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1068","1","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","520","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("39");
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
            obj.set_taborder("40");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new FileUpload("btnImgUp","532","248","46","24",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_uploadurl("/univ_cm/picUpload?upload_path=pic");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("교직원 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","78",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","369","263","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong","649","163","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsJikjong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","397","79",null,"22","1088",null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_00","1351","104","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikgeup","922","163","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("dsJikjeup");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_03_01","1078","132","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("임용기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_01_00_00","1078","188","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calImyongFrdt","1195","135","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_63_01","1361","136","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calImyongTodt","1381","135","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGukjeok","1195","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_innerdataset("dsGukjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14_00_00_00_00_00","1351","188","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("계약제구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyeyakje","1468","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_innerdataset("dsGyeyak");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJaejik","922","191","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_innerdataset("dsJaejik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch1","0","104","369","42",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikjong","27","9","150","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJikjong");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00_00","177","3","10","33",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikgeup","187","9","153","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJikjeup");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","340","0","27","40",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","146","310","8",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","154","369",null,null,"0",null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:SABEON\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:SEONGMYEONG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00","532","216","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("휴직일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00","805","216","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("휴직코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHyujik","922","219","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_innerdataset("dsHyujik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_01","1078","216","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("퇴직일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_00_00_00","1351","216","115","28",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("퇴직코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboToejik","1468","219","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_innerdataset("dsHyujik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToejik","1195","219","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHyujik","649","219","154","22",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("전임교원정보관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtGyojikwonNo","value","dsMaster","SABEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtGyojikwonNm","value","dsMaster","SEONGMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtGyojikwonEnm","value","dsMaster","SEONGMYEONG_YEONGMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSosok","value","dsMaster","SOSOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtBojik","value","dsMaster","BOJIK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","calBirthday","value","dsMaster","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","RdoGender","value","dsMaster","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item94","mdtResNo","value","dsMaster","JUMIN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item93","divSearch.form.cboSearchGyeyeol","value","ds_input","GYEYEOL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item95","divSearch.form.edtSearchGyojikwonNo","value","ds_input","SABEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item96","divSearch.form.cboSearchHakgwa","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item98","divSearch.form.cboSearchJeongong","value","ds_input","JEONGONG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item99","divSearch.form.edtSearchGyojikwonNm","value","ds_input","SEONGMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboJikjong","value","dsMaster","JIKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboJikgeup","value","dsMaster","JIKGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calImyongFrdt","value","dsMaster","IMYONG_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calImyongTodt","value","dsMaster","IMYONG_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboGukjeok","value","dsMaster","GUKJEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboGyeyakje","value","dsMaster","GYEYAKJE_GUBUN_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cboJaejik","value","dsMaster","JAEJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch1.form.cboSearchJikjong","value","ds_input","JIKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch1.form.cboSearchJikgeup","value","ds_input","JIKGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboSearchJikwon","value","ds_input","JIKWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.cboSearchJaejik","value","ds_input","JAEJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","calToejik","value","dsMaster","TOEJIK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","calHyujik","value","dsMaster","HYUJIK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cboHyujik","value","dsMaster","HYUJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","cboToejik","value","dsMaster","TOEJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","AM01::AM01_3010101_T01.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T02.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T03.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T04.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T05.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T06.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T07.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T08.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T09.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T10.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T11.xfdl");
            this._addPreloadList("fdl","AM01::AM01_3010101_T12.xfdl");
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010101_M.xfdl(전임교원정보관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/17
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
            var strDs    = "dsSearchJikwon|dsSearchJaejik|dsJaejik|dsSearchJikjong|dsJikjong|dsSearchJikjeup|dsJikjeup|dsGukjeok|dsHyujik";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00207|00208|00208|00205|00205|00201|00201|00266|00211";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|X|T|X|T|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        this.fn_PostformInit = function()
        {
        	this.divSearch1.form.cboSearchJikgeup.set_index(0);
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
        			case "GwamokRet":
                            this.fn_Save();
                        break;
        			case "Save":
                            this.fn_PostSave();
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "tmp1" :        // 담당과목생성
                         this.fn_Saengsung();
                    break;
                case "tmp2" :        // 팁
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
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_M.do";
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
                06. 조회 함수 선언(탭 함수)
        ***********************************************************************/
        this.fn_TabRet = function()
        {
        	var sabeon = this.dsMaster.getColumn(this.dsMaster.rowposition, "SABEON");
        	var jikwonGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKWON_GBCD");

        	// 기초
          	if(this.Tab.tabindex==0){
          		this.Tab.TabPage1.form.fn_Ret(sabeon);
          	}
        	// 신상
        	if(this.Tab.tabindex==1){
        		this.Tab.TabPage2.form.fn_Ret(sabeon);
        	}
        	// 경력
        	if(this.Tab.tabindex==2){
        		this.Tab.TabPage3.form.fn_Ret(sabeon);
        	}
        	// 발령
        	if(this.Tab.tabindex==3){
        		this.Tab.TabPage4.form.fn_Ret(sabeon, jikwonGbcd);
        	}
        	// 보직
        	if(this.Tab.tabindex==4){
        		this.Tab.TabPage5.form.fn_Ret(sabeon);
        	}
        	// 호봉
        	if(this.Tab.tabindex==5){
        		this.Tab.TabPage6.form.fn_Ret(sabeon);
        	}
        	// 상벌
        	if(this.Tab.tabindex==6){
        		this.Tab.TabPage7.form.fn_Ret(sabeon);
        	}
        	// 자격증
        	if(this.Tab.tabindex==7){
        		this.Tab.TabPage8.form.fn_Ret(sabeon);
        	}
        	// 학력
        	if(this.Tab.tabindex==8){
        		this.Tab.TabPage9.form.fn_Ret(sabeon);
        	}
        	// 가족
        	if(this.Tab.tabindex==9){
        		this.Tab.TabPage10.form.fn_Ret(sabeon);
        	}
        	// 봉사
        	if(this.Tab.tabindex==10){
        		this.Tab.TabPage11.form.fn_Ret(sabeon);
        	}
        	// 연수/출장/세미나
        	if(this.Tab.tabindex==11){
        		this.Tab.TabPage12.form.fn_Ret(sabeon);
        	}
        }

        /**********************************************************************
                07. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	var oArg = {jikwonGbcd:"10"};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","AM01::AM01_3010101_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

        	var sabeon = this.dsMaster.getColumn(this.dsMaster.rowposition, "SABEON");
        	var name   = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEONGMYEONG");
        	var txt    = name + "(" + sabeon + ") 교직원을 삭제하시겠습니까?"
        	           + "\n ( ※ '확인'버튼 클릭시"
        			   + "\n    해당 교직원에 대한 모든 정보가 영구히 삭제됩니다.)";
            var result = this.gfn_confirm(txt, "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/AM/AM01/Delete_3010101_M.do";
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
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 담당과목생성
        ***********************************************************************/
        this.fn_Saengsung = function()
        {
        	var strSvc      = "GwamokRet";
            var strUrl      = "/prj/AM/AM01/GwamokRetrieve_3010101_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGwamok=dsGwamok";
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

        this.fn_PreSave = function()
        {
        	var jikjongGbcd = this.ds_input.getColumn(0, "JIKJONG_GBCD");
        	this.dsSave.clearData();
        	var rowIndex = this.dsSave.addRow();
        	this.dsSave.setColumn(rowIndex, 'JIKJONG_GBCD', jikjongGbcd);

        	if (this.dsGwamok.rowcount > 0){
        		if (!this.confirm("자료가 이미 존재 합니다. 삭제 후 생성 하시겠습니까?")){
        			return false;
        		} else {
        			this.dsSave.setColumn(rowIndex, 'DELETE_YN', '1');
        		}
        	} else {
        		if (!this.confirm("담당과목을 생성하시겠습니까?")) {
        			return false;
        		}
        	}

        	return true;
        };

        this.fn_Save = function()
        {
        	if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/AM/AM01/Save_3010101_M.do";
            var strInDs     = "dsSave=dsSave";
            var strOutDs    = "dsOut=dsOut";
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

        this.fn_PostSave = function()
        {
        	this.alert(this.dsOut.getColumn(0, 'O_COMMENT'));
        	this.dsOut.clearData();
        };

        /**********************************************************************
                10. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                11. 기타 Control Event
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

        // 초기화
        this.divSearch_btnReset_onclick = function(obj,e)
        {
        	this.ds_input.clearData();
        	this.ds_input.addRow();
        	this.ds_input.setColumn(0, "JIKWON_GBCD", "10");
        	this.ds_input.setColumn(0, "JAEJIK_GBCD", "10");
        	this.ds_input.setColumn(0, "JIKJONG_GBCD", "1010");
        };

        // 사진 set
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
                12. 변경유무 체크
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
        	// 기초
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
        	// 신상
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
        	// 자격증
        	if(this.Tab.tabindex==7)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage8.form.dsMaster1) || this.gfn_isUpdate(this.Tab.TabPage8.form.dsMaster2))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 학력
        	if(this.Tab.tabindex==8)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage9.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 가족
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
        	// 봉사
        	if(this.Tab.tabindex==10)
        	{
          		if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsMaster))
        		{
        			var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        			if(result == 0)
        			{
        				return false;
        			}
        		}
          	}
        	// 연수/출장/세미나
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
        	} else if(this.gfn_isUpdate(this.Tab.TabPage8.form.dsMaster1)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage8.form.dsMaster2)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage9.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage10.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage11.form.dsMaster)) {
        		value = true;
        	} else if(this.gfn_isUpdate(this.Tab.TabPage12.form.dsMaster)) {
        		value = true;
        	}

        	return value;
        };

        /**********************************************************************
                13. 검색창 엔터키 조회
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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.Tab.addEventHandler("canchange",this.Tab_canchange,this);
            this.Tab.TabPage10.addEventHandler("onkillfocus",this.Tab_TabPage10_onkillfocus,this);
            this.Tab.TabPage11.addEventHandler("onkillfocus",this.Tab_TabPage11_onkillfocus,this);
            this.Tab.TabPage12.addEventHandler("onkillfocus",this.Tab_TabPage12_onkillfocus,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.edtSearchGyojikwonNo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.edtSearchGyojikwonNm.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJikwon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJaejik.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.btnReset.addEventHandler("onclick",this.divSearch_btnReset_onclick,this);
            this.btnImgUp.addEventHandler("onitemclick",this.btnImgUp_onitemclick,this);
            this.btnImgUp.addEventHandler("onitemchanged",this.btnImgUp_onitemchanged,this);
            this.cboJikjong.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikjong.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikjong.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJikgeup.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJikgeup.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJikgeup.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboGukjeok.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboGukjeok.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboGukjeok.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboGyeyakje.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboGyeyakje.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboGyeyakje.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboJaejik.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboJaejik.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboJaejik.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.divSearch1.form.cboSearchJikjong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch1.form.cboSearchJikgeup.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch1.form.cboSearchJikgeup.addEventHandler("onitemchanged",this.fn_Ret,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.cboHyujik.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboHyujik.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboHyujik.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.cboToejik.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboToejik.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboToejik.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("AM01_3010101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
