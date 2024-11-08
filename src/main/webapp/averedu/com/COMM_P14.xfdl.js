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
            this.set_titletext("교직학과학생");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKJEOK_STCD\" type=\"STRING\" size=\"3\"/><Column id=\"HAKJEOK_STNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"BUNBAN\" type=\"STRING\" size=\"5\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JAGYEOKJONGBYEOL_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOKJONGBYEOL_NM\" type=\"STRING\" size=\"50\"/><Column id=\"PYOSIGWAMOK_NM\" type=\"STRING\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON_NM\" type=\"STRING\" size=\"50\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyojikHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GBN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputGyojikHakgwa", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SELECT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","68",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"자격종별\"/><Cell col=\"4\" text=\"학과(전공)\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"학적상태\"/><Cell col=\"7\" text=\"입학년도\"/><Cell col=\"8\" text=\"선발년도\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKBEON\"/><Cell col=\"2\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"3\" text=\"bind:JAGYEOKJONGBYEOL_NM\"/><Cell col=\"4\" text=\"bind:HAKGWA_NM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:HAKJEOK_STNM\"/><Cell col=\"7\" text=\"bind:IPSI_YYYY\"/><Cell col=\"8\" text=\"bind:SINCHEONG_YYYY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","1130",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","1065",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학과");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","60","9","150","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("dsGyojikHakgwa");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00_00","210","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학년");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","300","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","390","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("학번/성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeonNm","510","9","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","1110","9","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0","32",null,null,"0","0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00","50","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","210","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00","290","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","390","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00_00","500","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
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
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("교직학과학생");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHaknyeon","value","ds_input","HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.edtSearchHakbeonNm","value","ds_input","HAKBEON_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P14.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P14.xfdl(교직학과학생검색)
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

        this.menuId = "";

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
        	this.fn_searchGyojikHakgwa();

        	if( !this.gfn_isNull(this.getOwnerFrame().hakbeonNm)){
        		this.ds_input.setColumn(0, "HAKBEON_NM", this.getOwnerFrame().hakbeonNm);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().menuId)){
        		this.menuId = this.getOwnerFrame().menuId;
        	}
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/

        this.fn_formInit = function()
        {
            var strDs    = "dsHaknyeon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00060";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
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
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
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
            var strUrl      = "/prj/com/Retrieve_P14.do";
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
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(16);

        	objRtnArr[0] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKBEON");
        	objRtnArr[1] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_NM");
        	objRtnArr[2] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD");
        	objRtnArr[3] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_NM");
        	objRtnArr[4] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY");
        	objRtnArr[5] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKJEOK_STCD");
        	objRtnArr[6] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKJEOK_STNM");
        	objRtnArr[7] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "BIRTHDAY");
        	objRtnArr[8] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKNYEON");
        	objRtnArr[9] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "BUNBAN");
        	objRtnArr[10] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD");
        	objRtnArr[11] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBNM");
        	objRtnArr[12] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "SINCHEONG_YYYY");
        	objRtnArr[13] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_CD");
        	objRtnArr[14] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "JAGYEOKJONGBYEOL_NM");
        	objRtnArr[15] 	= this.dsMaster.getColumn(this.dsMaster.rowposition, "PYOSIGWAMOK_NM");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchHakbeonNm_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchHakbeonNm")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"HAKBEON_NM",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        /**
         * 기능 : 교직학과 조회
         */
        this.fn_searchGyojikHakgwa = function(obj) {
        	this.ds_inputGyojikHakgwa.setColumn(0, "SELECT_TYPE", "A");
            var strSvc      = "GyojikHakgwa";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_gyojikHakgwaList.do";
            var strInDs     = "ds_input=ds_inputGyojikHakgwa";
            var strOutDs    = "dsGyojikHakgwa=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
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
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.cboSearchHakgwa_onitemchanged,this);
            this.divSearch.form.edtSearchHakbeonNm.addEventHandler("onkeydown",this.divSearch_edtSearchHakbeonNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COMM_P14.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
