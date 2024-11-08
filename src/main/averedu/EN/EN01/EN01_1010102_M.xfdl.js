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
            this.set_titletext("입시전형관리");
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
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONGWON_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeonHyung", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSebuJeonHyung", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJeongWon", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBindableDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"bEnable\" type=\"STRING\" size=\"256\"/><Column id=\"bReadonly\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"bEnable\">true</Col><Col id=\"bReadonly\">true</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","0","87","419",null,null,"90",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"55\"/><Column size=\"139\"/><Column size=\"96\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"전형코드\"/><Cell col=\"2\" text=\"전형명\"/><Cell col=\"3\" text=\"정원명\"/><Cell col=\"4\" text=\"순서\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"256\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBCD\" editmaxlength=\"256\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBCD\" editmaxlength=\"256\" combodataset=\"dsJeonHyung\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"bind:JEONGWON_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsJeongWon\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:SORT\" displaytype=\"text\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","0","62","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전형 관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","87","61","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","256","54","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","312","54","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","368","54","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_01","419","127","30","100",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","79","1620","8",null,null,null,null,null,null,this);
            obj.set_taborder("17");
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

            obj = new Static("stc_01","9","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("입시년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","87","9","119","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("3000");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","78","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_00","24","31","170","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01","24","0","170","9",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("9");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 9pt/normal \"Arial\"");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdDetail","449","87",null,null,"0","90",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"49\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"전형구분\"/><Cell col=\"2\" text=\"세부전형코드\"/><Cell col=\"3\" text=\"세부전형명\"/><Cell col=\"4\" text=\"순서\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" editmaxlength=\"256\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:JEONHYEONG_GBCD\" editmaxlength=\"256\" combodataset=\"dsJeonHyung\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" textAlign=\"center\" text=\"bind:SEBUJEONHYEONG_GBCD\" editmaxlength=\"256\"/><Cell col=\"3\" text=\"bind:SEBUJEONHYEONG_GBCD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsSebuJeonHyung\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"4\" text=\"bind:SORT\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:IPSI_YYYY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","450","62","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("세부 전형 관리");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","567","61","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew2",null,"54","51","25","112",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"54","51","25","56",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"54","51","25","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","1",null,"419","28",null,"27",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","1",null,"419","28",null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","0",null,"70","28",null,"27",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("전형명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaSigi01","73",null,"162","22",null,"30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeonHyung");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","238",null,"70","28",null,"27",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("정원구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaSigi01_00","311",null,"106","22",null,"30",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsJeongWon");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_01","0",null,"70","28",null,"0",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("순서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGaBangbub01_01_00_00","73",null,"162","22",null,"3",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_maxlength("2");
            obj.set_readonly("false");
            obj.set_cssclass("point");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_01","449",null,"503","28",null,"27",null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_02","449",null,"90","28",null,"27",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("세부전형명");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboPyeongGaSigi01_01","542",null,"218","22",null,"30",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_innerdataset("dsSebuJeonHyung");
            obj.set_cssclass("point");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00_00","765",null,"70","28",null,"27",null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("순서");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPyeongGaBangbub01_01_00_00_00","838",null,"111","22",null,"30",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_maxlength("2");
            obj.set_cssclass("point");
            obj.set_inputtype("number");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","640","42","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","390","710","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("입시전형관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item24","btnNew","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","btnSave","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","btnDel","enable","dsBindableMaster","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","btnNew2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnSave2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btnDel2","enable","dsBindableDetail","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboPyeongGaSigi01","value","dsMaster","JEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboPyeongGaSigi01_00","value","dsMaster","JEONGWON_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtPyeongGaBangbub01_01_00_00","value","dsMaster","SORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboPyeongGaSigi01_01","value","dsDetail","SEBUJEONHYEONG_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtPyeongGaBangbub01_01_00_00_00","value","dsDetail","SORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.spnSearchYYYY","value","ds_input","IPSI_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboPyeongGaSigi01","readonly","dsBindableMaster","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cboPyeongGaSigi01_01","readonly","dsBindableDetail","bReadonly");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
        };
        
        // User Script
        this.registerScript("EN01_1010102_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN01_1010102_M.xfdl(입시전형관리)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/12
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
        this.lvchkColidDs   = "IPSI_YYYY$JEONHYEONG_GBCD$JEONGWON_GBCD$SORT";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "입시년도$전형구분$정원명$순서";
        this.lvchkColidDs_Detail   = "IPSI_YYYY$JEONHYEONG_GBCD$SEBUJEONHYEONG_GBCD$SORT";
        this.lvchkColNameDs_Detail = "입시년도$전형구분$세부전형구분$순서";
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
            var strDs    = "dsJeonHyung|dsSebuJeonHyung|dsJeongWon";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01001|01002|00006";                         // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
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


        	// 입시기준년도 가져오기
        	var strSvc      = "IpsiGigunYyyy";
            var strUrl      = "prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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

        // 조회조건에 입시년도 설정
        this.fn_PostIpsiGigunYyyy = function()
        {
        	this.ds_input.setColumn(0, "IPSI_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_Ret();
        }

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

            this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_clearSortAll(this.grdDetail);
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
        			case "IpsiGigunYyyy":
                            this.fn_PostIpsiGigunYyyy();
                        break;
                    case "Ret":
                            this.fn_PostRet();
                        break;
        			case "DRet":
                            this.fn_PostDRet();
                        break;
        			case "Save":
                            this.fn_PostSave();
                        break;
        			case "DSave":
                            this.fn_PostDSave();
                        break;
        			case "Del":
                            this.fn_PostDel();
                        break;
        			case "DDel":
                            this.fn_PostDDel();
                        break;
        			case "CopyBeforeData":
                            this.fn_PostCopyBeforeData();
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
                case "tmp2" :        // 전년도복사
                         this.fn_CopyBeforeData();
                    break;
                default :
                    break;
            };
        };;

        /**********************************************************************
                05. 전형관리 조회 함수 선언(마스터 함수)
        ***********************************************************************/
        /**
         * 기능 : 조회 전 실행
         */
        this.fn_PreRet = function()
        {
            // 조회조건 셋팅
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == null || this.ds_input.getColumn(0, "IPSI_YYYY") == '')
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}

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
            var strUrl      = "/prj/EN/EN01/Retrieve_1010102_M.do";
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
        	this.dsDetail.clearData();
        };

        /**********************************************************************
                06. 세부전형관리 조회 함수 선언(디테일 함수)
        ***********************************************************************/
        //전형관리 셀 클릭 시 세부전형관리 조회
        this.dsMaster_canrowposchange = function(obj,e)
        {
            // 조회조건 셋팅
        	if(this.fn_detailbeforeclose())
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
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsBindableMaster.setColumn(0, "bReadonly", "false");
        	}
        	else
        	{
        		this.dsBindableMaster.setColumn(0, "bReadonly", "true");
        	}

        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        	this.ds_dInput.setColumn(0, "JEONHYEONG_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition,"JEONHYEONG_GBCD"));

        	this.fn_DRet();
        };

        this.fn_DRet = function(){

        	var strSvc      = "DRet";
        	var strUrl      = "/prj/EN/EN01/Retrieve_1010102_M_Detail.do";
        	var strInDs     = "ds_dInput=ds_dInput";
        	var strOutDs    = "dsDetail=dsDetail";
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
        }

        /**
         * 기능 : 조회 후 실행
         */
        this.fn_PostDRet = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                07. 전형관리 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.btnNew_onclick = function(obj,e)
        {
            var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "IPSI_YYYY", this.ds_input.getColumn(0, "IPSI_YYYY"));
        };

        /**********************************************************************
                08. 세부전형관리 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 마스터 추가 실행
         */
        this.btnNew2_onclick = function(obj,e)
        {
        	var nRow = this.dsDetail.addRow();
        	this.dsDetail.setColumn(nRow,"IPSI_YYYY",this.dsMaster.getColumn(this.dsMaster.rowposition,"IPSI_YYYY"));
        	this.dsDetail.setColumn(nRow,"JEONHYEONG_GBCD",this.dsMaster.getColumn(this.dsMaster.rowposition,"JEONHYEONG_GBCD"));
        };

        /**********************************************************************
                09. 전형관리 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnDel_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
            this.dsMaster.deleteRow(this.dsMaster.rowposition);
        	this.fn_Del();
        }

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_Del = function()
        {
            var strSvc      = "Del";
            var strUrl      = "/prj/EN/EN01/Delete_1010102_M.do";
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

        /**
         * 기능 : 삭제 후 실행
         */
        this.fn_PostDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };

        /**********************************************************************
                10. 세부전형관리 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.btnDel2_onclick = function(obj,e)
        {
        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
            this.dsDetail.deleteRow(this.dsDetail.rowposition);
        	this.fn_DDel();
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_DDel = function()
        {
            var strSvc      = "DDel";
            var strUrl      = "/prj/EN/EN01/Delete_1010102_M_Detail.do";
            var strInDs     = "dsDetail=dsDetail:u";
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

        /**
         * 기능 : 삭제 후 실행
         */
        this.fn_PostDDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                11. 전형관리 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.btnSave_onclick = function(obj,e)
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
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
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
             this.fn_Save();

        };

        /**
         * 기능 : 저장 실행
         */
        this.fn_Save = function()
        {
            var strSvc      = "Save";
            var strUrl      = "/prj/EN/EN01/Save_1010102_M.do";
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
                12. 세부전형관리 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.btnSave2_onclick = function(obj,e)
        {
            if(this.dsDetail.rowcount > 0)
            {
                for(var i=0;i<this.dsDetail.rowcount; i++)
                {
                    if(this.dsDetail.getColumn(i,"CHK") == "0")
                    {
                        continue;
                    }
                    this.dsDetail.setColumn(i,"CHK","0");
                }
            }

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.!","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs_Detail, this.lvchkColNameDs_Detail, this.grdDetail, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

             var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
             if(result == 0)
             {
                 return false;
             }
             this.fn_DSave();
        };


        this.fn_DSave = function()
        {
            var strSvc      = "DSave";
            var strUrl      = "/prj/EN/EN01/Save_1010102_M_Detail.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";  /*띄어쓰기 필수  [+= 형태] */
                strInDs    += "dsDetail=dsDetail:u";
            var strOutDs    = "dsDetail=dsDetail";
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
        this.fn_PostDSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                13. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                14. 전년도 복사
        ***********************************************************************/
        /**
         * 기능 : 전년도복사 전 실행
         */
        this.fn_PreCopyBeforeData = function()
        {
        	var result = this.gfn_confirm( "전년도 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }
            return true;
        };

        /**
         * 기능 : 전년도복사 실행
         */
        this.fn_CopyBeforeData = function()
        {
        	if(!this.fn_PreCopyBeforeData())
            {
                return false;
            }

        	var strSvc      = "CopyBeforeData";
        	var strUrl      = "/prj/EN/EN01/Save_1010102_M_CopyBeforeData.do";
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

        }

        /**
         *      기능 : 전년도복사시 후처리
         */
        this.fn_PostCopyBeforeData = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                15. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj,e)
        {
            this.gfn_gridSort(obj,e);
        };

        this.grdDetail_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
        	var value = false;

        	if(this.gfn_isUpdate(this.dsMaster))
        	{
        		value = true;
        	}
        	else if(this.gfn_isUpdate(this.dsDetail))
        	{
        		value = true;
        	}

        	return value;
        };

        /**
          * 디테일 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_detailbeforeclose = function()
        {
        	return this.gfn_isUpdate(this.dsDetail);
        };

        // 디테일 그리드 변경시
        this.dsDetail_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.dsBindableDetail.setColumn(0, "bReadonly", "false");
        	}
        	else
        	{
        		this.dsBindableDetail.setColumn(0, "bReadonly", "true");
        	}
        };

        /**********************************************************************
                16. 검색창 엔터키 조회
        ***********************************************************************/
        this.divSearch_spnSearchYYYY_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_input.setColumn(0,"IPSI_YYYY",obj.value);
        		this.fn_Ret();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("oncellclick",this.grdMaster_oncellclick,this);
            this.grdMaster.addEventHandler("onkeydown",this.grdMaster_onkeydown,this);
            this.btnNew.addEventHandler("onclick",this.btnNew_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnNew2.addEventHandler("onclick",this.btnNew2_onclick,this);
            this.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.btnDel2.addEventHandler("onclick",this.btnDel2_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsDetail.addEventHandler("onrowposchanged",this.dsDetail_onrowposchanged,this);
        };
        this.loadIncludeScript("EN01_1010102_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
