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
            this.set_titletext("화면관리팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(675,533);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_TRGET_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_TRGET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_CN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"AUTH_TRGET_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_TRGET_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","19","128","636","152",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"400\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"권한대상명\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:AUTH_TRGET_NM\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","541","487","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","19","49","636","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","55","22","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","93","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("권한대상명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAuthTrgetNm","97","10","453","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","440","0","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static35","440","32","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt","19","101",null,"22","550",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","600","487","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("권한대상검색팝업");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit","618","18","37","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Close01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","16",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20",null,null,"20","20","46",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","459","20","76","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","335","93","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","45","145","5",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","93","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","121","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","400","99","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","465","99","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","530","99","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","595","99","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgNameKr","2.67%","313",null,"154","3.11%",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel01","18","280",null,"34","20",null,null,null,null,null,this);
            obj.set_text("SQL 내용(SELECT)");
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailTi");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId",null,"288","80","20","25",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_value("#{USER_ID}");
            obj.set_textAlign("center");
            obj.set_text("#{USER_ID}");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId",null,"288","120","20","109",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("쿼리 세션 사용자 변수");
            obj.set_verticalAlign("middle");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",675,533,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtAuthTrgetNm","value","ds_input","AUTH_TRGET_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","txtMsgNameKr","value","dsMaster","SQL_CN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SYS011AuthTargetUserP01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS011AuthTargetUserP01.xfdl(권한별사용자그룹 관리(조회))
        * 작 성			일 명: bsoh
        * 작 성	    	일 자: 2020/01/25
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
        this.lvchkColidDs   = "AUTH_TRGET_NM$SQL_CN";    // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "권한대상명$SQL내용";

        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sOptinoArg3;
        this.sParamArg1;
        this.sParamArg2;
        this.sParamArg3;
        this.sParamArg4;
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
        	//사용자 초기화 함수
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
        	/******************* 기본셋팅 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp01))
        	{
        		 this.sOptinoArg1 = this.getOwnerFrame().pv_sOp01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp02))
        	{
        		 this.sOptinoArg2 = this.getOwnerFrame().pv_sOp02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sOp03))
        	{
        		 this.sOptinoArg3 = this.getOwnerFrame().pv_sOp03;
        	}
        	/******************* 넘어온 인자값 *********************/
        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal01))
        	{
        		 this.sParamArg1 = this.getOwnerFrame().pv_sVal01;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal02))
        	{
        		 this.sParamArg2 = this.getOwnerFrame().pv_sVal02;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal03))
        	{
        		 this.sParamArg3 = this.getOwnerFrame().pv_sVal03;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal04))
        	{
        		 this.sParamArg4 = this.getOwnerFrame().pv_sVal04;
        	}

        /*
        	var strDs   = "dsSocpsGbcd";		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "SC005";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "X";   									// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";											// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);
        */
           this.postformInit();
        };

        this.postformInit = function()
        {

        	this.ds_input.setColumn(0,"AUTH_TRGET_NM", 	null);

        	var sSetComponet = this.sOptinoArg1;
        	var sAutoSearch  = this.sOptinoArg2;

        	// 설정에 따라서 호출 창으로부터 파라미터를 넘겨받는다.
        	this.divSearch.form.edtAuthTrgetNm.setFocus();

        	if(sSetComponet == "Y")
        	{
        		this.ds_input.setColumn(0,"AUTH_TRGET_NM",	this.sParamArg1);
        	}

        	// 설정에 따라서 폼 로드 시 자동 조회한다.
        	if(sAutoSearch == "Y")
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };
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
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        				break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "Insert":
        				this.fn_PostNew();
        				break;
        			case "Delete":
        				this.fn_PostDel();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	// 조회조건 셋팅
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */

        this.dvSearch_btnSearch_onclick = function(obj,e)
        {
        	if(!this.preSearch())
        	{
        		return false;
        	}
        	var strSvc 		= "Search";
        	var strUrl 		= "/prj/sys/RetrieveAuthTargetUserList.do";
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
        this.postSearch = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("조회자료가 없습니다.","조회정보","","information");
        	}
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	//trace(this.dsMaster.saveXML());
        };
        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        this.btnExit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };
        /**********************************************************************
        	07.Get, Set Method
        ***********************************************************************/
         /**
         * 한행을 처리하는 로직
         **/
        this.selDataSet = function(dsobj,nRow)
        {
        	if(this.sOptinoArg3 == "S")
        	{
        		var odsObj 	= this.all[dsobj];
        		var ds = new Dataset;
        		this.dsDummy.copyData(odsObj);
        		this.dsDummy.clearData();
        		ds.copyData(this.dsDummy); 			//전체 구조을 카피하기위해 데이타를 카피
        		var TRow = ds.addRow();
        		ds.copyRow(TRow, odsObj, nRow); 		//0번재 로에 행을 카피함

        		var objRtnArr = new Array(3);
        		objRtnArr[0] = this.sOptinoArg3;
        		objRtnArr[1] = ds.getColumn(ds.rowposition, "AUTH_TRGET_ID");
        		objRtnArr[2] = ds.getColumn(ds.rowposition, "AUTH_TRGET_NM");
        		objRtnArr[3] = ds.saveXML();
        		this.opener.fn_dsChildCopydsDummy(ds);
        		this.close(objRtnArr.toString());
        	}else
        	{
        		var odsObj = this.all[dsobj];
        		var ds = new Dataset;
        		this.dsDummy.copyData(odsObj);
        		this.dsDummy.clearData();
        		ds.copyData(this.dsDummy); 			//전체 구조을 카피하기위해 데이타를 카피

        		this.dsDummy.getColumn(i,"CHK")
        		var TRow = -1;
        		for(var i = 0; i < odsObj.rowcount; i++)
        		{
        			if(odsObj.getColumn(i,"CHK") == 0)
        			{
        				continue;
        			}
        			 TRow = ds.addRow();
        			ds.copyRow(TRow, odsObj, i);
        		}
        		var objRtnArr = new Array(1);
        		objRtnArr[0] = this.sOptinoArg3;
        		objRtnArr[1] = ds.saveXML();
        		this.opener.fn_dsChildCopydsDummy(ds);
        		this.close(objRtnArr.toString());
        	}
        };

        /**********************************************************************
        	08.기타 Control Event
        ***********************************************************************/

        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	if(this.sOptinoArg3 == "S")
        	{
        		this.selDataSet(obj.binddataset, this.dsMaster.rowposition);
        	}
        };

        this.btnConfirm_onclick = function(obj,e)
        {
            if(this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 있습니다.! 저장 후 확인해 주세요.", "확인정보","", "question");
                return false;
            }

        	if(this.sOptinoArg3 == "S")
        	{
        		this.grdMaster_oncelldblclick(this.grdMaster);

        	}else
        	{
        		var grdDs = this.grdMaster.getBindDataset();
        		if(grdDs.findRow("CHK", "1") == -1)
        		{
        			this.gfn_alert("선택한 데이타가 없습니다.","조회정보","","information");
        			return false;
        		}
        		this.selDataSet(this.grd_list.binddataset);
        	}
        };

        this.divSearch_edtProgId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };

        this.divSearch_edtFormId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };

        this.divSearch_edtFormNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };

        this.divSearch_cboPrefix_onitemchanged = function(obj,e)
        {
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };


        this.divSearch_cboUserYn_onitemchanged = function(obj,e)
        {
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };

        this.grdMaster_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        //
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        //
        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        //
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        //
        this.btnExcel_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };


        /**********************************************************************
                09. 추가 함수 선언
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
            this.dsMaster.setColumn(nRow, "CHK", "0");           //체크
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function()
        {

        };

        /**********************************************************************
                10. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이타가 없습니다.!", "삭제정보", "", "warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");

            if(result == 0)
            {
                return false;
            }

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

            var strSvc      = "Del";
            var strUrl      = "/prj/sys/DeleteAuthTargetUserList.do";
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
                11. 저장 함수 선언
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
                    if(this.dsMaster.getColumn(i, "CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.!", "저장정보","", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보", "","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm( "저장 하시겠습니까?","저장","","question");
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
            var strUrl      = "/prj/sys/SaveAuthTargetUserList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
                12. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function()
        {
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이타가 없습니다.!",  "EXCEL 정보","","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question");
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdList, "시트이름", "파일이름");

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.divSearch.form.edtAuthTrgetNm.addEventHandler("onkeydown",this.divSearch_edtProgId_onkeydown,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
        };
        this.loadIncludeScript("SYS011AuthTargetUserP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
