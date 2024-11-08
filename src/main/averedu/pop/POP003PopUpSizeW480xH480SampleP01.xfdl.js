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
            this.set_titletext("사용자팝업(480x480)");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDummy", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUseYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrefix", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGPrefix", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PROG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM_ID\"/><Col id=\"FORM_PATH\"/><Col id=\"FORM_NM\"/><Col id=\"USER_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","20","129","440","284",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"65\"/><Column size=\"54\"/><Column size=\"165\"/><Column size=\"102\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"화면ID\"/><Cell col=\"2\" text=\"PREFIX\"/><Cell col=\"3\" text=\"FORMID\"/><Cell col=\"4\" text=\"FORM명(한글)\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:PROG_ID\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:FORM_PATH\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:FORM_ID\" displaytype=\"text\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:FORM_NM\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USER_YN\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsGUseYn\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","346","434","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","19","50","442","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","55","22","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","10","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("화면아이디");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","87","10","83","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","171","10","75","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("FORM명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtFormNm","246","10","122","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","257","0","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","257","30","100","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("pink");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt","19","101","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","405","434","55","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Pop");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","20","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("화면관리팝업");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit","430","20","30","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_font("bold 16px/normal \"Gulim\"");
            obj.set_cssclass("btn_WF_Close01");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","93","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","122","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","45","145","5",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","279","20","76","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","335","94","50","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20",null,null,"20","20","46",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtProgId","value","ds_input","FORM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtFormNm","value","ds_input","FORM_NM");
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
        this.registerScript("POP003PopUpSizeW480xH480SampleP01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): POP003PopUpSizeW480xH480SampleP01.xfdl(화면관리팝업)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/17
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

        	var strDs   = "dsUseYn|dsGUseYn|dsPrefix|dsGPrefix";		// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd = "000002|000002|000008|000008";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb = "T|X|T|X";   									// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn = "";											// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	= "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs
        							  , strLgcd
        							  , strComb
        							  , strOptn
        							  , svcId);
        };

        this.postformInit = function()
        {

        	this.ds_input.setColumn(0,"FORM_PATH", 	null);
        	this.ds_input.setColumn(0,"USER_YN", 	null);

        	var sSetComponet = this.sOptinoArg1;
        	var sAutoSearch  = this.sOptinoArg2;

        	// 설정에 따라서 호출 창으로부터 파라미터를 넘겨받는다.
        	this.divSearch.form.edtProgId.setFocus();

        	if(sSetComponet == "Y")
        	{
        		this.ds_input.setColumn(0,"PROG_ID",	this.sParamArg1);
        		this.ds_input.setColumn(0,"FORM_ID",	this.sParamArg2);
        		this.ds_input.setColumn(0,"FORM_NM",	this.sParamArg3);
        		this.ds_input.setColumn(0,"FORM_PATH",	this.gfn_isNull(this.sParamArg4) ? null : this.sParamArg4);
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
        	var strUrl 		= "/prj/pop/RetrievePopUpSizeW480xH480SampleList.do";
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
        		objRtnArr[1] = ds.getColumn(ds.rowposition, "PROG_ID");
        		objRtnArr[2] = ds.getColumn(ds.rowposition, "FORM_NM");
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

        this.grdMaster_onheaddblclick = function(obj,e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        };






















        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.divSearch.form.edtProgId.addEventHandler("onkeydown",this.divSearch_edtProgId_onkeydown,this);
            this.divSearch.form.edtFormNm.addEventHandler("onkeydown",this.divSearch_edtFormNm_onkeydown,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
        };
        this.loadIncludeScript("POP003PopUpSizeW480xH480SampleP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
