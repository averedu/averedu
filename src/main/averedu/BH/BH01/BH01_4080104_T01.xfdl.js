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
            this.set_titletext("재학생");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"100\"/><Column id=\"DATE_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdIljeong", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"REPT_KFNM\" type=\"STRING\" size=\"2\"/><Column id=\"REPT_CODE\" type=\"STRING\" size=\"2\"/><Column id=\"REPT_DESC\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_02_00_00_00_00","0","-1","10","437",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","0","670","8",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","8",null,"200","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"일정구분\"/><Cell col=\"3\" text=\"년도\"/><Cell col=\"4\" text=\"학기\"/><Cell col=\"5\" text=\"시작일\"/><Cell col=\"6\" text=\"종료일\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DIFF_SEQU\"/><Cell col=\"2\" text=\"bind:DATE_CODE\" displaytype=\"combotext\" combodataset=\"dsGrdIljeong\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:SCHL_YEAR\"/><Cell col=\"4\" text=\"bind:SCHL_SMST\" displaytype=\"combotext\" combodataset=\"dsGrdHakgi\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:STRT_DATE\" displaytype=\"expr:STRT_DATE == &apos;&apos;?&apos;normal&apos;:&apos;date&apos;\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:ENDD_DATE\" displaytype=\"expr:ENDD_DATE == &apos;&apos;?&apos;normal&apos;:&apos;date&apos;\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","10","211","200","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("고지서 안내(유의) 사항");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","810","208","35","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","0","235","1640","8",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_gojiseo","10","242",null,null,"10","8",null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"212","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("재학생");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_gojiseo","value","dsDetail","REPT_DESC");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("BH01_4080104_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH01_4080104_T01.xfdl(재학생)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/04
        * 변 경         일 자:
        * 변 경         자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
                01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
                02. 폼 변수 정의
        ***********************************************************************/
        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/
        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            this.fn_formInit();
        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "dsGrdIljeong|dsGrdHakgi";	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00752|00022"; 				// 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "N|N"; 						// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = ""; 							// 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "singleInit":
                            this.fn_PostSingleInt();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "DetailRet":
                            this.fn_PostDetailRet();
                        break;
                    case "Save":
                            this.fn_PostSave();
                        break;
                    case "Del":
                            this.fn_PostDel();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function(schlYear, schlSmst, stntGubn, diffSequ, dataCode)
        {
        	this.ds_input.setColumn(0, "SCHL_YEAR", schlYear);
        	this.ds_input.setColumn(0, "SCHL_SMST", schlSmst);
        	this.ds_input.setColumn(0, "STNT_GUBN", stntGubn);
        	this.ds_input.setColumn(0, "DIFF_SEQU", diffSequ);
        	this.ds_input.setColumn(0, "DATA_CODE", dataCode);

            var strSvc      = "Ret";
            var strUrl      = "/prj/BH/BH01/Retrieve_4080104_T01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DetailRet = function()
        {
            var strSvc      = "DetailRet";
            var strUrl      = "/prj/BH/BH01/Retrieve_4080104_T01DtList.do";
            var strInDs     = "ds_input=ds_inputDetail";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
        	var rowPosition = this.dsMaster.rowposition;
        	this.ds_inputDetail.setColumn(0, "SCHL_YEAR", this.dsMaster.getColumn(rowPosition, "SCHL_YEAR"));
        	this.ds_inputDetail.setColumn(0, "SCHL_SMST", this.dsMaster.getColumn(rowPosition, "SCHL_SMST"));

        	// 고지서 조회
        	this.fn_DetailRet();
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDetailRet = function()
        {
        	if (this.dsDetail.rowcount == 0) {
        		var nRow = this.dsDetail.addRow();
        		var rowPosition = this.dsMaster.rowposition;
        		this.dsDetail.setColumn(nRow, "SCHL_YEAR", this.dsMaster.getColumn(rowPosition, "SCHL_YEAR"));
        		this.dsDetail.setColumn(nRow, "SCHL_SMST", this.dsMaster.getColumn(rowPosition, "SCHL_SMST"));
        		this.dsDetail.setColumn(nRow, "REPT_KFNM", "생활관 등록금고지서");
        		this.dsDetail.setColumn(nRow, "REPT_CODE", "R007");
        	}
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        this.fn_New = function(stntGubn) {
        	this.dsMaster.clearData();

        	for (var i = 1; i < 4; i++) {
        		var nRow = this.dsMaster.addRow();
        		this.dsMaster.setColumn(nRow, "STNT_GUBN", stntGubn);
        		this.dsMaster.setColumn(nRow, "DATE_CODE", i.toString());
        		this.dsMaster.setColumn(nRow, "CURR_GUBN", "0");
        		this.dsMaster.setColumn(nRow, "STRT_DATE", "");
        		this.dsMaster.setColumn(nRow, "ENDD_DATE", "");
        	}
        }

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsMaster.rowcount; i++)
                {
                    if(this.dsMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsMaster.setColumn(i,"CHK","0");
                }
            }

        	for (var i = 0; i < this.dsMaster.getRowCountNF(); i++) {
        		var stntGubn = this.dsMaster.getColumnNF(i, "STNT_GUBN"); // 학생구분
        		var dateCode = this.dsMaster.getColumnNF(i, "DATE_CODE"); // 일정구분
        		var strtDate = this.dsMaster.getColumnNF(i, "STRT_DATE"); // 시작일
        		var enddDate = this.dsMaster.getColumnNF(i, "ENDD_DATE"); // 종료일

        		if (this.gfn_isNull(this.gfn_trim(strtDate))) { // 시작일
        		    this.alert(
        				'"시작일" 항목은 필수 입력입니다. ['
        				+ (stntGubn == 0 ? '재학생' : stntGubn == 1 ? '신입생' : '편입생')
        				+ ' Line : ' + (i % 3 + 1) + ']'
        			);

        			return false;
        		}

        		if (this.gfn_isNull(this.gfn_trim(enddDate))) { // 종료일
        		    this.alert(
        				'"종료일" 항목은 필수 입력입니다. ['
        				+ (stntGubn == 0 ? '재학생' : stntGubn == 1 ? '신입생' : '편입생')
        				+ ' Line : ' + (i % 3 + 1) + ']'
        			)
        			;
        		    return false;
        		}

        		if (this.gfn_getDiffDate(strtDate, enddDate) < 0) {
        		    this.alert(
        				'"종료일" 항목은 "시작일" 항목 보다 값이 크거나 같아야 합니다. ['
        				+ (stntGubn == 0 ? '재학생' : stntGubn == 1 ? '신입생' : '편입생')
        			    + ' Line : ' + (i % 3 + 1) + ']'
        			);

        			return false;
        		}
        	}

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            if(!this.fn_PreSave())
            {
                return false;
            }
            var strSvc      = "Save";
            var strUrl      = "/prj/BH/BH01/Save_4080104_T01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };
        /**
         *      기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/

        /**
         *      그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        // 일정 변경시 학생별 컬럼값 변경
        this.fn_setGrdValue = function(column, value) {
        	for (var i = 0; i < this.dsMaster.rowcount; i++) {
        		this.dsMaster.setColumn(i, column, value);
        	}
        }

        this.fn_clearData = function() {
        	this.dsMaster.clearData();
        	this.dsDetail.clearData();
        }

        this.btnSave_onclick = function(obj,e)
        {
        	var schlYear = this.ds_inputDetail.getColumn(0, 'SCHL_YEAR'); // 학년도
        	var schlSmst = this.ds_inputDetail.getColumn(0, 'SCHL_SMST'); // 학기
        	var schlSmstNm = (schlSmst == '11' ? '1학기' : schlSmst == '12' ? '하계학기' : schlSmst == '21' ? '2학기' : schlSmst == '22' ? '동계학기' : '');

        	var result = this.gfn_confirm(schlYear + "년도 " + schlSmstNm + "의 고지서 안내(유의) 사항을 저장하시겠습니까?", "저장", "", "question");
        	if(result == 0) {
        		return;
        	}

            var strSvc      = "SaveDetail";
            var strUrl      = "/prj/BH/BH01/Save_4080104_T01DetailList.do";
            var strInDs     = "ds_input=ds_inputDetail:a ";
                strInDs    += "dsMaster=dsDetail:u";
            var strOutDs    = "dsDetail=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("BH01_4080104_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
