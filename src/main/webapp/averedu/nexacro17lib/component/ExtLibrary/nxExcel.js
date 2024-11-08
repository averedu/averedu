var pForm = nexacro.Form.prototype;

/*
 ===============================================================================
  글로발 Excel에 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_excelExport			: 엑셀 출력 함수
 ● gfn_excelExportSheet	: 엑셀 시트 출력 함수
 ● gfn_exportOnsuccess		: 엑셀 출력 성공 시 사용 함수
 ● gfn_excelOnerror		: 엑셀 출력 실패 시 사용 함수
 ● gfn_excelImportAll		: 엑셀 입력 함수 (데이터 헤더 포함)
 ● gfn_excelImportNsheet	: sheet명 무시하고 첫번째 sheet 입력
 ● gfn_importAllOnsuccess	: 엑셀 입력 성공 시 사용 함수 (데이터 헤더 포함)
 ● gfn_excelImport			: 엑셀 입력 함수 (데이터 헤더 제외)
 ● gfn_importOnSuccess		: 엑셀 입력 성공 시 사용 함수 (데이터 헤더 제외)
 ● gfn_importAllOnerror	: 엑셀 입력 실패 시 사용 함수
 ● gfn_rand				: 랜덤값 리턴 함수
 */

/**********************************************************************************
 * Function Name: gfn_excelExport
 * Description  : 엑셀 출력 함수
 * Arguments    : objGrid 			-> Grid Object
				  sSheetName   		-> sheet name
				  sFileName   		-> file name
				  objCondition 		-> Grid Object
				  arrExceptcolums 	-> 제외할 컬럼
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_excelExport = function(objGrid,  sSheetName, sFileName, objCondition, arrExceptcolumns)
{
	this.setWaitCursor(true);
	var objGrid_excel;
		
	var regExp = /[?*:\/\[\]]/g;  				            //(엑셀에서 지원하지않는 모든 문자)
	if(!this.gfn_isNull(sFileName))
	{
		sFileName  = sFileName.toString().replace(regExp,"");	//파일명에 특수문자 제거
	}

	if(!this.gfn_isNull(sSheetName))
	{
		sSheetName = sSheetName.toString().replace(regExp,"");  //시트명에 특수문자 제거
	}
	
	//fileName nullcheck
	sFileName = this.gfn_isNull(sFileName) ? "ExcelExport_"+this.gfn_getDate("time") : sFileName+"_"+this.gfn_getDate("time");
	
	//sheetName nullcheck
	sSheetName = this.gfn_isNull(sSheetName) ? "Sheet1" : sSheetName;
	
	//sheetName 30이상일경우 기본시트명
	if( String(sSheetName).length > 30 )
	{
		sSheetName =  "Sheet1";
	}
	
	//var svcUrl = "svcurl::XExportImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcurl"].url+"/XExportImport";
	this.objExport = null;
	this.objExport = new ExcelExportObject();
	
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none"); //exportprogress
 	this.objExport.set_exportmessageprocess("");
	//this.objExport.set_exportmessageprocess("%d Item, %d Recrod, %d Total"); //"%d[%d/%d]"
	
	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);
	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);
	this.objExport.addEventHandler("onprogress", this.gfn_exporOnprogress, this);
	
	this.objExport.set_exporturl(svcUrl);
	this.objExport.set_exportfilename(sFileName);

	//특정컬럼제거
	if(!this.gfn_isNull(arrExceptcolumns)){
		var oCopyGrid = this.gfn_ckGrdObj("_grd_excel", objGrid);
		oCopyGrid.set_visible(false);
		oCopyGrid.set_formats(objGrid.getCurFormatString());
		oCopyGrid.setBindDataset(objGrid.getBindDataset());
		
		oCopyGrid.set_enableredraw(false);
		for (var i=arrExceptcolumns.length-1; i >= 0; i--) 
		{
			oCopyGrid.deleteContentsCol(arrExceptcolumns[i]);
		}		
		oCopyGrid.set_enableredraw(true);
		
		var strType = oCopyGrid.toString().toUpperCase();
		objGrid_excel = oCopyGrid;			
	}
	else {
		objGrid_excel = objGrid;
	}

	//export grid 지정
	this.objExport.objgrid = objGrid_excel;
	
	//조회조건 배열
	if(objCondition instanceof  Array){ 
		condType = objCondition;
		
		var objCondGrid = "";
		
		if(!this.isValidObject("condGrid")){		
			objCondGrid = new Grid();
			objCondGrid.init("condGrid", 37, 100, 367, 48, null, null);
			this.addChild("condGrid", objCondGrid); 
			objCondGrid.set_visible(false);
			objCondGrid.show();		
			objCondGrid.appendContentsRow("head");
			objCondGrid.appendContentsRow("body");
			
			var oDs = new Dataset;
			this.addChild("_ds_export", oDs);
			oDs.addColumn( "column00", "string" );
			oDs.addRow();			
			
			objCondGrid.set_binddataset("_ds_export");	
			
		}else{
			objCondGrid = this["condGrid"];			
		}
				
		for(var ii=0; ii<condType.length; ii++){
			
			if(ii != 0 && objCondGrid.getFormatColCount() != condType.length){
				objCondGrid.appendContentsCol();
			}
			
			v_condType = condType[ii].split("^$");
			objCondGrid.setCellProperty("head", ii , "text", v_condType[0]);
			objCondGrid.setCellProperty("body", ii , "text", v_condType[1]);			
		}
		
		objCondition = objCondGrid;		
	}
	
	var strType = objGrid_excel.toString().toUpperCase();
	
	if (strType == "[OBJECT GRID]"){	
		if(!this.gfn_isNull(objCondition)){
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objCondition,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  sSheetName + "!A4","allband","allrecord","suppress","allstyle","none","font", "both");
			
		}else{			
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  sSheetName + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");//,"font", "both");
			//this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, oGrid,  sSheetName + "!A1","","","","","","","cellline" );//,"font", "both");
	    }		
	}
	
	var result = this.objExport.exportData();
};

/**********************************************************************************
 * Function Name: gfn_excelExportSheet
 * Description  : 엑셀 시트 출력 함수
 * Arguments    : arrjGrid 			-> Grid Object
				  arrSheet   		-> sheet name
				  sFileName   		-> file name
				  objCondition 		-> Grid Object
				  arrExceptcolums 	-> 제외할 컬럼
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_excelExportSheet = function(arrjGrid, arrSheet, sFileName, objCondition, arrExceptcolumns)
{
	if(this.gfn_isNull(arrjGrid)) return;
	
	var arrsht = arrSheet;
	
	if(this.gfn_isNull(arrsht)){
	
		arrsht = new Array();
		
		for(var i=0; i<arrjGrid.length;i++){
			arrsht[i] = "Sheet"+i;
		}
	}
		
	//this.setWaitCursor(true);
	
	var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)	
	
	//fileName nullcheck
	sFileName = this.gfn_isNull(sFileName) ? "ExcelExport_"+this.gfn_getDate("time") : sFileName+"_"+this.gfn_getDate("time");
	sFileName  = sFileName.toString().replace(regExp,"");	//파일명에 특수문자 제거
	
	//var svcUrl = "svcurl::XExportImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcurl"].url+"/XExportImport";
	this.objExport = null;
	this.objExport = new ExcelExportObject();
	
	//this.objExport.objgrid = objGrid_excel;
	this.objExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
 	this.objExport.set_exporteventtype("itemrecord");
 	this.objExport.set_exportuitype("none"); //exportprogress
 	this.objExport.set_exportmessageprocess("");
	//this.objExport.set_exportmessageprocess("%d Item, %d Recrod, %d Total"); //"%d[%d/%d]"
	
	this.objExport.addEventHandler("onsuccess", this.gfn_exportOnsuccess, this);	
	this.objExport.addEventHandler("onerror", this.gfn_exportOnerror, this);
	this.objExport.addEventHandler("onprogress", this.gfn_exporOnprogress, this);
	
	this.objExport.set_exporturl(svcUrl);
	this.objExport.set_exportfilename(sFileName);
	
	var objGrid_excel = "";

	for (var j=0; j<arrjGrid.length; j++){	
		//특정컬럼제거
		if(!this.gfn_isNull(arrExceptcolumns)){
			var oCopyGrid = this.gfn_ckGrdObj("_grd_excel_"+j, arrjGrid[j]);		
			oCopyGrid.set_visible(false);	
			oCopyGrid.set_formats(arrjGrid[j].formats);
			oCopyGrid.set_formatid(arrjGrid[j].formatid);
			//oCopyGrid.set_formats(arrjGrid[j].getCurFormatString());
			oCopyGrid.setBindDataset(arrjGrid[j].getBindDataset());
			oCopyGrid.set_enableredraw(false);
		
			for (var y=arrExceptcolumns[j].length-1; y >= 0; y--) {
				oCopyGrid.deleteContentsCol(arrExceptcolumns[j][y]);
			}		
			oCopyGrid.set_enableredraw(true);	
			objGrid_excel = oCopyGrid;
		}else{		
			objGrid_excel = arrjGrid[j];
		}
		var objCond = "";
		
		if(!this.gfn_isNull(objCondition)){
			//조회조건 배열
			if(objCondition[j] instanceof Array){
				condType = objCondition;			
				var objCondGrid = new Array;
							
				if(!this.isValidObject("condGrid"+j)){
				
					objCondGrid[j] = new Grid();
					objCondGrid[j].init("condGrid"+j, 37, 100, 367, 48, null, null);
					this.addChild("condGrid"+j, objCondGrid[j]);
					objCondGrid[j].set_visible(false);
					objCondGrid[j].show();
					objCondGrid[j].appendContentsRow("head");
					objCondGrid[j].appendContentsRow("body");
					
					var oDs = new Dataset;
					this.addChild("_ds_export_"+j, oDs);
					oDs.addColumn( "column00", "string" );
					oDs.addRow();			
					
					objCondGrid[j].set_binddataset("_ds_export_"+j);			
				}else{
					objCondGrid[j] = this["condGrid"+j];
				}
					
				for(var ii=0; ii<condType[j].length; ii++){
					
					if(ii != 0 && objCondGrid[j].getFormatColCount() != condType[j].length){
						objCondGrid[j].appendContentsCol();
					}
					
					v_condType = condType[j][ii].split("^$");
					
					objCondGrid[j].setCellProperty("head", ii , "text", v_condType[0]);
					objCondGrid[j].setCellProperty("body", ii , "text", v_condType[1]);			
				}			
				
				objCond = objCondGrid[j];
				
			}else{		
				if(!this.gfn_isNull(objCondition)){
					objCond = objCondition[j];
				}
			}
		}

		if(!this.gfn_isNull(objCond)){
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objCond,  arrsht[j] + "!A1","allband","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, arrsht[j] + "!A3","allband","allrecord","suppress","allstyle","none","font", "both");			
		}else{
	        //this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, arrsht[j] + "!A1","allrecord","suppress","allstyle","none","font", "both");
			this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel,  arrsht[j] + "!A1","allband","allrecord","suppress","allstyle","none","font","both" );//,"font", "both");
		}
	}

	var result = this.objExport.exportData();
};

/**********************************************************************************
 * Function Name: gfn_exportOnsuccess
 * Description  : 엑셀 출력 성공 시 사용 함수
 * Arguments    : obj 	-> obj
				  e   	-> e
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_exportOnsuccess = function(obj, e)
{		
	/*
	if (this._grd_excel != null) {
		this._grd_excel.destroy();
	}	
	*/
	this.setWaitCursor(false);
};

/**********************************************************************************
 * Function Name: gfn_exportOnerror
 * Description  : 엑셀 출력 실패 시 사용 함수
 * Arguments    : obj 	-> obj
				  e   	-> e
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_exportOnerror = function(obj,  e)
{
	trace( "\n=========== onerror event start===================");
	trace("\ne.eventid 				:"+e.eventid 				);
	trace( "\ne.id 					:"+e.id 					);
	trace( "\ne.fromobject 			:"+e.fromobject 			);
	trace( "\ne.fromreferenceobject 	:"+e.fromreferenceobject 	);
	trace ("\ne.errorcode 			:"+e.errorcode 				);
	trace("\ne.errormsg 			:"+e.errormsg 				);
	
	/*
	if (this._grd_excel != null) {
		this._grd_excel.destroy();
	}
	*/
	
	this.setWaitCursor(false);
};

/**********************************************************************************
 * Function Name: gfn_excelImportAll
 * Description  : 엑셀 입력 함수 (데이터 헤더 포함)
 * Arguments    : objDs 		-> dataset
				  sSheet   		-> sheet name(default:Sheet1)
				  sHead   		-> Head 영역지정
				  sBody 		-> Body 영역지정(default A2)
				  sCallback 	-> callback 함수
				  sImportId		-> import id(callback호출시 필수)
				  objForm		-> form object(callback호출시 필수)
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_excelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
{	
	//this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	if(this.gfn_isNull(sHead)) return false;
	
	//var svcUrl = "svcurl::XExportImport.do";
	//var svcUrl = "svcurl::XImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcurl"].url+"/XImport";
	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);	
	objImport.oDs = objDs;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	objImport.addEventHandler("onsuccess", this.gfn_importAllOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";	
	var sParam2 = "["+objDs+"=outds]";
	objImport.importData("", sParam1, sParam2);		
	this.addChild(objDs+"_ExcelImport"+this.gfn_rand(0,1000), objImport); 
	objImport = null;	 
};

/**********************************************************************************
 * Function Name: gfn_excelImportNsheet
 * Description  : sheet명 무시하고 첫번째 Sheet import
 * Arguments    : objDs 		-> dataset
				  sHead   		-> Head 영역지정
				  sBody 		-> Body 영역지정
				  sCallback 	-> callback 함수
				  sImportId		-> import id(callback호출시 필수)
				  objForm		-> form object(callback호출시 필수)
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_excelImportNsheet = function(objDs,sHead,sBody,sCallback,sImportId,objForm)
{	
	//this.setWaitCursor(true);    	
	/*
	if(this.gfn_isNull(sBody)) 
	{
		sBody = "A2";
	}
	*/
	/*
	if(this.gfn_isNull(sHead)) 
	{
		return false;
	}
	*/

	//var svcUrl = "svcurl::XExportImport.do";
	//var svcUrl = "svcurl::XImport";
	var svcUrl 	= nexacro.getEnvironment().services["svcurl"].url+"/XImport";
	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);
	objImport.oDs = objDs;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form     = objForm;
	}
	
	objImport.addEventHandler("onsuccess", 	this.gfn_importAllOnsuccess, this);
	objImport.addEventHandler("onerror", 	this.gfn_importAllOnerror, this);	
	var sParam1 = "";
	if(this.gfn_isNull(sHead) && this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds]";
	
	}else if(this.gfn_isNull(sHead) && !this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Body=!"+sBody+"]";
	
	}else if(!this.gfn_isNull(sHead) && this.gfn_isNull(sBody))  
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Head=!"+sHead+"]";
	}else
	{
		sParam1 = "[Command=getsheetdata;Output=outds;Head=!"+sHead+";Body=!"+sBody+"]";
	}
	
	var sParam2 = "["+objDs+"=outds]";

	objImport.importData("", sParam1, sParam2);		
	this.addChild(objDs+"_ExcelImport"+this.gfn_rand(0,1000), objImport); 
	objImport = null;	 
};

/**********************************************************************************
 * Function Name: gfn_importAllOnsuccess
 * Description  : 엑셀 입력 성공 시 사용 함수 (데이터 헤더 포함)
 * Arguments    : obj	-> obj
				  e		-> e
 * Return       : N/A(없음)
 **********************************************************************************/
pForm.gfn_importAllOnsuccess = function(obj,  e)
{
	trace("=========== onsuccess event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.url:"+e.url);

	this.setWaitCursor(false);
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var oDs       = obj.oDs;
	
	//빈 값 제거
	this.gfn_emptyRowDel(this.objects[oDs]);
	
	//화면의 callback 함수 호출
	if (!this.gfn_isNull(sCallback)) 
	{
		this.lookupFunc(sCallback).call(this,sImportId);
	}

};

/**********************************************************************************
 * Function Name: gfn_excelImport
 * Description  : 엑셀 입력 함수 (데이터 헤더 제외)
 * Arguments    : sDataset 		-> dataset
				  sSheet   		-> sheet name
				  sBody 		-> Body 영역지정
				  sCallback 	-> callback 함수
				  sImportId		-> import id(callback호출시 필수)
				  objForm		-> form object(callback호출시 필수)
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_excelImport = function(sDataset,sSheet,sBody,sCallback, sImportId, objForm)
{
	this.setWaitCursor(true);    	
	
	if(this.gfn_isNull(sSheet)) sSheet = "sheet1";
	if(this.gfn_isNull(sBody)) sBody = "A2";
	
	//var svcUrl = "SVC::XExportImport.do";
	//var svcUrl = "svcurl::XExportImport.do";
	var svcUrl 	= nexacro.getEnvironment().services["svcurl"].url+"/XExportImport.do";
	
	var objImport ;	
	objImport = new nexacro.ExcelImportObject(sDataset+"_ExcelImport"+this.gfn_rand(0,1000),this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = sDataset;
	
	if (!this.gfn_isNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = sDataset+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfn_importOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfn_importAllOnerror, this);	
	var sParam = "[command=getsheetdata;output=outDs;body=" + sSheet + "!" + sBody +";]";
 	var sParam2 = "[" + sOutDsName + "=outDs]";
 	
	objImport.importData("", sParam, sParam2);						
	objImport = null;	
};

/**********************************************************************************
 * Function Name: gfn_importOnsuccess
 * Description  : 엑셀 입력 성공 시 사용 함수 (데이터 헤더 제외)
 * Arguments    : obj	-> obj
				  e		-> e
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_importOnsuccess = function(obj,  e)
{		
	trace("=========== onsuccess event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.url:"+e.url);

	this.setWaitCursor(false);
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	//빈 값 제거
	this.gfn_emptyRowDel(objOutDs);
		
	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	//objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);

	if (!this.gfn_isNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};

/**********************************************************************************
 * Function Name: gfn_importAllOnerror
 * Description  : 엑셀 입력 실패 시 사용 함수
 * Arguments    : obj	-> obj
				  e		-> e
 * Return       : N/A(없음)
 **********************************************************************************/
pForm.gfn_importAllOnerror = function(obj,  e)
{
	trace("=========== onerror event start============");
	trace("e.eventid:"+e.eventid);
	trace("e.fromobject:"+e.fromobject);
	trace("e.fromreferenceobject:"+e.fromreferenceobject);
	trace("e.errorcode:"+e.errorcode);
	trace("e.errormsg:"+e.errormsg);
	
	this.setWaitCursor(false);	
	this.alert(e.errormsg);
};

/**********************************************************************************
 * Function Name: gfn_rand
 * Description  : 랜덤값 리턴 함수
 * Arguments    : nStart	-> 시작숫자 (단, 정수, 만일 정수가 아니면 Math.floor(nStart)를 적용함)
				  nEnd		-> 끝숫자 (단, 정수, 만일 정수가 아니면 Math.floor(nEnd)를 적용함)
 * Return       : nRtn		-> nStart ~ nEnd 범위 중 random 숫자 (단, nStart, nEnd도 포함됨)
 **********************************************************************************/ 
pForm.gfn_rand = function(nStart, nEnd) 
{
	var range_unit, rand, tmp;

	nStart = Math.floor(nStart);
	nEnd = Math.floor(nEnd);
	if( nStart > nEnd ) 
	{
		tmp = nStart;
		nStart = nEnd;
		nEnd = tmp;
	}
	range_unit = nEnd-nStart+1;
	rand = Math.random();
	rand = Math.random();
	return Math.floor(rand*range_unit)+nStart;
};
pForm = null;