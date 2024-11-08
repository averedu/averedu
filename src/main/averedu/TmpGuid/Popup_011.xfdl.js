(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_002");
            this.set_titletext("접수작업확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","20","25","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("접수,작업확인");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","20","50","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","60","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("접수내용");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","78","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_24","20","85",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","20","85","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","172","88",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_value("김승용");
            obj.set_text("김승용");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","20","112",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","20","112","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("접수시각");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","172","115",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("15:24");
            obj.set_text("15:24");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","140","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","20","150","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("작업확인");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","20","168","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","175",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","175","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("확인자");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","172","178",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("김승용");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","20","202",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","20","202","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("접수시각");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","172","205",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("15:24");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","20","229",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","229","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","172","232",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("김승용");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","256",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","20","256","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("시행처");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","172","259",null,"22","23",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("15:24");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","20","284","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","294","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","312","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","319",null,"161","20",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","23","322","554","155",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","70","22","68",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("접수처리");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
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
        this.loadIncludeScript("Popup_011.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
