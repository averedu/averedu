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
            this.set_titletext("면접점수관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchHaknyeon", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_HAKNYEON\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_HAKNYEON_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONIP_MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchGyosu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","86","9","81","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","167","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","270","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","202","9","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","280","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SearchMojip");
            obj.set_codecolumn("PYEONIP_MOJIP_GBCD");
            obj.set_datacolumn("PYEONIP_MOJIP_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","390","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00","427","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","501","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","511","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_SearchHakgwa");
            obj.set_codecolumn("HAKGWA_CD");
            obj.set_datacolumn("HAKGWA_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00","631","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00","667","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","745","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_SearchJuya");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_GBNM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","735","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_00","871","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00","835","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","914","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","924","9","90","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_SearchHaknyeon");
            obj.set_codecolumn("PYEONIP_HAKNYEON");
            obj.set_datacolumn("PYEONIP_HAKNYEON_NM");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","76","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_00_00_00","1014","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00_00_00_01","1049","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("담당교수");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","1118","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyosu","1128","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_SearchGyosu");
            obj.set_codecolumn("SABEON");
            obj.set_datacolumn("SEONGMYEONG");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","1260","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","31","1260","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("Tab","0","76",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_preload("false");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("면접내역");
            obj.set_url("ET04::ET04_1020403_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("불참내역");
            obj.set_url("ET04::ET04_1020403_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSeunginSangtae00_00","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchHaknyeon","value","ds_input","PYEONIP_HAKNYEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchGyosu","value","ds_input","SABEON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","ET04::ET04_1020403_T01.xfdl");
            this._addPreloadList("fdl","ET04::ET04_1020403_T02.xfdl");
        };
        
        // User Script
        this.registerScript("ET04_1020403_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET04_1020403_M.xfdl(편입학 면접점수관리)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/05/10
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
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD$JIWONHAKGWA_CD$JUYA_GBCD$PYEONIP_HAKNYEON";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입 년도$편입모집구분코드$지원학과$주야구분$학년";
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
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
                    case "GijunYyyy":
                            this.fn_PostGijunYyyy();
                        break;
        			case "SearchMojip":
                            this.fn_PostSearchMojip();
                        break;
        			case "SearchHakgwa":
                            this.fn_PostSearchHakgwa();
                        break;
        			case "SearchJuya":
                            this.fn_PostSearchJuya();
                        break;
        			case "SearchHaknyeon":
                            this.fn_PostSearchHaknyeon();
                        break;
        			case "SearchGyosu":
                            this.fn_PostSearchGyosu();
                        break;
        			case "IlgwalCheori":
        					this.gfn_alert("일괄처리에 성공하였습니다.","저장정보","","information");
        				break;
                    default:
                        break;
                }
            }
        };

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
                    break;
        		case "tmp2" :        // 불참자 불합격 일괄처리
                         this.fn_Bulchamja();
                    break;
        		case "tmp3" :        // 면접대장 출력
                         this.fn_Print();
                    break;
                default :
                    break;
            };
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_YYYY")))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD")))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "HAKGWA_CD")))
        	{
        		this.gfn_alert("학과를 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "JUYA_GBCD")))
        	{
        		this.gfn_alert("주야구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_HAKNYEON")))
        	{
        		this.gfn_alert("학년을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }

         	if(this.Tab.tabindex==0)
         	{
         		this.Tab.TabPage1.form.fn_Ret(this.ds_input);
         	}
         	else if(this.Tab.tabindex==1)
         	{
         		this.Tab.TabPage2.form.fn_Ret(this.ds_input);
         	}
        };

        /**********************************************************************
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                07. 불참자 불합격 일괄처리 함수 선언
        ***********************************************************************/
        this.fn_Bulchamja = function()
        {
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_YYYY")))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD")))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (!this.gfn_confirm( "검색조건의 편입년도, 모집구분을 기준으로 일괄처리합니다.", "처리","","question" ))
        	{
        		return;
        	}

        	var strSvc      = "IlgwalCheori";
            var strUrl      = "/prj/ET/ET04/Save_1020403_T01_04.do";
            var strInDs     = "ds_input=ds_input:a ";
            var strOutDs    = "";
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
                08. 면접대장출력 함수 선언
        ***********************************************************************/
        this.fn_Print = function()
        {
        	var pyeonipYyyy 		= this.ds_input.getColumn(0, "PYEONIP_YYYY");
        	var mojipGbcd 			= this.ds_input.getColumn(0, "PYEONIP_MOJIP_GBCD");
        	var hakgwaCd 			= this.ds_input.getColumn(0, "HAKGWA_CD");
        	var juyaGbcd 			= this.ds_input.getColumn(0, "JUYA_GBCD");
        	var pyeonipHaknyeon     = this.ds_input.getColumn(0, "PYEONIP_HAKNYEON");
        	var sabeon 				= this.ds_input.getColumn(0, "SABEON");

        	if (this.gfn_isNull(pyeonipYyyy))
        	{
        		this.gfn_alert("편입년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(mojipGbcd))
        	{
        		this.gfn_alert("모집구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(hakgwaCd))
        	{
        		this.gfn_alert("학과를 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(juyaGbcd))
        	{
        		this.gfn_alert("주야구분을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(pyeonipHaknyeon))
        	{
        		this.gfn_alert("학년을 선택해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(sabeon))
        	{
        		this.gfn_alert("검색조건의 담당교수를 선택해주세요.","입력정보","","warning");
        		return false;
        	}

        	this.gfn_commonUtils_report('ET04/ET04_1020403_M_01.crf', {PYEONIP_YYYY:pyeonipYyyy
        															, MOJIP_GBCD:mojipGbcd
        															, HAKGWA_CD:hakgwaCd
        															, JUYA_GBCD:juyaGbcd
        															, PYEONIP_HAKNYEON:pyeonipHaknyeon
        															, SABEON:sabeon});
        };
        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsDetail02))
           {
              value = true;
           }

           return value;
        };

        /**********************************************************************
                10. 공통 함수
        ***********************************************************************/
        // 기준년도 조회
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GijunYyyy";
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

        this.fn_PostGijunYyyy = function()
        {
        	this.ds_input.setColumn(0,"PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_SearchMojip();
        }

        //모집구분 조회(검색조건)
        this.fn_SearchMojip = function()
        {
        	this.ds_SearchHakgwa.deleteAll();
        	this.ds_SearchJuya.deleteAll();
        	this.ds_SearchHaknyeon.deleteAll();
        	this.ds_SearchGyosu.deleteAll();

        	var strSvc      = "SearchMojip";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_MOJIP.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchMojip=ds_pyeonipMojip";
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
        };

        this.fn_PostSearchMojip = function()
        {
        	for(var i = 0; i < this.ds_SearchMojip.rowcount; i++)
        	{
                if(this.ds_SearchMojip.getColumn(i, "HYEONJAE_MOJIP_YN") == 'Y')
        		{
        			this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD", this.ds_SearchMojip.getColumn(0, "PYEONIP_MOJIP_GBCD"));
                }
            }

        	if(this.ds_SearchMojip.rowcount == 0)
        	{
        		this.ds_SearchMojip.insertRow(0);
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_GBCD','');
        		this.ds_SearchMojip.setColumn(0, 'PYEONIP_MOJIP_NM','전체');
        	}

        	this.fn_SearchHakgwa();
        }

        // 학과 조회(검색조건)
        this.fn_SearchHakgwa = function ()
        {
        	var strSvc      = "SearchHakgwa";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKGWA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHakgwa=ds_Hakgwa";
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
        }

        this.fn_PostSearchHakgwa = function()
        {
        	this.ds_SearchHakgwa.insertRow(0);
        	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_CD','');
         	this.ds_SearchHakgwa.setColumn(0, 'HAKGWA_NM','전체');
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);

        	this.ds_SearchGyosu.insertRow(0);
        	this.ds_SearchGyosu.setColumn(0, 'SABEON','');
         	this.ds_SearchGyosu.setColumn(0, 'SEONGMYEONG','전체');
        	this.divSearch.form.cboSearchGyosu.set_index(0);
        }

        //주야구분 조회(검색조건)
        this.fn_SearchJuya = function ()
        {
        	var strSvc      = "SearchJuya";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_JUYA.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchJuya=ds_Juya";
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

        this.fn_PostSearchJuya = function()
        {
        	this.ds_SearchJuya.insertRow(0);
        	this.ds_SearchJuya.setColumn(0, 'JUYA_GBCD','');
         	this.ds_SearchJuya.setColumn(0, 'JUYA_GBNM','전체');
        	this.divSearch.form.cboSearchJuya.set_index(0);

        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);

        	this.ds_SearchGyosu.insertRow(0);
        	this.ds_SearchGyosu.setColumn(0, 'SABEON','');
         	this.ds_SearchGyosu.setColumn(0, 'SEONGMYEONG','전체');
        	this.divSearch.form.cboSearchGyosu.set_index(0);
        }

        //학년 조회(검색조건)
        this.fn_SearchHaknyeon = function ()
        {
        	var strSvc      = "SearchHaknyeon";
            var strUrl      = "/prj/ET/ET_COM/Retrieve_PYEONIP_HAKNYEON.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchHaknyeon=ds_Haknyeon";
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

        this.fn_PostSearchHaknyeon = function()
        {
        	this.ds_SearchHaknyeon.insertRow(0);
        	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON','');
         	this.ds_SearchHaknyeon.setColumn(0, 'PYEONIP_HAKNYEON_NM','전체');
        	this.divSearch.form.cboSearchHaknyeon.set_index(0);

        	this.ds_SearchGyosu.insertRow(0);
        	this.ds_SearchGyosu.setColumn(0, 'SABEON','');
         	this.ds_SearchGyosu.setColumn(0, 'SEONGMYEONG','전체');
        	this.divSearch.form.cboSearchGyosu.set_index(0);
        }

        // 담당교수 조회(검색조건)
        this.fn_SearchGyosu = function ()
        {
        	var strSvc      = "SearchGyosu";
            var strUrl      = "/prj/ET/ET04/Retrieve_1020403_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_SearchGyosu=ds_SearchGyosu";
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

        this.fn_PostSearchGyosu = function()
        {
        	this.ds_SearchGyosu.insertRow(0);
        	this.ds_SearchGyosu.setColumn(0, 'SABEON','');
         	this.ds_SearchGyosu.setColumn(0, 'SEONGMYEONG','전체');
        	this.divSearch.form.cboSearchGyosu.set_index(0);
        }

        /**********************************************************************
                11. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JIWONHAKGWA_CD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchJuya_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JUYA_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHaknyeon_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"PYEONIP_HAKNYEON",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchGyosu_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SABEON",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_SearchMojip,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_SearchHakgwa,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_SearchJuya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onitemchanged",this.fn_SearchHaknyeon,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onitemchanged",this.fn_SearchGyosu,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchGyosu.addEventHandler("onkeydown",this.divSearch_cboSearchGyosu_onkeydown,this);
        };
        this.loadIncludeScript("ET04_1020403_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
