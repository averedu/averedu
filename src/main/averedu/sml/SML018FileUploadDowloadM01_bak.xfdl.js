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
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_fileSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_download", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ORGFILENM\" type=\"string\" size=\"32\"/><Column id=\"FILENM\" type=\"string\" size=\"32\"/><Column id=\"FILESIZE\" type=\"string\" size=\"32\"/><Column id=\"FILETP\" type=\"string\" size=\"32\"/><Column id=\"FILEPATH\" type=\"string\" size=\"32\"/><Column id=\"FILEID\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"ORGFILENM\">a.jpg</Col><Col id=\"FILENM\">aaa.jpg</Col><Col id=\"FILESIZE\">1151</Col><Col id=\"FILETP\">txt</Col><Col id=\"FILEPATH\">event/sub</Col><Col id=\"FILEID\">20171214132822_76</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileSingle2", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SAVENM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NUM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","10","296","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","228","90","576","154",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_fileSingle");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"344\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CHK\"/><Cell col=\"1\" text=\"File Name\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSingleUpload","706","41","93","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","520","146","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("다운로드");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fup_single","0","0","100","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_itemcount("0");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","576","41","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","641","41","55","39",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","230","545","360","107",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_download");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"114\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"File Name\"/><Cell col=\"2\" text=\"Size\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ORGFILENM\"/><Cell col=\"2\" text=\"bind:FILESIZE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_down","686","545","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("download");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lageCdNm","102","277","468","26",null,null,null,null,null,"26",this);
            obj.set_taborder("9");
            obj.set_maxlength("50");
            obj.set_autoselect("true");
            obj.set_text("Edit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_fileSearch","574","277","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("파일찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend_1","671","277","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new FileUpload("FileUploadSingle","100","236","145","44",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend_0","674","313","93","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("upload");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","70","351","316","123",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_stretch("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend_00","423","357","97","103",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이미지 VIEW");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend_01","534","357","97","103",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("이미지 VIEW");
            this.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","900","192","134","80",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("FileDownload00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
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
        this.registerScript("SML018FileUploadDowloadM01_bak.xfdl", function() {
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
        this.fileUpload_onsuccess = function(obj,  e)
        {
         	alert("fileUpload_onsuccess >> " + e.datasets[0].saveXML());

            /**
        		e.datasets[0] 를 이용하여 서버에 업로드된 파일의 정보를 DB에 저장합니다.
        	*/
        }

        this.fileUpload_onerror = function(obj,  e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        }

         /************************************************************************************************
         * 업로드
         * 화면에 fileupload 컴포넌트를 사이즈 0 으로 생성합니다.
         ************************************************************************************************/

        //fup_single_onitemchanged 	파일 업로드 컴포넌트(싱글) - 선택된 파일 정보 데이터셋 반영
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	var sCompValue = this.fup_single.value;
        	var sNewvalue = e.newvalue;
        	var sOldValue = e.oldvalue;

        	trace("FileUpload00_onitemchanged=======>  sCompValue: " + sCompValue +  "/ sNewvalue: " + sNewvalue + "/  sOldValue: " + sOldValue );

        	var sFilePath = this.fup_single.value;
        	var dirExpt   = nexacro.toNumber(sFilePath.lastIndexOf("\\"))+1;

        	var sFileName = sFilePath.substr(dirExpt);
        	var nRow      = this.ds_fileSingle.addRow();

        	this.ds_fileSingle.setColumn(nRow, "FILE_PATH", sFilePath);
        	this.ds_fileSingle.setColumn(nRow, "FILE_NAME", sFileName);

        };

        //upload 파일추가
        this.Button01_onclick = function(obj,e)
        {
        	this.fup_single.appendItem();
        	this.fup_single.filefindbuttons[this.fup_single.itemcount-1].click();
        };

        //upload 파일삭제
        this.Button02_onclick = function(obj,e)
        {
        	for(var i=this.ds_fileSingle.rowcount-1; i>=0; i--){
        		var nChk = this.ds_fileSingle.getColumn(i,"CHK");
        		if(nChk == 1){
        			this.fup_single.deleteItem(i);
        			this.ds_fileSingle.deleteRow(i);
        		}
        	}
        };



        //Upload 실행
        this.btnSingleUpload_onclick = function(obj,e)
        {
        	var options = {type:"Event"};
        	this.gfn_fileUpload(this.fup_single,options);
        };

         /************************************************************************************************
         * 다운로드
         ************************************************************************************************/

        this.btn_down_onclick = function(obj,e)
        {
        	/**
        	 * 현재 Form 상의 FileDownload 컴포넌트를 이용하여 파일을 다운로드한다.
        	 * @param {Object} objFileDownload	파일다운로드 컴포넌트
        	 * @param {Object} sFilename		다운로드 할 실제파일명
        	 * @param {String} sSaveFileName	서버에 업로드될때 변경된 파일명
        	 * @param {String} sPath			파일업로드시킬 폴더 위치
        	 * @example this.gfn_fileDownload(objFileDownload, sFilename, sSaveFileName, sPath);
        	 */

        	//DB에 저장된 파일관련정보를 조회하여 아래정보를 기입합니다.

        	for(var i=0; i<this.ds_download.rowcount; i++){
        		if(this.ds_download.getColumn(i,"CHK") == 1){
        			var objFileDownload = obj;
        			var sFilename       = this.ds_download.getColumn(i,"ORGFILENM");
        			var sSaveFileName   = this.ds_download.getColumn(i,"FILENM");
        			var sPath           = this.ds_download.getColumn(i,"FILEPATH");
        			this.gfn_fileDownload(sFilename, sSaveFileName, sPath);
        		}
        	}
        };

        //전체선택
        this.Grid01_onheadclick = function(obj,e)
        {
        	if(e.col == 0){
        		this.gfn_checkAll(obj,e,true);
        	}
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

        this.FileUploadSingle_onsuccess = function(obj,e)
        {
        	alert("fileUpload_onsuccess >> " + e.datasets[0].saveXML());
        };

        this.FileUploadSingle_onerror = function(obj,e)
        {
        	alert("fileUpload_onerror >> " + e.errormsg);
        };


        this.btnSend_onclick = function(obj,e)
        {
        	//var options = {type:"Event", fileLimit:5, fileReName:"aaad.jpg", subPath:"sub" , height:"", width:"100"};
        	var options = {type:"Event", fileReName:"aaad.jpg", subPath:"sub" , subsubPath:"sub", height:"", width:"100"};
        	this.gfn_fileUpload(this.FileUploadSingle,options);
        };

        this.btnSend_0_onclick = function(obj,e)
        {
        	var options = {type:"Event", fileLimit:0, fileReName:"aaaaaa.jpg", subPath:"sub"};
        	this.gfn_fileUpload(this.FileUploadSingle,options);
        };

        this.btnSend_00_onclick = function(obj,e)
        {
        	var objEnv = nexacro.getEnvironment();

        	var httpUrl = objEnv.services["svc"].url + nexacro.getApplication().gv_imgRoot;
        	//this.ImageViewer00.set_image("http://localhost:8084/mast/bizfiles/1.jpg");

        	this.ImageViewer00.set_image("http://localhost:8084/mast/bizfiles/1.jpg" + "?a="+ Math.random() )


        };

        this.btnSend_01_onclick = function(obj,e)
        {
        	return;
        	var objEnv = nexacro.getEnvironment();
        	var httpUrl = objEnv.services["svc"].url + nexacro.getApplication().gv_imgRoot;
        	this.ImageViewer00.set_image("http://localhost:8084/mast/bizfiles/sub/1.jpg")
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
            this.btnSingleUpload.addEventHandler("onclick",this.btnSingleUpload_onclick,this);
            this.fup_single.addEventHandler("onerror",this.fileUpload_onerror,this);
            this.fup_single.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
            this.fup_single.addEventHandler("onsuccess",this.fileUpload_onsuccess,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Grid01.addEventHandler("onheadclick",this.Grid01_onheadclick,this);
            this.btn_down.addEventHandler("onclick",this.btn_down_onclick,this);
            this.edt_lageCdNm.addEventHandler("onkeyup",this.div_cond_edt_lageCdNm_onkeyup,this);
            this.btn_fileSearch.addEventHandler("onclick",this.btn_fileSearch_onclick,this);
            this.btnSend_1.addEventHandler("onclick",this.btnSend_onclick,this);
            this.FileUploadSingle.addEventHandler("onerror",this.FileUploadSingle_onerror,this);
            this.FileUploadSingle.addEventHandler("onitemchanged",this.FileUploadSingle_onitemchanged,this);
            this.FileUploadSingle.addEventHandler("onsuccess",this.FileUploadSingle_onsuccess,this);
            this.btnSend_0.addEventHandler("onclick",this.btnSend_0_onclick,this);
            this.btnSend_00.addEventHandler("onclick",this.btnSend_00_onclick,this);
            this.btnSend_01.addEventHandler("onclick",this.btnSend_01_onclick,this);
        };
        this.loadIncludeScript("SML018FileUploadDowloadM01_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
