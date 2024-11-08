(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplePaging");
            this.set_titletext("PAGING(스크롤 형식의 페이징처리)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"RON_NUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CREATED\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_RECORDS_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_ROW_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOT_PAGE_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CURRENT_PAGE\"/><Col id=\"PAGE_RECORDS_SIZE\"/><Col id=\"TOT_ROW_CNT\"/><Col id=\"TOT_PAGE_CNT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE_NUM\" type=\"STRING\" size=\"32\"/><Column id=\"RECORDS_NUM\" type=\"STRING\" size=\"32\"/><Column id=\"TOTAL_RECORD_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TOTAL_PAGE_CNT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"RON_NUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CREATED\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03","20","53",null,"144","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            obj.set_font("bold 12px/normal \"Gulim\"");
            obj.set_text("* 조회버튼을 클릭 하거나 조회조건을 변경시 초기화 처리를 한다.\r\nthis.OnePageRecordsNum  = 10;     //현재 페이지 한번에 조회할 권수.  전역변수를 셋팅하면 아래 풀어주거나 삭제할 부분\r\nthis.fn_formInit = function()\r\n{\t//this.OnePageRecordsNum  = 10; 셋팅하면 아래 부분을 삭제(샘풀용)\r\n\tthis.ds_input.setColumn(0,\"PAGE_RECORDS_SIZE\",10);\t\t\t\t\t\t\t\r\n\tthis.ds_input.applyChange();\r\n\t//=============================================================\r\n};\r\n //this.ds_input.setColumn(0, \"PAGE_RECORDS_SIZE\", vPageSize);       //패이지당 레코드 사이즈(샘풀상에 콤보사용않할때는 주석을 풀어주고:원하는레코드수만큼 this.OnePageRecordsNum=10셋팅 )");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","20","333",null,null,"30","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"RON_NUM\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"NAME\"/><Cell col=\"4\" text=\"USER_ID\"/><Cell col=\"5\" text=\"CREATED\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:RON_NUM\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:CREATED\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","20","258",null,"43","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","60","25","11",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.getSetter("uWord").set("search");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","19","9","100","21",null,null,"100",null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("목록갯수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.getSetter("uWord").set("listcount");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCnt","Static01:-19","9","112","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboCnt_innerdataset = new nexacro.NormalDataset("divSearch_form_cboCnt_innerdataset", obj);
            divSearch_form_cboCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCnt_innerdataset);
            obj.set_text("2");
            obj.set_value("2");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","5","6",null,"44","2",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("- 페이징을 처리하는 샘플 프로그램(스크롤 형식의 샘풀처리) -");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","339","201","571","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_input");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"154\"/><Column size=\"117\"/><Column size=\"130\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CURRENT_PAGE\"/><Cell col=\"1\" text=\"PAGE_RECORDS_SIZE\"/><Cell col=\"2\" text=\"TOT_ROW_CNT\"/><Cell col=\"3\" text=\"TOT_PAGE_CNT\"/><Cell col=\"4\" text=\"ROW_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:CURRENT_PAGE\"/><Cell col=\"1\" text=\"bind:PAGE_RECORDS_SIZE\"/><Cell col=\"2\" text=\"bind:TOT_ROW_CNT\"/><Cell col=\"3\" text=\"bind:TOT_PAGE_CNT\"/><Cell col=\"4\" expr=\"expr:dataset.getRowType(currow)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","219","330","21",null,null,"100",null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("패이징처리시 필요한인자값 및 조회조건/서버에 정보조회");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.getSetter("uWord").set("listcount");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2","308","230","21",null,null,"100",null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("현페이지/전체페이지/전체레코드 수 : ");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.getSetter("uWord").set("listcount");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stRecordInfo","253","305","227","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCnt","value","ds_input","PAGE_RECORDS_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML008PageSample2ListM01.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    샘플 > 페이징
        *  @FileName 	samplePaging.xfdl
        *  @Creator 	jiback
        *  @CreateDate 	2017.11.13
        *  @Desction    스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.11.13     	jiback 	                최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.CurrentPageNum 	= 1;      //현재 페이지 넘버 (처음 초기화 번호)
        this.OnePageRecordsNum  = 10;     //현재 페이지 한번에 조회할 권수.
        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
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
        	//this.OnePageRecordsNum  = 10; 셋팅하면 아래 부분을 삭제(샘풀용)
        	this.ds_input.setColumn(0,"PAGE_RECORDS_SIZE",10);
        	this.ds_input.applyChange();
        	//=============================================================
        };
        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        /**
         * @description TRANSACTION콜백 트랜젝션 후, 반드시페이지 메이킹 함수 호출
        */
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
        			case "Search":
        			    this.postSearch();
        			  	break;
        			default:
        				break;
        		}
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 조회버튼이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_Pageing("Y");
        };


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	// 조회조건 셋팅
        	return true;
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/

        this.fn_Search = function()
        {
        	if (!this.preSearch())
        	{
        		return false;
        	}

        	var strSvc 		= "Search";
        	var strUrl 		= "/prj/sml/RetrievePageSample2List.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMasterTemp=dsMasterTemp ds_input=ds_input";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			     //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction( strSvc
        				        , strUrl
        				        , strInDs
        				        , strOutDs
        				        , strArg
        				        , strCallBack
        				        , strASync);
        };

        this.postSearch = function()
        {
        	this.dsMaster.appendData(this.dsMasterTemp);
        	this.ds_input.applyChange();

        	this.stRecordInfo.set_text(this.ds_input.getColumn(0,"CURRENT_PAGE") + " / " + this.ds_input.getColumn(0,"TOT_PAGE_CNT") + " / " + this.ds_input.getColumn(0,"TOT_ROW_CNT") );

        	var nVscNum = 24 * (nexacro.toNumber(this.ds_input.getColumn(0,"CURRENT_PAGE"))-1) * nexacro.toNumber(this.ds_input.getColumn(0,"PAGE_RECORDS_SIZE"));
        	//this.grdMaster.scrollTo(0,nVscNum);
        }


        this.grdMaster_onvscroll = function(obj,e)
        {
            //스크롤의 마지막 일 시에 실행 한다.(wheellastover, lastover, tracklastover)
            if(e.pos >= obj.vscrollbar.max && e.type=='none' || e.type == 'wheellastover' ||  e.type =='trackend' ||e.type == 'last')
        	{
        		//trace("e.type >>>> "+ e.type);
        		if(this.ds_input.getRowType(0) == 1)    //조회조건이 변경돼면 초기화 셋팅
        		{
        			//끝 페이지인지 확인
        			var nTotalCnt = nexacro.toNumber(this.ds_input.getColumn(0,"TOT_ROW_CNT"));         // 전체 레크드 수
        			var nCurrPage = nexacro.toNumber(this.ds_input.getColumn(0,"CURRENT_PAGE")) + 1;	// 다음페이지

        			if(this.dsMaster.rowcount != nTotalCnt)
        			{
        				this.fn_Pageing("N",nCurrPage);
        			}
        		}else
        		{
        			this.fn_Pageing("Y");
        		}
        	}
        };


        /*
         * 현재 페이지를 리턴한다.
         */
        this.fn_Pageing = function(initYn,currPageCnt)
        {
        	var vPageNum 	= 0;
        	var vPageSize 	= 0;

        	if(initYn=="Y")  													// 조회버튼을 클릭시,조건을 번경시 기본조회(1페이지 시작)
        	{
        		this.dsMaster.clearData();
        		this.dsMasterTemp.clearData();
        		vPageNum  = this.CurrentPageNum;								// 처음 초기화 페이지
        		vPageSize = this.OnePageRecordsNum;

        	}else																// 조회후 페이지를 드래그시 다음 페이지를 처리시(스크롤바를 드래그할때 처리
        	{
        		vPageNum  = currPageCnt;
        		vPageSize = this.OnePageRecordsNum;
        	}

        	this.ds_input.setColumn(0, "CURRENT_PAGE", 		vPageNum); 			//현재 페이지 처리
        //	trace("=============================================>" + this.ds_input.getRowType(0));
        	//this.ds_input.setColumn(0, "PAGE_RECORDS_SIZE", vPageSize);       //패이지당 레코드 사이즈(샘풀상에 콤보사용않할때는 주석을 풀어주고:원하는레코드수만큼 this.OnePageRecordsNum=10셋팅 )

        	this.fn_Search();
        };


        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster));
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onvscroll",this.grdMaster_onvscroll,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("SML008PageSample2ListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
