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
            this.set_titletext("생활관 퇴사처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,300);
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"QUIT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("관생 퇴사신청 목록");
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

            obj = new Div("divSelect","10","35",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","55","59","270","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","55","59","125","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("1");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","55","87","270","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","55","87","125","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("3");
            obj.set_text("대상학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","55","115","270","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","55","115","125","28",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("5");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSelect.addChild(obj.name, obj);

            obj = new Calendar("calImyongTodt","182","118","140","22",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divSelect.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","182","62","140","22",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("7");
            this.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","182","90","140","22",null,null,null,null,null,null,this.divSelect.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.divSelect.addChild(obj.name, obj);

            obj = new Button("btn_proc","157",null,"50","20",null,"20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("확인");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","213",null,"50","20",null,"20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("취소");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,300,this,function(p){});
            obj.set_description("생활관 퇴사처리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSelect.form.calImyongTodt","value","ds_input","QUIT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSelect.form.spnSearchYYYY","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSelect.form.cboSearchHakgi","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH03_4080305_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH03_4080305_P01.xfdl(생활관 퇴사처리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/11
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
            var strDs    = "dsHakgi";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        this.fn_PostformInit = function() {
        	if (!this.gfn_isNull(this.getOwnerFrame().schlYear)) {
        		this.ds_input.setColumn(0, "SCHL_YEAR", this.getOwnerFrame().schlYear);
        	}

        	if (!this.gfn_isNull(this.getOwnerFrame().schlSmst)) {
        		this.ds_input.setColumn(0, "SCHL_SMST", this.getOwnerFrame().schlSmst);
        	}

        	this.ds_input.setColumn(0, "QUIT_DATE", objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"))
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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        this.btn_proc_onclick = function(obj,e)
        {
        	var schlYear = this.ds_input.getColumn(0, "SCHL_YEAR");
        	if (this.gfn_isNull(this.gfn_trim(schlYear))) {
        	    this.alert('"대상년도" 항목은 필수 입력입니다.');
        		return;
        	}

        	var schlSmst = this.ds_input.getColumn(0, "SCHL_SMST");
        	if (this.gfn_isNull(this.gfn_trim(schlSmst))) {
        	    this.alert('"대상학기" 항목은 필수 입력입니다.');
        		return;
        	}

        	var quitDate = this.ds_input.getColumn(0, "QUIT_DATE");
        	if (this.gfn_isNull(this.gfn_trim(quitDate))) {
        	    this.alert('"퇴사일" 항목은 필수 입력입니다.');
        		return;
        	}

        	var schlSmstLabel = this.divSelect.form.cboSearchHakgi.text;
        	var quitDateLabel = objApp.gds_SystemDate.getColumn(0, "KOR_YYYYMMDD");
        	var msgStr = schlYear + '년도 ' + schlSmstLabel + '의 생활관 사용자들을 ' + quitDateLabel + ' 일자로 퇴사처리하겠습니까?'
        	var result = this.gfn_confirm(msgStr, "처리","", "question");
        	if(result == 0) return;

            var strSvc      = "Save";
            var strUrl      = "/prj/BH/BH03/Save_4080305_P01List.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSelect.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.divSelect.form.cboSearchHakgi.addEventHandler("onitemchanged",this.divSearch_cboSearchHakgi_onitemchanged,this);
            this.divSelect.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeyDown,this);
            this.btn_proc.addEventHandler("onclick",this.btn_proc_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("BH03_4080305_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
