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
            this.set_titletext("경력");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"TODT\" type=\"STRING\" size=\"256\"/><Column id=\"HAEDANG_GIGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"GYOYUK_GIGWAN_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SOSOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGRYEOK_NYEONSU\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGRYEOK_WOLSU\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGRYEOK_ILSU\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSANYUL\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_NYEONSU\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_WOLSU\" type=\"STRING\" size=\"256\"/><Column id=\"INJEONG_ILSU\" type=\"STRING\" size=\"256\"/><Column id=\"JUDANG_GANGUI_SIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"JAEDAN_GYEONGRYEOK_YEOBU\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAEJIK_GUBUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAEJIK_ILSU\" type=\"STRING\" size=\"256\"/><Column id=\"GYEONGRYEOKNYEONSU\" type=\"STRING\" size=\"256\"/><Column id=\"HWANSANNYEONSU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsGyeongryeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyoyuk", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","7","10","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("재직 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","10","35","1101","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","10","35","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경력구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","5","27","700","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","313","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","63","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","72","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("경력 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","89","670","8",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSijakDt","342","38","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01","240","35","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("시작일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtJikwi","982","38","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01_00","470","35","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("해당기관");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGigwan","572","38","306","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_01_00_00","880","35","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGyeongryeok","112","38","126","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("dsGyeongryeok");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","97",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"84\"/><Column size=\"84\"/><Column size=\"120\"/><Column size=\"96\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"경력구분\"/><Cell col=\"2\" text=\"재직구분\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" text=\"해당기관\"/><Cell col=\"6\" text=\"교육경력구분\"/><Cell col=\"7\" text=\"소속명\"/><Cell col=\"8\" text=\"직위\"/><Cell col=\"9\" text=\"전공\"/><Cell col=\"10\" text=\"주당수업시간\"/><Cell col=\"11\" text=\"인정년수변경\"/><Cell col=\"12\" text=\"경력년수\"/><Cell col=\"13\" text=\"환산율\"/><Cell col=\"14\" text=\"환산년수\"/><Cell col=\"15\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:GYEONGRYEOK_GBCD\" displaytype=\"combotext\" combodataset=\"dsGyeongryeok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" expr=\"expr:(HYEONJAEJIK_GUBUN_YN ==&apos;1&apos;)? &apos;재직 중&apos;:&apos; &apos;\"/><Cell col=\"3\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:TODT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:HAEDANG_GIGWAN\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:GYOYUK_GIGWAN_GBCD\" combodataset=\"dsGyoyuk\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:SOSOK_NM\"/><Cell col=\"8\" text=\"bind:JIKWI_NM\"/><Cell col=\"9\" text=\"bind:JEONGONG_NM\"/><Cell col=\"10\" text=\"bind:JUDANG_GANGUI_SIGAN\"/><Cell col=\"11\" text=\"bind:INJEONG_NYEONSU\" maskeditformat=\"##.##.##\" displaytype=\"mask\"/><Cell col=\"12\" displaytype=\"text\" expr=\"expr:dataset.parent.gfn_getDayCount(nexacro.toNumber(dataset.getColumn(currow,&quot;INJEONG_ILSU&quot;)),&quot;11&quot;)\"/><Cell col=\"13\" text=\"bind:HWANSANYUL\"/><Cell col=\"14\" displaytype=\"text\" expr=\"expr:dataset.parent.gfn_getDayCount(nexacro.round(nexacro.toNumber(dataset.getColumn(currow,&quot;INJEONG_ILSU&quot;))*(nexacro.toNumber(dataset.getColumn(currow,&quot;HWANSANYUL&quot;))/100),0), &quot;11&quot;)\"/><Cell col=\"15\" text=\"bind:BIGO\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"총경력\"/><Cell col=\"2\" text=\"교육경력:\"/><Cell col=\"3\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;10&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell col=\"4\" text=\"실무경력:\"/><Cell col=\"5\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;40&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell row=\"1\" colspan=\"2\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getSum(&quot;nexacro.toNumber(INJEONG_ILSU)&quot;), &quot;12&quot;)\"/><Cell row=\"1\" col=\"2\" text=\"연구경력:\"/><Cell row=\"1\" col=\"3\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;20&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell row=\"1\" col=\"4\" text=\"창작경력:\"/><Cell row=\"1\" col=\"5\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;50&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/><Cell row=\"1\" col=\"13\"/><Cell row=\"1\" col=\"14\"/><Cell row=\"1\" col=\"15\"/><Cell row=\"2\" rowspan=\"2\" colspan=\"2\"/><Cell row=\"2\" col=\"2\" text=\"일반경력:\"/><Cell row=\"2\" col=\"3\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;30&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell row=\"2\" col=\"4\" text=\"군 경 력:\"/><Cell row=\"2\" col=\"5\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;60&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell row=\"2\" col=\"6\"/><Cell row=\"2\" col=\"7\"/><Cell row=\"2\" col=\"8\"/><Cell row=\"2\" col=\"9\"/><Cell row=\"2\" col=\"10\"/><Cell row=\"2\" col=\"11\"/><Cell row=\"2\" col=\"12\"/><Cell row=\"2\" col=\"13\"/><Cell row=\"2\" col=\"14\"/><Cell row=\"2\" col=\"15\"/><Cell row=\"3\" col=\"2\"/><Cell row=\"3\" col=\"3\"/><Cell row=\"3\" col=\"4\" text=\"기타경력:\"/><Cell row=\"3\" col=\"5\" expr=\"expr:dataset.parent.gfn_getDayCount(dataset.getCaseSum(&quot;GYEONGRYEOK_GBCD==&apos;70&apos;&quot;,&quot;nexacro.toNumber(INJEONG_ILSU)&quot;),&quot;12&quot;)\"/><Cell row=\"3\" col=\"6\"/><Cell row=\"3\" col=\"7\"/><Cell row=\"3\" col=\"8\"/><Cell row=\"3\" col=\"9\"/><Cell row=\"3\" col=\"10\"/><Cell row=\"3\" col=\"11\"/><Cell row=\"3\" col=\"12\"/><Cell row=\"3\" col=\"13\"/><Cell row=\"3\" col=\"14\"/><Cell row=\"3\" col=\"15\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("경력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","calSijakDt","value","dsMaster","FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtJikwi","value","dsMaster","JIKWI_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtGigwan","value","dsMaster","HAEDANG_GIGWAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cboGyeongryeok","value","dsMaster","GYEONGRYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010102_T03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010102_T03.xfdl(경력)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/18
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
            var strDs    = "dsGyeongryeok|dsGyoyuk";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00214|00217";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    default:
                        break;
                }
            }
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
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T03.do";
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

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
        };
        this.loadIncludeScript("AM01_3010102_T03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
