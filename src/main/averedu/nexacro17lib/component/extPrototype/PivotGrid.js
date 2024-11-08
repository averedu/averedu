/**
*  컨설팅 표준화 작업
*  @FileName 	PivotGrid.js 
*  @Creator 	lmn
*  @CreateDate 	2017.11.21
*  @Desction   	PivotGrid	
************** 소스 수정 이력 ***********************************************
*  date          	Modifier           Description
*******************************************************************************
*  2017.11.21     	lmn 	           최초 생성 
*******************************************************************************
*/

if(!nexacro.Grid.prototype.reCalcPivot) {
	/**
	 * @class Dataset value convert
	 */
	nexacro.Grid.prototype.pivotConvertData = function(val)	{
		if(val instanceof nexacro.Decimal) { 
			val = val.valueOf();
		} else if(val instanceof nexacro.Date) {
			if(val._timecheck) val = val.yyyymmddhhmmss();
			else val = val.yyyymmdd();
		}
		return val;
	};	
	/**
	 * @class array sort
	 */	
	nexacro.Grid.prototype.pivotArrayMultiSort = function(arr, prop) {
		function sortMultiFields(prop){
			return function(a,b){
				for(var i=0;i<prop.length;i++)
				{
					var reg = /^\d+$/;
					var x=1;
					var field1=prop[i];
					if(prop[i].indexOf("-")==0)	{
						field1=prop[i].substr(1,prop[i].length);
						x=-x;
					}

					if(reg.test(a[field1]))	{
						a[field1]=parseFloat(a[field1]);
						b[field1]=parseFloat(b[field1]);
					}
					if( a[field1] > b[field1])
						return x;
					else if(a[field1] < b[field1])
						return -x;
				}
			}
		}
		return arr.sort(sortMultiFields(prop));
	};
	/**
	 * @class Progress
	 */		
	nexacro.Grid.prototype.createPivotProgress = function(v,p,txt) {
		var refform = this._refform;
		var objDiv = refform.components["divPivotProgress"];
		if(!objDiv) {
			objDiv = new Div("divPivotProgress", "0", "0", "160", "42");
			objDiv.set_background("white");
			objDiv.set_border("2px solid #808080");
			objDiv.set_scrollbartype("none");
			objDiv.set_visible(false);
			refform.addChild(objDiv.name, objDiv);
			objDiv.show();
			var obj = new ProgressBar("ProgressBar00", "3", "4", "148", "14");
			objDiv.addChild(obj.name, obj);
			obj.show();
			obj = new Static("Static00", "5", "21", "146", "14");
			obj.set_text("Static00");
			obj.set_textAlign("center");
			obj.set_verticalAlign("middle");
			obj.set_font("8 Verdana");
			objDiv.addChild(obj.name, obj);
			obj.show();
		}
		var l = this.getOffsetLeft() + (this.getOffsetWidth()/2) - 80;
		var t = this.getOffsetTop() + (this.getOffsetHeight()/2) - 40;
		objDiv.set_left(l);
		objDiv.set_top(t);
		objDiv.set_visible(v);
		if(v) {
			objDiv.bringToFront();
			objDiv.form.ProgressBar00.set_pos(p);
			objDiv.form.Static00.set_text(txt);
		}
	};
	nexacro.Grid.prototype.pivotDefaultUI = function() {
		if(!this.pivotShowUIConfig) {
			this.pivotShowUIConfig = {
										"showuiButtonText" 	: "피봇설정" ,
										"showuiButtonColor"	: "" ,
										"showuiButtonFont"	: "" ,
										"divbackground" 	: "white" ,
										"divborder" 		: "2px solid #808080" ,
										"divgradation" 		: "linear 0,50 whitesmoke 50,100 darkgray",
										"gridFont" 			: "9 Verdana",
										"allFiledText" 		: "전체 컬럼",
										"rowFiledText" 		: "행",
										"columnFiledText" 	: "열",
										"valueFiledText" 	: "값",
										"descRightTotalText": "우축 고정 합계",
										"descSummaryText" 	: "하위 합계",
										"descSubSumText" 	: "소계",
										"textFont" 			: "9 Verdana",
										"textColor" 		: "",
										"checkboxFont" 		: "9 Verdana",
										"checkboxColor" 	: "",
										"applyButtonText" 	: "적용",
										"closeButtonText" 	: "닫기",
										"buttonFont" 		: "9 Verdana",
										"buttonColor" 		: "" ,
										"radioValue" 		: "1" ,
										"radioSumText" 		: "합계" ,
										"radioAvgText" 		: "평균" ,
										"radioFont" 		: "9 Verdana",
										"radioColor" 		: "" 
									 };
		}	
	};	
	/**
	 * @class pivot 생성 시작 method
	 */	
	nexacro.Grid.prototype.reCalcPivot = function(oInfoDs,oDs, bInit) {
		if(!this.pivotSummaryRowHeight) this.pivotSummaryRowHeight = 24;
		if(!this.pivotHeadRowHeight) this.pivotHeadRowHeight = 24;
		if(!this.pivotBodyRowHeight) this.pivotBodyRowHeight = 24;
		this.pivotLineColor = "";
		if(!this.pivotFactorType) this.pivotFactorType = "SUM";
		
		this.pivotDefaultUI();
		this.set_binddataset("");
		
		if(!this.pivotMaxCellCount) this.pivotMaxCellCount = 1500;
		if(this.pivotFactorOnlyNumber == undefined || this.pivotFactorOnlyNumber == null) this.pivotFactorOnlyNumber = true;
		if(this.pivotFactorOnlyNumberOrg == undefined || this.pivotFactorOnlyNumberOrg == null) this.pivotFactorOnlyNumberOrg = true;
		
		if(this.pivotFactorOnlyNumber == false && this.pivotFactorType == "AVG") {
			trace("평균인 경우 pivotFactorOnlyNumber는 true이어야 합니다.");
			return;
		}
		
		//this.pivotDataset; // 8.1 주석
		
		// 초기화
		if(bInit) {
			this.formatInfo = null;
			this.pivotInfoDataset = null;
			this.pivotSourceDataset = null;
		}

		if(this.pivotGroupSuppress == undefined) this.pivotGroupSuppress = true;
		if(!this.formatInfo) {
			this.formatInfo = 	{
									grouplist : [],
									groupcolidxlist : [],
									pivotlist : [],
									pivotcolidxlist : [],
									factorlist : [],
									factorcolidxlist : [],
									infods  : null ,
									groupds : null ,
									pivotds : null ,
									factords : null 
								};
		}

		// validation check 및 pivotInfoDataset , pivotSourceDataset init
		if(!this.pivotInfoDataset || !this.pivotSourceDataset ||
			this.pivotInfoDataset != oInfoDs || this.pivotSourceDataset != oDs) {
			this.pivotInfoDataset = oInfoDs;	// pivot information dataset
			this.pivotSourceDataset = oDs;		// source dataset
			oInfoDs.set_enableevent(false);
			// validation check
			if(!this.pivotCheckValidate()) {
				oInfoDs.set_enableevent(true);
				this.set_binddataset("");
				//this.set_formats('<Formats><Format id="default"></Format></Formats>');
				return;
			}
		}
		this.pivotSourceDataset.set_updatecontrol(false);
		this.pivotSourceDataset.set_enableevent(false);
		
		// pivot dataset create & init
		var refform = oDs._refform;
		var dsname = oDs.name + "_DynamicPivotds";	
		var dsPivot = refform.objects[dsname];
		if(!dsPivot) {
			dsPivot = new Dataset;
			refform.addChild(dsname , dsPivot);
			dsPivot.set_name(dsname);
		}
		dsPivot.clear();
		dsPivot.set_updatecontrol(false);
		dsPivot.set_enableevent(false);
		this.pivotDataset = dsPivot;
		
		// 최초 그리드 Pivot 정보 저장
		this.arrPivotColList = [];
		this.arrFactorColList = [];

		if(this.pivotUI) {
			var refform = this._refform;
			var cid = "comPivotBtn___" + this.name;
			var objBtn = refform.components[cid];
			var l = this.getOffsetLeft() + this.getOffsetWidth() - 80;
			var t = this.getOffsetTop()-22;
			if(!objBtn) {
				objBtn = new Button();  
				objBtn.init(cid, l, t, 80, 20);
				refform.addChild(cid, objBtn); 
				objBtn.set_text(this.pivotShowUIConfig.showuiButtonText);
				objBtn.set_font(this.pivotShowUIConfig.showuiButtonFont);
				objBtn.set_color(this.pivotShowUIConfig.showuiButtonColor);				
				objBtn.show(); 	
				var pThisGrd = this;
				objBtn.addEventHandler('onclick', function(obj,e) {
														pThisGrd.formatInfo.infods.applyChange();
														pThisGrd.formatInfo.groupds.applyChange();
														pThisGrd.formatInfo.pivotds.applyChange();
														pThisGrd.formatInfo.factords.applyChange();
														pThisGrd.showPivotUI();
													}, this);
				this.addEventHandler("onsize", function(obj,e) {
												var l = obj.getOffsetLeft() + obj.getOffsetWidth() - 80;
												var t = obj.getOffsetTop()-22;
												objBtn.set_left(l);
												objBtn.set_top(t);
												},
												this);
			}
			objBtn.set_left(l);
			objBtn.set_top(t);
		}
		refform = this._refform;
		if(!refform._pivotgridarr) refform._pivotgridarr = [];
		var bFind = -1;
		for(var i=0;i<refform._pivotgridarr.length;i++) {
			if(refform._pivotgridarr[i] == this.name) {
				bFind = i;
				break;
			}
		}
		if(bFind < 0) refform._pivotgridarr[refform._pivotgridarr.length] = this.name;

		if(!refform._usepivot) {
			refform.addEventHandler('onbeforeclose',function(obj,e) {
														var oList = obj._pivotgridarr;
														for(var i=0;i<oList.length;i++)	{
															var oGrd = obj.components[oList[i]];
															if(oGrd) {
																oGrd.pivotsumsubcache = null;
																oGrd.formatInfo.grouplist = null;
																oGrd.formatInfo.groupcolidxlist = null;
																oGrd.formatInfo.pivotlist = null;
																oGrd.formatInfo.pivotcolidxlist = null;
																oGrd.formatInfo.factorlist = null;
																oGrd.formatInfo.factorcolidxlist = null;
																obj.removeChild(oGrd.formatInfo.infods.name);
																oGrd.formatInfo.infods.destroy();
																oGrd.formatInfo.infods = null;
																obj.removeChild(oGrd.formatInfo.groupds.name);
																oGrd.formatInfo.groupds.destroy();
																oGrd.formatInfo.groupds = null;
																obj.removeChild(oGrd.formatInfo.pivotds.name);
																oGrd.formatInfo.pivotds.destroy();
																oGrd.formatInfo.pivotds = null;
																obj.removeChild(oGrd.formatInfo.factords.name);
																oGrd.formatInfo.factords.destroy();
																oGrd.formatInfo.factords = null;
																oGrd.formatInfo = null;
																oGrd.pivotDataset.clear();
																obj.removeChild(oGrd.pivotDataset.name);
																oGrd.pivotDataset.destroy();
																oGrd.pivotDataset = null;
																oGrd.pivotSourceDataset = null;
																oGrd.pivotInfoDataset = null;
																oGrd.pivotShowUIConfig = null;
																oGrd.pivotGridMsg = null;
																oGrd.arrPivotColList = null;
																oGrd.arrFactorColList = null;
															}
															var cid = "comPivotBtn___" + oGrd.name;
															var oBtn = obj.components[cid];
															if(oBtn) {
																obj.removeChild(oBtn.name);
																oBtn.destroy();
															}
															oList[i] = null;
														}
														var sDivName = "commonPivotUI";
														var oDiv = obj.components[sDivName];															
														if(oDiv) {
															try {
																obj.removeChild(oDiv.name);
																oDiv.destroy();
																oDiv = null;
															} catch(e) {
															}
														}
														var sStName = "stcommonPivot_dragText";
														var oSt = obj.components[sStName];															
														if(oSt) {
															try {
																obj.removeChild(oSt.name);
																oSt.destroy();
																oSt = null;
															} catch(e) {
															}
														}
														if(obj.pivottimer) obj.pivottimer = null;
													},refform);
				
			refform._usepivot = false;
			
			this.pivotGridMsg = {
									"M001" : "Pivot Column은 3개 이하여야 합니다." ,
									"M002" : "의 선택된 Column이 없습니다.",
									"M003" : "그리드 정보 저장에 실패하였습니다..",
									"M004" : "Factor 컬럼이 " + this.pivotMaxCellCount + "개를 초과하여 처리할 수 없습니다.",
									"M005" : this.pivotShowUIConfig.radioAvgText + "일 경우 " + this.pivotShowUIConfig.valueFiledText + "은 숫자형만 가능합니다.",
									
									"P001" : "그리드 정보 저장 중",
									"P002" : "데이터 변환 중",
									"P003" : "그리드 포멧생성 중"
								};
		}
		
		this.createPivotProgress(true,10, this.pivotGridMsg.P001);
		var pThis = this;
		this._refform.pivottimer = nexacro._OnceCallbackTimer.callonce(this._refform, function () {
															// 8.1
															try {
																pThis.savePivotInfo();
															} catch(e) {
																if(pThis._refform.pivottimer) pThis._refform.pivottimer.stop();
																pThis.pivotProc1(false);
															}
														},20);
		
	};
	nexacro.Grid.prototype.pivotProc1 = function(rtn) {
		if(rtn == false) {
			this.createPivotProgress(false);
			this.pivotInfoDataset.set_enableevent(true);
			this.pivotSourceDataset.set_updatecontrol(true);
			this.pivotSourceDataset.set_enableevent(true);
			this.set_binddataset("");
			this.P_this = null;
			this.callbackNm = null;
			return;
		}
		this.createPivotProgress(true,30,this.pivotGridMsg.P002);
		var pThis = this;
		// 8.1
		this._refform.pivottimer = nexacro._OnceCallbackTimer.callonce(this._refform, function () {
													try {
														pThis.processPivot();
													} catch(e) {
														if(pThis._refform.pivottimer) pThis._refform.pivottimer.stop();
														pThis.pivotProc1(false);
													}											
												},20);

	};
	nexacro.Grid.prototype.pivotProc2 = function() {
		this.createPivotProgress(true,80,this.pivotGridMsg.P003);
		var pThis = this;
		// 8.1
		this._refform.pivottimer = nexacro._OnceCallbackTimer.callonce(this._refform, function () {
													try {
														pThis.setPivotGridFormat();
													} catch(e) {
														if(pThis._refform.pivottimer) pThis._refform.pivottimer.stop();
														pThis.pivotProc1(false);
													}											
												},20);	

	};
	nexacro.Grid.prototype.pivotProc3 = function() {
		this.createPivotProgress(true,90,this.pivotGridMsg.P003);
		var oPvtDs = this.pivotDataset;
		if(this.pivotGroupSubSum) {
			var s = "G:";
			var gds = this.formatInfo.groupds;
			for(var i=0;i<gds.rowcount-1;i++) {
				var col = gds.getColumn(i,"colID");
				var sort = gds.getColumn(i,"sort");
				if(sort == undefined || sort == null || sort == "") sort = "+";
				if(sort == "ASC") sort = "+";
				else if(sort == "ASC") sort = "-";
				if(i>0) s += ",";
				s += (sort + "" + col);
			}
			oPvtDs.set_keystring(s);
		}
		this.pivotSourceDataset.set_updatecontrol(true);
		this.pivotSourceDataset.set_enableevent(true);		
		this.pivotInfoDataset.set_enableevent(true);		
		this.set_enableevent(true);
		this.set_enableredraw(true);
		oPvtDs.set_updatecontrol(true);
		oPvtDs.set_enableevent(true);

		oPvtDs.set_rowposition(0);
		this.createPivotProgress(false);	// 8.1 progressbar 위로 이동
		
		this.set_binddataset(oPvtDs.name);
		
		if(this.pivotGroupSubSum && this.pivotGroupSubSumExpr && this._curFormat && this._curFormat._bodycells) {	// 8.1
			var cellInfo = this._curFormat._bodycells[0];
			var lineColor = "";
			if( cellInfo.style && cellInfo.style.line != null ) {
				lineColor = cellInfo.style.line.color;
			} else {
				var lineC="";
					lineC = cellInfo._searchStyleValue("border", "linefalsebothnormaln", 1, 1, false, "normal");	
				
				if(!lineC) {
					lineColor = "black";
				} else {
					lineColor = lineC.left_color;
				}
			}
			if(lineColor != "") this.pivotLineColor = lineColor;
		}
		//this.createPivotProgress(false); // 8.1 위로 이동
		this.hscrollbar.set_pos(0);
		this.vscrollbar.set_pos(0);
		
		if(this.callbackNm != undefined && this.callbackNm != null && this.callbackNm != "" ){
			this.P_this[this.callbackNm].call(this.P_this);
			this.P_this = null;
			this.callbackNm = null;
		}		
		
	};
	/**
	 * @class Pivot UI Setting & process
	 */		
	nexacro.Grid.prototype.resetPivot = function(v1,v2,v3,v4) {
		if(v4 == "2") {	// AVG
			var ds = this.formatInfo.factords;
			for(var kk=0;kk<ds.rowcount;kk++) {
				var colinfo = this.pivotSourceDataset.colinfos[ds.getColumn(kk,"colID")];
				if(colinfo.type.toUpperCase() == "STRING") {
					alert(this.pivotGridMsg.M005 + "\nCheck:" + ds.getColumn(kk,"titleText"));
					return false;
				}
			}
			this.pivotFactorOnlyNumber = true;
			this.set_pivotFactorType("AVG");
		} else {
			this.pivotFactorOnlyNumber = this.pivotFactorOnlyNumberOrg;
			this.set_pivotFactorType("SUM");
		}
		if(this.formatInfo.pivotds.rowcount > 3) {
			alert(this.pivotGridMsg.M001);
			return false;
		}
		if(this.formatInfo.groupds.rowcount == 0) {
			alert("[Group]" + this.pivotGridMsg.M002);
			return false;
		}
		if(this.formatInfo.pivotds.rowcount == 0) {
			alert("[Pivot]" + this.pivotGridMsg.M002);
			return false;
		}
		if(this.formatInfo.factords.rowcount == 0) {
			alert("[Factor]" + this.pivotGridMsg.M002);
			return false;
		}
		this.formatInfo.infods.applyChange();
		this.formatInfo.groupds.applyChange();
		this.formatInfo.pivotds.applyChange();
		this.formatInfo.factords.applyChange();

		var dsPivot = this.pivotDataset;
		dsPivot.clear();
		dsPivot.set_updatecontrol(false);
		dsPivot.set_enableevent(false);
		this.pivotSourceDataset.set_updatecontrol(false);
		this.pivotSourceDataset.set_enableevent(false);

		if(v1 == undefined || v1 == null) v1 = false;
		if(v2 == undefined || v2 == null) v2 = false;
		if(v3 == undefined || v3 == null) v3 = false;
		this.set_showPivotRightSummary(v1,this.pivotShowRightSummarySize,this.pivotShowRightSummaryText,this.pivotShowRightSummaryAlign,this.pivotShowRightSummaryBandRight);
		this.set_showPivotSummary(v2,this.pivotShowSummaryText,this.pivotShowSummaryAlign);
		this.set_pivotSubSum(v3,this.pivotGroupSubSumExpr);
		
		// 최초 그리드 Pivot 정보 저장
		this.arrPivotColList = [];
		this.arrFactorColList = [];

		var pThis = this;
		// 8.1
		this._refform.pivottimer = nexacro._OnceCallbackTimer.callonce(this._refform, function () {
															try {
																pThis.savePivotInfo();
															} catch(e) {
																if(pThis._refform.pivottimer) pThis._refform.pivottimer.stop();
																pThis.pivotProc1(false);
															}
														},20);
		return true;
	};
	/**
	 * @class Pivot UI Show Flag
	 */		
	nexacro.Grid.prototype.set_pivotUI = function(v) {
		this.pivotDefaultUI();
		if(!v) v = false;
		this.pivotUI = v;
		
		// SUM AVG Radio
		var dsname = "ds_SUMAVG_Radiods";	
		var dsRadio = this._refform.objects[dsname];
		if(!dsRadio) {
			dsRadio = new Dataset;
			this._refform.addChild(dsname , dsRadio);
			dsRadio.set_name(dsname);
			dsRadio.set_enableevent(false);
			dsRadio.addColumn("code","string",50);
			dsRadio.addColumn("name","string",50);
			dsRadio.addRow();
			dsRadio.setColumn(0,"code","1");
			dsRadio.setColumn(0,"name",this.pivotShowUIConfig.radioSumText);
			dsRadio.addRow();
			dsRadio.setColumn(1,"code","2");
			dsRadio.setColumn(1,"name",this.pivotShowUIConfig.radioAvgText);
		}		
		if(v) {
			var pThis = this;
			var refform = this._refform;
			var sDivName = "commonPivotUI";
			var oDiv = refform.components[sDivName];
			if(!oDiv) {
				oDiv = new Div(sDivName, "0", "0", "317", "345");
				oDiv.set_text("");
				oDiv.set_background(this.pivotShowUIConfig.divbackground);
				oDiv.set_border(this.pivotShowUIConfig.divborder);
				oDiv.set_scrollbartype("none");
				oDiv.set_visible("false");
				//oDiv.style.set_gradation(this.pivotShowUIConfig.divgradation);
				refform.addChild(sDivName, oDiv);
				oDiv.show();
 				var obj = new Grid("grdAll", "7", "17", "151", "169");
				obj.set_autofittype("col");
				obj.set_scrollbartype("none auto");
				obj.set_font(this.pivotShowUIConfig.gridFont);
				obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:titleText\" tooltiptext=\"expr:dataset.getColumn(currow,&quot;titleText&quot;)\"/></Band></Format></Formats>");
				oDiv.addChild(obj.name, obj);
				obj.show();
				
				var grd_grag = function(obj,e) {
								var stName = "stcommonPivot_dragText";
								var st = refform.components[stName];
								if(st)
								{
									st.set_text("");
									st._orgtext = "";
								}
							
								oDiv._pivotdragrow = e.row;
								oDiv._pivotdraggrid = obj.name;
								if(obj.name == "grdAll") oDiv._pivotdragds = pThis.formatInfo.infods;
								else if(obj.name == "grdGroup") oDiv._pivotdragds = pThis.formatInfo.groupds;
								else if(obj.name == "grdPivot") oDiv._pivotdragds = pThis.formatInfo.pivotds;
								else if(obj.name == "grdFactor") oDiv._pivotdragds = pThis.formatInfo.factords;
								return true;
							};
				var grd_drop = function(obj,e) {
								if(oDiv._pivotdraggrid == obj.name)
								{
									if(e.row != oDiv._pivotdragrow)
									{
										var ds = obj.getBindDataset();
										ds.moveRow(oDiv._pivotdragrow,e.row);
										oDiv._pivotdragrow = "";
										oDiv._pivotdraggrid = "";
										oDiv._pivotdragds = "";
										
										var stName = "stcommonPivot_dragText";
										var st = refform.components[stName];
										if(st)
										{
											st.set_text("");
											st._orgtext = "";
											st.set_visible(false);									
										}		
									}
								}
							};
				
				
				// drag
				obj.addEventHandler('ondrag', 	grd_grag ,refform );
				obj.addEventHandler('ondrop', 	grd_drop ,refform );
																
				obj = new Static("Static00", "7", "1", "118", "17");
				obj.set_text(this.pivotShowUIConfig.allFiledText);
				oDiv.addChild(obj.name, obj);
				obj.set_font(this.pivotShowUIConfig.textFont);
				obj.set_color(this.pivotShowUIConfig.textColor);
				obj.show();
				obj = new Static("Static01", "7", "189", "118", "17");
				obj.set_text(this.pivotShowUIConfig.rowFiledText);
				obj.set_color(this.pivotShowUIConfig.textColor);
				oDiv.addChild(obj.name, obj);
				obj.set_font("9 Verdana");
				obj.show();
				obj = new Grid("grdGroup", "7", "207", "148", "103");
				obj.set_autofittype("col");
				obj.set_scrollbartype("none auto");
				obj.set_font(this.pivotShowUIConfig.gridFont);
				obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"157\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:titleText\" tooltiptext=\"expr:dataset.getColumn(currow,&quot;titleText&quot;)\"/></Band></Format></Formats>");
				oDiv.addChild(obj.name, obj);
				obj.show();
				// drag
				obj.addEventHandler('ondrag', 	grd_grag ,refform );
				obj.addEventHandler('ondrop', 	grd_drop ,refform );
				obj = new Grid("grdPivot", "160", "100", "148", "86");
				obj.set_autofittype("col");
				obj.set_scrollbartype("none auto");
				obj.set_font(this.pivotShowUIConfig.gridFont);
				obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"157\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:titleText\" tooltiptext=\"expr:dataset.getColumn(currow,&quot;titleText&quot;)\"/></Band></Format></Formats>");
				oDiv.addChild(obj.name, obj);
				obj.show();
				// drag
				obj.addEventHandler('ondrag', 	grd_grag ,refform );
				obj.addEventHandler('ondrop', 	grd_drop ,refform );
				obj = new Grid("grdFactor", "160", "206", "148", "103");
				obj.set_autofittype("col");
				obj.set_scrollbartype("none auto");
				obj.set_font(this.pivotShowUIConfig.gridFont);
				obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"157\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:titleText\" tooltiptext=\"expr:dataset.getColumn(currow,&quot;titleText&quot;)\"/></Band></Format></Formats>");
				oDiv.addChild(obj.name, obj);
				obj.show();
				// drag
				obj.addEventHandler('ondrag', 	grd_grag ,refform );
				obj.addEventHandler('ondrop', 	grd_drop ,refform );
				obj = new Static("Static03", "161", "188", "118", "17");
				obj.set_text(this.pivotShowUIConfig.valueFiledText);
				obj.set_color(this.pivotShowUIConfig.textColor);
				obj.set_font(this.pivotShowUIConfig.textFont);
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj = new Static("Static02", "160", "83", "118", "17");
				obj.set_text(this.pivotShowUIConfig.columnFiledText);
				obj.set_color(this.pivotShowUIConfig.textColor);
				obj.set_font(this.pivotShowUIConfig.textFont);
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj = new Button("btnClose", "244", "315", "63", "20");
				obj.set_text(this.pivotShowUIConfig.closeButtonText);
				obj.set_color(this.pivotShowUIConfig.buttonColor);
				obj.set_font(this.pivotShowUIConfig.buttonFont);
				oDiv.addChild(obj.name, obj);
				obj.show();
				// close
				obj.addEventHandler('onclick', function(obj,e) {
																pThis.formatInfo.infods.reset();
																pThis.formatInfo.groupds.reset();
																pThis.formatInfo.pivotds.reset();
																pThis.formatInfo.factords.reset();
																oDiv.set_visible(false);
																var cid = "comPivotBtn___" + pThis.name;
																var objBtn = refform.components[cid];
																objBtn.set_visible(true);
																},
																this);
				obj = new CheckBox("chkRightTotal", "161", "8", "150", "18");
				obj.set_text(this.pivotShowUIConfig.descRightTotalText);
				obj.set_value(this.pivotShowRightSummary);
				obj.set_font(this.pivotShowUIConfig.checkboxFont);
				obj.set_color(this.pivotShowUIConfig.checkboxColor);
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj = new CheckBox("chkTotal", "161", "26", "150", "17");
				obj.set_text(this.pivotShowUIConfig.descSummaryText);
				obj.set_value(this.pivotShowSummary);
				obj.set_font(this.pivotShowUIConfig.checkboxFont);
				obj.set_color(this.pivotShowUIConfig.checkboxColor);
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj = new CheckBox("chkSubsum", "161", "42", "150", "18");
				obj.set_text(this.pivotShowUIConfig.descSubSumText);
				obj.set_value(this.pivotGroupSubSum);
				obj.set_font(this.pivotShowUIConfig.checkboxFont);
				obj.set_color(this.pivotShowUIConfig.checkboxColor);
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj = new Radio("Radio00", "161", "62", "120", "18");
				oDiv.addChild(obj.name, obj);
				obj.show();
				obj.set_codecolumn("code");
				obj.set_datacolumn("name");
				obj.set_innerdataset("ds_SUMAVG_Radiods");
				obj.set_columncount(2);
				obj.set_value(this.pivotShowUIConfig.radioValue);
				obj.set_font(this.pivotShowUIConfig.radioFont);
				obj.set_color(this.pivotShowUIConfig.radioColor);
				obj.addEventHandler('onitemchanged', 
									function(obj,e) {
										if(e.postvalue == "2") {
											oDiv.form.chkSubsum.set_value(0);
											oDiv.form.chkSubsum.set_enable(false);
											pThis.pivotFactorOnlyNumber = true;
										} else {
											pThis.pivotFactorOnlyNumber = pThis.pivotFactorOnlyNumberOrg;
											oDiv.form.chkSubsum.set_enable(true);
										}
									},
									this);
				obj = new Button("btnApply", "177", "315", "63", "20");
				obj.set_text(this.pivotShowUIConfig.applyButtonText);
				obj.set_color(this.pivotShowUIConfig.buttonColor);
				obj.set_font(this.pivotShowUIConfig.buttonFont);
				oDiv.addChild(obj.name, obj);
				obj.show();
				// apply
				obj.addEventHandler('onclick', function(obj,e) {
																var rtn = pThis.resetPivot(oDiv.form.chkRightTotal.value,oDiv.form.chkTotal.value,oDiv.form.chkSubsum.value,oDiv.form.Radio00.value);
																if(rtn == false) return;
																
																oDiv.set_visible(false);
																var cid = "comPivotBtn___" + pThis.name;
																var objBtn = refform.components[cid];
																objBtn.set_visible(true);
																},
															this);
			}
			// form event drag 생성 
			if(!refform.__pivotui) 
			{
				var stName = "stcommonPivot_dragText";
				var oStatic = new Static(stName, "0", "0", "50", "20");
				oStatic.set_usedecorate(true);
				oStatic.set_visible("false");
				oStatic.set_font("9 Verdana");
				refform.addChild(stName, oStatic);
				oStatic.set_border("1px solid #808080");
				oStatic.set_background("beige");
				oStatic.show();
			
				refform.__pivotui = true;
				refform.addEventHandler('ondragmove', 	function(obj,e) {
															if(oDiv._pivotdragrow == null || oDiv._pivotdragrow == undefined || oDiv._pivotdragrow == "") {
																oDiv._pivotdragrow = "";
																return;
															}
															if(oDiv) {
																if(oStatic.text == undefined || oStatic.text == "") {
																	var s = oDiv._pivotdragds.getColumn(oDiv._pivotdragrow,"titleText");
																	var oFt = nexacro.getTextSize(s,"8 verdana");
																	oStatic.set_width(oFt.nx+20);
																	oStatic.set_height(oFt.ny+6);
																	if(oStatic.width < 50) oStatic.set_width(50);
																	if(oStatic.height < 10) oStatic.set_height(10);
																	oStatic._orgtext = s;
																	oStatic.set_text(s);
																	oStatic.set_visible(true);
																}
																oStatic.bringToFront();
																oStatic.move(e.clientX+5, e.clientY-15);
																if(e.fromobject && e.fromobject._type_name == "Grid") {
																	var sGrdId = e.fromobject.name;
																	if((sGrdId == "grdAll") || (sGrdId == "grdGroup") || (sGrdId == "grdPivot") || (sGrdId == "grdFactor")) {
																		var ds = oDiv._pivotdragds;
																		var colid = ds.getColumn(oDiv._pivotdragrow,"colID");
																		var colinfo = pThis.pivotSourceDataset.getColumnInfo(colid);
																		if(pThis.pivotFactorOnlyNumber == true) {
																			if(sGrdId == "grdFactor") {
																				if(colinfo && (colinfo.type != "BIGDECIMAL" && colinfo.type != "INT" && colinfo.type != "FLOAT")) {
																					oStatic.set_text("<fc v='red'>" + oStatic._orgtext + "</fc>");
																				}
																			} else if(sGrdId == "grdGroup" || sGrdId == "grdPivot") {
																				if(colinfo && (colinfo.type == "BIGDECIMAL" || colinfo.type == "INT" || colinfo.type == "FLOAT")) {
																					oStatic.set_text("<fc v='red'>" + oStatic._orgtext + "</fc>");
																				}
																			} else if(sGrdId == "grdAll") {
																				oStatic.set_text(oStatic._orgtext);
																			}
																		} else {
																			oStatic.set_text(oStatic._orgtext);
																		}
																	} else {
																		oDiv._pivotdragrow = "";
																		oDiv._pivotdraggrid = "";
																		oDiv._pivotdragds = "";																			
																		oStatic._orgtext = "";
																		oStatic.set_text("");
																		oStatic.set_visible(false);
																	}
																} else {
																	if(oStatic.text != oStatic._orgtext)
																	{
																		oStatic.set_text(oStatic._orgtext);
																	}
																}
															}
														},
										refform);
				refform.addEventHandler('ondrop', 	function(obj,e) {
															if(oDiv) {
																if(e.fromobject && e.fromobject._type_name == "Grid") {
																	var sGrdId = e.fromobject.name;
																	if((sGrdId == "grdAll") || (sGrdId == "grdGroup") || (sGrdId == "grdPivot") || (sGrdId == "grdFactor")) {
																		if(oStatic.text == oStatic._orgtext) {
																			var srcds = oDiv._pivotdragds;
																			var bindds = e.fromobject.getBindDataset();
																			if(srcds != "" && srcds.name != bindds.name) {
																				var nRow = bindds.findRow("colID",srcds.getColumn(oDiv._pivotdragrow,"colID"));
																				if(nRow < 0) {
																					var nRow = bindds.addRow();
																					bindds.copyRow(nRow,srcds,oDiv._pivotdragrow);
																					bindds.setColumn(nRow,"show","1");
																					var sType = "";
																					if(sGrdId == "grdGroup") sType = "GROUP";
																					else if(sGrdId == "grdPivot") sType = "PIVOT";
																					else if(sGrdId == "grdFactor") sType = "FACTOR";
																					bindds.setColumn(nRow,"pivotInfo",sType);

																					srcds.deleteRow(oDiv._pivotdragrow);
																				}
																			}
																			srcds = bindds = null;
																		}
																	}
																}

																oDiv._pivotdragrow = "";
																oDiv._pivotdraggrid = "";
																oDiv._pivotdragds = "";
																oStatic._orgtext = "";
																oStatic.set_text("");
																oStatic.set_visible(false);

															}
														},
										refform);
			}
		}
	};
	/**
	 * @class Set - Pivot Summary
	 */		
	nexacro.Grid.prototype.set_pivotFactorType = function(v) {
		if(v == "SUM" || v == "AVG") {
			this.pivotFactorType = v;
			this.pivotShowUIConfig.radioValue = (v=="SUM"?"1":"2");
		}
	};
	nexacro.Grid.prototype.set_pivotSumMask = function(v) {
		this.pivotSumMask = v;
	};
	nexacro.Grid.prototype.set_pivotMaxCellCount = function(v) {
		this.pivotMaxCellCount = v;
	};
	nexacro.Grid.prototype.set_pivotFactorOnlyNumber = function(v,v2,v3) {
		this.pivotFactorOnlyNumber = v;
		this.pivotFactorOnlyNumberOrg = v;
		if(v2) {
			this.pivotFactorStringMask = v2;
		}
		if(v3) {
			this.pivotFactorYN = v3;
		}else{
			this.pivotFactorYN = null;
		}
	};
	
	nexacro.Grid.prototype.set_callback = function(pThis, callbackNm) {
		this.P_this = pThis;
		this.callbackNm = callbackNm;
	};

	nexacro.Grid.prototype.get_UIInfo = function() {
		this.pivotDefaultUI();
		return this.pivotShowUIConfig;
	};	
	nexacro.Grid.prototype.set_showPivotSummary = function(v,sText,sAlign) {
		if(!v) v = false;
		this.pivotShowSummary = v;	
		if(v)
		{
			this.pivotShowSummaryText = (sText&&sText!="")?sText:"TOTAL";
			this.pivotShowSummaryAlign = (sAlign&&sAlign!="")?sAlign:"center";
		}
	};
	nexacro.Grid.prototype.set_showPivotRightSummary = function(v,nSize,sText,sAlign, bBandRight) {
		if(!v) v = false;
		this.pivotShowRightSummary = v;	
		if(!bBandRight) bBandRight = false;
		if(v) {
			this.pivotShowRightSummarySize = (nSize < 50|| !nSize)?50:nSize;
			this.pivotShowRightSummaryText = (sText&&sText!="")?sText:"TOTAL";
			this.pivotShowRightSummaryAlign = (sAlign&&sAlign!="")?sAlign:"left";
			this.pivotShowRightSummaryBandRight = bBandRight;
		} 
	};
	nexacro.Grid.prototype.set_pivotBodyRowHeight = function(v)	{
		if(!v) v = 24;
		this.pivotBodyRowHeight = v;	
	};
	nexacro.Grid.prototype.set_pivotHeadRowHeight = function(v)	{
		if(!v) v = 24;
		this.pivotHeadRowHeight = v;	
	};
	nexacro.Grid.prototype.set_pivotSummaryRowHeight = function(v)	{
		if(!v) v = 24;
		this.pivotSummaryRowHeight = v;	
	};
	nexacro.Grid.prototype.set_pivotSubSum = function(v,bLineExpr) {
		this.pivotGroupSubSum = v;	
		this.pivotGroupSubSumExpr = bLineExpr;	
	};
	nexacro.Grid.prototype.set_pivotUseGroupSuppress = function(v) {
		this.pivotGroupSuppress = v;	
	};
	nexacro.Grid.prototype.showPivotUI = function(pGrd)	{
		var l = this.getOffsetLeft() + this.getOffsetWidth() - 320;
		var t = this.getOffsetTop();
	
		var refform = this._refform;
		var cid = "comPivotBtn___" + this.name;
		var objBtn = refform.components[cid];
		objBtn.set_visible(false);

		var sDivName = "commonPivotUI";
		var oDiv = refform.components[sDivName];
		oDiv.set_left(l);
		oDiv.set_top(t);														
		
		var oInfoDs = this.formatInfo.infods;
		var oGroupDs = this.formatInfo.groupds;
		var oPivotDs = this.formatInfo.pivotds;
		var oFactorDs = this.formatInfo.factords;
		var nRow1,nRow2,nRow3 = -1;
		var sCol = "";
		oInfoDs.set_enableevent(false);
		for(var i=oInfoDs.rowcount-1;i>=0;i--) {
			sCol = oInfoDs.getColumn(i,"colID");
			nRow1 = oGroupDs.findRow("colID",sCol);
			if(nRow1 < 0) {
				nRow2 = oPivotDs.findRow("colID",sCol);
				if(nRow2 < 0) {
					nRow3 = oFactorDs.findRow("colID",sCol);
					if(nRow3 < 0) {
					} else {
						oInfoDs.deleteRow(i);
					}
				} else {
					oInfoDs.deleteRow(i);
				}
			} else {
				oInfoDs.deleteRow(i);
			}
		}
		oInfoDs.filter("");
		oInfoDs.set_enableevent(true);
		oDiv.form.grdAll.set_binddataset(oInfoDs.name);
		oDiv.form.grdGroup.set_binddataset(oGroupDs.name);
		oDiv.form.grdPivot.set_binddataset(oPivotDs.name);
		oDiv.form.grdFactor.set_binddataset(oFactorDs.name);
		
		var vv = false;
		if(this.pivotShowRightSummary == null || this.pivotShowRightSummary == undefined || this.pivotShowRightSummary == "") vv = false;
		else vv = this.pivotShowRightSummary;
		oDiv.form.chkRightTotal.set_value(vv);
		
		if(this.pivotShowSummary == null || this.pivotShowSummary == undefined || this.pivotShowSummary == "") vv = false;
		else vv = this.pivotShowSummary;
		oDiv.form.chkTotal.set_value(vv);

		if(this.pivotGroupSubSum == null || this.pivotGroupSubSum == undefined || this.pivotGroupSubSum == "") vv = false;
		else vv = this.pivotGroupSubSum;
		oDiv.form.chkSubsum.set_value(vv);
		
		if(this.pivotShowUIConfig.radioValue == "1") oDiv.form.Radio00.set_value("1");
		else oDiv.form.Radio00.set_value("2");
		
		oDiv.set_visible(true);	
		oDiv.bringToFront();
	};	
	/**
	 * @class Grid Validation Check
	 */			
    nexacro.Grid.prototype.pivotCheckValidate = function () {
		var oInfoDs = this.pivotInfoDataset;
		var oSrcDs = this.pivotSourceDataset;
		if(!(oSrcDs instanceof nexacro.Dataset)) {
			trace("[Error - original dataset(object) not found]");
			return false;
		}

		if(oInfoDs == false) {
			trace("[Error - dataset(object) not found]");
			return false;
		}
		var nCnt = oInfoDs.getCaseCount("pivotInfo=='GROUP' && show=='1'");
		if(nCnt == 0) {
			trace("[Error - group info count : 0] " + oInfoDs.name);
			return false;
		}
		nCnt = oInfoDs.getCaseCount("pivotInfo=='PIVOT' && show=='1'");
		if(nCnt == 0) {
			trace("[Error - pivot info count : 0] " + oInfoDs.name);
			return false;
		}
		nCnt = oInfoDs.getCaseCount("pivotInfo=='FACTOR' && show=='1'");
		if(nCnt == 0) {
			trace("[Error - factor info count : 0] " + oInfoDs.name);
			return false;
		}
		
		// column info - validation
		for(var i=0;i<oInfoDs.rowcount;i++) {
			if(!oSrcDs.colinfos[oInfoDs.getColumn(i,"colID")]) {
				trace("[Error - column info not found] " + oInfoDs.getColumn(i,"colID"));
				return false;
			}
			if(oInfoDs.getColumn(i,"sort") == undefined || oInfoDs.getColumn(i,"sort") == null || oInfoDs.getColumn(i,"sort") == "") {
				oInfoDs.setColumn(i,"sort","ASC");
			}
			if(oInfoDs.getColumn(i,"show") == undefined || oInfoDs.getColumn(i,"show") == null || oInfoDs.getColumn(i,"show") == "") {
				oInfoDs.setColumn(i,"show","1");
			}
			if(oInfoDs.getColumn(i,"pivotInfo")  == "GROUP") {
				if(!oInfoDs.getColumn(i,"headAlign") || oInfoDs.getColumn(i,"headAlign")=="") {
					oInfoDs.setColumn(i,"headAlign","left");
				}
				if(!oInfoDs.getColumn(i,"bodyAlign") || oInfoDs.getColumn(i,"bodyAlign")=="") {
					oInfoDs.setColumn(i,"bodyAlign","left");
				}
			} else if(oInfoDs.getColumn(i,"pivotInfo")  == "PIVOT") {
				if(!oInfoDs.getColumn(i,"headAlign") || oInfoDs.getColumn(i,"headAlign")=="") {
					oInfoDs.setColumn(i,"headAlign","left");
				}
			} else if(oInfoDs.getColumn(i,"pivotInfo")  == "FACTOR") {
				if(!oInfoDs.getColumn(i,"headAlign") || oInfoDs.getColumn(i,"headAlign")=="") {
					oInfoDs.setColumn(i,"headAlign","left");
				}
				if(!oInfoDs.getColumn(i,"bodyAlign") || oInfoDs.getColumn(i,"bodyAlign")=="") {
					oInfoDs.setColumn(i,"bodyAlign","right");
				}
				if(!oInfoDs.getColumn(i,"displayType") || oInfoDs.getColumn(i,"displayType")=="") {
					oInfoDs.setColumn(i,"displayType","number");
				}
			}
		}
		// information dataset copy
		oInfoDs.filter("");
		var refform = oInfoDs._refform;
		
		var dsname = oInfoDs.name + "_infoall";	
		var ds = refform.objects[dsname];
		if(!ds) {
			ds = new Dataset;
			refform.addChild(dsname , ds);
			ds.set_name(dsname);
		}
		ds.copyData(oInfoDs,true);
		this.formatInfo.infods = ds;
		
		dsname = oInfoDs.name + "_group";	
		ds = refform.objects[dsname];
		if(!ds) {
			ds = new Dataset;
			refform.addChild(dsname , ds);
			ds.set_name(dsname);
		}
		oInfoDs.filter("pivotInfo=='GROUP' && show=='1'");
		oInfoDs.set_keystring("S:seq");
		ds.copyData(oInfoDs,true);
		this.formatInfo.groupds = ds;

		dsname = oInfoDs.name + "_pivot";	
		ds = refform.objects[dsname];
		if(!ds) {
			ds = new Dataset;
			refform.addChild(dsname , ds);
			ds.set_name(dsname);
		}
		oInfoDs.filter("pivotInfo=='PIVOT' && show=='1'");
		oInfoDs.set_keystring("S:seq");
		ds.copyData(oInfoDs,true);
		this.formatInfo.pivotds = ds;
		
		dsname = oInfoDs.name + "_factor";	
		ds = refform.objects[dsname];
		if(!ds) {
			ds = new Dataset;
			refform.addChild(dsname , ds);
			ds.set_name(dsname);
		}
		oInfoDs.filter("pivotInfo=='FACTOR' && show=='1'");
		oInfoDs.set_keystring("S:seq");
		ds.copyData(oInfoDs,true);
		this.formatInfo.factords = ds;
		
		for(var kk=0;kk<ds.rowcount;kk++) {
			var colinfo = oSrcDs.colinfos[ds.getColumn(kk,"colID")];
			if(colinfo.type.toUpperCase() == "STRING" && this.pivotFactorOnlyNumber == true) {
				trace("pivotFactorOnlyNumber=true\n" + this.pivotGridMsg.M005 + "\nCheck:" + ds.getColumn(kk,"titleText"));
				return false;
			}
		}
				
		oInfoDs = oSrcDs = nCnt = null;
		return true;
	};
	/**
	 * @class pivot 정보 생성중 존재 여부 확인.
	 */				
    nexacro.Grid.prototype.findPivotCol = function (arr, sValue , nLvl, sParent)  {
		for(var kk = 0; kk < arr.length; kk++) {
			if(arr[kk].name == sValue && arr[kk].lvl == nLvl && arr[kk].parentid == sParent) {
				return kk;
			}
		}
		return -1;
    };
	/**
	 * @class Grid Pivot data를 기준으로 array(기준키정보)를 생성한다.
	 * 	      - pivot dataset의 factor 정보를 추가한다.
	 *	      - this.arrFactorColList : factor column 정보 array
	 *	      - this.arrPivotColList  : factor column 정보 tree array
	 */		   
     nexacro.Grid.prototype.savePivotInfo = function ()  {
		//var oInfoDs = this.pivotInfoDataset;
		var oSrcDs  = this.pivotSourceDataset;
		var oPvtDs  = this.pivotDataset;
		var strsortkey = "";
		var sortkeyIdx = [];

		var oInfoDs = this.formatInfo.pivotds;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			var colid = oInfoDs.getColumn(i,"colID");
			strsortkey += ("+" + colid);
			sortkeyIdx.push(oSrcDs.colinfos[colid]._index);
		}
		
		var arrFactorCol = [];
		oInfoDs = this.formatInfo.factords;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			var colid = oInfoDs.getColumn(i,"colID");
			var colinfo = oSrcDs.colinfos[colid];
			arrFactorCol[i] = { "colid" : colid , "type" : colinfo.type , "size" : colinfo.size};
		}
		oSrcDs.set_keystring("S:"+strsortkey);
		var rawRec = oSrcDs._viewRecords;
		
		var aCurrVal = [];
		var sCurrVal = "", sPrevVal = "", val = "";
		this.arrPivotColList = [];
		this.arrFactorColList = [];
		var arrPivotCol = [];
		var oJson = {
						"id" 		: "AAAA_ROOT",
						"name" 		: "AAAA_ROOT",
						"lvl"		: -1,
						"parentid" 	: ""
					};
		arrPivotCol[0] = oJson;

		var nPivotColList = -1;
		var nRtn = -1;
		var seq = 0;
		var nCnt = 0;
		var sColName = "";
		var sParentName = "";
		var sTreeCurrId = "";
		var sTreePreId = "";
		for(var i=0;i<rawRec.length;i++) {
			if(rawRec[i]._level > 0) continue;
			aCurrVal = [];
			
			for(var j = 0; j < sortkeyIdx.length; j++)	{
				val = this.pivotConvertData(rawRec[i][sortkeyIdx[j]]);
				if(!val || val == "") val = " ";
				aCurrVal.push(val);
			}
			sCurrVal = aCurrVal.join("");
			
			if(sCurrVal == sPrevVal) {
				rawRec[i]["PVSEQ"] = (nCnt-1).toString().padLeft(4,'0');	// 8.1
			} else {
				//nTreeFlag++;
				sTreeCurrId = sTreePreId = "AAAA_ROOT";
				for(var j = 0; j < aCurrVal.length; j++) {
					sParentName = sTreePreId;
					sTreeCurrId += aCurrVal[j];
					sTreeCurrId = sTreeCurrId.replace(/ /g,"_");
					nRtn = this.findPivotCol(arrPivotCol, aCurrVal[j] , j, sParentName);
					if(nRtn == -1) {
						var oJson2 = {
										"id" 		: sTreeCurrId,
										"name" 		: aCurrVal[j],
										"lvl"		: j,
										"parentid" 	: sParentName
									};
						arrPivotCol[arrPivotCol.length] = oJson2;
						oJson2 = null;
					}
					sTreePreId += aCurrVal[j];
					sTreePreId = sTreePreId.replace(/ /g,"_");
				}
				// pivot dataset에 factor column 추가
				for(var j = 0; j < arrFactorCol.length; j++) {
					sColName = 	arrFactorCol[j].colid + "__" + j.toString().padLeft(2,'0') + "__" + nCnt.toString().padLeft(4,'0');	// 8.1
					this.arrFactorColList[this.arrFactorColList.length] = sColName;
					if(this.pivotFactorOnlyNumber == true) {
						oPvtDs.addColumn(sColName,arrFactorCol[j].type,arrFactorCol[j].size);
						
						if(this.pivotFactorType == "AVG") {	// AVERAGE
							oPvtDs.addColumn(sColName + "__CNT",arrFactorCol[j].type,arrFactorCol[j].size);
							oPvtDs.addColumn(sColName + "__AVG",arrFactorCol[j].type,arrFactorCol[j].size);
						}

					} else {
						if(this.pivotFactorYN == "N"){
							oPvtDs.addColumn(sColName,arrFactorCol[j].type,arrFactorCol[j].size);
						}else{
							oPvtDs.addColumn(sColName,"BIGDECIMAL",arrFactorCol[j].size);
						}
					}
				}
				rawRec[i]["PVSEQ"] = nCnt.toString().padLeft(4,'0');	// 8.1
				nCnt = nCnt + 1;
				sPrevVal = sCurrVal;
			}
		}

		this.nFactorAllCnt = nCnt;

		if(this.arrFactorColList.length > this.pivotMaxCellCount) {
			alert(this.pivotGridMsg.M004);
			this.pivotProc1(false);
			return;
		}
		if(arrPivotCol.length == 0) {
			this.pivotProc1(false);
			return;
		}

		var idToNodeMap = {};
		var root = null,parentNode = null;
		for(var i = 0; i < arrPivotCol.length; i++) {
			var datum = arrPivotCol[i];
			datum.children = [];
			idToNodeMap[datum.id] = datum;
			
			if(datum.parentid == "") {
				root = datum;
			} else {
				parentNode = idToNodeMap[datum.parentid];
				parentNode.children.push(datum);
			}
		}
		this.arrPivotColList = root;
		this.pivotProc1(true);		
	};
	/**
	 * @class Factor Data를  pivot dataset에 setting
	 *        - 현재는 기존값이 있는 경우 sum
	 */				
	nexacro.Grid.prototype.pivotCopyFactorRecord = function(oPvtDs,nRow,arrFactorCol,arrFactorColIdx,rawRecI,arrFactorColType) {
		var seq = rawRecI["PVSEQ"];
		var sCol = "";
		var nVal1 = 0;
		var nVal2 = 0;
		var nVal1_1 = 0;
		var nVal2_1 = 0;
		for(var ci=0;ci<arrFactorColIdx.length;ci++) {
			sCol = arrFactorCol[ci] + "__" + ci.toString().padLeft(2,'0') + "__" + seq;
			nVal1 = oPvtDs.getColumn(nRow,sCol);
			if(this.pivotFactorOnlyNumber == false && arrFactorColType[ci].toUpperCase() == "STRING") {
				if(!nVal1) nVal1 = 0;
			}
			if(nVal1 && nVal1 instanceof nexacro.Decimal) nVal1 = nVal1.valueOf();
			
			if(this.pivotFactorType == "AVG") {
				var nCnt = oPvtDs.getColumn(nRow,sCol + "__CNT");
				if(!nCnt) nVal1_1 = 0;
				else nVal1_1 = nCnt;
			}
			
			if(this.pivotFactorOnlyNumber == false && arrFactorColType[ci].toUpperCase() == "STRING") {
				if(this.pivotFactorYN == "N"){
					nVal2 = rawRecI[arrFactorColIdx[ci]];
				}else{
					nVal2 = 1;
				}
			} else {
				nVal2 = rawRecI[arrFactorColIdx[ci]];
			}
			
			if(nVal2 && nVal2 instanceof nexacro.Decimal) nVal2 = nVal2.valueOf();
			
			if(this.pivotFactorType == "AVG") {
				nVal2_1 = 1;
			}
			
			if(nVal1 && nVal2) oPvtDs.setColumn(nRow,sCol,(nVal1+nVal2));
			else oPvtDs.setColumn(nRow,sCol,nVal2+"");
			
			if(this.pivotFactorType == "AVG") {
				var nAdd = nexacro.toNumber(nVal1_1)+nexacro.toNumber(nVal2_1);
				oPvtDs.setColumn(nRow,sCol + "__CNT",nAdd);
				if(nVal1 && nVal2) oPvtDs.setColumn(nRow,sCol + "__AVG",((nVal1+nVal2)/nAdd));
				else oPvtDs.setColumn(nRow,sCol + "__AVG",(nVal2/nAdd));
			}
			
			if(this.pivotShowRightSummary) {
				var sSumCol = "PV_SUBSUM_"+ci.toString();
				var nSum = oPvtDs.getColumn(nRow,sSumCol);
				if(!nSum) nSum = 0;
				oPvtDs.setColumn(nRow,sSumCol,(nSum+nVal2));
				
				if(this.pivotFactorType == "AVG") {
					var v1 = oPvtDs.getColumn(nRow,sSumCol+ "__CNT");
					if(!v1) v1 = 0;
					v1++;
					oPvtDs.setColumn(nRow,sSumCol+ "__CNT",v1);
					oPvtDs.setColumn(nRow,sSumCol+ "__AVG",(nSum+nVal2)/v1);
				}
			}
		}
	};
	/**
	 * @class Group Data를  pivot dataset에 setting
	 */				
	nexacro.Grid.prototype.pivotCopyFixRecord = function(oPvtDs,nRow,arrGroupCol,arrGroupColIdx,rawRecI) {
		for(var ci=0;ci<arrGroupColIdx.length;ci++) {
			oPvtDs.setColumn(nRow,arrGroupCol[ci],rawRecI[arrGroupColIdx[ci]]);
		}
	};
	/**
	 * @class 기준정보를 사용하여 원본데이터에서 pivot dataset에 값을 생성한다.
	 */							
	nexacro.Grid.prototype.processPivot = function () {
		this.pivotsumsubcache = [];
		//var oInfoDs = this.pivotInfoDataset;
		var oSrcDs  = this.pivotSourceDataset;
		var oPvtDs  = this.pivotDataset;
		
		this.set_enableevent(false);
		this.set_enableredraw(false);
		
		var arrGroupCol = [];
		var arrGroupColIdx = [];
		var arrPivotCol = [];
		var arrPivotColIdx = [];
		var arrFactorCol = [];
		var arrFactorColIdx = [];
		var arrFactorColType = [];
		var colid = "", sort = "";
		
		// array에 GROUP,PIVOT,FACTOR 정보를 담는다
		var oInfoDs = this.formatInfo.groupds;
		var strsortkey = "";
		var colinfo;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			colid = oInfoDs.getColumn(i,"colID");
			sort = oInfoDs.getColumn(i,"sort");
			
			if(!sort || sort == "") sort = "+";
			if(sort == "ASC") sort = "+";
			else if(sort != "DESC") sort = "+";
			else sort = "+";
			
			strsortkey += (sort + colid);
			arrGroupCol.push(colid);
			colinfo = oSrcDs.colinfos[colid];
			arrGroupColIdx.push(colinfo._index);
			
			oPvtDs.addColumn(colid,colinfo.type,colinfo.size);			
		}
		this.formatInfo.grouplist = arrGroupCol;
		this.formatInfo.groupcolidxlist = arrGroupColIdx;

		oInfoDs = this.formatInfo.pivotds;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			colid = oInfoDs.getColumn(i,"colID");
			sort = oInfoDs.getColumn(i,"sort");
			
			if(!sort || sort == "") sort = "+";
			if(sort == "ASC") sort = "+";
			else if(sort != "DESC") sort = "+";
			else sort = "+";
			
			strsortkey += (sort + colid);
			arrPivotCol.push(colid);
			arrPivotColIdx.push(oSrcDs.colinfos[colid]._index);
		}
		this.formatInfo.pivotlist = arrPivotCol;
		this.formatInfo.pivotcolidxlist = arrPivotColIdx;
		
		oInfoDs = this.formatInfo.factords;
		for(var i=0;i<oInfoDs.rowcount;i++)	{
			colid = oInfoDs.getColumn(i,"colID");
			colinfo = oSrcDs.colinfos[colid];
			arrFactorColType.push(colinfo.type);
			arrFactorCol.push(colid);
			arrFactorColIdx.push(oSrcDs.colinfos[colid]._index);
		}
		this.formatInfo.factorlist = arrFactorCol;
		this.formatInfo.factorcolidxlist = arrFactorColIdx;
		
		// 우측 sum이 있는 경우 추가 
		if(this.pivotShowRightSummary) {
			for(var i=0;i<arrFactorCol.length;i++) {
				oPvtDs.addColumn("PV_SUBSUM_"+i.toString(),"BIGDECIMAL",255);		
				if(this.pivotFactorType == "AVG") {	// AVERAGE
					oPvtDs.addColumn("PV_SUBSUM_"+i.toString() + "__CNT","BIGDECIMAL",255);		
					oPvtDs.addColumn("PV_SUBSUM_"+i.toString() + "__AVG","BIGDECIMAL",255);
				}
			}
		}
		//-----------------------------------------------------------------------------
		oSrcDs.set_keystring("S:" + strsortkey);	// group, pivot 순으로 sort
		var rawRec = oSrcDs._viewRecords;
		
		var arrfactor = this.arrFactorColumnInfo;
		var pre_pvseq = "";
			
		var sCurrGroupVal = "";
		var sPrevGroupVal = "";
		var sCurrVal = "";
		var aCurrVal = "";
		var sPrevVal = String.fromCharCode(30);
		var nRow = 0;
		var val,val2;
		
		for(var i=0;i<rawRec.length;i++) {
			if(rawRec._level > 0) continue;

			// 중복데이타는 1건만 처리
			aCurrVal = [];
			for(var j = 0; j < arrGroupColIdx.length; j++) {
				val = this.pivotConvertData(rawRec[i][arrGroupColIdx[j]]);
				aCurrVal.push(val);
			}
			sCurrVal = aCurrVal.join("");
			
			if(sCurrVal == sPrevVal) {
				this.pivotCopyFactorRecord(oPvtDs,nRow,arrFactorCol,arrFactorColIdx,rawRec[i],arrFactorColType);
			} else {
				// 추가
				nRow = oPvtDs.addRow();
				this.pivotCopyFixRecord(oPvtDs,nRow,arrGroupCol,arrGroupColIdx,rawRec[i]);
				this.pivotCopyFactorRecord(oPvtDs,nRow,arrFactorCol,arrFactorColIdx,rawRec[i],arrFactorColType);
			}
			
			sPrevGroupVal = sCurrGroupVal;
			sPrevVal = sCurrVal;
		}
		
		arrGroupCol = arrGroupColIdx = arrFactorColType = arrPivotCol = arrPivotColIdx = arrFactorCol = arrFactorColIdx = null;
		
		this.pivotProc2();

	};
	nexacro.Grid.prototype.pivotSubSumLineExpr = function(nCell,row,lvl) {
		if(lvl < 1) return;
		var nCnt = this.formatInfo.groupds.rowcount-1;
		if(nCell > nCnt) return;
		
		var nBaseCell = nCnt - lvl;
		var bkColor;
		if(!this.currentstyle.border || this.pivotLineColor == "") return;
		var lineColor;
		if(this.pivotLineColor == "") lineColor = this.currentstyle.border.color;
		else lineColor = this.pivotLineColor;

		// [top],[right],[bottom],[left]
		if(nBaseCell == nCell) {		// 동일 level
			return "0px none transparent,0px none transparent,1px solid " + lineColor + ",1px solid " + lineColor + "";
		} else if(nBaseCell > nCell) {	// 상위 cell
			return "0px none transparent,1px solid " + lineColor + ",0px none transparent,1px solid " + lineColor + "";
		} else if(nBaseCell < nCell) {	// 하위 cell
			return "1px solid " + lineColor + ",0px none transparent,1px solid " + lineColor + ",0px none transparent";
		}
	};
	nexacro.Grid.prototype.pivotSubSumBKColorExpr = function(col, row, lvl) {
		if(lvl < 1) return;
		var nCnt = this.formatInfo.groupds.rowcount-1;
		if(col > nCnt) return;
		
		var nBaseCell = nCnt - lvl;
		if(nBaseCell <= col) {
			if(this.pivotsumsubcache[row]) return this.pivotsumsubcache[row];
			var color = this.formatInfo.groupds.getColumn(nBaseCell,"bkColor");
			this.pivotsumsubcache[row] = color;
			return color;
		} else {
			var color = this.formatInfo.groupds.getColumn(col,"bkColor");
			return color;
		}
	};	
	nexacro.Grid.prototype.pivotValueReplace = function(oInfoDs,gb,i,col,v) {
		// 8.1
		if(gb == "TEXT") {
			if(!v) return "";
			if(typeof(v) != "string") return v;
		} else {
			// 문자열 변경
			var sCol = oInfoDs.getColumn(i,"colID");
			if(v.indexOf(sCol)>=0) {
				v = nexacro.replaceAll(v, sCol, col);
			}
		}
		v = nexacro.replaceAll(v, "&", "&amp;");
		v = nexacro.replaceAll(v, "<", "&lt;");
		v = nexacro.replaceAll(v, ">", "&gt;");
		v = nexacro.replaceAll(v, "\"", "&quot;");
		v = nexacro.replaceAll(v, "'", "&apos;");
		v = nexacro.replaceAll(v, '"', "&quot;");
		v = nexacro.replaceAll(v, " ", "&#32;");
		var test = String.fromCharCode(13);
		v = nexacro.replaceAll(v, test,"&#13;");			
		
		return v;
	};
	/**
	 * @class make Contents string
	 * @param {Object} oInfoDs - 데이터셋
	 * @param {String} gb - head,body 구분
	 * @param {Number} i  - info ds index
	 * @param {Number} col - cell col
	 * @param {Number} colspan - cell colspan
	 * @param {Number} row - cell row
	 * @param {Number} rowspan - cell rowspan
	 * @param {String} text - cell text	 
	 * @param {String} group - group	 
	 * @return {String}
	 */	
	nexacro.Grid.prototype.getPivotContent = function(oInfoDs,gb,i,col,colspan,row,rowspan,text,group) {
		var sContent = "";
		sContent = '\t\t<Cell col="' + col + '" colspan="' + colspan + '" row="' + row + '" ';
		sContent += 'rowspan="' + rowspan + '" ';

		var sStyle = 'style="';
		
		if(gb == "BODY") {
			var factorstring = false;
			if(group == "F") {
				var colid = oInfoDs.getColumn(i,"colID");
				var colinfo = this.pivotSourceDataset.colinfos[colid];
				if(colinfo && colinfo.type.toUpperCase() == "STRING") factorstring = true;
				colid = colinfo = null;
			}
			if(oInfoDs.getColumn(i,"color") != undefined && oInfoDs.getColumn(i,"color") != null && oInfoDs.getColumn(i,"color") != "") {
				var v = (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"color")));
				sStyle += 'color:' + v + ";";
				sStyle += 'color2:' + v + ";";
			}
				
			if(this.pivotGroupSubSum && this.pivotGroupSubSumExpr) {
				var gds = this.formatInfo.groupds;
				if(gds.rowcount > 1) {
					var vv = "";
					if(oInfoDs.getColumn(i,"bkColor") != undefined && oInfoDs.getColumn(i,"bkColor") != null && oInfoDs.getColumn(i,"bkColor") != "") {
						vv = (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"bkColor")));
					}
					vv = "&apos;" + vv + "&apos;";
					sExpr = "EXPR(dataset.getRowLevel(currow)&gt;0?comp.pivotSubSumBKColorExpr(" + col + ",currow,dataset.getRowLevel(currow)):" + vv + ")";
					sStyle += 'background:' + sExpr + ";";
					sStyle += 'background2:' + sExpr + ";";
				} else {
					if(oInfoDs.getColumn(i,"bkColor") != undefined && oInfoDs.getColumn(i,"bkColor") != null && oInfoDs.getColumn(i,"bkColor") != "") {
						var v = (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"bkColor")));
						sStyle += 'background:' + v + ";";
						sStyle += 'background2:' + v + ";";
					}
				}
			} else {
				if(oInfoDs.getColumn(i,"bkColor") != undefined && oInfoDs.getColumn(i,"bkColor") != null && oInfoDs.getColumn(i,"bkColor") != "") {
					var v = (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"bkColor")));
					sStyle += 'background:' + v + ";";
					sStyle += 'background2:' + v + ";";
				}
			}		
			if(group == "G" && this.pivotGroupSubSum && this.pivotGroupSubSumExpr) {
				if((oInfoDs.rowcount-1) > i) {
					var expr = "EXPR(comp.pivotSubSumLineExpr(" + i + ",currow,dataset.getRowLevel(currow)))";
					sStyle += 'line:' + expr + ';';
					sStyle += 'selectline:' + expr + ';';
				}
			}
			if(group == "F" && this.pivotFactorOnlyNumber == false && factorstring == true) {
				sStyle += 'align:right;';
			} else {
				if(oInfoDs.getColumn(i,"bodyAlign") != undefined && oInfoDs.getColumn(i,"bodyAlign") != null && oInfoDs.getColumn(i,"bodyAlign") != "") {
					sStyle += 'align:' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"bodyAlign"))) + ";";
				}
			}
			if(this.pivotFactorType == "AVG") {
				if(group == "F" && factorstring == false) {
					sContent += 'text="bind:' + (text + "__AVG") + '" ';
				} else {
					sContent += 'text="bind:' + text + '" ';
				}
			} else {
				sContent += 'text="bind:' + text + '" ';
			}
			
			if(group == "F" && this.pivotFactorOnlyNumber == false && factorstring == true && this.pivotFactorYN != "N") {
				if(this.pivotFactorStringMask != undefined && this.pivotFactorStringMask != null && this.pivotFactorStringMask != "" ) {
					if(oInfoDs.getColumn(i,"displayType") == "date" || oInfoDs.getColumn(i,"displayType") == "calendarcontrol"){
						sContent += 'calendardateformat="' + this.pivotFactorStringMask +  '" ';		
					}else{
						sContent += 'maskeditformat="' + this.pivotFactorStringMask + '" ';
					}					
				} else {
					sContent += 'maskeditformat="#,###.###" ';
				}
			} else {
				if(oInfoDs.getColumn(i,"mask") != undefined && oInfoDs.getColumn(i,"mask") != null && oInfoDs.getColumn(i,"mask") != "") {
					if(oInfoDs.getColumn(i,"displayType") == "date" || oInfoDs.getColumn(i,"displayType") == "calendarcontrol"){
						sContent += 'calendardateformat="' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"mask"))) +  '" ';		
					}else{
						sContent += 'maskeditformat="' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"mask"))) +  '" ';
					}
				} else {
					if(group == "F" && this.pivotFactorType == "AVG" && factorstring == false) {
						sContent += 'maskeditformat="#,###.##" ';
					}
				}
			}
			if(group == "F" && this.pivotFactorOnlyNumber == false && factorstring == true) {				
				if(oInfoDs.getColumn(i,"displayType") != undefined && oInfoDs.getColumn(i,"displayType") != null && oInfoDs.getColumn(i,"displayType") != "") {
					sContent += 'displaytype="' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"displayType"))) + '" ';
					if(oInfoDs.getColumn(i,"displayType") == "date" || oInfoDs.getColumn(i,"displayType") == "calendarcontrol"){
						sContent += ' calendardisplaynulltype="none" ';
					}
				}else{
					sContent += 'displaytype="mask" ';
				}				
				
			} else {
				if(oInfoDs.getColumn(i,"displayType") != undefined && oInfoDs.getColumn(i,"displayType") != null && oInfoDs.getColumn(i,"displayType") != "") {
					sContent += 'displaytype="' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"displayType"))) + '" ';
				}
			}
			if(oInfoDs.getColumn(i,"comboDataset") != undefined && oInfoDs.getColumn(i,"comboDataset") != null && oInfoDs.getColumn(i,"comboDataset") != "") {
				sContent += 'combodataset="' + oInfoDs.getColumn(i,"comboDataset") + '" ';
			}
			if(oInfoDs.getColumn(i,"comboCode") != undefined && oInfoDs.getColumn(i,"comboCode") != null && oInfoDs.getColumn(i,"comboCode") != "") {
				sContent += 'combocodecol="' + oInfoDs.getColumn(i,"comboCode") + '" ';
			}
			if(oInfoDs.getColumn(i,"comboText") != undefined && oInfoDs.getColumn(i,"comboText") != null && oInfoDs.getColumn(i,"comboText") != "") {
				sContent += 'combodatacol="' + oInfoDs.getColumn(i,"comboText") + '" ';
			}

			if(oInfoDs.getColumn(i,"pivotInfo") == "GROUP") {
				if(this.pivotGroupSuppress) {
					if(oInfoDs.getColumn(i,"pivotInfo") == "GROUP") sContent += 'suppress="' + (i+1) + '" ';
				}
			}
		} else {
			if(gb == "HEAD") {
				if(oInfoDs.getColumn(i,"headAlign") && oInfoDs.getColumn(i,"headAlign") != "") {
					sStyle += 'align:' + oInfoDs.getColumn(i,"headAlign") + ";";
				} else {
					sStyle += 'align:center;';
				}
			} else if(gb == "SUMMARY") {
				if(group == "F") {
					if(this.pivotFactorType == "AVG") {
						if(this.pivotSumMask) sContent += 'maskeditformat="' + this.pivotSumMask + '" ';
						else sContent += 'maskeditformat="#,###.##" ';
					} else {
						if(oInfoDs.getColumn(i,"mask") != undefined && oInfoDs.getColumn(i,"mask") != null && oInfoDs.getColumn(i,"mask") != "") {
							sContent += 'maskeditformat="' + (this.pivotValueReplace(oInfoDs,gb,i,text,oInfoDs.getColumn(i,"mask"))) + '" ';
						}
					}
					sContent += 'displaytype="mask" ';
					sStyle += 'align:right;';
				} else {
					var align = "center";
					if(this.pivotShowSummaryAlign && this.pivotShowSummaryAlign != "") align = this.pivotShowSummaryAlign
					else if(oInfoDs.getColumn(i,"headAlign") && oInfoDs.getColumn(i,"headAlign") != "") align = oInfoDs.getColumn(i,"headAlign");
					sStyle += 'align:' + align + ';';
				}
			}
			// 8.1
			sContent += 'text="' + this.pivotValueReplace("","TEXT",0,"",text) + '" ';
			//sContent += 'text="' + text + '" ';
		}
		sStyle += '"';
		sContent = sContent + sStyle + '/>\n';
		return sContent;
	};	
	/**
	 * @class 그리드 format을 생성.
	 * @return N/A
	 */
	nexacro.Grid.prototype.setPivotGridFormat = function() {
		//var oInfoDs = this.pivotInfoDataset;
		var oSrcDs  = this.pivotSourceDataset;
		var oPvtDs  = this.pivotDataset;
			
		var sContents = "";
		var arrContents = [];
		arrContents.push('<Formats>\n');
		arrContents.push('<Format id="default">\n');
		
		//---------------------------------------------------------------------------------
		// columns setting
		//---------------------------------------------------------------------------------
		arrContents.push('\t<Columns>\n');
		var oInfoDs = this.formatInfo.groupds;

		// Columns : LEFT FIXED Column
		var val = "";
		for(var i=0;i<oInfoDs.rowcount;i++) {
			val = oInfoDs.getColumn(i,"colsize");
			sContents = '\t\t<Column size="' + (val>0?val:80)  + '" band="left"/>\n';
			arrContents.push(sContents);
		}
		// Columns : FACTOR Column
		oInfoDs = this.formatInfo.factords;
		
		var arrFactorInfo = [];
		for(var i=0;i<oInfoDs.rowcount;i++) {
			arrFactorInfo[i] = { 	"size" : oInfoDs.getColumn(i,"colsize")?oInfoDs.getColumn(i,"colsize"):"80" ,
									"headAlign" : oInfoDs.getColumn(i,"headAlign")?oInfoDs.getColumn(i,"headAlign"):"center" ,
									"bodyAlign" : oInfoDs.getColumn(i,"bodyAlign")?oInfoDs.getColumn(i,"bodyAlign"):"right" ,
									"bkColor" : oInfoDs.getColumn(i,"bkColor")?oInfoDs.getColumn(i,"bkColor"):"" ,
									"color" : oInfoDs.getColumn(i,"color")?oInfoDs.getColumn(i,"color"):"" ,
									"mask" : oInfoDs.getColumn(i,"mask")?oInfoDs.getColumn(i,"mask"):"" ,
									"titleText" : oInfoDs.getColumn(i,"titleText")?oInfoDs.getColumn(i,"titleText"):"" 
								};
		}
		var nDiv = this.arrFactorColList.length / oInfoDs.rowcount;
		for(var i=0;i<nDiv;i++) {
			for(var j=0;j<oInfoDs.rowcount;j++)	{
				sContents = '\t\t<Column size="' + arrFactorInfo[j].size + '"/>\n';
				arrContents.push(sContents);
			}
		}
		if(this.pivotShowRightSummary) {
			for(var j=0;j<oInfoDs.rowcount;j++)	{
				sContents = '\t\t<Column size="' + this.pivotShowRightSummarySize + '"';
				if(this.pivotShowRightSummaryBandRight) sContents+= ' band="right"';
				sContents+= '/>\n';
				arrContents.push(sContents);
			}
		}
		arrContents.push('\t</Columns>\n');
		//---------------------------------------------------------------------------------
		// rows setting
		//---------------------------------------------------------------------------------
		arrContents.push('\t<Rows>\n');
		var nRowCnt = 0;
		var nRowHeght = 24;
		if(this.getRealRowSize(-1) > 0) nRowHeght = this.getRealRowSize(-1);
		for(var i=0;i<this.formatInfo.pivotlist.length;i++) {
			sContents = '\t\t<Row size="' +  this.pivotHeadRowHeight + '"' +
					    ' band="head"/>\n' ;
			arrContents.push(sContents);
			nRowCnt++;
		}
		// factor가 1개 이상일 경우 title을 추가하여 표기..
		if(this.formatInfo.factorlist.length > 1) {
			sContents = '\t\t<Row size="' +  this.pivotHeadRowHeight + '"' +
					    ' band="head"/>\n' ;			
			arrContents.push(sContents);
			nRowCnt++;
		}

		// body
		sContents = '\t\t<Row size="' +  this.pivotBodyRowHeight + '"/>\n' ;
		arrContents.push(sContents);
		
		if(this.pivotShowSummary) {
			sContents = '\t\t<Row size="' +  this.pivotSummaryRowHeight + '"' +
					    ' band="summ"/>\n' ;
			arrContents.push(sContents);		
		}
		arrContents.push('\t</Rows>\n');

		//---------------------------------------------------------------------------------
		// head setting
		//---------------------------------------------------------------------------------
		// GROUP
		var nColSeq = 0;
		arrContents.push('\t<Band id="head">\n');
		oInfoDs = this.formatInfo.groupds;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			sContents = this.getPivotContent(oInfoDs,"HEAD",i,nColSeq,1,0,nRowCnt,oInfoDs.getColumn(i,"titleText"),"G");
			arrContents.push(sContents);
			nColSeq++;
		}
		var fcnt = this.formatInfo.factorlist.length;
		var tmpCol = [];
		for(var i=0;i<nRowCnt;i++) {
			tmpCol[i] = nColSeq;
		}
		oInfoDs = this.formatInfo.pivotds;
		var pThis = this;
		var countLastChildren = function(object) {
			if(object.children && object.children.length>0) {
				var return_val = 0;
				object.children.forEach(function(el){
					return_val += countLastChildren(el);
				});
				return return_val; 
			} else {
				return 1;
			}
		};
		var loopChildren = function(object) {
			if(object.children) {
				object.children.forEach(function(el){
					var cnt = countLastChildren(el);
					var s = pThis.getPivotContent(oInfoDs,"HEAD",el.lvl,tmpCol[el.lvl],(cnt*fcnt),el.lvl,1,el.name);
					arrContents.push(s);
					tmpCol[el.lvl] += (cnt*fcnt);
					if(el.children && el.children.length>0) {
						loopChildren(el);
					} else {
						// factor가 다중으로 구성되어 있는 경우
						if(fcnt>1) {
							for(var i=0;i<fcnt;i++) {
								var st = 'style="align:' + arrFactorInfo[i].headAlign + ';background:' 
												+ arrFactorInfo[i].bkColor + ';color:' + arrFactorInfo[i].color + ';"';
									s = '\t\t<Cell col="'+ tmpCol[el.lvl+1] + '" row="'+ (el.lvl+1) + '" ' +
										'text="' + pThis.pivotValueReplace("","TEXT",0,"",arrFactorInfo[i].titleText) + '" ' + st + '/>\n';
								arrContents.push(s);
								tmpCol[el.lvl+1] += 1;
							}
						}
					}
				});
			}
		};
		// PIVOT
		var arrTmp = this.arrPivotColList;
		loopChildren(arrTmp);
		
		nColSeq = tmpCol[nRowCnt-1];
		// 8.1
		// RIGHT SUMMARY
		if(this.pivotShowRightSummary) {
			// factor가 1개이상인 경우 title 표기
			if(arrFactorInfo.length == 1) {
				sContents = '\t\t<Cell col="'+ nColSeq + '" rowspan="'+ nRowCnt + '" ' +
						'text="' + this.pivotValueReplace("","TEXT",0,"",this.pivotShowRightSummaryText) + '" style="align:' + this.pivotShowRightSummaryAlign + '"/>\n';
				arrContents.push(sContents);
				nColSeq++;
			} else {
				sContents = '\t\t<Cell col="'+ nColSeq + '" rowspan="'+ (nRowCnt-1) + '" colspan="' + (arrFactorInfo.length) + '" ' +
						'text="' + this.pivotValueReplace("","TEXT",0,"",this.pivotShowRightSummaryText) + '" style="align:' + this.pivotShowRightSummaryAlign + '"/>\n';
				arrContents.push(sContents);
				
				for(var i=0;i<arrFactorInfo.length;i++) {
					sContents = '\t\t<Cell col="'+ nColSeq + '" row="' + (nRowCnt - 1) + '" ' +
							'text="' + this.pivotValueReplace("","TEXT",0,"",arrFactorInfo[i].titleText) + '" style="align:' + this.pivotShowRightSummaryAlign + '"/>\n';
					arrContents.push(sContents);
					nColSeq++;
				}
			}
		}
		arrContents.push('\t</Band>\n');
		//---------------------------------------------------------------------------------
		// body setting
		//---------------------------------------------------------------------------------
		nColSeq = 0;
		// GROUP
		arrContents.push('\t<Band id="body">\n');
		oInfoDs = this.formatInfo.groupds;
		for(var i=0;i<oInfoDs.rowcount;i++) {
			sContents = this.getPivotContent(oInfoDs,"BODY",i,nColSeq,1,0,1,oInfoDs.getColumn(i,"colID"),"G");
			arrContents.push(sContents);
			nColSeq++;
		}
		// FACTOR
		oInfoDs = this.formatInfo.factords;
		var nFactSeq = 0;
		for(var i=0;i<nDiv;i++) {
			for(var j=0;j<oInfoDs.rowcount;j++) {
				sContents = this.getPivotContent(oInfoDs,"BODY",j,nColSeq,1,0,1,this.arrFactorColList[nFactSeq],"F");
				arrContents.push(sContents);
				nColSeq++;
				nFactSeq++;
			}
		}
		// RIGHT SUMMARY
		if(this.pivotShowRightSummary) {
			for(var i=0;i<arrFactorInfo.length;i++) {
				var sSumCol = "PV_SUBSUM_"+i.toString();
				if(this.pivotFactorType == "AVG") {	// AVERAGE
					sSumCol = sSumCol + "__AVG";
				}
				var st = 'style="align:' + arrFactorInfo[i].bodyAlign + '"';
				//sContents = '\t\t<Cell celltype="summary" displaytype="number" col="'+ nColSeq + '" text="bind:' + sSumCol + '" style="align:right"/>\n';
				sContents = '\t\t<Cell maskeditformat="' + arrFactorInfo[i].mask + '" displaytype="mask" col="'+ nColSeq + '" text="bind:' + sSumCol + '" style="align:right"/>\n';
				arrContents.push(sContents);
				nColSeq++;
			}
		}
		arrContents.push('\t</Band>\n');
		//---------------------------------------------------------------------------------
		// summary setting
		//---------------------------------------------------------------------------------	
		if(this.pivotShowSummary) {
			arrContents.push('\t<Band id="summary">\n');
			nColSeq = 0;
			oInfoDs = this.formatInfo.groupds;

			sContents = this.getPivotContent(oInfoDs,"SUMMARY",0,nColSeq,oInfoDs.rowcount,0,1,this.pivotShowSummaryText);
			arrContents.push(sContents);
			nColSeq = oInfoDs.rowcount;
			
			oInfoDs = this.formatInfo.factords;
			var nFactSeq = 0;
			var nSum = 0;
			var nDiv = 0;
			for(var i=0;i<this.arrFactorColList.length;i++) {
				if(this.pivotFactorType == "AVG") {	// AVERAGE
					nSum = oPvtDs.getSum(this.arrFactorColList[i]) / oPvtDs.getSum(this.arrFactorColList[i] + "__CNT");
				} else {
					nSum = oPvtDs.getSum(this.arrFactorColList[i]);
				}
				nDiv = (i%oInfoDs.rowcount);
				sContents = this.getPivotContent(oInfoDs,"SUMMARY",nDiv,nColSeq,1,0,1,nSum,"F");
				arrContents.push(sContents);
				nColSeq++;
			}
			
			// RIGHT SUMMARY
			if(this.pivotShowRightSummary) {
				for(var i=0;i<arrFactorInfo.length;i++) {
					var sSumCol = "PV_SUBSUM_"+i.toString();
					if(this.pivotFactorType == "AVG") {	// AVERAGE
						nSum = oPvtDs.getSum(sSumCol) / oPvtDs.getSum(sSumCol + "__CNT");
					} else {
						nSum = oPvtDs.getSum(sSumCol);
					}
					sContents = this.getPivotContent(oInfoDs,"SUMMARY",i,nColSeq,1,0,1,nSum,"F");
					arrContents.push(sContents);
					nColSeq++;
				}
			}			
			arrContents.push('\t</Band>\n');
		}
		arrContents.push('\t</Format>\n');
		arrContents.push('\t</Formats>\n');
		trace(arrContents.join(""));
		try {
			this.set_formats(arrContents.join(""));
		} catch(e) {
		}
		//oPvtDs.set_rowposition(0);
		
		arrContents = arrFactorInfo = tmpCol = null;
		
		this.pivotProc3();
	};
	
	if(!Date.prototype.yyyymmdd)
	{
		Date.prototype.yyyymmdd = function() 
		{
			var yyyy = this.getFullYear();
			var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
			var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
			return "".concat(yyyy).concat(mm).concat(dd);
		};

		Date.prototype.yyyymmddhhmm = function() 
		{
			var yyyy = this.getFullYear();
			var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
			var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
			var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
			var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
			return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min);
		};

		Date.prototype.yyyymmddhhmmss = function() 
		{
			var yyyy = this.getFullYear();
			var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
			var dd  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
			var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
			var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
			var ss = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
			return "".concat(yyyy).concat(mm).concat(dd).concat(hh).concat(min).concat(ss);
		};
	}
	
	if (!Array.prototype.forEach) 
	{
		//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		Array.prototype.forEach = function(callback, thisArg) 
		{
			var T, k;

			if (this == null) 
			{
			  throw new TypeError(' this is null or not defined');
			}

			var O = Object(this);
			var len = O.length >>> 0;
			if (typeof callback != "function") 
			{
			  throw new TypeError(callback + ' is not a function');
			}
			if (arguments.length > 1) 
			{
			  T = thisArg;
			}
			k = 0;
			while (k < len) 
			{
			  var kValue;
			  if (k in O) 
			  {
				kValue = O[k];
				callback.call(T, kValue, k, O);
			  }
			  k++;
			}
		};
	}
	if (!Array.prototype.reduce) {
		//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	  Array.prototype.reduce = function(callback /*, initialValue*/) {
		if (this == null) {
		  throw new TypeError('Array.prototype.reduce called on null or undefined');
		}
		if (typeof callback != 'function') {
		  throw new TypeError(callback + ' is not a function');
		}
		var t = Object(this), len = t.length >>> 0, k = 0, value;
		if (arguments.length == 2) {
		  value = arguments[1];
		} else {
		  while (k < len && !(k in t)) {
			k++;
		  }
		  if (k >= len) {
			throw new TypeError('Reduce of empty array with no initial value');
		  }
		  value = t[k++];
		}
		for (; k < len; k++) {
		  if (k in t) {
			value = callback(value, t[k], k, t);
		  }
		}
		return value;
	  };
	}	
}
