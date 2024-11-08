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
            this.set_titletext("교직이수예정자 생성 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(740,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"IPHAK_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEUNGIN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SAENGSEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("년도");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","52",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("교직학과 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","120","71","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","90",null,"8","0",null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","10","98","310","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"교직학과\"/><Cell col=\"3\" text=\"자동생성&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:YYYY\"/><Cell col=\"2\" text=\"bind:HAKGWA_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" text=\"bind:SAENGSEONG_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","320","98","10","200",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","330","98",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(" ");
            obj.set_cssclass("type02");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","40","370","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("** 자동생성여부가 체크되어 있는 학과만 생성됩니다.");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","370","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("** [기초관리 - 교직승인인원] 에서 관리되는 학과가 조회됩니다.");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","10","70","370","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("** 생성이 완료되면 팝업창을 닫고 조회해서 확인하시기 바랍니다.");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","10","100","370","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("** 자동생성이 아닌 학과는 직접 입력하시면 됩니다.");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","10","130","370","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("** 생성");
            obj.set_visible("false");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"317","60","20","340",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create","250","71","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_text("일괄생성");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",740,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UP02_2040201_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP02_2040201_P01.xfdl(교직이수예정자 생성)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/19
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
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);

        	if (!this.gfn_isNull(this.getOwnerFrame().yyyy)) {
        		this.divSearch.form.spnSearchYYYY.set_value(this.getOwnerFrame().yyyy);
        	}

            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
        	this.fn_Ret();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);

            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "IsuCreate":
        				this.fn_PostIsuCreate();
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
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function() {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if(!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP02/Retrieve_2040201_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
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
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.fn_PostIsuCreate = function() {
        	this.close(this.ds_input.getColumn(0, "YYYY"));
        }

        /**
          * 조회버튼 클릭 시
         **/
        this.divSearch_btnSearch_onclick = function(obj, e) {
        	this.fn_Ret();
        };

        /**
          * 일괄생성버튼 클릭 시
         **/
        this.btn_create_onclick = function(obj, e) {
        	var yyyy 		= this.divSearch.form.spnSearchYYYY.value + "년도";
        	var masterCount = this.dsMaster.rowcount

        	if(masterCount == 0) {
        		this.alert(yyyy + "교직학과 정보가 없습니다.\n[기초관리 - 교직승인인원] 화면에서 교직학과를 입력하세요.");
        		return;
        	}

        	// 자동생성여부
        	var yCount = this.dsMaster.getCaseCount("dataset.getColumn(currow, 'SAENGSEONG_YN') == '1'")

        	if(yCount == 0) {
        		this.alert(yyyy + "자동생성인 교직학과 정보가 없습니다.");
        		return;
        	}

        	var hakgwaArr 	= [];

        	for(var i = 0; i < masterCount; i++) {
        		if(this.dsMaster.getColumn(i, "SAENGSEONG_YN") == "1") {
        			hakgwaArr.push(this.dsMaster.getColumn(i, "HAKGWA_NM"))
        		}
        	}

        	var str = hakgwaArr.join(', ');

        	if(this.confirm(yyyy + " 교직이수예정자를 생성하시겠습니까?\n\n자동생성학과 : " + str)) {
        		this.fn_create();
        	}
        };

        /**
          * 닫기버튼 클릭 시
         **/
        this.btn_close_onclick = function(obj, e) {
        	this.close("CLOSE");
        };

        this.fn_create = function() {
            var strSvc      = "IsuCreate";
            var strUrl      = "/prj/UP/UP02/Create_2040201_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.divSearch_spnSearchYYYY_onchanged = function(obj, e) {
        	obj.set_value(e.postvalue);
        	this.fn_Ret();
        };

        this.divSearch_spnSearchYYYY_onspin = function(obj, e) {
        	obj.set_value(e.postvalue);
        	this.fn_Ret();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onspin",this.divSearch_spnSearchYYYY_onspin,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.Static01_01_00_00_00_01.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.Static01_01_00_00_00_01_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
        };
        this.loadIncludeScript("UP02_2040201_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
