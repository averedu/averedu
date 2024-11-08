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
            this.set_titletext("장학");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JANGHAK_YAKEO_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_ENG_NM\" type=\"STRING\" size=\"100\"/><Column id=\"JIWON_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JANGHAK_GIGWAN_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"JANGHAK_GYEYEOL_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GUKGA_JANGHAK_MAECHING_CD\" type=\"STRING\" size=\"10\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_GIGAN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOJISEO_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_BANYEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HOEGYE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JUNGBOK_SUHYE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JEOKYONG_DAESANG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKSAENG_SINCHEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JANGHAK_CD_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"YEONSOK_JANGHAK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJiwon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnClose","1130",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","1065",null,"60","25",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","265","10","56","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("장학명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchJanghakCdNm","331","9","173","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0","320","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","321","-9","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31","320","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Button("btnSearch","1107","8","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","5","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00","85","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyonaeoe","95","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchGyonaeoe");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","225","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","504","0","56","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","530","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchUseYn","620","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsYn");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00_00_00","610","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","10",null,"233","24",null,"10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","70",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"교내/외\"/><Cell col=\"2\" text=\"장학코드\"/><Cell col=\"3\" text=\"장학명\"/><Cell col=\"4\" text=\"약어명\"/><Cell col=\"5\" text=\"지원구분\"/><Cell col=\"6\" text=\"연속장학\" suppressalign=\"middle\"/><Cell col=\"7\" text=\"중복수혜\"/><Cell col=\"8\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:GYONAEOE_GBCD\" combodataset=\"dsGyonaeoe\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"expr: GYONAEOE_GBCD != &quot;&quot; ? &quot;combotext&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:JANGHAK_CD\"/><Cell col=\"3\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JANGHAK_YAKEO_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JIWON_GBCD\" combodataset=\"dsJiwon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"expr:YEONSOK_JANGHAK_YN==1?&apos;Y&apos;:&apos;&apos;\" combodataset=\"ds_연속장학여부_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"7\" text=\"expr:JUNGBOK_SUHYE_YN==1?&apos;Y&apos;:&apos;&apos;\" combodataset=\"ds_고지서포함여부_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/><Cell col=\"8\" text=\"expr:USE_YN==1?&apos;Y&apos;:&apos;&apos;\" combodataset=\"ds_중복수혜여부_grid\" combocodecol=\"cd\" combodatacol=\"cdNm\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("장학");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divSearch.form.edtSearchJanghakCdNm","value","ds_input","JANGHAK_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSearchGyonaeoe","value","ds_input","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchUseYn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("COMM_P11.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COM_P05_P05.xfdl(비교과개설관리 관리(조회))
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

        	if( !this.gfn_isNull(this.getOwnerFrame().janghakCdNm)){
        		this.ds_input.setColumn(0, "JANGHAK_CD_NM",  this.getOwnerFrame().janghakCdNm);
        	}
        	if( !this.gfn_isNull(this.getOwnerFrame().yeonsokJanghakYn)){
        		this.ds_input.setColumn(0, "YEONSOK_JANGHAK_YN",  this.getOwnerFrame().yeonsokJanghakYn);
        	}

        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsSearchGyonaeoe|dsGyonaeoe|dsYn|dsJiwon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "02001|02001|000002|02002";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|T|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.fn_Ret();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/com/Retrieve_P11.do";
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
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.btnChoice_onclick = function(obj,e)
        {
        	var objRtnArr = new Array(19);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_CD");
        	objRtnArr[1] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_NM");
        	objRtnArr[2] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GYONAEOE_GBCD");
        	objRtnArr[3] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_YAKEO_NM");
        	objRtnArr[4] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_ENG_NM");
        	objRtnArr[5] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIWON_GBCD");
        	objRtnArr[6] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_GIGWAN_CD");
        	objRtnArr[7] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_DEUNGGEUP_GBCD");
        	objRtnArr[8] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JANGHAK_GYEYEOL_GBCD");
        	objRtnArr[9] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GUKGA_JANGHAK_MAECHING_CD");
        	objRtnArr[10] = this.dsMaster.getColumn(this.dsMaster.rowposition, "YEONSOK_JANGHAK_YN");
        	objRtnArr[11] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JIGEUP_GIGAN_GBCD");
        	objRtnArr[12] = this.dsMaster.getColumn(this.dsMaster.rowposition, "GOJISEO_POHAM_YN");
        	objRtnArr[13] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOEGYE_BANYEONG_YN");
        	objRtnArr[14] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HOEGYE_GBCD");
        	objRtnArr[15] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JUNGBOK_SUHYE_YN");
        	objRtnArr[16] = this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOKYONG_DAESANG_GBCD");
        	objRtnArr[17] = this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKSAENG_SINCHEONG_YN");
        	objRtnArr[18] = this.dsMaster.getColumn(this.dsMaster.rowposition, "USE_YN");

        	this.close(objRtnArr.toString());
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.divSearch_edtSearchJanghakCdNm_onkeydown = function(obj,e)
        {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"JANGHAK_CD_NM",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnChoice.addEventHandler("onclick",this.btnChoice_onclick,this);
            this.divSearch.form.edtSearchJanghakCdNm.addEventHandler("onkeydown",this.divSearch_edtSearchJanghakCdNm_onkeydown,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divSearch.form.cboSearchGyonaeoe.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.divSearch.form.cboSearchUseYn.addEventHandler("onkeydown",this.divSearch_cboSearchHaknyeon_onkeydown,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("COMM_P11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
