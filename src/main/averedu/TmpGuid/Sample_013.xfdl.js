(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_013");
            this.set_titletext("계류장관제일반모드");
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

            obj = new Div("div_01","0","30",null,"71","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","578","10","78","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("시간범위");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","90","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("GMP");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button00","656","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button02","680","37","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","712","37","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button01","824","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","578","37","78","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_text("운항일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","1162","10","120","20",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("새로고침");
            obj.set_tooltiptype("hover");
            obj.set_value("true");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_02","0","37","90","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_text("감독관제사");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo01","90","37","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_text("GMP");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button03","187","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_03","208","37","66","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("13");
            obj.set_text("활주로");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button04","371","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_06","208","10","66","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("15");
            obj.set_text("관제사");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo05","274","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button05","371","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit00","274","37","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("18");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","393","37","66","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("19");
            obj.set_text("제빙");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button06","556","37","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_07","393","10","66","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("21");
            obj.set_text("관제석");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo03","459","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("22");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button07","556","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_PopSrch");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit01","459","37","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("24");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo04","925","10","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("25");
            obj.set_text("30초");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_08","847","10","78","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("26");
            obj.set_text("시간범위");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo06","925","37","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("27");
            obj.set_text("처리중");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_09","847","37","78","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("28");
            obj.set_text("처리완료");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit02","656","10","190","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("29");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_10","1010","10","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("30");
            obj.set_text("도착편");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_11","1010","37","65","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("31");
            obj.set_text("출발편");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit03","1075","10","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("32");
            this.div_01.addChild(obj.name, obj);

            obj = new Edit("Edit04","1075","37","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("33");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo02","1162","37","85","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("34");
            obj.set_text("1분");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계류장관제일반모드");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","111","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("도착편");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","-272","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","-272","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","136",null,"210","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_02","stc_00:10","111","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("Button13",null,"111","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"111","46","22","48",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","0","371","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출발편");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","-272","482","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","-272","454","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","396",null,null,"0","233",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","stc_01:10","371","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"371","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("반영");
            this.addChild(obj.name, obj);

            obj = new Button("Button02",null,"371","46","22","48",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("무시");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","346",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Hspltt");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","415","101","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_04","0","665","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("토잉");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","0","690",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","stc_04:10","665","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("Button03",null,"665","46","22","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("Button04",null,"665","46","22","48",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","597",null,"15","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Hspltt");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("stc_24","0","627",null,"28","0",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_25","0","627","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("처리여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","152","630","180","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"665","46","22","96",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Static("stc_07","807","627","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("시간범위");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","959","630","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("60");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","1041","630","46","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("조회");
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
            this.div_01.form.cal_00.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_013.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
