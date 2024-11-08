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
            this.set_titletext("환불 계산");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,340);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AMNT_0001\" type=\"STRING\" size=\"256\"/><Column id=\"AMNT_0002\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ONBY_FOOD\" type=\"STRING\" size=\"256\"/><Column id=\"TODAY\" type=\"STRING\" size=\"256\"/><Column id=\"GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_DATE1\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_DATE2\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_DATE3\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_DATE5\" type=\"STRING\" size=\"256\"/><Column id=\"MNMT_VAL5\" type=\"STRING\" size=\"256\"/><Column id=\"FOOD_VAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHwanbulGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","200","110","20","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","114","145","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","139",null,"8","0",null,null,null,null,null,this);
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

            obj = new Static("Static01_01_00_00_01","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","0","330",null,"10","0",null,null,null,null,null,this);
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

            obj = new Div("divMnmt","10","147","480","153",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","295","92","120","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","295","65","120","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00_00","295","38","120","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00_00_00","295","11","120","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00_01","295","119","120","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Calendar("calRtrnDate","158","11","134","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Calendar("calRtrnDate00","158","38","134","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Calendar("calRtrnDate00_00","158","65","134","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Calendar("calRtrnDate00_00_00","158","119","134","22",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Radio("rdoGubn","61","7","80","135",null,null,null,null,null,null,this.divMnmt.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsHwanbulGubn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_columncount("1");
            obj.set_fittocontents("none");
            obj.set_rowcount("5");
            this.divMnmt.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"310","50","22","63",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"310","50","22","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divPop","10","10",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","8","8","500","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01","8","8","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("1");
            obj.set_text("관리비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00","8","35","500","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00_00_00","8","62","500","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00","258","8","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("4");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_01","8","35","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("5");
            obj.set_text("기준입사일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_01_00","8","62","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("6");
            obj.set_text("1 식비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_00","258","35","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("7");
            obj.set_text("기준퇴사일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01_00_00_00","258","62","110","28",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("8");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divPop.addChild(obj.name, obj);

            obj = new Calendar("calStrtDate","121","38","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divPop.addChild(obj.name, obj);

            obj = new Calendar("calEnddDate","370","38","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.divPop.addChild(obj.name, obj);

            obj = new Calendar("calToday","370","65","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.divPop.addChild(obj.name, obj);

            obj = new Edit("edtAmnt0001","121","11","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("12");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divPop.addChild(obj.name, obj);

            obj = new Edit("edtAmnt0002","370","11","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("13");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.divPop.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00_00_00_01","121","65","134","22",null,null,null,null,null,null,this.divPop.form);
            obj.set_taborder("14");
            this.divPop.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","490","110","30",null,null,"100",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","520","114","145","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("식비");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("divFood","520","147",null,"153","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("white");
            obj.set_border("1px solid #4c4b66");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00_00","8","8","252","28",null,null,null,null,null,null,this.divFood.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divFood.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01_01_01","8","8","110","28",null,null,null,null,null,null,this.divFood.form);
            obj.set_taborder("1");
            obj.set_text("환불식비");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divFood.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00_00_00","121","11","136","22",null,null,null,null,null,null,this.divFood.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divFood.addChild(obj.name, obj);

            obj = new Button("btnCal","529",null,"50","22",null,"242",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("계산");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,340,this,function(p){});
            obj.set_description("환불 계산");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divPop.form.edtAmnt0001","value","ds_input","AMNT_0001");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divPop.form.edtAmnt0002","value","ds_input","AMNT_0002");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divPop.form.calStrtDate","value","ds_input","STRT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divPop.form.calEnddDate","value","ds_input","ENDD_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divPop.form.edtSearchStntName00_00_00_01","value","ds_input","ONBY_FOOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divPop.form.calToday","value","ds_input","TODAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMnmt.form.rdoGubn","value","ds_input","GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMnmt.form.calRtrnDate","value","ds_input","MNMT_DATE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divMnmt.form.calRtrnDate00","value","ds_input","MNMT_DATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divMnmt.form.edtSearchStntName00_00_00","value","ds_input","MNMT_VAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMnmt.form.edtSearchStntName00_00","value","ds_input","MNMT_VAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMnmt.form.calRtrnDate00_00","value","ds_input","MNMT_DATE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divMnmt.form.edtSearchStntName00","value","ds_input","MNMT_VAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divMnmt.form.edtSearchStntName","value","ds_input","MNMT_VAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divMnmt.form.calRtrnDate00_00_00","value","ds_input","MNMT_DATE5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divMnmt.form.edtSearchStntName00_01","value","ds_input","MNMT_VAL5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divFood.form.edtSearchStntName00_00_00","value","ds_input","FOOD_VAL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BH05_4080504_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH05_4080504_P01.xfdl(환불 계산)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/14
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
        	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsHwanbulGubn";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00749";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "X";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        this.fn_PostformInit = function() {
        	if (!this.gfn_isNull(this.getOwnerFrame().amnt0001)) {
        		this.ds_input.setColumn(0, "AMNT_0001", this.getOwnerFrame().amnt0001);
        	}

        	if (!this.gfn_isNull(this.getOwnerFrame().amnt0002)) {
        		this.ds_input.setColumn(0, "AMNT_0002", this.getOwnerFrame().amnt0002);
        	}

        	this.ds_input.setColumn(0, "TODAY", objApp.gds_SystemDate.getColumn(0, "YYYYMMDD"));
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
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
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
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
        /******************************************************************************
        * Function명 : getDateSum()
        * 설명 : 날짜 더하거나 뺸값을 반환하는 메소드
        * Params :
        	fixDate - 기준일(2010-01-31) yyyy-MM-dd 형식의 String 값
        	addYear - 증가하거나 감소할 년도 값
        	addMonth - 증가하거나 감소할 월값
        	addDate - 증가하거나 감소할 일값
        	type - 리턴될 날짜 형식을 지정하는 값(기본값 : yyyyMMdd)
        * Return :
        	type == "yyyyMMdd" 결과값 "20100101"
        	type == "yyMMdd" 결과값 "100101"
        	type == "yyyy" 결과값 "2010"
        	type == "yy" 결과값 "10"
        	type == "MM" 결과값 "01"
        	type == "dd" 결과값 "01"
        ******************************************************************************/
        this.getDateSum = function(fixDate, addYear, addMonth, addDate, type)
        {
        	var date = new Date(fixDate.substring(0, 4) + "-" + fixDate.substring(4, 6) + "-" + fixDate.substring(6, 8));

        	if (addYear.length != 0) date.addYear(addYear);
        	if (addMonth.length != 0) date.addMonth(addMonth);
        	if (addDate.length != 0) date.addDate(addDate);

        	var result = date.getYear() + "" + ((date.getMonth() + 1) + "").padLeft(2, '0') + (date.getDate() + "").padLeft(2, '0');

        	switch(type)
        	{
        		case "yyyyMMdd" :
        			return result;
        		case "yyyyMM" :
        			return result.substring(0,6);
        		case "yyMMdd" :
        			return result.substring(2,8);
        		case "yyyy" :
        			return result.substring(0,4);
        		case "yy" :
        			return result.substring(2,4);
        		case "MM" :
        			return result.substring(4,6);
        		case "dd" :
        			return result.substring(6,8);
        	}
        	return result;
        }

        // 계산
        this.btnCal_onclick = function(obj,e)
        {
        	var amnt0001 = this.ds_input.getColumn(0, "AMNT_0001");
        	var amnt0002 = this.ds_input.getColumn(0, "AMNT_0002");

        	var strtDate 	= this.ds_input.getColumn(0, "STRT_DATE");
        	var enddDate 	= this.ds_input.getColumn(0, "ENDD_DATE");
        	var today	 	= this.ds_input.getColumn(0, "TODAY");
        	var oneByFood	= this.ds_input.getColumn(0, "ONBY_FOOD");

        	var remainGiGan = 0;
        	var fullGigan   = 0 ;
        	var toDayGiGan  = 0 ;
        	var oneGiGan 	= 0;
        	var twoGiGan 	= 0;
        	var threeGiGan 	= 0;
        	var fourGiGan 	= 0;

        	if (this.gfn_isNull(this.gfn_trim(today))) {
        		this.alert("오늘 일자가 미입력되었습니다.");
        		return;
        	}

        	if (this.gfn_isNull(this.gfn_trim(strtDate))) {
        		this.alert("기준입사일이 미입력되었습니다.");
        		return;
        	}

        	if (this.gfn_isNull(this.gfn_trim(enddDate))) {
        		this.alert("기준퇴사일이 미입력되었습니다.");
        		return;
        	}

        	if (this.gfn_isNull(this.gfn_trim(oneByFood))) {
        		this.alert("1 식비를 입력하세요");
        		return;
        	}

        	fullGigan 	= this.gfn_getDiffDate(strtDate, enddDate);
        	todayGigan	= this.gfn_getDiffDate(strtDate, today) + 1;

            twoGiGan = Math.round((fullGigan/4)) - 1;
            threeGiGan = Math.round((fullGigan/4)*2) - 1;
            fourGiGan = Math.round((fullGigan/4)*3) - 1;

        	this.ds_input.setColumn(0, "MNMT_DATE1", this.getDateSum(strtDate, "", "", twoGiGan, 	"yyyyMMdd"));
        	this.ds_input.setColumn(0, "MNMT_DATE2", this.getDateSum(strtDate, "", "", threeGiGan, 	"yyyyMMdd"));
        	this.ds_input.setColumn(0, "MNMT_DATE3", this.getDateSum(strtDate, "", "", fourGiGan, 	"yyyyMMdd"));
        	this.ds_input.setColumn(0, "MNMT_DATE5", this.getDateSum(strtDate, "", "", 6, 			"yyyyMMdd"));

        	this.ds_input.setColumn(0, "MNMT_VAL1", (amnt0001 * 60) / 100);
        	this.ds_input.setColumn(0, "MNMT_VAL2", (amnt0001 * 40) / 100);
        	this.ds_input.setColumn(0, "MNMT_VAL3", (amnt0001 * 20) / 100);
        	this.ds_input.setColumn(0, "MNMT_VAL4", 0);
        	this.ds_input.setColumn(0, "MNMT_VAL5", (amnt0001 * 80) / 100);

        	remainGiGan = this.gfn_getDiffDate(today, enddDate) + 1;

        	this.ds_input.setColumn(0, "FOOD_VAL", remainGiGan * oneByFood);
        };

        // 저장
        this.btnSave_onclick = function(obj,e)
        {
        	var gubn = this.ds_input.getColumn(0, "GUBN");
        	var objRtnArr = new Array(3);

        	if (this.gfn_isNull(this.gfn_trim(gubn))) {
        		this.alert("환불금액을 선택하세요.");
        		return;
        	}

        	if (gubn == "1") {
        		objRtnArr[0] = this.ds_input.getColumn(0, "MNMT_VAL5");
        	}

        	if (gubn == "2") {
        		objRtnArr[0] = this.ds_input.getColumn(0, "MNMT_VAL1");
        	}

        	if (gubn == "3") {
        		objRtnArr[0] = this.ds_input.getColumn(0, "MNMT_VAL2");
        	}

        	if (gubn == "4") {
        		objRtnArr[0] = this.ds_input.getColumn(0, "MNMT_VAL3");
        	}

        	if (gubn == "5") {
        		objRtnArr[0] = this.ds_input.getColumn(0, "MNMT_VAL4");
        	}

        	objRtnArr[1] = this.ds_input.getColumn(0, "FOOD_VAL");
        	objRtnArr[2] = gubn;

        	this.close(objRtnArr.toString());
        };

        // 닫기
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
        };
        this.loadIncludeScript("BH05_4080504_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
