(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_011");
            this.set_titletext("저시정운항관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","10","53","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("공항");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Combo("Combo00","53","10","95","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("GMP");
            obj.set_value("");
            obj.set_index("-1");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button00","228","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button02","252","10","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","284","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button01","396","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","148","10","79","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("운항기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button03","446","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button04","470","10","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("9");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_01","502","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("10");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button05","614","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_01","428","10","18","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("12");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_SearchLbl_L");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저시정운항관리");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","0","84","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저시정 정보");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","109","510",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/><Cell col=\"4\" text=\"Column4\"/><Cell col=\"5\" text=\"Column5\"/><Cell col=\"6\" text=\"Column6\"/><Cell col=\"7\" text=\"Column7\"/><Cell col=\"8\" text=\"Column8\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_06","stc_01:0","84","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","510","75","15",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_AreaBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0",null,null,"0","0",null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Vspltt");
            obj.set_text("");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("stc_02","525","84","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("내역");
            obj.set_cssclass("sta_WF_Title03");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","525","102","100","7",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("7");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","525","74","100","17",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("17");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","525","109",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Column0\"/><Cell col=\"1\" rowspan=\"2\" text=\"Column1\"/><Cell col=\"2\" colspan=\"2\" text=\"Column2\"/><Cell col=\"4\" colspan=\"3\" text=\"Column3\"/><Cell col=\"7\" colspan=\"3\" text=\"Column4\"/><Cell col=\"10\" colspan=\"3\" text=\"Column5\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/><Cell row=\"1\" col=\"4\"/><Cell row=\"1\" col=\"5\"/><Cell row=\"1\" col=\"6\"/><Cell row=\"1\" col=\"7\"/><Cell row=\"1\" col=\"8\"/><Cell row=\"1\" col=\"9\"/><Cell row=\"1\" col=\"10\"/><Cell row=\"1\" col=\"11\"/><Cell row=\"1\" col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/><Cell col=\"6\" text=\"bind:Column6\"/><Cell col=\"7\" text=\"bind:Column7\"/><Cell col=\"8\" text=\"bind:Column8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_03","stc_02:0","84","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("<b v=\'true\'><fc v=\'#ff3300\'>0</fc></b> 건");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_WF_TotalSta");
            this.addChild(obj.name, obj);

            obj = new Button("btn_03",null,"3","58","22","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("도움말");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"3","45","22","60",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"3","45","22","107",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"3","45","22","154",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_134",null,"3","45","22","201",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btn_132",null,"3","45","22","248",null,null,null,null,null,this);
            obj.set_taborder("18");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_01.form.cal_00.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.div_01.form.cal_01.addEventHandler("onchanged",this.div_01_cal_00_onchanged,this);
            this.stc_05.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_011.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
