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
            this.set_titletext("학습성과관리");
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
            obj._setContents("<ColumnInfo><Column id=\"PO_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"PO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"L1_NM\" type=\"STRING\" size=\"256\"/><Column id=\"L2_NM\" type=\"STRING\" size=\"256\"/><Column id=\"L3_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPo", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REF_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"GIJUN_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"SAENGSUNG_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBaseYyyyHakgi", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","154","960",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"851\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"학습성과년도\"/><Cell col=\"2\" text=\"학습성과코드\"/><Cell col=\"3\" text=\"교육목표\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:PO_YYYY\"/><Cell col=\"2\" textAlign=\"center\" edittype=\"none\" text=\"bind:PO_CD\" displaytype=\"normal\" combodataset=\"dsPo\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:PO_NM\" editmaxlength=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","64","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","660","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","660","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","55","0","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","500","119","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","129",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학습성과");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","128",null,"24","1430",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","146",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divCopy","0","77",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","16","0","1620","9",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("2");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","20","31","1610","9",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("3");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","37",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00","80","0","10","37",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("stc_01_00","-34","9","110","22",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("6");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divCopy.addChild(obj.name, obj);

            obj = new Spin("spnJigunYYYY","90","9","101","22",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","191","-1","56","36",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("7");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","186","9","110","22",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("8");
            obj.set_text("생성년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","300","0","10","37",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divCopy.addChild(obj.name, obj);

            obj = new Spin("spnSaengsungYYYY","310","9","101","22",null,null,null,null,null,null,this.divCopy.form);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divCopy.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","1","69","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01","600","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0","52",null,"22","1485",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("이전년도 복사");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00","990","180","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01_00","960","134","30",null,null,"80",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","990","124","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1","990","153","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2","990","153","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("학습성과년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00","990","180","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("학습성과명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_01","1267","153","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("학습성과코드");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboHakseub","1369","156","173","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_innerdataset("dsPo");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Spin("spnYYYY","1092","156","173","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","1092","183","546","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_maxlength("666");
            obj.set_inputtype("normal");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00","990","207","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00","990","207","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("L1");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtL1","1092","210","546","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_maxlength("666");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_00","990","234","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00","990","234","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("L2");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtL2","1092","237","546","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_maxlength("666");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Static("stc_1_00_00_00_00","990","261","650","28",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_2_00_00_00_00","990","261","100","28",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("L3");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtL3","1092","264","546","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_maxlength("666");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학습성과관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.spnSearchYYYY","value","ds_input","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divCopy.form.spnJigunYYYY","value","dsCopy","GIJUN_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divCopy.form.spnSaengsungYYYY","value","dsCopy","SAENGSUNG_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboHakseub","value","dsMaster","PO_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","spnYYYY","value","dsMaster","PO_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtName","value","dsMaster","PO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtL1","value","dsMaster","L1_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtL2","value","dsMaster","L2_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtL3","value","dsMaster","L3_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UC01_2122903_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UC01_2122903_M.xfdl(학습성과관리 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/10/25
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
        this.lvchkColidDs   = "PO_CD$PO_NM";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "학습성과코드$학습성과명";
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
            var strDs    = "dsPo";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00554";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	// 기준연도학기
            strDs    = "dsBaseYyyyHakgi";        // 데이터를 받을 데이터셋리스트     예) "dsBaseYyyyHakgi"
            svcId    = "baseYyyyHakgiInit";
        	var strEopmuGbcd = "UL";
        	var strUseYn     = "1";
            // gfn_BaseYyyyHakgiLoad(데이터셋, svcId , 업무구분, 사용구분);
            // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_BaseYyyyHakgiLoad(strDs
                                      , svcId
                                      , strEopmuGbcd
                                      , strUseYn);

        };

        this.fn_PostBaseYyyyHakgiInit = function()
        {
        	if (this.dsBaseYyyyHakgi.rowcount > 0) {
        		this.ds_input.setColumn(0,"YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        		this.dsCopy.setColumn(0,"GIJUN_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY") - 1);
        		this.dsCopy.setColumn(0,"SAENGSUNG_YYYY",  this.dsBaseYyyyHakgi.getColumn(0, "YYYY"));
        	}
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
        			case "baseYyyyHakgiInit":
        					this.fn_PostBaseYyyyHakgiInit();
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
                    default:
                        break;
                }
            }
        };

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
                case "new" :         // 신규
                        this.fn_New();
                    break;
                case "del" :         // 삭제
                        this.fn_Del();
                    break;
                case "save" :        // 저장
                        this.fn_Save();
                    break;
                case "tmp1" :        // 복사
                         this.fn_Copy();
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

        	if(this.gfn_isNull(this.ds_input.getColumn(0, "YYYY")))
        	{
        		this.alert("년도를 입력해주세요.");
        		return false;
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
            var strUrl      = "/prj/UC/UC01/Retrieve_2122903_M.do";
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
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
            var nRow = this.dsMaster.addRow();
            this.dsMaster.setColumn(nRow, "PO_YYYY", this.ds_input.getColumn(0, "YYYY"));
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
            var strSvc      = "Del";
            var strUrl      = "/prj/UC/UC01/Delete_2122903_M.do";
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
            if(!this.gfn_isUpdate(this.dsMaster))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, '', chkFocusFlg, this);

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
            var strUrl      = "/prj/UC/UC01/Save_2122903_M.do";
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
                09. 복사 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreCopy = function()
        {
        	var gijunYyyy = this.dsCopy.getColumn(0, "GIJUN_YYYY");
        	var saengsungYyyy = this.dsCopy.getColumn(0, "SAENGSUNG_YYYY");

        	if(this.gfn_isNull(this.dsCopy.getColumn(0, "GIJUN_YYYY")))
        	{
        		this.alert("기준년도를 입력해주세요.");
        		return false;
        	}
        	if(this.gfn_isNull(this.dsCopy.getColumn(0, "SAENGSUNG_YYYY")))
        	{
        		this.alert("생성년도를 입력해주세요.");
        		return false;
        	}

        	if(gijunYyyy >= saengsungYyyy)
        	{
        		this.alert("기준년도는 생성년도보다 크거나 같을 수 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "복사 하시겠습니까?", "저장","", "question" );
        	if(result == 0)
        	{
        		return false;
        	}
        	return true;

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Copy = function()
        {
            if(!this.fn_PreCopy())
            {
                return false;
            }
            var strSvc      = "Copy";
            var strUrl      = "/prj/UC/UC01/Copy_2122903_M.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsCopy=dsCopy:a";
            var strOutDs    = "dsMaster=dsMaster";
            var strArg      = "";
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
        this.fn_PostCopy = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                10. 기타 Control Event
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
            return this.gfn_isUpdate(this.dsMaster);
        };

        /**********************************************************************
                11. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"YYYY",obj.value);
        		this.fn_Ret();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divCopy.form.spnJigunYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.divCopy.form.spnSaengsungYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.Static01_01_00_00_00_01_00.addEventHandler("onclick",this.Static01_01_00_00_00_01_onclick,this);
            this.stc_2.addEventHandler("onclick",this.stc_2_onclick,this);
            this.stc_2_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.spnYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.stc_2_00_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.stc_2_00_00_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.stc_2_00_00_00_00.addEventHandler("onclick",this.stc_2_00_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
        };
        this.loadIncludeScript("UC01_2122903_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
