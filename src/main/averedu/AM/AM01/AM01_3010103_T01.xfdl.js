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
            this.set_titletext("기초");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"50\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"82\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"2\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_DVSN\" type=\"STRING\" size=\"30\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BOJIK_DEPT_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGNYEON_BOJANG_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"2\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"500\"/><Column id=\"SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSA_HAKWI_GUKGA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"20\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"1\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CONT_YEAR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"6\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"2\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"2\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"10\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"30\"/><Column id=\"GIGWAN_NM\" type=\"STRING\" size=\"50\"/><Column id=\"EOPMU\" type=\"STRING\" size=\"50\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"13\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"13\"/><Column id=\"JAEJIK_GIGAN\" type=\"STRING\" size=\"50\"/><Column id=\"YEONGEUM_GAIP_CD\" type=\"STRING\" size=\"2\"/><Column id=\"UIRYO_BOHEOM\" type=\"STRING\" size=\"100\"/><Column id=\"JEONJIK_GIGWAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"CHULGANG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SUBJ_CODE\" type=\"STRING\" size=\"1000\"/><Column id=\"RSPN_GYOY\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RSPN_LCTR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RSPN_PRCT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"RSPN_UION\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BOJIK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HYEN_CONT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTL_CONT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUBJ_CONT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"WEBB_IPAD\" type=\"STRING\" size=\"30\"/><Column id=\"GYEYEOL_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BOJIK_BUSEO_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikgeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukjeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBojik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHobong", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsToejik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakryeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgyo", this);
            obj._setContents("<ColumnInfo><Column id=\"UNIV_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"UNIV_KNAM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"50\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"2\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"6\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_DVSN\" type=\"STRING\" size=\"30\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BOJIK_DEPT_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGNYEON_BOJANG_CD\" type=\"STRING\" size=\"1\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"2\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"500\"/><Column id=\"SISU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSA_HAKWI_GUKGA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"20\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"1\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CONT_YEAR\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"6\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"2\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"2\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"BOJIK_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYOGWAMOK_NM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIKGEUP_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JIKJONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"GYEONGRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GYEONGRYEOK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HAEDANG_GIGWAN\" type=\"STRING\" size=\"160\"/><Column id=\"GYEONGRYEOK_JIKWI_NM\" type=\"STRING\" size=\"160\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsThisSchlYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">Y</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSadaeBoheomYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미가입</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">가입</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChulgangDonguiYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미동의</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">동의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYeongeumGaipYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">가입</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">미가입</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">초과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06","10","45","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","45","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성명(한글)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNm","112","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","240","45","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("성명(영어)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEnm","342","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","72","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","72","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","99","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","99","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","126","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01","10","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","20","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("소속 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","215","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","10","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("임용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01","10","242","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01","10","242","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("임용시작일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","37","940","8",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","181","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00_01_00","10","153","921","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00_01_00","10","153","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("담당과목");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","470","45","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("성명(한문)");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCnm","572","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","700","45","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("국적");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mdtResNo","112","75","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_format("######-#######");
            obj.set_type("string");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02","240","72","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calBirthday","342","75","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoGender","572","75","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("dsGender");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01","470","72","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSosok","112","102","356","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00","470","99","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("소속발령일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSosokBalryung","572","102","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSangse1","700","102","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("소속발령 상세");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikjong","112","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsJikjong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00","240","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboJikgeup","342","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("dsJikgeup");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_01_00_00","470","126","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("직급임용일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJikgeupBalryung","572","129","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSangse2","700","129","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("직급발령 상세");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDamdangGwamok","112","156","356","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00_00_00_00_00","470","153","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("교양시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGyoyangSisu","542","156","36","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00_00_00_00_00_00","580","153","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("이론시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtIronSisu","652","156","36","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00_00_00_00_00_00_00","690","153","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("실습시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSilseupSisu","762","156","36","22",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_02_00_00_00_00_00_00_00_00","800","153","70","28",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("통합시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTonghabSisu","872","156","36","22",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","190","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("임용정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","207","670","8",null,null,null,null,null,null,this);
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

            obj = new Static("stc_13_00_00_00_01_00_00_00","10","269","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_00","10","269","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("퇴직일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calChoichoImyongDt","328","218","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calImyongFrdt","112","245","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calToejikDt","112","272","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyeyakje","112","218","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboGyeyakje_innerdataset = new nexacro.NormalDataset("cboGyeyakje_innerdataset", obj);
            cboGyeyakje_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">계약중</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">신규임용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">재임용</Col></Row></Rows>");
            obj.set_innerdataset(cboGyeyakje_innerdataset);
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave1","457","218","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","225","242","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("임용종료일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00","225","269","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("퇴직코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_00","225","215","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("최초임용일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calImyongTodt","328","245","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboToejikCd","328","272","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_innerdataset("dsToejik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","655","181","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","685","190","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("채용시 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00","685","215","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00","685","215","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","685","269","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00_00","685","269","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("최종학위취득국");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_01","685","296","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_01","685","296","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("최종학위학교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_01","685","323","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01","685","323","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("최종학위전공명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_00_01","685","350","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_01","685","350","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("학사학위학교");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_00_00_00","685","377","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_00_00","685","377","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("학사학위국가");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakwiHakgyo","798","353","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_innerdataset("dsHakgyo");
            obj.set_codecolumn("UNIV_CODE");
            obj.set_datacolumn("UNIV_KNAM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLastHakryeok","798","218","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_innerdataset("dsHakryeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboLastGukga","798","272","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_innerdataset("dsGukjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLastHakwiHakgyo","798","299","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLastHakwiJeongong","798","326","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHaksaHakwiGukga","798","380","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_innerdataset("dsGukjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGukjeok","802","48","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_innerdataset("dsGukjeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"12","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"12","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01_00_00","685","242","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02_00_00","685","242","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("취득년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYyyy00","798","245","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_00_00_00_00","685","404","246","28",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_00_00_00_00","685","404","110","28",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("본교출신여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","323","297","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("↑\r\n20↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_01","7","299","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("겸임정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00_00","0","316","570","8",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_01_00","10","323","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01_00","10","323","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboThisSchlYn","798","407","129","22",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_innerdataset("dsThisSchlYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00","225","323","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("업무");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_01_00_00","10","350","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_01","225","350","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("HP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01_00_00","10","350","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_text("전화");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_01_00_00_00","10","377","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01_00_00_00","10","377","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_text("재직기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_01_00","225","377","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_text("전직기관명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2","457","245","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave3","457","272","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm","112","326","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm00","328","326","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm01","112","353","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm00_00","328","353","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwanNm00_00_00","328","380","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00_00_00_01_00_00","441","377","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_text("의료보험");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSadaeBoheomYn","544","380","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_innerdataset("dsSadaeBoheomYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_columncount("2");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_01_00_01_00_00_00_00","10","404","645","28",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01_00_00_00_00","10","404","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("출강동의여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_01_00_01_00_00_00_00_00","225","404","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("연금가입여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoChulgangDonguiYn","112","407","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_innerdataset("dsChulgangDonguiYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_columncount("2");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoYeongeumGaipYn","328","407","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_innerdataset("dsYeongeumGaipYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_columncount("3");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskJaejikGigan","112","380","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_format("##년 ##월");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("기초");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtNm","value","dsMaster","SEONGMYEONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtEnm","value","dsMaster","SEONGMYEONG_YEONGMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cboJikjong","value","dsMaster","JIKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtCnm","value","dsMaster","SEONGMYEONG_HANMUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","mdtResNo","value","dsMaster","JUMIN_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","calBirthday","value","dsMaster","BIRTH_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","RdoGender","value","dsMaster","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtSosok","value","dsMaster","SOSOK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","calSosokBalryung","value","dsMaster","BALRYEONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboJikgeup","value","dsMaster","JIKGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","calJikgeupBalryung","value","dsMaster","JIKGEUP_IMYONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edtDamdangGwamok","value","dsMaster","DAMDANG_GWAMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtGyoyangSisu","value","dsMaster","RSPN_GYOY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtIronSisu","value","dsMaster","RSPN_LCTR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edtSilseupSisu","value","dsMaster","RSPN_PRCT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","edtTonghabSisu","value","dsMaster","RSPN_UION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calChoichoImyongDt","value","dsMaster","IMYONG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calImyongFrdt","value","dsMaster","IMYONG_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calToejikDt","value","dsMaster","TOEJIK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","cboGyeyakje","value","dsMaster","IMYONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","calImyongTodt","value","dsMaster","IMYONG_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","cboToejikCd","value","dsMaster","TOEJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","cboHaksaHakwiHakgyo","value","dsMaster","BACH_SCHL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","cboLastHakryeok","value","dsMaster","CHOEJONG_HAKRYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboLastGukga","value","dsMaster","CHOEJONG_HAKRYEOK_GUKGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","edtLastHakwiHakgyo","value","dsMaster","CHOEJONG_HAKWI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","edtLastHakwiJeongong","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","cboHaksaHakwiGukga","value","dsMaster","HAKSA_HAKWI_GUKGA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","cboGukjeok","value","dsMaster","GUKJEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboThisSchlYn","value","dsMaster","THIS_SCHL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtGigwanNm","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edtGigwanNm00","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","edtGigwanNm01","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","edtGigwanNm00_00","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","edtGigwanNm00_00_00","value","dsMaster","CHOEJONG_JEONGONG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","mskJaejikGigan","value","dsMaster","JAEJIK_GIGAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","rdoSadaeBoheomYn","value","dsMaster","SADAE_BOHEOM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","rdoChulgangDonguiYn","value","dsMaster","CHULGANG_DONGUI_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","rdoYeongeumGaipYn","value","dsMaster","YEONGEUM_GAIP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsCopy");
        };
        
        // User Script
        this.registerScript("AM01_3010103_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010103_T01.xfdl(기초)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/23
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
            var strDs    = "dsJikjong|dsJikgeup|dsGukjeok|dsBojik|dsHobong|dsToejik|dsHakryeok|dsGender";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00205|00201|00266|00216|00202|00211|00221|00001";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S|S|S|S|S|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	strDs       = "dsHakgwa";
        	strComb     = "N";
        	svcId       = "HakgwaInit";
        	strUseYn    = "1"; // 사용 여부
        	strJojikGbcd = "20";  // 조직구분 10.행정조직   20.학사조직   30.입시조직
        	strUpDeptCd = "allLv";
        	this.gfn_HakgwaComboLoad(this.cboBojikDept, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);

        };

        this.fn_PostformInit = function()
        {
        	this.fn_HakgyoRet();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
        			case "Post":
                            this.fn_Ret(this.ds_input.getColumn(0, "SABEON"));
                        break;
                    case "Save1":
                            this.fn_PostSave1();
                        break;
        			case "Save2":
                            this.fn_PostSave2();
                        break;
        			case "Save3":
                            this.fn_PostSave3();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 학사학위학교 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_HakgyoRet = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/HakgyoRetrieve_3010101_M.do";
            var strInDs     = "";
            var strOutDs    = "dsHakgyo=dsHakgyo";
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

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(sabeon)
        {
            this.ds_input.setColumn(0, "SABEON", sabeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T01.do";
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

        this.fn_PostRet = function()
        {
        	if (this.dsMaster.rowcount > 0) {
        		var HyenCont = this.dsMaster.getColumn(0, "HYEN_CONT");
        		var TotlCont = this.dsMaster.getColumn(0, "TOTL_CONT");

        		this.edtChongJaejik.set_value(this.gfn_getDayCount(TotlCont, "12"));
        		this.edtHyunGeunsok.set_value(this.gfn_getDayCount(HyenCont, "12"));

        		this.btnSangse1.set_enable(true);
        		this.btnSangse2.set_enable(true);
        		this.btnSangse3.set_enable(true);
        		this.btnSangse4.set_enable(true);
        		this.btnSave1.set_enable(true);
        		this.btnSave1.set_enable(true);
        		this.btnBalryung.set_enable(true);
        	} else {
        		this.btnSangse1.set_enable(false);
        		this.btnSangse2.set_enable(false);
        		this.btnSangse3.set_enable(false);
        		this.btnSangse4.set_enable(false);
        		this.btnSave1.set_enable(false);
        		this.btnSave1.set_enable(false);
        		this.btnBalryung.set_enable(false);
        	}
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
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
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Save_3010101_T01.do";
            var strInDs     = "dsMaster=dsMaster:u";
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

        /**********************************************************************
                06. 최초임용일 적용
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave1 = function()
        {
        	var result = this.gfn_confirm("적용 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save1 = function()
        {
            if(!this.fn_PreSave1())
            {
                return false;
            }
            var strSvc      = "Save1";
            var strUrl      = "/prj/AM/AM01/Save_3010103_T01_1.do";
            var strInDs     = "dsMaster=dsMaster:a ";
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
        this.fn_PostSave1 = function()
        {
            this.alert("최초임용일이 변경되었습니다.");
        };

        /**********************************************************************
                07. 임용기간 적용
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave2 = function()
        {
        	var rowPosition = this.dsMaster.rowposition
        	var sabeon 		= this.dsMaster.getColumn(rowPosition, "SABEON");		// 사번
        	var imyongFrdt 	= this.dsMaster.getColumn(rowPosition, "IMYONG_FRDT");	// 임용시작일자
        	var imyongTodt 	= this.dsMaster.getColumn(rowPosition, "IMYONG_TODT");	// 임용종료일자

            if (this.gfn_isNull(this.gfn_trim(imyongFrdt))) {
        	    this.alert("임용시작일을 입력하세요.");
        		return;
        	}

            if (this.gfn_isNull(this.gfn_trim(imyongTodt))) {
        	    this.alert("임용종료일을 입력하세요.");
        		return;
        	}

        	if (this.gfn_getDiffDate(imyongFrdt, imyongTodt) < 0) {
        	    this.alert("임용종료일이 임용시작일보다 큽니다.");
        		return;
        	}

        	var result = this.gfn_confirm("적용 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save2 = function()
        {
            if(!this.fn_PreSave2())
            {
                return false;
            }
            var strSvc      = "Save2";
            var strUrl      = "/prj/AM/AM01/Save_3010103_T01_2.do";
            var strInDs     = "dsMaster=dsMaster:a ";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave2 = function()
        {
        	this.alert("임용기간이 변경되었습니다.");
        };

        /**********************************************************************
                07. 계약종료일 적용
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave3 = function()
        {
        	var rowPosition = this.dsMaster.rowposition
        	var sabeon 		= this.dsMaster.getColumn(rowPosition, "SABEON");		// 사번
        	var toejikGbcd 	= this.dsMaster.getColumn(rowPosition, "TOEJIK_GBCD");	// 퇴직구분
        	var toejikDt 	= this.dsMaster.getColumn(rowPosition, "TOEJIK_DT");	// 퇴직일자

            if (this.gfn_isNull(this.gfn_trim(toejikGbcd))) {
                    this.alert("계약종료일을 입력하세요.");
        		return;
        	}

            if (this.gfn_isNull(this.gfn_trim(toejikDt))) {
                    this.alert("퇴직코드를 입력하세요.");
        		return;
        	}

        	var result = this.gfn_confirm("적용 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save3 = function()
        {
            if (!this.fn_PreSave3())
            {
                return false;
            }
            var strSvc      = "Save3";
            var strUrl      = "/prj/AM/AM01/Save_3010103_T01_3.do";
            var strInDs     = "dsMaster=dsMaster:a ";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave3 = function()
        {
        	this.alert("계약종료일이 변경되었습니다.");
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        // 취소버튼 클릭시
        this.btnCancel_onclick = function(obj,e)
        {
        	this.dsMaster.reset();
        };

        // 소속발령 상세
        this.btnSangse1_onclick = function(obj,e)
        {
        	var rowpo = this.parent.parent.parent.dsMaster.rowposition;
        	this.dsCopy.copyRow(0, this.parent.parent.parent.dsMaster, rowpo);
        	var oArg = {data:this.dsCopy};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","AM01::AM01_3010103_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        // 직급발령 상세
        this.btnSangse2_onclick = function(obj,e)
        {
        	var rowpo = this.parent.parent.parent.dsMaster.rowposition;
        	this.dsCopy.copyRow(0, this.parent.parent.parent.dsMaster, rowpo);
        	var oArg = {data:this.dsCopy};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","AM01::AM01_3010103_P03.xfdl",oArg,sPopupCallBack,oOption);
        };

        // 보직발령 상세
        this.btnSangse3_onclick = function(obj,e)
        {
        	var rowpo = this.parent.parent.parent.dsMaster.rowposition;
        	this.dsCopy.copyRow(0, this.parent.parent.parent.dsMaster, rowpo);
        	var oArg = {data:this.dsCopy};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","AM01::AM01_3010103_P04.xfdl",oArg,sPopupCallBack,oOption);
        };

        // 휴직/퇴직/복직 상세
        this.btnBalryung_onclick = function(obj,e)
        {
        	var rowpo = this.parent.parent.parent.dsMaster.rowposition;
        	this.dsCopy.copyRow(0, this.parent.parent.parent.dsMaster, rowpo);
        	var oArg = {data:this.dsCopy};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","AM01::AM01_3010103_P05.xfdl",oArg,sPopupCallBack,oOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.stc_13_00_00_00_00_01_00.addEventHandler("onclick",this.tab_00_Tabpage1_stc_13_00_00_00_00_onclick,this);
            this.btnSangse1.addEventHandler("onclick",this.btnSangse1_onclick,this);
            this.btnSangse2.addEventHandler("onclick",this.btnSangse2_onclick,this);
            this.stc_09_00_00.addEventHandler("onclick",this.stc_09_00_00_onclick,this);
            this.cboGyeyakje.addEventHandler("onitemchanged",this.cboGyeyakje_onitemchanged,this);
            this.btnSave1.addEventHandler("onclick",this.fn_Save1,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
            this.spnYyyy00.addEventHandler("onkeydown",this.fn_Enter,this);
            this.stc_09_00_00_01.addEventHandler("onclick",this.stc_09_00_00_onclick,this);
            this.btnSave2.addEventHandler("onclick",this.fn_Save2,this);
            this.btnSave3.addEventHandler("onclick",this.fn_Save3,this);
            this.dsCopy.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsCopy.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("AM01_3010103_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
