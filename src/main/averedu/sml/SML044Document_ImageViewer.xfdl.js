(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comp_Grid_Row_ScriptColumn1");
            this.set_titletext("문서이미지뷰어");
            this.getSetter("classname").set("Script_String_Quote");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            if (Form == this.constructor)
            {
                this._setFormPosition(1600,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_doclist", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DOC_FILE_PATH\">images/egovframework/example/</Col><Col id=\"DOC_NAME\">문서1.jpg</Col></Row><Row><Col id=\"DOC_FILE_PATH\">images/egovframework/example/</Col><Col id=\"DOC_NAME\">메뉴얼.pdf</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","15","10","242","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문서 이미지 및 PDF뷰어");
            obj.set_cssclass("_SS_Emphasis");
            obj.set_font("12px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","820","500",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_doclist");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("none");
            obj.set_autosizebandtype("body");
            obj.getSetter("text").set("");
            obj.set_autoenter("none");
            obj.set_fillareatype("none");
            obj.set_selecttype("row");
            obj.set_cellsizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"195\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"23\"/></Rows><Band id=\"head\"><Cell text=\"문서명\"/><Cell col=\"1\" text=\"문서경로\" font=\"9pt Arial\"/></Band><Band id=\"body\"><Cell text=\"bind:DOC_NAME\"/><Cell col=\"1\" text=\"bind:DOC_FILE_PATH\" displaytype=\"normal\" edittype=\"none\" font=\"8pt Arial\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","36","807",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","25","27","765","527",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","823","63","767","377",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","953","456","123","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","823","455","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파일 다운로드");
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
        this.registerScript("SML044Document_ImageViewer.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	//폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
        };


        this.ds_doclist_onrowposchanged = function(obj,e)
        {
        	var objEnv 	= nexacro.getEnvironment();
        	var strUrl  = objEnv.services["svcurl"].url;

        	strUrl += this.ds_doclist.getColumn(e.newrow,"DOC_FILE_PATH");
        	var strFileName = this.ds_doclist.getColumn(e.newrow,"DOC_NAME");
        	var strUrl1 = strUrl + "" + strFileName;

        	this.Div00.form.ImageViewer00.set_image(strUrl1);
        	this.WebBrowser00.set_url(strUrl1);
        };

        this.ImageViewer00_onload = function(obj,e)
        {
        	var nHeight = obj.imageheight;
            var nWidth = obj.imagewidth;

            obj.set_height(nHeight);
            obj.set_width(nWidth);

        	this.Div00.form.resetScroll();

        };

        this.FileDownload00_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        this.FileDownload00_onsuccess = function(obj,e)
        {
        	alert("파일이 다운로드되었습니다.");
        };

        this.btn_down_onclick = function(obj,e)
        {
        	var objEnv 	= nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcurl"].url;
        	var strUrl  = svcUrl + "DownloadServlet.do?";

        	var cRow = this.ds_doclist.rowposition;

        	strUrl += "file_path=" + "/" + this.ds_doclist.getColumn(cRow,"DOC_FILE_PATH");
        	var sNavigatorNm =  system.navigatorname;
        	if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE")
        	{
        		var cRow = this.ds_doclist.rowposition;
        		var strFileName = this.ds_doclist.getColumn(cRow,"DOC_NAME");

        		this.FileDownload00.downloadurl = strUrl + "" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileName);
        		this.FileDownload00.set_downloadfilename(strFileName);
        		this.FileDownload00.show();
        		var bSucc = this.FileDownload00.download();
        		trace("bSucc >> "+bSucc);

        	} else {

        		var cRow = this.ds_doclist.rowposition;
        		var strFileName = this.ds_doclist.getColumn(cRow,"DOC_NAME");

        		var strUrl1 = strUrl + "" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileName);

        		var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
        		// Create Object
        		var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
        		this.addChild(sDownID, objWebBrowser);
        		objWebBrowser.show();

        		objWebBrowser.set_url(strUrl1);

        	}
        	//http://30.111.100.102:8080/images/egovframework/example/%EB%AC%B8%EC%84%9C1.jpg
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.ImageViewer00.addEventHandler("onload",this.ImageViewer00_onload,this);
            this.FileDownload00.addEventHandler("onerror",this.FileDownload00_onerror,this);
            this.FileDownload00.addEventHandler("onsuccess",this.FileDownload00_onsuccess,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.ds_doclist.addEventHandler("onrowposchanged",this.ds_doclist_onrowposchanged,this);
        };
        this.loadIncludeScript("SML044Document_ImageViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
