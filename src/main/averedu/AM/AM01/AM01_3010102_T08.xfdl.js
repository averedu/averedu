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
            this.set_titletext("학력");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"TODT\" type=\"STRING\" size=\"256\"/><Column id=\"HAKRYEOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"GUKGA_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGYO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DAEHAKWON_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GYEYEOL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_JONGRYU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"256\"/><Column id=\"HAKWI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"IMYONG_GIJUN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"NONMUN_JEMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHOEJONGHAKRYEOK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWON_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakryeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGukga", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakwi", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChoijongHakryeok", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">Y</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">N</Col></Row></Rows>");
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

            obj = new Static("Static01_00","313","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","19","153","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("학력 정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","5","36",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"11","55","25","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"11","55","25","70",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"11","55","25","190",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"11","55","25","130",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","10","44",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"85\" band=\"left\"/><Column size=\"91\"/><Column size=\"113\"/><Column size=\"105\"/><Column size=\"115\"/><Column size=\"109\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"시작일\" cssclass=\"point\"/><Cell col=\"2\" text=\"종료일\" cssclass=\"point\"/><Cell col=\"3\" text=\"학력\" cssclass=\"point\"/><Cell col=\"4\" text=\"국가\" cssclass=\"point\"/><Cell col=\"5\" text=\"학교명\" cssclass=\"point\"/><Cell col=\"6\" text=\"학과명\"/><Cell col=\"7\" text=\"전공\"/><Cell col=\"8\" text=\"학위종별\"/><Cell col=\"9\" text=\"학위코드\"/><Cell col=\"10\" text=\"최종학력\"/><Cell col=\"11\" text=\"취득일자\"/><Cell col=\"12\" text=\"학위번호\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:FRDT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"2\" text=\"bind:TODT\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:HAKRYEOK_GBCD\" combodataset=\"dsHakryeok\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"4\" text=\"bind:GUKGA_GBCD\" displaytype=\"combotext\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsGukga\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:HAKGYO_NM\" edittype=\"normal\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DEPT_NM\" displaytype=\"normal\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:JEONGONG_CD\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:HAKWI_JONGRYU_NM\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:HAKWI_GBCD\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" combodataset=\"dsHakwi\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:CHOEJONGHAKRYEOK_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"dsChoijongHakryeok\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"11\" text=\"bind:CHWIDEUK_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\"/><Cell col=\"12\" text=\"bind:HAKWI_NO\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학력");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item14","cboJuya00","value","ds_input","DAEHAK_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("AM01_3010102_T08.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010102_T08.xfdl(학력)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/18
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
        this.lvchkColidDs   = "FRDT$TODT$HAKRYEOK_GBCD$GUKGA_GBCD$HAKGYO_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "시작일$종료일$학력$국가$학교명";
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
            var strDs    = "dsHakryeok|dsGukga|dsHakwi";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00259|00266|00221";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        			case "Post":
                            this.fn_Ret(this.ds_input.getColumn(0, "SABEON"));
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
        this.fn_Ret = function(sabeon)
        {
            this.ds_input.setColumn(0, "SABEON", sabeon);

            var strSvc      = "Ret";
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T09.do";
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

        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "SABEON", this.ds_input.getColumn(0, "SABEON"));
        	this.dsMaster.setColumn(nRow, "HAKRYEOK_GBCD", "");
        	this.dsMaster.setColumn(nRow, "GUKGA_GBCD", "410");
        	this.dsMaster.setColumn(nRow, "HAKWI_GBCD", "");
        	this.dsMaster.setColumn(nRow, "CHOEJONGHAKRYEOK_YN", "");
        	this.dsMaster.setColumn(nRow, "GUBUN_YN", "0");
        	this.dsMaster.setColumn(nRow, "IMYONG_GIJUN_YN", "1");
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
            if(this.dsMaster.rowcount < 1)
            {
                this.gfn_alert("삭제할 데이터가 없습니다.","삭제정보","","warning");
                return false;
            }

            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
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
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Delete_3010101_T09.do";
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

        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
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

        	for(var i=0; i<this.dsMaster.rowcount; i++)
        	{
        		var frdt = this.dsMaster.getColumn(i, "FRDT");
        		var todt = this.dsMaster.getColumn(i, "TODT");

        		if (this.gfn_getDiffDate(frdt, todt) < 0)
        		{
        			this.alert("시작일이 종료일보다 큽니다.");
        			return false;
        		}
        	}

        	var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
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
            var strSvc      = "Post";
            var strUrl      = "/prj/AM/AM01/Save_3010101_T09.do";
            var strInDs     = "dsMaster=dsMaster:u";
            var strOutDs    = "";
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

        /**********************************************************************
                08. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        // 취소버튼 클릭시
        this.btnCancel_onclick = function(obj,e)
        {
        	this.dsMaster.reset();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.btnSave.addEventHandler("onclick",this.fn_Save,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnNew.addEventHandler("onclick",this.fn_New,this);
            this.btnDel.addEventHandler("onclick",this.fn_Del,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
        };
        this.loadIncludeScript("AM01_3010102_T08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
