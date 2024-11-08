(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("debugView");
            this.set_titletext("디버깅");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,703);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGDS", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponents", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">LOCAL</Col><Col id=\"NAME\">Local</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new GroupBox("GroupBox01","358","40","320","90",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Global Dataset");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","10","40","320","90",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Local Dataset");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2.13%","80","54","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dataset명");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_dataset","7.78%","81",null,"20","72.13%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsDataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","34.54%","80","54","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Dataset명");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_GDS","40.00%","81",null,"20","39.17%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsGDS");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66.30%","64","66","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid Format");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_grid","73.43%","65",null,"20","4.26%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsGrid");
            obj.set_datacolumn("PATH");
            obj.set_codecolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","6","140",null,null,"6","4",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("Dataset");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","5",null,null,"1","5",null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsGridDataset");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats/>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("SaveXML");
            this.Tab00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1","5",null,null,"1","5",null,null,null,null,this.Tab00.tabpage2.form);
            obj.set_taborder("0");
            this.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("Dataset To Grid");
            this.Tab00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1","5",null,null,"1","5",null,null,null,null,this.Tab00.tabpage3.form);
            obj.set_taborder("0");
            this.Tab00.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.Tab00);
            obj.set_text("Grid Format");
            this.Tab00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","1","5",null,null,"1","5",null,null,null,null,this.Tab00.tabpage4.form);
            obj.set_taborder("0");
            this.Tab00.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.Tab00);
            obj.set_text("Components");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","5",null,null,"769","5",null,null,null,null,this.Tab00.tabpage5.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsProperties");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"176\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.Tab00.tabpage5.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","305","5",null,null,"1","5",null,null,null,null,this.Tab00.tabpage5.form);
            obj.set_taborder("1");
            this.Tab00.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.Tab00);
            obj.set_text("Variable");
            this.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid00","1","29",null,null,"1","5",null,null,null,null,this.Tab00.tabpage6.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsVariable");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.Tab00.tabpage6.addChild(obj.name, obj);

            obj = new Combo("Combo00","85","6","136","20",null,null,null,null,null,null,this.Tab00.tabpage6.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsVariableType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Local");
            obj.set_value("LOCAL");
            obj.set_index("0");
            this.Tab00.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","75","20",null,null,null,null,null,null,this.Tab00.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("2");
            this.Tab00.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static03","66.30%","93","72","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Components");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_components","73.43%","93",null,"20","4.26%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("dsComponents");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_global","40.00%","93",null,"20","41.39%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_local","7.78%","93",null,"20","74.63%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","2.41%","93","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("필터검색");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","34.54%","93","48","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("필터검색");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","276","93","24","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","634","93","24","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("X");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","14","10","152","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("디버거(데이타셋) ");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit","1036","8","37","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Close01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.tabpage5.form.TextArea00","value","dsProperties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000014P.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_currentCombo = "cbo_dataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// Form Load 시 공통 기능 처리
        	this.gfn_formOnload(obj.e);

            // 로컬 데이터셋을 가져온다.
        	this.fn_saveDatasetList(this.opener);
        	this.cbo_dataset.set_index(0);
        	this.fn_makeDatasetGrid();

        	// 글로벌 데이터셋을 가져온다.
        	this.fn_saveGDSList();
        	this.dsGDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
        	this.fn_saveGridList(this.opener);
        	this.cbo_grid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
        	this.fn_saveComponetsList(this.opener);
        	this.cbo_components.set_index(0);

        	// 화면에서 사용되는 변수목록을 가져온다.
        	this.dsVariable.clearData();
        	this.fn_saveVariableList(this.opener);

        	// 글로벌 변수 목록을 가져온다.
        	var objApp = nexacro.getApplication();
        	this.fn_saveVariableList(objApp);
        	this.dsVariable.set_keystring("S:LVL+NAME");
        }


        /***********************************************************
         * @function 	fn_saveDatasetList
         * @description	데이터셋의 목록을 찾아 저장한다.
         **********************************************************/
        this.fn_saveDatasetList = function(targetObj, fullpath)
        {
        	//trace("=============== targetObj.name : " + targetObj.name);
            var datasetlist = targetObj.objects;
            for(var i=0;i<datasetlist.length;i++)
            {
        		if( datasetlist[i]+"" == "[object Dataset]" )
        		{
                    var nRow = this.dsDataset.addRow();
                    this.dsDataset.setColumn(nRow, "NAME", datasetlist[i].id);

                    if( this.gfn_isNull(fullpath) )
                    {
                        this.dsDataset.setColumn(nRow, "PATH", datasetlist[i].id);
                    }
                    else
                    {
                        // div_work. 으로 나오는 걸 잘라낸다.
                        var displayname = nexacro.replaceAll(fullpath+"."+datasetlist[i].id, "div_work.form.", "");
                        this.dsDataset.setColumn(nRow, "NAME", displayname);
                        this.dsDataset.setColumn(nRow, "PATH", fullpath+"."+datasetlist[i].id);
                    }
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveDatasetList(objList[i].form, objList[i].id+".form");
                    else
                        this.fn_saveDatasetList(objList[i].form, fullpath+".form."+objList[i].id);
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].form.components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveDatasetList(tabPageList[j].form, objList[i].id+".form."+tabPageList[j].id);
                        else
                            this.fn_saveDatasetList(tabPageList[j].form, fullpath+".form."+objList[i].id+"."+tabPageList[j].id);
                    }
                }
            }
        }


        /***********************************************************
         * @function 	fn_saveGridList
         * @description	화면의 그리드목록을 저장한다.
         **********************************************************/
        this.fn_saveGridList = function(targetObj, fullpath)
        {
            var sObjType;

            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

        		if( objList[i]+"" == "[object Grid]" )
        		{
                    var nRow = this.dsGrid.addRow();
                    this.dsGrid.setColumn(nRow, "NAME",   objList[i].name);

                    if( this.gfn_isNull(fullpath) )
                        this.dsGrid.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.dsGrid.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
                }

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveGridList(objList[i].form, fullpath+".form."+objList[i].name);
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveGridList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fn_saveGridList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
            }
        }


        /***********************************************************
         * @function 	fn_saveComponetsList
         * @description	화면의 모든 Object를 저장한다.
         **********************************************************/
        this.fn_saveComponetsList = function(targetObj, fullpath)
        {
        	//trace("=============== fn_saveComponetsList targetObj.name : " + targetObj.name);
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveComponetsList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fn_saveComponetsList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
                else
                {
                    var nRow = this.dsComponents.addRow();
                    this.dsComponents.setColumn(nRow, "NAME",   objList[i].name);

                    if( this.gfn_isNull(fullpath) )
                        this.dsComponents.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.dsComponents.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
                }
            }
        }

        /***********************************************************
         * @function 	fn_saveGDSList
         * @description	글로벌데이터셋의 목록을 만든다.
         **********************************************************/
        this.fn_saveGDSList = function()
        {
        	var objApp = nexacro.getApplication();
            var applicationobj = objApp.all;
            for(var i=0;i<applicationobj.length;i++)
            {
        		if( applicationobj[i]+"" == "[object Dataset]" )
        		{
        		    try
        		    {
                        if( applicationobj[i].id.indexOf(".") == -1 )
                        {
                            var nRow = this.dsGDS.addRow();
                            this.dsGDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.dsGDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch(e)
                    {
        				//trace(">>>> e Message" + e);
                    }
        		}
            }
        }

        /***********************************************************
         * @function 	Tab00_onchanged
         * @description	선택한 TAB에 대한 처리를 한다.
         **********************************************************/
        this.Tab00_onchanged = function(obj, e)
        {
        	var tabindex = this.Tab00.tabindex;

        	switch(tabindex)
        	{
        	    case 0: this.fn_makeDatasetGrid();       break;
        	    case 1: this.fn_makeDatasetXml();        break;
        	    case 2: this.fn_makeDatasetGridFormat(); break;
        	    case 3: this.fn_makeGridFormats();       break;
        	    case 4: this.fn_makeCompoentsData();     break;
        	    case 5: this.fn_makeVariableList();      break;
        	    //Sonar Qube "switch" statements should end with a "default" clause. 조치 JBC 2016-09-20
        	    default : break;
        	}
        }


        /***********************************************************
         * @function 	fn_makeDatasetGrid
         * @description	Dataset을 GRID에 표시한다.
         **********************************************************/
        this.fn_makeDatasetGrid = function()
        {
            var dataset;

            if( this.fv_currentCombo == "cbo_dataset" )
            {
                if( this.cbo_dataset.index == -1 ) return;

                dataset = this.opener.objects[this.cbo_dataset.value];
            }
            else
            {
                if( this.cbo_GDS.index == -1 ) return;

        		var objApp = nexacro.getApplication() ;
                dataset = objApp[this.cbo_GDS.text];
            }

            // 데이터셋의 정보가 존재하지 않으면
            if( dataset.getColCount() < 1 )
            {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.Tab00.tabpage1.form.Grid00.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head    = '    <Cell col="0" text=""/>\n';
            //var body    = '    <Cell col="0" displaytype="image" text="expr:(dataset.getRowType(currow)==2)?\'theme://images/sta_n.png\':(dataset.getRowType(currow)==4)?\'theme://images/sta_u.png\':(dataset.getRowType(currow)==8)?\'theme://images/sta_d.png\':\'default\'"/>\n';
        	var body    = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for(var i=0;i<dataset.getColCount();i++)
            {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try
                {
                     columname = columinfo.name;
                     columsize = parseInt(columinfo.size);
                     columtype = columinfo.type.toUpperCase();
                }
                catch(e)
                {
                     columname = "undefined";
                     columsize = 50;
                     columtype = "STRING";
                }

                //Sonar Qube Unused local variables should be removed 조치 JBC 2016-09-20
                //var columwidth= 100;
                var align     = "";

                if( columtype == "STRING" )
                {
                    columsize = columsize*9;

                    if( columsize < columname.length*9 )
                    {
                        columsize = columname.length*9;
                    }

                    if( columsize > 200 )
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="'+columsize+'" />\n';

                    align = 'style="align:left;"';
                }
                else if( columtype == "INT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "FLOAT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "DATE" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "TIME" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "DATETIME" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "BIGDECIMAL" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="'+(i+1)+'" text="'+columname+'"/>\n';
                body += '    <Cell col="'+(i+1)+'" '+align+' text="bind:'+columname+'" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n'+columns.substring(0,columns.length-1)+'\n</Columns>\n';
            formats += '<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';
            formats += '<Band id="head">\n'+head.substring(0,head.length-1)+'\n</Band>\n';
            formats += '<Band id="body">\n'+body.substring(0,body.length-1)+'\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.Tab00.tabpage1.form.Grid00.set_binddataset(dataset);
            this.Tab00.tabpage1.form.Grid00.set_formats(formats);

        	//trace(formats);
        }


        /***********************************************************
         * @function 	fn_makeDatasetXml
         * @description	데이터셋의 내용을 XML로 표시한다.
         **********************************************************/
        this.fn_makeDatasetXml = function()
        {
            var dataset;

            if( this.fv_currentCombo == "cbo_dataset" )
            {
                if( this.cbo_dataset.index == -1 ) return;

                dataset =this.opener.objects[this.cbo_dataset.value];
            }
            else
            {
                if( this.cbo_GDS.index == -1 ) return;

        		var objApp = nexacro.getApplication() ;
                dataset = objApp[this.cbo_GDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="'+dataset.id+'">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.Tab00.tabpage2.form.TextArea00.set_value(text);
        }

        /***********************************************************
         * @function 	cbo_dataset_onitemchanged
         * @description	로컬데이터셋의 내용을 보여준다.
         **********************************************************/
        this.cbo_dataset_onitemchanged = function(obj, e)
        {
            this.fv_currentCombo = obj.name;
            this.edt_local.set_value(obj.text);
            this.Tab00.set_tabindex(0);
            this.Tab00_onchanged();
        }

        /***********************************************************
         * @function 	cbo_GDS_onitemchanged
         * @description	글로벌 데이터셋의 내용을 보여준다.
         **********************************************************/
        this.cbo_GDS_onitemchanged = function(obj, e)
        {
            this.fv_currentCombo = obj.name;
            this.edt_global.set_value(obj.value);
            this.Tab00.set_tabindex(0);
            this.Tab00_onchanged();
        }

        /***********************************************************
         * @function 	fn_makeDatasetGridFormat
         * @description	데이터셋을 GRID로 자동생성해준다.
         **********************************************************/
        this.fn_makeDatasetGridFormat = function()
        {
            this.Tab00.tabpage3.form.TextArea00.set_value(this.Tab00.tabpage1.form.Grid00.formats);
        }

        /***********************************************************
         * @function 	fn_makeGridFormats
         * @description	화면의 그리드의 포맷을 가져온다.
         **********************************************************/
        this.fn_makeGridFormats = function()
        {
            if( this.cbo_grid.index == -1 ) return;

            var targetgrid = this.opener.components[this.cbo_grid.text];

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for(var i=0;i<targetgrid.getCellCount("Body");i++)
            {
                newcolumn += '    <Column size="'+targetgrid.getRealColSize(i, true)+'"/>\n';
            }
            formats = formats.split("<Columns>")[0]+"<Columns>\n"+newcolumn +"</Columns>"+formats.split("</Columns>")[1];

            this.Tab00.tabpage4.form.TextArea00.set_value(formats);
            this.Tab00.set_tabindex(3);
        }

        /***********************************************************
         * @function 	cbo_components_onitemchanged
         * @description	컴포넌트의 모든 속성을 디스플레이한다.
         **********************************************************/
        this.cbo_components_onitemchanged = function(obj, e)
        {
            this.Tab00.set_tabindex(4);
            this.Tab00_onchanged();
        }

        /***********************************************************
         * @function 	fn_makeCompoentsData
         * @description	컴포넌트의 모든속성을 디스플레이한다
         **********************************************************/
        this.fn_makeCompoentsData = function()
        {
            if( this.cbo_components.index == -1 ) return;

            var targetobj = this.opener.components[this.cbo_components.text];

            this.dsProperties.clearData();
            this.dsProperties.set_enableevent(false);
            for(var name in targetobj)
            {
                var value = targetobj[name]+"";

                if( name[0] == "_" ) continue;
                if( value == "[object Object]" ) continue;
                if( value.substring(0, 8) == "function" ) continue;
                if( value.substring(0, 7) == "control" ) continue;

                if( this.gfn_isNull(value) )
                {
                    var nrow = this.dsProperties.addRow();
                    this.dsProperties.setColumn(nrow, "NAME", name);
                    this.dsProperties.setColumn(nrow, "VALUE", "");
                }
                else
                {
                    // 이벤트에 대한 처리
                    if( value.indexOf("[object") != -1 )
                    {
                        if( value.indexOf("EventListener") != -1 )
                        {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if( !this.gfn_isNull(eventhandler) )
                            {
                                var nrow = this.dsProperties.addRow();
                                this.dsProperties.setColumn(nrow, "NAME",    name);
                                this.dsProperties.setColumn(nrow, "VALUE",   "function");
                                this.dsProperties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.dsProperties.setColumn(nrow, "COLOR",    "red");
                            }
                        }
                    }
                    else
                    {
                        var nrow = this.dsProperties.addRow();
                        this.dsProperties.setColumn(nrow, "NAME",    name);
                        this.dsProperties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.dsProperties.set_enableevent(true);
            this.dsProperties.set_rowposition(0);
        }


        /***********************************************************
         * @function 	fn_saveVariableList
         * @description	화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
         **********************************************************/
        this.fn_saveVariableList = function(targetObj, fullpath)
        {
        	//trace("================ fn_saveVariableList targetObj : " + targetObj.name);

        	sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for(var name in targetObj)
            {
                // 변수를 찾는방법을 x_ 또는 xx_ 로 해서 처리한다.
                if( name[1] == "_" || name[2] == "_" )
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( targetObj.hasOwnProperty(name) == false ) continue;

                    // 글로벌변수
                    if( name[0].toUpperCase() == "G" )
                    {
                        // 글로벌 변수는 하나만이 존재하기 때문에..
                        if( this.dsVariable.findRow("NAME", name) == -1 )
                        {
                            var nrow = this.dsVariable.addRow();
                            this.dsVariable.setColumn(nrow, "NAME",  name);
                            this.dsVariable.setColumn(nrow, "VALUE", value);
                            this.dsVariable.setColumn(nrow, "TYPE",  "GLOBAL");
                            this.dsVariable.setColumn(nrow, "LVL",   0);
                        }
                    }
                    // 로컬변수
                    else
                    {
                        if( !this.gfn_isNull(fullpath) )
                        {
                            name = fullpath+"."+name;
                        }

                        if( this.dsVariable.findRow("NAME", name) == -1 )
                        {
                            var nrow = this.dsVariable.addRow();
                            this.dsVariable.setColumn(nrow, "NAME",  name);
                            this.dsVariable.setColumn(nrow, "VALUE", value);
                            this.dsVariable.setColumn(nrow, "TYPE",  "LOCAL");
                            this.dsVariable.setColumn(nrow, "LVL",   name.split(".").length);
                        }
                    }
                }
            }
        	this.dsVariable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveVariableList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveVariableList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveVariableList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fn_saveVariableList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
            }
        }

        /***********************************************************
         * @function 	fn_makeVariableList
         * @description	화면에서 사용되는 모든 변수를 보여준다.
         **********************************************************/
        this.fn_makeVariableList = function()
        {
            this.dsVariable.filter("TYPE == '"+this.Tab00.tabpage6.form.Combo00.value+"'");
            this.dsVariable.set_rowposition(0);
        }


        /***********************************************************
         * @function 	Tab00_tabpage6_Combo00_onitemchanged
         * @description	변수의 형식을 선택한 타입으로 필터링한다.
         **********************************************************/
        this.Tab00_tabpage6_Combo00_onitemchanged = function(obj, e)
        {
            this.dsVariable.filter("TYPE == '"+this.Tab00.tabpage6.form.Combo00.value+"'");
            this.dsVariable.set_rowposition(0);
        }


        /***********************************************************
         * @function 	Combo_onkeydown
         * @description	컴포넌트의 textvalue 값을 클립보드에 복사한다.
         **********************************************************/
        this.Combo_onkeydown = function(obj, e)
        {
        	//trace( obj.text );
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", obj.text);
        }


        /***********************************************************
         * @function 	edt_local_onkeydown
         * @description	데이터셋이 하두 많아서 콤보로 찍기 힘들어 바로 찾기 가능하도록 처리
         **********************************************************/
        this.edt_local_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsDataset.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {

        	        fv_currentCombo = "local";
                    this.cbo_dataset.set_index(nrow);
                    this.fn_makeDatasetGrid();
                    this.cbo_dataset_onitemchanged(this.cbo_dataset);
                }
        	}
        }

        /***********************************************************
         * @function 	edt_global_onkeydown
         * @description	데이터셋이 많을때 바로 찾기 가능하도록 처리
         **********************************************************/
        this.edt_global_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsGDS.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {
        	        fv_currentCombo = "global";
                    this.cbo_GDS.set_index(nrow);
                    this.cbo_GDS_onitemchanged(this.cbo_GDS);
                    //this.fn_makeDatasetGrid();
        	    }
        	}
        }


        this.Button00_onclick = function(obj,  e)
        {
        	var objApp = nexacro.getApplication() ;
        	var dataset = objApp[this.cbo_GDS.text];
            dataset.filter("");
        }


        /***********************************************************
         * @function 	changeTransactionLog
         * @description	트랜잭션처리 로그정보를 사용할지의 여부를 토글처리한다.
         **********************************************************/
        this.changeTransactionLog = function(obj,  e)
        {
        	if( obj.cssclass == "sta_TF_OrangeBg" )
        	{
        	    obj.set_cssclass("sta_TF_BlueBg");
        	    obj.set_text("LOG\nOFF");
        	    application.G_TRLOG = 0;
        	}
        	else
        	{
        	    obj.set_cssclass("sta_TF_OrangeBg");
        	    obj.set_text("LOG\nON");
        	    application.G_TRLOG = 1;
        	}
        }

        /***********************************************************
         * @function 	unfilterLocalDataset
         * @description	로컬데이터셋의 필터링해재
         **********************************************************/
        this.unfilterLocalDataset = function(obj,  e)
        {
            var dataset = eval("this.opener."+this.cbo_dataset.value);
            dataset.filter("");
        }

        /**
         * @description  DATASET 으로 INSERT SQL 만들기
         */
        this.btn_makeSQL_onclick = function(obj,  e)
        {
            var insertsql = "";
        	var dataset = this.Tab00.tabpage1.form.Grid00.getBindDataset();
            for(var i=0;i<dataset.getRowCount();i++)
            {

                var columlist = "";
                var valuelist = "";
                for(var j=0;j<dataset.getColCount();j++)
                {
                    var columname  = dataset.getColID(j);
                    var columvalue = this.gfn_isNull(dataset.getColumn(i, columname),"NULL");

                    if( columvalue != "NULL" ) columvalue = "'"+columvalue+"'";

                    if( j == 0 )
                    {
                        columlist = columname;
                        valuelist = columvalue;
                    }
                    else
                    {
                        columlist += ", "+columname;
                        valuelist += ", "+columvalue;
                    }
                }

                insertsql += "INSERT INTO "+dataset.id+" ("+columlist+") VALUES ("+valuelist+");\n";
            }

        	//trace( insertsql );
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", insertsql);
        }

        this.btnExit_onclick = function(obj,e)
        {
        	this.close("EXIT");
        };

        this.debugView_onkeydown = function(obj,e)
        {
        	if(e.ctrlkey)
        	{
        		if(e.keycode == 88)
        		{
        			this.close("EXIT");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.debugView_onkeydown,this);
            this.cbo_dataset.addEventHandler("onitemchanged",this.cbo_dataset_onitemchanged,this);
            this.cbo_dataset.addEventHandler("onkeydown",this.Combo_onkeydown,this);
            this.cbo_GDS.addEventHandler("onitemchanged",this.cbo_GDS_onitemchanged,this);
            this.cbo_GDS.addEventHandler("onkeydown",this.Combo_onkeydown,this);
            this.cbo_grid.addEventHandler("onkeydown",this.Combo_onkeydown,this);
            this.cbo_grid.addEventHandler("onitemchanged",this.fn_makeGridFormats,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.tabpage6.form.Combo00.addEventHandler("onitemchanged",this.Tab00_tabpage6_Combo00_onitemchanged,this);
            this.cbo_components.addEventHandler("onitemchanged",this.cbo_components_onitemchanged,this);
            this.cbo_components.addEventHandler("onkeydown",this.Combo_onkeydown,this);
            this.edt_global.addEventHandler("onkeydown",this.edt_global_onkeydown,this);
            this.edt_local.addEventHandler("onkeydown",this.edt_local_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.unfilterLocalDataset,this);
            this.Button01.addEventHandler("onclick",this.unfilterLocalDataset,this);
            this.btnExit.addEventHandler("onclick",this.btnExit_onclick,this);
        };
        this.loadIncludeScript("COMM000014P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
