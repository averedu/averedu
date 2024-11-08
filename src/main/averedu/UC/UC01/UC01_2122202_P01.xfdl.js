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
            this.set_titletext("학생별 성적 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SIMBOL\" type=\"STRING\" size=\"256\"/><Column id=\"NCS_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DIAGQUESTION\" type=\"STRING\" size=\"256\"/><Column id=\"SCORE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"SEMESTER\" type=\"STRING\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DAYNIGHT_DIVCD\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"PROF_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STDID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","10",null,null,"10","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"207\"/><Column size=\"533\"/><Column size=\"64\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"하위역량\"/><Cell col=\"2\" text=\"진단문항\"/><Cell col=\"3\" text=\"점수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SIMBOL\" editmaxlength=\"256\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:NCS_CD_NM\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:DIAGQUESTION\" editmaxlength=\"256\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SCORE\" editmaxlength=\"256\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","830","565","60","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_description("학생별 성적 조회");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UC01_2122202_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122202_P01.xfdl(학생별 성적 조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/19
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

        	if( !this.gfn_isNull(this.getOwnerFrame().yyyy)){
        		this.ds_input.setColumn(0, "YYYY", this.getOwnerFrame().yyyy);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().semester)){
        		this.ds_input.setColumn(0, "SEMESTER", this.getOwnerFrame().semester);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().deptCd)){
        		this.ds_input.setColumn(0, "DEPT_CD", this.getOwnerFrame().deptCd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().daynightDivcd)){
        		this.ds_input.setColumn(0, "DAYNIGHT_DIVCD", this.getOwnerFrame().daynightDivcd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().compGradeCd)){
        		this.ds_input.setColumn(0, "COMP_GRADE_CD", this.getOwnerFrame().compGradeCd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().subjectCd)){
        		this.ds_input.setColumn(0, "SUBJECT_CD", this.getOwnerFrame().subjectCd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().lectclass)){
        		this.ds_input.setColumn(0, "LECTCLASS", this.getOwnerFrame().lectclass);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().profCd)){
        		this.ds_input.setColumn(0, "PROF_CD", this.getOwnerFrame().profCd);
        	}

        	if( !this.gfn_isNull(this.getOwnerFrame().stdId)){
        		this.ds_input.setColumn(0, "STDID", this.getOwnerFrame().stdId);
        	}

        	this.fn_Ret();
        };

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
         * 기능 : 마스터 조회 실행
         */
        this.fn_Ret = function()
        {
            if(!this.fn_PreRet())
            {
                return false;
            }
            var strSvc      = "Ret";
            var strUrl      = "/prj/UC/UC01/Retrieve_2122202_P01.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
            this.gfn_getRowCount(this.stRowCnt,this.dsMaster);
        };
        /**********************************************************************
                06. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("UC01_2122202_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
