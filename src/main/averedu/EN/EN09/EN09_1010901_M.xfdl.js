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
            this.set_titletext("제출자료생성");
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
            obj._setContents("<ColumnInfo><Column id=\"FILE_NAEYONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"SAENGSUNG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojip", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">수시합격</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">수시합격+충원</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">정시1차</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CODE_NM\">정시전체</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"CODE_NM\">최종제출(전체)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaengsung", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">지원자</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CODE_NM\">등록자</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CODE_NM\">타대학등록여부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileUrl", this);
            obj._setContents("<ColumnInfo><Column id=\"fileUrl\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52",null,"22","1475",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","97","51",null,"24","1420",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"파일내용\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAEYONG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSaengsung","584","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSaengsung");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_00","493","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("생성구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","100","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","248","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchMojip","341","9","124","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsMojip");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","90","0","10","37",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","331","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01","465","2","56","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00","574","0","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_01","224","3","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","319","47","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("FileDownload");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("제출자료생성");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchSaengsung","value","ds_input","SAENGSUNG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchMojip","value","ds_input","MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("EN09_1010901_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN09_1010901_M.xfdl(제출자료생성)
        * 작 성         일 명: 백재인
        * 작 성         일 자: 2021/06/29
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
        	this.fn_GijunYyyy();
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
        			case "GigunYyyy":
                            this.fn_PostGigunYyyy();
                        break;
                    case "CreateFile":
                            this.fn_PostCreateFile();
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
                case "tmp1" :        // 파일생성
                         this.fn_CreateFile();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 파일생성 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 파일생성 전 실행
         */
        this.fn_CreateFile = function()
        {
        	this.alert("보류");
        	return false;

        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
        // - 파일다운로드 보류
        //     if(!this.fn_CreateFile())
        //     {
        //         return false;
        //     }
        //
        // 	var mojip = this.divSearch.form.cboSearchMojip.value;
        //
        // 	if(mojip == '1')
        // 	{
        // 		var strSvc      = "CreateFile";
        // 		var strUrl      = "/prj/EN/EN09/CreateFile_1010901_M_1.do";
        // 		var strInDs     = "ds_input=ds_input";
        // 		var strOutDs    = "dsMaster=dsMaster ";
        // 			strOutDs   += "dsFileUrl=dsFileUrl";
        // 		var strArg      = "";
        // 		var GBV_MENUID    = objApp.gv_cutPrgId;
        // 		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        // 		{
        // 			strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        // 		}
        // 		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        // 		var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        // 		this.gfn_Transaction(strSvc
        // 						   , strUrl
        // 						   , strInDs
        // 						   , strOutDs
        // 						   , strArg
        // 						   , strCallBack
        // 						   , strASync);
        // 	}
        // 	else if(mojip == '2')
        // 	{
        // 		var strSvc      = "CreateFile";
        // 		var strUrl      = "/prj/EN/EN09/CreateFile_1010901_M_2.do";
        // 		var strInDs     = "ds_input=ds_input";
        // 		var strOutDs    = "dsMaster=dsMaster ";
        // 			strOutDs   += "dsFileUrl=dsFileUrl";
        // 		var strArg      = "";
        // 		var GBV_MENUID    = objApp.gv_cutPrgId;
        // 		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        // 		{
        // 			strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        // 		}
        // 		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        // 		var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        // 		this.gfn_Transaction(strSvc
        // 						   , strUrl
        // 						   , strInDs
        // 						   , strOutDs
        // 						   , strArg
        // 						   , strCallBack
        // 						   , strASync);
        // 	}
        // 	else if(mojip == '3' || mojip == '4')
        // 	{
        // 		var strSvc      = "CreateFile";
        // 		var strUrl      = "/prj/EN/EN09/CreateFile_1010901_M_3.do";
        // 		var strInDs     = "ds_input=ds_input";
        // 		var strOutDs    = "dsMaster=dsMaster ";
        // 			strOutDs   += "dsFileUrl=dsFileUrl";
        // 		var strArg      = "";
        // 		var GBV_MENUID    = objApp.gv_cutPrgId;
        // 		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        // 		{
        // 			strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        // 		}
        // 		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        // 		var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        // 		this.gfn_Transaction(strSvc
        // 						   , strUrl
        // 						   , strInDs
        // 						   , strOutDs
        // 						   , strArg
        // 						   , strCallBack
        // 						   , strASync);
        // 	}
        // 	else if(mojip == '5')
        // 	{
        // 		var strSvc      = "CreateFile";
        // 		var strUrl      = "/prj/EN/EN09/CreateFile_1010901_M_4.do";
        // 		var strInDs     = "ds_input=ds_input";
        // 		var strOutDs    = "dsMaster=dsMaster ";
        // 			strOutDs   += "dsFileUrl=dsFileUrl";
        // 		var strArg      = "";
        // 		var GBV_MENUID    = objApp.gv_cutPrgId;
        // 		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        // 		{
        // 			strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        // 		}
        // 		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        // 		var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        // 		this.gfn_Transaction(strSvc
        // 						   , strUrl
        // 						   , strInDs
        // 						   , strOutDs
        // 						   , strArg
        // 						   , strCallBack
        // 						   , strASync);
        // 	}
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostCreateFile = function()
        {
        	var url = this.dsFileUrl.getColumn(0, "fileUrl");
        	this.FileDownload.set_downloadurl(url);
        	this.FileDownload.download();
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 모집구분에 따라 생성구분 활성화/비활성화
        this.divSearch_cboSearchMojip_onitemchanged = function(obj,e)
        {
        	if(obj.value == '1' || obj.value == '2' || obj.value == '5')
        	{
        		this.divSearch.form.cboSearchSaengsung.set_enable(false);
        	}
        	else
        	{
        		this.divSearch.form.cboSearchSaengsung.set_enable(true);
        	}
        };

        /**********************************************************************
                07. 공통함수
        ***********************************************************************/
        // 기준년도 가져오기
        this.fn_GijunYyyy = function()
        {
        	var strSvc      = "GigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        this.fn_PostGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.divSearch.form.cboSearchMojip.set_index(0);
        	this.divSearch.form.cboSearchSaengsung.set_enable(false);
        }

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_CreateFile();
        	}
        };

        this.divSearch_cboSearchMojip_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"MOJIP_GBCD",obj.value);
        		this.fn_CreateFile();
        	}
        };

        this.divSearch_cboSearchSaengsung_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SAENGSUNG_GBCD",obj.value);
        		this.fn_CreateFile();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.divSearch.form.cboSearchSaengsung.addEventHandler("onkeydown",this.divSearch_cboSearchSaengsung_onkeydown,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onkeydown",this.divSearch_cboSearchMojip_onkeydown,this);
            this.divSearch.form.cboSearchMojip.addEventHandler("onitemchanged",this.divSearch_cboSearchMojip_onitemchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("EN09_1010901_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
