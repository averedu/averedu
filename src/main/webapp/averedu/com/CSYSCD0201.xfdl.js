(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CSYSCD0201");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성코드\" type=\"STRING\" size=\"256\"/><Column id=\"공통코드여부\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성명\" type=\"STRING\" size=\"256\"/><Column id=\"관리부서\" type=\"STRING\" size=\"256\"/><Column id=\"정렬순서\" type=\"STRING\" size=\"256\"/><Column id=\"비고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster2", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"상태\" type=\"STRING\" size=\"256\"/><Column id=\"순번\" type=\"STRING\" size=\"256\"/><Column id=\"부서코드\" type=\"STRING\" size=\"256\"/><Column id=\"부서명\" type=\"STRING\" size=\"256\"/><Column id=\"사용여부\" type=\"STRING\" size=\"256\"/><Column id=\"급여회계매핑\" type=\"STRING\" size=\"256\"/><Column id=\"부서연계속성코드\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Dept_Title_01","13","15",null,"45","1060",null,null,null,null,null,this);
            obj.set_font("14pt/normal \"Arial\"");
            obj.set_taborder("1");
            obj.set_text("<b v=\'true\'>부서코드연계속성정보</b> ");
            obj.set_cssclass("stc_Dept_Title_01");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_01","10","69","106","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'>부서연계 속성명</b> ");
            obj.set_cssclass("stc_dept_01");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_01","110","76","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edt_dept_01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_02","10","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'>부서명</b> ");
            obj.set_cssclass("stc_dept_02");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_02","70","131","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("edt_dept_02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_03","200","123","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'>부서코드</b> ");
            obj.set_cssclass("stc_dept_03");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept_03","260","131","107","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("edt_dept_03");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_04","373","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<b v=\'true\'>기관구분</b> ");
            obj.set_cssclass("stc_dept_04");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_01","433","128","75","32",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_05","514","124","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'>최종조직여부</b> ");
            obj.set_cssclass("stc_dept_05");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_02","591","131","149","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_06","753","123","77","45",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<b v=\'true\'>학사조직여부</b> ");
            obj.set_cssclass("stc_dept_06");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dept_03","840","130","140","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_01","1510","79","99","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("⌕ 조회");
            obj.set_escapebutton("true");
            obj.set_background("#e1b01d");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07","10","190",null,"45","1143",null,null,null,null,null,this);
            obj.set_font("12pt/normal \"Arial\"");
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>부서코드 연계속성 정보</b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_07_00","200","190",null,"45","840",null,null,null,null,null,this);
            obj.set_font("10pt/normal \"Arial\"");
            obj.set_taborder("15");
            obj.set_text("* 부서코드 연계속성 정보 삭제 시 해당 정보의 연계속성 값이 같이 삭제됩니다.");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#ff1e1e");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","13","233","1617","257",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"80\"/><Column size=\"87\"/><Column size=\"225\"/><Column size=\"165\"/><Column size=\"417\"/><Column size=\"139\"/><Column size=\"111\"/><Column size=\"343\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"부서연계속성코드\"/><Cell col=\"4\" text=\"공통코드여부\"/><Cell col=\"5\" text=\"부서연계속성명\"/><Cell col=\"6\" text=\"관리부서\"/><Cell col=\"7\" text=\"정렬순서\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:상태\"/><Cell col=\"2\" text=\"bind:순번\"/><Cell col=\"3\" text=\"bind:DEPT_ATTR_CD\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:공통코드여부\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:DEPT_ATTR_VAL\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:관리부서\"/><Cell col=\"7\" text=\"bind:정렬순서\"/><Cell col=\"8\" text=\"bind:비고\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_1",null,"199","65","31","655",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("⊕ 추가");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_3",null,"200","65","31","515",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_4",null,"200","65","31","447",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_2",null,"200","65","31","585",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("⊝ 삭제");
            obj.set_cssclass("btn_dept_04");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_08","1485","189","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_usedecorate("true");
            obj.set_font("13px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_09","13","500",null,"45","1140",null,null,null,null,null,this);
            obj.set_font("12pt/normal \"Arial\"");
            obj.set_taborder("22");
            obj.set_text("<b v=\'true\'>부서코드 연계속성 값 </b> ");
            obj.set_cssclass("stc_dept_07");
            obj.set_color("#000000");
            obj.set_usedecorate("true");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster2","13","550","1617","263",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("dsMaster2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"65\"/><Column size=\"64\"/><Column size=\"104\"/><Column size=\"197\"/><Column size=\"80\"/><Column size=\"173\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"부서코드\"/><Cell col=\"4\" text=\"부서명\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"급여회계매핑\"/><Cell col=\"7\" text=\"부서연계속성코드\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" background=\"#ffffff\"/><Cell col=\"1\" text=\"bind:상태\" background=\"#ffffff\"/><Cell col=\"2\" text=\"bind:순번\" background=\"#ffffff\"/><Cell col=\"3\" text=\"bind:부서코드\" background=\"#ffffff\"/><Cell col=\"4\" text=\"bind:부서명\" background=\"#ffffff\"/><Cell col=\"5\" text=\"bind:사용여부\" background=\"#ffffff\"/><Cell col=\"6\" text=\"bind:급여회계매핑\" displaytype=\"combocontrol\" edittype=\"combo\" background=\"#ffffff\"/><Cell col=\"7\" text=\"bind:부서연계속성코드\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_10_00_03",null,"514","65","31","610",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_dept_05");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dept_5",null,"514","65","31","680",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.set_cssclass("btn_dept_05");
            obj.set_cursor("auto");
            this.addChild(obj.name, obj);

            obj = new Static("stc_dept_10","1315","510","130","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("<b v=\'true\'>총건수 : </b> ");
            obj.set_usedecorate("true");
            obj.set_font("13px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1920,830,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CSYSCD0201.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS01ProgramM01.xfdl(프로그램관리)
        * 작 성			일 명: admin
        * 작 성	    	일 자: 2024/06/18
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
        this.lvchkColidDs   	= "FORM_PATH$FORM_ID$FORM_NM";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 	= "경로$화면아이디$화면이름";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
        	//this.gfn_formOnload(obj.e);
        	//사용자 화면  초기화 함수
           	//this.fn_formInit();
        	this.fn_Ret();

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
        };

        /**
         *	기능 : 초기화 후처리
         */
        this.fn_PostformInit = function()
        {
        	this.ds_input.setColumn(0,"FORM_PATH", null);
        	this.ds_input.setColumn(0,"USER_YN",   null);
        	this.dvSearch.form.edUiId.setFocus();

        	this.fn_Ret();
        };


        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	this.gfn_clearSortAll(this.grdMaster);
        	if(nErrorCode != 0)
        	{
        		this.dsMaster.set_enableevent(true);
        		this.gfn_alert(sErrorMsg);
        		return false;
        	}else
        	{
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
        	this.dsMaster.set_enableevent(false);
        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/sys/RetrieveProgramMasterList.do";
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
        	this.dsMaster.set_enableevent(true);
        	//trace(this.dsMaster.saveXML());
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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
        	//this.dsMaster.setColumn(nRow,"FORM_PATH","sys"); 		//업체코드
        	//this.dsMaster.setColumn(nRow,"CHK", 	'0'); 		    //삭제여부
        	//this.dsMaster.setColumn(nRow,"USER_YN", '1'); 		    //사용유무
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
        		this.gfn_alert("MSG00006","삭제 정보","","information"); 						// 삭제할 데이타가 없습니다.!
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
        		if(this.dsMaster.getColumn(i,"CHK") == "1")
        		{
        			this.dsMaster.deleteRow(i);
        		}
        	}
        	this.dsMaster.set_enableevent(true);

        	//개별삭제시
        	return true;
        }

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
        	var strUrl 		= "/prj/sys/DeleteProgramMasterList.do";
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
                this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	/*
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}

        	var result = this.gfn_confirm("MSG00009","저장 처리","","question");              // 저장 하시겠습니까?

        	if(result == 0)
        	{
        		return false;
        	}
        	return true;
        	*/
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
        	var strUrl 		= "/prj/sys/SaveProgramMasterList.do";
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
        		this.gfn_alert("MSG00004","EXCEL 정보","","information");
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00005","EXCEL 출력","","question");
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdMaster);
        };
        /**********************************************************************
        	12. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	13. 기타 Control Event
        ***********************************************************************/
        /*
         *	그리를 더블 클릭시 멀티소팅처리하는이벤트
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };
        /*
         *	그리헤더에 올체크어리하는 이벤트
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        /*
         * 조회조건을 콤보의 내영이 변경될때 바로 조회하는 이벤트
         */
        this.dvSearch_cbPrefix_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };


        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트
         */
        this.dvSearch_edFormName_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /*
         * 조회조건을 콤보의 내영이 변경될때 바로 조회하는 이벤트
         */
        this.dvSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };


        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트
         */
        this.dvSearch_edFormId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };
        /*
         * 조회조건을 Enter(엔터)를 첫을 바로 조회하는 이벤트
         */
        this.dvSearch_edUiId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)							// Enter:13 코드
        	{
        		this.fn_Ret();
        	}
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
            this.stc_Dept_Title_01.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_01.addEventHandler("onclick",this.stc_dept_01_onclick,this);
            this.stc_dept_02.addEventHandler("onclick",this.stc01_01_onclick,this);
            this.stc_dept_04.addEventHandler("onclick",this.stc01_00_onclick,this);
            this.cbo_dept_01.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.stc_dept_05.addEventHandler("onclick",this.stc01_02_onclick,this);
            this.cbo_dept_02.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.stc_dept_06.addEventHandler("onclick",this.stc_dept_07_onclick,this);
            this.cbo_dept_03.addEventHandler("onitemchanged",this.cbo_dept_01_onitemchanged,this);
            this.btn_dept_01.addEventHandler("onclick",this.btn_dept_01_onclick,this);
            this.stc_dept_07.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.stc_dept_07_00.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btn_dept_1.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_3.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_4.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_2.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.stc_dept_08.addEventHandler("onclick",this.stc_dept_08_onclick,this);
            this.stc_dept_09.addEventHandler("onclick",this.stc_09_00_onclick,this);
            this.btn_dept_10_00_03.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
            this.btn_dept_5.addEventHandler("onclick",this.divHakgwa_btnJeongong_onclick,this);
        };
        this.loadIncludeScript("CSYSCD0201.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();