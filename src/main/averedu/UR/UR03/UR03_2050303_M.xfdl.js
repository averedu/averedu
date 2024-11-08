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
            this.set_titletext("등록대상자/가상계좌생성(재학생)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_DAESANG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BUNNAP_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDaesang", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBunnap", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Div("divBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSelect","10","30",null,"190","10",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnDaesang","260","145","110","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("7");
            obj.set_text("등록대상자생성");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_Crud");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Button("btnGyejwa","390","145","110","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("8");
            obj.set_text("가상계좌 부여");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_Crud");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","40",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","40","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("10");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","68",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","68","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("12");
            obj.set_text("등록대상구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","96",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","96","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("14");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","380","40","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("15");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","380","68","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("16");
            obj.set_text("분할납부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","547","43",null,"22","11",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboDaesang","177","71","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDaesang");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboNapbu","547","71",null,"22","11",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsBunnap");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore","-9","10","408","20",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("17");
            obj.set_text("※대상 년도, 학기의 가상계좌 부여 및 등록대상자를 생성합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_visible("true");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Spin("spnDeungrokYYYY","177","43","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtHakbeon","177",null,"200","22",null,"67",null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_maxlength("3");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Button("btnHaksaeng","379",null,"22","22",null,"67",null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtNm","403",null,"200","22",null,"67",null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_maxlength("10");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","22","290","8",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("0");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stc_05","10","5","220","22",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("1");
            obj.set_text("등록대상자 및 가상 계좌 생성");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","770","0",null,null,"0","0",null,null,null,null,this.divBg.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this.divBg.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록대상자/가상계좌생성(재학생)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBg.form.divSelect.form.cboHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBg.form.divSelect.form.cboDaesang","value","ds_input","DEUNGROK_DAESANG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBg.form.divSelect.form.cboNapbu","value","ds_input","BUNNAP_CHASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBg.form.divSelect.form.spnDeungrokYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divBg.form.divSelect.form.edtHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divBg.form.divSelect.form.edtNm","value","ds_input","HAKSAENG_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsResult");
            this._addPreloadList("data","","dsDeungrok");
        };
        
        // User Script
        this.registerScript("UR03_2050303_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR03_2050303_M.xfdl(등록 가상 계좌 관리(재학) 관리(조회))
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
            var strDs    = "dsHakgi|dsDaesang|dsBunnap";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|03012|03015";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "DEUNGROK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    case "Saengsung":
                            this.fn_PostSaengsung();
                        break;
                    case "Gyejwa":
                            this.fn_PostGyejwa();
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

        /**********************************************************************
                05. 등록 대상자 생성
        ***********************************************************************/
        this.fn_PreSaengsung = function()
        {
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
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_DAESANG_GBCD")))
        	{
        		this.alert("등록대상구분을 선택해주세요.");
        		return false;
        	}

        	var result = this.gfn_confirm( "대상자를 생성하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            return true;
        };

        this.fn_Saengsung = function()
        {
            if(!this.fn_PreSaengsung())
            {
                return false;
            }
        	var strSvc      = "Saengsung";
        	var strUrl      = "/prj/UR/UR03/Saengsung_2050303_M.do";
        	var strInDs     = "ds_input=ds_input";
        	var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostSaengsung = function()
        {
            this.alert(this.dsResult.getColumn(0,'OUT_MSG'));
        };

        /**********************************************************************
                06. 가상계좌 부여
        ***********************************************************************/
        this.fn_PreGyejwa = function()
        {
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
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_DAESANG_GBCD")))
        	{
        		this.alert("등록대상구분을 선택해주세요.");
        		return false;
        	}

        	var strSvc      = "Ret";
            var strUrl      = "/prj/UR/UR03/Retrieve_2050303_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeungrok=dsDeungrok";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

            var result = this.gfn_confirm( "가상계좌 생성 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	this.ds_input.setColumn(0, "DEUNGROK_FRDT", this.dsDeungrok.getColumn(0, "DEUNGROK_FRDT"));
        	this.ds_input.setColumn(0, "DEUNGROK_TODT", this.dsDeungrok.getColumn(0, "DEUNGROK_TODT"));

            return true;
        };

        this.fn_Gyejwa = function()
        {
            if(!this.fn_PreGyejwa())
            {
                return false;
            }
            var strSvc      = "Gyejwa";
            var strUrl      = "/prj/UR/UR03/Gyejwa_2050303_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostGyejwa = function()
        {
            this.alert(this.dsResult.getColumn(0,'OUT_MSG'));
        };

        /**********************************************************************
                07. 팝업
        ***********************************************************************/
        this.divBg_divSelect_btnHaksaeng_onclick = function(obj,e)
        {
        	var hakbeonNm = this.divBg.form.divSelect.form.edtNm.value;
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
        this.divBg_divSelect_cboDaesang_onitemchanged = function(obj,e)
        {
        	if(this.ds_input.getColumn(0, "HAKGI") == '11' || this.ds_input.getColumn(0, "HAKGI") == '21')
        	{
        		if(!this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_DAESANG_GBCD")) && this.ds_input.getColumn(0, "DEUNGROK_DAESANG_GBCD") != '03')
        		{
        			this.divBg.form.divSelect.form.cboNapbu.set_enable(true);
        		}
        		else
        		{
        			this.divBg.form.divSelect.form.cboNapbu.set_enable(false);
        			this.divBg.form.divSelect.form.cboNapbu.set_index(0);
        		}
        	}
        	else
        	{
        		this.divBg.form.divSelect.form.cboNapbu.set_enable(false);
        		this.divBg.form.divSelect.form.cboNapbu.set_index(0);
        	}
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divBg.form.divSelect.form.btnDaesang.addEventHandler("onclick",this.fn_Saengsung,this);
            this.divBg.form.divSelect.form.btnGyejwa.addEventHandler("onclick",this.fn_Gyejwa,this);
            this.divBg.form.divSelect.form.cboDaesang.addEventHandler("onitemchanged",this.divBg_divSelect_cboDaesang_onitemchanged,this);
            this.divBg.form.divSelect.form.btnHaksaeng.addEventHandler("onclick",this.divBg_divSelect_btnHaksaeng_onclick,this);
            this.divBg.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UR03_2050303_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
