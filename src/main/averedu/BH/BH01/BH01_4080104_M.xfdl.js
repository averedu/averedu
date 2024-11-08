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
            this.set_titletext("일정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIljeong", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputIljeong", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheck", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputCheck", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","180","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHakgi","270","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","260","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","180","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","42","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","80","48","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","45","80","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일정목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","77",null,"190","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"185\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"년도\"/><Cell col=\"3\" text=\"학기\"/><Cell col=\"4\" text=\"현재기준\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DIFF_SEQU\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;normal&apos;:&apos;none&apos;\" editinputtype=\"number,digit\"/><Cell col=\"2\" text=\"bind:SCHL_YEAR\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;normal&apos;:&apos;none&apos;\" editinputtype=\"number,digit\"/><Cell col=\"3\" text=\"bind:SCHL_SMST\" displaytype=\"expr:SCHL_SMST == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\" combodataset=\"dsGrdHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:CURR_GUBN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","267",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab","0","302",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_preload("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("재학생");
            obj.set_url("BH01::BH01_4080104_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("신입생");
            obj.set_url("BH01::BH01_4080104_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage3",this.Tab);
            obj.set_text("편입생");
            obj.set_url("BH01::BH01_4080104_T01.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("일정관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHakgi","value","ds_input","HAKGI");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","BH01::BH01_4080104_T01.xfdl");
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsIljeong");
            this._addPreloadList("data","","dsCheck");
        };
        
        // User Script
        this.registerScript("BH01_4080104_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH01_4080104_M.xfdl(일정관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/04
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
        this.lvchkColidDs   = "DIFF_SEQU$SCHL_YEAR$SCHL_SMST"; // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "차수$년도$학기";
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
            var strDs 	= "dsHakgi|dsGrdHakgi";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd = "00022|00022"; 	// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb = "T|S"; 		// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn = ""; 			// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId   = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	this.fn_RetCurrSchl();
        };

        this.fn_PostIljeongInit = function()
        {
        	if (this.dsIljeong.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsIljeong.getColumn(0, "SCHL_YEAR"));
        		this.ds_input.setColumn(0,"HAKGI",  this.dsIljeong.getColumn(0, "SCHL_SMST"));
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
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
        			case "iljeongInit":
        					this.fn_PostIljeongInit();
        			    break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 팁
                         this.fn_Tip();
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
            var strUrl      = "/prj/BH/BH01/Retrieve_4080104_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 생활관일정 조회 실행
         */
        this.fn_RetCurrSchl = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "iljeongInit";
            var strUrl      = "/prj/BH/BH_COMMON/GET_CURR_SCHL.do";
            var strInDs     = "ds_input=ds_inputIljeong";
            var strOutDs    = "dsIljeong=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 중복체크 실행
         */
        this.fn_checkPk = function(diffSequ, schlYear, schlSmst) {
        	this.ds_inputCheck.setColumn(0, "DIFF_SEQU", diffSequ);
        	this.ds_inputCheck.setColumn(0, "SCHL_YEAR", schlYear);
        	this.ds_inputCheck.setColumn(0, "SCHL_SMST", schlSmst);

            var strSvc      = "checkPk";
            var strUrl      = "/prj/BH/BH01/Retrieve_4080104_CountPk.do";
            var strInDs     = "ds_input=ds_inputCheck";
            var strOutDs    = "dsCheck=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        	return nexacro.toNumber(this.dsCheck.getColumn(0, "CNT"));
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);

        	if (this.dsMaster.rowcount == 0) {
        		this.Tab.TabPage1.form.clearData();
        		this.Tab.TabPage2.form.clearData();
        		this.Tab.TabPage3.form.clearData();
        	}
        };

        this.fn_TabRet = function(e)
        {
        	var rowPosition = this.dsMaster.rowposition;
        	var schlYear = this.dsMaster.getColumn(rowPosition, "SCHL_YEAR"); // 년도
        	var schlSmst = this.dsMaster.getColumn(rowPosition, "SCHL_SMST"); // 학기
        	var diffSequ = this.dsMaster.getColumn(rowPosition, "DIFF_SEQU"); // 차수
        	var dataCode = "";

        	// 학생구분 - 0.재학 1.신입 2.편입
        	var tabPageForm;
        	var tabIndex = this.Tab.tabindex;
        	if (tabIndex == 0) {
        		tabPageForm = this.Tab.TabPage1.form;
        	} else if (tabIndex == 1) {
        		tabPageForm = this.Tab.TabPage2.form;
        	} else {
        		tabPageForm = this.Tab.TabPage3.form;
        	}

        	tabPageForm.fn_Ret(schlYear, schlSmst, tabIndex, diffSequ, dataCode);
        }

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if (
        		this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster)
        	    || this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster) || this.gfn_isUpdate(this.Tab.TabPage3.form.dsMaster)
        	) {
        	    this.alert('수정된 정보가 존재합니다. 저장 후 추가하시기 바랍니다.');
         	    return;
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
            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow,"CHK", "0");
            this.dsMaster.setColumn(nRow,"SCHL_SMST", "");

        	this.fn_TabNew();
        };

        this.fn_TabNew = function() {
        	// 학생구분 - 0.재학 1.신입 2.편입
        	this.Tab.TabPage1.form.fn_New("0");
        	this.Tab.TabPage2.form.fn_New("1");
        	this.Tab.TabPage3.form.fn_New("2");
        }

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
        	var rowPosition = this.dsMaster.rowposition;
        	var rowType = this.dsMaster.getRowType(rowPosition);
        	if (rowType == 2) { // 삭제하려는 행 신규행일시 삭제 O
        		this.dsMaster.deleteRow(rowPosition);
        		return false;
        	} else if ( // 수정된 행 존재시 삭제 X
        		this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster)
        		|| this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster) || this.gfn_isUpdate(this.Tab.TabPage3.form.dsMaster)
        	) {
        	    this.alert('수정된 정보가 존재합니다. 저장 후 삭제하시기 바랍니다.');
         	    return;
        	}

        	// 삭제하려는 행 현재기준일시 삭제 X
        	var currGubn = this.dsMaster.getColumn(rowPosition, "CURR_GUBN"); // 삭제행의 현재기준
        	if (currGubn == "1") {
        	    this.alert('"현재기준" 항목이 체크되어있을 경우, 삭제할수 없습니다. [일정목록 Line : ' + (rowPosition + 1) + ']');
        		return false;
        	}

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if (result == 0) {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(rowPosition);

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
            var strUrl      = "/prj/BH/BH01/Delete_4080104_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if (this.dsMaster.rowcount > 0) {
                for (var i = 0; i < this.dsMaster.rowcount; i++) {
                    if (this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if(
        		!this.gfn_isUpdate(this.dsMaster) && !this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster)
        		&& !this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster)&& !this.gfn_isUpdate(this.Tab.TabPage3.form.dsMaster)
        	) {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
        	}

        	var lastRow = this.dsMaster.rowcount - 1; // 마지막 행
        	if (this.dsMaster.getRowType(lastRow) == 2) {
        		var diffSequ = this.dsMaster.getColumn(lastRow, 'DIFF_SEQU'); // 차수
        		var schlYear = this.dsMaster.getColumn(lastRow, 'SCHL_YEAR'); // 년도
        		var schlSmst = this.dsMaster.getColumn(lastRow, 'SCHL_SMST'); // 학기
        		var pkChk = this.fn_checkPk(diffSequ, schlYear, schlSmst); // 생활관 일정 pk 체크
        		if (pkChk > 0) {
        			this.alert(
        				schlYear + '년도 ' + (schlSmst == '11' ? '1학기 ' : schlSmst == '12' ? '하계학기 ' : schlSmst == '21' ? '2학기 ' : '동계학기 ')
        				+ diffSequ + '차수의 생활관 일정이 이미 존재합니다.'
        			);

        			return false;
        		}
        	}

            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if (
        		!this.fn_PreSave() || !this.Tab.TabPage1.form.fn_PreSave()
        		|| !this.Tab.TabPage2.form.fn_PreSave() || !this.Tab.TabPage3.form.fn_PreSave()
        	) {
        		return false;
        	}

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/BH/BH01/Save_4080104_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);

        	this.fn_TabSave();
        };

        this.fn_TabSave = function()
        {
        	if (this.dsMaster.getRowType(this.dsMaster.rowposition) == 2) {
          		this.Tab.TabPage1.form.fn_Save();
          		this.Tab.TabPage2.form.fn_Save();
          		this.Tab.TabPage3.form.fn_Save();
        	} else {
        		// 재학생
        		if(this.Tab.tabindex==0) {
        			this.Tab.TabPage1.form.fn_Save();
        		}

        		// 신입생
        		if(this.Tab.tabindex==1){
        			this.Tab.TabPage2.form.fn_Save();
        		}

        		// 편입생
        		if(this.Tab.tabindex==2){
        			this.Tab.TabPage3.form.fn_Save();
        		}
        	}
        }

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // rowpos 이동시 학생별 일정검색
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(e.newrow) == 2) {
        		this.Tab.TabPage1.form.fn_clearData();
        		this.Tab.TabPage2.form.fn_clearData();
        		this.Tab.TabPage3.form.fn_clearData();
        	} else {
        		this.fn_TabRet();
        	}

        	if (obj.getRowType(e.oldrow) == 2) {
        		obj.deleteRow(e.oldrow);
        	}
        };

        // tab index 이동시 일정검색
        this.Tab_onchanged = function(obj,e)
        {
        	if (this.dsMaster.rowcount != 0 && this.dsMaster.getRowType(this.dsMaster.rowposition) != 2) {
        		this.fn_TabRet();
        	}
        };

        // 기준년도, 학기, 차수 변경 시 학생별 일정목록 갱신
        this.dsMaster_onvaluechanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == 2) { // 신규
        		// 각 그리드 값 변경
        		this.Tab.TabPage1.form.fn_setGrdValue(e.columnid, e.newvalue);
        		this.Tab.TabPage2.form.fn_setGrdValue(e.columnid, e.newvalue);
        		this.Tab.TabPage3.form.fn_setGrdValue(e.columnid, e.newvalue);
        	}
        };

        // 기준년도, 학기, 차수 rowpos 이동 시 학생별 일정 수정 여부 chk
        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if (
        		this.gfn_isUpdate(this.Tab.TabPage1.form.dsMaster) || this.gfn_isUpdate(this.Tab.TabPage2.form.dsMaster)
        		|| this.gfn_isUpdate(this.Tab.TabPage3.form.dsMaster)
        	) {
        		var result = this.gfn_confirm("수정중인 학생구분별 일정이 초기화됩니다.\n계속하시겠습니까?", "rowposchange", "", "question");
        		if(result == 0) {
        			return false;
        		}
        	}
        };

        // 일정 목록 (신규)차수, 년도, 학기 변경 / (갱신) 현재기준
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "CURR_GUBN") { // 현재기준 변경시
        		// 일정목록 갱신
        		for (var i = 0; i < this.dsMaster.rowcount; i++) {
        			if (i != e.row) {
        				obj.setColumn(i, "CURR_GUBN", "0");
        			} else {
        				obj.setColumn(i, "CURR_GUBN", "1");
        			}
        		}
        	}
        };

        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        // 엔터 입력
        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHakgi.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputIljeong.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.ds_inputCheck.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH01_4080104_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
