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
            this.set_titletext("제너레이트(Mybits/Map버전1.0)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1740,800);
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
            obj = new Static("Static11","48","140","330","31",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","48","110","330","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","176","377",null,null,"5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("DS_Master");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_scrollbartrackbarsize("20");
            obj.set_scrollbarsize("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"142\"/><Column size=\"194\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"테이블\"/><Cell col=\"2\" text=\"테이불명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:tableName\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:comments\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel14","0","140","76","31",null,null,null,null,null,null,this);
            obj.set_text("테이블명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("staTitel13","0","110","76","31",null,null,null,null,null,null,this);
            obj.set_text("USER명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUsers","81","114","290","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_innerdataset("dsOwer");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilter","81","144","290","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"106","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","669","7","229","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel00","0","8","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("RPJECT ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","75","8","83","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","75","38","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","75","68","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel03","157","8","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("업무명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","372","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","226","8","78","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel06","303","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("작업명 ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","372","7","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","669","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel09","600","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("클래스명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","966","66",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","966","36",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUser01","81","12","71","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds1Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUser02","231","12","66","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds2Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12","966","6",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","372","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","669","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPath","378","11","69","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName","674","11","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName1","970","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPackage","81","42","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDao","81","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtController","378","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSqlXml","378","70","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtService","674","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNexacro","674","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtServiceImpl","972","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDtoVo","972","70","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"71","70","22","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel11","897","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Vo/Dto");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel07","600","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Service");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel08","600","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Nexacro");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel01","0","38","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Package");
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel02","0","68","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Dao");
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel04","303","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Contoller ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel05","303","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("IbitsXml");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","54","22","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel12","897","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("메소드명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel10","897","36","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Impl");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("tabMain","379","110",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            obj.set_background("");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub01",this.tabMain);
            obj.set_text("Tab");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdDetail","5","5",null,null,"5","5",null,null,null,null,this.tabMain.tabSub01.form);
            obj.set_taborder("0");
            obj.set_binddataset("DS_Detail");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_scrollbarsize("10");
            obj.set_scrollbartrackbarsize("20");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"115\"/><Column size=\"166\"/><Column size=\"102\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"97\"/><Column size=\"171\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"NULL\"/><Cell col=\"5\" text=\"PK\"/><Cell col=\"6\" text=\"DEFAULT\"/><Cell col=\"7\" text=\"엑셀임시설명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:colNo\"/><Cell col=\"1\" text=\"bind:columnName\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:comments\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:vwDataType\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:codeSht\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"5\" text=\"bind:userRef1\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"6\" text=\"bind:userRef2\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"7\" text=\"bind:remkText\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/></Band></Format></Formats>");
            this.tabMain.tabSub01.addChild(obj.name, obj);

            obj = new Tabpage("tabSub02",this.tabMain);
            obj.set_text("Controller");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtContoller","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub02.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub02.addChild(obj.name, obj);

            obj = new Tabpage("tabSub03",this.tabMain);
            obj.set_text("Server");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtSarvice","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub03.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub03.addChild(obj.name, obj);

            obj = new Tabpage("tabSub04",this.tabMain);
            obj.set_text("ServiceImpl");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtServiceImpl","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub04.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub04.addChild(obj.name, obj);

            obj = new Tabpage("tabSub05",this.tabMain);
            obj.set_text("Dao");
            obj.set_border("1px solid #a5a5a5");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtDao","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub05.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub05.addChild(obj.name, obj);

            obj = new Tabpage("tabSub06",this.tabMain);
            obj.set_text("XQry");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtXmlquery","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub06.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub06.addChild(obj.name, obj);

            obj = new Tabpage("tabSub07",this.tabMain);
            obj.set_text("XOracle");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtXOracle","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub07.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub07.addChild(obj.name, obj);

            obj = new Tabpage("tabSub08",this.tabMain);
            obj.set_text("NXPlatForm");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtPID","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub08.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub08.addChild(obj.name, obj);

            obj = new Tabpage("tabSub09",this.tabMain);
            obj.set_text("Vo/Dto");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtVo","0","0",null,null,"0","0",null,null,null,null,this.tabMain.tabSub09.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub09.addChild(obj.name, obj);

            obj = new Tabpage("tabSub10",this.tabMain);
            obj.set_text("사용할SQL");
            obj.set_border("1px solid #a5a5a5");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("taSQL2","5","5",null,null,"5","5",null,null,null,null,this.tabMain.tabSub10.form);
            obj.set_taborder("1");
            obj.set_font("bold 12px/normal \"굴림체\"");
            obj.set_value("  /*마스터 테이블 사용자별 조회(오라클기준임)*/\n  SELECT \n         ROWNUM AS ROW_NO                   -- 로번호\n      , TAB.TABLE_NAME                      -- 테이블명\n      , TAB_COM.COMMENTS                    -- 테이블 COMMENTS\n      , TAB.OWNER                           -- 테이블 사용자\n   FROM ALL_TABLES TAB                      -- 테이블 정보 \n      , ALL_TAB_COMMENTS TAB_COM            -- 주석정보\n   WHERE TAB.OWNER      = TAB_COM.OWNER    \n     AND TAB.TABLE_NAME = TAB_COM.TABLE_NAME    \n    -- AND TAB.TABLE_NAME LIKE \'\' || \'%\'\n     AND TAB.OWNER    = \'ADM\'\n   ORDER BY ROW_NO,TAB.TABLE_NAME    \n   ORDER BY TAB.TABLE_NAME \n  \n\n  /*마스터 테이블명을 받아서 디테일 조회하는 쿼리 마스터 테이블명을 받아야함*/\n  SELECT TO_CHAR(COL.COLUMN_ID) AS COL_NO                                                                                           --번호\n        , COL.COLUMN_NAME                                                                                                           --컬럼명\n        , COM.COMMENTS                                                                                                              --주석\n        , DECODE(COL.DATA_TYPE, \'NUMBER\', \'NUMBER(\'||COL.DATA_PRECISION||DECODE(COL.DATA_SCALE, 0, \'\', \',\'||COL.DATA_SCALE)||\')\',    \n                               \'DATE\', \'DATE\',    \n                               \'DATETIME\', \'DATE\', COL.DATA_TYPE||\'(\'||COL.DATA_LENGTH||\')\') AS VW_DATA_TYPE                        --데이타타입/사이지\n        , DECODE(COL.NULLABLE, \'N\', \'NOT NULL\', \'\') AS COL_NULL                                                                     --NOT NULL\n        , COL.DATA_TYPE                                                                                                             --데이타타입\n        , COL.DATA_LENGTH                                                                                                           --데이타길이\n        , CASE WHEN COL_CON.POSITION > 0 THEN \'Y\' ELSE \'\' END AS COL_PK                                                             --PK여부\n        , \'\' AS COL_DEF                                                                                                             --기본값\n        , \'\' AS REMK_TEXT                                                                                                           --엑셀출력시(입력값)\n        , COL.TABLE_NAME||TRIM(TO_CHAR(COL.COLUMN_ID, \'000\')) AS ORD                                                                --정렬순서\n   FROM ALL_TAB_COLUMNS COL\n      , ALL_COL_COMMENTS COM\n      , (\n            SELECT * FROM ALL_CONS_COLUMNS    \n            WHERE TABLE_NAME =  \'ACHV_BASC010\'          --받을인자\n            AND POSITION IS NOT NULL    \n        ) COL_CON    \n   WHERE COL.OWNER = COM.OWNER    \n     AND COL.TABLE_NAME  = COM.TABLE_NAME    \n     AND COL.COLUMN_NAME = COM.COLUMN_NAME    \n     AND COL.TABLE_NAME =  \'ACHV_BASC010\'               --받을인자\n     AND COL.OWNER = COL_CON.OWNER(+)    \n     AND COL.TABLE_NAME = COL_CON.TABLE_NAME(+)    \n     AND COL.COLUMN_NAME = COL_CON.COLUMN_NAME(+)    \n   ORDER BY ORD \n\n\n/*db기준에 서버 날짜 데이타 가지고 오기*/\nSELECT TO_CHAR(SYSDATE, \'YYYY\')AS YYYY                          --년     \n     , TO_CHAR(SYSDATE, \'YYYYMMDD\')AS YYYYMMDD                  --년/월/일\n     , TO_CHAR(SYSDATE, \'YYYYMM\')AS YYYYMM                      --년/월 \n     , TO_CHAR(SYSDATE, \'MMDD\')AS MMDD                          --월/일 \n     , TO_CHAR(SYSDATE, \'MM\')AS MM                              --년\n     , TO_CHAR(SYSDATE, \'DD\')AS DD                              --월    \n     , TO_CHAR(SYSDATE, \'YYYYMM\')||\'01\' AS MONTH_FIRST_DAY      --현재월에 시작일자\n     , TO_CHAR( LAST_DAY(SYSDATE), \'YYYYMMDD\')AS MONTH_LAST_DAY --현재월에 마지막일자   \n     , TO_CHAR(SYSDATE, \'D\') AS DAY_OF_WEEK                     --현재요일(1일요일~7토요일)\n     , TO_CHAR(SYSDATE, \'YYYYMMDDHH24MISS\') AS NOW_DATE_TIME    --현재일자/현재시간\nFROM DUAL ");
            this.tabMain.tabSub10.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1740,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("제너레이트(Mybits/Map버전1.0)");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboUsers","value","ds_input","code");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtFilter","value","ds_input","codeName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000003S.xfdl", function() {
        /*
        * FormID(화면 ID명)  : COMM000003S.xfdl( 제너레이트(Mybits/Map버전1.0))
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
        this.strMainClass 	= "kr.or.cssf.bass";
        this.str1Lvl 		= "adm";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/

        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//사용자 화면  초기화 함수
        	this.fn_Init();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        this.fn_Init = function()
        {
        	this.divSearch.form.cboUser01.set_value(this.str1Lvl);
        	var str1Lvl = this.divSearch.form.cboUser01.value;

        	this.ds2Depth.filter("LEVEL == '" +this.str1Lvl + "'");
        	this.divSearch.form.cboUser02.set_value("test");
        	var str2Lvl = this.divSearch.form.cboUser02.value;
        	this.fn_costText(str2Lvl);

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
        };

        this.fn_costText = function(str2Lvl)
        {
        	this.divSearch.form.edtPath.set_value(str2Lvl);
        	this.divSearch.form.edtPackage.set_value(this.strMainClass + "." + str2Lvl);
        	var strComText 		= this.fn_strTextToUpper(str2Lvl);
        	this.divSearch.form.edtWorkName.set_value(strComText);
        	this.divSearch.form.edtWorkName1.set_value("Master");
        	var strMstClaseNm 	= this.divSearch.form.edtWorkName.text.trim();
        	var strDatClassNm	= this.divSearch.form.edtWorkName1.text.trim();
        	var strTotClaseNm 	= strMstClaseNm + strDatClassNm;

        	this.divSearch.form.edtController.set_value(strTotClaseNm 	+ "Controller.java");
        	this.divSearch.form.edtService.set_value(strTotClaseNm    	+ "Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strTotClaseNm  + "ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strTotClaseNm  		+ "DAO.java");
        	this.divSearch.form.edtSqlXml.set_value(strTotClaseNm  		+ ".xml");
        	this.divSearch.form.edtNexacro.set_value(strTotClaseNm  	+ ".xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strTotClaseNm    	+ "VO.java");
        };

        this.postInit = function()
        {
        	this.cboUsers.set_value("RIMS");
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };


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
        };
        /**********************************************************************
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.preSearch = function()
        {
        	return true;
        };

        this.dvSearch_btnSearch_onclick = function(obj,e)
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

        };


        this.postSearch = function()
        {
        	//trace(this.DS_Master.saveXML());
        };
        /**********************************************************************
        	05-1. detail 조회 함수 선언
        ***********************************************************************/
        this.DS_Master_onrowposchanged = function(obj,e)
        {
        	this.DSearch_OnClick();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.preDSearch = function()
        {
        	return true;
        };


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
        		strArg 	   	   += " code="		+ nexacro.wrapQuote(this.cboUsers.value);
        	var strCallBack    	= "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync       	= true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로


        	this.gfn_Transaction(strSvc
        						, strUrl
        						, strInDs
        						, strOutDs
        						, strArg
        						, strCallBack
        						, strASync);
        };
        /**********************************************************************************************************************
        * 공통으로 사용하는 Function
        ***********************************************************************************************************************/
        /**
        * 첫자 대문자 만들기
        */
        this.fn_strTextToUpper = function(FileName)
        {
        	var strXmlFile ="";
        	strXmlFile = (FileName.substr(0,1)).toUpperCase() + FileName.substr(1);
        	return strXmlFile;
        };

        /**
        * 첫자 대문자 만들기
        */
        this.fn_xmlFile = function(FileName)
        {
        	var strXmlFile ="";
        	strXmlFile = (FileName.substr(0,1)).toLowerCase() + FileName.substr(1);
        	return strXmlFile;
        };

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

        	var strPath 			= (this.divSearch.form.edtPath.text.trim()).toLowerCase();
        	var strMixmlFileNm 		= strPath.split(".");
        	var strName 			= "";
        	var strWork 			= this.divSearch.form.edtWorkName.text.trim() + this.divSearch.form.edtWorkName1.text.trim();

        	for(var i = 0; i<strMixmlFileNm.length ; i++)
        	{
        		if(strMixmlFileNm.length < 2)
        		{
        			this.alert("최소한 2레벨은 입력하셔야 합니다.ex)oem.xxx");

        		}else
        		{
        			if(strMixmlFileNm.length==2)
        			{
        				strName = strMixmlFileNm[i].toLowerCase() + this.divSearch.form.edtWorkName.text.trim();

        			}else if(strMixmlFileNm.length==3)
        			{
        				if(i == 1)
        				{
        					strName = strMixmlFileNm[i].toLowerCase();

        				}else if(i == 2)
        				{
        					strName += (strMixmlFileNm[i].toUpperCase()).substr(0,1) + strMixmlFileNm[i].substr(1) + this.divSearch.form.edtWorkName.text.trim() + ".xml";
        				}
        			}
        		}
        	}

        	return strName;
        }


        this.postDSearch = function()
        {
        	var strTableName 	= this.DS_Master.getColumn(this.DS_Master.rowposition, "tableName");

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName);
        	this.fn_txtPidXml();
        	this.fn_txtVo();
        }

        /**********************************************************************************************************************
        * 서버 프로세스 Navigation시작
        ***********************************************************************************************************************/
        /**
        * Devon Navigation Create()
        * Contorler /입력/저장/수정/삭제
        */
        this.fn_txtContorller = function()
        {
        	var strContoller 	= "";
        	var strGroup 		= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod		= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 	  	= strGroup + strMethod;
        	var strXpName    	= strWork + "Controller";
        	var strServiceName  = strWork + "Service";
        	var strServiceName1 = this.fn_xmlFile(strWork) + "Service";
        	var dirPath         = this.gfn_trim(this.divSearch.form.cboUser02.value);
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();

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

        	this.tabMain.tabSub02.form.txtContoller.set_value(strContoller);

        };

        /**********************************************************************************************************************
        * 서버 프로세스 명령어 처리(입력/수정/삭제/저장) Cmd
        ***********************************************************************************************************************/
        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_txtService = function()
        {
        	var strService 	= "";
        	var strGroup 	= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod	= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 	= strGroup + strMethod;
        	var strXpName  	= strWork + "Service";
        	var strPath     = this.divSearch.form.edtPackage.text.trim();

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

        	this.tabMain.tabSub03.form.txtSarvice.set_value(strService);
        };

        /**
        * Devon SaveCmd Create()
        * 저장 Cmd 자동생성기
        */
        this.fn_txtServiceImpl = function()
        {
        	var strServiceImpl 		= "";
        	var strGroup 			= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod			= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 			= strGroup + strMethod;
        	var strXpName    		= strWork  + "ServiceImpl";
        	var strXpServiceName    = strWork  + "Service";
        	var strXpServiceDAO  	= strWork  + "DAO";
        	var strXpServiceVO  	= strWork  + "VO";
        	var strXpServiceDAO1    = this.fn_xmlFile(strWork) + "DAO";
        	var strPath     		= this.divSearch.form.edtPackage.text.trim();
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
        	strServiceImpl += "     	outDataset.put(" + "\"" + "dsMaster" + "\"" + ", records );                                         \n";
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
        	strServiceImpl += " 		List<?> list = inDataset.get(" + "\"" + "input" + "\"" + ");                                                          	\n";
        	strServiceImpl += " 		" + strXpServiceVO + " paramVO = (" + strXpServiceVO + ")list.get(0);                                             	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		List<?> list1 = inDataset.get(" + "\"" + "input1" + "\"" + ");                                                        	\n";
        	strServiceImpl += " 		                                                                                                	\n";
        	strServiceImpl += " 		for (int i = 0; i < list.size(); i++) {                                                         	\n";
        	strServiceImpl += " 			" + strXpServiceVO + " vo = (" + strXpServiceVO + ") list.get(i);                                         		\n";
        	strServiceImpl += " 			                                                                                        		\n";
        	strServiceImpl += " 			if ( vo.getRowType() == DataSet.ROW_TYPE_INSERTED ) { // 저장                           		\n";
        	strServiceImpl += " 				//pk레코드조회                                                                  			\n";
        	strServiceImpl += " 				List <" + strXpServiceVO + "> recordKeyValue = " + strXpServiceDAO1 + ".retrieveKeyValue(paramVO);   			\n";
        	strServiceImpl += " 				" + strXpServiceVO + " mapKeyValue = (" + strXpServiceVO + ")list.get(0);                         			\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		 strColPk 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strServiceImpl += " 				outDataset.put(" + "\"" + this.fn_strColName(strColName.toLowerCase()) + "\"" + ", mapKeyValue.get" + this.fn_strTextToUpper(this.fn_strColName(strColName.toLowerCase())) + "() );    	        				\n";
        		 }
        	}

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
        	strServiceImpl += " 		outDataset.put(" + "\"" + "DS_Master" + "\"" + ", records );                                                             \n";
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
        	strServiceImpl += " 		List<?> list = inDataset.get(" + "\"" + "input" + "\"" + ");                                                          	\n";
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

        	this.tabMain.tabSub04.form.txtServiceImpl.set_value(strServiceImpl);
        };

        /**
        * Devon DeleteCmd Create()
        * 삭제 Cmd 자동생성기
        */
        this.fn_txtDao = function()
        {
        	var strDao 				= "";
        	var strGroup 			= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod			= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 			= strGroup + strMethod;
        	var strXpName    		= strWork  + "ServiceImpl";
        	var strXpServiceName    = strWork  + "Service";
        	var strXpServiceDAO  	= strWork  + "DAO";
        	var strXpServiceVO  	= strWork  + "VO";
        	var strPath     		= this.divSearch.form.edtPackage.text.trim();

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

        	this.tabMain.tabSub05.form.txtDao.set_value(strDao);
        };

        /*===============================================================================================================================*/
        this.fn_txtXmlquery = function(strTableName)
        {
        	var strGroup     	= this.divSearch.form.edtWorkName.text.trim();
        	var strWork 	 	= this.divSearch.form.edtWorkName.text.trim() + this.divSearch.form.edtWorkName1.text.trim();
        	var strXpServiceDao = strWork + "DAO";
        	var strPath 		= this.divSearch.form.edtPackage.text.trim();
        	var idx   			= 0;
            var nRowCnt 		= this.DS_Detail.rowcount;
        	var strMetaData 	= "";
        	var strColName  	= "";
        	var strColPk    	= "";
        	var strDataLength 	= "";
        	var	strColType    	= "";
        	var strColComent	= "";
        	var strDto       	= this.gfn_trim((this.divSearch.form.edtDtoVo.value)).substr(0,this.gfn_trim((this.divSearch.form.edtDtoVo.value)).indexOf("."));

        	this.tabMain.tabSub06.form.txtXmlquery.set_value("");

        	strMetaData += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>																			\n";
        	strMetaData += "<!DOCTYPE mapper PUBLIC  "+ "\"" + "-//mybatis.org//DTD SQL Mapper 3.0//EN" + "\" " + "\"" + "http://mybatis.org/dtd/mybatis-3-mapper.dtd" + "\"" + ">		\n";
        	strMetaData += "<mapper namespace=" + "\"" + strXpServiceDao + "\"" + ">																											\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 조회(입력) -->								\n";
        	strMetaData += "\t" + "<select id="  + "\"" +"retrieve"  + strWork + "\""  + " parameterType=" + "\"" + strDto + "\"" + " " +  "resultType=" + "\""  + strDto + "\"" + ">                    									\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                													\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "SELECT                                                  											\n";
        	strMetaData += "\t"	+ "\t" + "\t" +  "       " + "0                                 AS chk" + "/*".padLeft((30-"chk".length)," ") + "chk" + "*/        		\n";

        	 for (idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));
        		strMetaData += "\t"	+ "\t" + "\t" +  "     , A." + strColName + " AS ".padLeft((35-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "/*".padLeft((30-this.fn_strColName(strColName.toLowerCase()).length)," ") + strColComent + "*/        \n";
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
        				strDsType = "CHAR";
        				break;
                    case "DATE":
        				strDsType = "DATE";
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
        	strMetaData += "\n";
        	strMetaData += "<Grid id=" + "\"" + "grd_list" + "\"" + " taborder=" + "\"" + "1" + "\"" + " binddataset=" + "\"" + "ds_list" + "\"" + " ";
        	strMetaData += "autoenter=" + "\"" + "select" + "\"" + " autofittype=" + "\"" + "col" + "\"" + " ";
        	strMetaData += "onheadclick=" + "\"" + "grd_list_onheadclick" + "\"" + " ";
        	strMetaData += "left=" + "\"" + "0" + "\"" + " top=" + "\"" + "123" + "\"" + " right=" + "\"" + "20" + "\"" + " bottom=" + "\"" + "0" + "\"" + ">\n";
        	strMetaData += "       <Formats>\n";
        	strMetaData += "              <Format id=" + "\"" + "default" + "\"" + ">\n";
        	strMetaData += "                     <Columns>\n";
        	strMetaData += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	strMetaData += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strMetaData += "                            <Col size=" + "\"" + "100" + "\"" + "/>\n";
        	}
        	strMetaData += "                     </Columns>\n";
        	strMetaData += "                     <Rows>\n";
        	strMetaData += "                            <Row" + " size=" + "\"" + "30" + "\"" + " band=" + "\"" + "head" + "\"" + "/>\n";
        	strMetaData += "                            <Row" + " size=" + "\"" + "30" + "\"" + "/>\n";
        	strMetaData += "                     </Rows>\n";
        	strMetaData += "                     <Band id=" + "\"" + "head" + "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + "/>  \n";
        	strMetaData += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " text=" + "\"" + "No." + "\"" + "/>  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strHeadName = this.DS_Detail.getColumn(idx, "comments");
        		strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " disptype=" + "\"" + "normal" + "\"" + " text=" + "\"" + this.gfn_trim(strHeadName).toLowerCase() + "\"" + "/>\n";
        	}
        	strMetaData += "                     </Band>\n";
        	strMetaData += "                     <Band id=" + "\"" + "body" + "\"" + ">\n";
        	strMetaData += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + " text=" + "\"" + "bind:chk" + "\"" + " editmaxlength=" + "\"" + "1" + "\"" + "/>\n";
        	strMetaData += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " expr=" + "\"" + "expr:(dataset.getRowType(currow)) == '2' ? '+':(dataset.getRowType(currow)) == '4' ? 'U':currow+1" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "columnName");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		strDataLength = this.DS_Detail.getColumn(idx, "dataLength");

        		var strDsType;
        		var strAlignSize;
        		var strEType;
        		switch (strColType)
        		{
        			case "VARCHAR2":
        			case "VARCHAR":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "left";
        				break;
        			case "CHAR":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "center";
        				break;
        			case "DATE":
        				strDsType = "date";
        				strEType = "date";
        				strAlignSize = "center";
        				break;
        			case "NUMBER":
        				strDsType = "number";
        				strEType = "mask";
        				strAlignSize = "right";
        				break;
        			case "INTEGER":
        				strDsType = "number";
        				strEType = "mask";
        				strAlignSize = "right";
        				break;
        			case "BLOB":
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "left";
        				break;
        			default:
        				strDsType = "text";
        				strEType = "text";
        				strAlignSize = "center";
        				break;
        		}
        		if (strDsType == "date")
        		{
        			strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.fn_strColName(strColName.toLowerCase()) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + " calendardisplaynulltype=" + "\"" + "none" + "\"" + "/>\n";
        		}
        		else
        		{
        			strMetaData += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.fn_strColName(strColName.toLowerCase()) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + "/>\n";
        		}
        	}
        	strMetaData += "                    </Band>\n";
        	strMetaData += "              </Format>\n";
        	strMetaData += "      </Formats>\n";
        	strMetaData += "</Grid>\n";
        	strMetaData += "------------------------------------salMap 인터페이스(sqlSession-config.xml 등록해주세요).   ------------------------------------------\n";
        	strMetaData += "\n";

        	strMetaData += "<package name=" + "\"" + "kr.or.cssf.bass." + this.divSearch.form.cboUser02.value + ".vo" + "\"" + "/> \n";

        	this.tabMain.tabSub06.form.txtXmlquery.set_value(strMetaData);

        };

        /**
        	테이블 크레이트를 만든다
         */
        this.fn_txtXOracle = function(strTableName)
        {
        	this.tabMain.tabSub07.form.txtXOracle.set_value("");
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

            this.tabMain.tabSub07.form.txtXOracle.set_value(strXOracle + "\n\n" + strTabspace + "\n\n" + strComent + "\n\n" + strTabIndex + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 조회 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 입력 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData1 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 수정 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData3 + "\n\n"
        								   + " /* ---------------(" + strTableName + ")테이블 삭제 쿼리 입니다. ----------------------- */ \n\n"
        								   + strSqData2 + "\n\n");
        };

        this.fn_txtPidXml = function()
        {
        	var strPidxml = "";

        	var strGroup 	= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod	= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 	= strGroup + strMethod;
        	var strPath 	= this.divSearch.form.edtPackage.text.trim();

        	this.tabMain.tabSub08.form.txtPID.set_value("");
        	var objDate 	= new Date();
        	var nYear   	= objDate.getFullYear();
        	var nMonth  	= objDate.getMonth()+1;
        	var nDay 		= objDate.getDate();

        	strPidxml += "/**********************************************************************																	\n";
        	strPidxml += "* FormID(화면   ID명): " +  "Xpt" + strWork + ".xfdl" + "(싱클처리 템풀릿(단일처리))                                                                                                                              \n";
        	strPidxml += "* 작 성			일 명: jiback                                                                                                                                                                   \n";
        	strPidxml += "* 작 성	    	일 자: "+ nYear + "/" +nMonth + "/" + nDay + "                                                                                                                                                                       \n";
        	strPidxml += "* 변 경     	일 자:                                                                                                                                                                                  \n";
        	strPidxml += "* 변 경			자 명:                                                                                                                                                                          \n";
        	strPidxml += "* 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술                                                                                                                                           \n";
        	strPidxml += "*/                                                                                                                                                                                                        \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	01. 전처리 공통 함수 선언                                                                                                                                                                               \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "include " + "\"" + "lib::nxCommon.xjs" + "\"" + ";                                                                                                                                                         \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	02. 폼 변수 정의                                                                                                                                                                                        \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "this.lvchkColidDs   	= " + "\"" + "coCd$classNm" + "\"" + ";         		// 필수 입력사항 칼럼ID  예)  " + "\"" + "commSmcd$commName" + "\"" + "                                         \n";
        	strPidxml += "this.lvchkColNameDs 	= " + "\"" + "회사코드$설명" + "\"" + ";                                                                                                                                        \n";
        	strPidxml += "this.iFind			= 0;                                                                                                                                                                            \n";
        	strPidxml += "this.lvNotNullobj     = " + "\"" + "" + "\"" + ";                                                                                                                                                           \n";
        	strPidxml += "this.dsDummy1         = new Dataset;                                                                                                                                                                               \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	03. 폼 로드 및 닫을때(폼이 포커스 갈때)                                                                                                                                                                 \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 폼 로드 완료후 초기값 Setting                                                                                                                                                                   \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.form_onload = function(obj:Form, e:nexacro.InitEventInfo)                                                                                                                                                          \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	//사용자 화면  초기화 함수                                                                                                                                                                              \n";
        	strPidxml += "   	this.fn_formInit();                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 폼언 로드(닫기전 셋팅)  Setting                                                                                                                                                                 \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.form_onclose = function(obj:Form, e:nexacro.CloseEventInfo)                                                                                                                                                    \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	04. 공통 코드 및 콤보 데이타 조회                                                                                                                                                                       \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "this.fn_formInit = function()                                                                                                                                                                                    \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	//그리드에 필수항목을 표시함.                                                                                                                                                                                                      \n";
        	strPidxml += "	//this.gfn_cmmnGridSetNotNull(this.gdMaster, this.lvchkColidDs);                                                                                                                                                         \n";
        	strPidxml += "	//일반 컴포넌트에 필수항목을 표시함this.cfn_CmmnMakeNotNullImg("+ "\"" + "cbcomp1$txEcit"+ "\"" + ",div)                                                                                                                                                                                                      \n";
        	strPidxml += "	//this.gfn_CmmnMakeNotNullImg(lvNotNullobj, this);      //컴포넌트이름,메인객체ex)div/mainTab.subTab 이런식으로 넣음                                                                                                                                                      \n";
        	strPidxml += "	/*                                                                                                                                                                                                        \n";
        	strPidxml += "	var strDs   = " + "\"" + "dsYn|dsComponay|dsGYn|dsGComponay" + "\"" + ";		// 데이터를 받을 데이터셋리스트     예) " + "\"" + "DS_CODE01|DS_CODE02|DS_CODE03" + "\"" + "                   \n";
        	strPidxml += "	var strLgcd = " + "\"" + "B0010|N0006|B0010|N0006" + "\"" + ";           		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) " + "\"" + "Z01|Z02|Z03" + "\"" + "                   \n";
        	strPidxml += "	var strComb = " + "\"" + "X|T|X|X" + "\"" + ";   								// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)                                                            \n";
        	strPidxml += "	var strOptn = " + "\"" + "0000" + "\"" + ";										// 조건문 " + "\"" + " AND COMM_IT02 = '" + "\"" + " + vip + " + "\"" + "'|||" + "\"" + ";                      \n";
        	strPidxml += "	var svcId 	 = " + "\"" + "Init" + "\"" + ";   									//콤보의 (A:기본명-네임바운드nmae ,B:코드에[01] 기본명-네임바운드name1)                                         \n";
        	strPidxml += "  */                                                                                                                                                                                                        \n";
        	strPidxml += "   // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);                                                                                                                                    \n";
        	strPidxml += "   // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.                                                                                                                                                   \n";
        	strPidxml += "   /*                                                                                                                                                                                                        \n";
        	strPidxml += "  this.gfn_CmmnMultiComboLoad(strDs                                                                                                                                                                           \n";
        	strPidxml += "							  , strLgcd                                                                                                                                                       \n";
        	strPidxml += "							  , strComb                                                                                                                                                       \n";
        	strPidxml += "							  , strOptn                                                                                                                                                       \n";
        	strPidxml += "							  , svcId);                                                                                                                                                       \n";
        	strPidxml += "   */                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "this.postformInit = function()                                                                                                                                                                                   \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	//this.ds_input.setColumn(0, " + "\"" + "coCd" + "\"" + ", null);                                                                                                                                              \n";
        	strPidxml += "	//this.ds_input.setColumn(0, " + "\"" + "coYn" + "\"" + ", 'Y');                                                                                                                                               \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 콜백함수(후처리)                                                                                                                                                                                \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)                                                                                                                                                        \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	this.gfn_clearSortAll(this.gdMaster);                                                                                                                                                                              \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "	if(nErrorCode != 0)                                                                                                                                                                                     \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		this.alert(sErrorMsg);                                                                                                                                                                               \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}else                                                                                                                                                                                                   \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		/*sSvcId (Transaction Id)*/                                                                                                                                                                     \n";
        	strPidxml += "		switch(sSvcId)                                                                                                                                                                                  \n";
        	strPidxml += "		{                                                                                                                                                                                               \n";
        	strPidxml += "			case " + "\"" + "Init" + "\"" + ":                                                                                                                                                      \n";
        	strPidxml += "				this.postformInit();                                                                                                                                                                 \n";
        	strPidxml += "				break;                                                                                                                                                                          \n";
        	strPidxml += "			case " + "\"" + "Search" + "\"" + ":                                                                                                                                                    \n";
        	strPidxml += "			    this.postSearch();                                                                                                                                                                       \n";
        	strPidxml += "			  	break;                                                                                                                                                                          \n";
        	strPidxml += "			case " + "\"" + "Save" + "\"" + ":                                                                                                                                                      \n";
        	strPidxml += "			    this.postSave();                                                                                                                                                                         \n";
        	strPidxml += "				break;                                                                                                                                                                          \n";
        	strPidxml += "			case " + "\"" + "Insert" + "\"" + ":                                                                                                                                                    \n";
        	strPidxml += "				this.postInsert();                                                                                                                                                                   \n";
        	strPidxml += "				break;                                                                                                                                                                          \n";
        	strPidxml += "			case " + "\"" + "Delete" + "\"" + ":                                                                                                                                                    \n";
        	strPidxml += "				this.postDelete();                                                                                                                                                                   \n";
        	strPidxml += "				break;                                                                                                                                                                          \n";
        	strPidxml += "			default:                                                                                                                                                                                \n";
        	strPidxml += "				break;                                                                                                                                                                          \n";
        	strPidxml += "		}                                                                                                                                                                                               \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	05. 조회 함수 선언(마스터 함수)                                                                                                                                                                         \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 조회 전 실행                                                                                                                                                                                    \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.preSearch = function()                                                                                                                                                                                      \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	// 조회조건 셋팅                                                                                                                                                                                        \n";
        	strPidxml += "	return true;                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 마스터 조회 실행                                                                                                                                                                                \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.btSearch_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                 \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(!this.preSearch())                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	var strSvc 		= " + "\"" + "Search" + "\"" + ";                                                                                                                                               \n";
        	strPidxml += "	var strUrl 		= " + "\"" + strPath.replace(/\./g,"/") + "/Retrieve" + strWork + ".do" + "\"" + ";                                                                                             \n";
        	strPidxml += "	var strInDs  	= " + "\"" + "ds_input=ds_input" + "\"" + ";                                                                                                                                            \n";
        	strPidxml += "	var strOutDs 	= " + "\"" + "dsMaster=dsMaster" + "\"" + ";                                                                                                                                            \n";
        	strPidxml += "	var strArg 		= " + "\"" + "" + "\"" + ";                                                                                                                                                     \n";
        	strPidxml += "	var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack                                                                                                                    \n";
        	strPidxml += "	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로                                                                                                          \n";
        	strPidxml += "	this.gfn_Transaction(strSvc                                                                                                                                                                                  \n";
        	strPidxml += "				   		, strUrl                                                                                                                                                                     \n";
        	strPidxml += "				   		, strInDs                                                                                                                                                                    \n";
        	strPidxml += "				   		, strOutDs                                                                                                                                                                   \n";
        	strPidxml += "				   		, strArg                                                                                                                                                                     \n";
        	strPidxml += "				   		, strCallBack                                                                                                                                                                \n";
        	strPidxml += "				   		, strASync);	                                                                                                                                                                \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 조회 후 실행                                                                                                                                                                                    \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.postSearch = function()                                                                                                                                                                                     \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	//trace(this.dsMaster.saveXML());                                                                                                                                                                            \n";
        	strPidxml += "	//trace(this.dsErro.saveXML());                                                                                                                                                                              \n";
        	strPidxml += "	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	06. 추가 함수 선언                                                                                                                                                                                      \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 추가 전 실행(기본체크사항)                                                                                                                                                                      \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.preInsert = function()                                                                                                                                                                                      \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	return true;                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 마스터 추가 실행                                                                                                                                                                                \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.btInsert_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                 \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(!this.preInsert())                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}	                                                                                                                                                                                                \n";
        	strPidxml += "	var nRow = this.dsMaster.addRow();                                                                                                                                                                           \n";
        	strPidxml += "	this.dsMaster.setColumn(nRow," + "\"" + "coCd" + "\"" + ", 	    " + "\"" + "0000" + "\"" + "); 		//업체코드                                                                                      \n";
        	strPidxml += "	this.dsMaster.setColumn(nRow," + "\"" + "useChk" + "\"" + ", 	" + "\"" + "Y" + "\"" + "); 		//사용유무                                                                              \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 처리 후 실행                                                                                                                                                                                    \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.postInsert = function()                                                                                                                                                                                     \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	07. 삭제 함수 선언                                                                                                                                                                                      \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 삭제 버튼 실행                                                                                                                                                                                  \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.preDelete = function()                                                                                                                                                                                      \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	//멀티삭제용도                                                                                                                                                                                          \n";
        	strPidxml += "	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow(" + "\"" + "chk" + "\"" + ",1) == -1)                                                                                                                      \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		this.alert(" + "\"" + "삭제할 데이타가 없습니다.!" + "\"" + ", " + "\"" + "삭제 정보" + "\"" + " ," + "\"" + "warning" + "\"" + ");                                                                  \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "		                                                                                                                                                                                                \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "현재선택행을 삭제하시겠습니까?" + "\"" + ", " + "\"" + "삭제" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "	if(result == 0)	                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "	   return false;                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	//다중삭제 용도                                                                                                                                                                                         \n";
        	strPidxml += "	this.dsMaster.set_enableevent(false);                                                                                                                                                                           \n";
        	strPidxml += "	for(var i=this.dsMaster.rowcount-1;i>-1;i--)                                                                                                                                                                 \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		if(this.dsMaster.getColumn(i," + "\"" + "chk" + "\"" + ") == " + "\"" + "1" + "\"" + " || this.dsMaster.getRowType(i) == 2)                                                                               \n";
        	strPidxml += "		{                                                                                                                                                                                               \n";
        	strPidxml += "			this.dsMaster.deleteRow(i);                                                                                                                                                                  \n";
        	strPidxml += "		}                                                                                                                                                                                               \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	this.dsMaster.set_enableevent(true);                                                                                                                                                                            \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	//개별삭제시                                                                                                                                                                                            \n";
        	strPidxml += "	return true;                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : Row 삭제 또는 Transaction 삭제 처리                                                                                                                                                             \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.btDelete_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                 \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(!this.preDelete())                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	var strSvc 		= " + "\"" + "Delete" + "\"" + ";                                                                                                                                               \n";
        	strPidxml += "	var strUrl 		= " + "\"" + strPath.replace(/\./g,"/") + "/Delete" + strWork + ".do" + "\"" + ";                                                                                               \n";
        	strPidxml += "	var strInDs  	= " + "\"" + "ds_input=dsMaster:u" + "\"" + ";                                                                                                                                          \n";
        	strPidxml += "	var strOutDs 	= " + "\"" + "" + "\"" + ";                                                                                                                                                             \n";
        	strPidxml += "	var strArg 		= " + "\"" + "" + "\"" + ";                                                                                                                                                     \n";
        	strPidxml += "	var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack                                                                                                                    \n";
        	strPidxml += "	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로                                                                                                          \n";
        	strPidxml += "	this.gfn_Transaction(strSvc                                                                                                                                                                                  \n";
        	strPidxml += "				   		, strUrl                                                                                                                                                                     \n";
        	strPidxml += "				   		, strInDs                                                                                                                                                                    \n";
        	strPidxml += "				   		, strOutDs                                                                                                                                                                   \n";
        	strPidxml += "				   		, strArg                                                                                                                                                                     \n";
        	strPidxml += "				   		, strCallBack                                                                                                                                                                \n";
        	strPidxml += "				   		, strASync);	                                                                                                                                                                \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "						                                                                                                                                                                \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "this.postDelete = function()                                                                                                                                                                                     \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);	                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	08. 저장 함수 선언                                                                                                                                                                                      \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 저장 전 실행                                                                                                                                                                                    \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.preSave = function()                                                                                                                                                                                        \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "	if(this.dsMaster.rowcount > 0)                                                                                                                                                                               \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		for(var i=0;i<this.dsMaster.rowcount; i++)                                                                                                                                                           \n";
        	strPidxml += "		{                                                                                                                                                                                               \n";
        	strPidxml += "			if(this.dsMaster.getColumn(i," + "\"" + "chk" + "\"" + ") == " + "\"" + "0" + "\"" + ")                                                                                                      \n";
        	strPidxml += "			{                                                                                                                                                                                       \n";
        	strPidxml += "				continue;                                                                                                                                                                       \n";
        	strPidxml += "			}                                                                                                                                                                                       \n";
        	strPidxml += "			this.dsMaster.setColumn(i," + "\"" + "chk" + "\"" + "," + "\"" + "0" + "\"" + ");                                                                                                            \n";
        	strPidxml += "		}                                                                                                                                                                                               \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	if(!this.gfn_isUpdate(this.dsMaster))                                                                                                                                                                             \n";
        	strPidxml += "    {                                                                                                                                                                                                     \n";
        	strPidxml += "        this.alert(" + "\"" + "변경된 이력이 없습니다." + "\"" + "," + "\"" + "저장" + "\"" + "," + "\"" + "question" + "\"" + ");                                                                             \n";
        	strPidxml += "        return false;                                                                                                                                                                                     \n";
        	strPidxml += "    }                                                                                                                                                                                                     \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	  var result = new Array();                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "     // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)                                                                                        \n";
        	strPidxml += "     // chkFocusFlg = false : gfn_CmmnChkEssentialItem(dsMaster, lvchkColidDs, lvchkColNameDs," + "\"" + "" + "\"" + ",chkFocusFlg,this)                                                                                        \n";
        	strPidxml += "    var chkFocusFlg = true;                                                                                                                                                                               \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "    result = this.gfn_CmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs,this.gdMaster,chkFocusFlg,this);                                                                                                  \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "    if(result[0] != " + "\"" + "success" + "\"" + ")                                                                                                                                                      \n";
        	strPidxml += "    {                                                                                                                                                                                                     \n";
        	strPidxml += "         this.alert(result[0]);                                                                                                                                                                                \n";
        	strPidxml += "         this.dsMaster.set_rowposition(result[1]);  // 데이터셋 변경                                                                                                                                              \n";
        	strPidxml += "         return false;                                                                                                                                                                                     \n";
        	strPidxml += "    }                                                                                                                                                                                                     \n";
        	strPidxml += "  	                                                                                                                                                                                                \n";
        	strPidxml += "    var result = this.confirm( " + "\"" + "저장 하시겠습니까?" + "\"" + ", " + "\"" + "저장" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                             \n";
        	strPidxml += "	  if(result == 0)	                                                                                                                                                                                        \n";
        	strPidxml += "	  {                                                                                                                                                                                                       \n";
        	strPidxml += "	     return false;                                                                                                                                                                                        \n";
        	strPidxml += "	  }                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	return true;	                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 저장 실행                                                                                                                                                                                       \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.btSave_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                 \n";
        	strPidxml += "{	                                                                                                                                                                                                        \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	if(!this.preSave())                                                                                                                                                                                          \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "	var strSvc 		= " + "\"" + "Save" + "\"" + ";                                                                                                                                                 \n";
        	strPidxml += "	var strUrl 		= " + "\"" + strPath.replace(/\./g,"/") + "/Save" + strWork + ".do" + "\"" + ";                                                                                                 \n";
        	strPidxml += "	var strInDs  	= " + "\"" + "ds_input=ds_input:a " + "\"" + ";                                                                                                                                         \n";
        	strPidxml += "		strInDs    += " + "\"" + "ds_input1=dsMaster:u" + "\"" + ";                                                                                                                                     \n";
        	strPidxml += "	var strOutDs 	= " + "\"" + "dsMaster=dsMaster" + "\"" + ";                                                                                                                                            \n";
        	strPidxml += "	var strArg 		= " + "\"" + "" + "\"" + ";                                                                                                                                                     \n";
        	strPidxml += "	var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack                                                                                                                    \n";
        	strPidxml += "	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로                                                                                                          \n";
        	strPidxml += "	this.gfn_Transaction(strSvc                                                                                                                                                                                  \n";
        	strPidxml += "				   		, strUrl                                                                                                                                                                     \n";
        	strPidxml += "				   		, strInDs                                                                                                                                                                    \n";
        	strPidxml += "				   		, strOutDs                                                                                                                                                                   \n";
        	strPidxml += "				   		, strArg                                                                                                                                                                     \n";
        	strPidxml += "				   		, strCallBack                                                                                                                                                                \n";
        	strPidxml += "				   		, strASync);                                                                                                                                                                 \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "			                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " *	기능 : 저장시 후처리                                                                                                                                                                            \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.postSave = function()                                                                                                                                                                                       \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	this.gfn_getRowCount(this.stRowCnt,this.dsMaster);                                                                                                                                                                                                          \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	09. 초기화                                                                                                                                                                                              \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	10. 출력 함수 선언                                                                                                                                                                                      \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	11. ExcelDnwn 엑셀로 출력                                                                                                                                                                               \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "this.btExcelDn_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                       \n";
        	strPidxml += "{	                                                                                                                                                                                                        \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	if(this.dsMaster.rowcount < 1)                                                                                                                                                                               \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		this.alert(" + "\"" + "출력할 엑셀데이타가 없습니다.!" + "\"" + ", " + "\"" + "EXCEL 정보" + "\"" + " ," + "\"" + "information" + "\"" + ");                                                         \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "Excel를 출력하시겠습니까?" + "\"" + ", " + "\"" + "EXCEL 출력" + "\"" + ", " + "\"" + "question" + "\"" + " );                                                        \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	if(result == 0)	                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "	   return false;                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	this.gfn_excelExport(this.gdMaster);                                                                                                                                                 \n";
        	strPidxml += "  //this.gfn_excelExport([this.gdMaster,this.gdDetail]);                                                                                                                                                                                                         \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	12. ExcelUpLoad 신규저장시                                                                                                                                                                              \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += " * 기능 : 삭제 버튼 실행                                                                                                                                                                                  \n";
        	strPidxml += " */                                                                                                                                                                                                       \n";
        	strPidxml += "this.preExcelUp = function()                                                                                                                                                                                     \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	var result = this.confirm( " + "\"" + "기존데이타를 삭제하고 신규데이타를 일괄적용하겠습니까?" + "\"" + ", " + "\"" + "EXCEL 저장" + "\"" + ", " + "\"" + "question" + "\"" + " );                           \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "	if(result == 0)	                                                                                                                                                                                        \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "	   return false;                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	//개별삭제시                                                                                                                                                                                            \n";
        	strPidxml += "	return true;                                                                                                                                                                                            \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "this.btExcelUp_onclick = function(obj:Button,  e:nexacro.ClickEventInfo)                                                                                                                                                 \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(!this.preExcelUp())                                                                                                                                                                                       \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		return false;                                                                                                                                                                                   \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "                                                                                                                                                                                                          \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	13. Get, Set Method                                                                                                                                                                                     \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**********************************************************************                                                                                                                                   \n";
        	strPidxml += "	14. 기타 Control Event                                                                                                                                                                                  \n";
        	strPidxml += "***********************************************************************/                                                                                                                                  \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += "	그리드멀티 소트정열                                                                                                                                                                                     \n";
        	strPidxml += "*/                                                                                                                                                                                                        \n";
        	strPidxml += "this.gdMaster_onheaddblclick = function(obj:Grid, e:nexacro.GridClickEventInfo)                                                                                                                                          \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(e.cell != 0 && e.cell != 1)                                                                                                                                                                            \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		this.gfn_gridSort(obj,e);                                                                                                                                                                            \n";
        	strPidxml += "		                                                                                                                                                                                                \n";
        	strPidxml += "		                                                                                                                                                                                                \n";
        	strPidxml += "	}                                                                                                                                                                                                       \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";
        	strPidxml += "/**                                                                                                                                                                                                       \n";
        	strPidxml += "	그리드멀티 현재로 초기화                                                                                                                                                                                \n";
        	strPidxml += "*/                                                                                                                                                                                                        \n";
        	strPidxml += "this.gdMaster_onheadclick = function(obj:Grid, e:nexacro.GridClickEventInfo)                                                                                                                                            \n";
        	strPidxml += "{                                                                                                                                                                                                         \n";
        	strPidxml += "	if(e.cell == 0)                                                                                                                                                                                         \n";
        	strPidxml += "	{                                                                                                                                                                                                       \n";
        	strPidxml += "		this.gfn_checkAll(obj, e);                                                                                                                                                                       \n";
        	strPidxml += "	                                                                                                                                                                                                        \n";
        	strPidxml += "	}                                                                                                                                                                                                 \n";
        	strPidxml += "}                                                                                                                                                                                                         \n";

        	this.tabMain.tabSub08.form.txtPID.set_value(strPidxml);
        };

        /**
        * Devon RetrieveCmd Create()
        * 조회 Service 자동생성기
        */
        this.fn_txtVo = function()
        {
        	var strVo 			= "";
        	var nRowCnt 		= this.DS_Detail.rowcount;
        	var strGroup     	= this.divSearch.form.edtWorkName.text.trim();
        	var strMethod	 	= this.divSearch.form.edtWorkName1.text.trim();
        	var strWork 	 	= strGroup + strMethod;
        	var strXpName   	= "";
        	strXpName      		=  strWork + "VO";
        	//strXpName      		=  this.fn_strTextToUpper(this.fn_strColName(this.DS_Master.getColumn(this.DS_Master.rowposition,"tableName").toLowerCase()))+ "VO";

        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
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
        	strVo += "import egovframework.cmmn.vo.DefaultVO;                                           \n";
        	strVo += "                                                                                  \n";
        	strVo += "@Alias( " + "\"" + strXpName + "\"" + " )                                     \n";
        	strVo += "@Data                                                                             \n";
        	strVo += "@ToString( callSuper = true )                                                     \n";
        	strVo += "public class " + strXpName + " extends DefaultVO {                                \n";
        	strVo += "                                                                                  \n";

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
        	this.tabMain.tabSub09.form.txtVo.set_value(strVo);
        };

        this.cboUsers_onitemchanged = function(obj,e)
        {
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };

        this.divSearch_cboUser02_onitemchanged = function(obj,e)
        {
        	this.divSearch.form.edtPackage.set_value(this.strMainClass + "." +  e.postvalue);
        	this.divSearch.form.edtPath.set_value(e.postvalue);
        	this.fn_costText(e.postvalue);
        	this.postDSearch();
        };

        this.edtFilter_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };

        this.divSearch_btnExcel_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.tabMain.tabSub01.form.grdDetail);
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
            this.cboUsers.addEventHandler("onitemchanged",this.cboUsers_onitemchanged,this);
            this.edtFilter.addEventHandler("onkeydown",this.edtFilter_onkeydown,this);
            this.divSearch.form.cboUser01.addEventHandler("onitemchanged",this.divSearch_cboUser01_onitemchanged,this);
            this.divSearch.form.cboUser02.addEventHandler("onitemchanged",this.divSearch_cboUser02_onitemchanged,this);
            this.divSearch.form.btnExcel.addEventHandler("onclick",this.divSearch_btnExcel_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheadclick",this.tabMain_tabSub01_grdDetail1_onheadclick,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheaddblclick",this.tabMain_tabSub01_grdDetail1_onheaddblclick,this);
            this.DS_Master.addEventHandler("onrowposchanged",this.DS_Master_onrowposchanged,this);
        };
        this.loadIncludeScript("COMM000003S.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
