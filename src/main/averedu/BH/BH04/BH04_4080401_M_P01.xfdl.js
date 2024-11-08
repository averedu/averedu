(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BH04_4080401_M_P01");
            this.set_titletext("관생정보 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inpoutYyyyHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yyyyHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SCHL_SMST", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"MJOR_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"256\"/><Column id=\"RWPN_SCOR\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"TELE_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PASS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"QUIT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEUN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"BLDG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BLDG_KFNM\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"FLOR_KFNM\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_KFNM\" type=\"STRING\" size=\"256\"/><Column id=\"RMRK_NOTE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_STAT_GUBN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","80","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","35",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","10","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("Spin00","40","10","70","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_min("1970");
            obj.set_max("2999");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","120","10","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("학기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbm_schlSmst","150","10","70","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_SCHL_SMST");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","230","10","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("학번");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","260","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","370","10","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit01","400","10","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("75");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","10","85","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("관생 목록");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"85","70","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","110",null,null,"10","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"학부/학과\"/><Cell col=\"5\" text=\"전공\"/><Cell col=\"6\" text=\"호실\"/><Cell col=\"7\" text=\"번호\"/></Band><Band id=\"body\"><Cell text=\"expr:expr:currow + 1\"/><Cell col=\"1\" text=\"bind:STNT_NUMB\"/><Cell col=\"2\" text=\"bind:STNT_KNAM\"/><Cell col=\"3\" displaytype=\"combotext\" text=\"bind:STAT_GUBN\" combodataset=\"ds_STAT_GUBN\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:DEPT_KNAM\"/><Cell col=\"5\" text=\"bind:MJOR_KNAM\"/><Cell col=\"6\" text=\"bind:ROOM_KFNM\"/><Cell col=\"7\" text=\"bind:ROOM_SEQU\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Check","260","450","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_popClose","370","450","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Spin00","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cbm_schlSmst","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH04_4080401_M_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH01_4080104_M.xfdl(일정관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/04
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
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "ds_SCHL_SMST|ds_STAT_GUBN";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00741";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	this.fn_yyyyHakgi();
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
                    //case "Init":
                    //      this.fn_PostformInit();
                    //  break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "yyyyHakgi":
                            this.fn_PostYyyyHakgi();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
         * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ***********************************************************************/
        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/

        /**
         * 기능 : 년도, 학기 조회 전 실행
         */
        this.fn_PreYyyyHakgi = function()
        {
            // 조회조건 셋팅
        	this.ds_inpoutYyyyHakgi.setColumn(0, "DATE_CODE", "1");
            return true;
        };

        /**
         * 기능 : 년도, 학기 조회 실행
         */
        this.fn_yyyyHakgi = function()
        {
            if( !this.fn_PreYyyyHakgi() )
            {
                return false;
            }
            var strSvc      = "yyyyHakgi";
            var strUrl      = "/prj/BH/BH_COMMON/GET_CURR_SCHL.do";
            var strInDs     = "ds_input=ds_inpoutYyyyHakgi";
            var strOutDs    = "ds_yyyyHakgi=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull( this.gfn_trim(GBV_MENUID)) )
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 년도,학기 조회 후 처리
         */
        this.fn_PostYyyyHakgi = function()
        {
            this.ds_input.setColumn(0, "YYYY", this.ds_yyyyHakgi.getColumn(0, "SCHL_YEAR"));
            this.ds_input.setColumn(0, "HAKGI", this.ds_yyyyHakgi.getColumn(0, "SCHL_SMST"));
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	this.ds_input.setColumn(0, "YYYY", this.divSearch.form.Spin00.value);			// 년도
        	this.ds_input.setColumn(0, "HAKGI", this.divSearch.form.cbm_schlSmst.value);	// 학기
        	this.ds_input.setColumn(0, "STNT_NUMB", this.divSearch.form.Edit00.value);		// 학번
        	this.ds_input.setColumn(0, "STNT_KANM", this.divSearch.form.Edit01.value);		// 성명

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
            var strUrl      = "/prj/BH/BH04/Retrieve_4080401_M_P01.do";
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
        	this.grdMaster.autoFitCol();
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
         * 엔터 시 관생목록 조회
         */
        this.enterSearch = function(obj,e)
        {
        	if(e.keycode == '13') {
        	    this.fn_Ret();
        	}
        };

        /**
         * 닫기 버튼 클릭 시 처리
         */
        this.fn_Close = function ()
        {
        	var objRtnArr = new Array(28);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SCHL_YEAR");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SCHL_SMST");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DIFF_SEQU");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_NUMB");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_KNAM");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DEPT_KNAM");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "MJOR_KNAM");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BLNG_DEPT");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_SEXC");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "RWPN_SCOR");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CELL_NUMB");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TELE_NUMB");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "CMPN_ADDR");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "PASS_DATE");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JOIN_DATE");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "QUIT_DATE");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ASSN_DATE");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUN_DATE");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "STNT_GUBN");
        	objRtnArr[19] = this.dsMaster.getColumn(this.dsMaster.rowposition, "STAT_GUBN");
        	objRtnArr[20] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BLDG_CODE");
        	objRtnArr[21] = this.dsMaster.getColumn(this.dsMaster.rowposition, "BLDG_KFNM");
        	objRtnArr[22] = this.dsMaster.getColumn(this.dsMaster.rowposition, "FLOR_NUMB");
        	objRtnArr[23] = this.dsMaster.getColumn(this.dsMaster.rowposition, "FLOR_KFNM");
        	objRtnArr[24] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ROOM_NUMB");
        	objRtnArr[25] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ROOM_KFNM");
        	objRtnArr[26] = this.dsMaster.getColumn(this.dsMaster.rowposition, "RMRK_NOTE");
        	objRtnArr[27] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ROOM_SEQU");

        	this.close(objRtnArr.toString());
        };

        /**
         * 조회 버튼 클릭
         */
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         * 닫기 버튼 클릭
         */
        this.btn_popClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        /**
         * 확인 버튼 클릭
         */
        this.btn_Check_onclick = function(obj,e)
        {
        	this.fn_Close();
        };

        /**
         * 그리드 셀 클릭
         */
        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fn_Close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_formInit,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.Spin00.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.cbm_schlSmst.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.Edit00.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.Edit01.addEventHandler("onkeyup",this.enterSearch,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btn_Check.addEventHandler("onclick",this.btn_Check_onclick,this);
            this.btn_popClose.addEventHandler("onclick",this.btn_popClose_onclick,this);
        };
        this.loadIncludeScript("BH04_4080401_M_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
