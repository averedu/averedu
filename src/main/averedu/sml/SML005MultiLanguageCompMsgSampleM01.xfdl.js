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
            this.set_titletext("다국어컴포넌 및 다국어메세지처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"32\"/><Column id=\"progId\" type=\"STRING\" size=\"32\"/><Column id=\"formPath\" type=\"STRING\" size=\"32\"/><Column id=\"formId\" type=\"STRING\" size=\"32\"/><Column id=\"formNm\" type=\"STRING\" size=\"32\"/><Column id=\"userYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDate\" type=\"STRING\" size=\"32\"/><Column id=\"modId\" type=\"STRING\" size=\"32\"/><Column id=\"modDate\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"uiId\" type=\"STRING\" size=\"256\"/><Column id=\"formPath\" type=\"STRING\" size=\"256\"/><Column id=\"formId\" type=\"STRING\" size=\"256\"/><Column id=\"formName\" type=\"STRING\" size=\"256\"/><Column id=\"useYn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"uiId\"/><Col id=\"formPath\"/><Col id=\"formId\"/><Col id=\"formName\"/><Col id=\"useYn\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"STRING\" size=\"32\"/><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"codeNm\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"addr\" type=\"STRING\" size=\"32\"/><Column id=\"ref1\" type=\"STRING\" size=\"32\"/><Column id=\"ref2\" type=\"STRING\" size=\"32\"/><Column id=\"ref3\" type=\"STRING\" size=\"32\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDt\" type=\"STRING\" size=\"32\"/><Column id=\"updId\" type=\"STRING\" size=\"32\"/><Column id=\"updDt\" type=\"STRING\" size=\"32\"/><Column id=\"autoPlus\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"STRING\" size=\"32\"/><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"codeNm\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"addr\" type=\"STRING\" size=\"32\"/><Column id=\"ref1\" type=\"STRING\" size=\"32\"/><Column id=\"ref2\" type=\"STRING\" size=\"32\"/><Column id=\"ref3\" type=\"STRING\" size=\"32\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDt\" type=\"STRING\" size=\"32\"/><Column id=\"updId\" type=\"STRING\" size=\"32\"/><Column id=\"updDt\" type=\"STRING\" size=\"32\"/><Column id=\"autoPlus\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"STRING\" size=\"32\"/><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"codeNm\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"addr\" type=\"STRING\" size=\"32\"/><Column id=\"ref1\" type=\"STRING\" size=\"32\"/><Column id=\"ref2\" type=\"STRING\" size=\"32\"/><Column id=\"ref3\" type=\"STRING\" size=\"32\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDt\" type=\"STRING\" size=\"32\"/><Column id=\"updId\" type=\"STRING\" size=\"32\"/><Column id=\"updDt\" type=\"STRING\" size=\"32\"/><Column id=\"autoPlus\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGPrefix", this);
            obj._setContents("<ColumnInfo><Column id=\"classId\" type=\"STRING\" size=\"32\"/><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"codeNm\" type=\"STRING\" size=\"32\"/><Column id=\"sort\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"addr\" type=\"STRING\" size=\"32\"/><Column id=\"ref1\" type=\"STRING\" size=\"32\"/><Column id=\"ref2\" type=\"STRING\" size=\"32\"/><Column id=\"ref3\" type=\"STRING\" size=\"32\"/><Column id=\"useYn\" type=\"STRING\" size=\"32\"/><Column id=\"regId\" type=\"STRING\" size=\"32\"/><Column id=\"regDt\" type=\"STRING\" size=\"32\"/><Column id=\"updId\" type=\"STRING\" size=\"32\"/><Column id=\"updDt\" type=\"STRING\" size=\"32\"/><Column id=\"autoPlus\" type=\"BIGDECIMAL\" size=\"16\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("dvSearch","0","0",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","6","10","88","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("0");
            obj.set_text("COP00030");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle02","191","10","63","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("1");
            obj.set_text("COP00031");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle03","356","10","73","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("2");
            obj.set_text("COP00030");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","551","10","73","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("3");
            obj.set_text("COP00031");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","771","10","73","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("4");
            obj.set_text("COP00030");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edUiId","99","10","87","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("5");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Combo("cbPrefix","255","10","98","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsPrefix");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edFormId","434","10","117","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Edit("edFormName","624","10","142","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("8");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","840","10","78","22",null,null,null,null,null,null,this.dvSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("code");
            obj.set_datacolumn("codeNm");
            obj.set_text("");
            this.dvSearch.addChild(obj.name, obj);

            obj = new Static("stRowCnt","6","53","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("COP00037");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert","6","568","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Alert");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","516","569","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Confirm");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","594","499","106",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("this.gfn_alert(\"MSG00001\",\"팝업입니다\",\"하나,둘,셋\",\"warning\");\r\n1.번째인자: 메세지테이블에 메세지코드\r\n2.번째인자: 메세지타이틀 직접입력(문자열) (HTML5적용않됨)\r\n3.번째인자: $1:파라미터인자값 $2두번째 파라미터인자값(최대6개까지가능)\r\n4.번째인자: 메세지 타입(HTML5적용않됨.");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","515","595",null,"105","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_value("this.gfn_confirm(\"MSG00001\",\"팝업입니다\",\"1,2,3\",\"information\");\r\n1.번째인자: 메세지테이블에 메세지코드(HTML5적용않됨)\r\n2.번째인자: 메세지타이틀 직접입력(문자열)\r\n3.번째인자: $1:파라미터인자값 $2두번째 파라미터인자값(최대6개까지가능)\r\n4.번째인자: 메세지 타입(HTML5적용않됨.");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","276",null,"276","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMain);
            obj.set_text("COP00030");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdMaster","6","35",null,null,"5","5",null,null,null,null,this.tabMain.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"157\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"COP00030\"/><Cell col=\"3\" text=\"COP00031\"/><Cell col=\"4\" text=\"COP00030\"/><Cell col=\"5\" text=\"COP00031\"/><Cell col=\"6\" text=\"COP00032\"/><Cell col=\"7\" text=\"COP00033\"/><Cell col=\"8\" text=\"COP00034\"/><Cell col=\"9\" text=\"COP00035\"/><Cell col=\"10\" text=\"COP00036\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:progId\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:formPath\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"4\" text=\"bind:formId\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:formNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:userYn\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGUseYn\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"7\" text=\"bind:regId\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:regDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:modId\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:modDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"9","60","22","76",null,null,null,null,null,this.tabMain.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("COP00032");
            obj.set_cssclass("btn_WF_Crud");
            this.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"9","60","22","11",null,null,null,null,null,this.tabMain.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("COP00033");
            obj.set_cssclass("btn_WF_Crud");
            this.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","1170","0","100","35",null,null,null,null,null,null,this.tabMain.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tabMain.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tabMain);
            obj.set_text("COP00031");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","60","22","75",null,null,null,null,null,this.tabMain.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("COP00032");
            obj.set_cssclass("btn_WF_Crud");
            this.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"10","60","22","10",null,null,null,null,null,this.tabMain.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("COP00033");
            obj.set_cssclass("btn_WF_Crud");
            this.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdMaster","6","38",null,null,"5","5",null,null,null,null,this.tabMain.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"157\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No.\"/><Cell col=\"2\" text=\"COP00030\"/><Cell col=\"3\" text=\"COP00031\"/><Cell col=\"4\" text=\"COP00030\"/><Cell col=\"5\" text=\"COP00031\"/><Cell col=\"6\" text=\"COP00032\"/><Cell col=\"7\" text=\"COP00033\"/><Cell col=\"8\" text=\"COP00034\"/><Cell col=\"9\" text=\"COP00035\"/><Cell col=\"10\" text=\"COP00036\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:progId\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:formPath\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"4\" text=\"bind:formId\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:formNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:userYn\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGUseYn\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"7\" text=\"bind:regId\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:regDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:modId\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:modDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static00","1170","0","100","35",null,null,null,null,null,null,this.tabMain.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.tabMain.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","80",null,"189","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"157\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"COP00030\"/><Cell col=\"2\" text=\"COP00031\"/><Cell col=\"3\" text=\"COP00030\"/><Cell col=\"4\" text=\"COP00031\"/><Cell col=\"5\" text=\"COP00032\"/><Cell col=\"6\" text=\"COP00033\"/><Cell col=\"7\" text=\"COP00034\"/><Cell col=\"8\" text=\"COP00035\"/><Cell col=\"9\" text=\"COP00036\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:progId\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:formPath\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"3\" text=\"bind:formId\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:formNm\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:userYn\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsGUseYn\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"6\" text=\"bind:regId\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:regDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:modId\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:modDate\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAlert00","80","568","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("msgAlert");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm00","601","569","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("msgConfirm");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1170","270","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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
            obj.set_description("다국어컴포넌 및 다국어메세지처리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","dvSearch.form.edUiId","value","ds_input","uiId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","dvSearch.form.edFormId","value","ds_input","formId");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","dvSearch.form.edFormName","value","ds_input","formName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","dvSearch.form.cbPrefix","value","ds_input","formPath");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","dvSearch.form.cboUseYn","value","ds_input","useYn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML005MultiLanguageCompMsgSampleM01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SMPM000005S.xfdl(다국어컴포넌 및 다국어메세지처리)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2018/09/11
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
        	//각 컴포넌트 타이틀 국제화 처리
          	this.gfn_setTitle();
        };
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
        	03. 폼 로드 및 언로드 선언
        ***********************************************************************/
        /**********************************************************************
        	04. 공통 코드 및 마스터 코드 선언
        ***********************************************************************/
        /**********************************************************************
        	05. 콜백 함수 선언
        ***********************************************************************/
        //메시지콜백 (메세지 후처리: alert,confirm)
        this.fn_msgCallback = function (strId, strVal)
        {
        	switch (strId)
        	{
        		case "gfn_alert":
        			//OK:화면그대로 닫이고 처리됨.
        			break;
        		case "gfn_confirm":
        			//YES:클릭시 true  인자값으로 넘어옮.
        			//NO :클릭시 false 인자값으로 넘어옮.
        			break;
        		default:
        			break;
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
        	06. 조회 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	07. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	08. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	09. 저장 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        /**********************************************************************
        	12. ExcelUpLoad 엑셀업로드
        ***********************************************************************/
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/

        /**
          * 설명 조회조건 조회
         **/
        this.dvSearch_edUiId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
          * 클래스콤보 조회조건 조회
         **/
        this.dvSearch_cbPrefix_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /**
          * 설명 조회조건 조회
         **/
        this.dvSearch_edFormId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
          * 클래스 조회조건 조회
         **/
        this.dvSearch_edFormName_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
          * 설명콤보 조회조건 조회
         **/
        this.dvSearch_cboUseYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /*
         * alert을 처리하는 펑션 테스트
         */
        this.btnAlert_onclick = function(obj,e)
        {
        	this.gfn_alert("MSG00001","팝업입니다","하나,둘,셋","warning");
        };

        /*
         * Confirm을 처리하는 펑션 테스트
         */
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.gfn_confirm("MSG00001","팝업입니다","1,2,3","information");
        };



        this.btnAlert00_onclick = function(obj,e)
        {
        	var sMsgCd 			= "MSG00001";									// DB:GDS_MESSAGE 메세지코드값(코드값이 못찾을 시 입력한 값이 그대로 표시.디폴트:Information:I)
        	var sMsgParam 		= "1,2,3";                              // "20100816,20100916" 파리미터 인자값 "시작에서 $1이고 끝은 $2입니다. $1,$2이거로 치환됨.
        	var sMsgCallBack 	= "fn_msgCallback";							// 메세지 박스 콜백함수
        	var sMsgSvcId       = "gfn_alert";                              // 콜백함수에 분기처리함.
        	this.gfn_msg(sMsgCd, sMsgParam, sMsgCallBack, sMsgSvcId); 		// 패스워드는 필수항목입니다.
        };

        this.btnConfirm00_onclick = function(obj,e)
        {
        	var sMsgCd 			= "MSG00002";									// DB:GDS_MESSAGE 메세지코드값(코드값이 못찾을 시 입력한 값이 그대로 표시.디폴트:Information:I)
        	var sMsgParam 		= "이름";                              // "20100816,20100916" 파리미터 인자값 "시작에서 $1이고 끝은 $2입니다. $1,$2이거로 치환됨.
        	var sMsgCallBack 	= "fn_msgCallback";							// 메세지 박스 콜백함수
        	var sMsgSvcId       = "gfn_confirm";                              // 콜백함수에 분기처리함.
        	this.gfn_msg(sMsgCd, sMsgParam, sMsgCallBack, sMsgSvcId); 		// 패스워드는 필수항목입니다.
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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.dvSearch.form.edUiId.addEventHandler("onkeyup",this.dvSearch_edUiId_onkeyup,this);
            this.dvSearch.form.cbPrefix.addEventHandler("onitemchanged",this.dvSearch_cbPrefix_onitemchanged,this);
            this.dvSearch.form.edFormId.addEventHandler("onkeyup",this.dvSearch_edFormId_onkeyup,this);
            this.dvSearch.form.edFormName.addEventHandler("onkeyup",this.dvSearch_edFormName_onkeyup,this);
            this.dvSearch.form.cboUseYn.addEventHandler("onitemchanged",this.dvSearch_cboUseYn_onitemchanged,this);
            this.btnAlert.addEventHandler("onclick",this.btnAlert_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.tabMain.Tabpage1.form.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.tabMain.Tabpage1.form.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.tabMain.Tabpage1.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.tabMain.Tabpage1.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.tabMain.Tabpage2.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.tabMain.Tabpage2.form.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.tabMain.Tabpage2.form.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.tabMain.Tabpage2.form.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnAlert00.addEventHandler("onclick",this.btnAlert00_onclick,this);
            this.btnConfirm00.addEventHandler("onclick",this.btnConfirm00_onclick,this);
        };
        this.loadIncludeScript("SML005MultiLanguageCompMsgSampleM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
