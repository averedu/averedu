(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_018");
            this.set_titletext("T타입_근무시간관리");
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
            obj.set_text("필터");
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

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("근무시간관리");
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

            obj = new Tab("Tab00","0","89",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("근무자 변경");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("stc_24","515","15",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_00","515","53","130","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("근무이력");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid01","515","78",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_02","stc_00:10","53","80","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button13",null,"53","46","22","0",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00",null,"18","46","22","216",null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","500",null,null,"0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_24","0","35",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","190","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("관제 근무 현황");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_25","0","35","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("현 근무자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","152","38","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_02","0","62",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_03","0","62","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_text("현 근무시작시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_05","0","179",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_06","0","154","190","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_text("관제 근무 변경");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_07","0","179","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_text("다음 근무자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_09","0","206",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_10","0","206","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("10");
            obj.set_text("근무시작시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","279","209","66","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("11");
            obj.set_value("15:23");
            obj.set_text("15:23");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static13","255","0","100","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("12");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","255","144","100","35",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("13");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_12","0","89",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_13","0","89","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("15");
            obj.set_text("현 감독자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","152","92","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_15","0","116",null,"28","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("stc_16","0","116","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("18");
            obj.set_text("현 근무석");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo03","152","119","125","23",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("19");
            obj.set_text("선택");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","152","182","125","23",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("20");
            obj.set_text("관제사1(jg)");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","152","65","126","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","152","209","125","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_value("20181105");
            obj.set_readonly("true");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","46","22","0",null,null,null,null,null,this.Tab00.Tabpage1.form.Div00.form);
            obj.set_taborder("23");
            obj.set_text("저장");
            this.Tab00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div03","500","0","15",null,null,"0",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_AreaBox");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Tab00.Tabpage1.form.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Tab00.Tabpage1.form.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","515","0","100","15",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_25","515","15","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("관제석");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_01","774","15","150","28",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo04","667","18","95","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("-1");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button03","926","18","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button04","950","18","30","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_13","982","18","110","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button05","1094","18","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button06","1144","18","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button07","1168","18","30","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_15","1200","18","110","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("Button08","1312","18","22","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_57","1126","18","18","22",null,null,null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("근무자 일괄등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static02","1016","162","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj = new Layout("default","",1606,830,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_018.xfdl", function() {

        this.Tab00_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.Tabpage1.form.cal_13.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.Tab00.Tabpage1.form.cal_15.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
        };
        this.loadIncludeScript("Sample_018.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
