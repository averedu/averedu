var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 == data 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_isUpdate    	: 수정/신규/삭제 변경사항 체크
 ● gfn_isUpdateD   	: 삭제를 제외한 수정/신규 변경사항 체크
 ● gfn_reSetDs     	: 그리드 변경시 이전행의 데이터가 insert이면 삭제를 하고 update이면 이전행을 복구.
 ● gfn_emptyRowDel  	: 데이터셋의 empty row는 삭제.
 ● gfn_getDataset  	: 해당 데이터셋명으로 검색하여 데이터셋을 찾아서 리턴 없으면 -1을 반환
 ● gfn_dsIsUpdated 	: Dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 ● gfn_dsNFIsUpdated 	: Dataset의 Row 중에서 변경된 내용(필터링 되어있는 row 포함)이 있는지 여부를 판단하는 함수
 ● gfn_isUpdateColumn  : dataSet의 Row 에서 해당 칼럼이 변경되었는지
 ● gfn_isCheckDs       : 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
 */
/**********************************************************************************
 * Function Name: gfn_isUpdate
 * Description  : 수정/신규/삭제 변경사항 체크
 * Arguments    : Dataset(데이타셋)
 * Return       : true/false
 **********************************************************************************/ 
pForm.gfn_isUpdate = function(dsObj)
{
	var lv_nRowCnt;
	var lv_nRowType;
	lv_nRowCnt = dsObj.getRowCount();
	for(var i=0; i<lv_nRowCnt; i++) 
	{
		lv_nRowType = dsObj.getRowType(i);
		if(lv_nRowType != 1) 
		{
			return true;
		}
	}
	if (dsObj.getDeletedRowCount() > 0) 
	{
		return true;
	}
	return false;
};

/**********************************************************************************
 * Function Name: gfn_isUpdateD
 * Description  : 삭제를 제외한 수정/신규 변경사항 체크
 * Arguments    : Dataset(데이타셋)
 * Return       : true/false
 **********************************************************************************/ 
pForm.gfn_isUpdateD = function(dsObj)
{
	var lv_nRowCnt;
	var lv_nRowType;
	
	lv_nRowCnt = dsObj.getRowCount();
	
	for(var i=0; i<lv_nRowCnt; i++) 
	{
		lv_nRowType = dsObj.getRowType(i);
		if(lv_nRowType != 1) 
		{
			return true;
		}
	}
	return false;
};

/**********************************************************************************
 * Function Name: gfn_reSetDs
 * Description  : 그리드 변경시 이전행의 데이터가 insert이면 삭제를 하고 update이면 이전행을 복구.
 * Arguments    : obj    => Object(현재그리드)
                  setRow = > preRow 이전행
 * Return       : N/A
 **********************************************************************************/  
pForm.gfn_reSetDs = function(obj,setRow)
{
	var colCnt 	= obj.getColCount();
	var strType = obj.getRowType(setRow);
	if(strType == 2)
	{
		obj.deleteRow(setRow);
		
	}else if(strType == 4) 
	{
		for(var idx = 0; idx < colCnt; idx++)
		{
			obj.setColumn(setRow, idx, obj.getOrgColumn(setRow, idx));
		}
	}
	obj.applyChange();
};
/**********************************************************************************
 * Function Name: fn_emptyRowDel
 * Description  : 데이터셋의 empty row는 삭제.
 * Arguments    : obj    => objDs(데이터셋명)
 * Return       : N/A
 **********************************************************************************/   
pForm.gfn_emptyRowDel = function(objDs)
{
	var sColNm = objDs.getColID(0);
	var nStrRow = 0;
	var nEndRow = objDs.rowcount-1;
	var nFlag;
	
	objDs.set_enableevent(false);
	objDs.filter(sColNm +"== '' || "+sColNm+"== null", nEndRow, nStrRow);	
	nEndRow = objDs.rowcount-1;
	nColCnt = objDs.colcount;
	
	for (var i=nEndRow; i>=0; i--)                                 //빈Row
	{    	
		nFlag = true;
		for (var j=0; j<nColCnt; j++) 
		{                                                          //컬럼
			if (!this.gfn_isNull(objDs.getColumn(i, j)) ) 
			{
				nFlag = false;
				break;
			}
		}
		
		if (nFlag) 
		{ 
			objDs.deleteRow(i); 
		}		
	}
	
	objDs.filter("");
	objDs.set_enableevent(true);
};

/**********************************************************************************
 * Function Name: gfn_getDataset
 * Description  : 해당 데이터셋명으로 검색하여 데이터셋을 찾아서 리턴 없으면 -1을 반환
 * Arguments    : String    => sDsNm(데이터셋명)
 * Return       : Dataset(객체)
 **********************************************************************************/    
pForm.gfn_getDataset = function(sDsNm)
{		
	return eval("this."+sDsNm);
};

/**********************************************************************************
 * Function Name: gfn_dsIsUpdated
 * Description  : Dataset의 Row 중에서 변경된 내용이 있는지 여부를 판단하는 함수
 * Arguments    : SobjDs     - 확인 대상 Dataset
                  bDelete   - Delete상태 포함 유무( true:포함, false:제외)
 * Return       : boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
 **********************************************************************************/   
pForm.gfn_dsIsUpdated = function (objDs, bDelete)
{
	if(objDs instanceof Dataset)
	{
		if(this.gfn_isNull(bDelete)) 
		{
			bDelete = true;
		}
		
		if(bDelete)
		{
			if (objDs.getDeletedRowCount() > 0)	
			{
				return true;
			}
		}
			
		if (objDs.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1)
		{
			return true;
		}
	}
	return false;
};

/**********************************************************************************
 * Function Name: gfn_dsNFIsUpdated
 * Description  : Dataset의 Row 중에서 변경된 내용(필터링 되어있는 row 포함)이 있는지 여부를 판단하는 함수
 * Arguments    : SobjDs     - 확인 대상 Dataset
                  bDelete   - Delete상태 포함 유무( true:포함, false:제외)
 * Return       : boolean true = 변경 된 데이터가 존재/false = 변경 된 데이터가 없음
 **********************************************************************************/ 
pForm.gfn_dsNFIsUpdated = function (objDs, bDelete)
{
	if(objDs instanceof Dataset)
	{
		if(this.gfn_isNull(bDelete)) 
		{
			bDelete = true;
		}
		if(bDelete)
		{
			var rowCnt = objDs.getRowCountNF();
			for(var i=0; i<rowCnt; i++)
			{				
				if (objDs.getRowTypeNF(i) == 8)	
				{
					return true;
				}
			}			
		}
			
		if (objDs.findRowExprNF("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)||(this.getRowType(rowidx)==Dataset.ROWTYPE_DELETE)") > -1)
		{
			return true;
		}
	}
	
	return false;
};

 
/********************************************************************************
 * Function Name	: gfn_isUpdateColumn
 * Description		: dataSet의 Row 에서 해당 칼럼이 변경되었는지
 *					  판단하는 함수
 * Arguments		: objDs(DataSet), nRow, Column
 * Return 			: true = 변경 된 데이터가 존재
 *					  false = 변경 된 데이터가 없음
 ********************************************************************************/
pForm.gfn_isUpdateColumn = function (objDs, nRow, Column)
{
	if(objDs.getRowType(nRow) == 2) 
	{
		if (this.gfn_isNull(objDs.getColumn(nRow, Column))) 
		{
			return false;
		}
	}else 
	{
		if (objDs.getColumn(nRow, Column) == objDs.getOrgColumn(nRow, Column)) 
		{
			return false;
		}
	}
	return true;
};

 /*******************************************************************************
 * Function Name: gfn_isCheckDs
 * Description	: 해당 데이터셋명으로 검색하여 데이터셋이 없으면 데이터셋을 생성
 * Arguments	: sDsNm - 데이터셋명
 * Return 		: Dataset
 ********************************************************************************/
pForm.gfn_isCheckDs = function(sDsNm)
{
	 var oDs = this.gfn_getDataset(sDsNm);
	 
	 if(this.gfn_isNull(oDs))
	 {
		 oDs = new Dataset;
		 oDs.name = sDsNm;
		 this.addChild(sDsNm, oDs);
	 }
	 return oDs;
};

 /*******************************************************************************
 * Function Name: gfn_updateRowPosition
 * Description	: 데이터셋의 변경된 row 중 현재 rowposition를 구함
 * Arguments	: objDs - 데이터셋명
 * Return 		: Dataset
 ********************************************************************************/
pForm.gfn_updateRowPosition = function(objDs)
{
	var uRowPosition = -1;
	
	for(var i = 0; i <= objDs.rowposition; i++){ 
		switch(objDs.getRowType(i) ){ 
		       case Dataset.ROWTYPE_INSERT:
			   case Dataset.ROWTYPE_UPDATE:
			        uRowPosition++;
		}
	}
	
	return uRowPosition;
};

pForm = null;