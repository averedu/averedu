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
            this.set_titletext("은행자료입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"DEUN_YORN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchl", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCreateAccount", this);
            obj._setContents("<ColumnInfo><Column id=\"I_NO\" type=\"STRING\" size=\"16\"/><Column id=\"I_ILHAK\" type=\"STRING\" size=\"10\"/><Column id=\"I_ILHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"I_HAKNUM\" type=\"STRING\" size=\"1\"/><Column id=\"I_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"AMNT_0001\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMNT_0002\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMNT_0003\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0004\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0005\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0006\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0007\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0008\" type=\"STRING\" size=\"7\"/><Column id=\"AMNT_0009\" type=\"STRING\" size=\"7\"/><Column id=\"G_NO\" type=\"STRING\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSntnGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeunYorn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CODE_NM\">미등록</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","200","0","20","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","4","145","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일 업로드");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","29",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0",null,null,"10","0","0",null,null,null,null,this);
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

            obj = new Div("divSelect","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload","39","64","300","25",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("1");
            obj.set_uploadurl("/univ_cm/picUpload?upload_path=pic");
            this.divSelect.addChild(obj.name, obj);

            obj = new Button("btnClose","349",null,"80","25",null,"64",null,null,null,null,this.divSelect.form);
            obj.set_taborder("1");
            obj.set_text("파일 추가");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.divSelect.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,200,this,function(p){});
            obj.set_description("은행자료입력");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsSchl");
            this._addPreloadList("data","","dsDiffSequ");
        };
        
        // User Script
        this.registerScript("BH05_4080503_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH05_4080502_P01.xfdl(은행자료 생성)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/12
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsHakgi|dsBank|dsSntnGubn";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022|03007|00743";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "X|X|X";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관 일정
        	this.fn_getSchl();
        };

        this.fn_PostformInit = function() {
        	this.divSelect.form.cboBank.set_index(0);
        	this.divSelect.form.cboStntGubn.set_index(0);
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    case "GetSchl":
                            this.fn_PostGetSchl();
                        break;
                    case "GetDiffSequ":
                            this.fn_PostGetDiffSequ();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
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
        this.fn_Excel = function()
        {
            if(this.dsCreateAccount.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.excelGrid, "시트이름","파일이름");
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        // 생활관 일정 조회
        this.fn_getSchl = function() {
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", "");
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");
        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputSchl.setColumn(0, "DIFF_SEQU", "");

        	var strSvc      = "GetSchl";
            var strUrl      = "/prj/BH/BH_COMMON/GET_SCHL.do";
            var strInDs     = "ds_input=ds_inputSchl";
            var strOutDs    = "dsSchl=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetSchl = function()
        {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsSchl.getColumn(0, "SCHL_SMST"));
        	this.fn_getDiffSequ("");
        };

        // 일정차수조회
        this.fn_getDiffSequ = function(str) {
        	this.ds_inputDiffSequ.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputDiffSequ.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_YEAR", this.ds_input.getColumn(0, "SCHL_YEAR"));
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_SMST", (str == "year" ? "" : this.ds_input.getColumn(0, "SCHL_SMST")));

        	var strSvc      = "GetDiffSequ";
            var strUrl      = "/prj/BH/BH_COMMON/GET_DIFF_SEQU.do";
            var strInDs     = "ds_input=ds_inputDiffSequ";
            var strOutDs    = "dsDiffSequ=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetDiffSequ = function() {
        	var nRow = this.dsDiffSequ.insertRow(0);
        	this.dsDiffSequ.setColumn(nRow, "CODE", "");
        	this.dsDiffSequ.setColumn(nRow, "CODE_NM", "전체");
        	this.divSelect.form.cboDiffSequ.set_index(0);
        };

        this.divSelect_spnSearchYYYY_canchange = function(obj,e)
        {
        	this.fn_getDiffSequ("tear");
        };

        this.divSelect_cboSearchHakgi_onitemchanged = function(obj,e)
        {
        	this.fn_getDiffSequ("");
        };

        // 은행자료생성
        this.btn_proc_onclick = function(obj,e)
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/BH/BH05/Retrieve_4080502_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsCreateAccount=dsMaster";
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
        this.fn_PostRet = function() {
        	this.alert("은행자료 생성이 완료되었습니다.");
        }

        // 엑셀 다운로드
        this.btn_excelDown_onclick = function(obj,e)
        {
        	if (this.dsCreateAccount.rowcount == 0) {
        		this.alert("생성된 은행자료가 없습니다.\n은행자료를 생성해 주시기 바랍니다.");
        		return;
        	}

        	this.fn_Excel();
        };

        // 텍스트 다운로드
        this.btn_textDown_onclick = function(obj,e)
        {
        	this.alert("기능 개발 중....");
        	return;
        };

        // 닫기
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSelect.form.FileUpload.addEventHandler("onsuccess",this.DivBg_divFileUpload_FileUpload_onsuccess,this);
            this.divSelect.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("BH05_4080503_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
