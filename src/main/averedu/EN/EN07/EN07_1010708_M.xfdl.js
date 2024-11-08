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
            this.set_titletext("모집전체등록현황");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JU_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YA_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_Y_JEONGWON_2_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_Y_JEONGWON_2_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_Y_JEONGWON_3_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_Y_JEONGWON_3_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_B_JEONGWON_2_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_B_JEONGWON_2_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_B_JEONGWON_3_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUSI_B_JEONGWON_3_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_1_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_1_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_2_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_2_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_3_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_1_JEONGWON_3_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_1_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_1_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_2_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_2_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_3_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_2_JEONGWON_3_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_1_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_1_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_2_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_2_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_3_JU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JEONGSI_A_JEONGWON_3_YA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_1_J\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_1_Y\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_2_J\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_2_Y\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_3_J\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_3_Y\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_NOTDEUNGROK_J\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_NOTDEUNGROK_Y\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전체 등록 현황 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","157","51",null,"24","1360",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"모집학과\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" text=\"모집정원\"/><Cell col=\"3\" colspan=\"4\" text=\"수시 예치금등록\"/><Cell col=\"7\" colspan=\"4\" text=\"수시 최초등록\"/><Cell col=\"11\" colspan=\"6\" text=\"정시 1차 등록\"/><Cell col=\"17\" colspan=\"6\" text=\"정시 2차 등록\"/><Cell col=\"23\" colspan=\"6\" text=\"* 정시 전체 등록\"/><Cell col=\"29\" colspan=\"6\" text=\"전형 합산 총계\"/><Cell col=\"35\" rowspan=\"2\" colspan=\"2\" text=\"미등록\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" text=\"일반전형\"/><Cell row=\"1\" col=\"13\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"15\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"1\" col=\"17\" colspan=\"2\" text=\"일반전형\"/><Cell row=\"1\" col=\"19\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"21\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"1\" col=\"23\" colspan=\"2\" text=\"일반전형\"/><Cell row=\"1\" col=\"25\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"27\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"1\" col=\"29\" colspan=\"2\" text=\"일반전형\"/><Cell row=\"1\" col=\"31\" colspan=\"2\" text=\"정원 내\"/><Cell row=\"1\" col=\"33\" colspan=\"2\" text=\"정원 외\"/><Cell row=\"2\" col=\"1\" text=\"주간\"/><Cell row=\"2\" col=\"2\" text=\"야간\"/><Cell row=\"2\" col=\"3\" text=\"주간\"/><Cell row=\"2\" col=\"4\" text=\"야간\"/><Cell row=\"2\" col=\"5\" text=\"주간\"/><Cell row=\"2\" col=\"6\" text=\"야간\"/><Cell row=\"2\" col=\"7\" text=\"주간\"/><Cell row=\"2\" col=\"8\" text=\"야간\"/><Cell row=\"2\" col=\"9\" text=\"주간\"/><Cell row=\"2\" col=\"10\" text=\"야간\"/><Cell row=\"2\" col=\"11\" text=\"주간\"/><Cell row=\"2\" col=\"12\" text=\"야간\"/><Cell row=\"2\" col=\"13\" text=\"주간\"/><Cell row=\"2\" col=\"14\" text=\"야간\"/><Cell row=\"2\" col=\"15\" text=\"주간\"/><Cell row=\"2\" col=\"16\" text=\"야간\"/><Cell row=\"2\" col=\"17\" text=\"주간\"/><Cell row=\"2\" col=\"18\" text=\"야간\"/><Cell row=\"2\" col=\"19\" text=\"주간\"/><Cell row=\"2\" col=\"20\" text=\"야간\"/><Cell row=\"2\" col=\"21\" text=\"주간\"/><Cell row=\"2\" col=\"22\" text=\"야간\"/><Cell row=\"2\" col=\"23\" text=\"주간\"/><Cell row=\"2\" col=\"24\" text=\"야간\"/><Cell row=\"2\" col=\"25\" text=\"주간\"/><Cell row=\"2\" col=\"26\" text=\"야간\"/><Cell row=\"2\" col=\"27\" text=\"주간\"/><Cell row=\"2\" col=\"28\" text=\"야간\"/><Cell row=\"2\" col=\"29\" text=\"주간\"/><Cell row=\"2\" col=\"30\" text=\"야간\"/><Cell row=\"2\" col=\"31\" text=\"주간\"/><Cell row=\"2\" col=\"32\" text=\"야간\"/><Cell row=\"2\" col=\"33\" text=\"주간\"/><Cell row=\"2\" col=\"34\" text=\"야간\"/><Cell row=\"2\" col=\"35\" text=\"주간\"/><Cell row=\"2\" col=\"36\" text=\"야간\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_NM\"/><Cell col=\"1\" text=\"bind:JU_JEONGWON\"/><Cell col=\"2\" text=\"bind:YA_JEONGWON\"/><Cell col=\"3\" text=\"bind:SUSI_Y_JEONGWON_2_JU\"/><Cell col=\"4\" text=\"bind:SUSI_Y_JEONGWON_2_YA\"/><Cell col=\"5\" text=\"bind:SUSI_Y_JEONGWON_3_JU\"/><Cell col=\"6\" text=\"bind:SUSI_Y_JEONGWON_3_YA\"/><Cell col=\"7\" text=\"bind:SUSI_B_JEONGWON_2_JU\"/><Cell col=\"8\" text=\"bind:SUSI_B_JEONGWON_2_YA\"/><Cell col=\"9\" text=\"bind:SUSI_B_JEONGWON_3_JU\"/><Cell col=\"10\" text=\"bind:SUSI_B_JEONGWON_3_YA\"/><Cell col=\"11\" text=\"bind:JEONGSI_1_JEONGWON_1_JU\"/><Cell col=\"12\" text=\"bind:JEONGSI_1_JEONGWON_1_YA\"/><Cell col=\"13\" text=\"bind:JEONGSI_1_JEONGWON_2_JU\"/><Cell col=\"14\" text=\"bind:JEONGSI_1_JEONGWON_2_YA\"/><Cell col=\"15\" text=\"bind:JEONGSI_1_JEONGWON_3_JU\"/><Cell col=\"16\" text=\"bind:JEONGSI_1_JEONGWON_3_YA\"/><Cell col=\"17\" text=\"bind:JEONGSI_2_JEONGWON_1_JU\"/><Cell col=\"18\" text=\"bind:JEONGSI_2_JEONGWON_1_YA\"/><Cell col=\"19\" text=\"bind:JEONGSI_2_JEONGWON_2_JU\"/><Cell col=\"20\" text=\"bind:JEONGSI_2_JEONGWON_2_YA\"/><Cell col=\"21\" text=\"bind:JEONGSI_2_JEONGWON_3_JU\"/><Cell col=\"22\" text=\"bind:JEONGSI_2_JEONGWON_3_YA\"/><Cell col=\"23\" text=\"bind:JEONGSI_A_JEONGWON_1_JU\"/><Cell col=\"24\" text=\"bind:JEONGSI_A_JEONGWON_1_YA\"/><Cell col=\"25\" text=\"bind:JEONGSI_A_JEONGWON_2_JU\"/><Cell col=\"26\" text=\"bind:JEONGSI_A_JEONGWON_2_YA\"/><Cell col=\"27\" text=\"bind:JEONGSI_A_JEONGWON_3_JU\"/><Cell col=\"28\" text=\"bind:JEONGSI_A_JEONGWON_3_YA\"/><Cell col=\"29\" text=\"bind:TOTAL_1_J\"/><Cell col=\"30\" text=\"bind:TOTAL_1_Y\"/><Cell col=\"31\" text=\"bind:TOTAL_2_J\"/><Cell col=\"32\" text=\"bind:TOTAL_2_Y\"/><Cell col=\"33\" text=\"bind:TOTAL_3_J\"/><Cell col=\"34\" text=\"bind:TOTAL_3_Y\"/><Cell col=\"35\" text=\"expr:JU_JEONGWON-TOTAL_2_J\"/><Cell col=\"36\" text=\"expr:YA_JEONGWON-TOTAL_2_Y\"/></Band><Band id=\"summary\"><Cell text=\"합  계:\"/><Cell col=\"1\" text=\"expr:dataset.getSum(&quot;JU_JEONGWON&quot;)\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;YA_JEONGWON&quot;)\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;SUSI_Y_JEONGWON_2_JU&quot;)\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;SUSI_Y_JEONGWON_2_YA&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;SUSI_Y_JEONGWON_3_JU&quot;)\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;SUSI_Y_JEONGWON_3_YA&quot;)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;SUSI_B_JEONGWON_2_JU&quot;)\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;SUSI_B_JEONGWON_2_YA&quot;)\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;SUSI_B_JEONGWON_3_JU&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;SUSI_B_JEONGWON_3_YA&quot;)\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_1_JU&quot;)\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_1_YA&quot;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_2_JU&quot;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_2_YA&quot;)\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_3_JU&quot;)\"/><Cell col=\"16\" text=\"expr:dataset.getSum(&quot;JEONGSI_1_JEONGWON_3_YA&quot;)\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_1_JU&quot;)\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_1_YA&quot;)\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_2_JU&quot;)\"/><Cell col=\"20\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_2_YA&quot;)\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_3_JU&quot;)\"/><Cell col=\"22\" text=\"expr:dataset.getSum(&quot;JEONGSI_2_JEONGWON_3_YA&quot;)\"/><Cell col=\"23\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_1_JU&quot;)\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_1_YA&quot;)\"/><Cell col=\"25\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_2_JU&quot;)\"/><Cell col=\"26\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_2_YA&quot;)\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_3_JU&quot;)\"/><Cell col=\"28\" text=\"expr:dataset.getSum(&quot;JEONGSI_A_JEONGWON_3_YA&quot;)\"/><Cell col=\"29\" text=\"expr:dataset.getSum(&quot;TOTAL_1_J&quot;)\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&quot;TOTAL_1_Y&quot;)\"/><Cell col=\"31\" text=\"expr:dataset.getSum(&quot;TOTAL_2_J&quot;)\"/><Cell col=\"32\" text=\"expr:dataset.getSum(&quot;TOTAL_2_Y&quot;)\"/><Cell col=\"33\" text=\"expr:dataset.getSum(&quot;TOTAL_3_J&quot;)\"/><Cell col=\"34\" text=\"expr:dataset.getSum(&quot;TOTAL_3_Y&quot;)\"/><Cell col=\"35\" text=\"expr:dataset.getSum(&quot;JU_JEONGWON&quot;)- dataset.getSum(&quot;TOTAL_2_J&quot;)\"/><Cell col=\"36\" text=\"expr:dataset.getSum(&quot;YA_JEONGWON&quot;)- dataset.getSum(&quot;TOTAL_2_Y&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("모집전체등록현황");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN07_1010708_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN07_1010708_M.xfdl(모집전체등록현황)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/21
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
        	this.fn_GijunYyyy();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
        		case "print" :       // 출력
                         this.fn_Print();
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
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
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
            var strUrl      = "/prj/EN/EN07/Retrieve_1010708_M.do";
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
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 출력
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var IPSI_YYYY = this.ds_input.getColumn(0, "IPSI_YYYY");

        	if(IPSI_YYYY == "" || IPSI_YYYY == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var param =   { IPSI_YYYY:IPSI_YYYY}
        	this.gfn_commonUtils_report('EN07/EN07_1010708_M_01.crf',  param);
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

        /**********************************************************************
                09. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN07_1010708_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
