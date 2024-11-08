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
            this.set_titletext("제너레이트(Ibits/Map버전)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_Master", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ROW_NO\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"32\"/><Column id=\"OWNER\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("DS_Detail", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL_NO\" type=\"STRING\" size=\"32\"/><Column id=\"COLUMN_NAME\" type=\"STRING\" size=\"32\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"32\"/><Column id=\"VW_DATA_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"COL_NULL\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_TYPE\" type=\"STRING\" size=\"32\"/><Column id=\"DATA_LENGTH\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"COL_PK\" type=\"STRING\" size=\"32\"/><Column id=\"COL_DEF\" type=\"STRING\" size=\"32\"/><Column id=\"REMK_TEXT\" type=\"STRING\" size=\"32\"/><Column id=\"ORD\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOwer", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"NAME\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds1Depth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVLE1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">com</Col><Col id=\"NAME\">com</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">sys</Col><Col id=\"NAME\">sys</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">exception</Col><Col id=\"NAME\">exception</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">util</Col><Col id=\"NAME\">util</Col></Row><Row><Col id=\"CODE\">vo</Col><Col id=\"NAME\">vo</Col><Col id=\"LEVLE1\">common</Col></Row><Row><Col id=\"CODE\">cmmn</Col><Col id=\"NAME\">cmmn</Col><Col id=\"LEVLE1\">rte</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"CODE_NAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDepth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">prj</Col><Col id=\"NAME\">prj</Col></Row><Row><Col id=\"CODE\">common</Col><Col id=\"NAME\">common</Col></Row><Row><Col id=\"CODE\">rte</Col><Col id=\"NAME\">rte</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds3Depth", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"NAME\">M : MAIN</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"NAME\">D : DIV</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"NAME\">T : TAB</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">P : POPUP</Col></Row></Rows>");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\"/><Column size=\"142\"/><Column size=\"194\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"테이블\"/><Cell col=\"2\" text=\"테이불명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TABLE_NAME\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:COMMENTS\" displaytype=\"text\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
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
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFilter","81","144","290","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"106","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","550","7","121","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel00","0","8","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("RPJECT ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","75","8","229","32",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","75","38","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","75","68","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","372","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel06","303","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("업무명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","372","7","127","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","669","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel09","498","7","53","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("구분명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","966","66",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","966","36",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbProjectName","81","12","151","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_innerdataset("dsDepth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12","739","7",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","372","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","669","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName","745","10","208","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName1","972","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPackage","81","42","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDao","81","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtController","378","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSqlXml","378","70","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtService","674","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNexacro","674","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtServiceImpl","972","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDtoVo","972","70","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"71","70","22","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("엑셀다운");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel11","897","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Vo/Dto");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel07","600","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Service");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel08","600","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Nexacro");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel01","0","38","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Package");
            obj.set_taborder("2");
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
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel05","303","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("IbitsXml");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","54","22","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel12","670","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("클래스/\r\n메소드명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel10","897","36","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Impl");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edBuisNum","452","11","39","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static13","442","10","13","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","958","10","8","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbGbName","555","11","56","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_innerdataset("ds3Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15","614","10","13","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edGbNum","623","11","39","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbWorkName","377","12","64","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_innerdataset("ds1Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edClassName","1178","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edMethodName","1179","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_readonly("true");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"115\"/><Column size=\"166\"/><Column size=\"102\"/><Column size=\"69\"/><Column size=\"48\"/><Column size=\"97\"/><Column size=\"171\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"컬럼ID\"/><Cell col=\"2\" text=\"컬럼명\"/><Cell col=\"3\" text=\"TYPE\"/><Cell col=\"4\" text=\"NULL\"/><Cell col=\"5\" text=\"PK\"/><Cell col=\"6\" text=\"DEFAULT\"/><Cell col=\"7\" text=\"엑셀임시설명\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" text=\"bind:COL_NO\"/><Cell col=\"1\" text=\"bind:COLUMN_NAME\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COMMENTS\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:VW_DATA_TYPE\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:COL_NULL\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"5\" text=\"bind:COL_PK\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"6\" text=\"bind:COL_DEF\" displaytype=\"text\" edittype=\"none\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/><Cell col=\"7\" text=\"bind:REMK_TEXT\" displaytype=\"text\" edittype=\"text\" combodataset=\"dsGPrefix\" combocodecol=\"code\" combodatacol=\"codeNm\"/></Band></Format></Formats>");
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
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("제너레이트(Ibits/Map버전)");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboUsers","value","ds_input","CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtFilter","value","ds_input","CODE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000001S.xfdl", function() {
        /*
        * FormID(화면 ID명)  : COMM000001S.xfdl(제너레이트(Ibits/Map버전))
        * 작 성		 일 명   : jiback
        * 작 성	     일 자   : 2018/09/15
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
        this.gvlProject = "prj"; //현재 프로젝트명을 셋팅

        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	//각 컴포넌트 타이틀 국제화 처리
         	this.gfn_setTitle();
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

        	var strSvc 			= "formInit";
        	var strUrl 			= "/"+ this.gvlProject + "/sys/RetrieveNxPlatGeneratorUser.do";
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

        this.postformInit = function()
        {
        	this.divSearch.form.cbProjectName.set_value(this.gvlProject);  //  기본프로젝트를 셋팅한다. this.dsDepth => 현프로젝트명을 기입(Project의 약자를 기입:prj);
        	this.ds1Depth.filter("LEVLE1 == '" + this.divSearch.form.cbProjectName.value + "'");
        	this.divSearch.form.cbWorkName.set_value("com");
        	this.divSearch.form.edBuisNum.set_value("001");

        	this.divSearch.form.cbGbName.set_value("M");
        	this.divSearch.form.edGbNum.set_value("01");
        	this.divSearch.form.edtWorkName.set_value("CommonCode");
        	this.divSearch.form.edtWorkName1.set_value("List");

        	this.divSearch.form.edtPackage.set_value("egovframework" + "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) );
        	this.divSearch.form.edClassName.set_value(this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));

        	//DB사용자
        	this.cboUsers.set_value("APP");
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };


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
        			case "formInit":
        				this.postformInit();
        				break;
        			case "Search":
        			    this.postSearch();
        			  	break;
        			case "DSearch":
        			    this.postDSearch();
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
        	var strUrl 		= "/"+ this.gvlProject + "/sys/RetrieveNxPlatGeneratorM.do";
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
        	//this.DS_Master_onrowposchanged(this.DS_Master);
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
            var strUrl 			= "/prj/sys/RetrieveNxPlatGeneratorD.do";
        	var strInDs  		= "";
        	var strOutDs 		= "DS_Detail=DS_Detail";
        	var strArg 			= "TABLE_NAME="	+ nexacro.wrapQuote(this.DS_Master.getColumn(this.DS_Master.rowposition,"TABLE_NAME"));
        		strArg 	   	   += " CODE="		+ nexacro.wrapQuote(this.cboUsers.value);
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
        this.fn_strTextToUpper = function(sText)
        {
        	var strText = sText.substr(0,1).toUpperCase() + sText.substr(1);
        	return strText;
        };

        /**
        * 첫자 소문자 만들기
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
        };

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
        };

        this.postDSearch = function()
        {

        	//trace(this.DS_Detail.saveXML());
        	var strTableName 	= this.cboUsers.value + "." + this.DS_Master.getColumn(this.DS_Master.rowposition, "tableName");
        	var strWork 	 	= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.divSearch.form.cbGbName.value + this.gfn_trim(this.divSearch.form.edGbNum.value);

        	this.divSearch.form.edtController.set_value(strWork 	+ "Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "DAO.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_SQL_oracle.xml");
        	this.divSearch.form.edtNexacro.set_value(strNexacroNm 	+ ".xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "VO.java");

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName);
        	this.fn_txtPidXml();
        	this.fn_txtVo();

        };

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
        	var strGroup     	= this.divSearch.form.edClassName.text.trim();
        	var strMethod	  	= this.divSearch.form.edMethodName.text.trim();
        	var strControlName 	= strGroup + "Controller";
        	var strServiceName  = strGroup + "Service";
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();
        	strContoller += "/*------------------------------------------------------------------------------  												\n";
        	strContoller += " * NAME : " + strControlName + ".java                                                                    						\n";
        	strContoller += " * DESC :                                                                                                          			\n";
        	strContoller += " * VER  : V1.0                                                                                                     			\n";
        	strContoller += " * PROJ : KASA incheon Intrernational Airport 항공보안교육원 프로젝트                                                  		\n";
        	strContoller += " * Copyright 2015 Ready Korea All rights reserved                                                                      		\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *                               MODIFICATION LOG                                                                  			\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *    DATE     AUTHOR                      DESCRIPTION                        													\n";
        	strContoller += " * ----------  ------  ---------------------------------------------------------                                   			\n";
        	strContoller += " * 2015/08/03  jiback(이름)                                                                                         			\n";
        	strContoller += " *------------------------------------------------------------------------------*/                                     		\n";
        	strContoller += "package " + strPath + ".web;                                                                             			            \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import java.util.Map;                                                                                                  		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import javax.annotation.Resource;                                                                                      		\n";
        	strContoller += "import javax.servlet.http.HttpSession;                                                                                     	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import org.apache.commons.logging.LogFactory;                                                                             		\n";
        	strContoller += "import org.apache.commons.logging.Log;                                                                                     	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import org.springframework.stereotype.Controller;                                                                      		\n";
        	strContoller += "import org.springframework.ui.Model;                                                                                   		\n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMapping;                                                         		\n";
        	strContoller += "import org.springframework.web.servlet.ModelAndView;                                                                   		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import xbt.com.utility.SessionUtil;                                                                     	                    \n";
        	strContoller += "import xbt.com.utility.SessionVO;                                                                                		        \n";
        	strContoller += "import " + strPath + ".service." + strServiceName + ";                                                                         \n";
        	strContoller += "import xbt.rte.cmmn.ria.nexacro.NexacroConstant;                                                       				        \n";
        	strContoller += "import xbt.rte.cmmn.ria.nexacro.map.DataSetMap;                                                   					            \n";
        	strContoller += "import xbt.com.nexa.common.exception.CommExceptionUtil;                                                   					    \n";
        	strContoller += "import xbt.rte.cmmn.ria.nexacro.map.NexacroMapDTO;                                                   				            \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "@Controller                                                                                                            		\n";
        	strContoller += "public class " + strControlName + " {                                                                                   		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "	Log logger = LogFactory.getLog(this.getClass());                                                                  			\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /** " + strGroup + "Service */                                                                                          	\n";
        	strContoller += "    @Resource(name = " + "\"" + strServiceName + "\"" + ")                                                                     \n";
        	strContoller += "    private " + strServiceName + " " + strServiceName + ";                                                                     \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 제너레이터 마스터 리스트(actionRetrieve" + strMethod + ")                                                             \n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strPath.replace(/\./g,"/") + "/" + "Retrieve" + strMethod + ".do" + "\"" + ")      \n";
        	strContoller += "	public ModelAndView actionRetrieve" + strMethod + "(NexacroMapDTO xpDto, Model model, HttpSession session)throws Exception {\n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "			ModelAndView mav = new ModelAndView(" + "\"" + "nexacroMapView" + "\"" + ");                                        \n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			Map <String, Object> inVar          = xpDto.getInVariableMap();                                          			\n";
        	strContoller += "			Map <String, DataSetMap> inDataset  = xpDto.getInDataSetMap();                                   					\n";
        	strContoller += "			Map <String, Object> outVar         = xpDto.getOutVariableMap();                                        			\n";
        	strContoller += "			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();                                 					\n";
        	strContoller += "			/*                                                                                              					\n";
        	strContoller += "			System.out.println(" + "\"" + "/=========================start(duBug:print)====================/" + "\"" + ");      \n";
        	strContoller += "			DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                    \n";
        	strContoller += "			System.out.println(" + "\"" + "====================>inVar" + "\"" + " + inVar);                                     \n";
        	strContoller += "			System.out.println(" + "\"" + "====================>inDataset.size()" + "\"" + " + dsMap.size());                   \n";
        	strContoller += "			System.out.println(" + "\"" + "/=========================end===================================/" + "\"" + ");      \n";
        	strContoller += "			*/                                                                                              					\n";
        	strContoller += "			" + strServiceName + ".retrieve" + strMethod + "(inVar, inDataset, outVar, outDataset, sessionVO);                  \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, outVar);                                					    \n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME,   outDataset);                            					    \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                          \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                              \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());                                       					    \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 제너레이터 템플릿 마스터 저장/수정(actionSave" + strMethod + ")                                                      \n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strPath.replace(/\./g,"/") + "/" + "Save" + strMethod + ".do" + "\"" + ")          \n";
        	strContoller += "	public ModelAndView actionSave" + strMethod + "(NexacroMapDTO xpDto, Model model, HttpSession session)throws Exception {    \n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "			ModelAndView mav = new ModelAndView(" + "\"" + "nexacroMapView" + "\"" + ");                                        \n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			Map <String, Object> inVar          = xpDto.getInVariableMap();                                          			\n";
        	strContoller += "			Map <String, DataSetMap> inDataset  = xpDto.getInDataSetMap();                                   					\n";
        	strContoller += "			Map <String, Object> outVar         = xpDto.getOutVariableMap();                                        			\n";
        	strContoller += "			Map <String, DataSetMap> outDataset = xpDto.getOutDataSetMap();                                 					\n";
        	strContoller += "			/*                                                                                              					\n";
        	strContoller += "			System.out.println(" + "\"" + "/=========================start(duBug:print)====================/" + "\"" + ");      \n";
        	strContoller += "			DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                    \n";
        	strContoller += "			System.out.println(" + "\"" + "====================>inVar" + "\"" + " + inVar);                                     \n";
        	strContoller += "			System.out.println(" + "\"" + "====================>inDataset.size()" + "\"" + " + dsMap.size());                   \n";
        	strContoller += "			System.out.println(" + "\"" + "/=========================end===================================/" + "\"" + ");      \n";
        	strContoller += "			*/                                                                                              					\n";
        	strContoller += "			" + strServiceName + ".save" + strMethod + "(inVar, inDataset, outVar, outDataset, sessionVO);                 	    \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_VARIABLES_ATT_NAME, outVar);                                					    \n";
        	strContoller += "			mav.addObject(NexacroConstant.OUT_DATASET_ATT_NAME,   outDataset);                            					    \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                          \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                              \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, e.toString());                                       					    \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * 템플릿 마스터 삭제(actionDelete" + strMethod + ")                                                             			\n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strPath.replace(/\./g,"/") + "/" + "Delete" + strMethod + ".do" + "\"" + ")        \n";
        	strContoller += "	public ModelAndView actionDelete" + strMethod + "(NexacroMapDTO xpDto, Model model, HttpSession session)throws Exception {  \n";
        	strContoller += "	 	                                                                                                        				\n";
        	strContoller += "			ModelAndView mav = new ModelAndView(" + "\"" + "nexacroMapView" + "\"" + ");                                        \n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			Map <String, DataSetMap> inDataset = xpDto.getInDataSetMap();                                   					\n";
        	strContoller += "			" + strServiceName + ".delete" + strMethod + "(inDataset, sessionVO);                 				                \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                               \n";
        	strContoller += "			mav.addObject(NexacroConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                          \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			CommExceptionUtil.setError(e, mav);                                                                                 \n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "}                                                                                                                      		\n";

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

        	var strService 		= "";

        	var strGroup    	= this.divSearch.form.edClassName.text.trim();
        	var strMethod		= this.divSearch.form.edMethodName.text.trim();
        	var strServiceName 	= strGroup + "Service";
        	var strPath    		= this.divSearch.form.edtPackage.text.trim();

        	strService += "/*------------------------------------------------------------------------------  								\n";
        	strService += " * NAME : " + strServiceName + ".java                                                                    				\n";
        	strService += " * DESC :                                                                                                        \n";
        	strService += " * VER  : V1.0                                                                                                   \n";
        	strService += " * PROJ : KASA incheon Intrernational Airport 항공보안교육원 프로젝트                                         \n";
        	strService += " * Copyright 2015 Ready Korea All rights reserved                                                                \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *                               MODIFICATION LOG                                                                \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *    DATE     AUTHOR                      DESCRIPTION                        									\n";
        	strService += " * ----------  ------  ---------------------------------------------------------                                 \n";
        	strService += " * 2015/08/15  jiback(입력)                                                                                     \n";
        	strService += " *------------------------------------------------------------------------------*/                               \n";
        	strService += "package " + strPath + ".service;                                                                       	\n";
        	strService += "                                                                                                                 \n";
        	strService += "import java.util.Map;                                                                                            \n";
        	strService += "                                                                                                                 \n";
        	strService += "import xbt.com.utility.SessionVO;																\n";
        	strService += "import xbt.rte.cmmn.ria.nexacro.map.DataSetMap;                                                 		\n";
        	strService += "                                                                                                                 \n";
        	strService += "public interface " + strServiceName + " {                                                                            	\n";
        	strService += "	                                                                                                                \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 제너레이터 마스터 리스트(retrieve" + strMethod + ")                                                         \n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                             \n";
        	strService += "	void retrieve" + strMethod + "(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                 	\n";
        	strService += "			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  \n";
        	strService += "                                                                                                                 \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 템플릿 마스터 저장/수정(save" + strMethod + ")                                                            \n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                             \n";
        	strService += "	void save" + strMethod + "(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,                      \n";
        	strService += "			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  \n";
        	strService += "                                                                                                                 \n";
        	strService += "	/**                                                                                                             \n";
        	strService += "	 * 템플릿 마스터 삭제(delete" + strMethod + ")                                                              	\n";
        	strService += "	 * @param input                                                                                                 \n";
        	strService += "	 * @return                                                                                                      \n";
        	strService += "	 * @throws Exception                                                                                           	\n";
        	strService += "	 */                                                                                                            	\n";
        	strService += "	void delete" + strMethod + "(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;          \n";
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
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceImplName 	= strGroup + "ServiceImpl";
        	var strServiceName    	= strGroup + "Service";
        	var strServiceDAO  	    = strGroup + "DAO";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	strServiceImpl += "/*------------------------------------------------------------------------------  											\n";
        	strServiceImpl += " * NAME : " + strServiceImplName + ".java                                                                    							\n";
        	strServiceImpl += " * DESC :                                                                                                          			\n";
        	strServiceImpl += " * VER  : V1.0                                                                                                     			\n";
        	strServiceImpl += " * PROJ : KASA incheon Intrernational Airport 항공보안교육원 프로젝트                                                     \n";
        	strServiceImpl += " * Copyright 2015 Ready Korea All rights reserved                                                                       		\n";
        	strServiceImpl += " *------------------------------------------------------------------------------                                   			\n";
        	strServiceImpl += " *                               MODIFICATION LOG                                                                  			\n";
        	strServiceImpl += " *------------------------------------------------------------------------------                                   			\n";
        	strServiceImpl += " *    DATE     AUTHOR                      DESCRIPTION                        												\n";
        	strServiceImpl += " * ----------  ------  ---------------------------------------------------------                                   			\n";
        	strServiceImpl += " * 2015/08/20  jiback(입력)                                                                                       			\n";
        	strServiceImpl += " *------------------------------------------------------------------------------*/                                           \n";
        	strServiceImpl += "package " + strPath + ".service.impl;                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import java.util.List;                                                                                                       \n";
        	strServiceImpl += "import java.util.Map;                                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import javax.annotation.Resource;                                                                                            \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import org.springframework.stereotype.Service;                                                                               \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import com.nexacro17.xapi.data.DataSet;                                                                                    	\n";
        	strServiceImpl += "import xbt.com.biz.common.CastMap;                                                                                           \n";
        	strServiceImpl += "import xbt.com.utility.SessionVO;                                                                                            \n";
        	strServiceImpl += "import xbt.rte.cmmn.ria.nexacro.NexacroConstant;                                                               	            \n";
        	strServiceImpl += "import xbt.rte.cmmn.ria.nexacro.map.DataSetMap;                                                                  	        \n";
        	strServiceImpl += "import xbt.com.nexa.common.exception.CommException;                                                                          \n";
        	strServiceImpl += "import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   \n";
        	strServiceImpl += "import egovframework.rte.fdl.idgnr.EgovIdGnrService;                                                                         \n";
        	strServiceImpl += "import " + strPath + ".service."+ strServiceName + ";                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "@Service(" + "\"" + strServiceName + "\"" + ")                                                                               \n";
        	strServiceImpl += "public class " + strServiceImplName + " extends EgovAbstractServiceImpl implements " + strServiceName + " {                  \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "	/** " + strServiceDAO + " */                                                                                                \n";
        	strServiceImpl += "	@Resource(name=" + "\"" + strServiceDAO + "\"" + ")                                                                         \n";
        	strServiceImpl += "	private " + strServiceDAO + " " + strServiceDAO + ";                                                                        \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "	/** ID Generation */                                                                                                        \n";
        	strServiceImpl += "	@Resource(name=" + "\"" + "egovIdGnrService" + "\"" + ")                                                                    \n";
        	strServiceImpl += "	private EgovIdGnrService egovIdGnrService;                                                                                  \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "	/**                                                                                                             			\n";
        	strServiceImpl += "	 * 제너레이터 마스터 리스트(retrieve" + strMethod + ")                                                         			\n";
        	strServiceImpl += "	 * @param input                                                                                                 			\n";
        	strServiceImpl += "	 * @return                                                                                                      			\n";
        	strServiceImpl += "	 * @throws Exception                                                                                           				\n";
        	strServiceImpl += "	 */                                                                                                             			\n";
        	strServiceImpl += "	public void retrieve" + strMethod + "(                                                                                        \n";
        	strServiceImpl += "		Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                                                           \n";
        	strServiceImpl += "		Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO)                                                         \n";
        	strServiceImpl += "		throws Exception {                                                                                                      \n";
        	strServiceImpl += "		/*                                                                                                                      \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserId->" + "\"" + "+sessionVO.getSUserId());                                     \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserNm->" + "\"" + "+sessionVO.getSUserNm());                                     \n";
        	strServiceImpl += "		*/                                                                                                                      \n";
        	strServiceImpl += "		DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                        \n";
        	strServiceImpl += "		CastMap<String, Object> map = (CastMap)dsMap.get(0);                                                                    \n";
        	strServiceImpl += "		/*                                                                                                                      \n";
        	strServiceImpl += "		SearchVO searchVO = new SearchVO();                                   													\n";
        	strServiceImpl += "		searchVO.setSearchCmd(" + "\"" + "LIST" + "\"" + ");                   													\n";
        	strServiceImpl += "		searchVO.setCastMap(map);                                        														\n";
        	strServiceImpl += "		*/                                                                                                                      \n";
        	strServiceImpl += "		List <CastMap> records = " + strServiceDAO + ".retrieve" + strMethod + "(map);                                          \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "		DataSetMap dsOut = new DataSetMap();                                                                                    \n";
        	strServiceImpl += "		dsOut.setRowMaps(records);                                                                                              \n";
        	strServiceImpl += "		outDataset.put(" + "\"" + "dsMaster" + "\"" + ", dsOut);               //데이터셋 이름을 어떻게 하는 것이 좋을까? \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "		return;                                                                                                                 \n";
        	strServiceImpl += "	}                                                                                                                           \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "	/**                                                                                                             			\n";
        	strServiceImpl += "	 * 템플릿 마스터 저장/수정(save" + strMethod + ")                                                        					\n";
        	strServiceImpl += "	 * @param input                                                                                                 			\n";
        	strServiceImpl += "	 * @return                                                                                                      			\n";
        	strServiceImpl += "	 * @throws Exception                                                                                           				\n";
        	strServiceImpl += "	 */                                                                                                             			\n";
        	strServiceImpl += "	public void save" + strMethod + "(                                                                                            \n";
        	strServiceImpl += "		Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                                                           \n";
        	strServiceImpl += "		Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO)                                                         \n";
        	strServiceImpl += "		throws Exception {                                                                                                      \n";
        	strServiceImpl += "		/*                                                                                                                      \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserId->" + "\"" + "+sessionVO.getSUserId());                                     \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserNm->" + "\"" + "+sessionVO.getSUserNm());                                     \n";
        	strServiceImpl += "		*/                                                                                                                      \n";
        	strServiceImpl += "		//조회조건                                      																		\n";
        	strServiceImpl += "		int rowType;                                                                                     					\n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "		DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                        \n";
        	strServiceImpl += "		CastMap<String, Object> inMap = (CastMap)dsMap.get(0);                                                                  \n";
        	strServiceImpl += "		//저장데이타셋                                       																	\n";
        	strServiceImpl += "		DataSetMap dsMap1 = (DataSetMap) inDataset.get(" + "\"" + "ds_input1" + "\"" + ");                                      \n";
        	strServiceImpl += "		for (int i = 0; i < dsMap1.size(); i++) {																				\n";
        	strServiceImpl += "			                                                                                                                	\n";
        	strServiceImpl += "			CastMap<String, Object> outMap = (CastMap)dsMap1.get(i);                                                        	\n";
        	strServiceImpl += "			rowType = ((Integer) outMap.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();                                	\n";
        	strServiceImpl += "			//자료타입	                                                                                                		\n";
        	strServiceImpl += "			//System.out.println(rowType);                                                                                  	\n";
        	strServiceImpl += "			                                                                                                                	\n";
        	strServiceImpl += "			if ( rowType == DataSet.ROW_TYPE_INSERTED ){                                                                    	\n";
        	strServiceImpl += "				                                                                                                        		\n";
        	strServiceImpl += "				//pk레코드조회                                                                                          		\n";
        	strServiceImpl += "				List <CastMap> recordKeyValue = " + strServiceDAO + "." + sMethodNamePKey + "(outMap);                          		\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "				CastMap<String, Object> mapKeyValue = (CastMap)recordKeyValue.get(0);                                   		\n";
        	strServiceImpl += "				outMap.put(" + "\"" + "classId" + "\"" + ", mapKeyValue.getString(" + "\"" + "keyCode" + "\"" + "));    		\n";
        	strServiceImpl += "				                                                                                                        		\n";
        	strServiceImpl += "				if (checkExistPK(outMap)) {                                                                                     \n";
        	strServiceImpl += "				     throw new CommException(" + "\"" + "1" + "\"" + ", " + "\"" + "카드사코드가 중복 되였습니다." + "\"" + "); \n";
        	strServiceImpl += "				     //throw new CommException(" + "\"" + "-1" + "\"" + ", " + "\"" + "COM000015" + "\"" + ", " + "\"" + "SK_CARD_ORG_CD" + "\"" + "); //SK_CARD_ORG_CD:카드사코드 \n";
        	strServiceImpl += "				}                                                                                                        		\n";
        	strServiceImpl += "				                                                                                                        		\n";
        	strServiceImpl += "				outMap.put(" + "\"" + "regUserId" + "\"" + ", sessionVO.getUserId().toString());    								\n";
        	strServiceImpl += "				outMap.put(" + "\"" + "updUserId" + "\"" + ", sessionVO.getUserId().toString());    								\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "				//신규저장                                                                                              		\n";
        	strServiceImpl += "				" + strServiceDAO + ".insert" + strMethod + "(outMap);                                               			\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "			}else if (rowType == DataSet.ROW_TYPE_UPDATED){                                                                 	\n";
        	strServiceImpl += "				                                                                                                        		\n";
        	strServiceImpl += "				outMap.put(" + "\"" + "updUserId" + "\"" + ", sessionVO.getUserId().toString());    								\n";
        	strServiceImpl += "				//수정                                                                                                  		\n";
        	strServiceImpl += "				" + strServiceDAO + ".update" + strMethod + "(outMap);                                               			\n";
        	strServiceImpl += "			}                                                                                                               	\n";
        	strServiceImpl += "		}                                                                                                                    	\n";
        	strServiceImpl += "		//서버에서 시퀀스 제조회시                                       													\n";
        	strServiceImpl += "		List <CastMap> records = " + strServiceDAO + ".retrieve" + strMethod + "(inMap);                                        \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "		DataSetMap dsOut = new DataSetMap();                                                                                    \n";
        	strServiceImpl += "		dsOut.setRowMaps(records);                                                                                              \n";
        	strServiceImpl += "		outDataset.put(" + "\"" + "dsMaster" + "\"" + ", dsOut);               //데이터셋 이름을 어떻게 하는 것이 좋을까?  \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "		return;                                                                                                                 \n";
        	strServiceImpl += "	}                                                                                                                           \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "	/**                                                                                                         				\n";
        	strServiceImpl += "	 * 템플릿 마스터 삭제(delete" + strMethod + ")                                                         	 					\n";
        	strServiceImpl += "	 * @param input                                                                                             				\n";
        	strServiceImpl += "	 * @return                                                                                                  				\n";
        	strServiceImpl += "	 * @throws Exception                                                                                        				\n";
        	strServiceImpl += "	 */                                                                                                         				\n";
        	strServiceImpl += "	                                                                                                            				\n";
        	strServiceImpl += "	public void delete" + strMethod + "(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {              \n";
        	strServiceImpl += "			                                                                                            						\n";
        	strServiceImpl += "		/*                                                                                                                      \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserId->" + "\"" + "+sessionVO.getSUserId());                                     \n";
        	strServiceImpl += "		System.out.println(" + "\"" + "session UserNm->" + "\"" + "+sessionVO.getSUserNm());                                     \n";
        	strServiceImpl += "		*/                                                                                                                      \n";
        	strServiceImpl += "		int rowType;                                                                                     					    \n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "		DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                    					\n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "		for (int i = 0; i < dsMap.size(); i++) {                                                            					\n";
        	strServiceImpl += "			                                                                                            						\n";
        	strServiceImpl += "			CastMap<String, Object> map = (CastMap)dsMap.get(i);                                        						\n";
        	strServiceImpl += "			rowType = ((Integer) map.get(NexacroConstant.DATASET_ROW_TYPE)).intValue();                    						\n";
        	strServiceImpl += "																										 						\n";
        	strServiceImpl += "			if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          								\n";
        	strServiceImpl += "				" + strServiceDAO + ".delete" + strMethod + "(map);                              								\n";
        	strServiceImpl += "			}                                                                                           						\n";
        	strServiceImpl += "		}                                                                                                   					\n";
        	strServiceImpl += "		return;                                                                                             					\n";
        	strServiceImpl += " }                                                                                                           				\n";
        	strServiceImpl += "	/**                                                                                                         				\n";
        	strServiceImpl += "	 * 템플릿 중복 체크(checkExistPK)                                                         	 					        \n";
        	strServiceImpl += "	 * @param input                                                                                             				\n";
        	strServiceImpl += "	 * @return                                                                                                  				\n";
        	strServiceImpl += "	 * @throws Exception                                                                                        				\n";
        	strServiceImpl += "	 */                                                                                                         				\n";
        	strServiceImpl += "	                                                                                                            				\n";
        	strServiceImpl += "	private Boolean checkExistPK(CastMap<String, Object> outMap) throws Exception {                                             \n";
        	strServiceImpl += "	    List<CastMap> records = " + strServiceDAO + "." + sMethodNameKey + "(outMap);                                           \n";
        	strServiceImpl += "	    CastMap<String, Object> outMap1 = (CastMap)records.get(0);                                                              \n";
        	strServiceImpl += "	    if(outMap1.getString(" + "\"" + "cnt" + "\"" + ").equals(" + "\"" + "0" + "\"" + ")) {                                  \n";
        	strServiceImpl += "	          return false;                                                                                                     \n";
        	strServiceImpl += "	    }                                                                                                        				\n";
        	strServiceImpl += "	    return true;                                                                                                          	\n";
        	strServiceImpl += "	}                                                                                                            				\n";
        	strServiceImpl += "	                                                                                                            				\n";
        	strServiceImpl += "}                                                                                                                            \n";

        	this.tabMain.tabSub04.form.txtServiceImpl.set_value(strServiceImpl);
        };

        /**
        * Devon DeleteCmd Create()
        * 삭제 Cmd 자동생성기
        */
        this.fn_txtDao = function()
        {
        	var strDao = "";
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup + "DAO";
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();


        	strDao += "/*------------------------------------------------------------------------------  							\n";
        	strDao += " * NAME : " + strServiceDAO + ".java                                                                    	\n";
        	strDao += " * DESC :                                                                                                    \n";
        	strDao += " * VER  : V1.0                                                                                               \n";
        	strDao += " * PROJ : KASA incheon Intrernational Airport 항공보안교육원 프로젝트                                     \n";
        	strDao += " * Copyright 2015 Ready Korea All rights reserved                                                            \n";
        	strDao += " *------------------------------------------------------------------------------                             \n";
        	strDao += " *                               MODIFICATION LOG                                                            \n";
        	strDao += " *------------------------------------------------------------------------------                             \n";
        	strDao += " *    DATE     AUTHOR                      DESCRIPTION                        								\n";
        	strDao += " * ----------  ------  ---------------------------------------------------------                             \n";
        	strDao += " * 2015/08/20  jiback(입력)                                                                                 \n";
        	strDao += " *------------------------------------------------------------------------------*/                           \n";
        	strDao += "package " + strPath + ".service.impl;                                                                   	    \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import java.util.List;                                                                                       \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import javax.annotation.Resource;                                                                            \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import org.apache.commons.logging.LogFactory;                                                                \n";
        	strDao += "import org.apache.commons.logging.Log;                                                                       \n";
        	strDao += "import org.springframework.stereotype.Repository;                                                            \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import xbt.com.biz.common.CastMap;                                                                           \n";
        	strDao += "import egovframework.rte.psl.dataaccess.EgovAbstractDAO;                                                     \n";
        	strDao += "import com.ibatis.sqlmap.client.SqlMapClient;                                                                \n";
        	strDao += "                                                                                                             \n";
        	strDao += "@Repository(" + "\"" + strServiceDAO + "\"" + ")                                                          	\n";
        	strDao += "public class " + strServiceDAO + " extends EgovAbstractDAO {                                                 \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    Log logger = LogFactory.getLog(this.getClass());		                                                	\n";
        	strDao += "                                                                                                             \n";
        	strDao += "    @Resource(name = " + "\"" + "sqlMapClient1" + "\"" + ")                                                  \n";
        	strDao += "    public void setSuperSqlMapClient(SqlMapClient sqlMapClient1) {                                           \n";
        	strDao += "        super.setSqlMapClient(sqlMapClient1);                                                                \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                        \n";
        	strDao += "	 * 제너레이터 마스터 리스트(retrieve" + strMethod + ")                                                   \n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public List retrieve" + strMethod + "(CastMap map) throws Exception {                                    \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return list(" + "\"" + strServiceDAO+ "." + "retrieve" + strMethod + "\"" + ", map);                \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                        \n";
        	strDao += "	 * 템플릿 마스터 키값을 조회(" + sMethodNamePKey + ")                                                   	\n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public List " + sMethodNamePKey + "(CastMap map) throws Exception {                                      \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return list(" + "\"" + strServiceDAO + "." + sMethodNamePKey + "\"" + ", map);                	    \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                        \n";
        	strDao += "	 * 템플릿 마스터 중복 체크조회(" + sMethodNameKey + ")                                                  	\n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public List " + sMethodNameKey + "(CastMap map) throws Exception {                                      	\n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return list(" + "\"" + strServiceDAO+ "." + sMethodNameKey + "\"" + ", map);                	    \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                      	\n";
        	strDao += "	 * 템플릿 마스터 저장(insert" + strMethod + ")                                                        	\n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public void insert" + strMethod + "(CastMap<String, Object> map) throws Exception {                      \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	insert(" + "\"" + strServiceDAO+ "." + "insert" + strMethod + "\"" + ", map);                       \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                      	\n";
        	strDao += "	 * 템플릿 마스터 수정(update" + strMethod + ")                                                         	\n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public void update" + strMethod + "(CastMap<String, Object> map) throws Exception {                      \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	update(" + "\"" + strServiceDAO+ "." + "update" + strMethod + "\"" + ", map);                       \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "  /**                                                                                                      	\n";
        	strDao += "	 * 템플릿 마스터 삭제(delete" + strMethod + ")                                                         	\n";
        	strDao += "	 * @param input                                                                                         	\n";
        	strDao += "	 * @return                                                                                              	\n";
        	strDao += "	 * @throws Exception                                                                                   		\n";
        	strDao += "	 */                                                                                                     	\n";
        	strDao += "    public void delete" + strMethod + "(CastMap<String, Object> map) throws Exception {                      \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	delete(" + "\"" + strServiceDAO+ "." + "delete" + strMethod + "\"" + ", map);                       \n";
        	strDao += "    }                                                                                                        \n";
          	strDao += "}                                                                                                            \n";

        	this.tabMain.tabSub05.form.txtDao.set_value(strDao);
        };

        /*===============================================================================================================================*/
        this.fn_txtXmlquery = function(strTableName)
        {
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup + "DAO";
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var idx   				= 0;
            var nRowCnt 			= this.DS_Detail.rowcount;
        	var strMetaData 		= "";
        	var strColName  		= "";
        	var strColPk    		= "";
        	var strDataLength 		= "";
        	var strColType    		= "";
        	var strColComent		= "";

        	this.tabMain.tabSub06.form.txtXmlquery.set_value("");

        	strMetaData += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>										\n";
        	strMetaData += "<!DOCTYPE sqlMap PUBLIC  "+ "\"" + "-//iBATIS.com//DTD SQL Map 2.0//EN" + "\" " + "\"" + "http://www.ibatis.com/dtd/sql-map-2.dtd" + "\"" + ">					\n";
        	strMetaData += "<sqlMap namespace=" + "\"" + strServiceDAO + "\"" + ">									\n";
        	strMetaData += "\t" + "<typeAlias  alias=" + "\"" + "resultMap" + "\"" + " type=" + "\"" + "xbt.com.biz.common.CastResultMap" + "\"" + "/>								\n";

        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 조회(입력) -->								\n";
        	strMetaData += "\t" + "<select id=" + "\"" + strServiceDAO+ "." + "retrieve" + strMethod + "\"" + " resultClass=" + "\"" + "resultMap" + "\"" + ">                    									\n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + "retrieve" + strMethod + " */								\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                													\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "SELECT                                                  											\n";
        	strMetaData += "\t"	+ "\t" + "\t" +  "       " + "'0' AS CHK" + "/*".padLeft((30-"0 AS CHK".length)," ") + "chk" + "*/        		\n";
            for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "comments"));
        		strMetaData   += "\t"	+ "\t" + "\t" +  "     , " + "A." + strColName + "/*".padLeft((30-strColName.length)," ") + strColComent + "*/        \n";
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + "FROM " + strTableName + " A" + "                                             								 \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "WHERE 1=1                                             												 \n";
        /*
        	for (idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= gfn_trim(DS_Detail.getColumn(idx, "columnName"));
        		 strColPk = gfn_trim(DS_Detail.getColumn(idx, "colPk"));

        		 if( (strColPk.trim()).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #" + fn_strColName(strColName.toLowerCase()) + "#" + "       \n";
        		 }
        	}
        */
         	strMetaData += "\t" + "\t" + "]]" +">                                                      												 \n";
        	/*-------------------------------------------------------------------*/
        	pkRow = this.DS_Detail.findRow("colPk","Y");
        	if(pkRow >-1)
        	{
        		strMetaData += "\t" +"\t" + "<dynamic>	                                 	\n";
        		for(var idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        			 strColPk   = this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        			 if((strColPk.trim()).length > 0)
        			 {
        				strMetaData += "\t"	+ "\t" + "\t" + "<isNotEmpty property=" + "\"" + this.fn_strColName(strColName.toLowerCase()) + "\"" +  ">      \n";
        				strMetaData += "\t"	+ "\t" + "\t" +"\t" + "<![CDATA[                                         																						\n";
        				strMetaData += "\t"	+ "\t" + "\t" +"\t" + "\t" + "AND " +"A." + strColName +" = " + "#" + this.fn_strColName(strColName.toLowerCase()) + "#" + "                     						\n";
        				strMetaData += "\t"	+ "\t" + "\t" +"\t" +  "]]" + ">                                           																					\n";
        				strMetaData += "\t"	+ "\t" + "\t" +"</isNotEmpty>	                                                    																				\n";
        			 }

        		}
        		strMetaData += "\t" + "\t" + "</dynamic>	                																				\n";
        	}
        	strMetaData += "\t" + "</select> 	                                                        													\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 유니크한 키를 조회 -->								\n";
        	strMetaData += "\t" + "<select id=" + "\"" + strServiceDAO+ "." + sMethodNamePKey + "\"" + " resultClass=" + "\"" + "resultMap" + "\"" + ">                    									\n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + sMethodNamePKey + " */								\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                													\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "SELECT                                                  											\n";
         	strMetaData += "\t"	+ "\t" + "\t" + "\t" + "LPAD(NVL(MAX(TO_NUMBER(CODE))+1,'1'),5,'0') AS KEY_CODE        								       \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "FROM " + strTableName + "                                             								 \n";
        	strMetaData += "\t"	+ "\t" + "\t" + "WHERE 1=1                                             												 \n";

        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		 strColPk 		= this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		 if( (strColPk.trim()).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "       \n";
        		 }
        	}
         	strMetaData += "\t" + "\t" + "]]" +">                                                      												 \n";
        	strMetaData += "\t" + "</select> 	                                                        													\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 테이블 중복 키를 조회 -->								\n";
        	strMetaData += "\t" + "<select id=" + "\"" + strServiceDAO+ "." + sMethodNameKey + "\"" + " resultClass=" + "\"" + "resultMap" + "\"" + ">                    									\n";
        	strMetaData += "            /* " + strServiceDAO + "." + sMethodNameKey + " */\n";
        	strMetaData += "            <![CDATA[\n";
        	strMetaData += "                    SELECT\n";
        	strMetaData += "                           COUNT(1) AS CNT\n";
        	strMetaData += "                      FROM " + strTableName + "\n";
        	strMetaData += "                     WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "columnName"));
        		strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "colPk"));

        		if ((strColPk.trim()).length > 0)
        		{
        			strMetaData += "                       AND " + strColName + " = #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "\n";
        		}
        	}
        	strMetaData += "            ]]" + ">\n";
        	strMetaData += "        </select>\n";
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!-- 데이타 저장(입력) -->								\n";
        	strMetaData += "\t" + "<insert id=" + "\"" + strServiceDAO+ "." + "insert" + strMethod + "\"" + ">                                          							\n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + "insert" + strMethod + " */								\n";
        	strMetaData += "\t"	+ "\t" + "<![CDATA[                                                																\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "INSERT INTO " + strTableName + "                                       										\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "(                                       																		\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		if(idx == 0)
        		{
        			//strMetaData += "\t"	+ "\t" + "\t" +  "       " + strColName + "                                       									\n";
        			strMetaData += "\t"	+ "\t" + "\t" +  "       " + strColName + "/*".padLeft((30-strColName.length)," ") + this.gfn_trim(strColComent) + "*/                  \n";
        		}else
        		{
        			//strMetaData += "\t"	+ "\t" + "\t" +  "     , " + strColName + "                                      									\n";
        			strMetaData += "\t"	+ "\t" + "\t" +  "     , " + strColName + "/*".padLeft((30-strColName.length)," ") + this.gfn_trim(strColComent) + "*/                   \n";
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + ")VALUES                                                  														\n";
        	strMetaData += "\t"	+ "\t" + "\t" + "(                                                        														\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
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
        				strMetaData += "\t"	+ "\t" + "\t" +  "       #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "                                   \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "     , SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "     , #" +  this.fn_strColName(strColName.toLowerCase()) + "#" + "                                   \n";
        			}
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + ")	                                                      														\n";
        	strMetaData += "\t"	+ "\t" + "]]" +">                                    																			\n";
        	strMetaData += "\t" + "</insert>                                                           														\n";
        		/*--------------------------UPDATE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 수정(입력) -->								\n";
        	strMetaData += "\t" + "<update id=" + "\"" + strServiceDAO+ "." + "update" + strMethod + "\"" + ">                                         							\n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + "update" + strMethod + " */								\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                																\n";
        	strMetaData += "\t" + "\t" + "\t" + "UPDATE " + strTableName + "                                													\n";
        	strMetaData += "\t" + "\t" + "\t" + "SET                                                      														\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "columnName");
        		strColComent 	= this.DS_Detail.getColumn(idx, "comments");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "dataType"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "       " + strColName + " = ".padLeft((18-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((22-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "       " + strColName + " = #".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "     , " + strColName + " = ".padLeft((18-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((22-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "     , " + strColName + " = #".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}
        	}
        	strMetaData += "\t" + "\t" + "\t" + "WHERE 1=1                                                   						                        \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 	= this.DS_Detail.getColumn(idx, "colPk");
        		 if((strColPk.trim()).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "        		\n";
        		 }
        	}
        	strMetaData += "\t" + "\t" + "]]" +">  	                                   							                            				\n";
        	strMetaData += "\t" + "</update>                                                           													\n";
        		/*--------------------------MERGE-----------------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 머지(입력) -->								                     \n";
        	strMetaData += "\t" + "<update id=" + "\"" + strServiceDAO+ "." + "merge" + strMethod + "\"" + ">    \n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + "merge" + strMethod + " */								\n";
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
        				strMetaData += "\t"	+ "\t" + "\t" + "                  A." + strColName + " = #".padLeft((18-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "        		\n";

        			} else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              AND A." + strColName + " = #".padLeft((18-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "        		\n";
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
        				strMetaData += "\t"	+ "\t" + "\t" + "                A." + strColName + " = #".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              , A." + strColName + " = ".padLeft((18-"SYSDATE".length)," ") + "SYSDATE" + "/*".padLeft((22-"SYSDATE".length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" + "              , A." + strColName + " = #".padLeft((20-strColName.length)," ") + this.fn_strColName(strColName.toLowerCase()) + "#" + "/*".padLeft((20-this.fn_strColName(strColName.toLowerCase()).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
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
        				strMetaData += "\t"	+ "\t" + "\t" +  "                #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "                                   \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "              , SYSDATE                                   \n";

        			}else
        			{
        				strMetaData += "\t"	+ "\t" + "\t" +  "              , #" +  this.fn_strColName(strColName.toLowerCase()) + "#" + "                                   \n";
        			}
        		}
        	}
        	strMetaData += "\t"	+ "\t" + "\t" + "           )	                                                      														\n";
        	strMetaData += "\t" + "\t" + "]]" +">  	                                   							                            				\n";
        	strMetaData += "\t" + "</update>                                                           													\n";

        	/*--------------------------------DELETE-----------------------------------*/
        	strMetaData += "\n";
        	strMetaData += "\t" + "<!--데이타 삭제(입력) -->								\n";
        	strMetaData += "\t" + "<delete id=" + "\"" + strServiceDAO+ "." + "delete" + strMethod + "\"" + ">                                      						\n";
        	strMetaData += "\t" + "\t" + "/* " + strServiceDAO+ "." + "delete" + strMethod + " */								\n";
        	strMetaData += "\t" + "\t" + "<![CDATA[                                                           												\n";
        	strMetaData += "\t" + "\t" + "\t" + "DELETE FROM " + strTableName + "                                                  							\n";
        	strMetaData += "\t" + "\t" + "\t" + "WHERE 1=1                              																	\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "columnName");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "colPk");
        		 if((strColPk.trim()).length > 0)
        		 {
        			strMetaData += "\t"	+ "\t" + "\t" + "AND " + strColName + " = #" + this.fn_strColName(strColName.toLowerCase()) + "#" + "        		\n";
        		 }
        	}
        	strMetaData += "\t" + "\t" + "]]" +">                                                															\n";
        	strMetaData += "\t" + "</delete>	                                                          													\n";
        	strMetaData += "</sqlMap>                                                                 													\n";
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
            strMetaData += "------------------------------------그리드 데이타 셋 디자인 입니다.   ------------------------------------------\n";
            strMetaData += "\n";
        	strMetaData += "<Grid id=" + "\"" + "grdMaster" + "\"" + " taborder=" + "\"" + "1" + "\"" + " binddataset=" + "\"" + "dsMaster" + "\"" + " ";
        	strMetaData += "autoenter=" + "\"" + "select" + "\"" + " autofittype=" + "\"" + "col" + "\"" + " ";
        	strMetaData += "onheadclick=" + "\"" + "grdMaster_onheadclick" + "\"" + " ";
        	strMetaData += "onheaddblclick=" + "\"" + "grdMaster_onheaddblclick" + "\"" + " ";
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
        	strMetaData += "------------------------------------salMap 인터페이스(resources/egovframework/sqlmap/config/oracle/sql-map-config-oracle-nd-temp.xml 등록해주세요).   ------------------------------------------\n";
        	strMetaData += "\n";
        	strMetaData += "<sqlMap resource=" + "\"" + "xbt/sqlmap/" + strPath.replace(/\./g,"/") + "/" +  strGroup + "_SQL_oracle.xml" + "\"" + "/> \n";

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
        	var strPidxml 	= "";

        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
            var strNexacroNm 	    = strGroup + this.divSearch.form.cbGbName.value + this.gfn_trim(this.divSearch.form.edGbNum.value);

        	this.tabMain.tabSub08.form.txtPID.set_value("");
        	var objDate = new Date();
        	var nYear   = objDate.getFullYear();
        	var nMonth  = objDate.getMonth()+1;
        	var nDay 	= objDate.getDate();

        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "* FormID(화면   ID명): " +  strNexacroNm + "xfdl(싱글다중처리)\n";
        	strPidxml += "* 작 성         일 명: jiback\n";
        	strPidxml += "* 작 성         일 자: "+ nYear + "/" +nMonth + "/" + nDay + "\n";
        	strPidxml += "* 변 경         일 자:\n";
        	strPidxml += "* 변 경         자 명:\n";
        	strPidxml += "* 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술\n";
        	strPidxml += "*/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        01. 전처리 공통 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        02. 폼 변수 정의\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.lvchkColidDs   = " + "\"" + "classNm" + "\"" + ";                        // 필수 입력사항 칼럼ID  예)  " + "\"" + "commSmcd$commName" + "\"" + "\n";
        	strPidxml += "this.lvchkColNameDs = " + "\"" + "설명" + "\"" + ";\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        03. 폼 로드 및 닫을때(폼이 포커스 갈때)\n";
        	strPidxml += "***********************************************************************/\n";
         	strPidxml += "/**\n";
         	strPidxml += " * 기능 : 폼 로드 완료후 초기값 Setting\n";
         	strPidxml += " */\n";
         	strPidxml += "this.form_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)\n";
         	strPidxml += "{\n";
         	strPidxml += "    //폼에 공통으로 로드시 사용하는 함수.\n";
         	strPidxml += "    this.gfn_formOnload(obj.e);\n";
         	strPidxml += "    //사용자 화면  초기화 함수\n";
         	strPidxml += "    this.fn_formInit();\n";
         	strPidxml += "};\n";
         	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 폼언 로드(닫기전 셋팅)  Setting\n";
        	strPidxml += " */\n";
        	strPidxml += "this.form_onclose = function(obj:nexacro.Form,e:nexacro.CloseEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        04. 공통 코드 및 콤보 데이타 조회\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.fn_formInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var strDs    = " + "\"" + "dsUserYn|dsGUserYn" + "\"" + ";                    // 데이터를 받을 데이터셋리스트     예) " + "\"" + "DS_CODE01|DS_CODE02|DS_CODE03" + "\"" + "\n";
        	strPidxml += "    var strLgcd  = " + "\"" + "000002|000002" + "\"" + ";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) " + "\"" + "Z01|Z02|Z03" + "\"" + "\n";
        	strPidxml += "    var strComb  = " + "\"" + "T|X" + "\"" + ";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)\n";
        	strPidxml += "    var strOptn  = " + "\"" + "" + "\"" + ";                                      // 조건문 " + "\"" + " AND COMM_IT02 = '" + "\"" + " + vip + " + "\"" + "'|||" + "\"" + ";\n";
        	strPidxml += "    var svcId        = " + "\"" + "Init" + "\"" + ";\n";
        	strPidxml += "\n";
        	strPidxml += "        // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);\n";
        	strPidxml += "        // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.\n";
        	strPidxml += "\n";
        	strPidxml += "    this.gfn_CmmnMultiComboLoad(strDs\n";
        	strPidxml += "                              , strLgcd\n";
        	strPidxml += "                              , strComb\n";
        	strPidxml += "                              , strOptn\n";
        	strPidxml += "                              , svcId);\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
         	strPidxml += "this.postformInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //trace(this.dsYn.saveXML());\n";
        	strPidxml += "    this.ds_input.setColumn(0," + "\"" + "coYn" + "\"" + ",null);\n";
        	strPidxml += "\n";
        	strPidxml += "    /*\n";
        	strPidxml += "    var strDs 	= " + "\"" + "dsMstCardOrg" + "\"" + ";\n";
        	strPidxml += "    var strLgcd 	= " + "\"" + "MST_CARD_ORG_ALL" + "\"" + ";   //카드사 기관코드\n";
        	strPidxml += "    var strComb 	= " + "\"" + "T" + "\"" + ";\n";
        	strPidxml += "    var svcId 	= " + "\"" + "singleInit" + "\"" + ";\n";
        	strPidxml += "    var callback 	= " + "\"" + "fn_callBack" + "\"" + ";\n";
        	strPidxml += "    \n";
        	strPidxml += "    // gfn_CmmnSingleComboLoad(승인/정산);\n";
        	strPidxml += "    this.gfn_CmmnSingleComboLoad( strDs\n";
        	strPidxml += "                                , strLgcd\n";
        	strPidxml += "                                , strComb\n";
        	strPidxml += "                                , svcId\n";
        	strPidxml += "                                , callback);\n";
            strPidxml += "    */\n";
        	strPidxml += "    //trace(" + "\"" + "==============>프로그램아이디 : " + "\"" + " + objApp.gv_cutPrgId);                               //현재연 화면아이디\n";
        	strPidxml += "    //trace(" + "\"" + "==============>프로그램이름   : " + "\"" + " + objApp.gv_cutPrgNm);                               //현재연 화면명\n";
        	strPidxml += "\n";
        	strPidxml += "    /* 처음화면이 메뉴에서 호출하지 않고 폼에서 => 내폼으로 호출할때 사용함(편상시사용않함:불필요시 삭제) */\n";
        	strPidxml += "    /*\n";
        	strPidxml += "    if(this.gfn_isNull(objApp.gv_OpenArg) != true)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.fn_OnLoadPage();\n";
        	strPidxml += "    }\n";
        	strPidxml += "    */\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.postSingleInt = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //trace(this.dsMstCardOrg.saveXML());\n";
        	strPidxml += "    this.ds_input.setColumn(0," + "\"" + "cardOrgCd" + "\"" + ",null);\n";
        	strPidxml += "}\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 다른화면에서 이화면으로 링크시 인자갓으로 받는 처리함수(평상시는 사용않함:불필요시 삭제)\n";
        	strPidxml += " */\n";
        	strPidxml += "/*\n";
        	strPidxml += "this.fn_OnLoadPage = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var arr_OpenArg  = objApp.gv_OpenArg.split(" + "\"" + "|" + "\"" + ");\n";
        	strPidxml += "    var strItemCode  = arr_OpenArg[0];\n";
        	strPidxml += "    var strItemName  = arr_OpenArg[1];\n";
        	strPidxml += "\n";
        	strPidxml += "    this.divSearch.form.edtClassId.set_value(strItemCode);\n";
        	strPidxml += "    this.edtPram2.set_value(" + "\"" + "2버째인자>>>>>>>>" + "\"" + " + strItemName);\n";
        	strPidxml += "    trace(" + "\"" + "2번째 링크 파라미터 입니다.>>>>>>>>>>>>>" + "\"" + " + strItemName);\n";
        	strPidxml += "    //반듯이 초기화 해야 한다. 다음 링크를 위해\n";
        	strPidxml += "    objApp.gv_OpenArg = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    //바로 조회를 함.\n";
        	strPidxml += "    this.divSearch.form.btnSearch.setFocus();\n";
        	strPidxml += "    this.divSearch.form.btnSearch.click();\n";
        	strPidxml += "};\n";
        	strPidxml += "*/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 콜백함수(후처리)\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "    this.gfn_clearSortAll(this.grdMaster);\n";
        	strPidxml += "    if(nErrorCode != 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(sErrorMsg," + "\"" + "에러정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "error" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }else\n";
        	strPidxml += "    {\n";
        	strPidxml += "        /*sSvcId (Transaction Id)*/\n";
        	strPidxml += "        switch(sSvcId)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            case " + "\"" + "Init" + "\"" + ":\n";
        	strPidxml += "                    this.postformInit();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "singleInit" + "\"" + ":\n";
        	strPidxml += "                    this.postSingleInt();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Search" + "\"" + ":\n";
        	strPidxml += "                    this.postSearch();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Save" + "\"" + ":\n";
        	strPidxml += "                    this.postSave();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Add" + "\"" + ":\n";
        	strPidxml += "                    this.postAdd();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Del" + "\"" + ":\n";
        	strPidxml += "                    this.postDel();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            default:\n";
        	strPidxml += "                break;\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        05. 조회 함수 선언(마스터 함수)\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 전 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.preSearch = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    // 조회조건 셋팅\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 조회 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.dvSearch_btnSearch_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.preSearch())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Search" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Retrieve" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_input=ds_input" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "dsMaster=dsMaster" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_Transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 후 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.postSearch = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //trace(this.dsMaster.saveXML());\n";
        	strPidxml += "    this.gfn_getRowCount(this.staRowCnt,this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        06. 추가 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 추가 전 실행(기본체크사항)\n";
        	strPidxml += " */\n";
        	strPidxml += "this.preAdd = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 추가 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.btnAdd_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.preAdd())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var nRow = this.dsMaster.addRow();\n";
        	strPidxml += "    this.dsMaster.setColumn(nRow," + "\"" + "chk" + "\"" + ",     " + "\"" + "0" + "\"" + ");           //업체코드\n";
        	strPidxml += "    this.dsMaster.setColumn(nRow," + "\"" + "useChk" + "\"" + ",  " + "\"" + "1" + "\"" + ");           //사용유무\n";
        	strPidxml += "};\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 처리 후 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.postAdd = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        07. 삭제 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 버튼 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "\n";
        	strPidxml += "this.preDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //멀티삭제용도\n";
        	strPidxml += "    if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow(" + "\"" + "chk" + "\"" + ",1) == -1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "삭제할 데이타가 없습니다.!" + "\"" + "," + "\"" + "삭제정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "warning" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var result = this.gfn_confirm( " + "\"" + "현재선택행을 삭제하시겠습니까?" + "\"" + ", " + "\"" + "삭제정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + " );\n";
        	strPidxml += "\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    //다중삭제 용도\n";
        	strPidxml += "    this.dsMaster.set_enableevent(false);\n";
        	strPidxml += "    for(var i=this.dsMaster.rowcount-1;i>-1;i--)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        if(this.dsMaster.getColumn(i," + "\"" + "chk" + "\"" + ") == " + "\"" + "1" + "\"" + " || this.dsMaster.getRowType(i) == 2)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.dsMaster.deleteRow(i);\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "    this.dsMaster.set_enableevent(true);\n";
        	strPidxml += "\n";
        	strPidxml += "    //개별삭제시\n";
        	strPidxml += "    //this.dsMaster.deleteRow(this.dsMaster.rowposition);\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : Row 삭제 또는 Transaction 삭제 처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.btnDel_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.preDel())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Del" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Delete" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_input=dsMaster:u" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;                    //샏략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_Transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.postDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.gfn_getRowCount(this.staRowCnt,this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        08. 저장 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 전 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.preSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.dsMaster.rowcount > 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        for(var i=0;i<this.dsMaster.rowcount; i++)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            if(this.dsMaster.getColumn(i," + "\"" + "chk" + "\"" + ") == " + "\"" + "0" + "\"" + ")\n";
        	strPidxml += "            {\n";
        	strPidxml += "                continue;\n";
        	strPidxml += "            }\n";
        	strPidxml += "            this.dsMaster.setColumn(i," + "\"" + "chk" + "\"" + "," + "\"" + "0" + "\"" + ");\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    if(!this.gfn_isUpdate(this.dsMaster))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "변경된 이력이 없습니다.!" + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    /*\n";
        	strPidxml += "    var sFindStr  		= " + "\"" + "\"" + ";\n";
        	strPidxml += "    var stdValCd  		= " + "\"" + "\"" + ";\n";
        	strPidxml += "    var dupChkRow 		= 0;\n";
        	strPidxml += "    var argCardOrgCd 	    = new Array();\n";
        	strPidxml += "\n";
        	strPidxml += "    for(var iRow=0; iRow < this.dsMaster.rowcount; iRow ++)\n";
        	strPidxml += "    {\n";
            strPidxml += "        var strRowType = this.dsMaster.getRowType(iRow);\n";
        	strPidxml += "        if(strRowType == 1)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            continue;\n";
        	strPidxml += "        }\n";
        	strPidxml += "        //*************** 화면 중복 체크(서버에서 중복체크도 함)  ***********************\n";
        	strPidxml += "        stdValCd    	= this.dsMaster.getColumn(iRow," + "\"" + "cardOrgCd" + "\"" + ");\n";
        	strPidxml += "        // 중복체크 할 Key Value 세팅\n";
        	strPidxml += "        sFindStr 		= " + "\"" + "cardOrgCd == '" + "\"" + "stdValCd" + "\"" + "'" + "\"" + ";\n";
        	strPidxml += "        dupChkRow     = this.gfn_dupCheck(this.dsMaster, sFindStr );	\n";
        	strPidxml += "        if ( dupChkRow > 1 )\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.dsMaster.set_rowposition(iRow);\n";
        	strPidxml += "            this.gfn_alert(" + "\"" + "$1 중복 되었습니다.!" + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "카드사정보" + "\"" + "," + "\"" + "error" + "\"" + ");\n";
        	strPidxml += "            this.edtCardOrgCd.setFocus();\n";
        	strPidxml += "            return false;\n";
            strPidxml += "        }\n";
            strPidxml += "        //*************** 한글 영문 숫자 바이트체크  ***********************\n";
        	strPidxml += "        var sOrgNm = this.dsMaster.getColumn(iRow, " + "\"" + "orgNm" + "\"" + ");\n";
        	strPidxml += "        if(this.gfn_getLengthB(sOrgNm,3) > 20)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            this.dsMaster.set_rowposition(iRow);\n";
        	strPidxml += "            this.gfn_alert(" + "\"" + "$1은(는) $2byte이하 여야합니다." + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "카드사명,20" + "\"" + "," + "\"" + "error" + "\"" + ");    //카드사명은(는) 20byte이하 여야합니다.   \n";
        	strPidxml += "            this.edtOrgNm.setFocus();\n";
        	strPidxml += "            return false;\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
            strPidxml += "    */\n";
        	strPidxml += "    // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)\n";
        	strPidxml += "    var chkFocusFlg = true;\n";
        	strPidxml += "    var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);\n";
        	strPidxml += "\n";
        	strPidxml += "    if (result[0] != " + "\"" + "success" + "\"" + ")\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(result[0]," + "\"" + "저장정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + ");\n";
        	strPidxml += "        this.dsMaster.set_rowposition(result[1]); //데이터셋 변경\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "\n";
        	strPidxml += "     var result = this.gfn_confirm( " + "\"" + "저장 하시겠습니까?" + "\"" + ", " + "\"" + "저장" + "\"" + "," + "\"" + "" + "\"" + ", " + "\"" + "question" + "\"" + " );\n";
        	strPidxml += "     if(result == 0)\n";
        	strPidxml += "     {\n";
        	strPidxml += "         return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "     return true;\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 저장 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.btnSave_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.preSave())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Save" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Save" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_input=ds_input:a " + "\"" + ";\n";
        	strPidxml += "        strInDs    += " + "\"" + "ds_input1=dsMaster:u" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "dsMaster=dsMaster" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_Transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "/**\n";
        	strPidxml += " *      기능 : 저장시 후처리\n";
        	strPidxml += " */\n";
        	strPidxml += "this.postSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.gfn_getRowCount(this.staRowCnt,this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        09. 초기화\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        10. 출력 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        11. ExcelDnwn 엑셀로 출력\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.btnExcelDn_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.dsMaster.rowcount < 1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "출력할 엑셀데이타가 없습니다.!" + "\"" + ", " + "\"" + "EXCEL 정보" + "\"" + " ," + "\"" + "" + "\"" + "," + "\"" + "information" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var result = this.gfn_confirm( " + "\"" + "Excel를 출력하시겠습니까?" + "\"" + ", " + "\"" + "EXCEL 출력" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + " );\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    this.gfn_excelExport(this.grdMaster);\n";
        	strPidxml += "\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        12. ExcelUpLoad 신규저장시\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 버튼 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.preExcelUp = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var result = this.gfn_confirm( " + "\"" + "기존데이타를 삭제하고 신규데이타를 일괄적용하겠습니까?" + "\"" + ", " + "\"" + "EXCEL 저장" + "\"" + "," + "\"" + "" + "\"" + ", " + "\"" + "question" + "\"" + " );\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    //개별삭제시\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.btnExcelUp_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "     if(!this.preExcelUp())\n";
        	strPidxml += "     {\n";
        	strPidxml += "         return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "\n";
        	strPidxml += "     var fd = new FileDialog;\n";
        	strPidxml += "     var file = fd.open(" + "\"" + "open" + "\"" + ", FileDialog.LOAD," + "\"" + "%MYDOCUMENT%" + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "     if(file != undefined)\n";
        	strPidxml += "     {\n";
        	strPidxml += "         file.open(VirtualFile.openRead | VirtualFile.openBinary);\n";
        	strPidxml += "         file.close();\n";
        	strPidxml += "     }else\n";
        	strPidxml += "     {\n";
        	strPidxml += "         return false;\n";
        	strPidxml += "     }\n";
        	strPidxml += "     this.dsMaster.set_enableevent(false);\n";
        	strPidxml += "     var objExtCommon = new ExtCommon();\n";
        	strPidxml += "     this.dsMaster.clearData();\n";
        	strPidxml += "     this.dsTempData.clearData();\n";
        	strPidxml += "     objExtCommon.excelImportByIndex(file.fullpath, 0," + "\"" + "dsTempData" + "\"" + ");\n";
        	strPidxml += "\n";
        	strPidxml += "     //그리드 해드 삭제\n";
        	strPidxml += "     this.dsTempData.deleteRow(0);\n";
        	strPidxml += "     /* ---debug  넘어온 데이타 확인---*/\n";
        	strPidxml += "     //trace(this.DS_SHEET.saveXML());\n";
        	strPidxml += "     /*-------------------------------*/\n";
        	strPidxml += "     this.dsMaster.copyData(dsTempData);\n";
        	strPidxml += "     this.grdMaster.createFormat();\n";
        	strPidxml += "     this.dsMaster.enableevent=true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        13. Get, Set Method\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        14. 기타 Control Event\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " *      그리드멀티 소트정열\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grdMaster_onheaddblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(e.cell != 0 && e.cell != 1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_gridSort(obj,e);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " *      그리드멀티 현재로 초기화\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grdMaster_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(e.cell == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_checkAll(obj, e);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "/*\n";
        	strPidxml += " * 현재그리드를 더블클릭시 다를메뉴로 이동시 사용하는 이벤트(사용않할시에는 필요없음:삭제)\n";
        	strPidxml += " */\n";
        	strPidxml += "\n";
        	strPidxml += "/*\n";
        	strPidxml += "this.grdMaster_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(e.cell ==  obj.getBindCellIndex(" + "\"" + "body" + "\"" + ", " + "\"" + "classId" + "\"" + "))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        var menuid      = " + "\"" + "01010202" + "\"" + ";\n";
        	strPidxml += "        var objDs       = objApp.gds_Menu;\n";
        	strPidxml += "        objApp.gv_OpenArg = this.dsMaster.getColumn(this.dsMaster.rowposition," + "\"" + "classId" + "\"" + ") + " + "\"" + "|" + "\"" + " +\n";
        	strPidxml += "                                                                              " + "\"" + "ADJ_RECEIPT_TYPE" + "\"" + ";\n";
        	strPidxml += "        this.gfn_newOpenMenu(menuid,objDs);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "*/\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += "  * 닫을시 사용자가 변경유무를 체크(공통처리)\n";
        	strPidxml += " **/\n";
        	strPidxml += "this.fn_beforeclose = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    return this.gfn_isUpdate(this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";

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
        	var strGroup    	= this.divSearch.form.edClassName.text.trim();
        	var strMethod		= this.divSearch.form.edMethodName.text.trim();
        	var strVoName   	=  strGroup + "VO";
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();
        	var strMetaData 	= "";
        	var strColName  	= "";
        	var strColPk    	= "";
        	var strDataLength 	= "";
        	var	strColType    	= "";
        	var strColComent	= "";
        	var strTableNm      = this.DS_Master.getColumn(this.DS_Master.rowposition,"tableName");
        	var strDesc			= this.DS_Master.getColumn(this.DS_Master.rowposition,"comments");


        	strVo += "/*------------------------------------------------------------------------------   \n";
        	strVo += " * NAME : " + strVoName + ".java                                                   \n";
        	strVo += " * DESC :                                                                          \n";
        	strVo += " * VER  : V1.0                                                                     \n";
        	strVo += " * PROJ : KASA incheon Intrernational Airport 항공보안교육원 프로젝트           \n";
        	strVo += " * Copyright 2015 Ready Korea All rights reserved                                  \n";
        	strVo += " *------------------------------------------------------------------------------   \n";
        	strVo += " *                               MODIFICATION LOG                                  \n";
        	strVo += " *------------------------------------------------------------------------------   \n";
        	strVo += " *    DATE     AUTHOR                      DESCRIPTION                        	 \n";
        	strVo += " * ----------  ------  ---------------------------------------------------------   \n";
        	strVo += " * 2015/08/20  jiback(입력)                                                       \n";
        	strVo += " *------------------------------------------------------------------------------*/ \n";
        	strVo += "package " + strPath + ".vo;                                                        \n";
        	strVo += "                                                                                   \n";
        	strVo += "import java.sql.Date;                                                              \n";
        	strVo += "import java.math.BigDecimal;                                                       \n";
        	strVo += "                                                                                   \n";
        	strVo += "import lombok.Data;                                                                \n";
        	strVo += "import lombok.ToString;                                                            \n";
        	strVo += "                                                                                   \n";
        	strVo += "import org.apache.ibatis.type.Alias;                                               \n";
        	strVo += "                                                                                   \n";
        	strVo += "import egovframework.cmmn.vo.DefaultVO;                                            \n";
        	strVo += "                                                                                   \n";
        	strVo += "@Alias( " + "\"" + strVoName + "\"" + " )                                          \n";
        	strVo += "@Data                                                                              \n";
        	strVo += "@ToString( callSuper = true )                                                      \n";
        	strVo += "public class " + strVoName + " extends DefaultVO {                                 \n";
        	strVo += "                                                                                   \n";

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

        this.divSearch_btnExcel_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this.tabMain.tabSub01.form.grdDetail);
        };

        this.cboUsers_onitemchanged = function(obj,e)
        {
        	this.divSearch.form.btnSearch.setFocus();
        	this.divSearch.form.btnSearch.click();
        };


        this.divSearch_cbProjectName_onitemchanged = function(obj,e)
        {
        	this.ds1Depth.filter("LEVEL1 == '" + this.divSearch.form.cbProjectName.value + "'");
        	this.divSearch.form.cbWorkName.set_index(0);
        	this.ds2Depth.filter("LEVEL1 == '" + this.divSearch.form.cbProjectName.value + "' && " + "LEVEL2 == '" + this.divSearch.form.cbWorkName.value + "'");
        	this.divSearch.form.cbBuisName.set_index(0);
        	this.commObjectPro();
        };

        this.divSearch_cbWorkName_onitemchanged = function(obj,e)
        {
        	this.ds2Depth.filter("LEVEL1 == '" + this.divSearch.form.cbProjectName.value + "' && " + "LEVEL2 == '" + this.divSearch.form.cbWorkName.value + "'");
        	this.divSearch.form.cbBuisName.set_index(0);
        	this.commObjectPro();
        };


        this.divSearch_cbBuisName_onitemchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edBuisNum_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_cbGbName_onitemchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edGbNum_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edtWorkName_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.divSearch_edtWorkName1_onchanged = function(obj,e)
        {
        	this.commObjectPro();
        };

        this.commObjectPro = function()
        {

        	this.divSearch.form.edtPackage.set_value(this.gfn_trim(this.divSearch.form.cbProjectName.value).toLowerCase() + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value).toLowerCase() + "." + this.gfn_trim(this.divSearch.form.cbBuisName.value).toLowerCase());
            this.divSearch.form.edClassName.set_value(this.divSearch.form.cbBuisName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));

        	var strTableName 	= this.cboUsers.value + "." + this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition, "tableName"));
        	var strWork 		= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.divSearch.form.cbBuisName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.divSearch.form.cbGbName.value + this.gfn_trim(this.divSearch.form.edGbNum.value);

        	this.divSearch.form.edtController.set_value(strWork 	+ "Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "DAO.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_SQL_oracle.xml");
        	this.divSearch.form.edtNexacro.set_value(strNexacroNm 	+ ".xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "VO.java");

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName);
        	this.fn_txtPidXml();
        	this.fn_txtVo();
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };


        this.edtFilter_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.divSearch.form.btnSearch.setFocus();
        		this.divSearch.form.btnSearch.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.cboUsers.addEventHandler("onitemchanged",this.cboUsers_onitemchanged,this);
            this.edtFilter.addEventHandler("onkeydown",this.edtFilter_onkeydown,this);
            this.divSearch.form.cbProjectName.addEventHandler("onitemchanged",this.divSearch_cbProjectName_onitemchanged,this);
            this.divSearch.form.edtWorkName.addEventHandler("onchanged",this.divSearch_edtWorkName_onchanged,this);
            this.divSearch.form.edtWorkName1.addEventHandler("onchanged",this.divSearch_edtWorkName1_onchanged,this);
            this.divSearch.form.btnExcel.addEventHandler("onclick",this.divSearch_btnExcel_onclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.dvSearch_btnSearch_onclick,this);
            this.divSearch.form.edBuisNum.addEventHandler("onchanged",this.divSearch_edBuisNum_onchanged,this);
            this.divSearch.form.cbGbName.addEventHandler("onitemchanged",this.divSearch_cbGbName_onitemchanged,this);
            this.divSearch.form.edGbNum.addEventHandler("onchanged",this.divSearch_edGbNum_onchanged,this);
            this.divSearch.form.cbWorkName.addEventHandler("onitemchanged",this.divSearch_cbWorkName_onitemchanged,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheadclick",this.tabMain_tabSub01_grdDetail1_onheadclick,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheaddblclick",this.tabMain_tabSub01_grdDetail1_onheaddblclick,this);
            this.DS_Master.addEventHandler("onrowposchanged",this.DS_Master_onrowposchanged,this);
        };
        this.loadIncludeScript("COMM000001S.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
