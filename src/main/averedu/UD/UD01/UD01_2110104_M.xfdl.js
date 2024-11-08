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
            this.set_titletext("단체활동내역신청");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GYEOLGWA_BOGO_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MAX_GYEOLGWA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUBJA_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"8\"/><Column id=\"HWALDONG_SIJAK_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_JONGRYO_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HWALDONG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"GEONUI_SAHANG\" type=\"STRING\" size=\"4000\"/><Column id=\"SINCHEONG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"HOEWON_CNT1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HOEWON_CNT4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"8\"/><Column id=\"CHEORI_SANGTAE_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"CEOMBU_FILE_NO\" type=\"STRING\" size=\"32\"/><Column id=\"BANRYEO_SAYU\" type=\"STRING\" size=\"4000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_SIJAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_JONGRYO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DANCHE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_SANGTAE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GWANLI_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SINCHEONG_SIJAK_DT\"/><Col id=\"SINCHEONG_JONGRYO_DT\"/><Col id=\"DANCHE_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheoriSangtae", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDanche", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DANCHE_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"171\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"329\"/><Column size=\"310\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"단체명\"/><Cell col=\"2\" colspan=\"2\" text=\"활동기간\"/><Cell col=\"4\" rowspan=\"2\" text=\"신청일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"처리상태\"/><Cell col=\"6\" rowspan=\"2\" text=\"반려사유\"/><Cell col=\"7\" rowspan=\"2\" text=\"활동내용\"/><Cell row=\"1\" col=\"2\" text=\"시작일자\"/><Cell row=\"1\" col=\"3\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:DANCHE_NM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"2\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWALDONG_SIJAK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" cursor=\"pointer\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWALDONG_JONGRYO_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"date\" edittype=\"none\" textAlign=\"center\" text=\"bind:SINCHEONG_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" cursor=\"pointer\"/><Cell col=\"5\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:CHEORI_SANGTAE_GBNM\" editmaxlength=\"256\" cursor=\"pointer\"/><Cell col=\"6\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:BANRYEO_SAYU\" editmaxlength=\"4000\" cursor=\"pointer\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HWALDONG_NAEYONG\" editmaxlength=\"4000\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchCheoriSangtae","1082","8","169","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCheoriSangtae");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_04","976","8","95","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("처리상태");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_02","6","8","120","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongSijakDt","84","8","200","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static00_00","300","8","16","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_00.addChild(obj.name, obj);

            obj = new Calendar("calSearchSincheongJongryoDt","334","8","200","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_01_00","549","10","80","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_text("단체");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtDancheCd","638","8","145","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_readonly("true");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnSearchDanche","791","8","22","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_PopSrch");
            obj.set_text("");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edtDancheNm","821","8","145","22",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("point");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("단체활동내역목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","140","51","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","75","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","535","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","629","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","720","0","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","720","31","100","9",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00","967","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","1073","0","10","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("단체활동내역신청");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_00.form.cboSearchCheoriSangtae","value","ds_input","CHEORI_SANGTAE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_00.form.calSearchSincheongSijakDt","value","ds_input","SINCHEONG_SIJAK_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.calSearchSincheongJongryoDt","value","ds_input","SINCHEONG_JONGRYO_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.edtDancheCd","value","ds_input","DANCHE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_00.form.edtDancheNm","value","ds_input","DANCHE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UD01_2110104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UD01_2110104_M.xfdl(단체활동내역신청)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/12/02
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
        this.lvYyyy = "";

        this.strKeyValue 	= "";  // 저장 후 row 유지
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
            var strDs    = "dsCheoriSangtae";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80306";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

            var strFrDt = this.gfn_addMonth(this.gfn_getSvrDate(),-1);
        	var strToDt = this.gfn_getSvrDate();

            this.ds_input.setColumn(0,"SINCHEONG_SIJAK_DT"  ,strFrDt); //신청기간(Fr)
        	this.ds_input.setColumn(0,"SINCHEONG_JONGRYO_DT",strToDt); //신청기간(To)

            var strYyyy = this.gfn_getSvrDate("YYYY");
            var strMm   = this.gfn_getSvrDate("MM");

        	//1,2월인 경우 연도 - 1
        	if(strMm == "01" || strMm == "02"){
               this.ds_input.setColumn(0,"YYYY"  ,strYyyy - 1); //기준연도
        	} else {
               this.ds_input.setColumn(0,"YYYY"  ,strYyyy); //기준연도
        	}
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
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "HwaldongNaeyoek" :
        			var sRtn = strVal.split(",");
        			if(sRtn[0] == "CLOSE")
        			{
        				this.strKeyValue = sRtn[1];
        			}

        			this.fn_Ret();
        			break;
        		case "DancheCdNm" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(this.ds_input.rowposition, "DANCHE_CD",      sRtn[0]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "DANCHE_NM",      sRtn[1]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_CD", sRtn[2]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_NM", sRtn[3]);
        					this.ds_input.set_enableevent(true);

        					this.fn_Ret();
        				}
        			break;
        		default:
                    break;
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
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
        	if(this.div_00.form.edtDancheNm.value == null || this.div_00.form.edtDancheNm.value == "")
        	{
        		this.gfn_alert("활동내역서를 작성할 단체를 선택해주세요.","제출정보","","warning");
        		return false;
        	}

        	if(this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_SIJAK_DT") > this.ds_input.getColumn(this.ds_input.rowposition, "SINCHEONG_JONGRYO_DT"))
        	{
        		this.gfn_alert("신청 종료일자는 신청 시작일자보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
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
            var strSvc      = "Ret";
            var strUrl      = "/prj/UD/UD01/Retrieve_2110104_M.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	if (!this.gfn_isNull(this.strKeyValue)) {
        		var nRow = this.dsMaster.findRow("GYEOLGWA_BOGO_CNT", this.strKeyValue);
        		this.dsMaster.set_rowposition(nRow);
        		this.strKeyValue = "";
        	}

        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if(this.div_00.form.edtDancheNm.value == null || this.div_00.form.edtDancheNm.value == "")
        	{
        		this.gfn_alert("활동내역서를 작성할 단체를 선택해주세요.","제출정보","","warning");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	if(!this.fn_PreNew())
            {
                return false;
            }

        	var dancheCd = this.div_00.form.edtDancheCd.value;
        	var dancheNm = this.div_00.form.edtDancheNm.value;
        	var gwanliDeptCd = this.ds_input.getColumn(0, "GWANLI_DEPT_CD");
        	var gwanliDeptNm = this.ds_input.getColumn(0, "GWANLI_DEPT_NM");
        	var yyyy = this.ds_input.getColumn(0, "YYYY");

        	var gyeolgwabogo;
        	var oArg = {dancheCd:dancheCd, dancheNm:dancheNm, yyyy:yyyy, gyeolgwabogo:gyeolgwabogo, gwanliDeptCd:gwanliDeptCd, gwanliDeptNm:gwanliDeptNm};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup( "HwaldongNaeyoek","UD01::UD01_2110104_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
        			// 처리상태가 제출인 경우 삭제 불가
        			if(this.dsMaster.getColumn(i, "CHEORI_SANGTAE_GBCD") == "1")
        			{
        				this.gfn_alert("제출한 항목은 삭제할 수 없습니다.","제출정보","","warning");
        				return false;
        			}
        			// 처리상태가 접수인 경우 삭제 불가
        			else if(this.dsMaster.getColumn(i, "CHEORI_SANGTAE_GBCD") == "2")
        			{
        				this.gfn_alert("접수한 항목은 삭제할 수 없습니다.","제출정보","","warning");
        				return false;
        			}
        			else
        			{
        				this.dsMaster.deleteRow(i);
        			}
                }
            }
            this.dsMaster.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UD/UD01/Delete_2110104_M.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
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

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 단체코드값을 변경하면 단체명이 초기화됨
        this.edtDancheCd_onchanged = function(obj,e)
        {
        	this.edtDancheNm.set_value("");
        };

        // 엔터키 누르면 조회
        this.div_00_calSearchSincheongSijakDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_SIJAK_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_calSearchSincheongJongryoDt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SINCHEONG_JONGRYO_DT",obj.value);
        		this.fn_Ret();
        	}
        };

        // 엔터키 누르면 조회
        this.div_00_cboSearchCheoriSangtae_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"CHEORI_SANGTAE_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        /**********************************************************************
                09. 팝업
        ***********************************************************************/
        // 활동내역서제출 팝업
        this.grdMaster_oncellclick = function(obj,e)
        {
        	if(e.col != 0)
        	{
        		var dancheCd          = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_CD");
        		var dancheNm          = this.dsMaster.getColumn(this.dsMaster.rowposition, "DANCHE_NM");
        		var yyyy              = this.dsMaster.getColumn(this.dsMaster.rowposition, "YYYY");
        		var gyeolgwabogo      = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYEOLGWA_BOGO_CNT");
        		var cheoriSangtaeGbcd = this.dsMaster.getColumn(this.dsMaster.rowposition, "CHEORI_SANGTAE_GBCD");  //처리상태

                var oArg = {dancheCd:dancheCd, dancheNm:dancheNm, yyyy:yyyy, gyeolgwabogo:gyeolgwabogo, cheoriSangtaeGbcd:cheoriSangtaeGbcd};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "HwaldongNaeyoek","UD01::UD01_2110104_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
            // 팝업 명 삭제 시 코드 초기화
        	if (e.columnid == "DANCHE_NM") {
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "DANCHE_CD", "");
        		   obj.setColumn(obj.rowposition, "GWANLI_DEPT_CD", "");
        		   obj.setColumn(obj.rowposition, "GWANLI_DEPT_NM", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallDanchePopup(e.newvalue);
        			}
        	   }
        	}
        };

        // 단체 팝업
        this.btnSearchDanche_onclick = function(obj,e)
        {
        	var dancheCdNm = this.div_00.form.edtDancheNm.value;

        	this.fn_setCallDanchePopup(dancheCdNm);
        };

        this.fn_setCallDanchePopup = function(strSearchValue)
        {
        	this.dsDanche.clearData();

        	this.ds_input1.setColumn(this.ds_input1.rowposition, "DANCHE_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/com/Retrieve_P07.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDanche=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsDanche.rowcount == 1)
        	{
        		this.ds_input.setColumn(this.ds_input.rowposition, "DANCHE_CD",      this.dsDanche.getColumn(0,"DANCHE_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "DANCHE_NM",      this.dsDanche.getColumn(0,"DANCHE_NM"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_CD", this.dsDanche.getColumn(0,"DEPT_CD"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "GWANLI_DEPT_NM", this.dsDanche.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var oArg = {deptCdNm:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "DancheCdNm","com::COMM_P07.xfdl",oArg,sPopupCallBack,oOption);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.div_00.form.cboSearchCheoriSangtae.addEventHandler("onkeydown",this.div_00_cboSearchCheoriSangtae_onkeydown,this);
            this.div_00.form.calSearchSincheongSijakDt.addEventHandler("onkeydown",this.div_00_calSearchSincheongSijakDt_onkeydown,this);
            this.div_00.form.calSearchSincheongJongryoDt.addEventHandler("onkeydown",this.div_00_calSearchSincheongJongryoDt_onkeydown,this);
            this.div_00.form.edtDancheCd.addEventHandler("onchanged",this.edtDancheCd_onchanged,this);
            this.div_00.form.btnSearchDanche.addEventHandler("onclick",this.btnSearchDanche_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UD01_2110104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
