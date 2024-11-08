(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_020");
            this.set_titletext("공통코드등록관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공통코드등록관리");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","40","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("코드내역");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","58","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","30","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","65","795","344",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","stc_00:0","40","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","810","40","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("코드상세");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","810","58","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","810","30","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","810","65",null,"344","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","stc_03:0","40","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","795","31","15","378",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_01","0","435","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("코드등록");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","453","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","425","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","460",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","stc_01:0","435","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","410",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Hspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"40","46","22","240",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"40","46","22","192",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"40","46","22","144",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"40","46","22","96",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"40","46","22","48",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button06",null,"40","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"435","46","22","300",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button08",null,"435","46","22","252",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"435","46","22","204",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button10",null,"435","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button11",null,"435","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button12",null,"435","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new Button("Button13",null,"435","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","509","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","557","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","605","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","653","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","701","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","749","40","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","stc_06:0","435","69","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","stc_07:10","435","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","edt_00:0","435","79","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("공통코드명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","stc_08:10","435","145","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1606,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
