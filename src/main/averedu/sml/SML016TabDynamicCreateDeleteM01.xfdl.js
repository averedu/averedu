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
            this.set_titletext("TAB COMPONENT");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00",null,"54","95","35","116",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","14","93",null,null,"13","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_background("gainsboro");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabSub1",this.tabMain);
            obj.set_text("타이틀1");
            this.tabMain.addChild(obj.name, obj);

            obj = new Tabpage("tabSub2",this.tabMain);
            obj.set_text("타이틀2");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("Button01",null,"54","95","35","11",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","5","6",null,"44","5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("COMPONENTS TAB CREATE(텝생성/삭제) ");
            obj.set_textAlign("center");
            obj.set_background("#f80626");
            obj.set_color("#ffffff");
            obj.set_font("bold 18px/normal \"Gulim\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML016TabDynamicCreateDeleteM01.xfdl", function() {

        this.form_onload = function(obj,e)
        {

        };

        //tabpage 삽입
        this.Button00_onclick = function(obj,e)
        {
        	var nTcnt = nexacro.toNumber(this.tabMain.getTabpageCount()+1);
        	var nR    = this.tabMain.insertTabpage("tabSub" + nTcnt, -1, "","타이틀"+nTcnt); //Tabpage생성. 인자값은 도움말 참조(insertTabpage)
        	this.tabMain.tabpages["tabSub"+nTcnt].set_url("sml::SML017TabChildLinkD01.xfdl");	         //생성된 Tabpage에 화면url 연동
        };


        //tabpage 삭제
        this.Button01_onclick = function(obj,e)
        {
        	this.tabMain.removeTabpage(this.tabMain.tabindex); //tabpage 삭제. 삭제할 tabindex
        };


        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           // return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail1) || this.gfn_isUpdate(this.dsDetail2));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("SML016TabDynamicCreateDeleteM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
