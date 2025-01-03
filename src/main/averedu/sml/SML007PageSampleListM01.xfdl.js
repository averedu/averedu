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
            this.set_titletext("PAGING(게시판 형식의 페이징처리)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RON_NUM\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CREATED\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"RECORDS_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE\" type=\"STRING\" size=\"256\"/><Column id=\"RECORD_OFFSET\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPagingInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENT_PAGE_NUM\" type=\"STRING\" size=\"32\"/><Column id=\"RECORDS_NUM\" type=\"STRING\" size=\"32\"/><Column id=\"TOTAL_RECORD_CNT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TOTAL_PAGE_CNT\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"coCd\" type=\"STRING\" size=\"32\"/><Column id=\"classId\" type=\"STRING\" size=\"256\"/><Column id=\"classNm\" type=\"STRING\" size=\"256\"/><Column id=\"coYn\" type=\"STRING\" size=\"256\"/><Column id=\"coT\" type=\"STRING\" size=\"256\"/><Column id=\"coS\" type=\"STRING\" size=\"256\"/><Column id=\"coN\" type=\"STRING\" size=\"256\"/><Column id=\"coX\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"coCd\"/><Col id=\"classId\"/><Col id=\"classNm\"/><Col id=\"coYn\"/><Col id=\"coT\"/><Col id=\"coS\"/><Col id=\"coN\"/><Col id=\"coX\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta03","20","53",null,"144","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("paging sample 사용방법\r\n1. div생성 후 url을 (com::COMM000008D.xfdl)로 연결한다.\r\n\r\n2. 조회조건을 넘길 데이터셋을 생성 후 record, page, recordsOffset, pagecount값을 세팅한다.\r\n   초기 조회일 경우 page, recordsOffset, pagecount값은 default로 0으로 세팅 records값은 각 회면별 그리드에 표현될 목록수로 세팅\r\n       this.dsSearch.setColumn(nRow, \"records\", this.fvRecords);\n\t\r\n       this.dsSearch.setColumn(nRow, \"recordsOffset\", this.fvRecordsOffset); \r\n\r\n3. this.divPage.fnCreatePage(this.dsSearch, this.dsList, \"fnSearch\", this.grd00); 를 호출한다");
            obj.set_background("cornsilk");
            obj.set_verticalAlign("top");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","20","307",null,null,"30","87",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"141\"/><Column size=\"155\"/><Column size=\"150\"/><Column size=\"259\"/><Column size=\"247\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"RON_NUM\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"NAME\"/><Cell col=\"4\" text=\"USER_ID\"/><Cell col=\"5\" text=\"CREATED\"/></Band><Band id=\"body\"><Cell expr=\"currow + 1\"/><Cell col=\"1\" text=\"bind:RON_NUM\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:NAME\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:CREATED\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
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
            divSearch_form_cboCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboCnt_innerdataset);
            obj.set_text("2");
            obj.set_value("2");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divPage","20",null,null,"54","30","13",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("com::COMM000008D.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","5","6",null,"44","2",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 페이징을 처리하는 샘플 프로그램(게시판 형식의 페이징 처리) -");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","249","201","571","53",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsSearch");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"RECORDS_NUM\"/><Cell col=\"1\" text=\"PAGE\"/><Cell col=\"2\" text=\"RECORD_OFFSET\"/><Cell col=\"3\" text=\"PAGE_COUNT\"/></Band><Band id=\"body\"><Cell text=\"bind:RECORDS_NUM\"/><Cell col=\"1\" text=\"bind:PAGE\"/><Cell col=\"2\" text=\"bind:RECORD_OFFSET\"/><Cell col=\"3\" text=\"bind:PAGE_COUNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","1004","201",null,"54","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsPagingInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CURRENT_PAGE_NUM\"/><Cell col=\"1\" text=\"RECORDS_NUM\"/><Cell col=\"2\" text=\"TOTAL_RECORD_CNT\"/><Cell col=\"3\" text=\"TOTAL_PAGE_CNT\"/></Band><Band id=\"body\"><Cell text=\"bind:CURRENT_PAGE_NUM\"/><Cell col=\"1\" text=\"bind:RECORDS_NUM\"/><Cell col=\"2\" text=\"bind:TOTAL_RECORD_CNT\"/><Cell col=\"3\" text=\"bind:TOTAL_PAGE_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","7","219","237","21",null,null,"100",null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("패이징처리시 필요한인자값 및 조회조건");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.getSetter("uWord").set("listcount");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","819","219","180","21",null,null,"100",null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("서버에서 넘어온 리스트 정보");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.getSetter("uWord").set("listcount");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","com::COMM000008D.xfdl");
        };
        
        // User Script
        this.registerScript("SML007PageSampleListM01.xfdl", function() {
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
        this.fvRecords			=0; 	//목록갯수
        this.fvPage				=0;	 	//페이지번호
        this.fvRecordsOffset	=0;		//시작rownum
        this.fvTotalCount		=0;		//전체데이터갯수
        this.fvPageCount		=0; 	//실제표출페이지갯수
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
        /**
         * @description 페이징콜백 페이징화면에서 눌린페이지 넘겨줌
        */
        this.fn_PagingCallback = function(nPage, nRecordsOffset)
        {
        	this.fvPage 		 = nPage;
        	this.fvRecordsOffset = nRecordsOffset;

        	this.fn_Search(); //조회함수호출
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 조회버튼이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_PageInit(); //최초조회조건세팅
        };


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/
        /**
         * @description 최초조회시, 전역변수 초기화
        */
        this.fn_PageInit = function ()
        {
        	//pagin info init setting
        	this.fvRecords			= this.divSearch.form.cboCnt.value; //목록갯수
        	this.fvPage				= 0;	 							//페이지번호
        	this.fvRecordsOffset	= 0;							 	//시작rownum
        	this.fvPageCount 		= 10;							 	//실제표출페이지갯수

        	this.fn_Search();
        };

        /**
         * @description 조회이벤트
        */
        this.fn_Search = function(obj,e)
        {
        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능
        	this.dsSearch.clearData();
        	var nRow = this.dsSearch.addRow();
        	this.dsSearch.setColumn(nRow, "RECORDS_NUM", 	this.fvRecords);
        	this.dsSearch.setColumn(nRow, "PAGE",         	this.fvPage+1);
        	this.dsSearch.setColumn(nRow, "RECORD_OFFSET", 	this.fvRecordsOffset);
        	this.dsSearch.setColumn(nRow, "PAGE_COUNT", 	this.fvPageCount);

        	var strSvc 		= "Search";
        	var strUrl 		= "/prj/sml/RetrievePageSampleList.do";
        	var strInDs  	= "dsSearch=dsSearch";
        	var strOutDs 	= "dsList=dsList dsPagingInfo=dsPagingInfo";
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

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/

        /**
         * @description 페이징만들기
        */
        this.postSearch = function ()
        {
        	//trace(this.dsList.saveXML());
        	this.fvTotalCount = nexacro.toNumber(this.dsPagingInfo.getColumn(0,"TOTAL_RECORD_CNT")); //전체로우갯수

        	//create page
        	this.divPage.form.fnCreatePage("fn_PagingCallback",
        									this.fvTotalCount,
        									this.fvRecords,
        									this.fvPage,
        									this.fvPageCount);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsList));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
        };
        this.loadIncludeScript("SML007PageSampleListM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
