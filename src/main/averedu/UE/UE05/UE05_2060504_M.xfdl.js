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
            this.set_titletext("월별근로장학조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GEUNRO_YYYY_FR\" type=\"STRING\" size=\"256\"/><Column id=\"GEUNRO_MM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"GEUNRO_YYYY_TO\" type=\"STRING\" size=\"256\"/><Column id=\"GEUNRO_MM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"256\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GEUNRO_YYYY_FR\"/><Col id=\"GEUNRO_MM_FR\"/><Col id=\"HAKBEON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GEUNRO_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"GEUNRO_MM\" type=\"STRING\" size=\"2\"/><Column id=\"SUB_GEUNRO_MM\" type=\"STRING\" size=\"3\"/><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"HAKSAENG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JANGHAK_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JANGHAK_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GEUNRO_JANGSO\" type=\"STRING\" size=\"100\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEONGONG_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGONG_NM\" type=\"STRING\" size=\"65532\"/><Column id=\"HAKNYEON\" type=\"STRING\" size=\"1\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"GYONAEOE_GBCD\" type=\"STRING\" size=\"2\"/><Column id=\"JIGEUP_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"JIGEUP_YN\" type=\"STRING\" size=\"1\"/><Column id=\"JIGEUP_DT\" type=\"STRING\" size=\"8\"/><Column id=\"EUNHAENG_GBCD\" type=\"STRING\" size=\"5\"/><Column id=\"GYEJWA_NO\" type=\"STRING\" size=\"50\"/><Column id=\"BIGO\" type=\"STRING\" size=\"200\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"FILTER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchJigeupYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE_NM\">전체</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">지급</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGyonaeoe", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBank", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJigeupYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CODE_NM\">지급</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CODE_NM\">미지급</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","0","70",null,"8","0",null,null,null,null,null,this);
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

            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","0","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","26","31",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01","20","0",null,"9","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00","-23","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("근로기간");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01","731","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("교내외구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01","78","0","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01_01_00","556","6","10","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchHakbeon","566","9","130","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchGyonaeoe","821","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchGyonaeoe");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYYFr","88","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_00","456","9","100","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("학번/성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00_00","931","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00","448","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00","811","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63","175","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("-");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchMonthFr","188","9","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_01_00_00","696","5","56","30",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_00_01_01","961","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("지급여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_01_00_00_00","1041","3","10","33",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchJigeup","1051","9","110","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsSearchJigeupYn");
            obj.set_text("");
            obj.set_value("11");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYYTo","288","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63_00","375","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("-");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchMonthTo","388","9","60","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_63_01","265","10","10","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","53","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월별근로장학 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","143","52","93","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"68\"/><Column size=\"54\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"50\"/><Column size=\"65\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"학과\"/><Cell col=\"2\" text=\"전공\"/><Cell col=\"3\" text=\"근로년도\"/><Cell col=\"4\" text=\"근로월\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"학번\"/><Cell col=\"7\" text=\"주민번호\"/><Cell col=\"8\" text=\"성명\"/><Cell col=\"9\" text=\"교내외구분\"/><Cell col=\"10\" text=\"장학명\"/><Cell col=\"11\" text=\"근로장소\"/><Cell col=\"12\" text=\"은행명\"/><Cell col=\"13\" text=\"계좌번호\"/><Cell col=\"14\" text=\"지급금액\"/><Cell col=\"15\" text=\"지급여부\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_NM\" textAlign=\"left\" displaytype=\"normal\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:JEONGONG_NM\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:GEUNRO_YYYY\"/><Cell col=\"4\" text=\"bind:GEUNRO_MM\"/><Cell col=\"5\" text=\"bind:HAKNYEON\"/><Cell col=\"6\" text=\"bind:HAKBEON\"/><Cell col=\"7\" text=\"bind:RES_NO\"/><Cell col=\"8\" text=\"bind:HAKSAENG_NM\"/><Cell col=\"9\" text=\"bind:GYONAEOE_GBCD\" displaytype=\"combotext\" combodataset=\"dsGyonaeoe\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"10\" text=\"bind:JANGHAK_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:GEUNRO_JANGSO\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:EUNHAENG_GBCD\" displaytype=\"expr:EUNHAENG_GBCD == &apos;&apos;?&apos;normal&apos;:&apos;combotext&apos;\" combodataset=\"dsBank\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"13\" text=\"bind:GYEJWA_NO\"/><Cell col=\"14\" textAlign=\"right\" text=\"bind:JIGEUP_AMT\"/><Cell col=\"15\" text=\"bind:JIGEUP_YN\" combodataset=\"dsJigeupYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("월별근로장학조회");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item41","divSearch.form.edtSearchHakbeon","value","ds_input","HAKBEON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboSearchGyonaeoe","value","ds_input","GYONAEOE_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.spnSearchYYYYFr","value","ds_input","GEUNRO_YYYY_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSearch.form.spnSearchMonthFr","value","ds_input","GEUNRO_MM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSearch.form.cboSearchJigeup","value","ds_input","JIGEUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.spnSearchYYYYTo","value","ds_input","GEUNRO_YYYY_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.spnSearchMonthTo","value","ds_input","GEUNRO_MM_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("UE05_2060504_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): UE05_2060504_M.xfdl(월별근로장학조회)
        * 작 성         일 명: jiback
        * 작 성         일 자: 2022/08/16
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
        this.lvchkColidDs   = "";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "";
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
            var strDs    = "dsSearchGyonaeoe|dsGyonaeoe|dsBank";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "02001|02001|00040";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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

        this.fn_PostformInit = function()
        {
        	var spnYyyy = this.fn_Today().substr(0, 4).toString();
        	var spnMm = "";
        	if(this.fn_Today().substr(4, 1).toString() == "0") {
        		spnMm = this.fn_Today().substr(5, 1).toString();
        	} else {
        		spnMm = this.fn_Today().substr(4, 2).toString();
        	}

        	this.ds_input.setColumn(0, "GEUNRO_YYYY_FR", spnYyyy);
        	this.ds_input.setColumn(0, "GEUNRO_MM_FR", spnMm);

        	this.ds_input.setColumn(0, "GEUNRO_YYYY_TO", String(parseInt(spnYyyy)+1));

        	if(spnMm == '1'){
        		this.ds_input.setColumn(0, "GEUNRO_MM_TO", "12");
        	}else{
        		this.ds_input.setColumn(0, "GEUNRO_MM_TO", String(parseInt(spnMm)-1));
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
                    case "Init":
                            this.fn_PostformInit();
                        break;
                    case "Ret":
                            this.fn_PostRet();
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
                case "tmp1" :        // 팁
                         this.fn_Tip();
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
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_YYYY_FR")))
        	{
        		this.gfn_alert("근로시작년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_MM_FR")))
        	{
        		this.gfn_alert("근로시작월을 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_YYYY_TO")))
        	{
        		this.gfn_alert("근로종료년도를 입력해주세요.","입력정보","","warning");
        		return false;
        	}
        	if (this.gfn_isNull(this.ds_input.getColumn(0, "GEUNRO_MM_TO")))
        	{
        		this.gfn_alert("근로종료월을 입력해주세요.","입력정보","","warning");
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
            var strUrl      = "/prj/UE/UE05/Retrieve_2060504_M.do";
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
                06. 각종함수
        ***********************************************************************/
        // 오늘날짜
        this.fn_Today = function()
        {
        	var objDate = new nexacro.Date();
        	var mm = (objDate.getMonth()+1).toString().padLeft(2, "0");
        	var dd = objDate.getDate().toString().padLeft(2, "0");
        	var today = objDate.getYear() + mm + dd;
        	return today;
        };

        /**********************************************************************
                07. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        /**********************************************************************
                08. 검색창 엔터키 조회
        ***********************************************************************/
        this.fn_Enter = function(obj,e)
        {
        	if(e.keycode == '13') {
        	    this.fn_Ret();
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtSearchHakbeon.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchGyonaeoe.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchYYYYFr.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchMonthFr.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.cboSearchJigeup.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchYYYYTo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.divSearch.form.spnSearchMonthTo.addEventHandler("onkeydown",this.fn_Enter,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("UE05_2060504_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
