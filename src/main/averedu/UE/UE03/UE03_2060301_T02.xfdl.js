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
            this.set_titletext("수납원장");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"15\"/><Column id=\"HAKJEOK_CD\" type=\"STRING\" size=\"2\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"206\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_DAESANG_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"SUNAP_WONJANG_MAGAM_DT\" type=\"STRING\" size=\"32\"/><Column id=\"DAEHAK_SUNAP_GYEJWA_GBCD_1\" type=\"STRING\" size=\"1\"/><Column id=\"SUNAP_GYEJWA_EUNHAENG_CD_1\" type=\"STRING\" size=\"3\"/><Column id=\"SUNAP_EUNHAENG_GYEJWA_NO_1\" type=\"STRING\" size=\"50\"/><Column id=\"SUNAP_GYEJWA_YEGEUMJU_NM_1\" type=\"STRING\" size=\"40\"/><Column id=\"DAEHAK_SUNAP_GYEJWA_GBCD_2\" type=\"STRING\" size=\"26\"/><Column id=\"SUNAP_GYEJWA_EUNHAENG_CD_2\" type=\"STRING\" size=\"26\"/><Column id=\"SUNAP_EUNHAENG_GYEJWA_NO_2\" type=\"STRING\" size=\"26\"/><Column id=\"SUNAP_GYEJWA_YEGEUMJU_NM_2\" type=\"STRING\" size=\"26\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_1_CD\" type=\"STRING\" size=\"6\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_1_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_2_CD\" type=\"STRING\" size=\"25\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_2_AMT\" type=\"STRING\" size=\"1\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_3_CD\" type=\"STRING\" size=\"25\"/><Column id=\"JAEDAN_SUHYE_JANGHAK_3_AMT\" type=\"STRING\" size=\"1\"/><Column id=\"GYONAE_JANGHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOOE_JANGHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HU_GYONAE_JANGHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HU_GYOOE_JANGHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YECHI_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"IPHAK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUEOP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GISEONGHOE_AMT\" type=\"STRING\" size=\"1\"/><Column id=\"HAKSAENGHOE_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AELBEOM_AMT\" type=\"STRING\" size=\"1\"/><Column id=\"SUHYEGYEONG_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/><Column id=\"DAESANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"256\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAK_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"BOKHAK_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj._setContents("<ColumnInfo><Column id=\"GYOYUKCHEONG_CD\" type=\"STRING\" size=\"20\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_09_00","7","10",null,"22","1448",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수납원장");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","9",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","10","27",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","1","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01",null,"1","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1110","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"239\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과/전공\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"국가장학금\"/><Cell col=\"6\" text=\"교내장학금\"/><Cell col=\"7\" text=\"교외장학금\"/><Cell col=\"8\" text=\"등록금총액\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"GYOYUKCHEONG_CD\"/><Cell col=\"2\" text=\"bind:HAKNYEON\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:JAEDAN_SUHYE_JANGHAK_1_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" displaytype=\"number\" textAlign=\"right\" text=\"bind:GYONAE_JANGHAK_AMT\"/><Cell col=\"7\" text=\"bind:GYOOE_JANGHAK_AMT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"expr:IPHAK_AMT + SUEOP_AMT\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel2","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMaster");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학적코드\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"학생명\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"등록납부대상구분\"/><Cell col=\"7\" text=\"수납원장마감일자\"/><Cell col=\"8\" text=\"대학수납 계좌구분코드1\"/><Cell col=\"9\" text=\"수납계좌 은행코드1\"/><Cell col=\"10\" text=\"수납은행 계좌번호1\"/><Cell col=\"11\" text=\"수납계좌 예금주명1\"/><Cell col=\"12\" text=\"대학수납 계좌구분코드2\"/><Cell col=\"13\" text=\"수납계좌 은행코드2\"/><Cell col=\"14\" text=\"수납은행 계좌번호2\"/><Cell col=\"15\" text=\"수납계좌 예금주명2\"/><Cell col=\"16\" text=\"재단수혜 장학1 코드\"/><Cell col=\"17\" text=\"재단수혜 장학1 금액\"/><Cell col=\"18\" text=\"재단수혜 장학2 코드\"/><Cell col=\"19\" text=\"재단수혜 장학2 금액\"/><Cell col=\"20\" text=\"재단수혜 장학3 코드\"/><Cell col=\"21\" text=\"재단수혜 장학3 금액\"/><Cell col=\"22\" text=\"선감면 교내 장학금\"/><Cell col=\"23\" text=\"선감면 교외 장학금\"/><Cell col=\"24\" text=\"후지급 교내 장학금\"/><Cell col=\"25\" text=\"후지급 교외 장학금\"/><Cell col=\"26\" text=\"예치금\"/><Cell col=\"27\" text=\"입학금\"/><Cell col=\"28\" text=\"수업료\"/><Cell col=\"29\" text=\"기성회비\"/><Cell col=\"30\" text=\"학생회비\"/><Cell col=\"31\" text=\"학생수혜비\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_CD\"/><Cell col=\"1\" text=\"bind:HAKJEOK_CD\"/><Cell col=\"2\" text=\"bind:RES_NO\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:DEUNGROK_DAESANG_GUBUN\"/><Cell col=\"7\" text=\"bind:SUNAP_WONJANG_MAGAM_DT\"/><Cell col=\"8\" text=\"bind:DAEHAK_SUNAP_GYEJWA_GBCD_1\"/><Cell col=\"9\" text=\"bind:SUNAP_GYEJWA_EUNHAENG_CD_1\"/><Cell col=\"10\" text=\"bind:SUNAP_EUNHAENG_GYEJWA_NO_1\"/><Cell col=\"11\" text=\"bind:SUNAP_GYEJWA_YEGEUMJU_NM_1\"/><Cell col=\"12\" text=\"bind:DAEHAK_SUNAP_GYEJWA_GBCD_2\"/><Cell col=\"13\" text=\"bind:SUNAP_GYEJWA_EUNHAENG_CD_2\"/><Cell col=\"14\" text=\"bind:SUNAP_EUNHAENG_GYEJWA_NO_2\"/><Cell col=\"15\" text=\"bind:SUNAP_GYEJWA_YEGEUMJU_NM_2\"/><Cell col=\"16\" text=\"bind:JAEDAN_SUHYE_JANGHAK_1_CD\"/><Cell col=\"17\" text=\"bind:JAEDAN_SUHYE_JANGHAK_1_AMT\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:JAEDAN_SUHYE_JANGHAK_2_CD\"/><Cell col=\"19\" text=\"bind:JAEDAN_SUHYE_JANGHAK_2_AMT\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:JAEDAN_SUHYE_JANGHAK_3_CD\"/><Cell col=\"21\" text=\"bind:JAEDAN_SUHYE_JANGHAK_3_AMT\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:GYONAE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:GYOOE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:HU_GYONAE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:HU_GYOOE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:YECHI_AMT\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:IPHAK_AMT\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:SUEOP_AMT\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:GISEONGHOE_AMT\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:HAKSAENGHOE_AMT\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:SUHYEGYEONG_AMT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel1","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsMaster");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학적코드\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"학생명\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"등록납부대상구분\"/><Cell col=\"7\" text=\"수납원장마감일자\"/><Cell col=\"8\" text=\"대학수납 계좌구분코드1\"/><Cell col=\"9\" text=\"수납계좌 은행코드1\"/><Cell col=\"10\" text=\"수납은행 계좌번호1\"/><Cell col=\"11\" text=\"수납계좌 예금주명1\"/><Cell col=\"12\" text=\"대학수납 계좌구분코드2\"/><Cell col=\"13\" text=\"수납계좌 은행코드2\"/><Cell col=\"14\" text=\"수납은행 계좌번호2\"/><Cell col=\"15\" text=\"수납계좌 예금주명2\"/><Cell col=\"16\" text=\"재단수혜 장학1 코드\"/><Cell col=\"17\" text=\"재단수혜 장학1 금액\"/><Cell col=\"18\" text=\"재단수혜 장학2 코드\"/><Cell col=\"19\" text=\"재단수혜 장학2 금액\"/><Cell col=\"20\" text=\"재단수혜 장학3 코드\"/><Cell col=\"21\" text=\"재단수혜 장학3 금액\"/><Cell col=\"22\" text=\"선감면 교내 장학금\"/><Cell col=\"23\" text=\"선감면 교외 장학금\"/><Cell col=\"24\" text=\"후지급 교내 장학금\"/><Cell col=\"25\" text=\"후지급 교외 장학금\"/><Cell col=\"26\" text=\"예치금\"/><Cell col=\"27\" text=\"입학금\"/><Cell col=\"28\" text=\"수업료\"/><Cell col=\"29\" text=\"기성회비\"/><Cell col=\"30\" text=\"학생회비\"/><Cell col=\"31\" text=\"학생모사진비\"/><Cell col=\"32\" text=\"학생수혜비\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_CD\"/><Cell col=\"1\" text=\"bind:HAKJEOK_CD\"/><Cell col=\"2\" text=\"bind:RES_NO\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:DEUNGROK_DAESANG_GUBUN\"/><Cell col=\"7\" text=\"bind:SUNAP_WONJANG_MAGAM_DT\"/><Cell col=\"8\" text=\"bind:DAEHAK_SUNAP_GYEJWA_GBCD_1\"/><Cell col=\"9\" text=\"bind:SUNAP_GYEJWA_EUNHAENG_CD_1\"/><Cell col=\"10\" text=\"bind:SUNAP_EUNHAENG_GYEJWA_NO_1\"/><Cell col=\"11\" text=\"bind:SUNAP_GYEJWA_YEGEUMJU_NM_1\"/><Cell col=\"12\" text=\"bind:DAEHAK_SUNAP_GYEJWA_GBCD_2\"/><Cell col=\"13\" text=\"bind:SUNAP_GYEJWA_EUNHAENG_CD_2\"/><Cell col=\"14\" text=\"bind:SUNAP_EUNHAENG_GYEJWA_NO_2\"/><Cell col=\"15\" text=\"bind:SUNAP_GYEJWA_YEGEUMJU_NM_2\"/><Cell col=\"16\" text=\"bind:JAEDAN_SUHYE_JANGHAK_1_CD\"/><Cell col=\"17\" text=\"bind:JAEDAN_SUHYE_JANGHAK_1_AMT\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:JAEDAN_SUHYE_JANGHAK_2_CD\"/><Cell col=\"19\" text=\"bind:JAEDAN_SUHYE_JANGHAK_2_AMT\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:JAEDAN_SUHYE_JANGHAK_3_CD\"/><Cell col=\"21\" text=\"bind:JAEDAN_SUHYE_JANGHAK_3_AMT\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:GYONAE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:GYOOE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:HU_GYONAE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:HU_GYOOE_JANGHAK_AMT\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:YECHI_AMT\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:IPHAK_AMT\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:SUEOP_AMT\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:GISEONGHOE_AMT\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:HAKSAENGHOE_AMT\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:AELBEOM_AMT\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:SUHYEGYEONG_AMT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("수납원장");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UE03_2060301_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE03_2060301_T02.xfdl(수납원장)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/08
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
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
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
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function(data, hakgwa)
        {
        	this.ds_input.copyData(data);
        	this.dsHakgwa.copyData(hakgwa);
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(data, hakgwa)
        {
        	if(!this.fn_PreRet(data, hakgwa))
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/UE/UE03/Retrieve_2060301_M_2.do";
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
        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel을 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
        	if (this.ds_input.getColumn(0, "HAKGI", "11")) {
        		this.gfn_excelExport(this.grdExcel2, "수납원장","수납원장");
        	} else {
        		this.gfn_excelExport(this.grdExcel1, "수납원장","수납원장");
        	}
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE03_2060301_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
