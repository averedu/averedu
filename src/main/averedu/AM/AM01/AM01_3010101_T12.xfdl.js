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
            this.set_titletext("연수/출장/세미나");
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
            obj._setContents("<ColumnInfo><Column id=\"SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YEONSU_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"YEONSU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"TODT\" type=\"STRING\" size=\"256\"/><Column id=\"SIHAENG_GIGWAN\" type=\"STRING\" size=\"256\"/><Column id=\"JANGSO\" type=\"STRING\" size=\"256\"/><Column id=\"AMT\" type=\"STRING\" size=\"256\"/><Column id=\"GYOYUKBU_BOGO_DT\" type=\"STRING\" size=\"256\"/><Column id=\"BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_DT\" type=\"DATE\" size=\"256\"/><Column id=\"CHEORIJA\" type=\"STRING\" size=\"256\"/><Column id=\"WEP_SUJEONG_DT\" type=\"DATE\" size=\"256\"/><Column id=\"WEP_SUJEONG_IP\" type=\"STRING\" size=\"256\"/><Column id=\"YEONSU_SIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"SUJI_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GYESAN_YEOBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHEORI_YEOBU_YN\" type=\"STRING\" size=\"256\"/><Column id=\"GUKNAE_GUKOE\" type=\"STRING\" size=\"256\"/><Column id=\"JEOMSU\" type=\"STRING\" size=\"256\"/><Column id=\"NYEONDO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsGuknae", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">국내</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">국외</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaneopche", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">10</Col><Col id=\"CODE_NM\">산업체</Col></Row><Row><Col id=\"CODE\">20</Col><Col id=\"CODE_NM\">교내</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
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

            obj = new Static("stc_09_00_00","7","19","163","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("연수/출장/세미나 정보");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"NO\"/><Cell col=\"1\" rowspan=\"2\" text=\"국내&#13;&#10;/국외\" cssclass=\"point\"/><Cell col=\"2\" rowspan=\"2\" text=\"산업체&#13;&#10;/교내\" cssclass=\"point\"/><Cell col=\"3\" rowspan=\"2\" text=\"연수명\" cssclass=\"point\"/><Cell col=\"4\" colspan=\"3\" text=\"기간\" cssclass=\"point\"/><Cell col=\"7\" rowspan=\"2\" text=\"금액\" cssclass=\"point\"/><Cell col=\"8\" rowspan=\"2\" text=\"년도\"/><Cell col=\"9\" rowspan=\"2\" text=\"시행기관\"/><Cell col=\"10\" rowspan=\"2\" text=\"장소\"/><Cell col=\"11\" rowspan=\"2\" text=\"비고\"/><Cell col=\"12\" rowspan=\"2\" text=\"승인&#13;&#10;여부\" cssclass=\"point\"/><Cell row=\"1\" col=\"4\" text=\"시작일\" cssclass=\"point\"/><Cell row=\"1\" col=\"5\" text=\"종료일\" cssclass=\"point\"/><Cell row=\"1\" col=\"6\" text=\"시간\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:GUKNAE_GUKOE\" displaytype=\"combotext\" combodataset=\"dsGuknae\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:SUJI_GUBUN\" combodataset=\"dsSaneopche\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:YEONSU_NM\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:FRDT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:TODT\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:YEONSU_SIGAN\" displaytype=\"text\" edittype=\"text\" editinputtype=\"digit\" editmaxlength=\"6\"/><Cell col=\"7\" text=\"bind:AMT\" displaytype=\"number\" edittype=\"normal\" textAlign=\"right\" editinputtype=\"digit\" editmaxlength=\"16\"/><Cell col=\"8\" text=\"bind:NYEONDO\" displaytype=\"text\" edittype=\"text\" editinputtype=\"digit\"/><Cell col=\"9\" text=\"bind:SIHAENG_GIGWAN\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:JANGSO\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:BIGO\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:CHEORI_YEOBU_YN\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" combodataset=\"dsYn\" displaytype=\"combotext\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGubun",null,"14","126","22","255",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboGubun_innerdataset = new nexacro.NormalDataset("cboGubun_innerdataset", obj);
            cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">연수</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">출장</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">세미나</Col></Row></Rows>");
            obj.set_innerdataset(cboGubun_innerdataset);
            obj.set_text("연수");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("연수/출장/세미나");
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
        this.registerScript("AM01_3010101_T12.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): AM01_3010101_T12.xfdl(연수/출장/세미나)
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
        this.lvchkColidDs   = "GUKNAE_GUKOE$YEONSU_NM$FRDT$TODT$YEONSU_SIGAN$AMT$CHEORI_YEOBU_YN";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "국내/외$출장 및 연수/세미나명$시작일$종료일$시간$금액$승인여부";
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
            var strUrl      = "/prj/AM/AM01/Retrieve_3010101_T12.do";
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
        	this.dsMaster.setColumn(nRow, "YEONSU_GBCD", this.cboGubun.value);
        	this.dsMaster.setColumn(nRow, "CHEORI_YEOBU_YN", "0");
        	this.dsMaster.setColumn(nRow, "GUKNAE_GUKOE", "");

        	if(this.cboGubun.value == "10") {
        		this.dsMaster.setColumn(nRow, "GYESAN_YEOBU_YN", "0");
        		this.dsMaster.setColumn(nRow, "SUJI_GUBUN", "");
        	} else {
        		this.dsMaster.setColumn(nRow, "GYESAN_YEOBU_YN", "1");
        	}
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
            var strUrl      = "/prj/AM/AM01/Delete_3010101_T12.do";
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
        		var yeonsuGbcd = this.dsMaster.getColumn(i,"YEONSU_GBCD");
        		var sujiGubun = this.dsMaster.getColumn(i,"SUJI_GUBUN");
        		var frdt = this.dsMaster.getColumn(i, "FRDT");
        		var todt = this.dsMaster.getColumn(i, "TODT");

        		if (yeonsuGbcd == "10") {
        			if (this.gfn_isNull(sujiGubun)) {
        				this.alert("필수입력항목 산업체/교내를 입력 하지 않으셨습니다.");
        				return false;
        			}
        		}

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
            var strUrl      = "/prj/AM/AM01/Save_3010101_T12.do";
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

        this.cboGubun_canitemchange = function(obj,e)
        {
        	if (this.gfn_isUpdate(this.dsMaster))
        	{
        		if (!this.confirm("수정 중인 데이터가 초기화됩니다.\n계속하시겠습니까?")) {
        			return false;
        		}
        		else {
        			this.dsMaster.reset();
        		}
        	}
        	return true;
        };

        this.cboGubun_onitemchanged = function(obj,e)
        {
        	this.dsMaster.filter("YEONSU_GBCD=='"+obj.value+"' ");
        	if (obj.value == "10") { // 연수
        	    this.grdMaster.setCellProperty( "head", 3, "text", "연수명");
        		this.grdMaster.setFormatColProperty ( 2, "size", 40 );
        	} else if (obj.value == "20") { // 출장
        		this.grdMaster.setCellProperty( "head", 3, "text", "출장명");
        		this.grdMaster.setFormatColProperty ( 2, "size", 0 );
        	} else if (obj.value == "30") { // 세미나
        	    this.grdMaster.setCellProperty( "head", 3, "text", "세미나명");
        		this.grdMaster.setFormatColProperty ( 2, "size", 0 );
        	}
        	this.dsMaster.set_rowposition(0);
        };

        this.dsMaster_onload = function(obj,e)
        {
        	this.dsMaster.filter("YEONSU_GBCD=='"+this.cboGubun.value+"' ");
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
            this.cboGubun.addEventHandler("canitemchange",this.cboGubun_canitemchange,this);
            this.cboGubun.addEventHandler("onitemchanged",this.cboGubun_onitemchanged,this);
            this.dsMaster.addEventHandler("onload",this.dsMaster_onload,this);
        };
        this.loadIncludeScript("AM01_3010101_T12.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
