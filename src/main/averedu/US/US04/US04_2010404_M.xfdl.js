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
            this.set_titletext("증명서 통계현황");
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
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"10\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"A1_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"A1_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"A2_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"A2_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B1_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B1_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B2_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"B2_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C1_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C1_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C2_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"C2_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"D1_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"D1_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"D2_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"D2_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"E1_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"E1_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"E2_MESU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"E2_GEUMAEK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BDE_MESU1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BDE_GEUMAEK1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BDE_MESU2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BDE_GEUMAEK2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_MESU1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_GEUMAEK1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_MESU2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_GEUMAEK2\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"FR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("증명서 통계 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","137","51",null,"24","1380",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" text=\"증명서종류\" textAlign=\"center\"/><Cell col=\"1\" colspan=\"4\" text=\"일반\" textAlign=\"center\"/><Cell col=\"5\" colspan=\"4\" text=\"발급기\" textAlign=\"center\"/><Cell col=\"9\" colspan=\"4\" text=\"인터넷\" textAlign=\"center\"/><Cell col=\"13\" colspan=\"4\" text=\"합계\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"국문\" textAlign=\"center\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"영문\" textAlign=\"center\"/><Cell row=\"1\" col=\"5\" colspan=\"2\" text=\"국문\" textAlign=\"center\"/><Cell row=\"1\" col=\"7\" colspan=\"2\" textAlign=\"center\" text=\"영문\"/><Cell row=\"1\" col=\"9\" colspan=\"2\" textAlign=\"center\" text=\"국문\"/><Cell row=\"1\" col=\"11\" colspan=\"2\" textAlign=\"center\" text=\"영문\"/><Cell row=\"1\" col=\"13\" colspan=\"2\" textAlign=\"center\" text=\"국문\"/><Cell row=\"1\" col=\"15\" colspan=\"2\" textAlign=\"center\" text=\"영문\"/><Cell row=\"2\" col=\"1\" text=\"매수\" textAlign=\"center\"/><Cell row=\"2\" col=\"2\" text=\"금액\" textAlign=\"center\"/><Cell row=\"2\" col=\"3\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"4\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"5\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"6\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"7\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"8\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"9\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"10\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"11\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"12\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"13\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"14\" textAlign=\"center\" text=\"금액\"/><Cell row=\"2\" col=\"15\" textAlign=\"center\" text=\"매수\"/><Cell row=\"2\" col=\"16\" textAlign=\"center\" text=\"금액\"/></Band><Band id=\"body\"><Cell text=\"bind:CD_NM\"/><Cell col=\"1\" text=\"bind:B1_MESU\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"bind:B1_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"3\" text=\"bind:B2_MESU\" autosizecol=\"limitmax\"/><Cell col=\"4\" text=\"bind:B2_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"5\" text=\"bind:D1_MESU\" autosizecol=\"limitmax\"/><Cell col=\"6\" text=\"bind:D1_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"7\" text=\"bind:D2_MESU\" autosizecol=\"limitmax\"/><Cell col=\"8\" text=\"bind:D2_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"9\" text=\"bind:E1_MESU\" autosizecol=\"limitmax\"/><Cell col=\"10\" text=\"bind:E1_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"11\" text=\"bind:E2_MESU\" autosizecol=\"limitmax\"/><Cell col=\"12\" text=\"bind:E2_GEUMAEK\" autosizecol=\"limitmax\"/><Cell col=\"13\" text=\"bind:BDE_MESU1\" autosizecol=\"limitmax\"/><Cell col=\"14\" text=\"bind:BDE_GEUMAEK1\" autosizecol=\"limitmax\"/><Cell col=\"15\" text=\"bind:BDE_MESU2\" autosizecol=\"limitmax\"/><Cell col=\"16\" text=\"bind:BDE_GEUMAEK2\" autosizecol=\"limitmax\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","550","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("5");
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

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","-29","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","54","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchFrDt","64","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00_00","193","7","16","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchToDt","219","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("증명서 통계현황");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calSearchFrDt","value","ds_input","FR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calSearchToDt","value","ds_input","TO_DT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("US04_2010404_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US04_2010404_M.xfdl( 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/01
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
        this.lvchkColidDs   = ""; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
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
        	this.ds_input.setColumn(0, "FR_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
        	this.ds_input.setColumn(0, "TO_DT", objApp.gds_SystemDate.getColumn(0,"YYYYMMDD"));
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
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/US/US04/Retrieve_2010404_M.do";
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
                06. 출력 함수 선언
        ***********************************************************************/
        this.fn_Print = function()
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.gfn_alert("출력할 데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
        	}

        	var FR_DT = this.ds_input.getColumn(0, 'FR_DT');
        	var TO_DT = this.ds_input.getColumn(0, 'TO_DT');
        	var PRT_INFO = '127.0.0.1 ' + objApp.gds_userInfoDb.getColumn(0,"DEPT_NM") + ' ' + objApp.gds_userInfoDb.getColumn(0,"USER_NM");
        	var PG_CD = objApp.gv_cutPrgId;

        	var param = {
        				  FR_DT 			  : FR_DT
        				, TO_DT 			  : TO_DT
        				, PRT_INFO			  : PRT_INFO
        				, PG_CD				  : PG_CD
        				};


        	this.gfn_commonUtils_report('US04/US04_2010404_M.crf',  param);
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_calSearchFrDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"FR_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_calSearchToDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"TO_DT",obj.value);
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
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.divSearch.form.calSearchFrDt.addEventHandler("onkeydown",this.divSearch_calSearchFrDt_onkeydown,this);
            this.divSearch.form.calSearchToDt.addEventHandler("onkeydown",this.divSearch_calSearchToDt_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US04_2010404_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
