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
            this.set_titletext("생활관비 납입관리");
            this.set_color("blue");
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
            obj._setContents("<ColumnInfo><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"15\"/><Column id=\"SCHL_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"2\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"2\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"50\"/><Column id=\"STAT_GUBN\" type=\"STRING\" size=\"2\"/><Column id=\"BLNG_DEPT\" type=\"STRING\" size=\"65532\"/><Column id=\"ROOM_GUBN\" type=\"STRING\" size=\"26\"/><Column id=\"AMNT_0001\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AMNT_0002\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUM_AMNT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ACNT_NUMB2\" type=\"STRING\" size=\"20\"/><Column id=\"STNT_SEXC\" type=\"STRING\" size=\"1\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GRAD\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_KNAM\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchl", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STRT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENDD_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_GUBN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputSchl", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDiffSequ", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"SCHL_SMST\" type=\"STRING\" size=\"256\"/><Column id=\"STNT_GUBN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFF_SEQU\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgi", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStntGubn", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdDiffSequ", this);
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdGender", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrdHaknyeon", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01_00","520","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btnInput",null,"74","100","25","3",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("은행자료입력");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00","0","36","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00","0","9","50","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchSchlYear","60","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00","180","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("학기");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName","60","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchSchlSmst","270","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHakgi");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","0","0","27","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_01_00","19","0",null,"9","-1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_01","49","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_02_00","19","31","1570","5",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("5");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 6pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00","13","58",null,"9","-1",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01","260","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_02_00_00","180","36","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00","180","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00","390","9","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("학생구분");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_00","390","36","105","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00","390","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00","495","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchStntGubn","505","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsStntGubn");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchDiffSequ","505","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsDiffSequ");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_01_00_01_00_00_00_01_00","625","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("학년");
            obj.set_cssclass("sta_WF_SearchLbl");
            obj.set_textAlign("right");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_01_00_01_00_00_00_00","625","0","56","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("← 56 →");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_01_00_00_00","705","0","10","67",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSearchHaknyeon","715","9","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_innerdataset("dsHaknyeon");
            obj.set_text("Combo");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtSearchStntName00","270","36","120","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_09_00","1","74","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("생활관비 납입목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","140","77","200","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","98","1640","8",null,null,null,null,null,null,this);
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

            obj = new Grid("grdMaster","0","106",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"학번\"/><Cell col=\"3\" text=\"성명\"/><Cell col=\"4\" text=\"남/여\"/><Cell col=\"5\" text=\"학년\"/><Cell col=\"6\" text=\"학과\"/><Cell col=\"7\" text=\"인실\"/><Cell col=\"8\" text=\"생활관비\"/><Cell col=\"9\" text=\"식대\"/><Cell col=\"10\" text=\"실수납액\"/><Cell col=\"11\" text=\"수납일자\"/></Band><Band id=\"body\"><Cell expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:DIFF_SEQU\" displaytype=\"combotext\" combodataset=\"dsDiffSequ\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:STNT_NUMB\"/><Cell col=\"3\" text=\"bind:STNT_KNAM\"/><Cell col=\"4\" text=\"bind:STNT_SEXC\" displaytype=\"combotext\" combodataset=\"dsGrdGender\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"5\" text=\"bind:STNT_GRAD\" displaytype=\"combotext\" combodataset=\"dsGrdHaknyeon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"6\" text=\"bind:BLNG_DEPT\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ROOM_GUBN\"/><Cell col=\"8\" text=\"bind:AMNT_0001\"/><Cell col=\"9\" text=\"bind:AMNT_0002\"/><Cell col=\"10\" text=\"bind:SUM_AMNT\"/><Cell col=\"11\" text=\"bind:SCHL_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("생활관비 납입관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.spnSearchSchlYear","value","ds_input","SCHL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboSearchSchlSmst","value","ds_input","SCHL_SMST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSearchStntGubn","value","ds_input","STNT_GUBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboSearchHaknyeon","value","ds_input","STNT_GRAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtSearchStntName","value","ds_input","STNT_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtSearchStntName00","value","ds_input","STNT_KNAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboSearchDiffSequ","value","ds_input","DIFF_SEQU");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsSchl");
            this._addPreloadList("data","","dsDiffSequ");
            this._addPreloadList("data","","dsGrdDiffSequ");
        };
        
        // User Script
        this.registerScript("BH05_4080503_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): BH05_4080503_M.xfdl(생활관비 납입관리)
        * 작 성         일 명: 정진호
        * 작 성         일 자: 2022/10/13
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
        	// 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strDs    = "dsHakgi|dsHaknyeon|dsStntGubn";
        	    strDs   += "|dsGrdGender|dsGrdHaknyeon";
            // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strLgcd  = "00022|00060|00743";
        	    strLgcd += "|00001|00060";
        	// 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strComb  = "X|T|T";
        	    strComb += "|N|N";
            var strOptn  = ""; // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";
        	// gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
        	// 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.
            this.gfn_CmmnMultiComboLoad(strDs, strLgcd, strComb, strOptn, svcId);

        	// 생활관 일정
        	this.fn_getSchl();
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
                    case "GetSchl":
                            this.fn_PostGetSchl();
                        break;
                    case "GetDiffSequ":
                            this.fn_PostGetDiffSequ();
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
            var strUrl      = "/prj/BH/BH05/Retrieve_4080503_MList.do";
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
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
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
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            if(e.cell != this.grdMaster.getBindCellIndex("body","CHK") && e.cell != 1)
            {
                this.gfn_gridSort(obj,e);
            }
        };

        // 생활관 일정 조회
        this.fn_getSchl = function() {
        	this.ds_inputSchl.setColumn(0, "SCHL_YEAR", "");
        	this.ds_inputSchl.setColumn(0, "SCHL_SMST", "");
        	this.ds_inputSchl.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputSchl.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputSchl.setColumn(0, "DIFF_SEQU", "");

        	var strSvc      = "GetSchl";
            var strUrl      = "/prj/BH/BH_COMMON/GET_SCHL.do";
            var strInDs     = "ds_input=ds_inputSchl";
            var strOutDs    = "dsSchl=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetSchl = function()
        {
        	this.ds_input.setColumn(0, "SCHL_YEAR", this.dsSchl.getColumn(0, "SCHL_YEAR"));
        	this.ds_input.setColumn(0, "SCHL_SMST", this.dsSchl.getColumn(0, "SCHL_SMST"));
        	this.fn_getDiffSequ();
        };

        // 일정차수조회
        this.fn_getDiffSequ = function() {
        	this.ds_inputDiffSequ.setColumn(0, "STNT_GUBN", "");
        	this.ds_inputDiffSequ.setColumn(0, "DATE_CODE", "2");
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_YEAR", this.divSearch.form.spnSearchSchlYear.value);
        	this.ds_inputDiffSequ.setColumn(0, "SCHL_SMST", this.divSearch.form.cboSearchSchlSmst.value);

        	var strSvc      = "GetDiffSequ";
            var strUrl      = "/prj/BH/BH_COMMON/GET_DIFF_SEQU.do";
            var strInDs     = "ds_input=ds_inputDiffSequ";
            var strOutDs    = "dsDiffSequ=dsMaster";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = true;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
            this.gfn_Transaction(strSvc, strUrl, strInDs, strOutDs, strArg, strCallBack, strASync);
        }
        this.fn_PostGetDiffSequ = function() {
        	var nRow = this.dsDiffSequ.insertRow(0);
        	this.dsDiffSequ.setColumn(nRow, "CODE", "");
        	this.dsDiffSequ.setColumn(nRow, "CODE_NM", "전체");
        	this.divSearch.form.cboSearchDiffSequ.set_index(0);
        };

        this.divSearch_spnSearchSchlYear_canchange = function(obj,e)
        {
        	this.divSearch_cboSearchSchlSmst_canitemchange();
        };

        this.divSearch_cboSearchSchlSmst_canitemchange = function(obj,e)
        {
        	this.dsDiffSequ.clearData();
        	this.fn_getDiffSequ();
        };

        // 은행자료입력
        this.btnInput_onclick = function(obj,e)
        {
        	this.alert("기능 개발 중....");
        	return;

        	var schlYear = this.ds_input.getColumn(0, "SCHL_YEAR");
        	var schlSmst = this.ds_input.getColumn(0, "SCHL_SMST");
        	var diffSequ = this.ds_input.getColumn(0, "DIFF_SEQU");

        	if (this.gfn_isNull(schlYear)) {
        		this.alert("년도를 입력해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(schlSmst)) {
        		this.alert("학기를 선택해주세요.");
        		return;
        	}

        	if (this.gfn_isNull(diffSequ)) {
        		this.alert("차수를 선택해주세요.");
        		return;
        	}

        	var oArg = {schlYear:schlYear, schlSmst:schlSmst, diffSequ:diffSequ};
        	var oOption = {};
        	var sPopupCallBack = "fn_popupCallback";
        	this.gfn_openPopup("popup","BH05::BH05_4080503_P01.xfdl",oArg,sPopupCallBack,oOption);
        };

        this.fn_onKeydown = function(obj, e) {
        	if (e.keycode == 13) {
        		this.divSearch_cboSearchSchlSmst_canitemchange();
        		this.fn_Ret();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.btnInput.addEventHandler("onclick",this.btnInput_onclick,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("canchange",this.divSearch_spnSearchSchlYear_canchange,this);
            this.divSearch.form.spnSearchSchlYear.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.edtSearchStntName.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("canitemchange",this.divSearch_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchSchlSmst.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchStntGubn.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchStntGubn.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.cboSearchDiffSequ.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.divSearch.form.cboSearchHaknyeon.addEventHandler("canitemchange",this.divSearch2_cboSearchSchlSmst_canitemchange,this);
            this.divSearch.form.edtSearchStntName00.addEventHandler("onkeydown",this.fn_onKeydown,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onselectchanged",this.grdMaster_onselectchanged,this);
            this.grdMaster.addEventHandler("onexpandup",this.grdMaster_onexpandup,this);
            this.grdMaster.addEventHandler("onenterdown",this.grdMaster_onenterdown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSchl.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsSchl.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsSchl.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsSchl.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputSchl.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsDiffSequ.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDiffSequ.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsDiffSequ.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDiffSequ.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.ds_inputDiffSequ.addEventHandler("oncolumnchanged",this.ds_input_oncolumnchanged,this);
            this.dsGrdDiffSequ.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsGrdDiffSequ.addEventHandler("onvaluechanged",this.dsMaster_onvaluechanged,this);
            this.dsGrdDiffSequ.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsGrdDiffSequ.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("BH05_4080503_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
