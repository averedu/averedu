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
            this.set_titletext("반려처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\"/></Row><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_05","20","25","220","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("반려처리");
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
            obj.set_text("반려사유");
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

            obj = new Static("stc_13","20","85",null,"295","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","23","88","554","289",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_value("반려사유를 간단하게 입력해주세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"23","46","22","68",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
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
        this.loadIncludeScript("Popup_012.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
