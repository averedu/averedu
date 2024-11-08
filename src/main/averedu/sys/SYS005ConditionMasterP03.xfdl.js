(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYS005ConditionMasterP03");
            this.set_titletext("신청항목관리 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_QUERY\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CHK\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"JEEO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATOR\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"RETURN_QUERY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TF", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CODE_NM\">TRUE</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CODE_NM\">FALSE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOperator", this);
            obj._setContents("<ColumnInfo><Column id=\"OPERATOR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATOR_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"OPERATOR_NM\">&lt;</Col><Col id=\"OPERATOR_CODE\">01</Col></Row><Row><Col id=\"OPERATOR_NM\">&gt;</Col><Col id=\"OPERATOR_CODE\">02</Col></Row><Row><Col id=\"OPERATOR_NM\">=</Col><Col id=\"OPERATOR_CODE\">03</Col></Row><Row><Col id=\"OPERATOR_NM\">&lt;=</Col><Col id=\"OPERATOR_CODE\">04</Col></Row><Row><Col id=\"OPERATOR_NM\">&gt;=</Col><Col id=\"OPERATOR_CODE\">05</Col></Row><Row><Col id=\"OPERATOR_NM\">!=</Col><Col id=\"OPERATOR_CODE\">06</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGeomJeung", this);
            obj._setContents("<ColumnInfo><Column id=\"TF_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","10","10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_Title01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","30",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","5","50","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("학번");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00","60","5","150","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","10","70","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신청항목관리 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"70","100","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","100",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제어항목명\"/><Cell col=\"1\" text=\"연산자\"/><Cell col=\"2\" text=\"입력값\"/><Cell col=\"3\" text=\"검증결과\"/><Cell col=\"4\" text=\"검증\"/></Band><Band id=\"body\"><Cell text=\"bind:JEEO_NAME\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:OPERATOR\" displaytype=\"combotext\" combodataset=\"dsOperator\" combodatacol=\"OPERATOR_NM\" combocodecol=\"OPERATOR_CODE\"/><Cell col=\"2\" text=\"bind:INPUT_VALUE\"/><Cell col=\"3\" text=\"bind:TF_CD\" displaytype=\"combotext\" combodataset=\"ds_TF\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"검증\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","250",null,"100","20",null,"10",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("SYS005ConditionMasterP03.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): SYS005ConditionMasterP03.xfdl(신청항목관리팝업)
        * 작 성         일 명: 고승재
        * 작 성         일 자: 2022/11/30
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

        /**
         * 기능 : 폼 로드 완료후 초기값 Setting
         */
        this.form_onload = function(obj,e)
        {
            //폼에 공통으로 로드시 사용하는 함수.
            this.gfn_formOnload(obj.e);
            //사용자 화면  초기화 함수
            //this.fn_formInit();

        	// 신청제어항목 조회
        	this.fn_Ret();
        };


        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };

        /**********************************************************************
                03. 폼 로드 및 닫을때(폼이 포커스 갈때)
        ***********************************************************************/

        /**********************************************************************
         * 공통 버튼 호출 영역(공통버튼 사용에만사용)
         **********************************************************************/

        /**********************************************************************
                04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/

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
        			case "GeomJeung":
        					this.fn_PostGeomJeung();
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
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
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
            var strUrl      = "/prj/sys/RetrieveConditionMasterP03List.do";
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

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/

        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/

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
         * 검증 전 처리

         */
        this.fn_PreGeomJeung = function ()
        {
        	this.ds_input.setColumn(0, "RETURN_QUERY", this.dsMaster.getColumn(this.dsMaster.rowposition, "RETURN_QUERY"));
        	this.ds_input.setColumn(0, "OPERATOR", this.grdMaster.getCellText(this.dsMaster.rowposition, 1));
        	this.ds_input.setColumn(0, "INPUT_VALUE", this.dsMaster.getColumn(this.dsMaster.rowposition, "INPUT_VALUE"));

        	return true;
        };

        /**
         * 검증
         */
        this.fn_GeomJeung = function ()
        {
            if(!this.fn_PreGeomJeung())
            {
                return false;
            }
        	var strSvc      = "GeomJeung";
            var strUrl      = "/prj/sys/RetrieveConditionMasterP03.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsGeomJeung=dsMaster";
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
         * 검증 후 처리
         */
        this.fn_PostGeomJeung = function ()
        {
        	this.dsMaster.setColumn(this.dsMaster.rowposition, "TF_CD", this.dsGeomJeung.getColumn(0, "TF_CD"));
        };

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
        	this.close("CLOSE");
        };

        /**
         * 그리드 검증 버튼 클릭
         */
        this.grdMaster_oncellclick = function(obj,e)
        {
        	// 공통코드선택 보기 버튼 클릭이면서 입력방식이 공통코드인 경우
        	if ( e.cell == "4" )
        	{

        		if ( this.ds_input.getColumn(0, "HAKBEON") == null ) {
        			this.alert("학번을 입력한 후 검증해주시기 바랍니다.");
        			return;
        		}
        		else {
        			this.fn_GeomJeung();
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.Edit00.addEventHandler("onchanged",this.divSearch_Edit00_onchanged,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("SYS005ConditionMasterP03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
