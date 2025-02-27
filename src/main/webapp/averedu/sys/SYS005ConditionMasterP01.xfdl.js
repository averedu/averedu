(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYS005ConditionMasterP01");
            this.set_titletext("신청제어항목관리팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOperator", this);
            obj._setContents("<ColumnInfo><Column id=\"OPERATOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPERATOR_NM\">&lt;</Col><Col id=\"OPERATOR_CODE\">01</Col></Row><Row><Col id=\"OPERATOR_NM\">&gt;</Col><Col id=\"OPERATOR_CODE\">02</Col></Row><Row><Col id=\"OPERATOR_NM\">=</Col><Col id=\"OPERATOR_CODE\">03</Col></Row><Row><Col id=\"OPERATOR_NM\">&lt;=</Col><Col id=\"OPERATOR_CODE\">04</Col></Row><Row><Col id=\"OPERATOR_NM\">&gt;=</Col><Col id=\"OPERATOR_CODE\">05</Col></Row><Row><Col id=\"OPERATOR_NM\">!=</Col><Col id=\"OPERATOR_CODE\">06</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SINCHEONG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sincheonJeeo", this);
            obj._setContents("<ColumnInfo><Column id=\"JEEO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"IPRYEOK_TYPE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">공통코드</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">문자</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"CODE_NM\">숫자</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"CODE_NM\">날짜</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","10","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("신청제어 상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","40",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"208\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"신청제어코드\"/><Cell col=\"2\" text=\"입력방식\"/><Cell col=\"3\" text=\"연산자\"/><Cell col=\"4\" text=\"입력값\"/><Cell col=\"5\" text=\"공통코드선택\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" combodataset=\"ds_sincheonJeeo\" combodatacol=\"JEEO_NAME\" combocodecol=\"JEEO_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:JEEO_CODE\"/><Cell col=\"2\" combodataset=\"ds_inputType\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\" edittype=\"none\" text=\"bind:IPRYEOK_TYPE_CD\"/><Cell col=\"3\" combodataset=\"dsOperator\" combodatacol=\"OPERATOR_NM\" combocodecol=\"OPERATOR_CODE\" edittype=\"combo\" displaytype=\"combocontrol\" text=\"bind:OPERATOR\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:INPUT_VALUE\" textAlign=\"left\"/><Cell col=\"5\" edittype=\"button\" displaytype=\"buttoncontrol\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","300","370","100",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","50",null,"130","370",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"10","50",null,"70","370",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","50",null,"10","370",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"10","130","20","210",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("SYS005ConditionMasterP01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS005ConditionMasterP01.xfdl(신청제어항목관리팝업)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/11/23
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
        this.lvchkColidDs   = "JEEO_CODE$IPRYEOK_TYPE_CD$OPERATOR$INPUT_VALUE";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "제어코드$입력방식$연산자$입력값";
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
            //this.fn_formInit();

        	var JEEO_CODE = this.getOwnerFrame().jeeo_code;
        	var SINCHEONG_CODE = this.getOwnerFrame().sincheong_code;

        	if ( !this.gfn_isNull(this.getOwnerFrame().jeeo_code) )
        	{
        		this.ds_input.setColumn(0, "JEEO_CODE", JEEO_CODE);
        	}

        	if ( !this.gfn_isNull(this.getOwnerFrame().sincheong_code) )
        	{
        		this.ds_input.setColumn(0, "SINCHEONG_CODE", SINCHEONG_CODE);
        	}

        	// 신청제어항목 조회
        	this.fn_sincheongJeeo();
        };


        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {
            var strDs    = "";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);
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
                    //case "Init":
                            //this.fn_PostformInit();
                        //break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
                    case "RetSingcheongJeeo":
                            this.fn_PostRetSincheongJeeo();
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

        /**
         * 팝업 callback
         */
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "JeeoHangMok" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        		            this.dsMaster.setColumn(this.dsMaster.rowposition, "INPUT_VALUE", sRtn[0]);
        				}
        			break;
        		default:
                    break;
        	}
        };

        /************************************************************************************************
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/

        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if ( this.gfn_isNull(this.ds_input.getColumn(0, "SINCHEONG_CODE")) )
        	{
        		return false;
        	}

            return true;
        };

        /**
         * 신청제어항목 Combo 조회
         */
        this.fn_Ret = function ()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
        	var strSvc      = "Ret";
            var strUrl      = "/prj/sys/RetrieveConditionMasterP01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        this.fn_sincheongJeeo = function ()
        {
        	var strSvc      = "RetSingcheongJeeo";
            var strUrl      = "/prj/sys/RetrieveConditionMasterP01List.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_sincheonJeeo=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostRetSincheongJeeo = function()
        {
            this.fn_Ret();
        };

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/

        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "SINCHEONG_CODE", this.ds_input.getColumn(0, "SINCHEONG_CODE"));
        	this.dsMaster.setColumn(nRow, "CHK", "0");
        };

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/

        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );

            if(result == 0)
            {
                return false;
            }

            //다중삭제 용도
            this.dsMaster.set_enableevent(false);
            for(var i=this.dsMaster.rowcount-1;i>-1;i--)
            {
                if(this.dsMaster.getColumn(i,"CHK") == "1" || this.dsMaster.getRowType(i) == 2)
                {
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
        this.fn_Del = function()
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/sys/DeleteConditionMasterP01List.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
            var strArg      = "";
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;                                   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
        };

        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

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

            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
        		this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
        		return false;
            }

        	if ( this.dsMaster.getColumn(0, "SINCHEONG_CODE") != "" )
        	{
        		for (var i = 1; i < this.dsMaster.rowcount; i++)
        		{
        			this.dsMaster.setColumn(i, "SINCHEONG_CODE", this.dsMaster.getColumn(0, "SINCHEONG_CODE"))
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
            var strUrl      = "/prj/sys/SaveConditionMasterP01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc
                               , strUrl
                               , strInDs
                               , strOutDs
                               , strArg
                               , strCallBack
                               , strASync);
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

        /**
         * 닫기버튼 클릭 시
         */
        this.btnClose_onclick = function(obj,e)
        {

        	var objRtnArr = new Array(2);
        	objRtnArr[0] = this.dsMaster.getColumn(this.dsMaster.rowposition, "SINCHEONG_CODE");
        	objRtnArr[1] = this.dsMaster.rowcount;

        	this.close(objRtnArr.toString());
        };

        /**
         * 신규버튼 클릭 시
         */
        this.btnAdd_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        /**
         * 삭제버튼 클릭 시
         */
        this.btnDelete_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        /**
         * 저장버튼 클릭 시
         */
        this.btnSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        /**
         * 신청제어항목 셀렉박스 row 변경 시
         */
        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	var mRow = this.dsMaster.rowposition;

        	for ( var i = 0; i < this.ds_sincheonJeeo.rowcount; i++ )
        	{
        		if ( this.dsMaster.getColumn(mRow, "JEEO_CODE") == this.ds_sincheonJeeo.getColumn(i, "JEEO_CODE") )
        		{
        			this.dsMaster.setColumn(mRow, "IPRYEOK_TYPE_CD", this.ds_sincheonJeeo.getColumn(i, "IPRYEOK_TYPE_CD"));
        		}
        	}
        };

        /**
         * 그리드 공통코드보기 버튼 클릭
         */
        this.grdMaster_oncellclick = function(obj,e)
        {
        	// 공통코드선택 보기 버튼 클릭이면서 입력방식이 공통코드인 경우
        	if ( e.cell == "5" && this.dsMaster.getColumn(this.dsMaster.rowposition, "IPRYEOK_TYPE_CD") == "01" )
        	{
        		var oArg = { jeeo_code : this.dsMaster.getColumn(this.dsMaster.rowposition, "JEEO_CODE") };
        		this.gfn_openPopup('JeeoHangMok', 'SYS/SYS005ConditionMasterP02.xfdl', oArg, 'fn_popupCallback', '');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("SYS005ConditionMasterP01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
