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
            this.set_titletext("설문문항별예제관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"SEOLMUN_YUHYUNG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"PYOSI_SEQ\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"GAEKGWANSIK_YN\" type=\"STRING\" size=\"1\"/><Column id=\"GAEKGWANSIK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GAEKGWANSIK_YEJE_CNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SEOLMUN_YUHYUNG_GBCD\" type=\"STRING\" size=\"20\"/><Column id=\"MUNHANG_NO\" type=\"STRING\" size=\"100\"/><Column id=\"MUNHANG_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"MUNHANG_NO_NAEYONG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYejeMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEJE_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"YEJE_NAEYONG\" type=\"STRING\" size=\"4000\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaekgwansikYeobu", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeolmunYuhyungDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"32\"/><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yejeInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MUNHANG_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGaeseolMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"SEOLMUN_GAESEOL_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HAKGMOK_NO\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"HANGMOK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"PILSU_SEONTAEK_CNT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gaeseolInput", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MUNHANG_NO\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo><Rows><Row><Col id=\"MUNHANG_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rtn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMunhangNaeyong", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_01_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","52","100","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("문항내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","-11","10","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("설문유형구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSeolmunYuhyung","109","9","200","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsSeolmunYuhyungMaster");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00","325","11","65","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("문항");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchMunhangNo","400","11","208","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchMunhang","618","12","22","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_PopSrch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchMunhangNaeyong","650","11","950","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdYeje","0","422",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsYejeMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"47\"/><Column size=\"62\"/><Column size=\"1159\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"2\" text=\"예제번호\" cssclass=\"point\"/><Cell col=\"3\" text=\"예제내용\" cssclass=\"point\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" editmaxlength=\"1\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"mask\" textAlign=\"center\" text=\"bind:YEJE_NO\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" textAlign=\"left\" text=\"bind:YEJE_NAEYONG\" editmaxlength=\"4000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","395","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("예제내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMunhang","0","77",null,"300","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"87\"/><Column size=\"78\"/><Column size=\"1159\"/><Column size=\"58\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"checkbox\" text=\"No\"/><Cell col=\"1\" text=\"설문유형\"/><Cell col=\"2\" text=\"문항번호\"/><Cell col=\"3\" text=\"문항내용\"/><Cell col=\"4\" text=\"표시순서\"/><Cell col=\"5\" text=\"객관식여부\"/><Cell col=\"6\" text=\"객관식예제수\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEOLMUN_YUHYUNG_NM\" editmaxlength=\"256\" combodataset=\"dsSeolmunYuhyungDetail\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:MUNHANG_NO\" editmaxlength=\"22\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"none\" textAlign=\"left\" text=\"bind:MUNHANG_NAEYONG\" editmaxlength=\"4000\"/><Cell col=\"4\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYOSI_SEQ\" editmaxlength=\"22\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:GAEKGWANSIK_NM\" editmaxlength=\"256\" combodataset=\"dsGaekgwansikYeobu\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"6\" displaytype=\"number\" edittype=\"none\" textAlign=\"center\" text=\"bind:GAEKGWANSIK_YEJE_CNT\" editmaxlength=\"22\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"389","60","25","209",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"389","60","25","144",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"389","60","25","79",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"389","60","25","14",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt","106","51","184","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stRowCnt2","104","395","136","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","40","32","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","40","1","320","9",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","100","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","1","1","27","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","310","1","56","40",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","391","1","10","37",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","414","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","377","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1200","414","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("설문문항별예제관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSearchSeolmunYuhyung","value","ds_input","SEOLMUN_YUHYUNG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtSearchMunhangNo","value","ds_input","MUNHANG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtSearchMunhangNaeyong","value","ds_input","MUNHANG_NAEYONG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsYejeMaster");
            this._addPreloadList("data","","dsGaeseolMaster");
        };
        
        // User Script
        this.registerScript("UY01_2100202_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UY01_2100202_M.xfdl(설문문항별예제관리)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2020/11/09
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
        this.lvchkColidDs   = "YEJE_NO$YEJE_NAEYONG";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "예제번호$예제내용";

        this.strKeyValue 	= "";  // 저장 후 row 유지
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
            var strDs    = "dsSeolmunYuhyungMaster|dsSeolmunYuhyungDetail|dsGaekgwansikYeobu";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "80201|80201|00528";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "T|X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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

            this.gfn_clearSortAll(this.grdMunhang);
        	this.gfn_clearSortAll(this.grdYeje);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
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
                    default:
                        break;
                }
            }
        };

        //Popup callback영역
        this.fn_popupCallback = function(strId, strVal)
        {
        	switch(strId)
        	{
        		case "munhang" :
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					this.ds_input.set_enableevent(false);
        					this.ds_input.setColumn(this.ds_input.rowposition, "MUNHANG_NO", sRtn[0]);
        					this.ds_input.setColumn(this.ds_input.rowposition, "MUNHANG_NAEYONG", sRtn[1]);
        					this.ds_input.set_enableevent(true);
        				}
        			break;
        		default:
                    break;
        	}
        }

        /************************************************************************************************;
         * 공통 버튼 호출 영역(공통버튼 사용에만사용);
         ************************************************************************************************/;
        /*;
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함);
         */;
        this.fn_cmmBtnClick = function(sBtn)
        {
            switch(sBtn)
            {
                case "ret" :        // 조회
                        this.fn_Ret();
                    break;
                case "tmp1" :        // 도움말
                         this.fn_Help();
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
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
            if(this.fn_beforeclose())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}

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
            var strUrl      = "/prj/UY/UY01/munhangRetrieve_2100202_M.do";
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
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsMaster_canrowposchange = function(obj,e)
        {
         	if(this.fn_beforeclose())
         	{
         		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
         		if(result == 0)
         		{
         			return false;
         		}
         	}
        };

        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	// 조회조건 셋팅
        	this.ds_yejeInput.setColumn(0,"MUNHANG_NO",this.dsMaster.getColumn(this.dsMaster.rowposition,"MUNHANG_NO"));
        	this.fn_DRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "DRet";
            var strUrl      = "/prj/UY/UY01/yejeRetrieve_2100202_M.do";
            var strInDs     = "ds_yejeInput=ds_yejeInput";
            var strOutDs    = "dsYejeMaster=dsYejeMaster";
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
        this.fn_PostDRet = function()
        {
            this.gfn_getRowCount(this.stRowCnt2,this.dsYejeMaster);
        };
        /**********************************************************************
                06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreNew = function()
        {
        	if (this.dsMaster.rowcount == 0)
        	{
        		this.alert("추가할 문항을 선택해주세요.");
        		return false;
        	}
            return true;
        };

        /**
         * 기능 : 마스터 추가 실행
         */
        this.btnAdd_onclick = function(obj,e)
        {
            if(!this.fn_PreNew())
            {
                return false;
            }

        	var nYejeNo = this.dsYejeMaster.getMax("YEJE_NO");
            var nRow = this.dsYejeMaster.addRow();
        	this.dsYejeMaster.set_enableevent(false);
            this.dsYejeMaster.setColumn(nRow,"CHK",     "0");           //선택
        	this.dsYejeMaster.setColumn(nRow,"MUNHANG_NO", this.dsMaster.getColumn(this.dsMaster.rowposition, "MUNHANG_NO"));

         	if (this.gfn_isNull(nYejeNo)) {
         		this.dsYejeMaster.setColumn(nRow,"YEJE_NO", 1);
         	} else {
         		this.dsYejeMaster.setColumn(nRow,"YEJE_NO", nYejeNo + 1);
         	}
        	this.dsYejeMaster.set_enableevent(true);

        	this.grdYeje.setFocus();
        	this.grdYeje.setCellPos(3);
        };

        /**********************************************************************
                07. 도움말 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 실행
         */
        this.fn_Help = function()
        {
        	this.gfn_alert("도움말 준비중입니다.","저장정보","","question");
        };
        /**********************************************************************
                08. 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */

        this.fn_PreDel = function()
        {
            //멀티삭제용도
            if(this.dsYejeMaster.rowcount < 1 || this.dsYejeMaster.findRow("CHK",1) == -1)
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
            this.dsYejeMaster.set_enableevent(false);
            for(var i=this.dsYejeMaster.rowcount-1;i>-1;i--)
            {
        		// 체크되어있거나 데이터셋의 로우타입이 삭제일 때
                if(this.dsYejeMaster.getColumn(i,"CHK") == "1" || this.dsYejeMaster.getRowType(i) == 2)
                {
        			this.dsGaeseolMaster.clearData();
        			this.ds_gaeseolInput.clearData();
        			this.ds_gaeseolInput.insertRow(0);
        			this.ds_gaeseolInput.copyRow(0, this.dsYejeMaster, i);

        			var strSvc      = "GaeseolRet";
        			var strUrl      = "/prj/UY/UY01/gaeseolRetrieve_2100202_M.do";
        			var strInDs     = "ds_gaeseolInput=ds_gaeseolInput";
        			var strOutDs    = "dsGaeseolMaster=dsGaeseolMaster";
        			var strArg      = "";
        			var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        			var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
        			this.gfn_Transaction(strSvc
        								, strUrl
        								, strInDs
        								, strOutDs
        								, strArg
        								, strCallBack
        								, strASync);
        			if(this.dsGaeseolMaster.rowcount > 0)
        			{
        				this.gfn_alert("개설문항이 존재하여 삭제할 수 없습니다.","삭제정보","","warning");
        				return false;
        			}
        			else
        			{
        				this.dsYejeMaster.deleteRow(i);
        			}
                }
            }
            this.dsYejeMaster.set_enableevent(true);

            //개별삭제시
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.btnDel_onclick = function(obj,e)
        {
            if(!this.fn_PreDel())
            {
                return false;
            }

            var strSvc      = "Del";
            var strUrl      = "/prj/UY/UY01/yejeDelete_2100202_M.do";
            var strInDs     = "dsYejeMaster=dsYejeMaster:u";
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
            this.gfn_getRowCount(this.stRowCnt2,this.dsYejeMaster);
        };
        /**********************************************************************
                09. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
            if(this.dsYejeMaster.rowcount > 0)
            {
                for(var i=0;i<this.dsYejeMaster.rowcount; i++)
                {
                    if(this.dsYejeMaster.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsYejeMaster.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsYejeMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "GAEKGWANSIK_YEJE_CNT") != this.dsYejeMaster.rowcount)
        	{
        		this.gfn_alert("객관식 예제수가 맞지 않습니다.\n선택한 문항의 객관식예제수에 맞춰 작성해주시기 바랍니다.","저장정보","","question");
                return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsYejeMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdSincheong, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsYejeMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
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
        this.btnSave_onclick = function(obj,e)
        {
            if(!this.fn_PreSave())
            {
                return false;
            }

        	this.strKeyValue = this.dsYejeMaster.getColumn(this.dsYejeMaster.rowposition, "YEJE_NO");

            var strSvc      = "Save";
            var strUrl      = "/prj/UY/UY01/yejeSave_2100202_M.do";
            var strInDs     = "ds_yejeInput=ds_yejeInput:a ";
                strInDs    += "dsYejeMaster=dsYejeMaster:u";
            var strOutDs    = "dsYejeMaster=dsYejeMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
              strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
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
        	var nRow = this.dsYejeMaster.findRow("YEJE_NO",this.strKeyValue);
        	this.dsYejeMaster.set_rowposition(nRow);

            this.gfn_getRowCount(this.stRowCnt2,this.dsYejeMaster);
        };

        /**********************************************************************
                10. ExcelDnwn 엑셀로 출력
        ***********************************************************************/
        this.btnExcel_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.fn_Excel = function()
        {
            if(this.dsYejeMaster.rowcount < 1)
            {
                this.gfn_alert("출력할 엑셀데이터가 없습니다.", "EXCEL 정보" ,"","information");
                return false;
            }
            var result = this.gfn_confirm( "Excel를 출력하시겠습니까?", "EXCEL 출력","","question" );
            if(result == 0)
            {
               return false;
            }
            this.gfn_excelExport(this.grdYeje, "설문 예제 내역","설문 예제 내역");
        };

        /**********************************************************************
                11. 기타 Control Event
        ***********************************************************************/

        /**
         *      그리드멀티 체크
         */

        this.grdYeje_onheadclick = function(obj,e)
        {
            if(e.cell == this.grdYeje.getBindCellIndex("body","CHK"))
            {
                this.gfn_checkAll(obj, e);
            }
        };

        /**
         *      그리드멀티 소트정열
         */

        this.grdMunhang_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMunhang.getBindCellIndex("body","CHK"))
            {
                this.gfn_gridSort(obj,e);
            }
        };

        this.grdYeje_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdYeje.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 엔터키 누르면 조회
        this.divSearch_cboSearchSeolmunYuhyung_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"SEOLMUN_YUHYUNG_GBCD",obj.value);
        		this.fn_Ret();
        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return this.gfn_isUpdate(this.dsYejeMaster);
        };

        /**********************************************************************
                12. 팝업
        ***********************************************************************/

        this.btnSearchMunhang_onclick = function(obj,e)
        {
        	var munhangNoNaeyong = this.divSearch.form.edtSearchMunhangNaeyong.value;

        	this.fn_setCallMunhangNaeyongPopup(obj.name, munhangNoNaeyong);
        };

        this.ds_input_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "MUNHANG_NAEYONG")
        	{
        	   if (this.gfn_isNull(e.newvalue)) {
        	       obj.setColumn(obj.rowposition, "MUNHANG_NO", "");
        	   } else {
        			if (e.oldvalue != e.newvalue)
        			{
        				this.fn_setCallMunhangNaeyongPopup(obj.name, e.newvalue);
        			}
        	   }
        	}
        };

        //popup
        // 문항내용 팝업
        this.fn_setCallMunhangNaeyongPopup = function(strObjName, strSearchValue)
        {
        	this.dsMunhangNaeyong.clearData();

        	this.ds_input.setColumn(this.ds_input.rowposition, "MUNHANG_NO_NAEYONG", strSearchValue);

        	if(!this.gfn_isNull(strSearchValue))
        	{
        		var strSvc 		= "SearchMunhangNaeyong";
        		var strUrl 		= "/prj/com/Retrieve_P06.do";
        		var strInDs  	= "ds_input=ds_input";
        		var strOutDs 	= "dsMunhangNaeyong=dsMaster";
        		var strArg 		= "";

        		var GBV_MENUID    = objApp.gv_cutPrgId;
        		if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
        		{
        		  strArg = "GBV_MENUID=" + GBV_MENUID + " " + strArg;
        		}

        		var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        		var strASync    = false;			//생략이나 공백일시에는 ASync=true,싱크시는 false로

        		this.gfn_Transaction( strSvc
        							, strUrl
        							, strInDs
        							, strOutDs
        							, strArg
        							, strCallBack
        							, strASync);
        	}

        	if(this.dsMunhangNaeyong.rowcount == 1)
        	{
        	    this.ds_input.setColumn(this.ds_input.rowposition, "MUNHANG_NO",      this.dsMunhangNaeyong.getColumn(0,"MUNHANG_NO"));
        		this.ds_input.setColumn(this.ds_input.rowposition, "MUNHANG_NAEYONG", this.dsMunhangNaeyong.getColumn(0,"MUNHANG_NAEYONG"));
        	}
        	else
        	{
        		var oArg = {munhangNoNaeyong:strSearchValue};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "munhang","com::COMM_P06.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.divSearch.form.cboSearchSeolmunYuhyung.addEventHandler("onkeydown",this.divSearch_cboSearchSeolmunYuhyung_onkeydown,this);
            this.divSearch.form.btnSearchMunhang.addEventHandler("onclick",this.btnSearchMunhang_onclick,this);
            this.grdYeje.addEventHandler("onheaddblclick",this.grdYeje_onheaddblclick,this);
            this.grdYeje.addEventHandler("onheadclick",this.grdYeje_onheadclick,this);
            this.grdMunhang.addEventHandler("onheaddblclick",this.grdMunhang_onheaddblclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnExcel_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.ds_input.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
        };
        this.loadIncludeScript("UY01_2100202_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
