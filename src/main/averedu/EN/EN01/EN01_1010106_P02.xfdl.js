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
            this.set_titletext("관심고교 신규 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJIYEOK_GBCD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JIYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGogyoGyeYeol", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebuJiyeok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","830","565","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","765","565","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","374","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("고교코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","6","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","43",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","445","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","143","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","54","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","176","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("지역");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","335","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJiyeok","235","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsJiyeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","64","9","79","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","535","6","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","559","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("고교명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","630","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoNm","640","9","153","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","810","7","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","16","31","770","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","770","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","225","2","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGogyoCd","455","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10","565","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","70",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"131\"/><Column size=\"105\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No.\"/><Cell col=\"1\" disptype=\"normal\" text=\"고교 코드\"/><Cell col=\"2\" disptype=\"normal\" text=\"고교 명\"/><Cell col=\"3\" text=\"고교계열명\"/><Cell col=\"4\" text=\"지역명\"/><Cell col=\"5\" text=\"세부지역명\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_NM\" editmaxlength=\"100\"/><Cell col=\"3\" text=\"bind:GOGYOGYEYEOL_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGogyoGyeYeol\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:JIYEOK_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsJiyeok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SEBUJIYEOK_GBCD\" edittype=\"none\" displaytype=\"combotext\" textAlign=\"center\" combodataset=\"dsSebuJiyeok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("관심고교 신규 팝업");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.cboSearchJiyeok","value","ds_input","JIYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtSearchGogyoNm","value","ds_input","GOGYO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchGogyoCd","value","ds_input","GOGYO_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN01_1010106_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010106_P02.xfdl(관심고교 신규 팝업)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/14
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
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.getOwnerFrame().yyyy);

        	if(this.getOwnerFrame().gosi != null && this.getOwnerFrame().gosi != '')
        	{
        		this.ds_input.setColumn(0, "GEOMJEONGGOSI", this.getOwnerFrame().gosi);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsGogyoGyeYeol|dsJiyeok|dsSebuJiyeok";    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01008|00053|00054";                          			 // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|T|X";                                     // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                          // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010106_P02.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(5);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_CD");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYO_NM");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIYEOK_GBCD");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEBUJIYEOK_GBCD");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOGYOGYEYEOL_GBCD");
        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_cboSearchJiyeok_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIYEOK_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtSearchGogyoNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"GOGYO_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.cboSearchJiyeok.addEventHandler("onkeydown",this.divSearch_cboSearchJiyeok_onkeydown,this);
            this.divSearch.form.edtSearchGogyoNm.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.edtSearchGogyoCd.addEventHandler("onkeydown",this.divSearch_edtSearchGogyoCd_onkeydown,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
        };
        this.loadIncludeScript("EN01_1010106_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
