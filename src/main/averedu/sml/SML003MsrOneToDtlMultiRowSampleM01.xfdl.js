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
            this.set_titletext("마스터디테일처리(싱글/멀티)");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"SN\" type=\"STRING\" size=\"32\"/><Column id=\"USE_CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"USE_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USE_CHK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"SEQ\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_SHT\" type=\"STRING\" size=\"32\"/><Column id=\"USER_REF1\" type=\"STRING\" size=\"32\"/><Column id=\"USER_REF2\" type=\"STRING\" size=\"32\"/><Column id=\"USER_REF3\" type=\"STRING\" size=\"32\"/><Column id=\"USE_CHK\" type=\"STRING\" size=\"32\"/><Column id=\"SN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"TCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CLASS_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDGUserYn", this);
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


            obj = new Dataset("dsUserYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnDAdd",null,"368","60","22","158",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDExcelDn",null,"368","80","22","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","7","366","83","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDDel",null,"368","60","22","93",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","80",null,"280","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"102\"/><Column size=\"126\"/><Column size=\"138\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"클래스코드\"/><Cell col=\"2\" text=\"클래스명\" cssclass=\"point\"/><Cell col=\"3\" text=\"자동증가\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"등록자\"/><Cell col=\"6\" text=\"등록일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CLASS_ID\" displaytype=\"text\" color=\"#235da8\" textAlign=\"center\" cursor=\"pointer\" font=\"normal 12px/normal &quot;Gulim&quot;\" textDecoration=\"underline\"/><Cell col=\"2\" text=\"bind:CLASS_NM\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:SN\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"!9,999\" maskeditlimitbymask=\"both\" editmaxlength=\"4\" editinputtype=\"number\" editinputfilter=\"none,comma,sign,space\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:USE_CHK\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGUserYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:REG_ID\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:REG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"7\" text=\"bind:MOD_ID\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:MOD_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","6","51","83","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","83","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("클래스코드 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","207","10","85","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("클 래 스  명 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","582","10","81","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사 용 여 부 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassId","85","10","122","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassNm","299","10","267","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserYn","670","10","118","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsUserYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdDetail","0","395",null,null,"0","4",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDetail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"126\"/><Column size=\"97\"/><Column size=\"83\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"클래스\"/><Cell col=\"3\" text=\"코드\" cssclass=\"point\"/><Cell col=\"4\" text=\"코드명\" cssclass=\"point\"/><Cell col=\"5\" text=\"약어명\"/><Cell col=\"6\" text=\"순서\"/><Cell col=\"7\" text=\"참조1\"/><Cell col=\"8\" text=\"참조2\"/><Cell col=\"9\" text=\"참조3\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"등록자\"/><Cell col=\"12\" text=\"등록일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CLASS_ID\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:CODE\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CODE_NM\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"5\" text=\"bind:CODE_SHT\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"6\" text=\"bind:SEQ\" displaytype=\"maskeditcontrol\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"!999\" maskeditlimitbymask=\"both\" editmaxlength=\"3\" editinputtype=\"number\" editinputfilter=\"none,comma,sign,space\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:USER_REF1\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"8\" text=\"bind:USER_REF2\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"9\" text=\"bind:USER_REF3\" displaytype=\"editcontrol\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"10\" text=\"bind:USE_CHK\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsDGUserYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"11\" text=\"bind:REG_ID\" displaytype=\"text\"/><Cell col=\"12\" text=\"bind:REG_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"13\" text=\"bind:MOD_ID\" displaytype=\"text\"/><Cell col=\"14\" text=\"bind:MOD_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1145","45","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1150","360","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_description("마스터디테일처리(싱글/멀티)");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtClassId","value","ds_input","CLASS_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtClassNm","value","ds_input","CLASS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUserYn","value","ds_input","USE_CHK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("SML003MsrOneToDtlMultiRowSampleM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SMPM000003S.xfdl(마스터디테일(싱글/멀티))
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/13
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
        this.lvchkColidDs   		= "CLASS_NM";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 		= "설명";
        this.lvchkColidDs_Detail   	= "CODE$CODE_NM";        	// 디테일 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs_Detail 	= "코드$코드명";

        /*전역변수*/
        this.strKeyValue 			= "";
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
        	var strDs    = "dsUserYn|dsGUserYn|dsDGUserYn";      						// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd  = "000002|000002|000002";           		 			// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb  = "T|X|X";   									 	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn  = "";											    // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	 = "Init";

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
        	//trace(this.dsYn.saveXML());
        	this.ds_input.setColumn(0,"USE_CHK",null);
        	//this.cbYn.set_value(null);
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
        			case "DSearch":
        				this.fn_PostDRet();
        			  	break;
        			case "Save":
        			    this.fn_PostSave();
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
        	var strUrl      = "";
        		strUrl 	   += "/prj/sml/RetrieveMsrOneToDtlMultiRowSampleList.do";
        	var strInDs  	= "";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var	strArg 	    = "CLASS_ID=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.edtClassId.value));
        		strArg 	   += " CLASS_NM=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.edtClassNm.value));
        		strArg 	   += " USE_CHK=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.cboUserYn.value));
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
        this.fn_PreDRet = function()
        {

        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"CLASS_ID",this.dsMaster.getColumn(this.dsMaster.rowposition,"CLASS_ID"));
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

        	var strSvc 		= "DSearch";
        	var strUrl 		= "/prj/sml/RetrieveDetailMultiRowSampleList.do";
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
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);

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
        		result = this.gfn_confirm("MSG00010","저장 처리","","question"); // 변경이력있습니다.이동하시겠습니까?
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
        	this.dsMaster.setColumn(nRow,"USE_CHK", 		   "1"); 		//사용유무
        };


        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostAdd = function()
        {
        };
        /**********************************************************************
        	06-1.디테일 추가 함수 선언(마스터단일/디테일은 멀티처리)
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_preDAdd = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("MSG00014","입력정보","","warning");  // 마스터 데이타가 없습니다.!
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 디테일 추가 실행
         */
        this.btnDAdd_onclick = function(obj,e)
        {
        	if(!this.fn_preDAdd())
        	{
        		return false;
        	}

        	var nRow = this.dsDetail.addRow();
        	this.dsDetail.setColumn(nRow,"CLASS_ID", this.dsMaster.getColumn(this.dsMaster.rowposition,"CLASS_ID")); 	//기본키값
        	this.dsDetail.setColumn(nRow,"CHK", 	   	  "0"); 													//체크
        	this.dsDetail.setColumn(nRow,"USE_CHK", 	  "1"); 													//사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostDAdd = function()
        {
        	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
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
        		this.gfn_alert("MSG00006","삭제 정보","","information");  // 삭제할 데이타가 없습니다.!
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question"); // 현재선택행을 삭제하시겠습니까?
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
        	var strUrl 		= "/prj/sml/DeleteMsrOneToDtlMultiRowSampleList.do";
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
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
        	07-1. 디테일 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDDel = function()
        {
        	//멀티삭제용도
        	if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("MSG00006","삭제 정보","","information");  // 삭제할 데이타가 없습니다.!
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00007","삭제 처리","","question"); // 현재선택행을 삭제하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsDetail.set_enableevent(false);
        	for(var i=this.dsDetail.rowcount-1;i>-1;i--)
        	{
        		if(this.dsDetail.getColumn(i,"CHK") == "1" || this.dsDetail.getRowType(i) == 2)
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
        	if(!this.fn_PreDDel())
        	{
        		return false;
        	}

        	var strSvc 		= "DDel";
        	var strUrl 		= "/prj/sml/DeleteDetailMultiRowSampleList.do";
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

        this.fn_PostDDel = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
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
                this.gfn_alert("MSG00008","저장 정보","","information"); 	//변경된 이력이 없습니다.
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

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg1 = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs_Detail, this.lvchkColNameDs_Detail, this.grdDetail, chkFocusFlg1, this);

        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
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
        	this.dsMaster.set_enableevent(false);
        	var strSvc 		= "Save";
        	var strUrl 	    = "/prj/sml/SaveMsrOneToDtlMultiRowSampleList.do";
        	var strInDs     = "dsMaster=dsMaster:u ";
        		strInDs    += "dsDetail=dsDetail:u";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var	strArg 	    = "CLASS_ID=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.edtClassId.value));
        		strArg 	   += " CLASS_NM=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.edtClassNm.value));
        		strArg 	   += " USE_CHK=" 	+ nexacro.wrapQuote(this.gfn_trim(this.divSearch.form.cboUserYn.value));
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
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        	//trace(this.strKeyValue);
        	var nRow = this.dsMaster.findRow("CLASS_ID",this.strKeyValue);
        	this.dsMaster.set_rowposition(nRow);
        	if(nRow == 0)
        	{
        		this.fn_DRet();
        		//this.sMaster_onrowposchanged(this.dsMaster);
        	}
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
        		this.gfn_alert("MSG00004","EXCEL 정보","","information"); // 출력할 엑셀데이타가 없습니다.!
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00005","EXCEL 출력","","question"); // Excel를 출력하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExportSheet([this.grdMaster,this.grdDetail],["마스터","상세"],"마스터디테일처리" );

        };

        //디테일 다운로드
        this.btnDExcelDn_onclick = function(obj,e)
        {
        	if(this.dsDetail.rowcount < 1)
        	{
        		this.gfn_alert("MSG00004","EXCEL 정보","","information"); // 출력할 엑셀데이타가 없습니다.!
        		return false;
        	}
        	var result = this.gfn_confirm("MSG00005","EXCEL 출력","","question"); // Excel를 출력하시겠습니까?
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdDetail,"상세처리","상세행처리");
        };

        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /**
        	클래스코드 조회조건 조회
        */
        this.divSearch_edtClassId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	클래스명 조회조건 조회
        */
        this.divSearch_edtClassNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	사용여부 조회조건 조회
        */
        this.divSearch_cboUserYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
         *	그리드멀티 소트정열
        **/
        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };

        /**
         *	그리드멀티 체크
        **/
        this.grdDetail_onheadclick = function(obj,e)
        {
        	if(e.cell == this.grdDetail.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);
        	}
        };
        /**
         *	그리드멀티 소트정열
        **/
        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	if(e.cell !=  this.grdDetail.getBindCellIndex("body","CHK") && e.cell !=  1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };


        /**
        	행변경시 현제 데이타가 변경돼었는지 체크
        */
        this.dsMaster_canrowposchange = function(obj,e)
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
        			result = this.gfn_confirm("MSG00010","저장 처리","","question"); // 변경이력있습니다.이동하시겠습니까?

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
        };

        this.dsDetail_cancolumnchange = function(obj,e)
        {

        	if(e.columnid == "CODE")
        	{
        		var nRow = this.dsDetail.findRowExpr("TCODE == '" + e.newvalue + "' && currow != '"+e.row+"'");
        		if(nRow > -1)
        		{
        			this.gfn_alert("MSG00016","입력정보","","warning"); // 중복된 키를 입력할수 없습니다.
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

        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	if(e.cell ==  obj.getBindCellIndex("body", "CLASS_ID"))
        	{
        		var menuid 	= "01010202";
        		var objDs  	= objApp.gds_Menu;
        		objApp.gv_OpenArg = this.dsMaster.getColumn(this.dsMaster.rowposition,"CLASS_ID") + "|" +
        								 "ADJ_RECEIPT_TYPE";
        		this.gfn_newOpenMenu(menuid,objDs);
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDAdd.addEventHandler("onclick",this.btnDAdd_onclick,this);
            this.btnDExcelDn.addEventHandler("onclick",this.btnDExcelDn_onclick,this);
            this.btnDDel.addEventHandler("onclick",this.btnDDel_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.divSearch.form.edtClassId.addEventHandler("onkeyup",this.divSearch_edtClassId_onkeyup,this);
            this.divSearch.form.edtClassNm.addEventHandler("onkeyup",this.divSearch_edtClassNm_onkeyup,this);
            this.divSearch.form.cboUserYn.addEventHandler("onitemchanged",this.divSearch_cboUserYn_onitemchanged,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdDetail_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("cancolumnchange",this.dsDetail_cancolumnchange,this);
        };
        this.loadIncludeScript("SML003MsrOneToDtlMultiRowSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
