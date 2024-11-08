(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WebEditorTest");
            this.set_titletext("File Upload");
            this.getSetter("classname").set("WebEditorTest");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_File", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileUpload("FileUpload01","15","45","641","20",null,null,null,null,null,null,this);
            obj.getSetter("innerdataset").set("@Dataset00");
            obj.set_taborder("10");
            obj.getSetter("retry").set("0");
            obj.set_multiselect("true");
            obj.set_itemcount("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","101","276","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Add Item");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","672","116","77","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("upload");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","80","643","153",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" disptype=\"normal\" text=\"FILE_PATH\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"1\" disptype=\"normal\" text=\"FILE_NAME\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"2\" disptype=\"normal\" text=\"FILE_SIZE\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"3\" disptype=\"normal\" text=\"FILE_SAVENM\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"4\" disptype=\"normal\" text=\"FILE_TYPE\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"5\" disptype=\"normal\" text=\"NUM\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"6\" disptype=\"normal\" text=\"CHK\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/></Band><Band id=\"body\"><Cell col=\"0\" disptype=\"normal\" text=\"bind:FILE_PATH\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"1\" disptype=\"normal\" text=\"bind:FILE_NAME\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"2\" disptype=\"normal\" text=\"bind:FILE_SIZE\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"3\" disptype=\"normal\" text=\"bind:FILE_SAVENM\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"4\" disptype=\"normal\" text=\"bind:FILE_TYPE\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"5\" disptype=\"normal\" text=\"bind:NUM\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"6\" disptype=\"normal\" text=\"bind:CHK\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","237","735","2",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload02","15","319","446","105",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_multiselect("false");
            obj.getSetter("retry").set("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","186","276","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Delete item");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","489","316","260","105",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_File00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"FILE_PATH\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"1\" text=\"FILE_NAME\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_PATH\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" color=\"#315271\" font=\"8pt &quot;돋움&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","16","276","75","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("upload");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","15","343","18",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Upload files by selecting mutiple files together");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","247","416","19",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Upload files by selecting single file at a time");
            obj.set_cssclass("sta_WF_subtitP");
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
        this.registerScript("np_FileUploadMulti.xfdl", function() {

        this.FileUpload00_onitemchanged = function(obj,  e)
        {
            var sFileName;
        	var sFilePath;

        	if(e.newvalue != null)   // if File Dialog is opened and closed without selecting any file. Then there is exception from split method and length,
        	{
        		if(obj.multiselect)
        		{
        			var sFullData = e.newvalue;
        			var aFilePath = sFullData.split(",");
        			this.ds_File.clearData();
        		}

        		for(var i=0; i<aFilePath.length; i++)
        		{
        			sFilePath = aFilePath[i];
        			var dirExpt = sFilePath.lastIndexOf("\\")+1;
        			sFileName = sFilePath.substr(dirExpt);

        			this.ds_File.addRow();

        			this.ds_File.setColumn(i, "FILE_PATH", sFilePath);
        			this.ds_File.setColumn(i, "FILE_NAME", sFileName);
        			this.ds_File.setColumn(i, "NUM", i+1);
        			this.ds_File.setColumn(i, "CHK",1);
        		}
        	}
        };

        //Multiple file upload
        this.Button00_onclick = function(obj,  e)
        {
            var sFileUrl  = "Svc::fileUpload.jsp";
            this.FileUpload01.upload(sFileUrl + "?PATH=file");
        };

        this.FileUpload01_onitemchanged = function(obj,  e)
        {
        	var sFilePath = e.newvalue;
        	if(sFilePath != null)
        	{
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		var sFileName = sFilePath.substr(dirExpt);
        		var nRow = this.ds_File00.addRow();

        		this.ds_File00.setColumn(nRow, "FILE_PATH", sFilePath);
        		this.ds_File00.setColumn(nRow, "FILE_NAME", sFileName);
        	}
        };

        //Add
        this.Button04_onclick = function(obj,  e)
        {
        	this.FileUpload02.appendItem();
        };

        //Delete
        this.Button01_onclick = function(obj,  e)
        {
        	var nRow = this.ds_File00.rowposition;
        	var rowCnt = this.FileUpload02.itemcount;

        	//return;
        	if(nRow == -1 && rowCnt == 0)
        	{
        		// If there is no file selector is exists on the screen.
        		this.alert("No file selector to delete.");
        	}else
        	{
        		this.FileUpload02.deleteItem(rowCnt - 1);
        		this.ds_File00.deleteRow(nRow);
        	}
        };

        //Single upload
        this.Button02_onclick = function(obj,  e)
        {
        	var sFileUrl  = "Svc::fileUpload.jsp";
            this.FileUpload02.upload(sFileUrl + "?PATH=file");
        };

        this.FileUpload01_onsuccess = function(obj,  e)
        {
        	if( e.errorcode == 200 ) //upload completed
        	{
        		alert("SUCC");
        	}
        };

        this.FileUpload02_onsuccess = function(obj,  e)
        {
        	if( e.errorcode == 200 ) //upload completed
        	{
        		alert("SUCC");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebEditorTest_onload,this);
            this.FileUpload01.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.FileUpload01.addEventHandler("onerror",this.FileUpload01_onerror,this);
            this.FileUpload01.addEventHandler("onsuccess",this.FileUpload01_onsuccess,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.FileUpload02.addEventHandler("onitemchanged",this.FileUpload01_onitemchanged,this);
            this.FileUpload02.addEventHandler("onsuccess",this.FileUpload02_onsuccess,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("np_FileUploadMulti.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
