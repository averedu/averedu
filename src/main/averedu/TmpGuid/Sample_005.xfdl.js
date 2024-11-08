(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_005");
            this.set_titletext("공통코드등록관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("권한그룹ID");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_00","stc_00:10","10","145","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","245","10","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("권한그룹명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("edt_01","stc_01:10","10","145","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("그리드등록관리");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","84","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("그리드등록리스트");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","415","74","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","484","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("권한그룹매핑");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","0","502","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","474","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","46","22","204",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","46","22","252",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","109",null,"350","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"그룹명\" cssclass=\"point\"/><Cell col=\"2\" text=\"순서\" cssclass=\"point\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","509","795",null,null,"0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"분류코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"분류타입\"/><Cell col=\"3\" text=\"코드길이\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","stc_09:0","84","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","stc_00:0","484","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","459",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Hspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("stc_03","810","484","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("권한");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","810","502","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","810","474","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","810","509",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"분류코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"공통코드\" cssclass=\"point\"/><Cell col=\"2\" cssclass=\"point\" text=\"공통코드명\"/><Cell col=\"3\" cssclass=\"point\" text=\"순서\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","stc_03:0","484","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","795","475","15",null,null,"0",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("Button00",null,"484","46","22","300",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"484","46","22","252",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"484","46","22","204",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"484","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"484","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"484","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new Button("Button06",null,"484","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","449","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","497","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button09","545","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","593","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","641","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","689","484","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("필터");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","737","484","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("도움말");
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
        this.loadIncludeScript("Sample_005.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
