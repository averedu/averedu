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
            this.set_titletext("9월입학모집관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MOJIP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"MYEONJEOP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_BALPYO_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_BALPYO_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_13_06_00_00","0",null,"1222","28",null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","10","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("년도별 모집구분");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","35",null,null,"0","115",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"127\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"입시년도\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"접수기간\"/><Cell col=\"4\" text=\"면접일자\"/><Cell col=\"5\" text=\"합격자 발표 기간\"/><Cell col=\"6\" text=\"등록기간\"/><Cell col=\"7\" text=\"현재모집여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:IPSI_YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:MOJIP_GBCD\" editmaxlength=\"10\" combodataset=\"dsMojipGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"expr:JEOPSU_FRDT.substring(0,4) +&apos;-&apos;+ JEOPSU_FRDT.substring(4,6) +&quot;-&quot;+JEOPSU_FRDT.substring(6,8) + &quot; ~ &quot; + JEOPSU_TODT.substring(0,4) +&apos;-&apos;+ JEOPSU_TODT.substring(4,6) +&quot;-&quot;+JEOPSU_TODT.substring(6,8)\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\" border=\"1px solid #dbdee2\"/><Cell col=\"4\" edittype=\"none\" displaytype=\"date\" text=\"bind:MYEONJEOP_DT\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" border=\"1px solid #dbdee2\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\" text=\"expr:HAPGYEOKJA_BALPYO_FRDT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_BALPYO_FRDT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_BALPYO_FRDT.substring(6,8) + &quot; ~ &quot; +HAPGYEOKJA_BALPYO_TODT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_BALPYO_TODT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_BALPYO_TODT.substring(6,8)\" border=\"1px solid #dbdee2\"/><Cell col=\"6\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"center\" text=\"expr:DEUNGROK_FRDT.substring(0,4) +&apos;-&apos;+ DEUNGROK_FRDT.substring(4,6) +&quot;-&quot;+DEUNGROK_FRDT.substring(6,8) + &quot; ~ &quot; +DEUNGROK_TODT.substring(0,4) +&apos;-&apos;+ DEUNGROK_TODT.substring(4,6) +&quot;-&quot;+DEUNGROK_TODT.substring(6,8)\" border=\"1px solid #dbdee2\"/><Cell col=\"7\" text=\"bind:HYEONJAE_MOJIP_YN\" displaytype=\"combotext\" combodataset=\"dsMojipYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" border=\"1px solid #dbdee2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1222","28",null,"54",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","684","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1222","28",null,"27",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("9월 입학년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spn9Iphakyyyy","154",null,"119","22",null,"57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("9999");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","277",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("모집구분명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","554",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("합격자발표기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHapgyeokFrdt","153",null,"160","22",null,"3",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","337",null,"26","22",null,"5",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHabgyeokToDt","390",null,"160","22",null,"3",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuFrDt","708",null,"160","22",null,"57",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","891",null,"26","22",null,"59",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuToDt","935",null,"160","22",null,"57",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","554",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("현재모집여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMojip","707",null,"110","22",null,"3",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsMojipYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","554",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokFrDt","708",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","891",null,"26","22",null,"32",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokToDt","935",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","9","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","27","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01_00","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("면접일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calMyeonjeopDt","153",null,"160","22",null,"30",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Combo("CmbMojipGbcd","430",null,"119","22",null,"57",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_innerdataset("dsMojipGbcd");
            obj.set_datacolumn("CODE_NM");
            obj.set_codecolumn("CODE");
            obj.set_tabstop("false");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","spn9Iphakyyyy","value","dsMaster","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calHapgyeokFrdt","value","dsMaster","HAPGYEOKJA_BALPYO_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calJeopsuFrDt","value","dsMaster","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calDeungrokFrDt","value","dsMaster","DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calSearchSincheongSijakDt00_01","value","dsMaster","GOJISEO_PRINT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calDeungrokToDt","value","dsMaster","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calHabgyeokToDt","value","dsMaster","HAPGYEOKJA_BALPYO_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","calJeopsuToDt","value","dsMaster","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calSearchSincheongJongryoDt00_01","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdoMojip","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calMyeonjeopDt","value","dsMaster","MYEONJEOP_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","CmbMojipGbcd","value","dsMaster","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ES01_1040101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ES01_1040101_M.xfdl(9월입학모집관리)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/04/30
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
        this.lvchkColidDs   = "IPSI_YYYY$MOJIP_GBCD$JEOPSU_FRDT$JEOPSU_TODT$MYEONJEOP_DT$DEUNGROK_FRDT$DEUNGROK_TODT$HAPGYEOKJA_BALPYO_FRDT$HAPGYEOKJA_BALPYO_TODT$HYEONJAE_MOJIP_YN";
        this.lvchkColNameDs = "입시 년도$모집 구분$접수 시작일$접수 종료일$면접 일자$등록 시작일$등록 종료일$합격자 발표 시작일$합격자 발표 종료일$현재 모집 여부";
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
        	this.fn_Ret();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsMojipYn|dsMojipGbcd";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01032|01028";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
         *      기준년도 조회
         */
        this.fn_PostformInit = function()
        {
        	var strSvc      = "";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);

        }

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
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "New":
                            this.fn_PostNew();
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
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            var strSvc      = "Ret";
            var strUrl      = "/prj/ES/ES01/Retrieve_1040101_M.do";
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
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow,"CHK", "0");
            this.dsMaster.setColumn(nRow,"IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.dsMaster.setColumn(nRow,"MOJIP_GBCD", "9");
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
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/ES/ES01/Delete_1040101_M.do";
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
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var confirm      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, "", chkFocusFlg, this);

            if (confirm[0] != "success")
            {
                this.gfn_alert(confirm[0],"저장정보","","question");
                this.dsMaster.set_rowposition(confirm[1]); //데이터셋 변경
                return false;
            }

        	// 접수시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOPSU_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOPSU_TODT"))
        	{
        		this.gfn_alert("접수 종료일은 접수 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	// 등록시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_TODT"))
        	{
        		this.gfn_alert("등록 종료일은 등록 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	// 합격자 발표 시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOKJA_BALPYO_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOKJA_BALPYO_TODT"))
        	{
        		this.gfn_alert("합격자 발표 종료일은 합격자 발표 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }
            return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/ES/ES01/Save_1040101_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
                09. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsMaster);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.spn9Iphakyyyy.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.calHapgyeokFrdt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calHabgyeokToDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calJeopsuFrDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calJeopsuToDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calDeungrokFrDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calDeungrokToDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calMyeonjeopDt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ES01_1040101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
