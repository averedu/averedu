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
            this.set_titletext("교과목");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUseYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GYOGWAMOK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYOGWAMOK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_ENM\" type=\"STRING\" size=\"200\"/><Column id=\"GYOGWAMOK_GAEYO\" type=\"STRING\" size=\"1000\"/><Column id=\"GYOGWAMOK_GAEYO_ENM\" type=\"STRING\" size=\"1000\"/><Column id=\"HAKJEOM\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_SISU\" type=\"STRING\" size=\"256\"/><Column id=\"IRON_TM\" type=\"STRING\" size=\"256\"/><Column id=\"SILSEUP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"TONGHAP_TM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_NEUNGRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PYEONGGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOK_BUYEO_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUISIL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GANGUIPYEONGGA_TYCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYOYANG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"PO_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_DAEHAK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_HAKGWA_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUGWAN_JEONGONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"GWAMOK_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"GYOJIKGWAMOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GYOGWAMOK_CD_NM\" type=\"STRING\" size=\"50\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","70",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"49\"/><Column size=\"101\"/><Column size=\"184\"/><Column size=\"146\"/><Column size=\"45\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"48\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"교과목코드\"/><Cell col=\"2\" text=\"교과목명\"/><Cell col=\"3\" text=\"학과/전공\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"이론&#13;&#10;시수\"/><Cell col=\"6\" text=\"실습&#13;&#10;시수\"/><Cell col=\"7\" text=\"통합&#13;&#10;시수\"/><Cell col=\"8\" text=\"이수구분\"/><Cell col=\"9\" text=\"과목구분\"/><Cell col=\"10\" text=\"교직과목&#13;&#10;여부\"/><Cell col=\"11\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GYOGWAMOK_CD\" editmaxlength=\"10\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:GYOGWAMOK_NM\" editmaxlength=\"200\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_NM\" editmaxlength=\"256\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKJEOM\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:IRON_SISU\" editmaxlength=\"22\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:SILSEUP_SISU\" editmaxlength=\"22\"/><Cell col=\"7\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:TONGHAP_SISU\" editmaxlength=\"22\"/><Cell col=\"8\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:ISU_GBNM\" editmaxlength=\"256\"/><Cell col=\"9\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:GWAMOK_GBNM\" editmaxlength=\"256\"/><Cell col=\"10\" displaytype=\"checkboxcontrol\" edittype=\"none\" textAlign=\"left\" text=\"bind:GYOJIKGWAMOK_YN\" editmaxlength=\"1\"/><Cell col=\"11\" displaytype=\"checkboxcontrol\" edittype=\"none\" textAlign=\"left\" text=\"bind:USE_YN\" editmaxlength=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","830",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","765",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-51","9","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("교과목");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchGyogwamokCdNm","80","9","233","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","335","9","86","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("사용여부");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchUseYn","435","9","177","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0","620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","70","-9","10","57",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31","620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01","313","1","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","425","-9","10","57",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","810","8","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10",null,"233","24",null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("교과목");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchUseYn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchGyogwamokCdNm","value","ds_input","GYOGWAMOK_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P03_P03.xfdl(기본과목 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/19
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

        	if( !this.gfn_isNull(this.getOwnerFrame().gyogwamokCdNm)){
        		this.ds_input.setColumn(0, "GYOGWAMOK_CD_NM", this.getOwnerFrame().gyogwamokCdNm);
        	}
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsUseYn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00801";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        this.btnSearch_onclick = function(obj,e)
        {
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GYOGWAMOK_CD_NM")))
        	{
        		this.gfn_alert("교과목을 입력하세요.", "교과목정보" ,"","information");
        		return false;
        	}

        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/com/Retrieve_P03.do";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(34);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_CD");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_NM");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_ENM");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_GAEYO");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOGWAMOK_GAEYO_ENM");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKJEOM");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IRON_SISU");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SILSEUP_SISU");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TONGHAP_SISU");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "IRON_TM");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SILSEUP_TM");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "TONGHAP_TM");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ISU_GBCD");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GWAMOK_GBCD");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_GBCD");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "NCS_NEUNGRYEOK_GBCD");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "PYEONGGA_GBCD");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SEONGJEOK_BUYEO_GBCD");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GANGUISIL_GBCD");
        	objRtnArr[19] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GANGUIPYEONGGA_YN");
        	objRtnArr[20] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GANGUIPYEONGGA_TYCD");
        	objRtnArr[21] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOYANG_GBCD");
        	objRtnArr[22] = this.dsMaster.getColumn(this.dsMaster.rowposition, "PO_YN");
        	objRtnArr[23] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_DAEHAK_CD");
        	objRtnArr[24] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_DAEHAK_NM");
        	objRtnArr[25] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_HAKGWA_CD");
        	objRtnArr[26] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_HAKGWA_NM");
        	objRtnArr[27] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_JEONGONG_CD");
        	objRtnArr[28] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUGWAN_JEONGONG_NM");
        	objRtnArr[29] = this.dsMaster.getColumn(this.dsMaster.rowposition, "ISU_GBNM");
        	objRtnArr[30] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GWAMOK_GBNM");
        	objRtnArr[31] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYOJIKGWAMOK_YN");
        	objRtnArr[32] = this.dsMaster.getColumn(this.dsMaster.rowposition, "USE_YN");
        	objRtnArr[33] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_NM");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchGyogwamokCdNm_onkeydown = function(obj,e)
        {
        	if (obj.name == "edtSearchGyogwamokCdNm")
        	{
        		//13(Enter) 누르면 조회
        		if(e.keycode == 13)
        		{
        			this.ds_input.setColumn(0,"GYOGWAMOK_CD_NM",obj.value);
        			this.fn_Ret();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.edtSearchGyogwamokCdNm.addEventHandler("onkeydown",this.divSearch_edtSearchGyogwamokCdNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COMM_P03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
