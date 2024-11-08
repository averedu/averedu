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
            this.set_titletext("강의평가항목복사");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GIJUN_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","0","10","181",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","430","0","10","181",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"440","10",null,"0",null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00_00_00_00_01_00","0",null,"440","10",null,"190",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","6",null,"22","208",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("강의평가 항목 복사");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","7","23","430","8",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnCopy","235","145","130","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("강의평가 항목 복사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","31",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_01_00_01","-5","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","78","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnGijunYYYY","88","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","189","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","183","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("기준학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","262","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGijunHakgi","271","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","391","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearch00","10","85",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31","1620","9",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","-5","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","78","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Spin("spnDaesangYYYY","88","9","101","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","189","0","27","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","183","9","80","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_text("대상학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_00","262","0","10","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("cboDaesangHakgi","271","9","120","22",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsHakgi");
            obj.set_autoselect("true");
            obj.set_text("");
            obj.set_value("1");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","391","0","27","42",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01_01","0",null,"440","10",null,"170",null,null,null,null,this);
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

            obj = new Button("btnClose","370","145","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,180,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("강의평가항목복사");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.spnGijunYYYY","value","dsMaster","GIJUN_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboGijunHakgi","value","dsMaster","GIJUN_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch00.form.spnDaesangYYYY","value","dsMaster","DAESANG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch00.form.cboDaesangHakgi","value","dsMaster","DAESANG_HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL05_2020502_P02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL05_2020502_P01.xfdl(강의평가항목복사)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/12
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
        	var strDs    = "dsHakgi";
            var strLgcd  = "00022";    // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "US";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
                    case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			case "Copy":
                            this.fn_PostCopy();
                        break;
                    default:
                        break;
                }
            }
        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.dsMaster.setColumn(0, "GIJUN_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsMaster.setColumn(0, "GIJUN_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        		this.dsMaster.setColumn(0, "DAESANG_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsMaster.setColumn(0, "DAESANG_HAKGI", this.dsBaseYyyyHakgi.getColumn(0, "HAKGI"));
        	}
        };

        /**********************************************************************
                05. 복사 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnCopy_onclick = function(obj,e)
        {
        	this.fn_Copy();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreCopy = function()
        {
            if(this.gfn_isNull(this.dsMaster.getColumn(0, "GIJUN_YYYY")))
            {
                this.alert("기준년도는 필수입력입니다.");
                return false;
            }

        	if(this.gfn_isNull(this.dsMaster.getColumn(0, "GIJUN_HAKGI")))
            {
                this.alert("기준학기는 필수입력입니다.");
                return false;
            }

        	if(this.gfn_isNull(this.dsMaster.getColumn(0, "DAESANG_YYYY")))
            {
                this.alert("대상년도는 필수입력입니다.");
                return false;
            }

        	if(this.gfn_isNull(this.dsMaster.getColumn(0, "DAESANG_HAKGI")))
            {
                this.alert("대상학기는 필수입력입니다.");
                return false;
            }

        	var result = this.gfn_confirm( "강의평가 항목을 복사하시겠습니까?\n(복사 후에는 기존의 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 마스터 저장 실행
         */
        this.fn_Copy = function()
        {
        	if(!this.fn_PreCopy())
            {
                return false;
            }

            var strSvc      = "Copy";
            var strUrl      = "/prj/UL/UL05/Save_2020502_P02.do";
            var strInDs     = "dsMaster=dsMaster";
            var strOutDs    = "";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
         * 기능 : 저장 후 실행
         */
        this.fn_PostCopy = function()
        {
        	this.alert("정상적으로 복사되었습니다.");
        	this.close("CLOSE");
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        // 종료버튼 클릭시
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnCopy.addEventHandler("onclick",this.btnCopy_onclick,this);
            this.divSearch.form.stc_01_00_01.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch.form.spnGijunYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.stc_01_00_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch00.form.stc_01_00_01.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.divSearch00.form.spnDaesangYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch00.form.stc_01_00_01_00.addEventHandler("onclick",this.divSearch_stc_01_00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("UL05_2020502_P02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
