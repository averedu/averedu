(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("동일교과목 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("TabPage1",this.Tab);
            obj.set_text("동일과목그룹관리");
            obj.set_url("UL02::UL02_2020202_T01.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("TabPage2",this.Tab);
            obj.set_text("동일과목매핑");
            obj.set_url("UL02::UL02_2020202_T02.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.Tab);
            obj.set_text("동일과목관리");
            obj.set_url("UL02::UL02_2020202_T03.xfdl");
            this.Tab.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.Tab);
            obj.set_text("동일과목처리이력");
            obj.set_url("UL02::UL02_2020202_T04.xfdl");
            this.Tab.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("동일교과목 관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item63","Tab","enable","dsBindableTab","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","UL02::UL02_2020202_T01.xfdl");
            this._addPreloadList("fdl","UL02::UL02_2020202_T02.xfdl");
            this._addPreloadList("fdl","UL02::UL02_2020202_T03.xfdl");
            this._addPreloadList("fdl","UL02::UL02_2020202_T04.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.Tab.addEventHandler("onchanged",this.Tab_onchanged,this);
        };
        this.loadIncludeScript("UL02_2020202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
