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
            this.set_titletext("FILE(UPLOAD/DOWNLOAD)");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"UPLOAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFILENM\" type=\"string\" size=\"32\"/><Column id=\"FILENM\" type=\"string\" size=\"32\"/><Column id=\"FILESIZE\" type=\"string\" size=\"32\"/><Column id=\"FILETP\" type=\"string\" size=\"32\"/><Column id=\"FILEPATH\" type=\"string\" size=\"32\"/><Column id=\"FILEID\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"ORGFILENM\">SVN계정_신청서.xls</Col><Col id=\"FILENM\">aaa.jpg</Col><Col id=\"FILESIZE\">1151</Col><Col id=\"FILETP\">txt</Col><Col id=\"FILEPATH\">event/sub</Col><Col id=\"FILEID\">20171214132822_76</Col></Row><Row><Col id=\"FILENM\">aaa.jpg</Col><Col id=\"FILESIZE\">1151</Col><Col id=\"FILETP\">txt</Col><Col id=\"FILEPATH\">event/sub</Col><Col id=\"FILEID\">20171214132822_76</Col><Col id=\"ORGFILENM\">SVN계정_신청서.xls</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileSingle2", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUploadMFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDownloadMFiles", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsError", this);
            obj._setContents("<ColumnInfo><Column id=\"ErrCode\" type=\"STRING\" size=\"256\"/><Column id=\"ErrMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","78","196","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","68","90","403","154",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_fileSingle");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"280\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"File Name\"/><Cell col=\"2\" text=\"삭제\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"test\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileUpload","616","91","93","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","348","146","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fileUploadMult","68","5","403","70",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_itemcount("0");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddUpload","486","91","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelUpload","551","91","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","72","369","399","107",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDownloadMFiles");
            obj.set_autofittype("col");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"124\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"File Name\"/><Cell col=\"2\" text=\"Size\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:FILE_ORG_NAME\"/><Cell col=\"2\" text=\"bind:FILE_SIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","493","370","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("download");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lageCdNm","68","317","472","26",null,null,null,null,null,"26",this);
            obj.set_taborder("9");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileSearch","544","317","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend_1","640","317","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","70","276","470","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","627","369","123","29",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_lageCdNm","value","ds_fileSingle2","FILE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SML018FileUploadDowloadM01.xfdl", function() {

        this.init_file_path = "upload";
        this.lv_save_path   = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// 파일업로드 확장자 필터기능
        	// this.fileUploadMult.set_filefilter("*.txt||*.xls");
        	// this.FileUploadSingle.set_filefilter("*.txt||*.xls");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fileUploadMult_onsuccess = function(obj,e)
        {
        	/**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        	*/
        	// alert("fileUpload_onsuccess >> " + e.datasets[0].saveXML());

        	this.dsUploadMFiles.clear();
            this.dsUploadMFiles.copyData(e.datasets[0]);
        	this.dsDownloadMFiles.copyData(e.datasets[0]);
        	alert(this.dsUploadMFiles.saveXML());

        };

        this.fileUploadMult_onerror = function(obj,e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        };

        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	/**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        	*/
        	alert("fileUpload_onsuccess >> " + e.datasets[0].saveXML());
        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        };

         /************************************************************************************************
         * 업로드
         * 화면에 fileupload 컴포넌트를 사이즈 0 으로 생성합니다.
         ************************************************************************************************/

        //fileUploadMult_onitemchanged 	파일 업로드 컴포넌트(싱글) - 선택된 파일 정보 데이터셋 반영
        this.fileUploadMult_onitemchanged = function(obj,e)
        {
        	var sCompValue 	= this.fileUploadMult.value;
        	var sNewvalue 	= e.newvalue;
        	var sOldValue 	= e.oldvalue;
        	trace("fileUploadMult_onitemchanged=======>  sCompValue: " + sCompValue +  "/ sNewvalue: " + sNewvalue + "/  sOldValue: " + sOldValue );
        	if(!this.gfn_isNull(sCompValue))
        	{
        		var sFilePath = this.fileUploadMult.value;
        		var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;

        		var sFileName = sFilePath.substr(dirExpt);

        		var nRow      = this.ds_fileSingle.addRow();

        		this.ds_fileSingle.setColumn(nRow, "CHK", "0");
        		this.ds_fileSingle.setColumn(nRow, "FILE_PATH", sFilePath);
        		this.ds_fileSingle.setColumn(nRow, "FILE_NAME", sFileName);
        		this.ds_fileSingle.setColumn(nRow, "UPLOAD_YN", "N");

        	}else
        	{
        		this.fileUploadMult.deleteItem(e.index);
        	}
        };

        //upload 파일추가
        this.btnAddUpload_onclick = function(obj,e)
        {

        	this.fileUploadMult.appendItem();

        	this.fileUploadMult.filefindbuttons[this.fileUploadMult.itemcount-1].click();

        trace(this.gfn_isNull(this.fileUploadMult.value));
        	// 파일을 선택하지 않고 파일선택창을 닫았을경우 fileUploadMult 초기화
        	if(!this.gfn_isNull(this.fileUploadMult.value))
        	{
        		this.fileUploadMult.deleteItem(this.fileUploadMult.index);
        	}

        };

        //upload 파일삭제
        this.btnDelUpload_onclick = function(obj,e)
        {
        	if (this.ds_fileSingle.rowcount < 1) {
        		this.gfn_alert("삭제할 파일이 없습니다.!","삭제정보","","warning");
        		return false;
        	}

        	if (this.ds_fileSingle.findRow("CHK",1) == -1) {
        		this.gfn_alert("삭제할 파일을 선택해주세요.!","선택정보","","warning");
        		return false;
        	}

        	for(var i=this.ds_fileSingle.rowcount-1; i>=0; i--)
        	{
        		var nChk = this.ds_fileSingle.getColumn(i,"CHK");

        		if(nChk == "1")
        		{
        			this.fileUploadMult.deleteItem(i);
        			this.ds_fileSingle.deleteRow(i);
        		}
        	}
        };

        //Upload 실행


        this.btnFileUpload_onclick = function(obj,e)
        {
        	/*
        	var options = {type:"Event"};
        	this.gfn_fileUpload(this.fileUploadMult,options);
        	*/

        	if (this.ds_fileSingle.rowcount == 0) {
        		this.gfn_alert("업로드할 파일이 없습니다.!","업로드정보","","warning");
        		return false;
        	}

        	var bOK = nexacro.getApplication().confirm( "업로드하시겠습니까?" );
        	if(bOK)
        	{

        		var objEnv = nexacro.getEnvironment();
        		var svcUrl  = objEnv.services["svcurl"].url;
        		var strUrl  = svcUrl + "UploadServlet.do?";
        		// 서버 저장 경로
        		strUrl += "savePath=" + this.init_file_path;
        		if(!this.gfn_isNull(this.lv_save_path))
        		{
        			strUrl += this.lv_save_path;
        		}


        		//  http://kmtis.kyungmin.ac.kr:80/UploadServlet?savePath=file_data/haksa/HakSaeng_Card/&serverName=Penguins&ext=bmp
        		/*
        		var lv_save_name2 = "fileUpload_"+ this.gfn_getDate("milli");
        			strUrl += "&serverName=" + lv_save_name2;
        			//strUrl += "&ext="+lv_file_name.substr(lv_file_name.lastIndexOf("."));
        	   */
        	   trace(strUrl)
        	  	this.fileUploadMult.set_uploadurl(strUrl)
        		var bSucc = this.fileUploadMult.upload();




        	}

        };


        this.FileUploadSingle_onitemchanged = function(obj,e)
        {
            var sCompValue = this.FileUploadSingle.value;

        	var start = sCompValue.lastIndexOf(".");	// [object Grid]
        	if( start > -1) {
        		sCompValue = sCompValue.substr(start + 1, sCompValue.length);
        	}


        	//var sNewvalue = e.newvalue;
        	//var sOldValue = e.oldvalue;

        	//trace("FileUpload00_onitemchanged=======>  sCompValue: " + sCompValue +  "/ sNewvalue: " + sNewvalue + "/  sOldValue: " + sOldValue );

        	var sFilePath = this.FileUploadSingle.value;
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;

        	var sFileName = sFilePath.substr(dirExpt);

        	this.ds_fileSingle.clearData();

        	var nRow      = this.ds_fileSingle2.addRow();
        	this.ds_fileSingle2.setColumn(nRow, "FILE_PATH", sFilePath);
        	this.ds_fileSingle2.setColumn(nRow, "FILE_NAME", sFileName);
        };


        //파일찾기
        this.btn_fileSearch_onclick = function(obj,e)
        {
        	this.FileUploadSingle.deleteItem(0);
        	this.FileUploadSingle.appendItem();

        	//this.FileUploadSingle.appendItem();
        	//this.FileUploadSingle.filefindbuttons[this.FileUploadSingle.itemcount-1].click();

        	this.FileUploadSingle.filefindbuttons[0].click();
        };

        this.btnSend_onclick = function(obj,e)
        {
        	//var options = {type:"Event", fileLimit:5, fileReName:"aaad.jpg", subPath:"sub" , height:"", width:"100"};
        	//var options = {type:"Event", fileReName:"", subPath:"upload" , subsubPath:"", height:"", width:"100"};
        	//this.gfn_fileUpload(this.FileUploadSingle,options);

        	var fileName = this.edt_lageCdNm.text.trim();
        	if (fileName == "" || fileName.length == 0) {
        		this.gfn_alert("업로드할 파일을 선택해주세요.!","선택정보","","warning");
        		return false;
        	}

        	var objEnv = nexacro.getEnvironment();
        	var svcUrl = objEnv.services["svcurl"].url;

        	//파일업로드 서비스 호출 경로
        	var sFileUrl = svcUrl + "UploadServlet.do?savePath=upload"

        	trace(sFileUrl);
        	var bSucc = this.FileUploadSingle.upload(sFileUrl);
        };

        this.btnSend_0_onclick = function(obj,e)
        {
        	// var options = {type:"Event", fileLimit:0, fileReName:"", subPath:"upload"};
        	// this.gfn_fileUpload(this.FileUploadSingle,options);
        };

         /************************************************************************************************
         * 다운로드
         ************************************************************************************************/

        this.btn_down_onclick = function(obj,e)
        {
        	var objEnv 	= nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcurl"].url;
        	var strUrl  = svcUrl + "DownloadServlet.do?";

        	if (this.dsDownloadMFiles.findRow("CHK",1) == -1) {
        		this.gfn_alert("다운로드할 파일을 선택해주세요.!","선택정보","","warning");
        		return false;
        	}

        	// 서버 저장 경로
        	strUrl += "file_path=" + this.init_file_path;
        	if(!this.gfn_isNull(this.lv_save_path))
        	{
        		strUrl += this.lv_save_path;
        	}
        	var sNavigatorNm =  system.navigatorname;

        	if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE")
        	{
        		for(var i=0; i<this.dsDownloadMFiles.rowcount; i++)
        		{
        			if(this.dsDownloadMFiles.getColumn(i,"CHK") == 1)
        			{

        				var strFileOrgName = this.dsDownloadMFiles.getColumn(i,"FILE_ORG_NAME");
        				var strFileName = this.dsDownloadMFiles.getColumn(i,"FILE_NAME");
        				strUrl1 = strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);

        				trace(strUrl1);

        				this.FileDownload00.downloadurl = strUrl1;
        				this.FileDownload00.set_downloadfilename(strFileOrgName);
        				this.FileDownload00.show();
        				var bSucc = this.FileDownload00.download();
        				trace("bSucc >> "+bSucc);
        			}
        		}
        	}else
        	{
        		for(var i=0; i<this.dsDownloadMFiles.rowcount; i++)
        		{
        			if(this.dsDownloadMFiles.getColumn(i,"CHK") == 1)
        			{
        				var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);


        				// Create Object
        				var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
        				this.addChild(sDownID, objWebBrowser);
        				objWebBrowser.show();

        				var strFileOrgName = this.dsDownloadMFiles.getColumn(i,"FILE_ORG_NAME");
        				var strFileName = this.dsDownloadMFiles.getColumn(i,"FILE_NAME");
        				strUrl1 = strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);
        				objWebBrowser.set_url(strUrl1);
        			}
        		}
        	}
        	/**
        	 * 현재 Form 상의 FileDownload 컴포넌트를 이용하여 파일을 다운로드한다.
        	 * @param {Object} objFileDownload	파일다운로드 컴포넌트
        	 * @param {Object} sFilename		다운로드 할 실제파일명
        	 * @param {String} sSaveFileName	서버에 업로드될때 변경된 파일명
        	 * @param {String} sPath			파일업로드시킬 폴더 위치
        	 * @example this.gfn_fileDownload(objFileDownload, sFilename, sSaveFileName, sPath);
        	 */

        	//DB에 저장된 파일관련정보를 조회하여 아래정보를 기입합니다.
        	/*
        	for(var i=0; i<this.ds_download.rowcount; i++)
        	{
        		if(this.ds_download.getColumn(i,"CHK") == 1)
        		{
        			var objFileDownload = obj;
        			var sFilename       = this.ds_download.getColumn(i,"ORGFILENM");
        			var sSaveFileName   = this.ds_download.getColumn(i,"FILENM");
        			var sPath           = this.ds_download.getColumn(i,"FILEPATH");

        			//this.gfn_fileDownload(sFilename, sSaveFileName, sPath);
        		}

        	}
        	*/
        };


        //전체선택
        this.Grid01_onheadclick = function(obj,e)
        {
        	if(e.col == 0)
        	{
        		this.gfn_checkAll(obj, e);
        	}
        };

        this.Grid01_oncelldblclick = function(obj,e)
        {
        	var objEnv 	= nexacro.getEnvironment();
        	var svcUrl  = objEnv.services["svcurl"].url;
        	var strUrl  = svcUrl + "DownloadServlet.do?";

        	// 서버 저장 경로
        	strUrl += "file_path=" + this.init_file_path;
        	if(!this.gfn_isNull(this.lv_save_path))
        	{
        		strUrl += this.lv_save_path;
        	}
        	var sNavigatorNm =  system.navigatorname;

        	if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE")
        	{
        		var strFileOrgName = this.dsDownloadMFiles.getColumn(e.row,"FILE_ORG_NAME");
        		var strFileName = this.dsDownloadMFiles.getColumn(e.row,"FILE_NAME");
        		strUrl1 = strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);

        		trace(strUrl1);

        		this.FileDownload00.downloadurl = strUrl1;
        		this.FileDownload00.set_downloadfilename(strFileOrgName);
        		this.FileDownload00.show();
        		var bSucc = this.FileDownload00.download();
        		trace("bSucc >> "+bSucc);

        	} else {

        		var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
        		// Create Object
        		var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
        		this.addChild(sDownID, objWebBrowser);
        		objWebBrowser.show();

        		var strFileOrgName = this.dsDownloadMFiles.getColumn(e.row,"FILE_ORG_NAME");
        		var strFileName = this.dsDownloadMFiles.getColumn(e.row,"FILE_NAME");
        		strUrl1 = strUrl + "/" + encodeURIComponent(strFileName) + "&file_name=" + encodeURIComponent(strFileOrgName);
        		objWebBrowser.set_url(strUrl1);

        	}
        	/**
        	 * 현재 Form 상의 FileDownload 컴포넌트를 이용하여 파일을 다운로드한다.
        	 * @param {Object} objFileDownload	파일다운로드 컴포넌트
        	 * @param {Object} sFilename		다운로드 할 실제파일명
        	 * @param {String} sSaveFileName	서버에 업로드될때 변경된 파일명
        	 * @param {String} sPath			파일업로드시킬 폴더 위치
        	 * @example this.gfn_fileDownload(objFileDownload, sFilename, sSaveFileName, sPath);
        	 */

        	//DB에 저장된 파일관련정보를 조회하여 아래정보를 기입합니다.
        	/*
        	for(var i=0; i<this.ds_download.rowcount; i++)
        	{
        		if(this.ds_download.getColumn(i,"CHK") == 1)
        		{
        			var objFileDownload = obj;
        			var sFilename       = this.ds_download.getColumn(i,"ORGFILENM");
        			var sSaveFileName   = this.ds_download.getColumn(i,"FILENM");
        			var sPath           = this.ds_download.getColumn(i,"FILEPATH");

        			//this.gfn_fileDownload(sFilename, sSaveFileName, sPath);
        		}

        	}
        	*/
        };

        this.FileDownload00_onerror = function(obj,e)
        {
        	alert(e.errormsg);
        };

        this.FileDownload00_onsuccess = function(obj,e)
        {
        	alert("fileDownload_onsuccess >> " + e.url);
        };

        this.Grid00_onlbuttondown = function(obj,e)
        {
        	if (e.col == this.Grid00.getBindCellIndex("body", "test")) {
        		alert();
        	}
        };

        this.form_onclose = function(obj,e)
        {

        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.Grid00.addEventHandler("onlbuttondown",this.Grid00_onlbuttondown,this);
            this.btnFileUpload.addEventHandler("onclick",this.btnFileUpload_onclick,this);
            this.fileUploadMult.addEventHandler("onerror",this.fileUploadMult_onerror,this);
            this.fileUploadMult.addEventHandler("onitemchanged",this.fileUploadMult_onitemchanged,this);
            this.fileUploadMult.addEventHandler("onsuccess",this.fileUploadMult_onsuccess,this);
            this.btnAddUpload.addEventHandler("onclick",this.btnAddUpload_onclick,this);
            this.btnDelUpload.addEventHandler("onclick",this.btnDelUpload_onclick,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.edt_lageCdNm.addEventHandler("onchanged",this.edt_lageCdNm_onchanged,this);
            this.btn_fileSearch.addEventHandler("onclick",this.btn_fileSearch_onclick,this);
            this.btnSend_1.addEventHandler("onclick",this.btnSend_onclick,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.FileDownload00.addEventHandler("onerror",this.FileDownload00_onerror,this);
            this.FileDownload00.addEventHandler("onsuccess",this.FileDownload00_onsuccess,this);
        };
        this.loadIncludeScript("SML018FileUploadDowloadM01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
