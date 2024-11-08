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
            this.set_titletext("편입학모집관리");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"PYEONIP_MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEOPSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"JEOPSU_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"DEUNGROK_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_BALPYO_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"HAPGYEOKJA_BALPYO_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"HYEONJAE_MOJIP_YN\" type=\"STRING\" size=\"2\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"JEONNYEONDO_PYEONIP_YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Hakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Juya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMojipGbcd", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gijunYyyy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"YYYY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_01","7","9","80","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Spin("spnSearchYYYY","86","9","101","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01","0","0","200","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("Static01_02_00_00","76","1","10","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_02_00","0","1","27","40",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("27");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01_01_01_00","0","31","200","9",null,null,null,null,null,null,this.divSearch.form);
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

            obj = new Static("stc_09_00","0","47","155","32",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("편입별 모집구분");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","77",null,null,"0","117",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMaster");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"201\"/><Column size=\"201\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"편입년도\"/><Cell col=\"2\" text=\"모집구분\"/><Cell col=\"3\" text=\"접수기간\"/><Cell col=\"4\" text=\"합격자발표\"/><Cell col=\"5\" text=\"등록기간\"/><Cell col=\"6\" text=\"현재모집여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONIP_YYYY\" editmaxlength=\"4\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\" text=\"bind:PYEONIP_MOJIP_GBCD\" editmaxlength=\"10\" combodataset=\"dsMojipGbcd\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"3\" text=\"expr:JEOPSU_FRDT.substring(0,4) +&apos;-&apos;+ JEOPSU_FRDT.substring(4,6) +&apos;-&apos;+JEOPSU_FRDT.substring(6,8) + &apos; ~ &apos; +JEOPSU_TODT.substring(0,4) +&apos;-&apos;+ JEOPSU_TODT.substring(4,6) +&apos;-&apos;+JEOPSU_TODT.substring(6,8)\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" border=\"1px solid #dbdee2\" textAlign=\"center\"/><Cell col=\"4\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" border=\"1px solid #dbdee2\" textAlign=\"center\" text=\"expr:HAPGYEOKJA_BALPYO_FRDT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_BALPYO_FRDT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_BALPYO_FRDT.substring(6,8) + &quot; ~ &quot; +HAPGYEOKJA_BALPYO_TODT.substring(0,4) +&apos;-&apos;+ HAPGYEOKJA_BALPYO_TODT.substring(4,6) +&quot;-&quot;+HAPGYEOKJA_BALPYO_TODT.substring(6,8)\"/><Cell col=\"5\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\" border=\"1px solid #dbdee2\" textAlign=\"center\" text=\"expr:DEUNGROK_FRDT.substring(0,4) +&apos;-&apos;+ DEUNGROK_FRDT.substring(4,6) +&quot;-&quot;+DEUNGROK_FRDT.substring(6,8) + &quot; ~ &quot; +DEUNGROK_TODT.substring(0,4) +&apos;-&apos;+ DEUNGROK_TODT.substring(4,6) +&quot;-&quot;+DEUNGROK_TODT.substring(6,8)\"/><Cell col=\"6\" text=\"bind:HYEONJAE_MOJIP_YN\" displaytype=\"combotext\" combodataset=\"dsMojipYn\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\" border=\"1px solid #dbdee2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06","0",null,"1102","28",null,"54",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","500","683","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00","0",null,"1102","28",null,"27",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_DetailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06","0",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("편입년도");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Spin("spnPyeonipYyyy","154",null,"119","23",null,"56",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("point");
            obj.set_min("0");
            obj.set_max("9999");
            obj.set_value("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00","277",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("모집구분");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Combo("cboMojipGbcd","431",null,"119","23",null,"56",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsMojipGbcd");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00","554",null,"150","28",null,"54",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("접수기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_01","0",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("합격자발표기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHapgyeokjaBalpyoFrdt","153",null,"160","23",null,"29",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","337",null,"26","32",null,"25",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calHapgyeokjaBalpyoTodt","390",null,"160","23",null,"29",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuFrdt","708",null,"160","23",null,"56",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","891",null,"26","32",null,"52",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calJeopsuTodt","935",null,"160","23",null,"56",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("stc_13_06_00_00","0",null,"1102","28",null,"0",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_DetailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_01","0",null,"150","28",null,"0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("현재모집여부");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoMojipYn","153",null,"110","22",null,"3",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_direction("vertical");
            obj.set_innerdataset("dsMojipYn");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NM");
            obj.set_cssclass("point");
            obj.set_text("예");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stc_12_06_00_00_00","554",null,"150","28",null,"27",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("등록기간");
            obj.set_cssclass("sta_WF_DetailTi");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokFrdt","708",null,"160","23",null,"29",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","891",null,"26","32",null,"25",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDeungrokTodt","935",null,"160","23",null,"29",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("point");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","147","47","123","34",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","69","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","42","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","0",null,"155","22",null,"85",null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("편입별 모집상세");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","0","710","320","8",null,null,null,null,null,null,this);
            obj.set_taborder("29");
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
            obj.set_description("편입학모집관리");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.spnSearchYYYY","value","ds_input","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","spnPyeonipYyyy","value","dsMaster","PYEONIP_YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboMojipGbcd","value","dsMaster","PYEONIP_MOJIP_GBCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calHapgyeokjaBalpyoFrdt","value","dsMaster","HAPGYEOKJA_BALPYO_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calJeopsuFrdt","value","dsMaster","JEOPSU_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","calDeungrokFrdt","value","dsMaster","DEUNGROK_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calSearchSincheongSijakDt00_01","value","dsMaster","GOJISEO_PRINT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calDeungrokTodt","value","dsMaster","DEUNGROK_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calHapgyeokjaBalpyoTodt","value","dsMaster","HAPGYEOKJA_BALPYO_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","calJeopsuTodt","value","dsMaster","JEOPSU_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","calSearchSincheongJongryoDt00_01","value","dsMaster","GOJISEO_PRINT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdoMojipYn","value","dsMaster","HYEONJAE_MOJIP_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
        };
        
        // User Script
        this.registerScript("ET01_1020101_M.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): ET01_1020101_M.xfdl(편입학모집관리)
        * 작 성         일 명: 박경민
        * 작 성         일 자: 2021/04/20
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
        this.lvchkColidDs   = "PYEONIP_YYYY$PYEONIP_MOJIP_GBCD$JEOPSU_FRDT$JEOPSU_TODT$DEUNGROK_FRDT$DEUNGROK_TODT$HAPGYEOKJA_BALPYO_FRDT$HAPGYEOKJA_BALPYO_TODT$HYEONJAE_MOJIP_YN";                        // 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs = "편입년도$편입모집구분$접수시작일$접수종료일$등록시작일$등록종료일$합격자발표시작일$합격자발표종료일$현재모집여부";
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
            var strDs    = "dsMojipYn|dsMojipGbcd";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01032|01024";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
            var strOptn  = "";                                      // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
            var svcId    = "Init";

                // gfn_CmmnMultiComboLoad(데이터셋 리스트, 대분류코드 , 콤보 옵션);
                // 서비스 ID : 코드 조회 실행 후 CALLBACK 함수 지정.

            this.gfn_CmmnMultiComboLoad(strDs
                                      , strLgcd
                                      , strComb
                                      , strOptn
                                      , svcId);

        	this.fn_PyeonIpGijunYyyy();
        };

        // 편입기준년도 가져오기
        this.fn_PyeonIpGijunYyyy = function()
        {
        	var strSvc      = "PyeonIpGijunYyyy";
            var strUrl      = "/prj/EN/EN_COM/Retrieve_GIJUN_YYYY.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "ds_gijunYyyy=ds_gijunYyyy";
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
        }

        // 조회조건에 편입년도 설정
        this.fn_PostPyeonIpGijunYyyy = function()
        {
        	this.ds_input.setColumn(0, "PYEONIP_YYYY", this.ds_gijunYyyy.getColumn(0, "YYYY"));
        	this.fn_Ret();
        }

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
        			case "PyeonIpGijunYyyy":
                            this.fn_PostPyeonIpGijunYyyy();
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
        			case "CopyBeforeData":
        					this.fn_Ret();
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
            var strUrl      = "/prj/ET/ET01/Retrieve_1020101_M.do";
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
            this.dsMaster.setColumn(nRow,"PYEONIP_YYYY", this.ds_input.getColumn(0, "PYEONIP_YYYY"));
        	this.dsMaster.setColumn(nRow,"PYEONIP_MOJIP_GBCD", "7");
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

            var strSvc      = "Del";
            var strUrl      = "/prj/ET/ET01/Delete_1020101_M.do";
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
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = false;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
                return false;
             }

        	 // 접수시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOPSU_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "JEOPSU_TODT"))
        	{
        		this.gfn_alert("접수 종료일은 접수 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	// 등록시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "DEUNGROK_TODT"))
        	{
        		this.gfn_alert("등록 종료일은 등록 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	// 합격자 발표 시작, 종료일 확인
        	if(this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOKJA_BALPYO_FRDT") > this.dsMaster.getColumn(this.dsMaster.rowposition, "HAPGYEOKJA_BALPYO_TODT"))
        	{
        		this.gfn_alert("합격자 발표 종료일은 합격자 발표 시작일보다 이전 날짜가 될 수 없습니다.","저장정보","","question");
        		return false;
        	}

        	var cnt = 0
        	for(var i=0;i<this.dsMaster.rowcount; i++)
        	{
        		if(this.dsMaster.getColumn(i,"HYEONJAE_MOJIP_YN") == "Y")
        		{
        			cnt++;
        		}
        	}

        	if(cnt > 1)
        	{
        		this.alert("모집 중인 항목이 존재합니다.");
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
            var strUrl      = "/prj/ET/ET01/Save_1020101_M.do";
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
                09. 팁
        ***********************************************************************/
        this.fn_Tip = function()
        {
        	this.alert("도움말 준비중입니다.");
        };

        /**********************************************************************
                10. 전년도 복사
        ***********************************************************************/
        /**
         * 기능 : 전년도복사 전 실행
         */
        this.fn_PreCopyBeforeData = function()
        {
        	var result = this.gfn_confirm( "기준년도의 전년도를 복사합니다. \n전년도 데이터를 복사하시겠습니까?\n(복사 후에는 기존에 추가하였던 데이터가 모두 지워집니다.\n또한, 모집이 존재하는 학과만 복사됩니다.)", "저장","", "question" );
        	if(result == 0)
            {
        		return false;
            }

        	this.ds_input.setColumn(0, "JEONNYEONDO_PYEONIP_YYYY", (parseInt(this.ds_input.getColumn(0, "PYEONIP_YYYY")) - 1))
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
            var strUrl      = "/prj/ET/ET01/Copy_1020101_M.do";
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

        /**********************************************************************
                11. 기타 Control Event
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

        //그리드 선택시
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	if (obj.getRowType(obj.rowposition) == Dataset.ROWTYPE_INSERT)
        	{
        		this.spnPyeonipYyyy.set_enable(true);
        		this.cboMojipGbcd.set_enable(true);
        	}
        	else
        	{
        		this.spnPyeonipYyyy.set_enable(false);
        		this.cboMojipGbcd.set_enable(false);
        	}
        };

        /**********************************************************************
                12. 검색창 엔터키 조회
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
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.spnSearchYYYY.addEventHandler("onkeydown",this.divSearch_spnSearchYYYY_onkeydown,this);
            this.spnPyeonipYyyy.addEventHandler("onkeydown",this.divM_spnSearchYYYY_onkeydown,this);
            this.calHapgyeokjaBalpyoFrdt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calHapgyeokjaBalpyoTodt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calJeopsuFrdt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calJeopsuTodt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.calDeungrokFrdt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongSijakDt_onkeydown,this);
            this.calDeungrokTodt.addEventHandler("onkeydown",this.divSearch_calSearchSincheongJongryoDt_onkeydown,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("ET01_1020101_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
