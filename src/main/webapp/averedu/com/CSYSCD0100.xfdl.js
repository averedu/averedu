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
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1640,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_input1", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CMMN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CMMN_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMN_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REMK_CTNT\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CMMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FRST_INPUT_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"FRST_INPUT_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FRST_INPUT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LAST_MODF_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"LAST_MODF_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_MODF_IP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CMMN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMMN_CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BF_CMMN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CMMN_CD\"/><Col id=\"CMMN_CD_NM\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.set_enableevent("true");
            obj.set_preload("true");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"32\"/><Column id=\"CMMN_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMN_DETA_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMN_DETA_CD_NM\" type=\"STRING\" size=\"32\"/><Column id=\"SORT_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"CMMN_DETA_CD_ABBNM\" type=\"STRING\" size=\"32\"/><Column id=\"LANG_FG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"LANG_FG_NM\" type=\"STRING\" size=\"32\"/><Column id=\"LANG_ABBNM\" type=\"STRING\" size=\"32\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"32\"/><Column id=\"REMK_CTNT\" type=\"STRING\" size=\"32\"/><Column id=\"FRST_INPUT_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FRST_INPUT_DT\" type=\"STRING\" size=\"32\"/><Column id=\"FRST_INPUT_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"FRST_INPUT_IP\" type=\"DATETIME\" size=\"17\"/><Column id=\"LAST_MODF_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LAST_MODF_DT\" type=\"DATETIME\" size=\"17\"/><Column id=\"LAST_MODF_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"LAST_MODF_IP\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_use_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"YN\">Y</Col></Row><Row><Col id=\"CD\">0</Col><Col id=\"YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmmnCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CMMN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMaster","5","104",null,null,"3","380",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"52\"/><Column size=\"174\"/><Column size=\"181\"/><Column size=\"175\"/><Column size=\"186\"/><Column size=\"188\"/><Column size=\"79\"/><Column size=\"102\"/><Column size=\"88\"/><Column size=\"106\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"공통코드\" cssclass=\"point\"/><Cell col=\"4\" text=\"공통코드명\" background=\"#e1eaf3 url(&apos;file://C:/avereduProjectTool/workspace-averedu/src/main/webapp/averedu/_resource_/_theme_/default/images/point.png&apos;) no-repeat left top\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"비고내역\"/><Cell col=\"7\" text=\"이전공통코드\"/><Cell col=\"8\" text=\"등록자\"/><Cell col=\"9\" text=\"등록일자\"/><Cell col=\"10\" text=\"수정자\"/><Cell col=\"11\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:&apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"expr:currow+1\" textAlign=\"center\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:CMMN_CD\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;text&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CMMN_CD_NM\" edittype=\"text\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combocontrol\" textAlign=\"left\" combodataset=\"ds_use_yn\" combodatacol=\"YN\" combocodecol=\"CD\"/><Cell col=\"6\" text=\"bind:REMK_CTNT\" edittype=\"text\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:BF_CMMN_CD\" edittype=\"text\" displaytype=\"editcontrol\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:FRST_INPUT_ID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:FRST_INPUT_DT\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/><Cell col=\"10\" text=\"bind:LAST_MODF_ID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:LAST_MODF_DT\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","5","grdMaster:35",null,null,"3","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"87\"/><Column size=\"81\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"118\"/><Column size=\"89\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"순번\" background=\"#e1eaf3 url(&apos;file://C:/avereduProjectTool/workspace-averedu/src/main/webapp/averedu/_resource_/_theme_/default/images/point.png&apos;) no-repeat left top\"/><Cell col=\"3\" text=\"공통코드\"/><Cell col=\"4\" text=\"상세코드\" cssclass=\"point\"/><Cell col=\"5\" text=\"상세코드명\" cssclass=\"point\"/><Cell col=\"6\" text=\"상세코드약명\"/><Cell col=\"7\" text=\"언어구분코드\"/><Cell col=\"8\" text=\"언어코드명\" background=\"#e1eaf3 url(&apos;file://C:/avereduProjectTool/workspace-averedu/src/main/webapp/averedu/_resource_/_theme_/default/images/point.png&apos;) no-repeat left top\"/><Cell col=\"9\" text=\"언어코드약명\"/><Cell col=\"10\" text=\"사용여부\"/><Cell col=\"11\" text=\"비고내역\"/><Cell col=\"12\" text=\"등록자\"/><Cell col=\"13\" text=\"등록일자\"/><Cell col=\"14\" text=\"수정자\"/><Cell col=\"15\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:(dataset.getRowType(currow)) == &apos;2&apos; ? &apos;+&apos;:(dataset.getRowType(currow)) == &apos;4&apos; ? &apos;U&apos;:&apos;&apos;\" textAlign=\"center\" displaytype=\"text\"/><Cell col=\"2\" text=\"expr:currow+1\" textAlign=\"center\" displaytype=\"normal\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:CMMN_CD\" displaytype=\"text\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CMMN_DETA_CD\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;text&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CMMN_DETA_CD_NM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CMMN_DETA_CD_ABBNM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LANG_FG_CD\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;text&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:LANG_FG_NM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LANG_ABBNM\" displaytype=\"editcontrol\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:USE_YN\" displaytype=\"combocontrol\" edittype=\"combo\" maskeditformat=\"expr:##\" textAlign=\"right\" combodataset=\"ds_use_yn\" combocodecol=\"CD\" combodatacol=\"YN\"/><Cell col=\"11\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:REMK_CTNT\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"text\" text=\"bind:FRST_INPUT_ID\" textAlign=\"center\"/><Cell col=\"13\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:FRST_INPUT_DT\" calendardisplaynulltype=\"none\"/><Cell col=\"14\" displaytype=\"text\" text=\"bind:LAST_MODF_ID\" textAlign=\"center\"/><Cell col=\"15\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:LAST_MODF_DT\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"69","3",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SearchBox");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle01","0","9","73","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("공통코드 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle04","203","9","83","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("공통코드/명 ");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCmmnCdNm","350","9","123","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle05","473","9","120","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("공통코드사용여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserYn","593","9","123","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("YN");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle01_00","0","36","73","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("코드값명");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtClassId00","74","36","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle04_00","203","36","130","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("공통코드값사용여부");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboComUserYn","350","36","123","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_use_yn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("YN");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"22","90","22","5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Crud");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCommCode","74","9","127","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCmmnCd");
            obj.set_codecolumn("CMMN_CD");
            obj.set_datacolumn("CMMN_CD");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSubTitle05_00","716","9","78","26",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("구코드");
            obj.set_cssclass("sta_WF_SearchLbl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBfCmmnCd","794","9","123","22",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_imemode("alpha");
            obj.set_inputmode("upper");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staRowCnt",null,"79","60","22","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDDel",null,"grdMaster:10","60","22","235",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDExcelDn",null,"grdMaster:10","90","22","75",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnDSave",null,"grdMaster:10","60","22","170",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","515","69","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnDAdd",null,"grdMaster:10","60","22","300",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMDel",null,"79","60","22","235",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMExcelDn",null,"79","90","22","75",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMSave",null,"79","60","22","170",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnMAdd",null,"79","60","22","300",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle","6","79","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공통코드 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("staRowCnt1",null,"grdMaster:10","60","22","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("[총 <fc v=\'red\'><b v=\'true\'>0 </b></fc>건]");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("staSubTitle00","4","grdMaster:10","140","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("콩통코드값 목록");
            obj.set_cssclass("sta_WF_Title02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","515","420","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("35");
            obj.set_cssclass("sta_GU_space");
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_opacity("0.5");
            obj.set_textAlign("center");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1640,800,this,function(p){});
            obj.set_description("공통코드관리");
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboUserYn","value","ds_input","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtBfCmmnCd","value","ds_input","BF_CMMN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtCmmnCdNm","value","ds_input","CMMN_CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCommCode","value","ds_input","CMMN_CD");
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
        this.registerScript("CSYSCD0100.xfdl", function() {
        /**********************************************************************
        * FormID(화면   ID명): CSYSCD0100.xfdl(공통코드조회/등록/수정/삭제)
        * 작 성			일 명: jiback
        * 작 성	    	일 자: 2024/11/26
        * 변 경     	일 자:
        * 변 경			자 명:
        * 변경 및 수정 로그 : 일자별로 변경자 및 변경사항을 간략히 기술
        */
        /**********************************************************************
        	01. 전처리 공통 함수 선언
        ***********************************************************************/
        /**********************************************************************
        	02. 폼 변수 정의
        ***********************************************************************/
        //GRID 전용 필수항목체크
        this.lvchkColidDs   		= "CMMN_CD$CMMN_CD_NM";         		// 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs 		= "공통코드$공통코드명";

        this.lvchkColidDs_Detail   	= "CMMN_DETA_CD$CMMN_DETA_CD_NM$LANG_FG_CD";        					// 디테일 필수 입력사항 칼럼ID  예)  "commSmcd$commName"
        this.lvchkColNameDs_Detail 	= "상세코드$코드명$언어구분코드";

        /*전역변수*/
        this.strKeyValue			= "";
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
        /**
         * 기능 : 폼언 로드(닫기전 셋팅)  Setting
         */
        this.form_onclose = function(obj,e)
        {

        };
        /**********************************************************************
        	04. 공통 코드 및 콤보 데이타 조회
        ***********************************************************************/
        this.fn_formInit = function()
        {

        	var strDs    = "dsCmmnCd";      // 데이터를 받을 데이터셋리스트     예) "DS_CODE01|DS_CODE02|DS_CODE03"
        	var strLgcd  = "000002";           		 // 공통코드 중분류 코드, 데이터셋 개수와 같아야 한다. 예) "Z01|Z02|Z03"
        	var strComb  = "X";   									 // 콤보옵션 (T:전체, S:선택, N:공백, X:해당사항없음)
        	var strOptn  = "";											 // 조건문 " AND COMM_IT02 = '" + vip + "'|||";
        	var svcId 	 = "Init";

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
        	this.ds_input.setColumn(this.ds_input.rowposition,"USE_YN",'1');
        	this.fn_Ret();
        };

        /**
         * 기능 : 콜백함수(후처리)
         */
        this.fn_callBack = function(sSvcId,nErrorCode, sErrorMsg)
        {

        	if(nErrorCode != 0)
        	{
        		this.gfn_alert(sErrorMsg);
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
        			case "DRet":
        				this.fn_PostDRet();
        			  	break;
        			case "Save":
        			    this.fn_PostSave();
        				break;
        			case "DSave":
        			    this.fn_PostDSave();
        				break;
        			case "Add":
        				this.fn_PostAdd();
        				break;
        			case "DAdd":
        				this.fn_PostDAdd();
        				break;
        			case "Del":
        				this.fn_PostDel();
        				break;
        			case "DDel":
        				this.fn_PostDDel();
        				break;
        			default:
        				break;
        		}
        	}
        };
        /************************************************************************************************
        * 공통 버튼 호출 영역(공통버튼 사용에만사용)
        ************************************************************************************************/
        /*
         * _gfn_btnClick여기서 호출시 버튼을 클릭처릭(개인폼에 모든스크립터 복사함)
         */
        this.fn_cmmBtnClick = function(sBtn)
        {
        	switch(sBtn)
        	{
        		case "ret" :				//조회
        				this.fn_Ret();
        			break;
        		case "new" :				//신규
        				this.fn_New();
        			break;
        		case "del" :				//삭제
        				this.fn_Del();
        			break;
        		case "save" :				//저장
        				this.fn_Save();
        			break;
        		case "excel" :				//엑셀
        				this.fn_Excel();
        			break;
        		case "print" :				//출력
        				this.fn_Print();
        			break;
        		case "confirm" :			//확정
        				this.fn_Confirm();
        			break;
        		case "tmp1" :				//여분버튼1
        				this.fn_Tmp1();
        			break;
        		case "tmp2" :				//여분버튼2
        				this.fn_Tmp2();
        			break;
        		case "tmp3" :				//여분버튼3
        				this.fn_Tmp3();
        			break;
        		default :
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
        	this.dsMaster.clearData();
        	this.dsDetail.clearData();
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

        	var strSvc 		= "Ret";
        	var strUrl 		= "/prj/com/RetrieveCommCodeMasterList.do";
        	var strInDs  	= "ds_input=ds_input";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	//trace(this.dsMaster.saveXML());
        	this.gfn_clearSortAll(this.grdMaster);
        	this.gfn_getRowCount(this.staRowCnt,this.dsMaster);
        };
        /**********************************************************************
        	05-1. 조회 함수 선언
        ***********************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	this.fn_DRet();
        };

        /**
         * 기능 : 조회 전 실행
         */
        this.preDSearch = function()
        {
        	// 조회조건 셋팅
        	this.ds_input1.setColumn(0,"CMMN_CD",this.dsMaster.getColumn(this.dsMaster.rowposition,"CMMN_CD"));

        	return true;
        };

        /**
         * 기능 : 마스터 조회 실행
         */
        this.fn_DRet = function()
        {
        	if(!this.preDSearch())
        	{
        		return false;
        	}


        	var strSvc 		= "DRet";
        	var strUrl 		= "/prj/com/RetrieveCommCodeDetailList.do";
        	var strInDs  	= "ds_input1=ds_input1";
        	var strOutDs 	= "dsDetail=dsDetail";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	//trace(this.dsDetail.saveXML());
        	this.gfn_clearSortAll(this.grdDetail);
        	this.gfn_getRowCount(this.staRowCnt1,this.dsDetail);
        };

        /**********************************************************************
        	06. 추가 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreAdd = function()
        {
        	return true;
        };
        /**
         * 기능 : 마스터 추가 실행
         */
        this.fn_New = function()
        {
        	if(!this.fn_PreAdd())
        	{
        		return false;
        	}
        	var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow,"USE_YN", 		   "1"); 		//사용유무
        };

        /**
         * 기능 : 처리 후 실행
         */
        this.postAdd = function()
        {

        };
        /**********************************************************************
        	06-1.디테일 추가 함수 선언(마스터단일/디테일은 멀티처리)
        ***********************************************************************/
        /**
         * 기능 : 추가 전 실행(기본체크사항)
         */
        this.fn_PreDAdd = function()
        {
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.getRowType(this.dsMaster.rowposition) == 2)
        	{
        		this.gfn_alert("MSG00014","마스터 정보","","information");
        		return false;
        	}
        	return true;
        };

        /**
         * 기능 : 디테일 추가 실행
         */
        this.btnDAdd_onclick = function(obj,e)
        {
        	if(!this.fn_PreDAdd())
        	{
        		return false;
        	}

        	var nRow = this.dsDetail.addRow();

        	this.dsDetail.setColumn(nRow,"CMMN_CD", this.dsMaster.getColumn(this.dsMaster.rowposition,"CMMN_CD")); 	//기본키값
        	this.dsDetail.setColumn(nRow,"CHK", 	   	  "0"); 														//체크
        	this.dsDetail.setColumn(nRow,"USE_YN", 		  "1"); 														//사용유무
        };
        /**
         * 기능 : 처리 후 실행
         */
        this.postDAdd = function()
        {

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
        	if(this.dsMaster.rowcount < 1 || this.dsMaster.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("삭제할 데이타가 없습니다.!");
        		return false;
        	}

        	var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "저장","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsMaster.set_enableevent(false);
        	for(var i=this.dsMaster.rowcount-1;i>-1;i--)
        	{
        		if(this.dsMaster.getColumn(i,"CHK") == "1")
        		{
        			this.dsMaster.deleteRow(i);
        		}
        	}
        	this.dsMaster.set_enableevent(true);

        	//개별삭제시
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
        	var strSvc 		= "Del";
        	var strUrl 		= "/prj/com/DeleteCommCodeMasterList.do";
        	var strInDs  	= "dsMaster=dsMaster:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
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
        	this.fn_Ret();
        };
        this.fn_PostDDel = function()
        {
        	this.dsMaster_onrowposchanged(this.dsMaster);
        };
        /**********************************************************************
        	07-1. 디테일 삭제 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 삭제 버튼 실행
         */
        this.preDDel = function()
        {

        	//멀티삭제용도
        	if(this.dsDetail.rowcount < 1 || this.dsDetail.findRow("CHK",1) == -1)
        	{
        		this.gfn_alert("삭제할 데이타가 없습니다.!");
        		return false;
        	}

        	var result = this.gfn_confirm("현재선택행을 삭제하시겠습니까?", "저장","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}

        	//다중삭제 용도
        	this.dsDetail.set_enableevent(false);
        	for(var i=this.dsDetail.rowcount-1;i>-1;i--)
        	{
        		if(this.dsDetail.getColumn(i,"CHK") == "1")
        		{
        			this.dsDetail.deleteRow(i);
        		}
        	}
        	this.dsDetail.set_enableevent(true);

        	//개별삭제시
        	return true;
        };

        /**
         * 기능 : Row 삭제 또는 Transaction 삭제 처리
         */
        this.btnDDel_onclick = function(obj,e)
        {
        	if(!this.preDDel())
        	{
        		return false;
        	}

        	var strSvc 		= "DDel";
        	var strUrl 		= "/prj/com/DeleteCommCodeDetailList.do";
        	var strInDs  	= "dsDetail=dsDetail:u";
        	var strOutDs 	= "";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);
        };

        this.postDDel = function()
        {

        };
        /**********************************************************************
        	08. 저장 함수 선언
        ***********************************************************************/
        /**
         * 기능 : 저장 전 실행
         */
        this.fn_PreSave = function()
        {
        	if(this.dsDetail.rowcount > 0)
        	{
        		for(var i=0;i<this.dsDetail.rowcount; i++)
        		{
        			if(this.dsDetail.getColumn(i,"CHK") == 0)
        			{
        				continue;
        			}
        			this.dsDetail.setColumn(i,"CHK","0");
        		}
        	}

        	if(!this.gfn_isUpdate(this.dsMaster) && !this.gfn_isUpdate(this.dsDetail))
            {
                this.gfn_alert("변경된 이력이 없습니다.");
                return false;
            }

        	// 필수 입력사항 체크 =>grid 필수항목체크할거냐:true,일반 컴포넌트에 필수항목을 할거냐false)
        	var chkFocusFlg = true;
        	var result 		= this.gfn_cmmnChkEssentialItem(this.dsMaster, this.lvchkColidDs, this.lvchkColNameDs, this.grdMaster, chkFocusFlg, this);
        	if (result[0] != "success")
        	{
        		this.gfn_alert(result[0]);
        		this.dsMaster.set_rowposition(result[1]); //데이터셋 변경
        		return false;
        	}
         	var chkFocusFlg1 = true;
            var result1 	= this.gfn_cmmnChkEssentialItem(this.dsDetail, this.lvchkColidDs_Detail, this.lvchkColNameDs_Detail,this.grdDetail,chkFocusFlg1,this);
            if(result1[0] != "success")
        	{
        		this.gfn_alert(result1[0]);
        		this.dsDetail.set_rowposition(result1[1]); //데이터셋 변경
        		return false;
        	}

        	var result = this.gfn_confirm("저장 하시겠습니까?", "저장","", "question" );

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
        	this.dsMaster.set_enableevent(false);

        	var strSvc 		= "Save";
        	var strUrl 		= "/prj/com/SaveCommCodeMasterList.do";
        	var strInDs     = "ds_input=ds_input ";
        		strInDs    += "dsMaster=dsMaster:u ";
        	var strOutDs 	= "dsMaster=dsMaster";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);
        };

        /**
         *	기능 : 저장시 후처리
         */
        this.fn_PostSave = function()
        {
        	this.dsMaster.set_enableevent(true);
        	this.dsMaster_onrowposchanged(this.dsMaster);
        };

        this.fn_PostDSave = function()
        {
        	this.dsDetail.set_enableevent(true);
        	this.dsMaster_onrowposchanged(this.dsMaster);
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
        //마스터 다운로드

        this.fn_Excel = function()
        {
        	if(this.dsMaster.rowcount < 1)
        	{
        		this.gfn_alert("출력할 엑셀데이터가 없습니다.!", "EXCEL 정보" ,"information");
        		return false;
        	}
        	var result = this.gfn_confirm("Excel을 출력하시겠습니까?", "EXCEL 출력","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdMaster);
        };

        //디테일 다운로드
        this.btnDExcelDn_onclick = function(obj,e)
        {
        	if(this.dsDetail.rowcount < 1)
        	{
        		this.gfn_alert("출력할 엑셀데이터가 없습니다.!", "EXCEL 정보" ,"information");
        		return false;
        	}
        	var result = this.gfn_confirm("Excel을 출력하시겠습니까?", "EXCEL 출력","", "question" );
        	if(result == 0)
        	{
        	   return false;
        	}
        	this.gfn_excelExport(this.grdDetail);
        };

        /**********************************************************************
        	12. ExcelUpLoad 신규저장시
        ***********************************************************************/
        this.fn_PreExcelUp = function()
        {
        	var result = this.gfn_confirm("기존데이터를 삭제하고 신규데이터를 일괄적용하겠습니까?", "EXCEL 업로드","", "question" );

        	if(result == 0)
        	{
        	   return false;
        	}
        	//개별삭제시
        	return true;
        };

        this.btnExcelUp_onclick = function(obj,e)
        {
        	if(!this.fn_PreExcelUp())
        	{
        		return false;
        	}
        };
        /**********************************************************************
        	13. Get, Set Method
        ***********************************************************************/
        /**********************************************************************
        	14. 기타 Control Event
        ***********************************************************************/
        /**
        	공통코드 조회조건
        */
        this.divSearch_edtClassId_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
        	공통코드명 조회조건
        */
        this.divSearch_edtClassNm_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fn_Ret();
        	}
        };

        /**
         *사용여부 조회
         */
        this.divSearch_cboUserYn_onitemchanged = function(obj,e)
        {
        	this.fn_Ret();
        };

        /*
         *	그리드멀티 소트정열
         */
        this.grdMaster_onheaddblclick = function(obj, e)
        {
        	if(e.cell != 0)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        }

        /**
         *	그리드 체크박스 올체크
         */
        this.grdMaster_onheadclick = function(obj, e)
        {
        	if(e.cell == this.grdMaster.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);

        	}
        };
        /**
         *	그리드 체크박스 올체크
         */
        this.grdDetail_onheadclick = function(obj, e)
        {
        	if(e.cell == this.grdDetail.getBindCellIndex("body","CHK"))
        	{
        		this.gfn_checkAll(obj, e,true);

        	}
        };

        /**
         *	그리드멀티 소트정열
         */
        this.grdDetail_onheaddblclick = function(obj, e)
        {
        	if(e.cell !=  this.grdDetail.getBindCellIndex("body","CHK") && e.cell !=  1)
        	{
        		this.gfn_gridSort(obj,e);
        	}
        }

        /**
         *	행변경시 현제 데이타가 변경돼었는지 체크
         */
        this.dsMaster_canrowposchange = function(obj, e)
        {

        	if(obj.getRowType(e.newrow) != 2)
        	{
        		var result;

        		if(obj.rowcount < 1)
        		{
        			return true;
        		}

        		if(this.gfn_isUpdateD(obj))
        		{
        			result = this.gfn_confirm("변경이력있습니다.이동하시겠습니까?", "확인","", "question" );

        		}else
        		{
        			return true;
        		}

        		if(result == true)
        		{
        			this.gfn_reSetDs(obj,e.oldrow);

        		}else
        		{
        			return false;
        		}
        	}

        }

        this.dsDetail_cancolumnchange = function(obj, e)
        {	console.log(obj.getColumn(e.row, "CMMN_DETA_CD"));
        	if(e.columnid == "LANG_FG_CD")
        	{
        		var nRow = this.dsDetail.findRowExpr("LANG_FG_CD == '" + e.newvalue + "' && currow != '" +e.row+ "' && CMMN_DETA_CD == '" +obj.getColumn(e.row, "CMMN_DETA_CD")+"'");
        		if(nRow > -1)
        		{
        			this.gfn_alert("중복된 언어구분코드를 입력할수 없습니다.");
        			return false;
        		}else
        		{
        			if(this.dsDetail.getRowType(e.row) == 2)
        			{
        				this.dsDetail.set_enableevent(false);
        				this.dsDetail.setColumn(e.row,"LANG_FG_CD",e.newvalue);
        				this.dsDetail.set_enableevent(true);
        			}
        		}

        	}
        };

        /**
          * 닫을시 사용자가 변경유무를 체크(공통처리)
         **/
        this.fn_beforeclose = function()
        {
            return (this.gfn_isUpdate(this.dsMaster) || this.gfn_isUpdate(this.dsDetail));
        };



        this.btnMAdd_onclick = function(obj,e)
        {
        	this.fn_New();
        };

        this.btnMDel_onclick = function(obj,e)
        {
        	this.fn_Del();
        };

        this.btnMSave_onclick = function(obj,e)
        {
        	this.fn_Save();
        };

        this.btnMExcelDn_onclick = function(obj,e)
        {
        	this.fn_Excel();
        };

        this.btnPopup_onclick = function(obj,e)
        {
        	console.log(this.dsMaster.getRowType(this.dsMaster.rowposition));
        	if(this.dsMaster.getRowType(this.dsMaster.rowposition) != 1){
        		return false;
        	}
        	var objParam = {CMMN_CD:this.dsMaster.getColumn(this.dsMaster.rowposition,"CMMN_CD")};
        	var nW = 500;
        	var nH = 400;

        	var objApp = nexacro.getApplication();
        	var nLeft = (objApp.mainframe.width  / 2) - Math.round(nW / 2);
        	var nTop  = (objApp.mainframe.height / 2) - Math.round(nH / 2) ;
        	nLeft = system.clientToScreenX(this, nLeft);
        	nTop  = system.clientToScreenY(this, nTop);


        	var sOpenStyle = "dragmovetype=all"
        				 + " resizable=true"
        				 + " titletext=공통코드그룹"
        				 + " showtitlebar=true"
        				 + " showstatusbar=false";

        	nexacro.open("chf_popup3"
        			   , "com::CSYSCD0100_pop.xfdl"
        			   , this.getOwnerFrame()
        			   , objParam
        			   , sOpenStyle
        			   , nLeft
        			   , nTop
        			   , nW
        			   , nH
        			   , this);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fn_Ret();
        };

        this.btnDSave_onclick = function(obj,e)
        {
        	if(!this.fn_PreSave())
        	{
        		return false;
        	}
        	this.dsDetail.set_enableevent(false);
        	var strSvc 		= "DSave";
        	var strUrl 		= "/prj/com/SaveCommCodeDetailList.do";
        	var strInDs     = "ds_input1=ds_input1 ";
        		strInDs    += "dsDetail=dsDetail:u ";
        	var strOutDs 	= "dsDetail=dsDetail";
        	var strArg 		= "";
        	var strCallBack = "fn_callBack";    //공백일시 기본 fn_callBack
        	var strASync    = true;			   //샏략이나 공백일시에는 ASync=true,싱크시는 false로
        	this.gfn_Transaction(strSvc
        				   , strUrl
        				   , strInDs
        				   , strOutDs
        				   , strArg
        				   , strCallBack
        				   , strASync);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMaster.addEventHandler("onheaddblclick",this.grdMaster_onheaddblclick,this);
            this.grdMaster.addEventHandler("onheadclick",this.grdMaster_onheadclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.btnPopup_onclick,this);
            this.grdDetail.addEventHandler("onheadclick",this.grdDetail_onheadclick,this);
            this.grdDetail.addEventHandler("onheaddblclick",this.grdDetail_onheaddblclick,this);
            this.divSearch.form.staSubTitle04.addEventHandler("onclick",this.divSearch_staSubTitle04_onclick,this);
            this.divSearch.form.edtCmmnCdNm.addEventHandler("onkeyup",this.divSearch_edtClassNm_onkeyup,this);
            this.divSearch.form.cboUserYn.addEventHandler("onitemchanged",this.divSearch_cboUserYn_onitemchanged,this);
            this.divSearch.form.edtClassId00.addEventHandler("onkeyup",this.divSearch_edtClassId_onkeyup,this);
            this.divSearch.form.cboComUserYn.addEventHandler("onitemchanged",this.divSearch_cboUserYn_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cboCommCode.addEventHandler("onitemchanged",this.divSearch_cboUserYn_onitemchanged,this);
            this.divSearch.form.edtBfCmmnCd.addEventHandler("onkeyup",this.divSearch_edtClassNm_onkeyup,this);
            this.btnDDel.addEventHandler("onclick",this.btnDDel_onclick,this);
            this.btnDExcelDn.addEventHandler("onclick",this.btnDExcelDn_onclick,this);
            this.btnDSave.addEventHandler("onclick",this.btnDSave_onclick,this);
            this.btnDAdd.addEventHandler("onclick",this.btnDAdd_onclick,this);
            this.btnMDel.addEventHandler("onclick",this.btnMDel_onclick,this);
            this.btnMExcelDn.addEventHandler("onclick",this.btnMExcelDn_onclick,this);
            this.btnMSave.addEventHandler("onclick",this.btnMSave_onclick,this);
            this.btnMAdd.addEventHandler("onclick",this.btnMAdd_onclick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("cancolumnchange",this.dsDetail_cancolumnchange,this);
        };
        this.loadIncludeScript("CSYSCD0100.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
