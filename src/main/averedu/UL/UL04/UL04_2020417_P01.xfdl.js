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
            this.set_titletext("수강신청현황상세정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUGANG_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGGEUP\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_JEOMSU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_HAKNYEON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_GYOGWAMOK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_GRD\" type=\"STRING\" size=\"256\"/><Column id=\"JAEISU_PYEONGJEOM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIsu", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJaeisu", this);
            obj.set_arguments("00022");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose",null,null,"60","25","10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staTree","10","10","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("재수강 가능 과목 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","27",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_01","200","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","10","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"35","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,null,"10","0","0",null,null,null,null,this);
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

            obj = new Grid("grdMaster","10","35",null,null,"10","49",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj.set_fillareatype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"이수년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"교과목코드\"/><Cell col=\"5\" text=\"교과목명\"/><Cell col=\"6\" text=\"수강구분\"/><Cell col=\"7\" text=\"이수구분\"/><Cell col=\"8\" text=\"학점\"/><Cell col=\"9\" text=\"평점\"/><Cell col=\"10\" text=\"등급\"/></Band><Band id=\"body\"><Cell expr=\"expr:GYOGWAMOK_CD != &quot;&quot; ? currow+1 : &quot;none&quot;\"/><Cell col=\"1\" text=\"bind:YYYY\"/><Cell col=\"2\" text=\"bind:HAKGI\" displaytype=\"combotext\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsHakgi\"/><Cell col=\"3\" text=\"bind:HAKNYEON\" displaytype=\"combotext\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsHaknyeon\"/><Cell col=\"4\" text=\"bind:GYOGWAMOK_CD\"/><Cell col=\"5\" text=\"bind:GYOGWAMOK_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SUGANG_GUBUN\" combodataset=\"dsJaeisu\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:ISU_GBCD\" displaytype=\"combotext\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsIsu\"/><Cell col=\"8\" text=\"bind:HAKJEOM\"/><Cell col=\"9\" text=\"bind:PYEONGJEOM\"/><Cell col=\"10\" text=\"bind:DEUNGGEUP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","865",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","10",null,"233","24",null,"11",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("수강신청현황상세정보");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSave");
        };
        
        // User Script
        this.registerScript("UL04_2020417_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL04_2020417_P01.xfdl(수강신청현황상세정보)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/27
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

        	if (!this.gfn_isNull(this.getOwnerFrame().YYYY)) {
        		this.ds_input.setColumn(0, "YYYY", this.getOwnerFrame().YYYY);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().HAKGI)) {
        		this.ds_input.setColumn(0, "HAKGI", this.getOwnerFrame().HAKGI);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().HAKBEON)) {
        		this.ds_input.setColumn(0, "HAKBEON", this.getOwnerFrame().HAKBEON);
        	}
        	if (!this.gfn_isNull(this.getOwnerFrame().GYOGWAMOK_CD)) {
        		this.ds_input.setColumn(0, "GYOGWAMOK_CD", this.getOwnerFrame().GYOGWAMOK_CD);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsHakgi|dsHaknyeon|dsIsu|dsJaeisu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00022|00060|00025|00527";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        			case "Save":
                            this.fn_PostSave();
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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/UL/UL04/Retrieve_2020417_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostRet = function()
        {
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 저장 함수 선언
        ***********************************************************************/
        this.fn_PreSave = function()
        {
        	var row = this.dsMaster.rowposition;
        	this.dsSave.setColumn(0, "YYYY", this.ds_input.getColumn(0, "YYYY"));
        	this.dsSave.setColumn(0, "HAKGI", this.ds_input.getColumn(0, "HAKGI"));
        	this.dsSave.setColumn(0, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        	this.dsSave.setColumn(0, "GYOGWAMOK_CD", this.ds_input.getColumn(0, "GYOGWAMOK_CD"));
        	this.dsSave.setColumn(0, "JAEISU_YYYY", this.dsMaster.getColumn(row, "YYYY"));
        	this.dsSave.setColumn(0, "JAEISU_HAKGI", this.dsMaster.getColumn(row, "HAKGI"));
        	this.dsSave.setColumn(0, "JAEISU_HAKNYEON_CD", this.dsMaster.getColumn(row, "HAKNYEON"));
        	this.dsSave.setColumn(0, "JAEISU_GYOGWAMOK_CD", this.dsMaster.getColumn(row, "GYOGWAMOK_CD"));
        	this.dsSave.setColumn(0, "JAEISU_JEOMSU", this.dsMaster.getColumn(row, "CHWIDEUK_JEOMSU"));
        	this.dsSave.setColumn(0, "JAEISU_GRD", this.dsMaster.getColumn(row, "DEUNGGEUP"));
        	this.dsSave.setColumn(0, "JAEISU_PYEONGJEOM", this.dsMaster.getColumn(row, "PYEONGJEOM"));

        	var result = this.gfn_confirm("재수강 처리하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        }

        this.fn_Save = function()
        {
        	if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL04/Save_2020417_P01.do";
            var strInDs     = "dsSave=dsSave";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostSave = function()
        {
        	this.alert("재수강 처리되었습니다.");
        	this.close("CLOSE");
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fn_Save();
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

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
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
        };
        this.loadIncludeScript("UL04_2020417_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
