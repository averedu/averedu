(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BH04_4080401_M");
            this.set_titletext("시설고장 등록/리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BBSM_SEQU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BBSM_TITL\" type=\"STRING\" size=\"100\"/><Column id=\"BBSM_CNTS\" type=\"STRING\" size=\"1000\"/><Column id=\"RSLT_CNTS\" type=\"STRING\" size=\"1000\"/><Column id=\"WORK_GUBN\" type=\"STRING\" size=\"10\"/><Column id=\"REGR_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"REGR_IDNT\" type=\"STRING\" size=\"30\"/><Column id=\"UPDT_DATE\" type=\"DATE\" size=\"8\"/><Column id=\"UPDT_IDNT\" type=\"STRING\" size=\"30\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"ROOM_KFNM\" type=\"STRING\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIWorkGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NUMB1\" type=\"STRING\" size=\"256\"/><Column id=\"ROOM_NUMB2\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","35",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","467","10","30","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("학번");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_stntNumb","502","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","10","10","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrdt","66","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTodt","182","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","292","10","20","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("동");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_roomNumb1","317","10","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_maxlength("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","169","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","612","10","25","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_stntKnam","643","10","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","377","10","25","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("호실");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_roomNumb2","407","10","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_maxlength("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","11","80","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("시설고장 등록 목록");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"80","70","20","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divInput","10",null,null,"180","10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","10","10","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("0");
            obj.set_text("접수일자");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static01","10","35","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("4");
            obj.set_text("학번");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edt_stntNumb","66","35","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static08","10","59","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edt_bbsmTitl","66","59","698","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("12");
            obj.set_maxlength("33");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static00","10","82","50","40",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("13");
            obj.set_text("내용");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static03","196","10","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("2");
            obj.set_text("처리구분");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Button("btn_fnd","166","35","20","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static02","196","34","50","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textAlign("right");
            obj.set_cssclass("");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edt_stntKnam","252","34","80","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static04","342","34","55","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("9");
            obj.set_text("동(호/실)");
            obj.set_textAlign("right");
            this.divInput.addChild(obj.name, obj);

            obj = new Edit("edt_roomKfnm","402","34","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static06","10","126","50","40",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("15");
            obj.set_text("처리사항");
            obj.set_textAlign("right");
            this.divInput.addChild(obj.name, obj);

            obj = new Combo("cbo_workGubn","252","10","80","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsWorkGubn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            this.divInput.addChild(obj.name, obj);

            obj = new TextArea("txt_bbsmCnts","66","82",null,"40","14",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("14");
            obj.set_wordWrap("char");
            obj.set_dragscrolltype("vert");
            obj.set_scrollbartype("none auto");
            this.divInput.addChild(obj.name, obj);

            obj = new TextArea("txt_rsltCnts","66","126",null,"40","14",null,null,null,null,null,this.divInput.form);
            obj.set_taborder("16");
            obj.set_scrollbartype("none auto");
            obj.set_wordWrap("char");
            this.divInput.addChild(obj.name, obj);

            obj = new Calendar("cal_rgerDate","66","10","100","20",null,null,null,null,null,null,this.divInput.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.divInput.addChild(obj.name, obj);

            obj = new Static("Static02","11",null,"166","20",null,"192",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("시설고장 등록 상세정보");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","103",null,null,"10","221",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_cssclass("type04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"389\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" expr=\"expr:comp._allCheck\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"접수일자\"/><Cell col=\"4\" text=\"처리구분\"/><Cell col=\"5\" text=\"학번\"/><Cell col=\"6\" text=\"성명\"/><Cell col=\"7\" text=\"제목\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;newrow&apos;:(dataset.getRowType(currow) == &apos;4&apos; ? &apos;modrow&apos;:&apos;&apos;)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"expr:currow + 1\"/><Cell col=\"3\" text=\"bind:REGR_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:WORK_GUBN\" combodataset=\"dsWorkGubn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:REGR_IDNT\"/><Cell col=\"6\" text=\"bind:STNT_KNAM\"/><Cell col=\"7\" text=\"bind:BBSM_TITL\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divInput.form.cbo_workGubn","value","dsMaster","WORK_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divInput.form.edt_stntNumb","value","dsMaster","REGR_IDNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divInput.form.edt_stntKnam","value","dsMaster","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divInput.form.edt_bbsmTitl","value","dsMaster","BBSM_TITL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divInput.form.txt_bbsmCnts","value","dsMaster","BBSM_CNTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divInput.form.txt_rsltCnts","value","dsMaster","RSLT_CNTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divInput.form.edt_roomKfnm","value","dsMaster","ROOM_KFNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divInput.form.cal_rgerDate","value","dsMaster","REGR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH04_4080401_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH04_4080401_M.xfdl(시설고장 등록/리스트)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/10/31
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
        this.lvchkColidDs   = "REGR_DATE$STNT_NUMB$STNT_KNAM$BBSM_TITL$BBSM_CNTS";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "접수일자$학번$성명$제목$내용";
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

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**
         * get 오늘일자
         */
        this.seTodayDt = function ()
        {
        	var sToday = "";
            var objDate = new Date();
            var sToday  = objDate.getFullYear() + "";
            var sMonth = objDate.getMonth() + 1;
            var sDate = objDate.getDate();

            if(sMonth.toString().length == 1){
        		sMonth = "0" + sMonth;
            }
        	if(sDate.toString().length == 1){
        		sDate = "0" + sDate;
            }
            sToday = sToday+sMonth+sDate;

        	return sToday;
        };

        /**
         * 접수시작일자, 종료일자 셋팅
         */
        this.setDate = function ()
        {
            this.divSearch.form.cal_dateFrdt.set_value(this.seTodayDt().toString().substr(0, 6).concat('01')); // 접수 시작일자
        	this.divSearch.form.cal_dateTodt.set_value(this.seTodayDt()); // 접수 종료일자
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsWorkGubn";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00747";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        	// 접수일자 설정
        	this.setDate();
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
                    //case "Init":
                            //this.fn_PostformInit();
                        //break;
                    case "singleInit":
                            this.fn_PostSingleInt();
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

        /**
         * 팝업 callback
         */
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "fnd" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "REGR_IDNT", sRtn[3]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "STNT_NUMB", sRtn[3]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "STNT_KNAM", sRtn[4]);
        					this.dsMaster.setColumn(this.dsMaster.rowposition, "ROOM_KFNM", sRtn[25])
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
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "excel" :       // 엑셀
                        this.fn_Excel();
                    break;
                case "print" :       // 출력
                         this.fn_Print();
                    break;
                case "confirm" :     // 확정
                         this.fn_Confirm();
                    break;
                case "tmp1" :        // 여분버튼1
                         this.fn_Tmp1();
                    break;
                case "tmp2" :        // 여분버튼2
                         this.fn_Tmp2();
                    break;
                case "tmp3" :        // 여분버튼3
                         this.fn_Tmp3();
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
            var dateFrdt = this.divSearch.form.cal_dateFrdt.value; // 접수 시작일자
        	var dateTodt = this.divSearch.form.cal_dateTodt.value; // 접수 종료일자
        	var roomNumb1 = this.divSearch.form.edt_roomNumb1.value; // 동
        	var roomNumb2 = this.divSearch.form.edt_roomNumb2.value; // 호수
            var stntNumb = this.divSearch.form.edt_stntNumb.value; // 학번
        	var stntKnam = this.divSearch.form.edt_stntKnam.value; // 성명

        	var frdt = new Date();
        	var todt = new Date();
        	var calDate;
        	var day = 1000*60*60*24;

        	frdt.setFullYear(dateFrdt.substr(0,4));
        	frdt.setMonth(dateFrdt.substr(4,2) - 1);
        	frdt.setDate(dateFrdt.substr(6, 2));

        	todt.setFullYear(dateTodt.substr(0,4));
        	todt.setMonth(dateTodt.substr(4,2) - 1);
        	todt.setDate(dateTodt.substr(6, 2));

        	calDate = todt.getTime() - frdt.getTime();

        	if(calDate/day < 0) {
        		this.alert('"접수종료일" 항목은 "접수시작일" 항목 보다 값이 크거나 같아야 합니다.');
                return;
        	};

        	this.ds_input.setColumn(0, "DATE_FRDT", dateFrdt);
        	this.ds_input.setColumn(0, "DATE_TODT", dateTodt);
        	this.ds_input.setColumn(0, "ROOM_NUMB1", roomNumb1);
        	this.ds_input.setColumn(0, "ROOM_NUMB2", roomNumb2);
        	this.ds_input.setColumn(0, "STNT_NUMB", stntNumb);
        	this.ds_input.setColumn(0, "STNT_KNAM", stntKnam);

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
            var strUrl      = "/prj/BH/BH04/Retrieve_4080401_M.do";
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
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
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
        	this.dsMaster.setColumn(nRow, "REGR_DATE", this.seTodayDt());
        	this.dsMaster.setColumn(nRow, "WORK_GUBN", "01");
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

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
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strUrl      = "/prj/BH/BH04/Delete_4080401_M.do";
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
            this.ds_input.setColumn(0, "DATE_FRDT", this.divSearch.form.cal_dateFrdt.value); // 접수 시작일자
        	this.ds_input.setColumn(0, "DATE_TODT", this.divSearch.form.cal_dateTodt.value); // 접수 종료일자
        	this.ds_input.setColumn(0, "ROOM_NUMB1", this.divSearch.form.edt_roomNumb1.value); // 동
        	this.ds_input.setColumn(0, "ROOM_NUMB2", this.divSearch.form.edt_roomNumb2.value); // 호수
            this.ds_input.setColumn(0, "STNT_NUMB", this.divSearch.form.edt_stntNumb.value); // 학번
        	this.ds_input.setColumn(0, "STNT_KNAM", this.divSearch.form.edt_stntKnam.value); // 성명

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
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
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
            var strUrl      = "/prj/BH/BH04/Save_4080401_M.do";
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
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.Div01.form.grdMaster, "시트이름","파일이름");

        };

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

        /**
         *	엔터시 시설고장 목록 조회
         */
        this.enterSearch = function(obj,e)
        {
        	if(e.keycode == '13') {
        	    this.fn_Ret();
        	}
        };

        // 관생정보 검색 popup
        this.Div00_btn_fnd_onclick = function(obj,e)
        {
        	this.gfn_openPopup('fnd', 'BH/BH04/BH04_4080401_M_P01.xfdl', '', 'fn_popupCallback', '');
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_formInit,this);
            this.divSearch.form.edt_stntNumb.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.cal_dateFrdt.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.cal_dateTodt.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.edt_roomNumb1.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.edt_stntKnam.addEventHandler("onkeyup",this.enterSearch,this);
            this.divSearch.form.edt_roomNumb2.addEventHandler("onkeyup",this.enterSearch,this);
            this.divInput.form.btn_fnd.addEventHandler("onclick",this.Div00_btn_fnd_onclick,this);
            this.divInput.form.cal_rgerDate.addEventHandler("onkeyup",this.enterSearch,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH04_4080401_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
