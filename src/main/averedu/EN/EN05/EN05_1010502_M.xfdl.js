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
            this.set_titletext("석차산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"OUT_TOTAL_CNT\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("DivBg","0","0","780",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("type01");
            obj.set_background("#e3ebff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","40",null,"42","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","98","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","105","9","101","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","245","9","80","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCheoriGunsu","631","9","100","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_01_00_00","511","9","110","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("처리건수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","325","9","120","22",null,null,null,null,null,null,this.DivBg.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_displaynulltext("전체");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.DivBg.form.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","10","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","217","41","56","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("3");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","106","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","30","41","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","30","72","720","9",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("6");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","326","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_01","742","41","27","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","632","41","10","40",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.DivBg.addChild(obj.name, obj);

            obj = new Div("DivButton","10","107",null,"50","10",null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("1");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.DivBg.addChild(obj.name, obj);

            obj = new Button("btnSeokcha","60","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("0");
            obj.set_text("1. 석차산출");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Button("btnHabgyeok","290","11","179","25",null,null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("1");
            obj.set_text("2. 합격 및 예비후보 처리");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Button("btnSajeong",null,"11","179","25","60",null,null,null,null,null,this.DivBg.form.DivButton.form);
            obj.set_taborder("2");
            obj.set_text("3. 입시사정 초기화");
            obj.set_cssclass("btn_WF_Crud");
            this.DivBg.form.DivButton.addChild(obj.name, obj);

            obj = new Static("Static01_00_01","330","82","100","25",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("10");
            obj.set_text("↑25↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.DivBg.addChild(obj.name, obj);

            obj = new Static("stc_63","-9","10","362","20",null,null,null,null,null,null,this.DivBg.form);
            obj.set_taborder("11");
            obj.set_text("입시년도와 모집구분을 기준으로 성적사정을 시행합니다.");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.DivBg.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("석차산출");
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

            obj = new BindItem("item0","DivBg.form.divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","DivBg.form.divSearch.form.edtCheoriGunsu","value","dsMaster","OUT_TOTAL_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","DivBg.form.divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EN05_1010502_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN05_1010502_M.xfdl(석차산출)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/21
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
        	this.fn_GijunYyyy();
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
                05. 석차산출 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.DivBg_DivButton_btnSeokcha_onclick = function(obj,e)
        {
            var result = this.gfn_confirm( "석차산출 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.fn_Seokcha();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Seokcha = function()
        {
            var strSvc      = "Seokcha";
            var strUrl      = "/prj/EN/EN05/Seokcha_1010502_M.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "dsMaster=dsMaster ";
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

        /**********************************************************************
                06. 합격 및 예비후보 처리 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.DivBg_DivButton_btnHabgyeok_onclick = function(obj,e)
        {
            var result = this.gfn_confirm( "합격 및 예비후보 처리를 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.fn_Habgyeok();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Habgyeok = function()
        {
            var strSvc      = "Habgyeok";
            var strUrl      = "/prj/EN/EN05/Habgyeok_1010502_M.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "dsMaster=dsMaster ";
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

        /**********************************************************************
                07. 입시사정 초기화 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.DivBg_DivButton_btnSajeong_onclick = function(obj,e)
        {
            var result = this.gfn_confirm( "초기화 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
        	this.fn_Sajeong();
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Sajeong = function()
        {
            var strSvc      = "Sajeong";
            var strUrl      = "/prj/EN/EN05/Sajeong_1010502_M.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "dsMaster=dsMaster ";
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

        /**********************************************************************
                08. 공통함수
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
        	this.fn_MojipGb();
        }

        // 입시모집구분 가져오기
        this.fn_MojipGb = function()
        {
        	this.ds_mojipGbcd.deleteAll();

            var strSvc      = "MojipGb";
            var strUrl      = "prj/EN/EN_COM/Retrieve_IPSI_MOJIPGBCD.do";
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
        			this.ds_input.setColumn(0, "MOJIP_GBCD", this.ds_mojipGbcd.getColumn(i, "MOJIP_GBCD"));
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
            this.DivBg.form.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.DivBg.form.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.DivBg.form.DivButton.form.btnSeokcha.addEventHandler("onclick",this.DivBg_DivButton_btnSeokcha_onclick,this);
            this.DivBg.form.DivButton.form.btnHabgyeok.addEventHandler("onclick",this.DivBg_DivButton_btnHabgyeok_onclick,this);
            this.DivBg.form.DivButton.form.btnSajeong.addEventHandler("onclick",this.DivBg_DivButton_btnSajeong_onclick,this);
        };
        this.loadIncludeScript("EN05_1010502_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
