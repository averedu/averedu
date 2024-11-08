/**
*  청호 공통 Mobile Lib
*  @FileName 	CkUtilM.js 
*  @Creator 	LCJ
*  @CreateDate 	2018.01.18
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.01.18     	     LCJ 	               최초 생성 
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class Nexup 서비스를 호출하기 전에 호출되는 함수. 자동 호출으로 화면에서 호출하지 말 것<br>
* @param N/A
* @return N/A
* @example 
* this.gfnNexUpCommBeforeService();
*/  
pForm.gfnNexUpCommBeforeService = function() 
{
	// 다른 곳에서 로그인 했는지 체크하기 위해
	// 서버의 공통에 저장된 사용자 ID를 가져온다.
	var bExistSrvName;
	
	bExistSrvName = this._gfnIsExistServiceName("COMN.NOSESSION.GET_SERVER_LOGIN_NU_ID");
	
//	trace("GET_SERVER_LOGIN_NU_ID Exist ==> " + bExistSrvName);
	var dsDsUserID;
	
	// 이전에 추가된 서비스가 없는 경우
	if(!bExistSrvName) {
		var sSrvLoginUserIdName = "dsSrvLoginUserIdNU";	
		if(this.isValidObject(sSrvLoginUserIdName)) {
			dsUserId = this.objects[sSrvLoginUserIdName];
		}
		else {
			dsUserId = new Dataset();
			dsUserId.name = "dsSrvLoginUserIdNU";
			this.addChild(dsUserId.name, dsUserId);
		
			dsUserId.addColumn( "SERVER_NU_USER_ID", "STRING", 256 );
		}
	
		nexup.AddService(this, "COMN.NOSESSION.GET_SERVER_LOGIN_NU_ID", "", "dsSrvLoginUserIdNU=dsSrvLoginUserIdNU", "");
	}
	
	// 데이터셋 로그 남기는 서비스 호출
	this.gfnSaveDataLogInfo();
};

/**
* @class Nexup NexUp에 호출되는 서비스에서 파라미터 서비스가 존재하는 지 체크.<br> 자동 호출으로 화면에서 호출하지 말 것<br>
* @param N/A
* @return N/A
* @example 
* this._gfnIsExistServiceName();
*/  
pForm._gfnIsExistServiceName = function(sChkSrvName) 
{
	// 호출 서비스를 호출한다.
	var sServiceName = "";

	for(var i = 0; i < this.dsService.getRowCount(); i++) { 
		sServiceName = this.dsService.getColumn(i, "name");
		
		if(sServiceName == sChkSrvName)
			return true;
	}
	
	return false;
};

/**
* @class Nexup 서비스를 호출한 후에 호출되는 함수. <br>
* @param {Object} objGrid - 그리드 Object
* @return N/A
* @example 
* this.gfnGrdFindRowPos(gdRole, "ROLE_CD&&ROLE_NM");
*/  
pForm.gfnNexUpCommCallback = function(sSvcId, nErrorCode, sErrorMsg, callBackNm){
/*	trace("sSvcId:"+sSvcId);
	trace("nErrorCode:"+nErrorCode);
	trace("sErrorMsg:"+sErrorMsg);
	trace("callBackNm:"+callBackNm);
*/
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
	
	// 중복로그인 관련 에러인 경우
	if(nErrorCode == -9999999) {
		if (sNowLang != "KO") {
			this.alert("The session has been terminated by another system.\nGo to login screen.");
		}
		else {
			this.alert("다른 시스템에서 로그인되어 세션이 종료되었습니다.\n로그인 화면으로 이동합니다.");
		}
		
		this._gfnGoLoginScreen();
		
		//nexacro.getApplication().gvVFrameSet.set_separatesize("*,0,0");
		//this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
	}
	else {
		// 로그인 시 ID값이 들린 경우 혹은 세션이 종료된 경우
		if(nErrorCode == 9000000) {
			// Login인 경우
			if(sSvcId == "Login") {
				this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
			}
			else {
				if (sNowLang != "KO") {
					this.alert("The connection to the server is terminated and the login screen is displayed.");
				}
				else {
					this.alert("서버와의 접속이 종료되어 로그인 화면으로 이동합니다.");
				}
				
				this._gfnGoLoginScreen();				
			}
		}
		else {
	//		this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
			// 서버의 User ID와 Local User ID가 다른 경우 로그인 창으로 이동
			// 하기 위한 비교
			if(this.dsSrvLoginUserIdNU.getRowCount() == 0) {
				this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
			} else {
				var sServerNxUserId = this.dsSrvLoginUserIdNU.getColumn(0, "SERVER_NU_USER_ID");
				var sLocalUserId = 	this.gfnGetUserInfo("USER_ID");
				
				//trace("ServerNxUserId ==> " + sServerNxUserId);
				//trace("sLocalUserId ==> " + sLocalUserId);
				
				if(this.gfnIsNull(sServerNxUserId)) {
					this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
				}
				else {
					if(this.gfnIsNull(sLocalUserId)) {
						this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
					}
					else {
						if(sServerNxUserId != sLocalUserId) {
							if (sNowLang != "KO") {
								this.alert("The current login ID is different from the server ID.\nGo to login screen.");
							}
							else {
								this.alert("현재 로그인한 ID와 서버의 사용자 ID가 달라서 로그인 화면으로 이동합니다.");
							}						
							
							this._gfnGoLoginScreen();
						}
						else {
							this[callBackNm].call(this, sSvcId, nErrorCode, sErrorMsg);
						}
					}
				}
			}
		}
	}
};

/**
* @class 로그인 화면으로 이동. <br>
* @param N/A
* @return N/A
* @example 
* this._gfnGoLoginScreen();
*/  
pForm._gfnGoLoginScreen = function()
{
	if (system.navigatorname == "nexacro") {
		var sUrl = nexacro.getEnvironment().services["svcUrl"].url + "cnMyUM/";
		var sStartUrl = " -S '" + sUrl + "start.json' -K 'cnMyUM' ";
		system.execNexacro(sStartUrl);
		nexacro.getApplication().exit();		
	}
	else {
		document.location.reload(true); 
	}
};

var objDsGrd;
var lv_RowCnt = 0;
//var findVar = "";

/**
* @class 전달된 컬럼의 Row Position을 찾는다. <br>
* @param {Object} objGrid - 그리드 Object
* @return N/A
* @example 
* this.gfnGrdFindRowPos(gdRole, "ROLE_CD&&ROLE_NM");
*/  
pForm.gfnGrdFindRowPos = function(obj, argColNm)
{
	var objGrd = obj;
	objDsGrd = objGrd.binddataset;
	
	var rowPosArray = argColNm.split("&&");
	
	if (this.objects[objDsGrd].rowcount == 0) return;
	
	var dsInputName = "dsRowPos";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("GRD_NM","string",255);  //그리드명
		dsInput.addColumn("COL_NM","string",255);  //컬럼명
	}
	
	if (lv_RowCnt == 0){
		dsInput.clearData();
	}
	
	var findVar = "";
	var nRow = this.objects[objDsGrd].rowposition;
	
	for(var j=0; j < rowPosArray.length ;j++){
		var rowVal = this.objects[objDsGrd].getColumn(nRow,rowPosArray[j]);
		var rowColNm = rowPosArray[j];
		
		if (this.gfnIsNull(rowVal)) continue;
		if (j == 0){      
			findVar = rowColNm + "=='" +rowVal + "'";
		} else {
			findVar = findVar + " && " + rowColNm + "=='" + rowVal + "'";
		}
	}
	
	//dsInput.deleteAll();
	nRow = dsInput.addRow();
	dsInput.setColumn(nRow,"GRD_NM",obj.name);
	dsInput.setColumn(nRow,"COL_NM",findVar);
	
	lv_RowCnt++; 
};

/**
* @class 메모리에 기억된 position index값을 해당 dataset에 설정 <br>
* @param {Object} objGrid - 그리드 Object
* @return N/A
* @example 
* this.gfnGrdSetRowPos("gdRole");
*/ 
pForm.gfnGrdSetRowPos = function(objGrd)
{
	var objBindDs = objGrd.binddataset;
	
	//eval(objGrd).set_treeinitstatus('collapse,null');
	if (this.isValidObject("dsRowPos")){
		if (this.gfnIsNull(this.dsRowPos.getColumnInfo("GRD_NM"))) return;
		var colNm = this.dsRowPos.getColumn(this.dsRowPos.findRow("GRD_NM",objGrd.name),"COL_NM");
		
		//eval(objGrd).set_treeinitstatus('expand,all');
		if (this.objects[objBindDs].rowcount == 0 
		 || this.dsRowPos.findRow("GRD_NM",objGrd.name) == -1 
		 || this.objects[objBindDs].findRowExpr(colNm) == -1){
			this.dsRowPos.deleteRow(this.dsRowPos.findRow("GRD_NM",objGrd.name));	
			//eval(objGrd).set_treeinitstatus('expand,all');
			lv_RowCnt = 0;
			return;
			//this.objects[objBindDs].set_rowposition(0);
			//eval(objGrd).vscrollbar.pos = 0;
		} else {
			var findRowExpr = this.objects[objBindDs].findRowExpr(colNm);
			this.objects[objBindDs].set_rowposition(findRowExpr);
			eval(objGrd).vscrollbar.pos = findRowExpr;
		}
		//trace(this.dsRowPos.saveXML());
		//trace("objGrd.name : "+objGrd.name);
		this.dsRowPos.deleteRow(this.dsRowPos.findRow("GRD_NM",objGrd.name));	
		//trace("after : "+this.dsRowPos.saveXML());
	}
	//eval(objGrd).set_treeinitstatus('expand,all');
	lv_RowCnt = 0;
};

var dsOutCommCode;
var aParam;
var sLoc;
/**
* @class 공통코드콤보설정 DB 데이터 (Combo/Grid) <br>
* @param {Array} param - 콤보 파라미터
* @param {String} [sLocale] - 언어(KO, EN)
* @param {String} [sLocalGubun] - 로컬코드 사용 여부 

* @return N/A
* @example 
* var param = [
		  {biztype:"Combo", code:"0000",  objid: this.divSearch.cboSys} 		//시스템구분
		, {biztype:"Radio", code:"0228",  objid: this.rdoVtMenuYn} 			//가상메뉴여부 
		, {biztype:"Combo", code:"0288", selecttype:"A",  objid: this.div_Search.cbo_UseYn} 	//사용여부
    ];
    
	this.gfnGetCommonCode(param);
*/  
pForm.gfnGetCommonCode = function(param, sLocale)
{
	aParam = param;
	sLoc = sLocale;
	
	var dsName = "ds_" + this.name;
    var dsCode = this._gfnGetDataSet(dsName);
	
	var dsOutName = "ds_" + this.name + "_out";
    dsOutCommCode = this._gfnGetDataSet(dsOutName);
	
	dsCode.addColumn( "COMM_CODE", "STRING", 10 );
	var nAddRow;
	
	dsCode.clearData();
	dsOutCommCode.clearData();
	
    for (var idx in aParam){
        if (!this.gfnIsNull(aParam[idx].objid)) {
            var code 		 = aParam[idx].code;
			
			nAddRow = dsCode.addRow();
			dsCode.setColumn(nAddRow, "COMM_CODE", code);
		}
	}
	
	if(dsCode.getRowCount() != 0) {
		this._gfnSearchCommCode(dsName, dsOutName);
	}
};

/**
* @class 공통코드 DB 조회 함수. <br>
* @param {String} dsInName - In Dataset 명
* @param {String} dsOutName - out Dataset 명
* @return N/A
* @example 
* this._gfnSearchCommCode(dsInName, dsOutName);
*/
pForm._gfnSearchCommCode = function(dsInName, dsOutName)
{
	var sInds = "dsCode=" + dsInName;
	var sOutDs = dsOutName + "=dsComboData";
	//Service Add(COMN.GET_COMN_CODE_S01)
	nexup.AddService(this, "COMN.GET_COMN_CODE_S01", sInds, sOutDs, "");

	//Call Service 
	nexup.CallService(this, "SearchCommCode", "_gfnCommCodeCallBack");

};

/**
* @class 하면 공통코드 조회 Callback 함수. <br>
* @param {String} strServiceId - Service ID
* @param {String} strErrorCode - Error Code
* @param {String} strErrorMsg - Error Message
* @return N/A
* @example 
* this._gfnCommCodeCallBack(strServiceId, strErrorCode, strErrorMsg);
*/
pForm._gfnCommCodeCallBack = function(strServiceId, strErrorCode, strErrorMsg)
{
	if (strErrorCode < 0) 
	{
		// 에러 메시지 출력
		trace("Log Error ==> " + strErrorMsg);
		return;
	}

	switch (strServiceId) 
	{
		case "SearchCommCode":	// 코드 조회
			this._gfnSetCommonCode();
			break;
	}
};

/**
* @class 공통코드콤보설정(DB 조회 코드)(Combo/Grid) <br>
* @return N/A
* @example 
	this._gfnSetCommonCode();
*/  
pForm._gfnSetCommonCode = function(sLocalGubun)
{
    var objApp = nexacro.getApplication();
	var objDs;
	
	// Local 구분에 데이터가 있는 없는 경우 서버 데이터 이용
	if(this.gfnIsNull(sLocalGubun)) {
		objDs = dsOutCommCode;	// 서버 조회 데이터
	}
	else {	// Local Dataset 사용(이미 지정한 데이터
		objDs = objApp.gdsLocalComboData;
	}

	// 다국어 처리
	var v_sLang = (this.gfnIsNull(sLoc) ? String(nexacro.getEnvironmentVariable("evLanguage")) : sLoc);
    for (var idx in aParam){
//        if (!this.gfnIsNull(param[idx].objid) && this.isValidObject(param[idx].objid)) {
        if (!this.gfnIsNull(aParam[idx].objid)) {
            // 여기는 무조건 단일값
            var bizType 	 = aParam[idx].biztype;
            var code 		 = aParam[idx].code;
			// Code Column 추가
            var codecol		 = aParam[idx].codecol==undefined?"CMDT_CODE":aParam[idx].codecol;
//			trace("codecol ==> " + codecol);
            if (v_sLang.toLowerCase() == "ko"){
				var data = aParam[idx].data==undefined?"CODE_NAME":aParam[idx].data;
			}
			else if (v_sLang.toLowerCase() == "en"){
				var data = aParam[idx].data==undefined?"CODE_NAME":aParam[idx].data;
			}
            var selecttype   = aParam[idx].selecttype==undefined?"":aParam[idx].selecttype;
            var bindcolumn   = aParam[idx].bindcolumn;
            var edit		 = aParam[idx].edit;
            var sortcolumn	 = aParam[idx].sortcolumn==undefined ? "SORT_SEQN" : aParam[idx].sortcolumn;
            var sortmethod	 = aParam[idx].sortmethod==undefined ? "asc" : aParam[idx].sortmethod;
            var filterstring = aParam[idx].filterstring==undefined ? "" : aParam[idx].filterstring;
            var direction    = aParam[idx].direction==undefined ? "horizontal" : aParam[idx].direction;
            var align 		 = aParam[idx].align==undefined?"center":aParam[idx].align;
			var text         = aParam[idx].text==undefined?"":aParam[idx].text;
            
            var componentName = this._gfnGetComponentFullName(aParam[idx].objid);
//			trace("componentName ==> " + componentName);
            if (this.gfnIsNull(componentName)){
                alert("componentName is Null. [" + componentName + "]");
                return;
            }
            var dsName = "ds_"+componentName+"_"+code;
            var dsComboName = this._gfnGetDataSet(dsName);
//            trace("dsName : "+dsName);
//            trace("dsComboName : "+dsComboName.name);
            //값복사 시작
//			trace("filterstring ==> " + filterstring);
            if (this.gfnIsNull(filterstring)){
				objDs.filter("COMM_CODE == '"+code+"'");
            }
            else {
				objDs.filter("COMM_CODE == '"+code+"' && ("+filterstring + ")");
            }
//			trace("filterstring ==> " + filterstring);
			var nRowCnt = dsComboName.copyData(objDs,true);
			
			//2016.07.14 아래에서 전체에 % 가 추가됐다는 구분을 하기 위해서 별도의 컬럼을 추가한다. (TYPE)
			//			 TYPE = 0 = false, 1 = true
			var sColNm = "COM_TYPE";
			dsComboName.addColumn(sColNm, "string");
//            alert("nRowCnt : "+nRowCnt);
			objDs.filter("");
            if (dsComboName.rowcount == 0){
                //trace(dsComboName+" filtDs.rowcount == 0");
                continue;
            }
            //정렬
            if (!this.gfnIsNull(sortcolumn)){
                if (!this.gfnIsNull(sortmethod)){
                    sortmethod = "asc";
                }
                dsComboName.keystring = "S:"+(sortmethod=="asc"?"+":"-")+sortcolumn;
                dsComboName.updateSortGroup();
            }
			
            //초기값 설정
            if (!this.gfnIsNull(selecttype)){
                switch (selecttype){
                    case "A": 
						if (v_sLang.toLowerCase() == "ko"){
							if(aParam[idx].objid instanceof Radio){
								this._gfnInsertDefaultRow(dsComboName, "전체", data, selecttype, codecol);
							}else{
								this._gfnInsertDefaultRow(dsComboName, "- 전체 -", data, selecttype, codecol);
							}
							
						//} else if (String(application.gv_locale).toLowerCase() == "en"){
						} else if (v_sLang.toLowerCase() == "en"){
							if(aParam[idx].objid instanceof Radio){
								this._gfnInsertDefaultRow(dsComboName, "All", data, selecttype, codecol);
							}else{
								this._gfnInsertDefaultRow(dsComboName, "- All -", data, selecttype, codecol);
							}						
						}
                        break;
                    case "S": 
						if (v_sLang.toLowerCase() == "ko"){
							if(aParam[idx].objid instanceof Radio){
								this._gfnInsertDefaultRow(dsComboName, "Select", data, selecttype, codecol);
							}else{
								this._gfnInsertDefaultRow(dsComboName, "- 선택 -", data, selecttype, codecol);
							}		
						} else {
							if(aParam[idx].objid instanceof Radio){
								this._gfnInsertDefaultRow(dsComboName, "Select", data, selecttype, codecol);
							}else{
								this._gfnInsertDefaultRow(dsComboName, "- Select -", data, selecttype, codecol);
							}		
						}
                        break;
                    case "N": 
                        if (aParam[idx].objid instanceof Combo){
                            this._gfnInsertDefaultRow(dsComboName, "", data, selecttype, codecol);
                        }
                        break;
                    case "B": 
                        this._gfnInsertDefaultRow(dsComboName, text, data, selecttype, codecol);
                        break;						
                }
            }
            
            if (aParam[idx].objid instanceof Combo){
                aParam[idx].objid.set_innerdataset(dsComboName);
				aParam[idx].objid.set_codecolumn(codecol);
//				aParam[idx].objid.set_codecolumn("COMM_CODE");
				
                if (this.gfnIsNull(aParam[idx].data)){
					if (v_sLang.toLowerCase() == "ko"){
						aParam[idx].objid.set_datacolumn("CODE_NAME");
					} else if (v_sLang.toLowerCase() == "en"){
						aParam[idx].objid.set_datacolumn("CODE_NAME");
					}
				} else {
					aParam[idx].objid.set_datacolumn(aParam[idx].data);
				}
				//2016.08.04 공통코드 셋팅이전에 값이 없을 경우에 index=0 을 반영한다.
			//	trace(param[idx].objid.value);
				if(this.gfnIsNull(aParam[idx].objid.value))
					aParam[idx].objid.set_index(0);

            } else if (aParam[idx].objid instanceof Radio){
				var bEnabe = aParam[idx].objid.enable;
				aParam[idx].objid.set_enable(true);
                aParam[idx].objid.set_innerdataset(dsComboName);
                //2016.08.11 KSK 잠금처리되어있던 부분 다시 활성화 처리함
				aParam[idx].objid.set_codecolumn(codecol);
//                aParam[idx].objid.set_codecolumn("COMM_CODE");
                if (this.gfnIsNull(aParam[idx].data)){
					if (v_sLang.toLowerCase() == "ko"){
						aParam[idx].objid.set_datacolumn("CODE_NAME");
					} else if (v_sLang.toLowerCase() == "en"){
						aParam[idx].objid.set_datacolumn("CODE_NAME");
					}
				} else {
					aParam[idx].objid.set_datacolumn(aParam[idx].data);
				}
				
                if (direction == "horizontal"){
					aParam[idx].objid.set_columncount(dsComboName.rowcount);
                } else if (direction == "vertical"){
					aParam[idx].objid.set_direction("vertical");
					//aParam[idx].objid.set_rowcount(dsComboName.rowcount);                
                }
                if(!bEnabe)
					aParam[idx].objid.set_enable(bEnabe);
            } else if (aParam[idx].objid instanceof Grid){
                var nCellIdx = this._gfnGetCellIdx(aParam[idx].objid, bindcolumn);
                if (this.gfnIsNull(bindcolumn) || nCellIdx == -1){
                    alert("Worng grid bind column name. component name [" + componentName + "], " + "bindcolumn name [" + bindcolumn + "]");
                    return;
                }
                //실제로 해당되는 컬럼 display, edit type 변경 및 Dataset 바인딩
                //실제로 해당되는 컬럼 display, edit type 변경 및 Dataset 바인딩
				var sSelDispType = aParam[idx].objid.getCellProperty("body", nCellIdx, "displaytype");
				if(sSelDispType != "combocontrol" && sSelDispType != "combotext") {
					aParam[idx].objid.setCellProperty("body", nCellIdx, "displaytype", "combotext");
				}
				
                //aParam[idx].objid.setCellProperty("body", nCellIdx, "displaytype", "combocontrol");
                if (!this.gfnIsNull(edit) && edit == "true"){
                    aParam[idx].objid.setCellProperty("body", nCellIdx, "edittype", "combo");
                }
                aParam[idx].objid.setCellProperty("body", nCellIdx, "combodataset", dsComboName.name);
                aParam[idx].objid.setCellProperty("body", nCellIdx, "combocodecol", codecol);
//                aParam[idx].objid.setCellProperty("body", nCellIdx, "combocodecol", "COMM_CODE");
                if (this.gfnIsNull(aParam[idx].data)){
					if (v_sLang.toLowerCase() == "ko"){
						aParam[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", "CODE_NAME");
					} else if (v_sLang.toLowerCase() == "en"){
						aParam[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", "CODE_NAME");					
					}
				} else {
					aParam[idx].objid.setCellProperty("body", nCellIdx, "combodatacol", aParam[idx].data);
				}
                aParam[idx].objid.setCellProperty("body", nCellIdx, "textAlign", align);
            } 
//			else if (param[idx].objid == "multiCombo"){  //멀티콤보일 경우
//                dsComboName.keystring = "S:"+(sortmethod=="asc"?"+":"-")+sortcolumn;
//                //check column add
//                dsComboName.addColumn("checked", "string");
//                dsComboName.rowposition = 0;
                
                //bind dataset
//                param[idx].objid.pdv_ComboList.grd_ComboList.set_binddataset(dsComboName);
//            }
        }
		else {
			trace(aParam[idx].objid.name + " ==> 전달된 Component가 유효하지 않습니다");
		}
    }
	try{
		// Local 구분에 데이터가 있는 없는 경우 서버 데이터 이용
		if(this.gfnIsNull(sLocalGubun)) {
			if (typeof(this.afterOnload) == "function"){
				this.afterOnload();
			}
		}
		else {
			if (typeof(this.afterLocalOnload) == "function"){
				this.afterLocalOnload();
			}
		}
	} catch(e) {
	}
};

/**
* @class 로컬 저장 공통코드콤보설정(Combo/Grid) <br>
* @param {Array} param - 콤보 파라미터
* @param {String} [sLocale] - 언어(KO, EN)
* @return N/A
* @example 
* var param = [
		  {biztype:"Combo", code:"YN01",  objid: this.divSearch.cboSys} 	//여부1
		, {biztype:"Radio", code:"YN02",  objid: this.rdoVtMenuYn} 			//여부2
		, {biztype:"Combo", code:"DYNT", selecttype:"A",  objid: this.div_Search.cbo_UseYn} 	//주야구분
    ];
    
	this.gfnGetLocalCommonCode(param);
*/  
pForm.gfnGetLocalCommonCode = function(param, sLocale)
{
	aParam = param;
	sLoc = sLocale;
	
	this._gfnSetCommonCode("Local");
};

/**
* @class DataSet이 존재하면 그대로 리턴하고 없으면 생성해서 리턴함 <br>
* @param {String} sDatasetNm - DataSet Name
* @return {Object} 생성된 데이터셋
* @example 
* this._gfnGetDataSet("dsName");
*/ 
pForm._gfnGetDataSet = function(sDatasetNm)
{
	var objDataset;
	if (!this.isValidObject(sDatasetNm)){
		objDataset = new Dataset(sDatasetNm);
		objDataset.name = sDatasetNm;
		this.addChild(sDatasetNm, objDataset);
	} else {
		//objDataset = eval(strDatasetNm);
		objDataset = this.objects[sDatasetNm];
	}
	
	return objDataset;
};

/**
* @class  현재 컴포넌트 전체이름(경로)을 반환 <br>
* @param {String} objComp - Component Object id
* @return {String} Object Component 전체 경로
* @example 
* this._gfnGetComponentFullName(objId);
*/ 
pForm._gfnGetComponentFullName = function(objComp)
{
    var sFullName = "";
    while(!this.gfnIsNull(objComp.parent.name) 
       && (objComp.parent.toString().toUpperCase() != "[OBJECT CHILDFRAME]")) 
    {
        sFullName = objComp.name + (this.gfnIsNull(sFullName)?"":"_") + sFullName;
        objComp = objComp.parent;
    }
    //trace("This Component Full name : " + fullName);
    return sFullName;
};

/**
* @class  첫번째 Row 행추가 <br>
* @param {Object} Object - 추가할 데이터셋 Object
* @param {String} value - 추가할 데이터 값
* @param {Dataset} datacolumn - 추가할 데이터셋 데이터 컬럼
* @param {String} selecttype - 추가하는 Type
* @param {String} [codecolumn] - 추가할 데이터셋 코드 컬럼
* @param {String} [sCodeVal] - 추가할 데이터셋 코드 값
* @return {String} value - cn
* @example 
* this._gfnInsertDefaultRow(dsComboName, "전체", data, selecttype);
*/  
pForm._gfnInsertDefaultRow = function(ds, value, datacolumn, selecttype, codecolumn, sCodeVal)
{
	if(this.gfnIsNull(codecolumn))
		codecolumn = "COMM_CODE";
	
    if (ds.insertRow(0) != -1){
		ds.setColumn(0, "COM_TYPE", selecttype);
		
		switch(selecttype){
			case "A":
				if(this.gfnIsNull(sCodeVal)){
					sCodeVal = "%";
				}
				
				ds.setColumn(0, codecolumn, sCodeVal);
				
			break;
			case "S":
			case "N":
			case "":
				if(this.gfnIsNull(sCodeVal)){
					sCodeVal = "";
				}
				
				ds.setColumn(0, codecolumn, sCodeVal);
			break;
		}

		if (this.gfnIsNull(datacolumn)){
			if (String(nexacro.getEnvironmentVariable("evLanguage")).toLowerCase() == "ko"){
				ds.setColumn(0,"COMM_NAME",value);
			}
			else if (String(nexacro.getEnvironmentVariable("evLanguage")).toLowerCase() == "en"){
				ds.setColumn(0,"COMM_NAME",value);
			}
		}
		else {
			ds.setColumn(0,datacolumn,value);
		}
    }
};

/**
* @class  바인드되어 있는 Dataset에 해당되는 ColumnId 를 가지고 있는 Cell의 Index 반환 <br>
* @param {Object} objGrid - 그리드 Object
* @param {String} strCompColumnId - 컴포넌트 컬럼 ID
* @return {int} i - 컬럼 Index (못찾는 경우 -1)
* @example 
* this._gfnGetCellIdx(param[idx].objid, bindcolumn);
*/  
pForm._gfnGetCellIdx = function(objGrid, strCompColumnId) 
{
    //var arrColumnId = new Array();
    
    var nCellCnt = objGrid.getCellCount("body");
    for (var i=0; i<nCellCnt; i++){
		var strTemp = objGrid.getCellProperty("body",i,"text");
		if(this.gfnIsNull(strTemp))
			continue;
			
		var nIdx = strTemp.indexOf(":");
		var strColumnId = strTemp.substr(nIdx+1, strTemp.length);
//        var strColumnId = String(objGrid.getCellProperty("body",i,"text")).replace("BIND:","");
        if (strColumnId == strCompColumnId){
            return i;
        }
    }
    return -1;
};



/**
* @class 조회 조건 컨트롤에 Enter Key 이벤트 세팅 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnSetEnterSearch(this, this.fnSearch);
*/
pForm.gfnSetEnterSearch = function(obj, sFunc)
{
	var arrComp = obj.divSearch.form.components;
	var nLength = arrComp.length;
	var retComp;
	var sEnterObjectList = "Edit||MaskEdit||Combo||Radio||Calendar";

	for( var i=0; i<nLength; i++)
	{
		if( arrComp[i] instanceof nexacro.Div)
		{
			continue;
		}
		else
		{
			if(sEnterObjectList.indexOf(this.gfnTypeOf(arrComp[i])) != -1) {
				arrComp[i].eventKeyFunc = sFunc;
				arrComp[i].addEventHandler("onkeyup",this._gfnSetEnterKeyEventSearch,this);
			}
		}
	}
};


/**
* @class Search 조건에 대한 엔터키 이벤트 <br>
* @param {Object} obj - Component Object
* @param {Event} e - Component Event 값
* @return N/A
* @example 
* this._gfnSetEnterKeyEventSearch(obj, e);
*/
pForm._gfnSetEnterKeyEventSearch = function(obj, e)
{
    if (e.keycode == 13){
		if (obj.parent.parent.name == "divSearch"){
//			obj.updateToDataset();
			this.lookupFunc("fnSearch").call();
		}
	}
};

/**
* @class Dataset Name Split. <br>
* @param {String} sStr - 서비스 Input Dataset
* @return N/A
* @example 
* this._gfnDataLogSplit(sStr);
*/
pForm._gfnDataLogSplit = function(sStr)
{
	var objArr = sStr.split(" ");
	var sRtn;
	
	for(var i = 0; i < objArr.length; i++) {
		var objArr2 = objArr[i].split("=");
		
		if(i == 0) {
			if(objArr2[1].indexOf("gds") != 0) {
				sRtn = objArr2[1];
			}
		}
		else {
			if(objArr2[1].indexOf("gds") != 0) {
				if(this.gfnIsNull(sRtn)) {
					sRtn = objArr2[1];
				}
				else {
					sRtn = sRtn + "," + objArr2[1];
				}
			}
		}
	}
	
	return sRtn;
}

/**
 * @class 지정한 데이터셋 중복값 체크 <br>
 * @param {object} objDs     	- 데이터셋명
 * @param {String} strColumnId   - 컬럼ID(배열형태)
 * @param {String} strColumnNm   - 컬럼명(배열형태)
 * @return {boolean} true, false
 */
pForm.gfnIsDupKeyCheck = function(objDs,arrColumnId,arrColumnNm)
{
	var nRow;
	var strExpr;
	var strColumnId = String(arrColumnId).split(",");
	var strColumnNm = String(arrColumnNm).split(",");
	
	//중복 값 체크...find row 사용
	for (var i=0; i<=objDs.rowcount-1; i++){
		for (var j=0; j<strColumnId.length; j++){
			var strColumnVal = objDs.getColumn(i,strColumnId[j]);
			if (j == 0){
				strExpr = strColumnId[j]+" == '"+ strColumnVal +"'";
			} else {
				strExpr += " && "+strColumnId[j]+" == '"+ strColumnVal +"'";
			}
		}
		nRow = objDs.findRowExpr(strExpr,i+1,objDs.rowcount);
		if (nRow >= 0){
			// 저장할 목록에 {0} 항목이 동일한 데이터가 존재합니다.
			this.gfnAlertM("msg.err.griddup",[strColumnNm]);
			objDs.set_rowposition(nRow) // set
			return false;
		}
	}
	return true;
}

/**
* @class 로그인한 User 정보 Return <br>
* @param {String} sColId - 로그인 USER 정보에서 가져올 DS 컬럼 ID
* @return N/A
* @example 
* this.gfnPostSearch(obj);
*/
pForm.gfnGetUserInfo = function(sColId)
{
	var objDs = nexacro.getApplication().gdsUserInfo;
	var rtnStr;
	
	if(this.gfnIsNull(sColId))
		return "";

	rtnStr = objDs.getColumn(0, sColId);
	
	if(this.gfnIsNull(rtnStr))
		rtnStr = "";
	
	return rtnStr;
};

/**
 * @class 화면의 현재 메뉴 ID로 메뉴명을 가져온다. <br>
 * @param {String} menuid
 * @return {String} strMenuNm
 */
pForm.gfnGetOpenMenuName = function(menuid)
{
	var objApp = nexacro.getApplication();
	var dsMenu = objApp.gdsMenu ;  //메뉴 dataset
	
	if(this.gfnIsNull(menuid))
		return "";
		
	var nFindRow = dsMenu.findRow("MENU_ID", menuid);
	
	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");	
	var sMenuName;
	
	if (sNowLang == "KO") {
		sMenuName = dsMenu.getColumn(nFindRow, nexaApp.gvMenuColumns.menuNm);
	}
	else {
		sMenuName = dsMenu.getColumn(nFindRow, nexaApp.gvMenuColumns.menuNmEN);
		if(this.gfnIsNull(sMenuName)) {
			sMenuName 	= dsMenu.getColumn(nFindRow, nexaApp.gvMenuColumns.menuNm);
		}		
	}			
	
	return sMenuName;
};

/**
* @class 현재 오픈되어 있는 메뉴 ID를 가져온다. <br>
* @param N/A
* @return {String} sMenuId - 현재 오픈되어 있는 메뉴 ID
* @example 
* this.gfnGetCurMenuId();
*/
pForm.gfnGetCurMenuId = function()
{
	if(this.gfnIsNull(nexaApp.gvBase.fvCurMenuId))
		return "";
		
	return nexaApp.gvBase.fvCurMenuId;
};

/**
* @class 현재 오픈되어 있는 메뉴의 프로그램 ID를 가져온다. <br>
* @param N/A
* @return {String} sMenuId - 현재 오픈되어 있는 메뉴의 프로그램 ID
* @example 
* this.gfnGetCurPrgmId();
*/
pForm.gfnGetCurPrgmId = function()
{
	if(this.gfnIsNull(nexaApp.gvBase.fvCurMenuId))
		return "";
	
	var nFindRow = nexaApp.gdsMenu.findRow("MENU_ID", nexaApp.gvBase.fvCurMenuId);
	
	if(nFindRow == -1)
		return "";
	
	var sPgmId = nexaApp.gdsMenu.getColumn(nFindRow, "PRGM_ID");
	
	return sPgmId;
};

/**
* @class 사용자 접속로그를 저장한다. <br>
* @param {String} sGubun - Login/Logout 구분 ( "I" : Login, "O" : Logout)
* @return N/A
* @example 
* this.gfnSaveLoginLogInfo("I");
*/
pForm.gfnSaveLoginLogInfo = function(sGubun)
{
	var sLoginLogInfoName = "dsLoginLogInfo";	
	if(this.isValidObject(sLoginLogInfoName)) this.removeChild(sLoginLogInfoName);
	
	var dsLoginLogInfo = new Dataset();
	dsLoginLogInfo.name = "dsLoginLogInfo";
	this.addChild(dsLoginLogInfo.name, dsLoginLogInfo);
	
	dsLoginLogInfo.addColumn( "USER_ID", "string", 256 );
	dsLoginLogInfo.addColumn( "LOIN_FLAG_CD", "string", 256 );
	
	var nRow = dsLoginLogInfo.addRow();
	
	if(this.gfnIsNull(sGubun)) sGubun = "I";
	
	dsLoginLogInfo.setColumn(nRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
	dsLoginLogInfo.setColumn(nRow, "LOIN_FLAG_CD", sGubun);
	
	if(sGubun == "O"){
		nexup.AddService(this, "logout");
	}
	
//	trace(dsLoginLogInfo.saveXML());
	//Service Add(COMN.SET_LOGIN_LOG_I01)
	nexup.AddService(this, "COMN.SET_LOGIN_LOG_I01", "dsLoginLogInfo=dsLoginLogInfo:U", "", "");

	//Call Service 
	nexup.CallService(this, "SaveLoginLog", "_gfnLogCallBack");
};

/**
* @class 사용자 출력로그를 저장한다. <br>
* @param {String} sGubun - Login/Logout 구분 ( "E" : Excel, "P" : Print)
* @return N/A
* @example 
* this.gfnSavePrintLogInfo("P");
*/
pForm.gfnSavePrintLogInfo = function(sGubun)
{
	var objApp =  nexacro.getApplication();
	
	// 현재 오픈된 화면의 메뉴 ID를 가져온다.
	var sCurMenuId = this.gfnGetCurMenuId();
	var nFindRow = objApp.gdsMenu.findRow("MENU_ID", sCurMenuId);

	// Print Log를 남기는지 여부 판단.
	if(nFindRow == -1)
		return;
	var sPrintLog = objApp.gdsMenu.getColumn(nFindRow, "PRNT_ALOG_YN");
	
	if(this.gfnIsNull(sPrintLog) || sPrintLog == "0")
		return;
	
	// 현재 오픈된 화면의 프로그램 ID를 가져온다.
	var sCurPrgmId = this.gfnGetCurPrgmId();
	
	var sPrintLogInfoName = "dsPrintLogInfo";	
	if(this.isValidObject(sPrintLogInfoName)) this.removeChild(sPrintLogInfoName);
	
	var dsPrintLogInfo = new Dataset();
	dsPrintLogInfo.name = "dsPrintLogInfo";
	this.addChild(dsPrintLogInfo.name, dsPrintLogInfo);
	
	dsPrintLogInfo.addColumn( "USER_ID", "string", 256 );
	dsPrintLogInfo.addColumn( "PRGM_ID", "string", 256 );
	dsPrintLogInfo.addColumn( "MENU_ID", "string", 256 );
	dsPrintLogInfo.addColumn( "PRNT_FLAG_CD", "string", 256 );

	if(this.gfnIsNull(sGubun)) sGubun = "P";
	
	var nRow = dsPrintLogInfo.addRow();
	
	dsPrintLogInfo.setColumn(nRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
	dsPrintLogInfo.setColumn(nRow, "PRGM_ID", sCurPrgmId);
	dsPrintLogInfo.setColumn(nRow, "MENU_ID", sCurMenuId);
	dsPrintLogInfo.setColumn(nRow, "PRNT_FLAG_CD", sGubun);

//	trace(dsPrintLogInfo.saveXML());
	//Service Add(COMN.SET_PRINT_LOG_I01)
	nexup.AddService(this, "COMN.SET_PRINT_LOG_I01", "dsPrintLogInfo=dsPrintLogInfo:U", "", "");

	//Call Service 
	nexup.CallService(this, "SavePrintLog", "_gfnLogCallBack");
};

/**
* @class 개인정보 화면 접속 로그를 저장한다. <br>
* @param {String} sMenuId - 오픈되는 Menu ID
* @return N/A
* @example 
* this.gfnSavePersLogInfo();
*/
pForm.gfnSavePersLogInfo = function(sMenuId)
{
	var objApp =  nexacro.getApplication();
	var nFindRow = objApp.gdsMenu.findRow("MENU_ID", sMenuId);

	// 개인정보접근 Log를 남기는지 여부 판단.
	if(nFindRow == -1)
		return;
		
	var sPersLog = objApp.gdsMenu.getColumn(nFindRow, "PERS_INFN_ALOG_YN");
	
	if(this.gfnIsNull(sPersLog) || sPersLog == "0")
		return;
	
	// 현재 오픈되는 화면의 프로그램 ID를 가져온다.
	var sCurPrgmId = objApp.gdsMenu.getColumn(nFindRow, "PRGM_ID");
	
	var sPersLogInfoName = "dsPersLogInfo";	
	if(this.isValidObject(sPersLogInfoName)) this.removeChild(sPersLogInfoName);
	
	var dsPersLogInfo = new Dataset();
	dsPersLogInfo.name = "dsPersLogInfo";
	this.addChild(dsPersLogInfo.name, dsPersLogInfo);
	
	dsPersLogInfo.addColumn( "USER_ID", "string", 256 );
	dsPersLogInfo.addColumn( "PRGM_ID", "string", 256 );
	dsPersLogInfo.addColumn( "MENU_ID", "string", 256 );

	var nRow = dsPersLogInfo.addRow();
	
	dsPersLogInfo.setColumn(nRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
	dsPersLogInfo.setColumn(nRow, "PRGM_ID", sCurPrgmId);
	dsPersLogInfo.setColumn(nRow, "MENU_ID", sMenuId);

//	trace(dsPersLogInfo.saveXML());
	//Service Add(COMN.SET_PERS_LOG_I01)
	nexup.AddService(this, "COMN.SET_PERS_LOG_I01", "dsPersLogInfo=dsPersLogInfo:U", "", "");

	//Call Service 
	nexup.CallService(this, "SavePersLog", "_gfnLogCallBack");
};

/**
* @class 데이터 로그를 저장한다. <br>
* @param N/A
* @return N/A
* @example 
* this.gfnSaveDataLogInfo("P");
*/
pForm.gfnSaveDataLogInfo = function()
{
	var objApp =  nexacro.getApplication();
	// 현재 오픈된 화면의 메뉴 ID를 가져온다.
	var sCurMenuId = this.gfnGetCurMenuId();
	
	if(this.gfnIsNull(sCurMenuId))
		return;
		
	var nFindRow = objApp.gdsMenu.findRow("MENU_ID", sCurMenuId);

	// Print Log를 남기는지 여부 판단.
	if(nFindRow == -1)
		return;
		
	var sDataLog = objApp.gdsMenu.getColumn(nFindRow, "DATA_ALOG_YN");
	
	if(this.gfnIsNull(sDataLog) || sDataLog == "0")
		return;
	
	// 현재 오픈된 화면의 프로그램 ID를 가져온다.
	var sCurPrgmId = this.gfnGetCurPrgmId();
	
	var sDataLogInfoName = "dsDataLogInfo";	
	if(this.isValidObject(sDataLogInfoName)) this.removeChild(sDataLogInfoName);
	
	var dsDataLogInfo = new Dataset();
	dsDataLogInfo.name = "dsDataLogInfo";
	this.addChild(dsDataLogInfo.name, dsDataLogInfo);
	
	dsDataLogInfo.addColumn( "USER_ID", "string", 256 );
	dsDataLogInfo.addColumn( "PRGM_ID", "string", 256 );
	dsDataLogInfo.addColumn( "MENU_ID", "string", 256 );
	dsDataLogInfo.addColumn( "SERV_SECE_NM", "string", 256 );
	dsDataLogInfo.addColumn( "DATA_NM", "string", 256 );
	dsDataLogInfo.addColumn( "DATA_ALOG", "string", 4000 );

	// 호출 서비스를 호출한다.
	var sServiceName = "";
	var sServiceTemp;
	var sInputDataSet = "";
	var sInputTemp;
	var sInputDataCont;
	var nIdx;
	
	for(var i = 0; i < this.dsService.getRowCount(); i++) { 
		sServiceTemp = this.dsService.getColumn(i, "name");
		
		if(this.dsService.getRowCount() == 1) 
			sServiceName = sServiceName + "," + sServiceTemp + ",";
		else
			sServiceName = "," + sServiceTemp;
		
		sInputTemp = this._gfnDataLogSplit(this.dsService.getColumn(i, "inputDataset"));
		if(!this.gfnIsNull(sInputDataSet)) {
			nIdx = sInputDataSet.indexOf(sInputTemp);
			
			if(nIdx < 0)
				sInputDataSet = sInputDataSet + "," + sInputTemp + ",";
		}
		else {
			if(this.dsService.getRowCount() == 1) 
				sInputDataSet = "," + sInputTemp + ",";
			else
				sInputDataSet = "," + sInputTemp;
		}
	}

	sServiceName = sServiceName.substr(1,sServiceName.length);
	sServiceName = sServiceName.substr(0,sServiceName.length-1);
	sInputDataSet = sInputDataSet.substr(1,sInputDataSet.length);
	sInputDataSet = sInputDataSet.substr(0,sInputDataSet.length-1);
	if(!this.gfnIsNull(sInputDataSet))
		sInputDataCont = this._gfnInputDatasetStr(sInputDataSet);
	else
		sInputDataCont = "";
	
	var nRow = dsDataLogInfo.addRow();
	
	dsDataLogInfo.setColumn(nRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
	dsDataLogInfo.setColumn(nRow, "PRGM_ID", sCurPrgmId);
	dsDataLogInfo.setColumn(nRow, "MENU_ID", sCurMenuId);
	dsDataLogInfo.setColumn(nRow, "SERV_SECE_NM", sServiceName);
	dsDataLogInfo.setColumn(nRow, "DATA_NM", sInputDataSet);
	dsDataLogInfo.setColumn(nRow, "DATA_ALOG", sInputDataCont);
	
//	trace(dsDataLogInfo);
//	trace(dsDataLogInfo.saveXML());
	//Service Add(COMN.SET_DATA_LOG_I01)
	nexup.AddService(this, "COMN.SET_DATA_LOG_I01", "dsDataLogInfo=dsDataLogInfo:U", "", "");
};

/**
* @class 로그 Callback 함수. <br>
* @param {String} strServiceId - Service ID
* @param {String} strErrorCode - Error Code
* @param {String} strErrorMsg - Error Message
* @return N/A
* @example 
* this._gfnLogCallBack(strServiceId, strErrorCode, strErrorMsg);
*/
pForm._gfnLogCallBack = function(strServiceId, strErrorCode, strErrorMsg)
{
	if (strErrorCode < 0) 
	{
		// 에러 메시지 출력
		trace("Log Error ==> " + strErrorMsg);
		return;
	}

	switch (strServiceId) 
	{
		case "SaveLoginLog":	// Login 관련 Log Callback
			break;
		case "SavePrintLog":	// Print Log Callback
			break;
		case "SavePersLog":		// 개인정보 처리 화면 접근 Log Callback
			break;
	}
};

/**
* @class Dataset Name을 Split하여 내용을 저장한다. <br>
* @param {String} sStr - 서비스 Input Dataset 목록
* @return N/A
* @example 
* this._gfnInputDatasetStr(sStr);
*/
pForm._gfnInputDatasetStr = function(sStr)
{
	var objArr = sStr.split(",");
	var sRtn;
	var objDs;
	
	for(var i = 0; i < objArr.length; i++) {
		var sDsNameTemp = objArr[i];
		var nIdx = sDsNameTemp.indexOf(":");
		var sDsName;
		
		if(nIdx != -1)
			sDsName = sDsNameTemp.substr(0, nIdx);
		else
			sDsName = sDsNameTemp;
		
//		trace("sDsName ==> " + sDsName);
		
		if(i == 0) {
			if(sDsName.indexOf("gds") != 0) {
//				trace("this[sDsName] ==> " + this[sDsName]);
				sRtn = this[sDsName].saveXML();
			}
		}
		else {
			if(sDsName.indexOf("gds") != 0) {
				if(this.gfnIsNull(sRtn)) {
					sRtn = this[sDsName].saveXML();
				}
				else {
					sRtn = sRtn + "\n" + this[sDsName].saveXML();
				}
			}
		}
	}
	
	return sRtn;
}

/**
* @class 전달된 Form에서 Object찾아 Object를 리턴한다. <br>
* @param {
* @return N/A
* @example 
* this._gfnInputDatasetStr(sStr);
*/
pForm.gfnFindObject = function(objForm, sCompId)
{
	var objRtn;
	
	var arrComp = objForm.components;
	var nLength = arrComp.length;

//	trace("nLength ===> " + nLength);
	for( var i=0; i<nLength; i++)
	{
//		trace("arrComp[i].name ==> " + arrComp[i].name);
		if( arrComp[i] instanceof nexacro.Div)
		{
			// 찾는 컴포넌트 ID와 같다면
			if(arrComp[i].name == sCompId) {
				objRtn = arrComp[i];
				break;
			}
				
			objRtn = this.gfnFindObject(arrComp[i].form, sCompId); //재귀함수
			
			if(!this.gfnIsNull(objRtn)) {
				break;
			}
		}
		else if( arrComp[i] instanceof nexacro.Tab )
		{
			// 찾는 컴포넌트 ID와 같다면
			if(arrComp[i].name == sCompId) {
				objRtn = arrComp[i];
				break;
			}
				
			var nPages = arrComp[i].tabpages.length;
			
			for( var j=0; j<nPages;j++)
			{			
				// 찾는 컴포넌트 ID와 같다면
				if(arrComp[i].tabpages[j].name == sCompId) {
					objRtn = arrComp[i].tabpages[j];
					break;
				}
				
				objRtn = this.gfnFindObject(arrComp[i].tabpages[j].form, sCompId); //재귀함수
				
				if(!this.gfnIsNull(objRtn)) {
					break;
				}
			}
			
			if(!this.gfnIsNull(objRtn)) {
				break;
			}
		}
		else
		{
			// 찾는 컴포넌트 ID와 같다면
			if(arrComp[i].name == sCompId) {
				objRtn = arrComp[i];
				break;
			}
		}
	}
	
	return objRtn;
}

pForm._gfnSetFormCtrl = function(oForm, sProgramId)
{
	var objApp = nexacro.getApplication();
   var sPrgmId;
   
   if(this.gfnIsNull(sProgramId)) {
      sPrgmId = this.gfnGetCurPrgmId();
   }
   else {
      sPrgmId = sProgramId;
   }
   
	var sCtrlId;
	var arrCtrl;
	var objComp;
	var sReadOnly;
	var sEnable;
	var sVisible;
	
	//컴포넌트정보
	objApp.gdsCompCtrl.filter("PRGM_ID=='" + sPrgmId + "'");
	
	for(var i = 0;  i < objApp.gdsCompCtrl.getRowCount(); i++) {
		sCtrlId = objApp.gdsCompCtrl.getColumn(i, "CMPO_ID");
		
		arrCtrl = sCtrlId.split(".");
		
		if(arrCtrl.length == 0)
			continue;
			
		if(arrCtrl.length == 1) {
			objComp = this.gfnFindObject(oForm, arrCtrl[0]);
		}
		else {
			objComp = this.gfnFindObject(oForm, arrCtrl[arrCtrl.length - 1]);
		}
		
//		trace(objComp);
		if(!this.gfnIsNull(objComp)) {
			sReadOnly = objApp.gdsCompCtrl.getColumn(i, "CMPO_READ_YN");
			sEnable = objApp.gdsCompCtrl.getColumn(i, "CMPO_USED_YN");
			sVisible = objApp.gdsCompCtrl.getColumn(i, "CMPO_DISP_YN");
			
			if(sVisible == "0") {
				objComp.set_visible(false);
			}
			else {
				objComp.set_visible(true);
				
				if(!objComp instanceof nexacro.Button) {
					if(sReadOnly == "1") {
						objComp.set_readonly(true);
					}
					else {
						objComp.set_readonly(false);
					}
				}
				
				if(sEnable == "1") {
					objComp.set_enable(true);
				}
				else {
					objComp.set_enable(false);
				}
			}
		}
	}
	objApp.gdsCompCtrl.filter("");
}

/**
* @class Form 내의 Grid 전체를 Export하는 팝업을 보여준다. <br>
* @param {Object} objForm : Form Object
* @return N/A
* @example 
* this.gfnExcelExportAll(this);
*/
pForm.gfnExcelExportAll = function(objForm)
{
	var strArg;
	
	strArg = {
		'paramFormObj' : objForm
	};

	this.gfnOpenPopupM(
		"cmmSearchPermGrpMulti",
		"cmm::cmmExcelExport.xfdl",
		strArg,
		"",
		{
			top      : -1,
			left     : -1,
			width    : -1,
			height   : -1,
			titlebar : true,
			title    : "Excel Export"
		}
	);	
}


/**
* @class Form 내의 마지막 컴포넌트를 찾아 높이를구한 후 리사이징 시킨다. <br>
* @param {Object} objForm : Form Object
* @return N/A
* @example 
* this.gfnResizeComp(this);
*/
pForm.gfnResizeComp = function(objForm)
{
	var nMaxBottom = 0;
	for(var i=0; i<objForm.components.length; i++) {
		if (objForm.components[i].visible) {
			if (nMaxBottom < objForm.components[i].getOffsetBottom()){
				nMaxBottom = objForm.components[i].getOffsetBottom();
			}	
		}
	}
	objForm.parent.setOffsetHeight(nMaxBottom);
	objForm.parent.parent.resetScroll();
}


/**
* @class 공통 메일 발송 <br>
* @param {String} email - 발송할 이메일 주소 
				          발신자가 여러명인경우 구분자 ',' 로 ex) abc@abc.com,aaa@bbb.com, ..
* @param {String} subject - 제목 
* @param {String} contents - 내용
* @param {String} dsRsult - 결과 데이터셋을 받을 데이터셋 명 기본 :dsMailResult , ERR_CODE - 100 :성공 , 200:실패 
* @param {String} callback - 콜벡받을 함수 명
* @param {Dataset} dsAttcInput - 첨부할 파일 정보 데이터 셋 명
  컬럼명 정보 ATTC_FILE_PATH,  SERV_ATTC_FILE_NM, ATTC_FILE_NM 필요
*  ATTC_FILE_PATH - 첨부파일 경로( 서버에 저장된 파일의 경로) 
*  SERV_ATTC_FILE_NM - 서버에 저장된 파일의 파일명
*  ATTC_FILE_NM - 메일에 표시할 파일명
* @return N/A
* @example 
* var email = 'aaaa@abc.com';
* var subject = '제목';  
* var contents = '내용';
* var callback = 'fnCallBack';
* var dsAttcInput = "dsAttcInput";
* this.gfnSendMail(email, subject, contents, dsRsult, callback, dsAttCh);
*/  

pForm.gfnSendMail = function(email, subject, contents, dsRsult, callback, dsAttCh)
{
	var dsInputName = "dsMailTemp";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("USER","string",255);  // 계정 id
		dsInput.addColumn("PW","string",255);  // 계정pw
		dsInput.addColumn("EMAIL","string",200);  //발신자 메일주소
		dsInput.addColumn("SUBJECT","string",1000);  //메일 제목
		dsInput.addColumn("CONTENTS","string",4000);  //메일 내용
		dsInput.addColumn("SENDER","string",255);  //수신자 메일주소 
	}
	dsInput.clearData();
	
	// 첨부파일 데이터 셋 정보 넘겨주지 않은경우 임의적으로 생성
	if(this.gfnIsNull(dsAttCh)){
		dsAttCh = "dsMailAttchTmp";
		var dsAttchInput = this._gfnGetDataSet(dsAttCh);	//임시데이타셋 생성
		if (dsAttchInput.getColCount() == 0){
			dsAttchInput.addColumn("ATTC_FILE_PATH","string",255);  // 계정 id
			dsAttchInput.addColumn("SERV_ATTC_FILE_NM","string",255);  // 계정pw
			dsAttchInput.addColumn("ATTC_FILE_NM","string",200);  //발신자 메일주소
		}
		dsAttchInput.clearData();		
	}
	
	var dsOutputName = "dsMailResult";
	if(!this.gfnIsNull(dsRsult)){
		dsOutputName = dsRsult;
		
	}
	var dsOutput = this._gfnGetDataSet(dsOutputName);	//임시데이타셋 생성
	if (dsOutput.getColCount() == 0){
		dsOutput.addColumn("EMAIL","string",255);  // Username provided to user to connect to our service
		dsOutput.addColumn("ERR_CODE","string",255);  //Password to access the service
		dsOutput.addColumn("ERR_MSG","string",4000);  //Password to access the service
	}	
	dsOutput.clearData();
	
	var objDs = nexacro.getApplication().gdsMailSms;
	var fRow = objDs.findRowExpr("COMM_CODE == '1527' && CMDT_CODE == '1'");		
	var sUser = objDs.getColumn(fRow, "CODE_NAME");
	fRow = objDs.findRowExpr("COMM_CODE == '1527' && CMDT_CODE == '2'");
	var sPw = objDs.getColumn(fRow, "CODE_NAME");
	fRow = objDs.findRowExpr("COMM_CODE == '1527' && CMDT_CODE == '3'");
	var sSender = objDs.getColumn(fRow, "CODE_NAME");
	
	var emails = email.split(',');
	var nRow = 0;	
	for(var i=0; i < emails.length; i++){
		if(i != 0){ // email 중복체크
			var sRow = dsInput.findRow("EMAIL", emails[i]);
			if(sRow != -1) continue;
		}
		nRow = dsInput.addRow();
		dsInput.setColumn(nRow,"USER", sUser);
		dsInput.setColumn(nRow,"PW", sPw);
		dsInput.setColumn(nRow,"SENDER", sSender);
		dsInput.setColumn(nRow,"EMAIL", emails[i]);
		dsInput.setColumn(nRow,"SUBJECT", subject);
		dsInput.setColumn(nRow,"CONTENTS", contents);
	}

	// 메일 서비스를 호출하여 처리한다.
 	var strSvcId    = "sendEmail";
	var strSvcUrl   = "emailSend.do"; 
	var inData      = "dsMail=dsMailTemp dsAttcInput="+dsAttCh;
	var outData     = dsOutputName+"=dsResult";
	var strArg      = "";
	var callBackFnc = callback;
	var isAsync   	= true;
	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
						strSvcUrl , 	// trabsaction을 요청할 주소
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
						callBackFnc, 	// transaction의 결과를 받을 Function 이름
						isAsync); 	

};


/**
* @class 공통 SMS 발송 <br>
* @param {String} mobile - 발신번호 
* @param {String} msg - 발송메시지 
* @param {String} type - 메시지 타입
					1=Normal Text
					2=Normal Text with Flash
					3=Unicode (Arabic, Chinese etc.)
					4=Unicode with Flash
					5=Binary message with UDH like Ringtone
					6=Binary message without UDH
* @param {String} dsRsult - 결과 데이터셋을 받을 데이터셋 명 기본 :dsSmsResult 
* @param {String} callback - 콜벡받을 함수 명
* @return N/A
* @example 
* var sender = '010111122220';
* var mobile = '01022222222';  
* var msg = '내용';
* var type = '1';
* var dsRsult = "dsSmsResult";
* this.gfnSendSms(mobile, msg, type, dsRsult, callback);
*/  
var smsCallBack = "";
var dsOutputName = "";
pForm.gfnSendSms = function(mobile, msg, type, dsRsult, callback)
{
	smsCallBack = "";
	smsCallBack = callback;
	var dsInputName = "dsSmsTemp";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("USER","string",255);  // Username provided to user to connect to our service
		dsInput.addColumn("PW","string",255);  //Password to access the service
		dsInput.addColumn("MESSAGE","string",2000);  //Password to access the service
		dsInput.addColumn("RECEIVER","string",255);  //Destination Mobile Number
		dsInput.addColumn("SENDER","string",255);  //Sender ID of the message Only Numeric 
		dsInput.addColumn("MSG_TYPE","string",255);  //Type of Message 
		dsInput.addColumn("URL","string",4000);  //Type of Message
		dsInput.addColumn("WINDOW_ID","string",255); 
		dsInput.addColumn("SEQ","string",255); 	
	}	
	dsInput.clearData();
	
	var dskeyName = "dsMsgKey";
	var dsSmsKey = this._gfnGetDataSet(dskeyName);	//임시데이타셋 생성
	if (dsSmsKey.getColCount() == 0){
		dsSmsKey.addColumn("MSG_KEY","string",30);  // SMS로그 key값
	}	
	dsSmsKey.clearData();	
	
	dsOutputName = "dsSmsResult";
	if(!this.gfnIsNull(dsRsult)){
		dsOutputName = dsRsult;
	}
	var dsOutput = this._gfnGetDataSet(dsOutputName);	//임시데이타셋 생성
	if (dsOutput.getColCount() == 0){
		dsOutput.addColumn("MSG_KEY","string",255);  // Username provided to user to connect to our service
		dsOutput.addColumn("RECEIVER","string",255);  //Password to access the service
		dsOutput.addColumn("SENDER","string",255);  //Password to access the service
		dsOutput.addColumn("MSG_TYPE","string",255);  //Destination Mobile Number
		dsOutput.addColumn("MESSAGE","string",2000);  //Sender ID of the message Only Numeric 
		dsOutput.addColumn("MSG_TYPE","string",255);  //Type of Message 
		dsOutput.addColumn("URL","string",4000);  //Type of Message
		dsOutput.addColumn("RECEIVE_MSGID","string",255);  //Type of Message
		dsOutput.addColumn("RESULT","string", 255);  //Type of Message
		dsOutput.addColumn("RESULT_DESC","string", 255);  //Type of Message		
	}	
	dsOutput.clearData();
	
	var mobiles = mobile.split(',');
	var objDs = nexacro.getApplication().gdsMailSms;
	var fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '1'");	
	var sUser = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '2'");
	var sPw = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '3'");
	var sSender = objDs.getColumn(fRow, "CODE_NAME");
	var sMenuid = this.gfnGetCurMenuId();
    
	var smsURl = "http://www.bulksms2u.com/websmsapi/ISendSMS.aspx";
		smsURl += "?username=" +sUser;
		smsURl += "&password=" +sPw;
		smsURl += "&sender=" +sSender;
		smsURl += "&type=" +type;
	
	for(var i=0; i < mobiles.length; i++){
		if(i != 0){
			var sRow = dsInput.findRow("MOBILE", mobile[i]);
			if(sRow != -1) continue;
		}
		
		var nRow = dsInput.addRow();
		dsInput.setColumn(nRow,"USER", sUser);
		dsInput.setColumn(nRow,"PW", sPw);
		dsInput.setColumn(nRow,"URL", smsURl + "&mobile="+mobiles[i]);
		dsInput.setColumn(nRow,"MESSAGE", msg);
		dsInput.setColumn(nRow,"RECEIVER", mobiles[i]);
		dsInput.setColumn(nRow,"SENDER", sSender);
		dsInput.setColumn(nRow,"MSG_TYPE", type);
		dsInput.setColumn(nRow,"WINDOW_ID", sMenuid);
		dsInput.setColumn(nRow,"SEQ", i);
	}
	//Service Add(COMN.GET_SMSLOG_KEY_S01)
	nexup.AddService(this, "COMN.GET_SMSLOG_KEY_S01", "", "dsMsgKey=dsMsgKey", "");
	//Service Add(COMN.SET_SMS_LOG_I01)
	nexup.AddService(this, "COMN.SET_SMS_LOG_I01", "dsSMS_RESULT=dsSmsTemp:U dsMsgKey=dsMsgKey", "", "");
	//Call Service 
	nexup.CallService(this, "saveSmsLog", "_gfnSendCallBack");

};


/**
* @class 공통 SMS 데이터셋 이용한 발송 <br>
* @param {DataSet} inDs - 발송할 정보 데이터셋 (MOBILE: 발신자번호, MSG : 발송메시지, TYPE: 메시지타입(기본 1) ) 
* @param {String} dsRsult - 결과 데이터셋을 받을 데이터셋 명 기본 :dsSmsResult 
* @param {String} callback - 콜벡받을 함수 명
* @return N/A
* @example 
* var this.inDs
* var dsRsult = "dsSmsResult";
* this.gfnSendSmsMulti(inDs, dsRsult, callback);
*/  
pForm.gfnSendSmsMulti = function(inDs, dsRsult, callback)
{
	if(inDs.rowcount <= 0 ){
		this.gfnAlertM("msg.notexist", ["SMS data"]);
		return false;
	}

	smsCallBack = "";
	smsCallBack = callback;
	var dsInputName = "dsSmsTemp";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("USER","string",255);  // Username provided to user to connect to our service
		dsInput.addColumn("PW","string",255);  //Password to access the service
		dsInput.addColumn("MESSAGE","string",2000);  //Password to access the service
		dsInput.addColumn("RECEIVER","string",255);  //Destination Mobile Number
		dsInput.addColumn("SENDER","string",255);  //Sender ID of the message Only Numeric 
		dsInput.addColumn("MSG_TYPE","string",255);  //Type of Message 
		dsInput.addColumn("URL","string",4000);  //Type of Message
		dsInput.addColumn("WINDOW_ID","string",255); 
		dsInput.addColumn("SEQ","string",255);
	}	
	dsInput.clearData();
	
	var dskeyName = "dsMsgKey";
	var dsSmsKey = this._gfnGetDataSet(dskeyName);	//임시데이타셋 생성
	if (dsSmsKey.getColCount() == 0){
		dsSmsKey.addColumn("MSG_KEY","string",30);  // SMS로그 key값
	}	
	dsSmsKey.clearData();	
	
	dsOutputName = "dsSmsResult";
	if(!this.gfnIsNull(dsRsult)){
		dsOutputName = dsRsult;
	}
	var dsOutput = this._gfnGetDataSet(dsOutputName);	//임시데이타셋 생성
	if (dsOutput.getColCount() == 0){
		dsOutput.addColumn("MSG_KEY","string",255);  // Username provided to user to connect to our service
		dsOutput.addColumn("RECEIVER","string",255);  //Password to access the service
		dsOutput.addColumn("SENDER","string",255);  //Password to access the service
		dsOutput.addColumn("MSG_TYPE","string",255);  //Destination Mobile Number
		dsOutput.addColumn("MESSAGE","string",2000);  //Sender ID of the message Only Numeric 
		dsOutput.addColumn("MSG_TYPE","string",255);  //Type of Message 
		dsOutput.addColumn("URL","string",4000);  //Type of Message
		dsOutput.addColumn("RECEIVE_MSGID","string",255);  //Type of Message
		dsOutput.addColumn("RESULT","string", 255);  //Type of Message
		dsOutput.addColumn("RESULT_DESC","string", 255);  //Type of Message		
		dsOutput.addColumn("SEQ","string", 255);
	}	
	dsOutput.clearData();
	
	var objDs = nexacro.getApplication().gdsMailSms;
	var fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '1'");	
	var sUser = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '2'");
	var sPw = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1526' && CMDT_CODE == '3'");
	var sSender = objDs.getColumn(fRow, "CODE_NAME");
	var sMenuid = this.gfnGetCurMenuId();
    

	
	for(var i=0; i < inDs.rowcount; i++){	
	
		if(this.gfnIsNull(inDs.getColumn(i, "MOBILE"))) {
			this.gfnAlertM("msg.err.validator.required", ["Phone number"]);
			return false;
		}
		
		if(this.gfnIsNull(inDs.getColumn(i, "MSG"))) {
			this.gfnAlertM("msg.err.validator.required", ["Message"]);
			return false;
		}	
		
		
		if(this.gfnIsNull(inDs.getColumn(i, "TYPE"))) {
			this.gfnAlertM("msg.err.validator.required", ["Send Type"]);
			return false;
		}			
	
		var nRow = dsInput.addRow();
		var smsURl = "http://www.bulksms2u.com/websmsapi/ISendSMS.aspx";
			smsURl += "?username=" +sUser;
			smsURl += "&password=" +sPw;
			smsURl += "&sender=" +sSender;
			smsURl += "&type=" +inDs.getColumn(i, "TYPE");

		dsInput.setColumn(nRow,"USER", sUser);
		dsInput.setColumn(nRow,"PW", sPw);
		dsInput.setColumn(nRow,"URL", smsURl + "&mobile="+inDs.getColumn(i, "MOBILE"));
		dsInput.setColumn(nRow,"MESSAGE", inDs.getColumn(i, "MSG"));
		dsInput.setColumn(nRow,"RECEIVER", inDs.getColumn(i, "MOBILE"));
		dsInput.setColumn(nRow,"SENDER", sSender);
		dsInput.setColumn(nRow,"MSG_TYPE", inDs.getColumn(i, "TYPE"));
		dsInput.setColumn(nRow,"WINDOW_ID", sMenuid);
		dsInput.setColumn(nRow,"SEQ", i);
	}
	//Service Add(COMN.GET_SMSLOG_KEY_S01)
	nexup.AddService(this, "COMN.GET_SMSLOG_KEY_S01", "", "dsMsgKey=dsMsgKey", "");
	//Service Add(COMN.SET_SMS_LOG_I01)
	nexup.AddService(this, "COMN.SET_SMS_LOG_I01", "dsSMS_RESULT=dsSmsTemp:U dsMsgKey=dsMsgKey", "", "");
	//Call Service 
	nexup.CallService(this, "saveSmsLog", "_gfnSendCallBack");

};

/**
* @class 화면 SMS 발송 Callback 함수. <br>
* @param {String} strServiceId - Service ID
* @param {String} strErrorCode - Error Code
* @param {String} strErrorMsg - Error Message
* @return N/A
* @example 
* this._gfnSendCallBack(strServiceId, strErrorCode, strErrorMsg);
*/
pForm._gfnSendCallBack = function(strServiceId, strErrorCode, strErrorMsg)
{
	if (strErrorCode < 0) 
	{
		// 에러 메시지 출력
		trace("_gfnSendCallBack Log Error ==> " + strErrorMsg);
		if(!this.gfnIsNull(smsCallBack)){ 
			if (this[smsCallBack]) this.lookupFunc(smsCallBack).call(strServiceId, strErrorCode, strErrorMsg);
			smsCallBack = "";
		}
		return;
	}

	switch (strServiceId) 
	{
		case "saveSmsLog":	// sms 발송 로그 저장
			var msgKey = this.dsMsgKey.getColumn(0, "MSG_KEY");
			// SMS 발송 서비스를 호출하여 처리한다.
			var strSvcId    = "sendSms";
			var strSvcUrl   = "smsSend.do"; 
			var inData      = "dsSms=dsSmsTemp";
			var outData     = dsOutputName+"=dsResult";
			var strArg      = "msgKey="+msgKey;
			var callBackFnc = "_gfnSendCallBack";
			var isAsync   	= false;
			this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
							strSvcUrl , 	// trabsaction을 요청할 주소
							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
							callBackFnc, 	// transaction의 결과를 받을 Function 이름
							isAsync); 		
			break;
		case "sendSms": // SMS 발송 서비스 호출
			var dsOutput = this.objects[dsOutputName];
			if(dsOutput.getRowCount() > 0){
				dsOutput.set_updatecontrol(false);
				for(var i=0; i < dsOutput.getRowCount(); i++){
					dsOutput.setRowType(i, Dataset.ROWTYPE_UPDATE);
				}
				dsOutput.set_updatecontrol(true);
				nexup.AddService(this, "COMN.SET_SMS_LOG_U01", "dsSMS_RESULT="+dsOutputName+":U", "", "");
				//Call Service 
				nexup.CallService(this, "updateSmsLog", "_gfnSendCallBack");				
			}
		break;
		case "updateSmsLog":
				var dsSmsTemp = this._gfnGetDataSet("dsSmsTemp");
				this.removeChild("dsSmsTemp"); 
				dsSmsTemp.destroy(); 
				dsSmsTemp = null;
				dsSmsTemp = this._gfnGetDataSet("dsMsgKey");
				this.removeChild("dsMsgKey"); 
				dsSmsTemp.destroy(); 
				dsSmsTemp = null;
				if(!this.gfnIsNull(smsCallBack)){
					if (this[smsCallBack]) this.lookupFunc(smsCallBack).call(strServiceId, strErrorCode, strErrorMsg);
					smsCallBack = "";
				}			
		break;
	}
};


/**
* @class Ubi Report 파일다운로드 <br>
* @param {String} fileNmae - 파일명
* @param {String} ubiDs - // param DataSet
* @param {String} ubiArg - //param argument
* @param {String} callback - 콜벡받을 함수 명
* @return N/A
* @example 
*var localDs = [];
*	localDs.push(["SQL01", this.ds_grid1]);
*	localDs.push(["SQL02", this.ds_grid2]);
* var fileNmae = 'ubinexa_ds.jrf';
* var ubiDs = localDs;  
* var ubiArg = 'COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#';
* var callback = 'fnCallBack';
* this.gfnUbiReportDownload(fileNmae, ubiDs, ubiArg, callback);
*/  
var ubiPdfCallbak = "";
pForm.gfnUbiReportDownload = function(fileNmae, ubiDs, ubiArg, callback)
{
	ubiPdfCallbak = callback;
	var objEnv = nexacro.getEnvironment();
	var objSrv = objEnv.services["nexupSvc"];
	var objPdf = null;
	var sUbiName = "ubiRptTmp";	
	
	if(this.isValidObject(sUbiName)){
		objPdf = this.components[sUbiName];
		this.removeChild(sUbiName);
		objPdf.destroy();
		objPdf = null;	
	}
	
	objPdf = new UbiReport(sUbiName, null,null,null,null,null,null,null,null,null,null,this);
	
	objPdf.key = this.gfnGetRandomKey();
	objPdf.ubiserverurl = objSrv.url + "UbiServer";
	objPdf.resource = objSrv.url + "ubi4/js";
	objPdf.reporturl = objSrv.url + "ubi4/work/";
	objPdf.resid = "UBIHTML";
	objPdf.scale = "-9998";
	objPdf.datasource = "Tutorial";	// 런타임용
    this.addChild(objPdf.name, objPdf);
	objPdf.show();	
	objPdf.arg = ubiArg;
	objPdf.jrffile = fileNmae;
	for( var i = 0; i < ubiDs.length; i++ ) {			
		var data = ubiDs[i];
		objPdf.setDataset(data[0], data[1]);
	}	
	objPdf.retrieve(this, "gfnUbiPreviewEnd");						
};

/**
* @class 미리보기 완료 후 이벤트 처리 Callback 함수. <br>
* @return N/A
* @example 
* this.gfnUbiPreviewEnd();
*/
pForm.gfnUbiPreviewEnd = function()
{
	var sUbiName = "ubiRptTmp";	
	var objPdf = this.components[sUbiName];
	objPdf.exportFileName = "C:\\agent.pdf";
    objPdf.exportFile("PDF");
	if(!this.gfnIsNull(ubiPdfCallbak)){
		if (this[ubiPdfCallbak]) this.lookupFunc(ubiPdfCallbak).call();
			ubiPdfCallbak = "";
	}	
};




/**
* @class Ubi Report 서버에 저장 <br>
* @param {String} ubiJrf - 파일명
* @param {String} ubiData - // param DataSet
* @param {String} ubiArg - //param argument
* @param {String} subPath - 기본경로를 제외한 서버에 저장할 폴더명
* @param {String} path - 호출할 jrf 파일의 경로 기본경로(C:\cnMy\workspace\cnMy\WebContent\ubi4\work)  아래부터 
* @param {String} fileName - 돌려받을 파일명
* @param {String} dsResult - 결과 데이터셋을 받을 데이터셋 명
* @param {String} callback - 콜벡받을 함수 명
* @param {String} rDataType - 데이타 타입	(DS:데이터셋/SVC : SQL방식)
* @return N/A
* @example 
*var localDs = [];
*	localDs.push(["SQL01", this.ds_grid1]);
*	localDs.push(["SQL02", this.ds_grid2]);
* var ubiJrf = 'ubinexa_ds.jrf';
* var ubiDs = localDs;  
* var ubiArg = 'COMPANY#유비디시전#HOMEPAGE#http://www.ubireport.com#';
* var subPath = 'tmp'
* var path = 'sl';
* var fileName = "신용조사.pdf"
* var dsResult = "dsResult"
* var callback = 'fnCallBack';
* var rDataType = "DS";
* this.gfnUbiReporSave(ubiJrf, ubiData, ubiArg, subPath, path, fileName, dsResult, callback, rDataType);
*/  
pForm.gfnUbiReporSave= function(ubiJrf, ubiData, ubiArg, subPath, path, fileName, dsResult, callback, rDataType)
{

	trace("path==================="+path);

	var _nrs_ = String.fromCharCode(28);
	var _ncs_ = String.fromCharCode(29);
	var _rs_ = String.fromCharCode(30);
	var _cs_ = String.fromCharCode(31);
	
	var sdata = null;
	if(ubiData.length > 0){
		var ssvData = [];
		ssvData.push("LOCALDATASET:" + _rs_);
		for( var i = 0; i < ubiData.length; i++ ) {
			if( ubiData[i] && ubiData[i].length == 2 ) {
				ssvData.push(ubiData[i][0] + _cs_);
				ssvData.push(ubiData[i][1].name + _cs_);
				ssvData.push(_rs_);
			}
		}
		
		for( var i = 0; i < ubiData.length; i++ ) {
			if( ubiData[i] && ubiData[i].length == 2 ) {
				if( i == 0 ){
					ssvData.push("SSV:utf-8" + _rs_);
				}
				ssvData.push(ubiData[i][1].saveSSV(ubiData[i][1].name, "A"));
			}
		}

		sdata = ssvData.join("");
		for (var i = 0; i < sdata.length; i++){
			if(sdata.charAt(i) == _nrs_){
				sdata = sdata.replace(_nrs_, "~chm@");
			}else if(sdata.charAt(i) == _ncs_){
				sdata = sdata.replace(_ncs_, "~chm!");
			}else if(sdata.charAt(i) == _rs_){
				sdata = sdata.replace(_rs_, "~chm#");
			}else if(sdata.charAt(i) == _cs_){
				sdata = sdata.replace(_cs_, "~chm&");
			}
		}	
	}
	if(this.gfnIsNull(dsResult)){
		dsResult = "dsRptResult";
	}
	sdata = encodeURI(sdata);
	// SMS 발송 서비스를 호출하여 처리한다.
	var strSvcId    = "ubiReportServerSave";
	var strSvcUrl   = "ubiReportServerSave.do"; 
	var inData      = "";
	var outData     = dsResult + "=dsResult";
	var strArg      = "jrf="+ubiJrf;
	    strArg      += " arg="+ubiArg;
		strArg      += " path=" + path;
		strArg      += " exportfile="+fileName;
		strArg      += " ssvdata="+sdata;
		strArg      += " rptSubPath=" + subPath;
		strArg      += " rDataType=" + rDataType;
	var callBackFnc = callback;
	var isAsync   	= true;
	
	trace("strArg==================="+strArg);
	
	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
					strSvcUrl , 	// trabsaction을 요청할 주소
					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
					callBackFnc, 	// transaction의 결과를 받을 Function 이름
					isAsync,
					'2' // nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> 리포트저장은 SSV타입으로 넘겨야함
					); 						
};



/************************************************************************************
* 랜덤 Key 생성 함수(유틸)
************************************************************************************/
pForm.gfnGetRandomKey = function()
{
	var key = "";
	var nowdate = new Date();
	var year  = nowdate.getFullYear();
	var month = nowdate.getMonth() + 1;
	var day   = nowdate.getDate();
	var hour  = nowdate.getHours();
	var min   = nowdate.getMinutes();
	var sec   = nowdate.getSeconds();
	var milsec = nowdate.getMilliseconds();

	if (("" + month).length == 1) { month = "0" + month; }
	if (("" + day).length   == 1) { day   = "0" + day;   }
	if (("" + hour).length  == 1) { hour  = "0" + hour;  }
	if (("" + min).length   == 1) { min   = "0" + min;   }
	if (("" + sec).length   == 1) { sec   = "0" + sec;   }
	
	key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() * (1 << 30)).toString(16).replace('.', ''));
	key= this.gfnGetDate()+"_"+key;
	return key;
};


/**
* @class Div 내의 마지막 컴포넌트를 찾아 높이를구한 후 리사이징 시킨다. <br>
* @param {Object} objDiv : Div Object
* @return N/A
* @example 
* this.gfnDivSetHeight(this.Div01);
*/
pForm.gfnDivSetHeight = function(objDiv){
	var nMaxTop = 0;
	var nHeight = 0;
	for(var i=0; i< objDiv.form.components.length; i++) {
		if (nMaxTop < objDiv.form.components[i].getOffsetTop()){
			nMaxTop = objDiv.form.components[i].getOffsetTop();
			nHeight = objDiv.form.components[i].getOffsetHeight();
		}	
	}
	
	objDiv.setOffsetHeight(Number(nMaxTop) + Number(nHeight));
	objDiv.parent.resetScroll();
	var sScrollType = objDiv.parent.scrollbartype;
//	trace("sScrollType ==> " + sScrollType);
	if(sScrollType == "auto") {
//		trace(objDiv.parent.scrollbarsize);
		objDiv.parent.set_scrollbarsize(1);
	}
	//objDiv.parent.parent.setFocus();
}

/**
* @class Row의 변경된 데이터를 원래대로 돌려 놓는다. <br>
* @param {objGrid} objGrid - Grid Object
* @param {Object} objDs - Dataset Object
* @return N/A
* @example 
* this.gfnResetRow(objGrid, objDS);
*/
pForm.gfnResetRow = function(objGrid, objDS)
{
	if(this.gfnIsNull(objDS)) {
		trace("resset 시킬 Dataset을 전달해 주십시오");
		return;
	}
	
	var nRow = objDS.rowposition;
	var sOrgValue;
	
	var nRowType = objDS.getRowType(nRow);
	
	if(nRowType == Dataset.ROWTYPE_NORMAL)
		return;
	
	var sOrgValue;
	var sCurValue;
	var sColumnId;
	var nCellCnt = objGrid.getCellCount("body");
	for(i = 0; i < nCellCnt; i++) {
		sColumnId = String(objGrid.getCellProperty("body",i,"text")).replace("bind:","");
		
		sCurValue = objDS.getColumn(nRow, sColumnId);
		sOrgValue = objDS.getOrgColumn(nRow, sColumnId);
		
		if(sCurValue != sOrgValue)
			objDS.setColumn(nRow, sColumnId, sOrgValue);
	}
};

/**
* @class 전달된 Float값을 이용하여 digit만큼 라운드 처리한다. jsp float 계산 오류 대응. <br>
* @param {Float} v : 계산할 Float Value
* @return N/A
* @example 
* this.gfnRound(10.799999, 2);
*/
pForm.gfnRound = function (v, digit) 
{ 
	if (digit == undefined) 
		return Math.round(v); 
		
	var p = nexacro._pow_factors[digit + 30]; 
	trace("p ==> " + p);
	var m = (v * p).toFixed(digit); 
	trace("m ==> " + m);
	
	return Math.round(m) / p; 
}; 

/**  
* @class 신용조사 <br>
* @param {String} userNm - 조사 대상자 명
* @param {String} nicbrNo - 고객주민번호
* @param {String} quryDivs - 조회구분(1 – 기본조회(단순 조회 OUTPUT = 0/1), 2 – 파일 다운로드(OUTPUT = 2)
* @param {String} dsRsult - 결과 데이터셋을 받을 데이터셋 명 기본 :dsCotsResult 
* @param {String} callback - 콜벡받을 함수 명
* @param {String} reportNm - 저장할 파일명 (조회구분이 1인경우 필수아님)
* @param {String} subPath - 기본경로를 제외한 서버에 저장할 폴더명 (조회구분이 1인경우 필수아님)
* @param {String} orderNo - 계약번호 (필수아님)
* @return N/A
* @example 
* var orderNo = '00001';
* var userNm = 'LIM AH KAU';
* var nicbrNo = '831031015562';
* var quryDivs = 1';
* var reportNm = '신용조사.pdf';
* var subPath = 'ctos';
* var dsRsult = "dsCtosResult";
* var callback = "fnCallBack";
* this.gfnCotsRptSend(orderNo, userNm, nicbrNo, quryDivs, reportNm, subPath, dsRsult, callback);
*/  
var ctosCallBack = "";
var dsCotsOutputName = "";
pForm.gfnCotsRptSend = function(userNm, nicbrNo, quryDivs, dsRsult, callback, reportNm, subPath, orderNo)
{
	//입력 필수 체크
    if(this.gfnIsNull(userNm)) {
		this.gfnAlertM("msg.err.validator.required", ["Customer Name"]);
        return false;
    }
	
    if(this.gfnIsNull(nicbrNo)) {
		this.gfnAlertM("msg.err.validator.required", ["NRIC"]);
        return false;
    }	

    if(this.gfnIsNull(nicbrNo)) {
		this.gfnAlertM("msg.err.validator.required", ["Send Type"]);
        return false;
    }	
	
	if(quryDivs == "2"){
		if(this.gfnIsNull(reportNm)) {
			this.gfnAlertM("msg.err.validator.required", ["Report Name"]);
			return false;
		}
	}

    var partyType = "I"; // Company: C, Individual: I, Business: B 
    var reportType = "0";   //request(기본) : 0 , requestLite(축약) : 1
	var returnType = "2" // 전송방을 형식 XML:0, HTML:1, PDF:2
    var iclcNo = "";
	
	ctosCallBack = "";
	ctosCallBack = callback;
	var dsInputName = "dsCotsRptTemp";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성	
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("COMPANY_CODE","string",255);
		dsInput.addColumn("ACCOUNT_CODE","string",255);
		dsInput.addColumn("USER_ID","string",255);
		dsInput.addColumn("PW","string",255);
		dsInput.addColumn("QURY_DIVS","string",255);
		dsInput.addColumn("ORDER_NO","string",255);	
		dsInput.addColumn("CUST_NAME","string",255);  
		dsInput.addColumn("PARTY_TYPE","string",255); 
		dsInput.addColumn("ICLC_NO","string",2000);  
		dsInput.addColumn("NICBR_NO","string",255);  
		dsInput.addColumn("REPORT_TYPE","string",255);  
		dsInput.addColumn("RETURN_TYPE","string",255); 
		dsInput.addColumn("REPORT_NAME","string",255);
		dsInput.addColumn("SUB_PATH","string",255); 
	}	
	dsInput.clearData();
		
	dsCotsOutputName = "dsCotsRptResult";
	if(!this.gfnIsNull(dsRsult)){
		dsCotsOutputName = dsRsult;
	}
	var dsOutput = this._gfnGetDataSet(dsCotsOutputName);	//임시데이타셋 생성
	if (dsOutput.getColCount() == 0){
		dsOutput.addColumn("ORDER_NO","string",255);   //주문번호
		dsOutput.addColumn("QURY_DATI","string",255);  //조회일자
		dsOutput.addColumn("QURY_DIVS","string",255);  //조회구분
		dsOutput.addColumn("JUMN_BUSI","string",255);  //고객주민번호
		dsOutput.addColumn("CUST_NAME","string",255);  //고객명 
		dsOutput.addColumn("DLAY_AMNT","string",255);  //연체금액 
		dsOutput.addColumn("RESP_CODE","string",255);  //응답코드 
		dsOutput.addColumn("NOTE_DTAL","string",255);  //결과 ex(1:SUCCESS)
		dsOutput.addColumn("REPORT_NAME","string",255); 
		dsOutput.addColumn("SERVER_NAME","string",255); 
		dsOutput.addColumn("SUB_PATH","string",255); 
		dsOutput.addColumn("RESULT","string", 255); 
		dsOutput.addColumn("RESULT_DESC","string", 255);		
	}	
	dsOutput.clearData();
	
	var objDs = nexacro.getApplication().gdsMailSms;
	
	var fRow = objDs.findRowExpr("COMM_CODE == '1534' && CMDT_CODE == 'Comp code'");	
	var aCompCd = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1534' && CMDT_CODE == 'Acct code'");
	var sAcctCd = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1534' && CMDT_CODE == 'User id'");
	var sUser = objDs.getColumn(fRow, "CODE_NAME");
	
	fRow = objDs.findRowExpr("COMM_CODE == '1534' && CMDT_CODE == 'Pass Word'");
	var sPw = objDs.getColumn(fRow, "CODE_NAME");

	var nRow = dsInput.addRow();
	dsInput.setColumn(nRow,"COMPANY_CODE", aCompCd);
	dsInput.setColumn(nRow,"ACCOUNT_CODE", sAcctCd);
	dsInput.setColumn(nRow,"USER_ID", sUser);
	dsInput.setColumn(nRow,"PW", sPw);
	dsInput.setColumn(nRow,"CUST_NAME", userNm);
	dsInput.setColumn(nRow,"QURY_DIVS", quryDivs);
	dsInput.setColumn(nRow,"ORDER_NO", orderNo);
	dsInput.setColumn(nRow,"PARTY_TYPE", partyType);
	dsInput.setColumn(nRow,"ICLC_NO", iclcNo);
	dsInput.setColumn(nRow,"NICBR_NO", nicbrNo);
	dsInput.setColumn(nRow,"REPORT_TYPE", reportType);
	dsInput.setColumn(nRow,"RETURN_TYPE", returnType);
	dsInput.setColumn(nRow,"REPORT_NAME", reportNm);
	dsInput.setColumn(nRow,"SUB_PATH", subPath);

	var strSvcId    = "callCtos";
	var strSvcUrl   = "callCtos.do"; 
	var inData      = "dsInput="+dsInputName;
	var outData     = dsCotsOutputName+"=dsResult";
	var strArg      = "";
	var callBackFnc = "_gfnCtosCallBack";
	var isAsync   	= false;
	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
					strSvcUrl , 	// trabsaction을 요청할 주소
					inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
					outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
					strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
					callBackFnc, 	// transaction의 결과를 받을 Function 이름
					isAsync);
};


pForm._gfnCtosCallBack = function(strServiceId, strErrorCode, strErrorMsg){

	if (strErrorCode < 0) 
	{
		// 에러 메시지 출력
		trace("_gfnCtosCallBack Log Error ==> " + strErrorMsg);
		if(!this.gfnIsNull(ctosCallBack)){ 
			if (this[ctosCallBack]) this.lookupFunc(ctosCallBack).call(strServiceId, strErrorCode, strErrorMsg);
			ctosCallBack = "";
		}
		return;
	}

	switch (strServiceId) 
	{
		case "callCtos":
			var dsInput = this._gfnGetDataSet("dsCurrDtTmp");	//임시데이타셋 생성	
			if (dsInput.getColCount() == 0){
				dsInput.addColumn("CURR_DT","string",255);		
			}

			var dslogInput = this._gfnGetDataSet("dsCtosLogTmp");	//임시데이타셋 생성	
			dslogInput.clearData();

			var objDs = this.objects[dsCotsOutputName];
			dslogInput.copyData(objDs);
			
			dslogInput.set_updatecontrol(false);
			for(var i=0; i < objDs.rowcount; i++){
				dslogInput.setRowType(i, Dataset.ROWTYPE_INSERT);
			}
			dslogInput.set_updatecontrol(true);	
			//Service Add(COMN.GET_SYSDATE_S01)
			nexup.AddService(this, "COMN.GET_SYSDATE_S01", "", "dsCurrDtTmp=dsCurrDt", "");
				
			//Service Add(COMN.SET_SMS_LOG_I01)
			nexup.AddService(this, "COMN.SET_CTOS_LOG_I01", "dsTBBS17D02=dsCtosLogTmp:U dsCurrDt=dsCurrDtTmp", "", "");
			//Call Service 
			nexup.CallService(this, "saveCtosLog", "_gfnCtosCallBack");		
			
			var dsCostTemp = this._gfnGetDataSet("dsCotsRptTemp");
			this.removeChild("dsCotsRptTemp"); 
			dsCostTemp.destroy(); 
			dsCostTemp = null;	
			dsCostTemp = this._gfnGetDataSet("dsCtosLogTmp");
			this.removeChild("dsCtosLogTmp"); 
			dsCostTemp.destroy(); 
			dsCostTemp = null;			
		break;
	case "saveCtosLog":	
		var dsCostTemp = this._gfnGetDataSet("dsCurrDtTmp");
		var dsRuslt = this._gfnGetDataSet(dsCotsOutputName);
		if(dsRuslt.rowcount > 0 ){
			dsRuslt.setColumn(0, "QURY_DATI", dsCostTemp.getColumn(0, "CURR_DT"));
		}	
		
		this.removeChild("dsCurrDtTmp"); 
		dsCostTemp.destroy(); 
		dsCostTemp = null;	

		if(!this.gfnIsNull(ctosCallBack)){ 
			if (this[ctosCallBack]) this.lookupFunc(ctosCallBack).call(strServiceId, strErrorCode, strErrorMsg);
			ctosCallBack = "";
		}		
		break;
	}

};




/**
* @class 결제 요청 <br>
* @param {String} amut - Payment amount with two decimals and thousand symbols.
*                        ex)1,278.99
* @param {String} curr - Appendix I.pdf 파일참조 말레이시아 통화(MYR)
*						 Appendix II.pdf 파일참조 말레이시아 외에 기타 통화
* @param {String} prodDec - Product description
* @param {String} userNm - Customer name
* @param {String} mail - Customer email for receiving receipt
* @param {String} contract - Customer contact number 
* @param {String} rmk  - Merchant remarks (필수아님)
* @param {String} dsResult  - 결제 참조키(REFR_NUMB) 받을 데이터셋
* @return N/A
* @example 
* var amut = '1.00';
* var prodDec = 'Photo Print';
* var userNm = 'John Tan';
* var mail = 'abc@hotmail.com';
* var contract = '0126500100';
* var rmk = '';
* var keyNum = "222222222222222222222222222";
* var dsResult = "dsRefrkey"
* this.gfnIpaySend(amut, prodDec, userNm, mail, contract, rmk, keyNum, dsResult);
*/  
var tmpPayRefDsNm = "";
pForm.gfnIpaySend = function(amut, prodDec, userNm, mail, contract, rmk, keyNum, dsResult)
{
	var paymentId ="";
	tmpPayRefDsNm = "";
	tmpPayRefDsNm = dsResult;
	//입력 필수 체크
    if(this.gfnIsNull(amut)) {
		this.gfnAlertM("msg.err.validator.required", ["Payment amount"]);
        return false;
    }	
		
    if(this.gfnIsNull(prodDec)) {
		this.gfnAlertM("msg.err.validator.required", ["Product description"]);
        return false;
    }		
	
    if(this.gfnIsNull(userNm)) {
		this.gfnAlertM("msg.err.validator.required", ["Customer name"]);
        return false;
    }		
	
	
    if(this.gfnIsNull(mail)) {
		this.gfnAlertM("msg.err.validator.required", ["Customer email"]);
        return false;
    }		
	
    if(this.gfnIsNull(contract)) {
		this.gfnAlertM("msg.err.validator.required", ["Customer contact number"]);
        return false;
    }	
		
	if(this.gfnIsNull(rmk)) rmk = "";	
	if(this.gfnIsNull(keyNum)){ 
		keyNum = this.gfnGetDate() + "-" + contract; 
	}	

	var dsInputName = "dsPayInTemp";
	var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성	
	if (dsInput.getColCount() == 0){
		dsInput.addColumn("MCRT_CODE","string",255);
		dsInput.addColumn("PAYM_IDNO","string",255);
		dsInput.addColumn("REFR_NUMB","string",255);
		dsInput.addColumn("PAYM_AMNT","string",255);
		dsInput.addColumn("CURR_CODE","string",255);
		dsInput.addColumn("PROD_DESC","string",255);	
		dsInput.addColumn("USER_NAME","string",255);  
		dsInput.addColumn("USER_MAIL","string",255); 
		dsInput.addColumn("USER_NUMB","string",255);  
		dsInput.addColumn("MCRT_REMK","string",255);  
		dsInput.addColumn("LANG_TYPE","string",255);  
		dsInput.addColumn("SIGN_TYPE","string",255); 
		dsInput.addColumn("SIGN_CODE","string",255);
		dsInput.addColumn("REPN_URLX","string",255); 
		dsInput.addColumn("BACK_URLX","string",255); 
		dsInput.addColumn("KEYX_NUMB","string",255); 
	}	
	dsInput.clearData();
	
	var dsInputRefrName = "dsRefrNumb";
	var dsInputRefr = this._gfnGetDataSet(dsInputRefrName);	//임시데이타셋 생성	
	if (dsInputRefr.getColCount() == 0){
		dsInputRefr.addColumn("REFR_NUMB","string",255);
	}	
	dsInputRefr.clearData();	
	
	var objDs = nexacro.getApplication().gdsMailSms;
	var fRow = objDs.findRowExpr("COMM_CODE == '1537' && CMDT_CODE == '1'");		
	var mchtCode = objDs.getColumn(fRow, "CODE_NAME");	
	var objEnv = nexacro.getEnvironment();
	var objSrv = objEnv.services["nexupSvc"];
	var resUrl = objSrv.url + "ePayRes.jsp?KEYX_NUMB="+keyNum +"&USER="+this.gfnGetUserInfo("USER_ID");
	var backUrl = objSrv.url + "backend_response.jsp?KEYX_NUMB="+keyNum +"&USER="+this.gfnGetUserInfo("USER_ID");
	var nRow = dsInput.addRow();
	dsInput.setColumn(nRow,"MCRT_CODE", mchtCode);
	dsInput.setColumn(nRow,"PAYM_IDNO", paymentId);
//	dsInput.setColumn(nRow,"REFR_NUMB", sUser);
	dsInput.setColumn(nRow,"PAYM_AMNT", amut);
	dsInput.setColumn(nRow,"CURR_CODE", "MYR");
	dsInput.setColumn(nRow,"PROD_DESC", prodDec);
	dsInput.setColumn(nRow,"USER_NAME", userNm);
	dsInput.setColumn(nRow,"USER_MAIL", mail);
	dsInput.setColumn(nRow,"USER_NUMB", contract);
	dsInput.setColumn(nRow,"MCRT_REMK", rmk);
	dsInput.setColumn(nRow,"LANG_TYPE", "UTF-8");
	dsInput.setColumn(nRow,"SIGN_TYPE", "SHA256");
//	dsInput.setColumn(nRow,"SIGN_CODE", sign);
	dsInput.setColumn(nRow,"REPN_URLX", resUrl);	
	dsInput.setColumn(nRow,"BACK_URLX", backUrl);	
	dsInput.setColumn(nRow,"KEYX_NUMB", keyNum);


	//Service Add(COMN.GET_PG_REFR_NUMB)
	nexup.AddService(this, "COMN.GET_PG_REFR_NUMB_S01", "", "dsRefrNumb=dsRefrNumb", "");
	//Service Add(COMN.SET_PG_SEND)
	nexup.AddService(this, "COMN.SET_PG_SEND_I01", "dsPG_SEND=dsPayInTemp:U dsRefrNumb=dsRefrNumb", "", "");
	//Call Service 
	nexup.CallService(this, "_sendPayTmp", "_gfnPayCallBack");	
};


/**
* @class 결제  Callback 함수. <br>
* @param {String} strServiceId - Service ID
* @param {String} strErrorCode - Error Code
* @param {String} strErrorMsg - Error Message
* @return N/A
* @example 
* this._gfnPayCallBack(strServiceId, strErrorCode, strErrorMsg);
*/
pForm._gfnPayCallBack = function(strServiceId, strErrorCode, strErrorMsg){
	if (strErrorCode < 0) 
	{
		// 에러 메시지 출력
		trace("_gfnCtosCallBack Log Error ==> " + strErrorMsg);
		return;
	}
	switch (strServiceId) 
	{
		case "_sendPayTmp":
			var dsRefrInput = this._gfnGetDataSet("dsRefrNumb");
			var dsRsult = this._gfnGetDataSet(tmpPayRefDsNm);
			if(!this.gfnIsNull(tmpPayRefDsNm)){ 
				dsRsult.copyData(dsRefrInput);
				//tmpPayRefDsNm = "";
			}
			var refrNumb = dsRefrInput.getColumn(0, "REFR_NUMB");
			var dsInputName = "dsPayInTemp";
			var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성
			
			var mchtCode = dsInput.getColumn(0, "MCRT_CODE");
			var Amount = dsInput.getColumn(0, "PAYM_AMNT");
			var curr = dsInput.getColumn(0, "CURR_CODE");
			
			var objDs = nexacro.getApplication().gdsMailSms;
			var fRow = objDs.findRowExpr("COMM_CODE == '1537' && CMDT_CODE == '2'");		
			var MerchantKey = objDs.getColumn(fRow, "CODE_NAME");

			Amount = Amount.replace(/\./gi, "");
			Amount = Amount.replace(/\,/gi, "");
			var shaSign = MerchantKey + "" + mchtCode + "" + refrNumb + "" + Amount + "" + curr;
			trace("shaSign : "+ shaSign);
			var sign = this.gfnSHA256(shaSign);
			
			trace("sign : "+ sign);
			dsInput.setColumn(0, "SIGN_CODE", sign);
			dsInput.setColumn(0, "REFR_NUMB", refrNumb);
			
			//Service Add(COMN.SET_PG_SEND_U01)
			nexup.AddService(this, "COMN.SET_PG_SEND_U01", "dsPG_SEND=dsPayInTemp:U", "", "");
			//Call Service 
			nexup.CallService(this, "_PgSendRefNoUpdate", "_gfnPayCallBack");
			
		break;
		case "_PgSendRefNoUpdate":
			
		var sMsgId = "confirm.before.pay";								//메세지ID
		var arrArg = "";												//메세지취환될값 배열[생략가능]
		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
		var sMsgCallback = "_gfnSafriCall";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요
		
		// 변경된 내역을 저장 하시겠습니까?
		this.gfnAlertM(sMsgId, arrArg, sPopId, sMsgCallback);					
		break;
		case "_gfnPaySendDel":
		break;
	}

};

pForm._gfnSafriCall = function(strId, strVal){
	if(!strVal){
		var dsRsult = this._gfnGetDataSet(tmpPayRefDsNm);
		if(!this.gfnIsNull(tmpPayRefDsNm)){ 
			dsRsult.clearData();		
		}
		//Service Add(COMN.SET_PG_SEND_D01)
		nexup.AddService(this, "COMN.SET_PG_SEND_D01", "dsRefrNumb=dsRefrNumb", "", "");
		//Call Service 
		nexup.CallService(this, "_gfnPaySendDel", "_gfnPayCallBack");
	}else{
		var dsRefrInput = this._gfnGetDataSet("dsRefrNumb");
		var refrNumb = dsRefrInput.getColumn(0, "REFR_NUMB");
				
		var actUrl = "https://www.mobile88.com/ePayment/entry.asp";		
		var dsInputName = "dsPayInTemp";
		var dsInput = this._gfnGetDataSet(dsInputName);	//임시데이타셋 생성

		// Form 정보 설정
		var dynamicForm = document.createElement("form");
			dynamicForm.setAttribute("id", "preview_form");
			dynamicForm.setAttribute("method", "post");
			dynamicForm.setAttribute("action", actUrl);
			dynamicForm.setAttribute("target", "IPAY_WIN");

			var inputMtCd = document.createElement('input');
			inputMtCd.type = 'hidden';
			inputMtCd.name = 'MerchantCode';
			inputMtCd.value = dsInput.getColumn(0, "MCRT_CODE");
			dynamicForm.appendChild(inputMtCd);

			var inputPayId = document.createElement('input');
			inputPayId.type = 'hidden';
			inputPayId.name = 'PaymentId';
			inputPayId.value = dsInput.getColumn(0, "PAYM_IDNO");
			dynamicForm.appendChild(inputPayId);

			var inputRefNo = document.createElement('input');
			inputRefNo.type = 'hidden';
			inputRefNo.name = 'RefNo';
			inputRefNo.value = refrNumb;
			dynamicForm.appendChild(inputRefNo);

			var inputAmut = document.createElement('input');
			inputAmut.type = 'hidden';
			inputAmut.name = 'Amount';
			inputAmut.value = dsInput.getColumn(0, "PAYM_AMNT");
			dynamicForm.appendChild(inputAmut);
				
			var inputCurr = document.createElement('input');
			inputCurr.type = 'hidden';
			inputCurr.name = 'Currency';
			inputCurr.value = dsInput.getColumn(0, "CURR_CODE");
			dynamicForm.appendChild(inputCurr);

			var inputProdDec = document.createElement('input');
			inputProdDec.type = 'hidden';
			inputProdDec.name = 'ProdDesc';
			inputProdDec.value = dsInput.getColumn(0, "PROD_DESC");
			dynamicForm.appendChild(inputProdDec);

			var inputUserNm = document.createElement('input');
			inputUserNm.type = 'hidden';
			inputUserNm.name = 'UserName';
			inputUserNm.value = dsInput.getColumn(0, "USER_NAME");
			dynamicForm.appendChild(inputUserNm);
				
			var inputMail = document.createElement('input');
			inputMail.type = 'hidden';
			inputMail.name = 'UserEmail';
			inputMail.value = dsInput.getColumn(0, "USER_MAIL");
			dynamicForm.appendChild(inputMail);

			var inputContract = document.createElement('input');
			inputContract.type = 'hidden';
			inputContract.name = 'UserContact';
			inputContract.value = dsInput.getColumn(0, "USER_NUMB");
			dynamicForm.appendChild(inputContract);

			var inputRmk = document.createElement('input');
			inputRmk.type = 'hidden';
			inputRmk.name = 'Remark';
			inputRmk.value = dsInput.getColumn(0, "MCRT_REMK");
			dynamicForm.appendChild(inputRmk);

			var inputLang = document.createElement('input');
			inputLang.type = 'hidden';
			inputLang.name = 'Lang';
			inputLang.value = dsInput.getColumn(0, "LANG_TYPE");
			dynamicForm.appendChild(inputLang);

			var inputSignType = document.createElement('input');
			inputSignType.type = 'hidden';
			inputSignType.name = 'SignatureType';
			inputSignType.value = dsInput.getColumn(0, "SIGN_TYPE");
			dynamicForm.appendChild(inputSignType);

			var inputSign = document.createElement('input');
			inputSign.type = 'hidden';
			inputSign.name = 'Signature';
			inputSign.value = dsInput.getColumn(0, "SIGN_CODE");
			dynamicForm.appendChild(inputSign);

			var inputResUrl = document.createElement('input');
			inputResUrl.type = 'hidden';
			inputResUrl.name = 'ResponseURL';
			inputResUrl.value = dsInput.getColumn(0, "REPN_URLX");
			dynamicForm.appendChild(inputResUrl);

			var inputBackUrl = document.createElement('input');
			inputBackUrl.type = 'hidden';
			inputBackUrl.name = 'BackendURL'; 
			inputBackUrl.value = dsInput.getColumn(0, "BACK_URLX"); 
			dynamicForm.appendChild(inputBackUrl);
				
			document.body.appendChild(dynamicForm);
				
			// 팝업 창 너비와 높이, 위치 변수 선언
			var newWidth = 600, newHeight = 500, newLeft = 0, newTop = 0;
			window.open('', 'IPAY_WIN', 'left=' + newLeft + ',top=' + newTop + ',width=' + newWidth + ',height=' + newHeight + ',scrollbars=yes,resizable=yes');
			dynamicForm.submit();
	}	
	tmpPayRefDsNm = "";	
};


/**
* @class DataSet 을 Json 형태로 변경 <br>
* @param {DataSet} ds - 변경하고자하는 Dataset
* @return Json
* @example 
* this.gfnDataSetToJson(this.ds);
*/  
pForm.gfnDataSetToJson = function(ds){
	var data =  new Array();
	for(var i=0; i < ds.rowcount; i++){
		var chartData = new Object() ;
		for(var j=0; j < ds.colcount; j++){
			var colId = ds.getColID(j);
			chartData[colId] = ds.getColumn(i, colId);
		}
		data.push(chartData);		
	}
	return data;
};