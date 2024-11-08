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
            this.set_titletext("파일마스터관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_DC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_TODT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTFL_NO\"/><Col id=\"ATTFL_DC\"/><Col id=\"USE_YN\"/><Col id=\"REG_FRDT\"/><Col id=\"REG_TODT\"/></Row></Rows>");
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


            obj = new Dataset("dsGUserYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ATTFL_DC\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"CHAR\" size=\"1\"/><Column id=\"NLOGN_SVC_TRGET_YN\" type=\"CHAR\" size=\"1\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"70\"/><Column id=\"REG_DT\" type=\"DATE\" size=\"16\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"70\"/><Column id=\"MOD_DT\" type=\"DATE\" size=\"16\"/><Column id=\"MOD_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTFL_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster1", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"ATTFL_DC\" type=\"STRING\" size=\"1000\"/><Column id=\"USE_YN\" type=\"CHAR\" size=\"1\"/><Column id=\"NLOGN_SVC_TRGET_YN\" type=\"CHAR\" size=\"1\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"70\"/><Column id=\"REG_DT\" type=\"DATE\" size=\"8\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"70\"/><Column id=\"MOD_DT\" type=\"DATE\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","106",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"219\"/><Column size=\"272\"/><Column size=\"91\"/><Column size=\"113\"/><Column size=\"350\"/><Column size=\"88\"/><Column size=\"192\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"파일마스터번호\" cssclass=\"point\"/><Cell col=\"3\" text=\"상세파일정보\"/><Cell col=\"4\" text=\"첨부여부\"/><Cell col=\"5\" text=\"상세\"/><Cell col=\"6\" text=\"상세요약\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일시\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ATTFL_NO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editautoselect=\"false\"/><Cell col=\"3\" text=\"bind:ATTFL_DC\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USE_YN\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGUserYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"상세\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"6\" text=\"bind:ATTFL_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MOD_ID\"/><Cell col=\"8\" text=\"bind:MOD_DTTM\" calendardateformat=\"yyyy-MM-dd ddd HH:mm:ss\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("dvSearch","0","0",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("stcSearchAttflNo","0","10","103","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("0");
            obj.set_text("파일마스터번호");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stcSearchAttflDc","342","10","93","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일설명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stcSearchUseYn","606","10","73","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("2");
            obj.set_text("첨부여부 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchAttflNo","110","10","222","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchAttflDc","439","10","167","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchUseYn","681","10","118","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUserYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchRegFrdt","110","39","128","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("6");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stcSearchRegDt","0","40","103","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("7");
            obj.set_text("첨부일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Calendar("calSearchRegTodt","277","39","128","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("8");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("Static00","253","40","10","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","6","78","117","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","515","71","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("35");
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
            obj.set_description("파일마스터관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","dvSearch.form.edtSearchAttflNo","value","ds_input","ATTFL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","dvSearch.form.edtSearchAttflDc","value","ds_input","ATTFL_DC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","dvSearch.form.cboSearchUseYn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","dvSearch.form.calSearchRegFrdt","value","ds_input","REG_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","dvSearch.form.calSearchRegTodt","value","ds_input","REG_TODT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("SYS012AttFileM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS012AttFileM01.xfdl(첨부파일상세 관리(조회))
        * 작 성         일 명: bsoh
        * 작 성         일 자: 2021/01/31
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
        this.lvchkColidDs   	= "ATTFL_NO";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 	= "첨부파일번호";
        this.lvNotNullobj     	= "";
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
        	//그리드에 필수항목을 표시함.

        	var strDs   = "dsUserYn|dsGUserYn";		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "00801|00801";            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "T|X";   					// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";						// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";   				// 콤보의 (A:기본명-네임바운드nmae ,B:코드에[01] 기본명-네임바운드name1)

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
            var strRegTodt = objApp.gds_SystemDate.getColumn(0,"YYYYMMDD");

        	this.ds_input.setColumn(0, "REG_FRDT", this.gfn_addMonth(strRegTodt, -1));
        	this.ds_input.setColumn(0, "REG_TODT", strRegTodt);

        	this.ds_input.setColumn(0, "USE_YN", null);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		this.alert(sErrorMsg);
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
        	var strUrl 		= "/prj/sys/RetrieveAttFileList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			//생략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        	//trace(this.dsMaster.saveXML());

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

        	if(this.gfn_isUpdateD(this.dsMaster) == true)
        	{
        		this.gfn_alert("변경 이력이 있습니다. 저장 후 신규 작업해 주세요.","저장 정보","","question");
        		return false;
        	}

        	// 첨부파일 팝업 호출
            var attachNo = 'attachxxxxx0xxxvxxxxxxxxxxxxxxxx'.replace(/[xv]/g, function(c) {
        		var r = Math.random()*16|0;
        		v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});

        	this.fn_setCallPopup01(attachNo);

        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostAdd = function()
        {

        }

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
        		this.alert("삭제할 데이타가 없습니다.!", "삭제 정보" ,"warning");
        		return false;
        	}

        	var result = this.confirm( "현재선택행을 삭제하시겠습니까?", "삭제", "question" );
        	if(result == 0)
        	{
        	   return false;
        	}

        	//개별삭제시
        	//this.dsMaster.deleteRow(this.dsMaster.rowposition);

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i, "CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

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
        	var strUrl 		= "/prj/sys/DeleteAttFileList.do";
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
        };

        /**********************************************************************
        	08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
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

        	var result = this.gfn_confirm("MSG00009","저장 처리","","question"); // 저장 하시겠습니까?
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
        	var strUrl 		= "/prj/sys/SaveAttFileList.do";
        	var strInDs  	= "ds_input=ds_input:a ";
        		strInDs    += "dsMaster=dsMaster:u";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //생략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	if(!this.preExcelUp())
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
        	사용자ID 조회조건 조회
        */
        this.dvSearch_edtUserId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	사용자명 조회조건 조회
        */
        this.dvSearch_edtUserNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	사용여부 조회조건 조회
        */
        this.dvSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         *	그리드멀티 선택
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
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        /**
        	행변경시 현제 데이타가 변경돼었는지 체크
        */
        this.dsMaster_canrowposchange = function(obj,e)
        {
        /*
        	if(obj.getRowType(e.newrow) != 2)
        	{
        		var result;

        		if(obj.rowcount < 1)
        		{
        			return true;
        		}

        		if(this.gfn_isUpdateD(obj))
        		{
        			result = this.confirm("변경이력있습니다.이동하시겠습니까?","확인");

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
        */
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	return (this.gfn_isUpdate(this.dsMaster));
        };

        /**
          * 상세버튼 클릭
         **/
        this.grdMaster_oncellclick = function(obj,e)
        {
            var sValue = "";

        	if (obj.getCellProperty("body", e.cell, "text") == "상세" && obj.getCellProperty("body", e.cell, "edittype") == "button")
        	{
        		sValue = this.gfn_trim(obj.getBindDataset().getColumn(e.row,"ATTFL_NO"));
        		this.fn_setCallPopup01(sValue);
        	}

        };


        /**
         * 실제로 처리하는 팝업함수
         */
        // 파일업로드
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	var multFlg     = "S"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리

        	this.dsDummy.clearData();
        	this.ds_input1.setColumn(this.ds_input1.rowposition, "ATTFL_NO", sCodeId);

        	var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        	var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        	var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	var lv_sValue01 		= sCodeId;					// 부모에서 넘어가는 파라미터(첨부파일번호)
        	var lv_sValue02 		= "8";						// 부모에서 넘어가는 파라미터(파일허용갯수)
        	var lv_sValue03 		= "all";					// 부모에서 넘어가는 파라미터(파일허용유형 all,text,image)
        	var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터(확장자 ext)
        	var lv_sValue05 		= "sys";					// 부모에서 넘어가는 파라미터(도메인네임)
        	var lv_sValue06 		= "Y";                      // 부모에서 넘어가는 파라미터(추가/삭제 보이기)

        	var sPopId 			= "POP101FileUploadP01";
        	var sUrl 			= "pop::POP102FileUploadP01.xfdl";
        	var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        						  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        						  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        						  , pv_sVal01:lv_sValue01      	// 파라미터1
        						  , pv_sVal02:lv_sValue02       // 파라미터2
        						  , pv_sVal03:lv_sValue03       // 파라미터3
        						  , pv_sVal04:lv_sValue04       // 파라미터4
        						  , pv_sVal05:lv_sValue05       // 파라미터5
        						  , pv_sVal06:lv_sValue06};     // 파라미터6
        	var sPopupCallBack 	= "fn_popupCallback";
        	var oOption 		= {};

        	this.dsDummy.clearData();
        	this.gfn_openPopup( sPopId
        					  , sUrl
        					  , oArg
        					  , sPopupCallBack
        					  , oOption);

        };

        //Popup 데이터 전달
        this.fn_dsChildCopydsDummy = function(ds)
        {
        	this.dsDummy.clearData();
        	this.dsDummy.copyData(ds);
        };
        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "POP101FileUploadP01" : // 파일업로드
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        					// 데이터 추가
        					var ATTFL_NO = this.dsDummy.getColumn(0,"ATTFL_NO");

                            // 찾기
        					var nRow = this.dsMaster.findRow("ATTFL_NO", ATTFL_NO);

        					this.ds_input1.setColumn(0, "ATTFL_NO", ATTFL_NO);

        					this.dsMaster1.clearData();

        					var strSvc 		= "Ret1";
        					var strUrl 		= "/prj/sys/RetrieveAttFileList.do";
        					var strInDs  	= "ds_input=ds_input1";
        					var strOutDs 	= "dsMaster1=dsMaster";
        					var strArg 		= "";
        					var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        					var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        					this.gfn_Transaction(strSvc
        										, strUrl
        										, strInDs
        										, strOutDs
        										, strArg
        										, strCallBack
        										, strASync);

        					if (this.dsMaster1.rowcount > 0) {
        						this.dsMaster.set_updatecontrol(false);

        						if (nRow >= 0) {
        							this.dsMaster.set_rowposition(nRow);
        						} else {
        							nRow = this.dsMaster.addRow();
        						}

        						this.dsMaster.copyRow(nRow, this.dsMaster1, 0);
        						this.dsMaster.setRowType(nRow, Dataset.ROWTYPE_NORMAL);
        						this.dsMaster.set_updatecontrol(true);
        					}

        				} else if(sRtn[0] == "M")
        				{
        				} else if(sRtn[0] == "CLOSE")
        				{

        				} else if(sRtn[0] == "EXIT")
        				{
        				}
        			}
        			break;

        		default	:
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.dvSearch.form.edtSearchAttflNo.addEventHandler("onkeyup",this.dvSearch_edtUserId_onkeyup,this);
            this.dvSearch.form.edtSearchAttflDc.addEventHandler("onkeydown",this.dvSearch_edFormName_onkeydown,this);
            this.dvSearch.form.edtSearchAttflDc.addEventHandler("onkeyup",this.dvSearch_edtUserNm_onkeyup,this);
            this.dvSearch.form.cboSearchUseYn.addEventHandler("onitemchanged",this.dvSearch_cboUseYn_onitemchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster1.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("SYS012AttFileM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
