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
            this.set_titletext("교직적성및인성검사관리 엑셀업로드 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_preload("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SINCHEONG_YN\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"HOECHA\" type=\"STRING\" size=\"1\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"GEOMSA_TYCD\" type=\"STRING\" size=\"1\"/><Column id=\"HANGMOK01\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK02\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK03\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK04\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK05\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK06\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK07\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK08\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK09\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK10\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK11\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK12\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK13\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK14\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK15\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK16\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK17\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK18\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK19\" type=\"STRING\" size=\"5\"/><Column id=\"HANGMOK20\" type=\"STRING\" size=\"5\"/><Column id=\"TOT\" type=\"STRING\" size=\"5\"/><Column id=\"JEOKGYEOK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"ILGWANSEONG_YN_BIGO\" type=\"STRING\" size=\"100\"/><Column id=\"BUJEOKGYEOKHANGMOK_BIGO\" type=\"STRING\" size=\"2000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("년도");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","47",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","50","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","20","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_create00",null,"9","70","20","27",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_text("저장");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_excellUpload",null,"9","70","20","100",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_text("파일찾기");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchNyeondo","60","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("YYYY");
            obj.set_datacolumn("YYYY_NM");
            obj.set_innerdataset("dsNyeondo");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHoecha","250","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_codecolumn("HOECHA");
            obj.set_datacolumn("HOECHA_NM");
            obj.set_innerdataset("dsHoecha");
            obj.set_text("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_00","160","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_text("회차");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00_01","160","1","56","35",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","240","0","10",null,null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","52",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("20");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","10","72","125","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","135","71","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","90",null,"8","0",null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","10","98",null,null,"10","40",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"55\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"70\"/><Column size=\"150\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"회차\"/><Cell col=\"3\" text=\"학번\"/><Cell col=\"4\" text=\"교직이수&#13;&#10;신청여부\"/><Cell col=\"5\" text=\"검사 유형\"/><Cell col=\"6\" text=\"01.문제해결력&#13;&#10;탐구력\"/><Cell col=\"7\" text=\"02.판단력\"/><Cell col=\"8\" text=\"03.독립성&#13;&#10;자주성\"/><Cell col=\"9\" text=\"04.창의&#13;&#10;응용력\"/><Cell col=\"10\" text=\"05.심리적&#13;&#10;안정성\"/><Cell col=\"11\" text=\"06.언어&#13;&#10;의사소통력\"/><Cell col=\"12\" text=\"07.지도성\"/><Cell col=\"13\" text=\"08.공포&#13;&#10;포용력\"/><Cell col=\"14\" text=\"09.지식&#13;&#10;정보력\"/><Cell col=\"15\" text=\"10.봉사&#13;&#10;희생.협동성\"/><Cell col=\"16\" text=\"11.계획성\"/><Cell col=\"17\" text=\"12.성실&#13;&#10;책임감\"/><Cell col=\"18\" text=\"13.소명감&#13;&#10;교직관\"/><Cell col=\"19\" text=\"14.열정\"/><Cell col=\"20\" text=\"총점\"/><Cell col=\"21\" text=\"적격여부\"/><Cell col=\"22\" text=\"부적격항목내용\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:YYYY\"/><Cell col=\"2\" text=\"bind:HOECHA\" displaytype=\"combotext\" combodataset=\"DS_HOECHA\" combocodecol=\"HOECHA\" combodatacol=\"HOECHA_NM\"/><Cell col=\"3\" text=\"bind:HAKBEON\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" text=\"bind:SINCHEONG_YN\"/><Cell col=\"5\" text=\"bind:GEOMSA_TYCD\"/><Cell col=\"6\" text=\"bind:HANGMOK01\"/><Cell col=\"7\" text=\"bind:HANGMOK02\"/><Cell col=\"8\" text=\"bind:HANGMOK03\"/><Cell col=\"9\" text=\"bind:HANGMOK04\"/><Cell col=\"10\" text=\"bind:HANGMOK05\"/><Cell col=\"11\" text=\"bind:HANGMOK06\"/><Cell col=\"12\" text=\"bind:HANGMOK07\"/><Cell col=\"13\" text=\"bind:HANGMOK08\"/><Cell col=\"14\" text=\"bind:HANGMOK09\"/><Cell col=\"15\" text=\"bind:HANGMOK10\"/><Cell col=\"16\" text=\"bind:HANGMOK11\"/><Cell col=\"17\" text=\"bind:HANGMOK12\"/><Cell col=\"18\" text=\"bind:HANGMOK13\"/><Cell col=\"19\" text=\"bind:HANGMOK14\"/><Cell col=\"20\" text=\"bind:TOT\"/><Cell col=\"21\" text=\"bind:JEOKGYEOK_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"22\" text=\"bind:BUJEOKGYEOKHANGMOK_BIGO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","0","0","10",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00","0","0",null,"10","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00_00_00_00","0",null,null,"10","0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","570",null,"60","20",null,"10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchNyeondo","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchHoecha","value","ds_input","HOECHA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UP03_2040301_P01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UP03_2040301_P01.xfdl(교직적성및인성검사관리 엑셀업로드)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/08/26
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
        	// 콤보
        	this.fn_NyeondoCombo();	// 년도
        	this.fn_HoechaCombo(); 	// 회차
        };

        this.fn_PostNyeondoInit = function() {
        	// 회차 onitemchanged 호출
        	let info = new nexacro.ItemChangeEventInfo;
        	this.divSearch.form.cboSearchNyeondo.set_index(0);
        	this.divSearch_cboSearchNyeondo_onitemchanged(this.divSearch.form.cboSearchGyeyeol, info);
        };

        this.fn_PostHoechaInit = function() {
        	this.divSearch.form.cboSearchHoecha.set_index(0);
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
                    case "Save":
        				this.fn_PostSave();
                        break;
        			// 검색조건 년도
        			case "NyeondoCombo":
        				this.fn_PostNyeondoInit();
        			    break;
        			// 검색조건 회차
        			case "HoechaCombo":
        				this.fn_PostHoechaInit();
        			    break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**********************************************************************
                07. 삭제 함수 선언
        ***********************************************************************/
        /**********************************************************************
                08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function() {
            if (this.dsMaster.rowcount > 0) {
                for(var i = 0; i < this.dsMaster.rowcount; i++) {
                    if(this.dsMaster.getColumn(i, "CHK") == "0") {
                        continue;
                    }

                    this.dsMaster.setColumn(i, "CHK", "0");
                }
            }

            if (!this.gfn_isUpdate(this.dsMaster)) {
                this.gfn_alert("변경된 이력이 없습니다.", "저장정보", "", "question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg	= true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
            if (result[0] != "success") {
                this.gfn_alert(result[0], "저장정보", "", "question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm("저장 하시겠습니까?", "저장", "", "question");
             if(result == 0) {
                 return false;
             }

             return true;
        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function() {
            if (!this.fn_PreSave()) {
                return false;
            }

            var strSvc      = "Save";
            var strUrl      = "/prj/UP/UP03/Save_2040301_P01List.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsMaster=dsMaster:u";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //샏략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        };

        /**
         * 기능 : 저장시 후처리
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
        /**********************************************************************
                13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
                14. 기타 Control Event
        ***********************************************************************/
        /**
         * 그리드멀티 체크
         */
        this.grdMaster_onheadclick = function(obj, e) {
            if (e.cell == this.grdMaster.getBindCellIndex("body", "CHK")) {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         * 그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e) {
            if (e.cell != this.grdMaster.getBindCellIndex("body", "CHK") && e.cell != 1) {
                this.gfn_gridSort(obj, e);
            }
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function() {
            //return this.gfn_isUpdate(this.dsMaster);
        };

        /**
         * 기능 : 년도콤보 조회
         */
        this.fn_NyeondoCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "NyeondoCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_NyeondoCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsNyeondo=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
         * 기능 : 회차콤보 조회
         */
        this.fn_HoechaCombo = function() {
        	this.ds_inputCombo.setColumn(0, "SELECT_TYPE", 	"S");
        	this.ds_inputCombo.setColumn(0, "GYOJIK_YN", 	"");

            var strSvc      = "HoechaCombo";
            var strUrl      = "/prj/UP/UP_COMMON/Retrieve_HoechaCombo.do";
            var strInDs     = "ds_input=ds_inputCombo";
            var strOutDs    = "dsHoecha=dsMaster";
            var strArg      = "";
            var GBV_MENUID	= objApp.gv_cutPrgId;
            if (!this.gfn_isNull(this.gfn_trim(GBV_MENUID))) {
            	strArg     += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }

        /**
          * 회차 필터
         **/
        this.divSearch_cboSearchNyeondo_onitemchanged = function(obj, e) {
        	var strUpDeptCd = this.gfn_isNull(e.postvalue) ? "" : e.postvalue;
        	this.dsHoecha.filter("UP_CD == '" + strUpDeptCd + "' || DEPT_NM == '전체'");
        	this.divSearch.form.cboSearchHoecha.set_index(0);
        };

        this.divSearch_btn_excellUpload_onclick = function(obj, e) {
        	var hoecha	= this.divSearch.form.cboSearchHoecha.value;
        	if (this.gfn_isNull(hoecha)) {
        		this.gfn_alert("회차를 선택해주세요.", "입력정보", "", "warning");
        		return false;
        	}

        	var confirmMsg = "검색조건의 편입년도, 모집구분, 학과, 주야구분, 학년, 담당교수를 기준으로 업로드합니다.";
        	if (this.gfn_confirm(confirmMsg, "엑셀 업로드", "", "question")) {
        		this.gfn_excelImportNsheet("dsExcelUpload", "면접대상점수", "", "", "excelUpload_succFunc", "excelUpload_errorFunc", this);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.divSearch.form.Static01_01_00_00_01_00.addEventHandler("onclick",this.divSearch_Static01_01_00_00_01_00_onclick,this);
            this.divSearch.form.btn_create00.addEventHandler("onclick",this.btn_create_onclick,this);
            this.divSearch.form.btn_excellUpload.addEventHandler("onclick",this.divSearch_btn_excellUpload_onclick,this);
            this.divSearch.form.cboSearchNyeondo.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.divSearch.form.cboSearchNyeondo.addEventHandler("onitemchanged",this.divSearch_cboSearchNyeondo_onitemchanged,this);
            this.divSearch.form.cboSearchHoecha.addEventHandler("onkeydown",this.divSearch_onkeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.Static01_01_00_00_00_01_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.Static01_01_00_00_00_01_00_00_00_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("UP03_2040301_P01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
