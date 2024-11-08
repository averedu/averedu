(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popupForm");
            this.set_titletext("출석점수환산표복사");
            if (Form == this.constructor)
            {
                this._setFormPosition(262,242);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"YYYY_B\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","20","20","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("원본");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","262","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20","242","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05_00","0","0","20","242",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","20","109","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("복사");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("div_Wonbon","20","49","222","42",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Outline");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","65","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("1");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Spin("spnWonbonYYYY","75","9","120","22",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("0");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","222","9",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","65","0","10","42",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","195","0","27","42",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0","31","222","9",null,null,null,null,null,null,this.div_Wonbon.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_Wonbon.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","42","262","7",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","1","90","262","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","130","262","7",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","177","262","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnBoksa","69","197","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("복사");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","133","197","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","222","262","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("div_Boksa","20","136","222","42",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("div_WF_Outline");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","65","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("1");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Spin("spnBoksaYYYY","75","9","120","22",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("0");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","700","9",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","65","0","10","42",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","195","0","27","42",null,null,null,null,null,null,this.div_Boksa.form);
            obj.set_taborder("5");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.div_Boksa.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","20","136","222","9",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","20","168","222","9",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",262,242,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Wonbon.form.spnWonbonYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Boksa.form.spnBoksaYYYY","value","ds_input","YYYY_B");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("UM01_2030105_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UM01_2030105_P01.xfdl
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/07/18
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

        	if (!this.gfn_isNull(this.getOwnerFrame().yyyy)) {
        		this.div_Wonbon.form.spnWonbonYYYY.set_value(this.getOwnerFrame().yyyy);
        		this.div_Boksa.form.spnBoksaYYYY.set_value(this.getOwnerFrame().yyyy);
        	}

            //사용자 화면  초기화 함수
            this.fn_formInit();
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
        };

        this.fn_PostformInit = function()
        {

        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.close(this.ds_input.getColumn(0, "YYYY_B"));
        };

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
                    case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.fn_PreCopy = function() {
        	var wonbon = this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")) ? "" : this.ds_input.getColumn(0, "YYYY");
        	var boksa = this.gfn_isNull(this.ds_input.getColumn(0, "YYYY_B")) ? "" : this.ds_input.getColumn(0, "YYYY_B");

        	return wonbon == boksa
        }

        /**
          * 복사
         **/
        this.btnBoksa_onclick = function(obj,e)
        {
        	if (this.fn_PreCopy()) {
        		this.alert("같은 조건의 대상에는 복사할 수 없습니다.");
        		return;
        	}

            var strSvc      = "Save";
            var strUrl      = "/prj/UM/UM01/Save_2030105_P01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        };

        /**
          * 닫기
         **/
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
            this.addEventHandler("onclick",this.form_onclick,this);
            this.div_Wonbon.form.stc_01_00.addEventHandler("onclick",this.divM_stc_01_00_onclick,this);
            this.btnBoksa.addEventHandler("onclick",this.btnBoksa_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.div_Boksa.form.stc_01_00.addEventHandler("onclick",this.divM_stc_01_00_onclick,this);
        };
        this.loadIncludeScript("UM01_2030105_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
