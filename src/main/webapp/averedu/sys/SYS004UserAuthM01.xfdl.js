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
            this.set_titletext("사용자권한관리");
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
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_CD\"/><Col id=\"AUTH_CD_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TAUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail1", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT\" type=\"STRING\" size=\"32\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"32\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"32\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"32\"/><Column id=\"DEPT\" type=\"STRING\" size=\"32\"/><Column id=\"HP_NO\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DEPT_INCLS_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDept", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","80","275",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"80\"/><Column size=\"147\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"권한코드\"/><Cell col=\"2\" text=\"권한명\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:AUTH_CD\" displaytype=\"text\" edittype=\"expr:dataset.getRowType(currow)==2 ? &apos;text&apos; : &apos;none&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:AUTH_CD_NM\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","212","53","63","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail2","280","405",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsDetail2");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"48\"/><Column size=\"115\"/><Column size=\"107\"/><Column size=\"142\"/><Column size=\"142\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"핸드폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_ID\" displaytype=\"text\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:DEPT\" displaytype=\"text\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:HP_NO\" displaytype=\"text\" textAlign=\"left\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail1","280","80",null,"288","360",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsDetail1");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"48\"/><Column size=\"131\"/><Column size=\"126\"/><Column size=\"162\"/><Column size=\"115\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"사용자ID\"/><Cell col=\"3\" text=\"사용자명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"핸드폰번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:USER_ID\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:USER_NM\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:DEPT\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:HP_NO\" displaytype=\"normal\" textAlign=\"left\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownSave",null,"375","26","26","35.52%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_ShuttleB");
            obj.set_tooltiptext("사용자 삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnUpSave",null,"375","26","26","btnDownSave:37",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_font("14px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_ShuttleT");
            obj.set_tooltiptext("사용자 추가");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt1",null,"52","83","24","360",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","9","73","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("권한코드 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","212","9","73","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAuthCd","75","11","137","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtAuthCdNm","287","11","233","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","520","378",null,"24","980",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","281","376","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용자 필터");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","375","378","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","515","45","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","3","54","98","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("권한 리스트");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","283","54","128","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사용자 등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDeptDetail",null,"80","350","288","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("dsDeptDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"40\"/><Column size=\"153\"/><Column size=\"47\"/><Column size=\"58\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"관할부서\"/><Cell col=\"3\" text=\"부서&#13;&#10;코드\" font=\"normal 700 10px/normal &quot;Malgun Gothic&quot;\"/><Cell col=\"4\" text=\"하위부서&#13;&#10;포함\" font=\"normal 700 10px/normal &quot;Malgun Gothic&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DEPT_CD\"/><Cell col=\"4\" text=\"bind:SUB_DEPT_INCLS_GBCD\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeptAdd",null,"52","60","22","65",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeptDel",null,"52","60","22","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00",null,"72","100","9","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle02",null,"54","168","26","182",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("사용자 관할부서 등록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("사용자권한관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtAuthCd","value","ds_input","AUTH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtAuthCdNm","value","ds_input","AUTH_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsDummy");
        };
        
        // User Script
        this.registerScript("SYS004UserAuthM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): COMM000004S.xfdl(사용자권한관리)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/9/04
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        this.strKeyValue 	= "";  // 저장 후 row 유지

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
         			case "Ret":
        			    this.fn_PostRet();
        			  	break;
        			case "DRet":
        			    this.fn_PostDRet();
        			  	break;
        			case "DDRet":
        			    this.fn_PostDDRet();
        			  	break;
        			case "DeptRet":
        			    this.fn_PostDeptRet();
        			  	break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "SaveDept":
        			    this.fn_PostSaveDept();
        				break;
        			case "DelDept":
        			    this.fn_PostDelDept();
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
        		case "POP101DeptSearchP01" : // 부서
        			if(!this.gfn_isNull(strVal))
        			{
        				//일반
        				var sRtn = strVal.split(",");
        				if(sRtn[0] == "S")
        				{
        //					this.dsDetail.setColumn(this.dsDetail.rowposition,"DEPT_CD",this.dsDummy.getColumn(0,"DEPT_CD"));
        //					this.dsDetail.setColumn(this.dsDetail.rowposition,"DEPT_NM",this.dsDummy.getColumn(0,"DEPT_NM"));
        //					this.grdDetail.moveToNextCell(); // 다음 포커스 이동

        				} else if(sRtn[0] == "M")
        				{
        					for(var i=0;i<this.dsDummy.rowcount; i++)
        					{
        						if (this.dsDeptDetail.findRow("DEPT_CD", this.dsDummy.getColumn(i, "DEPT_CD")) == -1)
        						{
        							var nRow = this.dsDeptDetail.addRow();

        							this.dsDeptDetail.setColumn(nRow,"CHK",        "0");           //체크
        							this.dsDeptDetail.setColumn(nRow,"USER_ID",    this.dsDetail1.getColumn(this.dsDetail1.rowposition, "USER_ID"));      // USER_ID
        							this.dsDeptDetail.setColumn(nRow,"AUTH_CD",    this.dsDetail1.getColumn(this.dsDetail1.rowposition, "AUTH_CD"));      // 권한코드
        							this.dsDeptDetail.setColumn(nRow,"DEPT_CD",    this.dsDummy.getColumn(i, "DEPT_CD"));      // 부서코드
        							this.dsDeptDetail.setColumn(nRow,"DEPT_NM",    this.dsDummy.getColumn(i, "DEPT_NM"));      // 부서명
        							this.dsDeptDetail.setColumn(nRow,"SUB_DEPT_INCLS_GBCD",    "1");      // 하위부서포함여부
        						}
        					}

        					// 저장
        					//this.fn_SaveDept();
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
        /**********************************************************************
        	05. 권한 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	// 조회조건 셋팅
        	this.dsMaster.clearData();
        	this.dsDetail1.clearData();
        	this.dsDetail2.clearData();
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
        	var strUrl      = "/prj/sys/RetrieveAuthMasterList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";     //공백일시 기본 fn_callBack
        	var strASync    = true;			     //샏략이나 공백일시에는 ASync=true,싱크시는 false로

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
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };

        /**********************************************************************
        	05-1. 사용자권한 함수 선언
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"AUTH_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD"));
        	this.dsDeptDetail.clearData();
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
        	if(!this.fn_PreDRet())
        	{
        		return false;
        	}

        	var strSvc 		= "DRet";
        	var strUrl 		= "/prj/sys/RetrieveUserAuthList.do";
        	var strInDs  	= "ds_input1=ds_input1";
        	var strOutDs 	= "dsDetail1=dsDetail1";
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
        	//trace(this.dsDetail1.saveXML());
        	this.gfn_clearSortAll(this.grdDetail1);
        	this.gfn_getRowCount(this.stRowCnt1,this.dsDetail1);
        	this.fn_DDRet();

        };
        /**********************************************************************
        	05-2. 사용자 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDDRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"AUTH_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD"));
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DDRet = function()
        {
        	if(!this.fn_PreDDRet())
        	{
        		return false;
        	}

        	var strSvc 		= "DDRet";
        	var strUrl 		= "/prj/sys/RetrieveUserList.do";
        	var strInDs  	= "ds_input1=ds_input1";
        	var strOutDs 	= "dsDetail2=dsDetail2";
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
        this.fn_PostDDRet = function()
        {
        	//trace(this.dsDetail2.saveXML());
        	this.gfn_clearSortAll(this.grdDetail2);
        	this.gfn_getRowCount(this.stRowCnt2,this.dsDetail2);

        };

        /**********************************************************************
        	06. 권한 추가 저장 함수
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(!this.gfn_isUpdate(this.dsDetail1) && !this.gfn_isUpdate(this.dsDeptDetail))
            {
                this.gfn_alert("MSG00008","저장 정보","","information"); 	// 변경된 이력이 없습니다.
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

        	this.strKeyValue = this.dsDetail1.getColumn(this.dsDetail1.rowposition, "USER_ID");

        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/sys/SaveUserAuthList.do";
        	var strInDs  	= "ds_input1=ds_input1 ";
        		strInDs    += "dsDetail1=dsDetail1:u ";
        		strInDs    += "dsDeptDetail=dsDeptDetail:u";
        	var strOutDs 	= "dsDetail1=dsDetail1 ";
        	    strOutDs   += "dsDetail2=dsDetail2";
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
        	this.gfn_clearSortAll(this.grdDetail1);
        	this.gfn_getRowCount(this.stRowCnt1,this.dsDetail1);

        	this.gfn_clearSortAll(this.grdDetail2);
        	this.gfn_getRowCount(this.stRowCnt2,this.dsDetail2);

        	var nRow = this.dsDetail1.findRow("USER_ID",this.strKeyValue);
        	this.dsDetail1.set_rowposition(nRow);
        };

        this.btnUpSave_onclick = function(obj,e)
        {
        	for(var i=0; i < this.dsDetail2.rowcount; i++)
        	{
        		if(this.dsDetail2.getColumn(i,"CHK") == "1")
        		{
        			var nRow = this.dsDetail1.addRow();
        			this.dsDetail1.setColumn(nRow,"CHK",		"0");
        			this.dsDetail1.setColumn(nRow,"USER_ID",	this.dsDetail2.getColumn(i,"USER_ID"));
        			this.dsDetail1.setColumn(nRow,"AUTH_CD",	this.gfn_trim(this.dsMaster.getColumn(this.dsMaster.rowposition,"AUTH_CD")));
        			this.dsDetail1.setColumn(nRow,"USER_NM",	this.gfn_trim(this.dsDetail2.getColumn(i,"USER_NM")));
        			this.dsDetail1.setColumn(nRow,"DEPT",		this.gfn_trim(this.dsDetail2.getColumn(i,"DEPT")));
        			this.dsDetail1.setColumn(nRow,"TEL_NO",		this.gfn_trim(this.dsDetail2.getColumn(i,"TEL_NO")));
        			this.dsDetail1.setColumn(nRow,"HP_NO",		this.gfn_trim(this.dsDetail2.getColumn(i,"HP_NO")));
        			this.dsDetail1.setColumn(nRow,"REG_ID",		this.gfn_trim(this.dsDetail2.getColumn(i,"REG_ID")));
        			this.dsDetail1.setColumn(nRow,"REG_DT",	this.gfn_trim(this.dsDetail2.getColumn(i,"REG_DT")));
        			this.dsDetail1.setColumn(nRow,"MOD_ID",		this.gfn_trim(this.dsDetail2.getColumn(i,"MOD_ID")));
        			this.dsDetail1.setColumn(nRow,"MOD_DT",	this.gfn_trim(this.dsDetail2.getColumn(i,"MOD_DT")));
        		}
        	}

        	this.dsDetail2.set_enableevent(false);
        	for(var i=this.dsDetail2.rowcount-1;i>-1;i--)
        	{
        		if(this.dsDetail2.getColumn(i,"CHK") == "1")
        		{
        			this.dsDetail2.deleteRow(i);
        		}
        	}
        	this.dsDetail2.set_enableevent(true);
        };

        this.btnDownSave_onclick = function(obj,e)
        {
        	for(var i=0; i < this.dsDetail1.rowcount; i++)
        	{
        		if(this.dsDetail1.getColumn(i,"CHK") == "1")
        		{
        			var nRow = this.dsDetail2.addRow();
        			this.dsDetail2.setColumn(nRow,"CHK",		"0");
        			this.dsDetail2.setColumn(nRow,"USER_ID",	this.dsDetail1.getColumn(i,"USER_ID"));
        			this.dsDetail2.setColumn(nRow,"AUTH_CD",	"");
        			this.dsDetail2.setColumn(nRow,"USER_NM",	this.gfn_trim(this.dsDetail1.getColumn(i,"USER_NM")));
        			this.dsDetail2.setColumn(nRow,"DEPT",		this.gfn_trim(this.dsDetail1.getColumn(i,"DEPT")));
        			this.dsDetail2.setColumn(nRow,"TEL_NO",		this.gfn_trim(this.dsDetail1.getColumn(i,"TEL_NO")));
        			this.dsDetail2.setColumn(nRow,"HP_NO",		this.gfn_trim(this.dsDetail1.getColumn(i,"HP_NO")));
        			this.dsDetail2.setColumn(nRow,"REG_ID",		"");
        			this.dsDetail2.setColumn(nRow,"REG_DT",	"");
        			this.dsDetail2.setColumn(nRow,"MOD_ID",		"");
        			this.dsDetail2.setColumn(nRow,"MOD_DT",	"");

        		}
        	}
        	this.dsDetail2.applyChange();
        	this.dsDetail1.set_enableevent(false);
        	for(var i=this.dsDetail1.rowcount-1;i>-1;i--)
        	{
        		if(this.dsDetail1.getColumn(i,"CHK") == "1")
        		{
        			this.dsDetail1.deleteRow(i);
        		}
        	}
        	this.dsDetail1.set_enableevent(true);

        	// 사용자 관할부서 조회
        	this.fn_DeptRet();
        };

        this.divSearch_edtAuthCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtAuthCdNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };


        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        this.grdDetail_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdDetail1.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        this.grdDetail1_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdDetail1.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e);
        	}
        };

        this.grdDetail1_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdDetail1.getBindCellIndex("body","CHK") && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };


        this.grdDetail2_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdDetail2.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e);
        	}
        };

        this.grdDetail2_onheaddblclick = function(obj,e)
        {
        	if(e.cell != this.grdDetail2.getBindCellIndex("body","CHK") && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };
        /*
         * 사용자 찾기 기능 처리
         */
        this.edtUserNm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.dsDetail2.filter("String(USER_NM).indexOf('" + this.gfn_trim(this.edtUserNm.text) + "') >= 0");
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };



        this.grdDeptDetail_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };

        /**
        	그리드멀티 소트정열
        */
        this.grdDeptDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0 && e.cell != 1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        /**
        	부서 조회
        */
        this.dsDetail1_onrowposchanged = function(obj,e)
        {
        	this.fn_DeptRet();
        };


        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDeptRet = function()
        {
        	// 조회조건 셋팅
        	this.ds_inputDept.setColumn(0, "USER_ID", this.dsDetail1.getColumn(this.dsDetail1.rowposition, "USER_ID"));
        	this.ds_inputDept.setColumn(0, "AUTH_CD", this.dsDetail1.getColumn(this.dsDetail1.rowposition, "AUTH_CD"));
        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DeptRet = function()
        {
        	if(!this.fn_PreDeptRet())
        	{
        		return false;
        	}

        	var strSvc 		= "DeptRet";
        	var strUrl      = "/prj/sys/RetrieveUserAuthCtrlDeptList.do";
        	var strInDs  	= "ds_input=ds_inputDept";
        	var strOutDs 	= "dsDeptDetail=dsDeptDetail";
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
         * 기능 : 조회 후 실행
         */
        this.fn_PostDeptRet = function()
        {
        	//trace(this.dsDeptDetail.saveXML());
        	this.gfn_clearSortAll(this.grdDeptDetail);
        	//this.gfn_getRowCount(this.stRowCnt3,this.dsDeptDetail);
        };


        /**
         * 기능 : 부서 추가 실행
         */
        this.btnDeptAdd_onclick = function(obj,e)
        {
        	var sValue = "";

            if (this.dsMaster.rowcount == 0 || this.dsDetail1.rowcount == 0)
        		return false;

        	// 사용자등록 변경여부 확인
            if(this.gfn_isUpdate(this.dsDetail1))
            {
                this.gfn_alert("사용자등록 목록에 변경된 이력이 있습니다. 저장 후 관할부서를 추가해주세요.","저장정보","","question");
                return false;
            }

        	this.fn_setCallPopup01(sValue);
        };


        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSaveDept = function()
        {
            return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_SaveDept = function()
        {
            if(!this.fn_PreSaveDept())
            {
                return false;
            }

            var strSvc      = "SaveDept";
            var strUrl      = "/prj/sys/SaveUserAuthCtrlDeptList.do";
            var strInDs     = "ds_input=ds_inputDept:a ";
                strInDs    += "dsDeptDetail=dsDeptDetail:u";
            var strOutDs    = "dsDeptDetail=dsDeptDetail";
        	var strArg      = ""

            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }

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
        this.fn_PostSaveDept = function()
        {
            //this.gfn_getRowCount(this.stRowCnt3,this.dsDeptDetail);
        };

        /*
         * 부서 삭제
         */
        this.btnDeptDel_onclick = function(obj,e)
        {
        	this.fn_DelDept();
        };

        /**
         * 기능 : 삭제 전 실행
         */
        this.fn_PreDelDept = function()
        {
        	// 선택한 데이터가 없을 경우
        	if(this.dsDeptDetail.rowcount < 1 || this.dsDeptDetail.findRow("CHK","1") == -1)
            {
                this.gfn_alert("관할부서를 선택해주세요.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제","", "question" );
            if(result == 0)
            {
                return false;
            }

        	//다중삭제 용도
        	this.dsDeptDetail.set_enableevent(false);
        	for(var i=this.dsDeptDetail.rowcount-1;i>-1;i--)
        	{
        		// 체크되어있거나 데이터셋의 로우타입이 수정일 때
        		if(this.dsDeptDetail.getColumn(i,"CHK") == "1" || this.dsDeptDetail.getRowType(i) == Dataset.ROWTYPE_INSERT)
        		{
        			this.dsDeptDetail.deleteRow(i);
        		}
        	}
        	this.dsDeptDetail.set_enableevent(true);

            return true;
        };

        /**
         * 기능 : 삭제 실행
         */
        this.fn_DelDept = function()
        {
            if(!this.fn_PreDelDept())
            {
                return false;
            }

        	this.ds_inputDept.setColumn(0, "USER_ID", this.dsDetail1.getColumn(this.dsDetail1.rowposition, "USER_ID"));
        	this.ds_inputDept.setColumn(0, "AUTH_CD", this.dsDetail1.getColumn(this.dsDetail1.rowposition, "AUTH_CD"));

            var strSvc      = "DelDept";
            var strUrl      = "/prj/sys/DeleteUserAuthCtrlDeptList.do";
            var strInDs     = "ds_input=ds_inputDept:a ";
                strInDs    += "dsDeptDetail=dsDeptDetail:u";
            var strOutDs    = "";
        	var strArg      = ""

            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }

            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        }

        /**
         *      기능 : 부서삭제 시 후처리
         */
        this.fn_PostDelDept = function()
        {
        }


        /**
         * 실제로 처리하는 팝업함수
         */
        // 부서코드
        this.fn_setCallPopup01 = function(sCodeId)
        {
        	var multFlg     = "M"; 	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        	this.dsDept.clearData();

        	this.ds_inputDept.setColumn(this.ds_inputDept.rowposition, "DEPT_NM", sCodeId);

        	if(!this.gfn_isNull(sCodeId) && multFlg != "M")
        	{
        		var strSvc 		= "Search";
        		var strUrl 		= "/prj/pop/RetrieveDeptSearchList.do";
        		var strInDs  	= "ds_input=ds_inputDept";
        		var strOutDs 	= "dsDept=dsDept";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);

        	}

        	if(this.dsDept.rowcount == 1 && multFlg == "S")
        	{
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "DEPT_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "DEPT_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else
        	{
        		var lv_sFlag01 			= "Y";						// (필수)부모에서 파라미터를 넘길지의 여부 (Y:파라미터넘김 / N:넘기지 않음)
        		var lv_sFlag02			= "Y";						// (필수)팝업이 열렸을때 자동조회를 할 것인가 여부.(Y:자동조회 / N:수동조회)
        		var lv_sFlag03			= multFlg;					// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        		var lv_sValue01 		= sCodeId;					// 부모에서 넘어가는 파라미터(부서명)
        		var lv_sValue02 		= "";						// 부모에서 넘어가는 파라미터
        		var lv_sValue03 		= "";						// 부모에서 넘어가는 파라미터
        		var lv_sValue04 		= "";						// 부모에서 넘어가는 파라미터

        		var sPopId 			= "POP101DeptSearchP01";
        		var sUrl 			= "pop::POP101DeptSearchP01.xfdl";
        		var oArg 			= { pv_sOp01:lv_sFlag01      	// 조회조건 : 조회조건셋팅/조회조건에 미셋팅 Y:조회조건셋팅/조회조건자동셋팅않함.
        							  , pv_sOp02:lv_sFlag02       	// 자동조회 : 바로조회/미조회   Y:자동조회/N:자동조회않임
        							  , pv_sOp03:lv_sFlag03      	// 멀티처리 : 싱글처리/멀티처리 S:한로우처리/M:멀티로처리
        							  , pv_sVal01:lv_sValue01      	// 파라미터1
        							  , pv_sVal02:lv_sValue02       // 파라미터2
        							  , pv_sVal03:lv_sValue03       // 파라미터3
        							  , pv_sVal04:lv_sValue04};     // 파라미터4
        		var sPopupCallBack 	= "fn_popupCallback";
        		var oOption 		= {};
        		this.gfn_openPopup( sPopId
        						  , sUrl
        						  , oArg
        						  , sPopupCallBack
        						  , oOption);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdDetail2.addEventHandler("onheadclick",this.grdDetail2_onheadclick,this);
            this.grdDetail2.addEventHandler("onheaddblclick",this.grdDetail2_onheaddblclick,this);
            this.grdDetail1.addEventHandler("onheadclick",this.grdDetail1_onheadclick,this);
            this.grdDetail1.addEventHandler("onheaddblclick",this.grdDetail1_onheaddblclick,this);
            this.btnDownSave.addEventHandler("onclick",this.btnDownSave_onclick,this);
            this.btnUpSave.addEventHandler("onclick",this.btnUpSave_onclick,this);
            this.divSearch.form.edtAuthCd.addEventHandler("onkeyup",this.divSearch_edtAuthCd_onkeyup,this);
            this.divSearch.form.edtAuthCdNm.addEventHandler("onkeyup",this.divSearch_edtAuthCdNm_onkeyup,this);
            this.edtUserNm.addEventHandler("onkeydown",this.edtUserNm_onkeydown,this);
            this.grdDeptDetail.addEventHandler("onheadclick",this.grdDeptDetail_onheadclick,this);
            this.grdDeptDetail.addEventHandler("onheaddblclick",this.grdDeptDetail_onheaddblclick,this);
            this.btnDeptAdd.addEventHandler("onclick",this.btnDeptAdd_onclick,this);
            this.btnDeptDel.addEventHandler("onclick",this.btnDeptDel_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail1.addEventHandler("onrowposchanged",this.dsDetail1_onrowposchanged,this);
        };
        this.loadIncludeScript("SYS004UserAuthM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
