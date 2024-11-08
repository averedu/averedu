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
            this.set_titletext("신입생입학현황자료");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGYO_NM\" type=\"STRING\" size=\"21\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"9\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"A\" type=\"STRING\" size=\"65532\"/><Column id=\"B\" type=\"STRING\" size=\"65532\"/><Column id=\"C\" type=\"STRING\" size=\"65532\"/><Column id=\"A_1\" type=\"STRING\" size=\"65532\"/><Column id=\"B_2\" type=\"STRING\" size=\"65532\"/><Column id=\"C_3\" type=\"STRING\" size=\"65532\"/><Column id=\"TOTAL\" type=\"STRING\" size=\"65532\"/><Column id=\"TOTAL_S\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail1", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"A\" type=\"STRING\" size=\"65532\"/><Column id=\"B\" type=\"STRING\" size=\"65532\"/><Column id=\"C\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DEUNGROK_CNT\" type=\"STRING\" size=\"65532\"/><Column id=\"JIWON_CNT\" type=\"STRING\" size=\"65532\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지역별 입학자현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","51",null,"24","1370",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("7");
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

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"228","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"대학명\"/><Cell col=\"1\" rowspan=\"2\" text=\"구분\"/><Cell col=\"2\" colspan=\"4\" text=\"해당지역 출신\"/><Cell col=\"6\" colspan=\"5\" text=\"타지역 출신\"/><Cell row=\"1\" col=\"2\" text=\"일반고\"/><Cell row=\"1\" col=\"3\" text=\"특성화고\"/><Cell row=\"1\" col=\"4\" text=\"기타\"/><Cell row=\"1\" col=\"5\" text=\"소계\"/><Cell row=\"1\" col=\"6\" text=\"지역\"/><Cell row=\"1\" col=\"7\" text=\"일반고\"/><Cell row=\"1\" col=\"8\" text=\"특성화고\"/><Cell row=\"1\" col=\"9\" text=\"기타\"/><Cell row=\"1\" col=\"10\" text=\"소계\"/></Band><Band id=\"body\"><Cell suppressalign=\"middle\" suppress=\"2\" text=\"bind:HAKGYO_NM\" border=\"1px solid #808080ff \"/><Cell col=\"1\" suppress=\"2\" suppressalign=\"middle\" text=\"bind:JEONHYEONG_GBNM\" border=\"1px solid #808080ff \" wordWrap=\"char\"/><Cell col=\"2\" suppress=\"2\" suppressalign=\"middle\" text=\"bind:A\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"3\" suppress=\"2\" suppressalign=\"middle\" text=\"bind:B\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"4\" suppress=\"2\" suppressalign=\"middle\" text=\"bind:C\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"5\" suppress=\"2\" suppressalign=\"middle\" text=\"bind:TOTAL\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"6\" text=\"bind:JIYEOK_GBNM\" border=\"1px solid #808080ff \"/><Cell col=\"7\" text=\"bind:A_1\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"8\" text=\"bind:B_2\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"9\" text=\"bind:C_3\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell col=\"10\" text=\"bind:TOTAL_S\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1412","200","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail1",null,"77","198","158","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDetail1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"성인만학도&#13;&#10;입학자 수\"/></Band><Band id=\"body\"><Cell text=\"25~29세\" border=\"1px solid #808080ff \"/><Cell col=\"1\" text=\"bind:A\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell row=\"1\" text=\"30~39세\" border=\"1px solid #808080ff \"/><Cell row=\"1\" col=\"1\" text=\"bind:B\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell row=\"2\" text=\"40세이상\" border=\"1px solid #808080ff \"/><Cell row=\"2\" col=\"1\" text=\"bind:C\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail2",null,"269","198","128","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDetail2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"유턴입학자 수&#13;&#10;(정원내외 합계)\"/></Band><Band id=\"body\"><Cell text=\"지원자수\" border=\"1px solid #808080ff \"/><Cell col=\"1\" text=\"bind:JIWON_CNT\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/><Cell row=\"1\" text=\"등록자수\" border=\"1px solid #808080ff \"/><Cell row=\"1\" col=\"1\" text=\"bind:DEUNGROK_CNT\" border=\"1px solid #808080ff \" textAlign=\"right\" padding=\"1px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00",null,"244","138","22","60",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("유턴입학자 수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1442","261","190","8",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00",null,"52","155","22","43",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("성인만학도 입학자 수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1560","235","50","35",null,null,null,null,null,null,this);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("신입생입학현황자료");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN09_1010904_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN09_1010904_M.xfdl(신입생입학현황자료)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/29
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
        	this.gfn_clearSortAll(this.grdDetail1);
        	this.gfn_clearSortAll(this.grdDetail2);
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
            var strUrl      = "/prj/EN/EN09/Retrieve_1010904_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster ";
        		strOutDs   += "dsDetail1=dsDetail1 ";
        		strOutDs   += "dsDetail2=dsDetail2 ";
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
        	this.dsMaster.set_rowposition(-1);
        	this.dsDetail1.set_rowposition(-1);
        	this.dsDetail2.set_rowposition(-1);
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
        this.grdDetail1_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        this.grdDetail2_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**********************************************************************
                07. 공통함수
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
                08. 검색창 엔터키 조회
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
            this.grdDetail1.addEventHandler("onheaddblclick",this.grdDetail1_onheaddblclick,this);
            this.grdDetail2.addEventHandler("onheaddblclick",this.grdDetail2_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN09_1010904_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
