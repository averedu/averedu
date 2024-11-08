(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fileUploadDownloadBase");
            this.set_titletext("File upload/Download sample");
            this.getSetter("classname").set("file_test");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"orgFileName\" type=\"STRING\" size=\"256\"/><Column id=\"newFileName\" type=\"STRING\" size=\"256\"/><Column id=\"uploadYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileDownList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"orgFileName\" type=\"STRING\" size=\"256\"/><Column id=\"newFileName\" type=\"STRING\" size=\"256\"/><Column id=\"uploadYn\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new FileUpload("fileUpload","208","31","533","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("retry").set("0");
            obj.set_itemcount("1");
            obj.set_multiselect("true");
            obj.set_buttonsize("70");
            obj.set_buttontext("Attach file");
            obj.set_border("1 solid #808080");
            obj.set_itemheight("20");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_fileList","9","61","732","123",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_fileList");
            obj.set_cellsizingtype("none");
            obj.set_cellsizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj.set_font("9pt Arial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"400\"/><Column size=\"277\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"1\" text=\"Source file name\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"2\" text=\"File name on server\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Upload Status\" font=\"9pt &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:orgFileName\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:newFileName\"/><Cell col=\"3\" text=\"bind:uploadYn\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_upload","9","30","151","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("upload");
            obj.set_background("url(\"theme://Images\\btn_WF_common_N.png\")");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload","82.91%","168",null,"40","3.03%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.getSetter("retry").set("0");
            obj.set_text("File download");
            obj.getSetter("onload").set("FileDownload00_onload");
            obj.set_visible("false");
            obj.set_font("9pt Arial");
            obj.set_color("#112e6f");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_fileDownList","1.18%","216","733","121",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_fileDownList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"400\"/><Column size=\"277\"/><Column size=\"132\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"1\" text=\"Source filename\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"2\" text=\"Filename on the server\" font=\"9pt &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Upload status\" font=\"9pt &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" style=\"align:left middle;\" text=\"bind:orgFileName\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:newFileName\"/><Cell col=\"3\" displaytype=\"button\" edittype=\"button\" text=\"Success\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","364","139","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Server file name");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ServerFileName","151","367","245","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("nexacro_info.txt");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_border("1 solid #808080");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","395","129","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Loal file name");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LocalFileName","151","398","245","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_value("abc.txt");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_border("1 solid #808080");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","400","366","152","54",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Download");
            obj.set_background("");
            obj.set_edge("url(\"theme://Images\\btn_WF_common_N.png\") 5px 5px");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","9","5","732","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("This is sample shows multiple file upload, these files are displayed on the below grid after upload");
            obj.set_cssclass("sta_WF_subtitP");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","192","337","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Uploaded files are displayed in the below Grid");
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
        this.registerScript("np_FileUploadDownloadDisplay.xfdl", function() {

        this.comp_onitemchanged = function(obj,  e)
        {
            var sFileName;
        	var sFilePath;
        	this.ds_fileList.clearData();

        	if(obj.multiselect)
            {
        	    var sFullData = e.newvalue;
        		var aFilePath = sFullData.split(",");
        	}

        	for(var i=0; i<aFilePath.length; i++)
        	{
        		sFilePath = aFilePath[i];
        		var dirExpt = sFilePath.lastIndexOf("\\")+1;
        		sFileName = sFilePath.substr(dirExpt);

        		var iAddRow = this.ds_fileList.addRow();

        		this.ds_fileList.setColumn(iAddRow, "orgFileName", sFileName);

        	}
        };

        this.comp_onerror = function(obj,  e)
        {
        	this.setWaitCursor(false);
        };

        this.sSaveFile = "";
        this.comp_onsuccess = function(obj,  e)
        {
        	if( e.errorcode == 200 ) //upload completed
        	{
        		//var sSaveFile = e.errormsg;
        		this.sSaveFile = e.errormsg;
        		if (!this.gfn_isNull(this.sSaveFile)) {
        		trace("sSaveFile :: " + this.sSaveFile);
        			var aFileName = this.sSaveFile.split(";;");
        			var aOrgFileName = aFileName[0].split("||");
        			var aNewFileName = aFileName[1].split("||");
        			var iTotLength = aOrgFileName.length;
        			var iFindRow = 0;

        			for (var iLoop=0; iLoop < iTotLength; iLoop++) {
        				iFindRow = this.ds_fileList.findRow("orgFileName", aOrgFileName[iLoop]);

        				if (iFindRow > -1) {
        					this.ds_fileList.setColumn(iFindRow, "newFileName", aNewFileName[iLoop]);//Saved file name
        					this.ds_fileList.setColumn(iFindRow, "uploadYn", "Y");//Upload status
        				}
        			}
        			this.setWaitCursor(false);

        			this.fn_uploadAfter();

        		}
        	}else {
        		this.setWaitCursor(false);
        		this.alert("Upload error : "+ e.errorcode + "/"+ e.errormsg);
        	}
        };

        this.btn_upload_onclick = function(obj,  e)
        {
        	if (this.ds_fileList.getRowCount() > 0) {
        		this.setWaitCursor(true);
        		var sFileUrl = "Svc::fileUploadMulti.jsp?PATH=file" ;
        		//var sFileUrl = "Svc_org::fileUploadMulti.jsp?PATH=file" ;
        		this.fileUpload.upload(sFileUrl);

        	} else {
        		this.alert("Uplaod destination is not selected.");
        	}
        };


        this.fn_uploadAfter = function()
        {
        	this.alert("Upload completed!!!");
        	this.fileUpload.deleteItem(0);
        	this.fileUpload.appendItem();
        	this.ds_fileDownList.clearData();
        	this.ds_fileDownList.copyData(this.ds_fileList);
        	this.ds_fileList.clearData();
        };

        this.grd_fileDownList_oncellclick = function(obj, e)
        {
        	if (e.col == 3) {
        		var strFileName = this.ds_fileDownList.getColumn(e.row, "newFileName");
        		var strSaveFileName = this.ds_fileDownList.getColumn(e.row, "orgFileName");
        		var sFileUrl = "Svc::fileDownload.jsp?PATH=file&file=" ;
        		//var sFileUrl = "Svc_org::fileDownload.jsp?PATH=file&file=" ;
        		this.fileDownload.set_downloadurl(sFileUrl+strFileName);
        		this.fileDownload.set_downloadfilename(strSaveFileName);
        		var bSucc = this.fileDownload.download();
        	}
        };

        this.fileDownload_onerror = function(obj,  e)
        {
        	this.alert("================Error has occurred during file download================");
        };

        this.fileDownload_onsuccess = function(obj,  e)
        {
        	this.alert("Download compoeted");
        };

        /*****************************************************************************************
         * Function name	: 	btn_down_onclick
         * Input parameter	:
         * Input parameter	:
         * Funtionality	:
         *****************************************************************************************/
        this.btn_down_onclick = function(obj,  e)
        {
        		var strFileName = this.edt_ServerFileName.value;
        		var strSaveFileName = this.edt_LocalFileName.value;
        		var sFileUrl = "Svc::fileDownload.jsp?PATH=file&file=" ;  // file is the name of the folder on the server, at the path spcefified on Svc
        		//var sFileUrl = "Svc_org::fileDownload.jsp?PATH=file&file=" ;  // file is the name of the folder on the server, at the path spcefified on Svc
        		this.fileDownload.set_downloadurl(sFileUrl+strFileName);
        		this.fileDownload.set_downloadfilename(strSaveFileName);
        		var bSucc = this.fileDownload.download();
        };

        /*****************************************************************************************
         * Function name	: 	this.gfn_isNull(sValue)
         * Input parameter	: 	1. sValue - String
         * Input parameter	: 	Boolean
         * Funtionality	: 	Checking Null status.
         *****************************************************************************************/
        this.gfn_isNull = function(sValue)
        {
            var v_ChkStr = new String(sValue);

            if (new String(sValue).valueOf() == "undefined" || new String(sValue).valueOf() == "[Undefined]") return true;
            if (sValue == null) return true;
           	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) ) return true;
            if (v_ChkStr == null) return true;
            if (v_ChkStr.toString().length == 0 ) return true;
            return false;
        };

        this.fileDownload_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.fileUpload.addEventHandler("onitemchanged",this.comp_onitemchanged,this);
            this.fileUpload.addEventHandler("onerror",this.comp_onerror,this);
            this.fileUpload.addEventHandler("onsuccess",this.comp_onsuccess,this);
            this.grd_fileList.addEventHandler("oncellclick",this.grd_fileList_oncellclick,this);
            this.btn_upload.addEventHandler("onclick",this.btn_upload_onclick,this);
            this.fileDownload.addEventHandler("onerror",this.fileDownload_onerror,this);
            this.fileDownload.addEventHandler("onsuccess",this.fileDownload_onsuccess,this);
            this.fileDownload.addEventHandler("onclick",this.fileDownload_onclick,this);
            this.grd_fileDownList.addEventHandler("oncellclick",this.grd_fileDownList_oncellclick,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
        };
        this.loadIncludeScript("np_FileUploadDownloadDisplay.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
