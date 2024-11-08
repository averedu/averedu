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
            this.set_titletext("보직");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BALRYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BALRYEONG_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"BALRYEONG_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HOBONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOLHU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BUSEOHU_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONGHU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKJONGHU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKGEUPHU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWIHU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HOBONGHU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_REBEL\" type=\"STRING\" size=\"256\"/><Column id=\"WICHOK_WIWONHOE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WICHOK_JIKCHAEK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SIHAENG_GIGWAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSA_MYEONGRYEONG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HAWI_MYEONGRYEONG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_MJOR\" type=\"STRING\" size=\"256\"/><Column id=\"UNIV_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_GUBUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAEPYO_BOJIK_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_YN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOJIK_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBojik", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","313","0","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("stc_09_00_00","7","9","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("보직 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","26","670","8",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","34",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"170\"/><Column size=\"110\"/><Column size=\"88\"/><Column size=\"97\"/><Column size=\"109\"/><Column size=\"104\"/><Column size=\"56\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"보직부서\"/><Cell col=\"2\" rowspan=\"2\" text=\"보직명\"/><Cell col=\"3\" colspan=\"2\" text=\"기간\"/><Cell col=\"5\" rowspan=\"2\" text=\"인사번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"허위번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"대표보직\"/><Cell col=\"8\" rowspan=\"2\" text=\"해임여부\"/><Cell row=\"1\" col=\"3\" text=\"시작일\"/><Cell row=\"1\" col=\"4\" text=\"종료일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BOJIK_DEPT_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:BOJIK_GBCD\" displaytype=\"combotext\" combodataset=\"dsBojik\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:BALRYEONG_FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:BALRYEONG_TODT\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:INSA_MYEONGRYEONG_NO\"/><Cell col=\"6\" text=\"bind:HAWI_MYEONGRYEONG_NO\"/><Cell col=\"7\" text=\"bind:DAEPYO_BOJIK_GUBUN_CD\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:BOKJIK_GUBUN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("보직");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010104_T05.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010104_T05.xfdl(보직)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/09/26
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
            var strDs    = "dsBojik";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00216";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(sabeon)
        {
            this.ds_input.setColumn(0, "SABEON", sabeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T05.do";
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
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 보직 대표보직 변경시 체크박스 해제
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "DAEPYO_BOJIK_GUBUN_CD"){
        		var lastChaeck = this.dsMaster.getColumn(e.row , "DAEPYO_BOJIK_GUBUN_CD");

        		if (lastChaeck == "1"){
        			for(var i = 0 ; i < this.dsMaster.rowcount ; i++){
        				if (i != e.row){
        					this.dsMaster.setColumn(i, "DAEPYO_BOJIK_GUBUN_CD", "0");
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("AM01_3010104_T05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
