﻿/**
*  컨설팅 표준화 작업
*  @FileName 	MultiLanguage.js
*  @Creator 	kyk
*  @CreateDate 	2017.10.17
*  @Desction    다국어 처리
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.10.17     	kyk       	           주석 정비
*  2017.11.20     	kyk       	           용어 Dataset 변경 및 이미지/그리드 처리방식 변경
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
 * @class  해당 form의 하위 콤포넌트 모두 찾아 다국어 처리
 * @param  {Form} objForm - 대상 form
 * @return N/A
 */
pForm.gfnInitLang = function (objForm)
{
	var sNowLang    = nexacro.getEnvironmentVariable("evLanguage");			// 현재 언어
	var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어
	
	// Language 변경 전/후 값 확인
	if (sNowLang == "EN" && sNowLang == sChangeLang) return;

	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			this.gfnInitLang(arrComp[i].form); //재귀함수
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;

			for (var j=0; j<nPages;j++)
			{
				this.gfnChangeLang(arrComp[i].tabpages[j]);
				this.gfnInitLang(arrComp[i].tabpages[j].form); //재귀함수
			}
		}
		else
		{
			this.gfnChangeLang(arrComp[i]); //다국어설정
		}
	}
	
	// text 사이즈 변경으로 인한 화면 갱신(안정성 검증 안됨)
	objForm.resetScroll();
	//this.resetScroll();
};


/**
 * @class  해당 Component에 대해 다국어 처리
 * @param  {Object} objComp - 대상 Object
 * @return N/A
 */
pForm.gfnChangeLang = function (objComp)
{
	var sWord = "";		// 용어 code
	var sVal  = "";		// 치환될 값
	
	// Button, Static, CheckBox, Tabpage
	if (objComp instanceof nexacro.Button || objComp instanceof nexacro.Static || objComp instanceof nexacro.CheckBox || objComp instanceof nexacro.Tabpage)
	{
//		sWord = objComp.uWord;
//		if (this.gfnIsNull(sWord) || this.gfnIsNull(objComp.text)) return;
		sWord = objComp.text;
		if (this.gfnIsNull(sWord)) return;
	
		sVal = this.gfnGetWord(sWord);
		objComp.set_text(sVal);
	}
	// ImageViewer 는 해당 프로젝트의 디자인 파일의 Naming Rule에 맞게 수정 필요
	else if (objComp instanceof nexacro.ImageViewer)
	{		
//		sWord = objComp.uWord; 		// image의 경우 용어 code에 true 설정
//		if (this.gfnIsNull(sWord) || sWord != "true") return;

		var sImage   = objComp.image;	// image
		// 이미지 확장자
		var buff     = sImage.split(".");
		var fileExt  = buff[buff.length-1].replace("\")", "");
			
		var sNowLang    = nexacro.getEnvironmentVariable("evLanguage");			// 현재 언어
		var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어
		if (sNowLang != "KO" && sChangeLang == "KO")
		{
			sImage = sImage.replace("_"+sNowLang+"."+fileExt,"."+fileExt);
		}
		else {		
			var nPos = this.gfnPosReverse(sImage,"."+fileExt);
			sImage = sImage.substr(0, nPos) + "_" + nexacro.getEnvironmentVariable("evLanguageChange")+"."+fileExt+"\")";
		}
		objComp.set_image(sImage);		
	}
	// Grid
	else if (objComp instanceof nexacro.Grid)
	{
		objComp.set_enableevent(false);
		var nCol = objComp.getCellCount("head");

		for (var j=0; j<nCol; j++)
		{
			// Grid의 경우 용어 code를 Header의 expandchar Property에 기술
			//sWord = objComp.getCellProperty("Head", j, "expandchar");	// 용어 code
			//head text를 가져온다.
			sWord = objComp.getCellProperty("Head", j, "text");	// 용어 code
			if (this.gfnIsNull(sWord)) continue;
		
			sVal = this.gfnGetWord(sWord);
			objComp.setCellProperty("Head", j, "text", String(sVal))
		}
		objComp.set_enableevent(true);
	}	
};

/**
 * @class  다국어 처리를 위한 용어 검색
 * @param  {String} sTargetVal - 검색할 용어
 * @return {String} 변경할 용어
 */
pForm.gfnGetWord = function (sWord)
{
	var objApp = nexacro.getApplication();
	var objLangDs = objApp.gdsWord;
	
	var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어

	var sVal = sWord;
	var nRow;
	if(sChangeLang == "EN") {
		nRow = objLangDs.findRow("KORN_MSGE",sWord);
	}
	else {
		nRow = objLangDs.findRow("ENGL_MSGE",sWord);
	}

	if (nRow != -1)
	{
		if(sChangeLang == "EN") {
			sVal = objLangDs.getColumn(nRow, "ENGL_MSGE");
		}
		else {
			sVal = objLangDs.getColumn(nRow, "KORN_MSGE");
		}
	}

	// 찾은 Word가 없는 경우 전달받은 내용을 return한다.
	if(this.gfnIsNull(sVal)) {
		sVal = sWord;
	}
/*	var nRow = objLangDs.findRow("word",sWord);
	if (nRow != -1)
	{
		sVal = objLangDs.getColumn(nRow, sChangeLang);
	}
*/	
	return sVal;
};

/**
 * @class  다국어 처리를 위한 용어 검색
 * @param  {String} sTargetVal - 검색할 용어
 * @return {String} 변경할 용어
 */
/*pForm.gfnGetWordOld = function (sWord)
{
	var objApp = nexacro.getApplication();
	var objLangDs = objApp.gdsWord;
	
	var sChangeLang = nexacro.getEnvironmentVariable("evLanguageChange");	// 바꿀 언어

	var sVal = sWord;
	var nRow = objLangDs.findRow("word",sWord);
	if (nRow != -1)
	{
		sVal = objLangDs.getColumn(nRow, sChangeLang);
	}
	return sVal;
};
*/

/**
 * @class  다국어 처리를 위한 용어 검색 - 메시지 ID로 검색하여 전달
 * @param  {String} sMsgId - 검색할 메시지 ID
 * @return {String} 단어 return
 */
pForm.gfnGetWordByID = function (sMsgID)
{
	var objApp = nexacro.getApplication();
	var objLangDs = objApp.gdsWord;
	
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");	// 언어

	var sVal;
	var nRow;
	
	nRow = objLangDs.findRow("MSGE_CD", sMsgID);
	
	if(nRow == -1)
		return "not word";
		
	if(sNowLang == "EN") {
		sVal = objLangDs.getColumn(nRow, "ENGL_MSGE");
	}
	else {
		sVal = objLangDs.getColumn(nRow, "KORN_MSGE");
	}

	return sVal;
};