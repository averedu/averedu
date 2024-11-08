(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_021");
            this.set_titletext("시즌주기장자동배정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","46","22","60",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","55","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","55","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("GMP");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","150","10","55","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("시즌");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo01","205","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("시즌주기장자동배정관리");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","-272","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","-272","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-272","492","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-272","464","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","810","89",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("기본정보");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stc_04","0","143",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_24","0","35",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","190","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_25","0","35","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("룰셋ID");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_02","0","62",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_03","0","62","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("버전");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static13","255","0","100","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_12","0","89",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_13","0","89","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("룰셋명칭");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit04","152","92","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_15","0","116",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo03","152","38","125","23",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit01","152","65","46","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_01","0","143","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("To Date");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_05","0","170",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_06","0","170","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("시뮬레이션 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_07","0","197",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_08","0","197","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("시뮬레이션 일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_09","0","224",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_10","0","224","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("적용 여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_11","0","278",null,"188","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_14","0","278","150","188",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_17","0","251",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_18","0","251","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("적용 일시");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit00","152","200","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_16","0","116","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("From Date");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("Edit02","152","254","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","152","173","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","152","227","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","152","119","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_value("20181107");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","152","146","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_tooltiptext("20181107");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","152","281","641","182",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("31");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("배정시간");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab00);
            obj.set_text("분담율");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab00);
            obj.set_text("배정선호규칙");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.Tab00);
            obj.set_text("선호주기장 우선순위");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stc_00","0","84","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("활주로 운영 설정");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","109","795",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹코드\" cssclass=\"point\"/><Cell col=\"1\" text=\"분류코드\" cssclass=\"point\"/><Cell col=\"2\" text=\"분류타입\"/><Cell col=\"3\" text=\"코드길이\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","130","84","50","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","659","84","136","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("자동배정 시뮬레이션");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","795","75","15",null,null,"0",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","46","22","108",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","46","22","156",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
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
        this.registerScript("Sample_021.xfdl", function() {

        this.Tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
        };
        this.loadIncludeScript("Sample_021.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
