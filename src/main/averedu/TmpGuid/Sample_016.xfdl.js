(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_016");
            this.set_titletext("보고서C-D 타입");
            if (Form == this.constructor)
            {
                this._setFormPosition(1606,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_03",null,"3","70","22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("파일저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("div_01","0","30",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,null,"55","22","10","9",null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button00","78","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalBtnM");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button02","102","10","30","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_text("0");
            obj.set_cssclass("btn_WF_CalBtnDay");
            this.div_01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","134","10","110","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_value("20181025");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_01.addChild(obj.name, obj);

            obj = new Button("Button01","246","10","22","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_CalBtnP");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_04","0","10","68","22",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("운항일자");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("stc_05","0","5","330","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("보고서");
            obj.set_cssclass("sta_WF_Title01");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","-272","74","100","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","109",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #c6c6c6");
            this.addChild(obj.name, obj);

            obj = new Button("Button13",null,"84","178","22","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("우선순위적용 시즌 SLOT생성");
            this.addChild(obj.name, obj);

            obj = new Static("stc_00","0","84","280","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("보고서 타이틀");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_fittocontents("width");
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
            this.stc_00.addEventHandler("onclick",this.stc_05_onclick,this);
        };
        this.loadIncludeScript("Sample_016.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
