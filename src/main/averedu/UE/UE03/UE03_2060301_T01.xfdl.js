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
            this.set_titletext("학사정보");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"20\"/><Column id=\"HAKJEOK_CD\" type=\"STRING\" size=\"2\"/><Column id=\"RES_NO\" type=\"STRING\" size=\"100\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"IPHAK_YYYY\" type=\"STRING\" size=\"12\"/><Column id=\"HAKJEOK_SANGTAE_CD\" type=\"STRING\" size=\"2\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"DEUNGROK_NAPBU_DAESANG_GUBUN\" type=\"STRING\" size=\"1\"/><Column id=\"YESANG_DEUNGROK_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"DEUNGROK_MAGAM_DT\" type=\"STRING\" size=\"32\"/><Column id=\"SEONGJEOK_YUHYEONG\" type=\"STRING\" size=\"2\"/><Column id=\"GYEJEOLHAKGI_POHAM_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HAKJEOM_MANJEOM_GIJUN\" type=\"STRING\" size=\"3\"/><Column id=\"HAKGIDANG_CHOESO_ISU_HAKJEOM\" type=\"STRING\" size=\"2\"/><Column id=\"JIKJEON_HAKGI_CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIKJEON_HAKGI_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_CHWIDEUK_HAKJEOM\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_PYEONGJEOM_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIKJEON_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"TOTAL_JEOMSU_AVG\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONGJEOK_YUHYEONG_TONGGWA_YN\" type=\"STRING\" size=\"1\"/><Column id=\"CHOEJONG_SEONGJEOK_CHWIDEUK_YYYY\" type=\"STRING\" size=\"32\"/><Column id=\"CHOEJONG_SEONGJEOK_CHWIDEUK_HAKGI\" type=\"STRING\" size=\"3\"/><Column id=\"JOLEOP_HAKGI_YN\" type=\"STRING\" size=\"1\"/><Column id=\"IPHAK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"IPHAKDANGSI_SINIPSAENG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"OEGUKIN_TEUKBYEOL_YN\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj.set_text("학사정보");
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

            obj = new Grid("grdExcel","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"학과코드\"/><Cell col=\"1\" text=\"학적코드\"/><Cell col=\"2\" text=\"주민등록번호\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"학생명\"/><Cell col=\"5\" text=\"입학년도\"/><Cell col=\"6\" text=\"학적상태코드\"/><Cell col=\"7\" text=\"학년\"/><Cell col=\"8\" text=\"등록납부대상구분\"/><Cell col=\"9\" text=\"예상등록금액\"/><Cell col=\"10\" text=\"등록마감일자\"/><Cell col=\"11\" text=\"성적유형\"/><Cell col=\"12\" text=\"계절학기포함여부\"/><Cell col=\"13\" text=\"학점만점기준\"/><Cell col=\"14\" text=\"학기당 최소 이수학점\"/><Cell col=\"15\" text=\"직전학기 이수학점\"/><Cell col=\"16\" text=\"직전학기 이수평점\"/><Cell col=\"17\" text=\"총이수학점\"/><Cell col=\"18\" text=\"총평균평점\"/><Cell col=\"19\" text=\"직전학기 백분위점수\"/><Cell col=\"20\" text=\"총평균백분위점수\"/><Cell col=\"21\" text=\"성적유형통과여부\"/><Cell col=\"22\" text=\"최종성적취득년도\"/><Cell col=\"23\" text=\"최종성적취득학기\"/><Cell col=\"24\" text=\"졸업학기여부\"/><Cell col=\"25\" text=\"입학일자\"/><Cell col=\"26\" text=\"입학당시신입생여부\"/><Cell col=\"27\" text=\"재외국민특별전형입학여부\"/></Band><Band id=\"body\"><Cell text=\"bind:HAKGWA_CD\"/><Cell col=\"1\" text=\"bind:HAKJEOK_CD\"/><Cell col=\"2\" text=\"bind:RES_NO\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:IPHAK_YYYY\"/><Cell col=\"6\" text=\"bind:HAKJEOK_SANGTAE_CD\"/><Cell col=\"7\" text=\"bind:HAKNYEON\"/><Cell col=\"8\" text=\"bind:DEUNGROK_NAPBU_DAESANG_GUBUN\"/><Cell col=\"9\" text=\"bind:YESANG_DEUNGROK_AMT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DEUNGROK_MAGAM_DT\"/><Cell col=\"11\" text=\"bind:SEONGJEOK_YUHYEONG\"/><Cell col=\"12\" text=\"bind:GYEJEOLHAKGI_POHAM_YN\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:HAKJEOM_MANJEOM_GIJUN\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:HAKGIDANG_CHOESO_ISU_HAKJEOM\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:JIKJEON_HAKGI_CHWIDEUK_HAKJEOM\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:JIKJEON_HAKGI_PYEONGJEOM_AVG\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:TOTAL_CHWIDEUK_HAKJEOM\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:TOTAL_PYEONGJEOM_AVG\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:JIKJEON_JEOMSU_AVG\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:TOTAL_JEOMSU_AVG\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:SEONGJEOK_YUHYEONG_TONGGWA_YN\"/><Cell col=\"22\" text=\"bind:CHOEJONG_SEONGJEOK_CHWIDEUK_YYYY\"/><Cell col=\"23\" text=\"bind:CHOEJONG_SEONGJEOK_CHWIDEUK_HAKGI\"/><Cell col=\"24\" text=\"bind:JOLEOP_HAKGI_YN\"/><Cell col=\"25\" text=\"bind:IPHAK_DT\"/><Cell col=\"26\" text=\"bind:IPHAKDANGSI_SINIPSAENG_YN\"/><Cell col=\"27\" text=\"bind:OEGUKIN_TEUKBYEOL_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","35",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"237\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과/전공\"/><Cell col=\"2\" text=\"학년\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"성명\"/><Cell col=\"5\" text=\"성적유형\"/><Cell col=\"6\" text=\"총이수학점\"/><Cell col=\"7\" text=\"총평균평점\"/><Cell col=\"8\" text=\"총평균백분위\"/><Cell col=\"9\" text=\"성적유형통과여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combodatacol=\"DEPT_NM\" combocodecol=\"GYOYUKCHEONG_CD\"/><Cell col=\"2\" text=\"bind:HAKNYEON\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"5\" text=\"bind:SEONGJEOK_YUHYEONG\"/><Cell col=\"6\" text=\"bind:TOTAL_CHWIDEUK_HAKJEOM\"/><Cell col=\"7\" text=\"bind:TOTAL_PYEONGJEOM_AVG\"/><Cell col=\"8\" text=\"bind:TOTAL_JEOMSU_AVG\"/><Cell col=\"9\" text=\"bind:SEONGJEOK_YUHYEONG_TONGGWA_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학사정보");
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
        this.registerScript("UE03_2060301_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE03_2060301_T01.xfdl(학사정보)
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
            var strUrl      = "/prj/UE/UE03/Retrieve_2060301_M_1.do";
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
            this.gfn_excelExport(this.grdExcel, "학사정보","학사정보");
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
        this.loadIncludeScript("UE03_2060301_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();