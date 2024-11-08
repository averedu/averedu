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
            this.set_titletext("성적사정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"YEOSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHASUIGWAN_YEOSEOK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SILGI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"MYEONJEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"SILGI_DT\" type=\"STRING\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pyeonipMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","98","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","225","9","80","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
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

            obj = new Static("Static01_02_01","187","0","56","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","76","0","10","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","20","0","720","9",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","20","31","720","9",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","296","0","10","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","732","0","27","40",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","86","9","101","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboPyeonipMojip","306","9","120","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_pyeonipMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_readonly("true");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Div("DivButton","10","61",null,"50","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Button("btnHabgyeok","165","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("0");
            obj.set_text("성적산출 및 합격처리");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Button("btnReset","395","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("1");
            obj.set_text("성적산출 초기화");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","330","52","100","10",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("2");
            obj.set_text("10");
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
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","DivBg.form.divSearch.form.spnPyeonipYyyy","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBg.form.divSearch.form.cboPyeonipMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET03_1020302_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET03_1020302_M.xfdl(성적사정)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/04/21
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
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
            var strDs    = "ds_Juya|dsMojipGbcd";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|01024";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_PyeonIpGijunYyyy();
        };

        // 편입기준년도 가져오기
        this.fn_PyeonIpGijunYyyy = function()
        {
        	var strSvc      = "PyeonIpGijunYyyy";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        // 조회조건에 편입년도 설정
        this.fn_PostPyeonIpGijunYyyy = function()
        {
        	this.ds_input.setColumn(0, "PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_PyeonIpMojip();
        }

        // 편입모집구분 가져오기
        this.fn_PyeonIpMojip = function()
        {
        	var strSvc      = "PyeonIpMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_pyeonipMojip=ds_pyeonipMojip";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        // 조회조건에 모집구분 설정
        this.fn_PostPyeonIpMojip = function()
        {
        	for(var i = 0; i < this.ds_pyeonipMojip.rowcount; i++)
        	{
                if(this.ds_pyeonipMojip.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			this.ds_input.setColumn(0, "PYEONIP_MOJIP_GBCD", this.ds_pyeonipMojip.getColumn(i, "PYEONIP_MOJIP_GBCD"));
                }
            }
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
                    case "PyeonIpGijunYyyy":
                            this.fn_PostPyeonIpGijunYyyy();
                        break;
        			case "PyeonIpMojip":
                            this.fn_PostPyeonIpMojip();
                        break;
        			case "SeongJeok":
        					this.alert("처리되었습니다.");
        			    break;
        			case "SeongJeokReset":
        					this.alert("초기화 처리되었습니다.");
        			    break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 성적산출 및 합격처리
        ***********************************************************************/
        this.DivBg_DivButton_btnHabgyeok_onclick = function(obj,e)
        {
        	if (!this.gfn_confirm( "성적산출 및 합격 처리를 하시겠습니까?", "프로시저","", "question" ))
        	{
        		return false;
        	}

        	var strSvc      = "SeongJeok";
            var strUrl      = "/prj/ET/ET03/Save_1020302_M_01.do";
            var strInDs     = "ds_input=ds_input:a";
            var strOutDs    = "ds_input=ds_input";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        		strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}

            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**********************************************************************
                06. 성적산출 초기화
        ***********************************************************************/
        this.DivBg_DivButton_btnHakjeokIgwan_onclick = function(obj,e)
        {
        	if (!this.gfn_confirm( "성적산출 초기화를 하시겠습니까?", "프로시저","", "question" )) {
        		return false;
        	}

        	var strSvc      = "SeongJeokReset";
            var strUrl      = "/prj/ET/ET03/Save_1020302_M_02.do";
            var strInDs     = "ds_input=ds_input:a";
            var strOutDs    = "ds_input=ds_input";
            var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
        	if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        	{
        		strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        	}

            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.DivBg.form.divSearch.form.spnPyeonipYyyy.addEventHandler("onspin",this.pyeonipMojip,this);
            this.DivBg.form.DivButton.form.btnHabgyeok.addEventHandler("onclick",this.DivBg_DivButton_btnHabgyeok_onclick,this);
            this.DivBg.form.DivButton.form.btnReset.addEventHandler("onclick",this.DivBg_DivButton_btnHakjeokIgwan_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET03_1020302_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
