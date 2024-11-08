(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCombo");
            this.set_titletext("공통멀티콤보(MultiCombo)");
            if (Form == this.constructor)
            {
                this._setFormPosition(120,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt_combo","0","0",null,null,"25","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_combo","0","edt_combo:4",null,"183","0",null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.pdv_combo.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_nodatatext("No Data");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"36\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"name\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:multComboChk\"/><Cell col=\"1\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdv_combo.addChild(obj.name, obj);

            obj = new Button("btn_combo",null,"0","26",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("▼");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",120,26,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COMM000009P.xfdl", function() {
        /**
        *  멀티콤보
        *  @MenuPath
        *  @FileName 		cmmMultiCombo.xfdl
        *  @Creator 		jiback
        *  @CreateDate 		2017.12.08
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2017.12.08     		jgj 	             최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this._objBindDs;
        this._objTarget;
        this._sTarget;
        this.comboinnerdataset;
        this.allcheck;
        this.callbackfunc;
        this.combocodecolumn;
        this.combodatacolumn;
        this.comboinnerdataset;
        this.displaycount;
        this.maxcount;
        this.cellwidth;

        this.sformId = "";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.fn_setCombo();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
        * fn_setCombo : 콤보세팅
        * @return : N/A
        * @example :
        */
        this._setCombo = function ()
        {
        	var objTarget    = this.parent;	    //div
        	this._objTarget  =  objTarget;
        	var sTarget      = "this.parent";
        	var pdvComboList = this.pdv_combo;
        	//var compComboHeight = 0;

        	this.callbackfunc 			= objTarget.callbackfunc;
        	this.combocodecolumn 		= objTarget.combocodecolumn;
        	this.combodatacolumn		= objTarget.combodatacolumn;
        	this.comboinnerdataset		= objTarget.comboinnerdataset;
        	this.displaycount			= objTarget.displaycount;
        	this.maxcount				= objTarget.maxcount;
        	this.cellwidth				= objTarget.cellwidth;

        	this._fn_findDs(this.comboinnerdataset, 1);

        	/**
        	while(1)
         	{
         		if (objTarget.name == "divWorkSpace")
         		{
         			break;
         		}
         		else if(objTarget == "[object Form]")
         		{
         			break;
         		}
         		else if(objTarget == "[object Tabpage]" && !this.gfn_isNull(objTarget.url))
         		{
        			break;
         		}
         		else
         		{
        			trace("1: "+objTarget.name+" / "+objTarget);

         			objTarget = objTarget.parent;
         			sTarget   = sTarget+".parent";

        			trace("2: "+objTarget.name+" / "+objTarget);
        			trace("3: "+objTarget.parent.name+" / "+objTarget.parent);
         		}
         	}
        	*/
        }

        this._fn_bindDs	= function()
        {
         	//this._objTarget = objTarget;
         	//this._sTarget   = sTarget;

        	var compComboHeight = 0;

        	if (!this.gfn_isNull(this.comboinnerdataset))
         	{
        		if (this.gfn_isNull(this._objBindDs))
        		{
        			this.gfn_alert("info", "invalid comboinnerdataset");
        			return false;
        		}
        		else
        		{
        			//this._objBindDs = objTarget.objects[this.comboinnerdataset];
        			//trace("this._objBindDs:"+ this._objBindDs+ " . "+this._objBindDs.name);

        			this._objBindDs.addColumn("multComboChk", "STRING", 1);

        			//trace("xml: " +this._objBindDs.saveXML());

        			this._objBindDs.set_enableevent(false);
        			for (var i=0; i<this._objBindDs.rowcount; i++)
        			{
        				this._objBindDs.setColumn(i, "multComboChk", "0");
        			}

        			this._objBindDs.set_enableevent(true);

        			var nDisplayCount = this.displaycount;

        			if (this.gfn_isNull(nDisplayCount)) nDisplayCount = 10;
        			if (nDisplayCount > this._objBindDs.rowcount) nDisplayCount = this._objBindDs.rowcount;

        			if (nexacro.toNumber(nDisplayCount) != 0)
        			{
        				compComboHeight =  24 * nDisplayCount;  //body
        				compComboHeight = compComboHeight + 24;	//head
        			}

        			this.pdv_combo.set_height(compComboHeight+2);


        			this._CreateCombo(this.pdv_combo);


        			//if (this.allcheck == "false")
        			//else this._CreateAllCheck();
        		}
        	}

        };
        //this._objBindDs


        this._fn_findDs = function(oDsNm, nCnt)
        {
        	var bFlag = "";
        	var oDs = "";
        	switch(nCnt) {
        		case 1:
        			bFlag = this.parent.parent.isValidObject(oDsNm);
        			if(bFlag){
        				oDs = this.parent.parent.objects[oDsNm];
        			}
        			break;
        		case 2:
        			bFlag = this.parent.parent.parent.parent.isValidObject(oDsNm);
        			if(bFlag){
        				oDs = this.parent.parent.parent.parent.objects[oDsNm];
        			}
        			break;
        		case 3:
        			bFlag = this.parent.parent.parent.parent.parent.isValidObject(oDsNm);
        			if(bFlag){
        				oDs = this.parent.parent.parent.parent.parent.objects[oDsNm];
        			}
        			break;
        		case 4:
        			bFlag = this.parent.parent.parent.parent.parent.parent.parent.isValidObject(oDsNm);
        			if(bFlag){
        				oDs = this.parent.parent.parent.parent.parent.parent.parent.objects[oDsNm];
        			}
        			break;
        		default:
        	}

        	if(!bFlag){
        		this._fn_findDs(oDsNm, nCnt+1);
        	}else{
        		this._objBindDs = oDs;
        		this._fn_bindDs();
        	}
        }

        /**
        * _CreateAllCheck : 전체선택/해제 추가
        * @return : N/A
        * @example :
        */
        this._CreateAllCheck = function()
        {
        	var compDiv = new Div("divComboList", 0, 0, this.width, null, null, 40);
        	this.pdv_combo.addChild(compDiv.name, compDiv);
        	compDiv.show();

        	var compStaBg = new Static("staBg", 0, null, null, 38, 0, 0);
        	this.pdv_combo.addChild(compStaBg.name, compStaBg);
        	//compStaBg.set_cssclass("sta_POP_BtnArea");
        	compStaBg.show();

        	var nLeft = (nexacro.toNumber(this.width) - (23*2+2)) / 2;
        	var compBtnAllCheck = new Button("btnAllCheck", nLeft, null, 23, 23, null, 8);
        	this.pdv_combo.addChild(compBtnAllCheck.name, compBtnAllCheck);
        	compBtnAllCheck.addEventHandler("onclick", this._compBtnAllCheck_onclick, this);
        	//compBtnAllCheck.set_cssclass("btn_WF_AllCheck");
        	compBtnAllCheck.show();

        	var compBtnNonCheck = new Button("btnNonCheck", nLeft+compBtnAllCheck.getOffsetWidth()+2, null, 23, 23, null, 8);
        	this.pdv_combo.addChild(compBtnNonCheck.name, compBtnNonCheck);
        	compBtnNonCheck.addEventHandler("onclick", this._compBtnNonCheck_onclick, this);
        	//compBtnNonCheck.set_cssclass("btn_WF_NonCheck");
        	compBtnNonCheck.show();

        	this._CreateCombo(compDiv);
        }
        /**
        * _compBtnAllCheck_onclick : 전체선택/해제 추가
        * @return : N/A
        * @example :
        */
        this._compBtnAllCheck_onclick = function(obj,  e)
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "1");
        	}
        }
        /**
        * _compBtnNonCheck_onclick : 전체선택/해제 추가
        * @return : N/A
        * @example :
        */
        this._compBtnNonCheck_onclick = function(obj,  e)
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "0");
        	}
        }
        /**
        * _CreateCombo : 동적 Grid Como List 생성
        * @return : N/A
        * @example :
        */
        this._CreateCombo = function(compComboList)
        {
        	//if(this.isValidObject("grdCombo")) this.removeChild("grdCombo");

        	//var compGrid = new Grid("grdCombo", 0, 0, null, 100, 0, null);
        	//compComboList.addChild(compGrid.name, compGrid);

        	var compGrid = this.pdv_combo.form.grd_list;
        	compGrid.set_binddataset(this.comboinnerdataset);
        	compGrid.set_tooltiptype("hover");
        	compGrid.set_autofittype("col");
        	compGrid.set_wheelscrollrow(1);
        	compGrid.setgrid = "false";

        	var objDs  = compGrid.getBindDataset();
        	var nWidth = 0;

        	compGrid.setCellProperty("Body", 1, "text", "bind:"+this.combodatacolumn);
        	compGrid.setCellProperty("Body", 1, "align", "left middle");
        	compGrid.setCellProperty("Body", 1, "tooltiptext", compGrid.getCellProperty("Body", 1, "text"));

        	if (this.gfn_isNull(this.cellwidth))
        	{
        		//nWidth = nWidth + compGrid.getFormatColProperty(1, "size");
        		nWidth = this.parent.getOffsetWidth();
        	}
        	else
        	{
        		nUserCellWidth = this.cellwidth;
        		if (this.gfn_isNull(nUserCellWidth)) nUserCellWidth = 80;
        		compGrid.setFormatColProperty(1, "size", nUserCellWidth);
        		nWidth = nWidth + nexacro.toNumber(nUserCellWidth);
        	}

        	this.pdv_combo.setOffsetWidth(nWidth);

        	var nLine = 2;
        	var nScrollbar = 15;
        	var nRowHeight = 24;
        	var nCellWidth = 80;

        	var nHeight = this._objBindDs.rowcount * nRowHeight + nLine;

         	//compGrid.set_height(nHeight);

        	if (this.gfn_isNull(this.selectvalue)) this.edt_combo.set_value("선택");
        	else this.setValue(this.selectvalue);

        //	trace("compGrid: " +compGrid.formats);
        }
        /**
        * fnReplace : fnReplace
        * @return : N/A
        * @example :
        */
        this.fnReplace = function (sValue, sOrg, sNew)
        {
        	var varRtnValue = "";

        	if (this.gfn_isNull(sValue)) {
        		return varRtnValue;
        	}
        	varRtnValue = sValue.toString().replace(sOrg, sNew);

        	return varRtnValue;
        }
        /**
        * setCombo : 공통함수 호출 후 생성함수
        * @return : N/A
        * @example :
        */
        this.setCombo = function()
        {

        	var rtn = this.removeChild("pdvCombo");

        	var compPdvComboList = new PopupDiv("pdvCombo", 0, 21, null, 100, 0, null);
        	this.addChild(compPdvComboList.name, compPdvComboList);
        	//compPdvComboList.set_cssclass("pdiv_WF_MultiCombo");
        	compPdvComboList.show();

        	compPdvComboList.addEventHandler("oncloseup", this.pdv_combo_oncloseup, this);

        	this.edt_combo.set_value("");

        	this.edt_combo.retrunvalue = "";
        	this.edt_combo.returntext = "";

        	this.fn_setCombo();
        }
        /**
        * getValue : 부모창에서 value 가져갈 수 있는 함수
        * @return : N/A
        * @example :
        */
        this.getValue = function()
        {
        	return this.edt_combo.retrunvalue;
        }
        /**
        * getText : 부모창에서 text 가져갈 수 있는 함수
        * @return : N/A
        * @example :
        */
        this.getText = function()
        {
        	return this.edt_combo.returntext;
        }
        /**
        * setValue : 부모창에서 값 세팅하는 함수
        * @return : N/A
        * @example :
        */
        this.setValue = function(sValue)
        {
        	this.fn_init();
        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	var objDs = this._objBindDs;
        	var nFindRow;

        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = objDs.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(objDs.getColumn(nFindRow, this.combodatacolumn));
        			objDs.setColumn(nFindRow, "multComboChk", "1");
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);
        }
        /**
        * setEssential : 필수상태
        * @return : N/A
        * @example :
        */
        this.setEssential = function()
        {
        	//this.edt_combo.set_cssclass("edt_WF_Essential");
        	this.edt_combo.set_background("yellow");
        }
        /**
        * fnSetComboText : 값세팅
        * @return : N/A
        * @example :
        */
        this.fnSetComboText = function(arrTextList, arrValueList)
        {
        	var sComboText = arrTextList.toString();
        	this.edt_combo.retrunvalue = arrValueList.toString();
        	this.edt_combo.returntext = sComboText;
        	var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        	var nComboTextWidth = objRtn.nx;

        	var nWidth = this.edt_combo.getOffsetWidth() - this.btn_combo.width;
        	if (nComboTextWidth > nWidth)
        	{
        		this.edt_combo.set_value(arrTextList.length+"개 선택");
        		this.edt_combo.set_tooltiptext(sComboText);
        		this.edt_combo.set_tooltiptype("hover");
        	}
        	else
        	{
        		this.edt_combo.set_value(sComboText);
        	}

        	if (this.gfn_isNull(arrTextList)) this.edt_combo.set_value("선택");
        }
        /**
        * fn_init : 초기화(전체해제)
        * @return : N/A
        * @example :
        */
        this.fn_init = function ()
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "0");
        	}
        	this.pdv_combo.form.grd_list.setCellProperty("head", 0, "text", 0);
        	this.edt_combo.set_value("선택");
        };
        /**
        * fn_openCombo : Popup Div Open
        * @return : N/A
        * @example :
        */
        this.fn_openCombo = function()
        {
        	var objApp = nexacro.getApplication();
        	var nMainHeight = objApp.mainframe.height;

        	if (!this.gfn_isNull(this.comboinnerdataset))
         	{
        		if (this.gfn_isNull(this._objBindDs))
        		{
        			this.gfn_alert("info", "invalid comboinnerdataset");
        		}
        		else
        		{
        			//var nTop = 21;
        			var nBottom = nexacro.toNumber(nMainHeight) - nexacro.toNumber(this.getOffsetBottom());
        			var nHeight = nexacro.toNumber(this.pdv_combo.height) + nexacro.toNumber(this.btn_combo.height) + 4;

        			//if (nHeight > nBottom) nTop = -(this.pdv_combo.height-1);

        			//this.pdv_combo.form.grd_list.set_height(this.pdv_combo.getOffsetHeight());
        			this.pdv_combo.trackPopupByComponent(this.edt_combo, 0, this.edt_combo.getOffsetHeight());
        			this._objBindDs.set_rowposition(-1);
        		}
        	}
        }
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * btnCombo_onclick : button click popupdiv open
        * @return : N/A
        * @example :
        */
        this.btnCombo_onclick = function(obj,e)
        {
        	this.fn_openCombo();
        };
        /**
        * pdvCombo_oncloseup : //Popup Div oncloseup event
        					  //Popup Div 닫힐때 값세팅
        * @return : N/A
        * @example :
        */
        this.pdvCombo_oncloseup = function(obj,e)
        {
        	var objDs = this._objBindDs;
        	var arrTextList = [];
        	var arrValueList = [];

        	if (this.gfn_isNull(objDs.getColumnInfo(this.combodatacolumn)))
        	{
        		this.gfn_alert("info", "comboinnerdataset("+objDs.name + ")에 컬럼(" + this.combodatacolumn + ")이 존재하지 않습니다.\ncombodatacolumn 정보를 확인하세요.");
        		return false;
        	}

        	if (this.gfn_isNull(objDs.getColumnInfo(this.combocodecolumn)))
        	{
        		this.gfn_alert("info", "comboinnerdataset("+objDs.name + ")에 컬럼(" + this.combocodecolumn + ")이 존재하지 않습니다.\combocodecolumn 정보를 확인하세요.");
        		return false;
        	}

        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		if (objDs.getColumn(i, "multComboChk") == "1")
        		{
        			arrTextList.push(objDs.getColumn(i, this.combodatacolumn));
        			arrValueList.push(objDs.getColumn(i, this.combocodecolumn));
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);

        	if (!this.gfn_isNull(this.callbackfunc))
        	{
        		//var sCallbackFunc= this._sTarget+"."+this.callbackfunc+"("+arrValueList+)";
        		//this.lookup()(sCallbackFunc);

        		try
        		{
        // 			var callBackFunc = "this.getOwnerFrame()."+this.gfv_gFunctionName+"(strDateNew)";
        // 			trace("in >> "+ callBackFunc);
        //  			eval(callBackFunc);
         			this.lookupFunc(this.callbackfunc).call(arrValueList);

        		} catch(e)
        		{
        		}
        	}
        };
        /**
        * _Grid_oncellclick : Combo 클릭
        * @return : N/A
        * @example :
        */
        this._Grid_oncellclick = function(obj, e)
        {

        	/*
        	var objDs = obj.getBindDataset();

        	if (e.col !=0)
        	{
        		if (objDs.getColumn(e.row, "multComboChk") == "1") objDs.setColumn(e.row, "multComboChk", "0");
        		else objDs.setColumn(e.row, "multComboChk", "1");
        	}

        	if (!this.gfn_isNull(this.maxcount))
        	{
        		var nSelectCount = objDs.getCaseCount("multComboChk == '1'");
        		if (this.maxcount < nSelectCount)
        		{
        			objDs.setColumn(e.row, "multComboChk", "0");
        			application.mainframe.alert(this.maxcount + "개 이상 선택할 수 없습니다.");
        		}
        	}
        	*/
        };
        /**
        * edtCombo_oneditclick : //edit click popupdiv open
        * @return : N/A
        * @example :
        */
        this.edtCombo_oneditclick = function(obj,e)
        {
        	this.fn_openCombo();
        };


        this.pdv_combo_grd_list_onheadclick = function(obj,e)
        {
        	if(e.cell == 0)
        	{
        		this.gfn_checkAll(obj, e);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edt_combo.addEventHandler("oneditclick",this.edtCombo_oneditclick,this);
            this.pdv_combo.addEventHandler("oncloseup",this.pdvCombo_oncloseup,this);
            this.pdv_combo.form.grd_list.addEventHandler("onheadclick",this.pdv_combo_grd_list_onheadclick,this);
            this.btn_combo.addEventHandler("onclick",this.btnCombo_onclick,this);
        };
        this.loadIncludeScript("COMM000009P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
