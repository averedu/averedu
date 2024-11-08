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
            this.set_titletext("MULTICOMBO(멀티콤보)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list11", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">AAAA</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">BBBB</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">CCCC</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">DDDD</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">EEEE</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">FFFF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01234</Col><Col id=\"data\">0000AAAA</Col></Row><Row><Col id=\"code\">02345</Col><Col id=\"data\">0000BBBB</Col></Row><Row><Col id=\"code\">03456</Col><Col id=\"data\">0000CCCC</Col></Row><Row><Col id=\"code\">04567</Col><Col id=\"data\">0000DDDD</Col></Row><Row><Col id=\"code\">05678</Col><Col id=\"data\">0000EEEE</Col></Row><Row><Col id=\"code\">06789</Col><Col id=\"data\">0000FFFF</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"data\">z</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"data\">x</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"data\">c</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"data\">v</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"data\">b</Col></Row><Row><Col id=\"code\">6</Col><Col id=\"data\">n</Col></Row><Row><Col id=\"code\">7</Col><Col id=\"data\">m</Col></Row><Row><Col id=\"code\">8</Col><Col id=\"data\">a</Col></Row><Row><Col id=\"code\">9</Col><Col id=\"data\">s</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"data\">d</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">01</Col><Col id=\"name\">AAAA</Col></Row><Row><Col id=\"code\">02</Col><Col id=\"name\">BBBB</Col></Row><Row><Col id=\"code\">03</Col><Col id=\"name\">CCCC</Col></Row><Row><Col id=\"code\">04</Col><Col id=\"name\">DDDD</Col></Row><Row><Col id=\"code\">05</Col><Col id=\"name\">EEEE</Col></Row><Row><Col id=\"code\">06</Col><Col id=\"name\">FFFF</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMessageCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPT\" type=\"STRING\" size=\"256\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"OPT\"/><Col id=\"CLASS_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CD\" type=\"STRING\" size=\"32\"/><Column id=\"TCODE\" type=\"STRING\" size=\"32\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"CD_NM_ENG\" type=\"STRING\" size=\"32\"/><Column id=\"CD_NM_CH\" type=\"STRING\" size=\"32\"/><Column id=\"CD_NM_JP\" type=\"STRING\" size=\"32\"/><Column id=\"CD_NM_ETC\" type=\"STRING\" size=\"32\"/><Column id=\"ADDR\" type=\"STRING\" size=\"32\"/><Column id=\"REF_1\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"32\"/><Column id=\"REF_3\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"32\"/><Column id=\"REG_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MOD_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"AUTO_PLUS\" type=\"STRING\" size=\"32\"/><Column id=\"REF_4\" type=\"STRING\" size=\"32\"/><Column id=\"REF_5\" type=\"STRING\" size=\"32\"/><Column id=\"REF_6\" type=\"STRING\" size=\"32\"/><Column id=\"REF_7\" type=\"STRING\" size=\"32\"/><Column id=\"REF_8\" type=\"STRING\" size=\"32\"/><Column id=\"REF_9\" type=\"STRING\" size=\"32\"/><Column id=\"REF_10\" type=\"STRING\" size=\"32\"/><Column id=\"CD_DC\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_multCombo","10","52","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_url("com::COMM000009P.xfdl");
            obj.getSetter("callbackfunc").set("fn_multiComboCallback");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("combodatacolumn").set("name");
            obj.getSetter("comboinnerdataset").set("ds_list00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getValue","169","50","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("getValue");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getValue","296","50","355","33",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setValue","169","132","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("setValue");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_setValue","296","132","355","33",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btn_getText","169","91","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("getText");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_getText","296","91","355","33",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btn_setEssential","169","173","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("setEssential");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_init","169","214","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("initialization");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Div("div_multCombo01","5","359","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("com::COMM000009P.xfdl");
            obj.getSetter("callbackfunc").set("fn_multiComboCallback");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("combodatacolumn").set("name");
            obj.getSetter("comboinnerdataset").set("ds_list11");
            obj.getSetter("cellwidth").set("300");
            this.addChild(obj.name, obj);

            obj = new Div("div_multCombo00","508","354","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Div00");
            obj.set_url("com::COMM000009P.xfdl");
            obj.getSetter("callbackfunc").set("fn_multiComboCallback");
            obj.getSetter("combocodecolumn").set("code");
            obj.getSetter("combodatacolumn").set("data");
            obj.getSetter("comboinnerdataset").set("ds_list01");
            obj.getSetter("displaycount").set("5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","1",null,"44","1",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("각종: 멀티콤보 각종기능(MULTICOMBO)-선택후처리:fn_multiComboCallback");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","260",null,"50","2",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("※ 멀티콤보에 사용자정의 셋팅후 처리 콤포넌트-선택후처리:fn_multiComboCallback");
            obj.set_textAlign("left");
            obj.set_background("cadetblue");
            obj.set_font("bold 14px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","315","500","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Add User Property -> cellwidth 추가 후 값 입력");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","505","313",null,"35","3",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Add User Property -> displaycount 추가 후 값 입력");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","655","134",null,"35","1",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("선택할 값을 ,(콤마)로 구분해서 입력    예)02,03");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_multComboS","5","459","145","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("com::COMM000009P.xfdl");
            obj.getSetter("callbackfunc").set("fn_multiComboCallback");
            obj.getSetter("combocodecolumn").set("CODE");
            obj.getSetter("combodatacolumn").set("CODE_NM");
            obj.getSetter("comboinnerdataset").set("dsMessageCd");
            obj.getSetter("cellwidth").set("300");
            this.addChild(obj.name, obj);

            obj = new Button("select","180","456","113","33",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("select");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("editParam","422","454","100","33",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","299","455","118","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("인자값(조회조건)");
            obj.set_textAlign("left");
            obj.set_background("#351ee0");
            obj.set_font("bold 13px/normal \"Gulim\"");
            obj.set_color("#ffffff");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","526","454","150","33",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","7","502","1243","178",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"CLASS_ID\"/><Cell col=\"2\" text=\"CD\"/><Cell col=\"3\" text=\"TCODE\"/><Cell col=\"4\" text=\"SORT\"/><Cell col=\"5\" text=\"CD_NM\"/><Cell col=\"6\" text=\"CD_NM_ENG\"/><Cell col=\"7\" text=\"CD_NM_CH\"/><Cell col=\"8\" text=\"CD_NM_JP\"/><Cell col=\"9\" text=\"CD_NM_ETC\"/><Cell col=\"10\" text=\"ADDR\"/><Cell col=\"11\" text=\"REF_1\"/><Cell col=\"12\" text=\"REF_2\"/><Cell col=\"13\" text=\"REF_3\"/><Cell col=\"14\" text=\"USE_YN\"/><Cell col=\"15\" text=\"REG_ID\"/><Cell col=\"16\" text=\"REG_DT\"/><Cell col=\"17\" text=\"MOD_ID\"/><Cell col=\"18\" text=\"MOD_DT\"/><Cell col=\"19\" text=\"AUTO_PLUS\"/><Cell col=\"22\" text=\"REF_4\"/><Cell col=\"23\" text=\"REF_5\"/><Cell col=\"24\" text=\"REF_6\"/><Cell col=\"25\" text=\"REF_7\"/><Cell col=\"26\" text=\"REF_8\"/><Cell col=\"27\" text=\"REF_9\"/><Cell col=\"28\" text=\"REF_10\"/><Cell col=\"29\" text=\"CD_DC\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CLASS_ID\"/><Cell col=\"2\" text=\"bind:CD\"/><Cell col=\"3\" text=\"bind:TCODE\"/><Cell col=\"4\" text=\"bind:SORT\"/><Cell col=\"5\" text=\"bind:CD_NM\"/><Cell col=\"6\" text=\"bind:CD_NM_ENG\"/><Cell col=\"7\" text=\"bind:CD_NM_CH\"/><Cell col=\"8\" text=\"bind:CD_NM_JP\"/><Cell col=\"9\" text=\"bind:CD_NM_ETC\"/><Cell col=\"10\" text=\"bind:ADDR\"/><Cell col=\"11\" text=\"bind:REF_1\"/><Cell col=\"12\" text=\"bind:REF_2\"/><Cell col=\"13\" text=\"bind:REF_3\"/><Cell col=\"14\" text=\"bind:USE_YN\"/><Cell col=\"15\" text=\"bind:REG_ID\"/><Cell col=\"16\" text=\"bind:REG_DT\"/><Cell col=\"17\" text=\"bind:MOD_ID\"/><Cell col=\"18\" text=\"bind:MOD_DT\"/><Cell col=\"19\" text=\"bind:AUTO_PLUS\"/><Cell col=\"22\" text=\"bind:REF_4\"/><Cell col=\"23\" text=\"bind:REF_5\"/><Cell col=\"24\" text=\"bind:REF_6\"/><Cell col=\"25\" text=\"bind:REF_7\"/><Cell col=\"26\" text=\"bind:REF_8\"/><Cell col=\"27\" text=\"bind:REF_9\"/><Cell col=\"28\" text=\"bind:REF_10\"/><Cell col=\"29\" text=\"bind:CD_DC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMsgCd","744","452","296","29",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("dsMsgYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUserYn","1072","454","118","32",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("dsMsgYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","5","388","371","49",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_binddataset("ds_input");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"OPT\"/><Cell col=\"2\" text=\"CLASS_ID\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:OPT\"/><Cell col=\"2\" text=\"bind:CLASS_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_input","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdoMsgCd","value","ds_input","OPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUserYn","value","ds_input","USE_CHK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","com::COMM000009P.xfdl");
        };
        
        // User Script
        this.registerScript("SML019MultiComboCmpGridM01.xfdl", function() {
        /**
        ※ 멀티콤보 사용방법(Default)

        1. div를 추가한다.(width:202 X height:23 )
        2. div에 "Properties"에서 "url에 "cmm::cmmMultiCombo.xfdl"를 입력한다.
        3. div에 "Properties"에서 오른쪽 마우스를 클릭하여 "Add User Property"를 클릭하여 User Property를 추가한다.
         ㄱ. comboinnerdataset : combo bind dataset
         ㄴ. combodatacolumn : combo text
         ㄷ. combocodecolumn : combo value
        */

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnload(obj.e);
        	this.div_multCombo.form._setCombo();
        	this.div_multCombo01.form._setCombo();
        	this.div_multCombo00.form._setCombo();


        	//사용자 화면  초기화 함수
        	this.fn_formInit();

        };

        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        	var strDs    = "dsMessageCd|dsMsgYn";      						// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd  = "000009|000010";           		 		                // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb  = "X|T";   								            // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn  = "";										        // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	 = "Init";

           // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
           // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.


        	this.gfn_CmmnMultiComboLoad(strDs
        							, strLgcd
        							, strComb
        							, strOptn
        							, svcId);

        };
        /**
         * 메세지 후처리
         */
        this.fn_PostformInit = function()
        {
        	//trace(this.dsMessageCd.saveXML());
        	this.div_multComboS.form._setCombo();
        	//this.ds_input.setColumn(0,"OPT","");
        	//this.ds_input.setColumn(0,"OPT",undefined);
        	this.rdoMsgCd.set_index(0);

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
        				this.fn_PostformInit();
        				break;
        			case "Ret":
        			    this.fn_PostRet();
        			  	break;
        			default:
        				break;
        		}
        	}
        };


        //멀티콤보콜백
        this.fn_multiComboCallback = function(arrVal)
        {

        	//trace("getText::"+this.div_multCombo.form.getText());

        	//선택가능 갯수 제어
        	if(arrVal.length > 3)
        	{
        		//this.gfn_alert("너무많음");
        		//초기화
        		//this.div_multCombo.form.fn_init();

        	}
        };

        //멀티콤보 데이터가져오기. getValue()
        this.btnGetValue_onclick = function(obj,e)
        {
        	var sValue = this.div_multCombo.form.getValue();
        	this.edt_getValue.set_value(sValue);
        };

        //멀티콤보 텍스트가져오기. .getText()
        this.btnGetText_onclick = function(obj,e)
        {
        	var sText = this.div_multCombo.form.getText();
        	this.edt_getText.set_value(sText);
        };

        //멀티콤보 데이터셋 세팅하기. setValue(sValue)
        this.btnSetValue_onclick = function(obj,e)
        {
        	var sValue = this.edt_setValue.value;
        	if(this.gfn_isNull(sValue)) return;
        	this.div_multCombo.form.setValue(sValue);
        };

        //멀티콤보 필수처리. setEssential()
        this.btnSetEssential_onclick = function(obj,e)
        {
        	this.div_multCombo.form.setEssential();
        };

        //멀티콤보 초기화. fn_init()
        this.btnInit_onclick = function(obj,e)
        {
        	this.div_multCombo.form.fn_init();
        };


        this.select_onclick = function(obj,e)
        {
        	var sValue = this.div_multComboS.form.getValue();
        	this.editParam.set_value(sValue);
        	this.ds_input.clearData();
        	var nRow =  this.ds_input.addRow();
        	// 조회조건 설정
        	//데이터를 넘길 경우 데이터셋에 추가해서 넘기는 방식과
        	//아규먼트를 추가해서 넘기는 방식 모두 사용가능

        	this.ds_input.setColumn(nRow,"CODE",sValue);
        	this.ds_input.setColumn(nRow,"CLASS_ID","000009");


        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/sml/RetrieveMultiComboSampleList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
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
        this.fn_PostRet = function ()
        {
        	//trace(this.dsMaster.saveXML());
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_getValue.addEventHandler("onclick",this.btnGetValue_onclick,this);
            this.btn_setValue.addEventHandler("onclick",this.btnSetValue_onclick,this);
            this.btn_getText.addEventHandler("onclick",this.btnGetText_onclick,this);
            this.btn_setEssential.addEventHandler("onclick",this.btnSetEssential_onclick,this);
            this.btn_init.addEventHandler("onclick",this.btnInit_onclick,this);
            this.select.addEventHandler("onclick",this.select_onclick,this);
            this.cboUserYn.addEventHandler("onitemchanged",this.divSearch_cboUserYn_onitemchanged,this);
        };
        this.loadIncludeScript("SML019MultiComboCmpGridM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
