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
            this.set_titletext("입학원서조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"ERROR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"256\"/><Column id=\"JOLEOPNYEONDO_IPRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ONLINEBUDONGUI\" type=\"STRING\" size=\"256\"/><Column id=\"SEONGJEOKMIIPRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakGwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuyaGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonHyeongGbCd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_TYCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"RES_NO1\" type=\"STRING\" size=\"6\"/><Column id=\"RES_NO2\" type=\"STRING\" size=\"100\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"GENDER\" type=\"STRING\" size=\"10\"/><Column id=\"NAEOEGUKIN_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"POST\" type=\"STRING\" size=\"6\"/><Column id=\"JUSO_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"SANGSE_JUSO\" type=\"STRING\" size=\"500\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"50\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"15\"/><Column id=\"CHUGA_YEONRAKCHEO\" type=\"STRING\" size=\"15\"/><Column id=\"GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"CHULSIN_GOGYO_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYO_SEONGJEOK_IPRYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"TERM1_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM1_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM3_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GYOGWAMOK_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TERM2_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_SEOKCHA_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CD\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMJEONGGOSI_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GEOMJEONGGOSI_HOECHA\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DONGUI_NO\" type=\"STRING\" size=\"20\"/><Column id=\"GEOMJEONGGOSI_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_KOR_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_ENG_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GEOMJEONGGOSI_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHULSIN_DAEHAK_NM\" type=\"STRING\" size=\"200\"/><Column id=\"DAEHAKJOLEOP_YEJEONG_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"DAEHAKJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"AVG_PYEONGJEOM_BAEKBUNYUL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGISU_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOEGEUN_HAKGI_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GIJUN_PYEONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PYEONGJEOM_CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"BANK_NM\" type=\"STRING\" size=\"50\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"YEGEUMJU\" type=\"STRING\" size=\"40\"/><Column id=\"YEGEUMJU_GWANGYE\" type=\"STRING\" size=\"20\"/><Column id=\"SUSI_HAPGYEOK_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"HAKSAENGBU_ONLINEJEGONGDONGUI_YN\" type=\"STRING\" size=\"10\"/><Column id=\"SUJIP_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"GOYUSIKBYEOL_INFO_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_WITAK_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INFO_3JA_JEGONG_DONGUI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"JEONHYEONGRYONAPBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONGRYONAPBU_GBNM\" type=\"STRING\" size=\"256\"/><Column id=\"MYEONJE_SAYU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA1\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSUJA2\" type=\"STRING\" size=\"10\"/><Column id=\"NAEYONG_HWAKIN_YN\" type=\"STRING\" size=\"2\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MIDEUNGROK_SEBU_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_DTTM\" type=\"STRING\" size=\"14\"/><Column id=\"DELETE_YN\" type=\"STRING\" size=\"2\"/><Column id=\"DELETE_SAYU\" type=\"STRING\" size=\"1000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"1000\"/><Column id=\"GOGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"IJEON_SEONGJEOK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD_01\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_DT_01\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_DT_01\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STCD_02\" type=\"STRING\" size=\"256\"/><Column id=\"POGI_DT_02\" type=\"STRING\" size=\"256\"/><Column id=\"NAPBU_DT_02\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"107\"/><Column size=\"93\"/><Column size=\"165\"/><Column size=\"151\"/><Column size=\"141\"/><Column size=\"71\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"115\"/><Column size=\"119\"/><Column size=\"120\"/><Column size=\"225\"/><Column size=\"87\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"연번\"/><Cell col=\"1\" text=\"수험번호\"/><Cell col=\"2\" disptype=\"normal\" text=\"모집구분\"/><Cell col=\"3\" disptype=\"normal\" text=\"지망학과\"/><Cell col=\"4\" text=\"지망전공\"/><Cell col=\"5\" text=\"전형구분\"/><Cell col=\"6\" disptype=\"normal\" text=\"주야구분\"/><Cell col=\"7\" text=\"성명\"/><Cell col=\"8\" text=\"생년월일\"/><Cell col=\"9\" text=\"전화번호\"/><Cell col=\"10\" text=\"휴대폰\"/><Cell col=\"11\" text=\"추가연락처\"/><Cell col=\"12\" disptype=\"normal\" text=\"출신학교\"/><Cell col=\"13\" disptype=\"normal\" text=\"졸업합격년도\"/><Cell col=\"14\" text=\"접수자\"/><Cell col=\"15\" text=\"전형료\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SUHEOM_NO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:MOJIP_GBCD\" editmaxlength=\"10\" combodataset=\"dsMojipGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:HAKGWA_CD\" editmaxlength=\"10\" combodataset=\"dsHakGwa\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:JEONGONG_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsJeonGongGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:JEONHYEONG_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsJeonHyeongGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JUYA_GBCD\" editmaxlength=\"10\" combodataset=\"dsJuyaGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"7\" text=\"bind:SUHEOMSAENG_NM\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:BIRTHDAY\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:TEL_NO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:HP_NO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:CHUGA_YEONRAKCHEO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYO_NM\" editmaxlength=\"10\"/><Cell col=\"13\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GOGYOJOLEOP_YEJEONG_YYYY\" editmaxlength=\"10\"/><Cell col=\"14\" text=\"bind:JEOPSUJA1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:JEONHYEONGRYONAPBU_GBNM\" displaytype=\"normal\" edittype=\"none\" combodataset=\"dsJeonHyeongRyoNapBuGbCd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:NAEYONG_HWAKIN_YN\"/><Cell col=\"17\" text=\"bind:GEOMJEONGGOSI_ONLINEJEGONGDONGUI_YN\"/><Cell col=\"18\" text=\"bind:HAKSAENGBU_ONLINEJEGONGDONGUI_YN\"/><Cell col=\"19\" text=\"bind:SUJIP_DONGUI_YN\"/><Cell col=\"20\" text=\"bind:GOYUSIKBYEOL_INFO_DONGUI_YN\"/><Cell col=\"21\" text=\"bind:INFO_WITAK_DONGUI_YN\"/><Cell col=\"22\" text=\"bind:INFO_3JA_JEGONG_DONGUI_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","10","160","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("원서접수 상세 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","169","9","73","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","279","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","27","1630","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","1","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1640","10",null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"11","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_description("입학원서조회");
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
        this.registerScript("EN02_1010203_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN02_1010203_T02.xfdl(입학원서조회)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/13
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
            var strDs    = "dsMojipGbCd|dsHakGwa|dsJuyaGbCd|dsJeonHyeongGbCd";
            var strLgcd  = "00005|01029|00003|01001";
            var strComb  = "T|T|T|T";
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
        this.fn_Ret = function(tabDs)
        {
        	this.dsMaster.deleteAll();
        	this.dsMaster.copyData(tabDs);
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("EN02_1010203_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
