(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("교직승인인원");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"3\"/><Column id=\"JUYA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"SINCHEONG_HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"IPHAK_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEUNGIN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SAENGSEONG_YN\" type=\"STRING\" size=\"1\"/><Column id=\"BIGO\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"COPY_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PASTE_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","0","0","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","0","32","1640","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","180","9","160","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("<<<<<<<<<<<<");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00","180","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01","340","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("복사 년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_00","340","0","56","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","450","0","10","42",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchCopyYYYY","460","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","800","42","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","140","48","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","45","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Title02");
            obj.set_text("교직승인인원 목록");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"75\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"350\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"년도\"/><Cell col=\"3\" text=\"학과\"/><Cell col=\"4\" text=\"주야구분\"/><Cell col=\"5\" text=\"신청학년\"/><Cell col=\"6\" text=\"입학인원\"/><Cell col=\"7\" text=\"승인인원\"/><Cell col=\"8\" text=\"자동생성여부\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" text=\"bind:YYYY\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" editinputtype=\"number\"/><Cell col=\"3\" text=\"bind:HAKGWA_NM\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;text&apos; : &apos;none&apos;\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;show&apos; : &apos;hide&apos;\" expandsize=\"20\"/><Cell col=\"4\" text=\"bind:JUYA_GBCD\" maskeditformat=\"####.##.##\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos; ? &apos;combo&apos; : &apos;none&apos;\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" displaytype=\"combotext\" combodataset=\"dsJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:SINCHEONG_HAKNYEON\" maskeditformat=\"####.##.##\" edittype=\"combo\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" textAlign=\"left\" displaytype=\"combocontrol\" editinputtype=\"digit\" combodataset=\"dsHaknyeon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:IPHAK_INWON\" displaytype=\"text\" editinputtype=\"digit\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" editinputtype=\"digit\" text=\"bind:SEUNGIN_INWON\"/><Cell col=\"8\" text=\"bind:SAENGSEONG_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" text=\"bind:BIGO\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchYYYY","value","ds_input","PASTE_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchCopyYYYY","value","ds_input","COPY_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UP01_2040107_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP01_2040107_M.xfdl(교직승인인원)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/18
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 :
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        this.lvchkColidDs   = "YYYY$HAKGWA_CD$JUYA_GBCD"; // 필수 입력사항 칼럼ID  예) "commSmcd$commName"
        this.lvchkColNameDs = "년도$학과$주야구분";

        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj, e) {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj, e) {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function() {
        	// 기준연도학기
            var strDs    		= "dsBaseYyyyHakgi"; // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            var svcId    		= "baseYyyyHakgiInit";
        	var strEopmuGbcd 	= "US";
        	var strUseYn     	= "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs, svcId, strEopmuGbcd, strUseYn);

            var strDs    = "dsJuya|dsHaknyeon";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00003|00060"; 		// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X"; 				// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 					// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드, 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        this.fn_PostBaseYyyyHakgiInit = function() {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		var gijun	= nexacro.toNumber(this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		var copy 	= gijun - 1;
        		this.ds_input.setColumn(0, "COPY_YYYY",		copy.toString());
        		this.ds_input.setColumn(0, "PASTE_YYYY", 	gijun.toString());
        	}
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId, nErrorCode, sErrorMsg) {
            this.gfn_clearSortAll(this.grdMaster);
            if(nErrorCode != 0) {
                this.gfn_alert(sErrorMsg, "에러정보", "", "error");
                return false;
            } else {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId) {
                    case "Init":
        				this.fn_PostformInit();
                        break;
                    case "singleInit":
        				this.fn_PostSingleInt();
                        break;
                    case "Ret":
        				this.fn_PostRet();
                        break;
                    case "Save":
        				this.fn_PostSave();
                        break;
                    case "New":
        				this.fn_PostNew();
                        break;
                    case "Del":
        				this.fn_PostDel();
                        break;
        			case "baseYyyyHakgiInit":
        				this.fn_PostBaseYyyyHakgiInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal) {
        	switch(strId) {
        		case "hakgwa" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE") {
        					this.dsMaster.set_enableevent(false);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", sRtn[0]);
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", sRtn[1]);
        					this.dsMaster.set_enableevent(true);
        				}
        			break;
        		default:
                    break;
        	}
         };

        /************************************************************************************************
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */
        this.fn_cmmBtnClick = function(sBtn) {
            switch(sBtn) {
                case "ret" : 		// 조회
        			this.fn_Ret();
                    break;
                case "new" : 	 	// 신규
        			this.fn_New();
                    break;
                case "del" : 		// 삭제
        			this.fn_Del();
                    break;
                case "save" : 		// 저장
        			this.fn_Save();
                    break;
                case "excel" : 		// 엑셀
        			this.fn_Excel();
                    break;
                case "print" : 		// 출력
        			 this.fn_Print();
                    break;
                case "confirm" :	// 확정
        			 this.fn_Confirm();
                    break;
                case "tmp1" : 		// 복사
        			 this.fn_copyGyogikinwon();
                    break;
                case "tmp2" : 		// 팁
        			 this.fn_Tip();
                    break;
                case "tmp3" : 		// 여분버튼3
        			 this.fn_Tmp3();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function() {
            // 조회조건 셋팅
            return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function() {
            if(!this.fn_PreRet()) {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/UP/UP01/Retrieve_2040107_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID 	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function() {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function() {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function() {
            if(!this.fn_PreNew()) {
                return false;
            }

            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow, "YYYY", 				this.divSearch.form.spnSearchYYYY.value);
            this.dsMaster.setColumn(nRow, "JUYA_GBCD", 			"1");
            this.dsMaster.setColumn(nRow, "SINCHEONG_HAKNYEON",	"1");

        	this.grdMaster.setFocus();
        	this.grdMaster.setCellPos(3);
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.fn_PostNew = function() {

        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreDel = function() {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK", 1) == -1) {
                this.gfn_alert("삭제할 데이터가 없습니다.", "삭제정보", "", "warning");
                return false;
            }

            var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "삭제정보", "", "question");
            if(result == 0) {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i = this.dsMaster.rowcount - 1; i > -1; i--) {
                if(this.dsMaster.getColumn(i, "CHK") == "1" || this.dsMaster.getRowType(i) == 2) {
                    this.dsMaster.deleteRow(i);
                }
            }
            this.dsMaster.set_enableevent(true);

            //개별삭제시
            //this.dsMaster.deleteRow(this.dsMaster.rowposition);

            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function() {
            if(!this.fn_PreDel()) {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UP/UP01/Delete_2040107_MList.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";	//공백일시 기본 fn_callBack
            var strASync    = true; 			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        this.fn_PostDel = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if(this.dsMaster.rowcount > 0) {
                for(var i = 0; i < this.dsMaster.rowcount; i++) {
                    if(this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if(!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
            if (result[0] != "success") {
                this.gfn_alert(result[0], "저장정보", "", "question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		if (this.dsMaster.getRowType(i) == 2) { // 신규의 경우 중복 데이터 체크
        			var cnt = this.dsMaster.getCaseCount(
        				"YYYY==" + this.dsMaster.getColumn(i, "YYYY")
        				+ "&&HAKGWA_CD==" + this.dsMaster.getColumn(i, "HAKGWA_CD")
        				+ "&&JUYA_GBCD==" + this.dsMaster.getColumn(i, "JUYA_GBCD")
        			);

        			if (cnt > 1) {
        				this.alert("중복된 키값이 존재합니다. [Key: 년도, 학과, 주야구분]");
        				return false;
        			}
        		}
        	 }

             var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
             if(result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if(!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP01/Save_2040107_MList.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function() {
            this.gfn_getRowCount(this.staRowCnt, this.dsMaster);
        };

        /**********************************************************************
                09. 초기화
        ***********************************************************************/
        /**********************************************************************
                10. 출력 함수 선언
        ***********************************************************************/
        /**********************************************************************
                11. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.fn_Excel = function() {
            if(this.dsMaster.rowcount < 1) {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보", "", "information");
                return false;
            }

            var result = this.gfn_confirm("Excel를 출력하시겠습니까?", "EXCEL 출력", "", "question");
            if(result == 0) {
               return false;
            }

            this.gfn_excelExport(this.grdList, "시트이름", "파일이름");
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/
        /**
         *      기능 : 학과검색팝업 호출
         */
        this.fn_setCallDeptPopup = function(strSearchValue) {
        	this.dsDept.clearData();
        	this.ds_input1.setColumn(0, "DEPT_CD_NM", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue)) {
        		var strSvc 		= "Search";
        		var strUrl      = "/prj/com/Retrieve_P01.do";
        		var strInDs  	= "ds_input=ds_input1";
        		var strOutDs 	= "dsDept=dsMaster";
        		var strArg 		= "";
        		var GBV_MENUID	= objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
        			strArg	   += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}
        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//샏략이나 공백일시에는 ASync=true,싱크시는 false로
        		this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        	}

        	if(this.dsDept.rowcount == 1) {
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_CD", this.dsDept.getColumn(0,"DEPT_CD"));
        		this.dsMaster.setColumn(this.dsMaster.rowposition, "HAKGWA_NM", this.dsDept.getColumn(0,"DEPT_NM"));
        	} else {
        		var oArg 			= {deptCdNm:strSearchValue, jojikGbcd:'20', useYn:'1', deptLv:'3'};
        		var oOption 		= {};
        		var sPopupCallBack 	= "fn_popupCallback";
        		this.gfn_openPopup("hakgwa", "com::COMM_P01.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if(e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if(e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 팁 실행
         */
        this.fn_Tip = function() {
        	this.alert("도움말 준비중입니다.");
        };

        /**
          * 전년도복사
         **/
        this.fn_copyGyogikinwon = function() {
        	var copyYyyy 	= this.divSearch.form.spnSearchCopyYYYY.value;	// 복사할 년도
        	var pasteYyyy 	= this.divSearch.form.spnSearchYYYY.value;		// 붙여넣을 년도
        	if (nexacro.toNumber(copyYyyy) >= nexacro.toNumber(pasteYyyy)) {
        		this.alert("복사년도에 대상년도보다 이전 값을 입력하세요.");
        		this.divSearch.form.spnSearchCopyYYYY.setFocus();
        		return;
        	}

        	var msgStr = copyYyyy + "년도의 데이터를 " + pasteYyyy + "년도에 복사하시겠습니까?";
        	if (!this.gfn_confirm(msgStr, "전년도복사", "", "question" )) return;

            var strSvc      = "Copy";
            var strUrl      = "/prj/UP/UP01/Copy_2040107_MList.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * grdMaster 확장기능
         **/
        this.grdMaster_onexpandup = function(obj, e) {
        	if (e.cell == 3) {
        		var name = this.dsMaster.getColumn(e.row, "HAKGWA_NM");
        		this.fn_setCallDeptPopup(name);
        	}
        };

        /**
          * grdMaster 엔터입력
         **/
        this.grdMaster_onenterdown = function(obj, e) {
        	if (e.cell == 3) {
        		var name = this.dsMaster.getColumn(e.row, "HAKGWA_NM");
        		this.fn_setCallDeptPopup(name);
        	}
        };

        /**
          * 키보드 입력으로 년도 값 변경시 -1 값 복사 년도 set
         **/
        this.divSearch_spnSearchYYYY_onchanged = function(obj, e) {
        	var copyYyyy = nexacro.toNumber(e.postvalue) - 1;
        	this.divSearch.form.spnSearchCopyYYYY.set_value(copyYyyy.toString());
        };

        /**
          * 스핀 버튼으로 년도 값 변경시 -1 값 복사 년도 set
         **/
        this.divSearch_spnSearchYYYY_onspin = function(obj, e) {
        	var copyYyyy = nexacro.toNumber(e.postvalue) - 1;
        	this.divSearch.form.spnSearchCopyYYYY.set_value(copyYyyy.toString());
        };

        this.divSearch_spnSearchYYYY_onkeydown = function(obj, e) {
        	//13(Enter) 누르면 조회
        	if(e.keycode == 13) {
        		this.ds_input.setColumn(0, "PASTE_YYYY", obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onchanged",this.divSearch_spnSearchYYYY_onchanged,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onspin",this.divSearch_spnSearchYYYY_onspin,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divSearch.form.spnSearchCopyYYYY.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UP01_2040107_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
