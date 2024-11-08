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
            this.set_titletext("입시사정대장");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"40\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"8\"/><Column id=\"BIRTHDAY1\" type=\"STRING\" size=\"65532\"/><Column id=\"GENDER_NM\" type=\"STRING\" size=\"6\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"15\"/><Column id=\"HP_NO1\" type=\"STRING\" size=\"65532\"/><Column id=\"CHULSIN_HAKGYO\" type=\"STRING\" size=\"200\"/><Column id=\"JOLEOPHAPGYEOK_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GOGYOGYEYEOL_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"GOGYOGYEYEOL_LV\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GOGYOJOLEOP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DONGJEOMJA_LV1\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV2\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV3\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV4\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV5\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV6\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DONGJEOMJA_LV7\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHOECHOHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"CHOECHOHAPGYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAPGYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BULHAPGYEOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"BULHAPGYEOK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONHYEONGBYEOL_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEBIHAPGYEOKHUBO_SEOKCHA\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NAESIN_JEOMSU\" type=\"STRING\" size=\"13\"/><Column id=\"MYEONJEOP_SILGI_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHONGDEUNGGEUP\" type=\"STRING\" size=\"10\"/><Column id=\"CHONGJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_STCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_STNM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOM_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUHEOMSAENG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAPGYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"DEUNGROK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"YECHIGEUM_CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staRowCnt","130","9","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","0","100","35",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_00","0","27","1630","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","0","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1010","10",null,"0",null,null,null,null,this);
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

            obj = new Static("stc_09_00_00_01","7","10","113","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입시 사정대장");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"80\"/><Column size=\"167\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"167\"/><Column size=\"100\"/><Column size=\"99\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"189\"/><Column size=\"50\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"번호\"/><Cell col=\"1\" rowspan=\"2\" text=\"모집구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"학부/학과\"/><Cell col=\"3\" rowspan=\"2\" text=\"주야구분\"/><Cell col=\"4\" rowspan=\"2\" text=\"전형\"/><Cell col=\"5\" rowspan=\"2\" text=\"세부전형\"/><Cell col=\"6\" rowspan=\"2\" text=\"수험번호\"/><Cell col=\"7\" rowspan=\"2\" text=\"성명\"/><Cell col=\"8\" rowspan=\"2\" text=\"생년월일\"/><Cell col=\"9\" rowspan=\"2\" text=\"성별\"/><Cell col=\"10\" rowspan=\"2\" text=\"휴대폰 번호\"/><Cell col=\"11\" rowspan=\"2\" text=\"졸업년도\"/><Cell col=\"12\" rowspan=\"2\" text=\"출신학교\"/><Cell col=\"13\" colspan=\"4\" text=\"총점\"/><Cell col=\"17\" rowspan=\"2\" text=\"석차\"/><Cell col=\"18\" rowspan=\"2\" text=\"1순위\"/><Cell col=\"19\" rowspan=\"2\" text=\"2순위\"/><Cell col=\"20\" rowspan=\"2\" text=\"3순위\"/><Cell col=\"21\" rowspan=\"2\" text=\"4순위\"/><Cell col=\"22\" rowspan=\"2\" text=\"5순위\"/><Cell col=\"23\" rowspan=\"2\" text=\"6순위\"/><Cell col=\"24\" rowspan=\"2\" text=\"7순위\"/><Cell col=\"25\" rowspan=\"2\" text=\"최초&#13;&#10;합격구분\"/><Cell col=\"26\" rowspan=\"2\" text=\"합격구분\"/><Cell col=\"27\" rowspan=\"2\" text=\"등록여부\"/><Cell col=\"28\" rowspan=\"2\" text=\"비고\"/><Cell col=\"29\" rowspan=\"2\" text=\"확인\"/><Cell row=\"1\" col=\"13\" text=\"내신\"/><Cell row=\"1\" col=\"14\" text=\"면접/실기\"/><Cell row=\"1\" col=\"15\" text=\"계\"/><Cell row=\"1\" col=\"16\" text=\"등급\"/></Band><Band id=\"body\"><Cell style=\"align:center middle;\" text=\"expr:currow +1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:MOJIP_GBNM\" maskchar=\"_\" editlimit=\"4\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:HAKGWA_NM\" maskchar=\"_\" editlimit=\"4\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:JUYA_GBNM\" maskchar=\"_\" editlimit=\"4\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:JEONHYEONG_GBNM\" editlimit=\"1\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:SEBUJEONHYEONG_GBNM\" editlimit=\"1\"/><Cell col=\"6\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:SUHEOM_NO\" maskchar=\"_\" editlimit=\"4\"/><Cell col=\"7\" text=\"bind:SUHEOMSAENG_NM\"/><Cell col=\"8\" text=\"bind:BIRTHDAY1\"/><Cell col=\"9\" text=\"bind:GENDER_NM\"/><Cell col=\"10\" text=\"bind:HP_NO\"/><Cell col=\"11\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:JOLEOPHAPGYEOK_YYYY\"/><Cell col=\"12\" displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:CHULSIN_HAKGYO\" combodataset=\"gds_HSCHOOL\" combocodecol=\"SCH_CODE\" combodatacol=\"SCH_NAME\"/><Cell col=\"13\" displaytype=\"number\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:NAESIN_JEOMSU\"/><Cell col=\"14\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:MYEONJEOP_SILGI_JEOMSU\"/><Cell col=\"15\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:CHONGJEOM\"/><Cell col=\"16\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:CHONGDEUNGGEUP\"/><Cell col=\"17\" displaytype=\"number\" style=\"align:center middle;\" text=\"bind:JEONHYEONGBYEOL_SEOKCHA\"/><Cell col=\"18\" displaytype=\"number\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV1 != null ? DONGJEOMJA_LV1 : 0\"/><Cell col=\"19\" displaytype=\"number\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV2 != null ? DONGJEOMJA_LV2 : 0\"/><Cell col=\"20\" displaytype=\"number\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV3 != null ? DONGJEOMJA_LV3 : 0\"/><Cell col=\"21\" displaytype=\"number\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV4 != null ? DONGJEOMJA_LV4 : 0\"/><Cell col=\"22\" displaytype=\"normal\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV5 != null ? DONGJEOMJA_LV5 : 0\"/><Cell col=\"23\" text=\"expr:DONGJEOMJA_LV6 != null ? DONGJEOMJA_LV6 : 0\"/><Cell col=\"24\" displaytype=\"number\" style=\"align:center middle;\" text=\"expr:DONGJEOMJA_LV7 != null ? DONGJEOMJA_LV7 : 0\"/><Cell col=\"25\" style=\"align:center middle;\" text=\"bind:CHOECHOHAPGYEOK_GBNM\"/><Cell col=\"26\" style=\"align:center middle;\" text=\"bind:HAPGYEOK_GBNM\"/><Cell col=\"27\" style=\"align:center middle;\" text=\"bind:DEUNGROK_STNM\"/><Cell col=\"28\" style=\"align:center middle;\" text=\"bind:BIGO\"/><Cell col=\"29\" style=\"align:center middle;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("입시사정대장");
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
        this.registerScript("EN08_1010803_T02.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN04_1010803_T02.xfdl(입시사정대장)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/24
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
        this.lvchkColidDs   = "";
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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(data1)
        {
        	this.ds_input.copyData(data1);

            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN08/Retrieve_1010803_T02.do";
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
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("EN08_1010803_T02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
