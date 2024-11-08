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
            this.set_titletext("학생이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEohak", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"EOHAK_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"EOHAK_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"DEUNGGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"DEUNGGEUP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"JEOMSU\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BALGEUP_GIGWAN_NM\" type=\"STRING\" size=\"100\"/><Column id=\"BALGEUP_NO\" type=\"STRING\" size=\"100\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeok", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"JAGYEOKJEUNG_CD\" type=\"STRING\" size=\"30\"/><Column id=\"JAGYEOKJEUNG_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOK_DEUNGGEUP_GBCD\" type=\"STRING\" size=\"10\"/><Column id=\"JAGYEOK_DEUNGGEUP_GBNM\" type=\"STRING\" size=\"65532\"/><Column id=\"BALGEUP_GIGWAN_NM\" type=\"STRING\" size=\"50\"/><Column id=\"JAGYEOKJEUNG_NO\" type=\"STRING\" size=\"50\"/><Column id=\"CHWIDEUK_DT\" type=\"STRING\" size=\"8\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEohakYeonsu", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HAKBEON\" type=\"STRING\" size=\"10\"/><Column id=\"SEQ\" type=\"STRING\" size=\"3\"/><Column id=\"EOHAK_YEONSU_NM\" type=\"STRING\" size=\"100\"/><Column id=\"EOHAK_YEONSU_FRDT\" type=\"STRING\" size=\"8\"/><Column id=\"EOHAK_YEONSU_TODT\" type=\"STRING\" size=\"8\"/><Column id=\"NAEYONG\" type=\"STRING\" size=\"1000\"/><Column id=\"BIGO\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEohakGbcd", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEohakDeunggeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsJagyeokDeunggeup", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"32\"/><Column id=\"CODE_NM\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdEohak","10","35",null,"127","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsEohak");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"349\"/><Column size=\"108\"/><Column size=\"84\"/><Column size=\"321\"/><Column size=\"112\"/><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"시험명\"/><Cell col=\"2\" text=\"취득급수\"/><Cell col=\"3\" text=\"취득점수\"/><Cell col=\"4\" text=\"발급기관명\"/><Cell col=\"5\" text=\"발급번호\"/><Cell col=\"6\" text=\"취득일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"left\" text=\"bind:EOHAK_GBCD\" editmaxlength=\"256\" combodataset=\"dsEohakGbcd\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:DEUNGGEUP_GBCD\" editmaxlength=\"10\" combodataset=\"dsEohakDeunggeup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"text\" textAlign=\"center\" text=\"bind:JEOMSU\" editmaxlength=\"10\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" text=\"bind:BALGEUP_GIGWAN_NM\" editmaxlength=\"100\"/><Cell col=\"5\" displaytype=\"normal\" edittype=\"text\" textAlign=\"center\" text=\"bind:BALGEUP_NO\" editmaxlength=\"100\"/><Cell col=\"6\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\" text=\"bind:CHWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09","7","11","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("어학 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdJagyeok","10","207",null,"127","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsJagyeok");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"363\"/><Column size=\"92\"/><Column size=\"286\"/><Column size=\"112\"/><Column size=\"161\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자격명\"/><Cell col=\"2\" text=\"자격등급\"/><Cell col=\"3\" text=\"발급기관명\"/><Cell col=\"4\" text=\"자격증번호\"/><Cell col=\"5\" text=\"취득일자\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" text=\"bind:JAGYEOKJEUNG_NM\" editmaxlength=\"50\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" textAlign=\"center\" text=\"bind:JAGYEOK_DEUNGGEUP_GBCD\" editmaxlength=\"10\" combodataset=\"dsJagyeokDeunggeup\" combodatacol=\"CODE_NM\" combocodecol=\"CODE\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\" text=\"bind:BALGEUP_GIGWAN_NM\" editmaxlength=\"50\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" textAlign=\"center\" text=\"bind:JAGYEOKJEUNG_NO\" editmaxlength=\"50\"/><Cell col=\"5\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\" text=\"bind:CHWIDEUK_DT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00","7","183","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("자격 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Grid("grdEohakYeonsu","10","379",null,"127","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_binddataset("dsEohakYeonsu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"371\"/><Column size=\"144\"/><Column size=\"144\"/><Column size=\"368\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"어학연수명\"/><Cell col=\"2\" text=\"시작일자\"/><Cell col=\"3\" text=\"종료일자\"/><Cell col=\"4\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" text=\"bind:EOHAK_YEONSU_NM\" editmaxlength=\"100\"/><Cell col=\"2\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\" text=\"bind:EOHAK_YEONSU_FRDT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" displaytype=\"calendarcontrol\" edittype=\"date\" textAlign=\"center\" text=\"bind:EOHAK_YEONSU_TODT\" editmaxlength=\"8\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"text\" textAlign=\"left\" text=\"bind:NAEYONG\" editmaxlength=\"1000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_09_00_00","7","354","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("어학연수 내역");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt","96","9","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt2","96","182","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt3","123","352","233","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00","0","-1","10","477",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","733","0","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("↑\r\n35\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00","11","28",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00","5","586",null,null,"404","214",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_02_00_00_00_00_00",null,"0","10","487","0",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","742","162","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","742","334","100","45",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("↑\r\n45\r\n↓");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 7pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_00","11","199",null,"8","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("8");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            obj.set_font("normal 8pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_01_00_00_00_00_00_00_01","10","371",null,"8","0",null,null,null,null,null,this);
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

            obj = new Button("btnDel1",null,"6","52","22","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet1",null,"6","52","22","181",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew1",null,"6","52","22","124",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave1",null,"6","52","22","67",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel2",null,"177","52","22","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet2",null,"177","52","22","181",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew2",null,"177","52","22","124",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave2",null,"177","52","22","67",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel3",null,"349","52","22","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnRet3",null,"349","52","22","181",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew3",null,"349","52","22","124",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave3",null,"349","52","22","67",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("학생이력");
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
            this._addPreloadList("data","","dsEohak");
            this._addPreloadList("data","","dsJagyeok");
            this._addPreloadList("data","","dsEohakYeonsu");
        };
        
        // User Script
        this.registerScript("US01_2010101_T11.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): US01_2010101_T11.xfdl(어학, 자격, 어학연수 관리(조회))
        * 작 성         일 명: jiback
        * 작 성         일 자: 2021/09/08
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
            var strDs    = "dsEohakGbcd|dsEohakDeunggeup|dsJagyeokDeunggeup";                    // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
            var strLgcd  = "00081|00082|00071";                           // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
            var strComb  = "S|S|S";                                   // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
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
            this.gfn_clearSortAll(this.grdEohak);
        	this.gfn_clearSortAll(this.grdJagyeok);
        	this.gfn_clearSortAll(this.grdEohakYeonsu);
            if(nErrorCode != 0)
            {
                this.gfn_alert(sErrorMsg,"에러정보","","error");
                return false;
            }else
            {
                /*sSvcId (Transaction Id)*/
                switch(sSvcId)
                {
                    case "EohakRet":
                            this.fn_PostEohakRet();
                        break;
        			case "JagyeokRet":
                            this.fn_PostJagyeokRet();
                        break;
        			case "EohakYeonsuRet":
                            this.fn_PostEohakYeonsuRet();
                        break;
                    case "EohakSave":
                            this.fn_PostEohakSave();
                        break;
        			case "JagyeokSave":
                            this.fn_PostJagyeokSave();
                        break;
        			case "EohakYeonsuSave":
                            this.fn_PostEohakYeonsuSave();
                        break;
                    case "EohakDel":
                            this.fn_PostEohakDel();
                        break;
        			case "JagyeokDel":
                            this.fn_PostJagyeokDel();
                        break;
        			case "EohakYeonsuDel":
                            this.fn_PostEohakYeonsuDel();
                        break;
                    default:
                        break;
                }
            }
        };

        /**********************************************************************
                05. 조회 함수 선언(어학 함수)
        ***********************************************************************/
        this.btnRet1_onclick = function(obj,e)
        {
        	if(this.fn_beforeEohakRet())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	this.fn_EohakRet(this.ds_input.getColumn(0, "HAKBEON"));
        };
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_EohakRet = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "EohakRet";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T11_Eohak.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsEohak=dsEohak";
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
        this.fn_PostEohakRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsEohak);
        };

        /**********************************************************************
                06. 조회 함수 선언(자격 함수)
        ***********************************************************************/
        this.btnRet2_onclick = function(obj,e)
        {
        	if(this.fn_beforeJagyeokRet())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	this.fn_JagyeokRet(this.ds_input.getColumn(0, "HAKBEON"));
        };
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_JagyeokRet = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "JagyeokRet";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T11_Jagyeok.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsJagyeok=dsJagyeok";
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
        this.fn_PostJagyeokRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsJagyeok);
        };

        /**********************************************************************
                07. 조회 함수 선언(어학연수 함수)
        ***********************************************************************/
        this.btnRet3_onclick = function(obj,e)
        {
        	if(this.fn_beforeEohakYeonsuRet())
        	{
        		var result = this.gfn_confirm( "변경된 데이터가 있습니다. 그래도 이동하시겠습니까?", "저장","", "question" );
        		if(result == 0)
        		{
        			return false;
        		}
        	}
        	this.fn_EohakYeonsuRet(this.ds_input.getColumn(0, "HAKBEON"));
        };
        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_EohakYeonsuRet = function(hakbeon)
        {
        	this.ds_input.setColumn(0, "HAKBEON", hakbeon);

            var strSvc      = "EohakYeonsuRet";
            var strUrl      = "/prj/US/US01/Retrieve_2010101_T11_EohakYeonsu.do";
            var strInDs     = "ds_input=ds_input";
            var strOutDs    = "dsEohakYeonsu=dsEohakYeonsu";
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
        this.fn_PostEohakYeonsuRet = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsEohakYeonsu);
        };

        /**********************************************************************
                08. 어학 추가 함수 선언
        ***********************************************************************/
        this.btnNew1_onclick = function(obj,e)
        {
        	var nRow = this.dsEohak.addRow();
        	this.dsEohak.setColumn(nRow, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        };

        /**********************************************************************
                09. 자격 추가 함수 선언
        ***********************************************************************/
        this.btnNew2_onclick = function(obj,e)
        {
        	var nRow = this.dsJagyeok.addRow();
        	this.dsJagyeok.setColumn(nRow, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        };

        /**********************************************************************
                10. 어학연수 추가 함수 선언
        ***********************************************************************/
        this.btnNew3_onclick = function(obj,e)
        {
        	var nRow = this.dsEohakYeonsu.addRow();
        	this.dsEohakYeonsu.setColumn(nRow, "HAKBEON", this.ds_input.getColumn(0, "HAKBEON"));
        };
        /**********************************************************************
                11. 어학 삭제 함수 선언
        ***********************************************************************/
        this.btnDel1_onclick = function(obj,e)
        {
        	this.fn_EohakDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreEohakDel = function()
        {
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsEohak.deleteRow(this.dsEohak.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_EohakDel = function()
        {
            if(!this.fn_PreEohakDel())
            {
                return false;
            }
            var strSvc      = "EohakDel";
            var strUrl      = "/prj/US/US01/Delete_2010101_T11_Eohak.do";
            var strInDs     = "dsEohak=dsEohak:u";
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

        this.fn_PostEohakDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsEohak);
        };

        /**********************************************************************
                12. 자격 삭제 함수 선언
        ***********************************************************************/
        this.btnDel2_onclick = function(obj,e)
        {
        	this.fn_JagyeokDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreJagyeokDel = function()
        {
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsJagyeok.deleteRow(this.dsJagyeok.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_JagyeokDel = function()
        {
            if(!this.fn_PreJagyeokDel())
            {
                return false;
            }

            var strSvc      = "JagyeokDel";
            var strUrl      = "/prj/US/US01/Delete_2010101_T11_Jagyeok.do";
            var strInDs     = "dsJagyeok=dsJagyeok:u";
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

        this.fn_PostJagyeokDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsJagyeok);
        };

        /**********************************************************************
                13. 어학연수 삭제 함수 선언
        ***********************************************************************/
        this.btnDel3_onclick = function(obj,e)
        {
        	this.fn_EohakYeonsuDel();
        };
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.fn_PreEohakYeonsuDel = function()
        {
            var result = this.gfn_confirm( "현재선택행을 삭제하시겠습니까?", "삭제정보","","question" );
            if(result == 0)
            {
                return false;
            }

        	this.dsEohakYeonsu.deleteRow(this.dsEohakYeonsu.rowposition);
            return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.fn_EohakYeonsuDel = function()
        {
            if(!this.fn_PreEohakYeonsuDel())
            {
                return false;
            }
            var strSvc      = "EohakYeonsuDel";
            var strUrl      = "/prj/US/US01/Delete_2010101_T11_EohakYeonsu.do";
            var strInDs     = "dsEohakYeonsu=dsEohakYeonsu:u";
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

        this.fn_PostEohakYeonsuDel = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsEohakYeonsu);
        };

        /**********************************************************************
                14. 어학 저장 함수 선언
        ***********************************************************************/
        this.btnSave1_onclick = function(obj,e)
        {
        	this.fn_EohakSave();
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreEohakSave = function()
        {
            if(!this.gfn_isUpdate(this.dsEohak))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
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
        this.fn_EohakSave = function()
        {
            if(!this.fn_PreEohakSave())
            {
                return false;
            }
            var strSvc      = "EohakSave";
            var strUrl      = "/prj/US/US01/Save_2010101_T11_Eohak.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsEohak=dsEohak:u";
            var strOutDs    = "dsEohak=dsEohak";
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
        this.fn_PostEohakSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt,this.dsEohak);
        };

        /**********************************************************************
                15. 자격 저장 함수 선언
        ***********************************************************************/
        this.btnSave2_onclick = function(obj,e)
        {
        	this.fn_JagyeokSave();
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreJagyeokSave = function()
        {
            if(!this.gfn_isUpdate(this.dsJagyeok))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
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
        this.fn_JagyeokSave = function()
        {
            if(!this.fn_PreJagyeokSave())
            {
                return false;
            }
            var strSvc      = "JagyeokSave";
            var strUrl      = "/prj/US/US01/Save_2010101_T11_Jagyeok.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsJagyeok=dsJagyeok:u";
            var strOutDs    = "dsJagyeok=dsJagyeok";
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
        this.fn_PostJagyeokSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt2,this.dsJagyeok);
        };

        /**********************************************************************
                16. 어학연수 저장 함수 선언
        ***********************************************************************/
        this.btnSave3_onclick = function(obj,e)
        {
        	this.fn_EohakYeonsuSave();
        };
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreEohakYeonsuSave = function()
        {
            if(!this.gfn_isUpdate(this.dsEohakYeonsu))
            {
                this.gfn_alert("변경된 이력이 없습니다.","저장정보","","question");
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
        this.fn_EohakYeonsuSave = function()
        {
            if(!this.fn_PreEohakYeonsuSave())
            {
                return false;
            }
            var strSvc      = "EohakYeonsuSave";
            var strUrl      = "/prj/US/US01/Save_2010101_T11_EohakYeonsu.do";
            var strInDs     = "ds_input=ds_input:a ";
                strInDs    += "dsEohakYeonsu=dsEohakYeonsu:u";
            var strOutDs    = "dsEohakYeonsu=dsEohakYeonsu";
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
        this.fn_PostEohakYeonsuSave = function()
        {
            this.gfn_getRowCount(this.staRowCnt3,this.dsEohakYeonsu);
        };

        /**********************************************************************
                17. 기타 Control Event
        ***********************************************************************/
        /**
         *      그리드멀티 소트정열
         */
        this.grdEohak_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdJagyeok_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };
        this.grdEohakYeonsu_onheaddblclick = function(obj,e)
        {
        	this.gfn_gridSort(obj,e);
        };

        // 조회 전 사용자가 변경유무를 체크(공통처리)
        this.fn_beforeEohakRet = function()
        {
            return this.gfn_isUpdate(this.dsEohak);
        };
        this.fn_beforeJagyeokRet = function()
        {
            return this.gfn_isUpdate(this.dsJagyeok);
        };
        this.fn_beforeEohakYeonsuRet = function()
        {
            return this.gfn_isUpdate(this.dsEohakYeonsu);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.form_onclick,this);
            this.grdEohak.addEventHandler("onheaddblclick",this.grdEohak_onheaddblclick,this);
            this.stc_09.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.grdJagyeok.addEventHandler("onheaddblclick",this.grdJagyeok_onheaddblclick,this);
            this.stc_09_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.grdEohakYeonsu.addEventHandler("onheaddblclick",this.grdEohakYeonsu_onheaddblclick,this);
            this.stc_09_00_00.addEventHandler("onclick",this.tab_00_Tabpage7_stc_09_onclick,this);
            this.btnDel1.addEventHandler("onclick",this.btnDel1_onclick,this);
            this.btnRet1.addEventHandler("onclick",this.btnRet1_onclick,this);
            this.btnNew1.addEventHandler("onclick",this.btnNew1_onclick,this);
            this.btnSave1.addEventHandler("onclick",this.btnSave1_onclick,this);
            this.btnDel2.addEventHandler("onclick",this.btnDel2_onclick,this);
            this.btnRet2.addEventHandler("onclick",this.btnRet2_onclick,this);
            this.btnNew2.addEventHandler("onclick",this.btnNew2_onclick,this);
            this.btnSave2.addEventHandler("onclick",this.btnSave2_onclick,this);
            this.btnDel3.addEventHandler("onclick",this.btnDel3_onclick,this);
            this.btnRet3.addEventHandler("onclick",this.btnRet3_onclick,this);
            this.btnNew3.addEventHandler("onclick",this.btnNew3_onclick,this);
            this.btnSave3.addEventHandler("onclick",this.btnSave3_onclick,this);
            this.dsEohak.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsJagyeok.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsEohakYeonsu.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };
        this.loadIncludeScript("US01_2010101_T11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
