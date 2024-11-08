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
            this.set_titletext("시수생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"JEONIM_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAEKIM_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","6",null,"22","188",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("시수생성");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","23",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"60","25","75","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"60","25","10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","31","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","31","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전임여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","59","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","59","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","87","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","87","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00","10","115","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("staSisu","10","115","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("책임시수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSisu","117","118","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00_00_00","10","143","260","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_01_00","10","143","105","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("기존데이터삭제");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("RdoJeonim","117","34","146","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("true");
            var RdoJeonim_innerdataset = new nexacro.NormalDataset("RdoJeonim_innerdataset", obj);
            RdoJeonim_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전임</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">비전임</Col></Row></Rows>");
            obj.set_innerdataset(RdoJeonim_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakgi","117","90","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("dsHakgi");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","117","62","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDel","117","146","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("시수생성");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","edtSisu","value","dsMaster","CHAEKIM_SISU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","RdoJeonim","value","dsMaster","JEONIM_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cboHakgi","value","dsMaster","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","spnYYYY","value","dsMaster","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","chkDel","value","dsMaster","DEL_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UL06_2020601_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UL06_2020601_P01.xfdl(시수생성)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/07/14
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

        	if(!this.gfn_isNull(this.getOwnerFrame().yyyy)){
        		this.dsMaster.setColumn(0, "YYYY", this.getOwnerFrame().yyyy);
        	}
        	if(!this.gfn_isNull(this.getOwnerFrame().hakgi)){
        		this.dsMaster.setColumn(0, "HAKGI", this.getOwnerFrame().hakgi);
        	}
        	this.dsMaster.setColumn(0, "JEONIM_GBCD", "1");
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
        			case "Save":
                            this.fn_PostSave();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 복사 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.gfn_isNull(this.dsMaster.getColumn(0, "YYYY")))
            {
                this.alert("학년도는 필수입력입니다.");
                return false;
            }
        	if(this.gfn_isNull(this.dsMaster.getColumn(0, "HAKGI")))
            {
                this.alert("학기는 필수입력입니다.");
                return false;
            }
        	if(this.dsMaster.getColumn(0, "JEONIM_GBCD") == "1")
        	{
        		if(this.gfn_isNull(this.dsMaster.getColumn(0, "CHAEKIM_SISU")))
        		{
        			this.alert("책임시수는 필수입력입니다.");
        			return false;
        		}
        	}

        	var result = this.gfn_confirm("시수 생성하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 마스터 저장 실행
         */
        this.fn_Save = function()
        {
        	if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UL/UL06/Save_2020601_P01.do";
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
        this.fn_PostSave = function()
        {
        	this.alert("정상적으로 생성되었습니다.");
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

        this.RdoJeonim_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "2")
        	{
        		this.staSisu.set_visible(false);
        		this.edtSisu.set_visible(false);
        		this.dsMaster.setColumn(0, "CHAEKIM_SISU", null);
        	}
        	else
        	{
        		this.staSisu.set_visible(true);
        		this.edtSisu.set_visible(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.RdoJeonim.addEventHandler("onitemchanged",this.RdoJeonim_onitemchanged,this);
            this.cboHakgi.addEventHandler("onlbuttondown",this.cboSearchGyeyeol_onlbuttondown,this);
            this.cboHakgi.addEventHandler("onitemchanged",this.cboSearchGyeyeol_onitemchanged,this);
            this.cboHakgi.addEventHandler("onkeydown",this.div_01_cboSearchGyeyeol_onkeydown,this);
        };
        this.loadIncludeScript("UL06_2020601_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
