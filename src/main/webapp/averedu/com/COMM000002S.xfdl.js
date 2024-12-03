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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LEVLE1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">com</Col><Col id=\"NAME\">com</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">sys</Col><Col id=\"NAME\">sys</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">pop</Col><Col id=\"NAME\">pop</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">sml</Col><Col id=\"NAME\">sml</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">ord</Col><Col id=\"NAME\">ord</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">exception</Col><Col id=\"NAME\">exception</Col></Row><Row><Col id=\"LEVLE1\">common</Col><Col id=\"CODE\">util</Col><Col id=\"NAME\">util</Col></Row><Row><Col id=\"CODE\">vo</Col><Col id=\"NAME\">vo</Col><Col id=\"LEVLE1\">common</Col></Row><Row><Col id=\"CODE\">ria</Col><Col id=\"NAME\">ria</Col><Col id=\"LEVLE1\">cmmn</Col></Row><Row><Col id=\"CODE\">web</Col><Col id=\"NAME\">web</Col><Col id=\"LEVLE1\">cmmn</Col></Row><Row><Col id=\"CODE\">UY</Col><Col id=\"NAME\">UY</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UI</Col><Col id=\"NAME\">UI</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UD</Col><Col id=\"NAME\">UD</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UC</Col><Col id=\"NAME\">UC</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">EN</Col><Col id=\"NAME\">EN</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">ES</Col><Col id=\"NAME\">ES</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">ER</Col><Col id=\"NAME\">ER</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">ET</Col><Col id=\"NAME\">ET</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">SC</Col><Col id=\"NAME\">SC</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">US</Col><Col id=\"NAME\">US</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UL</Col><Col id=\"NAME\">UL</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UR</Col><Col id=\"NAME\">UR</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UE</Col><Col id=\"NAME\">UE</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UM</Col><Col id=\"NAME\">UM</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UP</Col><Col id=\"NAME\">UP</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">UA</Col><Col id=\"NAME\">UA</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">AM</Col><Col id=\"NAME\">AM</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">AR</Col><Col id=\"NAME\">AR</Col><Col id=\"LEVLE1\">prj</Col></Row><Row><Col id=\"CODE\">BH</Col><Col id=\"NAME\">BH</Col><Col id=\"LEVLE1\">prj</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">prj</Col><Col id=\"NAME\">prj</Col><Col id=\"DESC\">업무</Col></Row><Row><Col id=\"CODE\">common</Col><Col id=\"NAME\">common</Col><Col id=\"DESC\">공통</Col></Row><Row><Col id=\"CODE\">cmmn</Col><Col id=\"NAME\">cmmn</Col><Col id=\"DESC\">프레임웍</Col></Row></Rows>");
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
            obj.set_taborder("21");
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
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","372","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel06","303","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("업무명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","372","7","127","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static08","669","67","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel09","498","7","53","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("구분명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static09","966","66",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static10","966","36",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbProjectName","81","12","151","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsDepth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12","739","7",null,"31","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","372","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static07","669","37","229","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName","745","10","208","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtWorkName1","972","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPackage","81","42","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDao","81","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtController","378","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSqlXml","378","70","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtService","674","41","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_DetailBg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNexacro","674","71","216","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtServiceImpl","972","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDtoVo","972","70","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel11","897","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Vo/Dto");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel07","600","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Service");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel08","600","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Nexacro");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel01","0","38","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Package");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel02","0","68","76","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Dao");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel04","303","37","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Contoller ");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel05","303","67","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("IbitsXml");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel12","670","7","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("클래스/\r\n메소드명");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel10","897","36","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("Impl");
            obj.getSetter("wordwrap").set("none");
            obj.getSetter("position").set("absolute");
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailTi");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edBuisNum","452","11","39","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static13","442","10","13","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static14","958","10","8","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbGbName","555","11","56","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_innerdataset("ds3Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static15","614","10","13","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_text("/");
            obj.set_font("20px/normal \"Malgun Gothic\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edGbNum","623","11","39","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbWorkName","377","12","64","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_innerdataset("ds1Depth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edClassName","1178","10","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edMethodName","1179","40","194","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDevelopName","1255","70","57","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_value("정진호");
            obj.set_text("정진호");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitel03","1179","66","70","31",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("개발자명");
            obj.set_taborder("45");
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

            obj = new Tabpage("tabSub11",this.tabMain);
            obj.set_text("Dataset");
            this.tabMain.addChild(obj.name, obj);

            obj = new TextArea("txtDataset","0","0",null,null,"2","2",null,null,null,null,this.tabMain.tabSub11.form);
            obj.set_taborder("0");
            obj.set_font("bold 9pt/normal \"굴림체\"");
            obj.set_scrollbarsize("10");
            this.tabMain.tabSub11.addChild(obj.name, obj);
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
        this.registerScript("COMM000002S.xfdl", function() {
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
        this.gvlProject 	 = "prj"; //현재 프로젝트명을 셋팅
        this.gvlDyty    	 = "sys";
        this.gvlProjectTatle = "목포과학대 차세대 프로젝트";
        this.gvlDelpNm       = "";
        this.gvlsysDate      = "";
        /**********************************************************************
        	03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnload(obj.e);
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
        	var strUrl 			= "/"+ this.gvlProject + "/" + this.gvlDyty + "/RetrieveNxPlatGeneratorUser.do";
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

        this.fn_PostformInit = function()
        {

        	this.divSearch.form.cbProjectName.set_value(this.gvlProject);  //  기본프로젝트를 셋팅한다. this.dsDepth => 현프로젝트명을 기입(Project의 약자를 기입:prj);
        	this.ds1Depth.filter("LEVLE1 == '" + this.divSearch.form.cbProjectName.value + "'");
        	this.divSearch.form.cbWorkName.set_value(this.gvlDyty);
        	this.divSearch.form.edBuisNum.set_value("01");

        	this.divSearch.form.cbGbName.set_value("M");
        	this.divSearch.form.edGbNum.set_value("01");
        	this.divSearch.form.edtWorkName.set_value("CommonCode");
        	this.divSearch.form.edtWorkName1.set_value("List");

        	this.divSearch.form.edtPackage.set_value("com.averedu" + "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + this.gfn_trim(this.divSearch.form.edBuisNum.text));
        	this.divSearch.form.edClassName.set_value(this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));


        	var strDate 	= this.gfn_getDate("date");

        	this.gvlsysDate = strDate.substr(0, 4) + "/" + strDate.substr(4, 2) + "/" + strDate.substr(6, 2);
        	this.gvlProject = this.divSearch.form.cbProjectName.value;
        	this.gvlDyty	= this.divSearch.form.cbWorkName.value;
        	this.gvlDelpNm  = this.divSearch.form.edtDevelopName.text;


        	//DB사용자
        	this.cboUsers.set_value("COMM");
        	this.fn_Ret();
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
        				this.fn_PostformInit();
        				break;
        			case "Ret":
        			    this.fn_PostRet();
        			  	break;
        			case "DRet":
        			    this.fn_PostDRet();
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
        	05. 조회 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
        	return true;
        };

        this.fn_Ret = function()
        {
        	if(!this.fn_PreRet())
        	{
        		return false;
        	}

        	var strSvc 		= "Ret";
        	var strUrl 		= "/"+ this.gvlProject + "/" + this.gvlDyty + "/RetrieveNxPlatGeneratorM.do";
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


        this.fn_PostRet = function()
        {
        	//trace(this.DS_Master.saveXML());
        	//this.DS_Master_onrowposchanged(this.DS_Master);
        };
        /**********************************************************************
        	05-1. detail 조회 함수 선언
        ***********************************************************************/
        this.DS_Master_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreDRet = function()
        {
        	return true;
        };


        this.fn_DRet = function()
        {
        	if(!this.fn_PreDRet())
        	{
        		return false;
        	}


        	var strSvc 			= "DRet";
        	var strUrl 			= "/"+ this.gvlProject + "/" + this.gvlDyty + "/RetrieveNxPlatGeneratorD.do";
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

        this.fn_PostDRet = function()
        {

        	//trace(this.DS_Detail.saveXML());
        	var strTableName 	= this.cboUsers.value + "." + this.DS_Master.getColumn(this.DS_Master.rowposition, "TABLE_NAME");
        	var strWork 	 	= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.divSearch.form.cbGbName.value + this.gfn_trim(this.divSearch.form.edGbNum.value);

        	this.divSearch.form.edtController.set_value(strWork 	+ "_Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "_Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "_ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "_DAO.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_Sql.xml");
        	this.divSearch.form.edtNexacro.set_value(strWork 		+ ".xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "_VO.java");

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName);
        	this.fn_txtPidXml();
        	this.fn_txtVo();
        	this.fn_txtDataset(strTableName);
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
        	var strUrl          = this.gfn_trim(this.divSearch.form.cbProjectName.value) + "/" + this.gfn_trim(this.divSearch.form.cbWorkName.value) + "/" + this.gfn_trim(this.divSearch.form.cbWorkName.value) + this.gfn_trim(this.divSearch.form.edBuisNum.text);
        	var strControlName 	= strGroup + "_Controller";
        	var strServiceName  = strGroup + "_Service";
        	var strPath      	= this.divSearch.form.edtPackage.text.trim();
        	var strServiceNmPr  = strServiceName.substring(0,3).toLowerCase() + strServiceName.substring(3) ;
        	var strDbTitle      = this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));

        	strContoller += "/*------------------------------------------------------------------------------  												\n";
        	strContoller += " * NAME : " + strControlName + ".java                                                                    						\n";
        	strContoller += " * DESC :                                                                                                          			\n";
        	strContoller += " * VER  : V1.0                                                                                                     			\n";
        	strContoller += " * PROJ : " + this.gvlProjectTatle + "                                                                           				\n";
        	strContoller += " * Copyright 2021 avereduSystem All rights reserved                                                                      		\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *                               MODIFICATION LOG                                                                  			\n";
        	strContoller += " *------------------------------------------------------------------------------                                   			\n";
        	strContoller += " *    DATE     AUTHOR                      DESCRIPTION                        													\n";
        	strContoller += " * ----------  ------  ---------------------------------------------------------                                   			\n";
        	strContoller += " * " + this.gvlsysDate + "  " + this.gvlDelpNm + "                                                                             \n";
        	strContoller += " *------------------------------------------------------------------------------*/                                     		\n";
        	strContoller += "package " + strPath + ".web;                                                                             			            \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import java.util.Map;                                                                                                  		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import javax.annotation.Resource;                                                                                      		\n";
        	strContoller += "import javax.servlet.http.HttpSession;                                                                                     	\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import org.apache.commons.logging.Log;                                                                             		    \n";
        	strContoller += "import org.apache.commons.logging.LogFactory;                                                                                  \n";
        	strContoller += "import org.springframework.stereotype.Controller;                                                                      		\n";
        	strContoller += "import org.springframework.ui.Model;                                                                                   		\n";
        	strContoller += "import org.springframework.web.bind.annotation.RequestMapping;                                                         		\n";
        	strContoller += "import org.springframework.web.servlet.ModelAndView;                                                                   		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "import com.averedu.common.util.SessionUtil;                                                                    	                \n";
        	strContoller += "import com.averedu.common.vo.SessionVO;                                                                            		        \n";
        	strContoller += "import " + strPath + ".service." + strServiceName + ";                                                                         \n";
        	strContoller += "import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                     \n";
        	strContoller += "import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                 				\n";
        	strContoller += "import egovframework.rte.cmmn.ria.nexacroplatform.map.NexacroPlatformMapDTO;                                                   \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "@Controller                                                                                                            		\n";
        	strContoller += "public class " + strControlName + " {                                                                                   		\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "	Log logger = LogFactory.getLog(this.getClass());                                                                  			\n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /** " + strGroup + "Service */                                                                                          	\n";
        	strContoller += "    @Resource(name = " + "\"" + strServiceName + "\"" + ")                                                                     \n";
        	strContoller += "    private " + strServiceName + " " + strServiceNmPr + ";                                                                     \n";
        	strContoller += "                                                                                                                       		\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * " + strDbTitle + "리스트 조회 (actionRetrieve" + strMethod + ")                                                         \n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strUrl.replace(/\./g,"/") + "/" + "Retrieve" + strMethod + ".do" + "\"" + ")       \n";
        	strContoller += "	public ModelAndView actionRetrieve" + strMethod + "(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {\n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroplatformMapView" + "\"" + ");                                    \n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				\n";
        	strContoller += "			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			\n";
        	strContoller += "			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					\n";
        	strContoller += "			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			\n";
        	strContoller += "			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					\n";
        	strContoller += "	                                                                                                                			\n";
        	strContoller += "			" + strServiceNmPr + ".retrieve" + strMethod + "(inVar, inDataset, outVar, outDataset, sessionVO);                  \n";
        	strContoller += "			                                                                                             					    \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                       \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                  \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                      \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString());                                       				\n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "		                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * " + strDbTitle + "리스트 저장/수정(actionSave" + strMethod + ")                                                        \n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strUrl.replace(/\./g,"/") + "/" + "Save" + strMethod + ".do" + "\"" + ")           \n";
        	strContoller += "	public ModelAndView actionSave" + strMethod + "(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {    \n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroplatformMapView" + "\"" + ");                                    \n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				\n";
        	strContoller += "			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			\n";
        	strContoller += "			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					\n";
        	strContoller += "			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			\n";
        	strContoller += "			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			" + strServiceNmPr + ".save" + strMethod + "(inVar, inDataset, outVar, outDataset, sessionVO);                 	    \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                       \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                  \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                      \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString());                                       				\n";
        	strContoller += "		}                                                                                                      					\n";
        	strContoller += "		return mav;                                                                                             				\n";
        	strContoller += "	}                                                                                                               			\n";
        	strContoller += "		                                                                                                               			\n";
        	strContoller += "    /**                                                                                                                		\n";
        	strContoller += "	 * " + strDbTitle + "리스트 삭제(actionDelete" + strMethod + ")                                                            \n";
        	strContoller += "	 * @param input                                                                                                 			\n";
        	strContoller += "	 * @return                                                                                                      			\n";
        	strContoller += "	 * @throws Exception                                                                                           				\n";
        	strContoller += "	 */                                                                                                             			\n";
        	strContoller += "	@RequestMapping(value = " + "\"" + "/" + strUrl.replace(/\./g,"/") + "/" + "Delete" + strMethod + ".do" + "\"" + ")         \n";
        	strContoller += "	public ModelAndView actionDelete" + strMethod + "(NexacroPlatformMapDTO nxDto, Model model, HttpSession session)throws Exception {  \n";
        	strContoller += "		ModelAndView mav = new ModelAndView(" + "\"" + "nexacroplatformMapView" + "\"" + ");                                    \n";
        	strContoller += "		try                                                                                                     				\n";
        	strContoller += "	    {                                                                                                           			\n";
        	strContoller += "			SessionVO sessionVO = SessionUtil.getSessionVO(session);                                          					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "	        DataSetMap tranInfo 				= nxDto.getTranInfoMap();                                          				\n";
        	strContoller += "			Map <String, Object> inVar          = nxDto.getInVariableMap();                                          			\n";
        	strContoller += "			Map <String, DataSetMap> inDataset  = nxDto.getInDataSetMap();                                   					\n";
        	strContoller += "			Map <String, Object> outVar         = nxDto.getOutVariableMap();                                        			\n";
        	strContoller += "			Map <String, DataSetMap> outDataset = nxDto.getOutDataSetMap();                                 					\n";
        	strContoller += "	                                                                                                               				\n";
        	strContoller += "			" + strServiceNmPr + ".delete" + strMethod + "(inDataset, sessionVO);                 				                \n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_VARIABLES_ATT_NAME, outVar);                                				\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.OUT_DATASET_ATT_NAME,   outDataset);                            				\n";
        	strContoller += "			                                                                                                					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "0" + "\"" + ");                                       \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, " + "\"" + "SUCCESS" + "\"" + ");                                  \n";
        	strContoller += "		                                                                                                        				\n";
        	strContoller += "		} catch ( Exception e )                                                                                 				\n";
        	strContoller += "		{                                                                                                       				\n";
        	strContoller += "			e.printStackTrace();                                                                            					\n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_CODE, " + "\"" + "-1" + "\"" + ");                                      \n";
        	strContoller += "			mav.addObject(NexacroPlatformConstant.ERROR_MSG, e.toString());                                       				\n";
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
        	var strServiceName 	= strGroup + "_Service";
        	var strPath    		= this.divSearch.form.edtPackage.text.trim();
        	var strServiceNmPr  = strServiceName.substring(0,3).toLowerCase() + strServiceName.substring(3) ;
        	var strDbTitle      = this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));

        	strService += "/*------------------------------------------------------------------------------  								\n";
        	strService += " * NAME : " + strServiceName + ".java                                                                    		\n";
        	strService += " * DESC :                                                                                                        \n";
        	strService += " * VER  : V1.0                                                                                                   \n";
        	strService += " * PROJ : " + this.gvlProjectTatle + "                                                                           \n";
        	strService += " * Copyright 2021 avereduSystem All rights reserved                                                              \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *                               MODIFICATION LOG                                                                \n";
        	strService += " *------------------------------------------------------------------------------                                 \n";
        	strService += " *    DATE     AUTHOR                      DESCRIPTION                        									\n";
        	strService += " * ----------  ------  ---------------------------------------------------------                                 \n";
        	strService += " * " + this.gvlsysDate + "  " + this.gvlDelpNm + "                                                               \n";
        	strService += " *------------------------------------------------------------------------------*/                               \n";
        	strService += "package " + strPath + ".service;                                                                       	        \n";
        	strService += "                                                                                                                 \n";
        	strService += "import java.util.Map;                                                                                            \n";
        	strService += "                                                                                                                 \n";
        	strService += "import com.averedu.common.vo.SessionVO;																                \n";
        	strService += "import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                \n";
        	strService += "                                                                                                                 \n";
        	strService += "public interface " + strServiceName + " {                                                                        \n";
        	strService += "	                                                                                                                \n";
        	strService += "    /**                                                                                                          \n";
        	strService += "     * " + strDbTitle + "리스트 조회(retrieve" + strMethod + ")                                                 \n";
        	strService += "     * @param input                                                                                              \n";
        	strService += "     * @return                                                                                                   \n";
        	strService += "     * @throws Exception                                                                                         \n";
        	strService += "     */                                                                                                          \n";
        	strService += "    public void retrieve" + strMethod + "(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,      \n";
        	strService += "			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  \n";
        	strService += "                                                                                                                 \n";
        	strService += "    /**                                                                                                          \n";
        	strService += "     * " + strDbTitle + "리스트 저장/수정(save" + strMethod + ")                                               \n";
        	strService += "     * @param input                                                                                              \n";
        	strService += "     * @return                                                                                                   \n";
        	strService += "     * @throws Exception                                                                                         \n";
        	strService += "     */                                                                                                          \n";
        	strService += "    public void save" + strMethod + "(Map<String, Object> inVar, 	Map<String, DataSetMap> inDataset,          \n";
        	strService += "			Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception;  \n";
        	strService += "                                                                                                                 \n";
        	strService += "    /**                                                                                                          \n";
        	strService += "     * " + strDbTitle + "리스트 삭제(delete" + strMethod + ")                                                   \n";
        	strService += "     * @param input                                                                                              \n";
        	strService += "     * @return                                                                                                   \n";
        	strService += "     * @throws Exception                                                                                         \n";
        	strService += "     */                                                                                                          \n";
        	strService += "    public void delete" + strMethod + "(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception;\n";
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
        	var strServiceImplName 	= strGroup + "_ServiceImpl";
        	var strServiceName    	= strGroup + "_Service";
        	var strServiceDAO  	    = strGroup + "_DAO";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strServiceNmPr  	= strServiceName.substring(0,3).toLowerCase() + strServiceDAO.substring(3) ;
        	var strDbTitle      	= this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));


        	strServiceImpl += "/*------------------------------------------------------------------------------  											\n";
        	strServiceImpl += " * NAME : " + strServiceImplName + ".java                                                                                    \n";
        	strServiceImpl += " * DESC :                                                                                                        			\n";
        	strServiceImpl += " * VER  : V1.0                                                                                                   			\n";
        	strServiceImpl += " * PROJ : " + this.gvlProjectTatle + "                                                                           			\n";
        	strServiceImpl += " * Copyright 2021 avereduSystem All rights reserved                                                                			\n";
        	strServiceImpl += " *------------------------------------------------------------------------------                                 			\n";
        	strServiceImpl += " *                               MODIFICATION LOG                                                                			\n";
        	strServiceImpl += " *------------------------------------------------------------------------------                                 			\n";
        	strServiceImpl += " *    DATE     AUTHOR                      DESCRIPTION                        												\n";
        	strServiceImpl += " * ----------  ------  ---------------------------------------------------------                                 			\n";
        	strServiceImpl += " * " + this.gvlsysDate + "  " + this.gvlDelpNm + "                                                               			\n";
        	strServiceImpl += " *------------------------------------------------------------------------------*/                               			\n";
        	strServiceImpl += "package " + strPath + ".service.impl;                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import java.util.List;                                                                                                       \n";
        	strServiceImpl += "import java.util.Map;                                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import javax.annotation.Resource;                                                                                            \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import org.apache.commons.logging.Log;                                                                                       \n";
        	strServiceImpl += "import org.apache.commons.logging.LogFactory;                                                                                \n";
        	strServiceImpl += "import org.springframework.stereotype.Service;                                                                               \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import com.nexacro17.xapi.data.DataSet;                                                                                      \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "import com.averedu.common.exception.CommException;                                                                               \n";
        	strServiceImpl += "import com.averedu.common.vo.SessionVO;                                                                                   	    \n";
        	strServiceImpl += "import " + strPath + ".dao."+ strServiceDAO + ";                                                                             \n";
        	strServiceImpl += "import " + strPath + ".service."+ strServiceName + ";                                                                        \n";
        	strServiceImpl += "import egovframework.rte.cmmn.ria.nexacroplatform.NexacroPlatformConstant;                                                   \n";
        	strServiceImpl += "import egovframework.rte.cmmn.ria.nexacroplatform.map.DataSetMap;                                                            \n";
        	strServiceImpl += "import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;                                                                   \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "@Service(" + "\"" + strServiceName + "\"" + ")                                                                               \n";
        	strServiceImpl += "public class " + strServiceImplName + " extends EgovAbstractServiceImpl implements " + strServiceName + " {                  \n";
        	strServiceImpl += "    protected Log log = LogFactory.getLog(this.getClass()); 	                                                                \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "    /** " + strServiceDAO + " */                                                                                             \n";
        	strServiceImpl += "    @Resource(name=" + "\"" + strServiceDAO + "\"" + ")                                                                      \n";
        	strServiceImpl += "    private " + strServiceDAO + " " + strServiceNmPr + ";                                                                    \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "    /**                                                                                                             			\n";
        	strServiceImpl += "     * " + strDbTitle + "리스트 조회(retrieve" + strMethod + ")                                                         	\n";
        	strServiceImpl += "     * @param input                                                                                                 			\n";
        	strServiceImpl += "     * @return                                                                                                      			\n";
        	strServiceImpl += "     * @throws Exception                                                                                           			\n";
        	strServiceImpl += "     */                                                                                                             			\n";
        	strServiceImpl += "    public void retrieve" + strMethod + "( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                     \n";
        	strServiceImpl += "            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "        String strMenuId = inVar.get(" + "\"" + "GBV_MENUID" + "\"" + ").toString();                                         \n";
        	strServiceImpl += "	                                                                                                                            \n";
        	strServiceImpl += "        DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                     \n";
        	strServiceImpl += "        Map<String, Object> map = (Map<String, Object>)dsMap.get(0);                                                         \n";
        	strServiceImpl += "        map.put(" + "\"" + "INSERT_PG" + "\"" + ", strMenuId);                           							        \n";
        	strServiceImpl += "        List<Map> records = " + strServiceNmPr + ".retrieve" + strMethod + "(map);                                           \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "        DataSetMap dsOut = new DataSetMap();                                                                                 \n";
        	strServiceImpl += "        dsOut.setRowMaps(records);                                                                                           \n";
        	strServiceImpl += "        outDataset.put(" + "\"" + "dsMaster" + "\"" + ", dsOut);                                                             \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "        return;                                                                                                              \n";
        	strServiceImpl += "    }                                                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "    /**                                                                                                             			\n";
        	strServiceImpl += "     * " + strDbTitle + "리스트 저장/수정(save" + strMethod + ")                                                        	\n";
        	strServiceImpl += "     * @param input                                                                                                 			\n";
        	strServiceImpl += "     * @return                                                                                                      			\n";
        	strServiceImpl += "     * @throws Exception                                                                                           			\n";
        	strServiceImpl += "     */                                                                                                             			\n";
        	strServiceImpl += "    public void save" + strMethod + "( Map<String, Object> inVar, Map<String, DataSetMap> inDataset,                         \n";
        	strServiceImpl += "            Map<String, Object> outVar, Map<String, DataSetMap> outDataset, SessionVO sessionVO) throws Exception {          \n";
        	strServiceImpl += "        //조회조건                                      																	\n";
        	strServiceImpl += "        int rowType;                                                                                     					\n";
        	strServiceImpl += "        String strMenuId = inVar.get(" + "\"" + "GBV_MENUID" + "\"" + ").toString();                                         \n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "        DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "ds_input" + "\"" + ");                                     \n";
        	strServiceImpl += "        Map<String, Object> inMap = (Map<String, Object>)dsMap.get(0);                                                       \n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "        //저장데이타셋                                       																\n";
        	strServiceImpl += "        DataSetMap dsMap1 = (DataSetMap) inDataset.get(" + "\"" + "dsMaster" + "\"" + ");                                   	\n";
        	strServiceImpl += "        for (int i = 0; i < dsMap1.size(); i++) {																			\n";
        	strServiceImpl += "            Map<String, Object> outMap = (Map<String, Object>)dsMap1.get(i);                                                 \n";
        	strServiceImpl += "            rowType = ((Integer) outMap.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                           \n";
        	strServiceImpl += "			                                                                                                                	\n";
        	strServiceImpl += "            if ( rowType == DataSet.ROW_TYPE_INSERTED ) {                                                                    \n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "INSERT_ID" + "\"" + ", sessionVO.getUserId().toString());                           	\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "INSERT_IP" + "\"" + ", sessionVO.getIpAddress().toString());                          \n";
        	strServiceImpl += "                outMap.put(" + "\"" + "INSERT_PG" + "\"" + ", strMenuId);                           							\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_ID" + "\"" + ", sessionVO.getUserId().toString());                           	\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_IP" + "\"" + ", sessionVO.getIpAddress().toString());                          \n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_PG" + "\"" + ", strMenuId);                           							\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "                //신규저장                                                                                              	\n";
        	strServiceImpl += "                " + strServiceNmPr + ".insert" + strMethod + "(outMap);                                               		\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "            } else if (rowType == DataSet.ROW_TYPE_UPDATED) {                                                               	\n";
        	strServiceImpl += "		                                                                                                                     	\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_ID" + "\"" + ", sessionVO.getUserId().toString());                           	\n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_IP" + "\"" + ", sessionVO.getIpAddress().toString());                          \n";
        	strServiceImpl += "                outMap.put(" + "\"" + "UPDATE_PG" + "\"" + ", strMenuId);                           							\n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "                //수정                                                                                                  		\n";
        	strServiceImpl += "                " + strServiceNmPr + ".update" + strMethod + "(outMap);                                               		\n";
        	strServiceImpl += "            }                                                                                                               	\n";
        	strServiceImpl += "        }                                                                                                                    \n";
        	strServiceImpl += "        //서버에서 시퀀스 제조회시                                       													\n";
        	strServiceImpl += "        List <Map> records = " + strServiceNmPr + ".retrieve" + strMethod + "(inMap);                                     	\n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "        DataSetMap dsOut = new DataSetMap();                                                                                 \n";
        	strServiceImpl += "        dsOut.setRowMaps(records);                                                                                           \n";
        	strServiceImpl += "        outDataset.put(" + "\"" + "dsMaster" + "\"" + ", dsOut);                                                             \n";
        	strServiceImpl += "		                                                                                                                        \n";
        	strServiceImpl += "        return;                                                                                                              \n";
        	strServiceImpl += "    }                                                                                                                        \n";
        	strServiceImpl += "                                                                                                                             \n";
        	strServiceImpl += "    /**                                                                                                         				\n";
        	strServiceImpl += "     * " + strDbTitle + "리스트 삭제(delete" + strMethod + ")                                                         	 	\n";
        	strServiceImpl += "     * @param input                                                                                             				\n";
        	strServiceImpl += "     * @return                                                                                                  				\n";
        	strServiceImpl += "     * @throws Exception                                                                                        				\n";
        	strServiceImpl += "     */                                                                                                         				\n";
        	strServiceImpl += "    public void delete" + strMethod + "(Map<String, DataSetMap> inDataset, SessionVO sessionVO) throws Exception {           \n";
        	strServiceImpl += "			                                                                                            						\n";
        	strServiceImpl += "        int rowType;                                                                                     					\n";
        	strServiceImpl += "        DataSetMap dsMap = (DataSetMap) inDataset.get(" + "\"" + "dsMaster" + "\"" + ");                    					\n";
        	strServiceImpl += "		                                                                                                    					\n";
        	strServiceImpl += "        for (int i = 0; i < dsMap.size(); i++) {                                                            					\n";
        	strServiceImpl += "			                                                                                            						\n";
        	strServiceImpl += "            Map<String, Object> map = (Map<String, Object>)dsMap.get(i);                                        				\n";
        	strServiceImpl += "            rowType = ((Integer) map.get(NexacroPlatformConstant.DATASET_ROW_TYPE)).intValue();                    			\n";
        	strServiceImpl += "            																				 						            \n";
        	strServiceImpl += "            if ( rowType == DataSet.ROW_TYPE_DELETED ) {                                          							\n";
        	strServiceImpl += "                " + strServiceNmPr + ".delete" + strMethod + "(map);                              							\n";
        	strServiceImpl += "            }                                                                                           						\n";
        	strServiceImpl += "        }                                                                                                   					\n";
        	strServiceImpl += "        return;                                                                                             					\n";
        	strServiceImpl += "    }                                                                                                           				\n";
        	strServiceImpl += "	                                                                                                            				\n";
        	strServiceImpl += "    /**                                                                                                         				\n";
        	strServiceImpl += "     * " + strDbTitle + " 중복 체크(checkExistPK)                                                         	 				\n";
        	strServiceImpl += "     * @param input                                                                                             				\n";
        	strServiceImpl += "     * @return                                                                                                  				\n";
        	strServiceImpl += "     * @throws Exception                                                                                        				\n";
        	strServiceImpl += "     */                                                                                                         				\n";
        	strServiceImpl += "    private Boolean checkExistPK(Map<String, Object> outMap) throws Exception {                                              \n";
        	strServiceImpl += "        List<Map> records = " + strServiceNmPr + "." + sMethodNameKey + "(outMap);                                           \n";
        	strServiceImpl += "        Map<String, Object> outMap1 = (Map<String, Object>)records.get(0);                                                   \n";
        	strServiceImpl += "        if(outMap1.get(" + "\"" + "CNT" + "\"" + ").toString().equals(" + "\"" + "0" + "\"" + ")) {                          \n";
        	strServiceImpl += "            return false;                                                                                                    \n";
        	strServiceImpl += "        }                                                                                                        			\n";
        	strServiceImpl += "        return true;                                                                                                         \n";
        	strServiceImpl += "    }                                                                                                            			\n";
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
        	var strServiceDAO  	    = strGroup + "_DAO";
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var strDbTitle      	= this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));

        	strDao += "/*------------------------------------------------------------------------------  							\n";
        	strDao += " * NAME : " + strServiceDAO + ".java                                                                    	    \n";
        	strDao += " * DESC :                                                                                                    \n";
        	strDao += " * VER  : V1.0                                                                                               \n";
        	strDao += " * PROJ : " + this.gvlProjectTatle + "                                                                       \n";
        	strDao += " * Copyright 2021 avereduSystem All rights reserved                                                          \n";
        	strDao += " *------------------------------------------------------------------------------                             \n";
        	strDao += " *                               MODIFICATION LOG                                                            \n";
        	strDao += " *------------------------------------------------------------------------------                             \n";
        	strDao += " *    DATE     AUTHOR                      DESCRIPTION                        								\n";
        	strDao += " * ----------  ------  ---------------------------------------------------------                             \n";
        	strDao += " * " + this.gvlsysDate + "  " + this.gvlDelpNm + "                                                           \n";
        	strDao += " *------------------------------------------------------------------------------*/                           \n";
        	strDao += "package " + strPath + ".dao;                                                                   	            \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import java.util.List;                                                                                       \n";
        	strDao += "import java.util.Map;                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import javax.annotation.Resource;                                                                            \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import org.apache.ibatis.session.SqlSessionFactory;                                                          \n";
        	strDao += "import org.springframework.stereotype.Repository;                                                            \n";
        	strDao += "                                                                                                             \n";
        	strDao += "import egovframework.rte.psl.dataaccess.EgovAbstractMapper;                                                  \n";
        	strDao += "                                                                                                             \n";
        	strDao += "@Repository(" + "\"" + strServiceDAO + "\"" + ")                                                          	\n";
        	strDao += "public class " + strServiceDAO + " extends EgovAbstractMapper {                                              \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    @Resource(name = " + "\"" + "sqlSession" + "\"" + ")                                                     \n";
        	strDao += "    public void setSqlSessionFactory(SqlSessionFactory sqlSession) {                                         \n";
        	strDao += "        super.setSqlSessionFactory(sqlSession);                                                              \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 조회(retrieve" + strMethod + ")                                            \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public List<Map> retrieve" + strMethod + "(Map<String, Object> map) throws Exception {                   \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return selectList(" + "\"" + strServiceDAO+ "." + "retrieve" + strMethod + "\"" + ", map);          \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 키값을 조회(" + sMethodNamePKey + ")                                      \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public List<Map> " + sMethodNamePKey + "(Map<String, Object> map) throws Exception {                     \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return selectList(" + "\"" + strServiceDAO + "." + sMethodNamePKey + "\"" + ", map);                \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 중복 체크조회(" + sMethodNameKey + ")                                     \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public List<Map> " + sMethodNameKey + "(Map<String, Object> map) throws Exception {                      \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	return selectList(" + "\"" + strServiceDAO+ "." + sMethodNameKey + "\"" + ", map);                	\n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 저장(insert" + strMethod + ")                                              \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public void insert" + strMethod + "(Map<String, Object> map) throws Exception {                          \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	insert(" + "\"" + strServiceDAO+ "." + "insert" + strMethod + "\"" + ", map);                       \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 수정(update" + strMethod + ")                                              \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public void update" + strMethod + "(Map<String, Object> map) throws Exception {                          \n";
        	strDao += "                                                                                                             \n";
        	strDao += "     	update(" + "\"" + strServiceDAO+ "." + "update" + strMethod + "\"" + ", map);                       \n";
        	strDao += "    }                                                                                                        \n";
        	strDao += "                                                                                                             \n";
        	strDao += "    /**                                                                                                      \n";
        	strDao += "     * " + strDbTitle + " 리스트 삭제(delete" + strMethod + ")                                              \n";
        	strDao += "     * @param input                                                                                         	\n";
        	strDao += "     * @return                                                                                              	\n";
        	strDao += "     * @throws Exception                                                                                   	\n";
        	strDao += "     */                                                                                                     	\n";
        	strDao += "    public void delete" + strMethod + "(Map<String, Object> map) throws Exception {                          \n";
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
        	var strServiceDAO  	    = strGroup + "_DAO";
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var idx   				= 0;
            var nRowCnt 			= this.DS_Detail.rowcount;
        	var strQuery 		    = "";
        	var strColName  		= "";
        	var strColPk    		= "";
        	var strDataLength 		= "";
        	var strColType    		= "";
        	var strColComent		= "";
        	var strDbTitle      	= this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));

        	this.tabMain.tabSub06.form.txtXmlquery.set_value("");

        	strQuery += "<?xml version=" + "\"" + "1.0" + "\"" + " encoding=" + "\"" + "UTF-8" + "\"" + "?>									\n";
        	strQuery += "<!DOCTYPE mapper PUBLIC "+ "\"" + "-//mybatis.org//DTD Mapper 3.0//EN"+ "\"" + " "+ "\"" + "http://mybatis.org/dtd/mybatis-3-mapper.dtd"+ "\"" + "> \n";
        	strQuery += "\n";
        	strQuery += "<mapper namespace=" + "\"" + strServiceDAO + "\"" + ">									                            \n";
        	strQuery += "\n";
        	strQuery += "    <select id=" + "\"" + strServiceDAO + "." + "retrieve" + strMethod +  "\"" + " parameterType=" + "\"" + "map" + "\"" + " resultType=" + "\"" + "egovMap" + "\"" + "> \n";
        	strQuery += "        <![CDATA[                                                													\n";
        	strQuery += "            SELECT                                                  											    \n";
        	strQuery += "                   '0' AS CHK" + "/*".padLeft((30-"0 AS CHK".length)," ") + "CHK" + "*/        		                \n";
            for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
        		strQuery   += "                 , A." + strColName + "/*".padLeft((30-strColName.length)," ") + strColComent + "*/             \n";
        	}
        	strQuery += "              FROM " + strTableName + " A" + "                                             							 \n";
        	strQuery += "             WHERE 1=1                                             												     \n";
         	strQuery += "        ]]" +">                                                      												 \n";
        	/*-------------------------------------------------------------------*/
        	pkRow = this.DS_Detail.findRow("COL_PK","Y");
        	if(pkRow >-1)
        	{
        		for(var idx = 0; idx < nRowCnt; idx ++)
        		{
        			 strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        			 strColPk   = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));
        			 if((strColPk.trim()).length > 0)
        			 {
        				strQuery += "        <if test=" + "\"" + this.gfn_trim(strColName) + " != null and " + this.gfn_trim(strColName) + " != ''\"" +  ">    \n";
        				strQuery += "            <![CDATA[                                         							                        \n";
        				strQuery += "               AND " +"A." + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "  \n";
        				strQuery += "            ]]" + ">                                           													\n";
        				strQuery += "        </if>                                                                                                   \n";
        			 }

        		}
        	}
        	strQuery += "        /* " + strServiceDAO+ "." + "retrieve" + strMethod + " " + strDbTitle + " 조회 */	                                 \n";
        	strQuery += "    </select> 	                                                        													 \n";
        	strQuery += "\n";
        	strQuery += "    <select id=" + "\"" + strServiceDAO+ "." + sMethodNamePKey + "\"" + " parameterType=" + "\"" + "map" + "\"" + " resultType=" + "\"" + "egovMap" + "\"" + "> \n";
        	strQuery += "        <![CDATA[                                                													 \n";
        	strQuery += "            SELECT                                                  											     \n";
         	strQuery += "                   LPAD(NVL(MAX(TO_NUMBER(CODE))+1,'1'),5,'0') AS KEY_CODE        								     \n";
        	strQuery += "              FROM " + strTableName + "                                             								 \n";
        	strQuery += "             WHERE 1=1                                             												     \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		 strColPk 		= this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));

        		 if( (strColPk.trim()).length > 0)
        		 {
        			strQuery += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "    \n";
        		 }
        	}
         	strQuery += "        ]]" +">                                                      												             \n";
        	strQuery += "        /* " + strServiceDAO+ "." + sMethodNamePKey +  " " + strDbTitle + " PK 조회 */								             \n";
        	strQuery += "    </select> 	                                                        													     \n";
        	strQuery += "\n";
        	strQuery += "    <select id=" + "\"" + strServiceDAO+ "." + sMethodNameKey + "\"" + " parameterType=" + "\"" + "map" + "\"" + " resultType=" + "\"" + "egovMap" + "\"" + "> \n";
        	strQuery += "        <![CDATA[\n";
        	strQuery += "            SELECT\n";
        	strQuery += "                   COUNT(1) AS CNT\n";
        	strQuery += "              FROM " + strTableName + "\n";
        	strQuery += "             WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColPk = this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));

        		if ((strColPk.trim()).length > 0)
        		{
        			strQuery += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "\n";
        		}
        	}
        	strQuery += "        ]]" + ">\n";
        	strQuery += "        /* " + strServiceDAO + "." + sMethodNameKey +  " " + strDbTitle + " 중복 조회 */\n";
        	strQuery += "    </select>\n";
        	strQuery += "\n";
        	strQuery += "    <insert id=" + "\"" + strServiceDAO+ "." + "insert" + strMethod + "\"" + " parameterType=" + "\"" + "map" + "\"" + "> \n";
        	strQuery += "        <![CDATA[                                                														  \n";
        	strQuery += "            INSERT INTO " + strTableName + "                                       										  \n";
        	strQuery += "            (                                       																	  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		if(idx == 0)
        		{
        			strQuery += "                   " + strColName + "/*".padLeft((30-strColName.length)," ") + this.gfn_trim(strColComent) + "*/ \n";
        		}else
        		{
        			strQuery += "                 , " + strColName + "/*".padLeft((30-strColName.length)," ") + this.gfn_trim(strColComent) + "*/ \n";
        		}
        	}
        	strQuery += "            )VALUES                                                  														\n";
        	strQuery += "            (                                                        														\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                   SYSDATE                                   \n";

        			}else
        			{
        				strQuery += "                   #{" + this.gfn_trim(strColName) + "}" + " \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                 , SYSDATE                                   \n";

        			}else
        			{
        				strQuery += "                 , #{" +  this.gfn_trim(strColName) + "}" + "  \n";
        			}
        		}
        	}
        	strQuery += "            )	                                                      						\n";
        	strQuery += "        ]]" +">                                    											\n";
        	strQuery += "        /* " + strServiceDAO+ "." + "insert" + strMethod +  " " + strDbTitle + " 저장 */	\n";
        	strQuery += "    </insert>                                                           					\n";
        	/*--------------------------UPDATE-----------------------------------------*/
        	strQuery += "\n";
        	strQuery += "    <update id=" + "\"" + strServiceDAO+ "." + "update" + strMethod + "\"" + " parameterType=" + "\"" + "map" + "\"" + "> \n";
        	strQuery += "        <![CDATA[                                                						\n";
        	strQuery += "            UPDATE " + strTableName + "                                			        \n";
        	strQuery += "               SET                                                      				\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                   " + strColName + " = SYSDATE".padLeft((35-strColName.length)," ") + "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strQuery += "                   " + strColName + " = #{".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.gfn_trim(strColName).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                 , " + strColName + " = SYSDATE".padLeft((35-strColName.length)," ") +  "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strQuery += "                 , " + strColName + " = #{".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.gfn_trim(strColName).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}
        	}
        	strQuery += "             WHERE 1=1                                                   						                        \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 	= this.DS_Detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        		    strQuery += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "  \n";
        		 }
        	}
        	strQuery += "        ]]>  	                                   							                            				\n";
        	strQuery += "        /* " + strServiceDAO+ "." + "update" + strMethod +  " " + strDbTitle + " 수정 */								\n";
        	strQuery += "    </update>                                                           												\n";
        		/*--------------------------MERGE-----------------------------------------*/
        	strQuery += "\n";
        	strQuery += "    <update id=" + "\"" + strServiceDAO+ "." + "merge" + strMethod + "\"" + " parameterType=" + "\"" + "map" + "\"" + "> \n";
        	strQuery += "        <![CDATA[                                                				 \n";
        	strQuery += "            MERGE INTO " + strTableName + " A                               \n";
        	strQuery += "                 USING DUAL                                                 \n";
        	strQuery += "                    ON (                                                 	 \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 	= this.DS_Detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        			if(idx == 0)
        			{
        				strQuery += "                               A." + strColName + " = #{".padLeft((18-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "        		\n";

        			} else
        			{
        				strQuery += "                           AND A." + strColName + " = #{".padLeft((18-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "        		\n";
        			}


        		 }
        	}
        	strQuery += "                       )                                                 	 \n";
        	strQuery += "                  WHEN MATCHED THEN                                                    \n";
        	strQuery += "                        UPDATE SET                               													\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		strColPk 	    = this.DS_Detail.getColumn(idx, "COL_PK");

        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                               A." + strColName + " = SYSDATE".padLeft((35-strColName.length)," ") + "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strQuery += "                               A." + strColName + " = #{".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.gfn_trim(strColName).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                             , A." + strColName + " = SYSDATE".padLeft((35-strColName.length)," ") +  "/*".padLeft((61-this.gfn_trim(strColName + " = SYSDATE".padLeft((35-strColName.length)," ")).length)," ") + this.gfn_trim(strColComent) + "*/  \n";

        			}else
        			{
        				strQuery += "                             , A." + strColName + " = #{".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "/*".padLeft((30-this.gfn_trim(strColName).length)," ") + this.gfn_trim(strColComent) + "*/  \n";
        			}
        		}

        	}
        	strQuery += "                  WHEN NOT MATCHED THEN                                                  \n";
        	strQuery += "                            INSERT                                        				 \n";
        	strQuery += "                            (                                       					 \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		if(idx == 0)
        		{
        			strQuery += "                                   A." + strColName + "                 \n";
        		}else
        		{
        			strQuery += "                                 , A." + strColName + "                 \n";
        		}
        	}
        	strQuery += "                             )VALUES                                                  														\n";
        	strQuery += "                             (                                                        														\n";

        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		if(idx == 0)
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                                   SYSDATE                                   \n";

        			}else
        			{
        				strQuery += "                                   #{" + this.gfn_trim(strColName) + "}" + "  \n";
        			}
        		}else
        		{
        			if(strColType == "DATE")
        			{
        				strQuery += "                                 , SYSDATE                                   \n";

        			}else
        			{
        				strQuery += "                                 , #{" +  this.gfn_trim(strColName) + "}" + "                                   \n";
        			}
        		}
        	}
        	strQuery += "                             )	                                                      									  \n";
        	strQuery += "        ]]>  	                                   							                            			  \n";
        	strQuery += "        /* " + strServiceDAO+ "." + "merge" + strMethod +  " " + strDbTitle + " 저장/수정 */							  \n";
        	strQuery += "    </update>                                                           													  \n";

        	/*--------------------------------DELETE-----------------------------------*/
        	strQuery += "\n";
        	strQuery += "    <delete id=" + "\"" + strServiceDAO+ "." + "delete" + strMethod + "\"" + " parameterType=" + "\"" + "map" + "\"" + ">    \n";
        	strQuery += "        <![CDATA[                                                           												  \n";
        	strQuery += "            DELETE FROM " + strTableName + "                                                  							      \n";
        	strQuery += "             WHERE 1=1\n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "COL_PK");
        		 if((strColPk.trim()).length > 0)
        		 {
        			strQuery += "               AND " + strColName + " = #{".padLeft((20-strColName.length)," ") + this.gfn_trim(strColName) + "}" + "  \n";
        		 }
        	}
        	strQuery += "        ]]>\n";
        	strQuery += "        /* " + strServiceDAO+ "." + "delete" + strMethod +  " " + strDbTitle + " 삭제 */								       \n";
        	strQuery += "    </delete>	                                                          													   \n";
        	strQuery += "</mapper>                                                                 													   \n";
            strQuery += "                                                                 															   \n";

        	this.tabMain.tabSub06.form.txtXmlquery.set_value(strQuery);
        };

        /*===============================================================================================================================*/
        this.fn_txtDataset = function(strTableName)
        {
        	var strGroup    		= this.divSearch.form.edClassName.text.trim();
        	var strMethod			= this.divSearch.form.edMethodName.text.trim();
        	var strServiceDAO  	    = strGroup + "_DAO";
        	var sMethodNamePKey     = "retrieve" 	+ this.gfn_trim(strMethod) + "PKey";
        	var sMethodNameKey      = "retrieve" 	+ this.gfn_trim(strMethod) + "Key";
        	var strPath      		= this.divSearch.form.edtPackage.text.trim();
        	var idx   				= 0;
            var nRowCnt 			= this.DS_Detail.rowcount;
        	var strDataset          = "";
        	var strColName  		= "";
        	var strColPk    		= "";
        	var strDataLength 		= "";
        	var strColType    		= "";
        	var strColComent		= "";
        	var strDbTitle      	= this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));

        	this.tabMain.tabSub11.form.txtDataset.set_value("");

            strDataset += "------------------------------------파싱데이타 셋(ds에 Contents속성에 반드시 넣어주세요.) -------------------------------	\n";
            strDataset += "                                                                 																\n";
        	strDataset += "<ColumnInfo>                                                                 														\n";
        	strDataset += "\t"	+  "<Column id=" + "\"" +  "CHK" + "\"" + " type=" + "\"" + "STRING" + "\"" + " size=" + "\"" + "1" + "\"" + "/>\n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strDataLength 	= this.DS_Detail.getColumn(idx, "DATA_LENGTH");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

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

        		strDataset += "\t"	+  "<Column id=" + "\"" +  this.gfn_trim(strColName) + "\"" + " type=" + "\"" + strDsType + "\"" + " size=" + "\"" + strDataLength + "\"" + "/>\n";
        	}
        	strDataset += "</ColumnInfo>                                                                 														\n";
        	strDataset += "                                                                 														\n";
            strDataset += "------------------------------------그리드 데이타 셋 디자인 입니다.   ------------------------------------------\n";
            strDataset += "\n";
        	strDataset += "<Grid id=" + "\"" + "grdMaster" + "\"" + " taborder=" + "\"" + "1" + "\"" + " binddataset=" + "\"" + "dsMaster" + "\"" + " ";
        	strDataset += "autoenter=" + "\"" + "select" + "\"" + " autofittype=" + "\"" + "col" + "\"" + " ";
        	strDataset += "onheadclick=" + "\"" + "grdMaster_onheadclick" + "\"" + " ";
        	strDataset += "onheaddblclick=" + "\"" + "grdMaster_onheaddblclick" + "\"" + " ";
        	strDataset += "left=" + "\"" + "0" + "\"" + " top=" + "\"" + "80" + "\"" + " right=" + "\"" + "0" + "\"" + " bottom=" + "\"" + "0" + "\"" + ">\n";
        	strDataset += "       <Formats>\n";
        	strDataset += "              <Format id=" + "\"" + "default" + "\"" + ">\n";
        	strDataset += "                     <Columns>\n";
        	strDataset += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	strDataset += "                            <Col size=" + "\"" + "40" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strDataset += "                            <Col size=" + "\"" + "100" + "\"" + "/>\n";
        	}
        	strDataset += "                     </Columns>\n";
        	strDataset += "                     <Rows>\n";
        	strDataset += "                            <Row" + " size=" + "\"" + "30" + "\"" + " band=" + "\"" + "head" + "\"" + "/>\n";
        	strDataset += "                            <Row" + " size=" + "\"" + "30" + "\"" + "/>\n";
        	strDataset += "                     </Rows>\n";
        	strDataset += "                     <Band id=" + "\"" + "head" + "\"" + ">\n";
        	strDataset += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + "/>  \n";
        	strDataset += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " text=" + "\"" + "No." + "\"" + "/>  \n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strHeadName = this.DS_Detail.getColumn(idx, "COMMENTS");
        		strDataset += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " disptype=" + "\"" + "normal" + "\"" + " text=" + "\"" + this.gfn_trim(strHeadName).toLowerCase() + "\"" + "/>\n";
        	}
        	strDataset += "                     </Band>\n";
        	strDataset += "                     <Band id=" + "\"" + "body" + "\"" + ">\n";
        	strDataset += "                            <Cell displaytype=" + "\"" + "checkboxcontrol" + "\"" + " edittype=" + "\"" + "checkbox" + "\"" + " text=" + "\"" + "bind:CHK" + "\"" + " editmaxlength=" + "\"" + "1" + "\"" + "/>\n";
        	strDataset += "                            <Cell col=" + "\"" + "1" + "\"" + " displaytype=" + "\"" + "normal" + "\"" + " expr=" + "\"" + "expr:(dataset.getRowType(currow)) == '2' ? '+':(dataset.getRowType(currow)) == '4' ? 'U':currow+1" + "\"" + "/>\n";
        	for (var idx = 0; idx < nRowCnt; idx++)
        	{
        		strColName = this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType = this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
        		strDataLength = this.DS_Detail.getColumn(idx, "DATA_LENGTH");

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
        			strDataset += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.gfn_trim(strColName) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + " calendardisplaynulltype=" + "\"" + "none" + "\"" + "/>\n";
        		}
        		else
        		{
        			strDataset += "                            <Cell col=" + "\"" + (idx + 2).toString() + "\"" + " displaytype=" + "\"" + this.gfn_trim(strDsType) + "\"" + " edittype=" + "\"" + this.gfn_trim(strEType) + "\"" + " textAlign=" + "\"" +  this.gfn_trim(strAlignSize) + "\"" + " text=" + "\"" + "bind:" + this.gfn_trim(strColName) + "\"" + " editmaxlength=" + "\"" + strDataLength + "\"" + "/>\n";
        		}
        	}
        	strDataset += "                    </Band>\n";
        	strDataset += "              </Format>\n";
        	strDataset += "      </Formats>\n";
        	strDataset += "</Grid>\n";

        	this.tabMain.tabSub11.form.txtDataset.set_value(strDataset);
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
            var strTableNamePk 	= "PK_" + this.DS_Master.getColumn(this.DS_Master.rowposition, "TABLE_NAME");

            var idx   = 0;
            var nRowCnt = this.DS_Detail.rowcount;

            strXOracle += "DROP TABLE " 			+  strTableName + ";\n\n";
            strXOracle += "CREATE TABLE " 			+  strTableName + "(\n";
            strComent  += "COMMENT ON TABLE " 		+  strTableName + " IS '" +
            this.DS_Master.getColumn(this.DS_Master.rowposition, "COMMENTS") + "';\n";

        	var chkFalg = this.DS_Detail.findRow("COL_PK","Y");

            for(var idx = 0; idx < nRowCnt; idx++)
            {
                strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
                strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "VW_DATA_TYPE"));
                strColNull   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_NULL"));
                strColPk     	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_PK"));
                strColDef    	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COL_DEF"));
                strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
                strDataType  	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));
                strDataLength 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_LENGTH"));

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
                strXOracle += "  CONSTRAINT " + strTableNamePk + " PRIMARY KEY (" + strConstraint + ")\n";
            }

            strXOracle += ");";

            strSqData += "SELECT \n";

            for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));
        		if(idx == 0)
        		{
        			strSqData += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";
        		}else
        		{
        			strSqData += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + "\n";
        		}
        	}
        	strSqData += "FROM " + strTableName + " \n";
        	strSqData += "WHERE 1=1";
        	var chk = this.DS_Detail.findRow("COL_PK","Y");

        	if(chk < 0)
        	{
        		strSqData += ";";

        	}else
        	{
        		strSqData += "\n";
        	}
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		 if((this.gfn_trim(strColPk)).length > 0)
        		 {
        			strSqData += "-- AND " + strColName + " = @".padLeft((30-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + " \n";
        		 }
        	}
        	if(chk > -1)
        	{
        		strSqData += ";";

        	}
        // 	====================sql 입력 쿼리 =========================================//
        	strSqData1 += "INSERT INTO " + strTableName + " \n";
        	strSqData1 += "( \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COLUMN_NAME"));
        		strColComent 	= this.gfn_trim(this.DS_Detail.getColumn(idx, "COMMENTS"));

        		if(idx == 0)
        		{
        			strSqData1 += "       " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + " \n";

        		}else
        		{
        			strSqData1 += "     , " + strColName + "--".padLeft((30-strColName.length)," ") + strColComent + " \n";
        		}
        	}
        	strSqData1 += ")VALUES \n";
        	strSqData1 += "( \n";
        	for(var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

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
        			strSqData1 += "       " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + " \n";

        		}else
        		{
        			strSqData1 += "     , " + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + " \n";
        		}

        	}
        	strSqData1 += "); \n";

           // ====================sql 수정 쿼리 =========================================//
            strSqData3 += "UPDATE " + strTableName + " \n";
        	strSqData3 += "SET \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

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
        			strSqData3 += "       " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + strColComent + " \n";
        		}else
        		{
        			strSqData3 += "     , " + strColName + " = ".padLeft((20-strColName.length)," ") + ((DsType.length==0) ? "''" : DsType) + "-- ".padLeft(30 -((DsType.length==0) ? "''" : DsType).length," ") + this.gfn_trim(strColName) + strColComent + " \n";
        		}
        	}
        	strSqData3 += "WHERE 1=1 \n";
        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData3 +="AND " + strColName + " = '' --@".padLeft((15-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + " \n";
        		 }
        	}
            strSqData3 += ";";



          //  ====================sql 삭제 쿼리 =========================================//
            strSqData2 += "DELETE FROM " + strTableName + " \n";
        	strSqData2 += "WHERE 1=1 \n";
        	for(var idx = 0; idx < nRowCnt; idx++)
            {
        		 strColName		= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		 strColPk 		= this.DS_Detail.getColumn(idx, "COL_PK");
        		 strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");
        		 if( this.gfn_trim(strColPk).length > 0)
        		 {
        			strSqData2 +="AND " + strColName + " = '' --".padLeft((15-strColName.length)," ") + this.gfn_trim(strColName) + "--".padLeft((15-strColName.length)," ") + strColComent + " \n";
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
        	var strPath      		= "." + this.gfn_trim(this.divSearch.form.cbProjectName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + this.gfn_trim(this.divSearch.form.edBuisNum.text);
            var strNexacroNm        = this.gfn_trim(this.divSearch.form.edtNexacro.text);
        	var strDbTitle      	= this.gfn_trim(this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS"));
        	this.tabMain.tabSub08.form.txtPID.set_value("");

        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "* FormID(화면   ID명): " +  strNexacroNm 	+ "(" + this.gfn_trim(strDbTitle) + " 관리(조회))\n";
        	strPidxml += "* 작 성         일 명: " + this.gvlDelpNm 	+ "\n";
        	strPidxml += "* 작 성         일 자: " + this.gvlsysDate   + "\n";
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
        	strPidxml += "this.lvchkColidDs   = " + "\"" + "CLASS_NM" + "\"" + ";                        // 필수 입력사항 칼럼ID  예)  " + "\"" + "commSmcd$commName" + "\"" + "\n";
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
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        04. 공통 코드 및 콤보 데이타 조회\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.fn_formInit = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    var strDs    = " + "\"" + "dsUserYn|dsGUserYn" + "\"" + ";                    // 데이터를 받을 데이터셋리스트     예) " + "\"" + "DS_CODE01|DS_CODE02|DS_CODE03" + "\"" + "\n";
        	strPidxml += "    var strLgcd  = " + "\"" + "00801|00801" + "\"" + ";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) " + "\"" + "Z01|Z02|Z03" + "\"" + "\n";
        	strPidxml += "    var strComb  = " + "\"" + "T|X" + "\"" + ";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)\n";
        	strPidxml += "    var strOptn  = " + "\"" + "" + "\"" + ";                                      // 조건문 " + "\"" + " AND COMM_IT02 = '" + "\"" + " + vip + " + "\"" + "'|||" + "\"" + ";\n";
        	strPidxml += "    var svcId    = " + "\"" + "Init" + "\"" + ";\n";
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
        	strPidxml += "                    this.fn_PostformInit();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "singleInit" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostSingleInt();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Ret" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostRet();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Save" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostSave();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            case " + "\"" + "Del" + "\"" + ":\n";
        	strPidxml += "                    this.fn_PostDel();\n";
        	strPidxml += "                break;\n";
        	strPidxml += "            default:\n";
        	strPidxml += "                break;\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/************************************************************************************************;\n";
        	strPidxml += " * 공통 버튼 호출 영역(공통버튼 사용에만사용);\n";
        	strPidxml += " ************************************************************************************************/;\n";
        	strPidxml += "/*;\n";
        	strPidxml += " * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);\n";
        	strPidxml += " */;\n";
        	strPidxml += "this.fn_cmmBtnClick = function(sBtn)\n";
        	strPidxml += "{\n";
        	strPidxml += "    switch(sBtn)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        case " + "\"" + "ret" + "\"" + " :        // 조회\n";
        	strPidxml += "                this.fn_Ret();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "new" + "\"" + " :         // 신규\n";
        	strPidxml += "                this.fn_New();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "del" + "\"" + " :         // 삭제\n";
        	strPidxml += "                this.fn_Del();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "save" + "\"" + " :        // 저장\n";
        	strPidxml += "                this.fn_Save();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "excel" + "\"" + " :       // 엑셀\n";
        	strPidxml += "                this.fn_Excel();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "print" + "\"" + " :       // 출력\n";
        	strPidxml += "                 this.fn_Print();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "confirm" + "\"" + " :     // 확정\n";
        	strPidxml += "                 this.fn_Confirm();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "tmp1" + "\"" + " :        // 여분버튼1\n";
        	strPidxml += "                 this.fn_Tmp1();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "tmp2" + "\"" + " :        // 여분버튼2\n";
        	strPidxml += "                 this.fn_Tmp2();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        case " + "\"" + "tmp3" + "\"" + " :        // 여분버튼3\n";
        	strPidxml += "                 this.fn_Tmp3();\n";
        	strPidxml += "            break;\n";
        	strPidxml += "        default :\n";
        	strPidxml += "            break;\n";
        	strPidxml += "    };\n";
        	strPidxml += "};;\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        05. 조회 함수 선언(마스터 함수)\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 조회 전 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreRet = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    // 조회조건 셋팅\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 조회 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_Ret = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreRet())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Ret" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Retrieve" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_input=ds_input" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "dsMaster=dsMaster" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var GBV_MENUID    = objApp.gv_cutPrgId;\n";
        	strPidxml += "    if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))\n";
        	strPidxml += "    {\n";
        	strPidxml += "    	strArg += " + "\"" + "GBV_MENUID=" + "\"" + " + GBV_MENUID + " + "\"" + " " + "\"" + " + strArg;\n";
        	strPidxml += "    }\n";
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
        	strPidxml += "this.fn_PostRet = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.gfn_getRowCount(this.staRowCnt,this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        06. 추가 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 추가 전 실행(기본체크사항)\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreNew = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    return true;\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 마스터 추가 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_New = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreNew())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var nRow = this.dsMaster.addRow();\n";
        	strPidxml += "    this.dsMaster.setColumn(nRow," + "\"" + "CHK" + "\"" + ",     " + "\"" + "0" + "\"" + ");           //업체코드\n";
        	strPidxml += "    this.dsMaster.setColumn(nRow," + "\"" + "USE_CHK" + "\"" + ", " + "\"" + "1" + "\"" + ");           //사용유무\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        07. 삭제 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**\n";
        	strPidxml += " * 기능 : 삭제 버튼 실행\n";
        	strPidxml += " */\n";
        	strPidxml += "this.fn_PreDel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //멀티삭제용도\n";
        	strPidxml += "    if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow(" + "\"" + "CHK" + "\"" + ",1) == -1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "삭제할 데이터가 없습니다." + "\"" + "," + "\"" + "삭제정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "warning" + "\"" + ");\n";
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
        	strPidxml += "        if(this.dsMaster.getColumn(i," + "\"" + "CHK" + "\"" + ") == " + "\"" + "1" + "\"" + " || this.dsMaster.getRowType(i) == 2)\n";
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
        	strPidxml += "this.fn_Del = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreDel())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Del" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Delete" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "dsMaster=dsMaster:u" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var strCallBack = " + "\"" + "fn_callBack" + "\"" + ";    //공백일시 기본 fn_callBack\n";
        	strPidxml += "    var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로\n";
        	strPidxml += "    this.gfn_Transaction(strSvc\n";
        	strPidxml += "                       , strUrl\n";
        	strPidxml += "                       , strInDs\n";
        	strPidxml += "                       , strOutDs\n";
        	strPidxml += "                       , strArg\n";
        	strPidxml += "                       , strCallBack\n";
        	strPidxml += "                       , strASync);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "this.fn_PostDel = function()\n";
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
        	strPidxml += "this.fn_PreSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.dsMaster.rowcount > 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        for(var i=0;i<this.dsMaster.rowcount; i++)\n";
        	strPidxml += "        {\n";
        	strPidxml += "            if(this.dsMaster.getColumn(i," + "\"" + "CHK" + "\"" + ") == " + "\"" + "0" + "\"" + ")\n";
        	strPidxml += "            {\n";
        	strPidxml += "                continue;\n";
        	strPidxml += "            }\n";
        	strPidxml += "            this.dsMaster.setColumn(i," + "\"" + "CHK" + "\"" + "," + "\"" + "0" + "\"" + ");\n";
        	strPidxml += "        }\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
        	strPidxml += "    if(!this.gfn_isUpdate(this.dsMaster))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "변경된 이력이 없습니다." + "\"" + "," + "\"" + "저장정보" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "\n";
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
        	strPidxml += "this.fn_Save = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(!this.fn_PreSave())\n";
        	strPidxml += "    {\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var strSvc      = " + "\"" + "Save" + "\"" + ";\n";
        	strPidxml += "    var strUrl      = " + "\"" + strPath.replace(/\./g,"/") + "/Save" + strMethod + ".do" + "\"" + ";\n";
        	strPidxml += "    var strInDs     = " + "\"" + "ds_input=ds_input:a " + "\"" + ";\n";
        	strPidxml += "        strInDs    += " + "\"" + "dsMaster=dsMaster:u" + "\"" + ";\n";
        	strPidxml += "    var strOutDs    = " + "\"" + "dsMaster=dsMaster" + "\"" + ";\n";
        	strPidxml += "    var strArg      = " + "\"" + "" + "\"" + ";\n";
        	strPidxml += "    var GBV_MENUID    = objApp.gv_cutPrgId;\n";
        	strPidxml += "    if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))\n";
        	strPidxml += "    {\n";
        	strPidxml += "    	strArg += " + "\"" + "GBV_MENUID=" + "\"" + " + GBV_MENUID + " + "\"" + " " + "\"" + " + strArg;\n";
        	strPidxml += "    }\n";
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
        	strPidxml += "this.fn_PostSave = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    this.gfn_getRowCount(this.staRowCnt,this.dsMaster);\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        09. 초기화\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        10. 출력 함수 선언\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "/**********************************************************************\n";
        	strPidxml += "        11. ExcelDnwn 엑셀로 출력\n";
        	strPidxml += "***********************************************************************/\n";
        	strPidxml += "this.fn_Excel = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(this.dsMaster.rowcount < 1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_alert(" + "\"" + "출력할 엑셀데이터가 없습니다." + "\"" + ", " + "\"" + "EXCEL 정보" + "\"" + " ," + "\"" + "" + "\"" + "," + "\"" + "information" + "\"" + ");\n";
        	strPidxml += "        return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    var result = this.gfn_confirm( " + "\"" + "Excel를 출력하시겠습니까?" + "\"" + ", " + "\"" + "EXCEL 출력" + "\"" + "," + "\"" + "" + "\"" + "," + "\"" + "question" + "\"" + " );\n";
        	strPidxml += "    if(result == 0)\n";
        	strPidxml += "    {\n";
        	strPidxml += "       return false;\n";
        	strPidxml += "    }\n";
        	strPidxml += "    this.gfn_excelExport(this.grdList, " + "\"" + "시트이름" + "\"" + "," + "\"" + "파일이름" + "\"" + ");\n";
        	strPidxml += "\n";
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
        	strPidxml += " *      그리드멀티 체크\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grdMaster_onheadclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(e.cell == this.grdMaster.getBindCellIndex(" + "\"" + "body" + "\"" + "," + "\"" + "CHK" + "\"" + "))\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_checkAll(obj, e);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += " *      그리드멀티 소트정열\n";
        	strPidxml += " */\n";
        	strPidxml += "this.grdMaster_onheaddblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)\n";
        	strPidxml += "{\n";
        	strPidxml += "    if(e.cell != this.grdMaster.getBindCellIndex(" + "\"" + "body" + "\"" + "," + "\"" + "CHK" + "\"" + ") && e.cell != 1)\n";
        	strPidxml += "    {\n";
        	strPidxml += "        this.gfn_gridSort(obj,e);\n";
        	strPidxml += "    }\n";
        	strPidxml += "};\n";
        	strPidxml += "\n";
        	strPidxml += "/**\n";
        	strPidxml += "  * 닫을시 사용자가 변경유무를 체크(공통처리)\n";
        	strPidxml += " **/\n";
        	strPidxml += "this.fn_beforeclose = function()\n";
        	strPidxml += "{\n";
        	strPidxml += "    //return this.gfn_isUpdate(this.dsMaster);\n";
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
        	var strTableNm      = this.DS_Master.getColumn(this.DS_Master.rowposition,"TABLE_NAME");
        	var strDesc			= this.DS_Master.getColumn(this.DS_Master.rowposition,"COMMENTS");

        	strVo += "/*------------------------------------------------------------------------------   \n";
        	strVo += " * NAME : " + strVoName + ".java                                                   \n";
        	strVo += " * DESC :                                                                          \n";
        	strVo += " * VER  : V1.0                                                                     \n";
        	strVo += " * PROJ : " + this.gvlProjectTatle + "                                             \n";
        	strVo += " * Copyright 2021 avereduSystem All rights reserved                                  \n";
        	strVo += " *------------------------------------------------------------------------------   \n";
        	strVo += " *                               MODIFICATION LOG                                  \n";
        	strVo += " *------------------------------------------------------------------------------   \n";
        	strVo += " *    DATE     AUTHOR                      DESCRIPTION                        	 \n";
        	strVo += " * ----------  ------  ---------------------------------------------------------   \n";
        	strVo += " * " + this.gvlsysDate + "  " + this.gvlDelpNm + "                                 \n";
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
        	strVo += "import com.averedu.cmmn.vo.DefaultVO;                                            \n";
        	strVo += "                                                                                   \n";
        	strVo += "@Alias( " + "\"" + strVoName + "\"" + " )                                          \n";
        	strVo += "@Data                                                                              \n";
        	strVo += "@ToString( callSuper = true )                                                      \n";
        	strVo += "public class " + strVoName + " extends DefaultVO {                                 \n";
        	strVo += "                                                                                   \n";

        	for (var idx = 0; idx < nRowCnt; idx++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

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
        		strVo += "\t/** " + this.gfn_trim(strColComent) + " **/\n";
        		strVo += "\t"	+  "private " + strDsType + " " + this.fn_strColName(strColName.toLowerCase()) +";\n";
        	}
        	strVo += "\n";

        	for (var idx = 0; idx < nRowCnt; idx ++)
            {
        		strColName   	= this.DS_Detail.getColumn(idx, "COLUMN_NAME");
        		strColComent 	= this.DS_Detail.getColumn(idx, "COMMENTS");

        		strColType   	= this.gfn_trim(this.DS_Detail.getColumn(idx, "DATA_TYPE"));

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
        this.fn_Excel = function()
        {
        	this.gfn_excelExport(this.tabMain.tabSub01.form.grdDetail);
        };

        this.cboUsers_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };


        this.divSearch_cbProjectName_onitemchanged = function(obj,e)
        {

        	this.ds1Depth.filter("LEVLE1 == '" + this.divSearch.form.cbProjectName.value + "'");
        	this.divSearch.form.cbWorkName.set_index(0);
        	this.divSearch.form.edBuisNum.set_value("001");

        	this.commObjectPro();
        };

        this.divSearch_cbWorkName_onitemchanged = function(obj,e)
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

        	this.divSearch.form.edtPackage.set_value("com.averedu" + "." +  this.gfn_trim(this.divSearch.form.cbProjectName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + "." + this.gfn_trim(this.divSearch.form.cbWorkName.value) + this.gfn_trim(this.divSearch.form.edBuisNum.text));
        	this.divSearch.form.edClassName.set_value(this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text));
        	this.divSearch.form.edMethodName.set_value(this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.gfn_trim(this.divSearch.form.edtWorkName1.text));

        	var strTableName 	= this.cboUsers.value + "." + this.DS_Master.getColumn(this.DS_Master.rowposition, "TABLE_NAME");
        	var strWork 	 	= this.gfn_trim(this.divSearch.form.edClassName.text);
        	var strNexacroNm 	= this.divSearch.form.cbWorkName.value.toLocaleUpperCase() + this.gfn_trim(this.divSearch.form.edBuisNum.text) + this.gfn_trim(this.divSearch.form.edtWorkName.text) + this.divSearch.form.cbGbName.value + this.gfn_trim(this.divSearch.form.edGbNum.value);

        	this.divSearch.form.edtController.set_value(strWork 	+ "_Controller.java");
        	this.divSearch.form.edtService.set_value(strWork 		+ "_Service.java");
        	this.divSearch.form.edtServiceImpl.set_value(strWork 	+ "_ServiceImpl.java");
        	this.divSearch.form.edtDao.set_value(strWork 			+ "_DAO.java");
        	this.divSearch.form.edtSqlXml.set_value(strWork 		+ "_Sql.xml");
        	this.divSearch.form.edtNexacro.set_value(strWork 		+ ".xfdl");
        	this.divSearch.form.edtDtoVo.set_value(strWork  		+ "_VO.java");

        	this.gvlDelpNm  = this.divSearch.form.edtDevelopName.text;

        	this.fn_txtContorller();
        	this.fn_txtService();
        	this.fn_txtServiceImpl();
        	this.fn_txtDao();
        	this.fn_txtXmlquery(strTableName);
        	this.fn_txtXOracle(strTableName);
        	this.fn_txtPidXml();
        	this.fn_txtVo();
        	this.fn_txtDataset(strTableName);
        };



        this.edtFilter_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        this.divSearch_edtDevelopName_onchanged = function(obj,e)
        {
        	this.commObjectPro();
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
            this.divSearch.form.cbProjectName.addEventHandler("onitemchanged",this.divSearch_cbProjectName_onitemchanged,this);
            this.divSearch.form.edtWorkName.addEventHandler("onchanged",this.divSearch_edtWorkName_onchanged,this);
            this.divSearch.form.edtWorkName1.addEventHandler("onchanged",this.divSearch_edtWorkName1_onchanged,this);
            this.divSearch.form.edBuisNum.addEventHandler("onchanged",this.divSearch_edBuisNum_onchanged,this);
            this.divSearch.form.cbGbName.addEventHandler("onitemchanged",this.divSearch_cbGbName_onitemchanged,this);
            this.divSearch.form.edGbNum.addEventHandler("onchanged",this.divSearch_edGbNum_onchanged,this);
            this.divSearch.form.cbWorkName.addEventHandler("onitemchanged",this.divSearch_cbWorkName_onitemchanged,this);
            this.divSearch.form.edtDevelopName.addEventHandler("onchanged",this.divSearch_edtDevelopName_onchanged,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheadclick",this.tabMain_tabSub01_grdDetail1_onheadclick,this);
            this.tabMain.tabSub01.form.grdDetail.addEventHandler("onheaddblclick",this.tabMain_tabSub01_grdDetail1_onheaddblclick,this);
            this.DS_Master.addEventHandler("onrowposchanged",this.DS_Master_onrowposchanged,this);
        };
        this.loadIncludeScript("COMM000002S.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
