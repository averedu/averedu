(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("NDSYS210M");
            this.set_titletext("제너레이터1.1(vo버전)");
            this.getSetter("classname").set("NDSYS210M");
            this.getSetter("style").set("font:9 돋움;");
            if (Form == this.constructor)
            {
                this._setFormPosition(1045,701);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_Master", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"rowNo\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"tableName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_Detail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"colDef\" type=\"STRING\" size=\"256\"/><Column id=\"colNo\" type=\"STRING\" size=\"256\"/><Column id=\"colNull\" type=\"STRING\" size=\"256\"/><Column id=\"colPk\" type=\"STRING\" size=\"256\"/><Column id=\"columnName\" type=\"STRING\" size=\"256\"/><Column id=\"comments\" type=\"STRING\" size=\"256\"/><Column id=\"dataLength\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"dataType\" type=\"STRING\" size=\"256\"/><Column id=\"ord\" type=\"STRING\" size=\"256\"/><Column id=\"remkText\" type=\"STRING\" size=\"256\"/><Column id=\"vwDataType\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOwer", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"32\"/><Column id=\"name\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1Depth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">adm</Col><Col id=\"NAME\">adm</Col></Row><Row><Col id=\"CODE\">stu</Col><Col id=\"NAME\">sut</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds2Depth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">acc</Col><Col id=\"NAME\">acc</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">aprvl</Col><Col id=\"NAME\">aprvl</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">aprvlln</Col><Col id=\"NAME\">aprvlln</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">basicmsg</Col><Col id=\"NAME\">basicmsg</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">code</Col><Col id=\"NAME\">code</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"LEVEL\">adm</Col><Col id=\"CODE\">comm</Col><Col id=\"NAME\">comm</Col></Row><Row><Col id=\"CODE\">depos</Col><Col id=\"NAME\">depos</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">login</Col><Col id=\"NAME\">login</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">menu</Col><Col id=\"NAME\">menu</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">pbldirector</Col><Col id=\"NAME\">pbldirector</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">pblretn</Col><Col id=\"NAME\">pblretn</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">prod</Col><Col id=\"NAME\">prod</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">regsvtim</Col><Col id=\"NAME\">regsvtim</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">reguser</Col><Col id=\"NAME\">reguser</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">seizure</Col><Col id=\"NAME\">seizure</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">sp</Col><Col id=\"NAME\">sp</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">sportamt</Col><Col id=\"NAME\">sportamt</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">sportamtadm</Col><Col id=\"NAME\">sportamtadm</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">statistics</Col><Col id=\"NAME\">statistics</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">sysif</Col><Col id=\"NAME\">sysif</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">test</Col><Col id=\"NAME\">test</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">trmnat</Col><Col id=\"NAME\">trmnat</Col><Col id=\"LEVEL\">adm</Col></Row><Row><Col id=\"CODE\">user</Col><Col id=\"NAME\">user</Col><Col id=\"LEVEL\">adm</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"codeName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"codeName\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents("<ColumnInfo><Column id=\"totalCount\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox00","5","2",null,"92","1",null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","2","165","308",null,null,"5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("DS_Master");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"115\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"tableName\"/><Cell col=\"2\" text=\"comments\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:tableName\"/><Cell col=\"2\" style=\"align:left;\" text=\"bind:comments\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers","5","106","303","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("dsOwer");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers01","64","10","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("ds2Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("true");
            obj.set_text("system");
            obj.set_value("system");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("edPath00","260","8","118","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("onchar").set("edPath00_onchar");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edPath","95","35","171","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("Search",null,"6","74","25","11",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","1081","36","82","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","9","13","47","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("업무명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","201","9","52","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("작업명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","36","86","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Package경로 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","385","10","77","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("클래스메인명");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","725","10","84","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("글래스확장명 :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edWorkName","466","8","245","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Edit("edWorkName1","815","9","132","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","268","37","82","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Contoller :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","530","35","51","23",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Service :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edController","333","36","174","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Edit("edService","593","36","172","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","775","35","97","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("ServiceImpl :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edServiceImpl","850","34","182","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","10","65","64","23",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Dao         :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edDao","95","64","171","23",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","268","64","67","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Mybits :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edRetrieve","333","64","174","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","533","66","46","23",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("DbXml :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edXPlatForm","593","63","172","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Tab("tbMain","315","106",null,null,"0%","5",null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tbSub1",this.tbMain);
            obj.set_text("Tab");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new Grid("gd_Detail","5","5",null,null,"5","5",null,null,null,null,this.tbMain.tbSub1.form);
            obj.set_taborder("0");
            obj.set_binddataset("DS_Detail");
            obj.getSetter("scrollbars").set("autovert");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"93\"/><Column size=\"219\"/><Column size=\"111\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"NULL\"/><Cell col=\"5\" text=\"PK\"/><Cell col=\"6\" text=\"DEFAULT\"/><Cell col=\"7\" text=\"엑셀임시설명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:columnName\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"normal\" style=\"align:left;\" text=\"bind:comments\"/><Cell col=\"3\" text=\"bind:vwDataType\"/><Cell col=\"4\" text=\"bind:colNull\"/><Cell col=\"5\" text=\"bind:colPk\"/><Cell col=\"6\" displaytype=\"text\" text=\"bind:colDef\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:remkText\"/></Band></Format></Formats>");
            this.tbMain.tbSub1.addChild(obj.name, obj);

            obj = new Tabpage("tbSub3",this.tbMain);
            obj.set_text("Controller");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taContoller","0","0",null,null,"0","0",null,null,null,null,this.tbMain.tbSub3.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.tbMain.tbSub3.addChild(obj.name, obj);

            obj = new Tabpage("tbSub4",this.tbMain);
            obj.set_text("Service");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taSarvice","6","4",null,null,"0","0",null,null,null,null,this.tbMain.tbSub4.form);
            obj.set_taborder("0");
            this.tbMain.tbSub4.addChild(obj.name, obj);

            obj = new Tabpage("tbSub5",this.tbMain);
            obj.set_text("ServiceImpl");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taServiceImpl","5","4",null,null,"0","0",null,null,null,null,this.tbMain.tbSub5.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.tbMain.tbSub5.addChild(obj.name, obj);

            obj = new Tabpage("tbSub6",this.tbMain);
            obj.set_text("Dao");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taDao","6","4",null,null,"0","0",null,null,null,null,this.tbMain.tbSub6.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.tbMain.tbSub6.addChild(obj.name, obj);

            obj = new Tabpage("tbSub7",this.tbMain);
            obj.set_text("MyQry");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taXmlquery","6","4",null,null,"0.58%","0.8%",null,null,null,null,this.tbMain.tbSub7.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.tbMain.tbSub7.addChild(obj.name, obj);

            obj = new Tabpage("tbSub8",this.tbMain);
            obj.set_text("XOracle(관리자)");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taXOracle","6","4",null,null,"0%","0%",null,null,null,null,this.tbMain.tbSub8.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.tbMain.tbSub8.addChild(obj.name, obj);

            obj = new Tabpage("tbSub9",this.tbMain);
            obj.set_text("Nexacro");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taPID","8","5",null,null,"0%","0",null,null,null,null,this.tbMain.tbSub9.form);
            obj.set_taborder("1");
            obj.getSetter("position").set("fixed");
            obj.getSetter("lengthunit").set("utf8");
            this.tbMain.tbSub9.addChild(obj.name, obj);

            obj = new Tabpage("tbSub10",this.tbMain);
            obj.set_text("VO");
            obj.getSetter("scrollbars").set("none");
            this.tbMain.addChild(obj.name, obj);

            obj = new TextArea("taVo","4","3",null,null,"0.58%","0.8%",null,null,null,null,this.tbMain.tbSub10.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_readonly("true");
            this.tbMain.tbSub10.addChild(obj.name, obj);

            obj = new Button("btExcel",null,"106","75","25","8",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("엑셀다운로드");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","8","136","42","23",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("필터");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edRetrieve00","50","135","260","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","781","66","46","23",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("VO :");
            obj.set_cssclass("sta_WF_SchTitle");
            this.addChild(obj.name, obj);

            obj = new Edit("edVo","851","63","181","23",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Combo("cbUsers00","1136","31","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds1Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cbUsers","value","ds_input","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edRetrieve00","value","ds_input","codeName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000004S.xfdl", function() {
        /*
        * FormID(화면 ID명)  : COMM000004S.xfdl( 개점/폐점 내역 조회/출력)
        * 작 성		 일 명   : jiback
        * 작 성	     일 자   : 2018/09/16
        * 변 경		 일 자   :
        * 변 경	     자 명   :
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        this.iFind              		= 0; // 처음 상세 리스트가 2번 조회 돼는것을 방지하기 위한 Flag
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.fn_Init();
        }

        this.fn_Init = function()
        {

        	this.edWorkName1.set_value("Master");

        	var strSvc 			= "Init";
        	var strUrl 			= "/xbt/adm/sys/RetrieveGeneratorUser.do";
        	var strInDs  		= "";
        	var strOutDs 		= "dsOwer=dsOwer";
        	var strArg 			= "";
        	var strCallBack 	= "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    	= true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로

        	this.gfn_Transaction(strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);

        }

        this.postInit = function()
        {

        	this.cbUsers00.set_value("adm");
            this.ds2Depth.filter("LEVEL == '" + this.cbUsers00.value + "'");

            this.cbUsers01.set_value("test");
            this.edPath00.set_value("test");

        	this.edPath.set_value("kr.or.cssf.bass" + "." + this.edPath00.value);
            this.fn_costText();

        	this.cbUsers.set_value("SCOTT");

        	this.Search_onclick();

        }

        this.fn_costText = function()
        {

        	this.edWorkName.set_value(this.fn_xmlFile2(this.cbUsers01.value));
        	var strWork 	 = (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strGroupName = (this.edWorkName.text).trim();


        	this.edController.set_value(strWork + "Controller.java");
        	this.edService.set_value(strWork + "Service.java");
        	this.edServiceImpl.set_value(strWork + "ServiceImpl.java");
        	this.edDao.set_value(strWork + "DAO.java");
        	this.edRetrieve.set_value(strWork + ".xml");
        	this.edXPlatForm.set_value(strWork + ".xfdl");
        	this.edVo.set_value(strWork+ "VO.java");
        }
        /**********************************************************************
        	04. 콜백함수(후처리)
        ***********************************************************************/
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
        			case "Init":
        				this.postInit();
        				break;
        			case "Search":
        			    this.postSearch();
        			  	break;
        			case "DSearch":
        			    this.postDSearch();
        			  	break;
        			case "Save":
        			    this.postSave();
        				break;
        			case "Insert":
        				this.postInsert();
        				break;
        			case "Delete":
        				this.postDelete();
        				break;
        			default:
        				break;
        		}
        	}
        }
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	return true;
        }



        this.Search_onclick = function(obj,  e)
        {
        	if(!this.preSearch())
        	{
        		return false;
        	}

        	var strSvc 		= "Search";
        	var strUrl 		= "/xbt/adm/sys/RetrieveGeneratorM.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "DS_Master=DS_Master";
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

        }


        this.postSearch = function()
        {

        	//trace(this.DS_Master.saveXML());
        	this.DS_Master_onrowposchanged(this.DS_Master);
        }
        /**********************************************************************
        	05-1. detail 조회 함수 선언
        ***********************************************************************/
        this.DS_Master_onrowposchanged = function(obj, e)
        {

        	if(this.iFind == 1)
        	{
        		this.DSearch_OnClick();
        	}
        	this.iFind = 1;

        }
        /**
         * 기능 : 조회 전 실행
         */
        this.preDSearch = function()
        {
        	return true;
        }


        this.DSearch_OnClick = function()
        {
        	if(!this.preDSearch())
        	{
        	return false;
        	}



        	var strSvc 			= "DSearch";
        	var strUrl 			= "/xbt/adm/sys/RetrieveGeneratorD.do";
        	var strInDs  		= "";
        	var strOutDs 		= "DS_Detail=DS_Detail";
        	var strArg 			= "tabbleName="	+ nexacro.wrapQuote(this.DS_Master.getColumn(this.DS_Master.rowposition,"tableName"));
        		strArg 	   	   += " code="		+ nexacro.wrapQuote(this.cbUsers.value);
        	var strCallBack    	= "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync       	= true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로


        	this.gfn_Transaction(strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);


        }
        /**********************************************************************************************************************
        * 공통으로 사용하는 Function
        ***********************************************************************************************************************/
        /**
        * 첫자 대문자 만들기
        */
        this.fn_xmlFile = function(FileName)
        {
        	var strXmlFile ="";
        	strXmlFile = (FileName.substr(0,1)).toLowerCase() + FileName.substr(1);

        	return strXmlFile;
        }

        this.fn_strColName = function(strCol)
        {
        	var strPCol  	= "";
        	var arrCol	 	= strCol.split("_");
        	var colCount 	= 0;
        	colCount 	= arrCol.length;

        	if(colCount == 0)
        	{
        		strPCol =  strCol;

        	}else
        	{
        		strPCol =  strCol;

        		for(var i=0; i < colCount; i++)
        		{
        			if(i==0)
        			{
        				strPCol = arrCol[i];
        			}else
        			{
        				strPCol +=  (arrCol[i].substr(0,1)).toUpperCase() + (arrCol[i].substr(1)).trim();
        			}
        		}


        	}
        	return strPCol;
        }

        this.PidFileName = function()
        {

        	var strPath 			= ((this.edPath.text).trim()).toLowerCase();
        	var strMixmlFileNm 		= strPath.split(".");
        	var strName 			= "";
        	var strWork 			= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();

        	for(var i = 0; i<strMixmlFileNm.length ; i++)
        	{
        		if(strMixmlFileNm.length < 2)
        		{
        			this.alert("최소한 2레벨은 입력하셔야 합니다.ex)oem.xxx");

        		}else
        		{
        			if(strMixmlFileNm.length==2)
        			{
        				strName = strMixmlFileNm[i].toLowerCase() + (this.edWorkName.text).trim();

        			}else if(strMixmlFileNm.length==3)
        			{
        				if(i == 1)
        				{
        					strName = strMixmlFileNm[i].toLowerCase();

        				}else if(i == 2)
        				{
        					strName += (strMixmlFileNm[i].toUpperCase()).substr(0,1) + strMixmlFileNm[i].substr(1) + (this.edWorkName.text).trim() + ".xml";
        				}
        			}
        		}
        	}

        	return strName;
        }


        this.postDSearch = function()
        {

        	//trace(this.DS_Detail.saveXML());

        	var strTableName 	= this.DS_Master.getColumn(this.DS_Master.rowposition, "tableName");
        	var strWork 	 	= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strGroupName 	= (this.edWorkName.text).trim();

        	this.edController.set_value(strWork + "Controller.java");
        	this.edService.set_value(strWork + "Service.java");
        	this.edServiceImpl.set_value(strWork + "ServiceImpl.java");
        	this.edDao.set_value(strWork + "DAO.java");
        	this.edRetrieve.set_value(strWork + ".xml");
        	this.edXPlatForm.set_value(strWork + ".xfdl");
        	this.edVo.set_value(strWork+ "VO.java");


        	this.fn_taContorller();
        	this.fn_taService();
        	this.fn_taServiceImpl();
        	this.fn_taDao();
        	this.fn_tbXmlquery(strTableName);
        	this.fn_taXOracle(strTableName);
        	this.fn_PidXml();
        	this.fn_taVo();



        }

        /**********************************************************************************************************************
        * 서버 프로세스 Navigation시작
        ***********************************************************************************************************************/
        /**
        * Devon Navigation Create()
        * Contorler /입력/저장/수정/삭제
        */
        this.fn_taContorller = function()
        {
        	var strContoller 	= "";
        	var strGroup     	= (this.edWorkName.text).trim();
        	var strMethod	  	= (this.edWorkName1.text).trim();
        	var strWork 	  	= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strXpName    	= (strWork).trim() + "Controller";
        	var strServiceName  = (strWork).trim() + "Service";
        	var strServiceName1 = this.fn_xmlFile((strWork).trim()) + "Service";
        	var dirPath         = this.gfn_trim(this.cbUsers01.value);

        	var strPath      	= (this.edPath.text).trim();


        	strContoller += "/*------------------------------------------------------------------------------  												\n";
        	strContoller += " * NAME : " + strXpName + ".java                                                                    							\n";
        	strContoller += " * DESC :                                                                                                          			\n";
        	strContoller += " * VER  : V1.0                                                                                                     			\n";
        	strContoller += " * PROJ : 자산형성지원 정보화 구축                                                   										\n";
        	strContoller += " * Copyright 2017 Ready Korea All rights reserved                                                                      		\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *                               MODIFICATION LOG                                                                  			\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *    DATE     AUTHOR                      DESCRIPTION                        													\n";
        	strContoller += " * ----------  ------  ---------------------------------------------------------                                   			\n";
        	strContoller += " * 2017/08/03  jiback(이름)                                                                                         			\n";
        	strContoller += " *------------------------------------------------------------------------------*/                                     		\n";
        	strContoller += "package " + strPath + ".controller;                                                                             			\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import java.util.List;                                                                                                  		\n";
        	strContoller += "import java.util.Map;                                                                                                  		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import javax.servlet.http.HttpServletRequest;                                                                               	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import " + strPath + ".service." + strServiceName + ";                                                        	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import org.apache.commons.logging.Log;                                                                                     	\n";
        	strContoller += "import org.apache.commons.logging.LogFactory;                                                                                 	\n";
        	strContoller += "import org.springframework.beans.factory.annotation.Autowired;                                                                 \n";
        	strContoller += "import org.springframework.stereotype.Controller;                                                                              \n";
        	strContoller += "import org.springframework.ui.Model;                                                                                        	\n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMapping;                                                                 \n";
        	strContoller += "import org.springframework.web.servlet.ModelAndView;                                                                 \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import egovframework.rte.cmmn.ria.nexacro.NexacroConstant;                                                                    	\n";
        	strContoller += "import egovframework.rte.cmmn.ria.nexacro.vo.NexacroObjectDTO;                                                                	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "@Controller                                                                                                            		\n";
        	strContoller += "public class " + strXpName + " {                                                                                   			\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "	 Log logger = LogFactory.getLog(this.getClass());                                                                 					\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /** " + strServiceName +" */                                                                                             	\n";
        	strContoller += "    @Autowired                                                      															\n";
        	strContoller += "    " + strServiceName + " " + strServiceName1 + ";                                                                     		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 제너레이터 마스터 리스트 조회(retrieve" + strWork + ")                                                                 	\n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + dirPath + "/retrieve" + strWork + ".do" + "\"" + ")        								\n";
        	strContoller += "	public ModelAndView retrieve" + strWork + "(NexacroObjectDTO nexaDto, Model model, HttpServletRequest request)throws Exception { \n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroObjectView" + "\"" + ");                                        	\n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			List tranInfo 						 = nexaDto.getTransInfo();                                     					\n";
        	strContoller += "			Map <String, Object> inVar 			 = nexaDto.getInVariableMap();                                         			\n";
        	strContoller += "			Map <String, List<Object>> inDataset = nexaDto.getInDataSetMap();                                  					\n";
        	strContoller += "			Map <String, Object> outVar 		 = nexaDto.getOutVariableMap();                                      			\n";
        	strContoller += "			Map <String, Object> outDataset 	 = nexaDto.getOutDataSetMap();                               					\n";
            strContoller += "		                                                                                                        				\n";
        	strContoller += "			" + strServiceName1 + ".retrieve" + strWork + "(inVar, inDataset, outVar, outDataset);                              \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			outDataset.put(NexacroConstant.TRAN_INFO_DATASET_NAME, tranInfo);                                                   \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, nexaDto.getOutDataSetMap());                                	\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, nexaDto.getOutVariableMap());                          		\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "" + "\"" + ");                                                 \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                              \n";
        	strContoller += "			mav.addObject( NexacroConstant.ERROR_MSG, e.getMessage());                                      				    \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 제너레이터 템플릿 마스터 저장/수정(save" + strWork + ")                                                                 	\n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + dirPath + "/save" + strWork + ".do" + "\"" + ")        								\n";
        	strContoller += "	public ModelAndView save" + strWork + "(NexacroObjectDTO nexaDto, Model model, HttpServletRequest request)throws Exception { \n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroObjectView" + "\"" + ");                                        	\n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			List tranInfo 						 = nexaDto.getTransInfo();                                     					\n";
        	strContoller += "			Map <String, Object> inVar 			 = nexaDto.getInVariableMap();                                         			\n";
        	strContoller += "			Map <String, List<Object>> inDataset = nexaDto.getInDataSetMap();                                  					\n";
        	strContoller += "			Map <String, Object> outVar 		 = nexaDto.getOutVariableMap();                                      			\n";
        	strContoller += "			Map <String, Object> outDataset 	 = nexaDto.getOutDataSetMap();                               					\n";
            strContoller += "		                                                                                                        				\n";
        	strContoller += "			" + strServiceName1 + ".save" + strWork + "(inVar, inDataset, outVar, outDataset);                              \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			outDataset.put(NexacroConstant.TRAN_INFO_DATASET_NAME, tranInfo);                                                   \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, nexaDto.getOutDataSetMap());                                	\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, nexaDto.getOutVariableMap());                          		\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "" + "\"" + ");                                                 \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                              \n";
        	strContoller += "			mav.addObject( NexacroConstant.ERROR_MSG, e.getMessage());                                      				    \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 제너레이터 템플릿 마스터 삭제(delete" + strWork + ")                                                                 	\n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + dirPath + "/delete" + strWork + ".do" + "\"" + ")        								\n";
        	strContoller += "	public ModelAndView delete" + strWork + "(NexacroObjectDTO nexaDto, Model model, HttpServletRequest request)throws Exception { \n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroObjectView" + "\"" + ");                                        	\n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			List tranInfo 						 = nexaDto.getTransInfo();                                     					\n";
        	strContoller += "			Map <String, Object> inVar 			 = nexaDto.getInVariableMap();                                         			\n";
        	strContoller += "			Map <String, List<Object>> inDataset = nexaDto.getInDataSetMap();                                  					\n";
        	strContoller += "			Map <String, Object> outVar 		 = nexaDto.getOutVariableMap();                                      			\n";
        	strContoller += "			Map <String, Object> outDataset 	 = nexaDto.getOutDataSetMap();                               					\n";
            strContoller += "		                                                                                                        				\n";
        	strContoller += "			" + strServiceName1 + ".delete" + strWork + "(inVar, inDataset, outVar, outDataset);                              \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			outDataset.put(NexacroConstant.TRAN_INFO_DATASET_NAME, tranInfo);                                                   \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME, nexaDto.getOutDataSetMap());                                	\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, nexaDto.getOutVariableMap());                          		\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "" + "\"" + ");                                                 \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                              \n";
        	strContoller += "			mav.addObject( NexacroConstant.ERROR_MSG, e.getMessage());                                      				    \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "}                                                                                                               			\n";


        	this.tbMain.tbSub3.taContoller.set_value(strContoller);

        }


        /**********************************************************************************************************************
        * 서버 프로세스 명령어 처리(입력/수정/삭제/저장) Cmd
        ***********************************************************************************************************************/
        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_taService = function()
        {
        	var strService 	= "";
        	var strGroup   	= (this.edWorkName.text).trim();
        	var strMethod	= (this.edWorkName1.text).trim();
        	var strWork 	= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strXpName  	= (strWork).trim() + "Service";
        	var strPath    	= (this.edPath.text).trim();

        	strService += "/*------------------------------------------------------------------------------  								\n";
        	strService += " * NAME : " + strXpName + ".java                                                                    				\n";
        	strService += " * DESC :                                                                                                        \n";
        	strService += " * VER  : V1.0                                                                                                   \n";
        	strService += " * PROJ : 자산형성지원 정보화 구축                                                   							\n";
        	strService += " * Copyright 2017 Ready Korea All rights reserved                                                                \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *                               MODIFICATION LOG                                                                \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *    DATE     AUTHOR                      DESCRIPTION                        									\n";
        	strService += " * ----------  ------  ---------------------------------------------------------                                 \n";
        	strService += " * 2017/08/03  jiback(이름)                                                                                     \n";
        	strService += " *------------------------------------------------------------------------------*/                               \n";
        	strService += "package " + strPath + ".service;                                                                             	\n";
        	strService += "                                                                                                                 \n";
        	strService += "import java.util.List;                                                                                           \n";
        	strService += "import java.util.Map;                                                                                                                 \n";
        	strService += "                                                                                                                 \n";
        	strService += "public interface " + strXpName + " {                                                                            	\n";
        	strService += "	                                                                                                                \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 제너레이터 마스터 리스트(retrieve" + strWork + ")                                                         \n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                             \n";
        	strService += "	void retrieve" + strWork + "(Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,              	\n";
        	strService += "			Map<String, Object> outVar, Map<String, Object> outDataset) throws Exception;              		        \n";
        	strService += "                                                                                                                 \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 템플릿 마스터 저장/수정(save" + strWork + ")                                                              \n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                             \n";
        	strService += "	void save" + strWork + "(Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,              	\n";
        	strService += "			Map<String, Object> outVar, Map<String, Object> outDataset) throws Exception;              		        \n";
        	strService += "                                                                                                                 \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 템플릿 마스터 삭제(delete" + strWork + ")                                                              	\n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                            	\n";
        	strService += "	void delete" + strWork + "(Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,              	\n";
        	strService += "			Map<String, Object> outVar, Map<String, Object> outDataset) throws Exception;              		        \n";
        	strService += "                                                                                                                 \n";
        	strService += "}                                                                                                                \n";


        	this.tbMain.tbSub4.taSarvice.set_value(strService);
        }

        /**
        * Devon SaveCmd Create()
        * 저장 Cmd 자동생성기
        */
        this.fn_taServiceImpl = function()
        {
        	var strServiceImpl 		= "";
        	var strGroup     		= (this.edWorkName.text).trim();
        	var strMethod	 		= (this.edWorkName1.text).trim();
        	var strWork 	 		= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strXpName    		= (strWork).trim() + "ServiceImpl";
        	var strXpServiceName    = (strWork).trim() + "Service";
        	var strXpServiceDAO  	= (strWork).trim() + "DAO";
        	var strXpServiceDAO1    =  this.fn_xmlFile((strWork).trim()) + "DAO";
        	var strXpServiceVO  	= (strWork).trim() + "VO";
        	var strPath      		= (this.edPath.text).trim();
        	var nRowCnt 			= this.DS_Detail.rowcount;
        	var strColName      	= "";
        	var strColPk        	= "";

        	strServiceImpl += " /*------------------------------------------------------------------------------  							\n";
        	strServiceImpl += "  * NAME : " + strXpName + ".java		                                                                   	\n";
        	strServiceImpl += "  * DESC :                                                                                                   \n";
        	strServiceImpl += "  * VER  : V1.0                                                                                              \n";
        	strServiceImpl += "  * PROJ : 자산형성지원 정보화 구축                                                                      	\n";
        	strServiceImpl += "  * Copyright 2017 Ready Korea All rights reserved                                                           \n";
        	strServiceImpl += "  *------------------------------------------------------------------------------                            \n";
        	strServiceImpl += "  *                               MODIFICATION LOG                                                           \n";
        	strServiceImpl += "  *------------------------------------------------------------------------------                            \n";
        	strServiceImpl += "  *    DATE     AUTHOR                      DESCRIPTION                        								\n";
        	strServiceImpl += "  * ----------  ------  ---------------------------------------------------------                            \n";
        	strServiceImpl += "  * 2017/10/11  jiback(이름)                                                                                \n";
        	strServiceImpl += "  *------------------------------------------------------------------------------*/                          \n";
        	strServiceImpl += " package " + strPath + ".service.impl;                                                                       \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " import java.util.List;                                                                                      \n";
        	strServiceImpl += " import java.util.Map;                                                                                       \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " import " + strPath + ".dao." + strXpServiceDAO + ";                                                    \n";
        	strServiceImpl += " import " + strPath + ".service." + strXpServiceName + ";                                               \n";
        	strServiceImpl += " import " + strPath + ".vo." + strXpServiceVO + ";                                                      \n";
        	strServiceImpl += " import lombok.extern.slf4j.Slf4j;                                                                           \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " import org.springframework.beans.factory.annotation.Autowired;                                              \n";
        	strServiceImpl += " import org.springframework.stereotype.Service;                                                              \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " import com.nexacro.xapi.data.DataSet;                                                                       \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                  \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += " @Service                                                                                                    \n";
        	strServiceImpl += " @Slf4j                                                                                                      \n";
        	strServiceImpl += " public class " + strXpName + " extends EgovAbstractServiceImpl implements " + strXpServiceName + " {        \n";
        	strServiceImpl += " 	                                                                                                        \n";
        	strServiceImpl += "     /** " + strXpServiceDAO + " */                                                                          \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += "     @Autowired                                                                                              \n";
        	strServiceImpl += "     " + strXpServiceDAO + " " + strXpServiceDAO1 + ";                                                       \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += "     /**                                                                                                     \n";
        	strServiceImpl += " 	 * 제너레이터 디테일 리스트(retrieve" + strWork + ")                                                 \n";
        	strServiceImpl += " 	 * @param input                                                                                         \n";
        	strServiceImpl += " 	 * @return                                                                                              \n";
        	strServiceImpl += " 	 * @throws LException                                                                                   \n";
        	strServiceImpl += " 	 */                                                                                                     \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += "     public void retrieve" + strWork + "(Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,    \n";
        	strServiceImpl += " 			Map<String, Object> outVar, Map<String, Object> outDataset)                             		\n";
        	strServiceImpl += " 	      throws Exception {                                                                                \n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		" + strXpServiceVO + " paramVO = new " + strXpServiceVO + "();                                                                                               	\n";
        	strServiceImpl += " 		List<?> list = inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                                                                               	\n";
        	strServiceImpl += " 		paramVO = (" + strXpServiceVO + ")list.get(0);                                                                                                	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += "     	List<" + strXpServiceVO + "> records = " + strXpServiceDAO1 + ".retrieve" + strWork + "(paramVO);         \n";
        	strServiceImpl += "     	outDataset.put(" + "\"" + "ds_list" + "\"" + ", records );                                         \n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		return;                                                                                         	\n";
        	strServiceImpl += "     }                                                                                                       \n";
        	strServiceImpl += "                                                                                                             \n";
        	strServiceImpl += "     /**                                                                                                     \n";
        	strServiceImpl += " 	 * 템플릿 마스터 저장/수정(save" + strWork + ")                                                      \n";
        	strServiceImpl += " 	 * @param input                                                                                         \n";
        	strServiceImpl += " 	 * @return                                                                                              \n";
        	strServiceImpl += " 	 * @throws Exception                                                                                    \n";
        	strServiceImpl += " 	 */                                                                                                     \n";
        	strServiceImpl += " 	public void save" + strWork + "(                                                                        \n";
        	strServiceImpl += "     		Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,                    			\n";
        	strServiceImpl += " 			Map<String, Object> outVar, Map<String, Object> outDataset)                             		\n";
        	strServiceImpl += " 	      throws Exception {                                                                                \n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		//조회조건                                      													\n";
        	strServiceImpl += " 		int rowType;                                                                                    	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		List<?> list = inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                                          	\n";
        	strServiceImpl += " 		" + strXpServiceVO + " paramVO = (" + strXpServiceVO + ")list.get(0);                                             	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		List<?> list1 = inDataset.get(" + "\"" + "ds_list" + "\"" + ");                                                        	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		for (int i = 0; i < list1.size(); i++) {                                                         	\n";
        	strServiceImpl += " 			" + strXpServiceVO + " vo = (" + strXpServiceVO + ") list1.get(i);                                         		\n";
        	strServiceImpl += " 			                                                                                        		\n";
        	strServiceImpl += " 			if ( vo.getRowType() == DataSet.ROW_TYPE_INSERTED ) { // 저장                           		\n";
        	strServiceImpl += " 				//pk레코드조회                                                                  			\n";
        	strServiceImpl += " 				/*                                                                 			\n";
        	strServiceImpl += " 				List <" + strXpServiceVO + "> recordKeyValue = " + strXpServiceDAO1 + ".retrieveKeyValue(paramVO);   			\n";
        	strServiceImpl += " 				" + strXpServiceVO + " mapKeyValue = (" + strXpServiceVO + ")list.get(0);                         			\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		 strColPk 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strServiceImpl += " 				outDataset.put(" + "\"" + this.fn_strColName(strColName.toLowerCase()) + "\"" + ", mapKeyValue.get" + this.fn_xmlFile2(this.fn_strColName(strColName.toLowerCase())) + "() );    	        				\n";
        		 }
        	}
        	strServiceImpl += " 				*/                                                                                			\n";
        	strServiceImpl += " 				                                                                                			\n";
        	strServiceImpl += " 				//업무저장                                                                      			\n";
        	strServiceImpl += " 				" + strXpServiceDAO1 + ".insert" + strWork + "(vo);                                              			\n";
        	strServiceImpl += " 			} else if ( vo.getRowType() == DataSet.ROW_TYPE_UPDATED ) { // 수정                     		\n";
        	strServiceImpl += " 				//업무수정                                                                      			\n";
        	strServiceImpl += " 				" + strXpServiceDAO1 + ".update" + strWork + "(vo);                                              			\n";
        	strServiceImpl += " 			}                                                                                       		\n";
        	strServiceImpl += " 		}                                                                                               	\n";
        	strServiceImpl += " 		                                                                                                    \n";
        	strServiceImpl += " 		List<" + strXpServiceVO + "> records = " + strXpServiceDAO1 + ".retrieve" + strWork + "(paramVO);                             \n";
        	strServiceImpl += " 		outDataset.put(" + "\"" + "ds_list" + "\"" + ", records );                                                             \n";
        	strServiceImpl += " 		return;                                                                                             \n";
        	strServiceImpl += " 	}                                                                                                       \n";
        	strServiceImpl += " 	                                                                                                        \n";
        	strServiceImpl += " 	                                                                                                        \n";
        	strServiceImpl += " 	/**                                                                                                     \n";
        	strServiceImpl += " 	 * 템플릿 마스터 삭제(delete" + strWork + ")                                                        		\n";
        	strServiceImpl += " 	 * @param input                                                                                         \n";
        	strServiceImpl += " 	 * @return                                                                                              \n";
        	strServiceImpl += " 	 * @throws Exception                                                                                    \n";
        	strServiceImpl += " 	 */                                                                                                     \n";
        	strServiceImpl += " 	public void delete" + strWork + "(                                                                           \n";
        	strServiceImpl += "     		Map<String, Object> inVar, 	Map<String, List<Object>> inDataset,                                \n";
        	strServiceImpl += " 			Map<String, Object> outVar, Map<String, Object> outDataset)                             		\n";
        	strServiceImpl += " 	      throws Exception {                                                                                \n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		//조회조건                                      													\n";
        	strServiceImpl += " 		int rowType;                                                                                    	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		List<?> list = inDataset.get(" + "\"" + "ds_list" + "\"" + ");                                                          	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		for (int i = 0; i < list.size(); i++) {                                                         	\n";
        	strServiceImpl += " 			" + strXpServiceVO + " vo = (" + strXpServiceVO + ") list.get(i);                                         		\n";
        	strServiceImpl += " 			if (vo.getRowType() == DataSet.ROW_TYPE_DELETED ) {                                     		\n";
        	strServiceImpl += " 				//업무내용삭제                                                                  			\n";
        	strServiceImpl += " 				" + strXpServiceDAO1 + ".delete" + strWork + "(vo);                                              			\n";
        	strServiceImpl += " 			}                                                                                       		\n";
        	strServiceImpl += " 		}                                                                                               	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		return;                                                                                         	\n";
        	strServiceImpl += " 	}                                                                                                       \n";
        	strServiceImpl += " 	                                                                                                        \n";
        	strServiceImpl += " }                                                                                                           \n";

        	this.tbMain.tbSub5.taServiceImpl.set_value(strServiceImpl);

        }

        /**
        * Devon DeleteCmd Create()
        * 삭제 Cmd 자동생성기
        */
        this.fn_taDao = function()
        {
        	var strDao = "";
        	var strGroup     		= (this.edWorkName.text).trim();
        	var strMethod	 		= (this.edWorkName1.text).trim();
        	var strWork 	 		= (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var strXpName    		= (strWork).trim() + "ServiceImpl";
        	var strXpServiceName    = (strWork).trim() + "Service";
        	var strXpServiceDAO  	= (strWork).trim() + "DAO";
        	var strXpServiceVO  	= (strWork).trim() + "VO";
        	var strPath      		= (this.edPath.text).trim();

        	strDao += "/*------------------------------------------------------------------------------  	       \n";
        	strDao += " * NAME : " + strXpServiceDAO + ".java                                                                \n";
        	strDao += " * DESC :                                                                                   \n";
        	strDao += " * VER  : V1.0                                                                              \n";
        	strDao += " * PROJ : 자산형성지원 정보화 구축                                                       \n";
        	strDao += " * Copyright 2017 Ready Korea All rights reserved                                           \n";
        	strDao += " *------------------------------------------------------------------------------            \n";
        	strDao += " *                               MODIFICATION LOG                                           \n";
        	strDao += " *------------------------------------------------------------------------------            \n";
        	strDao += " *    DATE     AUTHOR                      DESCRIPTION                        	           \n";
        	strDao += " * ----------  ------  ---------------------------------------------------------            \n";
        	strDao += " * 2017/10/11  jiback(이름)                                                                \n";
        	strDao += " *------------------------------------------------------------------------------*/          \n";
        	strDao += "package " + strPath + ".dao;                                                           \n";
        	strDao += "                                                                                            \n";
        	strDao += "import java.util.List;                                                                      \n";
        	strDao += "                                                                                            \n";
        	strDao += "import " + strPath + ".vo." + strXpServiceVO + ";                                                \n";
        	strDao += "                                                                                            \n";
        	strDao += "import org.apache.commons.logging.Log;                                                      \n";
        	strDao += "import org.apache.commons.logging.LogFactory;                                               \n";
        	strDao += "import org.mybatis.spring.SqlSessionTemplate;                                               \n";
        	strDao += "import org.springframework.beans.factory.annotation.Autowired;                              \n";
        	strDao += "import org.springframework.stereotype.Repository;                                           \n";
        	strDao += "                                                                                            \n";
        	strDao += "                                                                                            \n";
        	strDao += "@Repository                                                                                 \n";
        	strDao += "public class " + strXpServiceDAO + "{                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "	Log logger = LogFactory.getLog(this.getClass());		                       			   \n";
        	strDao += "                                                                                            \n";
        	strDao += "	@Autowired                                                                                 \n";
        	strDao += "	SqlSessionTemplate sqlSessionTemplate;                                                     \n";
        	strDao += "    	                                                                                       \n";
        	strDao += "	 /**                                                                                       \n";
        	strDao += "	 * 템플릿 마스터 리스트(retrieve" + strWork + ")                                         \n";
        	strDao += "	 * @param input                                                                            \n";
        	strDao += "	 * @return                                                                             	   \n";
        	strDao += "	 * @throws LException                                                                  	   \n";
        	strDao += "	 */                                                                                    	   \n";
        	strDao += "    public List<" + strXpServiceVO + "> retrieve" + strWork + "(" + strXpServiceVO + " vo) throws Exception {            \n";
        	strDao += "                                                                                            \n";
        	strDao += "     	return sqlSessionTemplate.selectList(" + "\"" +  strXpServiceDAO + ".retrieve" + strWork + "\"" + ", vo);  \n";
        	strDao += "    }                                                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "                                                                                            \n";
        	strDao += "    /**                                                                                     \n";
        	strDao += "	 * 템플릿 마스터 키값을 조회(retrieveKeyValue)                                          \n";
        	strDao += "	 * @param input                                                                            \n";
        	strDao += "	 * @return                                                                                 \n";
        	strDao += "	 * @throws LException                                                                      \n";
        	strDao += "	 */                                                                                        \n";
        	strDao += "    public List<" + strXpServiceVO + "> retrieveKeyValue(" + strXpServiceVO + " vo) throws Exception {              \n";
        	strDao += "                                                                                            \n";
        	strDao += "     	return sqlSessionTemplate.selectList(" + "\"" + "" + strXpServiceDAO + ".retrieveKeyValue" + "\"" + ", vo);    \n";
        	strDao += "    }                                                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "                                                                                            \n";
        	strDao += "    /**                                                                                     \n";
        	strDao += "	 * 템플릿 마스터 저장(insert" + strWork + ")                                                  \n";
        	strDao += "	 * @param input                                                                            \n";
        	strDao += "	 * @return                                                                                 \n";
        	strDao += "	 * @throws LException                                                                      \n";
        	strDao += "	 */                                                                                        \n";
        	strDao += "    public int insert" + strWork + "(" + strXpServiceVO + " vo) throws Exception {                           \n";
        	strDao += "                                                                                            \n";
        	strDao += "     	return sqlSessionTemplate.insert(" + "\"" + strXpServiceDAO + ".insert" + strWork +  "\"" + ", vo);        \n";
        	strDao += "    }                                                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "    /**                                                                                     \n";
        	strDao += "	 * 템플릿 마스터 수정(update" + strWork + ")                                                  \n";
        	strDao += "	 * @param input                                                                            \n";
        	strDao += "	 * @return                                                                                 \n";
        	strDao += "	 * @throws LException                                                                      \n";
        	strDao += "	 */                                                                                        \n";
        	strDao += "    public int update" + strWork + "(" + strXpServiceVO + " vo) throws Exception {                           \n";
        	strDao += "                                                                                            \n";
        	strDao += "     	return sqlSessionTemplate.update(" + "\"" + strXpServiceDAO + ".update" + strWork +  "\"" + ", vo);        \n";
        	strDao += "    }                                                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "    /**                                                                                     \n";
        	strDao += "	 *  템플릿 마스터 삭제(delete" + strWork + ")                                                 \n";
        	strDao += "	 * @param input                                                                            \n";
        	strDao += "	 * @return                                                                                 \n";
        	strDao += "	 * @throws LException                                                                      \n";
        	strDao += "	 */                                                                                        \n";
        	strDao += "    public int delete" + strWork + "(" + strXpServiceVO + " vo) throws Exception {                           \n";
        	strDao += "                                                                                            \n";
        	strDao += "     	return sqlSessionTemplate.delete(" + "\"" +  strXpServiceDAO + ".delete" + strWork + "\"" + ", vo);        \n";
        	strDao += "    }                                                                                       \n";
        	strDao += "                                                                                            \n";
        	strDao += "}                                                                                           \n";

        	this.tbMain.tbSub6.taDao.set_value(strDao);

        }

        /*===============================================================================================================================*/
        this.fn_tbXmlquery = function(strTableName)
        {
        	var strGroup     	= this.gfn_trim(this.edWorkName.text);
        	var strWork 	 	= this.gfn_trim(this.edWorkName.text) + this.gfn_trim(this.edWorkName1.text);
        	var strXpServiceDao = this.gfn_trim(strWork) + "DAO";
        	var strPath 		= this.gfn_trim(this.edPath.text);
        	var idx   			= 0;
            var nRowCnt 		= this.DS_Detail.rowcount;
        	var strMetaData 	= "";
        	var strColName  	= "";
        	var strColPk    	= "";
        	var strDataLength 	= "";
        	var	strColType    	= "";
        	var strColComent	= "";
        	var strDto       	= this.gfn_trim((this.edVo.value)).substr(0,this.gfn_trim((this.edVo.value)).indexOf("."));

        	this.tbMain.tbSub7.taXmlquery.set_value("");

        	strMetaData += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>																			\n";
        	strMetaData += "<!DOCTYPE mapper PUBLIC  "+ "\"" + "-//mybatis.org//DTD SQL Mapper 3.0//EN" + "\" " + "\"" + "http://mybatis.org/dtd/mybatis-3-mapper.dtd" + "\"" + ">		\n";
        	strMetaData += "<mapper namespace=" + "\"" + strXpServiceDao + "\"" + ">																											\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 조회(입력) -->								\n";
        	strMetaData += "\t" + "<select id="  + "\"" +"retrieve"  + strWork + "\""  + " parameterType=" + "\"" + strDto + "\"" + " " +  "resultType=" + "\""  + strDto + "\"" + ">                    									\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                													\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "SELECT                                                  											\n";
        	strMetaData += "\t"	+ "\t" + "\t" +  "       " + "'0' AS chk" + "/*".padLeft((27-"chk".length)," ") + "chk" + "*/        		\n";

        	 for (idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));
        		strMetaData += "\t"	+ "\t" + "\t" +  "     , A." + strColName +  "/*".padLeft((30-(strColName.toLowerCase()).length)," ") + strColComent + "*/        \n";
        		//strMetaData += "\t"	+ "\t" + "\t" +  "     , A." + strColName + " ".padLeft((35-strColName.length)," ") + "/*".padLeft((30-this.fn_strColName(strColName.toLowerCase()).length)," ") + strColComent + "*/        \n";
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + "FROM " + strTableName + " A                                           								 \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "WHERE 1=1                                             												 \n";
        	/*
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		 strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		 if( (strColPk).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #" + strColName.toLowerCase() + "#" + "       \n";
        		 }
        	}
        	*/
         	strMetaData += "\t" + "\t" + "]]" +">                                                      												 \n";
        	/*-------------------------------------------------------------------*/
        	var pkRow = this.DS_Detail.findRow("colPk","Y");
        	if(pkRow >-1)
        	{
        		for (idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        			 strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        			 if(this.gfn_trim(strColPk).length > 0)
        			 {
        				strMetaData += "\t"	+ "\t" +  "<if test=" + "\"" + this.fn_strColName(strColName.toLowerCase()) +" != null and "+ this.fn_strColName(strColName.toLowerCase()) + " != ''" +"\"" +  ">      \n";
        		    	strMetaData += "\t"	+ "\t" + "\t" + "<![CDATA[                                         																						\n";
        				strMetaData += "\t"	+ "\t" + "\t" +"\t" +  "AND A." + strColName +" = " + "#{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "                     						\n";
        				strMetaData += "\t"	+ "\t" + "\t" + "]]" + ">                                           																					\n";
        				strMetaData += "\t"	+ "\t" + "</if>	                                                    																				\n";
        			 }

        		}

        	}

        	strMetaData += "\n";
        	strMetaData += "\t" + "</select> 	                                                        													\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 유니크한 키를 조회 -->								\n";
        	strMetaData += "\t" + "<select id="  + "\"" + "retrieve"  + "KeyValue"  + "\""  + " parameterType=" + "\"" + strDto + "\"" + " " +  "resultType=" + "\"" +  "String" + "\"" + "> \n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                													\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "SELECT                                                  											\n";
         	strMetaData += "\t"	+ "\t" + "\t" + "\t" + "LPAD(NVL(MAX(TO_NUMBER(code))+1,'1'),5,'0') AS keyCode        								       \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "FROM " + strTableName + " A                                            								 \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "WHERE 1=1                                             												 \n";

        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		 strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND A." + strColName + " = #{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "       \n";
        		 }
        	}

        	strMetaData += "\t" + "\t" + "]]" +">                                                      												 \n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "</select> 	                                                        													\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 데이타 저장(입력) -->								\n";
        	strMetaData += "\t" + "<insert id=" + "\"" + "insert" + strWork +  "\"" + " parameterType=" + "\"" +  strDto + "\"" + " >                                          							\n";
        	strMetaData += "\t"	+ "\t" + "<![CDATA[                                                																\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "INSERT INTO " + strTableName + "                                       										\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "(                                       																		\n";
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		if(idx == 0)
        		{
        			//strMetaData += "\t"	+ "\t" + "\t" +  "       " + strColName + "                                       									\n";
        			strMetaData += "\t"	+ "\t" + "\t" +  "       " + strColName + "/*".padLeft((100-strColName.length)," ") +  this.gfn_trim(strColComent) + "*/                  \n";
        		}else
        		{
        			//strMetaData += "\t"	+ "\t" + "\t" +  "     , " + strColName + "                                      									\n";
        			strMetaData += "\t"	+ "\t" + "\t" +  "     , " + strColName + "/*".padLeft((100-strColName.length)," ") +  this.gfn_trim(strColComent) + "*/                   \n";
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + ")VALUES                                                  														\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "(                                                        														\n";

        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "       SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "       #{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "                                   \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "     , SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "     , #{" +  this.fn_strColName(strColName.toLowerCase()) + "}" + "                                   \n";
        			}
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + ")	                                                      														\n";
        	strMetaData += "\t"	+ "\t" + "]]" +">                                    																			\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "</insert> 																													\n";
        	/*-------------------------------------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 수정(입력) -->								\n";
        	strMetaData += "\t" + "<update id=" + "\"" + "update" + strWork + "\"" + " parameterType=" + "\"" + strDto + "\"" + " > \n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                																\n";
        	strMetaData += "\t" + "\t" + "\t" + "UPDATE " + strTableName + "                                													\n";
        	strMetaData += "\t" + "\t" + "\t" + "SET                                                      														\n";
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "       " + strColName + "  = ".padLeft((34-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((62-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "       " + strColName + " = #{".padLeft((40-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "/*".padLeft((59-strColName.length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "     , " + strColName + "  = ".padLeft((34-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((62-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "     , " + strColName + " = #{".padLeft((40-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "/*".padLeft((59-strColName.length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}
        	}
        	strMetaData += "\t" + "\t" + "\t" + "WHERE 1=1                                                   						                        \n";
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk = this.DS_Detail.getColumn(idx, "colPk");
        		 if(this.gfn_trim(strColPk).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "        		\n";
        		 }
        	}
        	strMetaData += "\t" + "\t" + "]]" +">  	                                   							                            				\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "</update>                                                           													\n";
        				/*--------------------------MERGE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 머지(입력) -->								                     \n";
        	strMetaData += "\t" + "<update id=" + "\"" + "merge" + strWork + "\"" + " parameterType=" + "\"" + strDto + "\"" + " > \n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                				 \n";
        	strMetaData += "\t" + "\t" + "\t" + "MERGE INTO " + strTableName + " A                               \n";
        	strMetaData += "\t" + "\t" + "\t" + "     USING DUAL                                                 \n";
        	strMetaData += "\t" + "\t" + "\t" + "        ON (                                                 	 \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 	= this.DS_Detail.getColumn(idx, "colPk");
        		 if((strColPk.trim()).length > 0)
        		 {
        			if(idx == 0)
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "                  A." + strColName + " = #{".padLeft((18-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "        		\n";

        			} else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              AND A." + strColName + " = #{".padLeft((18-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "        		\n";
        			}


        		 }
        	}
        	strMetaData += "\t" + "\t" + "\t" + "           )                                                 	 \n";
        	strMetaData += "\t" + "\t" + "\t" + "      WHEN MATCHED THEN                                                    \n";
        	strMetaData += "\t" + "\t" + "\t" + "           UPDATE SET                               													\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		strColPk 	    = this.DS_Detail.getColumn(idx, "colPk");
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "                A." + strColName + " = ".padLeft((18-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((22-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "                A." + strColName + " = #{".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              , A." + strColName + " = ".padLeft((18-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((22-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              , A." + strColName + " = #{".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "}" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}
        	}
        	strMetaData += "\t" + "\t" + "\t" + "      WHEN NOT MATCHED THEN                                                  \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "           INSERT                                        					  \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "           (                                       									  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		if(idx == 0)
        		{
        			strMetaData += "\t"	+ "\t" + "\t" +  "                A." + strColName + "                 \n";
        		}else
        		{
        			strMetaData += "\t"	+ "\t" + "\t" +  "              , A." + strColName + "                 \n";
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + "           )VALUES                                                  														\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "           (                                                        														\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "                SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "                #{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "                                   \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "              , SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "              , #{" +  this.fn_strColName(strColName.toLowerCase()) + "}" + "                                   \n";
        			}
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + "           )	                                                      														\n";
        	strMetaData += "\t" + "\t" + "]]" +">  	                                   							                            				\n";
        	strMetaData += "\t" + "</update>                                                           													\n";

        	/*-------------------------------------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 삭제(입력) -->								\n";
        	strMetaData += "\t" + "<delete id=" + "\"" + "delete" + strWork + "\"" + " parameterType=" + "\"" + strDto + "\"" + " > \n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                           												\n";
        	strMetaData += "\t" + "\t" + "\t" + "DELETE FROM " + strTableName + "                                                  							\n";
        	strMetaData += "\t" + "\t" + "\t" + "WHERE 1=1                              																	\n";
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk = this.DS_Detail.getColumn(idx, "colPk");
        		 if(this.gfn_trim(strColPk).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #{" + this.fn_strColName(strColName.toLowerCase()) + "}" + "        		\n";
        		 }
        	}
        	strMetaData += "\t" + "\t" + "]]" +">                                                															\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "</delete>	                                                          													\n";
        	strMetaData += "</mapper>                                                                 													\n";
            strMetaData += "                                                                 																\n";

            strMetaData += "------------------------------------파싱데이타 셋(ds에 Contents속성에 반듯이 넣어주세요. -------------------------------	\n";


            strMetaData += "                                                                 																\n";
        	strMetaData += "<ColumnInfo>                                                                 														\n";
        	strMetaData += "\t"	+  "<Column id=" + "\"" +  "chk" + "\"" + " type=" + "\"" + "STRING" + "\"" + " size=" + "\"" + "1" + "\"" + "/>\n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strDataLength 	= this.DS_Detail.getColumn(idx, "dataLength");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        strDsType = "STRING";
                        break;
                    case "CHAR":
        				strDsType = "STRING";
        				break;
                    case "DATE":
        				strDsType = "STRING";
        				break;
                    case "NUMBER":
        				strDsType = "BIGDECIMAL";
        				break;
                    case "INTEGER":
        				strDsType = "INT";
        				break;
                    case "BLOB":
                        strDsType = "BLOB";
                        break;
                    default:
                        strDsType = "STRING";
                        break;
                }

        		strMetaData += "\t"	+  "<Column id=" + "\"" +  this.fn_strColName(strColName.toLowerCase()) + "\"" + " type=" + "\"" + strDsType + "\"" + " size=" + "\"" + strDataLength + "\"" + "/>\n";
        	}
        	strMetaData += "</ColumnInfo>                                                                 														\n";
        	strMetaData += "                                                                 														\n";
            strMetaData += "                                                                 														\n";
            strMetaData += "------------------------------------그리드 데이타 셋 디자인 입니다.   ------------------------------------------\n";
            strMetaData += "                                                                 														\n";
        	strMetaData += "<Grid id=" + "\"" + "gdMaster" + "\"" + " taborder=" + "\"" + "1" + "\"" + " binddataset=" + "\"" + "ds_list" + "\"" + " ";
        	strMetaData += "autoenter=" + "\"" + "select" + "\"" + " useinputpanel=" + "\"" + "false" + "\"" + " autofittype=" + "\"" + "none" + "\"" + " ";
        	strMetaData += "onheadclick=" + "\"" + "gdMaster_onheadclick" + "\"" + " onheaddblclick=" + "\"" + "gdMaster_onheaddblclick" + "\"" + " ";
        	strMetaData += "position=" + "\"" + "absolute 9 75 1045 580" + "\"" + " left=" + "\"" + "0" + "\"" + " top=" + "\"" + "78" + "\"" + " ";
        	strMetaData += "bottom=" + "\"" + "45" + "\"" + " right=" + "\"" + "0" + "\"" + "> \n";
        	strMetaData += "  <Formats>                                                                                                                                                                                                                                                                                                                                                  \n";
        	strMetaData += "    <Format id=" + "\"" + "default" + "\"" + ">                                                                                                                                                                                                                                                                                                              \n";
        	strMetaData += "      <Columns>                                                                                                                                                                                                                                                                                                                                              \n";
        	strMetaData += "        <Col size=" + "\"" + "40" + "\"" + "/>                                                                                                                                                                                                                                                                                                            \n";
        	strMetaData += "        <Col size=" + "\"" + "40" + "\"" + "/>                                                                                                                                                                                                                                                                                                            \n";
        	for (var idx = 0; idx < nRowCnt; idx++ )
            {
        		strMetaData += "        <Col size=" + "\"" + "100" + "\"" + "/>                                                                                                                                                                             \n";
        	}
        	strMetaData += "      </Columns>                                                                                                                                                                                                                                                                                                                                             \n";
        	strMetaData += "      <Rows>                                                                                                                                                                                                                                                                                                                                                 \n";
        	strMetaData += "        <Row size=" + "\"" + "30" + "\"" + " band=" + "\"" + "head" + "\"" + "/>                                                                                                                                                                                                                                                                             \n";
        	strMetaData += "        <Row size=" + "\"" + "30" + "\"" + "/>                                                                                                                                                                                                                                                                                                               \n";
        	strMetaData += "      </Rows>                                                                                                                                                                                                                                                                                                                                                \n";
        	strMetaData += "      <Band id=" + "\"" + "head" + "\"" + ">                                                                                                                                                                                                                                                                                                                 \n";
        	strMetaData += "        <Cell displaytype=" + "\"" + "normal" + "\"" + " text=" + "\"" + "No." + "\"" + "/>                                                                                                                                                                                                                                                                  \n";
        	strMetaData += "        <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "checkbox" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + "/>                                                                                                                                                                                                                         \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strHeadName   	= this.DS_Detail.getColumn(idx, "comments");
        		strMetaData += "        <Cell col=" + "\"" + (idx+2).toString() + "\"" + " disptype=" + "\"" + "normal" + "\"" + " text=" + "\"" + this.gfn_trim(strHeadName).toLowerCase() + "\"" + "/>  \n";

        	}
        	strMetaData += "      </Band>                                                                                                                                                                                                                                                                                                                                                \n";
        	strMetaData += "      <Band id=" + "\"" + "body" + "\"" + ">                                                                                                                                                                                                                                                                                                                 \n";
        	strMetaData += "        <Cell displaytype=" + "\"" + "normal" + "\"" + " text=" + "\"" + "expr:currow+1" + "\"" + " editlengthunit=" + "\"" + "utf8" + "\"" + "/>                                                                                                                                                                                                            \n";
        	strMetaData += "        <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "checkbox" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + " text=" + "\"" + "bind:chk" + "\"" + " editlimit=" + "\"" + "1" + "\"" + " editlengthunit=" + "\"" + "utf8" + "\"" + "/>                                                                                                   \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		strDataLength 	= this.DS_Detail.getColumn(idx, "dataLength");

        		var strDsType;
        		var strAlignSize;
        		var strEType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        strDsType = "text";
                        strEType  = "text";
                        strAlignSize = "left";
                        break;
                    case "CHAR":
        				strDsType = "text";
        				strEType  = "text";
        				strAlignSize = "center";
        				break;
                    case "DATE":
        				strDsType = "text";
        				strEType  = "text";
        				strAlignSize = "center";
        				break;
                    case "NUMBER":
        				strDsType = "number";
        				strEType  = "mask";
        				strAlignSize = "right";
        				break;
                    case "INTEGER":
        				strDsType = "number";
        				strEType  = "mask";
        				strAlignSize = "right";
        				break;
                    case "BLOB":
                        strDsType = "text";
                        strEType  = "text";
                        strAlignSize = "left";
                        break;
                    default:
                        strDsType = "text";
                        strEType  = "text";
                        strAlignSize = "center";
                        break;
                }
        		if(strDsType == "date")
        		{
        			strMetaData += "        <Cell col=" + "\"" + (idx+2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " style=" + "\"" + "align:" + this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.fn_strColName(strColName.toLowerCase()) + "\"" + " editlimit=" + "\"" + strDataLength + "\"" + " editlengthunit=" + "\"" + "utf8" + "\""+ " calendardisplaynulltype=" + "\"" + "none" + "\"" + "/>  \n";

        		}else
        		{
        			strMetaData += "        <Cell col=" + "\"" + (idx+2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " style=" + "\"" + "align:" + this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.fn_strColName(strColName.toLowerCase()) + "\"" + " editlimit=" + "\"" + strDataLength + "\"" + " editlengthunit=" + "\"" + "utf8" + "\"" + "/>  \n";
        		}
        	}strMetaData += "      </Band>                                                                                                                                                                                                                                                                                                                                                \n";
        	strMetaData += "    </Format>                                                                                                                                                                                                                                                                                                                                                \n";
        	strMetaData += "  </Formats>                                                                                                                                                                                                                                                                                                                                                 \n";
        	strMetaData += "</Grid>                                                                                                                                                                                                                                                                                                                                                      \n";
        	strMetaData += "                                                                 														\n";
        	strMetaData += "------------------------------------salMap 인터페이스(sqlSession-config.xml 등록해주세요).   ------------------------------------------\n";
        	strMetaData += "\n";

        	strMetaData += "<package name=" + "\"" + "kr.or.cssf.bass." + this.cbUsers01.value + ".vo" + "\"" + "/> \n";

        	this.tbMain.tbSub7.taXmlquery.set_value(strMetaData);

        }


        /**
        	테이블 크레이트를 만든다
         */
        this.fn_taXOracle = function(strTableName)
        {
        	this.tbMain.tbSub8.taXOracle.set_value("");
        	var strBlank   			= "                                                         ";
            var strXOracle 			= "";
            var strColLine 			= "";
            var strComent 			= "";
            var strSqData  			= "";
            var strSqData1  		= "";
            var strSqData2  		= "";
            var strSqData3  		= "";
            var DsType 				= "";
            var strTabspace 		= "";
            var strTabIndex 		="";

            var strColName   		= "";
            var strColType   		= "";
            var strColNull   		= "";
            var strColDef    		= "";
            var strColComent 		= "";
            var strDataType  		= "";
            var strDataLength 		= "";

            var strConstraint 		= "";
            var strConstraint1 		= "";

            var idx   = 0;
            var nRowCnt = this.DS_Detail.rowcount;

            strXOracle += "DROP TABLE " 			+  strTableName + ";\n\n";
            strXOracle += "CREATE TABLE " 			+  strTableName + "(\n";
            strComent  += "COMMENT ON TABLE " 		+  strTableName + " IS '" +
            this.DS_Master.getColumn(this.DS_Master.rowposition, "comments") + "';\n";

        	var chkFalg = this.DS_Detail.findRow("colPk","Y");

            for(var idx = 0; idx < nRowCnt; idx++)
            {
                strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
                strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "vwDataType"));
                strColNull   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "colNull"));
                strColPk     	= this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));
                strColDef    	= this.gfn_trim(this.DS_Detail.getColumn(idx, "colDef"));
                strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));
                strDataType  	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
                strDataLength 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataLength"));

                if ( this.gfn_trim(strColDef).length != 0)
                {
                    strColDef = " DEFAULT " + strColDef;
                }
                if(chkFalg > -1)
                {
                	if(idx == (nRowCnt-1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";

        			}else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";
        			}
                }else
                {

        			if(idx == (nRowCnt-1))
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef;

        			}else
        			{
        				strColLine = "  " + strColName + " " + strColType + " " + strColNull + strColDef + ",";

        			}
                }

                strColLine += strBlank.substr( 0, 50 - strColLine.length);

                strXOracle += strColLine + " -- " + strColComent + "\n";

                strComent +=  "COMMENT ON COLUMN " + strTableName + "." + strColName + " IS '" + strColComent + "';\n";

                if ( (this.gfn_trim(strColPk)).length != 0)
                {

                    if (strConstraint == "")
                    {
                        strConstraint += strColName;
                        strConstraint1 += "\t  " + strColName +" ASC \n";
                    }
                    else
                    {
                        strConstraint += ", " + strColName;
                        strConstraint1 += "\t, " + strColName+" ASC \n";
                    }
                }


            } //END FOR

            if ((strConstraint.trim()).length != 0)
            {
                strXOracle += "  CONSTRAINT PK_" + strTableName + " PRIMARY KEY (" + strConstraint + ")\n";
            }

            strXOracle += ");";

            strSqData += "SELECT                                                  														\n";

            for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));
        		if(idx == 0)
        		{
        			strSqData += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "                                       										\n";
        		}else
        		{
        			strSqData += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "                                      										\n";
        		}
        	}
        	strSqData += "FROM " + strTableName + "                                             											\n";
        	strSqData += "WHERE 1=1";
        	var chk = this.DS_Detail.findRow("colPk","Y");

        	if(chk < 0)
        	{
        		strSqData += ";";

        	}else
        	{
        		strSqData += "\n";
        	}
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "colPk");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		 if((this.gfn_trim(strColPk)).length > 0)
        		 {
        			strSqData += "-- AND " + strColName + " = @".padLeft((30-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "--".padLeft((15-strColName.length)," ") + strColComent + "        					\n";
        		 }
        	}
        	if(chk > -1)
        	{
        		strSqData += ";";

        	}
        // 	====================sql 입력 쿼리 =========================================//
        	strSqData1 += "INSERT INTO " + strTableName + "                                       										\n";
        	strSqData1 += "(                                       																		\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));

        		if(idx == 0)
        		{
        			strSqData1 += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "                                       										\n";

        		}else
        		{
        			strSqData1 += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "                                      										\n";
        		}
        	}
        	strSqData1 += ")VALUES                                                  														\n";
        	strSqData1 += "(                                                        														\n";
        	for(var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));

        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        DsType = "";
                        break;
                    case "CHAR":
        				DsType = "";
        				break;
                    case "DATE":
        				DsType = "SYSDATE";
        				break;
                    case "NUMBER":
        				DsType = "0";
        				break;
                    case "INTEGER":
        				DsType = "0";
        				break;
                    case "BLOB":
                        DsType = "";
                        break;
                    default:
                        DsType = "";
                        break;
                }


        		if(idx == 0)
        		{
        			strSqData1 += "       " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.fn_strColName(strColName.toLowerCase()) + "                                       		\n";

        		}else
        		{
        			strSqData1 += "     , " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.fn_strColName(strColName.toLowerCase()) + "                                      		\n";
        		}

        	}
        	strSqData1 += ");	                                                      														\n";

           // ====================sql 수정 쿼리 =========================================//
            strSqData3 += "UPDATE " + strTableName + "                                													\n";
        	strSqData3 += "SET                                                      														\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));

        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                        DsType = "";
                        break;
                    case "CHAR":
        				DsType = "";
        				break;
                    case "DATE":
        				DsType = "SYSDATE";
        				break;
                    case "NUMBER":
        				DsType = "0";
        				break;
                    case "INTEGER":
        				DsType = "0";
        				break;
                    case "BLOB":
                        DsType = "";
                        break;
                    default:
                        DsType = "";
                        break;
                }

        		if(idx == 0)
        		{
        			strSqData3 += "       " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.fn_strColName(strColName.toLowerCase()) + strColComent + "                         \n";
        		}else
        		{
        			strSqData3 += "     , " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.fn_strColName(strColName.toLowerCase()) + strColComent +  "                         \n";
        		}
        	}
        	strSqData3 += "WHERE 1=1                                                   						                            \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "colPk");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData3 +="AND " + strColName + " = '' --@".padLeft((15-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "--".padLeft((15-strColName.length)," ") + strColComent + "        					\n";
        		 }
        	}
            strSqData3 += ";";


          //  ====================sql 삭제 쿼리 =========================================//
            strSqData2 += "DELETE FROM " + strTableName + "                                                  								\n";
        	strSqData2 += "WHERE 1=1                              																		\n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "colPk");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData2 +="AND " + strColName + " = '' --".padLeft((15-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "--".padLeft((15-strColName.length)," ") + strColComent + "        					\n";
        		 }
        	}
            strSqData2 += ";";

            this.tbMain.tbSub8.taXOracle.set_value(strXOracle + "\n\n" + strTabspace + "\n\n" + strComent + "\n\n" + strTabIndex + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 조회 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 입력 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData1 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 수정 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData3 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 삭제 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData2 + "\n\n");
        }


        this.fn_PidXml = function()
        {
        	var strPidxml = "";
            var strValModel = (this.edPath00.text).trim();
        	var strPath =  (this.edPath.text).trim();
        	var strWork =  (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var RstrWork =  strValModel + "/retrieve" + (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var SstrWork =  strValModel + "/save" + (this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var DstrWork =  strValModel + "/delete" +(this.edWorkName.text).trim() + (this.edWorkName1.text).trim();
        	var fullPath = strPath + ".vo." + strWork + "VO";


        	this.tbMain.tbSub9.taPID.set_value("");
        	var objDate = new Date();
        	var nYear   = objDate.getFullYear();
        	var nMonth  = objDate.getMonth()+1;
        	var nDay 	= objDate.getDate();

        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "* FormID(화면   ID명): SingleTamplate.xfdl(싱클처리 템풀릿 단일처리)                                                                                                                                                                           \n";
        	strPidxml += "* 작 성			일 명: jiback                                                                                                                                                                                                        \n";
        	strPidxml += "* 작 성	    	일 자: "+ nYear + "/" +nMonth + "/" + nDay + "                                                                                                                                                                                                            \n";
        	strPidxml += "* 변 경     	일 자:                                                                                                                                                                                                                       \n";
        	strPidxml += "* 변 경			자 명:                                                                                                                                                                                                               \n";
        	strPidxml += "* 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술                                                                                                                                                                                \n";
        	strPidxml += "*/                                                                                                                                                                                                                                             \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	01. 전처리 공통 함수 선언                                                                                                                                                                                                                    \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	02. 폼 변수 정의                                                                                                                                                                                                                             \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	03. 폼 로드 및 닫을때(폼이 포커스 갈때)                                                                                                                                                                                                      \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 폼 로드 완료후 초기값 Setting                                                                                                                                                                                                        \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.form_onload = function(obj:Form, e:nexacro.InitEventInfo)                                                                                                                                                                                 \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	this.fn_commCode();	                                                                                                                                                                                                                     \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 폼언 로드(닫기전 셋팅)  Setting                                                                                                                                                                                                      \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.form_onclose = function(obj:Form, e:nexacro.CloseEventInfo)                                                                                                                                                                               \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	04. 공통 코드 및 콤보 데이타 조회                                                                                                                                                                                                            \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "this.fn_commCode = function()                                                                                                                                                                                                                  \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	var CommCodeParam =	[                                                                                                                                                                                                                    \n";
        	strPidxml += "		{cType : " + "\"" + "01" + "\"" + ", cId : " + "\"" + "CM0001" + "\"" + ",  objId : " + "\"" + "ds_bank" + "\"" + ",  selectType : " + "\"" + "A" + "\"" + ", 	useYn: " + "\"" + "" + "\"" + "},		// 은행      \n";
        	strPidxml += "		{cType : " + "\"" + "02" + "\"" + ", cId : " + "\"" + "" + "\"" + ",  		objId : " + "\"" + "ds_gu" + "\"" + ",    selectType : " + "\"" + "" + "\"" + ", 	useYn: " + "\"" + "" + "\"" + "},                            \n";
        	strPidxml += "		{cType : " + "\"" + "03" + "\"" + ", cId : " + "\"" + "" + "\"" + ",  		objId : " + "\"" + "ds_sarye" + "\"" + ", selectType : " + "\"" + "" + "\"" + ", 	useYn: " + "\"" + "" + "\"" + "},                            \n";
        	strPidxml += "		{cType : " + "\"" + "04" + "\"" + ", cId : " + "\"" + "" + "\"" + ",  		objId : " + "\"" + "ds_goods" + "\"" + ", selectType : " + "\"" + "" + "\"" + ", 	useYn: " + "\"" + "" + "\"" + "}                             \n";
        	strPidxml += "	];                                                                                                                                                                                                                                           \n";
        	strPidxml += "							                                                                                                                                                                                             \n";
        	strPidxml += "	this.gfn_setInitForm(this, CommCodeParam);			                                                                                                                                                                             \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 공통코드 및 기본코드 후처리                                                                                                                                                                                                          \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.fn_afterOnload = function()                                                                                                                                                                                                               \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	//첫번째행을 셋팅 한다.                                                                                                                                                                                                                      \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	/* 콤보박스를 자동으로 셋팅한다.                                                                                                                                                                                                             \n";
        	strPidxml += "	this.div_search.cmb_regProd.set_index(0);                                                                                                                                                                                                    \n";
        	strPidxml += "	this.div_search.cmb_tranRst.set_index(0);                                                                                                                                                                                                    \n";
        	strPidxml += "	this.div_search.cmb_rsrvmeny.set_index(0);                                                                                                                                                                                                   \n";
        	strPidxml += "	this.div_search.cmb_add.set_index(0);                                                                                                                                                                                                        \n";
        	strPidxml += "	*/                                                                                                                                                                                                                                           \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	this.div_search.btSearch.click();                                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 콜백함수(후처리)                                                                                                                                                                                                                     \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)                                                                                                                                                                                      \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(nErrorCode != 0)                                                                                                                                                                                                                          \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		trace(sErrorMsg);                                                                                                                                                                                                                    \n";
        	strPidxml += "		this.alert(sErrorMsg);                                                                                                                                                                                                               \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}else                                                                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		/*sSvcId (Transaction Id)*/                                                                                                                                                                                                          \n";
        	strPidxml += "		switch(sSvcId)                                                                                                                                                                                                                       \n";
        	strPidxml += "		{                                                                                                                                                                                                                                    \n";
        	strPidxml += "			case " + "\"" + "Search" + "\"" + ":                                                                                                                                                                                         \n";
        	strPidxml += "			    this.postSearch();                                                                                                                                                                                                       \n";
        	strPidxml += "			  	break;                                                                                                                                                                                                               \n";
        	strPidxml += "			case " + "\"" + "Save" + "\"" + ":                                                                                                                                                                                           \n";
        	strPidxml += "			    this.postSave();                                                                                                                                                                                                         \n";
        	strPidxml += "				break;                                                                                                                                                                                                               \n";
        	strPidxml += "			case " + "\"" + "Insert" + "\"" + ":                                                                                                                                                                                         \n";
        	strPidxml += "				this.postInsert();                                                                                                                                                                                                   \n";
        	strPidxml += "				break;                                                                                                                                                                                                               \n";
        	strPidxml += "			case " + "\"" + "Delete" + "\"" + ":                                                                                                                                                                                         \n";
        	strPidxml += "				this.postDelete();                                                                                                                                                                                                   \n";
        	strPidxml += "				break;                                                                                                                                                                                                               \n";
        	strPidxml += "			default:                                                                                                                                                                                                                     \n";
        	strPidxml += "				break;                                                                                                                                                                                                               \n";
        	strPidxml += "		}                                                                                                                                                                                                                                    \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	05. 조회 함수 선언(마스터 함수)                                                                                                                                                                                                              \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 조회 전 실행                                                                                                                                                                                                                         \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.preSearch = function()                                                                                                                                                                                                                    \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	// 조회조건 셋팅                                                                                                                                                                                                                             \n";
        	strPidxml += "	return true;                                                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 마스터 조회 실행                                                                                                                                                                                                                     \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.btSearch_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                        \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(!this.preSearch())                                                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "	var sSvcID   	  = " + "\"" + "Search" + "\"" + ";  			                                                                                                                                                                     \n";
        	strPidxml += "	var sUrl     	  = " + "\"" +  RstrWork + "\"" + "; 	                                                                                                                                                                     \n";
        	strPidxml += "	var sInDataset    = " + "\"" + "ds_input=ds_input" + "\"" + ";	                                                                                                                                                                             \n";
        	strPidxml += "	var sOutDataset   = " + "\"" + "ds_list=ds_list" + "\"" + ";                                                                                                                                                                                 \n";
        	strPidxml += "	var sArg	      = " + "\"" + "ds_input=" + fullPath + "\"" + " + " + "\"" + " " + "\"" + ";                                                                                                                     \n";
        	strPidxml += "		sArg         += " + "\"" + "ds_list=" + fullPath  + "\"" + "; 	                                                                                                                                             \n";
        	strPidxml += "	var sParam	      = " + "\"" + "" + "\"" + ";		                                                                                                                                                                             \n";
        	strPidxml += "	var sCallbackFunc = " + "\"" + "fn_callBack" + "\"" + ";                                                                                                                                                                                     \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	this.gfn_callTran(sSvcID                                                                                                                                                                                                                     \n";
        	strPidxml += "					 , sUrl                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sInDataset                                                                                                                                                                                                \n";
        	strPidxml += "					 , sOutDataset                                                                                                                                                                                               \n";
        	strPidxml += "					 , sArg                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sParam                                                                                                                                                                                                    \n";
        	strPidxml += "					 , sCallbackFunc);						                                                                                                                                             \n";
        	strPidxml += "		                                                                                                                                                                                                                                     \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 조회 후 실행                                                                                                                                                                                                                         \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.postSearch = function()                                                                                                                                                                                                                   \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	//trace(this.ds_list.saveXML());	                                                                                                                                                                                                     \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	06. 추가 함수 선언                                                                                                                                                                                                                           \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 추가 전 실행(기본체크사항)                                                                                                                                                                                                           \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.preInsert = function()                                                                                                                                                                                                                    \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	return true;                                                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 마스터 추가 실행                                                                                                                                                                                                                     \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.btInsert_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                        \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(!this.preInsert())                                                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "	var nRow=-1;                                                                                                                                                                                                                                 \n";
        	strPidxml += "	//신규로을 추가 할때 사용                                                                                                                                                                                                                    \n";
        	strPidxml += "	nRow = this.ds_list.addRow();                                                                                                                                                                                                                \n";
        	strPidxml += "	//기본값셋팅                                                                                                                                                                                                                                 \n";
        	strPidxml += "	this.ds_list.setColumn(nRow," + "\"" + "chk" + "\"" + ", 	" + "\"" + "1" + "\"" + "); 		//사용유무                                                                                                                           \n";
        	strPidxml += "	//this.ds_list.setColumn(nRow," + "\"" + "chk" + "\"" + ", 	" + "\"" + "1" + "\"" + "); 	//추가시 기본값을 셋팅                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	//후처러 적용                                                                                                                                                                                                                                \n";
        	strPidxml += "	this.postInsert();                                                                                                                                                                                                                           \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 처리 후 실행                                                                                                                                                                                                                         \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.postInsert = function()                                                                                                                                                                                                                   \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	07. 삭제 함수 선언                                                                                                                                                                                                                           \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 삭제 버튼 실행                                                                                                                                                                                                                       \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.preDelete = function()                                                                                                                                                                                                                    \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(this.ds_list.rowcount < 1 || this.ds_list.findRow(" + "\"" + "chk" + "\"" + ",1) == -1)                                                                                                                                                   \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		this.alert(" + "\"" + "삭제할 데이타가 없습니다.!" + "\"" + ", " + "\"" + "삭제 정보" + "\"" + " ," + "\"" + "warning" + "\"" + ");                                                                                                  \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "현재선택행을 삭제하시겠습니까?" + "\"" + ", " + "\"" + "삭제" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(result == 0)                                                                                                                                                                                                                              \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "	   return false;                                                                                                                                                                                                                             \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "	//싱글 삭제시 사용                                                                                                                                                                                                                           \n";
        	strPidxml += "	//this.ds_list.deleteRow(this.ds_list.rowposition);                                                                                                                                                                                          \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	//다중삭제 용도                                                                                                                                                                                                                              \n";
        	strPidxml += "	this.ds_list.set_enableevent(false);                                                                                                                                                                                                         \n";
        	strPidxml += "	for(var i=this.ds_list.rowcount-1;i>-1;i--)                                                                                                                                                                                                  \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		if(this.ds_list.getColumn(i," + "\"" + "chk" + "\"" + ") == " + "\"" + "1" + "\"" + " || this.ds_list.getRowType(i) == 2)                                                                                                            \n";
        	strPidxml += "		{                                                                                                                                                                                                                                    \n";
        	strPidxml += "			this.ds_list.deleteRow(i);                                                                                                                                                                                                   \n";
        	strPidxml += "		}                                                                                                                                                                                                                                    \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "	this.ds_list.set_enableevent(true);                                                                                                                                                                                                          \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	//개별삭제시                                                                                                                                                                                                                                 \n";
        	strPidxml += "	return true;                                                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : Row 삭제 또는 Transaction 삭제 처리                                                                                                                                                                                                  \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.btDelete_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                        \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(!this.preDelete())                                                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	var sSvcID   	  = " + "\"" + "Delete" + "\"" + ";  			                                                                                                                                                                     \n";
        	strPidxml += "	var sUrl     	  = " + "\"" +  DstrWork + "\"" + "; 	                                                                                                                                                                     \n";
        	strPidxml += "	var sInDataset    = " + "\"" + "ds_list=ds_list:U" + "\"" + ";	                                                                                                                                                                             \n";
        	strPidxml += "	var sOutDataset   = " + "\"" + "" + "\"" + ";                                                                                                                                                                                                \n";
        	strPidxml += "	var sArg	      = " + "\"" + "ds_list=" + fullPath  + "\"" + ";                                                                                                                                                  \n";
        	strPidxml += "	var sParam	      = " + "\"" + "" + "\"" + ";		                                                                                                                                                                             \n";
        	strPidxml += "	var sCallbackFunc = " + "\"" + "fn_callBack" + "\"" + ";                                                                                                                                                                                     \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	this.gfn_callTran(sSvcID                                                                                                                                                                                                                     \n";
        	strPidxml += "					 , sUrl                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sInDataset                                                                                                                                                                                                \n";
        	strPidxml += "					 , sOutDataset                                                                                                                                                                                               \n";
        	strPidxml += "					 , sArg                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sParam                                                                                                                                                                                                    \n";
        	strPidxml += "					 , sCallbackFunc);					   		                                                                                                                                     \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "this.postDelete = function()                                                                                                                                                                                                                   \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	08. 저장 함수 선언                                                                                                                                                                                                                           \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 저장 전 실행                                                                                                                                                                                                                         \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.preSave = function()                                                                                                                                                                                                                      \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "    if(!this.gfn_dsIsUpdated(this.ds_list))                                                                                                                                                                                                    \n";
        	strPidxml += "    {                                                                                                                                                                                                                                          \n";
        	strPidxml += "        this.alert(" + "\"" + "변경된 이력이 없습니다." + "\"" + "," + "\"" + "저장" + "\"" + "," + "\"" + "question" + "\"" + ");                                                                                                             \n";
        	strPidxml += "        return false;                                                                                                                                                                                                                          \n";
        	strPidxml += "    }                                                                                                                                                                                                                                          \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "    var result = this.confirm( " + "\"" + "저장 하시겠습니까?" + "\"" + ", " + "\"" + "저장" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                                                                   \n";
        	strPidxml += "	  if(result == 0)                                                                                                                                                                                                                            \n";
        	strPidxml += "	  {                                                                                                                                                                                                                                          \n";
        	strPidxml += "	     return false;                                                                                                                                                                                                                           \n";
        	strPidxml += "	  }                                                                                                                                                                                                                                          \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	return true;                                                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 저장 실행                                                                                                                                                                                                                            \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.btSave_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                          \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(!this.preSave())                                                                                                                                                                                                                          \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "			   		                                                                                                                                                                                                             \n";
        	strPidxml += "	var sSvcID   	  = " + "\"" + "Save" + "\"" + ";  			                                                                                                                                                                     \n";
        	strPidxml += "	var sUrl     	  = " + "\"" +  SstrWork + "\"" + "; 	                                                                                                                                                                     \n";
        	strPidxml += "	var sInDataset    = " + "\"" + "ds_input=ds_input:A ds_list=ds_list:U" + "\"" + ";	                                                                                                                                                     \n";
        	strPidxml += "	var sOutDataset   = " + "\"" + "ds_list=ds_list" + "\"" + ";                                                                                                                                                                                 \n";
        	strPidxml += "	var sArg	      = " + "\"" + "ds_input=" + fullPath + "\"" + " + " + "\"" + " " + "\"" + ";                                                                                                                     \n";
        	strPidxml += "	    sArg	     += " + "\"" + "ds_list=" + fullPath  + "\"" + " + " + "\"" + " " + "\"" + ";                                                                                                                      \n";
        	strPidxml += "	    sArg         += " + "\"" + "ds_list=" + fullPath  + "\"" + ";                                                                                                                                                      \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "	var sParam	      = " + "\"" + "" + "\"" + ";		                                                                                                                                                                             \n";
        	strPidxml += "	var sCallbackFunc = " + "\"" + "fn_callBack" + "\"" + ";                                                                                                                                                                                     \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	this.gfn_callTran(sSvcID                                                                                                                                                                                                                     \n";
        	strPidxml += "					 , sUrl                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sInDataset                                                                                                                                                                                                \n";
        	strPidxml += "					 , sOutDataset                                                                                                                                                                                               \n";
        	strPidxml += "					 , sArg                                                                                                                                                                                                      \n";
        	strPidxml += "					 , sParam                                                                                                                                                                                                    \n";
        	strPidxml += "					 , sCallbackFunc);				   		                                                                                                                                             \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " *	기능 : 저장시 후처리                                                                                                                                                                                                                 \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.postSave = function()                                                                                                                                                                                                                     \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	                                                                                                                                                                                                                                             \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	09. 초기화                                                                                                                                                                                                                                   \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	10. 출력 함수 선언                                                                                                                                                                                                                           \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	11. ExcelDnwn 엑셀로 출력                                                                                                                                                                                                                    \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "this.btExcelDn_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                       \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(this.ds_list.rowcount < 1)                                                                                                                                                                                                                \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		this.alert(" + "\"" + "출력할 엑셀데이타가 없습니다.!" + "\"" + ", " + "\"" + "EXCEL 정보" + "\"" + " ," + "\"" + "information" + "\"" + ");                                                                                         \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "Excel를 출력하시겠습니까?" + "\"" + ", " + "\"" + "EXCEL 출력" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                                                        \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(result == 0)                                                                                                                                                                                                                              \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "	   return false;                                                                                                                                                                                                                             \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	this.gfn_excelExport(this.gdMaster);                                                                                                                                                                                                         \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	12. ExcelUpLoad 신규저장시                                                                                                                                                                                                                   \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += " * 기능 : 삭제 버튼 실행                                                                                                                                                                                                                       \n";
        	strPidxml += " */                                                                                                                                                                                                                                            \n";
        	strPidxml += "this.preExcelUp = function()                                                                                                                                                                                                                   \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "기존데이타를 삭제하고 신규데이타를 일괄적용하겠습니까?" + "\"" + ", " + "\"" + "EXCEL 저장" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                           \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	if(result == 0)                                                                                                                                                                                                                              \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "	   return false;                                                                                                                                                                                                                             \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	//개별삭제시                                                                                                                                                                                                                                 \n";
        	strPidxml += "	return true;                                                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "this.btExcelUp_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                                       \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(!this.preExcelUp())                                                                                                                                                                                                                       \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		return false;                                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	13. Get, Set Method                                                                                                                                                                                                                          \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**********************************************************************                                                                                                                                                                        \n";
        	strPidxml += "	14. 기타 Control Event                                                                                                                                                                                                                       \n";
        	strPidxml += "***********************************************************************/                                                                                                                                                                       \n";
        	strPidxml += "/**                                                                                                                                                                                                                                            \n";
        	strPidxml += "	그리드멀티 소트정열                                                                                                                                                                                                                          \n";
        	strPidxml += "*/                                                                                                                                                                                                                                             \n";
        	strPidxml += "this.gdMaster_onheaddblclick = function(obj:Grid, e:nexacro.GridClickEventInfo)                                                                                                                                                                \n";
        	strPidxml += "{                                                                                                                                                                                                                                              \n";
        	strPidxml += "	if(e.cell != 0)                                                                                                                                                                                                                              \n";
        	strPidxml += "	{                                                                                                                                                                                                                                            \n";
        	strPidxml += "		this.gfn_gridSort(obj,e);                                                                                                                                                                                                            \n";
        	strPidxml += "                                                                                                                                                                                                                                               \n";
        	strPidxml += "	}                                                                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                                                              \n";


        	this.tbMain.tbSub9.taPID.set_value(strPidxml);
        }



        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_taVo = function()
        {
        	var strVo 			= "";
        	var nRowCnt 		= this.DS_Detail.rowcount;
        	var strGroup    	= this.gfn_trim(this.edWorkName.text);
        	var strMethod		= this.gfn_trim(this.edWorkName1.text);
        	var strWork 		= this.gfn_trim(this.edWorkName.text) + this.gfn_trim(this.edWorkName1.text);
        	var strXpName   	= "";

        	strXpName      		=  strWork + "VO";
        	//strXpName      		=  this.fn_xmlFile2(this.fn_strColName(this.DS_Master.getColumn(this.DS_Master.rowposition,"tableName").toLowerCase()))+ "VO";

        	var strPath     	= this.gfn_trim(this.edPath.text);
        	var strMetaData 	= "";
        	var strColName  	= "";
        	var strColPk    	= "";
        	var strDataLength 	= "";
        	var	strColType    	= "";
        	var strColComent	= "";
        	var strTableNm      = this.DS_Master.getColumn(this.DS_Master.rowposition,"tableName");
        	var strDesc			= this.DS_Master.getColumn(this.DS_Master.rowposition,"comments");

        	strVo += "/*------------------------------------------------------------------------------  \n";
        	strVo += " * NAME : " + strXpName + ".java                                                  \n";
        	strVo += " * DESC :                                                                         \n";
        	strVo += " * VER  : V1.0                                                                    \n";
        	strVo += " * PROJ : 자산형성지원 정보화 구축                                             \n";
        	strVo += " * Copyright 2017 Ready Korea All rights reserved                                 \n";
        	strVo += " *------------------------------------------------------------------------------  \n";
        	strVo += " *                               MODIFICATION LOG                                 \n";
        	strVo += " *------------------------------------------------------------------------------  \n";
        	strVo += " *    DATE     AUTHOR                      DESCRIPTION                            \n";
        	strVo += " * ----------  ------  ---------------------------------------------------------  \n";
        	strVo += " * 2017/10/11  jiback(이름)                                                       \n";
        	strVo += " *------------------------------------------------------------------------------*/\n";
        	strVo += "package " + strPath + ".vo;                                                  \n";
        	strVo += "                                                                                  \n";
        	strVo += "import java.sql.Date;                                                              \n";
        	strVo += "import java.math.BigDecimal;                                                      \n";
        	strVo += "                                                                                  \n";
        	strVo += "import lombok.Data;                                                               \n";
        	strVo += "import lombok.ToString;                                                           \n";
        	strVo += "                                                                                  \n";
        	strVo += "import org.apache.ibatis.type.Alias;                                              \n";
        	strVo += "                                                                                  \n";
        	strVo += "import kr.or.cssf.bass.comm.vo.DefaultVO;                                           \n";
        	strVo += "                                                                                  \n";
        	strVo += "@Alias( " + "\"" + strXpName + "\"" + " )                                     \n";
        	strVo += "@Data                                                                             \n";
        	strVo += "@ToString( callSuper = true )                                                     \n";
        	strVo += "public class " + strXpName + " extends DefaultVO {                                \n";
        	strVo += "                                                                                  \n";
        	strVo += "\t/** 컬럼체크 **/\n";
        	strVo += "\t"	+  "private " + "String" + " " + "chk" + ";\n";

        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                    case "CHAR":
        				strDsType = "String";
        				break;
                    case "DATE":
        				strDsType = "String";
        				break;
                    case "DECIMAL":
                    case "NUMBER":
        				strDsType = "BigDecimal";
        				break;
                    case "INTEGER":
        				strDsType = "int";
        				break;
                    case "BLOB":
                        strDsType = "Blob";
                        break;
                    default:
                        strDsType = "String";
                        break;
                }

        		strVo += "\n";
        		strVo += "\t/** " + strColComent + " **/\n";
        		strVo += "\t"	+  "private " + strDsType + " " + this.fn_strColName(strColName.toLowerCase()) + ";\n";
        	}
        	strVo += "\n";

        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));

        		var strDsType;
        		switch(strColType)
                {
                    case "VARCHAR2":
                    case "VARCHAR":
                    case "CHAR":
        				strDsType = "String";
        				break;
                    case "DATE":
        				strDsType = "Date";
        				break;
                    case "DECIMAL":
                    case "NUMBER":
        				strDsType = "BigDecimal";
        				break;
                    case "INTEGER":
        				strDsType = "int";
        				break;
                    case "BLOB":
                        strDsType = "Blob";
                        break;
                    default:
                        strDsType = "String";
                        break;
                }
        		strVo += "\n";

        		var strGetName = this.fn_strColName(strColName.toLowerCase());

        		strVo += "\t"	+  "public " + strDsType + " get" + strGetName.substr(0,1).toUpperCase() + strGetName.substr(1) + "() {\n";
        		strVo += "\t  return " + strGetName + ";\n";
        		strVo += "\t}\n";
        		strVo += "\n";
        		strVo += "\t"	+  "public void set" + strGetName.substr(0,1).toUpperCase() + strGetName.substr(1) + "(" + strDsType + " " + strGetName + ") {\n";
        		strVo += "\t  this." + strGetName + " = " + strGetName + ";\n";
        		strVo += "\t}\n";
        	}

        	strVo += "\n";
        	strVo += "}\n";
        	this.tbMain.tbSub10.taVo.set_value(strVo);

        }

        /**
        * 첫자 대문자 만들기
        */
        this.fn_xmlFile2 = function(FileName)
        {
        	var strXmlFile ="";
        	strXmlFile = (FileName.substr(0,1)).toUpperCase() + FileName.substr(1);

        	return strXmlFile;
        }

        //
        //
        // /*
        // this.Button00_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)
        // {
        // 	var obj = Base.XPComp.query(this, "", "");
        //
        // 	for(var i=0; i<obj.length; i++)
        // 	{
        // 	   trace(obj[i]);
        // 	   trace(obj[i].name);
        //
        // 	   trace(Base.XPComp.getXpName(obj[i],this));
        // 	}
        // }
        // */

        this.cbUsers_onitemchanged = function(obj, e)
        {
        	this.Search_onclick(this.Search);
        }
        this.cbUsers00_onitemchanged = function(obj, e)
        {
        	this.ds2Depth.filter("LEVEL == '" + this.cbUsers00.value + "'");
        	this.cbUsers01.set_index(0);
        	this.edPath00.set_text(this.cbUsers01.value);
        	this.edPath.set_value("kr.or.cssf.bass" + "." +  this.cbUsers01.value);
        }
        this.cbUsers01_onitemchanged = function(obj, e)
        {
        	this.edPath.set_value("kr.or.cssf.bass" + "." +  this.cbUsers01.value);
        	this.edPath00.set_value(this.cbUsers01.value);

        	this.fn_costText();

        	this.postDSearch();

        }

        this.edPath00_onchar = function(obj,  e)
        {
        	this.edPath.set_value(this.cbUsers00.value+ "." + this.cbUsers01.value + "." + e.posttext);
        }


        this.edRetrieve00_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		this.Search.setFocus();
        		this.Search_onclick();
        	}
        }

        this.btExcel_onclick = function(obj,  e)
        {
        	this.gfn_excelExport(this.tbMain.tbSub1.gd_Detail);

        }

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
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("oninit",this.NDSYS210M_oninit,this);
            this.cbUsers.addEventHandler("onitemchanged",this.cbUsers_onitemchanged,this);
            this.cbUsers01.addEventHandler("onitemchanged",this.cbUsers01_onitemchanged,this);
            this.edPath.addEventHandler("oneditclick",this.edPath_oneditclick,this);
            this.Search.addEventHandler("onclick",this.Search_onclick,this);
            this.tbMain.tbSub3.form.taContoller.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub4.form.taSarvice.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub5.form.taServiceImpl.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.tbMain.tbSub7.form.taXmlquery.addEventHandler("oneditclick",this.tbMain_tbSub2_taNavigation_oneditclick,this);
            this.btExcel.addEventHandler("onclick",this.btExcel_onclick,this);
            this.edRetrieve00.addEventHandler("onkeydown",this.edRetrieve00_onkeydown,this);
            this.cbUsers00.addEventHandler("onitemchanged",this.cbUsers00_onitemchanged,this);
            this.DS_Master.addEventHandler("onrowposchanged",this.DS_Master_onrowposchanged,this);
        };
        this.loadIncludeScript("COMM000004S.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
