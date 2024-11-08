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
            this.set_titletext("메세지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_CODE\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME_KR\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME_EN\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME_CH\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME_JP\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_NAME_EC\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"MSG_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MSG_BTN\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MSG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_NAME_KR\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MSG_CODE\"/><Col id=\"MSG_NAME_KR\"/><Col id=\"MSG_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUserYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGMsgType", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGMsgBtn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","232",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"48\"/><Column size=\"111\"/><Column size=\"304\"/><Column size=\"266\"/><Column size=\"274\"/><Column size=\"236\"/><Column size=\"160\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"106\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"메세지코드\"/><Cell col=\"3\" text=\"한글메세지\" cssclass=\"point\"/><Cell col=\"4\" text=\"영문메세지\"/><Cell col=\"5\" text=\"중국어메세지\"/><Cell col=\"6\" text=\"일본어메세지\"/><Cell col=\"7\" text=\"기타메세지\"/><Cell col=\"8\" text=\"메세지타입\"/><Cell col=\"9\" text=\"메세지버튼유무\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"등록자\"/><Cell col=\"12\" text=\"등록일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MSG_CODE\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:MSG_NAME_KR\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MSG_NAME_EN\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MSG_NAME_CH\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:MSG_NAME_JP\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MSG_NAME_EC\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:MSG_TYPE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGMsgType\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"9\" text=\"bind:MSG_BTN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGMsgBtn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"10\" text=\"bind:MSG_YN\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"dsGUserYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" text=\"bind:REG_ID\" displaytype=\"text\"/><Cell col=\"12\" text=\"bind:REG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:MOD_ID\" displaytype=\"text\"/><Cell col=\"14\" text=\"bind:MOD_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("dvSearch","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","78","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("0");
            obj.set_text("메세지코드 :");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","240","10","69","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("1");
            obj.set_text("메세지명 :");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","665","10","68","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부 : ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edtSMsgCode","84","10","152","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edtSMsgNameKr","313","10","352","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserYn","740","10","133","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUserYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("Static04","0","3","20","41",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","6","228",null,"24","1681",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel01","0.00%","53",null,"86","94.89%",null,null,null,null,null,this);
            obj.set_text("설명(한글)");
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel03","0.00%","136",null,"86","94.89%",null,null,null,null,null,this);
            obj.set_text("설명(영문)");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgNameKr","staTitel01:0.00%","53",null,"86","50.06%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel02","txtMsgNameKr:0.00%","53",null,"86","44.89%",null,null,null,null,null,this);
            obj.set_text("설명(중국어)");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgNameCh","staTitel02:0.00%","53",null,"86","0.06%",null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgNameEn","staTitel03:0.00%","136",null,"86","50.06%",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel04","txtMsgNameEn:0.00%","136",null,"86","44.89%",null,null,null,null,null,this);
            obj.set_text("설명(일본어)");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgNameJp","staTitel04:0.00%","136",null,"86","0.06%",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("메세지관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","dvSearch.form.edtSMsgCode","value","ds_input","MSG_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","dvSearch.form.edtSMsgNameKr","value","ds_input","MSG_NAME_KR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","dvSearch.form.cboUserYn","value","ds_input","MSG_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","txtMsgNameKr","value","dsMaster","MSG_NAME_KR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txtMsgNameEn","value","dsMaster","MSG_NAME_EN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","txtMsgNameCh","value","dsMaster","MSG_NAME_CH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txtMsgNameJp","value","dsMaster","MSG_NAME_JP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SYS006CommonMessageM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COMM000006S.xfdl(메세지관리)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/10
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   	= "MSG_NAME_KR";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 	= "메세지명";
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
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        	var strDs   = "dsUserYn|dsGUserYn|dsGMsgType|dsGMsgBtn";					// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "000002|000002|000009|000010";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "T|X|X|X";   								// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";										// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId   = "Init";   									//콤보의 (A:기본명-네임바운드nmae ,B:코드에[01] 기본명-네임바운드name1)

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

          this.gfn_CmmnMultiComboLoad(strDs
        							, strLgcd
        							, strComb
        							, strOptn
        							, svcId);
        };

        this.fn_PostformInit = function()
        {
        	this.ds_input.setColumn(0,"MSG_YN",null);
        };
        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grdMaster);

        	if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg);
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
        			case "Add":
        				this.fn_PostAdd();
        				break;
        			case "Del":
        				this.fn_PostDel();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        		case "confirm" :			//확정
        				this.fn_Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.fn_Tmp1();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.fn_Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.fn_Tmp3();
        			break;
        		default :
        			break;
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	// 조회조건 셋팅
        	return true;
        }

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        	if(!this.fn_PreRet())
        	{
        		return false;
        	}
        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/sys/RetrieveCommonMessageList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	//trace(this.dsMaster.saveXML());
        	//trace(this.dsErro.saveXML());
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };
        /**********************************************************************
        	06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreAdd = function()
        {
        	return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	if(!this.fn_PreAdd())
        	{
        		return false;
        	}
        	var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow,"MSG_TYPE", 	"1");
        	this.dsMaster.setColumn(nRow,"MSG_YN", 		"1");
        	this.dsMaster.setColumn(nRow,"MSG_BTN",		"0");
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostAdd = function()
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
        		this.gfn_alert("MSG00006","삭제 정보","","information"); 					// 삭제할 데이타가 없습니다.!
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question");              // 현재선택행을 삭제하시겠습니까?
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

        	var strSvc 		= "Del";
        	var strUrl 		= "/prj/sys/DeleteCommonMessageList.do";
        	var strInDs  	= "dsMaster=dsMaster:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        }

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
                this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
        	if (result[0] != "success")
        	{
        		this.alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}

            var result = this.gfn_confirm("MSG00009","저장 처리","","question");              // 저장 하시겠습니까?
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

        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/sys/SaveCommonMessageList.do";
        	var strInDs  	= "ds_input=ds_input:a ";
        		strInDs    += "dsMaster=dsMaster:u";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   		, strUrl
        				   		, strInDs
        				   		, strOutDs
        				   		, strArg
        				   		, strCallBack
        				   		, strASync);



        };
        /**
         *	기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	this.dsMaster.set_rowposition(this.dsMaster.rowcount-1);
        }
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
        		this.gfn_alert("MSG00009", "EXCEL 정보" ,"information");
        		return false;
        	}
        	var result = this.gfn_confirm( "MSG00005", "EXCEL 출력", "question" );
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdMaster);
        };
        /**********************************************************************
        	12. ExcelUpLoad 신규저장시
        ***********************************************************************/
        this.fn_PreExcelUp = function()
        {
        	var result = this.confirm( "기존데이타를 삭제하고 신규데이타를 일괄적용하겠습니까?");

        	if(result == 0)
        	{
        	   return false;
        	}
        	//개별삭제시
        	return true;
        };

        this.btnExcelUp_onclick = function(obj,e)
        {
        	if(!this.fn_PreExcelUp())
        	{
        		return false;
        	}
        };
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /**
        	메세지코드 조회조건 조회
        */
        this.dvSearch_edtSMsgCode_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	메세지명 조회조건 조회
        */
        this.dvSearch_edtSMsgNameKr_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
         *	사용여부 조건 조회
         */
        this.dvSearch_cbUseYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         *	그리드멀티 현재로 초기화
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };
        /**
         *	그리드멀티 소트정열
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
        	return (this.gfn_isUpdate(this.dsMaster));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dvSearch.form.edtSMsgCode.addEventHandler("onkeyup",this.dvSearch_edtSMsgCode_onkeyup,this);
            this.dvSearch.form.edtSMsgNameKr.addEventHandler("onkeydown",this.dvSearch_edFormName_onkeydown,this);
            this.dvSearch.form.edtSMsgNameKr.addEventHandler("onkeyup",this.dvSearch_edtSMsgNameKr_onkeyup,this);
            this.dvSearch.form.cboUserYn.addEventHandler("onitemchanged",this.dvSearch_cbUseYn_onitemchanged,this);
        };
        this.loadIncludeScript("SYS006CommonMessageM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
