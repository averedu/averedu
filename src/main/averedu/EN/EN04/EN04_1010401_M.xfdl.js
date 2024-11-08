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
            this.set_titletext("면접관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"DATE\" size=\"8\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJEOP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SILGI_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hakgwaCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_juyaGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("학부/학과");
            obj.set_url("EN04::EN04_1010401_T01.xfdl");
            obj.set_formscrollbartype("auto");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("학과 학생별");
            obj.set_url("EN04::EN04_1010401_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("교수별");
            obj.set_url("EN04::EN04_1010401_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchJuya","813","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("JUYA_GBCD");
            obj.set_datacolumn("JUYA_NM");
            obj.set_innerdataset("ds_juyaGbcd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_04","732","9","68","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("주야구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02","462","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("학과");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgwa","522","9","172","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("DEPT_NM");
            obj.set_innerdataset("ds_hakgwaCd");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","302","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("MOJIP_GBCD");
            obj.set_datacolumn("MOJIP_NM");
            obj.set_innerdataset("ds_mojipGbcd");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_02_00","225","10","70","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
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

            obj = new Static("Static01_02_00_00","78","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","188","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_01","292","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","422","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","513","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02","694","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_02","14","0","1580","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_01","14","31","1580","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","803","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

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
            obj.set_description("면접관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item63","Tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchJuya","value","ds_input","JUYA_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHakgwa","value","ds_input","HAKGWA_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","EN04::EN04_1010401_T01.xfdl");
            this._addPreloadList("fdl","EN04::EN04_1010401_T02.xfdl");
            this._addPreloadList("fdl","EN04::EN04_1010401_T03.xfdl");
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN04_1010401_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN04_1010401_M.xfdl(면접관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/20
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
        			case "Hakgwa":
                            this.fn_PostHakgwa();
                        break;
        			case "Juya":
                            this.fn_PostJuya();
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
        		case "tmp2" :        // 면접확인대장 출력
                        this.fn_PrintMyeonjeop();
                    break;
        		case "tmp3" :        // 수험표 출력
                        this.fn_PrintSuheompyo();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
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

        	// 학부/학과
        	if(this.Tab.tabindex==0)
        	{
        		this.Tab.TabPage1.form.fn_Ret(this.ds_input);
        	}

        	// 학과 학생별
        	if(this.Tab.tabindex==1)
        	{
        		this.Tab.TabPage2.form.fn_Ret(this.ds_input);
        	}

        	// 교수별
        	if(this.Tab.tabindex==2)
        	{
        		this.Tab.TabPage3.form.fn_Ret(this.ds_input);
        	}
        };
        /**********************************************************************
                06. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        }

        /**********************************************************************
                07. 출력물
        ***********************************************************************/
        this.fn_PrintMyeonjeop = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == "" || this.ds_input.getColumn(0, "MOJIP_GBCD") == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == "" || this.ds_input.getColumn(0, "HAKGWA_CD") == null)
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "JUYA_GBCD") == "" || this.ds_input.getColumn(0, "JUYA_GBCD") == null)
        	{
        		this.alert("주야구분을 선택해주세요.");
        		return false;
        	}

        	var IPSI_YYYY  		= this.ds_input.getColumn(0, 'IPSI_YYYY');
        	var MOJIP_GBCD 		= this.ds_input.getColumn(0, 'MOJIP_GBCD');
        	var HAKGWA_CD 		= this.ds_input.getColumn(0, 'HAKGWA_CD');
        	var JUYA_GBCD 		= this.ds_input.getColumn(0, 'JUYA_GBCD');

        	var param = { IPSI_YYYY     : IPSI_YYYY
        				, MOJIP_GBCD 	: MOJIP_GBCD
        				, HAKGWA_CD 	: HAKGWA_CD
        				, JUYA_GBCD 	: JUYA_GBCD
        				};

        	this.gfn_commonUtils_report('EN04/EN04_1010401_M_01.crf',  param);
        };

        this.fn_PrintSuheompyo = function()
        {
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == "" || this.ds_input.getColumn(0, "MOJIP_GBCD") == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "HAKGWA_CD") == "" || this.ds_input.getColumn(0, "HAKGWA_CD") == null)
        	{
        		this.alert("학과를 선택해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "JUYA_GBCD") == "" || this.ds_input.getColumn(0, "JUYA_GBCD") == null)
        	{
        		this.alert("주야구분을 선택해주세요.");
        		return false;
        	}

        	var IPSI_YYYY  		= this.ds_input.getColumn(0, 'IPSI_YYYY');
        	var MOJIP_GBCD 		= this.ds_input.getColumn(0, 'MOJIP_GBCD');
        	var HAKGWA_CD 		= this.ds_input.getColumn(0, 'HAKGWA_CD');
        	var JUYA_GBCD 		= this.ds_input.getColumn(0, 'JUYA_GBCD');

        	var param = { IPSI_YYYY     : IPSI_YYYY
        				, MOJIP_GBCD 	: MOJIP_GBCD
        				, HAKGWA_CD 	: HAKGWA_CD
        				, JUYA_GBCD 	: JUYA_GBCD
        				};

        	this.gfn_commonUtils_report('EN04/EN04_1010401_M_02.crf',  param);
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsDetail))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage1.form.dsDetail2))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.Tab.TabPage2.form.dsDetail2))
           {
              value = true;
           }

           return value;
        };

        /**********************************************************************
                09. 공통함수
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
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();

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

        	this.fn_Hakgwa();
        }

        // 입시학과 가져오기
        this.fn_Hakgwa = function()
        {
        	this.ds_hakgwaCd.deleteAll();
        	this.ds_juyaGbcd.deleteAll();
        	this.ds_input.setColumn(0, "MYEONJEOP_YN", "Y");
        	this.ds_input.setColumn(0, "SILGI_YN", "N");

        	var strSvc      = "Hakgwa";
        	var strUrl      = "prj/EN/EN04/Retrieve_HAKGWACD.do";
        	var strInDs     = "ds_input=ds_input";
        	var strOutDs    = "ds_hakgwaCd=ds_hakgwaCd";
        	var strArg      = "";
        	var GBV_MENUID    = objApp.gv_cutPrgId;
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

        this.fn_PostHakgwa = function()
        {
        	this.ds_hakgwaCd.insertRow(0);
        	this.ds_hakgwaCd.setColumn(0, "DEPT_CD", "");
        	this.ds_hakgwaCd.setColumn(0, "DEPT_NM", "전체");
        	this.divSearch.form.cboSearchHakgwa.set_index(0);

        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);
        }

        // 입시주야 가져오기
        this.fn_Juya = function()
        {
        	this.ds_juyaGbcd.deleteAll();

        	var strSvc      = "Juya";
            var strUrl      = "prj/EN/EN_COM/Retrieve_JUYAGBCD.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_juyaGbcd=ds_juyaGbcd";
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

        this.fn_PostJuya = function()
        {
        	this.ds_juyaGbcd.insertRow(0);
        	this.ds_juyaGbcd.setColumn(0, "JUYA_GBCD", "");
        	this.ds_juyaGbcd.setColumn(0, "JUYA_NM", "전체");
        	this.divSearch.form.cboSearchJuya.set_index(0);
        }

        /**********************************************************************
                10. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        this.divSearch_cboSearchHakgwa_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"HAKGWA_CD",obj.value);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("canchange",this.Tab_canchange,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.divSearch.form.cboSearchJuya.addEventHandler("onkeydown",this.divSearch_cboSearchJuya_onkeydown,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onitemchanged",this.fn_Juya,this);
            this.divSearch.form.cboSearchHakgwa.addEventHandler("onkeydown",this.divSearch_cboSearchHakgwa_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.fn_MojipGb,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.fn_Hakgwa,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
        };
        this.loadIncludeScript("EN04_1010401_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
