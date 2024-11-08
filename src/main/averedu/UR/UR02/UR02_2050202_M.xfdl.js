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
            this.set_titletext("등록대상자/가상계좌생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHASU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGongji", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChasu", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHapgyeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChasuY", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"32\"/><Column id=\"GONGJI_GBCD\" type=\"STRING\" size=\"32\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_CHASU_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeungrok", this);
            obj.set_preload("true");
            obj._setContents("<ColumnInfo><Column id=\"DEUNGROK_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSelect","10","30",null,"190","10",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("5");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.divBg.addChild(obj.name, obj);

            obj = new Button("btnDaesang","260","145","110","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("6");
            obj.set_text("등록대상자생성");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_Crud");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Button("btnGyejwa","390","145","110","25",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("7");
            obj.set_text("가상계좌 부여");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_Crud");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06","10","40",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06","10","40","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("9");
            obj.set_text("등록년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","10","68",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","10","68","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("11");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_13_00_00","10","96",null,"28","8",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00","10","96","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("13");
            obj.set_text("수험번호");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_02","380","40","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("14");
            obj.set_text("공지구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_00","380","68","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("15");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("stc_12_00_00_02","380","96","165","28",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("16");
            obj.set_text("합격구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboGongji","547","43",null,"22","11",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsGongji");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboMojip","177","71","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("2");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboHabgyeok","547","99",null,"22","11",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHapgyeok");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Combo("cboChasu","547","71",null,"22","11",null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsChasu");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("staScore","-9","10","408","20",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("17");
            obj.set_text("※대상 년도, 학기의 가상계좌 부여 및 등록대상자를 생성합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_visible("true");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Spin("spnDeungrokYYYY","177","43","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Edit("edtSuhoemNo","177","99","200","22",null,null,null,null,null,null,this.divBg.form.divSelect.form);
            obj.set_taborder("4");
            obj.set_maxlength("10");
            this.divBg.form.divSelect.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","22","290","8",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("0");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("stc_05","10","5","220","22",null,null,null,null,null,null,this.divBg.form);
            obj.set_taborder("1");
            obj.set_text("등록대상자 및 가상 계좌 생성");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","770","0",null,null,"0","0",null,null,null,null,this.divBg.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this.divBg.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this.divBg.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("등록대상자/가상계좌생성");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item23","edt1_01_00_01_01_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","edt1_01_00_01_01_00_00","value","dsMaster","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","rdo_00_00","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","rdo_00_00_01","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divBg.form.divSelect.form.cboGongji","value","ds_input","GONGJI_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divBg.form.divSelect.form.cboMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divBg.form.divSelect.form.cboHabgyeok","value","ds_input","HAPGYEOK_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divBg.form.divSelect.form.cboChasu","value","ds_input","CHASU_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divBg.form.divSelect.form.spnDeungrokYYYY","value","ds_input","DEUNGROK_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divBg.form.divSelect.form.edtSuhoemNo","value","ds_input","SUHEOM_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMojip");
            this._addPreloadList("data","","dsChasuY");
            this._addPreloadList("data","","dsResult");
            this._addPreloadList("data","","dsDeungrok");
        };
        
        // User Script
        this.registerScript("UR02_2050202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UR02_2050202_M.xfdl(등록 공지 관리(신입생) 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/06
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
            var strDs    = "dsGongji|dsChasu|dsHapgyeok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "03005|03006|01014";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	var strEopmuGbcd = "UR";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0)
        	{
        		this.ds_input.setColumn(0, "DEUNGROK_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.ds_mojipInput.setColumn(0, "YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
        	this.fn_Mojip();
        	this.fn_ChasuY();
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
        			    break;
        			case "Mojip":
                            this.fn_PostMojip();
                        break;
        			case "ChasuY":
                            this.fn_PostChasuY();
                        break;
                    case "Saengsung":
                            this.fn_PostSaengsung();
                        break;
                    case "Gyejwa":
                            this.fn_PostGyejwa();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 등록 대상자 생성
        ***********************************************************************/
        this.fn_PreSaengsung = function()
        {
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("등록년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "GONGJI_GBCD")))
        	{
        		this.alert("등록 공지 구분을 선택해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "MOJIP_GBCD")))
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "CHASU_GBCD")))
        	{
        		this.alert("차수를 선택해주세요.");
        		return false;
        	}
        	if(this.ds_input.getColumn(0, "GONGJI_GBCD") == "01")
        	{
        		if(this.gfn_isNull(this.ds_input.getColumn(0, "HAPGYEOK_GBCD")))
        		{
        			this.alert("합격구분을 선택해주세요.");
        			return false;
        		}
        	}
        	if(this.ds_input.getColumn(0, "MOJIP_GBCD") > 2)
        	{
        		if(this.gfn_isNull(this.ds_input.getColumn(0, "HAPGYEOK_GBCD")))
        		{
        			this.alert("합격구분을 선택해주세요.");
        			return false;
        		}
        	}

        	var result = this.gfn_confirm( "대상자를 생성하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

            return true;
        };

        this.fn_Saengsung = function()
        {
            if(!this.fn_PreSaengsung())
            {
                return false;
            }
        	var strSvc      = "Saengsung";
        	var strUrl      = "/prj/UR/UR02/Saengsung_2050202_M.do";
        	var strInDs     = "ds_input=ds_input";
        	var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostSaengsung = function()
        {
            this.alert(this.dsResult.getColumn(0,'OUT_MSG'));
        };

        /**********************************************************************
                06. 가상계좌 부여
        ***********************************************************************/
        this.fn_PreGyejwa = function()
        {
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "DEUNGROK_YYYY")))
        	{
        		this.alert("등록년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "GONGJI_GBCD")))
        	{
        		this.alert("등록 공지 구분을 선택해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "MOJIP_GBCD")))
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.ds_input.getColumn(0, "CHASU_GBCD")))
        	{
        		this.alert("차수를 선택해주세요.");
        		return false;
        	}

        	var strSvc      = "Ret";
            var strUrl      = "/prj/UR/UR02/Retrieve_2050202_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsDeungrok=dsDeungrok";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

        	this.ds_input.setColumn(0, "DEUNGROK_FRDT", this.dsDeungrok.getColumn(0, "DEUNGROK_FRDT"));
        	this.ds_input.setColumn(0, "DEUNGROK_TODT", this.dsDeungrok.getColumn(0, "DEUNGROK_TODT"));

            return true;
        };

        this.fn_Gyejwa = function()
        {
            if(!this.fn_PreGyejwa())
            {
                return false;
            }
            var strSvc      = "Gyejwa";
            var strUrl      = "/prj/UR/UR02/Gyejwa_2050202_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostGyejwa = function()
        {
            this.alert(this.dsResult.getColumn(0,'OUT_MSG'));
        };

        /**********************************************************************
                07. 각종함수
        ***********************************************************************/
        // 공통 모집구분 조회
        this.fn_Mojip = function()
        {
            var strSvc      = "Mojip";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_Mojip.do";
            var strInDs     = "ds_mojipInput=ds_mojipInput";
            var strOutDs    = "dsMojip=dsMojip";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostMojip = function()
        {
        	this.dsMojip.insertRow(0);
        	this.dsMojip.setColumn(0, "MOJIP_GBCD", "");
        	this.dsMojip.setColumn(0, "MOJIP_NM", "선택");
        	this.divBg.form.divSelect.form.cboMojip.set_index(0);
        };

        // 현재차수 Y 조회
        this.fn_ChasuY = function()
        {
            var strSvc      = "ChasuY";
            var strUrl      = "/prj/UR/UR_COMMON/Retrieve_COMMON_M_ChasuY.do";
            var strInDs     = "ds_chasuInput=ds_mojipInput";
            var strOutDs    = "dsChasuY=dsChasuY";
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

        this.fn_PostChasuY = function()
        {
        	this.ds_input.setColumn(0, "GONGJI_GBCD", this.dsChasuY.getColumn(0, "GONGJI_GBCD"));
        	this.ds_input.setColumn(0, "CHASU_GBCD", this.dsChasuY.getColumn(0, "DEUNGROK_CHASU_GBCD"));
        	this.ds_input.setColumn(0, "MOJIP_GBCD", this.dsChasuY.getColumn(0, "MOJIP_GBCD"));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divBg.form.divSelect.form.btnDaesang.addEventHandler("onclick",this.fn_Saengsung,this);
            this.divBg.form.divSelect.form.btnGyejwa.addEventHandler("onclick",this.fn_Gyejwa,this);
            this.divBg.form.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("UR02_2050202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
