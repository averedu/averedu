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
            this.set_titletext("봉사관리");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"20\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"50\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"2\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"6\"/><Column id=\"BOJIK_BUSEO_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"6\"/><Column id=\"MJOR_DVSN\" type=\"STRING\" size=\"30\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_BUSEO2_CD\" type=\"STRING\" size=\"20\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONGNYEON_BOJANG\" type=\"STRING\" size=\"2\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"8\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"2\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"500\"/><Column id=\"SISU\" type=\"BIGDECIMAL\" size=\"3\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"6\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKSA_HAKWI_GUKGA_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"20\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"1\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CONT_YEAR\" type=\"BIGDECIMAL\" size=\"2\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"6\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"2\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"2\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"8\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"10\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"30\"/><Column id=\"BELG_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"ASMT_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"EVAL_GUBN\" type=\"STRING\" size=\"255\"/><Column id=\"SUBJ_CONT\" type=\"STRING\" size=\"255\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"255\"/><Column id=\"JIKGEUP_NM\" type=\"STRING\" size=\"255\"/><Column id=\"JIKJONG_NM\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"255\"/><Column id=\"SABEON\" type=\"STRING\" size=\"255\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"255\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"255\"/><Column id=\"DTL_SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"JIKWON_GBCD\">10</Col><Col id=\"JAEJIK_GBCD\">10</Col><Col id=\"JIKJONG_GBCD\">1010</Col><Col id=\"JIKGEUP_GBCD\"/><Col id=\"SABEON\"/><Col id=\"SEONGMYEONG\"/><Col id=\"GYEYEOL_CD\"/><Col id=\"DEPT_CD\"/><Col id=\"JEONGONG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BONGSA_GBCD\" type=\"STRING\" size=\"4\"/><Column id=\"BONGSA_JONGRYU_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"TODT\" type=\"STRING\" size=\"8\"/><Column id=\"BONGSA_SIGAN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BONGSA_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIGWAN_NM\" type=\"STRING\" size=\"80\"/><Column id=\"BONGSA_SEOLMYEONG\" type=\"STRING\" size=\"1000\"/><Column id=\"SEUNGIN_YEOBU_YN\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdBongsa", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"SABEON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdBongsaDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">승인</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">미승인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyeyeol","95","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyeyeol");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcGyeyeol","0","36","80","22",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stcHakgwa","333","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("학과/학부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","424","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsHakgwa");
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

            obj = new Static("stcJeongong","661","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJeongong","750","36","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsJeongong");
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
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJikwon");
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
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJaejik");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"7","59","25","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stcDept","0","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptCd","95","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDept","225","36","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchDeptNm","257","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","67",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","1","1000","9",null,null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","40","32","1550","5",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","14","59","790","9",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_02","415","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","741","1","10","67",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","951","1","56","68",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00_00_00","1068","1","10","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","79",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("교직원 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","78",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","370","78","30","285",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","397","79","85","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("봉사 현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch1","0","104","369","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
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

            obj = new Grid("grdMaster","0","154","370",null,null,"0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"성명\"/></Band><Band id=\"body\"><Cell text=\"bind:SABEON\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:SEONGMYEONG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staDetailRowCnt","482","78","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","400","104",null,null,"0","0",null,null,"150",null,this);
            obj.set_taborder("22");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"35\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"승인여부\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"봉사구분\"/><Cell col=\"4\" text=\"세부구분\"/><Cell col=\"5\" text=\"기관명\"/><Cell col=\"6\" text=\"시작일\"/><Cell col=\"7\" text=\"종료일\"/><Cell col=\"8\" text=\"봉사시간\"/><Cell col=\"9\" text=\"봉사인원\"/><Cell col=\"10\" text=\"세부설명\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:SEUNGIN_YEOBU_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsSearchYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" expr=\"expr:currow + 1\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGrdBongsa\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" text=\"bind:BONGSA_GBCD\" comboautoselect=\"true\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGrdBongsaDt\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" text=\"bind:BONGSA_JONGRYU_GBCD\" comboautoselect=\"true\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"text\" text=\"bind:GIGWAN_NM\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"date\" edittype=\"date\" text=\"bind:FRDT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:TODT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"text\" text=\"bind:BONGSA_SIGAN\" editinputtype=\"number\" editmaxlength=\"3\"/><Cell col=\"9\" text=\"bind:BONGSA_INWON\" displaytype=\"text\" edittype=\"text\" editinputtype=\"number\" editmaxlength=\"2\"/><Cell col=\"10\" text=\"bind:BONGSA_SEOLMYEONG\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"76","59","25","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("봉사관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
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

            obj = new BindItem("item0","divSearch.form.edtSearchDeptCd","value","ds_input","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchDeptNm","value","ds_input","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("AM02_3010203_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM02_3010203_M.xfdl(봉사관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/28
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
        this.lvchkColidDs   = "BONGSA_GBCD$BONGSA_JONGRYU_GBCD$GIGWAN_NM$FRDT$TODT"; // 필수 입력사항 칼럼ID  예) "commSmcd$commName"
        this.lvchkColNameDs = "봉사구분$봉사세부구분$기관명$시작일$종료일";

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
            var strDs    = "dsSearchJikwon|dsSearchJaejik|dsSearchJikjong|dsSearchJikjeup|dsGrdBongsa|dsGrdBongsaDt";	// 데이터를 받을 데이터셋리스트 예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00207|00208|00205|00201|00267|00268"; 														// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|T|T|S|S"; 																				// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 																							// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// gfn_GyeyeolComboLoad(데이터셋, 콤보 옵션)
        	// 계열콤보
        	strDs       	= "dsGyeyeol";
        	strComb     	= "T";
        	svcId       	= "gyeyeolInit";
        	strUseYn    	= "1";	// 사용 여부
        	strJojikGbcd	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	strDaehakCd 	= "";
        	this.gfn_GyeyeolComboLoad(this.divSearch.form.cboSearchGyeyeol, strComb, svcId, strUseYn, strJojikGbcd, strDaehakCd , objApp.gv_cutPrgId);

        	this.dsSearchJikjeup.set_filterstr("CODE_NM == '전체'");
        };

        this.fn_PostformInit = function()
        {
        	this.divSearch1.form.cboSearchJikjong.set_index(0);
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
                    case "singleInit":
                            this.fn_PostSingleInt();
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
                    case "RetDetail":
                            this.fn_PostRetDetail();
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

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "dept" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DEPT_CD", sRtn[0]);
        		            this.ds_input.setColumn(this.ds_input.rowposition, "DEPT_NM", sRtn[1]);
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
            return true;
        };
        this.fn_PreRetDetail = function()
        {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if (!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM02/Retrieve_3010203_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        this.fn_RetDetail = function()
        {
            if (!this.fn_PreRetDetail()) {
                return false;
            }

            var strSvc      = "RetDetail";
            var strUrl      = "/prj/AM/AM02/Retrieve_3010203_DList.do";
            var strInDs     = "ds_input=ds_inputDetail";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        this.fn_PostRetDetail = function()
        {
            this.gfn_getRowCount(this.staDetailRowCnt, this.dsDetail);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if (this.dsMaster.rowcount == 0) {
        	    this.alert("교직원을 먼저 선택해주세요.");
        		return;
        	}

            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

            var nRow = this.dsDetail.addRow();
        	this.dsDetail.setColumn(nRow, "SABEON", 				this.dsMaster.getColumn(this.dsMaster.rowposition, "SABEON"));
        	this.dsDetail.setColumn(nRow, "BONGSA_GBCD", 			"");
        	this.dsDetail.setColumn(nRow, "BONGSA_JONGRYU_GBCD", 	"");
        	this.dsDetail.setColumn(nRow, "SEUNGIN_YEOBU_YN", 		"1");
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function()
        {
        	/*
            //멀티삭제용도
            if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
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
            this.dsDetail.set_enableevent(false);
            for(var i=this.dsDetail.rowcount-1;i>-1;i--)
            {
                if(this.dsDetail.getColumn(i,"CHK") == "1" || this.dsDetail.getRowType(i) == 2)
                {
                    this.dsDetail.deleteRow(i);
                }
            }
            this.dsDetail.set_enableevent(true);
        	*/

            //개별삭제시
            this.dsDetail.deleteRow(this.dsDetail.rowposition);
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
            var strUrl      = "/prj/AM/AM02/Delete_3010203_MList.do";
            var strInDs     = "dsMaster=dsDetail:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staDetailRowCnt, this.dsDetail);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsDetail.rowcount > 0)
            {
                for(var i=0;i<this.dsDetail.rowcount; i++)
                {
                    if(this.dsDetail.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsDetail.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }


        	for (var i = 0; i < this.dsDetail.rowcount; i++) {
        		var frdt = this.dsDetail.getColumn(i, "FRDT");
        		var todt = this.dsDetail.getColumn(i, "TODT");
        		if (!this.gfn_isNull(this.gfn_trim(todt)) && this.gfn_getDiffDate(frdt, todt) < 0) {
        			this.alert("시작일이 종료일보다 큽니다. 순번 :" + (i + 1));
        			return;
        		}
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0) {
        		return false;
        	}

        	return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if (!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/AM/AM02/Save_3010203_MList.do";
            var strInDs     = "ds_input=ds_inputDetail:a ";
                strInDs    += "dsMaster=dsDetail:u";
            var strOutDs    = "dsDetail=dsMaster";
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
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staDetailRowCnt, this.dsDetail);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        // /부서 팝업
        this.btnDept_onclick = function(obj,e)
        {
        	var deptCdNm = this.divSearch.form.edtSearchDeptNm.value;
        	this.fn_setCallDeptPopup("DEPT_CD_NM", deptCdNm)
        };

        this.fn_setCallDeptPopup = function(strColumnName, strSearchValue)
        {
        	this.dsDept.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DEPT_CD_NM", strSearchValue);
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "USE_YN", "1");

        	if (!this.gfn_isNull(strSearchValue)) {
        		var strSvc      = "SearchDept";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs     = "ds_input=ds_input1";
        		var strOutDs    = "dsDept=dsMaster";
        		var strArg      = "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        	}

        	if(this.dsDept.rowcount == 1) {
        		this.ds_input.setColumn(this.ds_input.rowposition, "DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else {
        		var oArg 			= {deptCdNm:strSearchValue, useYn:"1"};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("dept", "com::COMM_P01.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // 학과 필터 적용
        this.divSearch_cboSearchGyeyeol_onitemchanged = function(obj,e)
        {
        	// gfn_HakgwaComboLoad(데이터셋, 콤보 옵션)
        	// 학과콤보
        	var strDs       	= "dsHakgwa";
        	var strComb     	= "T";
        	var svcId       	= "hakgwaInit";
        	var strUseYn    	= "1"; 	// 사용 여부
        	var strJojikGbcd 	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strUpDeptCd		= (this.gfn_isNull(e.postvalue) ? "" : e.postvalue);
        	this.gfn_HakgwaComboLoad(this.divSearch.form.cboSearchHakgwa, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        // 전공 필터 적용
        this.divSearch_cboSearchHakgwa_onitemchanged = function(obj,e)
        {
        	// gfn_JeongongComboLoad(데이터셋, 콤보 옵션)
        	// 전공콤보
        	var strDs       	= "dsJeongong";
        	var strComb    	 	= "T";
        	var svcId       	= "jeongongInit";
        	var strUseYn    	= "1"; 	// 사용 여부
        	var strJojikGbcd 	= "20";	// 조직구분 - 10.행정조직 20.학사조직 30.입시조직
        	var strUpDeptCd		= (this.gfn_isNull(e.postvalue) ? "" : e.postvalue);
        	this.gfn_JeongongComboLoad(this.divSearch.form.cboSearchJeongong, strComb, svcId, strUseYn, strJojikGbcd, strUpDeptCd, objApp.gv_cutPrgId);
        };

        this.divSearch1_cboSearchJikjong_onitemchanged = function(obj,e)
        {
        	// 직급 필터
        	this.dsSearchJikjeup.set_filterstr("REF_3 == '" + obj.value + "' || CODE_NM == '전체'");
        	// 조회목록 필터
        	if (this.gfn_isNull(obj.value)) {
        		this.dsMaster.set_filterstr("");
        		this.divSearch1.form.cboSearchJikgeup.set_index(0);
        	} else {
        		this.dsMaster.set_filterstr("JIKJONG_GBCD == '" + obj.value + "'");
        	}
        	this.fn_PostRet();
        };

        // 상세목록 조회
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.ds_inputDetail.setColumn(0, "SABEON", this.dsMaster.getColumn(this.dsMaster.rowposition, "SABEON"));
        	this.fn_RetDetail();
        };

        this.divSearch1_cboSearchJikgeup_onitemchanged = function(obj,e)
        {
        	// 조회목록 필터
        	if (this.gfn_isNull(obj.value)) {
        		this.dsMaster.set_filterstr("JIKJONG_GBCD == '" + this.divSearch1.form.cboSearchJikjong.value + "'");
        	} else {
        		this.dsMaster.set_filterstr("JIKGEUP_GBCD == '" + obj.value + "'");
        	}
        	this.fn_PostRet();
        };

        this.divSearch_cboSearchJikwon_onitemchanged = function(obj,e)
        {
        	if (obj.value == "20") { // 직원구분 - 직원
        		// 계열
        		this.divSearch.form.stcGyeyeol.set_visible(false);
        		this.divSearch.form.cboSearchGyeyeol.set_visible(false);

        		// 학과
        		this.divSearch.form.stcHakgwa.set_visible(false);
        		this.divSearch.form.cboSearchHakgwa.set_visible(false);

        		// 전공
        		this.divSearch.form.stcJeongong.set_visible(false);
        		this.divSearch.form.cboSearchJeongong.set_visible(false);

        		// 부서
        		this.divSearch.form.stcDept.set_visible(true);
        		this.divSearch.form.edtSearchDeptCd.set_visible(true);
        		this.divSearch.form.btnDept.set_visible(true);
        		this.divSearch.form.edtSearchDeptNm.set_visible(true);
        	} else {
        		// 계열
        		this.divSearch.form.stcGyeyeol.set_visible(true);
        		this.divSearch.form.cboSearchGyeyeol.set_visible(true);

        		// 학과
        		this.divSearch.form.stcHakgwa.set_visible(true);
        		this.divSearch.form.cboSearchHakgwa.set_visible(true);

        		// 전공
        		this.divSearch.form.stcJeongong.set_visible(true);
        		this.divSearch.form.cboSearchJeongong.set_visible(true);

        		// 부서
        		this.divSearch.form.stcDept.set_visible(false);
        		this.divSearch.form.edtSearchDeptCd.set_visible(false);
        		this.divSearch.form.btnDept.set_visible(false);
        		this.divSearch.form.edtSearchDeptNm.set_visible(false);
        	}
        };

        this.divSearch_btnReset_onclick = function(obj,e)
        {
        	this.ds_input.clearData();
        	this.ds_input.addRow();
        	this.ds_input.setColumn(0, "JIKWON_GBCD", "10");
        	this.ds_input.setColumn(0, "JAEJIK_GBCD", "10");
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm("변경내용을 초기화하시겠습니까?", "취소", "", "question");
        	if(result == 0) {
        		return;
        	}

        	this.dsDetail.reset();
        };

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                13. 검색창 엔터키 조회
        ***********************************************************************/
        this.fn_Enter = function(obj, e)
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
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyeyeol.addEventHandler("onitemchanged",this.divSearch_cboSearchGyeyeol_onitemchanged,this);
            this.divSearch.form.edtSearchGyojikwonNo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.cboSearchJeongong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.edtSearchGyojikwonNm.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJikwon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJikwon.addEventHandler("onitemchanged",this.divSearch_cboSearchJikwon_onitemchanged,this);
            this.divSearch.form.cboSearchJaejik.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.btnReset.addEventHandler("onclick",this.divSearch_btnReset_onclick,this);
            this.divSearch.form.btnDept.addEventHandler("onclick",this.btnDept_onclick,this);
            this.divSearch1.form.cboSearchJikjong.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch1.form.cboSearchJikjong.addEventHandler("onitemchanged",this.divSearch1_cboSearchJikjong_onitemchanged,this);
            this.divSearch1.form.cboSearchJikgeup.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch1.form.cboSearchJikgeup.addEventHandler("onitemchanged",this.divSearch1_cboSearchJikgeup_onitemchanged,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("AM02_3010203_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
