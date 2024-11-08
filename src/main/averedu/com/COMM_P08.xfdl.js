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
            this.set_titletext("공간");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"HOSIL_CD\" type=\"STRING\" size=\"13\"/><Column id=\"HOSIL_NM\" type=\"STRING\" size=\"80\"/><Column id=\"HOSIL_ABBR_NM\" type=\"STRING\" size=\"40\"/><Column id=\"GEONMUL_CD\" type=\"STRING\" size=\"3\"/><Column id=\"CHEUNG_CD\" type=\"STRING\" size=\"3\"/><Column id=\"HOSIL_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOSIL_ADMIN\" type=\"STRING\" size=\"40\"/><Column id=\"HOSIL_DEPT\" type=\"STRING\" size=\"40\"/><Column id=\"SOSOK_DEPT\" type=\"STRING\" size=\"40\"/><Column id=\"YONGDO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HOSIL_MYEONJEOK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HOSIL_CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"YONGDO_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHosil", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","70",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"159\"/><Column size=\"68\"/><Column size=\"83\"/><Column size=\"250\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"호실코드\"/><Cell col=\"1\" text=\"호실명\"/><Cell col=\"2\" text=\"호실인원\"/><Cell col=\"3\" text=\"용도구분\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HOSIL_CD\" editmaxlength=\"13\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HOSIL_NM\" editmaxlength=\"80\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:HOSIL_INWON\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:YONGDO_GBCD\" editmaxlength=\"10\" combodataset=\"dsHosil\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:BIGO\" editmaxlength=\"200\"/></Band></Format></Formats>");
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

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","7","9","48","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("호실");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGonggan","67","9","192","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0","540","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","58","-9","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31","540","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00","259","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","362","-9","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","610","7","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","269","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("건물용도구분");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchYongdo","372","9","177","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsHosil");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
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
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtSearchGonggan","value","ds_input","HOSIL_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchYongdo","value","ds_input","YONGDO_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P08.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P08_P.xfdl(호실정보 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/04
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

        	if( !this.gfn_isNull(this.getOwnerFrame().gongganCdNm)){
        		this.ds_input.setColumn(0, "HOSIL_CD_NM", this.getOwnerFrame().gongganCdNm);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHosil";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00539";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            var strUrl      = "/prj/com/Retrieve_P08.do";
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
        	var objRtnArr = new Array(2);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOSIL_CD");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOSIL_NM");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchGonggan_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchGonggan")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"HOSIL_CD_NM",obj.value);
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
            this.divSearch.form.edtSearchGonggan.addEventHandler("onkeydown",this.divSearch_edtSearchGonggan_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COMM_P08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
