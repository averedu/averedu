var pForm = nexacro.Form.prototype;

/*
 ===============================================================================
 ==  Grid관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_setGrid                 : 화면 오픈시 그리드 기본셋팅 처리.
 ● gfn_createPopupMenu         : 화면 오픈시 팝업메뉴을 생성 함수(gds_popupMenu = 메뉴와메칭).
 ● gfn_grid_onrbuttondown      : 그리드에 오른쪽 마우스 클릭시 팝업메뉴 활성화 이벤트
 ● gfn_Popupmenu_onmenuclick   : 그리드에 오른쪽 마우스 클릭시 팝업메뉴 항목중 한항목을 선택시 발생하는 이벤트(메뉴팝업 이벤트)
 ● _gfn_cellFix         	    : 그리드 우클릭 팝업(POPUPMENU) 내부함수(공통 그리드 틀 고정 함수).
 ● _gfn_cellFree         	    : 그리드 우클릭 팝업(POPUPMENU) 내부함수(공통 그리드 틀 고정 해제 함수).
 ● _gfn_GridFilter             : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (셀필터=>_gfn_GridFilter)
 ● gfn_GridFilterCallback      : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (그리드 필터 팝업 콜백)
 ● _gfn_GridCellFilterFree     : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (그리드 셀필터해제)
 ● _gfn_cellReplace            : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (셀 찾기)    
 ● gfn_findCallback            : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (그리드에 찾기 팝업 콜백)  
 ● gfn_clearInit               : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (그리드에 필터및 소팅 틀고정 설정 초기화)  
 ● gfn_findGridText            : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (주어진 문자열을 그리드에서 찾는다.)     
 ● _gfn_compareFindText        : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (주어진 행, 셀 인덱스에 해당하는 그리드 데이터와=>문자열을 비교하여 찾아진 결과를 반환)
 ● gfn_getRowCount         	: 그리드 리스트의 COUNT를 구처리하는 함수.
 ● gfn_checkAll            	: 그리드 checkbax all check선택/all check 취소처리함수.
 ● gfn_gridSort     	    	: 그리드 Multisorting(멀티소팅) 시 처리하는함수.
 ● gfn_setChkSortDs        	: 그리드 Multisorting시 임시로 저장하는 dataset 함수.
 ● gfn_keyString           	: 멀티소팅시 실제로 SORTING 기능을 처리하는 함수.
 ● gfn_clearSortAll        	: 그리드에 모든 소팅을 초기화 클리어 시킨다.
 ● gfn_ckGrdObj        		: 그리드 obj 체크하고 반환한다.
 ● gfn_objComp             	: oParent form 경로의 sCompName object 반환
 ● gfn_path       				: 부모 오브젝트를 리턴한다.
 ● gfn_typeof        			: object 받아 어떤 오브젝트 인지 알수있는 함수 
 ● gfn_calendarMonthByGrid 	: grid expandbutton 클릭 시, 월달력 팝업 호출
 ● _gfn_calMonthGrid_Callback  : 월달력팝업 내부함수/popupdiv에 콜백함수
 ● gfn_setFocusGrid        	: grid setFoucs 이동한다. 
 ● gfn_copyAndPastenGrid       : 그리드키다운 이벤트 [cellcopypaste]
 ● _gfn_gridCopyEventForRuntime: nexacro or ie일경우에만 복사 (Ctrl + C) 
 ● _gfn_gridCopyEventForChrome : chrome일경우에만 복사 (Ctrl + C) 
 ● _gfn_gridPasteEvent         : paste 복사 한거를 붙여넣기(Ctrl + V) 
 ● _gfn_girdGetPasteData       : paste (복사)할 데이터생성
 ● _gfn_createTextarea         : cell copy and paste (크롬용 텍스트에어리어생성)
 ● gfn_setGridCheckSingle      : Grid 싱글체크기능(row체크시 그외 row 체크해제) 옵션버튼 처럼사용
  */

pForm.CONST_ASC_MARK  	= "▲";             // 멀티 SORTING 헤더에 그리드 표시에 사용.
pForm.CONST_DESC_MARK 	= "▼";				// 멀티 SORTING 헤더에 그리드 표시에 사용.
/**********************************************************************************
 * Function Name: gfn_setGrid(grid)
 * Description  : 화면 오픈시 그리드 기본셋팅 처리
 * Arguments    : Object(objGrid:대상그리드)  : grid
 * Return       : N/A
**********************************************************************************/ 
pForm.gfn_setGrid = function(objGrid)
{
	// grid에 바인드된 Dataset이 없는 경우
	if (this.gfn_isNull(objGrid.binddataset))
	{
		return false;
	}
	
	//찾기상태추가(defualt==true)
	if (this.gfn_isNull(objGrid.replaceable)) 
	{
		objGrid.replaceable = "true";
	}
	// 기본셋팅해야 할값 =>  그리드에 콤보등이 선택 시 데이터셋에 update되도록 수정
	objGrid.set_autoenter("select");
	objGrid.set_autoupdatetype("itemselect");
	
	this.gfn_createPopupMenu(objGrid);
	// 그리드 우클릭 기능 추가
	objGrid.addEventHandler("onrbuttondown", this.gfn_grid_onrbuttondown, this);
	
	// 디자인 현재 포맷저장
	objGrid.orgformat2  = objGrid.getFormatString();
	
	// 현재 포맷저장
	objGrid.orgformat    = objGrid.getCurFormatString();
	
	//현재 keystring 저장
	if(!this.gfn_isNull(objGrid.getBindDataset()))
	{
		objGrid.orgKeystring = objGrid.getBindDataset().keystring;
	}else
	{
		objGrid.orgKeystring = "";
	}
}
/**********************************************************************************
 * Function Name: gfn_createPopupMenu(grid)
 * Description  : 화면 오픈시 팝업메뉴를 생성하는 함수(gds_popupMenu = 메뉴와메칭).
 * Arguments    : Object(objGrid:대상그리드)  : grid
 * Return       : N/A
**********************************************************************************/    
pForm.gfn_createPopupMenu = function(objGrid)
{
	var objApp = nexacro.getApplication();
	
	if( objGrid.replaceable == "false")
	{
		var nRow = objApp.gds_popupMenu.findRow("id","replace");
		objApp.gds_popupMenu.setColumn(nRow, "enable", "false");
	}
	
	var sPopMenu      = "popMenu_"+objGrid.name+"_"+this.gfn_rand(0,123456);
	var objPopMenu    = new PopupMenu(sPopMenu, 0, 0, 100, 100);
	//var objParentForm = objGrid.parent;
	this.addChild(objPopMenu.name, objPopMenu);	
	
	objPopMenu.set_innerdataset("gds_popupMenu");
	objPopMenu.set_captioncolumn("caption");
	objPopMenu.set_enablecolumn("enable");
	objPopMenu.set_idcolumn("id");
	objPopMenu.set_levelcolumn("level");
	objPopMenu.set_itemheight(26);
 	objPopMenu.addEventHandler("onmenuclick", this.gfn_Popupmenu_onmenuclick, this);
	objPopMenu.show();
	
	objPopMenu.grid 	= objGrid;      // PopupMen 사용할 유저변수에 이미정의된 그리드 담는다.              
	objGrid.popupMenu 	= objPopMenu;   // 그리드에 사용할 유저변수에 동적생성한 PopupMen를 담는다.
};

/**********************************************************************************
 * Function Name: gfn_grid_onrbuttondown(grid,e)
 * Description  : 그리드에 오른쪽 마우스 클릭시 팝업메뉴 활성화 이벤트
 * Arguments    : Object(objGrid:대상그리드)  : grid
                  event (해당그리드 이벤트)  : e 
 * Return       : N/A
 * Example      : this.gfnGrid_onrbuttondown(this.grdMain, nexacro.GridClickEventInfo);	
 **********************************************************************************/   
pForm.gfn_grid_onrbuttondown = function(objGrid, e)
{
	
	if(e.row > -1  || e.row == -9)
	{
		return false;
	}
	var objApp 			= nexacro.getApplication();     // 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드입니다.
	var objDs 			= objGrid.getBindDataset();     // 현재 그리드에 바인드 데이타셋(dataset) 
	var objPopupMenu 	= objApp.gds_popupMenu;         // 오른쪽 클릭시 메뉴로 나옹 데이타셋에 내용(공통 글로발 데이타셋)
	
	if(objDs.getCountNF() == 0)                         // 필터링 되어 보이지 않는 Row 를 포함한 범위에서 특정 Column 에 데이터가 있는 Row 의 갯수를 반환하는 메소드입니다.
	{
		objGrid.popupMenu.set_enablecolumn("userData"); // innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다. 
 
	}else
	{
		objGrid.popupMenu.set_enablecolumn("enable");	 // innerdataset 속성에 설정된 DataSet 의 Column 중 메뉴 아이템의 활성화 여부가 정의된 Column을 설정하는 속성입니다. 
	}
	// 대상 그리드와 셀 정보를 추가 =>클릭된 그리드의 Col Index 값을 팝업메뉴 UserPropery로 설정
	objGrid.popupMenu.grid 		= objGrid;               // 그리드
	objGrid.popupMenu.cellindex = e.cell;                // 그리드에 셀
	objGrid.popupMenu.rowindex 	= e.row;                 // 그리드에 행
	objGrid.popupMenu.targetCol = e.col;                 // 그리드에 컬럼

	var x = nexacro.toNumber(nexacro.System.getCursorX()) - nexacro.toNumber(system.clientToScreenX(objApp.mainframe, 0));  // 팝업메뉴 x좌표를 표시
	var y = nexacro.toNumber(nexacro.System.getCursorY()) - nexacro.toNumber(system.clientToScreenY(objApp.mainframe, 0));  // 팝업메뉴 y좌표를 표시

	objGrid.popupMenu.trackPopup(x, y);                                                                                     //팝업을 활성화한다.      
};

/**********************************************************************************
 * Function Name: gfn_Popupmenu_onmenuclick(grid,e) 
 * Description  : 그리드에 오른쪽 마우스 클릭시 팝업메뉴 항목중 한 항목을 선택시 발생하는 이벤트(메뉴팝업 이벤트)
 * Arguments    : Object(objGrid:대상그리드)           : grid
                  event (해당그리드팝업메뉴 이벤트)  : e 
 * Return       : N/A
 * Example      : this.gfnPopupmenu_onmenuclick(this.grdMain, nexacro.MenuClickEventInfo);	
 **********************************************************************************/   
pForm.gfn_Popupmenu_onmenuclick = function(objGrid, e)
{	
	var selectId 		= e.id;                                	// 현재 선택한 ID(gds_popupMenu 않에 있는 컬럼 id)
	var grid 			= objGrid.grid;                 		// 현재 선택한 그리드
	var nCellIndex 		= objGrid.cellindex;   					// 현재 선택한 그리드에  셀 인덱스 값 
	var nRowIndex 		= objGrid.rowindex;    					// 현재 선택한 그리드에  행 인텍스 값
	var nColIndex       = objGrid.targetCol;   					// 현재 선택한 그리드에  컬럼 인텍스 값
		
	if( selectId == "shapeFix")
	{
		this.fv_CellIndex 	= nCellIndex;
		this._gfn_cellFix(grid, this.fv_CellIndex, nRowIndex);	// 틀 고정   
	
	}else if( selectId == "shapeFree")
	{		
		this._gfn_cellFree(grid);                               // 틀 고정해제
	
	} else if( selectId == "filter")                               
	{
	    this._gfn_GridFilter(grid);                              // 필터
		
	} else if( selectId ==  "filterfree")						
	{	
		this._gfn_GridCellFilterFree(grid);                      // 필터해제
	
	}else if( selectId == "replace")
	{
		 this._gfn_cellReplace(grid,nRowIndex);                     // 찾기
	
	}else if( selectId == "formatInit")
	{
		this.gfn_clearInit(grid);	                             // 초기화 함수
	}	
};

/**********************************************************************************
 * Function Name: _gfn_cellFix
 * Description  : 그리드에 틀고정
 * Arguments    : Object(objGrid:대상그리드)    : grid
                  Number(nCell  : 대상 헤드셀)  : cell 
 * Return       : N/A
 **********************************************************************************/   
pForm._gfn_cellFix = function(objGrid, nCell)
{
	var nCell = objGrid.popupMenu.cellindex;
	var nRow  = objGrid.popupMenu.rowindex;
	
	if(nCell == -1) 
	{
		return false;
	}
	var nRowHead = objGrid.getCellProperty("head", nCell, "row");
	var nColHead = objGrid.getCellProperty("head", nCell, "col");
	
	if(nRowHead > 0 ) 
	{
		this.gfn_alert("멀티헤더인 경우, 상위헤더를 선택하세요.","멀티해더처리","","information");
		return false;
	}
	
	objGrid._fixcol = nColHead;
	if(nRowHead == 0)
	{
		var nFixCol = objGrid.getCellProperty("head", nCell, "col");
			nFixCol = nexacro.toNumber(nFixCol + objGrid.getCellProperty("head", nCell, "colspan")-1);
			
		var nColCnt = objGrid.getFormatColCount();
	
		//틀고정값 초기화
		for( var p = nColCnt-1; p >= 0 ; p-- ) 
		{			
			objGrid.setFormatColProperty(p, "band", "body");
			objGrid.setCellProperty("head", r, "background", "");
		}
		
		//틀고정 설정
		for( var r = 0 ; r <= nFixCol ; r++) 
		{							
			objGrid.setFormatColProperty(r, "band", "left");
		}		
		
		//Head Class설정
		for (var i=0; i<objGrid.getCellCount("head"); i++) 
		{
			var nCol = nexacro.toNumber(objGrid.getCellProperty("head", i, "col"));
			if ( nCol <= nFixCol) 
			{
				objGrid.setCellProperty("head", i, "background", "#cfd4d9");				
			}else
			{
				objGrid.setCellProperty("head", i, "background", "");
			}
		}
		
		//Body Class설정
		for(var u=0; u<objGrid.getCellCount("body"); u++) 
		{
			if (nexacro.toNumber(objGrid.getCellProperty("body", u, "col")) <= nFixCol) 
			{
				objGrid.setCellProperty( "body", u, "background", "#cfd4d9");
			} else
			{
				objGrid.setCellProperty( "body", u, "background", "");				
			}
		}
	}
};

/**********************************************************************************
 * Function Name: _gfn_cellFree
 * Description  : 그리드에 틀고정 해제
 * Arguments    : Object(objGrid:대상그리드) : grid
 * Return       : N/A
 **********************************************************************************/  
pForm._gfn_cellFree = function(objGrid)
{
	var nColCnt = objGrid.getFormatColCount();
	
	for( var p = nColCnt-1; p >= 0 ; p-- ) 
	{		
		objGrid.setFormatColProperty(p, "band", "body");                  // 틀고정 초기화
	}
	
    for(var t=0; t<objGrid.getCellCount("head"); t++) 
	{
		objGrid.setCellProperty("head", t, "background", "");             // Head Class 초기화
	}
	
	for(var y=0; y<objGrid.getCellCount("body"); y++) 
	{	
		objGrid.setCellProperty("body", y, "background", "");	          // Body Class 초기화	
	}
	
	objGrid._fixcol = 0;
};
/**********************************************************************************
 * Function Name: _gfn_GridFilter
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (셀필터=>_gfn_GridFilter)
 * Arguments    : {Object} objGrid - 대상그리드	
 * Return       : N/A
 **********************************************************************************/   
pForm._gfn_GridFilter = function(objGrid)
{
	
	var sTitle 			= "데이터 필터 설정";
	var sPopId 			= "COMM000012P";
	var sUrl 			= "com::COMM000012P.xfdl";
	var oArg 			= {pvGrid:objGrid};      	                 // 넘기는 인자값
	var sPopupCallBack 	= "gfn_GridFilterCallback";
	var oOption 		= {title:sTitle};	                         //top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	this.gfn_openPopup( sPopId
					  , sUrl
					  , oArg
					  , sPopupCallBack
					  , oOption);
};

/**********************************************************************************
 * Function Name: gfn_GridFilterCallback
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (그리드 필터 팝업 콜백)
 * Arguments    : {String} sid - popupid	
 *                {String} rtn - return value	 
 * Return       : N/A
 * Example      : this.gfnGridFilterCallback("TEST", "");	
 **********************************************************************************/  
pForm.gfn_GridFilterCallback = function (sid, rtn)
{
	//TODO
};
/**********************************************************************************
 * Function Name: _gfn_GridCellFilterFree
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부함수 (그리드 셀필터해제)
 * Arguments    : {Object} objGrid - 대상그리드 
 * Return       : N/A
 * Example      : this._gfn_GridCellFilterFree(this.grdMain);
 **********************************************************************************/  
pForm._gfn_GridCellFilterFree = function(objGrid)
{
	var objDs = objGrid.getBindDataset();
	objDs.set_filterstr("");
};

/**********************************************************************************
 * Function Name: _gfn_cellReplace
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (셀 찾기)    
 * Arguments    : {Object} objGrid    - 대상그리드 
 *                {Integer} nRowIndex - 선택한 행 
 * Return       : N/A
 * Example      : this._gfn_cellReplace(this.grdMain,nRowIndex);	
 **********************************************************************************/   
pForm._gfn_cellReplace = function (objGrid, nRowIndex)
{
	var orgselecttype  = objGrid.selecttype;
	
	var sTitle 			= "데이터 찾기";
	var sPopId 			= "COMM000013P";
	var sUrl 			= "com::COMM000013P.xfdl";
	var oArg 			= { pvGrid:objGrid
	                      , pvStrartRow:nRowIndex
						  , pvSelectType:orgselecttype
						  , pvCell:objGrid.popupMenu.cellindex};      	             // 넘기는 인자값
	var sPopupCallBack 	= "gfn_findCallback";
	var oOption 		= { title:sTitle
	                       ,overlaycolor:true};	                                      //top, left를 지정하지 않으면 가운데정렬 //"top=20,left=370"
	this.gfn_openPopup( sPopId
					  , sUrl
					  , oArg
					  , sPopupCallBack
					  , oOption);

};

/**********************************************************************************
 * Function Name: gfn_findCallback
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (그리드에 찾기 팝업 콜백)    
 * Arguments    : {String} sid - popupid	
 *                {String} rtn - return value	 
 * Return       : N/A
 * Example      : this.gfn_findCallback("TEST", "");		
 **********************************************************************************/ 
pForm.gfn_findCallback = function(sid, rtn)
{
	//trace(sid+" , "+rtn);
};

/**********************************************************************************
 * Function Name: gfn_clearInit
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (그리드에 필터및 소팅 틀고정 설정 초기화)     
 * Arguments    : {Object} Grid
 * Return       : N/A
 * Example      : this.gfn_clearInit(this.Grid00);		
 **********************************************************************************/  
pForm.gfn_clearInit = function(obj)
{
	obj.set_formats("<Formats>" + obj.orgformat2 + "</Formats>");
	var objDs = obj.getBindDataset();
	objDs.set_filterstr("");
	objDs.set_keystring(obj.orgKeystring);
};

/**********************************************************************************
 * Function Name: gfn_findGridText
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (주어진 문자열을 그리드에서 찾는다.)     
 * Arguments    : {Object} grid - 대상그리드
 *                {String} findText - 찾을 문자열
 *				  {Object} option - 찾기옵션
 * Return       : {Object} 찾은 열과행
 * Example      : this.gfn_findGridText(this.fv_grid, txt, option);	
 **********************************************************************************/   
pForm.gfn_findGridText = function (grid, findText, option)
{
	grid.lastFindText   = findText;
	grid.lastFindOption = option;

	// 찾을 옵션
	var direction = option.direction;
	var position  = option.position;
	var scope     = option.scope;
	var condition = option.condition;
	var strict    = option.strict;

	var dataset   = grid.getBindDataset();
	var startCell = ( position == "current" ? grid.currentcell : grid.lastFindCell );
	var startRow  = ( position == "current" ? grid.currentrow : grid.lastFindRow );
	
	// 바꾸기에서 호출시 (option.cell 은 바꾸기에서만 지정)
	if ( scope == "col" && !this.gfn_isNull(option.cell) )
	{
		startCell = option.cell;
	}
	
	var findRow     = findCell = -1;
	var rowCnt      = dataset.rowcount;
	var bodyCellCnt = grid.getCellCount("body");
			
	// 대소문자 구분
	if ( !strict )
	{
		findText = findText.toUpperCase();			
	}
		
	if ( direction == "prev" )
	{
		startRow -= 1;	
		if ( startRow < 0 || grid.lastFindRow == -99)
		{
			startRow = rowCnt-1;
		}
	}
	else
	{
		startRow += 1;
		if ( startRow >= rowCnt || grid.lastFindRow == -99)
		{
			startRow = 0;
		}
	}
		
	var loopCnt = rowCnt;
	while ( loopCnt > 0 )
	{
		// 문자열 비교
		if ( this._gfn_compareFindText(grid, startRow, startCell, findText, condition, strict) )
		{
			findRow  = startRow;
			findCell = startCell;
			break;
		}
		
		// 방향 (이전, 다음)
		if ( direction == "prev" )
		{
			startRow -= 1;
			if ( startRow < 0 )
			{
				startRow = rowCnt-1;
			}				
		}
		else
		{
			startRow += 1;
			if ( startRow > (rowCnt-1))
			{
				startRow = 0;
			}
		}
		
		loopCnt--;
	}
	
	// 마지막 찾은 위치 지정
	// 팝업에서 찾을 방향을 "처음부터" 로 변경 시 초기화
	if ( findRow > -1 && findCell > -1 )
	{
		grid.lastFindRow  = findRow;
		grid.lastFindCell = findCell;
	}
	
	return [findRow, findCell];
};
 
/**********************************************************************************
 * Function Name: _gfn_compareFindText
 * Description  : 그리드 우클릭 팝업(POPUPMENU) 내부메뉴 (주어진 행, 셀 인덱스에 해당하는 그리드 데이터와)
 *                문자열을 비교하여 찾아진 결과를 반환
 * Arguments    : {Object} grid - 대상 Grid Component
 *                {Number} row - 찾을 행 인덱스
 *				  {Number} cell - 찾을 셀 인덱스
 *				  {String} findText - 찾을 문자열
 *                {String} condition - 찾을 조건(equal/inclusion)
 *                {Boolean} strict - 대소문자 구분 (true/false)
 * Return       : {Boolean} - 찾기 성공.
 * Example      : this._gfn_compareFindText(grid, startRow, startCell, findText, condition, strict); 
 **********************************************************************************/   
pForm._gfn_compareFindText = function(grid, row, cell, findText, condition, strict)
{
	var cellText = grid.getCellText(row, cell);
	if( this.gfn_isNull(cellText)) return;
	var displayType = grid.getCellProperty("body", cell, "displaytype");
		
	// displayType 이 normal일 경우
	// dataType 을 체크하여 displayType 을 변경
	if ( this.gfn_isNull(displayType) || displayType == "normal" )
	{
		var dataType = this.gfn_getBindColumnType(grid, cell);
		switch(dataType)
		{
			case 'INT' :
			case 'FLOAT' :
			case 'BIGDECIMAL' :
				displayType = "number";
				break;
			case 'DATE' :
			case 'DATETIME' :
			case 'TIME' :
				displayType = "date";
				break;
			default :
				displayType = "string";
		}
	}
	
	// currency 의 경우 원(￦) 표시와 역슬레시(\) 다르므로 제거 후 비교
	if ( displayType == "currency" )
	{
		var code = cellText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			cellText = cellText.substr(1);
		}
		
		code = findText.charCodeAt(0);
		if ( code == 65510 || code == 92 )
		{
			findText = findText.substr(1);
		}
	}

	// 대소문자 구분
	if ( !strict )
	{
		cellText = cellText.toUpperCase();
	}
	// 일치/포함
	if ( condition == "equal" )
	{
		if ( findText == cellText )
		{
			return true;
		}
	}else 
	{
		if ( cellText.indexOf(findText) > -1 )
		{			
			return true;
		}
	}

	return false;
};

/**********************************************************************************
 * Function Name: gfn_getRowCount
 * Description  : 그리드에 리스트 행에 갯수를 구하는 함수.
 * Arguments    : components(comobj) : 표시할 컴포넌트(static)
                  표출할 dataset    : 표출할 dataset
 * Return       : N/A
 **********************************************************************************/ 
pForm.gfn_getRowCount = function(comobj,ds)
{
 	comobj.set_text("[총 <fc v='red'><b v='true'>" + ds.getRowCount()+" </b></fc>건]");
};

/**********************************************************************************
 * Function Name: gfn_checkAll(obj,e,bUpdate)
 * Description  : 그리드 헤드 체크박스 체크시 전체를 체크하는 함수
 * Arguments    : grid(obj) : 표시할 컴포넌트(obj)
                  e(event)  : head(클릭이벤트)
 * Return       : N/A
 **********************************************************************************/ 
pForm.gfn_checkAll = function (obj, e, bUpdate)
{
	var strType;
	var vl_chk;
	var strVal;
	var strChkVal;
	var objDS;
	var nCell  		= e.cell;
	var nBdCell 	= e.cell;
	var nCol 		= e.col;
	var nSubCnt 	= obj.getSubCellCount("head",nCell);
	var nHeadCnt 	= obj.getCellCount("head");
	var nBodyCnt 	= obj.getCellCount("body");
	
	objDS  = obj.getBindDataset();	
	objDS.set_enableevent(false);	
	obj.set_enableredraw(false);
		
	if (nSubCnt > 0) 
	{	// Case Merge Cell	
		var nChkIdx = -1;
		for ( var i = 0; i < nSubCnt; i++)
		{
			strType = obj.getSubCellProperty("head", nCell, i,"displaytype");

			if(strType == "checkboxcontrol") 
			{
				nChkIdx =  i;
				break;
			}
		}
		
		if (nChkIdx == -1)
		{
			return;
		}

		// Head setting
		strVal = this.gfn_nvl(obj.getSubCellProperty("head", nCell, nChkIdx, "text"), "0");
		var sVal = strVal+"*";

		if (strVal == "0" || this.gfn_isNull(strVal) || sVal =="null*") //sVal =="null*"
		{  
			obj.setSubCellProperty("head",nCell,nChkIdx,"text", '1');
			vl_chk="1";
		} else 
		{	
			obj.setSubCellProperty("head",nCell,nChkIdx,"text", '0');
			vl_chk="0";
		}
		
		strChkVal = this.gfn_nvl(obj.getCellProperty("body", nBdCell, "text"), "");	
		strChkVal = strChkVal.replace("bind:", "");	
		alert(strChkVal);
		
	} else 
	{	
		strType = obj.getCellProperty("head",nCell, "displaytype");
		if(strType != "checkboxcontrol") 
		{
			return;
		}
		
		if(nHeadCnt != nBodyCnt)
		{
			var nBdCol;
			for(var i=0; i<nBodyCnt; i++)
			{
				nBdCol = obj.getCellProperty("body",i, "col");
				if(nBdCol == nCol)
				{
				   nBdCell = i;
				   continue;
				}
			}
		}

		// Head setting
		strVal = obj.getCellProperty("head", nCell, "text");	
		strChkVal = this.gfn_nvl(obj.getCellProperty("body", nBdCell, "text"),"");		
		strChkVal = strChkVal.replace("bind:", "");	
	
		if (strVal == "0" || this.gfn_isNull(strVal)) 
		{
			obj.setCellProperty("head", nCell, "text", '1');
			vl_chk="1";
		} else 
		{
			obj.setCellProperty("head", nCell, "text", '0');
			vl_chk="0";
		}	
	}
	
	if(this.gfn_isNull(bUpdate)) 
	{
		bUpdate = false;
	}
	// Body setting
	if(!bUpdate)
	{
		objDS.set_updatecontrol(false);
	}
	var nRowCnt = objDS.getRowCount();
	for(var i=0 ; i < nRowCnt; i++)
	{
		objDS.setColumn(i, strChkVal, vl_chk);
	}
	objDS.set_updatecontrol(true);

	objDS.set_enableevent(true);	
	obj.set_enableredraw(true);	
}

/**********************************************************************************
 * Function Name: gfn_setExpandCheckAll
 * Description  : 그리드 Head중 Text포함한 check box 를 클릭 이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수
 * Arguments    : Object(ogj:grid) : 그리드 객체
                  event 해들더(e)  : 클릭이벤트 핸들러	
 * Return       : N/A
 **********************************************************************************/ 
pForm.gfn_setExpandCheckAll = function (obj, e)
{
	if (obj.readonly == true){
		return; 
	}	
	
	var strVal    = "";
	var strChkCol = "";
	var dsObj     = "";
	
	dsObj = obj.getBindDataset();
		
	if (this.gfn_isNull(dsObj)){
		return;
	}
	strChkCol = this.gfn_nvl(obj.getCellProperty("body", e.col, "text"), "");
	strChkCol = strChkCol.split("bind:").join("");
	
	var strType = obj.getCellProperty("head", e.cell, "expandshow");
	if (strType != "show")
	{
		return;
	}
	
	// Head셋팅
	var sImg = obj.getCellProperty("head",e.cell,"expandimage"); 
	
	if(sImg.indexOf("chk_WF_Box_S") == -1)
	{
		obj.setCellProperty("head",e.cell,"expandimage","URL('theme://images/chk_WF_Box_S.png')");
		strVal = "1";
	}else
	{
		obj.setCellProperty("head",e.cell,"expandimage","URL('theme://images/chk_WF_Box.png')");
		strVal = "0";
	}
	
	// Body셋팅
	//dsObj.set_updatecontrol(false);
	dsObj.set_enableevent(false);
	for (var i=0; i<dsObj.rowcount; i++)
	{
		dsObj.setColumn(i, strChkCol, strVal);		
	}
	//dsObj.set_updatecontrol(true);
	dsObj.set_enableevent(true);
}

/**********************************************************************************
 * Function Name: gfn_gridSort
 * Description  : 그리드 더블클릭시 SORTING 처리하는 함수
 * Arguments    : Object(ogj:grid) : 그리드 객체
                  event 핸들러(e)  : 클릭이벤트 핸들러	
 * Return       : N/A
 **********************************************************************************/   
pForm.gfn_gridSort = function(obj, e)
{
    var lv_dsObj 	= this.gfn_setChkSortDs(obj);					// 멀티소팅에 사용할 데이타임시소팅
    var lv_dsBind 	= eval("this." +obj.binddataset);				// 현재연결된 bind dataset(dsMaster)
	if (lv_dsBind.rowcount == 0) 									// 데이타가 없으면 소팅을 않함.		
	{
		return false;	
    }
    
    var lv_sHeadText = obj.getCellText(-1,e.cell);					// head 선택한 cell 타이틀값을 보관

	if(lv_sHeadText.indexOf("chk") > -1) 
    {
		return false;
    }
	var lv_aBodyColId = (obj.getCellProperty("body", e.col,"text")).toString().split(":");	
	
	if(this.gfn_isNull(this.gfn_trim(lv_sHeadText[0])))
	{
		return false;
	}
	
	for(var i = 0; i < obj.getCellCount("head"); i++) 
	{
		if(this.gfn_isNull(obj.getCellText(-1, i)))
		{
			continue;
		}
		
		lv_sHeadText = obj.getCellText(-1, i);	
	
		if(i == e.cell)
		{
			if(lv_sHeadText.substr(lv_sHeadText.length-1) == this.CONST_ASC_MARK) 
			{
				obj.setCellProperty( "head", i, "text", lv_sHeadText.substr(0, lv_sHeadText.length - 1) + this.CONST_DESC_MARK);
               	var lv_nPos = lv_dsObj.findRow("head",lv_aBodyColId[1]);           
                lv_dsObj.setColumn(lv_nPos,"head",lv_aBodyColId[1]);
                lv_dsObj.setColumn(lv_nPos,"set","-");
                lv_dsObj.setColumn(lv_nPos,"mark",lv_sHeadText.substr(0, lv_sHeadText.length - 1) + this.CONST_DESC_MARK);
                lv_dsObj.setColumn(lv_nPos,"hindex",i);
			
			}else if (lv_sHeadText.substr(lv_sHeadText.length-1) == this.CONST_DESC_MARK) 
			{
				var lv_nPos 	  = lv_dsObj.findRow("head",lv_aBodyColId[1]);  
				if(lv_dsObj.deleteRow(lv_nPos))
				{
					obj.setCellProperty( "head", i, "text", lv_sHeadText.substr(0, lv_sHeadText.length - 1));	
				}
				
				/* 디셋팅/어셋딩으로 로만 표시할시 사용한다.
				obj.setCellProperty( "head", i, "text", lv_sHeadText.substr(0, lv_sHeadText.length - 1) + this.CONST_ASC_MARK);
				var lv_nPos = lv_dsObj.findRow("head",lv_aBodyColId[1]);                
                lv_dsObj.setColumn(lv_nPos,"head",lv_aBodyColId[1]);
                lv_dsObj.setColumn(lv_nPos,"set","+");
                lv_dsObj.setColumn(lv_nPos,"mark",lv_sHeadText.substr(0, lv_sHeadText.length - 1) + this.CONST_ASC_MARK);	
                lv_dsObj.setColumn(lv_nPos,"hindex",i);		
				*/
			
			}else 
			{
 				obj.setCellProperty( "head", i, "text", lv_sHeadText+this.CONST_ASC_MARK);
				var lv_nRow = lv_dsObj.findRow("head",lv_aBodyColId[1]);
                var lv_nPos;
                if(lv_nRow == "-1")
				{
					lv_nPos = lv_dsObj.addRow();
                }else
				{
					lv_nPos = lv_nRow;              
                }
                lv_dsObj.setColumn(lv_nPos,"head",lv_aBodyColId[1]);
                lv_dsObj.setColumn(lv_nPos,"set","+");
                lv_dsObj.setColumn(lv_nPos,"mark",lv_sHeadText+this.CONST_ASC_MARK);	
                lv_dsObj.setColumn(lv_nPos,"hindex",i);                			
			}
			lv_dsBind.set_enableevent(false);
			lv_dsBind.set_keystring("S:"+this.gfn_keyString(obj));	
			lv_dsBind.set_enableevent(true);
		}
	}
	
};

 /**********************************************************************************
 * Function Name: gfn_setChkSortDs
 * Description  : 멀티소팅시 임시 데이타셋으로 세팅
 * Arguments    : Object(ogj:grid) : 그리드 객체
 * Return       : 임시로 만든 멀티시 사용하는 데이타셋.
 **********************************************************************************/   
pForm.gfn_setChkSortDs = function(obj)
{
    var lv_dsObj;
    var lv_dsId = obj.sortDataset;
    
    if(this.gfn_isNull(lv_dsId))
    {
       var lv_dsId = "ds_"+obj.name+"_Sort";
       lv_dsObj = new Dataset;
       lv_dsObj.addColumn("head",	"string");
       lv_dsObj.addColumn("set",	"string");
       lv_dsObj.addColumn("mark",	"string");
       lv_dsObj.addColumn("hindex",	"string");
       this.addChild(lv_dsId,lv_dsObj);   
       obj.sortDataset = lv_dsId;
	}else
    {
       lv_dsObj = eval("this." + lv_dsId);
    }
    //trace(lv_dsObj.saveXML());
	return lv_dsObj;
};

 /**********************************************************************************
 * Function Name: gfn_keyString
 * Description  : 멀티소팅시 실제로 SORTING 기능을 처리하는 함수.
 * Arguments    : Object(ogj:grid) : 그리드 객체
 * Return       : String(조합소팅문자열)
 **********************************************************************************/    
pForm.gfn_keyString = function(obj)
{
    var lv_dsObj 		= this.gfn_setChkSortDs(obj);
    var lv_sSumParam 	= "";
    var lv_sParam 		= "";
	
	for(var m=0; m<lv_dsObj.rowcount; m++)
	{
	    lv_sParam 	  = lv_dsObj.getColumn(m,"set") + lv_dsObj.getColumn(m,"head");
		lv_sSumParam += lv_sParam;
		obj.setCellProperty( "head", lv_dsObj.getColumn(m,"hindex"), "text", lv_dsObj.getColumn(m,"mark"));
	}
	return lv_sSumParam;
};

 /**********************************************************************************
 * Function Name: gfn_clearSortAll
 * Description  : 그리드에 모든 소팅을 초기화 클리어 시킨다.
 * Arguments    : Object(ogj:grid) : 그리드 객체
 * Return       : N/A
 **********************************************************************************/  
pForm.gfn_clearSortAll = function(obj)
{
    var lv_dsObj  = this.gfn_setChkSortDs(obj);
	var lv_dsBind = this.gfn_getDataset(obj.binddataset);
	
	if (lv_dsBind.rowcount == 0) 
	{
		return false;
	}
	
	var nColCnt = obj.getCellCount("head");
	var sRepText;

	for (var ii = 0; ii < nColCnt; ii++) 
	{
		if(this.gfn_isNull(obj.getCellProperty("head", ii, "text")))
		{
			continue;
		}
		sRepText = obj.getCellProperty("head", ii, "text").split(this.CONST_ASC_MARK).join("").split(this.CONST_DESC_MARK).join("");
		obj.setCellProperty("head", ii, "text", sRepText);
	}
	
	lv_dsBind.set_keystring("");
	lv_dsObj.clearData();
};

 /**********************************************************************************
 * Function Name: gfn_ckGrdObj(sGrdName, objGrid)
 * Description  : 그리드 obj 체크하고 반환한다.
 * Arguments    : sGrdName 대상 그리드 명
                : objGrid  그리드 object
 * Return       : grid obj
 **********************************************************************************/ 
pForm.gfn_ckGrdObj = function(sGrdName, objGrid)
{
	var _cnt = 0;
	var _objGrd;
	var _formObj = this.components;
	
	//_cnt 존재여부만 확인
	_cnt = this.gfn_isComp(_formObj, sGrdName);

	if(_cnt > 0)
	{ 
		var oParent = this.gfn_path(objGrid);
		
		if(!this.gfn_isNull(oParent))
		{
			_objGrd = this.gfn_objComp(oParent, sGrdName);			
		} else 
		{
			_objGrd = eval("this."+sGrdName);
		}	
	
	} else
	{
		_objGrd = new Grid();
		_objGrd.init(sGrdName, 0, 0, 0, 0);

		//부모에 생성하면 innerDataset을 참조할 수 없음. 그래서 해당화면 생성을 해야함.
		var oParent = this.gfn_path(objGrid);

		if(!this.gfn_isNull(oParent))
		{
			oParent.addChild(sGrdName, _objGrd); 
		}else
		{
			this.addChild(sGrdName, _objGrd); 
		}	
		//_objGrd.createFormat();
		_objGrd.show();
	}
	
	return _objGrd;
};
 /**********************************************************************************
 * Function Name: gfn_objComp(oParent, sCompName)
 * Description  : oParent form 경로의 sCompName object 반환
 * Arguments    : oParent	: 대상 object
                  sCompName : 컴포넌트 명칭
 * Return       : object
 **********************************************************************************/  
pForm.gfn_objComp = function(oParent, sCompName)
{	
	var objComp = oParent.form.components;
	var objCompLen = objComp.length;
	for (var i=0; i<objCompLen; i++)
	{
		if (objComp[i].id == sCompName) 
		{
			return objComp[i];
		}
	}
	return null;
};

 /**********************************************************************************
 * Function Name: gfn_isComp(oParent, sCompName)
 * Description  : 컴포넌트 존재여부 확인
 * Arguments    : _formObj : 대상 object
                  sGrdName : 컴포넌트 명칭
				  count    : (초기값 0)
 * Return       : _cnt값이 1이상이면 컴포넌트 존재
 **********************************************************************************/   
pForm.gfn_isComp = function(_formObj, sCompName, _cnt)
{
	if (this.gfn_isNull(_cnt)) _cnt = 0;
	if (_cnt > 0) return _cnt;
	
	var complist = _formObj;
	
	for(var idx = 0; idx < complist.length; idx++)
	{	
		if( (complist[idx] instanceof Grid) && complist[idx].name == sCompName)
		{				
			_cnt++;				
			return _cnt;
		}else if (complist[idx] instanceof Tab) 
		{		
			for (var i=0; i<complist[idx].tabpages.length; ++i) 
			{			
				var nRtn = this.gfn_isComp(complist[idx].tabpages[i], sCompName, _cnt);							
				if (nRtn > 0) return nRtn;
			}
		
		}else if ( (complist[idx] instanceof Div) || (complist[idx] instanceof Tabpage)) 
		{	
			var nRtn = this.gfn_isComp(complist[idx].form.components, sCompName, _cnt);						
			if (nRtn > 0) return nRtn;
		}
	}
	return _cnt;
};	
 /**********************************************************************************
 * Function Name: gfn_path(o, p)
 * Description  : 부모 오브젝트를 리턴한다.
 * Arguments    : o : 각종 obj componernt 
                  p : 부모 component 
 * Return       : 부모컴포넌트를 리턴한다. 
 **********************************************************************************/ 
pForm.gfn_path = function(o, p)
{
	var sPath = "";
	var nCnt = 0;
	
	try {
		if (o && this.gfn_typeof(o) != "form")
		{
			for (o=o.parent; o!=p; o=o.parent)
			{			
				if(nCnt == 1)
				{
					sPath = o;
					break;
				}
				
				if (this.gfn_typeof(o) == "form")
				{
					nCnt = 1;
				}	
				
			}
		}
	}
	catch(e)
	{
		 trace(e);                // [object Error]
		 trace(e.message);       // 'b'은(는) 선언되지 않은 식별자입니다. (행: 75)
	}

	return sPath;
};
 /**********************************************************************************
 * Function Name: gfn_typeof(obj)
 * Description  : object 받아 어떤 오브젝트 인지 알수있는 함수 
 * Arguments    : obj : 각종 object
 * Return       : object 유형을 알수 있다 예) grid,button,dataset,form 등등
 **********************************************************************************/ 
pForm.gfn_typeof = function(obj)
{
	if (obj === null) 
	{
		return "null";
	}
	var sTypeName = typeof(obj);
	
	if (sTypeName == "object")
	{
		var sValue = new String(obj).valueOf();
		var sStart = sValue.indexOf("[object ");
		var sEnd   = sValue.indexOf("]", sStart);	
		if (sStart > -1 && sEnd > -1) 
		{
			sTypeName = sValue.substr(8, sEnd-8);
		}
	}
	return sTypeName.toLowerCase();
}

 /**********************************************************************************
 * Function Name: gfn_calendarMonthByGrid(objGrid, nRow, nCol, nCell)
 * Description  : grid expandbutton 클릭 시, 월달력 팝업 호출
 * Arguments    : objGrid : 그리드 컴포넌트
                , nRow    : 선택한 행
				, nCol    : Column 의 인덱스를 
				, nCell   : 클릭한 셀
 * Return       : N/A
 **********************************************************************************/  
pForm.gfn_calendarMonthByGrid = function(objGrid, nRow, nCol, nCell)
{
	var dDate = this.ds_monthCalendar.getColumn(nRow, nCol);
	
	if (this.gfn_isNull(dDate)) 
	{
		dDate = this.gfn_getDate().substr(0,6);	
	}
	
	if(this.isValidObject("pdv_calendarMonthGrid")) 
	{
		this.removeChild("pdv_calendarMonthGrid");
	}
	
	var objPopupDiv;
	var sPopupDivNm = "pdv_calendarMonthGrid";
	
	var objPdvMonth = new PopupDiv();		
	objPdvMonth.init(sPopupDivNm, 0, 0, 201, 193);		
	this.addChild(objPdvMonth.name, objPdvMonth);  	
 	//objPdvMonth.style.set_background("#ffffff");
 	objPdvMonth.set_url("com::COMM000007P.xfdl");
 	objPdvMonth.compent = objGrid;
 	objPdvMonth.row 	= nRow;
 	objPdvMonth.cell 	= nCell;
 	objPdvMonth.show(); 	
		
	var arr = objGrid.getCellRect(nRow, nCell);
	
	objPdvMonth.trackPopupByComponent(objGrid, arr.left, 22 + arr.top, 201, 193, "_gfn_calMonthGrid_Callback");
};

 /**********************************************************************************
 * Function Name: _gfn_calMonthGrid_Callback(obj, arg)
 * Description  : 월달력팝업 내부함수/popupdiv에 콜백함수
 * Arguments    : obj : calendar object
                , arg : 전달 argument
 * Return       : N/A
**********************************************************************************/  
pForm._gfn_calMonthGrid_Callback = function(obj, arg) 
{ 	
	var objPdvMonth = this.components[obj];
	
	if(!this.gfn_isNull(arg)) 
	{	
		var objGrid = objPdvMonth.compent;
		var objDs 	= objGrid.getBindDataset();
		var sMonthColNm = String(objGrid.getCellProperty("body", objPdvMonth.cell, "text")).replace("bind:", "");	
		objDs.setColumn(objPdvMonth.row, sMonthColNm, arg.substr(0,6));
		objGrid.updateToDataset();
	}
	
   /*
	// Remove Object form Parent Form  
	this.removeChild(obj);  
	
	// Destroy Object  
	objPdvMonth.destroy(); 
	objPdvMonth = null;
	*/
};

/**********************************************************************************
 * Function Name: gfn_setFocusGrid(objDs, objGd, nRow, sColumnId))
 * Description  : grid setFoucs 이동한다. 
 * Arguments    : ObjDs:dataset 
                , objGd:그리드
				, sColumnId:키값
				, nRow: 행번호
 * Return       : number > 개발쪽에 이벤트등이 꺼져있어 포커스 하지 못했을시 이동해야할 Col 을 반환
**********************************************************************************/
pForm.gfn_setFocusGrid = function (objDs, objGd, nRow, sColumnId) 
{
 	objDs.set_rowposition(nRow);
 	var nIndex = objGd.getBindCellIndex("body", sColumnId);
 	objGd.setCellPos(nIndex);
 	//objGd.showEditor(true);
 	objGd.setFocus();	
 	
 	//개발쪽에 이벤트등이 꺼져있어 포커스 하지 못했을시 이동해야할 Col 을 반환
	return nIndex;
};
 //////////////////////////////////////////////////////////////////////////CELL COPY AND PASTE START//////////////////////////////////////////////////////////////////////////
/**********************************************************************************
 * Function Name: gfn_copyAndPastenGrid(objGrid, e)
 * Description  : 그리드키다운 이벤트 [cellcopypaste]
 * Arguments    : {Object} objGrid - 대상그리드
				  e	   - 키다운이벤트
 * Return       : N/A
 **********************************************************************************/  
pForm.gfn_copyAndPastenGrid = function(objGrid, e)
{
	var keycode 	= e.keycode;
	var sBrowser 	= system.navigatorname;
	if(e.ctrlkey)
	{
		if(keycode == 67)
		{
			//copy(복사하기)
			if( sBrowser == "nexacro" || sBrowser == "IE")
			{
				this._gfn_gridCopyEventForRuntime(objGrid, e);
				
			}else 
			{
				this._gfn_gridCopyEventForChrome(objGrid, e);
			}
		}else if(keycode == 86)
		{
			//paste(붙여넣기)
			this._gfn_gridPasteEvent(objGrid, e);
		}
	}
};

/**********************************************************************************
 * Function Name: _gfn_gridCopyEventForRuntime(obj, e)
 * Description  : nexacro or ie일경우에만 복사 (Ctrl + C) 
 * Arguments    : {Object} objGrid - 대상그리드
				  e	               - 키다운이벤트
 * Return       : N/A
 **********************************************************************************/  
pForm._gfn_gridCopyEventForRuntime = function (obj, e)
{
	var startrow 		= nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) 
	{
		return false;
	}
	var endrow   		= nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) 
	{
		return false;
	}
	var startcol 		= 0;
	var endcol 			= 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol 		= 0;
		endcol 			= obj.getCellCount("body")-1;
	}else
	{
		startcol 		= nexacro.toNumber(obj.selectstartcol);
		endcol   		= nexacro.toNumber(obj.selectendcol);
	}
	var colSeperator 	= "\t";
	var copyData 		= "";
	var checkIndex 		= {};
	
	for (var i = startrow; i <= endrow; i++) 
	{
		for (var j = startcol; j <= endcol; j++) 
		{
			var value = obj.getCellValue(i,j);
			if(!this.gfn_isNull(value)) 
			{
				if (j < endcol) 
				{
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else 
				{
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		
		if (i < obj.selectendrow) 
		{
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	system.clearClipboard();
	system.setClipboard("CF_TEXT",copyData);

	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
};

/**********************************************************************************
 * Function Name: _gfn_gridCopyEventForChrome(obj, e)
 * Description  : chrome일경우에만 복사 (Ctrl + C) 
 * Arguments    : {Object} objGrid - 대상그리드
				  e	               - 키다운이벤트
 * Return       : N/A
 **********************************************************************************/  
pForm._gfn_gridCopyEventForChrome = function (obj, e)
{
	var startrow 	= nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) 
	{
		return false;
	}
	var endrow   	= nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) 
	{
		return false;
	}
	var startcol 	= 0;
	var endcol 		= 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else
	{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var colSeperator = "\t";
	var copyData 	 = "";
	
	for (var i = startrow; i <= endrow; i++) 
	{
		for (var j = startcol; j <= endcol; j++) 
		{
			var value = obj.getCellValue(i,j);
			if(!this.gfn_isNull(value)) 
			{
				if (j < endcol) 
				{
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else 
				{
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		
		if (i < obj.selectendrow) 
		{
				copyData += "\r\n";
		}
	}
	copyData += "\r\n";
	
	var ta 					= this._gfn_createTextarea(copyData);
	this.tragetGrid 		= obj;
	this.tragetGrid["ta"] 	= ta;
	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**********************************************************************************
 * Function Name: _gfn_gridPasteEvent(obj, e)
 * Description  : paste 복사 한거를 붙여넣기(Ctrl + V) 
 * Arguments    : {Object} objGrid - 대상그리드
				  e	               - 키다운이벤트
 * Return       : N/A
 **********************************************************************************/  
pForm._gfn_gridPasteEvent = function (obj, e)
{
	var browser 		= system.navigatorname;
	var copyData 		= this._gfn_girdGetPasteData(browser);
	
	if( this.gfn_isNull(copyData)) 
	{
		return false;
	}
	var colSeperator 	= "\t";
	var rowData 		= "";
	if( browser == "nexacro" || browser =="IE")
	{
		rowData = copyData.split("\r\n");
		if(rowDataCount < 1) 
		{
			e.stopPropagation();
			return false;
		}
	
	}else
	{
		rowData 		= copyData.split(/[\n\f\r]/); 
	}
	
	var rowDataCount 	= rowData.length - 1;

	obj.set_enableevent(false);
	obj.set_enableredraw(false); 

	var datasetName 	= obj.binddataset;
	var ds 				= obj.getBindDataset();

	ds.set_enableevent(false); 

	var grdCellCount 	= obj.getCellCount("body");
	var rowCount 		= ds.getRowCount();
	
	var startrow 		= nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) 
	{
		return false;
	}
	var endrow   		= nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) 
	{
		return false;
	}
	var startcol 		= 0;
	var endcol 			= 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow")
	{
		startcol 		= 0;
		endcol 			= obj.getCellCount("body")-1;
	
	}else
	{
		startcol 		= nexacro.toNumber(obj.selectstartcol);
		endcol   		= nexacro.toNumber(obj.selectendcol);
	}

	var currRow 		= startrow;
	var cellIndex 		= startcol;
	var maxColumnCount 	= 0;
	var checkIndex 		= {};	

	for (var i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			ds.addRow();
		}

		var columnData 		= rowData[i].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) 
		{
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) 
		{
			maxColumnCount = columnLoopCount;
		}

		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			var colTemp = obj.getCellProperty("body", j, "text");
			var colid;
			if( this.gfn_isNull(colTemp) )
			{
				colid = obj.getCellProperty("body", j, "text");
			
			}else
			{
				colid = obj.getCellProperty("body", j, "text").substr(5);
			}
			
			var tempValue = columnData[k];
			if(!this.gfn_isNull(tempValue))
			{
				ds.setColumn(currRow, colid, tempValue);
			}
			k++;
		}
		currRow++;
	}

	ds.rowposition = currRow;	

	endrow 		   = endrow + rowDataCount - 1;
	endcol 		   = maxColumnCount - 1;
	
	system.clearClipboard();

	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	ds.set_enableevent(true); 

	obj.selectArea(startrow, startcol, endrow, endcol);

	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**********************************************************************************
 * Function Name: _gfn_girdGetPasteData("nexacro")
 * Description  : paste (복사)할 데이터생성
 * Arguments    : browser - 브라우저
 * Return       : paste데이터
 **********************************************************************************/  
pForm._gfn_girdGetPasteData = function (browser)
{
	var copyData = "";
	if( browser == "nexacro" || browser == "IE")
	{
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
	}else
	{
		var ta = this.tragetGrid["ta"];
		if(!ta) 
		{
			return false;
		}
		copyData = ta.value;
		document.body.removeChild(ta);
		this.tragetGrid["ta"] = undefined;
	}
	return copyData;
};

/**********************************************************************************
 * Function Name: _gfn_createTextarea(innerText)
 * Description  : cell copy and paste (크롬용 텍스트에어리어생성)
 * Arguments    : {String} innerText- value
 * Return       : {Object} 텍스트에어리어 오브젝트
 **********************************************************************************/ 
pForm._gfn_createTextarea = function(innerText)
{
	var ta 				= document.createElement('textarea');
	ta.id 				= "textAreabyCopyAndPaste";
	ta.style.position 	= 'absolute';
	ta.style.left 		= '-1000px';
	ta.style.top 		= document.body.scrollTop + 'px';
	ta.value 			= innerText;
	
	document.body.appendChild(ta);
	ta.select();

	return ta;
};
//////////////////////////////////////////////////////////////////////////CELL COPY AND PASTE END//////////////////////////////////////////////////////////////////////////
/**********************************************************************************
 * Function Name: gfn_setGridCheckSingle(innerText)
 * Description  : Grid 싱글체크기능(row체크시 그외 row 체크해제) 옵션버튼 처럼사용
 * Arguments    : {Object} obj - Grid
                  {Evnet}  e - GridClickEventInfo 
 * Return       : N/A
 **********************************************************************************/ 
 pForm.gfn_setGridCheckSingle = function (obj, e) 
{  
    var strChkCol = "";
    var objDS     = "";
    var nCell     = e.cell;   
    var nRow      = e.row; 
    
    if (obj.readonly == true) 
    {
        return false;
    }
    
    objDS = obj.getBindDataset();
	
	if (this.gfn_isNull(objDS))
	{
		return false;
	} 
	
	/**
		down이면 Drag할 경우 gfn_setGridCheckSingle함수가 호출이 안되어 체크가 됨
		단, selectchangetype로 인해 속도가 느려질 수 있음
	*/	
	obj.set_selectchangetype("up");   
    
    strChkCol = this.gfn_nvl(obj.getCellProperty("body", e.col, "text"), "");
	strChkCol = strChkCol.split("bind:").join("");
    
    // Body셋팅
	objDS.set_enableevent(false);
    for(var i=0; i<objDS.rowcount; i++) 
    {
		if(i != nRow)
		{
			objDS.setColumn(i, strChkCol, 0);
		}
    }
	objDS.set_enableevent(true);
};

pForm = null;