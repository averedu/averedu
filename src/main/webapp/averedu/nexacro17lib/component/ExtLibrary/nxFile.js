﻿var pForm = nexacro.Form.prototype;

/*
 ===============================================================================
  파일 upload, download에 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_fileUpload			: 파일 업로드 함수
 ● gfn_setDefaults			: 디폴트 값 설정 함수
 ● gfn_fileDownload		: 파일 다운로드 함수
 ● gfn_getFileName			: 실제 파일명 가져오는 함수
 ● gfn_attFileDownload		: 첨부파일 다운로드 함수
 */
 
/**********************************************************************************
 * Function Name: gfn_fileUpload
 * Description  : 파일 업로드 함수
 * Arguments    : objFileUpload		-> 파일업로드 컴포넌트
				  options			->
						- type       : Event 일경우 첨부파일만 저장 처리 Event 폴더에 저장 ( 행사이미지 )
									 : Goods 일경우 첨부파일만 저장 처리 Goods 폴더에 저장 ( 상품이미지 )
									 : PP    일경우 첨부파일만 저장 처리 PP    폴더에 저장 ( 상품이미지 )
						- fileLimit  : fileSize Limit 처리 처리 옵션 ( MB)
						- fileReName : file에서 리네임 처리 
						- subPath    : 서브패스 
						- subsubPath : 서브에 서브 패스
						- width      : 파일 압축시 Width 값 
						- height     : 파일 압축시 Height 값 
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_fileUpload = function(objFileUpload, options )
{		
	options = this.gfn_setDefaults(options, {type:"Normal", fileLimit:0, subPath:"", subsubPath:"", fileReName:"", width:0, height:0} );
	trace(options);
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	//파일업로드 서비스 호출 경로
	//var sFileUrl = svcUrl + "uploadFile";	
	var sFileUrl = svcUrl + "UploadServlet.do?gtype=" 	+ options.type 
	                      + "&gFileLimit="				+ options.fileLimit
						  + "&savePath="				+ options.subPath
						  + "&gSubSubPath="				+ options.subsubPath
						  + "&serverName=" 				+ options.fileReName
						  + "&gWidth=" 					+ options.width
						  + "&gHeight=" 				+ options.height;
	
	trace(sFileUrl);
	var bSucc = objFileUpload.upload(sFileUrl);
};
      
/**********************************************************************************
 * Function Name: gfn_setDefaults
 * Description  : 디폴트 값 설정 함수
 * Arguments    : objArguments		-> 디폴트 값 설정할 컴포넌트
				  objDefaults		-> 설정할 디폴트 값
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_setDefaults = function(objArguments, objDefaults) 
{
	
	if( !objArguments ) objArguments = [];
	if( !objDefaults )  objDefaults  = [];
	for(var p in objDefaults) 
	{
	
		try {
				if(this.gfn_isEmpty(objArguments[p]) ) 
				{
					objArguments[p] = objDefaults[p];
				}
		} catch(err) {
			objArguments[p] = objDefaults[p];
		}
	}
	return objArguments;
};

/**********************************************************************************
 * Function Name: gfn_fileDownload
 * Description  : 파일 다운로드 함수
 * Arguments    : sFilename			-> 다운로드 할 실제파일명
				  sSaveFileName		-> 서버에 업로드될때 변경된 파일명
				  sPath				-> 파일업로드 시킬 폴더 위치
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_fileDownload = function(sFilename, sSaveFileName, sPath)
{
	/*
	// Create Object
	var sDownID = "FileDownload"+this.gfn_rand(0,123456);
	var objFileDownload = new FileDownload(sDownID, 0, 0, 0, 0, null, null);
	this.addChild(sDownID, objFileDownload);
	
	objFileDownload.addEventHandler( "onerror", this.gfnDown_onerror, this);
	objFileDownload.addEventHandler( "onsuccess", this.gfnDown_onsuccess, this);
	
	objFileDownload.show(); 
	*/
	
	var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
	// Create Object
	var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
	this.addChild(sDownID, objWebBrowser);
	objWebBrowser.show(); 

	
	
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	
	//파일다운로드 서비스 호출 경로
	//var sFileUrl = svcUrl + "fileDownload";
	var sFileUrl = svcUrl + "DownloadServlet.do";
	
	objWebBrowser.set_url(sFileUrl + "?file_path=" + "upload" + "&file_name=" + sFilename + "&saveFileName=" + sSaveFileName);
};

/**********************************************************************************
 * Function Name: gfn_getFileName
 * Description  : 실제 파일명 가져오는 함수
 * Arguments    : sPath		-> File Path 문자열 (예 : "C:\a\b\filename.ext")
				  bExt		-> extend를 return되는 File명에 포함시킬지 여부 ( 옵션 : Default=false )
 * Return       : 성공 		-> <br>
				  bExt가 true인 경우 ==> sPath에서 File명(예 : "filename.ext") <br>
				  bExt가 false인 경우 ==> sPath에서 File명(예 : "filename") <br>
				  실패 : "" <br>
 **********************************************************************************/ 
pForm.gfn_getFileName = function (sPath, bExt)
{
	var start_pos,end_pos,tmp_pos,filename;

	if (this.gfn_isEmpty(sPath)) 
	{
		return "";
	}
	if (this.gfn_isEmpty(bExt)) 
	{
		bExt = false;
	}

	start_pos = Math.max(this.gfn_posReverse(sPath, "\\"), this.gfn_posReverse(sPath, "/"));
	tmp_pos = this.gfn_posReverse(sPath, "::");
	if (tmp_pos > 0) 
	{
		tmp_pos++;
	}
	start_pos = Math.max(start_pos, tmp_pos);
	if (bExt == false) 
	{
		end_pos = this.gfn_posReverse(sPath, ".");
		if (end_pos < 0) 
		{
			end_pos = sPath.length;
		}
		filename = sPath.substr(start_pos + 1, end_pos - start_pos - 1);
	}
	else 
	{
		filename = sPath.substr(start_pos + 1);
	}

	return filename;
};

/**********************************************************************************
 * Function Name: gfn_attFileDownload
 * Description  : 첨부파일 다운로드 함수
 * Arguments    : sAttflNo		-> 다운로드 할 첨부파일번호
				  sAttflSn		-> 다운로드 할 첨부파일순번
 * Return       : N/A(없음)
 **********************************************************************************/ 
pForm.gfn_attFileDownload = function(sAttflNo, sAttflSn)
{
	var objEnv 	= nexacro.getEnvironment();
	var svcUrl  = objEnv.services["svcurl"].url;
	var strUrl  = svcUrl + "prj/sys/AttFileDownload.do?";		
	
	var sNavigatorNm =  system.navigatorname;
	
	if(sNavigatorNm == "nexacro" || sNavigatorNm == "IE") {
	
			strUrl1 = strUrl + "ATTFL_NO=" + encodeURIComponent(sAttflNo) + "&ATTFL_SN=" + encodeURIComponent(sAttflSn);				
			//trace(strUrl1);
			
			this.fileDownload.downloadurl = strUrl1;
			this.fileDownload.set_downloadfilename(ATTFL_LOGIC_NM);
			this.fileDownload.show();
			var bSucc = this.fileDownload.download();
			//trace("bSucc >> "+bSucc);				
	} else {
			var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
			
			// Create Object
			var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
			this.addChild(sDownID, objWebBrowser);
			objWebBrowser.show(); 
			
			strUrl1 = strUrl + "ATTFL_NO=" + encodeURIComponent(sAttflNo) + "&ATTFL_SN=" + encodeURIComponent(sAttflSn);
			objWebBrowser.set_url(strUrl1);		
			//trace(strUrl1);
	}
		
/*	
	var sDownID = "WebBrowser_"+this.gfn_rand(0,123456);
	// Create Object
	var objWebBrowser = new WebBrowser(sDownID, 0, 0, 0, 0, null, null);
	this.addChild(sDownID, objWebBrowser);
	objWebBrowser.show(); 

	
	
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	
	//파일다운로드 서비스 호출 경로
	//var sFileUrl = svcUrl + "fileDownload";
	var sFileUrl = svcUrl + "DownloadServlet.do";
	
	objWebBrowser.set_url(sFileUrl + "?file_path=" + "upload" + "&file_name=" + sFilename + "&saveFileName=" + sSaveFileName);
*/	
};

pForm = null;