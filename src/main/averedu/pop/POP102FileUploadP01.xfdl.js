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
            this.set_titletext("첨부파일팝업");
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
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_SN\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_LOGIC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_PATH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_PHYSC_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_EXTSN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_BYTE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"INDCT_ORD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTFL_DC\" type=\"STRING\" size=\"256\"/><Column id=\"NLOGN_SVC_TRGET_AT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"ATTFL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ATTFL_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","19","80","636","387",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"293\"/><Column size=\"111\"/><Column size=\"52\"/><Column size=\"67\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"파일사이즈(KB)\"/><Cell col=\"4\" text=\"정렬\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:ATTFL_LOGIC_NM\" tooltiptext=\"bind:ATTFL_LOGIC_NM\"/><Cell col=\"3\" text=\"bind:FILE_SIZE\" displaytype=\"text\" edittype=\"none\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:INDCT_ORD\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"5\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","600","487","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","19","53",null,"22","550",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","540","487","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Pop");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일다운로드");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit","618","18","37","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Close01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","16",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20",null,null,"20","20","46",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","459","20","76","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","335","45","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","45","145","5",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","45","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","73","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","530","51","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","595","51","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMaxSize","22","490","328","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("※ 업로드당 최대 : 1024KB");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fileUpload","40","230","596","130",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_itemcount("0");
            obj.set_multiselect("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload","40","373","596","67",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",675,533,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("POP102FileUploadP01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): POP102FileUploadP01.xfdl(파일업로드팝업)
        * 작 성			일 명: bsoh
        * 작 성	    	일 자: 2021/02/01
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
        this.sOptinoArg1;
        this.sOptinoArg2;
        this.sOptinoArg3;
        this.sParamArg1; // ATTFL_NO
        this.sParamArg2; // maxFileCnt
        this.sParamArg3; // type
        this.sParamArg4; // ext
        this.sParamArg5; // domainName
        this.sParamArg6; // new, del button visible

        // 파일당 최대 사이즈
        this.eachFileMaxSize = 1024*1024 / 1000;
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

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal05))
        	{
        		 this.sParamArg5 = this.getOwnerFrame().pv_sVal05;
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().pv_sVal06))
        	{
        		 this.sParamArg6 = this.getOwnerFrame().pv_sVal06;
        	}

        	this.postformInit();
        };

        this.postformInit = function()
        {
            if (this.sParamArg6 == "Y") {
        		this.btnAdd.set_visible(true);
        		this.btnDel.set_visible(true);
        		this.btnConfirm.set_visible(true);

        		this.staTitle.set_text("파일업로드");
        	}

        	this.ds_input.setColumn(0,"ATTFL_NO", 	null);

        	var sSetComponet = this.sOptinoArg1;
        	var sAutoSearch  = this.sOptinoArg2;

        	if(sSetComponet == "Y")
        	{
        		this.ds_input.setColumn(0,"ATTFL_NO",	this.sParamArg1);
        	}

        	// 설정에 따라서 폼 로드 시 자동 조회한다.
        	if(sAutoSearch == "Y")
        	{
        		this.dvSearch_btnSearch_onclick();
        		this.grdMaster.setFocus();
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
        					this.postSave();
        				break;
        			case "Insert":
        					this.postAdd();
        				break;
        			case "Delete":
        					this.postDel();
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
        	var strUrl 		= "/prj/sys/RetrieveAttFileDetailList.do";
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
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
        	06. 닫기버튼
        ***********************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
            // 팝업 open 시 첨부파일번호가 없으면 파일 삭제
        	if (this.gfn_isNull(this.sParamArg1)) {
        	    this.dsMaster.deleteAll();

        		var strSvc 		= "FileDelete";
        		var strUrl 		= "/prj/sys/DeleteAttFileList.do";
        		var strInDs  	= "ds_input=ds_input:a ";
        			strInDs    += "dsMaster=dsMaster:u";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}
        	this.close("CLOSE");
        };

        this.btnExit_onclick = function(obj,e)
        {
        	// 팝업 open 시 첨부파일번호가 없으면 파일 삭제
        	if (this.gfn_isNull(this.sParamArg1)) {
        		this.dsMaster.deleteAll();

        		var strSvc 		= "FileDelete";
        		var strUrl 		= "/prj/sys/DeleteAttFileList.do";
        		var strInDs  	= "ds_input=ds_input:a ";
        			strInDs    += "dsMaster=dsMaster:u";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}
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
        	var odsObj 	= this.all[dsobj];

        	if(this.sOptinoArg3 == "S")
        	{
        		var ds = new Dataset;
        		this.dsDummy.copyData(odsObj);
        		this.dsDummy.clearData();
        		ds.copyData(this.dsDummy); 			//전체 구조을 카피하기위해 데이타를 카피

        		var TRow = ds.addRow();
        		ds.copyRow(TRow, odsObj, nRow); 		//0번재 로에 행을 카피함

        		var objRtnArr = new Array(3);
        		objRtnArr[0] = this.sOptinoArg3;

        		if (odsObj.rowcount > 0) {
        			objRtnArr[1] = ds.getColumn(ds.rowposition, "ATTFL_NO");
        			if (odsObj.rowcount > 1) {
        				objRtnArr[2] = ds.getColumn(0, "ATTFL_LOGIC_NM") + "외 " + (odsObj.rowcount - 1) + "건";
        			} else {
        				objRtnArr[2] = ds.getColumn(0, "ATTFL_LOGIC_NM") ;
        			}
        		} else {
        			objRtnArr[1] = this.sParamArg1;
        			objRtnArr[2] = "";

        			ds.setColumn(ds.rowposition, "ATTFL_NO", this.sParamArg1);
        		}
        		if (this.gfn_isNull(objRtnArr[1])) return;
        		objRtnArr[3] = ds.saveXML();
        		this.opener.fn_dsChildCopydsDummy(ds);
        		this.close(objRtnArr.toString());
        	}else
        	{
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
            // 추가/삭제 가능
        	if(this.sParamArg6 == "Y") {
        		if(this.sOptinoArg3 == "S")
        		{
        			this.selDataSet(obj.binddataset, this.dsMaster.rowposition);
        		}
        	}
        };

        this.btnConfirm_onclick = function(obj,e)
        {
            // 정렬 변경시 저장
            if(this.gfn_isUpdateD(this.dsMaster) == true) {
        		var strSvc 		= "Save";
        		var strUrl 		= "/prj/sys/SaveAttFileDetailList.do";
        		var strInDs  	= "ds_input=ds_input:a ";
        			strInDs    += "dsMaster=dsMaster:u";
        		var strOutDs 	= "dsMaster=dsMaster";
        		var strArg 		= "";
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			   //생략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
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

        this.grdMaster_oncellclick = function(obj,e)
        {
            var ATTFL_NO = "";
        	var ATTFL_SN = "";
        	var ATTFL_LOGIC_NM = "";

        	if (obj.getCellProperty("body", e.cell, "text") == "다운로드" && obj.getCellProperty("body", e.cell, "edittype") == "button")
        	{
        		ATTFL_NO = this.gfn_trim(obj.getBindDataset().getColumn(e.row,"ATTFL_NO"));
        		ATTFL_SN = this.gfn_trim(obj.getBindDataset().getColumn(e.row,"ATTFL_SN"));

        		if (!this.gfn_isNull(ATTFL_NO)) {
        			this.gfn_attFileDownload(ATTFL_NO, ATTFL_SN);
        		}
        	}
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        this.btnDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };


        /**********************************************************************
                09. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            // 첨부파일 허용갯수 체크
            if (!this.gfn_isNull(this.sParamArg2)) {
        		if ( this.dsMaster.getRowCount() < Number(this.sParamArg2) + 1) {
        			this.fileUpload.appendItem(); // 첨부파일 선택 창 표시
        		} else {
        			alert(this.sParamArg2 + "개 파일만 업로드 가능합니다.");
        			return false;
        		}
            } else {
        		this.fileUpload.appendItem();
            }
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
            var strUrl      = "/prj/sys/DeleteAttFileDetailList.do";
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

        this.fileUpload_onappenditem = function(obj,e)
        {
        	this.fileUpload.filefindbuttons[e.index].click();
        };

        this.fileUpload_onerror = function(obj,e)
        {
            alert(e.errormsg);

        	this.cleanAllItem();
        //	this.dsMaster.clearData();

        };

        // 사용 하지 않는 아이템 제거
        this.cleanUnusedItem = function()
        {
            var i = this.fileUpload.getItemCount();
            while (i--) {
        		if (!this.fileUpload.hasValue(i)){
        		    this.fileUpload.deleteItem(i);
        		}
            }
        }
        this.cleanAllItem = function()
        {
            var i = this.fileUpload.getItemCount();
            while (i--) {
        		this.fileUpload.deleteItem(i);
            }
        }

        // 업로드 성공
        this.fileUpload_onsuccess = function(obj,e)
        {
            try{
        		this.dsMaster.clearData();
        		this.dsMaster.copyData(e.datasets[0]);
        		this.cleanAllItem();
        	} catch (e) {
        		    alert(e.errormsg);
            }
        };

        this.fileUpload_onitemchanged = function(obj,e)
        {
        	var filePathArr = e.newvalue, ds = this.dsMaster, filePath = e.newvalue;

        	var passFlag = true;
        	if (!this.gfn_isNull(filePath)) {
                if(obj.multiselect) {
        			var fileList = filePathArr.toString();

                    filePathArr = fileList.split(",");
                } else {
                    filePathArr = [filePath];
                }

                var i = filePathArr.length;
                // 잘못 스플릿 되는 파일 제거
                while(i > 0) {
                    var fileCheckNm = filePathArr[--i];
                    if(fileCheckNm.indexOf(".") < 0) {
                        filePathArr.splice(i, 1);
                    }
                }

                // 첨부허용 갯수 체크
                if (!this.gfn_isNull(this.sParamArg2) && (this.dsMaster.getRowCount() + filePathArr.length) > Number(this.sParamArg2)) {
                    passFlag = false
                    alert(this.sParamArg2 + "개 파일만 업로드 가능합니다.");
                }
                // 첨부 확장자 체크
                if (passFlag) {
                    for(var i = 0; i < filePathArr.length; i++) {
                        var logicFileNm = filePathArr[i].substring(filePathArr[i].lastIndexOf("\\") + 1);
                        var fileExt = logicFileNm.substring(logicFileNm.lastIndexOf(".") + 1).toLowerCase();

                        var fileAllowType;
                        if(this.sParamArg4 != undefined && this.sParamArg4 != "") {
                            fileAllowType = this.sParamArg4;
                        } else {
                            fileAllowType = "bmp@@jpg@@jpeg@@png@@gif@@tit@@tiff@@psd@@zip@@7z@@alz@@a01@@a02@@a03@@egg@@hwp@@xls@@xlsx@@ppt@@pptx@@csv@@txt@@doc@@pdf@@docx@@wav@@avi@@mp3@@mpg@@mpeg@@swf@@dwg@@au@@ogg";
                        }

                        if (fileAllowType.indexOf(fileExt) < 0) {
                            alert("허용하지 않는 파일 형식입니다.\n\n허용하는 형식은 아래와 같습니다.\n" + fileAllowType.replace(/\s/g,"").replace(/@@/g,","));
                            passFlag = false;
                            break;
                        }
                    }
                }

                var fileSize = null;
                // 첨부 사이즈 체크 (IE 9 이하는 서버에서 체크하도록 함);
                if (passFlag && (nexacro.Browser !== "IE" || nexacro.BrowserVersion >= 10)) {
                    fileSize = 0;
                    var form = nexacro._IframeManager.search_form(this.fileUpload._unique_id).node;
                    var files = form[this.fileUpload._items[e.index].name].files;

                    for(var i = 0; i < files.length; i++) {
                        var eachFileSize = Math.round((files[i].size / 1000).toFixed(2));
                        var eachFilenm = files[i].name;
                        if(this.eachFileMaxSize < eachFileSize) {
                            alert("허용하지 않는 크기 입니다.\n" + "파일 : " + eachFileSize + "KB , " + eachFilenm + "\n최대 : " + this.eachFileMaxSize + "KB");
                            passFlag = false;
                            break;
                        }
                        fileSize += eachFileSize;
                    }
                }

                // 업로드 리스트에 추가
                if (passFlag) {
                    this.cleanUnusedItem();
                    var strParam, strUrl, fileUrl;
                    if(this.gfn_isNull(this.sParamArg1)){
                        this.sParamArg1 = "";
                    }

                    fileUrl = "/prj/sys/AttFileDefaultUpload.do";

                    strParam= "?ATTFL_NO="      + this.sParamArg1
        			        + "&domainName="    + this.sParamArg5;

                    strUrl = document.location.protocol + "//" + document.location.host + fileUrl;
        //trace("================================");
        //trace(strUrl);
        //trace("================================");
                    this.fileUpload.upload(strUrl + strParam);
                } else {
                    var _myFileContext = this;
                    var _myFileTime = setTimeout(function(){
                        _myFileContext.fileUpload.deleteItem(_myFileContext.fileUpload.itemcount -1);
                        clearTimeout(_myFileTime);
                    }, 10);
                }
            }
        };





        this.fileDownload_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        	this.dsMaster.deleteRow(this.dsMaster.rowposition);
        };

        this.fileDownload_onsuccess = function(obj,e)
        {
        	alert("fileDownload_onsuccess >> " + e.url);
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
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.fileUpload.addEventHandler("onappenditem",this.fileUpload_onappenditem,this);
            this.fileUpload.addEventHandler("onerror",this.fileUpload_onerror,this);
            this.fileUpload.addEventHandler("onsuccess",this.fileUpload_onsuccess,this);
            this.fileUpload.addEventHandler("onitemchanged",this.fileUpload_onitemchanged,this);
            this.fileDownload.addEventHandler("onerror",this.fileDownload_onerror,this);
            this.fileDownload.addEventHandler("onsuccess",this.fileDownload_onsuccess,this);
        };
        this.loadIncludeScript("POP102FileUploadP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
