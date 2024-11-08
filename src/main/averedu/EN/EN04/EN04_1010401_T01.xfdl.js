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
            this.set_titletext("학부/학과");
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
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"1\"/><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SEBUJEONHYEONG_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"IPHAK_JEONGWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHUNGWON_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CHASUIGWAN_INWON\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MYEONJEOP_YN\" type=\"STRING\" size=\"2\"/><Column id=\"SILGI_YN\" type=\"STRING\" size=\"2\"/><Column id=\"INSERT_ID\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_DT\" type=\"DATE\" size=\"8\"/><Column id=\"INSERT_IP\" type=\"STRING\" size=\"30\"/><Column id=\"INSERT_PG\" type=\"STRING\" size=\"500\"/><Column id=\"UPDATE_ID\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_DT\" type=\"DATE\" size=\"8\"/><Column id=\"UPDATE_IP\" type=\"STRING\" size=\"30\"/><Column id=\"UPDATE_PG\" type=\"STRING\" size=\"500\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHakgwa", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"MYEONJEOPHANGMOK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"ORIGIN_MYEONJEOPHANGMOK_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"4\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"10\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"SABEON\" type=\"STRING\" size=\"10\"/><Column id=\"ORIGIN_SABEON\" type=\"STRING\" size=\"256\"/><Column id=\"SORT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SEONGMYEONG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HAKSAENG_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJuya", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailYn", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dInput", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"IPSI_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"MOJIP_GBCD\" type=\"STRING\" size=\"256\"/><Column id=\"HAKGWA_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JUYA_GBCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMyeonjeopHangmok", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"OUT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","10","45",null,null,"489","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsMaster");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"622\"/><Column size=\"172\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"학부/학과\"/><Cell col=\"2\" text=\"주야구분\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" combodataset=\"dsJuya\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\" displaytype=\"combotext\" text=\"bind:JUYA_GBCD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","100","19","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","500","0","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","0","37","1630","8",null,null,null,null,null,null,this);
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

            obj = new Static("Static01_02_00_00_00_00","0","0","10","741",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","0",null,"1010","10",null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","1180","45",null,"325","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"67\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"면접항목명\"/><Cell col=\"2\" text=\"최대점수\"/><Cell col=\"3\" text=\"순서\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:MYEONJEOPHANGMOK_GBCD\" combocodecol=\"CODE\" combodataset=\"dsMyeonjeopHangmok\" combodatacol=\"CODE_NM\" displaytype=\"expr:MYEONJEOPHANGMOK_GBCD != &quot;&quot; ? &quot;combocontrol&quot; : &quot;none&quot;\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:MAX_JEOMSU\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:SORT\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewMunjup",null,"12","51","25","122",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveMunjup",null,"12","51","25","66",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelMunjup",null,"12","51","25","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail2","1180","415",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsDetail2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"96\"/><Column size=\"0\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"학부/학과\"/><Cell col=\"2\" text=\"교수명\"/><Cell col=\"3\" text=\"순서\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" edittype=\"none\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\"/><Cell col=\"1\" text=\"bind:HAKGWA_CD\" displaytype=\"combotext\" combodataset=\"dsHakgwa\" combocodecol=\"CODE\" combodatacol=\"CODE_NM\"/><Cell col=\"2\" text=\"bind:SEONGMYEONG\"/><Cell col=\"3\" text=\"bind:SORT\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:SABEON\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnNewMunJupGyoSoo","1468","382","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveMunJupGyoSoo","1524","382","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelMunJupGyoSoo","1580","382","51","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","1306","18","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","1179","20","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("면접채점기준표");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_00","1177","390","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("면접담당교수");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","1294","388","123","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","1350","370","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00","1179","407","440","8",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00_00",null,"11","10","741","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00","1151","320","30","249",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("30");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateMunJupDaeSangJa","921","12","111","25",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("면접대상자 생성");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteMunJupDaeSangJa","1039","12","111","25",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("면접대상자 삭제");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00_01","7","20","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("학부/학과");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학부/학과");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","btnNewMunjup","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","btnSaveMunjup","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","btnDelMunjup","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","btnNewMunJupGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","btnSaveMunJupGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","btnDelMunJupGyoSoo","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","btnCreateMunJupDaeSangJa","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","btnDeleteMunJupDaeSangJa","enable","dsBindableButton","bEnable");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("data","","dsMaster");
            this._addPreloadList("data","","dsDetail");
            this._addPreloadList("data","","dsDetail2");
        };
        
        // User Script
        this.registerScript("EN04_1010401_T01.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): EN04_1010401_T01.xfdl(학부/학과)
        * 작 성         일 명: 성연우
        * 작 성         일 자: 2021/04/23
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
        this.lvchkColidDs   = "MYEONJEOPHANGMOK_GBCD$MAX_JEOMSU$SORT";
        this.lvchkColNameDs = "면접항목명$최대점수$순서";
        this.lvchkColidDs2   = "SORT";
        this.lvchkColNameDs2 = "순서";
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
            var strDs    = "dsHakgwa|dsJuya|dsMyeonjeopHangmok";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "01029|00003|01018";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "X|X|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
        	this.gfn_clearSortAll(this.grdDetail);
        	this.gfn_clearSortAll(this.grdDetail2);
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
                    case "MyeonjeopSave":
                            this.fn_PostMyeonjeopSave();
                        break;
        			case "GyosuSave":
                            this.fn_PostGyosuSave();
                        break;
                    case "MyeonjeopDel":
                            this.fn_PostMyeonjeopDel();
                        break;
        			case "GyosuDel":
                            this.fn_PostGyosuDel();
                        break;
        			case "CreateDaeSangJa":
                            this.fn_PostCreateDaeSangJa();
                        break;
        			case "DeleteDaeSangJa":
                            this.fn_PostDeleteDaeSangJa();
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
        		case "prof":
        				var sRtn = strVal.split(",");
        				if(sRtn[0] != "CLOSE")
        				{
        					var maxVal = 0;
        					for(var i = 0 ; i < this.dsDetail2.rowcount; i ++)
        					{
        						if(this.dsDetail2.getColumn(i, "SORT") > maxVal)
        						{
        							maxVal = this.dsDetail2.getColumn(i, "SORT");
        						}
        					}
        					this.dsDetail2.addRow();
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "IPSI_YYYY"	, this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "MOJIP_GBCD"	, this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "HAKGWA_CD"	, this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "JUYA_GBCD"	, this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "SORT"			, maxVal + 1);
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "SABEON"		, sRtn[0]);
        					this.dsDetail2.setColumn(this.dsDetail2.rowposition, "SEONGMYEONG"	, sRtn[1]);

        					this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);
        				}
        			break;
        		default:
                    break;
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
        	if(this.ds_input.getColumn(0, "IPSI_YYYY") == "" || this.ds_input.getColumn(0, "IPSI_YYYY") == null)
        	{
        		this.alert("입시년도를 입력해주세요.");
        		return false;
        	}
        	else if(this.ds_input.getColumn(0, "MOJIP_GBCD") == "" || this.ds_input.getColumn(0, "MOJIP_GBCD") == null)
        	{
        		this.alert("모집구분을 선택해주세요.");
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
        this.fn_Ret = function(data1)
        {
        	this.ds_input.copyData(data1);

        	if(!this.fn_PreRet())
            {
                return false;
            }

            var strSvc      = "Ret";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010401_T01.do";
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
                06. 조회 함수 선언(디테일 함수)
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
        	this.ds_dInput.setColumn(0, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        	this.ds_dInput.setColumn(0, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        	this.ds_dInput.setColumn(0, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        	this.ds_dInput.setColumn(0, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));

        	this.fn_DRet();
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
            var strSvc      = "";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010401_T01_Myeonjeop.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail=dsDetail";
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

        	var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010401_T01_Gyosu.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetail2=dsDetail2";
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

        	var strSvc      = "DRet";
            var strUrl      = "/prj/EN/EN04/Retrieve_1010401_T01_Myeonjeop_YN.do";
            var strInDs     = "ds_dInput=ds_dInput";
            var strOutDs    = "dsDetailYn=dsDetailYn";
            var strArg      = "";
            var GBV_MENUID    = objApp.gv_cutPrgId;
            if(! this.gfn_isNull(this.gfn_trim(GBV_MENUID)))
            {
            	strArg += "GBV_MENUID=" + GBV_MENUID + " " + strArg;
            }
            var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
            var strASync    = false;             //생략이나 공백일시에는 ASync=true,싱크시는 false로
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
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        	this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);

        	var cnt = this.dsDetailYn.getColumn(0, "RESULT_CNT");

        	if(parseInt(cnt) > 0)
        	{
        		this.btnNewMunjup.set_visible(false);
        		this.btnSaveMunjup.set_visible(false);
        		this.btnDelMunjup.set_visible(false);
        		this.btnNewMunJupGyoSoo.set_visible(false);
        		this.btnSaveMunJupGyoSoo.set_visible(false);
        		this.btnDelMunJupGyoSoo.set_visible(false);
        		this.grdDetail.setCellProperty("body", 1, "displaytype", "combotext");
        		this.grdDetail.setCellProperty("body", 1, "edittype", "none");
        		this.grdDetail.setCellProperty("body", 2, "edittype", "none");
        		this.grdDetail.setCellProperty("body", 3, "edittype", "none");
        		this.grdDetail2.setCellProperty("body", 3, "edittype", "none");
        	}
        	else
        	{
        		this.btnNewMunjup.set_visible(true);
        		this.btnSaveMunjup.set_visible(true);
        		this.btnDelMunjup.set_visible(true);
        		this.btnNewMunJupGyoSoo.set_visible(true);
        		this.btnSaveMunJupGyoSoo.set_visible(true);
        		this.btnDelMunJupGyoSoo.set_visible(true);
        		this.grdDetail.setCellProperty("body", 1, "displaytype", "combocontrol");
        		this.grdDetail.setCellProperty("body", 1, "edittype", "combo");
        		this.grdDetail.setCellProperty("body", 2, "edittype", "text");
        		this.grdDetail.setCellProperty("body", 3, "edittype", "text");
        		this.grdDetail2.setCellProperty("body", 3, "edittype", "text");
        	}
        };

        /**********************************************************************
                07. 면접채점기준표 신규 함수 선언
        ***********************************************************************/
        this.btnNewMunjup_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount < 1)
        	{
        		this.alert("추가할 학과를 선택해주세요.");
        	}
        	else
        	{
        		var maxVal = 0;
        		for(var i = 0 ; i < this.dsDetail.rowcount; i ++)
        		{
        			if(this.dsDetail.getColumn(i, "SORT") > maxVal)
        			{
        				maxVal = this.dsDetail.getColumn(i, "SORT");
        			}
        		}

        		// 학부학과의 면접항목신규
        		this.dsDetail.addRow();
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "IPSI_YYYY", this.dsMaster.getColumn(this.dsMaster.rowposition, "IPSI_YYYY"));
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "MOJIP_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "MOJIP_GBCD"));
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "HAKGWA_CD", this.dsMaster.getColumn(this.dsMaster.rowposition, "HAKGWA_CD"));
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "JUYA_GBCD", this.dsMaster.getColumn(this.dsMaster.rowposition, "JUYA_GBCD"));
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "SORT", maxVal + 1);
        		this.dsDetail.setColumn(this.dsDetail.rowposition, "MAX_JEOMSU", "100");
        	}
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                08. 면접담당교수 신규 함수 선언
        ***********************************************************************/
        this.btnNewMunJupGyoSoo_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount < 1)
        	{
        		this.alert("추가할 학과를 선택해주세요.");
        	}
        	else
        	{
        		var oArg = {};
        		var oOption = {};
        		var sPopupCallBack = "fn_popupCallback";
        		this.gfn_openPopup( "prof","EN01::EN01_1010106_P01.xfdl",oArg,sPopupCallBack,oOption);
        	}
        };

        /**********************************************************************
                09. 면접채점기준표 삭제 함수 선언
        ***********************************************************************/
        this.btnDelMunjup_onclick = function(obj,e)
        {
        	if(this.dsDetail.rowcount == 0)
        	{
        		this.alert("삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
        	this.dsDetail.deleteRow(this.dsDetail.rowposition);
            this.fn_MyeonjeopDel();
        };

        this.fn_MyeonjeopDel = function()
        {
        	var strSvc      = "MyeonjeopDel";
        	var strUrl      = "/prj/EN/EN04/Delete_1010401_T01_Myeonjeop.do";
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
        }

        this.fn_PostMyeonjeopDel = function()
        {
        	this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                10. 면접담당교수 삭제 함수 선언
        ***********************************************************************/
        this.btnDelMunJupGyoSoo_onclick = function(obj,e)
        {
        	if(this.dsDetail2.rowcount == 0)
        	{
        		this.alert("삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

            //개별삭제시
        	this.dsDetail2.deleteRow(this.dsDetail2.rowposition);
            this.fn_GyosuDel();
        };

        this.fn_GyosuDel = function()
        {
        	var strSvc      = "GyosuDel";
        	var strUrl      = "/prj/EN/EN04/Delete_1010401_T01_Gyosu.do";
        	var strInDs     = "dsDetail2=dsDetail2:u";
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
        }

        this.fn_PostGyosuDel = function()
        {
        	this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);
        };

        /**********************************************************************
                11. 면접채점기준표 저장 함수 선언
        ***********************************************************************/
        this.btnSaveMunjup_onclick = function(obj,e)
        {
        	if(this.dsDetail.rowcount == 0)
        	{
        		this.alert("저장할 데이터가 없습니다.");
        		return false;
        	}

            if(!this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

        	// 면접항목의 최대접수의 합이 400인지 체크
        	var rowCount = this.dsDetail.rowcount;
        	var sum = 0;
        	if(rowCount > 0)
        	{
        		for(var i = 0 ; i < rowCount ; i++)
        		{
        			if(this.dsDetail.getColumn(i, "MAX_JEOMSU") == ''||this.dsDetail.getColumn(i, "MAX_JEOMSU") == null)
        			{
        				sum += 0;
        			}
        			else
        			{
        				sum += parseInt(this.dsDetail.getColumn(i, "MAX_JEOMSU"));
        			}
        		}
        	}

        	if (sum != 400){
        		this.alert("면접항목의 최대점수의 합계가 400점이 되어야 합니다.");
        		return false;
        	}

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs, this.lvchkColNameDs, this.grdDetail, chkFocusFlg, this);

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

            this.fn_MyeonjeopSave();
        };

        this.fn_MyeonjeopSave = function()
        {
        	var strSvc      = "MyeonjeopSave";
        	var strUrl      = "/prj/EN/EN04/Save_1010401_T01_Myeonjeop.do";
        	var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs    += "dsDetail=dsDetail:u";
        	var strOutDs    = "dsDetail=dsDetail";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostMyeonjeopSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsDetail);
        };

        /**********************************************************************
                12. 면접담당교수 저장 함수 선언
        ***********************************************************************/
        this.btnSaveMunJupGyoSoo_onclick = function(obj,e)
        {
        	if(this.dsDetail2.rowcount == 0)
        	{
        		this.alert("저장할 데이터가 없습니다.");
        		return false;
        	}

            if(!this.gfn_isUpdate(this.dsDetail2))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
                return false;
            }

            // 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
            var chkFocusFlg = true;
            var result      = this.gfn_cmmnChkEssentialItem(this.dsDetail2, this.lvchkColidDs2, this.lvchkColNameDs2, this.grdDetail2, chkFocusFlg, this);

            if (result[0] != "success")
            {
                this.gfn_alert(result[0],"저장정보","","question");
                this.dsDetail2.set_rowposition(result[1]); //데이터셋 변경
                return false;
            }

            var result = this.gfn_confirm( "저장 하시겠습니까?", "저장","", "question" );
            if(result == 0)
            {
                return false;
            }

            this.fn_GyosuSave();
        };

        this.fn_GyosuSave = function()
        {
        	var strSvc      = "GyosuSave";
        	var strUrl      = "/prj/EN/EN04/Save_1010401_T01_Gyosu.do";
        	var strInDs     = "ds_dInput=ds_dInput:a ";
        		strInDs    += "dsDetail2=dsDetail2:u";
        	var strOutDs    = "dsDetail2=dsDetail2";
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
         *      기능 : 저장시 후처리
         */
        this.fn_PostGyosuSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsDetail2);
        };

        /**********************************************************************
                13. 면접대상자생성 함수 선언
        ***********************************************************************/
        this.btnCreateMunJupDaeSangJa_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("면접대상자를 생성할 데이터가 없습니다.");
        		return false;
        	}

        	// 실기항목의 최대접수의 합이 400인지 체크
        	var rowCount = this.dsDetail.rowcount;
        	var sum = 0;
        	if(rowCount > 0)
        	{
        		for(var i = 0 ; i < rowCount ; i++)
        		{
        			if(this.dsDetail.getColumn(i, "MAX_JEOMSU") == '')
        			{
        				sum += 0;
        			}
        			else
        			{
        				sum += parseInt(this.dsDetail.getColumn(i, "MAX_JEOMSU"));
        			}
        		}
        	}

        	if (sum != 400)
        	{
        		this.alert("면접항목의 최대점수의 합계가 400점이 되어야 합니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "선택된 학과를 기준으로 면접대상자를 생성합니다.", "실기대상자 생성","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_CreateDaeSangJa();
        };

        /**
         * 기능 : 생성 실행
         */
        this.fn_CreateDaeSangJa = function()
        {
            var strSvc      = "CreateDaeSangJa";
            var strUrl      = "/prj/EN/EN04/Save_1010401_T01_CreateDaesangja.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostCreateDaeSangJa = function()
        {
        	if(this.dsResult.getColumn(0, "OUT_CODE") == "-1")
        	{
        		this.alert("면접대상자 생성에 성공하였습니다.");
        		this.fn_DRet();
        	}
        	else
        	{
        		this.alert(this.dsResult.getColumn(0, "OUT_MSG"));
        	}
        };

        /**********************************************************************
                14. 면접대상자삭제 함수 선언
        ***********************************************************************/
        this.btnDeleteMunJupDaeSangJa_onclick = function(obj,e)
        {
        	if(this.dsMaster.rowcount == 0)
        	{
        		this.alert("실기대상자를 삭제할 데이터가 없습니다.");
        		return false;
        	}

        	var result = this.gfn_confirm( "선택된 학과를 기준으로 면접대상자를 삭제합니다.", "면접대상자 삭제","","question" );
        	if(result == 0)
        	{
        		return false;
        	}

        	this.fn_DeleteDaeSangJa();
        };

        /**
         * 기능 : 삭제 실행
         */
        this.fn_DeleteDaeSangJa = function()
        {
            var strSvc      = "DeleteDaeSangJa";
            var strUrl      = "/prj/EN/EN04/Delete_1010401_T01_DeleteDaesangja.do";
            var strInDs     = "ds_dInput=ds_dInput:a ";
            var strOutDs    = "dsResult=dsResult";
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

        this.fn_PostDeleteDaeSangJa = function()
        {
        	if(this.dsResult.getColumn(0, "OUT_CODE") == "-1")
        	{
        		this.alert("면접대상자 삭제에 성공하였습니다.");
        		this.fn_DRet();
        	}
        	else
        	{
        		this.alert(this.dsResult.getColumn(0, "OUT_MSG"));
        	}
        }
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
        this.grdDetail2_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
           var value = false;

           if(this.gfn_isUpdate(this.dsDetail))
           {
              value = true;
           }
           else if(this.gfn_isUpdate(this.dsDetail2))
           {
              value = true;
           }

           return value;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("onkeyup",this.grdMaster_onkeyup,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.btnNewMunjup.addEventHandler("onclick",this.btnNewMunjup_onclick,this);
            this.btnSaveMunjup.addEventHandler("onclick",this.btnSaveMunjup_onclick,this);
            this.btnDelMunjup.addEventHandler("onclick",this.btnDelMunjup_onclick,this);
            this.grdDetail2.addEventHandler("onheaddblclick",this.grdDetail2_onheaddblclick,this);
            this.btnNewMunJupGyoSoo.addEventHandler("onclick",this.btnNewMunJupGyoSoo_onclick,this);
            this.btnSaveMunJupGyoSoo.addEventHandler("onclick",this.btnSaveMunJupGyoSoo_onclick,this);
            this.btnDelMunJupGyoSoo.addEventHandler("onclick",this.btnDelMunJupGyoSoo_onclick,this);
            this.btnCreateMunJupDaeSangJa.addEventHandler("onclick",this.btnCreateMunJupDaeSangJa_onclick,this);
            this.btnDeleteMunJupDaeSangJa.addEventHandler("onclick",this.btnDeleteMunJupDaeSangJa_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("EN04_1010401_T01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
