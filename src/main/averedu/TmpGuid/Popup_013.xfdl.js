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
            this.set_titletext("연동MQ모니터링");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","20","25","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("연동 MQ모니터링");
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

            obj = new Static("Static07","20","95","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_15","20","105","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("서버정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","20","123","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","20","50",null,"44","20",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("로그 새로고침");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","stc_00:10","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("20초");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","Combo00:0","10","80","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("TAILBYTES");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_fittocontents("width");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit02","stc_01:10","10","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_value("2000");
            obj.set_text("2000");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_24","20","130",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","20","130","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_05","142","133","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","260","130","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("서비스종류");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_00","382","133","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","720","130","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_01","822","133","35","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_02","602","133","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","500","130","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("보기순서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","20","157",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","20","157","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","142","160","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","260","157","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("IP");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_04","382","160","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","720","157","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("서비스상태");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_06","822","160","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_07","602","160","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_08","500","157","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("PORT");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_08","859","133","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_09","919","133","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","20","184",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_10","20","184","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("장애설정건수");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_10","142","187","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_11","260","184","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("장애설정시간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_11","382","187","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("공지사항 테스트");
            this.addChild(obj.name, obj);

            obj = new Static("stc_14","20","211",null,"28","20",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_16","20","211","120",null,null,"361",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("로그위치");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_14","142","214","835","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_value("/data");
            obj.set_text("/data");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","239","617",null,null,"20",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","10","130","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("메세지로그 확인");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static10","0","28","100","7",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","100","17",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","35",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_15","stc_09:0","10","80","22",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>30</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div01.addChild(obj.name, obj);

            obj = new Div("Div00","637","241","15",null,null,"20",null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div02","652","239",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","0","10","120","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("에러로그 확인");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static10","0","28","100","7",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static07","0","0","100","17",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.Div02.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","35",null,null,"0","0",null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("stc_15","stc_09:0","10","80","22",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>30</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,600,this,function(p){});
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
        this.loadIncludeScript("Popup_013.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
