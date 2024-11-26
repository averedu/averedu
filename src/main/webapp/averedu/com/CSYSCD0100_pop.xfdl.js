(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_005");
            this.set_titletext("공통코드등록관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsGrpCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMMN_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMMN_GRP_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_ATT_VAL\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_WPC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmomnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMMN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK_CTNT\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CMMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_DT\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_DT\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","15","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("그리드등록리스트");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","37","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","415","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","46","22","204",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","46","22","252",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","44",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsGrpCd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"그룹명\" cssclass=\"point\"/><Cell col=\"2\" text=\"순서\" cssclass=\"point\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_09:0","15","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","430",null,"400","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stc_00","7","22","130","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("권한그룹매핑");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static11","7","40","100","7",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static14","7","12","100","17",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01","7","47","795",null,null,"-3",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_binddataset("dsCmomnCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"분류코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"분류타입\"/><Cell col=\"3\" text=\"코드길이\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_02","137","22","50","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","7","-3",null,"15","-3",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_03","817","22","130","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","817","40","100","7",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","817","12","100","17",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid02","817","47",null,null,"-3","-3",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_binddataset("dsCmomnCd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"공통코드\" cssclass=\"point\"/><Cell col=\"2\" cssclass=\"point\" text=\"공통코드명\"/><Cell col=\"3\" cssclass=\"point\" text=\"순서\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_04","947","22","50","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div03","802","13","15",null,null,"-3",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_AreaBox");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"22","46","22","297",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("조회");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01",null,"22","46","22","249",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("추가");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02",null,"22","46","22","201",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("삭제");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button03",null,"22","46","22","153",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("저장");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button04",null,"22","46","22","105",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("엑셀");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button05",null,"22","46","22","57",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("필터");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button06",null,"22","58","22","-3",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("도움말");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button07","456","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("조회");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button08","504","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("추가");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button09","552","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("삭제");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button10","600","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("저장");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button11","648","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button12","696","22","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("필터");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button13","744","22","58","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("도움말");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Tabpage2");
            this.Tab00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1606,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CSYSCD0100_pop.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): CSYSCD0100_pop.xfdl(공통코드조회/등록/수정/삭제)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2024/11/26
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
        //GRID 전용 필수항목체크
        this.lvchkColidDs   		= "CMMN_CD$CMMN_CD_NM";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 		= "공통코드$공통코드명";

        this.lvchkColidDs_Detail   	= "CMMN_DETA_CD$CMMN_DETA_CD_NM$LANG_FG_CD";        					// 디테일 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs_Detail 	= "상세코드$코드명$언어구분코드";

        /*전역변수*/
        this.strKeyValue			= "";
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

        var strSvc 		= "Ret";
        	var strUrl 		= "/prj/com/RetrieveCommCodeMasterList.do";
        	var strInDs  	= " ";
        	var strOutDs 	= "dsGrpCd=dsGrpCd";
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

        this.fn_PostformInit = function()
        {
        	this.ds_input.setColumn(this.ds_input.rowposition,"USE_YN",'1');
        	this.fn_Ret();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

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
        			case "DRet":
        				this.fn_PostDRet();
        			  	break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "DSave":
        			    this.fn_PostDSave();
        				break;
        			case "Add":
        				this.fn_PostAdd();
        				break;
        			case "DAdd":
        				this.fn_PostDAdd();
        				break;
        			case "Del":
        				this.fn_PostDel();
        				break;
        			case "DDel":
        				this.fn_PostDDel();
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
        	this.dsMaster.clearData();
        	this.dsDetail.clearData();
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

        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/com/RetrieveCommCodeMasterList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	//	strOutDs	+= "dsMaster=dsMaster";
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
        	this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.preDSearch = function()
        {
        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"CMMN_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"CMMN_CD"));

        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
        	if(!this.preDSearch())
        	{
        		return false;
        	}


        	var strSvc 		= "DRet";
        	var strUrl 		= "/prj/com/RetrieveCommCodeDetailList.do";
        	var strInDs  	= "ds_input1=ds_input1";
        	var strOutDs 	= "dsDetail=dsDetail";
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
        this.fn_PostDRet = function()
        {
        	//trace(this.dsDetail.saveXML());
        	this.gfn_clearSortAll(this.grdDetail);
        	this.gfn_getRowCount(this.staRowCnt1,this.dsDetail);
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

        	var result;
        	var nRow=-1
        	if(this.gfn_isUpdateD(this.dsMaster) == true)
        	{
        		result = this.gfn_confirm("MSG00010", "저장정보","", "question" );

        		if(result == true)
        		{
        			this.dsMaster.set_enableevent(false);
        			this.gfn_reSetDs(this.dsMaster,this.dsMaster.rowposition);
        			nRow = this.dsMaster.addRow();
        			this.dsMaster.set_enableevent(true);

        		}else
        		{
        			return false;
        		}
        	}else
        	{
        		nRow = this.dsMaster.addRow();
        	}
        	this.dsMaster.setColumn(nRow,"USE_YN", 		   "1"); 		//사용유무
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.postAdd = function()
        {

        };
        /**********************************************************************
        	06-1.디테일 추가 함수 선언(마스터단일/디테일은 멀티처리)
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreDAdd = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00014","마스터 정보","","information");
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 디테일 추가 실행
         */
        this.btnDAdd_onclick = function(obj,e)
        {
        	if(!this.fn_PreDAdd())
        	{
        		return false;
        	}

        	var nRow = this.dsDetail.addRow();

        	this.dsDetail.setColumn(nRow,"CMMN_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"CMMN_CD")); 	//기본키값
        	this.dsDetail.setColumn(nRow,"CHK", 	   	  "0"); 														//체크
        	this.dsDetail.setColumn(nRow,"USE_YN", 		  "1"); 														//사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.postDAdd = function()
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
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("삭제할 데이타가 없습니다.!");
        		return false;
        	}

        	var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "저장","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}
        	this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
        	var strUrl 		= "/prj/com/DeleteCommCodeMasterList.do";
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
        	this.dsMaster_onrowposchanged(this.dsMaster);
        };
        /**********************************************************************
        	07-1. 디테일 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.preDDel = function()
        {

        	//멀티삭제용도
        	if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("삭제할 데이타가 없습니다.!");
        		return false;
        	}

        	var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "저장","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsDetail.set_enableevent(false);
        	for(var i=this.dsDetail.rowcount-1;i>-1;i--)
        	{
        		if(this.dsDetail.getColumn(i,"CHK") == "1")
        		{
        			this.dsDetail.deleteRow(i);
        		}
        	}
        	this.dsDetail.set_enableevent(true);

        	//개별삭제시
        	return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.btnDDel_onclick = function(obj,e)
        {
        	if(!this.preDDel())
        	{
        		return false;
        	}

        	var strSvc 		= "DDel";
        	var strUrl 		= "/prj/com/DeleteCommCodeDetailList.do";
        	var strInDs  	= "dsDetail=dsDetail:u";
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

        this.postDDel = function()
        {

        };
        /**********************************************************************
        	08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(this.dsDetail.rowcount > 0)
        	{
        		for(var i=0;i<this.dsDetail.rowcount; i++)
        		{
        			if(this.dsDetail.getColumn(i,"CHK") == 0)
        			{
        				continue;
        			}
        			this.dsDetail.setColumn(i,"CHK","0");
        		}
        	}

        	if(!this.gfn_isUpdate(this.dsMaster) && !this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}
         	var chkFocusFlg1 = true;
            var result1 	= this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs_Detail, this.lvchkColNameDs_Detail,this.grdDetail,chkFocusFlg1,this);
            if(result1[0] != "success")
        	{
        		this.gfn_alert(result1[0]);
        		this.dsDetail.set_rowposition(result1[1]); //데이터셋 변경
        		return false;
        	}

        	var result = this.gfn_confirm("저장 하시겠습니까?", "저장","", "question" );

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
        	this.dsMaster.set_enableevent(false);

        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/com/SaveCommCodeMasterList.do";
        	var strInDs     = "ds_input=ds_input ";
        		strInDs    += "dsMaster=dsMaster:u ";
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
        	this.dsMaster.set_enableevent(true);
        	this.dsMaster_onrowposchanged(this.dsMaster);
        };

        this.fn_PostDSave = function()
        {
        	this.dsDetail.set_enableevent(true);
        	this.dsMaster_onrowposchanged(this.dsMaster);
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
        //마스터 다운로드

        this.fn_Excel = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("출력할 엑셀데이터가 없습니다.!", "EXCEL 정보" ,"information");
        		return false;
        	}
        	var result = this.gfn_confirm("Excel을 출력하시겠습니까?", "EXCEL 출력","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdMaster);
        };

        //디테일 다운로드
        this.btnDExcelDn_onclick = function(obj,e)
        {
        	if(this.dsDetail.rowcount < 1)
        	{
        		this.gfn_alert("출력할 엑셀데이터가 없습니다.!", "EXCEL 정보" ,"information");
        		return false;
        	}
        	var result = this.gfn_confirm("Excel을 출력하시겠습니까?", "EXCEL 출력","", "question" );
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdDetail);
        };

        /**********************************************************************
        	12. ExcelUpLoad 신규저장시
        ***********************************************************************/
        this.fn_PreExcelUp = function()
        {
        	var result = this.gfn_confirm("기존데이터를 삭제하고 신규데이터를 일괄적용하겠습니까?", "EXCEL 업로드","", "question" );

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
        	공통코드 조회조건
        */
        this.divSearch_edtClassId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	공통코드명 조회조건
        */
        this.divSearch_edtClassNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
         *사용여부 조회
         */
        this.divSearch_cboUserYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /*
         *	그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        }
        /**
         *	그리드 체크박스 올체크
         */
        this.grdDetail_onheadclick = function(obj, e)
        {
        	if(e.cell == this.grdDetail.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);

        	}
        };

        /**
         *	그리드멀티 소트정열
         */
        this.grdDetail_onheaddblclick = function(obj, e)
        {
        	if(e.cell !=  this.grdDetail.getBindCellIndex("body","CHK") && e.cell !=  1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        }

        /**
         *	행변경시 현제 데이타가 변경돼었는지 체크
         */
        this.dsMaster_canrowposchange = function(obj, e)
        {

        	if(obj.getRowType(e.newrow) != 2)
        	{
        		var result;

        		if(obj.rowcount < 1)
        		{
        			return true;
        		}

        		if(this.gfn_isUpdateD(obj))
        		{
        			result = this.gfn_confirm("변경이력있습니다.이동하시겠습니까?", "확인","", "question" );

        		}else
        		{
        			return true;
        		}

        		if(result == true)
        		{
        			this.gfn_reSetDs(obj,e.oldrow);

        		}else
        		{
        			return false;
        		}
        	}

        }

        this.dsDetail_cancolumnchange = function(obj, e)
        {
        	if(e.columnid == "LANG_FG_CD")
        	{
        		var nRow = this.dsDetail.findRowExpr("TCODE == '" + e.newvalue + "' && currow != '" +e.row+"'");
        		if(nRow > -1)
        		{
        			this.gfn_alert("중복된 키를 입력할수 없습니다.");
        			return false;
        		}else
        		{
        			if(this.dsDetail.getRowType(e.row) == 2)
        			{
        				this.dsDetail.set_enableevent(false);
        				this.dsDetail.setColumn(e.row,"TCODE",e.newvalue);
        				this.dsDetail.set_enableevent(true);
        			}
        		}

        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail));
        };



        this.btnMAdd_onclick = function(obj,e)
        {
        this.fn_New();
        };

        this.btnMDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        this.btnMSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        this.btnMExcelDn_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.btnPopup_onclick = function(obj,e)
        {
        	var nW = 500;
        var nH = 400;

        var objApp = nexacro.getApplication();
        var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        nLeft = system.clientToScreenX(this, nLeft);
        nTop  = system.clientToScreenY(this, nTop);


        var sOpenStyle = "dragmovetype=all"
                     + " resizable=true"
                     + " titletext=Modeless"
                     + " showtitlebar=true"
                     + " showstatusbar=false";

        nexacro.open("chf_popup3"
                   , "com::CSYSCD0100_pop.xfdl"
                   , this.getOwnerFrame()
                   , ''
                   , sOpenStyle
                   , nLeft
                   , nTop
                   , nW
                   , nH
                   , this);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        this.btnDSave_onclick = function(obj,e)
        {
        	if(!this.fn_PreSave())
        	{
        		return false;
        	}
        	this.dsDetail.set_enableevent(false);
        	var strSvc 		= "DSave";
        	var strUrl 		= "/prj/com/SaveCommCodeDetailList.do";
        	var strInDs     = "ds_input1=ds_input1 ";
        		strInDs    += "dsDetail=dsDetail:u ";
        	var strOutDs 	= "dsDetail=dsDetail";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("CSYSCD0100_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
