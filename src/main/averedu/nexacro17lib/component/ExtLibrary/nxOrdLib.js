var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 == 사용자정의 함수들은 여기에 작성한다.
 ===============================================================================
 ★ gfn_GyeyeolComboLoad     : 부서코드의 계열데이터를 조회
 ★ gfn_HakgwaComboLoad      : 부서코드의 학과데이터를 조회
 ★ gfn_JeongongComboLoad    : 부서코드의 전공데이터를 조회
 ★ gfn_GyeyeolHakgwaComboLoad  : 부서코드의 전체학과데이터를 조회 
 ★ gfn_BaseYyyyHakgiLoad    : 기준연도학기 조회 
*/

/**
 * @class  		: gfn_GyeyeolComboLoad(objGrid, strHipoFlag, strSid, strUseYn, strGyojikYn, strDaehakCd, strMenuId)  <br>
 * @description : 부서코드의 계열데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
 * @param1 {String} objCombo   									ex) this.cboSearchGyeyeol	 	받아올 콤보
 * @param2 {String} strHipoFlag									ex) "T";  						콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
 * @param3 {String} strSid	- Null인경우 대치값				es) "fn_callback"               fn_callBack(svcId)
 * @param4 {String} strUseYn									ex) "1";  						1 사용, 0 미사용, null 전체
 * @param5 {String} strJojikGbcd - 조직구분                    ex) "20"                        10.행정조직   20.학사조직   30.입시조직
 * @param6 {String} strDaehakCd - 계열코드                     ex) ""
 * @return {obj}    strDS선언한 오브젝트를 받아옮
 */ 
pForm.gfn_GyeyeolComboLoad = function(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strDaehakCd, strMenuId)
{
	if(this.gfn_isNull(objCombo.innerdataset)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var strSvc 		= strSid;    
	var strUrl      = "/prj/ord/RetrieveGyeyeolComboList.do";
	var strInDs  	= "";                                         
	var strOutDs 	= objCombo.innerdataset + "=" + "dsGyeyeol";    
	var strArg 	    = " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);
	    strArg 	   += " useYn="      	+ nexacro.wrapQuote(strUseYn);
		strArg 	   += " jojikGbcd="  	+ nexacro.wrapQuote(strJojikGbcd);
		strArg 	   += " daehakCd="  	+ nexacro.wrapQuote(strDaehakCd);
		strArg 	   += " menuId="  	    + nexacro.wrapQuote(strMenuId);

	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;		    	//생략이나 공백일시에는 ASync=true,싱크시는 false로 		
	
	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallBack
					   , strASync);
					   
	objCombo.set_index(0);
};

/**
 * @class  		: gfn_HakgwaComboLoad(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strUpDeptCd, strMenuId)  <br>
 * @description : 부서코드의 학과데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
 * @param1 {String} objCombo   									ex) this.cboSearchHakgwa	 	받아올 콤보
 * @param2 {String} strHipoFlag									ex) "T";  						콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
 * @param3 {String} strSid	- Null인경우 대치값				es) "fn_callback"               fn_callBack(svcId)
 * @param4 {String} strUseYn									ex) "1";  						1 사용, 0 미사용, null 전체
 * @param5 {String} strJojikGbcd - 조직구분                    ex) "20"                        10.행정조직   20.학사조직   30.입시조직
 * @param6 {String} strUpDeptCd  - 상위부서코드               ex) ""
 * @return {obj}    strDS선언한 오브젝트를 받아옮
 */ 
// strUpDeptCd = 'allLv' 일 경우 모든 계열,학과,전공 조회
// strUpDeptCd = 'all' 일 경우 모든 학과 조회
pForm.gfn_HakgwaComboLoad = function(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strUpDeptCd, strMenuId)
{
	if(this.gfn_isNull(objCombo.innerdataset)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var strSvc 		= strSid;    
	var strUrl      = "/prj/ord/RetrieveHakgwaComboList.do";
	var strInDs  	= "";                                         
	var strOutDs 	= objCombo.innerdataset + "=" + "dsHakgwa";    
	var strArg 	    = " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);
	    strArg 	   += " useYn="      	+ nexacro.wrapQuote(strUseYn);
		strArg 	   += " jojikGbcd="  	+ nexacro.wrapQuote(strJojikGbcd);
		strArg     += " upDeptCd=" 	    + nexacro.wrapQuote(strUpDeptCd);
		strArg 	   += " menuId="  	    + nexacro.wrapQuote(strMenuId);

	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;		    //생략이나 공백일시에는 ASync=true,싱크시는 false로 		
	
	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallBack
					   , strASync);
					   
	objCombo.set_index(0);					   
};

/**
 * @class  		: gfn_JeongongComboLoad(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strUpDeptCd, strMenuId)  <br>
 * @description : 부서코드의 전공데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
 * @param1 {String} objCombo   									ex) this.cboSearchHakgwa	 	받아올 콤보
 * @param2 {String} strHipoFlag									ex) "T";  						콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
 * @param3 {String} strSid	- Null인경우 대치값				es) "fn_callback"               fn_callBack(svcId)
 * @param4 {String} strUseYn									ex) "1";  						1 사용, 0 미사용, null 전체
 * @param5 {String} strJojikGbcd - 조직구분                    ex) "20"                        10.행정조직   20.학사조직   30.입시조직
 * @param6 {String} strUpDeptCd  - 상위부서코드               ex) ""
 * @return {obj}    strDS선언한 오브젝트를 받아옮
 */ 
pForm.gfn_JeongongComboLoad = function(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strUpDeptCd, strMenuId)
{
	
	if(this.gfn_isNull(objCombo.innerdataset)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var strSvc 		= strSid;    
	var strUrl      = "/prj/ord/RetrieveJeongongComboList.do";
	var strInDs  	= "";
	var strOutDs 	= objCombo.innerdataset + "=" + "dsJeongong";    
	var strArg 	    = " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);
	    strArg 	   += " useYn="      	+ nexacro.wrapQuote(strUseYn);
		strArg 	   += " jojikGbcd="  	+ nexacro.wrapQuote(strJojikGbcd);
		strArg     += " upDeptCd=" 	    + nexacro.wrapQuote(strUpDeptCd);
		strArg 	   += " menuId="  	    + nexacro.wrapQuote(strMenuId);

	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;			//생략이나 공백일시에는 ASync=true,싱크시는 false로 		

	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallBack
					   , strASync);				   
};


/**
 * @class  		: gfn_GyeyeolHakgwaComboLoad(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strUpDeptCd, strMenuId)  <br>
 * @description : 부서코드의 학과데이터를 조회하여 콤보박스에 연결된 innerdataset의 자료를 조회한다.
 * @param1 {String} objCombo   									ex) this.cboSearchHakgwa	 	받아올 콤보
 * @param2 {String} strHipoFlag									ex) "T";  						콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
 * @param3 {String} strSid	- Null인경우 대치값				es) "fn_callback"               fn_callBack(svcId)
 * @param4 {String} strUseYn									ex) "1";  						1 사용, 0 미사용, null 전체
 * @param5 {String} strJojikGbcd - 조직구분                    ex) "20"                        10.행정조직   20.학사조직   30.입시조직
 * @return {obj}    strDS선언한 오브젝트를 받아옮
 */ 
pForm.gfn_GyeyeolHakgwaComboLoad = function(objCombo, strHipoFlag, strSid, strUseYn, strJojikGbcd, strMenuId)
{
	if(this.gfn_isNull(objCombo.innerdataset)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var strSvc 		= strSid;    
	var strUrl      = "/prj/ord/RetrieveGyeyeolHakgwaComboList.do";
	var strInDs  	= "";                                         
	var strOutDs 	= objCombo.innerdataset + "=" + "dsGyeyeolHakgwa";    
	var strArg 	    = " commHipoFg="  	+ nexacro.wrapQuote(strHipoFlag);
	    strArg 	   += " useYn="      	+ nexacro.wrapQuote(strUseYn);
		strArg 	   += " jojikGbcd="  	+ nexacro.wrapQuote(strJojikGbcd);
		strArg 	   += " menuId="  	    + nexacro.wrapQuote(strMenuId);

	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;		    //생략이나 공백일시에는 ASync=true,싱크시는 false로 		
	
	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallBack
					   , strASync);
					   
	objCombo.set_index(0);					   
};

/**
 * @class  		: gfn_BaseYyyyHakgiLoad(strDs, strSid, strEopmuGbcd, strUseYn)  <br>
 * @description : 기준연도학기를 조회한다.
 * @param1 {String} strDs   									ex) "dsBaseYyyyHakgi"   	 	받아올 데이터셋
 * @param2 {String} strSid	- Null인경우 대치값				es) "fn_callback"               fn_callBack(svcId)
 * @param3 {String} strEopmuGbcd - 업무구분                    ex) "UM"                        00061(업무구분코드)
 * @param4 {String} strUseYn									ex) "1";  						1 사용, 0 미사용, null 전체  
 * @return {obj}    strDS선언한 오브젝트를 받아옮
 */ 
pForm.gfn_BaseYyyyHakgiLoad = function(strDs, strSid, strEopmuGbcd, strUseYn)
{
	if(this.gfn_isNull(strDs)) 
	{
		alert("선언한 데이타 셋이 없습니다.");
		return false;
	}

	var strSvc 		= strSid;    
	var strUrl      = "/prj/ord/RetrieveBaseYyyyHakgiList.do";
	var strInDs  	= "";
	var strOutDs 	= strDs + "=" + "dsBaseYyyyHakgi";    
	var strArg 	    = " useYn="      	+ nexacro.wrapQuote(strUseYn);
		strArg 	   += " eopmuGbcd="  	+ nexacro.wrapQuote(strEopmuGbcd);

	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
	var strASync    = true;			//생략이나 공백일시에는 ASync=true,싱크시는 false로 		

	this.gfn_Transaction(strSvc
					   , strUrl
					   , strInDs
					   , strOutDs
					   , strArg
					   , strCallBack
					   , strASync);	
};


pForm = null;