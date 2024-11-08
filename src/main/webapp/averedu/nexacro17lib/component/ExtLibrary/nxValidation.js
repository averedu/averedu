var pForm = nexacro.Form.prototype;

/*
 ===============================================================================
 == Validation관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_cmmnChkEssentialItem : 필수 항목을 입력했는지 체크함수.
 ● gfn_componentsSetFocuse  : 필수 항목 체크시 포커스 처리및 메시지 처리(일반컴포넌트)  
 ● gfn_getXpName            : 그리드 항목체크시 경로를 이름 넘겨주는 함수
 ● gfn_gridCellSetFocuse    : 필수 항목 체크시 포커스 처리및 메시지 처리(그리드)  
 ● gfn_cmmnGridSetNotNull   : 그리드의 필수항목을 표시하는 함수.
 ● gfn_cmmnMakeNotNullImg   : 일반컴포넌트의 필수항목을 표시하는 함수.
 */

 /**************************************************************************************************************************
 * Function Name: gfn_cmmnChkEssentialItem(dsObj, sCol, sColNm,objGrid,bFlag,forObject)  bFlag= ture:Grid,false:입력object
 * Description  : 필수 항목을 입력했는지 체크함수.
 * Arguments    : dsObj 		=> dataset(bind한 데이타셋                       예)  this.dsMaster
				  sCol 	    	=> bind한 컬럼을 String으로                      예) "formPath$formId$formNm"
				  sColNm 		=> 메세지 처리시 String으로                      예) "경로$화면아이디$화면이름";
				  grdObj 		=> 일반컴포넌트 "",그리드이면 this.grdMaster    예) this.grdMaster or ""
				  focusFlg 		=> 컴포넌트 유무                                 예) grid:true and 일반컴포넌트:false
				  mainCmtsObj 	=> 검색할 범위의 컴포넌트                       예) 보통은:this 그외에는 this.div
 * Return       : retMsg(array [0] 메세지, [1] row, [2] 칼럼) array(배열)
 *****************************************************************************************************************************/  
pForm.gfn_cmmnChkEssentialItem = function (dsObj, sCol, sColNm, grdObj, focusFlg, mainCmtsObj)
{
	var retMsg 		= new Array();
	    retMsg[0] 	= "success";
	    retMsg[1] 	= "";
	    retMsg[2] 	= "";

	var sObj 		= sCol.split("$");
	var sColObj 	= sColNm.split("$");
	var iCount 		= sObj.length;

	for(var idx01 = 0; idx01 < dsObj.rowcount; idx01++) 
	{
		if(dsObj.getRowType(idx01) == 1)
		{
			continue;
		}
	
		for (var idx02 = 0; idx02 < iCount; idx02++) 
		{
			var strObj 		= dsObj.getColumn(idx01, sObj[idx02]);
			var strTempObj 	= this.gfn_trim(strObj);

			if (strTempObj.length == 0) 
			{
				/*
				retMsg[0] =  " 필수입력항목 '" + sColObj[idx02] + "'을(를) " + "입력 하지 않으셨습니다. \n\n" +
				             " 입력하신 후 저장 해 주시길 바랍니다.";
				*/
				retMsg[0] = this.gfn_getMessage("MSG00002", this.gfn_getComponent(sColObj[idx02])); 
				retMsg[1] = idx01;
				retMsg[2] = sObj[idx02];
				dsObj.set_rowposition(idx01);
				
				if (focusFlg) 
				{
					if(!this.gfn_isNull(grdObj)) 
					{	// 그리드를 처리할시
						this.gfn_gridCellSetFocuse(grdObj, sObj[idx02]);
					}
				} else 
				{	// 일반 오브젝트를 처리할시
					this.gfn_componentsSetFocuse(dsObj, mainCmtsObj, sObj[idx02]);
				}
				return retMsg;
			}
		}
	}
	return retMsg;
};

 /**************************************************************************************************************************
 * Function Name: gfn_componentsSetFocuse(dsObj, mainCmtsObj, sColsID)
 * Description  : 필수 항목 체크시 포커스 처리및 메시지 처리(GRID)    
 * Arguments    : dsObj   => dataset(bind한 데이타셋                        예)  this.dsMaster
      sCol       => 현재 form-this                            예) this
      sColNm   =>  포커스를 맞출 컬럼ID (Dataset의 ColumnName ) 예) "formPath$formId$formNm"
 * Return       : N/A
 *****************************************************************************************************************************/   
pForm.gfn_componentsSetFocuse = function (dsObj, mainCmtsObj, sColsID)
{
	try 
	{
		var sType;
		var objBrack  = 0;
		var objAll   = mainCmtsObj.components;
		
		var nLength  = objAll.length;
		
		for(var i = 0; i < nLength; i++) 
		{
			
			sType = objAll[i];
			
			if (sType instanceof nexacro.Edit || sType instanceof nexacro.TextArea || sType instanceof nexacro.Calendar || sType instanceof nexacro.CheckBox ||
			    sType instanceof nexacro.MaskEdit ||sType instanceof nexacro.Combo || sType instanceof nexacro.Radio) 
			{
				
				for (var k = 0; k < this.binds.length; k++) 
				{
					if ((dsObj.name == this.binds[k].datasetid) && (sColsID == this.binds[k].columnid) && (this.gfn_getXpName(sType, this) == this.binds[k].compid) ) 
					{
						objBrack = 1;
						break;
					}
				}
				if (objBrack == 1) 
				{
					sType.setFocus();
					break;
				}
				
			}
			
			if (sType instanceof nexacro.Div || sType instanceof nexacro.PopupDiv)
			{
				this.gfn_componentsSetFocuse(dsObj, sType.form, sColsID);  //재귀함수
    
			}else if (sType instanceof nexacro.Tab)
			{
				var nPages = sType.tabpages.length;
				for (var j=0; j<nPages;j++)
				{ 
					this.gfn_componentsSetFocuse(dsObj, sType.tabpages[j].form, sColsID);  //재귀함수
				}
				
			}
			
		}
		
	} catch (e) 
	{
		trace(e.name + e.message);
	}
}; 
 /**************************************************************************************************************************
 * Function Name: gfn_getXpName(grObj, sColsID)
 * Description  : 그리드 항목체크시 경로를 이름 넘겨주는 함수
 * Arguments    : obj 		=> Obj               
				  refParent => 포커스를 맞출 컬럼ID (Dataset의 ColumnName )          
 * Return       : N/A
 *****************************************************************************************************************************/   
pForm.gfn_getXpName = function(obj, refParent)	
{
	var c 	= obj; 
	var arr	= [];
	while ( c )	
	{
		if ( c instanceof ChildFrame ) 
		{	
			break;
		}
		if ( refParent && c === refParent ) 
		{	
			break;
		}
		arr.push(c.name);
		c = c.parent;
	}
	arr = arr.reverse();
	
	return arr.join(".");
};

 /**************************************************************************************************************************
 * Function Name: gfn_componentsSetFocuse(grObj, sColsID)
 * Description  : 필수 항목 체크시 포커스 처리(일반컴포넌트)
 * Arguments    : grObj 		=> 그리드 Obj               
				  sColsID 	   	=> 포커스를 맞출 컬럼ID (Dataset의 ColumnName )          
 * Return       : N/A
 *****************************************************************************************************************************/    
pForm.gfn_gridCellSetFocuse = function (grObj, sColsID)
{
	var colsLength = grObj.getCellCount("Head");

	for (var i = 0; i < colsLength; i++) 
	{
		if(this.gfn_isNull(grObj.getCellProperty("body", i, "text"))) 
		{
			continue;
		}
		
		if ((((grObj.getCellProperty("body", i, "text")).toString().split(":"))[1]).toLowerCase() == sColsID.toLowerCase()) 
		{
			grObj.setCellPos(i);
			grObj.showEditor();
			return false;
		}
	}
};
 /**************************************************************************************************************************
 * Function Name: gfn_cmmnGridSetNotNull(objGrid, lvchkColidDs)
 * Description  : 그리드의 칼럼에 필수입력사항 항목을 표시를 한다.
 * Arguments    : objGrid 		=> 그리드 Obj               
				  lvchkColidDs 	=> 포커스를 맞출 컬럼ID (Dataset의 ColumnName => "stafNumb$kornName")          
 * Return       : N/A
 *****************************************************************************************************************************/  
pForm.gfn_cmmnGridSetNotNull = function (objGrid, lvchkColidDs)
{
	var idx = 0;
	var arrNotNullColList = lvchkColidDs.split("$");

	for (idx = 0; idx < arrNotNullColList.length; idx++) 
	{
		var nColIndex = objGrid.getBindCellIndex("body", arrNotNullColList[idx]);
		if (nColIndex > -1) 
		{
			objGrid.setCellProperty("head", nColIndex, "cssclass", "grid_essential");
		}
	}
};

 /**************************************************************************************************************************
 * Function Name: gfn_cmmnMakeNotNullImg(strCompoList, objParent)
 * Description  : 그리드의 칼럼에 필수입력사항 항목을 표시를 한다.
 * Arguments    : strCompoList 	=> 화면의 입력항목중 Object 리스트의 내용으로 필수입력항목 표시(붉은색)를 한다.              
				  lvchkColidDs 	=> 컴포넌트 부모 오브젝트(탭, DIV 안의 컴포넌트 일 경우 )  ex)div/mainTab.subTab 기입이 없을시는 this       
 * Return       : N/A
 *****************************************************************************************************************************/  
pForm.gfn_cmmnMakeNotNullImg = function (strCompoList, objParent)
{
    var arrCompoList = new Array();
	    arrCompoList = strCompoList.split("$");
	if(this.gfn_isNull(objParent))
	{
		objParent = "this";
	}
	
	for(var idx = 0; idx < arrCompoList.length; idx++) 
	{
		eval(objParent + "." +arrCompoList[idx]).set_cssclass("sta_WF_thFirstEm");
	}
	
};


/**
 * @class 특수문자가 있는지 Check한다. <br>
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfn_isSpecialChar = function(strValue)
{
	var retVal = false;
	if(strValue.search(/\W|\s/g) > -1) retVal = true;

	return retVal;
};


 /**
 * @class 주민등록번호 여부를 확인한다. <br>
 * @param {String} sJuminNo - 입력문자열(주민번호 13자리)
 * @return {Boolean}
 */
pForm.gfn_isSSN = function(sJuminNo)
{
	var birthYear = this.gfn_getBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	var birthMonth = sJuminNo.substr(2, 2)-1;
	var birthDate = sJuminNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	}else{
		return true;
	}
};
 

/**
 * @class 사업자 등록번호 여부를 확인한다.
 * @param {String} strCustNo - 입력문자열(등록번호10자리)
 * @return {Boolean}
 */
pForm.gfn_isBzIdNo = function(strCustNo)
{
	if (strCustNo.length != 10) return false;
	else {
		
		var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
		var tmpcustNo, i, chkSum=0, c2, remander;

		for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);

		c2 = "0" + (checkID[8] * strCustNo.charAt(8));
		c2 = c2.substring(c2.length - 2, c2.length);

		chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

		remander = (10 - (chkSum % 10)) % 10 ;

		if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
		return false;
	}

	return true;
};

/**
 * @class 카드번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(카드번호13자리)
 * @return {Boolean}
 */
pForm.gfn_isCardNo = function(strNo)
{
	if (strNo.length < 13 || strNo.length > 19 || !isNumber(strNo)) return false;
	
	var sum = 0;
	var buf = new Array();
	
	for (var i=0; i<strNo.length; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	var temp;
	for (var i=buf.length-1, j=0; i>=0; i--, j++) {
		temp = buf[i] * ((j%2) + 1);
		if (temp >= 10) {
			temp = temp - 9;
		}
		sum += temp;
	}
	
	if ((sum % 10) == 0) {
		return true;
	} else {
		return false;
	}
};

/**
 * @class E-메일 형식에 맞는지 Check한다.
 * @param {String} strValue
 * @return {Boolean}
 */
pForm.gfn_isEmail = function(strValue)
{
	var retVal = false;
	var sTmp = "";
	var sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

	var regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if( sTmp == null ) {
		retVal = false;
	} else {

		if( ( sTmp.index == 0 ) && (sTmp[0].length == strValue.length ) ) {
			retVal = true;
		} else {
			retVal = false;
		}
	}
	return retVal;
};

/**
 * @class 외국인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(등록번호13자리)
 * @return {Boolean}
 */
pForm.gfn_isFrnrIdNo = function(strNo)
{
	if (strNo.length != 13 || !isNumber(strNo)) return false;
	
	var month = Number(strNo.substr(2, 2));
	var day	  = Number(strNo.substr(4, 2));
		
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;
	
	var sum = 0;
	var odd = 0;
	var buf = array(13);
	var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	if (buf[11] < 6) return false;
	
	odd = buf[7] * 10 + buf[8];
	if((odd%2) != 0) return false;
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = 11 - (sum % 11);
	
	if (sum >= 10) sum -= 10;
	sum += 2;
	if (sum >= 10) sum -= 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
 * @class 법인 등록번호 여부를 확인한다. <br>
 * @param {String} strNo - 입력문자열(법인번호13자리)
 * @return {Boolean}
 */
pForm.gfn_isFirmIdNo = function(strNo)
{
	if (strNo.length != 13 || !isNumber(strNo)) return false;
	
	var sum = 0;
	var buf = new Array(13);
	var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = (10 - (sum % 10)) % 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/*
 * 날짜 기본 Date xValidation 체크
 * @param {String} strFrDate - 시작일자
          {String} strFoDate - 종료일자
 * @return {Boolean}
 */
pForm.gfn_getDefaultDateChk = function (strFrDate,strFoDate)
{
	// 시작일자 오류
	if (!this.gfn_isNull(strFrDate)) 
	{
		if (!this.gfn_isDate(strFrDate)) 
		{
			this.gfn_alert("MSG00018","날짜체크","시작날짜","information"); 				// {0} 형식이 아닙니다
			return false;
		}
	} else 
	{
		this.gfn_alert("MSG00018","날짜체크","시작날짜","information");						// {0} 형식이 아닙니다
		return false;
	}
	
	// 종료일자 오류
	if (!this.gfn_isNull(strFoDate))
	{
		if (!this.gfn_isDate(strFoDate)) 
		{
			this.gfn_alert("MSG00018","날짜체크","종료날짜","information"); 	            // {0} 형식이 아닙니다
			return false;
		}
	}else 
	{
		this.gfn_alert("MSG00018","날짜체크","종료날짜","information"); 	    			// {0} 형식이 아닙니다
		return false;
	}
	
	
    // 일자 체크 	
    if ((!this.gfn_isNull(strFrDate)) && (!this.gfn_isNull(strFoDate))) 
	{
		if (strFrDate > strFoDate) 
		{
			this.gfn_alert("MSG00019","날짜체크","시작일자,종료일자","information"); 	//	{0}는(은) {1}보다 작거나 같아야 합니다.
			
			return false;
		}
	}
	return true;
	
}; 

pForm = null;
