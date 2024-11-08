(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileupload_click");
            this.set_titletext("Opening file upload dialog on another component\'s click event");
            this.getSetter("classname").set("fileupload_click");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","17","288","263","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Invisible button");
            obj.set_visible("false");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","17","168","263","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Call invisible onclick");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","463","50","242","46",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("retry").set("0");
            obj.set_visible("true");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","17","45","263","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Call file upload");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","17","13","408","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("This is sample shows combo for selecting multiple values");
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_font("");
            obj.getSetter("wordwrap").set("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","138","529","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("When click this button, it calls the visible false button\'s onclick specified function. ");
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_font("");
            obj.getSetter("wordwrap").set("english");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","17","261","487","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Below is invisible button, file upload dialoag is opened on click on this butotn .");
            obj.getSetter("wordwrap").set("english");
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_font("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","464","28","240","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("File upload dialog");
            obj.getSetter("wordwrap").set("english");
            obj.set_cssclass("sta_WF_subtitP");
            obj.set_font("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("np_OpeningFileUploadDialogOnButtonClick.xfdl", function() {

        this.Button00_onclick = function(obj,  e)
        {
        	alert("Called invisible button on click!");
        	this.fn_open_file_dialog();
        };

        this.Button01_onclick = function(obj,  e)
        {
        	this.Button00.click();
        };

        this.Button02_onclick = function(obj,  e)
        {
        	this.fn_open_file_dialog();
        };

        this.fn_open_file_dialog = function()
        {
        	var findButtons = this.FileUpload00.filefindbuttons;
        	var id = findButtons.get_id(0);
        	var item = findButtons.get_item(id);

        	//Clicking find file button
        	item.click();
        };


        this.Form_onload = function(obj,e)
        {
        	var arr = this.FileUpload00._items;
        	for(a in arr){
        		trace(a + " :: " + arr[a]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("np_OpeningFileUploadDialogOnButtonClick.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
