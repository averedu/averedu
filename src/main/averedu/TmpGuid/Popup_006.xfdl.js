(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_005");
            this.set_titletext("계류장관제근무자운영");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("DS_GridSample", this);
            obj._setContents("<ColumnInfo><Column id=\"Column25\" type=\"STRING\" size=\"256\"/><Column id=\"Column24\" type=\"STRING\" size=\"256\"/><Column id=\"Column23\" type=\"STRING\" size=\"256\"/><Column id=\"Column22\" type=\"STRING\" size=\"256\"/><Column id=\"Column21\" type=\"STRING\" size=\"256\"/><Column id=\"Column20\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"Column18\" type=\"STRING\" size=\"256\"/><Column id=\"Column17\" type=\"STRING\" size=\"256\"/><Column id=\"Column16\" type=\"STRING\" size=\"256\"/><Column id=\"Column15\" type=\"STRING\" size=\"256\"/><Column id=\"Column14\" type=\"STRING\" size=\"256\"/><Column id=\"Column13\" type=\"STRING\" size=\"256\"/><Column id=\"Column12\" type=\"STRING\" size=\"256\"/><Column id=\"Column11\" type=\"STRING\" size=\"256\"/><Column id=\"Column10\" type=\"STRING\" size=\"256\"/><Column id=\"Column9\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_11","290","85","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","20","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계류장관제근무자운영");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"23","46","22","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stc_41","20","112","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_40","20","85","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("현 근무자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_42","20","60","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("관제근무현황");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12","20","166","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13","20","139","121","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("현 근무시작시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"20","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","20","20",null,null,"0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","45",null,"5","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","140","112","130","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","143","115","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","140","166","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","140","139","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("현 근무석");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","140","85","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("현 감독자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","143","169","124","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","290","85","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("다음 근무자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","290","60","277","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("관제근무변경");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","290","139","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","290","112","290","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("근무시작시간");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_19","290","193","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_20","290","166","146","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("다음 감독자");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Static("stc_21","435","193","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_22","435","166","145","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("다음 근무석");
            obj.set_cssclass("sta_WF_DetailTi_C");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","438","88","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("관제사(jg)");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","23","115","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","23","169","115","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_00","293","142","143","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_value("20181012");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","438","142","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_value("15:40");
            obj.set_text("15:40");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","438","196","139","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("TP관제석");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","293","196","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("관제사1(jg)");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,300,this,function(p){});
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

        };
        this.loadIncludeScript("Popup_006.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
