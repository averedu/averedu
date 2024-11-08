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
            this.set_titletext("검정고시 파일이관");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"2\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"DAYNIGHT_DIVCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"5\"/><Column id=\"COMP_GRADE_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"10\"/><Column id=\"SUBJECT_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EDU_GOAL\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_CONT\" type=\"STRING\" size=\"2000\"/><Column id=\"EDU_INFO\" type=\"STRING\" size=\"2000\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/><Column id=\"LECTSCORE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"LECTTM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"COMP_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"NCS_USE_DIVCD\" type=\"STRING\" size=\"5\"/><Column id=\"BEF_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"AFT_SUBJECT\" type=\"STRING\" size=\"2000\"/><Column id=\"LMS_USE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JOB_COMP_NM\" type=\"STRING\" size=\"2000\"/><Column id=\"SUBJECT_SUMMARY\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("type01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","40",null,"42","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","88","9","101","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","20","31","720","9",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","20","0","720","9",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","0","10","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","731","0","27","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btnUpload","612","9","119","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("DB파일 업로드");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63","-9","10","619","20",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("1");
            obj.set_text("DB3 파일을 업로드하여 검정고시 성적 정보를 학교DB로 이관 합니다. 다소 시간이 소요될 수 있습니다");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","92","155","22",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("2");
            obj.set_text("결과 건 수");
            obj.set_cssclass("sta_WF_Title02");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivResult","10","117",null,"50","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("3");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","7","13","180","22",null,null,null,null,null,null,this.DivBg.form.DivResult.form);
            obj.set_taborder("0");
            obj.set_text("검정고시 이관 건 수");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.DivResult.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","50",null,null,null,null,null,null,this.DivBg.form.DivResult.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.DivResult.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","137","0","10","50",null,null,null,null,null,null,this.DivBg.form.DivResult.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.DivResult.addChild(obj.name, obj);

            obj = new Edit("edtCnt","147","13","206","22",null,null,null,null,null,null,this.DivBg.form.DivResult.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.DivBg.form.DivResult.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","109","290","8",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","330","82","100","35",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("검정고시 파일이관");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","edt1_01_01_00_00_00","value","dsMaster","AVG_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt1_01_01_00_00_00_00","value","dsMaster","DONGUI_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt1_01_01_00_00_00_00_00","value","dsMaster","GEOMJEONGGOSI_KOR_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt1_01_01_00_00_00_00_00_00","value","dsMaster","GEOMJEONGGOSI_ENG_JEOMSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt1_01_01_00_01","value","dsMaster","CHULSIN_DAEHAK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt1_01_01_00_01_00","value","dsMaster","DAEHAKJOLEOP_YEJEONG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt1_01_01_00_01_00_00","value","dsMaster","AVG_PYEONGJEOM_BAEKBUNYUL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt1_01_01_00_01_00_00_00","value","dsMaster","CHONGISU_HAKJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt1_01_01_00_01_00_00_00_00_00","value","dsMaster","GIJUN_PYEONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt1_01_01_00_01_00_00_00_00","value","dsMaster","PYEONGJEOM_CHONGJEOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt1_01_01_00_00_00_00_00_01","value","dsMaster","BANK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt1_01_01_00_00_00_00_00_00_00","value","dsMaster","GYEJWA_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt1_01_01_00_01_00_00_00_00_01","value","dsMaster","YEGEUMJU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt1_01_01_00_01_00_00_00_00_01_00","value","dsMaster","YEGEUMJU_GWANGYE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","Combo00_01_02_00_00","value","dsMaster","DAEHAKJOLEOP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBg.form.divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN03_1010303_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN03_1010303_T02.xfdl(검정고시파일이관)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/21
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
        var GIJUN_YYYY = '';
        var HYEONJAE_MOJIP = '';
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
        	this.fn_GijunYyyy();
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
                    case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
        			case "MojipGb":
                            this.fn_PostMojipGb();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. DB파일 업로드
        ***********************************************************************/
        this.DivBg_divSearch_btnUpload_onclick = function(obj,e)
        {
        	this.alert("보류");
        	return false;

        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == '' || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

        	var IPSI_YYYY = this.ds_input.getColumn(0, "IPSI_YYYY");
        	var CALL_POPUP = "GEOMJEONG";
        	var oArg = {IPSI_YYYY:IPSI_YYYY, GIJUN_YYYY:GIJUN_YYYY, HYEONJAE_MOJIP:HYEONJAE_MOJIP, CALL_POPUP:CALL_POPUP};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("upload","EN01::EN01_1010106_P02.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                06. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	GIJUN_YYYY = this.ds_gijunYyyy.getColumn(0, "YYYY");
        	this.fn_MojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_MojipGb = function()
        {
        	this.ds_mojipGbcd.deleteAll();

            var strSvc      = "MojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_MOJIPGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_mojipGbcd=ds_mojipGbcd";
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
        }

        this.fn_PostMojipGb = function()
        {
        	var gubun;
        	for(var i=0; i<this.ds_mojipGbcd.rowcount; i++)
        	{
        		gubun = this.ds_mojipGbcd.getColumn(i, "HYEONJAE_MOJIP_YN");

        		if(gubun == 'Y')
        		{
        			HYEONJAE_MOJIP = this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD");
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.DivBg.form.divSearch.form.btnUpload.addEventHandler("onclick",this.DivBg_divSearch_btnUpload_onclick,this);
        };
        this.loadIncludeScript("EN03_1010303_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
