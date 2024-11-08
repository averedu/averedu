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
            this.set_titletext("담당자/강사");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG_HANMUN\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG_YEONGMUN\" type=\"STRING\" size=\"256\"/><Column id=\"JUMIN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BIRTH_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"GUKJEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJIK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"IMYONG_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"IMYONG_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"IMYONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IMYONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONG_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_IMYONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_DVSN\" type=\"STRING\" size=\"256\"/><Column id=\"BALRYEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_IMYONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGNYEON_BOJANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYAKJE_GUBUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HOBONG_SEUNGGEUP_MM\" type=\"STRING\" size=\"256\"/><Column id=\"GEUB_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HYUJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HYUJIK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"HYUJIK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"TOEJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"TOEJIK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DAMDANG_GWAMOK\" type=\"STRING\" size=\"256\"/><Column id=\"SISU\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_HAKRYEOK_GUKGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_HAKRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_HAKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSA_HAKWI_GUKGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BACH_SCHL\" type=\"STRING\" size=\"256\"/><Column id=\"THIS_SCHL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONG_JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKRYEOK\" type=\"STRING\" size=\"256\"/><Column id=\"SEUNGGEUP_DT\" type=\"STRING\" size=\"256\"/><Column id=\"YEONGEUM_GAIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SADAE_BOHEOM_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CONT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SEON_YUMU\" type=\"STRING\" size=\"256\"/><Column id=\"TRAN_CHCK\" type=\"STRING\" size=\"256\"/><Column id=\"WEBB_YUMU\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SABEON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JAEJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJaejik", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikjong", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJikgeub", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","100",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"63\"/><Column size=\"106\"/><Column size=\"230\"/><Column size=\"116\"/><Column size=\"93\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"성명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"생년월일\"/><Cell col=\"4\" text=\"재직구분\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SABEON\" editmaxlength=\"10\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEONGMYEONG\" editmaxlength=\"20\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DEPT_NM\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:BIRTH_DT\" editmaxlength=\"8\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:JAEJIK_GBNM\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","630",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","565",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"69","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-38","9","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사번/성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchSabeonNm","91","9","135","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","215","9","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("재직구분");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","-6","36","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("직원구분");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","215","37","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("직종");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","414","38","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("직급");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJaejik","310","9","135","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsJaejik");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikwon","91","36","135","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsJikwon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikjong","310","36","135","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsJikjong");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJikgeub","514","36","137","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsJikgeub");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0","650","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","81","-9","10","87",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","19","58","650","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02","10","31","640","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","226","0","27","77",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","301","-9","10","87",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","445","0","27","77",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","504","-9","10","87",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","591","6","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","651","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10",null,"233","24",null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("담당자/강사");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchJaejik","value","ds_input","JAEJIK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchJikwon","value","ds_input","JIKWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchJikjong","value","ds_input","JIKJONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchJikgeub","value","ds_input","JIKGEUP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchSabeonNm","value","ds_input","SABEON_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P02_P02.xfdl(기본인사(SDB_MA1000) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/23
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

        	if( !this.gfn_isNull(this.getOwnerFrame().sabeonNm)){
        		this.ds_input.setColumn(0, "SABEON_NM", this.getOwnerFrame().sabeonNm);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsJaejik|dsJikwon|dsJikjong|dsJikgeub";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00208|00207|00205|00201";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|T|T|T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/com/Retrieve_P02.do";
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
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(62);

        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SABEON");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEONGMYEONG");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_NM");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEONGMYEONG_HANMUN");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEONGMYEONG_YEONGMUN");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUMIN_NO");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BIRTH_DT");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GENDER");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GUKJEOK_GBCD");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JAEJIK_GBCD");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JAEJIK_GBNM");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKWON_GBCD");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IMYONG_FRDT");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IMYONG_TODT");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IMYONG_DT");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IMYONG_GBCD");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKJONG_GBCD");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKJONG_GBNM");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKGEUP_GBCD");
        	objRtnArr[19] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKGEUP_IMYONG_DT");
        	objRtnArr[20] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEYEOL_CD");
        	objRtnArr[21] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_CD");
        	objRtnArr[22] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_CD");
        	objRtnArr[23] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGONG_DVSN");
        	objRtnArr[24] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BALRYEONG_DT");
        	objRtnArr[25] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOJIK_CD");
        	objRtnArr[26] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOJIK_DEPT_CD");
        	objRtnArr[27] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BOJIK_IMYONG_DT");
        	objRtnArr[28] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEONGNYEON_BOJANG_CD");
        	objRtnArr[29] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEYAKJE_GUBUN_YN");
        	objRtnArr[30] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKWI_GBCD");
        	objRtnArr[31] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIKWI_DT");
        	objRtnArr[32] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOBONG_GBCD");
        	objRtnArr[33] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOBONG_SEUNGGEUP_MM");
        	objRtnArr[34] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GEUB_DATE");
        	objRtnArr[35] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HYUJIK_GBCD");
        	objRtnArr[36] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HYUJIK_FRDT");
        	objRtnArr[37] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HYUJIK_TODT");
        	objRtnArr[38] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TOEJIK_GBCD");
        	objRtnArr[39] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TOEJIK_DT");
        	objRtnArr[40] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DAMDANG_GWAMOK");
        	objRtnArr[41] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SISU");
        	objRtnArr[42] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHOEJONG_HAKRYEOK_GUKGA_GBCD");
        	objRtnArr[43] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHOEJONG_HAKRYEOK_GBCD");
        	objRtnArr[44] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHWIDEUK_YYYY");
        	objRtnArr[45] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHOEJONG_HAKWI_NM");
        	objRtnArr[46] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSA_HAKWI_GUKGA_GBCD");
        	objRtnArr[47] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BACH_SCHL");
        	objRtnArr[48] = this.dsMaster.getColumn(this.dsMaster.rowposition, "THIS_SCHL_YN");
        	objRtnArr[49] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHOEJONG_JEONGONG_NM");
        	objRtnArr[50] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKRYEOK");
        	objRtnArr[51] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEUNGGEUP_DT");
        	objRtnArr[52] = this.dsMaster.getColumn(this.dsMaster.rowposition, "YEONGEUM_GAIP_YN");
        	objRtnArr[53] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SADAE_BOHEOM_YN");
        	objRtnArr[54] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CONT_YEAR");
        	objRtnArr[55] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEON_YUMU");
        	objRtnArr[56] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TRAN_CHCK");
        	objRtnArr[57] = this.dsMaster.getColumn(this.dsMaster.rowposition, "WEBB_YUMU");
        	objRtnArr[58] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEORI_DT");
        	objRtnArr[59] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEORIJA");
        	objRtnArr[60] = this.dsMaster.getColumn(this.dsMaster.rowposition, "WEP_SUJEONG_DT");
        	objRtnArr[61] = this.dsMaster.getColumn(this.dsMaster.rowposition, "WEP_SUJEONG_IP");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchSabeonNm_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchSabeonNm")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"SABEON_NM",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.edtSearchSabeonNm.addEventHandler("onkeydown",this.divSearch_edtSearchSabeonNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COMM_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
